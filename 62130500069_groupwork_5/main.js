const app = Vue.createApp ({
    data() {
      return {
        members: [
          {
            id: 1,
            img: "images/winter.jpg",
            ae: "images/aewinter.jpg",
            mbname: "Winter",
            position: "Lead Vocalist, Lead Dancer, Visual",
            like: false,
            imgdefault: "images/winter.jpg",
          },
  
          {
            id: 2,
            img: "images/karina.jpg",
            ae: "images/aekarina.jpg",
            mbname: "Karina",
            position:
              "Leader, Main Dancer, Lead Rapper, Sub Vocalist, Face Of The Group",
            like: false,
            imgdefault: "images/karina.jpg",
          },
  
          {
            id: 3,
            img: "images/giselle.jpg",
            ae: "images/aegiselle.jpg",
            mbname: "Giselle",
            position: "Main Rapper, Sub Vocalist",
            like: false,
            imgdefault: "images/giselle.jpg",
          },
  
          {
            id: 4,
            img: "images/ningning.jpg",
            ae: "images/aeningning.jpg",
            mbname: "Ningning",
            position: "Main Vocalist, Youngest member",
            like: false,
            imgdefault: "images/ningning.jpg",
          },
        ],
        inputkey: "",
        hasView: false,
        viewImg: "",
      };
    },
    methods: {
      toggleLike(id) {
        for (let index = 0; index <= this.members.length; index++) {
          if (this.members[index].id == id) {
            this.members[index].like = !this.members[index].like;
            break;
          }
        }
      },
    
      hoverimg(index) {
        this.members[index-1].imgdefault = this.members[index-1].ae;
  
        //  console.log(this.members[index])
      },
      unhover(index) {
        this.members[index-1].imgdefault = this.members[index-1].img;
      },
  
      
      toggleImg(id) {
        for (let index = 0; index <= this.members.length; index++) {
          if (this.members[index].id == id) {
            this.viewImg = this.members[index].img;
            this.hasView = true;
            break;
          }
        
        }
        // console.log(this.viewImg);
      },
    
    },
    computed: {
      countliked() {
        return this.members.filter((mb) => mb.like).length;
      },

      searching() {
        return this.members.filter((member) => {
          return member.position.toLowerCase().includes(this.inputkey.toLowerCase());
        });
      },
    },
  });
 
  