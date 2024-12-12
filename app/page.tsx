import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">

            {/* <div className=" grid flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"> */}
            <div className="flex shrink-0 items-center">
              <Image
                className="dark:"
                src="/logo.svg"
                alt="RJ codes logo"
                width={90}
                height={10}
                priority
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a href="#" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">HOME</a>
                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">MY WORKS</a>
                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">CONTACT</a>
                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">ABOUT ME</a>
              </div>
            </div>
            {/* </div> */}

          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">MY WORKS</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">CONTACT</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">ABOUT ME</a>
          </div>
        </div>
      </nav>

      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <div className="text-start space-y-4">
              <h6 className="text-sm font-medium text-gray-600">Hello, Welcome</h6>
              <h1 className="text-4xl font-bold text-gray-400">I  &#39; M REYJAN SUNGA</h1>
              <p className="text-base text-gray-500">A passionate computer programmer</p>
            </div>
            <div>
              <Image
                src="/Rj-codes.jpg"
                alt="RJ codes logo"
                width={200}
                height={200}
              />
            </div>
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/facebook.svg"
              alt="facebook icon"
              width={25}
              height={25}
            />
            {/* facebook */}
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/instagram.svg"
              alt="instagram icon"
              width={25}
              height={25}
            />
            {/* instagram */}
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/tiktok.svg"
              alt="tiktok icon"
              width={25}
              height={25}
            />
            {/* tiktok */}
          </a>

          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/youtube.svg"
              alt="youtube icon"
              width={25}
              height={25}
            />
            {/* youtube */}
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/github.svg"
              alt="github icon"
              width={25}
              height={25}
            />
            {/* github */}
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/paypal.svg"
              alt="paypal icon"
              width={25}
              height={25}
            />
            {/* paypal */}
          </a>

        </footer>
      </div>
    </>
  );
}
