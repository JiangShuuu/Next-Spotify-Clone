'use client'

import React from 'react'
import { TbPlaylist } from 'react-icons/tb'
import { AiOutlinePlus } from 'react-icons/ai'
import useAuthModal from '~/hooks/useAuthModal'
import { useUser } from '~/hooks/useUser'
import useUploadModal from '~/hooks/useUploadModal'
import { Song } from '~/types'
import MediaItem from './MediaItem'
import useOnPlay from '~/hooks/useOnPlay'
import useSubscribeModal from '~/hooks/useSubscribeModal'

interface LibraryProps {
  songs: Song[]
}

export default function Library({ songs }: LibraryProps) {
  const authModal = useAuthModal()
  const uploadModal = useUploadModal()
  const subscribeModal = useSubscribeModal()
  const { user, subscription } = useUser()
  const onClick = () => {
    if (!user) {
      return authModal.onOpen()
    }

    if (!subscription) {
      return subscribeModal.onOpen()
    }
    // TODO: Check for subscription
    return uploadModal.onOpen()
  }
  const onPlay = useOnPlay(songs)

  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-between px-5 pt-4'>
        <div className='inline-flex items-center gap-x-2'>
          <TbPlaylist size={26} className='text-neutral-400' />
          <p className='text-md font-medium text-neutral-400'>Your Library</p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={20}
          className='cursor-pointer text-neutral-400 transition hover:text-white'
        />
      </div>
      <div className='mt-4 flex flex-col gap-y-2 px-3'>
        {songs.map((item) => (
          <MediaItem
            onClick={(id: string) => onPlay(id)}
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </div>
  )
}
