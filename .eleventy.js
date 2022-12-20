module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('script.min.css');
    eleventyConfig.addPassthroughCopy('src/css/*.css');
    eleventyConfig.addPassthroughCopy('script.min.js');
    eleventyConfig.addPassthroughCopy('src/assets/fonts/**/*');
    eleventyConfig.addWatchTarget("src/css/*.css");
    eleventyConfig.addWatchTarget("script.min.js");

    return {
      dir: {
        input: "src",
        output: "dist"
      }
    }
  };