new Vue({
    el: '#app',
    
    data () {
      return {
          courses: [],
          title:'',
          time:null,
          filled:false
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
            if(this.title && this.time){
                let newCurse={title:this.title,time:this.time}
                this.courses.push(newCurse)
                this.title=''
                this.time=null
            }else{
                this.filled=true
            }
        }
    }
  })