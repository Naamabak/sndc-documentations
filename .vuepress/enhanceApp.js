export default ({ router }) => {
  router.beforeEach((to, from, next) => {
    const redirectList = {
      "/fiches/ir_esm_r": "/snds/fiches/ir_esm_r.html",
    };
    const redirect = redirectList[to.path];

    if (redirect) {
      next({ path: redirect });
    } else next();
  });
};
