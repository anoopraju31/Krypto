import NewsCard from '@/app/components/NewsCard'
import Link from 'next/link'
import React from 'react'

const TopNews = () => {
	return (
		<section className='my-16 px-6'>
			<div className='w-full mb-6 flex justify-between items-center'>
				<h2 className='font-bold text-3xl'> Trending Crypto Currencies </h2>
				<div>
					<Link href='/news'> See More </Link>
				</div>
			</div>

			{/* News Cards */}
			<div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
			</div>
		</section>
	)
}

export default TopNews
