const withImages = require("next-images");
const withVideos = require("next-videos");

const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([withImages, withVideos], {
  crossOrigin: "anonymous",
});
