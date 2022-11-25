<template>
  <section class="container">
    <user-data :firstname="firstName" :lastname="lastName"></user-data>
    <button @click="setAge">Change Age</button>
    <br><br>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <!-- <input type="text" placeholder="Last Name" v-model="lastName" /> -->
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import { ref, reactive, computed, watch, provide } from 'vue';
import UserData from './components/UserData.vue'

export default {
  components: {
    UserData
  },
  setup() {
    const userAge = ref('21');
    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);

    const user = reactive({
      name: 'Micheal',
      age: 21,
    });

    // setTimeout(function () {
    //   userName.value = 'Micheal Jackson';
    //   userAge.value = '40';

    //   user.name = 'Micheal Jackson';
    //   user.age = '40';

    // }, 2000);

    const userName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });

    function setAge() {
      userAge.value = '40';
    }

    function setLastName(){
      lastName.value = lastNameInput.value.value;
    }

    //watch takes 2 arguments - a dependency and a function
    //the function also receives 2 arguments - new value and old value
    watch([firstName, lastName], function (newValue, oldValue) {
      console.log(newValue);
      console.log(oldValue);
    });

    //provide() takes 2 arguments - name and value
    provide('userAge', userAge);

    return {
      // userName,
      // userAge,
      user,
      setAge,
      userName,
      firstName,
      lastName,
      setLastName,
      lastNameInput
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
