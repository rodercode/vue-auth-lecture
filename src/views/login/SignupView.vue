<template>
  <div class="sign-in">
    <h1>Create new account</h1>
    <form @submit.prevent="handleButton">
      <div>
        <label>Username</label>
        <input type="username" v-model="authDetails.username" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" v-model="authDetails.password" />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script lang="ts">
import { SignupAuthDetails } from "@/model/AuthDetails";
import authService from "@/service/authService";
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      authDetails: {
        username: "",
        password: "",
      } as SignupAuthDetails,
    };
  },
  emits: ["customMethod"],
  methods: {
    async handleButton() {
      await authService.register(this.authDetails);
      this.$emit("customMethod");
    },
  },
});
</script>
