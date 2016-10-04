/* ===============================
 * This is the main JavaScript file, it hosts all of our imports and also the main Vue instance.
 * =============================== */

// imports
import Vue from "vue";
import allComponents from "./all-components";
import Helpers from "./imports/helpers";

// set the helpers class as a window method that everything can access
window.helpers = new Helpers;

// main vue instance
new Vue({
    el: '#app',
    components: allComponents
});


