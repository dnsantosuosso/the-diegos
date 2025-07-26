import Head from 'next/head';
import Image from 'next/image';

export default function Thailand() {
  return (
    <>
      <Head>
        <title>Thailand Markets - The Diegos</title>
      </Head>
      <main className="max-w-6xl mx-auto py-12 px-6">
        <section className="space-y-8">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/img05.jpg"
              alt="Thailand floating markets"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Thailand Markets</h1>
                <p className="text-xl">Street Food & Floating Markets</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 border-b border-gray-200 pb-4">
            <button className="px-4 py-2 bg-gray-900 text-white rounded-lg">
              Overview
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Bangkok
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Chiang Mai
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Floating Markets
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Street Food
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <article className="space-y-4">
                <h2 className="text-3xl font-semibold">
                  Thailand: The Land of Smiles
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Thailand&apos;s markets are the heartbeat of Thai culture.
                  From the bustling floating markets of Damnoen Saduak to the
                  aromatic street food stalls of Bangkok&apos;s Chinatown, these
                  vibrant spaces offer an authentic glimpse into daily Thai
                  life.
                </p>
              </article>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/img06.jpg"
                    alt="Thai street food"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/img07.jpg"
                    alt="Thai markets"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Market Highlights
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Chatuchak Weekend Market</li>
                  <li>• Damnoen Saduak Floating Market</li>
                  <li>• Chiang Mai Night Bazaar</li>
                  <li>• Bangkok Chinatown</li>
                  <li>• Amphawa Floating Market</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
