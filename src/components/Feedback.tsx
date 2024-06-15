import { people01, people02, people03, quotes } from "@/assets";
import Image from "next/image";

function Feedback() {
  return (
		<div className='box-width padding-x'>
			<div className='flex gap-6 flex-wrap text-white'>
				<div className='max-w-[370px] p-10 rounded-xl feature-card flex flex-col  justify-between'>
					<div>
						<Image src={quotes} alt='#' />
					</div>
					<p className='text-xl font-semibold my-10'>
						Money is only a tool. It will take you wherever you wish, but
						it will not replace you as the driver.
					</p>
					<div className='flex items-center gap-3 '>
						<div>
							<Image src={people01} alt='#' className='w-[50px]' />
						</div>
						<div className='flex flex-col'>
							<span className='font-semibold text-lg'>
								Herman Jensen
							</span>
							<span className='text-[16px] text-dimWhite'>
								Founder & Leader
							</span>
						</div>
					</div>
				</div>
				<div className='max-w-[370px] p-10 rounded-xl feature-card flex flex-col  justify-between'>
					<div>
						<Image src={quotes} alt='#' />
					</div>
					<p className='text-xl font-semibold my-10'>
						Money makes your life easier. If you're lucky to have it,
						you're lucky.
					</p>
					<div className='flex items-center gap-3 '>
						<div>
							<Image src={people02} alt='#' className='w-[50px]' />
						</div>
						<div className='flex flex-col'>
							<span className='font-semibold text-lg'>Steve Mark</span>
							<span className='text-[16px] text-dimWhite'>
								Founder & Leader
							</span>
						</div>
					</div>
				</div>
				<div className='max-w-[370px] p-10 rounded-xl feature-card flex flex-col  justify-between'>
					<div>
						<Image src={quotes} alt='#' />
					</div>
					<p className='text-xl font-semibold my-10'>
						It is usually people in the money business, finance, and
						international trade that are really rich.
					</p>
					<div className='flex items-center gap-3 '>
						<div>
							<Image src={people03} alt='#' className='w-[50px]' />
						</div>
						<div className='flex flex-col'>
							<span className='font-semibold text-lg'>
								Kenn Gallagher
							</span>
							<span className='text-[16px] text-dimWhite'>
								Founder & Leader
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
}

export default Feedback