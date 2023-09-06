import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { Song } from '~/types'
import { cookies } from 'next/headers'

const getLikeSongs = async (): Promise<Song[]> => {
  const supabase = createServerActionClient({
    cookies: cookies,
  })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const { data, error } = await supabase
    .from('liked_songs')
    .select('*, songs(*)')
    .eq('user_id', session?.user?.id)
    .order('created_at', { ascending: false })

  if (error) {
    console.log(error)
    return []
  }

  if (!data) {
    return []
  }

  return data.map((item) => ({
    ...item.songs,
  }))
}

export default getLikeSongs
