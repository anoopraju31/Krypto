import Link from 'next/link'
import CurrencyCard from '../components/CurrencyCard'
import { TopCrypto, TopNews } from './sections'

export default async function Home() {
	return (
		<main className='w-full min-h-screen pt-20 bg-slate-800 text-white'>
			{/* Greeting */}
			{/* Overall Market Stats */}
			{/* Trending/Top Crypto Currencies */}
			<TopCrypto />

			{/* Latest Crypto News */}
			<TopNews />
		</main>
	)
}
