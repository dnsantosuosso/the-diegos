import Head from 'next/head';
import Image from 'next/image';

export default function Vietnam() {
  return (
    <>
      <Head>
        <title>Vietnam Streets - The Diegos</title>
      </Head>
      <main className="max-w-6xl mx-auto py-12 px-6">
        <section className="space-y-8">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/img08.jpg"
              alt="Vietnam streets"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Vietnam Streets</h1>
                <p className="text-xl">Motorbikes, Markets & Memories</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 border-b border-gray-200 pb-4">
            <button className="px-4 py-2 bg-gray-900 text-white rounded-lg">
              Overview
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Ho Chi Minh City
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Hanoi
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Hoi An
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Street Food
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <article className="space-y-4">
                <h2 className="text-3xl font-semibold">
                  Vietnam: Streets Alive with Energy
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Vietnam&apos;s streets tell the story of a nation in constant
                  motion. From the chaotic beauty of Ho Chi Minh City&apos;s
                  traffic to the ancient charm of Hanoi&apos;s Old Quarter,
                  every street corner offers a new adventure and a glimpse into
                  Vietnamese daily life.
                </p>
              </article>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/img09.jpg"
                    alt="Vietnam street life"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/img10.jpg"
                    alt="Vietnam culture"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Street Highlights
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Ben Thanh Market, HCMC</li>
                  <li>• Hanoi Old Quarter</li>
                  <li>• Hoi An Ancient Town</li>
                  <li>• Mekong Delta markets</li>
                  <li>• Sapa mountain villages</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
