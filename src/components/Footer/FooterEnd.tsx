function FooterEnd() {
	return (
		<>
			<div className='flex flex-col gap-4'>
				<h4 className='text-white cursor-pointer'>Useful Links</h4>
				<span className='hover:text-secondary cursor-pointer'>Content</span>
				<span className='hover:text-secondary cursor-pointer'>
					How it works
				</span>
				<span className='hover:text-secondary cursor-pointer'>Explore</span>
				<span className='hover:text-secondary cursor-pointer'>
					Terms & Services
				</span>
			</div>
			<div className='flex flex-col gap-4'>
				<h4 className='text-white cursor-pointer'>Community</h4>
				<span className='hover:text-secondary cursor-pointer'>Help center</span>
				<span className='hover:text-secondary cursor-pointer'>
					Partners
				</span>
				<span className='hover:text-secondary cursor-pointer'>Suggestions</span>
				<span className='hover:text-secondary cursor-pointer'>
					Blog
				</span>
			</div>
			<div className='flex flex-col gap-4'>
				<h4 className='text-white cursor-pointer'>Partner</h4>
				<span className='hover:text-secondary cursor-pointer'>Our Partner</span>
				<span className='hover:text-secondary cursor-pointer'>
					Become a Partner
				</span>
			</div>
		</>
	);
}

export default FooterEnd;
