var R_ = Object.defineProperty;
var z_ = (e, t, n) => t in e ? R_(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var zr = (e, t, n) => z_(e, typeof t != "symbol" ? t + "" : t, n);
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) a(s);
    new MutationObserver(s => {
        for (const r of s)
            if (r.type === "childList")
                for (const i of r.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && a(i)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(s) {
        const r = {};
        return s.integrity && (r.integrity = s.integrity), s.referrerPolicy && (r.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? r.credentials = "include" : s.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r
    }

    function a(s) {
        if (s.ep) return;
        s.ep = !0;
        const r = n(s);
        fetch(s.href, r)
    }
})();
/**

* @vue/shared v3.4.31

* (c) 2018-present Yuxi (Evan) You and Vue contributors

* @license MIT

**/
/*! #__NO_SIDE_EFFECTS__ */
function Ql(e, t) {
    const n = new Set(e.split(","));
    return a => n.has(a)
}
const Xe = {},
    as = [],
    Kt = () => {},
    F_ = () => !1,
    Ki = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    ec = e => e.startsWith("onUpdate:"),
    ot = Object.assign,
    tc = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    },
    j_ = Object.prototype.hasOwnProperty,
    Be = (e, t) => j_.call(e, t),
    Se = Array.isArray,
    ss = e => Gi(e) === "[object Map]",
    kh = e => Gi(e) === "[object Set]",
    Ne = e => typeof e == "function",
    at = e => typeof e == "string",
    pa = e => typeof e == "symbol",
    tt = e => e !== null && typeof e == "object",
    wh = e => (tt(e) || Ne(e)) && Ne(e.then) && Ne(e.catch),
    xh = Object.prototype.toString,
    Gi = e => xh.call(e),
    B_ = e => Gi(e).slice(8, -1),
    Th = e => Gi(e) === "[object Object]",
    nc = e => at(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    Xs = Ql(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    Zi = e => {
        const t = Object.create(null);
        return n => t[n] || (t[n] = e(n))
    },
    U_ = /-(\w)/g,
    Sn = Zi(e => e.replace(U_, (t, n) => n ? n.toUpperCase() : "")),
    V_ = /\B([A-Z])/g,
    Ps = Zi(e => e.replace(V_, "-$1").toLowerCase()),
    Ji = Zi(e => e.charAt(0).toUpperCase() + e.slice(1)),
    ui = Zi(e => e ? `on${Ji(e)}` : ""),
    ua = (e, t) => !Object.is(e, t),
    Ao = (e, ...t) => {
        for (let n = 0; n < e.length; n++) e[n](...t)
    },
    Sh = (e, t, n, a = !1) => {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            writable: a,
            value: n
        })
    },
    q_ = e => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t
    },
    W_ = e => {
        const t = at(e) ? Number(e) : NaN;
        return isNaN(t) ? e : t
    };
