'use client'

import * as RadixSlider from '@radix-ui/react-slider'
import { useState } from 'react'
import usePlayer from '~/hooks/usePlayer'
interface SliderProps {
  value?: number
  onChange?: (value: number) => void
}

export default function Slider({ value = 1, onChange }: SliderProps) {
  const handleChange = (newValue: number[]) => {
    onChange?.(newValue[0])
  }

  return (
    <RadixSlider.Root
      className='relative flex items-center w-full h-10 select-none touch-none'
      defaultValue={[1]}
      value={[value]}
      max={1}
      step={0.1}
      aria-label='Volume'
      onValueChange={handleChange}
    >
      <RadixSlider.Track className='relative h-[3px] grow rounded-full bg-neutral-600'>
        <RadixSlider.Range className='absolute h-full bg-white rounded-full' />
      </RadixSlider.Track>
    </RadixSlider.Root>
  )
}
