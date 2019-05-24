import Vue from "vue";
import App from "./components/app/App.vue";
import store from "./store/store";
import svgjs from "./plugins/svg";
import { router } from "./utils";
import Draggable from "vuedraggable";
import VeeValidate from "vee-validate";
import AutocompleteInput from "./components/autocomplete-input/autocomplete-input";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faChevronLeft,
  faChevronRight,
  faImages,
  faPlus,
  faSearchPlus,
  faSearchMinus,
  faTimes,
  faUndo
} from "@fortawesome/free-solid-svg-icons";
import {
  faFolderOpen as farFolderOpen,
  faHandRock as farHandRock,
  faLightbulb as farLightbulb,
  faTrashAlt as farTrashAlt
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import "./assets/css/bootstrap.min.css";
import "./assets/css/tags.min.css";
import "./assets/css/style.min.css";

Vue.use(VeeValidate);
Vue.use(svgjs);

library.add(
  faBars,
  faChevronLeft,
  faChevronRight,
  faImages,
  faPlus,
  faSearchPlus,
  faSearchMinus,
  faTimes,
  faUndo,
  farFolderOpen,
  farHandRock,
  farLightbulb,
  farTrashAlt
);

Vue.component("autocomplete-input", AutocompleteInput);
Vue.component("draggable", Draggable);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
