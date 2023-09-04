import React from 'react'
import NewsCard from '../components/NewsCard'

const NewsPage = () => {
	return (
		<main className='w-full min-h-screen py-20 px-6 bg-slate-800 text-white'>
			{/* Header Container */}
			<div>
				{/* Search */}
				{/* Filter */}
				{/* Sort */}
			</div>

			{/* News Cards */}
			<section className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
			</section>
		</main>
	)
}

export default NewsPage
