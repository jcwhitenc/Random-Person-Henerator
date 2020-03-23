import Vue from 'vue'
import App from './App.vue'
import router from './router'
import male_names from './data/mnames.js'
import female_names from './data/fnames.js'
import sur_names from './data/snames.js'

let m_images = [];
let f_images = [];

async function getImages(male) {
  let url = "https://api.generated.photos/api/v1/faces?api_key=Ts5Rb8nYHm45j5j3jFfrXA&per_page=100&gender=" + (male ? "male" : "female ");
  await fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      if (male) {
        m_images = json.faces;
      } else {
        f_images = json.faces;
      }
    });
}
let data = {
  m_names: {
    active: male_names,
    inactive: [],
    all: male_names,
  },
  f_names: {
    active: female_names,
    inactive: [],
    all: female_names,
  },
  s_names: {
    active: sur_names,
    inactive: [],
    all: sur_names
  },
  people: [],
};

Vue.config.productionTip = false

new Vue({
  router,
  data,
  mounted() {
    this.getFaces();
  },
  methods: {
    async getFaces() {
      getImages(true);
      getImages(false);
    },

  },
  computed: {
    images() {
      return {
        maleImages: m_images,
        femaleImages: f_images
      }
    }
  },
  render: h => h(App)
}).$mount('#app')