import Footer from './components/Footer'
import SideNavbar from './components/SideNavbar'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Krypto a crytpo portfolio tacker',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className='relative'>
				<div className='flex'>
					<SideNavbar />
					{children}
				</div>
				<Footer />
			</body>
		</html>
	)
}