let gu;
const Eh = () => gu || (gu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function en(e) {
    if (Se(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const a = e[n],
                s = at(a) ? G_(a) : en(a);
            if (s)
                for (const r in s) t[r] = s[r]
        }
        return t
    } else if (at(e) || tt(e)) return e
}
const H_ = /;(?![^(]*\))/g,
    Y_ = /:([^]+)/,
    K_ = /\/\*[^]*?\*\//g;

function G_(e) {
    const t = {};
    return e.replace(K_, "").split(H_).forEach(n => {
        if (n) {
            const a = n.split(Y_);
            a.length > 1 && (t[a[0].trim()] = a[1].trim())
        }
    }), t
}

function ce(e) {
    let t = "";
    if (at(e)) t = e;
    else if (Se(e))
        for (let n = 0; n < e.length; n++) {
            const a = ce(e[n]);
            a && (t += a + " ")
        } else if (tt(e))
            for (const n in e) e[n] && (t += n + " ");
    return t.trim()
}

function Z_(e) {
    if (!e) return null;
    let {
        class: t,
        style: n
    } = e;
    return t && !at(t) && (e.class = ce(t)), n && (e.style = en(n)), e
}
const J_ = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    X_ = Ql(J_);

function $h(e) {
    return !!e || e === ""
}
const Ch = e => !!(e && e.__v_isRef === !0),
    de = e => at(e) ? e : e == null ? "" : Se(e) || tt(e) && (e.toString === xh || !Ne(e.toString)) ? Ch(e) ? de(e.value) : JSON.stringify(e, Oh, 2) : String(e),
    Oh = (e, t) => Ch(t) ? Oh(e, t.value) : ss(t) ? {
        [`Map(${t.size})`]: [...t.entries()].reduce((n, [a, s], r) => (n[Lo(a, r) + " =>"] = s, n), {})
    } : kh(t) ? {
        [`Set(${t.size})`]: [...t.values()].map(n => Lo(n))
    } : pa(t) ? Lo(t) : tt(t) && !Se(t) && !Th(t) ? String(t) : t,
    Lo = (e, t = "") => {
        var n;
        return pa(e) ? `Symbol(${(n=e.description)!=null?n:t})` : e
    };
/**

* @vue/reactivity v3.4.31

* (c) 2018-present Yuxi (Evan) You and Vue contributors

* @license MIT

**/
let Bt;
class Ih {
    constructor(t = !1) {
        this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Bt, !t && Bt && (this.index = (Bt.scopes || (Bt.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(t) {
        if (this._active) {
            const n = Bt;
            try {
                return Bt = this, t()
            } finally {
                Bt = n
            }
        }
    }
    on() {
        Bt = this
    }
    off() {
        Bt = this.parent
    }
    stop(t) {
        if (this._active) {
            let n, a;
            for (n = 0, a = this.effects.length; n < a; n++) this.effects[n].stop();
            for (n = 0, a = this.cleanups.length; n < a; n++) this.cleanups[n]();
            if (this.scopes)
                for (n = 0, a = this.scopes.length; n < a; n++) this.scopes[n].stop(!0);
            if (!this.detached && this.parent && !t) {
                const s = this.parent.scopes.pop();
                s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index)
            }
            this.parent = void 0, this._active = !1
        }
    }
}

function ac(e) {
    return new Ih(e)
}

function Q_(e, t = Bt) {
    t && t.active && t.effects.push(e)
}

function Ah() {
    return Bt
}

function ev(e) {
    Bt && Bt.cleanups.push(e)
}
let Na;
class sc {
    constructor(t, n, a, s) {
        this.fn = t, this.trigger = n, this.scheduler = a, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Q_(this, s)
    }
    get dirty() {
        if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
            this._dirtyLevel = 1, _a();
            for (let t = 0; t < this._depsLength; t++) {
                const n = this.deps[t];
                if (n.computed && (tv(n.computed), this._dirtyLevel >= 4)) break
            }
            this._dirtyLevel === 1 && (this._dirtyLevel = 0), va()
        }
        return this._dirtyLevel >= 4
    }
    set dirty(t) {
        this._dirtyLevel = t ? 4 : 0
    }
    run() {
        if (this._dirtyLevel = 0, !this.active) return this.fn();
        let t = ia,
            n = Na;
        try {
            return ia = !0, Na = this, this._runnings++, pu(this), this.fn()
        } finally {
            _u(this), this._runnings--, Na = n, ia = t
        }
    }
    stop() {
        this.active && (pu(this), _u(this), this.onStop && this.onStop(), this.active = !1)
    }
}

function tv(e) {
    return e.value
}

function pu(e) {
    e._trackId++, e._depsLength = 0
}

function _u(e) {
    if (e.deps.length > e._depsLength) {
        for (let t = e._depsLength; t < e.deps.length; t++) Lh(e.deps[t], e);
        e.deps.length = e._depsLength
    }
}

function Lh(e, t) {
    const n = e.get(t);
    n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup())
}
let ia = !0,
    cl = 0;
const Ph = [];

function _a() {
    Ph.push(ia), ia = !1
}

function va() {
    const e = Ph.pop();
    ia = e === void 0 ? !0 : e
}

function rc() {
    cl++
}

function ic() {
    for (cl--; !cl && ul.length;) ul.shift()()
}

function Mh(e, t, n) {
    if (t.get(e) !== e._trackId) {
        t.set(e, e._trackId);
        const a = e.deps[e._depsLength];
        a !== t ? (a && Lh(a, e), e.deps[e._depsLength++] = t) : e._depsLength++
    }
}
const ul = [];

function Nh(e, t, n) {
    rc();
    for (const a of e.keys()) {
        let s;
        a._dirtyLevel < t && (s ?? (s = e.get(a) === a._trackId)) && (a._shouldSchedule || (a._shouldSchedule = a._dirtyLevel === 0), a._dirtyLevel = t), a._shouldSchedule && (s ?? (s = e.get(a) === a._trackId)) && (a.trigger(), (!a._runnings || a.allowRecurse) && a._dirtyLevel !== 2 && (a._shouldSchedule = !1, a.scheduler && ul.push(a.scheduler)))
    }
    ic()
}
const Dh = (e, t) => {
        const n = new Map;
        return n.cleanup = e, n.computed = t, n
    },
    ki = new WeakMap,
    Da = Symbol(""),
    dl = Symbol("");

function zt(e, t, n) {
    if (ia && Na) {
        let a = ki.get(e);
        a || ki.set(e, a = new Map);
        let s = a.get(n);
        s || a.set(n, s = Dh(() => a.delete(n))), Mh(Na, s)
    }
}

function Pn(e, t, n, a, s, r) {
    const i = ki.get(e);
    if (!i) return;
    let o = [];
    if (t === "clear") o = [...i.values()];
    else if (n === "length" && Se(e)) {
        const l = Number(a);
        i.forEach((c, u) => {
            (u === "length" || !pa(u) && u >= l) && o.push(c)
        })
    } else switch (n !== void 0 && o.push(i.get(n)), t) {
        case "add":
            Se(e) ? nc(n) && o.push(i.get("length")) : (o.push(i.get(Da)), ss(e) && o.push(i.get(dl)));
            break;
        case "delete":
            Se(e) || (o.push(i.get(Da)), ss(e) && o.push(i.get(dl)));
            break;
        case "set":
            ss(e) && o.push(i.get(Da));
            break
    }
    rc();
    for (const l of o) l && Nh(l, 4);
    ic()
}

function nv(e, t) {
    const n = ki.get(e);
    return n && n.get(t)
}
const av = Ql("__proto__,__v_isRef,__isVue"),
    Rh = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(pa)),
    vu = sv();

function sv() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
        e[t] = function(...n) {
            const a = Fe(this);
            for (let r = 0, i = this.length; r < i; r++) zt(a, "get", r + "");
            const s = a[t](...n);
            return s === -1 || s === !1 ? a[t](...n.map(Fe)) : s
        }
    }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
        e[t] = function(...n) {
            _a(), rc();
            const a = Fe(this)[t].apply(this, n);
            return ic(), va(), a
        }
    }), e
}

