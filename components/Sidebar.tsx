'use client'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import Box from './Box'
import SidebarItem from './SidebarItem'
import Library from './Library'
import { Song } from '~/types'
import usePlayer from '~/hooks/usePlayer'
import { twMerge } from 'tailwind-merge'

interface SidebarProps {
  children: React.ReactNode
  songs: Song[]
}

export default function Sidebar({ children, songs }: SidebarProps) {
  const pathname = usePathname()
  const player = usePlayer()

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: 'Home',
        active: pathname !== '/search',
        href: '/',
      },
      {
        icon: BiSearch,
        label: 'Search',
        active: pathname === '/search',
        href: '/search',
      },
    ],
    [pathname]
  )

  return (
    <div
      className={twMerge(
        `flex h-full`,
        player.activeId && 'h-[calc(100%-80px)]'
      )}
    >
      <div className='hidden h-full w-[300px] flex-col gap-y-2 bg-black p-2 md:flex'>
        <Box>
          <div className='flex flex-col px-5 py-4 gap-y-4'>
            {routes.map((item) => {
              return <SidebarItem key={item.label} {...item} />
            })}
          </div>
        </Box>
        <Box className='h-full overflow-y-auto'>
          <Library songs={songs} />
        </Box>
      </div>
      <main className='flex-1 h-full py-2 overflow-y-auto'>{children}</main>
    </div>
  )
}
