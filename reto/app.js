new Vue({
    el: '#app',
    
    data () {
      return {
          courses: [],
          title:'',
          time:null
      }
    },
    
    computed: {
        totalTime(){
            let valor=this.courses
            .map(el => Number(el.time))
            .reduce((a=0,b) => a+b )
            return valor
        }
    },
    
    methods: {
        addCourse(){
            let newCurse={title:this.title,time:this.time}
            this.courses.push(newCurse)
            this.title=''
            this.time=null
        }
    }
  })