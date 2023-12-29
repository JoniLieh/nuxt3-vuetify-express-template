<template>
  <div>
    <h1 class="text-h2">Home</h1>
    <v-row>
      <v-col xl="4" md="6">
        <v-card :loading="pending" title="GET">
          <v-card-text>
            <v-alert v-show="!!error" type="error" :text="error?.message || error?.data.error" :title="error?.statusCode?.toString()"
              variant="tonal" />

            <h5 class="text-h5" v-text="data"></h5>
          </v-card-text>

          <v-card-actions>
            <v-btn @click="execute" color="primary">execute</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col xl="4" md="6">
        <v-card :loading="pendingpost" title="POST">
          <v-card-text>
            <v-alert v-show="!!errorpost" type="error" :text="errorpost?.message"
              :title="errorpost?.statusCode?.toString()" variant="tonal" />

            <h5 class="text-h5" v-text="datapost"></h5>
          </v-card-text>

          <v-card-actions>
            <v-btn @click="executepost" color="primary">execute</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
// /api/users timing out
const { data, pending, error, execute } = await useFetch('/api/')

const { data: datapost, pending: pendingpost, error: errorpost, execute: executepost } = await useFetch('/api/', {
  method: 'post',
  body: {
    foo: "bar"
  }
})
</script>

<style></style>