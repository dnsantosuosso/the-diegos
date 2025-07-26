import Head from 'next/head';
import Image from 'next/image';

export default function Gallery() {
  // Using the available images from the public folder
  const images = [
    '/img01.jpg',
    '/img02.jpg',
    '/img03.jpg',
    '/img04.jpg',
    '/img05.jpg',
    '/img06.jpg',
    '/img07.jpg',
    '/img08.jpg',
    '/img09.jpg',
    '/img10.jpg',
    '/img11.jpg',
    '/img12.jpg',
    '/img13.jpg',
  ];

  return (
    <>
      <Head>
        <title>Gallery - The Diegos</title>
      </Head>
      <main className="max-w-7xl mx-auto py-12 px-6">
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Photo Gallery</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A curated collection of moments captured through our lens. Each
              photograph tells a story of places, people, and experiences that
              have shaped our journey.
            </p>
          </div>

          {/* Photo Collage Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 ${
                  index % 7 === 0
                    ? 'col-span-2 row-span-2'
                    : index % 11 === 0
                    ? 'col-span-2'
                    : index % 13 === 0
                    ? 'row-span-2'
                    : ''
                }`}
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                  <div className="opacity-0 hover:opacity-100 transition-opacity">
                    <span className="text-white text-sm font-medium">View</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional rows for more photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {images.slice(0, 6).map((image, index) => (
              <div
                key={`row2-${index}`}
                className="relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={image}
                  alt={`Gallery image row 2 ${index + 1}`}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                  <div className="opacity-0 hover:opacity-100 transition-opacity">
                    <span className="text-white text-sm font-medium">View</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Final row with different layout */}
          <div className="grid grid-cols-6 gap-2 mt-8">
            {images.slice(6, 13).map((image, index) => (
              <div
                key={`row3-${index}`}
                className={`relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 ${
                  index === 0 || index === 6 ? 'col-span-2' : 'col-span-1'
                }`}
              >
                <Image
                  src={image}
                  alt={`Gallery image row 3 ${index + 1}`}
                  width={300}
                  height={300}
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                  <div className="opacity-0 hover:opacity-100 transition-opacity">
                    <span className="text-white text-sm font-medium">View</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
