<template>
    <div>
    <v-footer dark padless>
        <v-row justify="center" no-gutters>
            <v-col cols="12" class="pa-0">
                <v-system-bar color="#212121">
                    <p class="ma-0 pa-0 caption">
                        Copyright &copy; 2020
                        <strong>Jonathan Buhacoff</strong>.
                        All rights reserved.
                    </p>
                    <v-spacer></v-spacer>
                    <p class="ma-0 pa-0 caption">
                        <g-link to="/notice/terms/">Terms of Use</g-link>
                    </p>
                </v-system-bar>
            </v-col>
        </v-row>
    </v-footer>
    </div>
</template>
<style lang="css" scoped>
 /* "grey darken-4" is #212121 */
.text-none {
    text-decoration: none;
    color: #aaa;
}
p {
    color: #aaa;
}
p a {
    text-decoration: none;
    color: #aaa;
}
p a:hover {
    text-decoration: underline;
    color: #aaa;
}
</style>
