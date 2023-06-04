<template>
  <div class="login">
    <RouterView @customMethod="afterSumbit" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  methods: {
    afterSumbit() {
      // Switch to Library view after Login
      this.$router.push({ name: "library" });
    },
  },
});
</script>

<style></style>
