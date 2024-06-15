'use client'

import { send, shield, star } from "@/assets";
import Image from "next/image";
import { useEffect } from "react";

function Business() {
  return (
		<div className=' text-white padding-x box-width'>
			<div className='mt-28 flex gap-4 lg:flex-row flex-col'>
				<div className='flex-1 flex flex-col gap-5'>
					<div className='font-bold leading-[80px] text-5xl'>
						You do the business we'll handle the money
					</div>
					<div className='text-[24px] text-dimWhite'>
						With the right credit card, you can improve your financial
						life by building credit, earning rewards and saving money. But
						with hundreds of credit cards on the market.
					</div>
					<div>
						<button className='bg-blue-gradient py-4 px-8 text-primary rounded-xl'>
							Get Started
						</button>
					</div>
				</div>
				<div className='flex-1'>
					<ul className='flex flex-col gap-4'>
						<li className='flex lg:pl-4 py-2  feature-card rounded-lg items-center gap-4'>
							<div>
								<Image src={star} alt='#' />
							</div>
							<div>
								<h2>Rewards</h2>
								<div>
									The best credit cards offer some tantalizing
									combinations of promotions and prizes
								</div>
							</div>
						</li>
						<li className='flex lg:pl-4 py-2  feature-card rounded-lg items-center gap-4'>
							<div>
								<Image src={shield} alt='#' />
							</div>
							<div>
								<h2>100% Secures</h2>
								<div>
									We take proactive steps make sure your information
									and transactions are secure.
								</div>
							</div>
						</li>
						<li className='flex lg:pl-4 py-2  feature-card rounded-lg items-center gap-4'>
							<div>
								<Image src={send} alt='#' />
							</div>
							<div>
								<h2>Balance transfer</h2>
								<div>
									The best credit cards offer some tantalizing
									combinations of promotions and prizes
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
  );
}

export default Business