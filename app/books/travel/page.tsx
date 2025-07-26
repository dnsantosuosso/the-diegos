import Head from 'next/head';
import Image from 'next/image';

export default function TravelBooks() {
  const travelBooks = [
    {
      title: 'The Art of Travel',
      author: 'Alain de Botton',
      description:
        'A philosophical exploration of why we travel and what we can gain from our journeys.',
      rating: 5,
      image: '/img01.jpg',
    },
    {
      title: 'In a Sunburned Country',
      author: 'Bill Bryson',
      description:
        "Bryson's hilarious journey through Australia, filled with wit and observations.",
      rating: 5,
      image: '/img02.jpg',
    },
    {
      title: 'The Geography of Bliss',
      author: 'Eric Weiner',
      description: "A journalist's quest to find the world's happiest places.",
      rating: 4,
      image: '/img03.jpg',
    },
    {
      title: 'Wild',
      author: 'Cheryl Strayed',
      description: 'A powerful memoir about hiking the Pacific Crest Trail.',
      rating: 5,
      image: '/img04.jpg',
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={i < rating ? 'text-yellow-400' : 'text-gray-300'}
      >
        ★
      </span>
    ));
  };

  return (
    <>
      <Head>
        <title>Travel Books - The Diegos</title>
      </Head>
      <main className="max-w-6xl mx-auto py-12 px-6">
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Travel Books</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Books that inspire wanderlust and offer deeper insights into the
              art and philosophy of travel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {travelBooks.map((book, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="md:flex">
                  <div className="relative h-48 md:h-auto md:w-48">
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-3 flex-1">
                    <div>
                      <h3 className="font-semibold text-xl">{book.title}</h3>
                      <p className="text-gray-600">by {book.author}</p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex">{renderStars(book.rating)}</div>
                      <span className="text-sm text-gray-500">
                        ({book.rating}/5)
                      </span>
                    </div>

                    <p className="text-gray-600">{book.description}</p>

                    <button className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                      Read Review
                    </button>
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
