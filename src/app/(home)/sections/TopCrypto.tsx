import CurrencyCard from '@/app/components/CurrencyCard'
import Link from 'next/link'
import React from 'react'

const TopCrypto = () => {
	return (
		<section className='px-6'>
			<div className='w-full mb-6 flex justify-between items-center'>
				<h2 className='font-bold text-3xl'> Trending Crypto Currencies </h2>
				<div>
					<Link href='/crypto-currencies'> See More </Link>
				</div>
			</div>

			<div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
				<CurrencyCard />
				<CurrencyCard />
				<CurrencyCard />
				<CurrencyCard />
				<CurrencyCard />
				<CurrencyCard />
				<CurrencyCard />
				<CurrencyCard />
				<CurrencyCard />
				<CurrencyCard />
			</div>
		</section>
	)
}

export default TopCrypto
