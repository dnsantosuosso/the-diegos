import Head from 'next/head';
import Image from 'next/image';

export default function Morocco() {
  return (
    <>
      <Head>
        <title>Morocco Journey - The Diegos</title>
      </Head>
      <main className="max-w-6xl mx-auto py-12 px-6">
        <section className="space-y-8">
          {/* Hero Section */}
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/img02.jpg"
              alt="Morocco medinas"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Morocco Journey</h1>
                <p className="text-xl">Imperial Cities & Sahara Adventures</p>
              </div>
            </div>
          </div>

          {/* Sub-tabs */}
          <div className="flex flex-wrap gap-4 border-b border-gray-200 pb-4">
            <button className="px-4 py-2 bg-gray-900 text-white rounded-lg">
              Overview
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Marrakech
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Fez
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Sahara
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Atlas Mountains
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Casablanca
            </button>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <article className="space-y-4">
                <h2 className="text-3xl font-semibold">
                  Morocco: A Tapestry of Cultures
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Morocco is a country where ancient traditions blend seamlessly
                  with modern life. From the labyrinthine souks of Marrakech to
                  the blue-painted streets of Chefchaouen, every corner tells a
                  story of Berber, Arab, and French influences that have shaped
                  this North African kingdom.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our Moroccan odyssey took us through imperial cities steeped
                  in history, across the dramatic landscapes of the Atlas
                  Mountains, and into the heart of the Sahara Desert where we
                  slept under a canopy of stars that seemed close enough to
                  touch.
                </p>
              </article>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/img03.jpg"
                    alt="Morocco architecture"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/img04.jpg"
                    alt="Morocco markets"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Must-See Places</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Jemaa el-Fnaa square, Marrakech</li>
                  <li>• Fez medina and tanneries</li>
                  <li>• Sahara Desert dunes</li>
                  <li>• Hassan II Mosque, Casablanca</li>
                  <li>• Chefchaouen blue city</li>
                  <li>• Atlas Mountains villages</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Travel Tips</h3>
                <p className="text-gray-600 text-sm">
                  <strong>Best Time:</strong> March-May, September-November
                  <br />
                  <strong>Language:</strong> Arabic, Berber, French
                  <br />
                  <strong>Currency:</strong> Moroccan Dirham (MAD)
                  <br />
                  <strong>Tip:</strong> Learn basic haggling for souks
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
