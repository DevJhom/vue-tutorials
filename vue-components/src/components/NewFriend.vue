<script>
export default {
    name: 'NewFriend',
    emits: ['add-contact'],
    data() {
        return {
            enteredName: '',
            enteredPhone: '',
            enteredEmail: '',
        }
    },
    methods: {
        submitData() {
            this.$emit('add-contact', this.enteredName, this.enteredPhone, this.enteredEmail);
        }
    }
};
</script>

<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="">Name</label>
      <input type="text" v-model="enteredName"/>
    </div>
    <div>
      <label for="">Phone</label>
      <input type="text" v-model="enteredPhone"/>
    </div>
    <div>
      <label for="">Email</label>
      <input type="text" v-model="enteredEmail"/>
    </div>
    <div>
        <button type="submit">Add Contact</button>
    </div>
  </form>
</template>

<style>
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
