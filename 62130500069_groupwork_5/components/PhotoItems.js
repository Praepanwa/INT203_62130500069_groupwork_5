app.component("photo-list",{
    props:{
        member:Object,
    },
    template:
    /*html*/
    `<div class="card p-3">
    <div class="media">

      <img v-bind:src="member.imgdefault" @mouseover="onHoverimg(member.id)" @mouseout="onUnhover(member.id)" @click="zoomIn(member.id)"
        class="mr-3 w-1/2">
      <div class="media-body">
        <h5 class="mt-2 mb-0">{{member.mbname}}</h5>
        <div class="grid grid-cols-2 gap-6 ">
          <div class="d-flex flex-row justify-content-between align-text-center w-24 min-w-full md:min-w-0 ">
            <small class="text-muted">{{member.position}}</small>
          </div>

          <span v-show=!member.like @click="pressedLike(member.id)"><img
              src='./images/baseline_favorite_border_black_36dp.png'></span>
          <span v-show=member.like @click="pressedLike(member.id)"><img
              src='./images/baseline_favorite_black_36dp.png'></span>

        </div>
      </div>

    </div>
  </div>`,
  methods:{
    pressedLike(id) {
       this.$emit("at-liked",id);
      },
      onHoverimg(index) {
        this.$emit("on-Hv",index);
  
        //  console.log(this.members[index])
      },
      onUnhover(index) {
        this.$emit("un-Hv",index);;
      },
      zoomIn(id){
        this.$emit("zoom-In",id);
      }

  }

})