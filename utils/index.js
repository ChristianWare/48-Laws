export const sortByLawNumber = (a, b) => {
  return  parseInt(a.frontmatter.number) -  parseInt(b.frontmatter.number);
};
