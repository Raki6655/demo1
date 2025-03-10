import Head from "next/head";
import RootLayout from "./RootLayout";
import { Analytics } from "@vercel/analytics";

export const metadata = {
	title: "Your SEO-Optimized Title",
	description: "A well-crafted description that helps with search rankings.",
	// keywords: "shoes, best shoe store, buy shoes online, sneakers, sports shoes",
	// openGraph: {
	// 	title: "Your SEO-Optimized Title",
	// 	description: "A well-crafted description that helps with search rankings.",
	// 	url: "https://yourwebsite.com",
	// 	siteName: "Your Website Name",
	// 	images: [
	// 		{
	// 			url: "https://yourwebsite.com/og-image.jpg",
	// 			width: 1200,
	// 			height: 630,
	// 		},
	// 	],
	// 	type: "website",
	// },
	// twitter: {
	// 	card: "summary_large_image",
	// 	title: "Your SEO-Optimized Title",
	// 	description: "A well-crafted description that helps with search rankings.",
	// 	images: ["https://yourwebsite.com/twitter-card.jpg"],
	// },
};

export default function layout({ children }) {
	return (
		<RootLayout>
			<Head>
				<title>HELLO</title>
			</Head>
			{children}
			<Analytics debug={true} />
		</RootLayout>
	);
}
