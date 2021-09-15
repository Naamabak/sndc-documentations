<template>
    <a :href="href"
        v-on:mouseover="shown = true"
        v-on:mouseleave="shown = false"
        class="link-with-preview">{{text}}
         <div class="parentcard">
      <div id="mycard" class="card"
          v-show="shown">
        <img :src="previewImg" alt=""
             class="card-img-top">
        <div  class="card-body">
            <h5  class="card-title">{{previewTitle}}</h5>
            <div class="card-text">{{previewText}}</div>
        </div>
      </div>
    </div></a>
</template>

<script>
export default {
  name : 'link-previewer',
  props: {
      href : String,
      text : String,
      previewTitle : String,
      previewImg : String,
      previewText : String
  },

  data() {
      return {
          shown: false
      };
  },

  methods: {
  }
}
</script>

<style>
.link-with-preview {
    position: relative;
}

.parentcard {
    width: 250px;
    position: absolute;
    background-color: #fff;
    z-index: 1000;
    border: none;

}

#mycard .card {
    width: 250px;

    font-size: 10px;
    color: black;
    z-index: 100;

    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    display: none;
    background-color: #fff;
    
}

#mycard .card img {
    width: 150px;
}

 .card-title {
    font-size: 14px;
    margin-bottom: 0.5rem;
    color: black;
    margin-top: 0;
}

 .card-body {
  flex: 1 1 auto;
  padding: 1rem 1rem;
  background: #fff;
  margin-top: 0;
}

.card-text:last-child {
  margin-bottom: 0;
  color: black;
  font-size: 11px;
}

.card-img,
.card-img-top {
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
  margin-bottom: 0;
}

</style>