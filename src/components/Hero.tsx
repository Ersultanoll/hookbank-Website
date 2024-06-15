import { discount } from '@/assets';
import Image from 'next/image';
import {  robot } from '@/assets';
import GetStarted from './GetStarted';

function Hero() {
	return (
		<div className='text-white box-width padding-y'>
			<div className='flex lg:flex-row flex-col gap-y-16'>
				<div className='flex-1 padding-x xl:px-0 items-center'>
					<div className='flex flex-wrap rounded-lg w-fit pl-4 pr-2 py-2 items-center gap-1 bg-discount-gradient text-[18px]'>
						<Image src={discount} alt='#' className='mr-1' />
						<span>20%</span>
						<span className='text-dimWhite'>Discount</span>
						<span>1 month</span>
						<span className='text-dimWhite'>Account</span>
					</div>
					<div className='flex items-center justify-between'>
						<h2 className='text-[52px] sm:text-[72px] sm:leading-[100.8px] font-bold'>
							The Next <br className='sm:block hidden' />{' '}
							<span className='text-gradient'>Generation</span>
						</h2>

						<GetStarted />
					</div>
					<h2 className='text-[52px] sm:text-[72px] sm:leading-[100.8px] font-bold'>
						Payment Method
					</h2>
					<div className='max-w-[470px] mt-5 text-dimWhite font-poppins text-[18px] leading-[30px]'>
						Our team of experts uses a methodology to identify the credit
						cards most likely to fit your needs. We examine annual
						percentage rates, annual fees.
					</div>
				</div>
				<div className='flex-1 relative z-10'>
					<Image src={robot} alt='#' className='w-full h-full' />
					{/* gradient start */}
					<div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
					<div className='absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40' />
					<div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
					{/* gradient end */}
				</div>
			</div>
		</div>
	);
}

export default Hero;
