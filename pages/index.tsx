import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { Person } from "types";

export default function Home({
  name,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Head>
        <title>Hello</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-4">
        <p className="text-lg text-center">Hello {name}!</p>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/hello`);
  const { name } = (await res.json()) as Person;

  return {
    props: {
      name,
    },
  };
}
