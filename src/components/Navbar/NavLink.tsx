'use client';
import { close, menu } from '@/assets';
import { navLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavLink({ classes }: any) {
	const [active, setActive] = useState('Home');
	const [isMenu, setIsMenu] = useState(false);

	const changeMenu = () => {
		setIsMenu(menu => !menu);
	};

	return (
		<>
			<div className='relative sm:hidden'>
				{!isMenu ? (
					<Image
						onClick={changeMenu}
						src={menu}
						alt='#'
						className='w-[28px] h-[28px] cursor-pointer'
					/>
				) : (
					<Image
						onClick={changeMenu}
						src={close}
						alt='#'
						className='w-[28px] h-[28px] cursor-pointer'
					/>
				)}

				<ul
					className={`absolute sidebar right-0 top-20 p-6 bg-black-gradient  flex-col gap-5 min-w-[140px] rounded-xl ${
						isMenu ? 'flex' : 'hidden'
					}`}
				>
					{navLinks.map(link => (
						<li
							onClick={() => {
								setActive(link.title);
							}}
						>
							<Link
								className={`${
									active === link.title
										? 'text-white'
										: 'text-dimWhite'
								}`}
								key={link.id}
								href={`#${link.id}`}
							>
								{link.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div className={`${classes} sm:flex gap-8 hidden`}>
				{navLinks.map(link => {
					return (
						<Link
							onClick={() => {
								setActive(link.title);
							}}
							className={`${
								active === link.title ? 'text-white' : 'text-dimWhite'
							}`}
							key={link.id}
							href={`#${link.id}`}
						>
							{link.title}
						</Link>
					);
				})}
			</div>
		</>
	);
}

export default NavLink;
