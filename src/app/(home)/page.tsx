import Link from 'next/link'
import CurrencyCard from '../components/CurrencyCard'

export default function Home() {
	return (
		<main className='w-full min-h-screen pt-10 bg-slate-800 text-white'>
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

				<div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
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
			{/* Latest Crypto News */}
		</main>
	)
}
