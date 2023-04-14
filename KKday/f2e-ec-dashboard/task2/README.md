# Create a login form component in Vue

Your task is to create a simple login form component in Vue.

The form should consist of two input fields: one for `username` and one for `password`. Each input should update its `value` attribute on input change.

There should also be a Submit button. It should emit the `submit` event when clicked.

The `onSubmit` listener is defined in the parent component and accepts two parameters: `username` and `password` (in that order).

When the Submit button is clicked, the `submit` event should be emitted with `$emit`.

The application uses Vue 2.6.12.

Requirements

- Create an `input` element for the `username` field. It should have its id set to `username-input` and `type` attribute set to `text`.
- The `username` input should update its `value` attribute on being changed with the entered username.
- Create an `input` element for the `password` field. It should have its id set to `password-input` and `type` attribute set to `password`.
- The `password` input should update its `value` attribute on being changed with the entered password
- Create a Submit button with its id set to `login-button`.
- The Submit button should be disabled (`disabled` attribute set to `true`) until both `username` and `password` fields are filled.
- The `submit` event should be emitted when the Submit button is clicked.
- The `submit` event should be emitted with `username` and `password` passed as parameters.

The styling and layout of the components is not assessed. Place them within the main `div` in the provided starting code. Wrapping inputs and the Submit button in the `form` element is not needed.

## Solution

```js
// login-form.vue

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

```
