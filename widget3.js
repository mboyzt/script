/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function vs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const U = {}, Ye = [], xe = () => {
}, Sn = () => !1, Ut = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ss = (e) => e.startsWith("onUpdate:"), te = Object.assign, ws = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Ar = Object.prototype.hasOwnProperty, H = (e, t) => Ar.call(e, t), P = Array.isArray, ze = (e) => Wt(e) === "[object Map]", wn = (e) => Wt(e) === "[object Set]", M = (e) => typeof e == "function", J = (e) => typeof e == "string", He = (e) => typeof e == "symbol", B = (e) => e !== null && typeof e == "object", Cn = (e) => (B(e) || M(e)) && M(e.then) && M(e.catch), Tn = Object.prototype.toString, Wt = (e) => Tn.call(e), Pr = (e) => Wt(e).slice(8, -1), En = (e) => Wt(e) === "[object Object]", Cs = (e) => J(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ft = /* @__PURE__ */ vs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Kt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((s) => t[s] || (t[s] = e(s)));
}, Mr = /-\w/g, De = Kt(
  (e) => e.replace(Mr, (t) => t.slice(1).toUpperCase())
), Ir = /\B([A-Z])/g, qe = Kt(
  (e) => e.replace(Ir, "-$1").toLowerCase()
), On = Kt((e) => e.charAt(0).toUpperCase() + e.slice(1)), Zt = Kt(
  (e) => e ? `on${On(e)}` : ""
), We = (e, t) => !Object.is(e, t), Qt = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, An = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, Rr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Js;
const Bt = () => Js || (Js = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ts(e) {
  if (P(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], r = J(n) ? $r(n) : Ts(n);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (J(e) || B(e))
    return e;
}
const Fr = /;(?![^(]*\))/g, Dr = /:([^]+)/, Hr = /\/\*[^]*?\*\//g;
function $r(e) {
  const t = {};
  return e.replace(Hr, "").split(Fr).forEach((s) => {
    if (s) {
      const n = s.split(Dr);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Es(e) {
  let t = "";
  if (J(e))
    t = e;
  else if (P(e))
    for (let s = 0; s < e.length; s++) {
      const n = Es(e[s]);
      n && (t += n + " ");
    }
  else if (B(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const jr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Nr = /* @__PURE__ */ vs(jr);
function Pn(e) {
  return !!e || e === "";
}
const Mn = (e) => !!(e && e.__v_isRef === !0), In = (e) => J(e) ? e : e == null ? "" : P(e) || B(e) && (e.toString === Tn || !M(e.toString)) ? Mn(e) ? In(e.value) : JSON.stringify(e, Rn, 2) : String(e), Rn = (e, t) => Mn(t) ? Rn(e, t.value) : ze(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, r], i) => (s[kt(n, i) + " =>"] = r, s),
    {}
  )
} : wn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => kt(s))
} : He(t) ? kt(t) : B(t) && !P(t) && !En(t) ? String(t) : t, kt = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    He(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let re;
class Lr {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = re, !t && re && (this.index = (re.scopes || (re.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].pause();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].resume();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const s = re;
      try {
        return re = this, t();
      } finally {
        re = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = re, re = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (re = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let s, n;
      for (s = 0, n = this.effects.length; s < n; s++)
        this.effects[s].stop();
      for (this.effects.length = 0, s = 0, n = this.cleanups.length; s < n; s++)
        this.cleanups[s]();
      if (this.cleanups.length = 0, this.scopes) {
        for (s = 0, n = this.scopes.length; s < n; s++)
          this.scopes[s].stop(!0);
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
function Vr() {
  return re;
}
let V;
const es = /* @__PURE__ */ new WeakSet();
class Fn {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, re && re.active && re.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, es.has(this) && (es.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Hn(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ys(this), $n(this);
    const t = V, s = ce;
    V = this, ce = !0;
    try {
      return this.fn();
    } finally {
      jn(this), V = t, ce = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ps(t);
      this.deps = this.depsTail = void 0, Ys(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? es.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    cs(this) && this.run();
  }
  get dirty() {
    return cs(this);
  }
}
let Dn = 0, ct, ut;
function Hn(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ut, ut = e;
    return;
  }
  e.next = ct, ct = e;
}
function Os() {
  Dn++;
}
function As() {
  if (--Dn > 0)
    return;
  if (ut) {
    let t = ut;
    for (ut = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; ct; ) {
    let t = ct;
    for (ct = void 0; t; ) {
      const s = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = s;
    }
  }
  if (e) throw e;
}
function $n(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function jn(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const r = n.prevDep;
    n.version === -1 ? (n === s && (s = r), Ps(n), Ur(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = r;
  }
  e.deps = t, e.depsTail = s;
}
function cs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Nn(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Nn(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === mt) || (e.globalVersion = mt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !cs(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = V, n = ce;
  V = e, ce = !0;
  try {
    $n(e);
    const r = e.fn(e._value);
    (t.version === 0 || We(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    V = s, ce = n, jn(e), e.flags &= -3;
  }
}
function Ps(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: r } = e;
  if (n && (n.nextSub = r, e.prevSub = void 0), r && (r.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let i = s.computed.deps; i; i = i.nextDep)
      Ps(i, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function Ur(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let ce = !0;
const Ln = [];
function Ee() {
  Ln.push(ce), ce = !1;
}
function Oe() {
  const e = Ln.pop();
  ce = e === void 0 ? !0 : e;
}
function Ys(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = V;
    V = void 0;
    try {
      t();
    } finally {
      V = s;
    }
  }
}
let mt = 0;
class Wr {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Vn {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!V || !ce || V === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== V)
      s = this.activeLink = new Wr(V, this), V.deps ? (s.prevDep = V.depsTail, V.depsTail.nextDep = s, V.depsTail = s) : V.deps = V.depsTail = s, Un(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = V.depsTail, s.nextDep = void 0, V.depsTail.nextDep = s, V.depsTail = s, V.deps === s && (V.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, mt++, this.notify(t);
  }
  notify(t) {
    Os();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      As();
    }
  }
}
function Un(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Un(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const us = /* @__PURE__ */ new WeakMap(), Ke = Symbol(
  ""
), as = Symbol(
  ""
), bt = Symbol(
  ""
);
function Y(e, t, s) {
  if (ce && V) {
    let n = us.get(e);
    n || us.set(e, n = /* @__PURE__ */ new Map());
    let r = n.get(s);
    r || (n.set(s, r = new Vn()), r.map = n, r.key = s), r.track();
  }
}
function Te(e, t, s, n, r, i) {
  const o = us.get(e);
  if (!o) {
    mt++;
    return;
  }
  const f = (u) => {
    u && u.trigger();
  };
  if (Os(), t === "clear")
    o.forEach(f);
  else {
    const u = P(e), h = u && Cs(s);
    if (u && s === "length") {
      const a = Number(n);
      o.forEach((p, w) => {
        (w === "length" || w === bt || !He(w) && w >= a) && f(p);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && f(o.get(s)), h && f(o.get(bt)), t) {
        case "add":
          u ? h && f(o.get("length")) : (f(o.get(Ke)), ze(e) && f(o.get(as)));
          break;
        case "delete":
          u || (f(o.get(Ke)), ze(e) && f(o.get(as)));
          break;
        case "set":
          ze(e) && f(o.get(Ke));
          break;
      }
  }
  As();
}
function Ge(e) {
  const t = j(e);
  return t === e ? t : (Y(t, "iterate", bt), ye(e) ? t : t.map(le));
}
function Ms(e) {
  return Y(e = j(e), "iterate", bt), e;
}
const Kr = {
  __proto__: null,
  [Symbol.iterator]() {
    return ts(this, Symbol.iterator, le);
  },
  concat(...e) {
    return Ge(this).concat(
      ...e.map((t) => P(t) ? Ge(t) : t)
    );
  },
  entries() {
    return ts(this, "entries", (e) => (e[1] = le(e[1]), e));
  },
  every(e, t) {
    return Se(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Se(this, "filter", e, t, (s) => s.map(le), arguments);
  },
  find(e, t) {
    return Se(this, "find", e, t, le, arguments);
  },
  findIndex(e, t) {
    return Se(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Se(this, "findLast", e, t, le, arguments);
  },
  findLastIndex(e, t) {
    return Se(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Se(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ss(this, "includes", e);
  },
  indexOf(...e) {
    return ss(this, "indexOf", e);
  },
  join(e) {
    return Ge(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ss(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Se(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return it(this, "pop");
  },
  push(...e) {
    return it(this, "push", e);
  },
  reduce(e, ...t) {
    return zs(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return zs(this, "reduceRight", e, t);
  },
  shift() {
    return it(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Se(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return it(this, "splice", e);
  },
  toReversed() {
    return Ge(this).toReversed();
  },
  toSorted(e) {
    return Ge(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ge(this).toSpliced(...e);
  },
  unshift(...e) {
    return it(this, "unshift", e);
  },
  values() {
    return ts(this, "values", le);
  }
};
function ts(e, t, s) {
  const n = Ms(e), r = n[t]();
  return n !== e && !ye(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = s(i.value)), i;
  }), r;
}
const Br = Array.prototype;
function Se(e, t, s, n, r, i) {
  const o = Ms(e), f = o !== e && !ye(e), u = o[t];
  if (u !== Br[t]) {
    const p = u.apply(e, i);
    return f ? le(p) : p;
  }
  let h = s;
  o !== e && (f ? h = function(p, w) {
    return s.call(this, le(p), w, e);
  } : s.length > 2 && (h = function(p, w) {
    return s.call(this, p, w, e);
  }));
  const a = u.call(o, h, n);
  return f && r ? r(a) : a;
}
function zs(e, t, s, n) {
  const r = Ms(e);
  let i = s;
  return r !== e && (ye(e) ? s.length > 3 && (i = function(o, f, u) {
    return s.call(this, o, f, u, e);
  }) : i = function(o, f, u) {
    return s.call(this, o, le(f), u, e);
  }), r[t](i, ...n);
}
function ss(e, t, s) {
  const n = j(e);
  Y(n, "iterate", bt);
  const r = n[t](...s);
  return (r === -1 || r === !1) && Ds(s[0]) ? (s[0] = j(s[0]), n[t](...s)) : r;
}
function it(e, t, s = []) {
  Ee(), Os();
  const n = j(e)[t].apply(e, s);
  return As(), Oe(), n;
}
const qr = /* @__PURE__ */ vs("__proto__,__v_isRef,__isVue"), Wn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(He)
);
function Gr(e) {
  He(e) || (e = String(e));
  const t = j(this);
  return Y(t, "has", e), t.hasOwnProperty(e);
}
class Kn {
  constructor(t = !1, s = !1) {
    this._isReadonly = t, this._isShallow = s;
  }
  get(t, s, n) {
    if (s === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (s === "__v_isReactive")
      return !r;
    if (s === "__v_isReadonly")
      return r;
    if (s === "__v_isShallow")
      return i;
    if (s === "__v_raw")
      return n === (r ? i ? si : Jn : i ? Gn : qn).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = P(t);
    if (!r) {
      let u;
      if (o && (u = Kr[s]))
        return u;
      if (s === "hasOwnProperty")
        return Gr;
    }
    const f = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      ee(t) ? t : n
    );
    if ((He(s) ? Wn.has(s) : qr(s)) || (r || Y(t, "get", s), i))
      return f;
    if (ee(f)) {
      const u = o && Cs(s) ? f : f.value;
      return r && B(u) ? hs(u) : u;
    }
    return B(f) ? r ? hs(f) : Rs(f) : f;
  }
}
class Bn extends Kn {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, r) {
    let i = t[s];
    if (!this._isShallow) {
      const u = Qe(i);
      if (!ye(n) && !Qe(n) && (i = j(i), n = j(n)), !P(t) && ee(i) && !ee(n))
        return u || (i.value = n), !0;
    }
    const o = P(t) && Cs(s) ? Number(s) < t.length : H(t, s), f = Reflect.set(
      t,
      s,
      n,
      ee(t) ? t : r
    );
    return t === j(r) && (o ? We(n, i) && Te(t, "set", s, n) : Te(t, "add", s, n)), f;
  }
  deleteProperty(t, s) {
    const n = H(t, s);
    t[s];
    const r = Reflect.deleteProperty(t, s);
    return r && n && Te(t, "delete", s, void 0), r;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!He(s) || !Wn.has(s)) && Y(t, "has", s), n;
  }
  ownKeys(t) {
    return Y(
      t,
      "iterate",
      P(t) ? "length" : Ke
    ), Reflect.ownKeys(t);
  }
}
class Jr extends Kn {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, s) {
    return !0;
  }
  deleteProperty(t, s) {
    return !0;
  }
}
const Yr = /* @__PURE__ */ new Bn(), zr = /* @__PURE__ */ new Jr(), Xr = /* @__PURE__ */ new Bn(!0);
const ds = (e) => e, Pt = (e) => Reflect.getPrototypeOf(e);
function Zr(e, t, s) {
  return function(...n) {
    const r = this.__v_raw, i = j(r), o = ze(i), f = e === "entries" || e === Symbol.iterator && o, u = e === "keys" && o, h = r[e](...n), a = s ? ds : t ? ps : le;
    return !t && Y(
      i,
      "iterate",
      u ? as : Ke
    ), {
      // iterator protocol
      next() {
        const { value: p, done: w } = h.next();
        return w ? { value: p, done: w } : {
          value: f ? [a(p[0]), a(p[1])] : a(p),
          done: w
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Mt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Qr(e, t) {
  const s = {
    get(r) {
      const i = this.__v_raw, o = j(i), f = j(r);
      e || (We(r, f) && Y(o, "get", r), Y(o, "get", f));
      const { has: u } = Pt(o), h = t ? ds : e ? ps : le;
      if (u.call(o, r))
        return h(i.get(r));
      if (u.call(o, f))
        return h(i.get(f));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Y(j(r), "iterate", Ke), r.size;
    },
    has(r) {
      const i = this.__v_raw, o = j(i), f = j(r);
      return e || (We(r, f) && Y(o, "has", r), Y(o, "has", f)), r === f ? i.has(r) : i.has(r) || i.has(f);
    },
    forEach(r, i) {
      const o = this, f = o.__v_raw, u = j(f), h = t ? ds : e ? ps : le;
      return !e && Y(u, "iterate", Ke), f.forEach((a, p) => r.call(i, h(a), h(p), o));
    }
  };
  return te(
    s,
    e ? {
      add: Mt("add"),
      set: Mt("set"),
      delete: Mt("delete"),
      clear: Mt("clear")
    } : {
      add(r) {
        !t && !ye(r) && !Qe(r) && (r = j(r));
        const i = j(this);
        return Pt(i).has.call(i, r) || (i.add(r), Te(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !ye(i) && !Qe(i) && (i = j(i));
        const o = j(this), { has: f, get: u } = Pt(o);
        let h = f.call(o, r);
        h || (r = j(r), h = f.call(o, r));
        const a = u.call(o, r);
        return o.set(r, i), h ? We(i, a) && Te(o, "set", r, i) : Te(o, "add", r, i), this;
      },
      delete(r) {
        const i = j(this), { has: o, get: f } = Pt(i);
        let u = o.call(i, r);
        u || (r = j(r), u = o.call(i, r)), f && f.call(i, r);
        const h = i.delete(r);
        return u && Te(i, "delete", r, void 0), h;
      },
      clear() {
        const r = j(this), i = r.size !== 0, o = r.clear();
        return i && Te(
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
    s[r] = Zr(r, e, t);
  }), s;
}
function Is(e, t) {
  const s = Qr(e, t);
  return (n, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? n : Reflect.get(
    H(s, r) && r in n ? s : n,
    r,
    i
  );
}
const kr = {
  get: /* @__PURE__ */ Is(!1, !1)
}, ei = {
  get: /* @__PURE__ */ Is(!1, !0)
}, ti = {
  get: /* @__PURE__ */ Is(!0, !1)
};
const qn = /* @__PURE__ */ new WeakMap(), Gn = /* @__PURE__ */ new WeakMap(), Jn = /* @__PURE__ */ new WeakMap(), si = /* @__PURE__ */ new WeakMap();
function ni(e) {
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
function ri(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ni(Pr(e));
}
function Rs(e) {
  return Qe(e) ? e : Fs(
    e,
    !1,
    Yr,
    kr,
    qn
  );
}
function ii(e) {
  return Fs(
    e,
    !1,
    Xr,
    ei,
    Gn
  );
}
function hs(e) {
  return Fs(
    e,
    !0,
    zr,
    ti,
    Jn
  );
}
function Fs(e, t, s, n, r) {
  if (!B(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = ri(e);
  if (i === 0)
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const f = new Proxy(
    e,
    i === 2 ? n : s
  );
  return r.set(e, f), f;
}
function at(e) {
  return Qe(e) ? at(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Qe(e) {
  return !!(e && e.__v_isReadonly);
}
function ye(e) {
  return !!(e && e.__v_isShallow);
}
function Ds(e) {
  return e ? !!e.__v_raw : !1;
}
function j(e) {
  const t = e && e.__v_raw;
  return t ? j(t) : e;
}
function oi(e) {
  return !H(e, "__v_skip") && Object.isExtensible(e) && An(e, "__v_skip", !0), e;
}
const le = (e) => B(e) ? Rs(e) : e, ps = (e) => B(e) ? hs(e) : e;
function ee(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function li(e) {
  return ee(e) ? e.value : e;
}
const fi = {
  get: (e, t, s) => t === "__v_raw" ? e : li(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const r = e[t];
    return ee(r) && !ee(s) ? (r.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function Yn(e) {
  return at(e) ? e : new Proxy(e, fi);
}
class ci {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new Vn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = mt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    V !== this)
      return Hn(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Nn(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function ui(e, t, s = !1) {
  let n, r;
  return M(e) ? n = e : (n = e.get, r = e.set), new ci(n, r, s);
}
const It = {}, Ht = /* @__PURE__ */ new WeakMap();
let Ue;
function ai(e, t = !1, s = Ue) {
  if (s) {
    let n = Ht.get(s);
    n || Ht.set(s, n = []), n.push(e);
  }
}
function di(e, t, s = U) {
  const { immediate: n, deep: r, once: i, scheduler: o, augmentJob: f, call: u } = s, h = (O) => r ? O : ye(O) || r === !1 || r === 0 ? Fe(O, 1) : Fe(O);
  let a, p, w, C, I = !1, F = !1;
  if (ee(e) ? (p = () => e.value, I = ye(e)) : at(e) ? (p = () => h(e), I = !0) : P(e) ? (F = !0, I = e.some((O) => at(O) || ye(O)), p = () => e.map((O) => {
    if (ee(O))
      return O.value;
    if (at(O))
      return h(O);
    if (M(O))
      return u ? u(O, 2) : O();
  })) : M(e) ? t ? p = u ? () => u(e, 2) : e : p = () => {
    if (w) {
      Ee();
      try {
        w();
      } finally {
        Oe();
      }
    }
    const O = Ue;
    Ue = a;
    try {
      return u ? u(e, 3, [C]) : e(C);
    } finally {
      Ue = O;
    }
  } : p = xe, t && r) {
    const O = p, G = r === !0 ? 1 / 0 : r;
    p = () => Fe(O(), G);
  }
  const z = Vr(), D = () => {
    a.stop(), z && z.active && ws(z.effects, a);
  };
  if (i && t) {
    const O = t;
    t = (...G) => {
      O(...G), D();
    };
  }
  let W = F ? new Array(e.length).fill(It) : It;
  const q = (O) => {
    if (!(!(a.flags & 1) || !a.dirty && !O))
      if (t) {
        const G = a.run();
        if (r || I || (F ? G.some((Pe, ue) => We(Pe, W[ue])) : We(G, W))) {
          w && w();
          const Pe = Ue;
          Ue = a;
          try {
            const ue = [
              G,
              // pass undefined as the old value when it's changed for the first time
              W === It ? void 0 : F && W[0] === It ? [] : W,
              C
            ];
            W = G, u ? u(t, 3, ue) : (
              // @ts-expect-error
              t(...ue)
            );
          } finally {
            Ue = Pe;
          }
        }
      } else
        a.run();
  };
  return f && f(q), a = new Fn(p), a.scheduler = o ? () => o(q, !1) : q, C = (O) => ai(O, !1, a), w = a.onStop = () => {
    const O = Ht.get(a);
    if (O) {
      if (u)
        u(O, 4);
      else
        for (const G of O) G();
      Ht.delete(a);
    }
  }, t ? n ? q(!0) : W = a.run() : o ? o(q.bind(null, !0), !0) : a.run(), D.pause = a.pause.bind(a), D.resume = a.resume.bind(a), D.stop = D, D;
}
function Fe(e, t = 1 / 0, s) {
  if (t <= 0 || !B(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, ee(e))
    Fe(e.value, t, s);
  else if (P(e))
    for (let n = 0; n < e.length; n++)
      Fe(e[n], t, s);
  else if (wn(e) || ze(e))
    e.forEach((n) => {
      Fe(n, t, s);
    });
  else if (En(e)) {
    for (const n in e)
      Fe(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Fe(e[n], t, s);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function St(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (r) {
    qt(r, t, s);
  }
}
function ve(e, t, s, n) {
  if (M(e)) {
    const r = St(e, t, s, n);
    return r && Cn(r) && r.catch((i) => {
      qt(i, t, s);
    }), r;
  }
  if (P(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(ve(e[i], t, s, n));
    return r;
  }
}
function qt(e, t, s, n = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || U;
  if (t) {
    let f = t.parent;
    const u = t.proxy, h = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; f; ) {
      const a = f.ec;
      if (a) {
        for (let p = 0; p < a.length; p++)
          if (a[p](e, u, h) === !1)
            return;
      }
      f = f.parent;
    }
    if (i) {
      Ee(), St(i, null, 10, [
        e,
        u,
        h
      ]), Oe();
      return;
    }
  }
  hi(e, s, r, n, o);
}
function hi(e, t, s, n = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const Q = [];
let _e = -1;
const Xe = [];
let Ie = null, Je = 0;
const zn = /* @__PURE__ */ Promise.resolve();
let $t = null;
function pi(e) {
  const t = $t || zn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function gi(e) {
  let t = _e + 1, s = Q.length;
  for (; t < s; ) {
    const n = t + s >>> 1, r = Q[n], i = xt(r);
    i < e || i === e && r.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function Hs(e) {
  if (!(e.flags & 1)) {
    const t = xt(e), s = Q[Q.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= xt(s) ? Q.push(e) : Q.splice(gi(t), 0, e), e.flags |= 1, Xn();
  }
}
function Xn() {
  $t || ($t = zn.then(Qn));
}
function _i(e) {
  P(e) ? Xe.push(...e) : Ie && e.id === -1 ? Ie.splice(Je + 1, 0, e) : e.flags & 1 || (Xe.push(e), e.flags |= 1), Xn();
}
function Xs(e, t, s = _e + 1) {
  for (; s < Q.length; s++) {
    const n = Q[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      Q.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Zn(e) {
  if (Xe.length) {
    const t = [...new Set(Xe)].sort(
      (s, n) => xt(s) - xt(n)
    );
    if (Xe.length = 0, Ie) {
      Ie.push(...t);
      return;
    }
    for (Ie = t, Je = 0; Je < Ie.length; Je++) {
      const s = Ie[Je];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    Ie = null, Je = 0;
  }
}
const xt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Qn(e) {
  try {
    for (_e = 0; _e < Q.length; _e++) {
      const t = Q[_e];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), St(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; _e < Q.length; _e++) {
      const t = Q[_e];
      t && (t.flags &= -2);
    }
    _e = -1, Q.length = 0, Zn(), $t = null, (Q.length || Xe.length) && Qn();
  }
}
let be = null, kn = null;
function jt(e) {
  const t = be;
  return be = e, kn = e && e.type.__scopeId || null, t;
}
function mi(e, t = be, s) {
  if (!t || e._n)
    return e;
  const n = (...r) => {
    n._d && ln(-1);
    const i = jt(t);
    let o;
    try {
      o = e(...r);
    } finally {
      jt(i), n._d && ln(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Le(e, t, s, n) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const f = r[o];
    i && (f.oldValue = i[o].value);
    let u = f.dir[n];
    u && (Ee(), ve(u, s, 8, [
      e.el,
      f,
      e,
      t
    ]), Oe());
  }
}
const bi = Symbol("_vte"), xi = (e) => e.__isTeleport, yi = Symbol("_leaveCb");
function $s(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, $s(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function er(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Nt = /* @__PURE__ */ new WeakMap();
function dt(e, t, s, n, r = !1) {
  if (P(e)) {
    e.forEach(
      (I, F) => dt(
        I,
        t && (P(t) ? t[F] : t),
        s,
        n,
        r
      )
    );
    return;
  }
  if (ht(n) && !r) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && dt(e, t, s, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? Vs(n.component) : n.el, o = r ? null : i, { i: f, r: u } = e, h = t && t.r, a = f.refs === U ? f.refs = {} : f.refs, p = f.setupState, w = j(p), C = p === U ? Sn : (I) => H(w, I);
  if (h != null && h !== u) {
    if (Zs(t), J(h))
      a[h] = null, C(h) && (p[h] = null);
    else if (ee(h)) {
      h.value = null;
      const I = t;
      I.k && (a[I.k] = null);
    }
  }
  if (M(u))
    St(u, f, 12, [o, a]);
  else {
    const I = J(u), F = ee(u);
    if (I || F) {
      const z = () => {
        if (e.f) {
          const D = I ? C(u) ? p[u] : a[u] : u.value;
          if (r)
            P(D) && ws(D, i);
          else if (P(D))
            D.includes(i) || D.push(i);
          else if (I)
            a[u] = [i], C(u) && (p[u] = a[u]);
          else {
            const W = [i];
            u.value = W, e.k && (a[e.k] = W);
          }
        } else I ? (a[u] = o, C(u) && (p[u] = o)) : F && (u.value = o, e.k && (a[e.k] = o));
      };
      if (o) {
        const D = () => {
          z(), Nt.delete(e);
        };
        D.id = -1, Nt.set(e, D), oe(D, s);
      } else
        Zs(e), z();
    }
  }
}
function Zs(e) {
  const t = Nt.get(e);
  t && (t.flags |= 8, Nt.delete(e));
}
Bt().requestIdleCallback;
Bt().cancelIdleCallback;
const ht = (e) => !!e.type.__asyncLoader, tr = (e) => e.type.__isKeepAlive;
function vi(e, t) {
  sr(e, "a", t);
}
function Si(e, t) {
  sr(e, "da", t);
}
function sr(e, t, s = k) {
  const n = e.__wdc || (e.__wdc = () => {
    let r = s;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Gt(t, n, s), s) {
    let r = s.parent;
    for (; r && r.parent; )
      tr(r.parent.vnode) && wi(n, t, s, r), r = r.parent;
  }
}
function wi(e, t, s, n) {
  const r = Gt(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  nr(() => {
    ws(n[t], r);
  }, s);
}
function Gt(e, t, s = k, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Ee();
      const f = wt(s), u = ve(t, s, e, o);
      return f(), Oe(), u;
    });
    return n ? r.unshift(i) : r.push(i), i;
  }
}
const Ae = (e) => (t, s = k) => {
  (!vt || e === "sp") && Gt(e, (...n) => t(...n), s);
}, Ci = Ae("bm"), Ti = Ae("m"), Ei = Ae(
  "bu"
), Oi = Ae("u"), Ai = Ae(
  "bum"
), nr = Ae("um"), Pi = Ae(
  "sp"
), Mi = Ae("rtg"), Ii = Ae("rtc");
function Ri(e, t = k) {
  Gt("ec", e, t);
}
const Fi = Symbol.for("v-ndc"), gs = (e) => e ? wr(e) ? Vs(e) : gs(e.parent) : null, pt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ te(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => gs(e.parent),
    $root: (e) => gs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ir(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Hs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = pi.bind(e.proxy)),
    $watch: (e) => to.bind(e)
  })
), ns = (e, t) => e !== U && !e.__isScriptSetup && H(e, t), Di = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: r, props: i, accessCache: o, type: f, appContext: u } = e;
    let h;
    if (t[0] !== "$") {
      const C = o[t];
      if (C !== void 0)
        switch (C) {
          case 1:
            return n[t];
          case 2:
            return r[t];
          case 4:
            return s[t];
          case 3:
            return i[t];
        }
      else {
        if (ns(n, t))
          return o[t] = 1, n[t];
        if (r !== U && H(r, t))
          return o[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (h = e.propsOptions[0]) && H(h, t)
        )
          return o[t] = 3, i[t];
        if (s !== U && H(s, t))
          return o[t] = 4, s[t];
        _s && (o[t] = 0);
      }
    }
    const a = pt[t];
    let p, w;
    if (a)
      return t === "$attrs" && Y(e.attrs, "get", ""), a(e);
    if (
      // css module (injected by vue-loader)
      (p = f.__cssModules) && (p = p[t])
    )
      return p;
    if (s !== U && H(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      w = u.config.globalProperties, H(w, t)
    )
      return w[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: r, ctx: i } = e;
    return ns(r, t) ? (r[t] = s, !0) : n !== U && H(n, t) ? (n[t] = s, !0) : H(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: r, propsOptions: i, type: o }
  }, f) {
    let u, h;
    return !!(s[f] || e !== U && f[0] !== "$" && H(e, f) || ns(t, f) || (u = i[0]) && H(u, f) || H(n, f) || H(pt, f) || H(r.config.globalProperties, f) || (h = o.__cssModules) && h[f]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : H(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function Qs(e) {
  return P(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let _s = !0;
function Hi(e) {
  const t = ir(e), s = e.proxy, n = e.ctx;
  _s = !1, t.beforeCreate && ks(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: o,
    watch: f,
    provide: u,
    inject: h,
    // lifecycle
    created: a,
    beforeMount: p,
    mounted: w,
    beforeUpdate: C,
    updated: I,
    activated: F,
    deactivated: z,
    beforeDestroy: D,
    beforeUnmount: W,
    destroyed: q,
    unmounted: O,
    render: G,
    renderTracked: Pe,
    renderTriggered: ue,
    errorCaptured: Me,
    serverPrefetch: Ct,
    // public API
    expose: $e,
    inheritAttrs: tt,
    // assets
    components: Tt,
    directives: Et,
    filters: zt
  } = t;
  if (h && $i(h, n, null), o)
    for (const K in o) {
      const N = o[K];
      M(N) && (n[K] = N.bind(s));
    }
  if (r) {
    const K = r.call(s, s);
    B(K) && (e.data = Rs(K));
  }
  if (_s = !0, i)
    for (const K in i) {
      const N = i[K], je = M(N) ? N.bind(s, s) : M(N.get) ? N.get.bind(s, s) : xe, Ot = !M(N) && M(N.set) ? N.set.bind(s) : xe, Ne = Ao({
        get: je,
        set: Ot
      });
      Object.defineProperty(n, K, {
        enumerable: !0,
        configurable: !0,
        get: () => Ne.value,
        set: (ae) => Ne.value = ae
      });
    }
  if (f)
    for (const K in f)
      rr(f[K], n, s, K);
  if (u) {
    const K = M(u) ? u.call(s) : u;
    Reflect.ownKeys(K).forEach((N) => {
      Wi(N, K[N]);
    });
  }
  a && ks(a, e, "c");
  function X(K, N) {
    P(N) ? N.forEach((je) => K(je.bind(s))) : N && K(N.bind(s));
  }
  if (X(Ci, p), X(Ti, w), X(Ei, C), X(Oi, I), X(vi, F), X(Si, z), X(Ri, Me), X(Ii, Pe), X(Mi, ue), X(Ai, W), X(nr, O), X(Pi, Ct), P($e))
    if ($e.length) {
      const K = e.exposed || (e.exposed = {});
      $e.forEach((N) => {
        Object.defineProperty(K, N, {
          get: () => s[N],
          set: (je) => s[N] = je,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  G && e.render === xe && (e.render = G), tt != null && (e.inheritAttrs = tt), Tt && (e.components = Tt), Et && (e.directives = Et), Ct && er(e);
}
function $i(e, t, s = xe) {
  P(e) && (e = ms(e));
  for (const n in e) {
    const r = e[n];
    let i;
    B(r) ? "default" in r ? i = Rt(
      r.from || n,
      r.default,
      !0
    ) : i = Rt(r.from || n) : i = Rt(r), ee(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[n] = i;
  }
}
function ks(e, t, s) {
  ve(
    P(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function rr(e, t, s, n) {
  let r = n.includes(".") ? br(s, n) : () => s[n];
  if (J(e)) {
    const i = t[e];
    M(i) && is(r, i);
  } else if (M(e))
    is(r, e.bind(s));
  else if (B(e))
    if (P(e))
      e.forEach((i) => rr(i, t, s, n));
    else {
      const i = M(e.handler) ? e.handler.bind(s) : t[e.handler];
      M(i) && is(r, i, e);
    }
}
function ir(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, f = i.get(t);
  let u;
  return f ? u = f : !r.length && !s && !n ? u = t : (u = {}, r.length && r.forEach(
    (h) => Lt(u, h, o, !0)
  ), Lt(u, t, o)), B(t) && i.set(t, u), u;
}
function Lt(e, t, s, n = !1) {
  const { mixins: r, extends: i } = t;
  i && Lt(e, i, s, !0), r && r.forEach(
    (o) => Lt(e, o, s, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const f = ji[o] || s && s[o];
      e[o] = f ? f(e[o], t[o]) : t[o];
    }
  return e;
}
const ji = {
  data: en,
  props: tn,
  emits: tn,
  // objects
  methods: lt,
  computed: lt,
  // lifecycle
  beforeCreate: Z,
  created: Z,
  beforeMount: Z,
  mounted: Z,
  beforeUpdate: Z,
  updated: Z,
  beforeDestroy: Z,
  beforeUnmount: Z,
  destroyed: Z,
  unmounted: Z,
  activated: Z,
  deactivated: Z,
  errorCaptured: Z,
  serverPrefetch: Z,
  // assets
  components: lt,
  directives: lt,
  // watch
  watch: Li,
  // provide / inject
  provide: en,
  inject: Ni
};
function en(e, t) {
  return t ? e ? function() {
    return te(
      M(e) ? e.call(this, this) : e,
      M(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ni(e, t) {
  return lt(ms(e), ms(t));
}
function ms(e) {
  if (P(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function Z(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function lt(e, t) {
  return e ? te(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function tn(e, t) {
  return e ? P(e) && P(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : te(
    /* @__PURE__ */ Object.create(null),
    Qs(e),
    Qs(t ?? {})
  ) : t;
}
function Li(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = te(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = Z(e[n], t[n]);
  return s;
}
function or() {
  return {
    app: null,
    config: {
      isNativeTag: Sn,
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
let Vi = 0;
function Ui(e, t) {
  return function(n, r = null) {
    M(n) || (n = te({}, n)), r != null && !B(r) && (r = null);
    const i = or(), o = /* @__PURE__ */ new WeakSet(), f = [];
    let u = !1;
    const h = i.app = {
      _uid: Vi++,
      _component: n,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Po,
      get config() {
        return i.config;
      },
      set config(a) {
      },
      use(a, ...p) {
        return o.has(a) || (a && M(a.install) ? (o.add(a), a.install(h, ...p)) : M(a) && (o.add(a), a(h, ...p))), h;
      },
      mixin(a) {
        return i.mixins.includes(a) || i.mixins.push(a), h;
      },
      component(a, p) {
        return p ? (i.components[a] = p, h) : i.components[a];
      },
      directive(a, p) {
        return p ? (i.directives[a] = p, h) : i.directives[a];
      },
      mount(a, p, w) {
        if (!u) {
          const C = h._ceVNode || Be(n, r);
          return C.appContext = i, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(C, a, w), u = !0, h._container = a, a.__vue_app__ = h, Vs(C.component);
        }
      },
      onUnmount(a) {
        f.push(a);
      },
      unmount() {
        u && (ve(
          f,
          h._instance,
          16
        ), e(null, h._container), delete h._container.__vue_app__);
      },
      provide(a, p) {
        return i.provides[a] = p, h;
      },
      runWithContext(a) {
        const p = Ze;
        Ze = h;
        try {
          return a();
        } finally {
          Ze = p;
        }
      }
    };
    return h;
  };
}
let Ze = null;
function Wi(e, t) {
  if (k) {
    let s = k.provides;
    const n = k.parent && k.parent.provides;
    n === s && (s = k.provides = Object.create(n)), s[e] = t;
  }
}
function Rt(e, t, s = !1) {
  const n = So();
  if (n || Ze) {
    let r = Ze ? Ze._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return s && M(t) ? t.call(n && n.proxy) : t;
  }
}
const lr = {}, fr = () => Object.create(lr), cr = (e) => Object.getPrototypeOf(e) === lr;
function Ki(e, t, s, n = !1) {
  const r = {}, i = fr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ur(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  s ? e.props = n ? r : ii(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function Bi(e, t, s, n) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, f = j(r), [u] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const a = e.vnode.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        let w = a[p];
        if (Jt(e.emitsOptions, w))
          continue;
        const C = t[w];
        if (u)
          if (H(i, w))
            C !== i[w] && (i[w] = C, h = !0);
          else {
            const I = De(w);
            r[I] = bs(
              u,
              f,
              I,
              C,
              e,
              !1
            );
          }
        else
          C !== i[w] && (i[w] = C, h = !0);
      }
    }
  } else {
    ur(e, t, r, i) && (h = !0);
    let a;
    for (const p in f)
      (!t || // for camelCase
      !H(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = qe(p)) === p || !H(t, a))) && (u ? s && // for camelCase
      (s[p] !== void 0 || // for kebab-case
      s[a] !== void 0) && (r[p] = bs(
        u,
        f,
        p,
        void 0,
        e,
        !0
      )) : delete r[p]);
    if (i !== f)
      for (const p in i)
        (!t || !H(t, p)) && (delete i[p], h = !0);
  }
  h && Te(e.attrs, "set", "");
}
function ur(e, t, s, n) {
  const [r, i] = e.propsOptions;
  let o = !1, f;
  if (t)
    for (let u in t) {
      if (ft(u))
        continue;
      const h = t[u];
      let a;
      r && H(r, a = De(u)) ? !i || !i.includes(a) ? s[a] = h : (f || (f = {}))[a] = h : Jt(e.emitsOptions, u) || (!(u in n) || h !== n[u]) && (n[u] = h, o = !0);
    }
  if (i) {
    const u = j(s), h = f || U;
    for (let a = 0; a < i.length; a++) {
      const p = i[a];
      s[p] = bs(
        r,
        u,
        p,
        h[p],
        e,
        !H(h, p)
      );
    }
  }
  return o;
}
function bs(e, t, s, n, r, i) {
  const o = e[s];
  if (o != null) {
    const f = H(o, "default");
    if (f && n === void 0) {
      const u = o.default;
      if (o.type !== Function && !o.skipFactory && M(u)) {
        const { propsDefaults: h } = r;
        if (s in h)
          n = h[s];
        else {
          const a = wt(r);
          n = h[s] = u.call(
            null,
            t
          ), a();
        }
      } else
        n = u;
      r.ce && r.ce._setProp(s, n);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !f ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === qe(s)) && (n = !0));
  }
  return n;
}
const qi = /* @__PURE__ */ new WeakMap();
function ar(e, t, s = !1) {
  const n = s ? qi : t.propsCache, r = n.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, f = [];
  let u = !1;
  if (!M(e)) {
    const a = (p) => {
      u = !0;
      const [w, C] = ar(p, t, !0);
      te(o, w), C && f.push(...C);
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!i && !u)
    return B(e) && n.set(e, Ye), Ye;
  if (P(i))
    for (let a = 0; a < i.length; a++) {
      const p = De(i[a]);
      sn(p) && (o[p] = U);
    }
  else if (i)
    for (const a in i) {
      const p = De(a);
      if (sn(p)) {
        const w = i[a], C = o[p] = P(w) || M(w) ? { type: w } : te({}, w), I = C.type;
        let F = !1, z = !0;
        if (P(I))
          for (let D = 0; D < I.length; ++D) {
            const W = I[D], q = M(W) && W.name;
            if (q === "Boolean") {
              F = !0;
              break;
            } else q === "String" && (z = !1);
          }
        else
          F = M(I) && I.name === "Boolean";
        C[
          0
          /* shouldCast */
        ] = F, C[
          1
          /* shouldCastTrue */
        ] = z, (F || H(C, "default")) && f.push(p);
      }
    }
  const h = [o, f];
  return B(e) && n.set(e, h), h;
}
function sn(e) {
  return e[0] !== "$" && !ft(e);
}
const js = (e) => e === "_" || e === "_ctx" || e === "$stable", Ns = (e) => P(e) ? e.map(me) : [me(e)], Gi = (e, t, s) => {
  if (t._n)
    return t;
  const n = mi((...r) => Ns(t(...r)), s);
  return n._c = !1, n;
}, dr = (e, t, s) => {
  const n = e._ctx;
  for (const r in e) {
    if (js(r)) continue;
    const i = e[r];
    if (M(i))
      t[r] = Gi(r, i, n);
    else if (i != null) {
      const o = Ns(i);
      t[r] = () => o;
    }
  }
}, hr = (e, t) => {
  const s = Ns(t);
  e.slots.default = () => s;
}, pr = (e, t, s) => {
  for (const n in t)
    (s || !js(n)) && (e[n] = t[n]);
}, Ji = (e, t, s) => {
  const n = e.slots = fr();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (pr(n, t, s), s && An(n, "_", r, !0)) : dr(t, n);
  } else t && hr(e, t);
}, Yi = (e, t, s) => {
  const { vnode: n, slots: r } = e;
  let i = !0, o = U;
  if (n.shapeFlag & 32) {
    const f = t._;
    f ? s && f === 1 ? i = !1 : pr(r, t, s) : (i = !t.$stable, dr(t, r)), o = t;
  } else t && (hr(e, t), o = { default: 1 });
  if (i)
    for (const f in r)
      !js(f) && o[f] == null && delete r[f];
}, oe = co;
function zi(e) {
  return Xi(e);
}
function Xi(e, t) {
  const s = Bt();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: f,
    createComment: u,
    setText: h,
    setElementText: a,
    parentNode: p,
    nextSibling: w,
    setScopeId: C = xe,
    insertStaticContent: I
  } = e, F = (l, c, d, m = null, g = null, _ = null, v = void 0, y = null, x = !!c.dynamicChildren) => {
    if (l === c)
      return;
    l && !ot(l, c) && (m = At(l), ae(l, g, _, !0), l = null), c.patchFlag === -2 && (x = !1, c.dynamicChildren = null);
    const { type: b, ref: E, shapeFlag: S } = c;
    switch (b) {
      case Yt:
        z(l, c, d, m);
        break;
      case ke:
        D(l, c, d, m);
        break;
      case os:
        l == null && W(c, d, m, v);
        break;
      case Ce:
        Tt(
          l,
          c,
          d,
          m,
          g,
          _,
          v,
          y,
          x
        );
        break;
      default:
        S & 1 ? G(
          l,
          c,
          d,
          m,
          g,
          _,
          v,
          y,
          x
        ) : S & 6 ? Et(
          l,
          c,
          d,
          m,
          g,
          _,
          v,
          y,
          x
        ) : (S & 64 || S & 128) && b.process(
          l,
          c,
          d,
          m,
          g,
          _,
          v,
          y,
          x,
          nt
        );
    }
    E != null && g ? dt(E, l && l.ref, _, c || l, !c) : E == null && l && l.ref != null && dt(l.ref, null, _, l, !0);
  }, z = (l, c, d, m) => {
    if (l == null)
      n(
        c.el = f(c.children),
        d,
        m
      );
    else {
      const g = c.el = l.el;
      c.children !== l.children && h(g, c.children);
    }
  }, D = (l, c, d, m) => {
    l == null ? n(
      c.el = u(c.children || ""),
      d,
      m
    ) : c.el = l.el;
  }, W = (l, c, d, m) => {
    [l.el, l.anchor] = I(
      l.children,
      c,
      d,
      m,
      l.el,
      l.anchor
    );
  }, q = ({ el: l, anchor: c }, d, m) => {
    let g;
    for (; l && l !== c; )
      g = w(l), n(l, d, m), l = g;
    n(c, d, m);
  }, O = ({ el: l, anchor: c }) => {
    let d;
    for (; l && l !== c; )
      d = w(l), r(l), l = d;
    r(c);
  }, G = (l, c, d, m, g, _, v, y, x) => {
    c.type === "svg" ? v = "svg" : c.type === "math" && (v = "mathml"), l == null ? Pe(
      c,
      d,
      m,
      g,
      _,
      v,
      y,
      x
    ) : Ct(
      l,
      c,
      g,
      _,
      v,
      y,
      x
    );
  }, Pe = (l, c, d, m, g, _, v, y) => {
    let x, b;
    const { props: E, shapeFlag: S, transition: T, dirs: A } = l;
    if (x = l.el = o(
      l.type,
      _,
      E && E.is,
      E
    ), S & 8 ? a(x, l.children) : S & 16 && Me(
      l.children,
      x,
      null,
      m,
      g,
      rs(l, _),
      v,
      y
    ), A && Le(l, null, m, "created"), ue(x, l, l.scopeId, v, m), E) {
      for (const L in E)
        L !== "value" && !ft(L) && i(x, L, null, E[L], _, m);
      "value" in E && i(x, "value", null, E.value, _), (b = E.onVnodeBeforeMount) && ge(b, m, l);
    }
    A && Le(l, null, m, "beforeMount");
    const R = Zi(g, T);
    R && T.beforeEnter(x), n(x, c, d), ((b = E && E.onVnodeMounted) || R || A) && oe(() => {
      b && ge(b, m, l), R && T.enter(x), A && Le(l, null, m, "mounted");
    }, g);
  }, ue = (l, c, d, m, g) => {
    if (d && C(l, d), m)
      for (let _ = 0; _ < m.length; _++)
        C(l, m[_]);
    if (g) {
      let _ = g.subTree;
      if (c === _ || yr(_.type) && (_.ssContent === c || _.ssFallback === c)) {
        const v = g.vnode;
        ue(
          l,
          v,
          v.scopeId,
          v.slotScopeIds,
          g.parent
        );
      }
    }
  }, Me = (l, c, d, m, g, _, v, y, x = 0) => {
    for (let b = x; b < l.length; b++) {
      const E = l[b] = y ? Re(l[b]) : me(l[b]);
      F(
        null,
        E,
        c,
        d,
        m,
        g,
        _,
        v,
        y
      );
    }
  }, Ct = (l, c, d, m, g, _, v) => {
    const y = c.el = l.el;
    let { patchFlag: x, dynamicChildren: b, dirs: E } = c;
    x |= l.patchFlag & 16;
    const S = l.props || U, T = c.props || U;
    let A;
    if (d && Ve(d, !1), (A = T.onVnodeBeforeUpdate) && ge(A, d, c, l), E && Le(c, l, d, "beforeUpdate"), d && Ve(d, !0), (S.innerHTML && T.innerHTML == null || S.textContent && T.textContent == null) && a(y, ""), b ? $e(
      l.dynamicChildren,
      b,
      y,
      d,
      m,
      rs(c, g),
      _
    ) : v || N(
      l,
      c,
      y,
      null,
      d,
      m,
      rs(c, g),
      _,
      !1
    ), x > 0) {
      if (x & 16)
        tt(y, S, T, d, g);
      else if (x & 2 && S.class !== T.class && i(y, "class", null, T.class, g), x & 4 && i(y, "style", S.style, T.style, g), x & 8) {
        const R = c.dynamicProps;
        for (let L = 0; L < R.length; L++) {
          const $ = R[L], se = S[$], ne = T[$];
          (ne !== se || $ === "value") && i(y, $, se, ne, g, d);
        }
      }
      x & 1 && l.children !== c.children && a(y, c.children);
    } else !v && b == null && tt(y, S, T, d, g);
    ((A = T.onVnodeUpdated) || E) && oe(() => {
      A && ge(A, d, c, l), E && Le(c, l, d, "updated");
    }, m);
  }, $e = (l, c, d, m, g, _, v) => {
    for (let y = 0; y < c.length; y++) {
      const x = l[y], b = c[y], E = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        x.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (x.type === Ce || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ot(x, b) || // - In the case of a component, it could contain anything.
        x.shapeFlag & 198) ? p(x.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          d
        )
      );
      F(
        x,
        b,
        E,
        null,
        m,
        g,
        _,
        v,
        !0
      );
    }
  }, tt = (l, c, d, m, g) => {
    if (c !== d) {
      if (c !== U)
        for (const _ in c)
          !ft(_) && !(_ in d) && i(
            l,
            _,
            c[_],
            null,
            g,
            m
          );
      for (const _ in d) {
        if (ft(_)) continue;
        const v = d[_], y = c[_];
        v !== y && _ !== "value" && i(l, _, y, v, g, m);
      }
      "value" in d && i(l, "value", c.value, d.value, g);
    }
  }, Tt = (l, c, d, m, g, _, v, y, x) => {
    const b = c.el = l ? l.el : f(""), E = c.anchor = l ? l.anchor : f("");
    let { patchFlag: S, dynamicChildren: T, slotScopeIds: A } = c;
    A && (y = y ? y.concat(A) : A), l == null ? (n(b, d, m), n(E, d, m), Me(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      c.children || [],
      d,
      E,
      g,
      _,
      v,
      y,
      x
    )) : S > 0 && S & 64 && T && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? ($e(
      l.dynamicChildren,
      T,
      d,
      g,
      _,
      v,
      y
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (c.key != null || g && c === g.subTree) && gr(
      l,
      c,
      !0
      /* shallow */
    )) : N(
      l,
      c,
      d,
      E,
      g,
      _,
      v,
      y,
      x
    );
  }, Et = (l, c, d, m, g, _, v, y, x) => {
    c.slotScopeIds = y, l == null ? c.shapeFlag & 512 ? g.ctx.activate(
      c,
      d,
      m,
      v,
      x
    ) : zt(
      c,
      d,
      m,
      g,
      _,
      v,
      x
    ) : Us(l, c, x);
  }, zt = (l, c, d, m, g, _, v) => {
    const y = l.component = vo(
      l,
      m,
      g
    );
    if (tr(l) && (y.ctx.renderer = nt), wo(y, !1, v), y.asyncDep) {
      if (g && g.registerDep(y, X, v), !l.el) {
        const x = y.subTree = Be(ke);
        D(null, x, c, d), l.placeholder = x.el;
      }
    } else
      X(
        y,
        l,
        c,
        d,
        g,
        _,
        v
      );
  }, Us = (l, c, d) => {
    const m = c.component = l.component;
    if (lo(l, c, d))
      if (m.asyncDep && !m.asyncResolved) {
        K(m, c, d);
        return;
      } else
        m.next = c, m.update();
    else
      c.el = l.el, m.vnode = c;
  }, X = (l, c, d, m, g, _, v) => {
    const y = () => {
      if (l.isMounted) {
        let { next: S, bu: T, u: A, parent: R, vnode: L } = l;
        {
          const he = _r(l);
          if (he) {
            S && (S.el = L.el, K(l, S, v)), he.asyncDep.then(() => {
              l.isUnmounted || y();
            });
            return;
          }
        }
        let $ = S, se;
        Ve(l, !1), S ? (S.el = L.el, K(l, S, v)) : S = L, T && Qt(T), (se = S.props && S.props.onVnodeBeforeUpdate) && ge(se, R, S, L), Ve(l, !0);
        const ne = rn(l), de = l.subTree;
        l.subTree = ne, F(
          de,
          ne,
          // parent may have changed if it's in a teleport
          p(de.el),
          // anchor may have changed if it's in a fragment
          At(de),
          l,
          g,
          _
        ), S.el = ne.el, $ === null && fo(l, ne.el), A && oe(A, g), (se = S.props && S.props.onVnodeUpdated) && oe(
          () => ge(se, R, S, L),
          g
        );
      } else {
        let S;
        const { el: T, props: A } = c, { bm: R, m: L, parent: $, root: se, type: ne } = l, de = ht(c);
        Ve(l, !1), R && Qt(R), !de && (S = A && A.onVnodeBeforeMount) && ge(S, $, c), Ve(l, !0);
        {
          se.ce && // @ts-expect-error _def is private
          se.ce._def.shadowRoot !== !1 && se.ce._injectChildStyle(ne);
          const he = l.subTree = rn(l);
          F(
            null,
            he,
            d,
            m,
            l,
            g,
            _
          ), c.el = he.el;
        }
        if (L && oe(L, g), !de && (S = A && A.onVnodeMounted)) {
          const he = c;
          oe(
            () => ge(S, $, he),
            g
          );
        }
        (c.shapeFlag & 256 || $ && ht($.vnode) && $.vnode.shapeFlag & 256) && l.a && oe(l.a, g), l.isMounted = !0, c = d = m = null;
      }
    };
    l.scope.on();
    const x = l.effect = new Fn(y);
    l.scope.off();
    const b = l.update = x.run.bind(x), E = l.job = x.runIfDirty.bind(x);
    E.i = l, E.id = l.uid, x.scheduler = () => Hs(E), Ve(l, !0), b();
  }, K = (l, c, d) => {
    c.component = l;
    const m = l.vnode.props;
    l.vnode = c, l.next = null, Bi(l, c.props, m, d), Yi(l, c.children, d), Ee(), Xs(l), Oe();
  }, N = (l, c, d, m, g, _, v, y, x = !1) => {
    const b = l && l.children, E = l ? l.shapeFlag : 0, S = c.children, { patchFlag: T, shapeFlag: A } = c;
    if (T > 0) {
      if (T & 128) {
        Ot(
          b,
          S,
          d,
          m,
          g,
          _,
          v,
          y,
          x
        );
        return;
      } else if (T & 256) {
        je(
          b,
          S,
          d,
          m,
          g,
          _,
          v,
          y,
          x
        );
        return;
      }
    }
    A & 8 ? (E & 16 && st(b, g, _), S !== b && a(d, S)) : E & 16 ? A & 16 ? Ot(
      b,
      S,
      d,
      m,
      g,
      _,
      v,
      y,
      x
    ) : st(b, g, _, !0) : (E & 8 && a(d, ""), A & 16 && Me(
      S,
      d,
      m,
      g,
      _,
      v,
      y,
      x
    ));
  }, je = (l, c, d, m, g, _, v, y, x) => {
    l = l || Ye, c = c || Ye;
    const b = l.length, E = c.length, S = Math.min(b, E);
    let T;
    for (T = 0; T < S; T++) {
      const A = c[T] = x ? Re(c[T]) : me(c[T]);
      F(
        l[T],
        A,
        d,
        null,
        g,
        _,
        v,
        y,
        x
      );
    }
    b > E ? st(
      l,
      g,
      _,
      !0,
      !1,
      S
    ) : Me(
      c,
      d,
      m,
      g,
      _,
      v,
      y,
      x,
      S
    );
  }, Ot = (l, c, d, m, g, _, v, y, x) => {
    let b = 0;
    const E = c.length;
    let S = l.length - 1, T = E - 1;
    for (; b <= S && b <= T; ) {
      const A = l[b], R = c[b] = x ? Re(c[b]) : me(c[b]);
      if (ot(A, R))
        F(
          A,
          R,
          d,
          null,
          g,
          _,
          v,
          y,
          x
        );
      else
        break;
      b++;
    }
    for (; b <= S && b <= T; ) {
      const A = l[S], R = c[T] = x ? Re(c[T]) : me(c[T]);
      if (ot(A, R))
        F(
          A,
          R,
          d,
          null,
          g,
          _,
          v,
          y,
          x
        );
      else
        break;
      S--, T--;
    }
    if (b > S) {
      if (b <= T) {
        const A = T + 1, R = A < E ? c[A].el : m;
        for (; b <= T; )
          F(
            null,
            c[b] = x ? Re(c[b]) : me(c[b]),
            d,
            R,
            g,
            _,
            v,
            y,
            x
          ), b++;
      }
    } else if (b > T)
      for (; b <= S; )
        ae(l[b], g, _, !0), b++;
    else {
      const A = b, R = b, L = /* @__PURE__ */ new Map();
      for (b = R; b <= T; b++) {
        const ie = c[b] = x ? Re(c[b]) : me(c[b]);
        ie.key != null && L.set(ie.key, b);
      }
      let $, se = 0;
      const ne = T - R + 1;
      let de = !1, he = 0;
      const rt = new Array(ne);
      for (b = 0; b < ne; b++) rt[b] = 0;
      for (b = A; b <= S; b++) {
        const ie = l[b];
        if (se >= ne) {
          ae(ie, g, _, !0);
          continue;
        }
        let pe;
        if (ie.key != null)
          pe = L.get(ie.key);
        else
          for ($ = R; $ <= T; $++)
            if (rt[$ - R] === 0 && ot(ie, c[$])) {
              pe = $;
              break;
            }
        pe === void 0 ? ae(ie, g, _, !0) : (rt[pe - R] = b + 1, pe >= he ? he = pe : de = !0, F(
          ie,
          c[pe],
          d,
          null,
          g,
          _,
          v,
          y,
          x
        ), se++);
      }
      const Bs = de ? Qi(rt) : Ye;
      for ($ = Bs.length - 1, b = ne - 1; b >= 0; b--) {
        const ie = R + b, pe = c[ie], qs = c[ie + 1], Gs = ie + 1 < E ? (
          // #13559, fallback to el placeholder for unresolved async component
          qs.el || qs.placeholder
        ) : m;
        rt[b] === 0 ? F(
          null,
          pe,
          d,
          Gs,
          g,
          _,
          v,
          y,
          x
        ) : de && ($ < 0 || b !== Bs[$] ? Ne(pe, d, Gs, 2) : $--);
      }
    }
  }, Ne = (l, c, d, m, g = null) => {
    const { el: _, type: v, transition: y, children: x, shapeFlag: b } = l;
    if (b & 6) {
      Ne(l.component.subTree, c, d, m);
      return;
    }
    if (b & 128) {
      l.suspense.move(c, d, m);
      return;
    }
    if (b & 64) {
      v.move(l, c, d, nt);
      return;
    }
    if (v === Ce) {
      n(_, c, d);
      for (let S = 0; S < x.length; S++)
        Ne(x[S], c, d, m);
      n(l.anchor, c, d);
      return;
    }
    if (v === os) {
      q(l, c, d);
      return;
    }
    if (m !== 2 && b & 1 && y)
      if (m === 0)
        y.beforeEnter(_), n(_, c, d), oe(() => y.enter(_), g);
      else {
        const { leave: S, delayLeave: T, afterLeave: A } = y, R = () => {
          l.ctx.isUnmounted ? r(_) : n(_, c, d);
        }, L = () => {
          _._isLeaving && _[yi](
            !0
            /* cancelled */
          ), S(_, () => {
            R(), A && A();
          });
        };
        T ? T(_, R, L) : L();
      }
    else
      n(_, c, d);
  }, ae = (l, c, d, m = !1, g = !1) => {
    const {
      type: _,
      props: v,
      ref: y,
      children: x,
      dynamicChildren: b,
      shapeFlag: E,
      patchFlag: S,
      dirs: T,
      cacheIndex: A
    } = l;
    if (S === -2 && (g = !1), y != null && (Ee(), dt(y, null, d, l, !0), Oe()), A != null && (c.renderCache[A] = void 0), E & 256) {
      c.ctx.deactivate(l);
      return;
    }
    const R = E & 1 && T, L = !ht(l);
    let $;
    if (L && ($ = v && v.onVnodeBeforeUnmount) && ge($, c, l), E & 6)
      Or(l.component, d, m);
    else {
      if (E & 128) {
        l.suspense.unmount(d, m);
        return;
      }
      R && Le(l, null, c, "beforeUnmount"), E & 64 ? l.type.remove(
        l,
        c,
        d,
        nt,
        m
      ) : b && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !b.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== Ce || S > 0 && S & 64) ? st(
        b,
        c,
        d,
        !1,
        !0
      ) : (_ === Ce && S & 384 || !g && E & 16) && st(x, c, d), m && Ws(l);
    }
    (L && ($ = v && v.onVnodeUnmounted) || R) && oe(() => {
      $ && ge($, c, l), R && Le(l, null, c, "unmounted");
    }, d);
  }, Ws = (l) => {
    const { type: c, el: d, anchor: m, transition: g } = l;
    if (c === Ce) {
      Er(d, m);
      return;
    }
    if (c === os) {
      O(l);
      return;
    }
    const _ = () => {
      r(d), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (l.shapeFlag & 1 && g && !g.persisted) {
      const { leave: v, delayLeave: y } = g, x = () => v(d, _);
      y ? y(l.el, _, x) : x();
    } else
      _();
  }, Er = (l, c) => {
    let d;
    for (; l !== c; )
      d = w(l), r(l), l = d;
    r(c);
  }, Or = (l, c, d) => {
    const { bum: m, scope: g, job: _, subTree: v, um: y, m: x, a: b } = l;
    nn(x), nn(b), m && Qt(m), g.stop(), _ && (_.flags |= 8, ae(v, l, c, d)), y && oe(y, c), oe(() => {
      l.isUnmounted = !0;
    }, c);
  }, st = (l, c, d, m = !1, g = !1, _ = 0) => {
    for (let v = _; v < l.length; v++)
      ae(l[v], c, d, m, g);
  }, At = (l) => {
    if (l.shapeFlag & 6)
      return At(l.component.subTree);
    if (l.shapeFlag & 128)
      return l.suspense.next();
    const c = w(l.anchor || l.el), d = c && c[bi];
    return d ? w(d) : c;
  };
  let Xt = !1;
  const Ks = (l, c, d) => {
    l == null ? c._vnode && ae(c._vnode, null, null, !0) : F(
      c._vnode || null,
      l,
      c,
      null,
      null,
      null,
      d
    ), c._vnode = l, Xt || (Xt = !0, Xs(), Zn(), Xt = !1);
  }, nt = {
    p: F,
    um: ae,
    m: Ne,
    r: Ws,
    mt: zt,
    mc: Me,
    pc: N,
    pbc: $e,
    n: At,
    o: e
  };
  return {
    render: Ks,
    hydrate: void 0,
    createApp: Ui(Ks)
  };
}
function rs({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function Ve({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Zi(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function gr(e, t, s = !1) {
  const n = e.children, r = t.children;
  if (P(n) && P(r))
    for (let i = 0; i < n.length; i++) {
      const o = n[i];
      let f = r[i];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = r[i] = Re(r[i]), f.el = o.el), !s && f.patchFlag !== -2 && gr(o, f)), f.type === Yt && // avoid cached text nodes retaining detached dom nodes
      f.patchFlag !== -1 && (f.el = o.el), f.type === ke && !f.el && (f.el = o.el);
    }
}
function Qi(e) {
  const t = e.slice(), s = [0];
  let n, r, i, o, f;
  const u = e.length;
  for (n = 0; n < u; n++) {
    const h = e[n];
    if (h !== 0) {
      if (r = s[s.length - 1], e[r] < h) {
        t[n] = r, s.push(n);
        continue;
      }
      for (i = 0, o = s.length - 1; i < o; )
        f = i + o >> 1, e[s[f]] < h ? i = f + 1 : o = f;
      h < e[s[i]] && (i > 0 && (t[n] = s[i - 1]), s[i] = n);
    }
  }
  for (i = s.length, o = s[i - 1]; i-- > 0; )
    s[i] = o, o = t[o];
  return s;
}
function _r(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : _r(t);
}
function nn(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const ki = Symbol.for("v-scx"), eo = () => Rt(ki);
function is(e, t, s) {
  return mr(e, t, s);
}
function mr(e, t, s = U) {
  const { immediate: n, deep: r, flush: i, once: o } = s, f = te({}, s), u = t && n || !t && i !== "post";
  let h;
  if (vt) {
    if (i === "sync") {
      const C = eo();
      h = C.__watcherHandles || (C.__watcherHandles = []);
    } else if (!u) {
      const C = () => {
      };
      return C.stop = xe, C.resume = xe, C.pause = xe, C;
    }
  }
  const a = k;
  f.call = (C, I, F) => ve(C, a, I, F);
  let p = !1;
  i === "post" ? f.scheduler = (C) => {
    oe(C, a && a.suspense);
  } : i !== "sync" && (p = !0, f.scheduler = (C, I) => {
    I ? C() : Hs(C);
  }), f.augmentJob = (C) => {
    t && (C.flags |= 4), p && (C.flags |= 2, a && (C.id = a.uid, C.i = a));
  };
  const w = di(e, t, f);
  return vt && (h ? h.push(w) : u && w()), w;
}
function to(e, t, s) {
  const n = this.proxy, r = J(e) ? e.includes(".") ? br(n, e) : () => n[e] : e.bind(n, n);
  let i;
  M(t) ? i = t : (i = t.handler, s = t);
  const o = wt(this), f = mr(r, i.bind(n), s);
  return o(), f;
}
function br(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let r = 0; r < s.length && n; r++)
      n = n[s[r]];
    return n;
  };
}
const so = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${De(t)}Modifiers`] || e[`${qe(t)}Modifiers`];
function no(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || U;
  let r = s;
  const i = t.startsWith("update:"), o = i && so(n, t.slice(7));
  o && (o.trim && (r = s.map((a) => J(a) ? a.trim() : a)), o.number && (r = s.map(Rr)));
  let f, u = n[f = Zt(t)] || // also try camelCase event handler (#2249)
  n[f = Zt(De(t))];
  !u && i && (u = n[f = Zt(qe(t))]), u && ve(
    u,
    e,
    6,
    r
  );
  const h = n[f + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[f])
      return;
    e.emitted[f] = !0, ve(
      h,
      e,
      6,
      r
    );
  }
}
const ro = /* @__PURE__ */ new WeakMap();
function xr(e, t, s = !1) {
  const n = s ? ro : t.emitsCache, r = n.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {}, f = !1;
  if (!M(e)) {
    const u = (h) => {
      const a = xr(h, t, !0);
      a && (f = !0, te(o, a));
    };
    !s && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !i && !f ? (B(e) && n.set(e, null), null) : (P(i) ? i.forEach((u) => o[u] = null) : te(o, i), B(e) && n.set(e, o), o);
}
function Jt(e, t) {
  return !e || !Ut(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), H(e, t[0].toLowerCase() + t.slice(1)) || H(e, qe(t)) || H(e, t));
}
function rn(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: r,
    propsOptions: [i],
    slots: o,
    attrs: f,
    emit: u,
    render: h,
    renderCache: a,
    props: p,
    data: w,
    setupState: C,
    ctx: I,
    inheritAttrs: F
  } = e, z = jt(e);
  let D, W;
  try {
    if (s.shapeFlag & 4) {
      const O = r || n, G = O;
      D = me(
        h.call(
          G,
          O,
          a,
          p,
          C,
          w,
          I
        )
      ), W = f;
    } else {
      const O = t;
      D = me(
        O.length > 1 ? O(
          p,
          { attrs: f, slots: o, emit: u }
        ) : O(
          p,
          null
        )
      ), W = t.props ? f : io(f);
    }
  } catch (O) {
    gt.length = 0, qt(O, e, 1), D = Be(ke);
  }
  let q = D;
  if (W && F !== !1) {
    const O = Object.keys(W), { shapeFlag: G } = q;
    O.length && G & 7 && (i && O.some(Ss) && (W = oo(
      W,
      i
    )), q = et(q, W, !1, !0));
  }
  return s.dirs && (q = et(q, null, !1, !0), q.dirs = q.dirs ? q.dirs.concat(s.dirs) : s.dirs), s.transition && $s(q, s.transition), D = q, jt(z), D;
}
const io = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Ut(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, oo = (e, t) => {
  const s = {};
  for (const n in e)
    (!Ss(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function lo(e, t, s) {
  const { props: n, children: r, component: i } = e, { props: o, children: f, patchFlag: u } = t, h = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return n ? on(n, o, h) : !!o;
    if (u & 8) {
      const a = t.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        const w = a[p];
        if (o[w] !== n[w] && !Jt(h, w))
          return !0;
      }
    }
  } else
    return (r || f) && (!f || !f.$stable) ? !0 : n === o ? !1 : n ? o ? on(n, o, h) : !0 : !!o;
  return !1;
}
function on(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (t[i] !== e[i] && !Jt(s, i))
      return !0;
  }
  return !1;
}
function fo({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
}
const yr = (e) => e.__isSuspense;
function co(e, t) {
  t && t.pendingBranch ? P(e) ? t.effects.push(...e) : t.effects.push(e) : _i(e);
}
const Ce = Symbol.for("v-fgt"), Yt = Symbol.for("v-txt"), ke = Symbol.for("v-cmt"), os = Symbol.for("v-stc"), gt = [];
let fe = null;
function uo(e = !1) {
  gt.push(fe = e ? null : []);
}
function ao() {
  gt.pop(), fe = gt[gt.length - 1] || null;
}
let yt = 1;
function ln(e, t = !1) {
  yt += e, e < 0 && fe && t && (fe.hasOnce = !0);
}
function ho(e) {
  return e.dynamicChildren = yt > 0 ? fe || Ye : null, ao(), yt > 0 && fe && fe.push(e), e;
}
function po(e, t, s, n, r, i) {
  return ho(
    _t(
      e,
      t,
      s,
      n,
      r,
      i,
      !0
    )
  );
}
function vr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ot(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Sr = ({ key: e }) => e ?? null, Ft = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? J(e) || ee(e) || M(e) ? { i: be, r: e, k: t, f: !!s } : e : null);
function _t(e, t = null, s = null, n = 0, r = null, i = e === Ce ? 0 : 1, o = !1, f = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Sr(t),
    ref: t && Ft(t),
    scopeId: kn,
    slotScopeIds: null,
    children: s,
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
    patchFlag: n,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: be
  };
  return f ? (Ls(u, s), i & 128 && e.normalize(u)) : s && (u.shapeFlag |= J(s) ? 8 : 16), yt > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  fe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && fe.push(u), u;
}
const Be = go;
function go(e, t = null, s = null, n = 0, r = null, i = !1) {
  if ((!e || e === Fi) && (e = ke), vr(e)) {
    const f = et(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Ls(f, s), yt > 0 && !i && fe && (f.shapeFlag & 6 ? fe[fe.indexOf(e)] = f : fe.push(f)), f.patchFlag = -2, f;
  }
  if (Oo(e) && (e = e.__vccOpts), t) {
    t = _o(t);
    let { class: f, style: u } = t;
    f && !J(f) && (t.class = Es(f)), B(u) && (Ds(u) && !P(u) && (u = te({}, u)), t.style = Ts(u));
  }
  const o = J(e) ? 1 : yr(e) ? 128 : xi(e) ? 64 : B(e) ? 4 : M(e) ? 2 : 0;
  return _t(
    e,
    t,
    s,
    n,
    r,
    o,
    i,
    !0
  );
}
function _o(e) {
  return e ? Ds(e) || cr(e) ? te({}, e) : e : null;
}
function et(e, t, s = !1, n = !1) {
  const { props: r, ref: i, patchFlag: o, children: f, transition: u } = e, h = t ? bo(r || {}, t) : r, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && Sr(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && i ? P(i) ? i.concat(Ft(t)) : [i, Ft(t)] : Ft(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: f,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ce ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: u,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && et(e.ssContent),
    ssFallback: e.ssFallback && et(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && n && $s(
    a,
    u.clone(a)
  ), a;
}
function mo(e = " ", t = 0) {
  return Be(Yt, null, e, t);
}
function me(e) {
  return e == null || typeof e == "boolean" ? Be(ke) : P(e) ? Be(
    Ce,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : vr(e) ? Re(e) : Be(Yt, null, String(e));
}
function Re(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : et(e);
}
function Ls(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (P(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ls(e, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = t._;
      !r && !cr(t) ? t._ctx = be : r === 3 && be && (be.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else M(t) ? (t = { default: t, _ctx: be }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [mo(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function bo(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const r in n)
      if (r === "class")
        t.class !== n.class && (t.class = Es([t.class, n.class]));
      else if (r === "style")
        t.style = Ts([t.style, n.style]);
      else if (Ut(r)) {
        const i = t[r], o = n[r];
        o && i !== o && !(P(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (t[r] = n[r]);
  }
  return t;
}
function ge(e, t, s, n = null) {
  ve(e, t, 7, [
    s,
    n
  ]);
}
const xo = or();
let yo = 0;
function vo(e, t, s) {
  const n = e.type, r = (t ? t.appContext : e.appContext) || xo, i = {
    uid: yo++,
    vnode: e,
    type: n,
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
    scope: new Lr(
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
    propsOptions: ar(n, r),
    emitsOptions: xr(n, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: U,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: U,
    data: U,
    props: U,
    attrs: U,
    slots: U,
    refs: U,
    setupState: U,
    setupContext: null,
    // suspense related
    suspense: s,
    suspenseId: s ? s.pendingId : 0,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = no.bind(null, i), e.ce && e.ce(i), i;
}
let k = null;
const So = () => k || be;
let Vt, xs;
{
  const e = Bt(), t = (s, n) => {
    let r;
    return (r = e[s]) || (r = e[s] = []), r.push(n), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  Vt = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => k = s
  ), xs = t(
    "__VUE_SSR_SETTERS__",
    (s) => vt = s
  );
}
const wt = (e) => {
  const t = k;
  return Vt(e), e.scope.on(), () => {
    e.scope.off(), Vt(t);
  };
}, fn = () => {
  k && k.scope.off(), Vt(null);
};
function wr(e) {
  return e.vnode.shapeFlag & 4;
}
let vt = !1;
function wo(e, t = !1, s = !1) {
  t && xs(t);
  const { props: n, children: r } = e.vnode, i = wr(e);
  Ki(e, n, i, t), Ji(e, r, s || t);
  const o = i ? Co(e, t) : void 0;
  return t && xs(!1), o;
}
function Co(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Di);
  const { setup: n } = s;
  if (n) {
    Ee();
    const r = e.setupContext = n.length > 1 ? Eo(e) : null, i = wt(e), o = St(
      n,
      e,
      0,
      [
        e.props,
        r
      ]
    ), f = Cn(o);
    if (Oe(), i(), (f || e.sp) && !ht(e) && er(e), f) {
      if (o.then(fn, fn), t)
        return o.then((u) => {
          cn(e, u);
        }).catch((u) => {
          qt(u, e, 0);
        });
      e.asyncDep = o;
    } else
      cn(e, o);
  } else
    Cr(e);
}
function cn(e, t, s) {
  M(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : B(t) && (e.setupState = Yn(t)), Cr(e);
}
function Cr(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || xe);
  {
    const r = wt(e);
    Ee();
    try {
      Hi(e);
    } finally {
      Oe(), r();
    }
  }
}
const To = {
  get(e, t) {
    return Y(e, "get", ""), e[t];
  }
};
function Eo(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, To),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Vs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Yn(oi(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in pt)
        return pt[s](e);
    },
    has(t, s) {
      return s in t || s in pt;
    }
  })) : e.proxy;
}
function Oo(e) {
  return M(e) && "__vccOpts" in e;
}
const Ao = (e, t) => ui(e, t, vt), Po = "3.5.22";
/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ys;
const un = typeof window < "u" && window.trustedTypes;
if (un)
  try {
    ys = /* @__PURE__ */ un.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Tr = ys ? (e) => ys.createHTML(e) : (e) => e, Mo = "http://www.w3.org/2000/svg", Io = "http://www.w3.org/1998/Math/MathML", we = typeof document < "u" ? document : null, an = we && /* @__PURE__ */ we.createElement("template"), Ro = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const r = t === "svg" ? we.createElementNS(Mo, e) : t === "mathml" ? we.createElementNS(Io, e) : s ? we.createElement(e, { is: s }) : we.createElement(e);
    return e === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r;
  },
  createText: (e) => we.createTextNode(e),
  createComment: (e) => we.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => we.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, s, n, r, i) {
    const o = s ? s.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), s), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      an.innerHTML = Tr(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const f = an.content;
      if (n === "svg" || n === "mathml") {
        const u = f.firstChild;
        for (; u.firstChild; )
          f.appendChild(u.firstChild);
        f.removeChild(u);
      }
      t.insertBefore(f, s);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      s ? s.previousSibling : t.lastChild
    ];
  }
}, Fo = Symbol("_vtc");
function Do(e, t, s) {
  const n = e[Fo];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const dn = Symbol("_vod"), Ho = Symbol("_vsh"), $o = Symbol(""), jo = /(?:^|;)\s*display\s*:/;
function No(e, t, s) {
  const n = e.style, r = J(s);
  let i = !1;
  if (s && !r) {
    if (t)
      if (J(t))
        for (const o of t.split(";")) {
          const f = o.slice(0, o.indexOf(":")).trim();
          s[f] == null && Dt(n, f, "");
        }
      else
        for (const o in t)
          s[o] == null && Dt(n, o, "");
    for (const o in s)
      o === "display" && (i = !0), Dt(n, o, s[o]);
  } else if (r) {
    if (t !== s) {
      const o = n[$o];
      o && (s += ";" + o), n.cssText = s, i = jo.test(s);
    }
  } else t && e.removeAttribute("style");
  dn in e && (e[dn] = i ? n.display : "", e[Ho] && (n.display = "none"));
}
const hn = /\s*!important$/;
function Dt(e, t, s) {
  if (P(s))
    s.forEach((n) => Dt(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = Lo(e, t);
    hn.test(s) ? e.setProperty(
      qe(n),
      s.replace(hn, ""),
      "important"
    ) : e[n] = s;
  }
}
const pn = ["Webkit", "Moz", "ms"], ls = {};
function Lo(e, t) {
  const s = ls[t];
  if (s)
    return s;
  let n = De(t);
  if (n !== "filter" && n in e)
    return ls[t] = n;
  n = On(n);
  for (let r = 0; r < pn.length; r++) {
    const i = pn[r] + n;
    if (i in e)
      return ls[t] = i;
  }
  return t;
}
const gn = "http://www.w3.org/1999/xlink";
function _n(e, t, s, n, r, i = Nr(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(gn, t.slice(6, t.length)) : e.setAttributeNS(gn, t, s) : s == null || i && !Pn(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : He(s) ? String(s) : s
  );
}
function mn(e, t, s, n, r) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? Tr(s) : s);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const f = i === "OPTION" ? e.getAttribute("value") || "" : e.value, u = s == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(s);
    (f !== u || !("_value" in e)) && (e.value = u), s == null && e.removeAttribute(t), e._value = s;
    return;
  }
  let o = !1;
  if (s === "" || s == null) {
    const f = typeof e[t];
    f === "boolean" ? s = Pn(s) : s == null && f === "string" ? (s = "", o = !0) : f === "number" && (s = 0, o = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function Vo(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function Uo(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const bn = Symbol("_vei");
function Wo(e, t, s, n, r = null) {
  const i = e[bn] || (e[bn] = {}), o = i[t];
  if (n && o)
    o.value = n;
  else {
    const [f, u] = Ko(t);
    if (n) {
      const h = i[t] = Go(
        n,
        r
      );
      Vo(e, f, h, u);
    } else o && (Uo(e, f, o, u), i[t] = void 0);
  }
}
const xn = /(?:Once|Passive|Capture)$/;
function Ko(e) {
  let t;
  if (xn.test(e)) {
    t = {};
    let n;
    for (; n = e.match(xn); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : qe(e.slice(2)), t];
}
let fs = 0;
const Bo = /* @__PURE__ */ Promise.resolve(), qo = () => fs || (Bo.then(() => fs = 0), fs = Date.now());
function Go(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    ve(
      Jo(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = qo(), s;
}
function Jo(e, t) {
  if (P(t)) {
    const s = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      s.call(e), e._stopped = !0;
    }, t.map(
      (n) => (r) => !r._stopped && n && n(r)
    );
  } else
    return t;
}
const yn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Yo = (e, t, s, n, r, i) => {
  const o = r === "svg";
  t === "class" ? Do(e, n, o) : t === "style" ? No(e, s, n) : Ut(t) ? Ss(t) || Wo(e, t, s, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : zo(e, t, n, o)) ? (mn(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && _n(e, t, n, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !J(n)) ? mn(e, De(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), _n(e, t, n, o));
};
function zo(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && yn(t) && M(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return yn(t) && J(s) ? !1 : t in e;
}
const Xo = /* @__PURE__ */ te({ patchProp: Yo }, Ro);
let vn;
function Zo() {
  return vn || (vn = zi(Xo));
}
const Qo = ((...e) => {
  const t = Zo().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const r = el(n);
    if (!r) return;
    const i = t._component;
    !M(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = s(r, !1, ko(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
});
function ko(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function el(e) {
  return J(e) ? document.querySelector(e) : e;
}
const tl = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, r] of t)
    s[n] = r;
  return s;
}, sl = {
  data() {
    return { count: 0 };
  }
}, nl = { class: "my-widget" };
function rl(e, t, s, n, r, i) {
  return uo(), po("div", nl, [
    t[1] || (t[1] = _t("h2", null, "Hello dari Vue! 😊", -1)),
    _t("p", null, "Counter: " + In(r.count), 1),
    _t("button", {
      onClick: t[0] || (t[0] = (o) => r.count++)
    }, "+1")
  ]);
}
const il = /* @__PURE__ */ tl(sl, [["render", rl], ["__scopeId", "data-v-ddfccd52"]]);
function ll(e) {
  Qo(il).mount(e);
}
export {
  il as MyWidget,
  ll as mountMyWidget
};