function rv(e) {
    pa(e) || (e = String(e));
    const t = Fe(this);
    return zt(t, "has", e), t.hasOwnProperty(e)
}
class zh {
    constructor(t = !1, n = !1) {
        this._isReadonly = t, this._isShallow = n
    }
    get(t, n, a) {
        const s = this._isReadonly,
            r = this._isShallow;
        if (n === "__v_isReactive") return !s;
        if (n === "__v_isReadonly") return s;
        if (n === "__v_isShallow") return r;
        if (n === "__v_raw") return a === (s ? r ? vv : Uh : r ? Bh : jh).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(a) ? t : void 0;
        const i = Se(t);
        if (!s) {
            if (i && Be(vu, n)) return Reflect.get(vu, n, a);
            if (n === "hasOwnProperty") return rv
        }
        const o = Reflect.get(t, n, a);
        return (pa(n) ? Rh.has(n) : av(n)) || (s || zt(t, "get", n), r) ? o : ut(o) ? i && nc(n) ? o : o.value : tt(o) ? s ? qh(o) : Tr(o) : o
    }
}
class Fh extends zh {
    constructor(t = !1) {
        super(!1, t)
    }
    set(t, n, a, s) {
        let r = t[n];
        if (!this._isShallow) {
            const l = lr(r);
            if (!wi(a) && !lr(a) && (r = Fe(r), a = Fe(a)), !Se(t) && ut(r) && !ut(a)) return l ? !1 : (r.value = a, !0)
        }
        const i = Se(t) && nc(n) ? Number(n) < t.length : Be(t, n),
            o = Reflect.set(t, n, a, s);
        return t === Fe(s) && (i ? ua(a, r) && Pn(t, "set", n, a) : Pn(t, "add", n, a)), o
    }
    deleteProperty(t, n) {
        const a = Be(t, n);
        t[n];
        const s = Reflect.deleteProperty(t, n);
        return s && a && Pn(t, "delete", n, void 0), s
    }
    has(t, n) {
        const a = Reflect.has(t, n);
        return (!pa(n) || !Rh.has(n)) && zt(t, "has", n), a
    }
    ownKeys(t) {
        return zt(t, "iterate", Se(t) ? "length" : Da), Reflect.ownKeys(t)
    }
}
class iv extends zh {
    constructor(t = !1) {
        super(!0, t)
    }
    set(t, n) {
        return !0
    }
    deleteProperty(t, n) {
        return !0
    }
}
const ov = new Fh,
    lv = new iv,
    cv = new Fh(!0);
