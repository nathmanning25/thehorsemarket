import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>TheHorseMarket</h1>
        <p>quick links</p>
        <Link href={"/listing/"}>
          <h3>Listing page</h3>
        </Link>
      </main>
    </>
  );
}