import React from 'react'
import { Routes } from '../routes';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div >
               <section class="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
	<div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div class="max-w-md text-center">
			<h2 class="mb-8 font-extrabold text-9xl dark:text-gray-400">
				<span class="sr-only">Error</span>404
			</h2>
			<p class="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
			<p class="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
			<Link to={Routes.Home}>
            <h1 rel="noopener noreferrer" class="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Back to homepage</h1>
            </Link>
        </div>
	</div>
</section>
            </div>
  )
}
