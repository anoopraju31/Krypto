import Link from 'next/link'
import CurrencyCard from '../components/CurrencyCard'

export default function Home() {
	return (
		<main className='w-full min-h-screen pt-10 bg-slate-700 text-white'>
			{/* Greeting */}
			{/* Overall Market Stats */}
			{/* Trending/Top Crypto Currencies */}
			<section className='px-6'>
				<div className='w-full mb-6 flex justify-between items-center'>
					<h2 className='font-bold text-3xl'> Trending Crypto Currencies </h2>
					<div>
						<Link href='/crypto-currencies'> See More </Link>
					</div>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
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
			{/* Latest Crypto News */}
		</main>
	)
}
