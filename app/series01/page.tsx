import Head from 'next/head';
import Header from '@/app/Header';
import Image from 'next/image';

export default function Issue() {
  return (
    <>
      <Head>
        <title>Wet Market Series 001</title>
      </Head>
      <Header />
      <main className="max-w-3xl mx-auto py-12 px-6 space-y-8">
        <article className="space-y-6">
          <Image
            src="/img11.jpg"
            alt="Issue 1 Cover"
            width={1200}
            height={800}
            className="rounded-lg shadow-lg object-cover"
          />
          <h2 className="text-2xl font-bold">Series #001: Wet Market Series</h2>
          <p className="text-gray-700 leading-relaxed">
            In this first issue, we explore how less becomes more. From the
            streets of Vietnam to the corners of Hong Kong.
          </p>
          {/* <a
            href="#"
            className="inline-block uppercase tracking-wide text-sm font-medium border-b-2 border-black pb-1 hover:border-gray-600"
          >
            Read full story →
          </a> */}
        </article>
      </main>
    </>
  );
}
