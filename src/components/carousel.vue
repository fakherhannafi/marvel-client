<template>
 <div>
<!-- <p>Asynchronous Property {{superHeroes}}</p> -->
<carousel 
 :perPage="4">
  <slide v-for="superHero in superHeroes" :key="superHero" >
    <div class="card"  >
      <img v-bind:src="`${superHero.imageUrl}${superHero.extension}`"/>
      <h1><button type="button" class="btn">{{superHero.name}}</button> </h1> 
         <p class="title">Number of comics:</p>
          <p class="number">{{superHero.numComics}}</p>
         <p class ="title">Names of his first three comics:</p>
         <p class="comicsName" v-if="superHero.numComics===0">This super Hero doesn't have any comic yet</p>
         <p class="comicsName" v-else>{{superHero.comic1Title}}<br>{{superHero.comic2Title}}<br>{{superHero.comic3Title}}</p>
      <p class="title">Description:</p> 
      <p class= "description" v-if="superHero.description ===''">No description found</p>
      <p class= "description" v-else> {{superHero.description}}</p>
      
    </div>       
  </slide>
  </carousel>
</div>
 
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import webcomData from "../services/webcom";
export default {
  components: {
    Carousel,
    Slide
  },
  data: function() {
    return {
      superHeroes: null,
      isProcessing: true
    };
  },
  /* async mounted(){
    this.superHeroes = await webcomData.getData();
    console.log(this.superHeroes);
  }, */

  mounted() {
    webcomData.getData().then(res => {
      this.superHeroes = res;
      console.log(this.superHeroes);
      
      //this.isProcessing = false;
    });
  }

  /*  asyncComputed: {
    myResolvedValue() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          isProcessing=false;
          resolve(webcomData.getData());
        }, 200);
      });
    }
  } */
};
</script>

<style>
.card {
  flex-direction: column;
  justify-content: center;
  font-family: "Open Sans", sans-serif;
  font-size: 100%;
  box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 350px;
  margin: auto;
  text-align: center;
  font-family: arial;
}
.btn {
  color: #fff;
  width: 130px;
  height: 42px;
  outline: none;
  border: none;
  display: block;
  cursor: pointer;
  font-weight: 300;
  margin-left: auto;
  margin-right: auto;
  border-radius: 70px;
  box-shadow: 0 13px 26px rgba(#000, 0.16), 0 3px 6px rgba(#000, 0.16);
}
.title {
  color: #000000;
  font-size: 0.8em;
  font-weight: 300;
  text-align: center;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}
.number {
  color: #d30c0c;
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
}
.comicsName {
  color: #7c8097;
  font-size: 0.75em;
  padding-top: 0%;
  font-weight: bold;
  text-align: center;
}

.description {
  text-align: center;
  text-justify: auto;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: rgb(165, 11, 11);
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}
</style>
