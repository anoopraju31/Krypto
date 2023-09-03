import { NextResponse } from 'next/server'

export type HistoryType = {
	price: string
	timestamp: number
}

export type ResultType = {
	status: string
	data: {
		change: string
		history: HistoryType[]
	}
}

export async function GET() {
	const url =
		'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h'
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '05878f2909mshc4d7ee979d65979p183a2ejsnc70fb51aa2b6',
			'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
		},
	}

	try {
		const response = await fetch(url, options)
		const result: Promise<ResultType> = await response.json()

		return NextResponse.json({ data: (await result).data.history })
	} catch (error) {
		console.error(error)
	}
}
