<template>
  <h2>{{ username }}</h2>
  <h3>{{ age }}</h3>
</template>

<script>
import { computed, inject } from 'vue';
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';

export default {
  props: ['firstname', 'lastname'],
  setup(props, context) {
    const username = computed(function () {
      return props.firstname + ' ' + props.lastname;
    });

    console.log(context);
    context.emit('save-data', 1);

    const age = inject('userAge');
    console.log(age);

    onBeforeMount(function () {
      console.log('onBeforeMount');
    });
    onMounted(function () {
      console.log('onMounted');
    });
    onBeforeUpdate(function () {
      console.log('onBeforeUpdate');
    });
    onUpdated(function () {
      console.log('onUpdated');
    });
    onBeforeUnmount(function () {
      console.log('onBeforeUnmount');
    });
    onUnmounted(function () {
      console.log('onUnmounted');
    });

    return {
      username,
      age,
    };
  },
};
</script>
