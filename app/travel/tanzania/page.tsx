import Head from 'next/head';
import Image from 'next/image';

export default function Tanzania() {
  return (
    <>
      <Head>
        <title>Tanzania Safari - The Diegos</title>
      </Head>
      <main className="max-w-6xl mx-auto py-12 px-6">
        <section className="space-y-8">
          {/* Hero Section */}
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/img08.jpg"
              alt="Tanzania Serengeti"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Tanzania Safari</h1>
                <p className="text-xl">The Endless Plains of Serengeti</p>
              </div>
            </div>
          </div>

          {/* Sub-tabs */}
          <div className="flex flex-wrap gap-4 border-b border-gray-200 pb-4">
            <button className="px-4 py-2 bg-gray-900 text-white rounded-lg">
              Overview
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Serengeti
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Ngorongoro
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Kilimanjaro
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Zanzibar
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Tarangire
            </button>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <article className="space-y-4">
                <h2 className="text-3xl font-semibold">
                  Tanzania: Land of Natural Wonders
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Tanzania is home to some of Africa&apos;s most iconic
                  landscapes and wildlife spectacles. From the endless plains of
                  the Serengeti where millions of wildebeest roam, to the
                  pristine crater of Ngorongoro, this country offers
                  unparalleled safari experiences.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our Tanzania adventure was a journey through time and nature.
                  We tracked the Big Five across vast savannas, witnessed
                  breathtaking sunrises over Mount Kilimanjaro, and ended our
                  expedition on the spice-scented islands of Zanzibar, where
                  Swahili culture meets Indian Ocean beauty.
                </p>
              </article>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/img09.jpg"
                    alt="Tanzania wildlife"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/img10.jpg"
                    alt="Tanzania landscape"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <article className="space-y-4">
                <h3 className="text-2xl font-semibold">The Great Migration</h3>
                <p className="text-gray-600 leading-relaxed">
                  Witnessing the Great Migration is a once-in-a-lifetime
                  experience. Over two million wildebeest, zebras, and gazelles
                  move in an endless cycle between Tanzania&apos;s Serengeti and
                  Kenya&apos;s Maasai Mara, following the rains and fresh grass
                  in an ancient rhythm that has continued for millennia.
                </p>
              </article>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Safari Highlights
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Serengeti National Park</li>
                  <li>• Ngorongoro Conservation Area</li>
                  <li>• Mount Kilimanjaro views</li>
                  <li>• Tarangire elephant herds</li>
                  <li>• Lake Manyara tree lions</li>
                  <li>• Zanzibar spice tours</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Safari Tips</h3>
                <p className="text-gray-600 text-sm">
                  <strong>Best Wildlife Viewing:</strong> June-October
                  <br />
                  <strong>Migration River Crossings:</strong> July-September
                  <br />
                  <strong>Calving Season:</strong> January-March
                  <br />
                  <strong>Weather:</strong> Dry season ideal for game drives
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Safari Gallery</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative h-20 rounded overflow-hidden">
                    <Image
                      src="/img11.jpg"
                      alt="Tanzania safari"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-20 rounded overflow-hidden">
                    <Image
                      src="/img12.jpg"
                      alt="Tanzania wildlife"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-20 rounded overflow-hidden">
                    <Image
                      src="/img13.jpg"
                      alt="Tanzania landscape"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-20 rounded overflow-hidden">
                    <Image
                      src="/img01.jpg"
                      alt="Tanzania culture"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
