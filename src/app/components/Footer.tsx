import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'

const Footer = () => {
	return (
		<footer className='w-full bg-white dark:bg-gray-900'>
			<div className='mx-auto px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24'>
				<div className='border-t border-gray-100 pt-8 dark:border-gray-800 sm:flex sm:items-center sm:justify-between'>
					<ul className='flex flex-wrap justify-center gap-4 text-xs lg:justify-end'>
						<li>
							<a
								href='#'
								className='text-gray-500 transition hover:opacity-75 dark:text-gray-400'>
								Terms & Conditions
							</a>
						</li>

						<li>
							<a
								href='#'
								className='text-gray-500 transition hover:opacity-75 dark:text-gray-400'>
								Privacy Policy
							</a>
						</li>

						<li>
							<a
								href='#'
								className='text-gray-500 transition hover:opacity-75 dark:text-gray-400'>
								Cookies
							</a>
						</li>
					</ul>

					<ul className='mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end'>
						<li>
							<a
								href='/'
								rel='noreferrer'
								target='_blank'
								className='text-gray-700 transition hover:opacity-75 dark:text-gray-200'>
								<span className='sr-only'>Facebook</span>

								<BsFacebook size={20} />
							</a>
						</li>

						<li>
							<a
								href='/'
								rel='noreferrer'
								target='_blank'
								className='text-gray-700 transition hover:opacity-75 dark:text-gray-200'>
								<span className='sr-only'>Instagram</span>

								<BsInstagram size={20} />
							</a>
						</li>

						<li>
							<a
								href='/'
								rel='noreferrer'
								target='_blank'
								className='text-gray-700 transition hover:opacity-75 dark:text-gray-200'>
								<span className='sr-only'>Twitter</span>

								<BsTwitter size={20} />
							</a>
						</li>

						<li>
							<a
								href='/'
								rel='noreferrer'
								target='_blank'
								className='text-gray-700 transition hover:opacity-75 dark:text-gray-200'>
								<span className='sr-only'>GitHub</span>

								<BsGithub size={20} />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}

export default Footer
