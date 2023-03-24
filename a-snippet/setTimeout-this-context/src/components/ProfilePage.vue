<template>
  <button @click="handleClick">Follow</button>
</template>

<script>
export default {
  props: {
    user: String,
  },
  methods: {
    showMessage() {
      alert("Followed " + this.user);
    },

    handleClick() {
      setTimeout(this.showMessage, 3000);
    },
  },
};
</script>