
module.exports = function(eleventyConfig) {
  eleventyConfig.addNunjucksFilter("year", () => {
    return new Date().getFullYear();
  });
  // Passthrough copy for styles.css
  eleventyConfig.addPassthroughCopy("src/styles.css");

  // Add a collection for posts
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md");
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
