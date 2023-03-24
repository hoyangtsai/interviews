<template>
  <button @click="handleClick">Follow</button>
</template>

<script>
export default {
  props: {
    user: String,
  },
  methods: {
    showMessage(user) {
      alert("Followed " + user);
    },

    handleClick() {
      const { user } = this;
      setTimeout(() => this.showMessage(user), 3000);
    },
  },
};
</script>