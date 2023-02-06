<template>
  <div class="alert">
    <span class="closebtn" onclick="this.parentElement.style.display='none';"
      >&times;</span
    >
    Dans le cadre de l'amélioration continue de la documentation collaborative
    SNDS en ligne, le Health Data Hub souhaite recueillir vos idées et souhaits
    en termes de nouvelles fiches thématiques et de mises-à-jour de fiches.
    <a class="url" href="https://form.jotform.com/230221593031038">
      Nous vous remercions par avance pour la complétion de ce formulaire</a
    >
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
