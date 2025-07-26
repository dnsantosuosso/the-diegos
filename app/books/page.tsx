import Head from 'next/head';
import Image from 'next/image';

interface Book {
  title: string;
  author: string;
  description: string;
  category: string;
  rating: number;
  image: string;
}

export default function Books() {
  const books: Book[] = [
    {
      title: 'The Art of Travel',
      author: 'Alain de Botton',
      description:
        'A philosophical exploration of why we travel and what we can gain from our journeys beyond mere sightseeing.',
      category: 'Travel Philosophy',
      rating: 5,
      image: '/img01.jpg',
    },
    {
      title: 'In a Sunburned Country',
      author: 'Bill Bryson',
      description:
        "Bryson's hilarious and insightful journey through Australia, filled with wit and fascinating observations.",
      category: 'Travel Memoir',
      rating: 5,
      image: '/img02.jpg',
    },
    {
      title: 'The Photography Book',
      author: 'Phaidon Editors',
      description:
        'A comprehensive collection of the most influential photographs ever taken, spanning from the 1840s to today.',
      category: 'Photography',
      rating: 4,
      image: '/img03.jpg',
    },
    {
      title: 'On Photography',
      author: 'Susan Sontag',
      description:
        "Sontag's groundbreaking collection of essays about photography's role in contemporary culture.",
      category: 'Photography Theory',
      rating: 5,
      image: '/img04.jpg',
    },
    {
      title: 'The Geography of Bliss',
      author: 'Eric Weiner',
      description:
        "A grumpy journalist's quest to find the world's happiest places and what makes them special.",
      category: 'Cultural Studies',
      rating: 4,
      image: '/img05.jpg',
    },
    {
      title: 'Wild',
      author: 'Cheryl Strayed',
      description:
        'A powerful memoir about hiking the Pacific Crest Trail and finding healing through wilderness.',
      category: 'Adventure Memoir',
      rating: 5,
      image: '/img06.jpg',
    },
    {
      title: 'The Old Way',
      author: 'Elizabeth Marshall Thomas',
      description:
        "An anthropologist's intimate portrait of the Kalahari Bushmen and their traditional way of life.",
      category: 'Anthropology',
      rating: 4,
      image: '/img07.jpg',
    },
    {
      title: 'Shantaram',
      author: 'Gregory David Roberts',
      description:
        "An epic novel set in the slums of Bombay, based on the author's own experiences as a fugitive.",
      category: 'Literary Fiction',
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
        <title>Book Recommendations - The Diegos</title>
      </Head>
      <main className="max-w-7xl mx-auto py-12 px-6">
        <section className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Book Recommendations</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A curated collection of books that have inspired our travels,
              shaped our perspective on photography, and deepened our
              understanding of the cultures we&apos;ve encountered around the
              world.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 border-b border-gray-200 pb-4">
            <button className="px-4 py-2 bg-gray-900 text-white rounded-lg">
              All Books
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Travel
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Photography
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Culture
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Memoir
            </button>
          </div>

          {/* Books Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {books.map((book, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg line-clamp-2">
                      {book.title}
                    </h3>
                    <p className="text-gray-600 text-sm">by {book.author}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="flex">{renderStars(book.rating)}</div>
                    <span className="text-sm text-gray-500">
                      ({book.rating}/5)
                    </span>
                  </div>

                  <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                    {book.category}
                  </span>

                  <p className="text-gray-600 text-sm line-clamp-3">
                    {book.description}
                  </p>

                  <button className="w-full mt-3 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Section */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              Featured This Month
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/img09.jpg"
                  alt="Featured book"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">The Art of Seeing</h3>
                <p className="text-gray-600">
                  This month we&apos;re featuring books that have fundamentally
                  changed how we see and interpret the world around us. From
                  street photography masters to cultural anthropologists, these
                  works offer new lenses through which to view our travels and
                  experiences.
                </p>
                <div className="space-y-2">
                  <p className="font-medium">Featured authors:</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Vivian Maier - Street Photography</li>
                    <li>• Claude Lévi-Strauss - Anthropology</li>
                    <li>• Paul Theroux - Travel Writing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
