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

  methods: {
    addTask() {
      const data = { 'task': this.newTask };
      const config = {
        headers: { "Content-Type": "multipart/form-data" },
      };
      axios
        .post("http://localhost/PHP-TODO-LIST-JSON/API/", data, config)
        .then((res) => {
          this.tasks = res.data;
          this.newTask = '';
        });
    },
  },
}).mount("#root");
