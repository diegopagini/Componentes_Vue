new Vue({
  el: '#app',
  
  data () {
    return {
      courses: [],
      title: '',
      time: 0
    }
  },
  
  computed: {
    totalTime: function() {
      return this.courses.reduce((acc, el) => {
        acc += Number(el.time) || 0;
        return acc;
      }, 0)
    }
  },
  
  methods: {
    addCourse() {
      const newCourse = {
        title: this.tile,
        time: this.time
      };
      this.courses.push(newCourse);
      this.clearInput();
    },

    clearInput(){
      this.title = '';
      this.time = 0;
    },
  }
})