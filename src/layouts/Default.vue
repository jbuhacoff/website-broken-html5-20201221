<template>
    <v-app>
        <Navbar/>
        <v-main class="ma-0">
            <v-container class="ma-0 pa-0" fluid style="height: 100%;">
              <v-col cols="12" class="ma-0 pa-0" style="height: 100%;">
                <slot/>
              </v-col>
            </v-container>
        </v-main>
        <Footer/>
    </v-app>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';

export default {
    name: 'DefaultLayout',
    components: {
        Navbar,
        Footer,
    },
};
</script>
