Vue.component('my-modal', {
    props:['showModal'],

    data(){
        return{
           title: 'Este es el modal' 
        }
    },

    methods: {
        Modal(){
            this.$emit('close')
        }
    },

    template: `
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <h3>{{title}}</h3>
            <div>
                <slot name="body"></slot>
            </div>
            <footer>
              <button v-on:click="Modal">Cerrar</button>
            </footer>
          </div>
        </div>
      </div>`
  })
  
new Vue({
    el: '#app',

    data(){
        return {
            showModal:false,

        }
    },

    methods: {
        toggleModal(){
            this.showModal=!this.showModal
        }
    }
  })