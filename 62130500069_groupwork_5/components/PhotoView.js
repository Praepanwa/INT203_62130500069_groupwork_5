app.component("view-photo", {
  props: {
    eiei: String,
  },
  template: /*html*/ `
    <div  class="fixed flex justify-center h-screen w-screen top-0 bg-black bg-opacity-90 z-1">
      <div class="h-screen m-8 relative">
    <button @click="closeImg()">
    <span
      class="material-icons 'far fa-2x fa-times-circle text-white cursor-pointer absolute inset-y-0 right-0 -m-4 ' ">
      highlight_off
    </span>
  </button>
  <img :src="eiei" @click="log" class="m-6 border border-4 border-white lg:h-5/6">
  </div>
  </div>
  `

    ,
  methods: {
    closeImg() {
      this.$emit("close");
    },
    log(){
      console.log(this.eiei);
    }
  }

});