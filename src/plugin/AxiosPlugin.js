import axios from "axios";

const BASE_URL = "https://api.sampleapis.com/simpsons";

export default {
  install(Vue) {
    Vue.prototype.axios = axios;
    Vue.prototype.base_url = BASE_URL;
  }
};
