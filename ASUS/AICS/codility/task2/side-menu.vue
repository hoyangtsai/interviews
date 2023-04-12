<template>
  <div class="menu-wrapper">
    <div v-for="item in menuConfig" :key="item.title" :data-testid="'first-level-' + item.title.toLowerCase()">
      <span>{{ item.title }}</span>
      <button v-if="item.subItems" :data-testid="'button-' + item.title.toLowerCase()" @click="toggleSubMenu(item.title)">{{ buttonLabel(item.title) }}</button>
      <ul v-if="subMenuVisible(item.title)" :data-testid="'ul-' + item.title.toLowerCase()">
        <li v-for="subItem in item.subItems" :key="subItem" :data-testid="'li-' + item.title.toLowerCase() + '-' + subItem.toLowerCase()">{{ subItem }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidemenu",
  props: ["menuConfig"],
  data() {
    return {
      expandedMenu: null
    };
  },
  methods: {
    toggleSubMenu(title) {
      if (this.expandedMenu === title) {
        this.expandedMenu = null;
      } else {
        this.expandedMenu = title;
      }
    },
    subMenuVisible(title) {
      return this.expandedMenu === title;
    },
    buttonLabel(title) {
      if (this.expandedMenu === title) {
        return "Hide";
      } else {
        return "Expand";
      }
    }
  }
};
</script>
