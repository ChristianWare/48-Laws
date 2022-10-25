import LawSection2 from "../../../comps/lawSection2/LawSection2";
import SectionHeader from "../../../comps/sectionHeader/SectionHeader";
import { sortByLawNumber } from "../../../utils";
import { POSTS_PER_PAGE } from "../../../config";

const Laws = ({ laws, numPages, currentPage }) => {
  return (
    <>
      <SectionHeader text1='all' text2='48 laws' />
      <LawSection2 laws={laws} />
    </>
  );
};
export default Laws;

export const getStaticPaths = async () => {
  const fs = require("fs");
  const path = require("path");

  const files = fs.readdirSync(path.join("laws"));

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE);
  let paths = [];

  for (let i = 1; i <= numPages; i++) {
    paths.push({
      params: { page_index: i.toString() },
    });
  }

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const page = parseInt((params && params.page_index) || 1);
  const fs = require("fs");
  const path = require("path");
  const matter = require("gray-matter");

  const files = fs.readdirSync(path.join("laws"));

  const laws = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("laws", filename),
      "utf-8"
    );

    const { data } = matter(markdownWithMeta);

    return {
      frontmatter: data,
      slug: filename.split(".")[0],
    };
  });

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE);
  const pageIndex = page - 1;
  const orderedLaws = laws
    .sort(sortByLawNumber)
    .slice(pageIndex * POSTS_PER_PAGE, (pageIndex + 1) * POSTS_PER_PAGE);

  return {
    props: {
      laws: orderedLaws,
      numPages,
      currentPage: page
    },
  };
};
