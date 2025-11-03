import { createElementBlock as p, openBlock as s, createElementVNode as r, toDisplayString as u, createApp as d } from "vue";
const i = (o, t) => {
  const e = o.__vccOpts || o;
  for (const [c, n] of t)
    e[c] = n;
  return e;
}, l = {
  data() {
    return { count: 0 };
  }
}, a = { class: "my-widget" };
function _(o, t, e, c, n, m) {
  return s(), p("div", a, [
    t[1] || (t[1] = r("h2", null, "Hello dari Vue! 😊", -1)),
    r("p", null, "Counter: " + u(n.count), 1),
    r("button", {
      onClick: t[0] || (t[0] = (g) => n.count++)
    }, "+1")
  ]);
}
const f = /* @__PURE__ */ i(l, [["render", _], ["__scopeId", "data-v-ddfccd52"]]);
function y(o) {
  d(f).mount(o);
}
export {
  f as MyWidget,
  y as mountMyWidget
};
