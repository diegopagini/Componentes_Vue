var app = new Vue({
  el: "#app",
  data: {
    message: "",
    todos: [
      { text: "Aprender JavaScript." },
      { text: "Aprender sobre API." },
      { text: "Aprender Vue.js, ¿Por qué Angular y no Vue?" },
      { text: "Aprender Algoritmos." },
      { text: "Práctica en proyectos reales." },
    ],
  },
  methods: {
    addItem: function () {
      this.todos.push({ text: this.message });
      this.message = "";
      this.$refs.item.focus();
    },

    removeElement: function () {
      this.todos.shift();
    }
  },
});
