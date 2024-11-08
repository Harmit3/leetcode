import Head from "next/head";
import Topbar from "@/components/Topbar/Topbar";
import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";
import { GoGoal } from "react-icons/go";

export default function Home() {
  return (
    <>
      <main className="bg-dark-layer-2 min-h-screen">
        <Topbar />

        {/* Centered container */}
        <div className="flex items-center justify-center h-[calc(55vh-5rem)]">
          {/* Inner container for image and text */}
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
        </div>

        <div className="relative overflow-x-auto mx-auto px-6  pb-10">

          <table className="text-md text-left text-gray-300 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto">
            <thead className="text-xs text-gray-300 uppercase dark:text-gray-400 border-b">
              <tr>
                <th scope='col' className='px-1 py-3 w-0 font-bold'>
                  Status
                </th>
                <th scope='col' className='px-6 py-3 w-0 font-bold'>
                  Title
                </th>
                <th scope='col' className='px-6 py-3 w-0 font-bold'>
                  Difficulty
                </th>
                <th scope='col' className='px-6 py-3 w-0 font-bold'>
                  Category
                </th>
                <th scope='col' className='px-6 py-3 w-0 font-bold'>
                  Solution
                </th>
              </tr>
            </thead>
            <ProblemsTable />
          </table>
        </div>
      </main>
    </>
  );
}
