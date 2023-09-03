'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, ReactElement, ReactNode, useEffect, useState } from 'react'
import { BiHomeAlt2, BiNews, BiSolidBriefcase } from 'react-icons/bi'
import { BsCurrencyBitcoin, BsFillBookmarkStarFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IconType } from 'react-icons'
type NavLinkProps = {
	title: string
	link: string
	icon: IconType
	isExpanded: boolean
}

const NavLink = ({ title, link, icon, isExpanded }: NavLinkProps) => {
	const pathname = usePathname()
	const Icon = icon
	return (
		<li
			className={`${
				pathname === link ? 'bg-gray-700' : 'bg-transparent'
			} hover:bg-gray-700 ${
				isExpanded
					? 'py-2 px-4 rounded-lg'
					: 'w-9 h-9 mx-2 rounded-full flex justify-center items-center'
			} transition-colors duration-500`}>
			<Link
				href={link}
				className={`${isExpanded && 'w-full h-full flex gap-2 items-center'}`}>
				<Icon />
				{isExpanded && <span>{title}</span>}
			</Link>
		</li>
	)
}

const SideNavbar = () => {
	const [isExpanded, setIsExpanded] = useState<boolean>(true)
	const pathname = usePathname()

	useEffect(() => {
		const collaspeNavbar = () => {
			if (typeof window !== 'undefined' && window.innerWidth < 768) {
				setIsExpanded(false)
			}
		}

		window.addEventListener('resize', collaspeNavbar)

		return () => {
			window.removeEventListener('resize', collaspeNavbar)
		}
	}, [])

	useEffect(() => {
		if (typeof window !== 'undefined' && window.innerWidth < 768) {
			setIsExpanded(false)
		}
	}, [pathname])
	return (
		<header
			className={`${
				isExpanded
					? 'w-0 md:w-1/5 md:min-w-[300px] md:max-w-[300px]'
					: 'md:w-[53.625px] px-0'
			} min-h-screen h-auto`}>
			<div
				className={`fixed top-0 z-50 ${
					isExpanded
						? 'w-full sm:w-1/5 sm:min-w-[300px] sm:max-w-[300px] left-0'
						: 'w-auto px-0 -left-full md:left-0'
				} h-full p-4 text-white bg-gray-900 flex flex-col`}>
				<div className='mb-6'>
					<h2 className='text-3xl px-2 text-center uppercase font-text font-extrabold'>
						<Link href='/'>
							{' '}
							{isExpanded ? (
								<span> Krypto </span>
							) : (
								<span className='w-9 h-9 inline-flex justify-center items-center rounded-full border leading-none text-xl'>
									K
								</span>
							)}{' '}
						</Link>
					</h2>
				</div>

				<nav className='flex-1'>
					<ul className='flex flex-col gap-3 font-text'>
						<NavLink
							title='Home'
							link='/'
							isExpanded={isExpanded}
							icon={BiHomeAlt2}
						/>
						<NavLink
							title='News'
							link='/news'
							isExpanded={isExpanded}
							icon={BiNews}
						/>
						<NavLink
							title='Currencies'
							link='/crypto-currencies'
							isExpanded={isExpanded}
							icon={BsCurrencyBitcoin}
						/>
						<NavLink
							title='Portfolio'
							link='/portfolio'
							isExpanded={isExpanded}
							icon={BiSolidBriefcase}
						/>
						<NavLink
							title='Watchlist'
							link='/watchlist'
							isExpanded={isExpanded}
							icon={BsFillBookmarkStarFill}
						/>
					</ul>
				</nav>

				<div className='pt-2 flex gap-3 justify-center items-center border-t border-t-slate-700'>
					<div className='relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600'>
						<svg
							className='absolute w-[38.4px] h-[38.4px] text-gray-400 -left-1'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fillRule='evenodd'
								d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
								clipRule='evenodd'></path>
						</svg>
					</div>

					<div
						className={`font-text tracking-tight ${
							isExpanded ? 'flex-1' : 'hidden'
						}`}>
						<h4 className='text-sm'> Anoop Raju </h4>
						<p className='text-xs'> anoopraju31@gmail.com</p>
					</div>
				</div>

				<div
					className='fixed top-4 right-4 z-50 bg-gray-900 p-2 rounded-full flex justify-center'
					onClick={() => setIsExpanded((prev) => !prev)}>
					<button className='text-xl leading-none'>
						<GiHamburgerMenu />
					</button>
				</div>
			</div>
		</header>
	)
}

export default SideNavbar
