/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function hs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Q = {}, Ct = [], Be = () => {
}, Ir = () => !1, xn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ps = (e) => e.startsWith("onUpdate:"), fe = Object.assign, gs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, eo = Object.prototype.hasOwnProperty, $ = (e, t) => eo.call(e, t), V = Array.isArray, Ot = (e) => Rn(e) === "[object Map]", Nr = (e) => Rn(e) === "[object Set]", j = (e) => typeof e == "function", se = (e) => typeof e == "string", ut = (e) => typeof e == "symbol", Z = (e) => e !== null && typeof e == "object", Dr = (e) => (Z(e) || j(e)) && j(e.then) && j(e.catch), Mr = Object.prototype.toString, Rn = (e) => Mr.call(e), to = (e) => Rn(e).slice(8, -1), Lr = (e) => Rn(e) === "[object Object]", ms = (e) => se(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ut = /* @__PURE__ */ hs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Sn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, no = /-\w/g, Ae = Sn(
  (e) => e.replace(no, (t) => t.slice(1).toUpperCase())
), so = /\B([A-Z])/g, bt = Sn(
  (e) => e.replace(so, "-$1").toLowerCase()
), An = Sn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ln = Sn(
  (e) => e ? `on${An(e)}` : ""
), ot = (e, t) => !Object.is(e, t), cn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Fr = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Qn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Hs;
const wn = () => Hs || (Hs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function _s(e) {
  if (V(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = se(s) ? lo(s) : _s(s);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (se(e) || Z(e))
    return e;
}
const ro = /;(?![^(]*\))/g, io = /:([^]+)/, oo = /\/\*[^]*?\*\//g;
function lo(e) {
  const t = {};
  return e.replace(oo, "").split(ro).forEach((n) => {
    if (n) {
      const s = n.split(io);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function vs(e) {
  let t = "";
  if (se(e))
    t = e;
  else if (V(e))
    for (let n = 0; n < e.length; n++) {
      const s = vs(e[n]);
      s && (t += s + " ");
    }
  else if (Z(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const co = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", uo = /* @__PURE__ */ hs(co);
function Hr(e) {
  return !!e || e === "";
}
const Vr = (e) => !!(e && e.__v_isRef === !0), hn = (e) => se(e) ? e : e == null ? "" : V(e) || Z(e) && (e.toString === Mr || !j(e.toString)) ? Vr(e) ? hn(e.value) : JSON.stringify(e, jr, 2) : String(e), jr = (e, t) => Vr(t) ? jr(e, t.value) : Ot(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], i) => (n[Fn(s, i) + " =>"] = r, n),
    {}
  )
} : Nr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Fn(n))
} : ut(t) ? Fn(t) : Z(t) && !V(t) && !Lr(t) ? String(t) : t, Fn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ut(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let be;
class fo {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = be, !t && be && (this.index = (be.scopes || (be.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = be;
      try {
        return be = this, t();
      } finally {
        be = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = be, be = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (be = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function ao() {
  return be;
}
let X;
const Hn = /* @__PURE__ */ new WeakSet();
class Br {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, be && be.active && be.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Hn.has(this) && (Hn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Gr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Vs(this), kr(this);
    const t = X, n = Ce;
    X = this, Ce = !0;
    try {
      return this.fn();
    } finally {
      Kr(this), X = t, Ce = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Es(t);
      this.deps = this.depsTail = void 0, Vs(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Hn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Yn(this) && this.run();
  }
  get dirty() {
    return Yn(this);
  }
}
let Ur = 0, Gt, kt;
function Gr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = kt, kt = e;
    return;
  }
  e.next = Gt, Gt = e;
}
function bs() {
  Ur++;
}
function ys() {
  if (--Ur > 0)
    return;
  if (kt) {
    let t = kt;
    for (kt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Gt; ) {
    let t = Gt;
    for (Gt = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function kr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Kr(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), Es(s), ho(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function Yn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Wr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Wr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Qt) || (e.globalVersion = Qt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Yn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = X, s = Ce;
  X = e, Ce = !0;
  try {
    kr(e);
    const r = e.fn(e._value);
    (t.version === 0 || ot(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    X = n, Ce = s, Kr(e), e.flags &= -3;
  }
}
function Es(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Es(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ho(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Ce = !0;
const $r = [];
function Qe() {
  $r.push(Ce), Ce = !1;
}
function Ye() {
  const e = $r.pop();
  Ce = e === void 0 ? !0 : e;
}
function Vs(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = X;
    X = void 0;
    try {
      t();
    } finally {
      X = n;
    }
  }
}
let Qt = 0;
class po {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class xs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!X || !Ce || X === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== X)
      n = this.activeLink = new po(X, this), X.deps ? (n.prevDep = X.depsTail, X.depsTail.nextDep = n, X.depsTail = n) : X.deps = X.depsTail = n, qr(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = X.depsTail, n.nextDep = void 0, X.depsTail.nextDep = n, X.depsTail = n, X.deps === n && (X.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Qt++, this.notify(t);
  }
  notify(t) {
    bs();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ys();
    }
  }
}
function qr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        qr(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Xn = /* @__PURE__ */ new WeakMap(), mt = Symbol(
  ""
), Zn = Symbol(
  ""
), Yt = Symbol(
  ""
);
function le(e, t, n) {
  if (Ce && X) {
    let s = Xn.get(e);
    s || Xn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new xs()), r.map = s, r.key = n), r.track();
  }
}
function qe(e, t, n, s, r, i) {
  const o = Xn.get(e);
  if (!o) {
    Qt++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (bs(), t === "clear")
    o.forEach(l);
  else {
    const c = V(e), h = c && ms(n);
    if (c && n === "length") {
      const a = Number(s);
      o.forEach((d, g) => {
        (g === "length" || g === Yt || !ut(g) && g >= a) && l(d);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), h && l(o.get(Yt)), t) {
        case "add":
          c ? h && l(o.get("length")) : (l(o.get(mt)), Ot(e) && l(o.get(Zn)));
          break;
        case "delete":
          c || (l(o.get(mt)), Ot(e) && l(o.get(Zn)));
          break;
        case "set":
          Ot(e) && l(o.get(mt));
          break;
      }
  }
  ys();
}
function Rt(e) {
  const t = W(e);
  return t === e ? t : (le(t, "iterate", Yt), Oe(e) ? t : t.map(he));
}
function Rs(e) {
  return le(e = W(e), "iterate", Yt), e;
}
const go = {
  __proto__: null,
  [Symbol.iterator]() {
    return Vn(this, Symbol.iterator, he);
  },
  concat(...e) {
    return Rt(this).concat(
      ...e.map((t) => V(t) ? Rt(t) : t)
    );
  },
  entries() {
    return Vn(this, "entries", (e) => (e[1] = he(e[1]), e));
  },
  every(e, t) {
    return ke(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ke(this, "filter", e, t, (n) => n.map(he), arguments);
  },
  find(e, t) {
    return ke(this, "find", e, t, he, arguments);
  },
  findIndex(e, t) {
    return ke(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ke(this, "findLast", e, t, he, arguments);
  },
  findLastIndex(e, t) {
    return ke(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ke(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return jn(this, "includes", e);
  },
  indexOf(...e) {
    return jn(this, "indexOf", e);
  },
  join(e) {
    return Rt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return jn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ke(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ht(this, "pop");
  },
  push(...e) {
    return Ht(this, "push", e);
  },
  reduce(e, ...t) {
    return js(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return js(this, "reduceRight", e, t);
  },
  shift() {
    return Ht(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ke(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ht(this, "splice", e);
  },
  toReversed() {
    return Rt(this).toReversed();
  },
  toSorted(e) {
    return Rt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Rt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ht(this, "unshift", e);
  },
  values() {
    return Vn(this, "values", he);
  }
};
function Vn(e, t, n) {
  const s = Rs(e), r = s[t]();
  return s !== e && !Oe(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = n(i.value)), i;
  }), r;
}
const mo = Array.prototype;
function ke(e, t, n, s, r, i) {
  const o = Rs(e), l = o !== e && !Oe(e), c = o[t];
  if (c !== mo[t]) {
    const d = c.apply(e, i);
    return l ? he(d) : d;
  }
  let h = n;
  o !== e && (l ? h = function(d, g) {
    return n.call(this, he(d), g, e);
  } : n.length > 2 && (h = function(d, g) {
    return n.call(this, d, g, e);
  }));
  const a = c.call(o, h, s);
  return l && r ? r(a) : a;
}
function js(e, t, n, s) {
  const r = Rs(e);
  let i = n;
  return r !== e && (Oe(e) ? n.length > 3 && (i = function(o, l, c) {
    return n.call(this, o, l, c, e);
  }) : i = function(o, l, c) {
    return n.call(this, o, he(l), c, e);
  }), r[t](i, ...s);
}
function jn(e, t, n) {
  const s = W(e);
  le(s, "iterate", Yt);
  const r = s[t](...n);
  return (r === -1 || r === !1) && ws(n[0]) ? (n[0] = W(n[0]), s[t](...n)) : r;
}
function Ht(e, t, n = []) {
  Qe(), bs();
  const s = W(e)[t].apply(e, n);
  return ys(), Ye(), s;
}
const _o = /* @__PURE__ */ hs("__proto__,__v_isRef,__isVue"), zr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ut)
);
function vo(e) {
  ut(e) || (e = String(e));
  const t = W(this);
  return le(t, "has", e), t.hasOwnProperty(e);
}
class Jr {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return s === (r ? i ? Oo : Zr : i ? Xr : Yr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = V(t);
    if (!r) {
      let c;
      if (o && (c = go[n]))
        return c;
      if (n === "hasOwnProperty")
        return vo;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      ue(t) ? t : s
    );
    if ((ut(n) ? zr.has(n) : _o(n)) || (r || le(t, "get", n), i))
      return l;
    if (ue(l)) {
      const c = o && ms(n) ? l : l.value;
      return r && Z(c) ? ts(c) : c;
    }
    return Z(l) ? r ? ts(l) : Cn(l) : l;
  }
}
class Qr extends Jr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    if (!this._isShallow) {
      const c = vt(i);
      if (!Oe(s) && !vt(s) && (i = W(i), s = W(s)), !V(t) && ue(i) && !ue(s))
        return c || (i.value = s), !0;
    }
    const o = V(t) && ms(n) ? Number(n) < t.length : $(t, n), l = Reflect.set(
      t,
      n,
      s,
      ue(t) ? t : r
    );
    return t === W(r) && (o ? ot(s, i) && qe(t, "set", n, s) : qe(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = $(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && qe(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!ut(n) || !zr.has(n)) && le(t, "has", n), s;
  }
  ownKeys(t) {
    return le(
      t,
      "iterate",
      V(t) ? "length" : mt
    ), Reflect.ownKeys(t);
  }
}
class bo extends Jr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const yo = /* @__PURE__ */ new Qr(), Eo = /* @__PURE__ */ new bo(), xo = /* @__PURE__ */ new Qr(!0);
const es = (e) => e, rn = (e) => Reflect.getPrototypeOf(e);
function Ro(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, i = W(r), o = Ot(i), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, h = r[e](...s), a = n ? es : t ? ns : he;
    return !t && le(
      i,
      "iterate",
      c ? Zn : mt
    ), {
      // iterator protocol
      next() {
        const { value: d, done: g } = h.next();
        return g ? { value: d, done: g } : {
          value: l ? [a(d[0]), a(d[1])] : a(d),
          done: g
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function on(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function So(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw, o = W(i), l = W(r);
      e || (ot(r, l) && le(o, "get", r), le(o, "get", l));
      const { has: c } = rn(o), h = t ? es : e ? ns : he;
      if (c.call(o, r))
        return h(i.get(r));
      if (c.call(o, l))
        return h(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && le(W(r), "iterate", mt), r.size;
    },
    has(r) {
      const i = this.__v_raw, o = W(i), l = W(r);
      return e || (ot(r, l) && le(o, "has", r), le(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const o = this, l = o.__v_raw, c = W(l), h = t ? es : e ? ns : he;
      return !e && le(c, "iterate", mt), l.forEach((a, d) => r.call(i, h(a), h(d), o));
    }
  };
  return fe(
    n,
    e ? {
      add: on("add"),
      set: on("set"),
      delete: on("delete"),
      clear: on("clear")
    } : {
      add(r) {
        !t && !Oe(r) && !vt(r) && (r = W(r));
        const i = W(this);
        return rn(i).has.call(i, r) || (i.add(r), qe(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !Oe(i) && !vt(i) && (i = W(i));
        const o = W(this), { has: l, get: c } = rn(o);
        let h = l.call(o, r);
        h || (r = W(r), h = l.call(o, r));
        const a = c.call(o, r);
        return o.set(r, i), h ? ot(i, a) && qe(o, "set", r, i) : qe(o, "add", r, i), this;
      },
      delete(r) {
        const i = W(this), { has: o, get: l } = rn(i);
        let c = o.call(i, r);
        c || (r = W(r), c = o.call(i, r)), l && l.call(i, r);
        const h = i.delete(r);
        return c && qe(i, "delete", r, void 0), h;
      },
      clear() {
        const r = W(this), i = r.size !== 0, o = r.clear();
        return i && qe(
          r,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    n[r] = Ro(r, e, t);
  }), n;
}
function Ss(e, t) {
  const n = So(e, t);
  return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    $(n, r) && r in s ? n : s,
    r,
    i
  );
}
const Ao = {
  get: /* @__PURE__ */ Ss(!1, !1)
}, wo = {
  get: /* @__PURE__ */ Ss(!1, !0)
}, Co = {
  get: /* @__PURE__ */ Ss(!0, !1)
};
const Yr = /* @__PURE__ */ new WeakMap(), Xr = /* @__PURE__ */ new WeakMap(), Zr = /* @__PURE__ */ new WeakMap(), Oo = /* @__PURE__ */ new WeakMap();
function To(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Po(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : To(to(e));
}
function Cn(e) {
  return vt(e) ? e : As(
    e,
    !1,
    yo,
    Ao,
    Yr
  );
}
function ei(e) {
  return As(
    e,
    !1,
    xo,
    wo,
    Xr
  );
}
function ts(e) {
  return As(
    e,
    !0,
    Eo,
    Co,
    Zr
  );
}
function As(e, t, n, s, r) {
  if (!Z(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Po(e);
  if (i === 0)
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const l = new Proxy(
    e,
    i === 2 ? s : n
  );
  return r.set(e, l), l;
}
function Kt(e) {
  return vt(e) ? Kt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function vt(e) {
  return !!(e && e.__v_isReadonly);
}
function Oe(e) {
  return !!(e && e.__v_isShallow);
}
function ws(e) {
  return e ? !!e.__v_raw : !1;
}
function W(e) {
  const t = e && e.__v_raw;
  return t ? W(t) : e;
}
function Io(e) {
  return !$(e, "__v_skip") && Object.isExtensible(e) && Fr(e, "__v_skip", !0), e;
}
const he = (e) => Z(e) ? Cn(e) : e, ns = (e) => Z(e) ? ts(e) : e;
function ue(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function No(e) {
  return ti(e, !1);
}
function Do(e) {
  return ti(e, !0);
}
function ti(e, t) {
  return ue(e) ? e : new Mo(e, t);
}
class Mo {
  constructor(t, n) {
    this.dep = new xs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : W(t), this._value = n ? t : he(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || Oe(t) || vt(t);
    t = s ? t : W(t), ot(t, n) && (this._rawValue = t, this._value = s ? t : he(t), this.dep.trigger());
  }
}
function Tt(e) {
  return ue(e) ? e.value : e;
}
const Lo = {
  get: (e, t, n) => t === "__v_raw" ? e : Tt(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return ue(r) && !ue(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function ni(e) {
  return Kt(e) ? e : new Proxy(e, Lo);
}
class Fo {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new xs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Qt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    X !== this)
      return Gr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Wr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Ho(e, t, n = !1) {
  let s, r;
  return j(e) ? s = e : (s = e.get, r = e.set), new Fo(s, r, n);
}
const ln = {}, pn = /* @__PURE__ */ new WeakMap();
let pt;
function Vo(e, t = !1, n = pt) {
  if (n) {
    let s = pn.get(n);
    s || pn.set(n, s = []), s.push(e);
  }
}
function jo(e, t, n = Q) {
  const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: l, call: c } = n, h = (I) => r ? I : Oe(I) || r === !1 || r === 0 ? ze(I, 1) : ze(I);
  let a, d, g, m, C = !1, T = !1;
  if (ue(e) ? (d = () => e.value, C = Oe(e)) : Kt(e) ? (d = () => h(e), C = !0) : V(e) ? (T = !0, C = e.some((I) => Kt(I) || Oe(I)), d = () => e.map((I) => {
    if (ue(I))
      return I.value;
    if (Kt(I))
      return h(I);
    if (j(I))
      return c ? c(I, 2) : I();
  })) : j(e) ? t ? d = c ? () => c(e, 2) : e : d = () => {
    if (g) {
      Qe();
      try {
        g();
      } finally {
        Ye();
      }
    }
    const I = pt;
    pt = a;
    try {
      return c ? c(e, 3, [m]) : e(m);
    } finally {
      pt = I;
    }
  } : d = Be, t && r) {
    const I = d, J = r === !0 ? 1 / 0 : r;
    d = () => ze(I(), J);
  }
  const B = ao(), N = () => {
    a.stop(), B && B.active && gs(B.effects, a);
  };
  if (i && t) {
    const I = t;
    t = (...J) => {
      I(...J), N();
    };
  }
  let P = T ? new Array(e.length).fill(ln) : ln;
  const L = (I) => {
    if (!(!(a.flags & 1) || !a.dirty && !I))
      if (t) {
        const J = a.run();
        if (r || C || (T ? J.some((ie, ee) => ot(ie, P[ee])) : ot(J, P))) {
          g && g();
          const ie = pt;
          pt = a;
          try {
            const ee = [
              J,
              // pass undefined as the old value when it's changed for the first time
              P === ln ? void 0 : T && P[0] === ln ? [] : P,
              m
            ];
            P = J, c ? c(t, 3, ee) : (
              // @ts-expect-error
              t(...ee)
            );
          } finally {
            pt = ie;
          }
        }
      } else
        a.run();
  };
  return l && l(L), a = new Br(d), a.scheduler = o ? () => o(L, !1) : L, m = (I) => Vo(I, !1, a), g = a.onStop = () => {
    const I = pn.get(a);
    if (I) {
      if (c)
        c(I, 4);
      else
        for (const J of I) J();
      pn.delete(a);
    }
  }, t ? s ? L(!0) : P = a.run() : o ? o(L.bind(null, !0), !0) : a.run(), N.pause = a.pause.bind(a), N.resume = a.resume.bind(a), N.stop = N, N;
}
function ze(e, t = 1 / 0, n) {
  if (t <= 0 || !Z(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, ue(e))
    ze(e.value, t, n);
  else if (V(e))
    for (let s = 0; s < e.length; s++)
      ze(e[s], t, n);
  else if (Nr(e) || Ot(e))
    e.forEach((s) => {
      ze(s, t, n);
    });
  else if (Lr(e)) {
    for (const s in e)
      ze(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && ze(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function nn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    On(r, t, n);
  }
}
function Ue(e, t, n, s) {
  if (j(e)) {
    const r = nn(e, t, n, s);
    return r && Dr(r) && r.catch((i) => {
      On(i, t, n);
    }), r;
  }
  if (V(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(Ue(e[i], t, n, s));
    return r;
  }
}
function On(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || Q;
  if (t) {
    let l = t.parent;
    const c = t.proxy, h = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const a = l.ec;
      if (a) {
        for (let d = 0; d < a.length; d++)
          if (a[d](e, c, h) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Qe(), nn(i, null, 10, [
        e,
        c,
        h
      ]), Ye();
      return;
    }
  }
  Bo(e, n, r, s, o);
}
function Bo(e, t, n, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const pe = [];
let Ve = -1;
const Pt = [];
let st = null, St = 0;
const si = /* @__PURE__ */ Promise.resolve();
let gn = null;
function ri(e) {
  const t = gn || si;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Uo(e) {
  let t = Ve + 1, n = pe.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = pe[s], i = Xt(r);
    i < e || i === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Cs(e) {
  if (!(e.flags & 1)) {
    const t = Xt(e), n = pe[pe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Xt(n) ? pe.push(e) : pe.splice(Uo(t), 0, e), e.flags |= 1, ii();
  }
}
function ii() {
  gn || (gn = si.then(li));
}
function Go(e) {
  V(e) ? Pt.push(...e) : st && e.id === -1 ? st.splice(St + 1, 0, e) : e.flags & 1 || (Pt.push(e), e.flags |= 1), ii();
}
function Bs(e, t, n = Ve + 1) {
  for (; n < pe.length; n++) {
    const s = pe[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      pe.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function oi(e) {
  if (Pt.length) {
    const t = [...new Set(Pt)].sort(
      (n, s) => Xt(n) - Xt(s)
    );
    if (Pt.length = 0, st) {
      st.push(...t);
      return;
    }
    for (st = t, St = 0; St < st.length; St++) {
      const n = st[St];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    st = null, St = 0;
  }
}
const Xt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function li(e) {
  try {
    for (Ve = 0; Ve < pe.length; Ve++) {
      const t = pe[Ve];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), nn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ve < pe.length; Ve++) {
      const t = pe[Ve];
      t && (t.flags &= -2);
    }
    Ve = -1, pe.length = 0, oi(), gn = null, (pe.length || Pt.length) && li();
  }
}
let xe = null, ci = null;
function mn(e) {
  const t = xe;
  return xe = e, ci = e && e.type.__scopeId || null, t;
}
function ui(e, t = xe, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && bn(-1);
    const i = mn(t);
    let o;
    try {
      o = e(...r);
    } finally {
      mn(i), s._d && bn(1);
    }
    return o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Us(e, t) {
  if (xe === null)
    return e;
  const n = Nn(xe), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, c = Q] = t[r];
    i && (j(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && ze(o), s.push({
      dir: i,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: c
    }));
  }
  return e;
}
function dt(e, t, n, s) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let c = l.dir[s];
    c && (Qe(), Ue(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Ye());
  }
}
const ko = Symbol("_vte"), Ko = (e) => e.__isTeleport, Wo = Symbol("_leaveCb");
function Os(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Os(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function fi(e, t) {
  return j(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    fe({ name: e.name }, t, { setup: e })
  ) : e;
}
function ai(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const _n = /* @__PURE__ */ new WeakMap();
function Wt(e, t, n, s, r = !1) {
  if (V(e)) {
    e.forEach(
      (C, T) => Wt(
        C,
        t && (V(t) ? t[T] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if ($t(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Wt(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? Nn(s.component) : s.el, o = r ? null : i, { i: l, r: c } = e, h = t && t.r, a = l.refs === Q ? l.refs = {} : l.refs, d = l.setupState, g = W(d), m = d === Q ? Ir : (C) => $(g, C);
  if (h != null && h !== c) {
    if (Gs(t), se(h))
      a[h] = null, m(h) && (d[h] = null);
    else if (ue(h)) {
      h.value = null;
      const C = t;
      C.k && (a[C.k] = null);
    }
  }
  if (j(c))
    nn(c, l, 12, [o, a]);
  else {
    const C = se(c), T = ue(c);
    if (C || T) {
      const B = () => {
        if (e.f) {
          const N = C ? m(c) ? d[c] : a[c] : c.value;
          if (r)
            V(N) && gs(N, i);
          else if (V(N))
            N.includes(i) || N.push(i);
          else if (C)
            a[c] = [i], m(c) && (d[c] = a[c]);
          else {
            const P = [i];
            c.value = P, e.k && (a[e.k] = P);
          }
        } else C ? (a[c] = o, m(c) && (d[c] = o)) : T && (c.value = o, e.k && (a[e.k] = o));
      };
      if (o) {
        const N = () => {
          B(), _n.delete(e);
        };
        N.id = -1, _n.set(e, N), Ee(N, n);
      } else
        Gs(e), B();
    }
  }
}
function Gs(e) {
  const t = _n.get(e);
  t && (t.flags |= 8, _n.delete(e));
}
wn().requestIdleCallback;
wn().cancelIdleCallback;
const $t = (e) => !!e.type.__asyncLoader, di = (e) => e.type.__isKeepAlive;
function $o(e, t) {
  hi(e, "a", t);
}
function qo(e, t) {
  hi(e, "da", t);
}
function hi(e, t, n = ce) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Tn(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      di(r.parent.vnode) && zo(s, t, n, r), r = r.parent;
  }
}
function zo(e, t, n, s) {
  const r = Tn(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  pi(() => {
    gs(s[t], r);
  }, n);
}
function Tn(e, t, n = ce, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Qe();
      const l = sn(n), c = Ue(t, n, e, o);
      return l(), Ye(), c;
    });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const Xe = (e) => (t, n = ce) => {
  (!en || e === "sp") && Tn(e, (...s) => t(...s), n);
}, Jo = Xe("bm"), Qo = Xe("m"), Yo = Xe(
  "bu"
), Xo = Xe("u"), Zo = Xe(
  "bum"
), pi = Xe("um"), el = Xe(
  "sp"
), tl = Xe("rtg"), nl = Xe("rtc");
function sl(e, t = ce) {
  Tn("ec", e, t);
}
const rl = "components";
function gi(e, t) {
  return ol(rl, e, !0, t) || e;
}
const il = Symbol.for("v-ndc");
function ol(e, t, n = !0, s = !1) {
  const r = xe || ce;
  if (r) {
    const i = r.type;
    {
      const l = Yl(
        i,
        !1
      );
      if (l && (l === t || l === Ae(t) || l === An(Ae(t))))
        return i;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      ks(r[e] || i[e], t) || // global registration
      ks(r.appContext[e], t)
    );
    return !o && s ? i : o;
  }
}
function ks(e, t) {
  return e && (e[t] || e[Ae(t)] || e[An(Ae(t))]);
}
const ss = (e) => e ? Li(e) ? Nn(e) : ss(e.parent) : null, qt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ fe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ss(e.parent),
    $root: (e) => ss(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => _i(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Cs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ri.bind(e.proxy)),
    $watch: (e) => Cl.bind(e)
  })
), Bn = (e, t) => e !== Q && !e.__isScriptSetup && $(e, t), ll = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: l, appContext: c } = e;
    let h;
    if (t[0] !== "$") {
      const m = o[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (Bn(s, t))
          return o[t] = 1, s[t];
        if (r !== Q && $(r, t))
          return o[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (h = e.propsOptions[0]) && $(h, t)
        )
          return o[t] = 3, i[t];
        if (n !== Q && $(n, t))
          return o[t] = 4, n[t];
        rs && (o[t] = 0);
      }
    }
    const a = qt[t];
    let d, g;
    if (a)
      return t === "$attrs" && le(e.attrs, "get", ""), a(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== Q && $(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      g = c.config.globalProperties, $(g, t)
    )
      return g[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: i } = e;
    return Bn(r, t) ? (r[t] = n, !0) : s !== Q && $(s, t) ? (s[t] = n, !0) : $(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: i, type: o }
  }, l) {
    let c, h;
    return !!(n[l] || e !== Q && l[0] !== "$" && $(e, l) || Bn(t, l) || (c = i[0]) && $(c, l) || $(s, l) || $(qt, l) || $(r.config.globalProperties, l) || (h = o.__cssModules) && h[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : $(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Ks(e) {
  return V(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let rs = !0;
function cl(e) {
  const t = _i(e), n = e.proxy, s = e.ctx;
  rs = !1, t.beforeCreate && Ws(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: c,
    inject: h,
    // lifecycle
    created: a,
    beforeMount: d,
    mounted: g,
    beforeUpdate: m,
    updated: C,
    activated: T,
    deactivated: B,
    beforeDestroy: N,
    beforeUnmount: P,
    destroyed: L,
    unmounted: I,
    render: J,
    renderTracked: ie,
    renderTriggered: ee,
    errorCaptured: Pe,
    serverPrefetch: Ze,
    // public API
    expose: Ie,
    inheritAttrs: et,
    // assets
    components: ft,
    directives: Ne,
    filters: Lt
  } = t;
  if (h && ul(h, s, null), o)
    for (const z in o) {
      const k = o[z];
      j(k) && (s[z] = k.bind(n));
    }
  if (r) {
    const z = r.call(n, n);
    Z(z) && (e.data = Cn(z));
  }
  if (rs = !0, i)
    for (const z in i) {
      const k = i[z], Ge = j(k) ? k.bind(n, n) : j(k.get) ? k.get.bind(n, n) : Be, tt = !j(k) && j(k.set) ? k.set.bind(n) : Be, De = we({
        get: Ge,
        set: tt
      });
      Object.defineProperty(s, z, {
        enumerable: !0,
        configurable: !0,
        get: () => De.value,
        set: (me) => De.value = me
      });
    }
  if (l)
    for (const z in l)
      mi(l[z], s, n, z);
  if (c) {
    const z = j(c) ? c.call(n) : c;
    Reflect.ownKeys(z).forEach((k) => {
      un(k, z[k]);
    });
  }
  a && Ws(a, e, "c");
  function re(z, k) {
    V(k) ? k.forEach((Ge) => z(Ge.bind(n))) : k && z(k.bind(n));
  }
  if (re(Jo, d), re(Qo, g), re(Yo, m), re(Xo, C), re($o, T), re(qo, B), re(sl, Pe), re(nl, ie), re(tl, ee), re(Zo, P), re(pi, I), re(el, Ze), V(Ie))
    if (Ie.length) {
      const z = e.exposed || (e.exposed = {});
      Ie.forEach((k) => {
        Object.defineProperty(z, k, {
          get: () => n[k],
          set: (Ge) => n[k] = Ge,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  J && e.render === Be && (e.render = J), et != null && (e.inheritAttrs = et), ft && (e.components = ft), Ne && (e.directives = Ne), Ze && ai(e);
}
function ul(e, t, n = Be) {
  V(e) && (e = is(e));
  for (const s in e) {
    const r = e[s];
    let i;
    Z(r) ? "default" in r ? i = Je(
      r.from || s,
      r.default,
      !0
    ) : i = Je(r.from || s) : i = Je(r), ue(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[s] = i;
  }
}
function Ws(e, t, n) {
  Ue(
    V(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function mi(e, t, n, s) {
  let r = s.includes(".") ? Pi(n, s) : () => n[s];
  if (se(e)) {
    const i = t[e];
    j(i) && fn(r, i);
  } else if (j(e))
    fn(r, e.bind(n));
  else if (Z(e))
    if (V(e))
      e.forEach((i) => mi(i, t, n, s));
    else {
      const i = j(e.handler) ? e.handler.bind(n) : t[e.handler];
      j(i) && fn(r, i, e);
    }
}
function _i(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let c;
  return l ? c = l : !r.length && !n && !s ? c = t : (c = {}, r.length && r.forEach(
    (h) => vn(c, h, o, !0)
  ), vn(c, t, o)), Z(t) && i.set(t, c), c;
}
function vn(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  i && vn(e, i, n, !0), r && r.forEach(
    (o) => vn(e, o, n, !0)
  );
  for (const o in t)
    if (!(s && o === "expose")) {
      const l = fl[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const fl = {
  data: $s,
  props: qs,
  emits: qs,
  // objects
  methods: Bt,
  computed: Bt,
  // lifecycle
  beforeCreate: ae,
  created: ae,
  beforeMount: ae,
  mounted: ae,
  beforeUpdate: ae,
  updated: ae,
  beforeDestroy: ae,
  beforeUnmount: ae,
  destroyed: ae,
  unmounted: ae,
  activated: ae,
  deactivated: ae,
  errorCaptured: ae,
  serverPrefetch: ae,
  // assets
  components: Bt,
  directives: Bt,
  // watch
  watch: dl,
  // provide / inject
  provide: $s,
  inject: al
};
function $s(e, t) {
  return t ? e ? function() {
    return fe(
      j(e) ? e.call(this, this) : e,
      j(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function al(e, t) {
  return Bt(is(e), is(t));
}
function is(e) {
  if (V(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ae(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Bt(e, t) {
  return e ? fe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function qs(e, t) {
  return e ? V(e) && V(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : fe(
    /* @__PURE__ */ Object.create(null),
    Ks(e),
    Ks(t ?? {})
  ) : t;
}
function dl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = fe(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = ae(e[s], t[s]);
  return n;
}
function vi() {
  return {
    app: null,
    config: {
      isNativeTag: Ir,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let hl = 0;
function pl(e, t) {
  return function(s, r = null) {
    j(s) || (s = fe({}, s)), r != null && !Z(r) && (r = null);
    const i = vi(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const h = i.app = {
      _uid: hl++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Zl,
      get config() {
        return i.config;
      },
      set config(a) {
      },
      use(a, ...d) {
        return o.has(a) || (a && j(a.install) ? (o.add(a), a.install(h, ...d)) : j(a) && (o.add(a), a(h, ...d))), h;
      },
      mixin(a) {
        return i.mixins.includes(a) || i.mixins.push(a), h;
      },
      component(a, d) {
        return d ? (i.components[a] = d, h) : i.components[a];
      },
      directive(a, d) {
        return d ? (i.directives[a] = d, h) : i.directives[a];
      },
      mount(a, d, g) {
        if (!c) {
          const m = h._ceVNode || ge(s, r);
          return m.appContext = i, g === !0 ? g = "svg" : g === !1 && (g = void 0), e(m, a, g), c = !0, h._container = a, a.__vue_app__ = h, Nn(m.component);
        }
      },
      onUnmount(a) {
        l.push(a);
      },
      unmount() {
        c && (Ue(
          l,
          h._instance,
          16
        ), e(null, h._container), delete h._container.__vue_app__);
      },
      provide(a, d) {
        return i.provides[a] = d, h;
      },
      runWithContext(a) {
        const d = It;
        It = h;
        try {
          return a();
        } finally {
          It = d;
        }
      }
    };
    return h;
  };
}
let It = null;
function un(e, t) {
  if (ce) {
    let n = ce.provides;
    const s = ce.parent && ce.parent.provides;
    s === n && (n = ce.provides = Object.create(s)), n[e] = t;
  }
}
function Je(e, t, n = !1) {
  const s = $l();
  if (s || It) {
    let r = It ? It._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && j(t) ? t.call(s && s.proxy) : t;
  }
}
const bi = {}, yi = () => Object.create(bi), Ei = (e) => Object.getPrototypeOf(e) === bi;
function gl(e, t, n, s = !1) {
  const r = {}, i = yi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), xi(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  n ? e.props = s ? r : ei(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function ml(e, t, n, s) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = W(r), [c] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const a = e.vnode.dynamicProps;
      for (let d = 0; d < a.length; d++) {
        let g = a[d];
        if (Pn(e.emitsOptions, g))
          continue;
        const m = t[g];
        if (c)
          if ($(i, g))
            m !== i[g] && (i[g] = m, h = !0);
          else {
            const C = Ae(g);
            r[C] = os(
              c,
              l,
              C,
              m,
              e,
              !1
            );
          }
        else
          m !== i[g] && (i[g] = m, h = !0);
      }
    }
  } else {
    xi(e, t, r, i) && (h = !0);
    let a;
    for (const d in l)
      (!t || // for camelCase
      !$(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = bt(d)) === d || !$(t, a))) && (c ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[a] !== void 0) && (r[d] = os(
        c,
        l,
        d,
        void 0,
        e,
        !0
      )) : delete r[d]);
    if (i !== l)
      for (const d in i)
        (!t || !$(t, d)) && (delete i[d], h = !0);
  }
  h && qe(e.attrs, "set", "");
}
function xi(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (Ut(c))
        continue;
      const h = t[c];
      let a;
      r && $(r, a = Ae(c)) ? !i || !i.includes(a) ? n[a] = h : (l || (l = {}))[a] = h : Pn(e.emitsOptions, c) || (!(c in s) || h !== s[c]) && (s[c] = h, o = !0);
    }
  if (i) {
    const c = W(n), h = l || Q;
    for (let a = 0; a < i.length; a++) {
      const d = i[a];
      n[d] = os(
        r,
        c,
        d,
        h[d],
        e,
        !$(h, d)
      );
    }
  }
  return o;
}
function os(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const l = $(o, "default");
    if (l && s === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && j(c)) {
        const { propsDefaults: h } = r;
        if (n in h)
          s = h[n];
        else {
          const a = sn(r);
          s = h[n] = c.call(
            null,
            t
          ), a();
        }
      } else
        s = c;
      r.ce && r.ce._setProp(n, s);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !l ? s = !1 : o[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === bt(n)) && (s = !0));
  }
  return s;
}
const _l = /* @__PURE__ */ new WeakMap();
function Ri(e, t, n = !1) {
  const s = n ? _l : t.propsCache, r = s.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, l = [];
  let c = !1;
  if (!j(e)) {
    const a = (d) => {
      c = !0;
      const [g, m] = Ri(d, t, !0);
      fe(o, g), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!i && !c)
    return Z(e) && s.set(e, Ct), Ct;
  if (V(i))
    for (let a = 0; a < i.length; a++) {
      const d = Ae(i[a]);
      zs(d) && (o[d] = Q);
    }
  else if (i)
    for (const a in i) {
      const d = Ae(a);
      if (zs(d)) {
        const g = i[a], m = o[d] = V(g) || j(g) ? { type: g } : fe({}, g), C = m.type;
        let T = !1, B = !0;
        if (V(C))
          for (let N = 0; N < C.length; ++N) {
            const P = C[N], L = j(P) && P.name;
            if (L === "Boolean") {
              T = !0;
              break;
            } else L === "String" && (B = !1);
          }
        else
          T = j(C) && C.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = T, m[
          1
          /* shouldCastTrue */
        ] = B, (T || $(m, "default")) && l.push(d);
      }
    }
  const h = [o, l];
  return Z(e) && s.set(e, h), h;
}
function zs(e) {
  return e[0] !== "$" && !Ut(e);
}
const Ts = (e) => e === "_" || e === "_ctx" || e === "$stable", Ps = (e) => V(e) ? e.map(je) : [je(e)], vl = (e, t, n) => {
  if (t._n)
    return t;
  const s = ui((...r) => Ps(t(...r)), n);
  return s._c = !1, s;
}, Si = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (Ts(r)) continue;
    const i = e[r];
    if (j(i))
      t[r] = vl(r, i, s);
    else if (i != null) {
      const o = Ps(i);
      t[r] = () => o;
    }
  }
}, Ai = (e, t) => {
  const n = Ps(t);
  e.slots.default = () => n;
}, wi = (e, t, n) => {
  for (const s in t)
    (n || !Ts(s)) && (e[s] = t[s]);
}, bl = (e, t, n) => {
  const s = e.slots = yi();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (wi(s, t, n), n && Fr(s, "_", r, !0)) : Si(t, s);
  } else t && Ai(e, t);
}, yl = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let i = !0, o = Q;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : wi(r, t, n) : (i = !t.$stable, Si(t, r)), o = t;
  } else t && (Ai(e, t), o = { default: 1 });
  if (i)
    for (const l in r)
      !Ts(l) && o[l] == null && delete r[l];
}, Ee = Ll;
function El(e) {
  return xl(e);
}
function xl(e, t) {
  const n = wn();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: c,
    setText: h,
    setElementText: a,
    parentNode: d,
    nextSibling: g,
    setScopeId: m = Be,
    insertStaticContent: C
  } = e, T = (u, f, p, v = null, y = null, _ = null, S = void 0, R = null, x = !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !Vt(u, f) && (v = b(u), me(u, y, _, !0), u = null), f.patchFlag === -2 && (x = !1, f.dynamicChildren = null);
    const { type: E, ref: F, shapeFlag: w } = f;
    switch (E) {
      case In:
        B(u, f, p, v);
        break;
      case ct:
        N(u, f, p, v);
        break;
      case Gn:
        u == null && P(f, p, v, S);
        break;
      case $e:
        ft(
          u,
          f,
          p,
          v,
          y,
          _,
          S,
          R,
          x
        );
        break;
      default:
        w & 1 ? J(
          u,
          f,
          p,
          v,
          y,
          _,
          S,
          R,
          x
        ) : w & 6 ? Ne(
          u,
          f,
          p,
          v,
          y,
          _,
          S,
          R,
          x
        ) : (w & 64 || w & 128) && E.process(
          u,
          f,
          p,
          v,
          y,
          _,
          S,
          R,
          x,
          D
        );
    }
    F != null && y ? Wt(F, u && u.ref, _, f || u, !f) : F == null && u && u.ref != null && Wt(u.ref, null, _, u, !0);
  }, B = (u, f, p, v) => {
    if (u == null)
      s(
        f.el = l(f.children),
        p,
        v
      );
    else {
      const y = f.el = u.el;
      f.children !== u.children && h(y, f.children);
    }
  }, N = (u, f, p, v) => {
    u == null ? s(
      f.el = c(f.children || ""),
      p,
      v
    ) : f.el = u.el;
  }, P = (u, f, p, v) => {
    [u.el, u.anchor] = C(
      u.children,
      f,
      p,
      v,
      u.el,
      u.anchor
    );
  }, L = ({ el: u, anchor: f }, p, v) => {
    let y;
    for (; u && u !== f; )
      y = g(u), s(u, p, v), u = y;
    s(f, p, v);
  }, I = ({ el: u, anchor: f }) => {
    let p;
    for (; u && u !== f; )
      p = g(u), r(u), u = p;
    r(f);
  }, J = (u, f, p, v, y, _, S, R, x) => {
    f.type === "svg" ? S = "svg" : f.type === "math" && (S = "mathml"), u == null ? ie(
      f,
      p,
      v,
      y,
      _,
      S,
      R,
      x
    ) : Ze(
      u,
      f,
      y,
      _,
      S,
      R,
      x
    );
  }, ie = (u, f, p, v, y, _, S, R) => {
    let x, E;
    const { props: F, shapeFlag: w, transition: M, dirs: H } = u;
    if (x = u.el = o(
      u.type,
      _,
      F && F.is,
      F
    ), w & 8 ? a(x, u.children) : w & 16 && Pe(
      u.children,
      x,
      null,
      v,
      y,
      Un(u, _),
      S,
      R
    ), H && dt(u, null, v, "created"), ee(x, u, u.scopeId, S, v), F) {
      for (const Y in F)
        Y !== "value" && !Ut(Y) && i(x, Y, null, F[Y], _, v);
      "value" in F && i(x, "value", null, F.value, _), (E = F.onVnodeBeforeMount) && He(E, v, u);
    }
    H && dt(u, null, v, "beforeMount");
    const G = Rl(y, M);
    G && M.beforeEnter(x), s(x, f, p), ((E = F && F.onVnodeMounted) || G || H) && Ee(() => {
      E && He(E, v, u), G && M.enter(x), H && dt(u, null, v, "mounted");
    }, y);
  }, ee = (u, f, p, v, y) => {
    if (p && m(u, p), v)
      for (let _ = 0; _ < v.length; _++)
        m(u, v[_]);
    if (y) {
      let _ = y.subTree;
      if (f === _ || Ni(_.type) && (_.ssContent === f || _.ssFallback === f)) {
        const S = y.vnode;
        ee(
          u,
          S,
          S.scopeId,
          S.slotScopeIds,
          y.parent
        );
      }
    }
  }, Pe = (u, f, p, v, y, _, S, R, x = 0) => {
    for (let E = x; E < u.length; E++) {
      const F = u[E] = R ? rt(u[E]) : je(u[E]);
      T(
        null,
        F,
        f,
        p,
        v,
        y,
        _,
        S,
        R
      );
    }
  }, Ze = (u, f, p, v, y, _, S) => {
    const R = f.el = u.el;
    let { patchFlag: x, dynamicChildren: E, dirs: F } = f;
    x |= u.patchFlag & 16;
    const w = u.props || Q, M = f.props || Q;
    let H;
    if (p && ht(p, !1), (H = M.onVnodeBeforeUpdate) && He(H, p, f, u), F && dt(f, u, p, "beforeUpdate"), p && ht(p, !0), (w.innerHTML && M.innerHTML == null || w.textContent && M.textContent == null) && a(R, ""), E ? Ie(
      u.dynamicChildren,
      E,
      R,
      p,
      v,
      Un(f, y),
      _
    ) : S || k(
      u,
      f,
      R,
      null,
      p,
      v,
      Un(f, y),
      _,
      !1
    ), x > 0) {
      if (x & 16)
        et(R, w, M, p, y);
      else if (x & 2 && w.class !== M.class && i(R, "class", null, M.class, y), x & 4 && i(R, "style", w.style, M.style, y), x & 8) {
        const G = f.dynamicProps;
        for (let Y = 0; Y < G.length; Y++) {
          const q = G[Y], _e = w[q], ve = M[q];
          (ve !== _e || q === "value") && i(R, q, _e, ve, y, p);
        }
      }
      x & 1 && u.children !== f.children && a(R, f.children);
    } else !S && E == null && et(R, w, M, p, y);
    ((H = M.onVnodeUpdated) || F) && Ee(() => {
      H && He(H, p, f, u), F && dt(f, u, p, "updated");
    }, v);
  }, Ie = (u, f, p, v, y, _, S) => {
    for (let R = 0; R < f.length; R++) {
      const x = u[R], E = f[R], F = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        x.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (x.type === $e || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Vt(x, E) || // - In the case of a component, it could contain anything.
        x.shapeFlag & 198) ? d(x.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      T(
        x,
        E,
        F,
        null,
        v,
        y,
        _,
        S,
        !0
      );
    }
  }, et = (u, f, p, v, y) => {
    if (f !== p) {
      if (f !== Q)
        for (const _ in f)
          !Ut(_) && !(_ in p) && i(
            u,
            _,
            f[_],
            null,
            y,
            v
          );
      for (const _ in p) {
        if (Ut(_)) continue;
        const S = p[_], R = f[_];
        S !== R && _ !== "value" && i(u, _, R, S, y, v);
      }
      "value" in p && i(u, "value", f.value, p.value, y);
    }
  }, ft = (u, f, p, v, y, _, S, R, x) => {
    const E = f.el = u ? u.el : l(""), F = f.anchor = u ? u.anchor : l("");
    let { patchFlag: w, dynamicChildren: M, slotScopeIds: H } = f;
    H && (R = R ? R.concat(H) : H), u == null ? (s(E, p, v), s(F, p, v), Pe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      p,
      F,
      y,
      _,
      S,
      R,
      x
    )) : w > 0 && w & 64 && M && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren ? (Ie(
      u.dynamicChildren,
      M,
      p,
      y,
      _,
      S,
      R
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || y && f === y.subTree) && Ci(
      u,
      f,
      !0
      /* shallow */
    )) : k(
      u,
      f,
      p,
      F,
      y,
      _,
      S,
      R,
      x
    );
  }, Ne = (u, f, p, v, y, _, S, R, x) => {
    f.slotScopeIds = R, u == null ? f.shapeFlag & 512 ? y.ctx.activate(
      f,
      p,
      v,
      S,
      x
    ) : Lt(
      f,
      p,
      v,
      y,
      _,
      S,
      x
    ) : yt(u, f, x);
  }, Lt = (u, f, p, v, y, _, S) => {
    const R = u.component = Wl(
      u,
      v,
      y
    );
    if (di(u) && (R.ctx.renderer = D), ql(R, !1, S), R.asyncDep) {
      if (y && y.registerDep(R, re, S), !u.el) {
        const x = R.subTree = ge(ct);
        N(null, x, f, p), u.placeholder = x.el;
      }
    } else
      re(
        R,
        u,
        f,
        p,
        y,
        _,
        S
      );
  }, yt = (u, f, p) => {
    const v = f.component = u.component;
    if (Dl(u, f, p))
      if (v.asyncDep && !v.asyncResolved) {
        z(v, f, p);
        return;
      } else
        v.next = f, v.update();
    else
      f.el = u.el, v.vnode = f;
  }, re = (u, f, p, v, y, _, S) => {
    const R = () => {
      if (u.isMounted) {
        let { next: w, bu: M, u: H, parent: G, vnode: Y } = u;
        {
          const Le = Oi(u);
          if (Le) {
            w && (w.el = Y.el, z(u, w, S)), Le.asyncDep.then(() => {
              u.isUnmounted || R();
            });
            return;
          }
        }
        let q = w, _e;
        ht(u, !1), w ? (w.el = Y.el, z(u, w, S)) : w = Y, M && cn(M), (_e = w.props && w.props.onVnodeBeforeUpdate) && He(_e, G, w, Y), ht(u, !0);
        const ve = Qs(u), Me = u.subTree;
        u.subTree = ve, T(
          Me,
          ve,
          // parent may have changed if it's in a teleport
          d(Me.el),
          // anchor may have changed if it's in a fragment
          b(Me),
          u,
          y,
          _
        ), w.el = ve.el, q === null && Ml(u, ve.el), H && Ee(H, y), (_e = w.props && w.props.onVnodeUpdated) && Ee(
          () => He(_e, G, w, Y),
          y
        );
      } else {
        let w;
        const { el: M, props: H } = f, { bm: G, m: Y, parent: q, root: _e, type: ve } = u, Me = $t(f);
        ht(u, !1), G && cn(G), !Me && (w = H && H.onVnodeBeforeMount) && He(w, q, f), ht(u, !0);
        {
          _e.ce && // @ts-expect-error _def is private
          _e.ce._def.shadowRoot !== !1 && _e.ce._injectChildStyle(ve);
          const Le = u.subTree = Qs(u);
          T(
            null,
            Le,
            p,
            v,
            u,
            y,
            _
          ), f.el = Le.el;
        }
        if (Y && Ee(Y, y), !Me && (w = H && H.onVnodeMounted)) {
          const Le = f;
          Ee(
            () => He(w, q, Le),
            y
          );
        }
        (f.shapeFlag & 256 || q && $t(q.vnode) && q.vnode.shapeFlag & 256) && u.a && Ee(u.a, y), u.isMounted = !0, f = p = v = null;
      }
    };
    u.scope.on();
    const x = u.effect = new Br(R);
    u.scope.off();
    const E = u.update = x.run.bind(x), F = u.job = x.runIfDirty.bind(x);
    F.i = u, F.id = u.uid, x.scheduler = () => Cs(F), ht(u, !0), E();
  }, z = (u, f, p) => {
    f.component = u;
    const v = u.vnode.props;
    u.vnode = f, u.next = null, ml(u, f.props, v, p), yl(u, f.children, p), Qe(), Bs(u), Ye();
  }, k = (u, f, p, v, y, _, S, R, x = !1) => {
    const E = u && u.children, F = u ? u.shapeFlag : 0, w = f.children, { patchFlag: M, shapeFlag: H } = f;
    if (M > 0) {
      if (M & 128) {
        tt(
          E,
          w,
          p,
          v,
          y,
          _,
          S,
          R,
          x
        );
        return;
      } else if (M & 256) {
        Ge(
          E,
          w,
          p,
          v,
          y,
          _,
          S,
          R,
          x
        );
        return;
      }
    }
    H & 8 ? (F & 16 && Se(E, y, _), w !== E && a(p, w)) : F & 16 ? H & 16 ? tt(
      E,
      w,
      p,
      v,
      y,
      _,
      S,
      R,
      x
    ) : Se(E, y, _, !0) : (F & 8 && a(p, ""), H & 16 && Pe(
      w,
      p,
      v,
      y,
      _,
      S,
      R,
      x
    ));
  }, Ge = (u, f, p, v, y, _, S, R, x) => {
    u = u || Ct, f = f || Ct;
    const E = u.length, F = f.length, w = Math.min(E, F);
    let M;
    for (M = 0; M < w; M++) {
      const H = f[M] = x ? rt(f[M]) : je(f[M]);
      T(
        u[M],
        H,
        p,
        null,
        y,
        _,
        S,
        R,
        x
      );
    }
    E > F ? Se(
      u,
      y,
      _,
      !0,
      !1,
      w
    ) : Pe(
      f,
      p,
      v,
      y,
      _,
      S,
      R,
      x,
      w
    );
  }, tt = (u, f, p, v, y, _, S, R, x) => {
    let E = 0;
    const F = f.length;
    let w = u.length - 1, M = F - 1;
    for (; E <= w && E <= M; ) {
      const H = u[E], G = f[E] = x ? rt(f[E]) : je(f[E]);
      if (Vt(H, G))
        T(
          H,
          G,
          p,
          null,
          y,
          _,
          S,
          R,
          x
        );
      else
        break;
      E++;
    }
    for (; E <= w && E <= M; ) {
      const H = u[w], G = f[M] = x ? rt(f[M]) : je(f[M]);
      if (Vt(H, G))
        T(
          H,
          G,
          p,
          null,
          y,
          _,
          S,
          R,
          x
        );
      else
        break;
      w--, M--;
    }
    if (E > w) {
      if (E <= M) {
        const H = M + 1, G = H < F ? f[H].el : v;
        for (; E <= M; )
          T(
            null,
            f[E] = x ? rt(f[E]) : je(f[E]),
            p,
            G,
            y,
            _,
            S,
            R,
            x
          ), E++;
      }
    } else if (E > M)
      for (; E <= w; )
        me(u[E], y, _, !0), E++;
    else {
      const H = E, G = E, Y = /* @__PURE__ */ new Map();
      for (E = G; E <= M; E++) {
        const ye = f[E] = x ? rt(f[E]) : je(f[E]);
        ye.key != null && Y.set(ye.key, E);
      }
      let q, _e = 0;
      const ve = M - G + 1;
      let Me = !1, Le = 0;
      const Ft = new Array(ve);
      for (E = 0; E < ve; E++) Ft[E] = 0;
      for (E = H; E <= w; E++) {
        const ye = u[E];
        if (_e >= ve) {
          me(ye, y, _, !0);
          continue;
        }
        let Fe;
        if (ye.key != null)
          Fe = Y.get(ye.key);
        else
          for (q = G; q <= M; q++)
            if (Ft[q - G] === 0 && Vt(ye, f[q])) {
              Fe = q;
              break;
            }
        Fe === void 0 ? me(ye, y, _, !0) : (Ft[Fe - G] = E + 1, Fe >= Le ? Le = Fe : Me = !0, T(
          ye,
          f[Fe],
          p,
          null,
          y,
          _,
          S,
          R,
          x
        ), _e++);
      }
      const Ms = Me ? Sl(Ft) : Ct;
      for (q = Ms.length - 1, E = ve - 1; E >= 0; E--) {
        const ye = G + E, Fe = f[ye], Ls = f[ye + 1], Fs = ye + 1 < F ? (
          // #13559, fallback to el placeholder for unresolved async component
          Ls.el || Ls.placeholder
        ) : v;
        Ft[E] === 0 ? T(
          null,
          Fe,
          p,
          Fs,
          y,
          _,
          S,
          R,
          x
        ) : Me && (q < 0 || E !== Ms[q] ? De(Fe, p, Fs, 2) : q--);
      }
    }
  }, De = (u, f, p, v, y = null) => {
    const { el: _, type: S, transition: R, children: x, shapeFlag: E } = u;
    if (E & 6) {
      De(u.component.subTree, f, p, v);
      return;
    }
    if (E & 128) {
      u.suspense.move(f, p, v);
      return;
    }
    if (E & 64) {
      S.move(u, f, p, D);
      return;
    }
    if (S === $e) {
      s(_, f, p);
      for (let w = 0; w < x.length; w++)
        De(x[w], f, p, v);
      s(u.anchor, f, p);
      return;
    }
    if (S === Gn) {
      L(u, f, p);
      return;
    }
    if (v !== 2 && E & 1 && R)
      if (v === 0)
        R.beforeEnter(_), s(_, f, p), Ee(() => R.enter(_), y);
      else {
        const { leave: w, delayLeave: M, afterLeave: H } = R, G = () => {
          u.ctx.isUnmounted ? r(_) : s(_, f, p);
        }, Y = () => {
          _._isLeaving && _[Wo](
            !0
            /* cancelled */
          ), w(_, () => {
            G(), H && H();
          });
        };
        M ? M(_, G, Y) : Y();
      }
    else
      s(_, f, p);
  }, me = (u, f, p, v = !1, y = !1) => {
    const {
      type: _,
      props: S,
      ref: R,
      children: x,
      dynamicChildren: E,
      shapeFlag: F,
      patchFlag: w,
      dirs: M,
      cacheIndex: H
    } = u;
    if (w === -2 && (y = !1), R != null && (Qe(), Wt(R, null, p, u, !0), Ye()), H != null && (f.renderCache[H] = void 0), F & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const G = F & 1 && M, Y = !$t(u);
    let q;
    if (Y && (q = S && S.onVnodeBeforeUnmount) && He(q, f, u), F & 6)
      at(u.component, p, v);
    else {
      if (F & 128) {
        u.suspense.unmount(p, v);
        return;
      }
      G && dt(u, null, f, "beforeUnmount"), F & 64 ? u.type.remove(
        u,
        f,
        p,
        D,
        v
      ) : E && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !E.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== $e || w > 0 && w & 64) ? Se(
        E,
        f,
        p,
        !1,
        !0
      ) : (_ === $e && w & 384 || !y && F & 16) && Se(x, f, p), v && Et(u);
    }
    (Y && (q = S && S.onVnodeUnmounted) || G) && Ee(() => {
      q && He(q, f, u), G && dt(u, null, f, "unmounted");
    }, p);
  }, Et = (u) => {
    const { type: f, el: p, anchor: v, transition: y } = u;
    if (f === $e) {
      xt(p, v);
      return;
    }
    if (f === Gn) {
      I(u);
      return;
    }
    const _ = () => {
      r(p), y && !y.persisted && y.afterLeave && y.afterLeave();
    };
    if (u.shapeFlag & 1 && y && !y.persisted) {
      const { leave: S, delayLeave: R } = y, x = () => S(p, _);
      R ? R(u.el, _, x) : x();
    } else
      _();
  }, xt = (u, f) => {
    let p;
    for (; u !== f; )
      p = g(u), r(u), u = p;
    r(f);
  }, at = (u, f, p) => {
    const { bum: v, scope: y, job: _, subTree: S, um: R, m: x, a: E } = u;
    Js(x), Js(E), v && cn(v), y.stop(), _ && (_.flags |= 8, me(S, u, f, p)), R && Ee(R, f), Ee(() => {
      u.isUnmounted = !0;
    }, f);
  }, Se = (u, f, p, v = !1, y = !1, _ = 0) => {
    for (let S = _; S < u.length; S++)
      me(u[S], f, p, v, y);
  }, b = (u) => {
    if (u.shapeFlag & 6)
      return b(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const f = g(u.anchor || u.el), p = f && f[ko];
    return p ? g(p) : f;
  };
  let O = !1;
  const A = (u, f, p) => {
    u == null ? f._vnode && me(f._vnode, null, null, !0) : T(
      f._vnode || null,
      u,
      f,
      null,
      null,
      null,
      p
    ), f._vnode = u, O || (O = !0, Bs(), oi(), O = !1);
  }, D = {
    p: T,
    um: me,
    m: De,
    r: Et,
    mt: Lt,
    mc: Pe,
    pc: k,
    pbc: Ie,
    n: b,
    o: e
  };
  return {
    render: A,
    hydrate: void 0,
    createApp: pl(A)
  };
}
function Un({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ht({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Rl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ci(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (V(s) && V(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = rt(r[i]), l.el = o.el), !n && l.patchFlag !== -2 && Ci(o, l)), l.type === In && // avoid cached text nodes retaining detached dom nodes
      l.patchFlag !== -1 && (l.el = o.el), l.type === ct && !l.el && (l.el = o.el);
    }
}
function Sl(e) {
  const t = e.slice(), n = [0];
  let s, r, i, o, l;
  const c = e.length;
  for (s = 0; s < c; s++) {
    const h = e[s];
    if (h !== 0) {
      if (r = n[n.length - 1], e[r] < h) {
        t[s] = r, n.push(s);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        l = i + o >> 1, e[n[l]] < h ? i = l + 1 : o = l;
      h < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; )
    n[i] = o, o = t[o];
  return n;
}
function Oi(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Oi(t);
}
function Js(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Al = Symbol.for("v-scx"), wl = () => Je(Al);
function fn(e, t, n) {
  return Ti(e, t, n);
}
function Ti(e, t, n = Q) {
  const { immediate: s, deep: r, flush: i, once: o } = n, l = fe({}, n), c = t && s || !t && i !== "post";
  let h;
  if (en) {
    if (i === "sync") {
      const m = wl();
      h = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!c) {
      const m = () => {
      };
      return m.stop = Be, m.resume = Be, m.pause = Be, m;
    }
  }
  const a = ce;
  l.call = (m, C, T) => Ue(m, a, C, T);
  let d = !1;
  i === "post" ? l.scheduler = (m) => {
    Ee(m, a && a.suspense);
  } : i !== "sync" && (d = !0, l.scheduler = (m, C) => {
    C ? m() : Cs(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), d && (m.flags |= 2, a && (m.id = a.uid, m.i = a));
  };
  const g = jo(e, t, l);
  return en && (h ? h.push(g) : c && g()), g;
}
function Cl(e, t, n) {
  const s = this.proxy, r = se(e) ? e.includes(".") ? Pi(s, e) : () => s[e] : e.bind(s, s);
  let i;
  j(t) ? i = t : (i = t.handler, n = t);
  const o = sn(this), l = Ti(r, i.bind(s), n);
  return o(), l;
}
function Pi(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
const Ol = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ae(t)}Modifiers`] || e[`${bt(t)}Modifiers`];
function Tl(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Q;
  let r = n;
  const i = t.startsWith("update:"), o = i && Ol(s, t.slice(7));
  o && (o.trim && (r = n.map((a) => se(a) ? a.trim() : a)), o.number && (r = n.map(Qn)));
  let l, c = s[l = Ln(t)] || // also try camelCase event handler (#2249)
  s[l = Ln(Ae(t))];
  !c && i && (c = s[l = Ln(bt(t))]), c && Ue(
    c,
    e,
    6,
    r
  );
  const h = s[l + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Ue(
      h,
      e,
      6,
      r
    );
  }
}
const Pl = /* @__PURE__ */ new WeakMap();
function Ii(e, t, n = !1) {
  const s = n ? Pl : t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {}, l = !1;
  if (!j(e)) {
    const c = (h) => {
      const a = Ii(h, t, !0);
      a && (l = !0, fe(o, a));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !l ? (Z(e) && s.set(e, null), null) : (V(i) ? i.forEach((c) => o[c] = null) : fe(o, i), Z(e) && s.set(e, o), o);
}
function Pn(e, t) {
  return !e || !xn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), $(e, t[0].toLowerCase() + t.slice(1)) || $(e, bt(t)) || $(e, t));
}
function Qs(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    propsOptions: [i],
    slots: o,
    attrs: l,
    emit: c,
    render: h,
    renderCache: a,
    props: d,
    data: g,
    setupState: m,
    ctx: C,
    inheritAttrs: T
  } = e, B = mn(e);
  let N, P;
  try {
    if (n.shapeFlag & 4) {
      const I = r || s, J = I;
      N = je(
        h.call(
          J,
          I,
          a,
          d,
          m,
          g,
          C
        )
      ), P = l;
    } else {
      const I = t;
      N = je(
        I.length > 1 ? I(
          d,
          { attrs: l, slots: o, emit: c }
        ) : I(
          d,
          null
        )
      ), P = t.props ? l : Il(l);
    }
  } catch (I) {
    zt.length = 0, On(I, e, 1), N = ge(ct);
  }
  let L = N;
  if (P && T !== !1) {
    const I = Object.keys(P), { shapeFlag: J } = L;
    I.length && J & 7 && (i && I.some(ps) && (P = Nl(
      P,
      i
    )), L = Nt(L, P, !1, !0));
  }
  return n.dirs && (L = Nt(L, null, !1, !0), L.dirs = L.dirs ? L.dirs.concat(n.dirs) : n.dirs), n.transition && Os(L, n.transition), N = L, mn(B), N;
}
const Il = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || xn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Nl = (e, t) => {
  const n = {};
  for (const s in e)
    (!ps(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Dl(e, t, n) {
  const { props: s, children: r, component: i } = e, { props: o, children: l, patchFlag: c } = t, h = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return s ? Ys(s, o, h) : !!o;
    if (c & 8) {
      const a = t.dynamicProps;
      for (let d = 0; d < a.length; d++) {
        const g = a[d];
        if (o[g] !== s[g] && !Pn(h, g))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? Ys(s, o, h) : !0 : !!o;
  return !1;
}
function Ys(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (t[i] !== e[i] && !Pn(n, i))
      return !0;
  }
  return !1;
}
function Ml({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Ni = (e) => e.__isSuspense;
function Ll(e, t) {
  t && t.pendingBranch ? V(e) ? t.effects.push(...e) : t.effects.push(e) : Go(e);
}
const $e = Symbol.for("v-fgt"), In = Symbol.for("v-txt"), ct = Symbol.for("v-cmt"), Gn = Symbol.for("v-stc"), zt = [];
let Re = null;
function lt(e = !1) {
  zt.push(Re = e ? null : []);
}
function Fl() {
  zt.pop(), Re = zt[zt.length - 1] || null;
}
let Zt = 1;
function bn(e, t = !1) {
  Zt += e, e < 0 && Re && t && (Re.hasOnce = !0);
}
function Di(e) {
  return e.dynamicChildren = Zt > 0 ? Re || Ct : null, Fl(), Zt > 0 && Re && Re.push(e), e;
}
function _t(e, t, n, s, r, i) {
  return Di(
    oe(
      e,
      t,
      n,
      s,
      r,
      i,
      !0
    )
  );
}
function Hl(e, t, n, s, r) {
  return Di(
    ge(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function yn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Vt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Mi = ({ key: e }) => e ?? null, an = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? se(e) || ue(e) || j(e) ? { i: xe, r: e, k: t, f: !!n } : e : null);
function oe(e, t = null, n = null, s = 0, r = null, i = e === $e ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Mi(t),
    ref: t && an(t),
    scopeId: ci,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: xe
  };
  return l ? (Is(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= se(n) ? 8 : 16), Zt > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Re && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Re.push(c), c;
}
const ge = Vl;
function Vl(e, t = null, n = null, s = 0, r = null, i = !1) {
  if ((!e || e === il) && (e = ct), yn(e)) {
    const l = Nt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Is(l, n), Zt > 0 && !i && Re && (l.shapeFlag & 6 ? Re[Re.indexOf(e)] = l : Re.push(l)), l.patchFlag = -2, l;
  }
  if (Xl(e) && (e = e.__vccOpts), t) {
    t = jl(t);
    let { class: l, style: c } = t;
    l && !se(l) && (t.class = vs(l)), Z(c) && (ws(c) && !V(c) && (c = fe({}, c)), t.style = _s(c));
  }
  const o = se(e) ? 1 : Ni(e) ? 128 : Ko(e) ? 64 : Z(e) ? 4 : j(e) ? 2 : 0;
  return oe(
    e,
    t,
    n,
    s,
    r,
    o,
    i,
    !0
  );
}
function jl(e) {
  return e ? ws(e) || Ei(e) ? fe({}, e) : e : null;
}
function Nt(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: c } = e, h = t ? Gl(r || {}, t) : r, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && Mi(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? V(i) ? i.concat(an(t)) : [i, an(t)] : an(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== $e ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Nt(e.ssContent),
    ssFallback: e.ssFallback && Nt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && s && Os(
    a,
    c.clone(a)
  ), a;
}
function Bl(e = " ", t = 0) {
  return ge(In, null, e, t);
}
function Ul(e = "", t = !1) {
  return t ? (lt(), Hl(ct, null, e)) : ge(ct, null, e);
}
function je(e) {
  return e == null || typeof e == "boolean" ? ge(ct) : V(e) ? ge(
    $e,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : yn(e) ? rt(e) : ge(In, null, String(e));
}
function rt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Nt(e);
}
function Is(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (V(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Is(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Ei(t) ? t._ctx = xe : r === 3 && xe && (xe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else j(t) ? (t = { default: t, _ctx: xe }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Bl(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Gl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = vs([t.class, s.class]));
      else if (r === "style")
        t.style = _s([t.style, s.style]);
      else if (xn(r)) {
        const i = t[r], o = s[r];
        o && i !== o && !(V(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function He(e, t, n, s = null) {
  Ue(e, t, 7, [
    n,
    s
  ]);
}
const kl = vi();
let Kl = 0;
function Wl(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || kl, i = {
    uid: Kl++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new fo(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Ri(s, r),
    emitsOptions: Ii(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Q,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: Q,
    data: Q,
    props: Q,
    attrs: Q,
    slots: Q,
    refs: Q,
    setupState: Q,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Tl.bind(null, i), e.ce && e.ce(i), i;
}
let ce = null;
const $l = () => ce || xe;
let En, ls;
{
  const e = wn(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  En = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ce = n
  ), ls = t(
    "__VUE_SSR_SETTERS__",
    (n) => en = n
  );
}
const sn = (e) => {
  const t = ce;
  return En(e), e.scope.on(), () => {
    e.scope.off(), En(t);
  };
}, Xs = () => {
  ce && ce.scope.off(), En(null);
};
function Li(e) {
  return e.vnode.shapeFlag & 4;
}
let en = !1;
function ql(e, t = !1, n = !1) {
  t && ls(t);
  const { props: s, children: r } = e.vnode, i = Li(e);
  gl(e, s, i, t), bl(e, r, n || t);
  const o = i ? zl(e, t) : void 0;
  return t && ls(!1), o;
}
function zl(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ll);
  const { setup: s } = n;
  if (s) {
    Qe();
    const r = e.setupContext = s.length > 1 ? Ql(e) : null, i = sn(e), o = nn(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = Dr(o);
    if (Ye(), i(), (l || e.sp) && !$t(e) && ai(e), l) {
      if (o.then(Xs, Xs), t)
        return o.then((c) => {
          Zs(e, c);
        }).catch((c) => {
          On(c, e, 0);
        });
      e.asyncDep = o;
    } else
      Zs(e, o);
  } else
    Fi(e);
}
function Zs(e, t, n) {
  j(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Z(t) && (e.setupState = ni(t)), Fi(e);
}
function Fi(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Be);
  {
    const r = sn(e);
    Qe();
    try {
      cl(e);
    } finally {
      Ye(), r();
    }
  }
}
const Jl = {
  get(e, t) {
    return le(e, "get", ""), e[t];
  }
};
function Ql(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Jl),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Nn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ni(Io(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in qt)
        return qt[n](e);
    },
    has(t, n) {
      return n in t || n in qt;
    }
  })) : e.proxy;
}
function Yl(e, t = !0) {
  return j(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Xl(e) {
  return j(e) && "__vccOpts" in e;
}
const we = (e, t) => Ho(e, t, en);
function Hi(e, t, n) {
  try {
    bn(-1);
    const s = arguments.length;
    return s === 2 ? Z(t) && !V(t) ? yn(t) ? ge(e, null, [t]) : ge(e, t) : ge(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && yn(n) && (n = [n]), ge(e, t, n));
  } finally {
    bn(1);
  }
}
const Zl = "3.5.22";
/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let cs;
const er = typeof window < "u" && window.trustedTypes;
if (er)
  try {
    cs = /* @__PURE__ */ er.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Vi = cs ? (e) => cs.createHTML(e) : (e) => e, ec = "http://www.w3.org/2000/svg", tc = "http://www.w3.org/1998/Math/MathML", We = typeof document < "u" ? document : null, tr = We && /* @__PURE__ */ We.createElement("template"), nc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? We.createElementNS(ec, e) : t === "mathml" ? We.createElementNS(tc, e) : n ? We.createElement(e, { is: n }) : We.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => We.createTextNode(e),
  createComment: (e) => We.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => We.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, r, i) {
    const o = n ? n.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      tr.innerHTML = Vi(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = tr.content;
      if (s === "svg" || s === "mathml") {
        const c = l.firstChild;
        for (; c.firstChild; )
          l.appendChild(c.firstChild);
        l.removeChild(c);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, sc = Symbol("_vtc");
function rc(e, t, n) {
  const s = e[sc];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const nr = Symbol("_vod"), ic = Symbol("_vsh"), oc = Symbol(""), lc = /(?:^|;)\s*display\s*:/;
function cc(e, t, n) {
  const s = e.style, r = se(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (se(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && dn(s, l, "");
        }
      else
        for (const o in t)
          n[o] == null && dn(s, o, "");
    for (const o in n)
      o === "display" && (i = !0), dn(s, o, n[o]);
  } else if (r) {
    if (t !== n) {
      const o = s[oc];
      o && (n += ";" + o), s.cssText = n, i = lc.test(n);
    }
  } else t && e.removeAttribute("style");
  nr in e && (e[nr] = i ? s.display : "", e[ic] && (s.display = "none"));
}
const sr = /\s*!important$/;
function dn(e, t, n) {
  if (V(n))
    n.forEach((s) => dn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = uc(e, t);
    sr.test(n) ? e.setProperty(
      bt(s),
      n.replace(sr, ""),
      "important"
    ) : e[s] = n;
  }
}
const rr = ["Webkit", "Moz", "ms"], kn = {};
function uc(e, t) {
  const n = kn[t];
  if (n)
    return n;
  let s = Ae(t);
  if (s !== "filter" && s in e)
    return kn[t] = s;
  s = An(s);
  for (let r = 0; r < rr.length; r++) {
    const i = rr[r] + s;
    if (i in e)
      return kn[t] = i;
  }
  return t;
}
const ir = "http://www.w3.org/1999/xlink";
function or(e, t, n, s, r, i = uo(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ir, t.slice(6, t.length)) : e.setAttributeNS(ir, t, n) : n == null || i && !Hr(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : ut(n) ? String(n) : n
  );
}
function lr(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Vi(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Hr(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function At(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function fc(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const cr = Symbol("_vei");
function ac(e, t, n, s, r = null) {
  const i = e[cr] || (e[cr] = {}), o = i[t];
  if (s && o)
    o.value = s;
  else {
    const [l, c] = dc(t);
    if (s) {
      const h = i[t] = gc(
        s,
        r
      );
      At(e, l, h, c);
    } else o && (fc(e, l, o, c), i[t] = void 0);
  }
}
const ur = /(?:Once|Passive|Capture)$/;
function dc(e) {
  let t;
  if (ur.test(e)) {
    t = {};
    let s;
    for (; s = e.match(ur); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : bt(e.slice(2)), t];
}
let Kn = 0;
const hc = /* @__PURE__ */ Promise.resolve(), pc = () => Kn || (hc.then(() => Kn = 0), Kn = Date.now());
function gc(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Ue(
      mc(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = pc(), n;
}
function mc(e, t) {
  if (V(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (r) => !r._stopped && s && s(r)
    );
  } else
    return t;
}
const fr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, _c = (e, t, n, s, r, i) => {
  const o = r === "svg";
  t === "class" ? rc(e, s, o) : t === "style" ? cc(e, n, s) : xn(t) ? ps(t) || ac(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : vc(e, t, s, o)) ? (lr(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && or(e, t, s, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !se(s)) ? lr(e, Ae(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), or(e, t, s, o));
};
function vc(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && fr(t) && j(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return fr(t) && se(n) ? !1 : t in e;
}
const ar = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return V(t) ? (n) => cn(t, n) : t;
};
function bc(e) {
  e.target.composing = !0;
}
function dr(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Wn = Symbol("_assign"), hr = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e[Wn] = ar(r);
    const i = s || r.props && r.props.type === "number";
    At(e, t ? "change" : "input", (o) => {
      if (o.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), i && (l = Qn(l)), e[Wn](l);
    }), n && At(e, "change", () => {
      e.value = e.value.trim();
    }), t || (At(e, "compositionstart", bc), At(e, "compositionend", dr), At(e, "change", dr));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: i } }, o) {
    if (e[Wn] = ar(o), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? Qn(e.value) : e.value, c = t ?? "";
    l !== c && (document.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === c) || (e.value = c));
  }
}, yc = /* @__PURE__ */ fe({ patchProp: _c }, nc);
let pr;
function Ec() {
  return pr || (pr = El(yc));
}
const xc = ((...e) => {
  const t = Ec().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = Sc(s);
    if (!r) return;
    const i = t._component;
    !j(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = n(r, !1, Rc(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
});
function Rc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Sc(e) {
  return se(e) ? document.querySelector(e) : e;
}
/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
const wt = typeof document < "u";
function ji(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Ac(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && ji(e.default);
}
const K = Object.assign;
function $n(e, t) {
  const n = {};
  for (const s in t) {
    const r = t[s];
    n[s] = Te(r) ? r.map(e) : e(r);
  }
  return n;
}
const Jt = () => {
}, Te = Array.isArray;
function gr(e, t) {
  const n = {};
  for (const s in e) n[s] = s in t ? t[s] : e[s];
  return n;
}
const Bi = /#/g, wc = /&/g, Cc = /\//g, Oc = /=/g, Tc = /\?/g, Ui = /\+/g, Pc = /%5B/g, Ic = /%5D/g, Gi = /%5E/g, Nc = /%60/g, ki = /%7B/g, Dc = /%7C/g, Ki = /%7D/g, Mc = /%20/g;
function Ns(e) {
  return e == null ? "" : encodeURI("" + e).replace(Dc, "|").replace(Pc, "[").replace(Ic, "]");
}
function Lc(e) {
  return Ns(e).replace(ki, "{").replace(Ki, "}").replace(Gi, "^");
}
function us(e) {
  return Ns(e).replace(Ui, "%2B").replace(Mc, "+").replace(Bi, "%23").replace(wc, "%26").replace(Nc, "`").replace(ki, "{").replace(Ki, "}").replace(Gi, "^");
}
function Fc(e) {
  return us(e).replace(Oc, "%3D");
}
function Hc(e) {
  return Ns(e).replace(Bi, "%23").replace(Tc, "%3F");
}
function Vc(e) {
  return Hc(e).replace(Cc, "%2F");
}
function tn(e) {
  if (e == null) return null;
  try {
    return decodeURIComponent("" + e);
  } catch {
  }
  return "" + e;
}
const jc = /\/$/, Bc = (e) => e.replace(jc, "");
function qn(e, t, n = "/") {
  let s, r = {}, i = "", o = "";
  const l = t.indexOf("#");
  let c = t.indexOf("?");
  return c = l >= 0 && c > l ? -1 : c, c >= 0 && (s = t.slice(0, c), i = t.slice(c, l > 0 ? l : t.length), r = e(i.slice(1))), l >= 0 && (s = s || t.slice(0, l), o = t.slice(l, t.length)), s = Kc(s ?? t, n), {
    fullPath: s + i + o,
    path: s,
    query: r,
    hash: tn(o)
  };
}
function Uc(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function mr(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Gc(e, t, n) {
  const s = t.matched.length - 1, r = n.matched.length - 1;
  return s > -1 && s === r && Dt(t.matched[s], n.matched[r]) && Wi(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Dt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Wi(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!kc(e[n], t[n])) return !1;
  return !0;
}
function kc(e, t) {
  return Te(e) ? _r(e, t) : Te(t) ? _r(t, e) : e === t;
}
function _r(e, t) {
  return Te(t) ? e.length === t.length && e.every((n, s) => n === t[s]) : e.length === 1 && e[0] === t;
}
function Kc(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"), s = e.split("/"), r = s[s.length - 1];
  (r === ".." || r === ".") && s.push("");
  let i = n.length - 1, o, l;
  for (o = 0; o < s.length; o++)
    if (l = s[o], l !== ".")
      if (l === "..")
        i > 1 && i--;
      else break;
  return n.slice(0, i).join("/") + "/" + s.slice(o).join("/");
}
const nt = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
let fs = /* @__PURE__ */ (function(e) {
  return e.pop = "pop", e.push = "push", e;
})({}), zn = /* @__PURE__ */ (function(e) {
  return e.back = "back", e.forward = "forward", e.unknown = "", e;
})({});
function Wc(e) {
  if (!e) if (wt) {
    const t = document.querySelector("base");
    e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
  } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Bc(e);
}
const $c = /^[^#]+#/;
function qc(e, t) {
  return e.replace($c, "#") + t;
}
function zc(e, t) {
  const n = document.documentElement.getBoundingClientRect(), s = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0)
  };
}
const Dn = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function Jc(e) {
  let t;
  if ("el" in e) {
    const n = e.el, s = typeof n == "string" && n.startsWith("#"), r = typeof n == "string" ? s ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!r)
      return;
    t = zc(r, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function vr(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const as = /* @__PURE__ */ new Map();
function Qc(e, t) {
  as.set(e, t);
}
function Yc(e) {
  const t = as.get(e);
  return as.delete(e), t;
}
function Xc(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function $i(e) {
  return typeof e == "string" || typeof e == "symbol";
}
let te = /* @__PURE__ */ (function(e) {
  return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e;
})({});
const qi = Symbol("");
te.MATCHER_NOT_FOUND + "", te.NAVIGATION_GUARD_REDIRECT + "", te.NAVIGATION_ABORTED + "", te.NAVIGATION_CANCELLED + "", te.NAVIGATION_DUPLICATED + "";
function Mt(e, t) {
  return K(/* @__PURE__ */ new Error(), {
    type: e,
    [qi]: !0
  }, t);
}
function Ke(e, t) {
  return e instanceof Error && qi in e && (t == null || !!(e.type & t));
}
const Zc = [
  "params",
  "query",
  "hash"
];
function eu(e) {
  if (typeof e == "string") return e;
  if (e.path != null) return e.path;
  const t = {};
  for (const n of Zc) n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
function tu(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const n = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < n.length; ++s) {
    const r = n[s].replace(Ui, " "), i = r.indexOf("="), o = tn(i < 0 ? r : r.slice(0, i)), l = i < 0 ? null : tn(r.slice(i + 1));
    if (o in t) {
      let c = t[o];
      Te(c) || (c = t[o] = [c]), c.push(l);
    } else t[o] = l;
  }
  return t;
}
function br(e) {
  let t = "";
  for (let n in e) {
    const s = e[n];
    if (n = Fc(n), s == null) {
      s !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Te(s) ? s.map((r) => r && us(r)) : [s && us(s)]).forEach((r) => {
      r !== void 0 && (t += (t.length ? "&" : "") + n, r != null && (t += "=" + r));
    });
  }
  return t;
}
function nu(e) {
  const t = {};
  for (const n in e) {
    const s = e[n];
    s !== void 0 && (t[n] = Te(s) ? s.map((r) => r == null ? null : "" + r) : s == null ? s : "" + s);
  }
  return t;
}
const su = Symbol(""), yr = Symbol(""), Ds = Symbol(""), zi = Symbol(""), ds = Symbol("");
function jt() {
  let e = [];
  function t(s) {
    return e.push(s), () => {
      const r = e.indexOf(s);
      r > -1 && e.splice(r, 1);
    };
  }
  function n() {
    e = [];
  }
  return {
    add: t,
    list: () => e.slice(),
    reset: n
  };
}
function it(e, t, n, s, r, i = (o) => o()) {
  const o = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || []);
  return () => new Promise((l, c) => {
    const h = (g) => {
      g === !1 ? c(Mt(te.NAVIGATION_ABORTED, {
        from: n,
        to: t
      })) : g instanceof Error ? c(g) : Xc(g) ? c(Mt(te.NAVIGATION_GUARD_REDIRECT, {
        from: t,
        to: g
      })) : (o && s.enterCallbacks[r] === o && typeof g == "function" && o.push(g), l());
    }, a = i(() => e.call(s && s.instances[r], t, n, h));
    let d = Promise.resolve(a);
    e.length < 3 && (d = d.then(h)), d.catch((g) => c(g));
  });
}
function Jn(e, t, n, s, r = (i) => i()) {
  const i = [];
  for (const o of e)
    for (const l in o.components) {
      let c = o.components[l];
      if (!(t !== "beforeRouteEnter" && !o.instances[l]))
        if (ji(c)) {
          const h = (c.__vccOpts || c)[t];
          h && i.push(it(h, n, s, o, l, r));
        } else {
          let h = c();
          i.push(() => h.then((a) => {
            if (!a) throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);
            const d = Ac(a) ? a.default : a;
            o.mods[l] = a, o.components[l] = d;
            const g = (d.__vccOpts || d)[t];
            return g && it(g, n, s, o, l, r)();
          }));
        }
    }
  return i;
}
function ru(e, t) {
  const n = [], s = [], r = [], i = Math.max(t.matched.length, e.matched.length);
  for (let o = 0; o < i; o++) {
    const l = t.matched[o];
    l && (e.matched.find((h) => Dt(h, l)) ? s.push(l) : n.push(l));
    const c = e.matched[o];
    c && (t.matched.find((h) => Dt(h, c)) || r.push(c));
  }
  return [
    n,
    s,
    r
  ];
}
/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let iu = () => location.protocol + "//" + location.host;
function Ji(e, t) {
  const { pathname: n, search: s, hash: r } = t, i = e.indexOf("#");
  if (i > -1) {
    let o = r.includes(e.slice(i)) ? e.slice(i).length : 1, l = r.slice(o);
    return l[0] !== "/" && (l = "/" + l), mr(l, "");
  }
  return mr(n, e) + s + r;
}
function ou(e, t, n, s) {
  let r = [], i = [], o = null;
  const l = ({ state: g }) => {
    const m = Ji(e, location), C = n.value, T = t.value;
    let B = 0;
    if (g) {
      if (n.value = m, t.value = g, o && o === C) {
        o = null;
        return;
      }
      B = T ? g.position - T.position : 0;
    } else s(m);
    r.forEach((N) => {
      N(n.value, C, {
        delta: B,
        type: fs.pop,
        direction: B ? B > 0 ? zn.forward : zn.back : zn.unknown
      });
    });
  };
  function c() {
    o = n.value;
  }
  function h(g) {
    r.push(g);
    const m = () => {
      const C = r.indexOf(g);
      C > -1 && r.splice(C, 1);
    };
    return i.push(m), m;
  }
  function a() {
    if (document.visibilityState === "hidden") {
      const { history: g } = window;
      if (!g.state) return;
      g.replaceState(K({}, g.state, { scroll: Dn() }), "");
    }
  }
  function d() {
    for (const g of i) g();
    i = [], window.removeEventListener("popstate", l), window.removeEventListener("pagehide", a), document.removeEventListener("visibilitychange", a);
  }
  return window.addEventListener("popstate", l), window.addEventListener("pagehide", a), document.addEventListener("visibilitychange", a), {
    pauseListeners: c,
    listen: h,
    destroy: d
  };
}
function Er(e, t, n, s = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: r ? Dn() : null
  };
}
function lu(e) {
  const { history: t, location: n } = window, s = { value: Ji(e, n) }, r = { value: t.state };
  r.value || i(s.value, {
    back: null,
    current: s.value,
    forward: null,
    position: t.length - 1,
    replaced: !0,
    scroll: null
  }, !0);
  function i(c, h, a) {
    const d = e.indexOf("#"), g = d > -1 ? (n.host && document.querySelector("base") ? e : e.slice(d)) + c : iu() + e + c;
    try {
      t[a ? "replaceState" : "pushState"](h, "", g), r.value = h;
    } catch (m) {
      console.error(m), n[a ? "replace" : "assign"](g);
    }
  }
  function o(c, h) {
    i(c, K({}, t.state, Er(r.value.back, c, r.value.forward, !0), h, { position: r.value.position }), !0), s.value = c;
  }
  function l(c, h) {
    const a = K({}, r.value, t.state, {
      forward: c,
      scroll: Dn()
    });
    i(a.current, a, !0), i(c, K({}, Er(s.value, c, null), { position: a.position + 1 }, h), !1), s.value = c;
  }
  return {
    location: s,
    state: r,
    push: l,
    replace: o
  };
}
function cu(e) {
  e = Wc(e);
  const t = lu(e), n = ou(e, t.state, t.location, t.replace);
  function s(i, o = !0) {
    o || n.pauseListeners(), history.go(i);
  }
  const r = K({
    location: "",
    base: e,
    go: s,
    createHref: qc.bind(null, e)
  }, t, n);
  return Object.defineProperty(r, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(r, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), r;
}
function uu(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), cu(e);
}
let gt = /* @__PURE__ */ (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e;
})({});
var ne = /* @__PURE__ */ (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e;
})(ne || {});
const fu = {
  type: gt.Static,
  value: ""
}, au = /[a-zA-Z0-9_]/;
function du(e) {
  if (!e) return [[]];
  if (e === "/") return [[fu]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(m) {
    throw new Error(`ERR (${n})/"${h}": ${m}`);
  }
  let n = ne.Static, s = n;
  const r = [];
  let i;
  function o() {
    i && r.push(i), i = [];
  }
  let l = 0, c, h = "", a = "";
  function d() {
    h && (n === ne.Static ? i.push({
      type: gt.Static,
      value: h
    }) : n === ne.Param || n === ne.ParamRegExp || n === ne.ParamRegExpEnd ? (i.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`), i.push({
      type: gt.Param,
      value: h,
      regexp: a,
      repeatable: c === "*" || c === "+",
      optional: c === "*" || c === "?"
    })) : t("Invalid state to consume buffer"), h = "");
  }
  function g() {
    h += c;
  }
  for (; l < e.length; ) {
    if (c = e[l++], c === "\\" && n !== ne.ParamRegExp) {
      s = n, n = ne.EscapeNext;
      continue;
    }
    switch (n) {
      case ne.Static:
        c === "/" ? (h && d(), o()) : c === ":" ? (d(), n = ne.Param) : g();
        break;
      case ne.EscapeNext:
        g(), n = s;
        break;
      case ne.Param:
        c === "(" ? n = ne.ParamRegExp : au.test(c) ? g() : (d(), n = ne.Static, c !== "*" && c !== "?" && c !== "+" && l--);
        break;
      case ne.ParamRegExp:
        c === ")" ? a[a.length - 1] == "\\" ? a = a.slice(0, -1) + c : n = ne.ParamRegExpEnd : a += c;
        break;
      case ne.ParamRegExpEnd:
        d(), n = ne.Static, c !== "*" && c !== "?" && c !== "+" && l--, a = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === ne.ParamRegExp && t(`Unfinished custom RegExp for param "${h}"`), d(), o(), r;
}
const xr = "[^/]+?", hu = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
};
var de = /* @__PURE__ */ (function(e) {
  return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = 0.7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = 0.25] = "BonusCaseSensitive", e;
})(de || {});
const pu = /[.+*?^${}()[\]/\\]/g;
function gu(e, t) {
  const n = K({}, hu, t), s = [];
  let r = n.start ? "^" : "";
  const i = [];
  for (const h of e) {
    const a = h.length ? [] : [de.Root];
    n.strict && !h.length && (r += "/");
    for (let d = 0; d < h.length; d++) {
      const g = h[d];
      let m = de.Segment + (n.sensitive ? de.BonusCaseSensitive : 0);
      if (g.type === gt.Static)
        d || (r += "/"), r += g.value.replace(pu, "\\$&"), m += de.Static;
      else if (g.type === gt.Param) {
        const { value: C, repeatable: T, optional: B, regexp: N } = g;
        i.push({
          name: C,
          repeatable: T,
          optional: B
        });
        const P = N || xr;
        if (P !== xr) {
          m += de.BonusCustomRegExp;
          try {
            `${P}`;
          } catch (I) {
            throw new Error(`Invalid custom RegExp for param "${C}" (${P}): ` + I.message);
          }
        }
        let L = T ? `((?:${P})(?:/(?:${P}))*)` : `(${P})`;
        d || (L = B && h.length < 2 ? `(?:/${L})` : "/" + L), B && (L += "?"), r += L, m += de.Dynamic, B && (m += de.BonusOptional), T && (m += de.BonusRepeatable), P === ".*" && (m += de.BonusWildcard);
      }
      a.push(m);
    }
    s.push(a);
  }
  if (n.strict && n.end) {
    const h = s.length - 1;
    s[h][s[h].length - 1] += de.BonusStrict;
  }
  n.strict || (r += "/?"), n.end ? r += "$" : n.strict && !r.endsWith("/") && (r += "(?:/|$)");
  const o = new RegExp(r, n.sensitive ? "" : "i");
  function l(h) {
    const a = h.match(o), d = {};
    if (!a) return null;
    for (let g = 1; g < a.length; g++) {
      const m = a[g] || "", C = i[g - 1];
      d[C.name] = m && C.repeatable ? m.split("/") : m;
    }
    return d;
  }
  function c(h) {
    let a = "", d = !1;
    for (const g of e) {
      (!d || !a.endsWith("/")) && (a += "/"), d = !1;
      for (const m of g) if (m.type === gt.Static) a += m.value;
      else if (m.type === gt.Param) {
        const { value: C, repeatable: T, optional: B } = m, N = C in h ? h[C] : "";
        if (Te(N) && !T) throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);
        const P = Te(N) ? N.join("/") : N;
        if (!P) if (B)
          g.length < 2 && (a.endsWith("/") ? a = a.slice(0, -1) : d = !0);
        else throw new Error(`Missing required param "${C}"`);
        a += P;
      }
    }
    return a || "/";
  }
  return {
    re: o,
    score: s,
    keys: i,
    parse: l,
    stringify: c
  };
}
function mu(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n];
    if (s) return s;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === de.Static + de.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === de.Static + de.Segment ? 1 : -1 : 0;
}
function Qi(e, t) {
  let n = 0;
  const s = e.score, r = t.score;
  for (; n < s.length && n < r.length; ) {
    const i = mu(s[n], r[n]);
    if (i) return i;
    n++;
  }
  if (Math.abs(r.length - s.length) === 1) {
    if (Rr(s)) return 1;
    if (Rr(r)) return -1;
  }
  return r.length - s.length;
}
function Rr(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const _u = {
  strict: !1,
  end: !0,
  sensitive: !1
};
function vu(e, t, n) {
  const s = gu(du(e.path), n), r = K(s, {
    record: e,
    parent: t,
    children: [],
    alias: []
  });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function bu(e, t) {
  const n = [], s = /* @__PURE__ */ new Map();
  t = gr(_u, t);
  function r(d) {
    return s.get(d);
  }
  function i(d, g, m) {
    const C = !m, T = Ar(d);
    T.aliasOf = m && m.record;
    const B = gr(t, d), N = [T];
    if ("alias" in d) {
      const I = typeof d.alias == "string" ? [d.alias] : d.alias;
      for (const J of I) N.push(Ar(K({}, T, {
        components: m ? m.record.components : T.components,
        path: J,
        aliasOf: m ? m.record : T
      })));
    }
    let P, L;
    for (const I of N) {
      const { path: J } = I;
      if (g && J[0] !== "/") {
        const ie = g.record.path, ee = ie[ie.length - 1] === "/" ? "" : "/";
        I.path = g.record.path + (J && ee + J);
      }
      if (P = vu(I, g, B), m ? m.alias.push(P) : (L = L || P, L !== P && L.alias.push(P), C && d.name && !wr(P) && o(d.name)), Yi(P) && c(P), T.children) {
        const ie = T.children;
        for (let ee = 0; ee < ie.length; ee++) i(ie[ee], P, m && m.children[ee]);
      }
      m = m || P;
    }
    return L ? () => {
      o(L);
    } : Jt;
  }
  function o(d) {
    if ($i(d)) {
      const g = s.get(d);
      g && (s.delete(d), n.splice(n.indexOf(g), 1), g.children.forEach(o), g.alias.forEach(o));
    } else {
      const g = n.indexOf(d);
      g > -1 && (n.splice(g, 1), d.record.name && s.delete(d.record.name), d.children.forEach(o), d.alias.forEach(o));
    }
  }
  function l() {
    return n;
  }
  function c(d) {
    const g = xu(d, n);
    n.splice(g, 0, d), d.record.name && !wr(d) && s.set(d.record.name, d);
  }
  function h(d, g) {
    let m, C = {}, T, B;
    if ("name" in d && d.name) {
      if (m = s.get(d.name), !m) throw Mt(te.MATCHER_NOT_FOUND, { location: d });
      B = m.record.name, C = K(Sr(g.params, m.keys.filter((L) => !L.optional).concat(m.parent ? m.parent.keys.filter((L) => L.optional) : []).map((L) => L.name)), d.params && Sr(d.params, m.keys.map((L) => L.name))), T = m.stringify(C);
    } else if (d.path != null)
      T = d.path, m = n.find((L) => L.re.test(T)), m && (C = m.parse(T), B = m.record.name);
    else {
      if (m = g.name ? s.get(g.name) : n.find((L) => L.re.test(g.path)), !m) throw Mt(te.MATCHER_NOT_FOUND, {
        location: d,
        currentLocation: g
      });
      B = m.record.name, C = K({}, g.params, d.params), T = m.stringify(C);
    }
    const N = [];
    let P = m;
    for (; P; )
      N.unshift(P.record), P = P.parent;
    return {
      name: B,
      path: T,
      params: C,
      matched: N,
      meta: Eu(N)
    };
  }
  e.forEach((d) => i(d));
  function a() {
    n.length = 0, s.clear();
  }
  return {
    addRoute: i,
    resolve: h,
    removeRoute: o,
    clearRoutes: a,
    getRoutes: l,
    getRecordMatcher: r
  };
}
function Sr(e, t) {
  const n = {};
  for (const s of t) s in e && (n[s] = e[s]);
  return n;
}
function Ar(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: yu(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function yu(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const s in e.components) t[s] = typeof n == "object" ? n[s] : n;
  return t;
}
function wr(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function Eu(e) {
  return e.reduce((t, n) => K(t, n.meta), {});
}
function xu(e, t) {
  let n = 0, s = t.length;
  for (; n !== s; ) {
    const i = n + s >> 1;
    Qi(e, t[i]) < 0 ? s = i : n = i + 1;
  }
  const r = Ru(e);
  return r && (s = t.lastIndexOf(r, s - 1)), s;
}
function Ru(e) {
  let t = e;
  for (; t = t.parent; ) if (Yi(t) && Qi(e, t) === 0) return t;
}
function Yi({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function Cr(e) {
  const t = Je(Ds), n = Je(zi), s = we(() => {
    const c = Tt(e.to);
    return t.resolve(c);
  }), r = we(() => {
    const { matched: c } = s.value, { length: h } = c, a = c[h - 1], d = n.matched;
    if (!a || !d.length) return -1;
    const g = d.findIndex(Dt.bind(null, a));
    if (g > -1) return g;
    const m = Or(c[h - 2]);
    return h > 1 && Or(a) === m && d[d.length - 1].path !== m ? d.findIndex(Dt.bind(null, c[h - 2])) : g;
  }), i = we(() => r.value > -1 && Ou(n.params, s.value.params)), o = we(() => r.value > -1 && r.value === n.matched.length - 1 && Wi(n.params, s.value.params));
  function l(c = {}) {
    if (Cu(c)) {
      const h = t[Tt(e.replace) ? "replace" : "push"](Tt(e.to)).catch(Jt);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => h), h;
    }
    return Promise.resolve();
  }
  return {
    route: s,
    href: we(() => s.value.href),
    isActive: i,
    isExactActive: o,
    navigate: l
  };
}
function Su(e) {
  return e.length === 1 ? e[0] : e;
}
const Au = /* @__PURE__ */ fi({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    },
    viewTransition: Boolean
  },
  useLink: Cr,
  setup(e, { slots: t }) {
    const n = Cn(Cr(e)), { options: s } = Je(Ds), r = we(() => ({
      [Tr(e.activeClass, s.linkActiveClass, "router-link-active")]: n.isActive,
      [Tr(e.exactActiveClass, s.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const i = t.default && Su(t.default(n));
      return e.custom ? i : Hi("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        onClick: n.navigate,
        class: r.value
      }, i);
    };
  }
}), wu = Au;
function Cu(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Ou(e, t) {
  for (const n in t) {
    const s = t[n], r = e[n];
    if (typeof s == "string") {
      if (s !== r) return !1;
    } else if (!Te(r) || r.length !== s.length || s.some((i, o) => i !== r[o])) return !1;
  }
  return !0;
}
function Or(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Tr = (e, t, n) => e ?? t ?? n, Tu = /* @__PURE__ */ fi({
  name: "RouterView",
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t, slots: n }) {
    const s = Je(ds), r = we(() => e.route || s.value), i = Je(yr, 0), o = we(() => {
      let h = Tt(i);
      const { matched: a } = r.value;
      let d;
      for (; (d = a[h]) && !d.components; ) h++;
      return h;
    }), l = we(() => r.value.matched[o.value]);
    un(yr, we(() => o.value + 1)), un(su, l), un(ds, r);
    const c = No();
    return fn(() => [
      c.value,
      l.value,
      e.name
    ], ([h, a, d], [g, m, C]) => {
      a && (a.instances[d] = h, m && m !== a && h && h === g && (a.leaveGuards.size || (a.leaveGuards = m.leaveGuards), a.updateGuards.size || (a.updateGuards = m.updateGuards))), h && a && (!m || !Dt(a, m) || !g) && (a.enterCallbacks[d] || []).forEach((T) => T(h));
    }, { flush: "post" }), () => {
      const h = r.value, a = e.name, d = l.value, g = d && d.components[a];
      if (!g) return Pr(n.default, {
        Component: g,
        route: h
      });
      const m = d.props[a], C = m ? m === !0 ? h.params : typeof m == "function" ? m(h) : m : null, B = Hi(g, K({}, C, t, {
        onVnodeUnmounted: (N) => {
          N.component.isUnmounted && (d.instances[a] = null);
        },
        ref: c
      }));
      return Pr(n.default, {
        Component: B,
        route: h
      }) || B;
    };
  }
});
function Pr(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Pu = Tu;
function Iu(e) {
  const t = bu(e.routes, e), n = e.parseQuery || tu, s = e.stringifyQuery || br, r = e.history, i = jt(), o = jt(), l = jt(), c = Do(nt);
  let h = nt;
  wt && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const a = $n.bind(null, (b) => "" + b), d = $n.bind(null, Vc), g = $n.bind(null, tn);
  function m(b, O) {
    let A, D;
    return $i(b) ? (A = t.getRecordMatcher(b), D = O) : D = b, t.addRoute(D, A);
  }
  function C(b) {
    const O = t.getRecordMatcher(b);
    O && t.removeRoute(O);
  }
  function T() {
    return t.getRoutes().map((b) => b.record);
  }
  function B(b) {
    return !!t.getRecordMatcher(b);
  }
  function N(b, O) {
    if (O = K({}, O || c.value), typeof b == "string") {
      const p = qn(n, b, O.path), v = t.resolve({ path: p.path }, O), y = r.createHref(p.fullPath);
      return K(p, v, {
        params: g(v.params),
        hash: tn(p.hash),
        redirectedFrom: void 0,
        href: y
      });
    }
    let A;
    if (b.path != null)
      A = K({}, b, { path: qn(n, b.path, O.path).path });
    else {
      const p = K({}, b.params);
      for (const v in p) p[v] == null && delete p[v];
      A = K({}, b, { params: d(p) }), O.params = d(O.params);
    }
    const D = t.resolve(A, O), U = b.hash || "";
    D.params = a(g(D.params));
    const u = Uc(s, K({}, b, {
      hash: Lc(U),
      path: D.path
    })), f = r.createHref(u);
    return K({
      fullPath: u,
      hash: U,
      query: s === br ? nu(b.query) : b.query || {}
    }, D, {
      redirectedFrom: void 0,
      href: f
    });
  }
  function P(b) {
    return typeof b == "string" ? qn(n, b, c.value.path) : K({}, b);
  }
  function L(b, O) {
    if (h !== b) return Mt(te.NAVIGATION_CANCELLED, {
      from: O,
      to: b
    });
  }
  function I(b) {
    return ee(b);
  }
  function J(b) {
    return I(K(P(b), { replace: !0 }));
  }
  function ie(b, O) {
    const A = b.matched[b.matched.length - 1];
    if (A && A.redirect) {
      const { redirect: D } = A;
      let U = typeof D == "function" ? D(b, O) : D;
      return typeof U == "string" && (U = U.includes("?") || U.includes("#") ? U = P(U) : { path: U }, U.params = {}), K({
        query: b.query,
        hash: b.hash,
        params: U.path != null ? {} : b.params
      }, U);
    }
  }
  function ee(b, O) {
    const A = h = N(b), D = c.value, U = b.state, u = b.force, f = b.replace === !0, p = ie(A, D);
    if (p) return ee(K(P(p), {
      state: typeof p == "object" ? K({}, U, p.state) : U,
      force: u,
      replace: f
    }), O || A);
    const v = A;
    v.redirectedFrom = O;
    let y;
    return !u && Gc(s, D, A) && (y = Mt(te.NAVIGATION_DUPLICATED, {
      to: v,
      from: D
    }), De(D, D, !0, !1)), (y ? Promise.resolve(y) : Ie(v, D)).catch((_) => Ke(_) ? Ke(_, te.NAVIGATION_GUARD_REDIRECT) ? _ : tt(_) : k(_, v, D)).then((_) => {
      if (_) {
        if (Ke(_, te.NAVIGATION_GUARD_REDIRECT))
          return ee(K({ replace: f }, P(_.to), {
            state: typeof _.to == "object" ? K({}, U, _.to.state) : U,
            force: u
          }), O || v);
      } else _ = ft(v, D, !0, f, U);
      return et(v, D, _), _;
    });
  }
  function Pe(b, O) {
    const A = L(b, O);
    return A ? Promise.reject(A) : Promise.resolve();
  }
  function Ze(b) {
    const O = xt.values().next().value;
    return O && typeof O.runWithContext == "function" ? O.runWithContext(b) : b();
  }
  function Ie(b, O) {
    let A;
    const [D, U, u] = ru(b, O);
    A = Jn(D.reverse(), "beforeRouteLeave", b, O);
    for (const p of D) p.leaveGuards.forEach((v) => {
      A.push(it(v, b, O));
    });
    const f = Pe.bind(null, b, O);
    return A.push(f), Se(A).then(() => {
      A = [];
      for (const p of i.list()) A.push(it(p, b, O));
      return A.push(f), Se(A);
    }).then(() => {
      A = Jn(U, "beforeRouteUpdate", b, O);
      for (const p of U) p.updateGuards.forEach((v) => {
        A.push(it(v, b, O));
      });
      return A.push(f), Se(A);
    }).then(() => {
      A = [];
      for (const p of u) if (p.beforeEnter) if (Te(p.beforeEnter)) for (const v of p.beforeEnter) A.push(it(v, b, O));
      else A.push(it(p.beforeEnter, b, O));
      return A.push(f), Se(A);
    }).then(() => (b.matched.forEach((p) => p.enterCallbacks = {}), A = Jn(u, "beforeRouteEnter", b, O, Ze), A.push(f), Se(A))).then(() => {
      A = [];
      for (const p of o.list()) A.push(it(p, b, O));
      return A.push(f), Se(A);
    }).catch((p) => Ke(p, te.NAVIGATION_CANCELLED) ? p : Promise.reject(p));
  }
  function et(b, O, A) {
    l.list().forEach((D) => Ze(() => D(b, O, A)));
  }
  function ft(b, O, A, D, U) {
    const u = L(b, O);
    if (u) return u;
    const f = O === nt, p = wt ? history.state : {};
    A && (D || f ? r.replace(b.fullPath, K({ scroll: f && p && p.scroll }, U)) : r.push(b.fullPath, U)), c.value = b, De(b, O, A, f), tt();
  }
  let Ne;
  function Lt() {
    Ne || (Ne = r.listen((b, O, A) => {
      if (!at.listening) return;
      const D = N(b), U = ie(D, at.currentRoute.value);
      if (U) {
        ee(K(U, {
          replace: !0,
          force: !0
        }), D).catch(Jt);
        return;
      }
      h = D;
      const u = c.value;
      wt && Qc(vr(u.fullPath, A.delta), Dn()), Ie(D, u).catch((f) => Ke(f, te.NAVIGATION_ABORTED | te.NAVIGATION_CANCELLED) ? f : Ke(f, te.NAVIGATION_GUARD_REDIRECT) ? (ee(K(P(f.to), { force: !0 }), D).then((p) => {
        Ke(p, te.NAVIGATION_ABORTED | te.NAVIGATION_DUPLICATED) && !A.delta && A.type === fs.pop && r.go(-1, !1);
      }).catch(Jt), Promise.reject()) : (A.delta && r.go(-A.delta, !1), k(f, D, u))).then((f) => {
        f = f || ft(D, u, !1), f && (A.delta && !Ke(f, te.NAVIGATION_CANCELLED) ? r.go(-A.delta, !1) : A.type === fs.pop && Ke(f, te.NAVIGATION_ABORTED | te.NAVIGATION_DUPLICATED) && r.go(-1, !1)), et(D, u, f);
      }).catch(Jt);
    }));
  }
  let yt = jt(), re = jt(), z;
  function k(b, O, A) {
    tt(b);
    const D = re.list();
    return D.length ? D.forEach((U) => U(b, O, A)) : console.error(b), Promise.reject(b);
  }
  function Ge() {
    return z && c.value !== nt ? Promise.resolve() : new Promise((b, O) => {
      yt.add([b, O]);
    });
  }
  function tt(b) {
    return z || (z = !b, Lt(), yt.list().forEach(([O, A]) => b ? A(b) : O()), yt.reset()), b;
  }
  function De(b, O, A, D) {
    const { scrollBehavior: U } = e;
    if (!wt || !U) return Promise.resolve();
    const u = !A && Yc(vr(b.fullPath, 0)) || (D || !A) && history.state && history.state.scroll || null;
    return ri().then(() => U(b, O, u)).then((f) => f && Jc(f)).catch((f) => k(f, b, O));
  }
  const me = (b) => r.go(b);
  let Et;
  const xt = /* @__PURE__ */ new Set(), at = {
    currentRoute: c,
    listening: !0,
    addRoute: m,
    removeRoute: C,
    clearRoutes: t.clearRoutes,
    hasRoute: B,
    getRoutes: T,
    resolve: N,
    options: e,
    push: I,
    replace: J,
    go: me,
    back: () => me(-1),
    forward: () => me(1),
    beforeEach: i.add,
    beforeResolve: o.add,
    afterEach: l.add,
    onError: re.add,
    isReady: Ge,
    install(b) {
      b.component("RouterLink", wu), b.component("RouterView", Pu), b.config.globalProperties.$router = at, Object.defineProperty(b.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => Tt(c)
      }), wt && !Et && c.value === nt && (Et = !0, I(r.location).catch((D) => {
      }));
      const O = {};
      for (const D in nt) Object.defineProperty(O, D, {
        get: () => c.value[D],
        enumerable: !0
      });
      b.provide(Ds, at), b.provide(zi, ei(O)), b.provide(ds, c);
      const A = b.unmount;
      xt.add(b), b.unmount = function() {
        xt.delete(b), xt.size < 1 && (h = nt, Ne && Ne(), Ne = null, c.value = nt, Et = !1, z = !1), A();
      };
    }
  };
  function Se(b) {
    return b.reduce((O, A) => O.then(() => Ze(A)), Promise.resolve());
  }
  return at;
}
const Mn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, Nu = {
  name: "App"
}, Du = {
  id: "app",
  class: "container"
};
function Mu(e, t, n, s, r, i) {
  const o = gi("router-view");
  return lt(), _t("div", Du, [
    ge(o)
  ]);
}
const Lu = /* @__PURE__ */ Mn(Nu, [["render", Mu]]), Fu = {
  name: "Home"
}, Hu = { style: { "text-align": "center", padding: "40px" } };
function Vu(e, t, n, s, r, i) {
  const o = gi("router-link");
  return lt(), _t("div", Hu, [
    t[1] || (t[1] = oe("h1", null, "Halaman Utama", -1)),
    t[2] || (t[2] = oe("p", null, "Selamat datang ke aplikasi login", -1)),
    ge(o, { to: "/login" }, {
      default: ui(() => [...t[0] || (t[0] = [
        oe("button", null, "Login", -1)
      ])]),
      _: 1
    })
  ]);
}
const ju = /* @__PURE__ */ Mn(Fu, [["render", Vu], ["__scopeId", "data-v-947ac5cc"]]), Bu = {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      loading: !1,
      error: ""
    };
  },
  methods: {
    async handleLogin() {
      if (this.loading = !0, this.error = "", !this.email || !this.password) {
        this.error = "Email dan password wajib diisi", this.loading = !1;
        return;
      }
      try {
        const e = await fetch("https://apis.jll.my.id/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: this.email,
            password: this.password
          })
        });
        let t = null;
        try {
          t = await e.json();
        } catch {
          throw new Error("Gagal parsing response server");
        }
        if (!e.ok) {
          this.error = t?.error || "Login gagal";
          return;
        }
        localStorage.setItem("token", t.token), t.email && localStorage.setItem("userData", t.email), alert("Login berhasil!"), this.$router.push("/dashboard");
      } catch (e) {
        this.error = e.message || "Terjadi kesalahan";
      } finally {
        this.loading = !1;
      }
    }
  }
}, Uu = { style: { "text-align": "center", padding: "40px" } }, Gu = { class: "login-container" }, ku = ["disabled"], Ku = {
  key: 0,
  class: "error"
};
function Wu(e, t, n, s, r, i) {
  return lt(), _t("div", Uu, [
    t[5] || (t[5] = oe("h1", null, "Login", -1)),
    oe("div", Gu, [
      oe("div", null, [
        t[3] || (t[3] = oe("label", null, "Email", -1)),
        Us(oe("input", {
          "onUpdate:modelValue": t[0] || (t[0] = (o) => r.email = o),
          type: "email",
          placeholder: "Masukkan email"
        }, null, 512), [
          [hr, r.email]
        ])
      ]),
      oe("div", null, [
        t[4] || (t[4] = oe("label", null, "Password", -1)),
        Us(oe("input", {
          "onUpdate:modelValue": t[1] || (t[1] = (o) => r.password = o),
          type: "password",
          placeholder: "Masukkan password"
        }, null, 512), [
          [hr, r.password]
        ])
      ]),
      oe("button", {
        onClick: t[2] || (t[2] = (...o) => i.handleLogin && i.handleLogin(...o)),
        disabled: r.loading
      }, hn(r.loading ? "Logging in..." : "Login"), 9, ku),
      r.error ? (lt(), _t("div", Ku, hn(r.error), 1)) : Ul("", !0)
    ])
  ]);
}
const $u = /* @__PURE__ */ Mn(Bu, [["render", Wu], ["__scopeId", "data-v-7aa3c6f8"]]), qu = {
  name: "Dashboard",
  data() {
    return {
      userData: localStorage.getItem("userData") || ""
    };
  },
  methods: {
    handleLogout() {
      localStorage.removeItem("token"), localStorage.removeItem("userData"), alert("Logout berhasil!"), this.$router.push("/login");
    }
  }
}, zu = { style: { "text-align": "center", padding: "40px" } }, Ju = { key: 0 }, Qu = { key: 1 };
function Yu(e, t, n, s, r, i) {
  return lt(), _t("div", zu, [
    t[1] || (t[1] = oe("h1", null, "Dashboard", -1)),
    r.userData ? (lt(), _t("p", Ju, "Selamat datang, " + hn(r.userData) + "!", 1)) : (lt(), _t("p", Qu, "Selamat datang — Anda sudah login.")),
    oe("button", {
      onClick: t[0] || (t[0] = (...o) => i.handleLogout && i.handleLogout(...o))
    }, "Logout")
  ]);
}
const Xu = /* @__PURE__ */ Mn(qu, [["render", Yu], ["__scopeId", "data-v-7a3e988c"]]), Zu = [
  { path: "/", component: ju },
  { path: "/login", component: $u },
  { path: "/dashboard", component: Xu }
], Xi = Iu({
  history: uu(),
  routes: Zu
});
Xi.beforeEach((e, t, n) => {
  const s = localStorage.getItem("token");
  e.path === "/dashboard" && !s ? n("/login") : (e.path === "/login" || e.path === "/") && s ? n("/dashboard") : n();
});
const Zi = xc(Lu);
Zi.use(Xi);
Zi.mount("#app");
