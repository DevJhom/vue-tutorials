<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h2>{{ userAge }}</h2>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" v-model="lastName" />
    </div>
  </section>
</template>

<script>
import { ref, computed, watch } from 'vue';
// import { reactive } from 'vue';

export default {
  setup() {
    // const user = reactive({
    //   name: 'Micheal',
    //   age: 21,
    // }
    const firstName = ref('');
    const lastName = ref('');
    const userAge = ref('21');

    const userName = computed(function () {
      return firstName.value + '' + lastName.value;
    });

    watch([userName, userAge], function (newValues, oldValues) {
      console.log(newValues);
      console.log(oldValues);
    });

    function setAge() {
      userAge.value = 32;
    }

    return {
      userName,
      userAge,
      setAge,
      firstName,
      lastName,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
