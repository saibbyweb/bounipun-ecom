import Vue from "vue";
import { VueHammer } from "vue2-hammer";
import Switches from "vue-switches";
import RockerSwitch from "vue-rocker-switch";
import "vue-rocker-switch/dist/vue-rocker-switch.css";

Vue.use(VueHammer);
Vue.component("Switches", Switches);
Vue.component("RockerSwitch", RockerSwitch);
