<template>
  <the-header></the-header>
  <stored-resources :resources="storedResources"></stored-resources>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import StoredResources from './components/learning-resources/StoredResources.vue';

export default {
  components: {
    TheHeader,
    StoredResources,
  },
  data() {
    return {
      storedResources: [
        {
          id: 'sr1',
          title: 'Vue.js Documentation',
          description: 'The office Vue.js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'sr2',
          title: 'Udemy',
          description: 'Online courses ',
          link: 'https://www.udemy.com/',
        },
      ],
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
