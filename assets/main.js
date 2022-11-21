var app = new Vue({
  el: '#root',
  data: {
    indiceMail: [],
  },
  mounted() {},
  beforeUpdate() {},
  methods: {
    creaMail() {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
        console.log(response.data.response);
        let responseData = response.data.response;
        this.indiceMail.push(responseData);
        console.log(this.indiceMail);
      });
    },

    generate() {
      for (let i = 0; i < 10; i++) {
        this.creaMail();
      }
    },
  },
});
