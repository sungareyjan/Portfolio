import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1 className="text-4xl font-bold text-gray-400">My Works</h1>
          <ul className="unstyled">
            <li>
              <a href="#">
                <span>Web</span>
                <span>00</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Mobile</span>
                <span>00</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Graphics</span>
                <span>00</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Video</span>
                <span>00</span>
              </a>
            </li>
          </ul>
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <Image
                    src="/Rj-codes.jpg"
                    alt="RJ codes logo"
                    width={200}
                    height={200}
                  />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Title</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#php</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#react</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#laravel</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
