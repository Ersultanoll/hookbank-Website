import { apple, bill, google } from "@/assets";
import Image from "next/image";

function Paycard() {
  return (
		<div className='my-12'>
			<div className='box-width padding-x text-white'>
				<div className='flex flex-col-reverse md:flex-row items-center'>
					<div className='flex-1 relative md:mr-10 mt-10 md:mt-0'>
						<Image src={bill} alt='#' className='w-full h-full' />
						{/* gradient start */}
						<div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
						<div className='absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient' />
						{/* gradient end */}
					</div>
					<div className='flex-1 flex flex-col gap-8'>
						<h2 className='text-5xl leading-[60px] font-bold'>
							Easily control your billing & invoicing
						</h2>
						<span className='text-[18px] text-dimWhite'>
							Elit enim sed massa etiam. Mauris eu adipiscing ultrices
							ametodio aenean neque. Fusce ipsum orci rhoncus
							aliporttitor integer platea placerat.
						</span>
						<div className='flex gap-3'>
							<Image className='cursor-pointer' src={apple} alt='#' />
							<Image className='cursor-pointer' src={google} alt='#' />
						</div>
					</div>
				</div>
			</div>
		</div>
  );
}

export default Paycard