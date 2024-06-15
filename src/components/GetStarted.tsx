import { arrowUp } from '@/assets';
import Image from 'next/image';
import React from 'react'

function GetStarted() {
  return (
		<div className='w-[140px] hidden sm:block h-[140px] bg-blue-gradient rounded-full p-[2px] cursor-pointer'>
			<div className='w-full h-full bg-primary rounded-full flex items-center justify-center'>
				<h2 className='text-gradient'>
					<span className='flex items-center'>
						Get <Image src={arrowUp} alt='#' />
					</span>{' '}
					<span>started</span>
				</h2>
			</div>
		</div>
  );
}

export default GetStarted