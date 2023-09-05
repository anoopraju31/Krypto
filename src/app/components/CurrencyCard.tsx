'use client'
import React, { useEffect, useState } from 'react'
import { HistoryType } from '../api/crypto/price-history/route'
import { Line, LineChart, ResponsiveContainer, YAxis } from 'recharts'
import Image from 'next/image'

const CurrencyCard = () => {
	const [data, setData] = useState<any[] | null>(null)
	const [minValue, setMinValue] = useState<number>(0)
	const [maxValue, setMaxValue] = useState<number>(0)
	const [changeRate, setChangeRate] = useState<number>(0)

	useEffect(() => {
		const interval = setInterval(() => {
			fetch('http://localhost:3000/api/crypto/price-history')
				.then((response) => response.json())
				.then((result) => {
					setData(result.data)
					let price = result.data.map((token: HistoryType) => token.price)
					setMinValue(Math.min(price))
					setMaxValue(Math.max(price))
					setChangeRate(
						((price[0] - price[price.length - 1]) / price[price.length - 1]) *
							100,
					)
				})
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	if (!data)
		return (
			<div className='rounded-lg'>
				<div
					role='status'
					className='max-w-sm p-4 rounded animate-pulse md:p-6'>
					<div className='flex items-center mb-4 space-x-3 '>
						<div className='w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700'></div>
						<div className='w-full flex-1'>
							<div className='w-3/4 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-2'></div>
							<div className='w-2/4 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
						</div>
					</div>

					<div className='flex items-center justify-center w-full aspect-[16/9] mb-4 bg-gray-300 rounded dark:bg-gray-700'></div>

					<div className='w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
					<span className='sr-only'>Loading...</span>
				</div>
			</div>
		)

	return (
		<div className='p-4 rounded-lg hover:shadow-cover'>
			<div className='pb-4 flex justify-between items-end'>
				<div className=''>
					<h4> Bitcoin </h4>
					<p> BTC </p>
				</div>
				<div className=''>
					<p
						className={`${changeRate < 0 ? 'text-red-500' : 'text-green-500'}`}>
						{' '}
						{changeRate.toFixed(3)}{' '}
					</p>
				</div>
			</div>

			<ResponsiveContainer width='100%' height={100}>
				<LineChart data={data}>
					<Line
						type='monotone'
						dataKey={'price'}
						stroke={changeRate < 0 ? 'rgb(239 68 68)' : 'rgb(34 197 94)'}
						strokeWidth={2}
						dot={false}
					/>
					<YAxis type='number' domain={[minValue, maxValue]} hide></YAxis>
				</LineChart>
			</ResponsiveContainer>

			<div className='flex items-center mt-4 space-x-3'>
				<div className='w-8 h-8'>
					<Image
						src='https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg'
						alt='btc'
						width={50}
						height={50}
					/>
				</div>
				<div className='w-full flex-1 text-right'>
					<div className='mb-2'> INR </div>
					<div className=''>18,27,298</div>
				</div>
			</div>
		</div>
	)
}

export default CurrencyCard
