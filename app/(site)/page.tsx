import Header from '~/components/Header'
import ListItem from '~/components/ListItem'
import PageContent from './component/PageContent'
import getSongs from '~/actions/getSongs'

export const revalidate = 0

export default async function Home() {
  const songs = await getSongs()
  console.log('get', songs)
  return (
    <div className='h-full w-full overflow-hidden overflow-y-auto rounded-lg bg-neutral-900'>
      <Header>
        <div className='mb-2'>
          <h1 className='text-3xl font-semibold text-white'>Welcome back</h1>
          <div className='sm:frid-cols-2 mt-4 grid grid-cols-1 gap-3 xl:grid-cols-3 2xl:grid-cols-4'>
            <ListItem
              name='Liked Songs'
              href='liked'
              image='/images/liked.png'
            />
          </div>
        </div>
      </Header>
      <div className='mb-7 mt-2 px-6'>
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-semibold text-white'>Newest songs</h1>
        </div>
        <PageContent songs={songs} />
      </div>
    </div>
  )
}
