/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function We(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const B = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, mt = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Y = () => {
}, Es = () => !1, Bt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), fn = (e) => e.startsWith("onUpdate:"), X = Object.assign, co = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ar = Object.prototype.hasOwnProperty, j = (e, t) => Ar.call(e, t), T = Array.isArray, st = (e) => bn(e) === "[object Map]", Ns = (e) => bn(e) === "[object Set]", $ = (e) => typeof e == "function", q = (e) => typeof e == "string", Qe = (e) => typeof e == "symbol", K = (e) => e !== null && typeof e == "object", lo = (e) => (K(e) || $(e)) && $(e.then) && $(e.catch), bs = Object.prototype.toString, bn = (e) => bs.call(e), fo = (e) => bn(e).slice(8, -1), ys = (e) => bn(e) === "[object Object]", uo = (e) => q(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, $t = /* @__PURE__ */ We(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ir = /* @__PURE__ */ We(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), yn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Rr = /-\w/g, Ne = yn(
  (e) => e.replace(Rr, (t) => t.slice(1).toUpperCase())
), Fr = /\B([A-Z])/g, ze = yn(
  (e) => e.replace(Fr, "-$1").toLowerCase()
), On = yn((e) => e.charAt(0).toUpperCase() + e.slice(1)), nt = yn(
  (e) => e ? `on${On(e)}` : ""
), rt = (e, t) => !Object.is(e, t), xt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, un = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, jr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Ro;
const Kt = () => Ro || (Ro = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ao(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = q(o) ? Wr(o) : ao(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (q(e) || K(e))
    return e;
}
const Hr = /;(?![^(]*\))/g, Lr = /:([^]+)/, Ur = /\/\*[^]*?\*\//g;
function Wr(e) {
  const t = {};
  return e.replace(Ur, "").split(Hr).forEach((n) => {
    if (n) {
      const o = n.split(Lr);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function po(e) {
  let t = "";
  if (q(e))
    t = e;
  else if (T(e))
    for (let n = 0; n < e.length; n++) {
      const o = po(e[n]);
      o && (t += o + " ");
    }
  else if (K(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Br = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Kr = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", kr = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Gr = /* @__PURE__ */ We(Br), qr = /* @__PURE__ */ We(Kr), Jr = /* @__PURE__ */ We(kr), Yr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", zr = /* @__PURE__ */ We(Yr);
function Os(e) {
  return !!e || e === "";
}
const Ds = (e) => !!(e && e.__v_isRef === !0), xs = (e) => q(e) ? e : e == null ? "" : T(e) || K(e) && (e.toString === bs || !$(e.toString)) ? Ds(e) ? xs(e.value) : JSON.stringify(e, ws, 2) : String(e), ws = (e, t) => Ds(t) ? ws(e, t.value) : st(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, s], r) => (n[An(o, r) + " =>"] = s, n),
    {}
  )
} : Ns(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => An(n))
} : Qe(t) ? An(t) : K(t) && !T(t) && !ys(t) ? String(t) : t, An = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Qe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Oe(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let fe;
class Xr {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = fe, !t && fe && (this.index = (fe.scopes || (fe.scopes = [])).push(
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
      const n = fe;
      try {
        return fe = this, t();
      } finally {
        fe = n;
      }
    } else process.env.NODE_ENV !== "production" && Oe("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = fe, fe = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (fe = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Zr() {
  return fe;
}
let U;
const In = /* @__PURE__ */ new WeakSet();
class Vs {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, fe && fe.active && fe.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, In.has(this) && (In.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Cs(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Fo(this), Ts(this);
    const t = U, n = be;
    U = this, be = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && U !== this && Oe(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), $s(this), U = t, be = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        mo(t);
      this.deps = this.depsTail = void 0, Fo(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? In.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    kn(this) && this.run();
  }
  get dirty() {
    return kn(this);
  }
}
let Ss = 0, Mt, Pt;
function Cs(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Pt, Pt = e;
    return;
  }
  e.next = Mt, Mt = e;
}
function ho() {
  Ss++;
}
function go() {
  if (--Ss > 0)
    return;
  if (Pt) {
    let t = Pt;
    for (Pt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Mt; ) {
    let t = Mt;
    for (Mt = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Ts(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function $s(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const s = o.prevDep;
    o.version === -1 ? (o === n && (n = s), mo(o), Qr(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = s;
  }
  e.deps = t, e.depsTail = n;
}
function kn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ms(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ms(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === jt) || (e.globalVersion = jt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !kn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = U, o = be;
  U = e, be = !0;
  try {
    Ts(e);
    const s = e.fn(e._value);
    (t.version === 0 || rt(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    U = n, be = o, $s(e), e.flags &= -3;
  }
}
function mo(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: s } = e;
  if (o && (o.nextSub = s, e.prevSub = void 0), s && (s.prevSub = o, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = s), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      mo(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Qr(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let be = !0;
const Ps = [];
function De() {
  Ps.push(be), be = !1;
}
function xe() {
  const e = Ps.pop();
  be = e === void 0 ? !0 : e;
}
function Fo(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = U;
    U = void 0;
    try {
      t();
    } finally {
      U = n;
    }
  }
}
let jt = 0;
class ei {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class As {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!U || !be || U === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== U)
      n = this.activeLink = new ei(U, this), U.deps ? (n.prevDep = U.depsTail, U.depsTail.nextDep = n, U.depsTail = n) : U.deps = U.depsTail = n, Is(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = U.depsTail, n.nextDep = void 0, U.depsTail.nextDep = n, U.depsTail = n, U.deps === n && (U.deps = o);
    }
    return process.env.NODE_ENV !== "production" && U.onTrack && U.onTrack(
      X(
        {
          effect: U
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, jt++, this.notify(t);
  }
  notify(t) {
    ho();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            X(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      go();
    }
  }
}
function Is(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        Is(o);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Gn = /* @__PURE__ */ new WeakMap(), it = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), qn = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Ht = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function J(e, t, n) {
  if (be && U) {
    let o = Gn.get(e);
    o || Gn.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || (o.set(n, s = new As()), s.map = o, s.key = n), process.env.NODE_ENV !== "production" ? s.track({
      target: e,
      type: t,
      key: n
    }) : s.track();
  }
}
function Pe(e, t, n, o, s, r) {
  const i = Gn.get(e);
  if (!i) {
    jt++;
    return;
  }
  const c = (u) => {
    u && (process.env.NODE_ENV !== "production" ? u.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: s,
      oldTarget: r
    }) : u.trigger());
  };
  if (ho(), t === "clear")
    i.forEach(c);
  else {
    const u = T(e), d = u && uo(n);
    if (u && n === "length") {
      const p = Number(o);
      i.forEach((a, g) => {
        (g === "length" || g === Ht || !Qe(g) && g >= p) && c(a);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && c(i.get(n)), d && c(i.get(Ht)), t) {
        case "add":
          u ? d && c(i.get("length")) : (c(i.get(it)), st(e) && c(i.get(qn)));
          break;
        case "delete":
          u || (c(i.get(it)), st(e) && c(i.get(qn)));
          break;
        case "set":
          st(e) && c(i.get(it));
          break;
      }
  }
  go();
}
function pt(e) {
  const t = A(e);
  return t === e ? t : (J(t, "iterate", Ht), ge(e) ? t : t.map(pe));
}
function _o(e) {
  return J(e = A(e), "iterate", Ht), e;
}
const ti = {
  __proto__: null,
  [Symbol.iterator]() {
    return Rn(this, Symbol.iterator, pe);
  },
  concat(...e) {
    return pt(this).concat(
      ...e.map((t) => T(t) ? pt(t) : t)
    );
  },
  entries() {
    return Rn(this, "entries", (e) => (e[1] = pe(e[1]), e));
  },
  every(e, t) {
    return je(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return je(this, "filter", e, t, (n) => n.map(pe), arguments);
  },
  find(e, t) {
    return je(this, "find", e, t, pe, arguments);
  },
  findIndex(e, t) {
    return je(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return je(this, "findLast", e, t, pe, arguments);
  },
  findLastIndex(e, t) {
    return je(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return je(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Fn(this, "includes", e);
  },
  indexOf(...e) {
    return Fn(this, "indexOf", e);
  },
  join(e) {
    return pt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Fn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return je(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return wt(this, "pop");
  },
  push(...e) {
    return wt(this, "push", e);
  },
  reduce(e, ...t) {
    return jo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return jo(this, "reduceRight", e, t);
  },
  shift() {
    return wt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return je(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return wt(this, "splice", e);
  },
  toReversed() {
    return pt(this).toReversed();
  },
  toSorted(e) {
    return pt(this).toSorted(e);
  },
  toSpliced(...e) {
    return pt(this).toSpliced(...e);
  },
  unshift(...e) {
    return wt(this, "unshift", e);
  },
  values() {
    return Rn(this, "values", pe);
  }
};
function Rn(e, t, n) {
  const o = _o(e), s = o[t]();
  return o !== e && !ge(e) && (s._next = s.next, s.next = () => {
    const r = s._next();
    return r.done || (r.value = n(r.value)), r;
  }), s;
}
const ni = Array.prototype;
function je(e, t, n, o, s, r) {
  const i = _o(e), c = i !== e && !ge(e), u = i[t];
  if (u !== ni[t]) {
    const a = u.apply(e, r);
    return c ? pe(a) : a;
  }
  let d = n;
  i !== e && (c ? d = function(a, g) {
    return n.call(this, pe(a), g, e);
  } : n.length > 2 && (d = function(a, g) {
    return n.call(this, a, g, e);
  }));
  const p = u.call(i, d, o);
  return c && s ? s(p) : p;
}
function jo(e, t, n, o) {
  const s = _o(e);
  let r = n;
  return s !== e && (ge(e) ? n.length > 3 && (r = function(i, c, u) {
    return n.call(this, i, c, u, e);
  }) : r = function(i, c, u) {
    return n.call(this, i, pe(c), u, e);
  }), s[t](r, ...o);
}
function Fn(e, t, n) {
  const o = A(e);
  J(o, "iterate", Ht);
  const s = o[t](...n);
  return (s === -1 || s === !1) && an(n[0]) ? (n[0] = A(n[0]), o[t](...n)) : s;
}
function wt(e, t, n = []) {
  De(), ho();
  const o = A(e)[t].apply(e, n);
  return go(), xe(), o;
}
const oi = /* @__PURE__ */ We("__proto__,__v_isRef,__isVue"), Rs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Qe)
);
function si(e) {
  Qe(e) || (e = String(e));
  const t = A(this);
  return J(t, "has", e), t.hasOwnProperty(e);
}
class Fs {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return o === (s ? r ? Bs : Ws : r ? Us : Ls).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const i = T(t);
    if (!s) {
      let u;
      if (i && (u = ti[n]))
        return u;
      if (n === "hasOwnProperty")
        return si;
    }
    const c = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      z(t) ? t : o
    );
    if ((Qe(n) ? Rs.has(n) : oi(n)) || (s || J(t, "get", n), r))
      return c;
    if (z(c)) {
      const u = i && uo(n) ? c : c.value;
      return s && K(u) ? Yn(u) : u;
    }
    return K(c) ? s ? Yn(c) : vo(c) : c;
  }
}
class js extends Fs {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, s) {
    let r = t[n];
    if (!this._isShallow) {
      const u = Xe(r);
      if (!ge(o) && !Xe(o) && (r = A(r), o = A(o)), !T(t) && z(r) && !z(o))
        return u ? (process.env.NODE_ENV !== "production" && Oe(
          `Set operation on key "${String(n)}" failed: target is readonly.`,
          t[n]
        ), !0) : (r.value = o, !0);
    }
    const i = T(t) && uo(n) ? Number(n) < t.length : j(t, n), c = Reflect.set(
      t,
      n,
      o,
      z(t) ? t : s
    );
    return t === A(s) && (i ? rt(o, r) && Pe(t, "set", n, o, r) : Pe(t, "add", n, o)), c;
  }
  deleteProperty(t, n) {
    const o = j(t, n), s = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && Pe(t, "delete", n, void 0, s), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Qe(n) || !Rs.has(n)) && J(t, "has", n), o;
  }
  ownKeys(t) {
    return J(
      t,
      "iterate",
      T(t) ? "length" : it
    ), Reflect.ownKeys(t);
  }
}
class Hs extends Fs {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && Oe(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && Oe(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const ri = /* @__PURE__ */ new js(), ii = /* @__PURE__ */ new Hs(), ci = /* @__PURE__ */ new js(!0), li = /* @__PURE__ */ new Hs(!0), Jn = (e) => e, Xt = (e) => Reflect.getPrototypeOf(e);
function fi(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, r = A(s), i = st(r), c = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, d = s[e](...o), p = n ? Jn : t ? zn : pe;
    return !t && J(
      r,
      "iterate",
      u ? qn : it
    ), {
      // iterator protocol
      next() {
        const { value: a, done: g } = d.next();
        return g ? { value: a, done: g } : {
          value: c ? [p(a[0]), p(a[1])] : p(a),
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
function Zt(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Oe(
        `${On(e)} operation ${n}failed: target is readonly.`,
        A(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ui(e, t) {
  const n = {
    get(s) {
      const r = this.__v_raw, i = A(r), c = A(s);
      e || (rt(s, c) && J(i, "get", s), J(i, "get", c));
      const { has: u } = Xt(i), d = t ? Jn : e ? zn : pe;
      if (u.call(i, s))
        return d(r.get(s));
      if (u.call(i, c))
        return d(r.get(c));
      r !== i && r.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && J(A(s), "iterate", it), s.size;
    },
    has(s) {
      const r = this.__v_raw, i = A(r), c = A(s);
      return e || (rt(s, c) && J(i, "has", s), J(i, "has", c)), s === c ? r.has(s) : r.has(s) || r.has(c);
    },
    forEach(s, r) {
      const i = this, c = i.__v_raw, u = A(c), d = t ? Jn : e ? zn : pe;
      return !e && J(u, "iterate", it), c.forEach((p, a) => s.call(r, d(p), d(a), i));
    }
  };
  return X(
    n,
    e ? {
      add: Zt("add"),
      set: Zt("set"),
      delete: Zt("delete"),
      clear: Zt("clear")
    } : {
      add(s) {
        !t && !ge(s) && !Xe(s) && (s = A(s));
        const r = A(this);
        return Xt(r).has.call(r, s) || (r.add(s), Pe(r, "add", s, s)), this;
      },
      set(s, r) {
        !t && !ge(r) && !Xe(r) && (r = A(r));
        const i = A(this), { has: c, get: u } = Xt(i);
        let d = c.call(i, s);
        d ? process.env.NODE_ENV !== "production" && Ho(i, c, s) : (s = A(s), d = c.call(i, s));
        const p = u.call(i, s);
        return i.set(s, r), d ? rt(r, p) && Pe(i, "set", s, r, p) : Pe(i, "add", s, r), this;
      },
      delete(s) {
        const r = A(this), { has: i, get: c } = Xt(r);
        let u = i.call(r, s);
        u ? process.env.NODE_ENV !== "production" && Ho(r, i, s) : (s = A(s), u = i.call(r, s));
        const d = c ? c.call(r, s) : void 0, p = r.delete(s);
        return u && Pe(r, "delete", s, void 0, d), p;
      },
      clear() {
        const s = A(this), r = s.size !== 0, i = process.env.NODE_ENV !== "production" ? st(s) ? new Map(s) : new Set(s) : void 0, c = s.clear();
        return r && Pe(
          s,
          "clear",
          void 0,
          void 0,
          i
        ), c;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    n[s] = fi(s, e, t);
  }), n;
}
function Dn(e, t) {
  const n = ui(e, t);
  return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    j(n, s) && s in o ? n : o,
    s,
    r
  );
}
const ai = {
  get: /* @__PURE__ */ Dn(!1, !1)
}, pi = {
  get: /* @__PURE__ */ Dn(!1, !0)
}, di = {
  get: /* @__PURE__ */ Dn(!0, !1)
}, hi = {
  get: /* @__PURE__ */ Dn(!0, !0)
};
function Ho(e, t, n) {
  const o = A(n);
  if (o !== n && t.call(e, o)) {
    const s = fo(e);
    Oe(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Ls = /* @__PURE__ */ new WeakMap(), Us = /* @__PURE__ */ new WeakMap(), Ws = /* @__PURE__ */ new WeakMap(), Bs = /* @__PURE__ */ new WeakMap();
function gi(e) {
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
function mi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : gi(fo(e));
}
function vo(e) {
  return Xe(e) ? e : xn(
    e,
    !1,
    ri,
    ai,
    Ls
  );
}
function _i(e) {
  return xn(
    e,
    !1,
    ci,
    pi,
    Us
  );
}
function Yn(e) {
  return xn(
    e,
    !0,
    ii,
    di,
    Ws
  );
}
function Ae(e) {
  return xn(
    e,
    !0,
    li,
    hi,
    Bs
  );
}
function xn(e, t, n, o, s) {
  if (!K(e))
    return process.env.NODE_ENV !== "production" && Oe(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = mi(e);
  if (r === 0)
    return e;
  const i = s.get(e);
  if (i)
    return i;
  const c = new Proxy(
    e,
    r === 2 ? o : n
  );
  return s.set(e, c), c;
}
function _t(e) {
  return Xe(e) ? _t(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Xe(e) {
  return !!(e && e.__v_isReadonly);
}
function ge(e) {
  return !!(e && e.__v_isShallow);
}
function an(e) {
  return e ? !!e.__v_raw : !1;
}
function A(e) {
  const t = e && e.__v_raw;
  return t ? A(t) : e;
}
function vi(e) {
  return !j(e, "__v_skip") && Object.isExtensible(e) && un(e, "__v_skip", !0), e;
}
const pe = (e) => K(e) ? vo(e) : e, zn = (e) => K(e) ? Yn(e) : e;
function z(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Ei(e) {
  return z(e) ? e.value : e;
}
const Ni = {
  get: (e, t, n) => t === "__v_raw" ? e : Ei(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return z(s) && !z(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Ks(e) {
  return _t(e) ? e : new Proxy(e, Ni);
}
class bi {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new As(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = jt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    U !== this)
      return Cs(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Ms(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && Oe("Write operation failed: computed value is readonly");
  }
}
function yi(e, t, n = !1) {
  let o, s;
  $(e) ? o = e : (o = e.get, s = e.set);
  const r = new bi(o, s, n);
  return process.env.NODE_ENV, r;
}
const Qt = {}, pn = /* @__PURE__ */ new WeakMap();
let ot;
function Oi(e, t = !1, n = ot) {
  if (n) {
    let o = pn.get(n);
    o || pn.set(n, o = []), o.push(e);
  } else process.env.NODE_ENV !== "production" && !t && Oe(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Di(e, t, n = B) {
  const { immediate: o, deep: s, once: r, scheduler: i, augmentJob: c, call: u } = n, d = (S) => {
    (n.onWarn || Oe)(
      "Invalid watch source: ",
      S,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, p = (S) => s ? S : ge(S) || s === !1 || s === 0 ? Ye(S, 1) : Ye(S);
  let a, g, D, M, V = !1, Z = !1;
  if (z(e) ? (g = () => e.value, V = ge(e)) : _t(e) ? (g = () => p(e), V = !0) : T(e) ? (Z = !0, V = e.some((S) => _t(S) || ge(S)), g = () => e.map((S) => {
    if (z(S))
      return S.value;
    if (_t(S))
      return p(S);
    if ($(S))
      return u ? u(S, 2) : S();
    process.env.NODE_ENV !== "production" && d(S);
  })) : $(e) ? t ? g = u ? () => u(e, 2) : e : g = () => {
    if (D) {
      De();
      try {
        D();
      } finally {
        xe();
      }
    }
    const S = ot;
    ot = a;
    try {
      return u ? u(e, 3, [M]) : e(M);
    } finally {
      ot = S;
    }
  } : (g = Y, process.env.NODE_ENV !== "production" && d(e)), t && s) {
    const S = g, Q = s === !0 ? 1 / 0 : s;
    g = () => Ye(S(), Q);
  }
  const G = Zr(), L = () => {
    a.stop(), G && G.active && co(G.effects, a);
  };
  if (r && t) {
    const S = t;
    t = (...Q) => {
      S(...Q), L();
    };
  }
  let H = Z ? new Array(e.length).fill(Qt) : Qt;
  const ue = (S) => {
    if (!(!(a.flags & 1) || !a.dirty && !S))
      if (t) {
        const Q = a.run();
        if (s || V || (Z ? Q.some((me, te) => rt(me, H[te])) : rt(Q, H))) {
          D && D();
          const me = ot;
          ot = a;
          try {
            const te = [
              Q,
              // pass undefined as the old value when it's changed for the first time
              H === Qt ? void 0 : Z && H[0] === Qt ? [] : H,
              M
            ];
            H = Q, u ? u(t, 3, te) : (
              // @ts-expect-error
              t(...te)
            );
          } finally {
            ot = me;
          }
        }
      } else
        a.run();
  };
  return c && c(ue), a = new Vs(g), a.scheduler = i ? () => i(ue, !1) : ue, M = (S) => Oi(S, !1, a), D = a.onStop = () => {
    const S = pn.get(a);
    if (S) {
      if (u)
        u(S, 4);
      else
        for (const Q of S) Q();
      pn.delete(a);
    }
  }, process.env.NODE_ENV !== "production" && (a.onTrack = n.onTrack, a.onTrigger = n.onTrigger), t ? o ? ue(!0) : H = a.run() : i ? i(ue.bind(null, !0), !0) : a.run(), L.pause = a.pause.bind(a), L.resume = a.resume.bind(a), L.stop = L, L;
}
function Ye(e, t = 1 / 0, n) {
  if (t <= 0 || !K(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, z(e))
    Ye(e.value, t, n);
  else if (T(e))
    for (let o = 0; o < e.length; o++)
      Ye(e[o], t, n);
  else if (Ns(e) || st(e))
    e.forEach((o) => {
      Ye(o, t, n);
    });
  else if (ys(e)) {
    for (const o in e)
      Ye(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && Ye(e[o], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const ct = [];
function en(e) {
  ct.push(e);
}
function tn() {
  ct.pop();
}
let jn = !1;
function y(e, ...t) {
  if (jn) return;
  jn = !0, De();
  const n = ct.length ? ct[ct.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = xi();
  if (o)
    Nt(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var i, c;
          return (c = (i = r.toString) == null ? void 0 : i.call(r)) != null ? c : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        s.map(
          ({ vnode: r }) => `at <${Tn(n, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...wi(s)), console.warn(...r);
  }
  xe(), jn = !1;
}
function xi() {
  let e = ct[ct.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function wi(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Vi(n));
  }), t;
}
function Vi({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${Tn(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [s, ...Si(e.props), r] : [s + r];
}
function Si(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...ks(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function ks(e, t, n) {
  return q(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : z(t) ? (t = ks(e, A(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : $(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = A(t), n ? t : [`${e}=`, t]);
}
const Eo = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function Nt(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (s) {
    kt(s, t, n);
  }
}
function Re(e, t, n, o) {
  if ($(e)) {
    const s = Nt(e, t, n, o);
    return s && lo(s) && s.catch((r) => {
      kt(r, t, n);
    }), s;
  }
  if (T(e)) {
    const s = [];
    for (let r = 0; r < e.length; r++)
      s.push(Re(e[r], t, n, o));
    return s;
  } else process.env.NODE_ENV !== "production" && y(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function kt(e, t, n, o = !0) {
  const s = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || B;
  if (t) {
    let c = t.parent;
    const u = t.proxy, d = process.env.NODE_ENV !== "production" ? Eo[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; c; ) {
      const p = c.ec;
      if (p) {
        for (let a = 0; a < p.length; a++)
          if (p[a](e, u, d) === !1)
            return;
      }
      c = c.parent;
    }
    if (r) {
      De(), Nt(r, null, 10, [
        e,
        u,
        d
      ]), xe();
      return;
    }
  }
  Ci(e, n, s, o, i);
}
function Ci(e, t, n, o = !0, s = !1) {
  if (process.env.NODE_ENV !== "production") {
    const r = Eo[t];
    if (n && en(n), y(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && tn(), o)
      throw e;
    console.error(e);
  } else {
    if (s)
      throw e;
    console.error(e);
  }
}
const se = [];
let $e = -1;
const vt = [];
let qe = null, gt = 0;
const Gs = /* @__PURE__ */ Promise.resolve();
let dn = null;
const Ti = 100;
function $i(e) {
  const t = dn || Gs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Mi(e) {
  let t = $e + 1, n = se.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = se[o], r = Lt(s);
    r < e || r === e && s.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function wn(e) {
  if (!(e.flags & 1)) {
    const t = Lt(e), n = se[se.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Lt(n) ? se.push(e) : se.splice(Mi(t), 0, e), e.flags |= 1, qs();
  }
}
function qs() {
  dn || (dn = Gs.then(zs));
}
function Js(e) {
  T(e) ? vt.push(...e) : qe && e.id === -1 ? qe.splice(gt + 1, 0, e) : e.flags & 1 || (vt.push(e), e.flags |= 1), qs();
}
function Lo(e, t, n = $e + 1) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < se.length; n++) {
    const o = se[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || process.env.NODE_ENV !== "production" && No(t, o))
        continue;
      se.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function Ys(e) {
  if (vt.length) {
    const t = [...new Set(vt)].sort(
      (n, o) => Lt(n) - Lt(o)
    );
    if (vt.length = 0, qe) {
      qe.push(...t);
      return;
    }
    for (qe = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), gt = 0; gt < qe.length; gt++) {
      const n = qe[gt];
      process.env.NODE_ENV !== "production" && No(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    qe = null, gt = 0;
  }
}
const Lt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function zs(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => No(e, n) : Y;
  try {
    for ($e = 0; $e < se.length; $e++) {
      const n = se[$e];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Nt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; $e < se.length; $e++) {
      const n = se[$e];
      n && (n.flags &= -2);
    }
    $e = -1, se.length = 0, Ys(e), dn = null, (se.length || vt.length) && zs(e);
  }
}
function No(e, t) {
  const n = e.get(t) || 0;
  if (n > Ti) {
    const o = t.i, s = o && Cr(o.type);
    return kt(
      `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Ie = !1;
const nn = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (Kt().__VUE_HMR_RUNTIME__ = {
  createRecord: Hn(Xs),
  rerender: Hn(Ii),
  reload: Hn(Ri)
});
const ut = /* @__PURE__ */ new Map();
function Pi(e) {
  const t = e.type.__hmrId;
  let n = ut.get(t);
  n || (Xs(t, e.type), n = ut.get(t)), n.instances.add(e);
}
function Ai(e) {
  ut.get(e.type.__hmrId).instances.delete(e);
}
function Xs(e, t) {
  return ut.has(e) ? !1 : (ut.set(e, {
    initialDef: hn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function hn(e) {
  return Tr(e) ? e.__vccOpts : e;
}
function Ii(e, t) {
  const n = ut.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, hn(o.type).render = t), o.renderCache = [], Ie = !0, o.job.flags & 8 || o.update(), Ie = !1;
  }));
}
function Ri(e, t) {
  const n = ut.get(e);
  if (!n) return;
  t = hn(t), Uo(n.initialDef, t);
  const o = [...n.instances];
  for (let s = 0; s < o.length; s++) {
    const r = o[s], i = hn(r.type);
    let c = nn.get(i);
    c || (i !== n.initialDef && Uo(i, t), nn.set(i, c = /* @__PURE__ */ new Set())), c.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (c.add(r), r.ceReload(t.styles), c.delete(r)) : r.parent ? wn(() => {
      r.job.flags & 8 || (Ie = !0, r.parent.update(), Ie = !1, c.delete(r));
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(i);
  }
  Js(() => {
    nn.clear();
  });
}
function Uo(e, t) {
  X(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Hn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Ee, Ct = [], Xn = !1;
function Gt(e, ...t) {
  Ee ? Ee.emit(e, ...t) : Xn || Ct.push({ event: e, args: t });
}
function bo(e, t) {
  var n, o;
  Ee = e, Ee ? (Ee.enabled = !0, Ct.forEach(({ event: s, args: r }) => Ee.emit(s, ...r)), Ct = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    bo(r, t);
  }), setTimeout(() => {
    Ee || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Xn = !0, Ct = []);
  }, 3e3)) : (Xn = !0, Ct = []);
}
function Fi(e, t) {
  Gt("app:init", e, t, {
    Fragment: Me,
    Text: qt,
    Comment: ye,
    Static: rn
  });
}
function ji(e) {
  Gt("app:unmount", e);
}
const Hi = /* @__PURE__ */ yo(
  "component:added"
  /* COMPONENT_ADDED */
), Zs = /* @__PURE__ */ yo(
  "component:updated"
  /* COMPONENT_UPDATED */
), Li = /* @__PURE__ */ yo(
  "component:removed"
  /* COMPONENT_REMOVED */
), Ui = (e) => {
  Ee && typeof Ee.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Ee.cleanupBuffer(e) && Li(e);
};
// @__NO_SIDE_EFFECTS__
function yo(e) {
  return (t) => {
    Gt(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Wi = /* @__PURE__ */ Qs(
  "perf:start"
  /* PERFORMANCE_START */
), Bi = /* @__PURE__ */ Qs(
  "perf:end"
  /* PERFORMANCE_END */
);
function Qs(e) {
  return (t, n, o) => {
    Gt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Ki(e, t, n) {
  Gt(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let de = null, er = null;
function gn(e) {
  const t = de;
  return de = e, er = e && e.type.__scopeId || null, t;
}
function ki(e, t = de, n) {
  if (!t || e._n)
    return e;
  const o = (...s) => {
    o._d && ts(-1);
    const r = gn(t);
    let i;
    try {
      i = e(...s);
    } finally {
      gn(r), o._d && ts(1);
    }
    return process.env.NODE_ENV !== "production" && Zs(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function tr(e) {
  Ir(e) && y("Do not use built-in directive ids as custom directive id: " + e);
}
function et(e, t, n, o) {
  const s = e.dirs, r = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    r && (c.oldValue = r[i].value);
    let u = c.dir[o];
    u && (De(), Re(u, n, 8, [
      e.el,
      c,
      e,
      t
    ]), xe());
  }
}
const Gi = Symbol("_vte"), qi = (e) => e.__isTeleport, Ji = Symbol("_leaveCb");
function Oo(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Oo(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function nr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Wo = /* @__PURE__ */ new WeakSet(), mn = /* @__PURE__ */ new WeakMap();
function At(e, t, n, o, s = !1) {
  if (T(e)) {
    e.forEach(
      (V, Z) => At(
        V,
        t && (T(t) ? t[Z] : t),
        n,
        o,
        s
      )
    );
    return;
  }
  if (It(o) && !s) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && At(e, t, n, o.component.subTree);
    return;
  }
  const r = o.shapeFlag & 4 ? To(o.component) : o.el, i = s ? null : r, { i: c, r: u } = e;
  if (process.env.NODE_ENV !== "production" && !c) {
    y(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const d = t && t.r, p = c.refs === B ? c.refs = {} : c.refs, a = c.setupState, g = A(a), D = a === B ? Es : (V) => process.env.NODE_ENV !== "production" && (j(g, V) && !z(g[V]) && y(
    `Template ref "${V}" used on a non-ref value. It will not work in the production build.`
  ), Wo.has(g[V])) ? !1 : j(g, V), M = (V) => process.env.NODE_ENV === "production" || !Wo.has(V);
  if (d != null && d !== u) {
    if (Bo(t), q(d))
      p[d] = null, D(d) && (a[d] = null);
    else if (z(d)) {
      M(d) && (d.value = null);
      const V = t;
      V.k && (p[V.k] = null);
    }
  }
  if ($(u))
    Nt(u, c, 12, [i, p]);
  else {
    const V = q(u), Z = z(u);
    if (V || Z) {
      const G = () => {
        if (e.f) {
          const L = V ? D(u) ? a[u] : p[u] : M(u) || !e.k ? u.value : p[e.k];
          if (s)
            T(L) && co(L, r);
          else if (T(L))
            L.includes(r) || L.push(r);
          else if (V)
            p[u] = [r], D(u) && (a[u] = p[u]);
          else {
            const H = [r];
            M(u) && (u.value = H), e.k && (p[e.k] = H);
          }
        } else V ? (p[u] = i, D(u) && (a[u] = i)) : Z ? (M(u) && (u.value = i), e.k && (p[e.k] = i)) : process.env.NODE_ENV !== "production" && y("Invalid template ref type:", u, `(${typeof u})`);
      };
      if (i) {
        const L = () => {
          G(), mn.delete(e);
        };
        L.id = -1, mn.set(e, L), ae(L, n);
      } else
        Bo(e), G();
    } else process.env.NODE_ENV !== "production" && y("Invalid template ref type:", u, `(${typeof u})`);
  }
}
function Bo(e) {
  const t = mn.get(e);
  t && (t.flags |= 8, mn.delete(e));
}
Kt().requestIdleCallback;
Kt().cancelIdleCallback;
const It = (e) => !!e.type.__asyncLoader, Do = (e) => e.type.__isKeepAlive;
function Yi(e, t) {
  or(e, "a", t);
}
function zi(e, t) {
  or(e, "da", t);
}
function or(e, t, n = ee) {
  const o = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (Vn(t, o, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      Do(s.parent.vnode) && Xi(o, t, n, s), s = s.parent;
  }
}
function Xi(e, t, n, o) {
  const s = Vn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  sr(() => {
    co(o[t], s);
  }, n);
}
function Vn(e, t, n = ee, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      De();
      const c = Jt(n), u = Re(t, n, e, i);
      return c(), xe(), u;
    });
    return o ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = nt(Eo[e].replace(/ hook$/, ""));
    y(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Be = (e) => (t, n = ee) => {
  (!Wt || e === "sp") && Vn(e, (...o) => t(...o), n);
}, Zi = Be("bm"), Qi = Be("m"), ec = Be(
  "bu"
), tc = Be("u"), nc = Be(
  "bum"
), sr = Be("um"), oc = Be(
  "sp"
), sc = Be("rtg"), rc = Be("rtc");
function ic(e, t = ee) {
  Vn("ec", e, t);
}
const cc = Symbol.for("v-ndc"), Zn = (e) => e ? Vr(e) ? To(e) : Zn(e.parent) : null, lt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ X(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Ae(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Ae(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Ae(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Ae(e.refs) : e.refs,
    $parent: (e) => Zn(e.parent),
    $root: (e) => Zn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => cr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      wn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = $i.bind(e.proxy)),
    $watch: (e) => Lc.bind(e)
  })
), xo = (e) => e === "_" || e === "$", Ln = (e, t) => e !== B && !e.__isScriptSetup && j(e, t), rr = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: s, props: r, accessCache: i, type: c, appContext: u } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let d;
    if (t[0] !== "$") {
      const D = i[t];
      if (D !== void 0)
        switch (D) {
          case 1:
            return o[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (Ln(o, t))
          return i[t] = 1, o[t];
        if (s !== B && j(s, t))
          return i[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && j(d, t)
        )
          return i[t] = 3, r[t];
        if (n !== B && j(n, t))
          return i[t] = 4, n[t];
        Qn && (i[t] = 0);
      }
    }
    const p = lt[t];
    let a, g;
    if (p)
      return t === "$attrs" ? (J(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && En()) : process.env.NODE_ENV !== "production" && t === "$slots" && J(e, "get", t), p(e);
    if (
      // css module (injected by vue-loader)
      (a = c.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== B && j(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      g = u.config.globalProperties, j(g, t)
    )
      return g[t];
    process.env.NODE_ENV !== "production" && de && (!q(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== B && xo(t[0]) && j(s, t) ? y(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === de && y(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: r } = e;
    return Ln(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && j(s, t) ? (y(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== B && j(o, t) ? (o[t] = n, !0) : j(e.props, t) ? (process.env.NODE_ENV !== "production" && y(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && y(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: s, propsOptions: r, type: i }
  }, c) {
    let u, d;
    return !!(n[c] || e !== B && c[0] !== "$" && j(e, c) || Ln(t, c) || (u = r[0]) && j(u, c) || j(o, c) || j(lt, c) || j(s.config.globalProperties, c) || (d = i.__cssModules) && d[c]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : j(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (rr.ownKeys = (e) => (y(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function lc(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(lt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => lt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Y
    });
  }), t;
}
function fc(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: Y
    });
  });
}
function uc(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(A(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (xo(o[0])) {
        y(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: Y
      });
    }
  });
}
function Ko(e) {
  return T(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function ac() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? y(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Qn = !0;
function pc(e) {
  const t = cr(e), n = e.proxy, o = e.ctx;
  Qn = !1, t.beforeCreate && ko(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: r,
    methods: i,
    watch: c,
    provide: u,
    inject: d,
    // lifecycle
    created: p,
    beforeMount: a,
    mounted: g,
    beforeUpdate: D,
    updated: M,
    activated: V,
    deactivated: Z,
    beforeDestroy: G,
    beforeUnmount: L,
    destroyed: H,
    unmounted: ue,
    render: S,
    renderTracked: Q,
    renderTriggered: me,
    errorCaptured: te,
    serverPrefetch: re,
    // public API
    expose: Fe,
    inheritAttrs: Ke,
    // assets
    components: _e,
    directives: Yt,
    filters: $o
  } = t, ke = process.env.NODE_ENV !== "production" ? ac() : null;
  if (process.env.NODE_ENV !== "production") {
    const [R] = e.propsOptions;
    if (R)
      for (const I in R)
        ke("Props", I);
  }
  if (d && dc(d, o, ke), i)
    for (const R in i) {
      const I = i[R];
      $(I) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, R, {
        value: I.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[R] = I.bind(n), process.env.NODE_ENV !== "production" && ke("Methods", R)) : process.env.NODE_ENV !== "production" && y(
        `Method "${R}" has type "${typeof I}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (s) {
    process.env.NODE_ENV !== "production" && !$(s) && y(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const R = s.call(n, n);
    if (process.env.NODE_ENV !== "production" && lo(R) && y(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !K(R))
      process.env.NODE_ENV !== "production" && y("data() should return an object.");
    else if (e.data = vo(R), process.env.NODE_ENV !== "production")
      for (const I in R)
        ke("Data", I), xo(I[0]) || Object.defineProperty(o, I, {
          configurable: !0,
          enumerable: !0,
          get: () => R[I],
          set: Y
        });
  }
  if (Qn = !0, r)
    for (const R in r) {
      const I = r[R], we = $(I) ? I.bind(n, n) : $(I.get) ? I.get.bind(n, n) : Y;
      process.env.NODE_ENV !== "production" && we === Y && y(`Computed property "${R}" has no getter.`);
      const $n = !$(I) && $(I.set) ? I.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        y(
          `Write operation failed: computed property "${R}" is readonly.`
        );
      } : Y, bt = hl({
        get: we,
        set: $n
      });
      Object.defineProperty(o, R, {
        enumerable: !0,
        configurable: !0,
        get: () => bt.value,
        set: (at) => bt.value = at
      }), process.env.NODE_ENV !== "production" && ke("Computed", R);
    }
  if (c)
    for (const R in c)
      ir(c[R], o, n, R);
  if (u) {
    const R = $(u) ? u.call(n) : u;
    Reflect.ownKeys(R).forEach((I) => {
      Ec(I, R[I]);
    });
  }
  p && ko(p, e, "c");
  function ie(R, I) {
    T(I) ? I.forEach((we) => R(we.bind(n))) : I && R(I.bind(n));
  }
  if (ie(Zi, a), ie(Qi, g), ie(ec, D), ie(tc, M), ie(Yi, V), ie(zi, Z), ie(ic, te), ie(rc, Q), ie(sc, me), ie(nc, L), ie(sr, ue), ie(oc, re), T(Fe))
    if (Fe.length) {
      const R = e.exposed || (e.exposed = {});
      Fe.forEach((I) => {
        Object.defineProperty(R, I, {
          get: () => n[I],
          set: (we) => n[I] = we,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  S && e.render === Y && (e.render = S), Ke != null && (e.inheritAttrs = Ke), _e && (e.components = _e), Yt && (e.directives = Yt), re && nr(e);
}
function dc(e, t, n = Y) {
  T(e) && (e = eo(e));
  for (const o in e) {
    const s = e[o];
    let r;
    K(s) ? "default" in s ? r = on(
      s.from || o,
      s.default,
      !0
    ) : r = on(s.from || o) : r = on(s), z(r) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (i) => r.value = i
    }) : t[o] = r, process.env.NODE_ENV !== "production" && n("Inject", o);
  }
}
function ko(e, t, n) {
  Re(
    T(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function ir(e, t, n, o) {
  let s = o.includes(".") ? Er(n, o) : () => n[o];
  if (q(e)) {
    const r = t[e];
    $(r) ? Wn(s, r) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e}"`, r);
  } else if ($(e))
    Wn(s, e.bind(n));
  else if (K(e))
    if (T(e))
      e.forEach((r) => ir(r, t, n, o));
    else {
      const r = $(e.handler) ? e.handler.bind(n) : t[e.handler];
      $(r) ? Wn(s, r, e) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else process.env.NODE_ENV !== "production" && y(`Invalid watch option: "${o}"`, e);
}
function cr(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, c = r.get(t);
  let u;
  return c ? u = c : !s.length && !n && !o ? u = t : (u = {}, s.length && s.forEach(
    (d) => _n(u, d, i, !0)
  ), _n(u, t, i)), K(t) && r.set(t, u), u;
}
function _n(e, t, n, o = !1) {
  const { mixins: s, extends: r } = t;
  r && _n(e, r, n, !0), s && s.forEach(
    (i) => _n(e, i, n, !0)
  );
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && y(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = hc[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const hc = {
  data: Go,
  props: qo,
  emits: qo,
  // objects
  methods: Tt,
  computed: Tt,
  // lifecycle
  beforeCreate: oe,
  created: oe,
  beforeMount: oe,
  mounted: oe,
  beforeUpdate: oe,
  updated: oe,
  beforeDestroy: oe,
  beforeUnmount: oe,
  destroyed: oe,
  unmounted: oe,
  activated: oe,
  deactivated: oe,
  errorCaptured: oe,
  serverPrefetch: oe,
  // assets
  components: Tt,
  directives: Tt,
  // watch
  watch: mc,
  // provide / inject
  provide: Go,
  inject: gc
};
function Go(e, t) {
  return t ? e ? function() {
    return X(
      $(e) ? e.call(this, this) : e,
      $(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function gc(e, t) {
  return Tt(eo(e), eo(t));
}
function eo(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function oe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Tt(e, t) {
  return e ? X(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function qo(e, t) {
  return e ? T(e) && T(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : X(
    /* @__PURE__ */ Object.create(null),
    Ko(e),
    Ko(t ?? {})
  ) : t;
}
function mc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = X(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = oe(e[o], t[o]);
  return n;
}
function lr() {
  return {
    app: null,
    config: {
      isNativeTag: Es,
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
let _c = 0;
function vc(e, t) {
  return function(o, s = null) {
    $(o) || (o = X({}, o)), s != null && !K(s) && (process.env.NODE_ENV !== "production" && y("root props passed to app.mount() must be an object."), s = null);
    const r = lr(), i = /* @__PURE__ */ new WeakSet(), c = [];
    let u = !1;
    const d = r.app = {
      _uid: _c++,
      _component: o,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: rs,
      get config() {
        return r.config;
      },
      set config(p) {
        process.env.NODE_ENV !== "production" && y(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(p, ...a) {
        return i.has(p) ? process.env.NODE_ENV !== "production" && y("Plugin has already been applied to target app.") : p && $(p.install) ? (i.add(p), p.install(d, ...a)) : $(p) ? (i.add(p), p(d, ...a)) : process.env.NODE_ENV !== "production" && y(
          'A plugin must either be a function or an object with an "install" function.'
        ), d;
      },
      mixin(p) {
        return r.mixins.includes(p) ? process.env.NODE_ENV !== "production" && y(
          "Mixin has already been applied to target app" + (p.name ? `: ${p.name}` : "")
        ) : r.mixins.push(p), d;
      },
      component(p, a) {
        return process.env.NODE_ENV !== "production" && ro(p, r.config), a ? (process.env.NODE_ENV !== "production" && r.components[p] && y(`Component "${p}" has already been registered in target app.`), r.components[p] = a, d) : r.components[p];
      },
      directive(p, a) {
        return process.env.NODE_ENV !== "production" && tr(p), a ? (process.env.NODE_ENV !== "production" && r.directives[p] && y(`Directive "${p}" has already been registered in target app.`), r.directives[p] = a, d) : r.directives[p];
      },
      mount(p, a, g) {
        if (u)
          process.env.NODE_ENV !== "production" && y(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && p.__vue_app__ && y(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const D = d._ceVNode || ft(o, s);
          return D.appContext = r, g === !0 ? g = "svg" : g === !1 && (g = void 0), process.env.NODE_ENV !== "production" && (r.reload = () => {
            const M = Ze(D);
            M.el = null, e(M, p, g);
          }), e(D, p, g), u = !0, d._container = p, p.__vue_app__ = d, process.env.NODE_ENV !== "production" && (d._instance = D.component, Fi(d, rs)), To(D.component);
        }
      },
      onUnmount(p) {
        process.env.NODE_ENV !== "production" && typeof p != "function" && y(
          `Expected function as first argument to app.onUnmount(), but got ${typeof p}`
        ), c.push(p);
      },
      unmount() {
        u ? (Re(
          c,
          d._instance,
          16
        ), e(null, d._container), process.env.NODE_ENV !== "production" && (d._instance = null, ji(d)), delete d._container.__vue_app__) : process.env.NODE_ENV !== "production" && y("Cannot unmount an app that is not mounted.");
      },
      provide(p, a) {
        return process.env.NODE_ENV !== "production" && p in r.provides && (j(r.provides, p) ? y(
          `App already provides property with key "${String(p)}". It will be overwritten with the new value.`
        ) : y(
          `App already provides property with key "${String(p)}" inherited from its parent element. It will be overwritten with the new value.`
        )), r.provides[p] = a, d;
      },
      runWithContext(p) {
        const a = Et;
        Et = d;
        try {
          return p();
        } finally {
          Et = a;
        }
      }
    };
    return d;
  };
}
let Et = null;
function Ec(e, t) {
  if (!ee)
    process.env.NODE_ENV !== "production" && y("provide() can only be used inside setup().");
  else {
    let n = ee.provides;
    const o = ee.parent && ee.parent.provides;
    o === n && (n = ee.provides = Object.create(o)), n[e] = t;
  }
}
function on(e, t, n = !1) {
  const o = wr();
  if (o || Et) {
    let s = Et ? Et._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && $(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && y(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && y("inject() can only be used inside setup() or functional components.");
}
const fr = {}, ur = () => Object.create(fr), ar = (e) => Object.getPrototypeOf(e) === fr;
function Nc(e, t, n, o = !1) {
  const s = {}, r = ur();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), pr(e, t, s, r);
  for (const i in e.propsOptions[0])
    i in s || (s[i] = void 0);
  process.env.NODE_ENV !== "production" && hr(t || {}, s, e), n ? e.props = o ? s : _i(s) : e.type.props ? e.props = s : e.props = r, e.attrs = r;
}
function bc(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function yc(e, t, n, o) {
  const {
    props: s,
    attrs: r,
    vnode: { patchFlag: i }
  } = e, c = A(s), [u] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && bc(e)) && (o || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const p = e.vnode.dynamicProps;
      for (let a = 0; a < p.length; a++) {
        let g = p[a];
        if (Sn(e.emitsOptions, g))
          continue;
        const D = t[g];
        if (u)
          if (j(r, g))
            D !== r[g] && (r[g] = D, d = !0);
          else {
            const M = Ne(g);
            s[M] = to(
              u,
              c,
              M,
              D,
              e,
              !1
            );
          }
        else
          D !== r[g] && (r[g] = D, d = !0);
      }
    }
  } else {
    pr(e, t, s, r) && (d = !0);
    let p;
    for (const a in c)
      (!t || // for camelCase
      !j(t, a) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = ze(a)) === a || !j(t, p))) && (u ? n && // for camelCase
      (n[a] !== void 0 || // for kebab-case
      n[p] !== void 0) && (s[a] = to(
        u,
        c,
        a,
        void 0,
        e,
        !0
      )) : delete s[a]);
    if (r !== c)
      for (const a in r)
        (!t || !j(t, a)) && (delete r[a], d = !0);
  }
  d && Pe(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && hr(t || {}, s, e);
}
function pr(e, t, n, o) {
  const [s, r] = e.propsOptions;
  let i = !1, c;
  if (t)
    for (let u in t) {
      if ($t(u))
        continue;
      const d = t[u];
      let p;
      s && j(s, p = Ne(u)) ? !r || !r.includes(p) ? n[p] = d : (c || (c = {}))[p] = d : Sn(e.emitsOptions, u) || (!(u in o) || d !== o[u]) && (o[u] = d, i = !0);
    }
  if (r) {
    const u = A(n), d = c || B;
    for (let p = 0; p < r.length; p++) {
      const a = r[p];
      n[a] = to(
        s,
        u,
        a,
        d[a],
        e,
        !j(d, a)
      );
    }
  }
  return i;
}
function to(e, t, n, o, s, r) {
  const i = e[n];
  if (i != null) {
    const c = j(i, "default");
    if (c && o === void 0) {
      const u = i.default;
      if (i.type !== Function && !i.skipFactory && $(u)) {
        const { propsDefaults: d } = s;
        if (n in d)
          o = d[n];
        else {
          const p = Jt(s);
          o = d[n] = u.call(
            null,
            t
          ), p();
        }
      } else
        o = u;
      s.ce && s.ce._setProp(n, o);
    }
    i[
      0
      /* shouldCast */
    ] && (r && !c ? o = !1 : i[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === ze(n)) && (o = !0));
  }
  return o;
}
const Oc = /* @__PURE__ */ new WeakMap();
function dr(e, t, n = !1) {
  const o = n ? Oc : t.propsCache, s = o.get(e);
  if (s)
    return s;
  const r = e.props, i = {}, c = [];
  let u = !1;
  if (!$(e)) {
    const p = (a) => {
      u = !0;
      const [g, D] = dr(a, t, !0);
      X(i, g), D && c.push(...D);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!r && !u)
    return K(e) && o.set(e, mt), mt;
  if (T(r))
    for (let p = 0; p < r.length; p++) {
      process.env.NODE_ENV !== "production" && !q(r[p]) && y("props must be strings when using array syntax.", r[p]);
      const a = Ne(r[p]);
      Jo(a) && (i[a] = B);
    }
  else if (r) {
    process.env.NODE_ENV !== "production" && !K(r) && y("invalid props options", r);
    for (const p in r) {
      const a = Ne(p);
      if (Jo(a)) {
        const g = r[p], D = i[a] = T(g) || $(g) ? { type: g } : X({}, g), M = D.type;
        let V = !1, Z = !0;
        if (T(M))
          for (let G = 0; G < M.length; ++G) {
            const L = M[G], H = $(L) && L.name;
            if (H === "Boolean") {
              V = !0;
              break;
            } else H === "String" && (Z = !1);
          }
        else
          V = $(M) && M.name === "Boolean";
        D[
          0
          /* shouldCast */
        ] = V, D[
          1
          /* shouldCastTrue */
        ] = Z, (V || j(D, "default")) && c.push(a);
      }
    }
  }
  const d = [i, c];
  return K(e) && o.set(e, d), d;
}
function Jo(e) {
  return e[0] !== "$" && !$t(e) ? !0 : (process.env.NODE_ENV !== "production" && y(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Dc(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function hr(e, t, n) {
  const o = A(t), s = n.propsOptions[0], r = Object.keys(e).map((i) => Ne(i));
  for (const i in s) {
    let c = s[i];
    c != null && xc(
      i,
      o[i],
      c,
      process.env.NODE_ENV !== "production" ? Ae(o) : o,
      !r.includes(i)
    );
  }
}
function xc(e, t, n, o, s) {
  const { type: r, required: i, validator: c, skipCheck: u } = n;
  if (i && s) {
    y('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !u) {
      let d = !1;
      const p = T(r) ? r : [r], a = [];
      for (let g = 0; g < p.length && !d; g++) {
        const { valid: D, expectedType: M } = Vc(t, p[g]);
        a.push(M || ""), d = D;
      }
      if (!d) {
        y(Sc(e, t, a));
        return;
      }
    }
    c && !c(t, o) && y('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const wc = /* @__PURE__ */ We(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Vc(e, t) {
  let n;
  const o = Dc(t);
  if (o === "null")
    n = e === null;
  else if (wc(o)) {
    const s = typeof e;
    n = s === o.toLowerCase(), !n && s === "object" && (n = e instanceof t);
  } else o === "Object" ? n = K(e) : o === "Array" ? n = T(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Sc(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(On).join(" | ")}`;
  const s = n[0], r = fo(t), i = Yo(t, s), c = Yo(t, r);
  return n.length === 1 && zo(s) && !Cc(s, r) && (o += ` with value ${i}`), o += `, got ${r} `, zo(r) && (o += `with value ${c}.`), o;
}
function Yo(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function zo(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Cc(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const wo = (e) => e === "_" || e === "_ctx" || e === "$stable", Vo = (e) => T(e) ? e.map(ve) : [ve(e)], Tc = (e, t, n) => {
  if (t._n)
    return t;
  const o = ki((...s) => (process.env.NODE_ENV !== "production" && ee && !(n === null && de) && !(n && n.root !== ee.root) && y(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Vo(t(...s))), n);
  return o._c = !1, o;
}, gr = (e, t, n) => {
  const o = e._ctx;
  for (const s in e) {
    if (wo(s)) continue;
    const r = e[s];
    if ($(r))
      t[s] = Tc(s, r, o);
    else if (r != null) {
      process.env.NODE_ENV !== "production" && y(
        `Non-function value encountered for slot "${s}". Prefer function slots for better performance.`
      );
      const i = Vo(r);
      t[s] = () => i;
    }
  }
}, mr = (e, t) => {
  process.env.NODE_ENV !== "production" && !Do(e.vnode) && y(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Vo(t);
  e.slots.default = () => n;
}, no = (e, t, n) => {
  for (const o in t)
    (n || !wo(o)) && (e[o] = t[o]);
}, $c = (e, t, n) => {
  const o = e.slots = ur();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (no(o, t, n), n && un(o, "_", s, !0)) : gr(t, o);
  } else t && mr(e, t);
}, Mc = (e, t, n) => {
  const { vnode: o, slots: s } = e;
  let r = !0, i = B;
  if (o.shapeFlag & 32) {
    const c = t._;
    c ? process.env.NODE_ENV !== "production" && Ie ? (no(s, t, n), Pe(e, "set", "$slots")) : n && c === 1 ? r = !1 : no(s, t, n) : (r = !t.$stable, gr(t, s)), i = t;
  } else t && (mr(e, t), i = { default: 1 });
  if (r)
    for (const c in s)
      !wo(c) && i[c] == null && delete s[c];
};
let Vt, Le;
function dt(e, t) {
  e.appContext.config.performance && vn() && Le.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Wi(e, t, vn() ? Le.now() : Date.now());
}
function ht(e, t) {
  if (e.appContext.config.performance && vn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end", s = `<${Tn(e, e.type)}> ${t}`;
    Le.mark(o), Le.measure(s, n, o), Le.clearMeasures(s), Le.clearMarks(n), Le.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && Bi(e, t, vn() ? Le.now() : Date.now());
}
function vn() {
  return Vt !== void 0 || (typeof window < "u" && window.performance ? (Vt = !0, Le = window.performance) : Vt = !1), Vt;
}
function Pc() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const ae = Jc;
function Ac(e) {
  return Ic(e);
}
function Ic(e, t) {
  Pc();
  const n = Kt();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && bo(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: s,
    patchProp: r,
    createElement: i,
    createText: c,
    createComment: u,
    setText: d,
    setElementText: p,
    parentNode: a,
    nextSibling: g,
    setScopeId: D = Y,
    insertStaticContent: M
  } = e, V = (l, f, h, v = null, m = null, _ = null, O = void 0, b = null, N = process.env.NODE_ENV !== "production" && Ie ? !1 : !!f.dynamicChildren) => {
    if (l === f)
      return;
    l && !St(l, f) && (v = zt(l), Ge(l, m, _, !0), l = null), f.patchFlag === -2 && (N = !1, f.dynamicChildren = null);
    const { type: E, ref: C, shapeFlag: x } = f;
    switch (E) {
      case qt:
        Z(l, f, h, v);
        break;
      case ye:
        G(l, f, h, v);
        break;
      case rn:
        l == null ? L(f, h, v, O) : process.env.NODE_ENV !== "production" && H(l, f, h, O);
        break;
      case Me:
        Yt(
          l,
          f,
          h,
          v,
          m,
          _,
          O,
          b,
          N
        );
        break;
      default:
        x & 1 ? Q(
          l,
          f,
          h,
          v,
          m,
          _,
          O,
          b,
          N
        ) : x & 6 ? $o(
          l,
          f,
          h,
          v,
          m,
          _,
          O,
          b,
          N
        ) : x & 64 || x & 128 ? E.process(
          l,
          f,
          h,
          v,
          m,
          _,
          O,
          b,
          N,
          Ot
        ) : process.env.NODE_ENV !== "production" && y("Invalid VNode type:", E, `(${typeof E})`);
    }
    C != null && m ? At(C, l && l.ref, _, f || l, !f) : C == null && l && l.ref != null && At(l.ref, null, _, l, !0);
  }, Z = (l, f, h, v) => {
    if (l == null)
      o(
        f.el = c(f.children),
        h,
        v
      );
    else {
      const m = f.el = l.el;
      f.children !== l.children && d(m, f.children);
    }
  }, G = (l, f, h, v) => {
    l == null ? o(
      f.el = u(f.children || ""),
      h,
      v
    ) : f.el = l.el;
  }, L = (l, f, h, v) => {
    [l.el, l.anchor] = M(
      l.children,
      f,
      h,
      v,
      l.el,
      l.anchor
    );
  }, H = (l, f, h, v) => {
    if (f.children !== l.children) {
      const m = g(l.anchor);
      S(l), [f.el, f.anchor] = M(
        f.children,
        h,
        m,
        v
      );
    } else
      f.el = l.el, f.anchor = l.anchor;
  }, ue = ({ el: l, anchor: f }, h, v) => {
    let m;
    for (; l && l !== f; )
      m = g(l), o(l, h, v), l = m;
    o(f, h, v);
  }, S = ({ el: l, anchor: f }) => {
    let h;
    for (; l && l !== f; )
      h = g(l), s(l), l = h;
    s(f);
  }, Q = (l, f, h, v, m, _, O, b, N) => {
    f.type === "svg" ? O = "svg" : f.type === "math" && (O = "mathml"), l == null ? me(
      f,
      h,
      v,
      m,
      _,
      O,
      b,
      N
    ) : Fe(
      l,
      f,
      m,
      _,
      O,
      b,
      N
    );
  }, me = (l, f, h, v, m, _, O, b) => {
    let N, E;
    const { props: C, shapeFlag: x, transition: w, dirs: P } = l;
    if (N = l.el = i(
      l.type,
      _,
      C && C.is,
      C
    ), x & 8 ? p(N, l.children) : x & 16 && re(
      l.children,
      N,
      null,
      v,
      m,
      Un(l, _),
      O,
      b
    ), P && et(l, null, v, "created"), te(N, l, l.scopeId, O, v), C) {
      for (const k in C)
        k !== "value" && !$t(k) && r(N, k, null, C[k], _, v);
      "value" in C && r(N, "value", null, C.value, _), (E = C.onVnodeBeforeMount) && Te(E, v, l);
    }
    process.env.NODE_ENV !== "production" && (un(N, "__vnode", l, !0), un(N, "__vueParentComponent", v, !0)), P && et(l, null, v, "beforeMount");
    const F = Rc(m, w);
    F && w.beforeEnter(N), o(N, f, h), ((E = C && C.onVnodeMounted) || F || P) && ae(() => {
      E && Te(E, v, l), F && w.enter(N), P && et(l, null, v, "mounted");
    }, m);
  }, te = (l, f, h, v, m) => {
    if (h && D(l, h), v)
      for (let _ = 0; _ < v.length; _++)
        D(l, v[_]);
    if (m) {
      let _ = m.subTree;
      if (process.env.NODE_ENV !== "production" && _.patchFlag > 0 && _.patchFlag & 2048 && (_ = So(_.children) || _), f === _ || yr(_.type) && (_.ssContent === f || _.ssFallback === f)) {
        const O = m.vnode;
        te(
          l,
          O,
          O.scopeId,
          O.slotScopeIds,
          m.parent
        );
      }
    }
  }, re = (l, f, h, v, m, _, O, b, N = 0) => {
    for (let E = N; E < l.length; E++) {
      const C = l[E] = b ? Je(l[E]) : ve(l[E]);
      V(
        null,
        C,
        f,
        h,
        v,
        m,
        _,
        O,
        b
      );
    }
  }, Fe = (l, f, h, v, m, _, O) => {
    const b = f.el = l.el;
    process.env.NODE_ENV !== "production" && (b.__vnode = f);
    let { patchFlag: N, dynamicChildren: E, dirs: C } = f;
    N |= l.patchFlag & 16;
    const x = l.props || B, w = f.props || B;
    let P;
    if (h && tt(h, !1), (P = w.onVnodeBeforeUpdate) && Te(P, h, f, l), C && et(f, l, h, "beforeUpdate"), h && tt(h, !0), process.env.NODE_ENV !== "production" && Ie && (N = 0, O = !1, E = null), (x.innerHTML && w.innerHTML == null || x.textContent && w.textContent == null) && p(b, ""), E ? (Ke(
      l.dynamicChildren,
      E,
      b,
      h,
      v,
      Un(f, m),
      _
    ), process.env.NODE_ENV !== "production" && sn(l, f)) : O || we(
      l,
      f,
      b,
      null,
      h,
      v,
      Un(f, m),
      _,
      !1
    ), N > 0) {
      if (N & 16)
        _e(b, x, w, h, m);
      else if (N & 2 && x.class !== w.class && r(b, "class", null, w.class, m), N & 4 && r(b, "style", x.style, w.style, m), N & 8) {
        const F = f.dynamicProps;
        for (let k = 0; k < F.length; k++) {
          const W = F[k], ce = x[W], le = w[W];
          (le !== ce || W === "value") && r(b, W, ce, le, m, h);
        }
      }
      N & 1 && l.children !== f.children && p(b, f.children);
    } else !O && E == null && _e(b, x, w, h, m);
    ((P = w.onVnodeUpdated) || C) && ae(() => {
      P && Te(P, h, f, l), C && et(f, l, h, "updated");
    }, v);
  }, Ke = (l, f, h, v, m, _, O) => {
    for (let b = 0; b < f.length; b++) {
      const N = l[b], E = f[b], C = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        N.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (N.type === Me || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !St(N, E) || // - In the case of a component, it could contain anything.
        N.shapeFlag & 198) ? a(N.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      V(
        N,
        E,
        C,
        null,
        v,
        m,
        _,
        O,
        !0
      );
    }
  }, _e = (l, f, h, v, m) => {
    if (f !== h) {
      if (f !== B)
        for (const _ in f)
          !$t(_) && !(_ in h) && r(
            l,
            _,
            f[_],
            null,
            m,
            v
          );
      for (const _ in h) {
        if ($t(_)) continue;
        const O = h[_], b = f[_];
        O !== b && _ !== "value" && r(l, _, b, O, m, v);
      }
      "value" in h && r(l, "value", f.value, h.value, m);
    }
  }, Yt = (l, f, h, v, m, _, O, b, N) => {
    const E = f.el = l ? l.el : c(""), C = f.anchor = l ? l.anchor : c("");
    let { patchFlag: x, dynamicChildren: w, slotScopeIds: P } = f;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Ie || x & 2048) && (x = 0, N = !1, w = null), P && (b = b ? b.concat(P) : P), l == null ? (o(E, h, v), o(C, h, v), re(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      h,
      C,
      m,
      _,
      O,
      b,
      N
    )) : x > 0 && x & 64 && w && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (Ke(
      l.dynamicChildren,
      w,
      h,
      m,
      _,
      O,
      b
    ), process.env.NODE_ENV !== "production" ? sn(l, f) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (f.key != null || m && f === m.subTree) && sn(
        l,
        f,
        !0
        /* shallow */
      )
    )) : we(
      l,
      f,
      h,
      C,
      m,
      _,
      O,
      b,
      N
    );
  }, $o = (l, f, h, v, m, _, O, b, N) => {
    f.slotScopeIds = b, l == null ? f.shapeFlag & 512 ? m.ctx.activate(
      f,
      h,
      v,
      O,
      N
    ) : ke(
      f,
      h,
      v,
      m,
      _,
      O,
      N
    ) : ie(l, f, N);
  }, ke = (l, f, h, v, m, _, O) => {
    const b = l.component = rl(
      l,
      v,
      m
    );
    if (process.env.NODE_ENV !== "production" && b.type.__hmrId && Pi(b), process.env.NODE_ENV !== "production" && (en(l), dt(b, "mount")), Do(l) && (b.ctx.renderer = Ot), process.env.NODE_ENV !== "production" && dt(b, "init"), cl(b, !1, O), process.env.NODE_ENV !== "production" && ht(b, "init"), process.env.NODE_ENV !== "production" && Ie && (l.el = null), b.asyncDep) {
      if (m && m.registerDep(b, R, O), !l.el) {
        const N = b.subTree = ft(ye);
        G(null, N, f, h), l.placeholder = N.el;
      }
    } else
      R(
        b,
        l,
        f,
        h,
        m,
        _,
        O
      );
    process.env.NODE_ENV !== "production" && (tn(), ht(b, "mount"));
  }, ie = (l, f, h) => {
    const v = f.component = l.component;
    if (Gc(l, f, h))
      if (v.asyncDep && !v.asyncResolved) {
        process.env.NODE_ENV !== "production" && en(f), I(v, f, h), process.env.NODE_ENV !== "production" && tn();
        return;
      } else
        v.next = f, v.update();
    else
      f.el = l.el, v.vnode = f;
  }, R = (l, f, h, v, m, _, O) => {
    const b = () => {
      if (l.isMounted) {
        let { next: x, bu: w, u: P, parent: F, vnode: k } = l;
        {
          const Se = _r(l);
          if (Se) {
            x && (x.el = k.el, I(l, x, O)), Se.asyncDep.then(() => {
              l.isUnmounted || b();
            });
            return;
          }
        }
        let W = x, ce;
        process.env.NODE_ENV !== "production" && en(x || l.vnode), tt(l, !1), x ? (x.el = k.el, I(l, x, O)) : x = k, w && xt(w), (ce = x.props && x.props.onVnodeBeforeUpdate) && Te(ce, F, x, k), tt(l, !0), process.env.NODE_ENV !== "production" && dt(l, "render");
        const le = Zo(l);
        process.env.NODE_ENV !== "production" && ht(l, "render");
        const Ve = l.subTree;
        l.subTree = le, process.env.NODE_ENV !== "production" && dt(l, "patch"), V(
          Ve,
          le,
          // parent may have changed if it's in a teleport
          a(Ve.el),
          // anchor may have changed if it's in a fragment
          zt(Ve),
          l,
          m,
          _
        ), process.env.NODE_ENV !== "production" && ht(l, "patch"), x.el = le.el, W === null && qc(l, le.el), P && ae(P, m), (ce = x.props && x.props.onVnodeUpdated) && ae(
          () => Te(ce, F, x, k),
          m
        ), process.env.NODE_ENV !== "production" && Zs(l), process.env.NODE_ENV !== "production" && tn();
      } else {
        let x;
        const { el: w, props: P } = f, { bm: F, m: k, parent: W, root: ce, type: le } = l, Ve = It(f);
        tt(l, !1), F && xt(F), !Ve && (x = P && P.onVnodeBeforeMount) && Te(x, W, f), tt(l, !0);
        {
          ce.ce && // @ts-expect-error _def is private
          ce.ce._def.shadowRoot !== !1 && ce.ce._injectChildStyle(le), process.env.NODE_ENV !== "production" && dt(l, "render");
          const Se = l.subTree = Zo(l);
          process.env.NODE_ENV !== "production" && ht(l, "render"), process.env.NODE_ENV !== "production" && dt(l, "patch"), V(
            null,
            Se,
            h,
            v,
            l,
            m,
            _
          ), process.env.NODE_ENV !== "production" && ht(l, "patch"), f.el = Se.el;
        }
        if (k && ae(k, m), !Ve && (x = P && P.onVnodeMounted)) {
          const Se = f;
          ae(
            () => Te(x, W, Se),
            m
          );
        }
        (f.shapeFlag & 256 || W && It(W.vnode) && W.vnode.shapeFlag & 256) && l.a && ae(l.a, m), l.isMounted = !0, process.env.NODE_ENV !== "production" && Hi(l), f = h = v = null;
      }
    };
    l.scope.on();
    const N = l.effect = new Vs(b);
    l.scope.off();
    const E = l.update = N.run.bind(N), C = l.job = N.runIfDirty.bind(N);
    C.i = l, C.id = l.uid, N.scheduler = () => wn(C), tt(l, !0), process.env.NODE_ENV !== "production" && (N.onTrack = l.rtc ? (x) => xt(l.rtc, x) : void 0, N.onTrigger = l.rtg ? (x) => xt(l.rtg, x) : void 0), E();
  }, I = (l, f, h) => {
    f.component = l;
    const v = l.vnode.props;
    l.vnode = f, l.next = null, yc(l, f.props, v, h), Mc(l, f.children, h), De(), Lo(l), xe();
  }, we = (l, f, h, v, m, _, O, b, N = !1) => {
    const E = l && l.children, C = l ? l.shapeFlag : 0, x = f.children, { patchFlag: w, shapeFlag: P } = f;
    if (w > 0) {
      if (w & 128) {
        bt(
          E,
          x,
          h,
          v,
          m,
          _,
          O,
          b,
          N
        );
        return;
      } else if (w & 256) {
        $n(
          E,
          x,
          h,
          v,
          m,
          _,
          O,
          b,
          N
        );
        return;
      }
    }
    P & 8 ? (C & 16 && yt(E, m, _), x !== E && p(h, x)) : C & 16 ? P & 16 ? bt(
      E,
      x,
      h,
      v,
      m,
      _,
      O,
      b,
      N
    ) : yt(E, m, _, !0) : (C & 8 && p(h, ""), P & 16 && re(
      x,
      h,
      v,
      m,
      _,
      O,
      b,
      N
    ));
  }, $n = (l, f, h, v, m, _, O, b, N) => {
    l = l || mt, f = f || mt;
    const E = l.length, C = f.length, x = Math.min(E, C);
    let w;
    for (w = 0; w < x; w++) {
      const P = f[w] = N ? Je(f[w]) : ve(f[w]);
      V(
        l[w],
        P,
        h,
        null,
        m,
        _,
        O,
        b,
        N
      );
    }
    E > C ? yt(
      l,
      m,
      _,
      !0,
      !1,
      x
    ) : re(
      f,
      h,
      v,
      m,
      _,
      O,
      b,
      N,
      x
    );
  }, bt = (l, f, h, v, m, _, O, b, N) => {
    let E = 0;
    const C = f.length;
    let x = l.length - 1, w = C - 1;
    for (; E <= x && E <= w; ) {
      const P = l[E], F = f[E] = N ? Je(f[E]) : ve(f[E]);
      if (St(P, F))
        V(
          P,
          F,
          h,
          null,
          m,
          _,
          O,
          b,
          N
        );
      else
        break;
      E++;
    }
    for (; E <= x && E <= w; ) {
      const P = l[x], F = f[w] = N ? Je(f[w]) : ve(f[w]);
      if (St(P, F))
        V(
          P,
          F,
          h,
          null,
          m,
          _,
          O,
          b,
          N
        );
      else
        break;
      x--, w--;
    }
    if (E > x) {
      if (E <= w) {
        const P = w + 1, F = P < C ? f[P].el : v;
        for (; E <= w; )
          V(
            null,
            f[E] = N ? Je(f[E]) : ve(f[E]),
            h,
            F,
            m,
            _,
            O,
            b,
            N
          ), E++;
      }
    } else if (E > w)
      for (; E <= x; )
        Ge(l[E], m, _, !0), E++;
    else {
      const P = E, F = E, k = /* @__PURE__ */ new Map();
      for (E = F; E <= w; E++) {
        const ne = f[E] = N ? Je(f[E]) : ve(f[E]);
        ne.key != null && (process.env.NODE_ENV !== "production" && k.has(ne.key) && y(
          "Duplicate keys found during update:",
          JSON.stringify(ne.key),
          "Make sure keys are unique."
        ), k.set(ne.key, E));
      }
      let W, ce = 0;
      const le = w - F + 1;
      let Ve = !1, Se = 0;
      const Dt = new Array(le);
      for (E = 0; E < le; E++) Dt[E] = 0;
      for (E = P; E <= x; E++) {
        const ne = l[E];
        if (ce >= le) {
          Ge(ne, m, _, !0);
          continue;
        }
        let Ce;
        if (ne.key != null)
          Ce = k.get(ne.key);
        else
          for (W = F; W <= w; W++)
            if (Dt[W - F] === 0 && St(ne, f[W])) {
              Ce = W;
              break;
            }
        Ce === void 0 ? Ge(ne, m, _, !0) : (Dt[Ce - F] = E + 1, Ce >= Se ? Se = Ce : Ve = !0, V(
          ne,
          f[Ce],
          h,
          null,
          m,
          _,
          O,
          b,
          N
        ), ce++);
      }
      const Po = Ve ? Fc(Dt) : mt;
      for (W = Po.length - 1, E = le - 1; E >= 0; E--) {
        const ne = F + E, Ce = f[ne], Ao = f[ne + 1], Io = ne + 1 < C ? (
          // #13559, fallback to el placeholder for unresolved async component
          Ao.el || Ao.placeholder
        ) : v;
        Dt[E] === 0 ? V(
          null,
          Ce,
          h,
          Io,
          m,
          _,
          O,
          b,
          N
        ) : Ve && (W < 0 || E !== Po[W] ? at(Ce, h, Io, 2) : W--);
      }
    }
  }, at = (l, f, h, v, m = null) => {
    const { el: _, type: O, transition: b, children: N, shapeFlag: E } = l;
    if (E & 6) {
      at(l.component.subTree, f, h, v);
      return;
    }
    if (E & 128) {
      l.suspense.move(f, h, v);
      return;
    }
    if (E & 64) {
      O.move(l, f, h, Ot);
      return;
    }
    if (O === Me) {
      o(_, f, h);
      for (let x = 0; x < N.length; x++)
        at(N[x], f, h, v);
      o(l.anchor, f, h);
      return;
    }
    if (O === rn) {
      ue(l, f, h);
      return;
    }
    if (v !== 2 && E & 1 && b)
      if (v === 0)
        b.beforeEnter(_), o(_, f, h), ae(() => b.enter(_), m);
      else {
        const { leave: x, delayLeave: w, afterLeave: P } = b, F = () => {
          l.ctx.isUnmounted ? s(_) : o(_, f, h);
        }, k = () => {
          _._isLeaving && _[Ji](
            !0
            /* cancelled */
          ), x(_, () => {
            F(), P && P();
          });
        };
        w ? w(_, F, k) : k();
      }
    else
      o(_, f, h);
  }, Ge = (l, f, h, v = !1, m = !1) => {
    const {
      type: _,
      props: O,
      ref: b,
      children: N,
      dynamicChildren: E,
      shapeFlag: C,
      patchFlag: x,
      dirs: w,
      cacheIndex: P
    } = l;
    if (x === -2 && (m = !1), b != null && (De(), At(b, null, h, l, !0), xe()), P != null && (f.renderCache[P] = void 0), C & 256) {
      f.ctx.deactivate(l);
      return;
    }
    const F = C & 1 && w, k = !It(l);
    let W;
    if (k && (W = O && O.onVnodeBeforeUnmount) && Te(W, f, l), C & 6)
      Pr(l.component, h, v);
    else {
      if (C & 128) {
        l.suspense.unmount(h, v);
        return;
      }
      F && et(l, null, f, "beforeUnmount"), C & 64 ? l.type.remove(
        l,
        f,
        h,
        Ot,
        v
      ) : E && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !E.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== Me || x > 0 && x & 64) ? yt(
        E,
        f,
        h,
        !1,
        !0
      ) : (_ === Me && x & 384 || !m && C & 16) && yt(N, f, h), v && Mn(l);
    }
    (k && (W = O && O.onVnodeUnmounted) || F) && ae(() => {
      W && Te(W, f, l), F && et(l, null, f, "unmounted");
    }, h);
  }, Mn = (l) => {
    const { type: f, el: h, anchor: v, transition: m } = l;
    if (f === Me) {
      process.env.NODE_ENV !== "production" && l.patchFlag > 0 && l.patchFlag & 2048 && m && !m.persisted ? l.children.forEach((O) => {
        O.type === ye ? s(O.el) : Mn(O);
      }) : Mr(h, v);
      return;
    }
    if (f === rn) {
      S(l);
      return;
    }
    const _ = () => {
      s(h), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (l.shapeFlag & 1 && m && !m.persisted) {
      const { leave: O, delayLeave: b } = m, N = () => O(h, _);
      b ? b(l.el, _, N) : N();
    } else
      _();
  }, Mr = (l, f) => {
    let h;
    for (; l !== f; )
      h = g(l), s(l), l = h;
    s(f);
  }, Pr = (l, f, h) => {
    process.env.NODE_ENV !== "production" && l.type.__hmrId && Ai(l);
    const { bum: v, scope: m, job: _, subTree: O, um: b, m: N, a: E } = l;
    Xo(N), Xo(E), v && xt(v), m.stop(), _ && (_.flags |= 8, Ge(O, l, f, h)), b && ae(b, f), ae(() => {
      l.isUnmounted = !0;
    }, f), process.env.NODE_ENV !== "production" && Ui(l);
  }, yt = (l, f, h, v = !1, m = !1, _ = 0) => {
    for (let O = _; O < l.length; O++)
      Ge(l[O], f, h, v, m);
  }, zt = (l) => {
    if (l.shapeFlag & 6)
      return zt(l.component.subTree);
    if (l.shapeFlag & 128)
      return l.suspense.next();
    const f = g(l.anchor || l.el), h = f && f[Gi];
    return h ? g(h) : f;
  };
  let Pn = !1;
  const Mo = (l, f, h) => {
    l == null ? f._vnode && Ge(f._vnode, null, null, !0) : V(
      f._vnode || null,
      l,
      f,
      null,
      null,
      null,
      h
    ), f._vnode = l, Pn || (Pn = !0, Lo(), Ys(), Pn = !1);
  }, Ot = {
    p: V,
    um: Ge,
    m: at,
    r: Mn,
    mt: ke,
    mc: re,
    pc: we,
    pbc: Ke,
    n: zt,
    o: e
  };
  return {
    render: Mo,
    hydrate: void 0,
    createApp: vc(Mo)
  };
}
function Un({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function tt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Rc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function sn(e, t, n = !1) {
  const o = e.children, s = t.children;
  if (T(o) && T(s))
    for (let r = 0; r < o.length; r++) {
      const i = o[r];
      let c = s[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = s[r] = Je(s[r]), c.el = i.el), !n && c.patchFlag !== -2 && sn(i, c)), c.type === qt && // avoid cached text nodes retaining detached dom nodes
      c.patchFlag !== -1 && (c.el = i.el), c.type === ye && !c.el && (c.el = i.el), process.env.NODE_ENV !== "production" && c.el && (c.el.__vnode = c);
    }
}
function Fc(e) {
  const t = e.slice(), n = [0];
  let o, s, r, i, c;
  const u = e.length;
  for (o = 0; o < u; o++) {
    const d = e[o];
    if (d !== 0) {
      if (s = n[n.length - 1], e[s] < d) {
        t[o] = s, n.push(o);
        continue;
      }
      for (r = 0, i = n.length - 1; r < i; )
        c = r + i >> 1, e[n[c]] < d ? r = c + 1 : i = c;
      d < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), n[r] = o);
    }
  }
  for (r = n.length, i = n[r - 1]; r-- > 0; )
    n[r] = i, i = t[i];
  return n;
}
function _r(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : _r(t);
}
function Xo(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const jc = Symbol.for("v-scx"), Hc = () => {
  {
    const e = on(jc);
    return e || process.env.NODE_ENV !== "production" && y(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Wn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !$(t) && y(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), vr(e, t, n);
}
function vr(e, t, n = B) {
  const { immediate: o, deep: s, flush: r, once: i } = n;
  process.env.NODE_ENV !== "production" && !t && (o !== void 0 && y(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && y(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && y(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = X({}, n);
  process.env.NODE_ENV !== "production" && (c.onWarn = y);
  const u = t && o || !t && r !== "post";
  let d;
  if (Wt) {
    if (r === "sync") {
      const D = Hc();
      d = D.__watcherHandles || (D.__watcherHandles = []);
    } else if (!u) {
      const D = () => {
      };
      return D.stop = Y, D.resume = Y, D.pause = Y, D;
    }
  }
  const p = ee;
  c.call = (D, M, V) => Re(D, p, M, V);
  let a = !1;
  r === "post" ? c.scheduler = (D) => {
    ae(D, p && p.suspense);
  } : r !== "sync" && (a = !0, c.scheduler = (D, M) => {
    M ? D() : wn(D);
  }), c.augmentJob = (D) => {
    t && (D.flags |= 4), a && (D.flags |= 2, p && (D.id = p.uid, D.i = p));
  };
  const g = Di(e, t, c);
  return Wt && (d ? d.push(g) : u && g()), g;
}
function Lc(e, t, n) {
  const o = this.proxy, s = q(e) ? e.includes(".") ? Er(o, e) : () => o[e] : e.bind(o, o);
  let r;
  $(t) ? r = t : (r = t.handler, n = t);
  const i = Jt(this), c = vr(s, r.bind(o), n);
  return i(), c;
}
function Er(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
const Uc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ne(t)}Modifiers`] || e[`${ze(t)}Modifiers`];
function Wc(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || B;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: p,
      propsOptions: [a]
    } = e;
    if (p)
      if (!(t in p))
        (!a || !(nt(Ne(t)) in a)) && y(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${nt(Ne(t))}" prop.`
        );
      else {
        const g = p[t];
        $(g) && (g(...n) || y(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let s = n;
  const r = t.startsWith("update:"), i = r && Uc(o, t.slice(7));
  if (i && (i.trim && (s = n.map((p) => q(p) ? p.trim() : p)), i.number && (s = n.map(jr))), process.env.NODE_ENV !== "production" && Ki(e, t, s), process.env.NODE_ENV !== "production") {
    const p = t.toLowerCase();
    p !== t && o[nt(p)] && y(
      `Event "${p}" is emitted in component ${Tn(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${ze(
        t
      )}" instead of "${t}".`
    );
  }
  let c, u = o[c = nt(t)] || // also try camelCase event handler (#2249)
  o[c = nt(Ne(t))];
  !u && r && (u = o[c = nt(ze(t))]), u && Re(
    u,
    e,
    6,
    s
  );
  const d = o[c + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, Re(
      d,
      e,
      6,
      s
    );
  }
}
const Bc = /* @__PURE__ */ new WeakMap();
function Nr(e, t, n = !1) {
  const o = n ? Bc : t.emitsCache, s = o.get(e);
  if (s !== void 0)
    return s;
  const r = e.emits;
  let i = {}, c = !1;
  if (!$(e)) {
    const u = (d) => {
      const p = Nr(d, t, !0);
      p && (c = !0, X(i, p));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !r && !c ? (K(e) && o.set(e, null), null) : (T(r) ? r.forEach((u) => i[u] = null) : X(i, r), K(e) && o.set(e, i), i);
}
function Sn(e, t) {
  return !e || !Bt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), j(e, t[0].toLowerCase() + t.slice(1)) || j(e, ze(t)) || j(e, t));
}
let oo = !1;
function En() {
  oo = !0;
}
function Zo(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: s,
    propsOptions: [r],
    slots: i,
    attrs: c,
    emit: u,
    render: d,
    renderCache: p,
    props: a,
    data: g,
    setupState: D,
    ctx: M,
    inheritAttrs: V
  } = e, Z = gn(e);
  let G, L;
  process.env.NODE_ENV !== "production" && (oo = !1);
  try {
    if (n.shapeFlag & 4) {
      const S = s || o, Q = process.env.NODE_ENV !== "production" && D.__isScriptSetup ? new Proxy(S, {
        get(me, te, re) {
          return y(
            `Property '${String(
              te
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(me, te, re);
        }
      }) : S;
      G = ve(
        d.call(
          Q,
          S,
          p,
          process.env.NODE_ENV !== "production" ? Ae(a) : a,
          D,
          g,
          M
        )
      ), L = c;
    } else {
      const S = t;
      process.env.NODE_ENV !== "production" && c === a && En(), G = ve(
        S.length > 1 ? S(
          process.env.NODE_ENV !== "production" ? Ae(a) : a,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return En(), Ae(c);
            },
            slots: i,
            emit: u
          } : { attrs: c, slots: i, emit: u }
        ) : S(
          process.env.NODE_ENV !== "production" ? Ae(a) : a,
          null
        )
      ), L = t.props ? c : Kc(c);
    }
  } catch (S) {
    Rt.length = 0, kt(S, e, 1), G = ft(ye);
  }
  let H = G, ue;
  if (process.env.NODE_ENV !== "production" && G.patchFlag > 0 && G.patchFlag & 2048 && ([H, ue] = br(G)), L && V !== !1) {
    const S = Object.keys(L), { shapeFlag: Q } = H;
    if (S.length) {
      if (Q & 7)
        r && S.some(fn) && (L = kc(
          L,
          r
        )), H = Ze(H, L, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !oo && H.type !== ye) {
        const me = Object.keys(c), te = [], re = [];
        for (let Fe = 0, Ke = me.length; Fe < Ke; Fe++) {
          const _e = me[Fe];
          Bt(_e) ? fn(_e) || te.push(_e[2].toLowerCase() + _e.slice(3)) : re.push(_e);
        }
        re.length && y(
          `Extraneous non-props attributes (${re.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), te.length && y(
          `Extraneous non-emits event listeners (${te.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Qo(H) && y(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), H = Ze(H, null, !1, !0), H.dirs = H.dirs ? H.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Qo(H) && y(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Oo(H, n.transition)), process.env.NODE_ENV !== "production" && ue ? ue(H) : G = H, gn(Z), G;
}
const br = (e) => {
  const t = e.children, n = e.dynamicChildren, o = So(t, !1);
  if (o) {
    if (process.env.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return br(o);
  } else return [e, void 0];
  const s = t.indexOf(o), r = n ? n.indexOf(o) : -1, i = (c) => {
    t[s] = c, n && (r > -1 ? n[r] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [ve(o), i];
};
function So(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (Cn(s)) {
      if (s.type !== ye || s.children === "v-if") {
        if (n)
          return;
        if (n = s, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return So(n.children);
      }
    } else
      return;
  }
  return n;
}
const Kc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Bt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, kc = (e, t) => {
  const n = {};
  for (const o in e)
    (!fn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Qo = (e) => e.shapeFlag & 7 || e.type === ye;
function Gc(e, t, n) {
  const { props: o, children: s, component: r } = e, { props: i, children: c, patchFlag: u } = t, d = r.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (s || c) && Ie || t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return o ? es(o, i, d) : !!i;
    if (u & 8) {
      const p = t.dynamicProps;
      for (let a = 0; a < p.length; a++) {
        const g = p[a];
        if (i[g] !== o[g] && !Sn(d, g))
          return !0;
      }
    }
  } else
    return (s || c) && (!c || !c.$stable) ? !0 : o === i ? !1 : o ? i ? es(o, i, d) : !0 : !!i;
  return !1;
}
function es(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < o.length; s++) {
    const r = o[s];
    if (t[r] !== e[r] && !Sn(n, r))
      return !0;
  }
  return !1;
}
function qc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const yr = (e) => e.__isSuspense;
function Jc(e, t) {
  t && t.pendingBranch ? T(e) ? t.effects.push(...e) : t.effects.push(e) : Js(e);
}
const Me = Symbol.for("v-fgt"), qt = Symbol.for("v-txt"), ye = Symbol.for("v-cmt"), rn = Symbol.for("v-stc"), Rt = [];
let he = null;
function Yc(e = !1) {
  Rt.push(he = e ? null : []);
}
function zc() {
  Rt.pop(), he = Rt[Rt.length - 1] || null;
}
let Ut = 1;
function ts(e, t = !1) {
  Ut += e, e < 0 && he && t && (he.hasOnce = !0);
}
function Xc(e) {
  return e.dynamicChildren = Ut > 0 ? he || mt : null, zc(), Ut > 0 && he && he.push(e), e;
}
function Zc(e, t, n, o, s, r) {
  return Xc(
    Ft(
      e,
      t,
      n,
      o,
      s,
      r,
      !0
    )
  );
}
function Cn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function St(e, t) {
  if (process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = nn.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const Qc = (...e) => Dr(
  ...e
), Or = ({ key: e }) => e ?? null, cn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? q(e) || z(e) || $(e) ? { i: de, r: e, k: t, f: !!n } : e : null);
function Ft(e, t = null, n = null, o = 0, s = null, r = e === Me ? 0 : 1, i = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Or(t),
    ref: t && cn(t),
    scopeId: er,
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
    shapeFlag: r,
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: de
  };
  return c ? (Co(u, n), r & 128 && e.normalize(u)) : n && (u.shapeFlag |= q(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && y("VNode created with invalid key (NaN). VNode type:", u.type), Ut > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  he && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && he.push(u), u;
}
const ft = process.env.NODE_ENV !== "production" ? Qc : Dr;
function Dr(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === cc) && (process.env.NODE_ENV !== "production" && !e && y(`Invalid vnode type when creating vnode: ${e}.`), e = ye), Cn(e)) {
    const c = Ze(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Co(c, n), Ut > 0 && !r && he && (c.shapeFlag & 6 ? he[he.indexOf(e)] = c : he.push(c)), c.patchFlag = -2, c;
  }
  if (Tr(e) && (e = e.__vccOpts), t) {
    t = el(t);
    let { class: c, style: u } = t;
    c && !q(c) && (t.class = po(c)), K(u) && (an(u) && !T(u) && (u = X({}, u)), t.style = ao(u));
  }
  const i = q(e) ? 1 : yr(e) ? 128 : qi(e) ? 64 : K(e) ? 4 : $(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && an(e) && (e = A(e), y(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Ft(
    e,
    t,
    n,
    o,
    s,
    i,
    r,
    !0
  );
}
function el(e) {
  return e ? an(e) || ar(e) ? X({}, e) : e : null;
}
function Ze(e, t, n = !1, o = !1) {
  const { props: s, ref: r, patchFlag: i, children: c, transition: u } = e, d = t ? nl(s || {}, t) : s, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Or(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? T(r) ? r.concat(cn(t)) : [r, cn(t)] : cn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && T(c) ? c.map(xr) : c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Me ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && Ze(e.ssContent),
    ssFallback: e.ssFallback && Ze(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && o && Oo(
    p,
    u.clone(p)
  ), p;
}
function xr(e) {
  const t = Ze(e);
  return T(e.children) && (t.children = e.children.map(xr)), t;
}
function tl(e = " ", t = 0) {
  return ft(qt, null, e, t);
}
function ve(e) {
  return e == null || typeof e == "boolean" ? ft(ye) : T(e) ? ft(
    Me,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Cn(e) ? Je(e) : ft(qt, null, String(e));
}
function Je(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ze(e);
}
function Co(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (T(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Co(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !ar(t) ? t._ctx = de : s === 3 && de && (de.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else $(t) ? (t = { default: t, _ctx: de }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [tl(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function nl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = po([t.class, o.class]));
      else if (s === "style")
        t.style = ao([t.style, o.style]);
      else if (Bt(s)) {
        const r = t[s], i = o[s];
        i && r !== i && !(T(r) && r.includes(i)) && (t[s] = r ? [].concat(r, i) : i);
      } else s !== "" && (t[s] = o[s]);
  }
  return t;
}
function Te(e, t, n, o = null) {
  Re(e, t, 7, [
    n,
    o
  ]);
}
const ol = lr();
let sl = 0;
function rl(e, t, n) {
  const o = e.type, s = (t ? t.appContext : e.appContext) || ol, r = {
    uid: sl++,
    vnode: e,
    type: o,
    parent: t,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Xr(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: dr(o, s),
    emitsOptions: Nr(o, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: B,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: B,
    data: B,
    props: B,
    attrs: B,
    slots: B,
    refs: B,
    setupState: B,
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
  return process.env.NODE_ENV !== "production" ? r.ctx = lc(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Wc.bind(null, r), e.ce && e.ce(r), r;
}
let ee = null;
const wr = () => ee || de;
let Nn, so;
{
  const e = Kt(), t = (n, o) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(o), (r) => {
      s.length > 1 ? s.forEach((i) => i(r)) : s[0](r);
    };
  };
  Nn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ee = n
  ), so = t(
    "__VUE_SSR_SETTERS__",
    (n) => Wt = n
  );
}
const Jt = (e) => {
  const t = ee;
  return Nn(e), e.scope.on(), () => {
    e.scope.off(), Nn(t);
  };
}, ns = () => {
  ee && ee.scope.off(), Nn(null);
}, il = /* @__PURE__ */ We("slot,component");
function ro(e, { isNativeTag: t }) {
  (il(e) || t(e)) && y(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Vr(e) {
  return e.vnode.shapeFlag & 4;
}
let Wt = !1;
function cl(e, t = !1, n = !1) {
  t && so(t);
  const { props: o, children: s } = e.vnode, r = Vr(e);
  Nc(e, o, r, t), $c(e, s, n || t);
  const i = r ? ll(e, t) : void 0;
  return t && so(!1), i;
}
function ll(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && ro(o.name, e.appContext.config), o.components) {
      const r = Object.keys(o.components);
      for (let i = 0; i < r.length; i++)
        ro(r[i], e.appContext.config);
    }
    if (o.directives) {
      const r = Object.keys(o.directives);
      for (let i = 0; i < r.length; i++)
        tr(r[i]);
    }
    o.compilerOptions && fl() && y(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, rr), process.env.NODE_ENV !== "production" && fc(e);
  const { setup: s } = o;
  if (s) {
    De();
    const r = e.setupContext = s.length > 1 ? al(e) : null, i = Jt(e), c = Nt(
      s,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? Ae(e.props) : e.props,
        r
      ]
    ), u = lo(c);
    if (xe(), i(), (u || e.sp) && !It(e) && nr(e), u) {
      if (c.then(ns, ns), t)
        return c.then((d) => {
          os(e, d, t);
        }).catch((d) => {
          kt(d, e, 0);
        });
      if (e.asyncDep = c, process.env.NODE_ENV !== "production" && !e.suspense) {
        const d = (n = o.name) != null ? n : "Anonymous";
        y(
          `Component <${d}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      os(e, c, t);
  } else
    Sr(e, t);
}
function os(e, t, n) {
  $(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : K(t) ? (process.env.NODE_ENV !== "production" && Cn(t) && y(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Ks(t), process.env.NODE_ENV !== "production" && uc(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && y(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Sr(e, n);
}
const fl = () => !0;
function Sr(e, t, n) {
  const o = e.type;
  e.render || (e.render = o.render || Y);
  {
    const s = Jt(e);
    De();
    try {
      pc(e);
    } finally {
      xe(), s();
    }
  }
  process.env.NODE_ENV !== "production" && !o.render && e.render === Y && !t && (o.template ? y(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : y("Component is missing template or render function: ", o));
}
const ss = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return En(), J(e, "get", ""), e[t];
  },
  set() {
    return y("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return y("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return J(e, "get", ""), e[t];
  }
};
function ul(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return J(e, "get", "$slots"), t[n];
    }
  });
}
function al(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && y("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (T(n) ? o = "array" : z(n) && (o = "ref")), o !== "object" && y(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n, o;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, ss));
      },
      get slots() {
        return o || (o = ul(e));
      },
      get emit() {
        return (s, ...r) => e.emit(s, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, ss),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function To(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ks(vi(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in lt)
        return lt[n](e);
    },
    has(t, n) {
      return n in t || n in lt;
    }
  })) : e.proxy;
}
const pl = /(?:^|[-_])\w/g, dl = (e) => e.replace(pl, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Cr(e, t = !0) {
  return $(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Tn(e, t, n = !1) {
  let o = Cr(t);
  if (!o && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (o = s[1]);
  }
  if (!o && e && e.parent) {
    const s = (r) => {
      for (const i in r)
        if (r[i] === t)
          return i;
    };
    o = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return o ? dl(o) : n ? "App" : "Anonymous";
}
function Tr(e) {
  return $(e) && "__vccOpts" in e;
}
const hl = (e, t) => {
  const n = yi(e, t, Wt);
  if (process.env.NODE_ENV !== "production") {
    const o = wr();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function gl() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(a) {
      if (!K(a))
        return null;
      if (a.__isVue)
        return ["div", e, "VueInstance"];
      if (z(a)) {
        De();
        const g = a.value;
        return xe(), [
          "div",
          {},
          ["span", e, p(a)],
          "<",
          c(g),
          ">"
        ];
      } else {
        if (_t(a))
          return [
            "div",
            {},
            ["span", e, ge(a) ? "ShallowReactive" : "Reactive"],
            "<",
            c(a),
            `>${Xe(a) ? " (readonly)" : ""}`
          ];
        if (Xe(a))
          return [
            "div",
            {},
            ["span", e, ge(a) ? "ShallowReadonly" : "Readonly"],
            "<",
            c(a),
            ">"
          ];
      }
      return null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue)
        return [
          "div",
          {},
          ...r(a.$)
        ];
    }
  };
  function r(a) {
    const g = [];
    a.type.props && a.props && g.push(i("props", A(a.props))), a.setupState !== B && g.push(i("setup", a.setupState)), a.data !== B && g.push(i("data", A(a.data)));
    const D = u(a, "computed");
    D && g.push(i("computed", D));
    const M = u(a, "inject");
    return M && g.push(i("injected", M)), g.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), g;
  }
  function i(a, g) {
    return g = X({}, g), Object.keys(g).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        a
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(g).map((D) => [
          "div",
          {},
          ["span", o, D + ": "],
          c(g[D], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(a, g = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", o, a] : K(a) ? ["object", { object: g ? A(a) : a }] : ["span", n, String(a)];
  }
  function u(a, g) {
    const D = a.type;
    if ($(D))
      return;
    const M = {};
    for (const V in a.ctx)
      d(D, V, g) && (M[V] = a.ctx[V]);
    return M;
  }
  function d(a, g, D) {
    const M = a[D];
    if (T(M) && M.includes(g) || K(M) && g in M || a.extends && d(a.extends, g, D) || a.mixins && a.mixins.some((V) => d(V, g, D)))
      return !0;
  }
  function p(a) {
    return ge(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const rs = "3.5.22", Ue = process.env.NODE_ENV !== "production" ? y : Y;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let io;
const is = typeof window < "u" && window.trustedTypes;
if (is)
  try {
    io = /* @__PURE__ */ is.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && Ue(`Error creating trusted types policy: ${e}`);
  }
const $r = io ? (e) => io.createHTML(e) : (e) => e, ml = "http://www.w3.org/2000/svg", _l = "http://www.w3.org/1998/Math/MathML", He = typeof document < "u" ? document : null, cs = He && /* @__PURE__ */ He.createElement("template"), vl = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const s = t === "svg" ? He.createElementNS(ml, e) : t === "mathml" ? He.createElementNS(_l, e) : n ? He.createElement(e, { is: n }) : He.createElement(e);
    return e === "select" && o && o.multiple != null && s.setAttribute("multiple", o.multiple), s;
  },
  createText: (e) => He.createTextNode(e),
  createComment: (e) => He.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => He.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, s, r) {
    const i = n ? n.previousSibling : t.lastChild;
    if (s && (s === r || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === r || !(s = s.nextSibling)); )
        ;
    else {
      cs.innerHTML = $r(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const c = cs.content;
      if (o === "svg" || o === "mathml") {
        const u = c.firstChild;
        for (; u.firstChild; )
          c.appendChild(u.firstChild);
        c.removeChild(u);
      }
      t.insertBefore(c, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, El = Symbol("_vtc");
function Nl(e, t, n) {
  const o = e[El];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ls = Symbol("_vod"), bl = Symbol("_vsh"), yl = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Ol = /(?:^|;)\s*display\s*:/;
function Dl(e, t, n) {
  const o = e.style, s = q(n);
  let r = !1;
  if (n && !s) {
    if (t)
      if (q(t))
        for (const i of t.split(";")) {
          const c = i.slice(0, i.indexOf(":")).trim();
          n[c] == null && ln(o, c, "");
        }
      else
        for (const i in t)
          n[i] == null && ln(o, i, "");
    for (const i in n)
      i === "display" && (r = !0), ln(o, i, n[i]);
  } else if (s) {
    if (t !== n) {
      const i = o[yl];
      i && (n += ";" + i), o.cssText = n, r = Ol.test(n);
    }
  } else t && e.removeAttribute("style");
  ls in e && (e[ls] = r ? o.display : "", e[bl] && (o.display = "none"));
}
const xl = /[^\\];\s*$/, fs = /\s*!important$/;
function ln(e, t, n) {
  if (T(n))
    n.forEach((o) => ln(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && xl.test(n) && Ue(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = wl(e, t);
    fs.test(n) ? e.setProperty(
      ze(o),
      n.replace(fs, ""),
      "important"
    ) : e[o] = n;
  }
}
const us = ["Webkit", "Moz", "ms"], Bn = {};
function wl(e, t) {
  const n = Bn[t];
  if (n)
    return n;
  let o = Ne(t);
  if (o !== "filter" && o in e)
    return Bn[t] = o;
  o = On(o);
  for (let s = 0; s < us.length; s++) {
    const r = us[s] + o;
    if (r in e)
      return Bn[t] = r;
  }
  return t;
}
const as = "http://www.w3.org/1999/xlink";
function ps(e, t, n, o, s, r = zr(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(as, t.slice(6, t.length)) : e.setAttributeNS(as, t, n) : n == null || r && !Os(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Qe(n) ? String(n) : n
  );
}
function ds(e, t, n, o, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? $r(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const c = r === "OPTION" ? e.getAttribute("value") || "" : e.value, u = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (c !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean" ? n = Os(n) : n == null && c === "string" ? (n = "", i = !0) : c === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (c) {
    process.env.NODE_ENV !== "production" && !i && Ue(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      c
    );
  }
  i && e.removeAttribute(s || t);
}
function Vl(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Sl(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const hs = Symbol("_vei");
function Cl(e, t, n, o, s = null) {
  const r = e[hs] || (e[hs] = {}), i = r[t];
  if (o && i)
    i.value = process.env.NODE_ENV !== "production" ? ms(o, t) : o;
  else {
    const [c, u] = Tl(t);
    if (o) {
      const d = r[t] = Pl(
        process.env.NODE_ENV !== "production" ? ms(o, t) : o,
        s
      );
      Vl(e, c, d, u);
    } else i && (Sl(e, c, i, u), r[t] = void 0);
  }
}
const gs = /(?:Once|Passive|Capture)$/;
function Tl(e) {
  let t;
  if (gs.test(e)) {
    t = {};
    let o;
    for (; o = e.match(gs); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ze(e.slice(2)), t];
}
let Kn = 0;
const $l = /* @__PURE__ */ Promise.resolve(), Ml = () => Kn || ($l.then(() => Kn = 0), Kn = Date.now());
function Pl(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Re(
      Al(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = Ml(), n;
}
function ms(e, t) {
  return $(e) || T(e) ? e : (Ue(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Y);
}
function Al(e, t) {
  if (T(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (s) => !s._stopped && o && o(s)
    );
  } else
    return t;
}
const _s = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Il = (e, t, n, o, s, r) => {
  const i = s === "svg";
  t === "class" ? Nl(e, o, i) : t === "style" ? Dl(e, n, o) : Bt(t) ? fn(t) || Cl(e, t, n, o, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Rl(e, t, o, i)) ? (ds(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ps(e, t, o, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !q(o)) ? ds(e, Ne(t), o, r, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), ps(e, t, o, i));
};
function Rl(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && _s(t) && $(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return _s(t) && q(n) ? !1 : t in e;
}
const Fl = /* @__PURE__ */ X({ patchProp: Il }, vl);
let vs;
function jl() {
  return vs || (vs = Ac(Fl));
}
const Hl = ((...e) => {
  const t = jl().createApp(...e);
  process.env.NODE_ENV !== "production" && (Ul(t), Wl(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const s = Bl(o);
    if (!s) return;
    const r = t._component;
    !$(r) && !r.render && !r.template && (r.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const i = n(s, !1, Ll(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
  }, t;
});
function Ll(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ul(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Gr(t) || qr(t) || Jr(t),
    writable: !1
  });
}
function Wl(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Ue(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Ue(o), n;
      },
      set() {
        Ue(o);
      }
    });
  }
}
function Bl(e) {
  if (q(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && Ue(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Ue(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Kl() {
  gl();
}
process.env.NODE_ENV !== "production" && Kl();
const kl = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, Gl = {
  data() {
    return { count: 0 };
  }
}, ql = { class: "my-widget" };
function Jl(e, t, n, o, s, r) {
  return Yc(), Zc("div", ql, [
    t[1] || (t[1] = Ft("h2", null, "Hello dari Vue! 😊", -1)),
    Ft("p", null, "Counter: " + xs(s.count), 1),
    Ft("button", {
      onClick: t[0] || (t[0] = (i) => s.count++)
    }, "+1")
  ]);
}
const Yl = /* @__PURE__ */ kl(Gl, [["render", Jl], ["__scopeId", "data-v-ddfccd52"]]);
function Xl(e) {
  Hl(Yl).mount(e);
}
export {
  Yl as MyWidget,
  Xl as mountMyWidget
};
