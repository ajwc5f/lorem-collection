import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    footerActionText: "",
    globalPrimaryColor: "",
    globalContrastColor: "",
    navDrawerIsActive: false,
    products: [
      {
        name: "Citra IPA",
        color: "rgba(21,145,27,0.78)",
        image: "https://www.tecatebeerusa.com/assets/images/home/tecate-original-beer.png"
      },
      {
        name: "Hazy IPA",
        color: "rgb(255,195,99)",
        image: "https://www.tecatebeerusa.com/assets/images/home/tecate-original-beer.png"
      },
      {
        name: "Lager",
        color: "#85bdff",
        image: "https://www.tecatebeerusa.com/assets/images/home/tecate-original-beer.png"
      },
      {
        name: "Cherry Sour",
        color: "#ff0819",
        image: "https://www.tecatebeerusa.com/assets/images/home/tecate-original-beer.png"
      },
      {
        name: "Raspberry Sour",
        color: "#ff3d81",
        image: "https://www.tecatebeerusa.com/assets/images/home/tecate-original-beer.png"
      },
      {
        name: "Nitro Stout",
        color: "#ff8b1b",
        image: "https://www.tecatebeerusa.com/assets/images/home/tecate-original-beer.png"
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
