import logo from '@/assets/logo.svg'
import Image from 'next/image'
import Link from 'next/link';
import NavLink from './NavLink';

function Navbar() {
  return (
		<nav className='padding-x xl:px-0 z-50 bg-primary box-width text-white py-6 sticky left-0 top-0'>
			<div className='flex justify-between items-center'>
				<div>
					<Image src={logo} alt='#' className='w-[124px] h-[32px]'/>
				</div>
				<NavLink/>
			</div>
		</nav>
  );
}

export default Navbar