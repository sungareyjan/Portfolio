import Image from "next/image";
export default function Home() {
  return (
    <>
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
      </div>
    </>
  );
}
