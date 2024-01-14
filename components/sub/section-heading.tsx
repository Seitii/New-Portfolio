import React, { Children } from 'react'

type SectionHeadingProps = {children: React.ReactNode};

export default function SectionHeading({
children}: SectionHeadingProps)
{
    return (
        <h2 className='text-[30px] text-white font-medium text-center mb-[15px]'>{children}</h2>
  )
}
