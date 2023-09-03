import Link from 'next/link'
import React from 'react'
import { BiHomeAlt2, BiNews, BiSolidBriefcase } from 'react-icons/bi'
import { BsCurrencyBitcoin, BsFillBookmarkStarFill } from 'react-icons/bs'

const SideNavbar = () => {
	return (
		<header className='fixed top-0 left-0 w-1/5 min-w-[300px] max-w-sm h-full p-4 text-white bg-slate-950 flex flex-col'>
			<div className='mb-6'>
				<h2 className='text-3xl text-center uppercase font-text font-extrabold'>
					<Link href='/'> Krypto </Link>
				</h2>
			</div>

			<nav className='flex-1'>
				<ul className='flex flex-col gap-2 font-text'>
					<li className='py-2 px-4 text-lg bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors duration-500'>
						<Link href='/' className='w-full flex gap-2 items-center'>
							<BiHomeAlt2 /> Home
						</Link>
					</li>
					<li className='py-2 px-4 text-lg rounded-lg hover:bg-gray-700 transition-colors duration-500'>
						<Link href='news' className='w-full flex gap-2 items-center'>
							<BiNews /> News
						</Link>
					</li>
					<li className='py-2 px-4 text-lg rounded-lg hover:bg-gray-700 transition-colors duration-500'>
						<Link
							href='/crypto-currencies'
							className='w-full flex gap-2 items-center'>
							<BsCurrencyBitcoin />
							Currencies
						</Link>
					</li>
					<li className='py-2 px-4 text-lg rounded-lg hover:bg-gray-700 transition-colors duration-500'>
						<Link href='/portfolio' className='w-full flex gap-2 items-center'>
							<BiSolidBriefcase />
							Portfolio
						</Link>
					</li>
					<li className='py-2 px-4 text-lg rounded-lg hover:bg-gray-700 transition-colors duration-500'>
						<Link href='/watchlist' className='w-full flex gap-2 items-center'>
							<BsFillBookmarkStarFill />
							Watchlist
						</Link>
					</li>
				</ul>
			</nav>

			<div className='pt-2 flex gap-3 items-center border-t border-t-slate-700'>
				<div className='relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600'>
					<svg
						className='absolute w-12 h-12 text-gray-400 -left-1'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							fill-rule='evenodd'
							d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
							clip-rule='evenodd'></path>
					</svg>
				</div>
				<div className='font-text tracking-tighter'>
					<h4 className='text-sm'> Anoop Raju </h4>
					<p className='text-xs'> anoopraju31@gmail.com</p>
				</div>
			</div>
		</header>
	)
}

export default SideNavbar
