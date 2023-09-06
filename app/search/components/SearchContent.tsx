'use client'

import React from 'react'
import LikeButton from '~/components/LikeButton'
import MediaItem from '~/components/MediaItem'
import { Song } from '~/types'
interface SearchContentProps {
  songs: Song[]
}

export default function SearchContent({ songs }: SearchContentProps) {
  if (songs.length === 0) {
    return (
      <div className='flex w-full flex-col gap-y-2 px-6 text-neutral-400'>
        No songs found
      </div>
    )
  }

  return (
    <div className='felx-col flex w-full gap-y-2 px-6'>
      {songs.map((song) => (
        <div key={song.id} className='flex w-full items-center gap-x-4'>
          <div className='flex-1'>
            <MediaItem onClick={() => {}} data={song} />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  )
}
