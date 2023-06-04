<template>
  <div class="sign-in">
    <h1>Sign In Page!</h1>
    <form @submit.prevent="handleButton">
      <div>
        <label>Username</label>
        <input type="username" v-model="authDetails.username" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" v-model="authDetails.password" />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { SigninAuthDetails } from "@/model/AuthDetails";
import authService from "@/service/authService";
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      authDetails: {
        username: "",
        password: "",
      } as SigninAuthDetails,
    };
  },
  emits: ["customMethod"],
  methods: {
    async handleButton() {
      await authService.login(this.authDetails)
      this.$emit("customMethod");
    },
  },
});
</script>
