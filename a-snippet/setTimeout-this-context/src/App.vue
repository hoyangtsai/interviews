<template>
  <div id="app">
    <label>
      <b>Choose profile to view: </b>
      <select :value="user" @change="(e) => (user = e.target.value)">
        <option value="Dan">Dan</option>
        <option value="Sophie">Sophie</option>
        <option value="Sunil">Sunil</option>
      </select>
    </label>
    <h1>Welcome to {{ user }}'s profile!</h1>
    <p>
      <ProfilePage :user="user" />
      <b> (Component setTimeout) </b>
    </p>
    <p>
      <ProfilePageFix :user="user" />
      <b> (Component setTimeout fixed) </b>
    </p>
  </div>
</template>

<script>
import ProfilePage from "./components/ProfilePage";
import ProfilePageFix from "./components/ProfilePageFix";

export default {
  name: "App",
  data() {
    return {
      user: "Dan",
    };
  },
  components: {
    ProfilePage,
    ProfilePageFix,
  },
};
</script>
