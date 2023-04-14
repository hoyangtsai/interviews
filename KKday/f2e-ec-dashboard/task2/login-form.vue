<template>
  <div>
    <form @submit="submitForm">
      <div id="username-row">
        <label for="username-input"></label>
        <input type="text" id="username-input" v-model="username" @input="checkValidation" />
      </div>

      <div id="password-row">
        <label for="password-input"></label>
        <input type="password" id="password-input" v-model="password" @input="checkValidation" />
      </div>

      <button type="submit" id="login-button" :disabled="!isValid">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data: function() {
    return {
      username: '',
      password: '',
    };
  },
  computed: {
    isValid: function() {
      return this.username && this.password;
    }
  },
  methods: {
    checkValidation: function() {
      this.isValid = this.username && this.passwordd;
    },
    submitForm: function() {
      if (!this.isDisabled) {
        this.$emit('submit', this.username, this.password);
      }
    }
  },
};
</script>
