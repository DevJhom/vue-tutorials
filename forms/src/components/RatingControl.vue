<template>
  <ul>
    <li :class="{ active: active === 'poor' }">
      <button type="button" @click="activate('poor')">Poor</button>
    </li>
    <li :class="{ active: active === 'average' }">
      <button type="button" @click="activate('average')">Average</button>
    </li>
    <li :class="{ active: active === 'great' }">
      <button type="button" @click="activate('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      active: null,
    };
  },
  methods: {
    activate(option) {
      this.active = option;
    },
  },
};
</script>

<style scoped>
.active {
  background-color: mediumaquamarine;
  border: mediumaquamarine;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-content: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
