module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
                @import "@/assets/styles/_variables.scss";
                @import "@/assets/styles/_mixins.scss";
                @import "@/assets/styles/_utilities.scss";
                @import "@/assets/styles/_borders.scss";
                @import "@/assets/styles/_animations.scss";
                @import "@/assets/styles/_buttons.scss";
                @import "@/assets/styles/_universals.scss";
                `
      }
    }
  }
};
