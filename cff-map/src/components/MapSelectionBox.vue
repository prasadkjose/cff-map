

<script>
import ServicesIcons from './Icons.vue'
// import Store from './VuexStore.vue'
import Store from './../store/index'


export default {
  name: 'modal',
  methods: {
    close() {
      this.$emit('close')
    },
  },
    computed: {
      selectionUpdate () {
        return {
          name : Store.state.MapPointerSelectionStates.name,
          address : Store.state.MapPointerSelectionStates.address,
          mail:Store.state.MapPointerSelectionStates.mail,
          services : Store.state.MapPointerSelectionStates.services
          }
      }
    },

    components: {
      ServicesIcons
    }
}
</script>

<template>
  <transition name="modal-fade">
      <div class="modal-backdrop">
        <div class="modal"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
        >
          <header
            class="modal-header"
            id="modalTitle"        
          >
            
              {{Object.values(selectionUpdate)[0]}}
              <br>
              <button
                type="button"
                class="btn-close"
                @click="close"
                aria-label="Close modal"
              >
                x
              </button>          
          </header>
          <section
            class="modal-body"
            id="modalDescription"
          >          
            {{Object.values(selectionUpdate)[1]}}
          </section>
          <footer class="modal-footer">       
            {{Object.values(selectionUpdate)[2]}}   
          </footer>
          <section class="ServiceIcons">
            <services-icons :services="Object.values(selectionUpdate)[3]" />            
          </section>
        </div>
      </div>
  </transition>
</template>

<style scoped>


  .modal-backdrop {
    position: absolute;
    left:  45vw;
    top: 40vh;
    z-index: 1;
}
  
  .modal {
    background: #FFFFFF;
    bottom: 110vh;
    width: 20vw;
    height: 30vh;
    left: 30vw;
    box-shadow: 0px 0px 3px 1px rgb(165, 165, 165);     
    display: flex;
    flex-direction: column;
    
    
  }
  .ServiceIcons{
    padding: 10px 10px;
  }
 
  .modal-header {
    color: #494949;
    justify-content: space-between;
    font-weight: bold;
    font-size: 1em;
    padding: 15px 15px 0px 15px;
    display: flex;
  }

  .modal-footer {
    /* border-top: 1px solid #eeeeee; */
    display: flex;
    padding: 5px 15px;
    font-size: 0.9em;
    color: #6E6E6E;


    
  }

  .modal-body {
    position: relative;
    padding: 0px 10px 15px 15px;
    color: #6E6E6E;
    font-size: 1em;

  }

  .btn-close {
    border: none;
    font-size: 20px;    
    cursor: pointer;
    font-weight: bold;
    color: #6E6E6E;
    background: transparent;
  }  

@media screen and (min-width: 200px) and (max-width: 700px)  {
  .modal-backdrop {    
    position: absolute;
    left:  6vw;
    top: 65vh;
    z-index: 1;
  }  
  .modal {
    bottom: 110vh;
    width: 55vw;
    height: 20vh;
    left: 30vw;
    font-size: 0.9em;    
  }
   .ServiceIcons{
    padding: 0px 10px;
  }
}

</style>
