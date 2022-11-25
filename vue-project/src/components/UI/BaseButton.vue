<template>
  <button :type="type" :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['type', 'mode'],
};
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #0b5394;
  border: none;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #263241;
  border-color: #263241;
}

.flat {
  background-color: transparent;
  color: #263241;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #0b5394;
  color: #fff;
}
</style>
