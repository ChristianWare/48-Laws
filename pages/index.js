import Head from "next/head";
import Link from "next/link";
import Hero from "../comps/hero/Hero";
import LawSection from "../comps/lawSection/LawSection";

export default function Home({ laws }) {
  console.log(laws);
  return (
    <div>
      <Head>
        <title>48 Laws of Power</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      <LawSection laws={laws} />
    </div>
  );
}

export const getStaticProps = async () => {
  const fs = require("fs");
  const path = require("path");
  const matter = require("gray-matter");

  //1. Find the path in the directory called "laws":
  const files = fs.readdirSync(path.join("laws"));

  //2. Gain access to all of the files inside of the "laws" directory:
  const laws = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("laws", filename),
      "utf-8"
    );

    //3. Extract the front matter from every MDX file:
    const { data } = matter(markdownWithMeta);

    return {
      frontmatter: data,
      slug: filename.split(".")[0],
    };
  });

  return {
    props: {
      laws: laws.slice(0, 7),
    },
  };
};
