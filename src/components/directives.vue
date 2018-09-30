
<script>
import Vue from "vue";
// let focus = Vue.directive("focus", (el, binding, vnode, oldVnode) => {
//   el.value = "this is a global directive ";
//   el.focus();
//   console.log(el, binding, vnode, oldVnode);
// });
let focus = Vue.directive("focus", {
  inserted(el, binding, vnode, oldVnode) {
    el.value = "this is a global directive ";
    el.focus();
    console.log(el, binding, vnode, oldVnode);
  }
});
export default focus;
</script>

