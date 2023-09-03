import React from 'react'

const CurrencyCard = () => {
	return (
		<div className='aspect-square rounded-lg hover:shadow-2xl'>
			<div role='status' className='max-w-sm p-4 rounded animate-pulse md:p-6'>
				<div className='flex items-center mb-4 space-x-3 '>
					<div className='w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700'></div>
					<div className='w-full flex-1'>
						<div className='w-3/4 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-2'></div>
						<div className='w-2/4 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
					</div>
				</div>

				<div className='flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700'></div>

				<div className='w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
				<span className='sr-only'>Loading...</span>
			</div>
		</div>
	)
}

export default CurrencyCard
