import Vue from "vue";
import { VueHammer } from "vue2-hammer";
// import Switches from "vue-switches";
import RockerSwitch from "vue-rocker-switch";
import "vue-rocker-switch/dist/vue-rocker-switch.css";
import VueEllipseProgress from 'vue-ellipse-progress';
import Autocomplete from 'vuejs-auto-complete'
import VCalendar from "v-calendar";
import VDatepicker from "v-calendar/lib/components/date-picker.umd"
import Draggable from 'vuedraggable'
import Verte from 'verte';
import 'verte/dist/verte.css';
// register component globally
import VueWindowSize from "vue-window-size";



Vue.use(VueHammer);
Vue.use(VueEllipseProgress);
// Vue.component("Switches", Switches);
Vue.component("RockerSwitch", RockerSwitch);
Vue.component("Autocomplete", Autocomplete);

Vue.use(VCalendar, {
    componentPrefix: 'vc'
  });
  
Vue.component("v-datepicker", VDatepicker);
Vue.component("Draggable", Draggable);
Vue.component('verte', Verte);
Vue.use(VueWindowSize);