import { card } from "@/assets";
import Image from "next/image";

function Better() {
  return (
		<div className='my-12'>
			<div className='box-width padding-x text-white'>
				<div className='flex items-center md:flex-row flex-col'>
					<div className='flex-1 md:mr-10 flex flex-col gap-5'>
						<h2 className='text-5xl'>
							Find a better card deal in few easy steps.
						</h2>
						<p className="text-[18px] text-dimWhite">
							Arcu tortor, purus in mattis at sed integer faucibus.
							Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices
							ac, ametau.
						</p>
            <div>
              <button className="py-4 px-8 rounded-xl text-primary bg-blue-gradient">Get started</button>
            </div>
					</div>
					<div className='flex-1 mt-12 md:mt-0'>
            <Image src={card} alt="#" className="w-full h-full"/>
          </div>
				</div>
			</div>
		</div>
  );
}

export default Better