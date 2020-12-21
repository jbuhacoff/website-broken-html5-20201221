<template>
  <Layout>
    <v-row class="px-5" style="background-color: #333; padding-top: 20px; padding-bottom: 20px;">
      <v-col cols="12">
        <v-row justify="center" class="py-2">
          <v-col style="text-align: center">
            <h1 :class="[$vuetify.breakpoint.mdAndUp ? 'display-1' : 'headline', 'font-weight-light', 'grey--text text--lighten-4']">Terms of Use</h1>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="px-5" style="padding-top: 20px; padding-bottom: 20px;">
      <v-col cols="12">
        <v-row justify="center" class="py-2">
          <v-col style="text-align: left; max-width: 720px;">
            <div class="body-2 my-2">
              <p>
                  Sample terms of use.
              </p>
          </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </Layout>
</template>

<style lang="css">
* {
    line-height: 1.75
}
</style>

<script>
export default {
    metaInfo() {
        return {
            title: 'Terms of Use',
            meta: [
                { name: 'description', content: 'Terms of Use' },
            ],
        };
    },
};
</script>
