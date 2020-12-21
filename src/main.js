// global js and css

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import DefaultLayout from '~/layouts/Default.vue';

export default function (Vue, {
    appOptions,
}) {

    Vue.config.productionTip = false;

    const vuetifyOpts = {
        options: {
            customProperties: true,
        },
    };

    Vue.use(Vuetify);
    appOptions.vuetify = new Vuetify(vuetifyOpts);

    // set default layout as a global component so we don't need to import it on every page
    Vue.component('Layout', DefaultLayout);
}
