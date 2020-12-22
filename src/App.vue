<template>
  <router-view />
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>
