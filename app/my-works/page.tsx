import Image from "next/image";
export default function Home() {
  return (
    <>
      <div id="my-works" className="grid grid-rows-[20px_1fr_20px]  justify-items-center min-h-screen p-8 pb-20 gap-16  sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-300 dark:text-softLavender">My Works </h1>
          <h3>Work Experience Side Projects</h3>
          <ul className="flex space-x-4 content-start">
            <li>
              <a href="#" className="flex flex-col items-center text-gray-500 hover:text-softLavender">
                <span>Web  <span className="text-sm text-gray-400">00</span></span>
              </a>
            </li>
            <li>
              <a href="#" className="flex flex-col items-center text-gray-500 hover:text-softLavender">
                <span>Mobile <span className="text-sm text-gray-400">00</span></span>
              </a>
            </li>
            <li>
              <a href="#" className="flex flex-col items-center text-gray-500 hover:text-softLavender">
                <span>Graphics   <span className="text-sm text-gray-400">00</span></span>
              </a>
            </li>
            <li>
              <a href="#" className="flex flex-col items-center text-gray-500 hover:text-softLavender">
                <span>Video <span className="text-sm text-gray-400">00</span></span>
              </a>
            </li>
          </ul>

          <div className="grid grid-cols-2 gap-4">

            <div className="flex gap-4 items-center flex-col rounded lg:flex-row dark:bg-gradient-to-b from-background to-backgroundLite">
              <div className="lg:max-w-full rounded overflow-hidden shadow-lg">
                  <Image
                      src="/dark-mode/Rj-codes.jpg"
                      className="object-cover h-48 w-full"
                      alt="RJ codes logo"
                      width={100}
                      height={200}
                    />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-gray-900 dark:text-gray-300">Title</div>
                  <p className="text-gray-900 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2 ">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#php</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#react</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#laravel</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4 items-center flex-col rounded lg:flex-row  dark:bg-gradient-to-b from-background to-backgroundLite">
              <div className="lg:max-w-full rounded overflow-hidden shadow-lg">
                  <Image
                      src="/dark-mode/Rj-codes.jpg"
                      className="object-cover h-48 w-full"
                      alt="RJ codes logo"
                      width={200}
                      height={200}
                    />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-gray-900 dark:text-gray-300">Title</div>
                  <p className="text-gray-900 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2 ">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#php</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#react</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#laravel</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4 items-center flex-col rounded lg:flex-row dark:bg-gradient-to-b from-background to-backgroundLite">
              <div className="lg:max-w-full rounded overflow-hidden shadow-lg">
                  <Image
                      src="/dark-mode/Rj-codes.jpg"
                      className="object-cover h-48 w-full"
                      alt="RJ codes logo"
                      width={200}
                      height={200}
                    />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-gray-900 dark:text-gray-300">Title</div>
                  <p className="text-gray-900 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2 ">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#php</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#react</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#laravel</span>
                </div>
              </div>
            </div>

          
          

          </div>
        </main>
      </div>
    </>
  );
}
