import Link from 'next/link';
import React, { Suspense } from 'react'
import WebSearchResults from '../../../components/WebSearchResults';

export default async function WebSearchPage({ searchParams }) {
    const startIndex = searchParams.start || "1";
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`
    );
    if (!response.ok) throw new Error('Something went wrong!');
    const data = await response.json();
    const results = data.items;

    if (!results) {
        return (
            <Suspense>
            <div className='flex flex-col justify-center items-center pt-10'>
                <h1 className='text-3xl mb-4'>No results found for {searchParams.searchTerm}</h1>
                <p className='text-lg'>Try searching for something else </p>
                <Link className='text-blue-500' href='/'>
                    Home
                </Link>
            </div>
            </Suspense>
        )
    }

    return (
        <div>
            {results && (
                <WebSearchResults results={data} />
            )}
        </div>
    )
}
