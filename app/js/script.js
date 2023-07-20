const app = Vue.createApp({
  data() {
    return {
      newTask: "",
      tasks: [],
    };
  },

  created() {
    axios.get("http://localhost/PHP-TODO-LIST-JSON/API/").then((res) => {
      this.tasks = res.data;
    });
  },
}).mount("#root");
