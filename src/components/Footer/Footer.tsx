import { logo } from "@/assets"
import Image from "next/image"
import FooterEnd from "./FooterEnd";

function Footer() {
  return (
		<div className='box-width padding-x text-dimWhite'>
			<div className='flex justify-between flex-wrap gap-y-6 gap-x-4'>
				<div className='w-full lg:w-1/3'>
					<Image src={logo} alt='#' />
					<div className="text-[18px] mt-3">
						A new way to make the payments <br /> easy, reliable and
						secure.
					</div>
				</div>
				<FooterEnd/>
			</div>
		</div>
  );
}

export default Footer