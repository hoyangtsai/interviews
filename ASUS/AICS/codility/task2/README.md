# Build a side menu component

Implement a VueJS component that renders a dynamic and expandable side-menu-like list of items

1. The outermost tag of the component is a `div` with a class of `menu-wrapper`. Initially it will contain nothing, and your task is to create the code that will display the side-menu there.
2. The component will receive a property named `menuConfig` which will contain the configuration of the side-menu data. This will be an array of objects containing `title` (string) and optional `subItems` (array of strings). An example menuConfig may appear as follows:

    ```json
    [
      {
        title: "Home",
      },
      {
        title: "Services",
        subItems: ["Cooking", "Cleaning"]
      }
    ]
    ```

3. Every menu item should be displayed inside a separate corresponding div. This div should have a dynamically created attribute, `data-testid`, in the form: `first-level-{lowercase-title-name-here}`. So, for example, if some item from menuConfig contained a title of Home, the div should have a `data-testid` containing `first-level-home`.

4. Every div from the previous point should contain within it:

   - title. For example, for an item with the title Home, the text Home should appear in this div.
   - button with a dynamic data-testid in the form: `button-{lowercase-title-name-here}` (for example, button-home). The button should only be displayed when there are subItems for the given menu item (a non-empty subItems array). When clicking the button, the submenu (ul list described in the next point) should appear when the menu is hidden, and be removed when the menu is already expanded. The text inside the button should be Expand when the given menu is not expanded, and Hide if the menu has already been expanded.
   - u1 list. The ul tag should have a data-testid in the form: `ul-{lowercase-title-here}`, so if we had a list for the Home title, the data-testid should be ul-home.
   - The 1i tags inside the aforementioned u tag. Each 1i should have a `data-testid` in the form: `li-{lowercase-title-name-here-}-{lowercase-subitem-name-here}`. So, for example, for the Home title and the subItems Main and Services, the li data-testid should be `li-home-main` and `1i-home-services`. Inside every 1i tag there should be a subItem name (taken from the array subItems). The display state of these submenu lists is controlled by the aforementioned corresponding buttons.

5. Only one submenu should be in the `expanded` state at any time. If one of the submenus is open and then some other menu item button is clicked, the previously expanded submenu should be hidden and the new one should appear.
6. Tests will follow elements by their data-testid, so invisible elements should not be rendered. Do not control elements' visibility using CSS properties.

## Hints

- Design/styling is not assessed and will not affect your score. You should focus only on implementing the requirements
- Initially, no subitems should be visible; in other words, no menu item should be expanded when it contains some `subItems`(no `ul` in the DOM).
- Every title in menuConfig will be unique, so you do not have to worry about duplicate IDs in the code.
- No title or potential subtitle can have an empty value.
- Every title and subtitle contains only letters and consists of just one word.

## Environment

- vue 2.7.7

## Solution

```js
// side-menu.vue

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
```
