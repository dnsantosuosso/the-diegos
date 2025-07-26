import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>The Diegos</title>
      </Head>
      <main className="max-w-3xl mx-auto py-12 px-6 space-y-12">
        <section className="space-y-4">
          <Image
            src="/img12.jpg"
            alt="Magazine hero"
            width={1200}
            height={600}
            className="rounded-lg shadow-lg object-cover"
          />
          <h2 className="text-3xl font-semibold">The Diegos</h2>
          <p className="text-gray-600 leading-relaxed">
            Dive into the ultimate digital magazine experience. Crisp
            photography, minimal design, and stories that ignite your
            imagination.
          </p>
        </section>
      </main>
    </>
  );
}
