import Head from 'next/head';
import Image from 'next/image';

export default function PhotographyBooks() {
  const photographyBooks = [
    {
      title: 'The Photography Book',
      author: 'Phaidon Editors',
      description:
        'A comprehensive collection of the most influential photographs ever taken.',
      rating: 5,
      image: '/img05.jpg',
    },
    {
      title: 'On Photography',
      author: 'Susan Sontag',
      description:
        "Groundbreaking essays about photography's role in contemporary culture.",
      rating: 5,
      image: '/img06.jpg',
    },
    {
      title: 'Ways of Seeing',
      author: 'John Berger',
      description:
        'A revolutionary look at how we interpret visual images and art.',
      rating: 4,
      image: '/img07.jpg',
    },
    {
      title: 'Camera Lucida',
      author: 'Roland Barthes',
      description: 'A profound meditation on photography, memory, and death.',
      rating: 4,
      image: '/img08.jpg',
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
        <title>Photography Books - The Diegos</title>
      </Head>
      <main className="max-w-6xl mx-auto py-12 px-6">
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Photography Books</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Essential reading for understanding the art, theory, and practice
              of photography.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {photographyBooks.map((book, index) => (
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
