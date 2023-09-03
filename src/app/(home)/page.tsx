import Link from 'next/link'

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

				<div className=''></div>
			</section>
			{/* Latest Crypto News */}
		</main>
	)
}
