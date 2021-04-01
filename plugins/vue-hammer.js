import Vue from "vue";
import { VueHammer } from "vue2-hammer";
import Switches from "vue-switches";
import RockerSwitch from "vue-rocker-switch";
import "vue-rocker-switch/dist/vue-rocker-switch.css";
import VueEllipseProgress from 'vue-ellipse-progress';
import Autocomplete from 'vuejs-auto-complete'

Vue.use(VueHammer);
Vue.use(VueEllipseProgress);
Vue.component("Switches", Switches);
Vue.component("RockerSwitch", RockerSwitch);
Vue.component("Autocomplete", Autocomplete);
