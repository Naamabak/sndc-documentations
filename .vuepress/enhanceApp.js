export default ({ router }) => {
  router.beforeEach((to, from, next) => {
    const redirectList = {
      "/fiches/ir_esm_r": "/snds/fiches/ir_esm_r.html",
      "/fiches/lpp.html": "/snds/fiches/lpp.html",
      "/fiches/historique_donnees.html": "/snds/fiches/historique_donnees.html",
      "/fiches/activite_en_double.html": "/snds/fiches/activite_en_double.html",
    };
    const redirect = redirectList[to.path];
    if (redirect) {
      next({ path: redirect });
    } else next();
  });
};
