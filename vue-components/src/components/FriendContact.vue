<template>
  <li>
    <h2>
      {{ name }} <small>{{ favorite ? "(favorite)" : "" }}</small>
    </h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ email }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  emit: ["toggle-fav"],
  // emits: {
  //   "toggle-fav": function(id) {
  //     if(id) {
  //       return true;
  //     }else{
  //       console.warn('Id is missing');
  //       return false;
  //     }
  //   }
  // },
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    favorite: {
      type: Boolean,
      required: false,
      default: false,
      validator: function (value) {
        return value === true || value === false;
      },
    },
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-fav", this.id);
    },
  },
};
</script>
