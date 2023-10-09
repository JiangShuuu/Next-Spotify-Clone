'use client'

import Box from '~/components/Box'
import { AiOutlineLoading } from 'react-icons/ai'
export default function loading() {
  return (
    <Box className='flex h-full items-center justify-center'>
      <div className='animate-spin'>
        <AiOutlineLoading size={40} color='#22c55e' />
      </div>
    </Box>
  )
}
