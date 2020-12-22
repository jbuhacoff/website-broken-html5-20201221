<template>
  <Layout>
    <v-row class="ma-0 pa-0" justify="center" :style="outerstyle">
        <v-row :style="innerStyle">
            <v-col cols="12">
                <h1 :class="[$vuetify.breakpoint.mdAndUp ? 'display-2' : 'display-1', 'font-weight-light']">Hello world.</h1>
                <p><span :class="[$vuetify.breakpoint.mdAndUp ? 'display-1' : 'headline', 'font-weight-light']" style="line-height: 1.5">This is a test project.</span></p>
            </v-col>
        </v-row>
    </v-row>
  </Layout>
</template>
