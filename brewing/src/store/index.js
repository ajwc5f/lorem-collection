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
        color: "#15911b",
        can: {
          front: "https://www.tecatebeerusa.com/assets/images/home/tecate-original-beer.png",
          crushed: "https://www.tecatebeerusa.com/assets/images/home/tecate-original-beer.png"
        }
      },
      {
        name: "Hazy IPA",
        color: "#ffc363",
        can: {
          front: "https://www.tecatebeerusa.com/assets/images/home/tecate-original-beer.png",
          crushed: "https://www.tecatebeerusa.com/assets/images/home/tecate-original-beer.png"
        }
      },
      {
        name: "Lager",
        color: "#85bdff",
        can: {
          front: "https://www.tecatebeerusa.com/assets/images/home/tecate-original-beer.png",
          crushed: "https://www.tecatebeerusa.com/assets/images/home/tecate-original-beer.png"
        }
      },
      {
        name: "Cherry Sour",
        color: "#ff0819",
        can: {
          front: "https://www.tecatebeerusa.com/assets/images/home/tecate-original-beer.png",
          crushed: "https://www.tecatebeerusa.com/assets/images/home/tecate-original-beer.png"
        }
      },
      {
        name: "Raspberry Sour",
        color: "#ff3d81",
        can: {
          front: "https://www.tecatebeerusa.com/assets/images/home/tecate-original-beer.png",
          crushed: "https://www.tecatebeerusa.com/assets/images/home/tecate-original-beer.png"
        }
      },
      {
        name: "Nitro Stout",
        color: "#ff8b1b",
        can: {
          front: "https://www.tecatebeerusa.com/assets/images/home/tecate-original-beer.png",
          crushed: "https://www.tecatebeerusa.com/assets/images/home/tecate-original-beer.png"
        }
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
