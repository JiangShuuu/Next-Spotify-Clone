'use client'
import { useRouter } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import React from 'react'
import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

import useAuthModal from '~/hooks/useAuthModal'
import Button from './Button'
import { useUser } from '~/hooks/useUser'
import { FaUserAlt } from 'react-icons/fa'
import { toast } from 'react-hot-toast'

interface HeaderProps {
  children: React.ReactNode
  className?: string
}

export default function Header({ children, className }: HeaderProps) {
  const authModal = useAuthModal()
  const router = useRouter()
  const supabaseClient = useSupabaseClient()
  const { user } = useUser()

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut()
    // TODO: Reset any playing songs
    router.refresh()

    if (error) {
      toast.error(error.message)
      console.log(error)
    } else {
      toast.success('Logged out!')
    }
  }

  return (
    <div
      className={twMerge(
        `h-fit bg-gradient-to-b from-emerald-800 p-6 `,
        className
      )}
    >
      <div className='w-fill mb-4 flex items-center justify-between'>
        <div className='hidden items-center gap-x-2 md:flex'>
          <button
            onClick={() => router.back()}
            className='flex items-center justify-center rounded-full bg-black transition hover:opacity-75'
          >
            <RxCaretLeft className='text-white' size={35} />
          </button>
          <button
            onClick={() => router.forward()}
            className='flex items-center justify-center rounded-full bg-black transition hover:opacity-75'
          >
            <RxCaretRight className='text-white' size={35} />
          </button>
        </div>
        <div className='flex items-center gap-x-2 md:hidden'>
          <button className='flex items-center justify-center rounded-full bg-white p-2 transition hover:opacity-75'>
            <HiHome className='text-black' size={20} />
          </button>
          <button className='flex items-center justify-center rounded-full bg-white p-2 transition hover:opacity-75'>
            <BiSearch className='text-black' size={20} />
          </button>
        </div>
        <div className='flex items-center justify-between gap-x-4'>
          {user ? (
            <div className='flex items-center gap-x-4'>
              <Button onClick={handleLogout} className='bg-white px-6 py-2'>
                Logout
              </Button>
              <Button
                onClick={() => router.push('/account')}
                className='bg-white '
              >
                <FaUserAlt />
              </Button>
            </div>
          ) : (
            <>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className='bg-transparent font-medium text-neutral-300'
                >
                  SignUp
                </Button>
              </div>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className='bg-white px-6 py-2 '
                >
                  Log in
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  )
}
