app.component("search-photo", {
    prop: {
      inputkey: String,
    },
    data(){
      return{
        isHidden: true,
        inputkey: "",
      }
    },
    template: 
        /*html*/
        `          <!-- search session -->
<div class="grid justify-items-stretch ">

  <div class="justify-self-center">
    <span class="material-icons">
      <button @click="isHidden=!isHidden"  :class="{show:isHidden == false}" type="button" class="bg-white">
        search
      </button>
    </span>
    <!-- input session -->
    <div class="searchForm" v-if="isHidden == false">
      <input v-model="inputkey" 
        class="rounded-md ml-2 p-1 w-80 border-2 placeholder-gray-500 placeholder-opacity-50 focus:outline-none text-black rounded-sm"
        type="text" placeholder="Searching position for finding member" />
      <button
        class="ml-2 p-1 rounded-md focus:outline-none bg-opacity-25 bg-gradient-to-r from-red-500 ring ring-offset-2 text-white"
        @click="toggleCancel">Cancel</button>
    </div>

  </div>

</div>`,
    methods : {
      toggleCancel() {
        this.inputkey = "";
        this.isHidden = !this.isHidden;
      },
      
    },
    watch:{
      inputkey:function(){
        this.$emit('searched',this.inputkey);
      }
    }
    
});