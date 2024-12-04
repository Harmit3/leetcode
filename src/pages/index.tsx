import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";
import Topbar from "@/components/Topbar/Topbar";
import useHasMounted from "@/hooks/useHasMounted";

import { useState } from "react";


export default function Home() {

  const [loadingProblems, setLoadingProblems] = useState(true);
  const hasMounted=useHasMounted();

  if(!hasMounted) return null;

  return (
    <>
      <main className="bg-dark-layer-2 min-h-screen">
        <Topbar />


        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Image Section */}
          <div className="relative h-[240px] w-[240px] flex-none mb-4 md:mb-0 md:mr-4">
            <img
              src="/LeetCode_150_static_cover_picture.png"
              alt="LeetCode Interview Prep"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="text-gray-700 dark:text-gray-400 text-center md:text-left">
            <h1 className="text-2xl font-medium uppercase mb-2 flex items-center space-x-2  text-gray-300">
              <span>&ldquo; Must-do List for Interview Prep &rdquo;</span>
            </h1>
            <div className="text-3xl font-bold text-brand-orange">
              Top Interview 150
            </div>
          </div>
        </div>


        <div className='relative overflow-x-auto mx-auto px-6 pb-10'>
					{loadingProblems && (
						<div className='max-w-[1200px] mx-auto sm:w-7/12 w-full animate-pulse'>
							{[...Array(10)].map((_, idx) => (
								<LoadingSkeleton key={idx} />
							))}
						</div>
					)}
					<table className='text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto'>
						{!loadingProblems && (
							<thead className='text-xs text-gray-700 uppercase dark:text-gray-400 border-b '>
								<tr>
									<th scope='col' className='px-1 py-3 w-0 font-medium'>
										Status
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Title
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Difficulty
									</th>

									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Category
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Solution
									</th>
								</tr>
							</thead>
						)}
						<ProblemsTable setLoadingProblems={setLoadingProblems} />
					</table>
				</div>
			</main>
		</>
	);
}

const LoadingSkeleton = () => {
	return (
		<div className='flex items-center space-x-12 mt-4 px-6'>
			<div className='w-6 h-6 shrink-0 rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52  w-32  rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52  w-32 rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1'></div>
			<span className='sr-only'>Loading...</span>
		</div>
	);
};