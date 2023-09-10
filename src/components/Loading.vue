<template>

  読み込み中{{showDots}}

</template>

<script>
export default {
  data(){
    return {
      dots: 0
    }
  },
  created() {
    this.cycle()
  },
  computed: {
    showDots: function (){
      const dotArray = [];
      for(let i=0; i<this.dots; i++){
        dotArray.push(".")
      }
      for(let i=this.dots; i<3; i++){
        dotArray.push(" ")
      }
      console.log(dotArray)
      return dotArray.join("")
    }
  },
  methods: {
    cycle: function (){
      if(this.dots===3){
        this.dots = 0
      }else this.dots++;
      setTimeout(()=>{
        this.cycle();
      }, 800);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>