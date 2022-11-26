<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResButtonMode"
      >Stored Resources</base-button
    >
    <base-button
      @click="setSelectedTab('add-resources')"
      :mode="addResButtonMode"
      >Add Resources</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResources from './AddResources.vue';

export default {
  components: {
    StoredResources,
    AddResources,
  },
  data() {
    return {
      selectedTab: 'stored-resources',
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
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: link,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
    removeResource(resourceId){
      const resourceIndex = this.storedResources.findIndex(resource => resource.id === resourceId);
      this.storedResources.splice(resourceIndex, 1);
    }
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      removeResource:  this.removeResource
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resources' ? null : 'flat';
    },
  },
};
</script>
