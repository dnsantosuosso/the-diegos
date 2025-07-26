import Head from 'next/head';
import Image from 'next/image';

export default function CultureBooks() {
  const cultureBooks = [
    {
      title: 'The Old Way',
      author: 'Elizabeth Marshall Thomas',
      description:
        'An intimate portrait of the Kalahari Bushmen and their traditional way of life.',
      rating: 4,
      image: '/img09.jpg',
    },
    {
      title: 'Shantaram',
      author: 'Gregory David Roberts',
      description:
        'An epic novel set in the slums of Bombay, based on real experiences.',
      rating: 4,
      image: '/img10.jpg',
    },
    {
      title: 'The Interpretation of Cultures',
      author: 'Clifford Geertz',
      description:
        'Foundational essays in anthropology about understanding culture.',
      rating: 5,
      image: '/img11.jpg',
    },
    {
      title: 'Patterns of Culture',
      author: 'Ruth Benedict',
      description:
        'A classic study comparing different cultural patterns around the world.',
      rating: 4,
      image: '/img12.jpg',
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
        <title>Culture & Society Books - The Diegos</title>
      </Head>
      <main className="max-w-6xl mx-auto py-12 px-6">
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Culture & Society</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Books that explore the rich tapestry of human cultures and social
              structures around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {cultureBooks.map((book, index) => (
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
