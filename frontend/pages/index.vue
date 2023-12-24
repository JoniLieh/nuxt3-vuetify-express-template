<template>
  <div>
    <h1 class="text-h1">/index</h1>

    <v-progress-circular v-show="pending" indeterminate></v-progress-circular>
    <h5 class="text-h5" v-text="data"></h5>

    <v-alert v-show="!!error" type="error" :text="error?.message" :title="error?.statusCode?.toString()" variant="tonal" />

    <v-btn @click="execute" color="primary">execute POST</v-btn>
  </div>
</template>

<script lang="ts" setup>
// /api/users timeouting
const { data, pending, error, execute } = await useFetch('/api/', {
  method: 'post',
  body: {
    foo: "bar"
  }
})
</script>

<style>

</style>