import { defineQuery } from "next-sanity";

const BRANDS_QUERY = defineQuery(`*[_type == "brand"] | order(title asc)`);

const LATEST_BLOGS_QUERY = defineQuery(
  `*[_type == "blog" && isLatest == true] | order(name asc) {
    ...,
    blogcategories[]->{
      title
    }
  }`,
);

export { BRANDS_QUERY, LATEST_BLOGS_QUERY };
