
(function() {
    var g, l = this;

    function aa(a, b) {
        var c = a.split("."),
            d = l;
        c[0] in d || !d.execScript || d.execScript("var " + c[0]);
        for (var e; c.length && (e = c.shift());) c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b
    }

    function ba(a) {
        a.s = function() {
            return a.Ta ? a.Ta : a.Ta = new a
        }
    }

    function ca(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }

    function da(a) {
        return "array" == ca(a)
    }

    function n(a) {
        return "string" == typeof a
    }

    function ea(a) {
        return "function" == ca(a)
    }

    function fa(a) {
        return a[ha] || (a[ha] = ++ia)
    }
    var ha = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ia = 0;

    function ja(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ka(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function s(a, b, c) {
        s = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ja : ka;
        return s.apply(null, arguments)
    }

    function la(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }
    var ma = Date.now || function() {
        return +new Date
    };

    function u(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.f = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    }
    Function.prototype.bind = Function.prototype.bind || function(a, b) {
        if (1 < arguments.length) {
            var c = Array.prototype.slice.call(arguments, 1);
            c.unshift(this, a);
            return s.apply(null, c)
        }
        return s(this, a)
    };
    var qa;

    function ra(a, b) {
        for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
        return d + c.join("%s")
    }

    function sa(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    }

    function ta(a) {
        if (!ua.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(va, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(wa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(xa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(ya, "&quot;"));
        return a
    }
    var va = /&/g,
        wa = /</g,
        xa = />/g,
        ya = /\"/g,
        ua = /[&<>\"]/;

    function za(a) {
        return String(a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        })
    }

    function Aa(a) {
        var b = n(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
        return a.replace(RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
            return b + e.toUpperCase()
        })
    };
    var v = Array.prototype,
        Ba = v.indexOf ? function(a, b, c) {
            return v.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (n(a)) return n(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        w = v.forEach ? function(a, b, c) {
            v.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = n(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Ca = v.filter ? function(a, b, c) {
            return v.filter.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = [], f = 0, h = n(a) ?
                a.split("") : a, k = 0; k < d; k++)
                if (k in h) {
                    var t = h[k];
                    b.call(c, t, k, a) && (e[f++] = t)
                }
            return e
        },
        Da = v.every ? function(a, b, c) {
            return v.every.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = n(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && !b.call(c, e[f], f, a)) return !1;
            return !0
        };

    function x(a, b) {
        return 0 <= Ba(a, b)
    }

    function Ea(a, b) {
        var c = Ba(a, b),
            d;
        (d = 0 <= c) && v.splice.call(a, c, 1);
        return d
    }

    function Fa(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Ga(a, b, c) {
        return 2 >= arguments.length ? v.slice.call(a, b) : v.slice.call(a, b, c)
    };
    var Ha, Ma, Na, Oa;

    function Pa() {
        return l.navigator ? l.navigator.userAgent : null
    }
    Oa = Na = Ma = Ha = !1;
    var Qa;
    if (Qa = Pa()) {
        var Ra = l.navigator;
        Ha = 0 == Qa.lastIndexOf("Opera", 0);
        Ma = !Ha && (-1 != Qa.indexOf("MSIE") || -1 != Qa.indexOf("Trident"));
        Na = !Ha && -1 != Qa.indexOf("WebKit");
        Oa = !Ha && !Na && !Ma && "Gecko" == Ra.product
    }
    var y = Ha,
        z = Ma,
        A = Oa,
        B = Na;

    function Sa() {
        var a = l.document;
        return a ? a.documentMode : void 0
    }
    var Ta;
    a: {
        var Ua = "",
            Va;
        if (y && l.opera) var Wa = l.opera.version,
            Ua = "function" == typeof Wa ? Wa() : Wa;
        else if (A ? Va = /rv\:([^\);]+)(\)|;)/ : z ? Va = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : B && (Va = /WebKit\/(\S+)/), Va) var Xa = Va.exec(Pa()),
            Ua = Xa ? Xa[1] : "";
        if (z) {
            var Ya = Sa();
            if (Ya > parseFloat(Ua)) {
                Ta = String(Ya);
                break a
            }
        }
        Ta = Ua
    }
    var Za = {};

    function E(a) {
        var b;
        if (!(b = Za[a])) {
            b = 0;
            for (var c = sa(String(Ta)).split("."), d = sa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var h = c[f] || "",
                    k = d[f] || "",
                    t = RegExp("(\\d*)(\\D*)", "g"),
                    H = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var q = t.exec(h) || ["", "", ""],
                        r = H.exec(k) || ["", "", ""];
                    if (0 == q[0].length && 0 == r[0].length) break;
                    b = ((0 == q[1].length ? 0 : parseInt(q[1], 10)) < (0 == r[1].length ? 0 : parseInt(r[1], 10)) ? -1 : (0 == q[1].length ? 0 : parseInt(q[1], 10)) > (0 == r[1].length ? 0 : parseInt(r[1], 10)) ? 1 : 0) || ((0 == q[2].length) <
                        (0 == r[2].length) ? -1 : (0 == q[2].length) > (0 == r[2].length) ? 1 : 0) || (q[2] < r[2] ? -1 : q[2] > r[2] ? 1 : 0)
                } while (0 == b)
            }
            b = Za[a] = 0 <= b
        }
        return b
    }
    var $a = l.document,
        ab = $a && z ? Sa() || ("CSS1Compat" == $a.compatMode ? parseInt(Ta, 10) : 5) : void 0;
    var bb = !z || z && 9 <= ab,
        cb = z && !E("9");
    !B || E("528");
    A && E("1.9b") || z && E("8") || y && E("9.5") || B && E("528");
    A && !E("8") || z && E("9");

    function db() {
        0 != eb && (jb[fa(this)] = this)
    }
    var eb = 0,
        jb = {};
    db.prototype.za = !1;
    db.prototype.p = function() {
        if (!this.za && (this.za = !0, this.c(), 0 != eb)) {
            var a = fa(this);
            delete jb[a]
        }
    };
    db.prototype.c = function() {
        if (this.aa)
            for (; this.aa.length;) this.aa.shift()()
    };

    function kb(a) {
        a && "function" == typeof a.p && a.p()
    };

    function F(a, b) {
        this.type = a;
        this.currentTarget = this.target = b
    }
    g = F.prototype;
    g.c = function() {};
    g.p = function() {};
    g.v = !1;
    g.defaultPrevented = !1;
    g.Va = !0;
    g.preventDefault = function() {
        this.defaultPrevented = !0;
        this.Va = !1
    };

    function lb(a) {
        lb[" "](a);
        return a
    }
    lb[" "] = function() {};

    function mb(a, b) {
        if (a) {
            var c = this.type = a.type;
            F.call(this, c);
            this.target = a.target || a.srcElement;
            this.currentTarget = b;
            var d = a.relatedTarget;
            if (d) {
                if (A) {
                    var e;
                    a: {
                        try {
                            lb(d.nodeName);
                            e = !0;
                            break a
                        } catch (f) {}
                        e = !1
                    }
                    e || (d = null)
                }
            } else "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
            this.relatedTarget = d;
            this.offsetX = B || void 0 !== a.offsetX ? a.offsetX : a.layerX;
            this.offsetY = B || void 0 !== a.offsetY ? a.offsetY : a.layerY;
            this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
            this.clientY = void 0 !== a.clientY ? a.clientY :
                a.pageY;
            this.screenX = a.screenX || 0;
            this.screenY = a.screenY || 0;
            this.button = a.button;
            this.keyCode = a.keyCode || 0;
            this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.state = a.state;
            this.r = a;
            a.defaultPrevented && this.preventDefault();
            delete this.v
        }
    }
    u(mb, F);
    g = mb.prototype;
    g.target = null;
    g.relatedTarget = null;
    g.offsetX = 0;
    g.offsetY = 0;
    g.clientX = 0;
    g.clientY = 0;
    g.screenX = 0;
    g.screenY = 0;
    g.button = 0;
    g.keyCode = 0;
    g.charCode = 0;
    g.ctrlKey = !1;
    g.altKey = !1;
    g.shiftKey = !1;
    g.metaKey = !1;
    g.r = null;
    g.preventDefault = function() {
        mb.f.preventDefault.call(this);
        var a = this.r;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, cb) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    g.c = function() {};
    var nb = "closure_listenable_" + (1E6 * Math.random() | 0);

    function ob(a) {
        try {
            return !(!a || !a[nb])
        } catch (b) {
            return !1
        }
    }
    var pb = 0;

    function qb(a, b, c, d, e) {
        this.u = a;
        this.ta = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.ma = e;
        this.key = ++pb;
        this.O = this.ha = !1
    }

    function rb(a) {
        a.O = !0;
        a.u = null;
        a.ta = null;
        a.src = null;
        a.ma = null
    };

    function sb(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    }
    var tb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function ub(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < tb.length; f++) c = tb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };

    function vb(a) {
        this.src = a;
        this.d = {};
        this.fa = 0
    }
    vb.prototype.add = function(a, b, c, d, e) {
        var f = this.d[a];
        f || (f = this.d[a] = [], this.fa++);
        var h = wb(f, b, d, e); - 1 < h ? (a = f[h], c || (a.ha = !1)) : (a = new qb(b, this.src, a, !!d, e), a.ha = c, f.push(a));
        return a
    };
    vb.prototype.remove = function(a, b, c, d) {
        if (!(a in this.d)) return !1;
        var e = this.d[a];
        b = wb(e, b, c, d);
        return -1 < b ? (rb(e[b]), v.splice.call(e, b, 1), 0 == e.length && (delete this.d[a], this.fa--), !0) : !1
    };

    function xb(a, b) {
        var c = b.type;
        if (!(c in a.d)) return !1;
        var d = Ea(a.d[c], b);
        d && (rb(b), 0 == a.d[c].length && (delete a.d[c], a.fa--));
        return d
    }
    vb.prototype.ca = function(a) {
        var b = 0,
            c;
        for (c in this.d)
            if (!a || c == a) {
                for (var d = this.d[c], e = 0; e < d.length; e++)++b, rb(d[e]);
                delete this.d[c];
                this.fa--
            }
        return b
    };
    vb.prototype.V = function(a, b, c, d) {
        a = this.d[a];
        var e = -1;
        a && (e = wb(a, b, c, d));
        return -1 < e ? a[e] : null
    };

    function wb(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.O && f.u == b && f.capture == !!c && f.ma == d) return e
        }
        return -1
    };
    var yb = "closure_lm_" + (1E6 * Math.random() | 0),
        zb = {},
        Ab = 0;

    function G(a, b, c, d, e) {
        if (da(b)) {
            for (var f = 0; f < b.length; f++) G(a, b[f], c, d, e);
            return null
        }
        c = Bb(c);
        return ob(a) ? a.t(b, c, d, e) : Cb(a, b, c, !1, d, e)
    }

    function Cb(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var h = !!e,
            k = Db(a);
        k || (a[yb] = k = new vb(a));
        c = k.add(b, c, d, e, f);
        if (c.ta) return c;
        d = Eb();
        c.ta = d;
        d.src = a;
        d.u = c;
        a.addEventListener ? a.addEventListener(b, d, h) : a.attachEvent(b in zb ? zb[b] : zb[b] = "on" + b, d);
        Ab++;
        return c
    }

    function Eb() {
        var a = Fb,
            b = bb ? function(c) {
                return a.call(b.src, b.u, c)
            } : function(c) {
                c = a.call(b.src, b.u, c);
                if (!c) return c
            };
        return b
    }

    function Gb(a, b, c, d, e) {
        if (da(b)) {
            for (var f = 0; f < b.length; f++) Gb(a, b[f], c, d, e);
            return null
        }
        c = Bb(c);
        return ob(a) ? a.Ha(b, c, d, e) : Cb(a, b, c, !0, d, e)
    }

    function Hb(a, b, c, d, e) {
        if (da(b))
            for (var f = 0; f < b.length; f++) Hb(a, b[f], c, d, e);
        else c = Bb(c), ob(a) ? a.La(b, c, d, e) : a && (a = Db(a)) && (b = a.V(b, c, !!d, e)) && I(b)
    }

    function I(a) {
        if ("number" == typeof a || !a || a.O) return !1;
        var b = a.src;
        if (ob(b)) return xb(b.l, a);
        var c = a.type,
            d = a.ta;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(c in zb ? zb[c] : zb[c] = "on" + c, d);
        Ab--;
        (c = Db(b)) ? (xb(c, a), 0 == c.fa && (c.src = null, b[yb] = null)) : rb(a);
        return !0
    }

    function Ib(a, b, c, d) {
        var e = 1;
        if (a = Db(a))
            if (b = a.d[b])
                for (b = Fa(b), a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.capture == c && !f.O && (e &= !1 !== Jb(f, d))
                }
            return Boolean(e)
    }

    function Jb(a, b) {
        var c = a.u,
            d = a.ma || a.src;
        a.ha && I(a);
        return c.call(d, b)
    }

    function Fb(a, b) {
        if (a.O) return !0;
        if (!bb) {
            var c;
            if (!(c = b)) a: {
                c = ["window", "event"];
                for (var d = l, e; e = c.shift();)
                    if (null != d[e]) d = d[e];
                    else {
                        c = null;
                        break a
                    }
                c = d
            }
            e = c;
            c = new mb(e, this);
            d = !0;
            if (!(0 > e.keyCode || void 0 != e.returnValue)) {
                a: {
                    var f = !1;
                    if (0 == e.keyCode) try {
                        e.keyCode = -1;
                        break a
                    } catch (h) {
                        f = !0
                    }
                    if (f || void 0 == e.returnValue) e.returnValue = !0
                }
                e = [];
                for (f = c.currentTarget; f; f = f.parentNode) e.push(f);
                for (var f = a.type, k = e.length - 1; !c.v && 0 <= k; k--) c.currentTarget = e[k], d &= Ib(e[k], f, !0, c);
                for (k = 0; !c.v && k < e.length; k++) c.currentTarget =
                    e[k], d &= Ib(e[k], f, !1, c)
            }
            return d
        }
        return Jb(a, new mb(b, this))
    }

    function Db(a) {
        a = a[yb];
        return a instanceof vb ? a : null
    }
    var Kb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function Bb(a) {
        return ea(a) ? a : a[Kb] || (a[Kb] = function(b) {
            return a.handleEvent(b)
        })
    };

    function J() {
        db.call(this);
        this.l = new vb(this);
        this.$a = this
    }
    u(J, db);
    J.prototype[nb] = !0;
    g = J.prototype;
    g.sa = null;
    g.Ja = function(a) {
        this.sa = a
    };
    g.addEventListener = function(a, b, c, d) {
        G(this, a, b, c, d)
    };
    g.removeEventListener = function(a, b, c, d) {
        Hb(this, a, b, c, d)
    };
    g.dispatchEvent = function(a) {
        var b, c = this.sa;
        if (c)
            for (b = []; c; c = c.sa) b.push(c);
        var c = this.$a,
            d = a.type || a;
        if (n(a)) a = new F(a, c);
        else if (a instanceof F) a.target = a.target || c;
        else {
            var e = a;
            a = new F(d, c);
            ub(a, e)
        }
        var e = !0,
            f;
        if (b)
            for (var h = b.length - 1; !a.v && 0 <= h; h--) f = a.currentTarget = b[h], e = Lb(f, d, !0, a) && e;
        a.v || (f = a.currentTarget = c, e = Lb(f, d, !0, a) && e, a.v || (e = Lb(f, d, !1, a) && e));
        if (b)
            for (h = 0; !a.v && h < b.length; h++) f = a.currentTarget = b[h], e = Lb(f, d, !1, a) && e;
        return e
    };
    g.c = function() {
        J.f.c.call(this);
        this.l && this.l.ca(void 0);
        this.sa = null
    };
    g.t = function(a, b, c, d) {
        return this.l.add(String(a), b, !1, c, d)
    };
    g.Ha = function(a, b, c, d) {
        return this.l.add(String(a), b, !0, c, d)
    };
    g.La = function(a, b, c, d) {
        return this.l.remove(String(a), b, c, d)
    };

    function Lb(a, b, c, d) {
        b = a.l.d[String(b)];
        if (!b) return !0;
        b = Fa(b);
        for (var e = !0, f = 0; f < b.length; ++f) {
            var h = b[f];
            if (h && !h.O && h.capture == c) {
                var k = h.u,
                    t = h.ma || h.src;
                h.ha && xb(a.l, h);
                e = !1 !== k.call(t, d) && e
            }
        }
        return e && !1 != d.Va
    }
    g.V = function(a, b, c, d) {
        return this.l.V(String(a), b, c, d)
    };

    function Mb(a, b) {
        J.call(this);
        this.Z = a || 1;
        this.Q = b || l;
        this.wa = s(this.ob, this);
        this.Ga = ma()
    }
    u(Mb, J);
    g = Mb.prototype;
    g.enabled = !1;
    g.a = null;
    g.setInterval = function(a) {
        this.Z = a;
        this.a && this.enabled ? (this.stop(), this.start()) : this.a && this.stop()
    };
    g.ob = function() {
        if (this.enabled) {
            var a = ma() - this.Ga;
            0 < a && a < 0.8 * this.Z ? this.a = this.Q.setTimeout(this.wa, this.Z - a) : (this.a && (this.Q.clearTimeout(this.a), this.a = null), this.dispatchEvent(Nb), this.enabled && (this.a = this.Q.setTimeout(this.wa, this.Z), this.Ga = ma()))
        }
    };
    g.start = function() {
        this.enabled = !0;
        this.a || (this.a = this.Q.setTimeout(this.wa, this.Z), this.Ga = ma())
    };
    g.stop = function() {
        this.enabled = !1;
        this.a && (this.Q.clearTimeout(this.a), this.a = null)
    };
    g.c = function() {
        Mb.f.c.call(this);
        this.stop();
        delete this.Q
    };
    var Nb = "tick";
    !A && !z || z && z && 9 <= ab || A && E("1.9.1");
    z && E("9");

    function Ob(a) {
        a = a.className;
        return n(a) && a.match(/\S+/g) || []
    }

    function K(a, b) {
        for (var c = Ob(a), d = Ga(arguments, 1), e = c.length + d.length, f = c, h = 0; h < d.length; h++) x(f, d[h]) || f.push(d[h]);
        a.className = c.join(" ");
        return c.length == e
    }

    function M(a, b) {
        var c = Ob(a),
            d = Ga(arguments, 1),
            e = Pb(c, d);
        a.className = e.join(" ");
        return e.length == c.length - d.length
    }

    function Pb(a, b) {
        return Ca(a, function(a) {
            return !x(b, a)
        })
    };
    var Qb = function(a) {
        return function() {
            return a
        }
    }(!0);

    function Sb(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    Sb.prototype.toString = function() {
        return "(" + this.x + ", " + this.y + ")"
    };
    Sb.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };

    function Tb(a, b) {
        this.width = a;
        this.height = b
    }
    Tb.prototype.toString = function() {
        return "(" + this.width + " x " + this.height + ")"
    };
    Tb.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };

    function Ub(a) {
        return a ? new Vb(N(a)) : qa || (qa = new Vb)
    }

    function O(a, b) {
        return n(b) ? a.getElementById(b) : b
    }

    function P(a, b) {
        var c = b || document;
        return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : c.getElementsByClassName ? c.getElementsByClassName(a) : Wb("*", a, b)
    }

    function Q(a) {
        var b = document,
            c = null;
        return (c = b.querySelectorAll && b.querySelector ? b.querySelector("." + a) : P(a, void 0)[0]) || null
    }

    function Wb(a, b, c) {
        var d = document;
        c = c || d;
        a = a && "*" != a ? a.toUpperCase() : "";
        if (c.querySelectorAll && c.querySelector && (a || b)) return c.querySelectorAll(a + (b ? "." + b : ""));
        if (b && c.getElementsByClassName) {
            c = c.getElementsByClassName(b);
            if (a) {
                for (var d = {}, e = 0, f = 0, h; h = c[f]; f++) a == h.nodeName && (d[e++] = h);
                d.length = e;
                return d
            }
            return c
        }
        c = c.getElementsByTagName(a || "*");
        if (b) {
            d = {};
            for (f = e = 0; h = c[f]; f++) a = h.className, "function" == typeof a.split && x(a.split(/\s+/), b) && (d[e++] = h);
            d.length = e;
            return d
        }
        return c
    }

    function Xb(a) {
        var b = Yb(a);
        a = a.parentWindow || a.defaultView;
        return z && E("10") && a.pageYOffset != b.scrollTop ? new Sb(b.scrollLeft, b.scrollTop) : new Sb(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function Yb(a) {
        return B || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement
    }

    function Zb(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }

    function $b(a) {
        for (; a && 1 != a.nodeType;) a = a.nextSibling;
        return a
    }

    function N(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function ac(a) {
        return bc(a, function(a) {
            return x(Ob(a), "tab")
        })
    }

    function bc(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function Vb(a) {
        this.ja = a || l.document || document
    }
    Vb.prototype.I = function(a) {
        return O(this.ja, a)
    };
    Vb.prototype.createElement = function(a) {
        return this.ja.createElement(a)
    };

    function cc(a) {
        db.call(this);
        this.Ea = a;
        this.$ = {}
    }
    u(cc, db);
    var dc = [];
    g = cc.prototype;
    g.t = function(a, b, c, d, e) {
        da(b) || (dc[0] = b, b = dc);
        for (var f = 0; f < b.length; f++) {
            var h = G(a, b[f], c || this.handleEvent, d || !1, e || this.Ea || this);
            if (!h) break;
            this.$[h.key] = h
        }
        return this
    };
    g.Ha = function(a, b, c, d, e) {
        a: {
            if (da(b))
                for (var f = 0; f < b.length; f++) this.Ha(a, b[f], c, d, e);
            else {
                a = Gb(a, b, c || this.handleEvent, d, e || this.Ea || this);
                if (!a) {
                    a = this;
                    break a
                }
                this.$[a.key] = a
            }
            a = this
        }
        return a
    };
    g.La = function(a, b, c, d, e) {
        if (da(b))
            for (var f = 0; f < b.length; f++) this.La(a, b[f], c, d, e);
        else c = c || this.handleEvent, e = e || this.Ea || this, c = Bb(c), d = !!d, b = ob(a) ? a.V(b, c, d, e) : a ? (a = Db(a)) ? a.V(b, c, d, e) : null : null, b && (I(b), delete this.$[b.key]);
        return this
    };
    g.ca = function() {
        sb(this.$, I);
        this.$ = {}
    };
    g.c = function() {
        cc.f.c.call(this);
        this.ca()
    };
    g.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };

    function ec(a) {
        F.call(this, "navigate");
        this.pb = a
    }
    u(ec, F);

    function fc(a, b) {
        for (var c = [a], d = b.length - 1; 0 <= d; --d) c.push(typeof b[d], b[d]);
        return c.join("\x0B")
    };

    function R(a, b, c, d) {
        J.call(this);
        if (a && !b) throw Error("Can't use invisible history without providing a blank page.");
        var e;
        c ? e = c : (e = "history_state" + gc, document.write(ra(hc, e, e)), e = O(document, e));
        this.X = e;
        this.n = c ? N(c) ? N(c).parentWindow || N(c).defaultView : window : window;
        this.na = b;
        z && !b && (this.na = "https" == window.location.protocol ? "https:///" : 'javascript:""');
        this.a = new Mb(ic);
        b = la(kb, this.a);
        this.aa || (this.aa = []);
        this.aa.push(s(b, void 0));
        this.F = !a;
        this.q = new cc(this);
        if (a || jc) d ? a = d : (a = "history_iframe" +
            gc, d = this.na ? 'src="' + ta(this.na) + '"' : "", document.write(ra(kc, a, d)), a = O(document, a)), this.J = a, this.Ya = !0;
        jc && (this.q.t(this.n, "load", this.ib), this.Xa = this.Aa = !1);
        this.F ? lc(this, mc(this), !0) : nc(this, this.X.value);
        gc++
    }
    u(R, J);
    R.prototype.S = !1;
    R.prototype.M = !1;
    R.prototype.K = null;
    var oc = function(a, b) {
            var c = b || fc;
            return function() {
                var b = this || l,
                    b = b.closure_memoize_cache_ || (b.closure_memoize_cache_ = {}),
                    e = c(fa(a), arguments);
                return b.hasOwnProperty(e) ? b[e] : b[e] = a.apply(this, arguments)
            }
        }(function() {
            return z ? 8 <= document.documentMode : "onhashchange" in l
        }),
        jc = z && !(z && 8 <= ab);
    g = R.prototype;
    g.L = null;
    g.c = function() {
        R.f.c.call(this);
        this.q.p();
        this.P(!1)
    };
    g.P = function(a) {
        if (a != this.S)
            if (jc && !this.Aa) this.Xa = a;
            else if (a)
            if (y ? this.q.t(this.n.document, pc, this.lb) : A && this.q.t(this.n, "pageshow", this.kb), oc() && this.F) this.q.t(this.n, "hashchange", this.jb), this.S = !0, this.dispatchEvent(new ec(mc(this)));
            else {
                if (!z || this.Aa) this.q.t(this.a, Nb, s(this.Oa, this, !0)), this.S = !0, jc || (this.K = mc(this), this.dispatchEvent(new ec(mc(this)))), this.a.start()
            } else this.S = !1, this.q.ca(), this.a.stop()
    };
    g.ib = function() {
        this.Aa = !0;
        this.X.value && nc(this, this.X.value, !0);
        this.P(this.Xa)
    };
    g.kb = function(a) {
        a.r.persisted && (this.P(!1), this.P(!0))
    };
    g.jb = function() {
        var a = this.W(this.n);
        a != this.K && qc(this, a)
    };

    function mc(a) {
        return null != a.L ? a.L : a.F ? a.W(a.n) : rc(a) || ""
    }

    function sc(a) {
        var b = tc;
        mc(b) != a && (b.F ? (lc(b, a, !1), oc() || z && nc(b, a, !1, void 0), b.S && b.Oa()) : (nc(b, a, !1), b.L = b.K = b.X.value = a, b.dispatchEvent(new ec(a))))
    }
    g.W = function(a) {
        a = a.location.href;
        var b = a.indexOf("#");
        return 0 > b ? "" : a.substring(b + 1)
    };

    function lc(a, b, c) {
        a = a.n.location;
        var d = a.href.split("#")[0],
            e = -1 != a.href.indexOf("#");
        if (jc || e || b) d += "#" + b;
        d != a.href && (c ? a.replace(d) : a.href = d)
    }

    function nc(a, b, c, d) {
        if (a.Ya || b != rc(a))
            if (a.Ya = !1, b = encodeURIComponent(String(b)), z) {
                var e = a.J.contentDocument || a.J.contentWindow.document;
                e.open("text/html", c ? "replace" : void 0);
                e.write(ra(uc, ta(d || a.n.document.title), b));
                e.close()
            } else if (b = a.na + "#" + b, a = a.J.contentWindow) c ? a.location.replace(b) : a.location.href = b
    }

    function rc(a) {
        if (z) return a = a.J.contentDocument || a.J.contentWindow.document, a.body ? decodeURIComponent(a.body.innerHTML.replace(/\+/g, " ")) : null;
        var b = a.J.contentWindow;
        if (b) {
            var c;
            try {
                c = decodeURIComponent(a.W(b).replace(/\+/g, " "))
            } catch (d) {
                return a.M || (!0 != a.M && a.a.setInterval(vc), a.M = !0), null
            }
            a.M && (!1 != a.M && a.a.setInterval(ic), a.M = !1);
            return c || null
        }
        return null
    }
    g.Oa = function() {
        if (this.F) {
            var a = this.W(this.n);
            a != this.K && qc(this, a)
        }
        if (!this.F || jc)
            if (a = rc(this) || "", null == this.L || a == this.L) this.L = null, a != this.K && qc(this, a)
    };

    function qc(a, b) {
        a.K = a.X.value = b;
        a.F ? (jc && nc(a, b), lc(a, b)) : nc(a, b);
        a.dispatchEvent(new ec(mc(a)))
    }
    g.lb = function() {
        this.a.stop();
        this.a.start()
    };
    var pc = ["mousedown", "keydown", "mousemove"],
        uc = "<title>%s</title><body>%s</body>",
        kc = '<iframe id="%s" style="display:none" %s></iframe>',
        hc = '<input type="text" name="%s" id="%s" style="display:none">',
        gc = 0,
        ic = 150,
        vc = 1E4;

    function wc(a, b) {
        return a.dataset ? a.dataset[b] : a.getAttribute("data-" + String(b).replace(/([A-Z])/g, "-$1").toLowerCase())
    };
    /*
     Portions of this code are from the Dojo Toolkit, received by
     The Closure Library Authors under the BSD license. All other code is
     Copyright 2005-2009 The Closure Library Authors. All Rights Reserved.

    The "New" BSD License:

    Copyright (c) 2005-2009, The Dojo Foundation
    All rights reserved.

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions are met:

     Redistributions of source code must retain the above copyright notice, this
        list of conditions and the following disclaimer.
     Redistributions in binary form must reproduce the above copyright notice,
        this list of conditions and the following disclaimer in the documentation
        and/or other materials provided with the distribution.
     Neither the name of the Dojo Foundation nor the names of its contributors
        may be used to endorse or promote products derived from this software
        without specific prior written permission.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
    ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
    WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
    DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
    FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
    SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
    CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
    OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
    OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    */
    var xc = function() {
        function a(a, c) {
            if (!a) return [];
            if (a.constructor == Array) return a;
            if (!n(a)) return [a];
            if (n(c) && (c = O(document, c), !c)) return [];
            c = c || document;
            var e = c.ownerDocument || c.documentElement;
            na = c.contentType && "application/xml" == c.contentType || y && (c.doctype || "[object XMLDocument]" == e.toString()) || !!e && (z ? e.xml : c.xmlVersion || e.xmlVersion);
            return (e = d(a)(c)) && e.qa ? e : b(e)
        }

        function b(a) {
            if (a && a.qa) return a;
            var b = [];
            if (!a || !a.length) return b;
            a[0] && b.push(a[0]);
            if (2 > a.length) return b;
            L++;
            if (z && na) {
                var c =
                    L + "";
                a[0].setAttribute("_zipIdx", c);
                for (var d = 1, e; e = a[d]; d++) a[d].getAttribute("_zipIdx") != c && b.push(e), e.setAttribute("_zipIdx", c)
            } else if (z && a.ab) try {
                for (d = 1; e = a[d]; d++) fb(e) && b.push(e)
            } catch (f) {} else
                for (a[0] && (a[0]._zipIdx = L), d = 1; e = a[d]; d++) a[d]._zipIdx != L && b.push(e), e._zipIdx = L;
            return b
        }

        function c(a, b) {
            if (!b) return 1;
            var c = Xd(a);
            return b[c] ? 0 : b[c] = 1
        }

        function d(a, b) {
            if (Pc) {
                var c = Qc[a];
                if (c && !b) return c
            }
            if (c = Rc[a]) return c;
            var c = a.charAt(0),
                f = -1 == a.indexOf(" ");
            0 <= a.indexOf("#") && f && (b = !0);
            if (!Pc ||
                b || -1 != ">~+".indexOf(c) || z && -1 != a.indexOf(":") || Sc && 0 <= a.indexOf(".") || -1 != a.indexOf(":contains") || -1 != a.indexOf("|=")) {
                var h = a.split(/\s*,\s*/);
                return Rc[a] = 2 > h.length ? e(a) : function(a) {
                    for (var b = 0, c = [], d; d = h[b++];) c = c.concat(e(d)(a));
                    return c
                }
            }
            var Wd = 0 <= ">~+".indexOf(a.charAt(a.length - 1)) ? a + " *" : a;
            return Qc[a] = function(b) {
                try {
                    if (9 != b.nodeType && !f) throw "";
                    var c = b.querySelectorAll(Wd);
                    z ? c.ab = !0 : c.qa = !0;
                    return c
                } catch (e) {
                    return d(a, !0)(b)
                }
            }
        }

        function e(a) {
            var b = Tc(sa(a));
            if (1 == b.length) {
                var c = f(b[0]);
                return function(a) {
                    if (a = c(a, [])) a.qa = !0;
                    return a
                }
            }
            return function(a) {
                a = Ja(a);
                for (var c, d, e = b.length, Oc, V, h = 0; h < e; h++) {
                    V = [];
                    c = b[h];
                    d = a.length - 1;
                    0 < d && (Oc = {}, V.qa = !0);
                    d = f(c);
                    for (var k = 0; c = a[k]; k++) d(c, V, Oc);
                    if (!V.length) break;
                    a = V
                }
                return V
            }
        }

        function f(a) {
            var b = Uc[a.N];
            if (b) return b;
            var c = a.Sa,
                c = c ? c.ra : "",
                d = H(a, {
                    G: 1
                }),
                e = "*" == a.e,
                f = document.getElementsByClassName;
            if (c) f = {
                G: 1
            }, e && (f.e = 1), d = H(a, f), "+" == c ? b = t(d) : "~" == c ? b = k(d) : ">" == c && (b = h(d));
            else if (a.id) d = !a.Ua && e ? Qb : H(a, {
                G: 1,
                id: 1
            }), b = function(b, c) {
                var e =
                    Ub(b).I(a.id),
                    f;
                if ((f = e && d(e)) && !(f = 9 == b.nodeType)) {
                    for (f = e.parentNode; f && f != b;) f = f.parentNode;
                    f = !!f
                }
                if (f) return Ja(e, c)
            };
            else if (f && /\{\s*\[native code\]\s*\}/.test(String(f)) && a.j.length && !Sc) var d = H(a, {
                    G: 1,
                    j: 1,
                    id: 1
                }),
                Yd = a.j.join(" "),
                b = function(a, b) {
                    for (var c = Ja(0, b), e, f = 0, Ia = a.getElementsByClassName(Yd); e = Ia[f++];) d(e, a) && c.push(e);
                    return c
                };
            else e || a.Ua ? (d = H(a, {
                G: 1,
                e: 1,
                id: 1
            }), b = function(b, c) {
                for (var e = Ja(0, c), f, Ia = 0, V = b.getElementsByTagName(a.Da()); f = V[Ia++];) d(f, b) && e.push(f);
                return e
            }) : b = function(b,
                c) {
                for (var d = Ja(0, c), e, f = 0, Ia = b.getElementsByTagName(a.Da()); e = Ia[f++];) d.push(e);
                return d
            };
            return Uc[a.N] = b
        }

        function h(a) {
            a = a || Qb;
            return function(b, d, e) {
                for (var f = 0, h = b[Vc]; b = h[f++];) Ka(b) && (!e || c(b, e)) && a(b, f) && d.push(b);
                return d
            }
        }

        function k(a) {
            return function(b, d, e) {
                for (b = b[La]; b;) {
                    if (Ka(b)) {
                        if (e && !c(b, e)) break;
                        a(b) && d.push(b)
                    }
                    b = b[La]
                }
                return d
            }
        }

        function t(a) {
            return function(b, d, e) {
                for (; b = b[La];)
                    if (!hb || fb(b)) {
                        e && !c(b, e) || !a(b) || d.push(b);
                        break
                    }
                return d
            }
        }

        function H(a, b) {
            if (!a) return Qb;
            b = b || {};
            var c = null;
            b.G || (c = oa(c, fb));
            b.e || "*" != a.e && (c = oa(c, function(b) {
                return b && b.tagName == a.Da()
            }));
            b.j || w(a.j, function(a, b) {
                var d = RegExp("(?:^|\\s)" + a + "(?:\\s|$)");
                c = oa(c, function(a) {
                    return d.test(a.className)
                });
                c.count = b
            });
            b.w || w(a.w, function(a) {
                var b = a.name;
                Rb[b] && (c = oa(c, Rb[b](b, a.value)))
            });
            b.ga || w(a.ga, function(a) {
                var b, d = a.va;
                a.type && Wc[a.type] ? b = Wc[a.type](d, a.Ia) : d.length && (b = Zd(d));
                b && (c = oa(c, b))
            });
            b.id || a.id && (c = oa(c, function(b) {
                return !!b && b.id == a.id
            }));
            c || "default" in b || (c = Qb);
            return c
        }

        function q(a) {
            return ib(a) %
                2
        }

        function r(a) {
            return !(ib(a) % 2)
        }

        function ib(a) {
            var b = a.parentNode,
                c = 0,
                d = b[Vc],
                e = a._i || -1,
                f = b._l || -1;
            if (!d) return -1;
            d = d.length;
            if (f == d && 0 <= e && 0 <= f) return e;
            b._l = d;
            e = -1;
            for (b = b.firstElementChild || b.firstChild; b; b = b[La]) Ka(b) && (b._i = ++c, a === b && (e = c));
            return e
        }

        function Xc(a) {
            for (; a = a[La];)
                if (Ka(a)) return !1;
            return !0
        }

        function Yc(a) {
            for (; a = a[$d];)
                if (Ka(a)) return !1;
            return !0
        }

        function pa(a, b) {
            return a ? "class" == b ? a.className || "" : "for" == b ? a.htmlFor || "" : "style" == b ? a.style.cssText || "" : (na ? a.getAttribute(b) : a.getAttribute(b,
                2)) || "" : ""
        }

        function fb(a) {
            return 1 == a.nodeType
        }

        function oa(a, b) {
            return a ? b ? function() {
                return a.apply(window, arguments) && b.apply(window, arguments)
            } : a : b
        }

        function Tc(a) {
            function b() {
                0 <= t && (m.id = c(t, p).replace(/\\/g, ""), t = -1);
                if (0 <= q) {
                    var a = q == p ? null : c(q, p);
                    0 > ">~+".indexOf(a) ? m.e = a : m.ra = a;
                    q = -1
                }
                0 <= gb && (m.j.push(c(gb + 1, p).replace(/\\/g, "")), gb = -1)
            }

            function c(b, d) {
                return sa(a.slice(b, d))
            }
            a = 0 <= ">~+".indexOf(a.slice(-1)) ? a + " * " : a + " ";
            for (var d = [], e = -1, f = -1, h = -1, k = -1, gb = -1, t = -1, q = -1, r = "", C = "", H, p = 0, L = a.length,
                m = null, D = null; r = C, C = a.charAt(p), p < L; p++) "\\" != r && (m || (H = p, m = {
                    N: null,
                    w: [],
                    ga: [],
                    j: [],
                    e: null,
                    ra: null,
                    id: null,
                    Da: function() {
                        return na ? this.mb : this.e
                    }
                }, q = p), 0 <= e ? "]" == C ? (D.va ? D.Ia = c(h || e + 1, p) : D.va = c(e + 1, p), !(e = D.Ia) || '"' != e.charAt(0) && "'" != e.charAt(0) || (D.Ia = e.slice(1, -1)), m.ga.push(D), D = null, e = h = -1) : "=" == C && (h = 0 <= "|~^$*".indexOf(r) ? r : "", D.type = h + C, D.va = c(e + 1, p - h.length), h = p + 1) : 0 <= f ? ")" == C && (0 <= k && (D.value = c(f + 1, p)), k = f = -1) : "#" == C ? (b(), t = p + 1) : "." == C ? (b(), gb = p) : ":" == C ? (b(), k = p) : "[" == C ? (b(), e = p, D = {}) : "(" ==
                C ? (0 <= k && (D = {
                    name: c(k + 1, p),
                    value: null
                }, m.w.push(D)), f = p) : " " == C && r != C && (b(), 0 <= k && m.w.push({
                    name: c(k + 1, p)
                }), m.Ua = m.w.length || m.ga.length || m.j.length, m.rb = m.N = c(H, p), m.mb = m.e = m.ra ? null : m.e || "*", m.e && (m.e = m.e.toUpperCase()), d.length && d[d.length - 1].ra && (m.Sa = d.pop(), m.N = m.Sa.N + " " + m.N), d.push(m), m = null));
            return d
        }

        function Ja(a, b) {
            var c = b || [];
            a && c.push(a);
            return c
        }
        var Sc = B && "BackCompat" == document.compatMode,
            Vc = document.firstChild.children ? "children" : "childNodes",
            na = !1,
            Wc = {
                "*=": function(a, b) {
                    return function(c) {
                        return 0 <=
                            pa(c, a).indexOf(b)
                    }
                },
                "^=": function(a, b) {
                    return function(c) {
                        return 0 == pa(c, a).indexOf(b)
                    }
                },
                "$=": function(a, b) {
                    return function(c) {
                        c = " " + pa(c, a);
                        return c.lastIndexOf(b) == c.length - b.length
                    }
                },
                "~=": function(a, b) {
                    var c = " " + b + " ";
                    return function(b) {
                        return 0 <= (" " + pa(b, a) + " ").indexOf(c)
                    }
                },
                "|=": function(a, b) {
                    b = " " + b;
                    return function(c) {
                        c = " " + pa(c, a);
                        return c == b || 0 == c.indexOf(b + "-")
                    }
                },
                "=": function(a, b) {
                    return function(c) {
                        return pa(c, a) == b
                    }
                }
            },
            hb = "undefined" == typeof document.firstChild.nextElementSibling,
            La = hb ?
            "nextSibling" : "nextElementSibling",
            $d = hb ? "previousSibling" : "previousElementSibling",
            Ka = hb ? fb : Qb,
            Rb = {
                checked: function() {
                    return function(a) {
                        return a.checked || a.attributes.checked
                    }
                },
                "first-child": function() {
                    return Yc
                },
                "last-child": function() {
                    return Xc
                },
                "only-child": function() {
                    return function(a) {
                        return Yc(a) && Xc(a) ? !0 : !1
                    }
                },
                empty: function() {
                    return function(a) {
                        var b = a.childNodes;
                        for (a = a.childNodes.length - 1; 0 <= a; a--) {
                            var c = b[a].nodeType;
                            if (1 === c || 3 == c) return !1
                        }
                        return !0
                    }
                },
                contains: function(a, b) {
                    var c = b.charAt(0);
                    if ('"' == c || "'" == c) b = b.slice(1, -1);
                    return function(a) {
                        return 0 <= a.innerHTML.indexOf(b)
                    }
                },
                not: function(a, b) {
                    var c = Tc(b)[0],
                        d = {
                            G: 1
                        };
                    "*" != c.e && (d.e = 1);
                    c.j.length || (d.j = 1);
                    var e = H(c, d);
                    return function(a) {
                        return !e(a)
                    }
                },
                "nth-child": function(a, b) {
                    if ("odd" == b) return q;
                    if ("even" == b) return r;
                    if (-1 != b.indexOf("n")) {
                        var c = b.split("n", 2),
                            d = c[0] ? "-" == c[0] ? -1 : parseInt(c[0], 10) : 1,
                            e = c[1] ? parseInt(c[1], 10) : 0,
                            f = 0,
                            h = -1;
                        0 < d ? 0 > e ? e = e % d && d + e % d : 0 < e && (e >= d && (f = e - e % d), e %= d) : 0 > d && (d *= -1, 0 < e && (h = e, e %= d));
                        if (0 < d) return function(a) {
                            a =
                                ib(a);
                            return a >= f && (0 > h || a <= h) && a % d == e
                        };
                        b = e
                    }
                    var k = parseInt(b, 10);
                    return function(a) {
                        return ib(a) == k
                    }
                }
            },
            Zd = z ? function(a) {
                var b = a.toLowerCase();
                "class" == b && (a = "className");
                return function(c) {
                    return na ? c.getAttribute(a) : c[a] || c[b]
                }
            } : function(a) {
                return function(b) {
                    return b && b.getAttribute && b.hasAttribute(a)
                }
            },
            Uc = {},
            Rc = {},
            Qc = {},
            Pc = !!document.querySelectorAll && (!B || E("526")),
            L = 0,
            Xd = z ? function(a) {
                return na ? a.getAttribute("_uid") || a.setAttribute("_uid", ++L) || L : a.uniqueID
            } : function(a) {
                return a._uid || (a._uid =
                    ++L)
            };
        a.w = Rb;
        return a
    }();
    aa("goog.dom.query", xc);
    aa("goog.dom.query.pseudos", xc.w);

    function S(a, b, c) {
        n(b) ? yc(a, c, b) : sb(b, la(yc, a))
    }

    function yc(a, b, c) {
        var d;
        a: if (d = za(c), void 0 === a.style[d] && (c = (B ? "Webkit" : A ? "Moz" : z ? "ms" : y ? "O" : null) + Aa(c), void 0 !== a.style[c])) {
            d = c;
            break a
        }
        d && (a.style[d] = b)
    }

    function zc(a, b) {
        var c;
        a: {
            c = N(a);
            if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null))) {
                c = c[b] || c.getPropertyValue(b) || "";
                break a
            }
            c = ""
        }
        return c || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function Ac(a) {
        var b;
        try {
            b = a.getBoundingClientRect()
        } catch (c) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        z && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }

    function Bc(a) {
        if (z && !(z && 8 <= ab)) return a.offsetParent;
        var b = N(a),
            c = zc(a, "position"),
            d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (c = zc(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return null
    }

    function Cc(a) {
        var b, c = N(a),
            d = zc(a, "position"),
            e = A && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY),
            f = new Sb(0, 0),
            h;
        b = c ? N(c) : document;
        (h = !z) || (h = z && 9 <= ab) || (h = "CSS1Compat" == Ub(b).ja.compatMode);
        h = h ? b.documentElement : b.body;
        if (a == h) return f;
        if (a.getBoundingClientRect) b = Ac(a), a = Ub(c), a = Xb(a.ja), f.x = b.left + a.x, f.y = b.top + a.y;
        else if (c.getBoxObjectFor && !e) b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(h), f.x = b.screenX - a.screenX, f.y = b.screenY -
            a.screenY;
        else {
            b = a;
            do {
                f.x += b.offsetLeft;
                f.y += b.offsetTop;
                b != a && (f.x += b.clientLeft || 0, f.y += b.clientTop || 0);
                if (B && "fixed" == zc(b, "position")) {
                    f.x += c.body.scrollLeft;
                    f.y += c.body.scrollTop;
                    break
                }
                b = b.offsetParent
            } while (b && b != a);
            if (y || B && "absolute" == d) f.y -= c.body.offsetTop;
            for (b = a;
                (b = Bc(b)) && b != c.body && b != h;) f.x -= b.scrollLeft, y && "TR" == b.tagName || (f.y -= b.scrollTop)
        }
        return f
    }

    function Dc(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = B && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = Ac(a), new Tb(a.right - a.left, a.bottom - a.top)) : new Tb(b, c)
    };
    z || B && E("525");

    function Ec() {}
    ba(Ec);
    Ec.prototype.hb = 0;
    Ec.s();

    function Fc(a) {
        J.call(this);
        a || Ub()
    }
    u(Fc, J);
    g = Fc.prototype;
    g.fb = Ec.s();

    function Gc(a, b) {
        switch (a) {
            case 1:
                return b ? "disable" : "enable";
            case 2:
                return b ? "highlight" : "unhighlight";
            case 4:
                return b ? "activate" : "deactivate";
            case 8:
                return b ? "select" : "unselect";
            case 16:
                return b ? "check" : "uncheck";
            case 32:
                return b ? "focus" : "blur";
            case 64:
                return b ? "open" : "close"
        }
        throw Error("Invalid component state");
    }
    g.Ra = null;
    g.oa = !1;
    g.H = null;
    g.ba = null;
    g.ia = null;
    g.R = null;
    g.qb = !1;
    g.I = function() {
        return this.H
    };
    g.getParent = function() {
        return this.ba
    };
    g.Ja = function(a) {
        if (this.ba && this.ba != a) throw Error("Method not supported");
        Fc.f.Ja.call(this, a)
    };
    g.T = function() {
        Hc(this, function(a) {
            a.oa && a.T()
        });
        this.la && this.la.ca();
        this.oa = !1
    };
    g.c = function() {
        this.oa && this.T();
        this.la && (this.la.p(), delete this.la);
        Hc(this, function(a) {
            a.p()
        });
        !this.qb && this.H && Zb(this.H);
        this.ba = this.H = this.R = this.ia = null;
        Fc.f.c.call(this)
    };

    function Hc(a, b) {
        a.ia && w(a.ia, b, void 0)
    }
    g.removeChild = function(a, b) {
        if (a) {
            var c = n(a) ? a : a.Ra || (a.Ra = ":" + (a.fb.hb++).toString(36));
            a = this.R && c ? (c in this.R ? this.R[c] : void 0) || null : null;
            if (c && a) {
                var d = this.R;
                c in d && delete d[c];
                Ea(this.ia, a);
                b && (a.T(), a.H && Zb(a.H));
                c = a;
                if (null == c) throw Error("Unable to set parent component");
                c.ba = null;
                Fc.f.Ja.call(c, null)
            }
        }
        if (!a) throw Error("Child is not in parent component");
        return a
    };
    var Ic;
    document.createElement("input");

    function Jc(a, b) {
        if (!a) throw Error("Invalid class name " + a);
        if (!ea(b)) throw Error("Invalid decorator function " + b);
    }
    var Kc = {};

    function T() {}
    var Lc;
    ba(T);
    g = T.prototype;
    g.ka = function(a, b, c) {
        if (a = a.I ? a.I() : a)
            if (z && !E("7")) {
                var d = Mc(Ob(a), b);
                d.push(b);
                la(c ? K : M, a).apply(null, d)
            } else c ? K(a, b) : M(a, b)
    };

    function Nc(a, b) {
        var c;
        if (a.B & 32 && (c = a.Ca())) {
            if (!b && a.h & 32) {
                try {
                    c.blur()
                } catch (d) {}
                a.h & 32 && a.eb()
            }
            var e;
            e = c.getAttributeNode("tabindex");
            if (e = null != e && e.specified) e = c.tabIndex, e = "number" == typeof e && 0 <= e && 32768 > e;
            e != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
        }
    }
    g.A = function(a, b, c) {
        var d = a.I();
        if (d) {
            var e = this.Ba(b);
            e && this.ka(a, e, c);
            Lc || (Lc = {
                1: "disabled",
                8: "selected",
                16: "checked",
                64: "expanded"
            });
            if (a = Lc[b]) b = ca(c), ("array" == b || "object" == b && "number" == typeof c.length) && (c = c.join(" ")), b = "aria-" + a, "" === c || void 0 == c ? (Ic || (Ic = {
                    atomic: !1,
                    autocomplete: "none",
                    dropeffect: "none",
                    haspopup: !1,
                    live: "off",
                    multiline: !1,
                    multiselectable: !1,
                    orientation: "vertical",
                    readonly: !1,
                    relevant: "additions text",
                    required: !1,
                    sort: "none",
                    busy: !1,
                    disabled: !1,
                    hidden: !1,
                    invalid: "false"
                }),
                c = Ic, a in c ? d.setAttribute(b, c[a]) : d.removeAttribute(b)) : d.setAttribute(b, c)
        }
    };
    g.Ca = function(a) {
        return a.I()
    };
    g.U = function() {
        return "goog-control"
    };

    function Mc(a, b) {
        var c = [];
        b && (a = a.concat([b]));
        w([], function(d) {
            !Da(d, la(x, a)) || b && !x(d, b) || c.push(d.join("_"))
        });
        return c
    }
    g.Ba = function(a) {
        if (!this.Pa) {
            var b = this.U();
            this.Pa = {
                1: b + "-disabled",
                2: b + "-hover",
                4: b + "-active",
                8: b + "-selected",
                16: b + "-checked",
                32: b + "-focused",
                64: b + "-open"
            }
        }
        return this.Pa[a]
    };

    function U(a, b, c) {
        Fc.call(this, c);
        if (!(a = b)) {
            a = this.constructor;
            for (var d; a;) {
                d = fa(a);
                if (d = Kc[d]) break;
                a = a.f ? a.f.constructor : null
            }
            a = d ? ea(d.s) ? d.s() : new d : null
        }
        this.da = a
    }
    u(U, Fc);
    g = U.prototype;
    g.h = 0;
    g.B = 39;
    g.Ma = 255;
    g.nb = 0;
    g.Za = !0;
    g.m = null;
    g.Ca = function() {
        return this.da.Ca(this)
    };
    g.ka = function(a, b) {
        b ? a && (this.m ? x(this.m, a) || this.m.push(a) : this.m = [a], this.da.ka(this, a, !0)) : a && this.m && Ea(this.m, a) && (0 == this.m.length && (this.m = null), this.da.ka(this, a, !1))
    };
    g.T = function() {
        U.f.T.call(this);
        this.pa && this.pa.detach();
        this.Za && this.isEnabled() && Nc(this, !1)
    };
    g.c = function() {
        U.f.c.call(this);
        this.pa && (this.pa.p(), delete this.pa);
        delete this.da;
        this.m = null
    };
    g.isEnabled = function() {
        return !(this.h & 1)
    };
    g.P = function(a) {
        var b = this.getParent();
        b && "function" == typeof b.isEnabled && !b.isEnabled() || !Zc(this, 1, !a) || (a || (this.setActive(!1), Zc(this, 2, !1) && this.A(2, !1)), this.Za && Nc(this, a), this.A(1, !a))
    };
    g.setActive = function(a) {
        Zc(this, 4, a) && this.A(4, a)
    };
    g.A = function(a, b) {
        this.B & a && b != !!(this.h & a) && (this.da.A(this, a, b), this.h = b ? this.h | a : this.h & ~a)
    };

    function W(a, b) {
        if (a.oa && a.h & b) throw Error("Component already rendered");
        a.h & b && a.A(b, !1);
        a.B &= ~b
    }

    function Zc(a, b, c) {
        return !!(a.B & b) && !!(a.h & b) != c && (!(a.nb & b) || a.dispatchEvent(Gc(b, c))) && !a.za
    }
    g.eb = function() {
        this.Ma & 4 && this.B & 4 && this.setActive(!1);
        this.Ma & 32 && this.B & 32 && Zc(this, 32, !1) && this.A(32, !1)
    };
    if (!ea(U)) throw Error("Invalid component class " + U);
    if (!ea(T)) throw Error("Invalid renderer class " + T);
    var $c = fa(U);
    Kc[$c] = T;
    Jc("goog-control", function() {
        return new U
    });

    function ad() {}
    u(ad, T);
    ba(ad);
    ad.prototype.U = function() {
        return "goog-menuheader"
    };

    function bd(a, b, c) {
        U.call(this, 0, c || ad.s(), b);
        W(this, 1);
        W(this, 2);
        W(this, 4);
        W(this, 32);
        this.h = 1
    }
    u(bd, U);
    Jc("goog-menuheader", function() {
        return new bd
    });

    function cd() {
        this.Qa = []
    }
    u(cd, T);
    ba(cd);
    cd.prototype.Ba = function(a) {
        switch (a) {
            case 2:
                a = this.Qa[0];
                if (!a) {
                    a = this.U() + "-highlight";
                    this.Qa[0] = a
                }
                return a;
            case 16:
            case 8:
                return "goog-option-selected";
            default:
                return cd.f.Ba.call(this, a)
        }
    };
    cd.prototype.U = function() {
        return "goog-menuitem"
    };

    function dd(a, b, c, d) {
        U.call(this, 0, d || cd.s(), c)
    }
    u(dd, U);
    Jc("goog-menuitem", function() {
        return new dd
    });

    function ed() {}
    u(ed, T);
    ba(ed);
    ed.prototype.U = function() {
        return "goog-menuseparator"
    };

    function fd(a, b) {
        U.call(this, 0, a || ed.s(), b);
        W(this, 1);
        W(this, 2);
        W(this, 4);
        W(this, 32);
        this.h = 1
    }
    u(fd, U);
    Jc("goog-menuseparator", function() {
        return new fd
    });
    Jc("goog-menuseparator", function() {
        return new fd
    });

    function gd(a, b, c, d) {
        dd.call(this, 0, 0, c, d)
    }
    u(gd, dd);
    Jc("goog-combobox-item", function() {
        return new gd
    });

    function hd() {
        function a() {
            h = +new Date;
            e = null;
            f = b.apply(c, d)
        }
        var b = id,
            c, d, e, f, h = 0;
        return function() {
            var k = +new Date,
                t = 20 - (k - h);
            c = this;
            d = arguments;
            0 >= t ? (clearTimeout(e), e = null, h = k, f = b.apply(c, d)) : e || (e = setTimeout(a, t));
            return f
        }
    }

    function jd(a, b, c) {
        var d, e = null;
        return function() {
            var f = this,
                h = arguments,
                k = c && !e;
            clearTimeout(e);
            e = setTimeout(function() {
                e = null;
                c || (d = a.apply(f, h))
            }, b);
            k && (d = a.apply(f, h));
            return d
        }
    }
    var kd = !Modernizr.touch,
        ld = !1;

    function md(a) {
        ld || (ld = !0, Gb(document, "mousemove", function() {
            kd = !0;
            ld = !1;
            a()
        }))
    }
    var nd = window.isScrolling = !1;

    function od(a) {
        a = a || "hoverable";
        if (kd) {
            K(document.body, a);
            var b = jd(function() {
                nd = window.isScrolling = !1;
                K(document.body, a)
            }, 200);
            G(window, "scroll", function() {
                nd || (nd = window.isScrolling = !0, M(document.body, a));
                b()
            })
        } else md(function() {
            od(a)
        })
    }

    function pd(a) {
        var b = Q("js-tabs"),
            c = Q("js-tab-viewport"),
            d = X;
        this.Na = Q("js-gw-container");
        this.D = b;
        this.ea = P("js-tab", this.D);
        this.xa = c;
        this.g = P("js-tab-content", this.xa);
        this.gb = d;
        this.Fa = Modernizr.mq("(max-width: 767px)");
        this.ua = !1;
        this.ya = Math.min(this.ea.length, this.g.length);
        this.b = {
            content: void 0,
            C: void 0
        };
        this.Y = this.k = 0;
        this.Ka = !1;
        this.i = !0;
        this.o = !1;
        this.Wa = "function" === typeof a ? a : function() {};
        qd(this)
    }

    function qd(a) {
        a.gb && rd(a);
        a.Fa || sd(a);
        w(a.ea, function(b) {
            b.cb = Hammer(b);
            b.cb.on("tap", function() {
                a.Ka ? td(a, b) : ud(a, b);
                "undefined" !== typeof ga && ga("send", "event", "Tab Navigation", "tap on a tab", null, b.textContent)
            })
        });
        var b = jd(function() {
            setTimeout(function() {
                a.k = 0;
                a.o = !1
            }, 1E3)
        }, 500, !1);
        G(a.xa, ["mousewheel", "DOMMouseScroll"], function(c) {
            a.i || a.o || (b(), c.preventDefault(), "mousewheel" === c.type ? a.k += c.r.wheelDelta : "DOMMouseScroll" === c.type && (a.k += -1 * c.r.detail), -200 > a.k ? (a.k = 0, a.o = !0, vd(a)) : 200 < a.k &&
                (a.k = 0, a.o = !0, wd(a)))
        });
        G(window, ["keyup"], function(b) {
            if (!a.i && !a.o)
                if (37 === b.keyCode || 38 === b.keyCode) wd(a), b.preventDefault();
                else if (39 === b.keyCode || 40 === b.keyCode) vd(a), b.preventDefault()
        });
        Modernizr.touch && (a.bb = Hammer(a.xa), a.bb.on("swiperight swipeleft swipeup swipedown", jd(function(b) {
            a.i || (b.preventDefault(), "swiperight" === b.type || "swipeup" === b.type ? wd(a) : "swipeleft" !== b.type && "swipedown" !== b.type || vd(a))
        }, 70, !0)))
    }

    function vd(a) {
        var b;
        if (a.Y + 1 === a.ya) sc("/outro");
        else {
            b = a.Y + 1;
            var c = a.ea[b];
            b = a.g[b];
            a.Wa(b.id);
            xd(a, a.b.content, b, -1);
            yd(a, c)
        }
    }

    function wd(a) {
        var b;
        if (0 > a.Y - 1) sc("/intro");
        else {
            b = a.Y - 1;
            var c = a.ea[b];
            b = a.g[b];
            a.Wa(b.id);
            xd(a, a.b.content, b, 1);
            yd(a, c)
        }
    }

    function rd(a) {
        a.Fa = Modernizr.mq("(max-width: 767px)");
        if (a.Fa) {
            zd(a);
            for (var b = 0, c = a.g.length; b < c; b++) S(a.g[b], "display", "")
        } else Ad(a), sd(a), a.b.content ? S(a.b.content, "display", "block") : td(a, a.ea[0])
    }

    function Bd() {
        S(Y.D, "display", "none")
    }

    function Ad(a) {
        K(a.D, "sticky");
        K(a.Na, "tabs-active");
        S(a.D, "display", "block");
        var b;
        var c = a.D;
        if ("none" != zc(c, "display")) b = Dc(c);
        else {
            b = c.style;
            var d = b.display,
                e = b.visibility,
                f = b.position;
            b.visibility = "hidden";
            b.position = "absolute";
            b.display = "inline";
            c = Dc(c);
            b.display = d;
            b.position = f;
            b.visibility = e;
            b = c
        }
        b = b.height;
        d = 0;
        for (e = a.g.length; d < e; d++) S(a.g[d], "paddingTop", b + "px");
        a.Ka = !0;
        a.i = !1
    }

    function zd(a) {
        M(a.D, "sticky");
        M(a.Na, "tabs-active");
        Cd(a);
        a.b.C && (M(a.b.C, "is-active"), M(ac(a.b.C), "is-active"));
        a.Ka = !1;
        a.i = !0
    }

    function Cd(a) {
        for (var b = 0, c = a.g.length; b < c; b++) S(a.g[b], "paddingTop", ""), S(a.g[b], "display", "block")
    }

    function sd(a) {
        for (var b = 0, c = a.g.length; b < c; b++) S(a.g[b], "display", "none")
    }

    function ud(a, b) {
        var c = wc(b, "tabTarget"),
            c = c && O(document, c);
        sd(a);
        yd(a, b);
        S(c, "display", "block");
        a.b.content = c
    }

    function xd(a, b, c, d) {
        if (!a.ua) {
            a.ua = !0;
            var e = parseInt(wc(b, "index"), 10),
                f = parseInt(wc(c, "index"), 10),
                h = window.innerHeight;
            d = d ? d : e === a.ya - 1 && 0 === f ? -1 : 0 === e && f === a.ya - 1 ? 1 : 0 > e - f ? -1 : 1;
            TweenLite.set(c, {
                y: -1 * d * h * 0.3
            });
            TweenLite.to(b, 0.6, {
                y: d * h,
                ease: Expo.easeOut,
                onComplete: function() {
                    S(b, "display", "none");
                    TweenLite.set(b, {
                        y: 0
                    })
                }
            });
            TweenLite.to(c, 0.6, {
                y: 0,
                ease: Expo.easeOut,
                onStart: function() {
                    S(c, "display", "block")
                },
                onComplete: function() {
                    setTimeout(function() {
                        a.b.content = c;
                        a.ua = !1
                    }, 10)
                }
            })
        }
    }

    function td(a, b) {
        var c = wc(b, "tabTarget");
        if (c = c && O(document, c)) a.b.content ? a.b.content !== c && xd(a, a.b.content, c) : (a.b.content = c, S(a.b.content, "display", "block")), yd(a, b)
    }

    function yd(a, b) {
        a.b.C && (M(a.b.C, "is-active"), M(ac(a.b.C), "is-active"));
        K(b, "is-active");
        K(ac(b), "is-active");
        a.b.C = b;
        a.Y = parseInt(wc(b, "index"), 10)
    }
    var tc, Dd, Ed, Fd, X, Gd, Hd, Id, Jd, Kd, Ld, Md, Nd, Y, Od, Pd, Qd, Rd, Sd, Td, Ud, Vd, Z;
    aa("gw.init", function() {
        Dd = document.body;
        Ed = Wb("html", "", void 0)[0];
        Fd = !1;
        X = Modernizr.mq("(max-width: 767px)");
        Gd = Q("js-page--intro");
        Hd = Q("js-intro-animate-first");
        Id = Q("js-intro-animate-second");
        Jd = Q("js-intro-animate-third");
        Kd = Q("js-page--outro");
        Ld = Q("js-intro-animate-first");
        Md = Q("js-intro-animate-second");
        Nd = Q("js-intro-animate-third");
        Y = new pd(function(a) {
            sc("/" + a)
        });
        ae();
        be();
        ce();
        de();
        ee();
        od();
        G(window, "resize", hd())
    });

    function ee() {
        var a = window.navigator.userAgent.toLowerCase(),
            b = P("js-app-link");
        w(b, function(b) {
            var d = b.getAttribute("data-url-ios"),
                e = b.getAttribute("data-url-android");
            0 < a.indexOf("iphone") || 0 < a.indexOf("ipad") ? b.setAttribute("href", d) : 0 < a.indexOf("android") && b.setAttribute("href", e)
        });
        0 < a.indexOf("iphone") || 0 < a.indexOf("ipad") ? K(Ed, "apps-ios") : 0 < a.indexOf("android") && K(Ed, "apps-android")
    }

    function de() {
        var a = P("js-reveal-sibling");
        w(a, function(a) {
            var c = void 0 != a.nextElementSibling ? a.nextElementSibling : $b(a.nextSibling);
            S(c, "zIndex", "-1");
            TweenLite.set(c, {
                y: -15,
                opacity: 0
            });
            Gb(a, "mouseover", function() {
                TweenLite.to(c, 0.26, {
                    y: 0,
                    opacity: 1,
                    ease: Expo.easeOut,
                    onStart: function() {
                        S(c, "zIndex", "")
                    }
                })
            })
        })
    }

    function be() {
        var a = P("js-select-url"),
            b = Q("js-select-link");
        w(a, function(a) {
            G(a, "change", function() {
                var d = a.options[a.selectedIndex].value,
                    d = escape(d.trim());
                "" !== d && (b.setAttribute("href", d + ".html"), K(b, "active"))
            })
        })
    }

    function id() {
        var a = Modernizr.mq("(max-width: 767px)");
        a !== X && (X = a, fe(), rd(Y), "tabs" !== Od && zd(Y));
        a ? ge() : he()
    }

    function ae() {
        Pd = function() {
            R.call(this)
        };
        u(Pd, R);
        Pd.prototype.W = function(a) {
            a = a.location.href || document.URL;
            var b = a.indexOf("#");
            return 0 > b ? "" : a.substring(b + 1)
        };
        tc = new Pd;
        G(tc, "navigate", ie, !1);
        tc.P(!0)
    }

    function je() {
        Qd && (I(Qd), Qd = null);
        Rd && (I(Rd), Rd = null);
        Sd && (I(Sd), Sd = null);
        Td && (I(Td), Td = null);
        ke && ke.off("swiperight swipeleft swipeup swipedown")
    }
    var $ = 0,
        le = {},
        ke, me, ne = jd(function() {
            setTimeout(function() {
                $ = 0;
                me = !1;
                Y.o = !1
            }, 1E3)
        }, 500, !1);

    function oe(a) {
        a.preventDefault();
        "mousewheel" === a.type ? $ += a.r.wheelDelta : "DOMMouseScroll" === a.type && ($ += -1 * a.r.detail);
        if (-200 > $) return $ = 0, me = !0, Y.o = !0, 1;
        if (200 < $) return $ = 0, me = !0, Y.o = !0, -1
    }

    function pe(a) {
        Qd = G(window, "keyup", function(b) {
            if (39 === b.keyCode || 40 === b.keyCode) je(), a()
        });
        var b = O(document, "intro");
        Td = G(b, ["mousewheel", "DOMMouseScroll"], function(b) {
            le.i || me || (ne(), 0 < oe(b) && (je(), a()))
        });
        Modernizr.touch && (ke = Hammer(b), ke.on("swiperight swipeleft swipeup swipedown", jd(function(b) {
            le.i || (b.preventDefault(), "swipeleft" !== b.type && "swipedown" !== b.type) || (je(), a())
        }, 70, !0)))
    }

    function qe(a) {
        Rd = G(window, "keyup", function(b) {
            if (37 === b.keyCode || 38 === b.keyCode) je(), a()
        });
        var b = O(document, "outro");
        Sd = G(b, ["mousewheel", "DOMMouseScroll"], function(b) {
            le.i || me || (ne(), 0 > oe(b) && (je(), a()))
        });
        Modernizr.touch && (ke = Hammer(b), ke.on("swiperight swipeleft swipeup swipedown", jd(function(b) {
            le.i || (b.preventDefault(), "swiperight" !== b.type && "swipeup" !== b.type) || (je(), a())
        }, 70, !0)))
    }

    function ie(a) {
        a = a.pb;
        "" === a && (a = "/");
        var b = re[a];
        if (b && Ud !== a) {
            var b = b || "",
                c = "intro" === b || "outro" === b ? b : "tabs";
            X || c === Od && "tabs" !== c ? X && ("intro" === b ? TweenLite.fromTo(Yb(document), 1, {
                scrollTop: Xb(document).y
            }, {
                scrollTop: 0,
                ease: Expo.easeOut
            }) : "registrations" === b && (b = O(document, "registrations"), TweenLite.fromTo(Yb(document), 1, {
                scrollTop: Xb(document).y
            }, {
                scrollTop: Cc(b).y,
                ease: Expo.easeOut
            }))) : (se(c), je(), "tabs" === c ? (Ad(Y), c = O(document, b), b = xc('.js-tab[data-tab-target="' + b + '"]'), c && b.length &&
                ud(Y, b[0])) : "intro" === c ? (S(Y.D, "display", "block"), zd(Y), pe(function() {
                sc("/registrations")
            })) : (Y.i = !0, Bd(), qe(function() {
                sc("/faqs")
            })));
            Ud = a
        }
    }
    var re = {
        "/": "intro",
        "/intro": "intro",
        "/registrations": "registrations",
        "/sports-schedule": "sports-schedule",
        "/rules": "rules",
        "/score-sheet": "score-sheet",
        "/photo-gallery": "photo-gallery",
        "/team-details": "team-details",
        "/faqs": "faqs",
        "/outro": "outro"
    };

    function ce() {
        Vd = P("js-page");
        var a = re[Ud],
            b = "intro" === a || "outro" === a ? a : "tabs";
        Z = Q("js-page--" + b);
        Od = b;
        "intro" === a || "outro" === a ? "intro" === a ? (TweenLite.set(Hd, {
            opacity: 0.25
        }), TweenLite.set(Id, {
            opacity: 0
        }), TweenLite.set(Jd, {
            y: Jd.offsetHeight
        }), TweenLite.set(Dd, {
            opacity: 1
        }), TweenLite.to(Hd, 1.5, {
            opacity: 1
        }), TweenLite.to(Id, 0.6, {
            opacity: 1,
            delay: 1.45,
            ease: Expo.easeInOut
        }), TweenLite.to(Jd, 0.4, {
            y: 0,
            delay: 2,
            ease: Expo.easeOut
        })) : (TweenLite.set(Ld, {
            opacity: 0.25
        }), TweenLite.set(Md, {
            opacity: 0
        }), TweenLite.set(Nd, {
            y: Nd.offsetHeight + 100
        }), TweenLite.set(Dd, {
            opacity: 1
        }), TweenLite.to(Ld, 1.5, {
            opacity: 1
        }), TweenLite.to(Md, 0.6, {
            opacity: 1,
            delay: 1.45,
            ease: Expo.easeInOut
        }), TweenLite.to(Nd, 0.4, {
            y: 0,
            delay: 2,
            ease: Expo.easeOut
        })) : (a = xc('[data-tab-target="' + a + '"]'), a.length && (X ? Cd(Y) : Ad(Y), a = a[0], b = Y, a && td(b, a)));
        TweenLite.set(Dd, {
            alpha: 1
        });
        X ? ge() : te();
        he()
    }

    function se(a) {
        if (!Fd)
            if (Z)
                if ("tabs" === Od && "tabs" === a) Z = Q("js-page--" + a);
                else {
                    Fd = !0;
                    var b = Q("js-page--" + a),
                        c;
                    c = "outro" === a || "tabs" === a && "intro" === Od ? 1 : -1;
                    S(Z, "zIndex", 10);
                    S(b, "display", "");
                    S(b, "zIndex", 1);
                    var d = Math.floor(Math.max(window.innerHeight, b.offsetHeight)),
                        d = Math.floor(Math.max(d, Z.offsetHeight));
                    TweenLite.set(b, {
                        y: Math.floor(c * d * 0.7),
                        alpha: 1
                    });
                    TweenLite.to(Z, 0.7, {
                        y: -1 * c * d,
                        ease: Expo.easeOut,
                        onComplete: function() {
                            S(Z, "display", "none");
                            S(Z, "opacity", 0);
                            TweenLite.set(Z, {
                                y: 0
                            })
                        }
                    });
                    TweenLite.to(b,
                        0.7, {
                            y: 0,
                            ease: Expo.easeOut,
                            onComplete: function() {
                                Z = b;
                                Od = a;
                                Fd = !1
                            }
                        })
                } else Z = Q("js-page--" + a), he()
    }

    function he() {
        X || te();
        "outro" === Od && Bd();
        TweenLite.to(Z, 0.7, {
            opacity: 1,
            ease: Expo.easeInOut,
            onStart: function() {
                S(Z, "display", "")
            }
        }).play()
    }

    function te() {
        Vd = Vd || P("js-page");
        w(Vd, function(a) {
            S(a, "display", "none");
            S(a, "opacity", 0)
        })
    }

    function fe() {
        Vd = Vd || P("js-page");
        w(Vd, function(a) {
            S(a, "display", "");
            S(a, "opacity", "");
            S(a, "height", "")
        })
    }

    function ge() {
        var a = window.innerHeight + "px";
        S(Gd, "height", a);
        S(Kd, "height", a)
    };
})();