const oc = e => e,
    Xi = e => Reflect.getPrototypeOf(e);

function Fr(e, t, n = !1, a = !1) {
    e = e.__v_raw;
    const s = Fe(e),
        r = Fe(t);
    n || (ua(t, r) && zt(s, "get", t), zt(s, "get", r));
    const {
        has: i
    } = Xi(s), o = a ? oc : n ? dc : cr;
    if (i.call(s, t)) return o(e.get(t));
    if (i.call(s, r)) return o(e.get(r));
    e !== s && e.get(t)
}

function jr(e, t = !1) {
    const n = this.__v_raw,
        a = Fe(n),
        s = Fe(e);
    return t || (ua(e, s) && zt(a, "has", e), zt(a, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s)
}

function Br(e, t = !1) {
    return e = e.__v_raw, !t && zt(Fe(e), "iterate", Da), Reflect.get(e, "size", e)
}

function bu(e) {
    e = Fe(e);
    const t = Fe(this);
    return Xi(t).has.call(t, e) || (t.add(e), Pn(t, "add", e, e)), this
}

function yu(e, t) {
    t = Fe(t);
    const n = Fe(this),
        {
            has: a,
            get: s
        } = Xi(n);
    let r = a.call(n, e);
    r || (e = Fe(e), r = a.call(n, e));
    const i = s.call(n, e);
    return n.set(e, t), r ? ua(t, i) && Pn(n, "set", e, t) : Pn(n, "add", e, t), this
}

function ku(e) {
    const t = Fe(this),
        {
            has: n,
            get: a
        } = Xi(t);
    let s = n.call(t, e);
    s || (e = Fe(e), s = n.call(t, e)), a && a.call(t, e);
    const r = t.delete(e);
    return s && Pn(t, "delete", e, void 0), r
}

function wu() {
    const e = Fe(this),
        t = e.size !== 0,
        n = e.clear();
    return t && Pn(e, "clear", void 0, void 0), n
}

function Ur(e, t) {
    return function(a, s) {
        const r = this,
            i = r.__v_raw,
            o = Fe(i),
            l = t ? oc : e ? dc : cr;
        return !e && zt(o, "iterate", Da), i.forEach((c, u) => a.call(s, l(c), l(u), r))
    }
}

function Vr(e, t, n) {
    return function(...a) {
        const s = this.__v_raw,
            r = Fe(s),
            i = ss(r),
            o = e === "entries" || e === Symbol.iterator && i,
            l = e === "keys" && i,
            c = s[e](...a),
            u = n ? oc : t ? dc : cr;
        return !t && zt(r, "iterate", l ? dl : Da), {
            next() {
                const {
                    value: d,
                    done: h
                } = c.next();
                return h ? {
                    value: d,
                    done: h
                } : {
                    value: o ? [u(d[0]), u(d[1])] : u(d),
                    done: h
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}

function jn(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}

function uv() {
    const e = {
            get(r) {
                return Fr(this, r)
            },
            get size() {
                return Br(this)
            },
            has: jr,
            add: bu,
            set: yu,
            delete: ku,
            clear: wu,
            forEach: Ur(!1, !1)
        },
        t = {
            get(r) {
                return Fr(this, r, !1, !0)
            },
            get size() {
                return Br(this)
            },
            has: jr,
            add: bu,
            set: yu,
            delete: ku,
            clear: wu,
            forEach: Ur(!1, !0)
        },
        n = {
            get(r) {
                return Fr(this, r, !0)
            },
            get size() {
                return Br(this, !0)
            },
            has(r) {
                return jr.call(this, r, !0)
            },
            add: jn("add"),
            set: jn("set"),
            delete: jn("delete"),
            clear: jn("clear"),
            forEach: Ur(!0, !1)
        },
        a = {
            get(r) {
                return Fr(this, r, !0, !0)
            },
            get size() {
                return Br(this, !0)
            },
            has(r) {
                return jr.call(this, r, !0)
            },
            add: jn("add"),
            set: jn("set"),
            delete: jn("delete"),
            clear: jn("clear"),
            forEach: Ur(!0, !0)
        };
    return ["keys", "values", "entries", Symbol.iterator].forEach(r => {
        e[r] = Vr(r, !1, !1), n[r] = Vr(r, !0, !1), t[r] = Vr(r, !1, !0), a[r] = Vr(r, !0, !0)
    }), [e, n, t, a]
}
const [dv, fv, hv, mv] = uv();

function lc(e, t) {
    const n = t ? e ? mv : hv : e ? fv : dv;
    return (a, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? a : Reflect.get(Be(n, s) && s in a ? n : a, s, r)
}
const gv = {
        get: lc(!1, !1)
    },
    pv = {
        get: lc(!1, !0)
    },
    _v = {
        get: lc(!0, !1)
    };
const jh = new WeakMap,
    Bh = new WeakMap,
    Uh = new WeakMap,
    vv = new WeakMap;

function bv(e) {
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
            return 0
    }
}

function yv(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : bv(B_(e))
}

function Tr(e) {
    return lr(e) ? e : cc(e, !1, ov, gv, jh)
}

function Vh(e) {
    return cc(e, !1, cv, pv, Bh)
}

function qh(e) {
    return cc(e, !0, lv, _v, Uh)
}

function cc(e, t, n, a, s) {
    if (!tt(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const r = s.get(e);
    if (r) return r;
    const i = yv(e);
    if (i === 0) return e;
    const o = new Proxy(e, i === 2 ? a : n);
    return s.set(e, o), o
}

function Ra(e) {
    return lr(e) ? Ra(e.__v_raw) : !!(e && e.__v_isReactive)
}

function lr(e) {
    return !!(e && e.__v_isReadonly)
}

function wi(e) {
    return !!(e && e.__v_isShallow)
}

function Wh(e) {
    return e ? !!e.__v_raw : !1
}

function Fe(e) {
    const t = e && e.__v_raw;
    return t ? Fe(t) : e
}

function uc(e) {
    return Object.isExtensible(e) && Sh(e, "__v_skip", !0), e
}
const cr = e => tt(e) ? Tr(e) : e,
    dc = e => tt(e) ? qh(e) : e;
class Hh {
    constructor(t, n, a, s) {
        this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new sc(() => t(this._value), () => di(this, this.effect._dirtyLevel === 2 ? 2 : 3)), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = a
    }
    get value() {
        const t = Fe(this);
        return (!t._cacheable || t.effect.dirty) && ua(t._value, t._value = t.effect.run()) && di(t, 4), Yh(t), t.effect._dirtyLevel >= 2 && di(t, 2), t._value
    }
    set value(t) {
        this._setter(t)
    }
    get _dirty() {
        return this.effect.dirty
    }
    set _dirty(t) {
        this.effect.dirty = t
    }
}

function kv(e, t, n = !1) {
    let a, s;
    const r = Ne(e);
    return r ? (a = e, s = Kt) : (a = e.get, s = e.set), new Hh(a, s, r || !s, n)
}

function Yh(e) {
    var t;
    ia && Na && (e = Fe(e), Mh(Na, (t = e.dep) != null ? t : e.dep = Dh(() => e.dep = void 0, e instanceof Hh ? e : void 0)))
}

function di(e, t = 4, n, a) {
    e = Fe(e);
    const s = e.dep;
    s && Nh(s, t)
}

function ut(e) {
    return !!(e && e.__v_isRef === !0)
}

function ae(e) {
    return Kh(e, !1)
}

function fc(e) {
    return Kh(e, !0)
}

function Kh(e, t) {
    return ut(e) ? e : new wv(e, t)
}
class wv {
    constructor(t, n) {
        this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : Fe(t), this._value = n ? t : cr(t)
    }
    get value() {
        return Yh(this), this._value
    }
    set value(t) {
        const n = this.__v_isShallow || wi(t) || lr(t);
        t = n ? t : Fe(t), ua(t, this._rawValue) && (this._rawValue, this._rawValue = t, this._value = n ? t : cr(t), di(this, 4))
    }
}

function Y(e) {
    return ut(e) ? e.value : e
}
const xv = {
    get: (e, t, n) => Y(Reflect.get(e, t, n)),
    set: (e, t, n, a) => {
        const s = e[t];
        return ut(s) && !ut(n) ? (s.value = n, !0) : Reflect.set(e, t, n, a)
    }
};

function Gh(e) {
    return Ra(e) ? e : new Proxy(e, xv)
}

function Tv(e) {
    const t = Se(e) ? new Array(e.length) : {};
    for (const n in e) t[n] = Ev(e, n);
    return t
}
class Sv {
    constructor(t, n, a) {
        this._object = t, this._key = n, this._defaultValue = a, this.__v_isRef = !0
    }
    get value() {
        const t = this._object[this._key];
        return t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        this._object[this._key] = t
    }
    get dep() {
        return nv(Fe(this._object), this._key)
    }
}

function Ev(e, t, n) {
    const a = e[t];
    return ut(a) ? a : new Sv(e, t, n)
}
/**

* @vue/runtime-core v3.4.31

* (c) 2018-present Yuxi (Evan) You and Vue contributors

* @license MIT

**/
function oa(e, t, n, a) {
    try {
        return a ? e(...a) : e()
    } catch (s) {
        Qi(s, t, n)
    }
}

function Xt(e, t, n, a) {
    if (Ne(e)) {
        const s = oa(e, t, n, a);
        return s && wh(s) && s.catch(r => {
            Qi(r, t, n)
        }), s
    }
    if (Se(e)) {
        const s = [];
        for (let r = 0; r < e.length; r++) s.push(Xt(e[r], t, n, a));
        return s
    }
}

function Qi(e, t, n, a = !0) {
    const s = t ? t.vnode : null;
    if (t) {
        let r = t.parent;
        const i = t.proxy,
            o = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; r;) {
            const c = r.ec;
            if (c) {
                for (let u = 0; u < c.length; u++)
                    if (c[u](e, i, o) === !1) return
            }
            r = r.parent
        }
        const l = t.appContext.config.errorHandler;
        if (l) {
            _a(), oa(l, null, 10, [e, i, o]), va();
            return
        }
    }
    $v(e, n, s, a)
}

function $v(e, t, n, a = !0) {
    console.error(e)
}
let ur = !1,
    fl = !1;
const xt = [];
let wn = 0;
const rs = [];
let Gn = null,
    Ia = 0;
const Zh = Promise.resolve();
let hc = null;

function Mn(e) {
    const t = hc || Zh;
    return e ? t.then(this ? e.bind(this) : e) : t
}

function Cv(e) {
    let t = wn + 1,
        n = xt.length;
    for (; t < n;) {
        const a = t + n >>> 1,
            s = xt[a],
            r = dr(s);
        r < e || r === e && s.pre ? t = a + 1 : n = a
    }
    return t
}

function mc(e) {
    (!xt.length || !xt.includes(e, ur && e.allowRecurse ? wn + 1 : wn)) && (e.id == null ? xt.push(e) : xt.splice(Cv(e.id), 0, e), Jh())
}

function Jh() {
    !ur && !fl && (fl = !0, hc = Zh.then(Qh))
}

function Ov(e) {
    const t = xt.indexOf(e);
    t > wn && xt.splice(t, 1)
}

function Iv(e) {
    Se(e) ? rs.push(...e) : (!Gn || !Gn.includes(e, e.allowRecurse ? Ia + 1 : Ia)) && rs.push(e), Jh()
}

function xu(e, t, n = ur ? wn + 1 : 0) {
    for (; n < xt.length; n++) {
        const a = xt[n];
        if (a && a.pre) {
            if (e && a.id !== e.uid) continue;
            xt.splice(n, 1), n--, a()
        }
    }
}

function Xh(e) {
    if (rs.length) {
        const t = [...new Set(rs)].sort((n, a) => dr(n) - dr(a));
        if (rs.length = 0, Gn) {
            Gn.push(...t);
            return
        }
        for (Gn = t, Ia = 0; Ia < Gn.length; Ia++) {
            const n = Gn[Ia];
            n.active !== !1 && n()
        }
        Gn = null, Ia = 0
    }
}
const dr = e => e.id == null ? 1 / 0 : e.id,
    Av = (e, t) => {
        const n = dr(e) - dr(t);
        if (n === 0) {
            if (e.pre && !t.pre) return -1;
            if (t.pre && !e.pre) return 1
        }
        return n
    };

function Qh(e) {
    fl = !1, ur = !0, xt.sort(Av);
    try {
        for (wn = 0; wn < xt.length; wn++) {
            const t = xt[wn];
            t && t.active !== !1 && oa(t, null, 14)
        }
    } finally {
        wn = 0, xt.length = 0, Xh(), ur = !1, hc = null, (xt.length || rs.length) && Qh()
    }
}

function Lv(e, t, ...n) {
    if (e.isUnmounted) return;
    const a = e.vnode.props || Xe;
    let s = n;
    const r = t.startsWith("update:"),
        i = r && t.slice(7);
    if (i && i in a) {
        const u = `${i==="modelValue"?"model":i}Modifiers`,
            {
                number: d,
                trim: h
            } = a[u] || Xe;
        h && (s = n.map(f => at(f) ? f.trim() : f)), d && (s = n.map(q_))
    }
    let o, l = a[o = ui(t)] || a[o = ui(Sn(t))];
    !l && r && (l = a[o = ui(Ps(t))]), l && Xt(l, e, 6, s);
    const c = a[o + "Once"];
    if (c) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[o]) return;
        e.emitted[o] = !0, Xt(c, e, 6, s)
    }
}

function em(e, t, n = !1) {
    const a = t.emitsCache,
        s = a.get(e);
    if (s !== void 0) return s;
    const r = e.emits;
    let i = {},
        o = !1;
    if (!Ne(e)) {
        const l = c => {
            const u = em(c, t, !0);
            u && (o = !0, ot(i, u))
        };
        !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l)
    }
    return !r && !o ? (tt(e) && a.set(e, null), null) : (Se(r) ? r.forEach(l => i[l] = null) : ot(i, r), tt(e) && a.set(e, i), i)
}

function eo(e, t) {
    return !e || !Ki(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Be(e, t[0].toLowerCase() + t.slice(1)) || Be(e, Ps(t)) || Be(e, t))
}
let ft = null,
    to = null;

function xi(e) {
    const t = ft;
    return ft = e, to = e && e.type.__scopeId || null, t
}

function tm(e) {
    to = e
}

function nm() {
    to = null
}

function fe(e, t = ft, n) {
    if (!t || e._n) return e;
    const a = (...s) => {
        a._d && zu(-1);
        const r = xi(t);
        let i;
        try {
            i = e(...s)
        } finally {
            xi(r), a._d && zu(1)
        }
        return i
    };
    return a._n = !0, a._c = !0, a._d = !0, a
}

function Po(e) {
    const {
        type: t,
        vnode: n,
        proxy: a,
        withProxy: s,
        propsOptions: [r],
        slots: i,
        attrs: o,
        emit: l,
        render: c,
        renderCache: u,
        props: d,
        data: h,
        setupState: f,
        ctx: p,
        inheritAttrs: T
    } = e, x = xi(e);
    let M, O;
    try {
        if (n.shapeFlag & 4) {
            const S = s || a,
                w = S;
            M = kn(c.call(w, S, u, d, f, h, p)), O = o
        } else {
            const S = t;
            M = kn(S.length > 1 ? S(d, {
                attrs: o,
                slots: i,
                emit: l
            }) : S(d, null)), O = t.props ? o : Pv(o)
        }
    } catch (S) {
        ar.length = 0, Qi(S, e, 1), M = V(Rt)
    }
    let v = M;
    if (O && T !== !1) {
        const S = Object.keys(O),
            {
                shapeFlag: w
            } = v;
        S.length && w & 7 && (r && S.some(ec) && (O = Mv(O, r)), v = da(v, O, !1, !0))
    }
    return n.dirs && (v = da(v, null, !1, !0), v.dirs = v.dirs ? v.dirs.concat(n.dirs) : n.dirs), n.transition && (v.transition = n.transition), M = v, xi(x), M
}
const Pv = e => {
        let t;
        for (const n in e)(n === "class" || n === "style" || Ki(n)) && ((t || (t = {}))[n] = e[n]);
        return t
    },
    Mv = (e, t) => {
        const n = {};
        for (const a in e)(!ec(a) || !(a.slice(9) in t)) && (n[a] = e[a]);
        return n
    };

function Nv(e, t, n) {
    const {
        props: a,
        children: s,
        component: r
    } = e, {
        props: i,
        children: o,
        patchFlag: l
    } = t, c = r.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (n && l >= 0) {
        if (l & 1024) return !0;
        if (l & 16) return a ? Tu(a, i, c) : !!i;
        if (l & 8) {
            const u = t.dynamicProps;
            for (let d = 0; d < u.length; d++) {
                const h = u[d];
                if (i[h] !== a[h] && !eo(c, h)) return !0
            }
        }
    } else return (s || o) && (!o || !o.$stable) ? !0 : a === i ? !1 : a ? i ? Tu(a, i, c) : !0 : !!i;
    return !1
}

function Tu(e, t, n) {
    const a = Object.keys(t);
    if (a.length !== Object.keys(e).length) return !0;
    for (let s = 0; s < a.length; s++) {
        const r = a[s];
        if (t[r] !== e[r] && !eo(n, r)) return !0
    }
    return !1
}

function Dv({
    vnode: e,
    parent: t
}, n) {
    for (; t;) {
        const a = t.subTree;
        if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e)(e = t.vnode).el = n, t = t.parent;
        else break
    }
}
const gc = "components",
    Rv = "directives";

function no(e, t) {
    return pc(gc, e, !0, t) || e
}
const am = Symbol.for("v-ndc");

function vs(e) {
    return at(e) ? pc(gc, e, !1) || e : e || am
}

function Le(e) {
    return pc(Rv, e)
}

function pc(e, t, n = !0, a = !1) {
    const s = ft || mt;
    if (s) {
        const r = s.type;
        if (e === gc) {
            const o = Mb(r, !1);
            if (o && (o === t || o === Sn(t) || o === Ji(Sn(t)))) return r
        }
        const i = Su(s[e]
