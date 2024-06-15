function Users() {
  return (
		<ul className='text-white box-width padding-x flex justify-between flex-wrap'>
			<li className='flex flex-1 m-3 items-center gap-2'>
				<span className='text-4xl'>3800+</span>
				<span className='uppercase text-lg text-gradient text-nowrap'>
					User active
				</span>
			</li>
			<li className='flex flex-1 m-3 items-center gap-2'>
				<span className='text-4xl'>3800+</span>
				<span className='uppercase text-lg text-gradient'>
					Trusted by company
				</span>
			</li>
			<li className='flex flex-1 m-3 items-center gap-2'>
				<span className='text-4xl'>3800+</span>
				<span className='uppercase text-lg text-gradient'>Transaction</span>
			</li>
		</ul>
  );
}

export default Users