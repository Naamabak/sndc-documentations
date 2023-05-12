<template>
  <div class="alert">
    <span class="closebtn" onclick="this.parentElement.style.display='none';"
      >&times;</span
    >
    <div class="headerDiv">
      📣 La 4ème vague de candidatures pour l'AMI BOAS (Bibliothèque Ouverte
      d'Algorithmes en Santé) est ouverte jusqu'au 26 juin ! 📣
    </div>
    <br />
    Vous souhaitez contribuer à l'évaluation d'algorithmes développés par des
    institutions nationales afin de faciliter la manipulation des données du
    SNDS à des fins de recherche ?
    <a class="url" href="https://www.health-data-hub.fr/ami-boas"
      >Retrouvez ici</a
    >
    toutes les informations relatives au programme.
  </div>
</template>

<script>
export default {
  name: "Form",

  props: {
    threshold: {
      type: Number,
      default: 300,
    },
  },
};
</script>

<style lang="stylus" scoped>
.headerDiv {
  font-weight: 500;
}
.alert {
  font-size: 90%;
  border-radius: 15px;
  padding: 10px;
  background-color: #7DE3FF;
  position: fixed;
  top: 5rem;
  right: 2rem;
  width: 10rem;
  z-index: 10;
  -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 1s; /* Firefox < 16 */
   -ms-animation: fadein 1s; /* Internet Explorer */
    -o-animation: fadein 1s; /* Opera < 12.1 */
       animation: fadein 1s;
}
.closebtn {
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}
.url{
  text-decoration: underline;
  font-size: 110%;
  color: #764DFF;
}
.url:hover{
  color: #5939BF;
}
@keyframes fadein {
  from {
      opacity:0;
  }
  to {
      opacity:1;
  }
}
@-moz-keyframes fadein { /* Firefox */
  from {
      opacity:0;
  }
  to {
      opacity:1;
  }
}
@-webkit-keyframes fadein { /* Safari and Chrome */
  from {
      opacity:0;
  }
  to {
      opacity:1;
  }
}
@-o-keyframes fadein { /* Opera */
  from {
      opacity:0;
  }
  to {
      opacity: 1;
  }
}
</style>
