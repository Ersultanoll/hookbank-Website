import { airbnb, binance, coinbase, dropbox } from "@/assets";
import Image from "next/image";

function Companies() {
  return (
		<div className='text-white mt-20 mb-10'>
			<div className='box-width padding-x'>
				<div className='flex items-center flex-wrap justify-between'>
					<div className='m-5'>
						<Image
							src={airbnb}
							className='sm:w-[192px] w-[100px] object-contain'
							alt='#'
						/>
					</div>
					<div className='m-5'>
						<Image
							src={binance}
							className='sm:w-[192px] w-[100px] object-contain'
							alt='#'
						/>
					</div>
					<div className='m-5'>
						<Image
							src={coinbase}
							className='sm:w-[192px] w-[100px] object-contain'
							alt='#'
						/>
					</div>
					<div className='m-5'>
						<Image
							src={dropbox}
							className='sm:w-[192px] w-[100px] object-contain'
							alt='#'
						/>
					</div>
				</div>
			</div>
		</div>
  );
}

export default Companies