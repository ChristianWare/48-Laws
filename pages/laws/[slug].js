import Link from "next/link";
import Image from "next/image";
import  Router  from "next/router";
import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import styles from "../../styles/SlugPage.module.css";

const slugPage = ({ serializedContent, slug }) => {
  console.log(slug)
  const { frontmatter } = serializedContent;
  return (
    <div className={styles.container}>
      <h1 className={styles.number}>{`Law ${frontmatter.number}`}</h1>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src={frontmatter.thumbnailUrl}
            alt={frontmatter.title}
            layout='fill'
            objectFit='cover'
            className={styles.img}
            priority={true}
          />
        </div>
        <h2 className={styles.title}>{frontmatter.title}</h2>
      </div>
      <MDXRemote {...serializedContent} />
      <button onClick={() => Router.back()} className={styles.back}>
        <span>←</span>Back
      </button>
    </div>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("laws"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.split(".")[0],
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const markdown = fs.readFileSync(
    path.join("laws", params.slug + ".mdx"),
    "utf-8"
  );

  const serializedContent = await serialize(markdown, {
    format: "mdx",
    parseFrontmatter: true,
    scope: "",
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeCodeTitles,
      ],
    },
  });

  return {
    props: {
      slug: params.slug,
      serializedContent,
    },
  };
};

export default slugPage;
