import Head from 'next/head';
import Image from 'next/image';

export default function Kenya() {
  return (
    <>
      <Head>
        <title>Kenya Adventures - The Diegos</title>
      </Head>
      <main className="max-w-6xl mx-auto py-12 px-6">
        <section className="space-y-8">
          {/* Hero Section */}
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/img01.jpg"
              alt="Kenya landscape"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Kenya Adventures</h1>
                <p className="text-xl">Exploring the Heart of East Africa</p>
              </div>
            </div>
          </div>

          {/* Sub-tabs */}
          <div className="flex flex-wrap gap-4 border-b border-gray-200 pb-4">
            <button className="px-4 py-2 bg-gray-900 text-white rounded-lg">
              Overview
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Safari
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Nairobi
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Maasai Mara
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Coast
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Culture
            </button>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <article className="space-y-4">
                <h2 className="text-3xl font-semibold">Welcome to Kenya</h2>
                <p className="text-gray-600 leading-relaxed">
                  Kenya is a land of extraordinary contrasts and natural beauty.
                  From the vast savannas of the Maasai Mara to the pristine
                  beaches of the Indian Ocean coast, every corner of this East
                  African gem offers unique experiences and unforgettable
                  moments.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our journey through Kenya took us from the bustling streets of
                  Nairobi to remote villages where ancient traditions still
                  thrive. We witnessed the Great Migration, climbed mountains
                  shrouded in mist, and shared stories with local communities
                  who welcomed us with open arms.
                </p>
              </article>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/img02.jpg"
                    alt="Kenya wildlife"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/img03.jpg"
                    alt="Kenya landscape"
                    width={400}
                    height={256}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Trip Highlights</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Great Migration in Maasai Mara</li>
                  <li>• Mount Kenya National Park</li>
                  <li>• Samburu National Reserve</li>
                  <li>• Lake Nakuru flamingos</li>
                  <li>• Diani Beach relaxation</li>
                  <li>• Maasai village visits</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Best Time to Visit
                </h3>
                <p className="text-gray-600 text-sm">
                  <strong>Dry Season:</strong> January-March, June-October
                  <br />
                  <strong>Great Migration:</strong> July-October
                  <br />
                  <strong>Beach Season:</strong> December-March
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Photo Gallery</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative h-20 rounded overflow-hidden">
                    <Image
                      src="/img04.jpg"
                      alt="Kenya"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-20 rounded overflow-hidden">
                    <Image
                      src="/img05.jpg"
                      alt="Kenya"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-20 rounded overflow-hidden">
                    <Image
                      src="/img06.jpg"
                      alt="Kenya"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-20 rounded overflow-hidden">
                    <Image
                      src="/img07.jpg"
                      alt="Kenya"
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
