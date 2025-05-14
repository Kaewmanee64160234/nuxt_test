<script setup lang="ts" >
const hello = ''
const hello2 = 'hello'

</script>
<template>
  <v-container>
    <h1>hello</h1>
    <v-row align="center" justify="center">
        <v-icon icon="$vuetify"></v-icon>
      <v-col cols="auto">
        <v-btn density="compact">Compact Button</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn density="comfortable">Comfortable Button</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn density="default">Default Button</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>

body {
  font-family: 'Sarabun', sans-serif;
}
</style>
