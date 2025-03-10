!(function (n) {
  function r(e) {
    if (t[e]) return t[e].exports;
    var o = (t[e] = { exports: {}, id: e, loaded: !1 });
    return n[e].call(o.exports, o, o.exports, r), (o.loaded = !0), o.exports;
  }
  var t = {};
  return (r.m = n), (r.c = t), (r.p = ""), r(0);
})([
  function (n, r, t) {
    var e = t(111),
      o = t(51),
      u = t(85);
    e.choropleth = n.exports = function (n, r) {
      (r = r || {}),
        u.defaults(r, {
          valueProperty: "value",
          scale: ["white", "red"],
          steps: 5,
          mode: "q",
        });
      var t = r.style,
        f = n.features.map(
          "function" == typeof r.valueProperty
            ? r.valueProperty
            : function (n) {
                return n.properties[r.valueProperty];
              }
        ),
        a = o.limits(f, r.mode, r.steps - 1),
        c =
          r.colors && r.colors.length === a.length
            ? r.colors
            : o.scale(r.scale).colors(a.length);
      return e.geoJson(
        n,
        u.extend(r, {
          limits: a,
          colors: c,
          style: function (n) {
            var e,
              o = {};
            if (
              ((e =
                "function" == typeof r.valueProperty
                  ? r.valueProperty(n)
                  : n.properties[r.valueProperty]),
              !isNaN(e))
            )
              for (var f = 0; f < a.length; f++)
                if (e <= a[f]) {
                  o.fillColor = c[f];
                  break;
                }
            switch (typeof t) {
              case "function":
                return u.defaults(o, t(n));
              case "object":
                return u.defaults(o, t);
              default:
                return o;
            }
          },
        })
      );
    };
  },
  function (n, r) {
    function t(n) {
      var r = typeof n;
      return !!n && ("object" == r || "function" == r);
    }
    n.exports = t;
  },
  function (n, r, t) {
    var e = t(17),
      o = t(9),
      u = t(4),
      f = "[object Array]",
      a = Object.prototype,
      c = a.toString,
      i = e(Array, "isArray"),
      l =
        i ||
        function (n) {
          return u(n) && o(n.length) && c.call(n) == f;
        };
    n.exports = l;
  },
  function (n, r, t) {
    var e = t(17),
      o = t(8),
      u = t(1),
      f = t(81),
      a = e(Object, "keys"),
      c = a
        ? function (n) {
            var r = null == n ? void 0 : n.constructor;
            return ("function" == typeof r && r.prototype === n) ||
              ("function" != typeof n && o(n))
              ? f(n)
              : u(n)
              ? a(n)
              : [];
          }
        : f;
    n.exports = c;
  },
  function (n, r) {
    function t(n) {
      return !!n && "object" == typeof n;
    }
    n.exports = t;
  },
  function (n, r, t) {
    function e(n) {
      return o(n) ? n : Object(n);
    }
    var o = t(1);
    n.exports = e;
  },
  function (n, r, t) {
    function e(n) {
      if (null == n) return [];
      c(n) || (n = Object(n));
      var r = n.length;
      r = (r && a(r) && (u(n) || o(n)) && r) || 0;
      for (
        var t = n.constructor,
          e = -1,
          i = "function" == typeof t && t.prototype === n,
          s = Array(r),
          p = r > 0;
        ++e < r;

      )
        s[e] = e + "";
      for (var d in n)
        (p && f(d, r)) ||
          ("constructor" == d && (i || !l.call(n, d))) ||
          s.push(d);
      return s;
    }
    var o = t(11),
      u = t(2),
      f = t(13),
      a = t(9),
      c = t(1),
      i = Object.prototype,
      l = i.hasOwnProperty;
    n.exports = e;
  },
  function (n, r, t) {
    function e(n, r, t) {
      if ("function" != typeof n) return o;
      if (void 0 === r) return n;
      switch (t) {
        case 1:
          return function (t) {
            return n.call(r, t);
          };
        case 3:
          return function (t, e, o) {
            return n.call(r, t, e, o);
          };
        case 4:
          return function (t, e, o, u) {
            return n.call(r, t, e, o, u);
          };
        case 5:
          return function (t, e, o, u, f) {
            return n.call(r, t, e, o, u, f);
          };
      }
      return function () {
        return n.apply(r, arguments);
      };
    }
    var o = t(50);
    n.exports = e;
  },
  function (n, r, t) {
    function e(n) {
      return null != n && u(o(n));
    }
    var o = t(77),
      u = t(9);
    n.exports = e;
  },
  function (n, r) {
    function t(n) {
      return "number" == typeof n && n > -1 && n % 1 == 0 && n <= e;
    }
    var e = 9007199254740991;
    n.exports = t;
  },
  function (n, r, t) {
    function e(n) {
      if (u(n)) return n;
      var r = [];
      return (
        o(n).replace(f, function (n, t, e, o) {
          r.push(e ? o.replace(a, "$1") : t || n);
        }),
        r
      );
    }
    var o = t(70),
      u = t(2),
      f =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,
      a = /\\(\\)?/g;
    n.exports = e;
  },
  function (n, r, t) {
    function e(n) {
      return u(n) && o(n) && a.call(n, "callee") && !c.call(n, "callee");
    }
    var o = t(8),
      u = t(4),
      f = Object.prototype,
      a = f.hasOwnProperty,
      c = f.propertyIsEnumerable;
    n.exports = e;
  },
  function (n, r, t) {
    function e(n, r, t) {
      if (null != n) {
        void 0 !== t && t in o(n) && (r = [t]);
        for (var e = 0, u = r.length; null != n && e < u; ) n = n[r[e++]];
        return e && e == u ? n : void 0;
      }
    }
    var o = t(5);
    n.exports = e;
  },
  function (n, r) {
    function t(n, r) {
      return (
        (n = "number" == typeof n || e.test(n) ? +n : -1),
        (r = null == r ? o : r),
        n > -1 && n % 1 == 0 && n < r
      );
    }
    var e = /^\d+$/,
      o = 9007199254740991;
    n.exports = t;
  },
  function (n, r, t) {
    function e(n, r) {
      var t = typeof n;
      if (("string" == t && a.test(n)) || "number" == t) return !0;
      if (o(n)) return !1;
      var e = !f.test(n);
      return e || (null != r && n in u(r));
    }
    var o = t(2),
      u = t(5),
      f = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
      a = /^\w*$/;
    n.exports = e;
  },
  function (n, r) {
    function t(n, r) {
      if ("function" != typeof n) throw new TypeError(e);
      return (
        (r = o(void 0 === r ? n.length - 1 : +r || 0, 0)),
        function () {
          for (
            var t = arguments, e = -1, u = o(t.length - r, 0), f = Array(u);
            ++e < u;

          )
            f[e] = t[r + e];
          switch (r) {
            case 0:
              return n.call(this, f);
            case 1:
              return n.call(this, t[0], f);
            case 2:
              return n.call(this, t[0], t[1], f);
          }
          var a = Array(r + 1);
          for (e = -1; ++e < r; ) a[e] = t[e];
          return (a[r] = f), n.apply(this, a);
        }
      );
    }
    var e = "Expected a function",
      o = Math.max;
    n.exports = t;
  },
  function (n, r, t) {
    function e(n, r) {
      return o(n, r, u);
    }
    var o = t(22),
      u = t(3);
    n.exports = e;
  },
  function (n, r, t) {
    function e(n, r) {
      var t = null == n ? void 0 : n[r];
      return o(t) ? t : void 0;
    }
    var o = t(82);
    n.exports = e;
  },
  function (n, r, t) {
    function e(n) {
      return o(n) && a.call(n) == u;
    }
    var o = t(1),
      u = "[object Function]",
      f = Object.prototype,
      a = f.toString;
    n.exports = e;
  },
  function (n, r, t) {
    function e(n) {
      return u(n) && o(n.length) && !!P[E.call(n)];
    }
    var o = t(9),
      u = t(4),
      f = "[object Arguments]",
      a = "[object Array]",
      c = "[object Boolean]",
      i = "[object Date]",
      l = "[object Error]",
      s = "[object Function]",
      p = "[object Map]",
      d = "[object Number]",
      h = "[object Object]",
      b = "[object RegExp]",
      v = "[object Set]",
      g = "[object String]",
      y = "[object WeakMap]",
      m = "[object ArrayBuffer]",
      x = "[object Float32Array]",
      w = "[object Float64Array]",
      k = "[object Int8Array]",
      j = "[object Int16Array]",
      _ = "[object Int32Array]",
      O = "[object Uint8Array]",
      N = "[object Uint8ClampedArray]",
      A = "[object Uint16Array]",
      M = "[object Uint32Array]",
      P = {};
    (P[x] = P[w] = P[k] = P[j] = P[_] = P[O] = P[N] = P[A] = P[M] = !0),
      (P[f] =
        P[a] =
        P[m] =
        P[c] =
        P[i] =
        P[l] =
        P[s] =
        P[p] =
        P[d] =
        P[h] =
        P[b] =
        P[v] =
        P[g] =
        P[y] =
          !1);
    var S = Object.prototype,
      E = S.toString;
    n.exports = e;
  },
  function (n, r) {
    function t(n) {
      var r = n ? n.length : 0;
      return r ? n[r - 1] : void 0;
    }
    n.exports = t;
  },
  function (n, r, t) {
    function e(n, r, t) {
      var e = typeof n;
      return "function" == e
        ? void 0 === r
          ? n
          : f(n, r, t)
        : null == n
        ? a
        : "object" == e
        ? o(n)
        : void 0 === r
        ? c(n)
        : u(n, r);
    }
    var o = t(65),
      u = t(66),
      f = t(7),
      a = t(50),
      c = t(109);
    n.exports = e;
  },
  function (n, r, t) {
    var e = t(39),
      o = e();
    n.exports = o;
  },
  function (n, r) {
    function t(n, r, t) {
      var e = -1,
        o = n.length;
      (r = null == r ? 0 : +r || 0),
        r < 0 && (r = -r > o ? 0 : o + r),
        (t = void 0 === t || t > o ? o : +t || 0),
        t < 0 && (t += o),
        (o = r > t ? 0 : (t - r) >>> 0),
        (r >>>= 0);
      for (var u = Array(o); ++e < o; ) u[e] = n[e + r];
      return u;
    }
    n.exports = t;
  },
  function (n, r, t) {
    function e(n, r, t) {
      if (!f(t)) return !1;
      var e = typeof r;
      if ("number" == e ? o(t) && u(r, t.length) : "string" == e && r in t) {
        var a = t[r];
        return n === n ? n === a : a !== a;
      }
      return !1;
    }
    var o = t(8),
      u = t(13),
      f = t(1);
    n.exports = e;
  },
  function (n, r, t) {
    var e = t(58),
      o = t(28),
      u = t(38),
      f = u(function (n, r, t) {
        return t ? e(n, r, t) : o(n, r);
      });
    n.exports = f;
  },
  function (n, r, t) {
    var e = t(67),
      o = t(38),
      u = o(e);
    n.exports = u;
  },
  function (n, r) {
    function t(n, r) {
      for (var t = -1, e = n.length; ++t < e && r(n[t], t, n) !== !1; );
      return n;
    }
    n.exports = t;
  },
  function (n, r, t) {
    function e(n, r) {
      return null == r ? n : o(r, u(r), n);
    }
    var o = t(29),
      u = t(3);
    n.exports = e;
  },
  function (n, r) {
    function t(n, r, t) {
      t || (t = {});
      for (var e = -1, o = r.length; ++e < o; ) {
        var u = r[e];
        t[u] = n[u];
      }
      return t;
    }
    n.exports = t;
  },
  function (n, r, t) {
    var e = t(1),
      o = (function () {
        function n() {}
        return function (r) {
          if (e(r)) {
            n.prototype = r;
            var t = new n();
            n.prototype = void 0;
          }
          return t || {};
        };
      })();
    n.exports = o;
  },
  function (n, r, t) {
    function e(n, r, t, i) {
      i || (i = []);
      for (var l = -1, s = n.length; ++l < s; ) {
        var p = n[l];
        c(p) && a(p) && (t || f(p) || u(p))
          ? r
            ? e(p, r, t, i)
            : o(i, p)
          : t || (i[i.length] = p);
      }
      return i;
    }
    var o = t(55),
      u = t(11),
      f = t(2),
      a = t(8),
      c = t(4);
    n.exports = e;
  },
  function (n, r, t) {
    function e(n, r) {
      return o(n, r, u);
    }
    var o = t(22),
      u = t(6);
    n.exports = e;
  },
  function (n, r, t) {
    function e(n, r) {
      return o(n, r, u);
    }
    var o = t(34),
      u = t(3);
    n.exports = e;
  },
  function (n, r, t) {
    var e = t(39),
      o = e(!0);
    n.exports = o;
  },
  function (n, r, t) {
    function e(n, r, t, a, c, i) {
      return (
        n === r ||
        (null == n || null == r || (!u(n) && !f(r))
          ? n !== n && r !== r
          : o(n, r, e, t, a, c, i))
      );
    }
    var o = t(63),
      u = t(1),
      f = t(4);
    n.exports = e;
  },
  function (n, r) {
    function t(n) {
      return function (r) {
        return null == r ? void 0 : r[n];
      };
    }
    n.exports = t;
  },
  function (n, r) {
    function t(n, r) {
      for (var t = -1, e = r.length, o = Array(e); ++t < e; ) o[t] = n[r[t]];
      return o;
    }
    n.exports = t;
  },
  function (n, r, t) {
    function e(n) {
      return f(function (r, t) {
        var e = -1,
          f = null == r ? 0 : t.length,
          a = f > 2 ? t[f - 2] : void 0,
          c = f > 2 ? t[2] : void 0,
          i = f > 1 ? t[f - 1] : void 0;
        for (
          "function" == typeof a
            ? ((a = o(a, i, 5)), (f -= 2))
            : ((a = "function" == typeof i ? i : void 0), (f -= a ? 1 : 0)),
            c && u(t[0], t[1], c) && ((a = f < 3 ? void 0 : a), (f = 1));
          ++e < f;

        ) {
          var l = t[e];
          l && n(r, l, a);
        }
        return r;
      });
    }
    var o = t(7),
      u = t(24),
      f = t(15);
    n.exports = e;
  },
  function (n, r, t) {
    function e(n) {
      return function (r, t, e) {
        for (
          var u = o(r), f = e(r), a = f.length, c = n ? a : -1;
          n ? c-- : ++c < a;

        ) {
          var i = f[c];
          if (t(u[i], i, u) === !1) break;
        }
        return r;
      };
    }
    var o = t(5);
    n.exports = e;
  },
  function (n, r, t) {
    function e(n, r) {
      return o(function (t) {
        var e = t[0];
        return null == e ? e : (t.push(r), n.apply(void 0, t));
      });
    }
    var o = t(15);
    n.exports = e;
  },
  function (n, r, t) {
    function e(n) {
      return function (r, t, e) {
        return (t = o(t, e, 3)), u(r, t, n, !0);
      };
    }
    var o = t(21),
      u = t(60);
    n.exports = e;
  },
  function (n, r, t) {
    function e(n) {
      return function (r, t, e) {
        return (
          ("function" == typeof t && void 0 === e) || (t = o(t, e, 3)),
          n(r, t, u)
        );
      };
    }
    var o = t(7),
      u = t(6);
    n.exports = e;
  },
  function (n, r, t) {
    function e(n) {
      return function (r, t, e) {
        return (
          ("function" == typeof t && void 0 === e) || (t = o(t, e, 3)), n(r, t)
        );
      };
    }
    var o = t(7);
    n.exports = e;
  },
  function (n, r, t) {
    function e(n) {
      return function (r, t, e) {
        var f = {};
        return (
          (t = o(t, e, 3)),
          u(r, function (r, e, o) {
            var u = t(r, e, o);
            (e = n ? u : e), (r = n ? r : u), (f[e] = r);
          }),
          f
        );
      };
    }
    var o = t(21),
      u = t(16);
    n.exports = e;
  },
  function (n, r, t) {
    function e(n) {
      return n === n && !o(n);
    }
    var o = t(1);
    n.exports = e;
  },
  function (n, r, t) {
    function e(n, r) {
      n = o(n);
      for (var t = -1, e = r.length, u = {}; ++t < e; ) {
        var f = r[t];
        f in n && (u[f] = n[f]);
      }
      return u;
    }
    var o = t(5);
    n.exports = e;
  },
  function (n, r, t) {
    function e(n, r) {
      var t = {};
      return (
        o(n, function (n, e, o) {
          r(n, e, o) && (t[e] = n);
        }),
        t
      );
    }
    var o = t(32);
    n.exports = e;
  },
  function (n, r, t) {
    function e(n) {
      return o(n, u(n));
    }
    var o = t(61),
      u = t(6);
    n.exports = e;
  },
  function (n, r, t) {
    function e(n) {
      n = u(n);
      for (var r = -1, t = o(n), e = t.length, f = Array(e); ++r < e; ) {
        var a = t[r];
        f[r] = [a, n[a]];
      }
      return f;
    }
    var o = t(3),
      u = t(5);
    n.exports = e;
  },
  function (n, r) {
    function t(n) {
      return n;
    }
    n.exports = t;
  },
  function (n, r, t) {
    var e, o;
    (function (n) {
      /**
       * @license
       *
       * chroma.js - JavaScript library for color conversions
       *
       * Copyright (c) 2011-2017, Gregor Aisch
       * All rights reserved.
       *
       * Redistribution and use in source and binary forms, with or without
       * modification, are permitted provided that the following conditions are met:
       *
       * 1. Redistributions of source code must retain the above copyright notice, this
       *    list of conditions and the following disclaimer.
       *
       * 2. Redistributions in binary form must reproduce the above copyright notice,
       *    this list of conditions and the following disclaimer in the documentation
       *    and/or other materials provided with the distribution.
       *
       * 3. The name Gregor Aisch may not be used to endorse or promote products
       *    derived from this software without specific prior written permission.
       *
       * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
       * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
       * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
       * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
       * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
       * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
       * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
       * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
       * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
       * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
       *
       */
      (function () {
        var t,
          u,
          f,
          a,
          c,
          i,
          l,
          s,
          p,
          d,
          h,
          b,
          v,
          g,
          y,
          m,
          x,
          w,
          k,
          j,
          _,
          O,
          N,
          A,
          M,
          P,
          S,
          E,
          B,
          L,
          R,
          q,
          G,
          I,
          U,
          Y,
          $,
          F,
          C,
          X,
          K,
          V,
          z,
          D,
          Z,
          J,
          T,
          W,
          H,
          Q,
          nn,
          rn,
          tn,
          en,
          on,
          un,
          fn,
          an,
          cn,
          ln,
          sn,
          pn,
          dn,
          hn,
          bn,
          vn,
          gn,
          yn,
          mn,
          xn,
          wn,
          kn,
          jn,
          _n,
          On,
          Nn,
          An,
          Mn,
          Pn,
          Sn,
          En = [].slice;
        (Nn = (function () {
          var n, r, t, e, o;
          for (
            n = {},
              o =
                "Boolean Number String Function Array Date RegExp Undefined Null".split(
                  " "
                ),
              e = 0,
              r = o.length;
            e < r;
            e++
          )
            (t = o[e]), (n["[object " + t + "]"] = t.toLowerCase());
          return function (r) {
            var t;
            return (t = Object.prototype.toString.call(r)), n[t] || "object";
          };
        })()),
          (J = function (n, r, t) {
            return (
              null == r && (r = 0),
              null == t && (t = 1),
              n < r && (n = r),
              n > t && (n = t),
              n
            );
          }),
          (An = function (n) {
            return n.length >= 3 ? [].slice.call(n) : n[0];
          }),
          (j = function (n) {
            var r, t;
            for (
              n._clipped = !1, n._unclipped = n.slice(0), r = t = 0;
              t < 3;
              r = ++t
            )
              r < 3
                ? ((n[r] < 0 || n[r] > 255) && (n._clipped = !0),
                  n[r] < 0 && (n[r] = 0),
                  n[r] > 255 && (n[r] = 255))
                : 3 === r && (n[r] < 0 && (n[r] = 0), n[r] > 1 && (n[r] = 1));
            return n._clipped || delete n._unclipped, n;
          }),
          (a = Math.PI),
          (wn = Math.round),
          (N = Math.cos),
          (E = Math.floor),
          (on = Math.pow),
          (T = Math.log),
          (jn = Math.sin),
          (_n = Math.sqrt),
          (v = Math.atan2),
          (Q = Math.max),
          (b = Math.abs),
          (l = 2 * a),
          (c = a / 3),
          (u = a / 180),
          (i = 180 / a),
          (k = function () {
            return arguments[0] instanceof t
              ? arguments[0]
              : (function (n, r, t) {
                  t.prototype = n.prototype;
                  var e = new t(),
                    o = n.apply(e, r);
                  return Object(o) === o ? o : e;
                })(t, arguments, function () {});
          }),
          (h = []),
          "undefined" != typeof n &&
            null !== n &&
            null != n.exports &&
            (n.exports = k),
          (e = []),
          (o = function () {
            return k;
          }.apply(r, e)),
          !(void 0 !== o && (n.exports = o)),
          (k.version = "1.3.4"),
          (d = {}),
          (s = []),
          (p = !1),
          (t = (function () {
            function n() {
              var n, r, t, e, o, u, f, a, c;
              for (u = this, r = [], a = 0, e = arguments.length; a < e; a++)
                (n = arguments[a]), null != n && r.push(n);
              if (((f = r[r.length - 1]), null != d[f]))
                u._rgb = j(d[f](An(r.slice(0, -1))));
              else {
                for (
                  p ||
                    ((s = s.sort(function (n, r) {
                      return r.p - n.p;
                    })),
                    (p = !0)),
                    c = 0,
                    o = s.length;
                  c < o && ((t = s[c]), !(f = t.test.apply(t, r)));
                  c++
                );
                f && (u._rgb = j(d[f].apply(d, r)));
              }
              null == u._rgb && console.warn("unknown format: " + r),
                null == u._rgb && (u._rgb = [0, 0, 0]),
                3 === u._rgb.length && u._rgb.push(1);
            }
            return (
              (n.prototype.toString = function () {
                return this.hex();
              }),
              (n.prototype.clone = function () {
                return k(me._rgb);
              }),
              n
            );
          })()),
          (k._input = d) /**
	  	ColorBrewer colors for chroma.js
	  
	  	Copyright (c) 2002 Cynthia Brewer, Mark Harrower, and The 
	  	Pennsylvania State University.
	  
	  	Licensed under the Apache License, Version 2.0 (the "License"); 
	  	you may not use this file except in compliance with the License.
	  	You may obtain a copy of the License at	
	  	http://www.apache.org/licenses/LICENSE-2.0
	  
	  	Unless required by applicable law or agreed to in writing, software distributed
	  	under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
	  	CONDITIONS OF ANY KIND, either express or implied. See the License for the
	  	specific language governing permissions and limitations under the License.
	  
	      @preserve
	   */,
          (k.brewer = x =
            {
              OrRd: [
                "#fff7ec",
                "#fee8c8",
                "#fdd49e",
                "#fdbb84",
                "#fc8d59",
                "#ef6548",
                "#d7301f",
                "#b30000",
                "#7f0000",
              ],
              PuBu: [
                "#fff7fb",
                "#ece7f2",
                "#d0d1e6",
                "#a6bddb",
                "#74a9cf",
                "#3690c0",
                "#0570b0",
                "#045a8d",
                "#023858",
              ],
              BuPu: [
                "#f7fcfd",
                "#e0ecf4",
                "#bfd3e6",
                "#9ebcda",
                "#8c96c6",
                "#8c6bb1",
                "#88419d",
                "#810f7c",
                "#4d004b",
              ],
              Oranges: [
                "#fff5eb",
                "#fee6ce",
                "#fdd0a2",
                "#fdae6b",
                "#fd8d3c",
                "#f16913",
                "#d94801",
                "#a63603",
                "#7f2704",
              ],
              BuGn: [
                "#f7fcfd",
                "#e5f5f9",
                "#ccece6",
                "#99d8c9",
                "#66c2a4",
                "#41ae76",
                "#238b45",
                "#006d2c",
                "#00441b",
              ],
              YlOrBr: [
                "#ffffe5",
                "#fff7bc",
                "#fee391",
                "#fec44f",
                "#fe9929",
                "#ec7014",
                "#cc4c02",
                "#993404",
                "#662506",
              ],
              YlGn: [
                "#ffffe5",
                "#f7fcb9",
                "#d9f0a3",
                "#addd8e",
                "#78c679",
                "#41ab5d",
                "#238443",
                "#006837",
                "#004529",
              ],
              Reds: [
                "#fff5f0",
                "#fee0d2",
                "#fcbba1",
                "#fc9272",
                "#fb6a4a",
                "#ef3b2c",
                "#cb181d",
                "#a50f15",
                "#67000d",
              ],
              RdPu: [
                "#fff7f3",
                "#fde0dd",
                "#fcc5c0",
                "#fa9fb5",
                "#f768a1",
                "#dd3497",
                "#ae017e",
                "#7a0177",
                "#49006a",
              ],
              Greens: [
                "#f7fcf5",
                "#e5f5e0",
                "#c7e9c0",
                "#a1d99b",
                "#74c476",
                "#41ab5d",
                "#238b45",
                "#006d2c",
                "#00441b",
              ],
              YlGnBu: [
                "#ffffd9",
                "#edf8b1",
                "#c7e9b4",
                "#7fcdbb",
                "#41b6c4",
                "#1d91c0",
                "#225ea8",
                "#253494",
                "#081d58",
              ],
              Purples: [
                "#fcfbfd",
                "#efedf5",
                "#dadaeb",
                "#bcbddc",
                "#9e9ac8",
                "#807dba",
                "#6a51a3",
                "#54278f",
                "#3f007d",
              ],
              GnBu: [
                "#f7fcf0",
                "#e0f3db",
                "#ccebc5",
                "#a8ddb5",
                "#7bccc4",
                "#4eb3d3",
                "#2b8cbe",
                "#0868ac",
                "#084081",
              ],
              Greys: [
                "#ffffff",
                "#f0f0f0",
                "#d9d9d9",
                "#bdbdbd",
                "#969696",
                "#737373",
                "#525252",
                "#252525",
                "#000000",
              ],
              YlOrRd: [
                "#ffffcc",
                "#ffeda0",
                "#fed976",
                "#feb24c",
                "#fd8d3c",
                "#fc4e2a",
                "#e31a1c",
                "#bd0026",
                "#800026",
              ],
              PuRd: [
                "#f7f4f9",
                "#e7e1ef",
                "#d4b9da",
                "#c994c7",
                "#df65b0",
                "#e7298a",
                "#ce1256",
                "#980043",
                "#67001f",
              ],
              Blues: [
                "#f7fbff",
                "#deebf7",
                "#c6dbef",
                "#9ecae1",
                "#6baed6",
                "#4292c6",
                "#2171b5",
                "#08519c",
                "#08306b",
              ],
              PuBuGn: [
                "#fff7fb",
                "#ece2f0",
                "#d0d1e6",
                "#a6bddb",
                "#67a9cf",
                "#3690c0",
                "#02818a",
                "#016c59",
                "#014636",
              ],
              Viridis: [
                "#440154",
                "#482777",
                "#3f4a8a",
                "#31678e",
                "#26838f",
                "#1f9d8a",
                "#6cce5a",
                "#b6de2b",
                "#fee825",
              ],
              Spectral: [
                "#9e0142",
                "#d53e4f",
                "#f46d43",
                "#fdae61",
                "#fee08b",
                "#ffffbf",
                "#e6f598",
                "#abdda4",
                "#66c2a5",
                "#3288bd",
                "#5e4fa2",
              ],
              RdYlGn: [
                "#a50026",
                "#d73027",
                "#f46d43",
                "#fdae61",
                "#fee08b",
                "#ffffbf",
                "#d9ef8b",
                "#a6d96a",
                "#66bd63",
                "#1a9850",
                "#006837",
              ],
              RdBu: [
                "#67001f",
                "#b2182b",
                "#d6604d",
                "#f4a582",
                "#fddbc7",
                "#f7f7f7",
                "#d1e5f0",
                "#92c5de",
                "#4393c3",
                "#2166ac",
                "#053061",
              ],
              PiYG: [
                "#8e0152",
                "#c51b7d",
                "#de77ae",
                "#f1b6da",
                "#fde0ef",
                "#f7f7f7",
                "#e6f5d0",
                "#b8e186",
                "#7fbc41",
                "#4d9221",
                "#276419",
              ],
              PRGn: [
                "#40004b",
                "#762a83",
                "#9970ab",
                "#c2a5cf",
                "#e7d4e8",
                "#f7f7f7",
                "#d9f0d3",
                "#a6dba0",
                "#5aae61",
                "#1b7837",
                "#00441b",
              ],
              RdYlBu: [
                "#a50026",
                "#d73027",
                "#f46d43",
                "#fdae61",
                "#fee090",
                "#ffffbf",
                "#e0f3f8",
                "#abd9e9",
                "#74add1",
                "#4575b4",
                "#313695",
              ],
              BrBG: [
                "#543005",
                "#8c510a",
                "#bf812d",
                "#dfc27d",
                "#f6e8c3",
                "#f5f5f5",
                "#c7eae5",
                "#80cdc1",
                "#35978f",
                "#01665e",
                "#003c30",
              ],
              RdGy: [
                "#67001f",
                "#b2182b",
                "#d6604d",
                "#f4a582",
                "#fddbc7",
                "#ffffff",
                "#e0e0e0",
                "#bababa",
                "#878787",
                "#4d4d4d",
                "#1a1a1a",
              ],
              PuOr: [
                "#7f3b08",
                "#b35806",
                "#e08214",
                "#fdb863",
                "#fee0b6",
                "#f7f7f7",
                "#d8daeb",
                "#b2abd2",
                "#8073ac",
                "#542788",
                "#2d004b",
              ],
              Set2: [
                "#66c2a5",
                "#fc8d62",
                "#8da0cb",
                "#e78ac3",
                "#a6d854",
                "#ffd92f",
                "#e5c494",
                "#b3b3b3",
              ],
              Accent: [
                "#7fc97f",
                "#beaed4",
                "#fdc086",
                "#ffff99",
                "#386cb0",
                "#f0027f",
                "#bf5b17",
                "#666666",
              ],
              Set1: [
                "#e41a1c",
                "#377eb8",
                "#4daf4a",
                "#984ea3",
                "#ff7f00",
                "#ffff33",
                "#a65628",
                "#f781bf",
                "#999999",
              ],
              Set3: [
                "#8dd3c7",
                "#ffffb3",
                "#bebada",
                "#fb8072",
                "#80b1d3",
                "#fdb462",
                "#b3de69",
                "#fccde5",
                "#d9d9d9",
                "#bc80bd",
                "#ccebc5",
                "#ffed6f",
              ],
              Dark2: [
                "#1b9e77",
                "#d95f02",
                "#7570b3",
                "#e7298a",
                "#66a61e",
                "#e6ab02",
                "#a6761d",
                "#666666",
              ],
              Paired: [
                "#a6cee3",
                "#1f78b4",
                "#b2df8a",
                "#33a02c",
                "#fb9a99",
                "#e31a1c",
                "#fdbf6f",
                "#ff7f00",
                "#cab2d6",
                "#6a3d9a",
                "#ffff99",
                "#b15928",
              ],
              Pastel2: [
                "#b3e2cd",
                "#fdcdac",
                "#cbd5e8",
                "#f4cae4",
                "#e6f5c9",
                "#fff2ae",
                "#f1e2cc",
                "#cccccc",
              ],
              Pastel1: [
                "#fbb4ae",
                "#b3cde3",
                "#ccebc5",
                "#decbe4",
                "#fed9a6",
                "#ffffcc",
                "#e5d8bd",
                "#fddaec",
                "#f2f2f2",
              ],
            }),
          (function () {
            var n, r;
            r = [];
            for (n in x) r.push((x[n.toLowerCase()] = x[n]));
            return r;
          })(),
          (Mn = {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflower: "#6495ed",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkgrey: "#a9a9a9",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkslategrey: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            grey: "#808080",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            laserlemon: "#ffff54",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrod: "#fafad2",
            lightgoldenrodyellow: "#fafad2",
            lightgray: "#d3d3d3",
            lightgreen: "#90ee90",
            lightgrey: "#d3d3d3",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            maroon2: "#7f0000",
            maroon3: "#b03060",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370db",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#db7093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            purple2: "#7f007f",
            purple3: "#a020f0",
            rebeccapurple: "#663399",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00",
            yellowgreen: "#9acd32",
          }),
          (k.colors = O = Mn),
          (K = function () {
            var n, r, t, e, o, u, a, c, i;
            return (
              (r = An(arguments)),
              (o = r[0]),
              (n = r[1]),
              (t = r[2]),
              (c = (o + 16) / 116),
              (a = isNaN(n) ? c : c + n / 500),
              (i = isNaN(t) ? c : c - t / 200),
              (c = f.Yn * V(c)),
              (a = f.Xn * V(a)),
              (i = f.Zn * V(i)),
              (u = Sn(3.2404542 * a - 1.5371385 * c - 0.4985314 * i)),
              (e = Sn(-0.969266 * a + 1.8760108 * c + 0.041556 * i)),
              (t = Sn(0.0556434 * a - 0.2040259 * c + 1.0572252 * i)),
              [u, e, t, r.length > 3 ? r[3] : 1]
            );
          }),
          (Sn = function (n) {
            return (
              255 * (n <= 0.00304 ? 12.92 * n : 1.055 * on(n, 1 / 2.4) - 0.055)
            );
          }),
          (V = function (n) {
            return n > f.t1 ? n * n * n : f.t2 * (n - f.t0);
          }),
          (f = {
            Kn: 18,
            Xn: 0.95047,
            Yn: 1,
            Zn: 1.08883,
            t0: 0.137931034,
            t1: 0.206896552,
            t2: 0.12841855,
            t3: 0.008856452,
          }),
          (dn = function () {
            var n, r, t, e, o, u, f, a;
            return (
              (e = An(arguments)),
              (t = e[0]),
              (r = e[1]),
              (n = e[2]),
              (o = yn(t, r, n)),
              (u = o[0]),
              (f = o[1]),
              (a = o[2]),
              [116 * f - 16, 500 * (u - f), 200 * (f - a)]
            );
          }),
          (mn = function (n) {
            return (n /= 255) <= 0.04045
              ? n / 12.92
              : on((n + 0.055) / 1.055, 2.4);
          }),
          (Pn = function (n) {
            return n > f.t3 ? on(n, 1 / 3) : n / f.t2 + f.t0;
          }),
          (yn = function () {
            var n, r, t, e, o, u, a;
            return (
              (e = An(arguments)),
              (t = e[0]),
              (r = e[1]),
              (n = e[2]),
              (t = mn(t)),
              (r = mn(r)),
              (n = mn(n)),
              (o = Pn((0.4124564 * t + 0.3575761 * r + 0.1804375 * n) / f.Xn)),
              (u = Pn((0.2126729 * t + 0.7151522 * r + 0.072175 * n) / f.Yn)),
              (a = Pn((0.0193339 * t + 0.119192 * r + 0.9503041 * n) / f.Zn)),
              [o, u, a]
            );
          }),
          (k.lab = function () {
            return (function (n, r, t) {
              t.prototype = n.prototype;
              var e = new t(),
                o = n.apply(e, r);
              return Object(o) === o ? o : e;
            })(t, En.call(arguments).concat(["lab"]), function () {});
          }),
          (d.lab = K),
          (t.prototype.lab = function () {
            return dn(this._rgb);
          }),
          (g = function (n) {
            var r, t, e, o, u, f, a, c, i, l, s;
            return (
              (n = (function () {
                var r, t, e;
                for (e = [], t = 0, r = n.length; t < r; t++)
                  (o = n[t]), e.push(k(o));
                return e;
              })()),
              2 === n.length
                ? ((i = (function () {
                    var r, t, e;
                    for (e = [], t = 0, r = n.length; t < r; t++)
                      (o = n[t]), e.push(o.lab());
                    return e;
                  })()),
                  (u = i[0]),
                  (f = i[1]),
                  (r = function (n) {
                    var r, t;
                    return (
                      (t = (function () {
                        var t, e;
                        for (e = [], r = t = 0; t <= 2; r = ++t)
                          e.push(u[r] + n * (f[r] - u[r]));
                        return e;
                      })()),
                      k.lab.apply(k, t)
                    );
                  }))
                : 3 === n.length
                ? ((l = (function () {
                    var r, t, e;
                    for (e = [], t = 0, r = n.length; t < r; t++)
                      (o = n[t]), e.push(o.lab());
                    return e;
                  })()),
                  (u = l[0]),
                  (f = l[1]),
                  (a = l[2]),
                  (r = function (n) {
                    var r, t;
                    return (
                      (t = (function () {
                        var t, e;
                        for (e = [], r = t = 0; t <= 2; r = ++t)
                          e.push(
                            (1 - n) * (1 - n) * u[r] +
                              2 * (1 - n) * n * f[r] +
                              n * n * a[r]
                          );
                        return e;
                      })()),
                      k.lab.apply(k, t)
                    );
                  }))
                : 4 === n.length
                ? ((s = (function () {
                    var r, t, e;
                    for (e = [], t = 0, r = n.length; t < r; t++)
                      (o = n[t]), e.push(o.lab());
                    return e;
                  })()),
                  (u = s[0]),
                  (f = s[1]),
                  (a = s[2]),
                  (c = s[3]),
                  (r = function (n) {
                    var r, t;
                    return (
                      (t = (function () {
                        var t, e;
                        for (e = [], r = t = 0; t <= 2; r = ++t)
                          e.push(
                            (1 - n) * (1 - n) * (1 - n) * u[r] +
                              3 * (1 - n) * (1 - n) * n * f[r] +
                              3 * (1 - n) * n * n * a[r] +
                              n * n * n * c[r]
                          );
                        return e;
                      })()),
                      k.lab.apply(k, t)
                    );
                  }))
                : 5 === n.length &&
                  ((t = g(n.slice(0, 3))),
                  (e = g(n.slice(2, 5))),
                  (r = function (n) {
                    return n < 0.5 ? t(2 * n) : e(2 * (n - 0.5));
                  })),
              r
            );
          }),
          (k.bezier = function (n) {
            var r;
            return (
              (r = g(n)),
              (r.scale = function () {
                return k.scale(r);
              }),
              r
            );
          }),
          (k.cubehelix = function (n, r, t, e, o) {
            var u, f, a;
            return (
              null == n && (n = 300),
              null == r && (r = -1.5),
              null == t && (t = 1),
              null == e && (e = 1),
              null == o && (o = [0, 1]),
              (u = 0),
              "array" === Nn(o) ? (f = o[1] - o[0]) : ((f = 0), (o = [o, o])),
              (a = function (a) {
                var c, i, s, p, d, h, b, v, g;
                return (
                  (c = l * ((n + 120) / 360 + r * a)),
                  (b = on(o[0] + f * a, e)),
                  (h = 0 !== u ? t[0] + a * u : t),
                  (i = (h * b * (1 - b)) / 2),
                  (p = N(c)),
                  (g = jn(c)),
                  (v = b + i * (-0.14861 * p + 1.78277 * g)),
                  (d = b + i * (-0.29227 * p - 0.90649 * g)),
                  (s = b + i * (1.97294 * p)),
                  k(j([255 * v, 255 * d, 255 * s]))
                );
              }),
              (a.start = function (r) {
                return null == r ? n : ((n = r), a);
              }),
              (a.rotations = function (n) {
                return null == n ? r : ((r = n), a);
              }),
              (a.gamma = function (n) {
                return null == n ? e : ((e = n), a);
              }),
              (a.hue = function (n) {
                return null == n
                  ? t
                  : ((t = n),
                    "array" === Nn(t)
                      ? ((u = t[1] - t[0]), 0 === u && (t = t[1]))
                      : (u = 0),
                    a);
              }),
              (a.lightness = function (n) {
                return null == n
                  ? o
                  : ("array" === Nn(n)
                      ? ((o = n), (f = n[1] - n[0]))
                      : ((o = [n, n]), (f = 0)),
                    a);
              }),
              (a.scale = function () {
                return k.scale(a);
              }),
              a.hue(t),
              a
            );
          }),
          (k.random = function () {
            var n, r, e, o;
            for (r = "0123456789abcdef", n = "#", e = o = 0; o < 6; e = ++o)
              n += r.charAt(E(16 * Math.random()));
            return new t(n);
          }),
          (k.average = function (n, r) {
            var t, e, o, u, f, c, i, l, s, p, d, h, b;
            null == r && (r = "rgb"),
              (s = n.length),
              (n = n.map(function (n) {
                return k(n);
              })),
              (i = n.splice(0, 1)[0]),
              (h = i.get(r)),
              (u = []),
              (f = 0),
              (c = 0);
            for (l in h)
              (h[l] = h[l] || 0),
                u.push(isNaN(h[l]) ? 0 : 1),
                "h" !== r.charAt(l) ||
                  isNaN(h[l]) ||
                  ((t = (h[l] / 180) * a), (f += N(t)), (c += jn(t)));
            for (e = i.alpha(), d = 0, p = n.length; d < p; d++) {
              (o = n[d]), (b = o.get(r)), (e += o.alpha());
              for (l in h)
                isNaN(b[l]) ||
                  ((h[l] += b[l]),
                  (u[l] += 1),
                  "h" === r.charAt(l) &&
                    ((t = (h[l] / 180) * a), (f += N(t)), (c += jn(t))));
            }
            for (l in h)
              if (((h[l] = h[l] / u[l]), "h" === r.charAt(l))) {
                for (t = (v(c / u[l], f / u[l]) / a) * 180; t < 0; ) t += 360;
                for (; t >= 360; ) t -= 360;
                h[l] = t;
              }
            return k(h, r).alpha(e / s);
          }),
          (d.rgb = function () {
            var n, r, t, e;
            (r = An(arguments)), (t = []);
            for (n in r) (e = r[n]), t.push(e);
            return t;
          }),
          (k.rgb = function () {
            return (function (n, r, t) {
              t.prototype = n.prototype;
              var e = new t(),
                o = n.apply(e, r);
              return Object(o) === o ? o : e;
            })(t, En.call(arguments).concat(["rgb"]), function () {});
          }),
          (t.prototype.rgb = function (n) {
            return (
              null == n && (n = !0),
              n ? this._rgb.map(Math.round).slice(0, 3) : this._rgb.slice(0, 3)
            );
          }),
          (t.prototype.rgba = function (n) {
            return (
              null == n && (n = !0),
              n
                ? [
                    Math.round(this._rgb[0]),
                    Math.round(this._rgb[1]),
                    Math.round(this._rgb[2]),
                    this._rgb[3],
                  ]
                : this._rgb.slice(0)
            );
          }),
          s.push({
            p: 3,
            test: function (n) {
              var r;
              return (
                (r = An(arguments)),
                "array" === Nn(r) && 3 === r.length
                  ? "rgb"
                  : 4 === r.length &&
                    "number" === Nn(r[3]) &&
                    r[3] >= 0 &&
                    r[3] <= 1
                  ? "rgb"
                  : void 0
              );
            },
          }),
          (L = function (n) {
            var r, t, e, o, u, f;
            if (n.match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/))
              return (
                (4 !== n.length && 7 !== n.length) || (n = n.substr(1)),
                3 === n.length &&
                  ((n = n.split("")),
                  (n = n[0] + n[0] + n[1] + n[1] + n[2] + n[2])),
                (f = parseInt(n, 16)),
                (o = f >> 16),
                (e = (f >> 8) & 255),
                (t = 255 & f),
                [o, e, t, 1]
              );
            if (n.match(/^#?([A-Fa-f0-9]{8})$/))
              return (
                9 === n.length && (n = n.substr(1)),
                (f = parseInt(n, 16)),
                (o = (f >> 24) & 255),
                (e = (f >> 16) & 255),
                (t = (f >> 8) & 255),
                (r = wn(((255 & f) / 255) * 100) / 100),
                [o, e, t, r]
              );
            if (null != d.css && (u = d.css(n))) return u;
            throw "unknown color: " + n;
          }),
          (cn = function (n, r) {
            var t, e, o, u, f, a, c;
            return (
              null == r && (r = "rgb"),
              (f = n[0]),
              (o = n[1]),
              (e = n[2]),
              (t = n[3]),
              (f = Math.round(f)),
              (o = Math.round(o)),
              (e = Math.round(e)),
              (c = (f << 16) | (o << 8) | e),
              (a = "000000" + c.toString(16)),
              (a = a.substr(a.length - 6)),
              (u = "0" + wn(255 * t).toString(16)),
              (u = u.substr(u.length - 2)),
              "#" +
                (function () {
                  switch (r.toLowerCase()) {
                    case "rgba":
                      return a + u;
                    case "argb":
                      return u + a;
                    default:
                      return a;
                  }
                })()
            );
          }),
          (d.hex = function (n) {
            return L(n);
          }),
          (k.hex = function () {
            return (function (n, r, t) {
              t.prototype = n.prototype;
              var e = new t(),
                o = n.apply(e, r);
              return Object(o) === o ? o : e;
            })(t, En.call(arguments).concat(["hex"]), function () {});
          }),
          (t.prototype.hex = function (n) {
            return null == n && (n = "rgb"), cn(this._rgb, n);
          }),
          s.push({
            p: 4,
            test: function (n) {
              if (1 === arguments.length && "string" === Nn(n)) return "hex";
            },
          }),
          (G = function () {
            var n, r, t, e, o, u, f, a, c, i, l, s, p, d;
            if (
              ((n = An(arguments)), (o = n[0]), (l = n[1]), (f = n[2]), 0 === l)
            )
              c = e = r = 255 * f;
            else {
              for (
                d = [0, 0, 0],
                  t = [0, 0, 0],
                  p = f < 0.5 ? f * (1 + l) : f + l - f * l,
                  s = 2 * f - p,
                  o /= 360,
                  d[0] = o + 1 / 3,
                  d[1] = o,
                  d[2] = o - 1 / 3,
                  u = a = 0;
                a <= 2;
                u = ++a
              )
                d[u] < 0 && (d[u] += 1),
                  d[u] > 1 && (d[u] -= 1),
                  6 * d[u] < 1
                    ? (t[u] = s + 6 * (p - s) * d[u])
                    : 2 * d[u] < 1
                    ? (t[u] = p)
                    : 3 * d[u] < 2
                    ? (t[u] = s + (p - s) * (2 / 3 - d[u]) * 6)
                    : (t[u] = s);
              (i = [wn(255 * t[0]), wn(255 * t[1]), wn(255 * t[2])]),
                (c = i[0]),
                (e = i[1]),
                (r = i[2]);
            }
            return n.length > 3 ? [c, e, r, n[3]] : [c, e, r];
          }),
          (sn = function (n, r, t) {
            var e, o, u, f, a;
            return (
              void 0 !== n &&
                n.length >= 3 &&
                ((f = n), (n = f[0]), (r = f[1]), (t = f[2])),
              (n /= 255),
              (r /= 255),
              (t /= 255),
              (u = Math.min(n, r, t)),
              (Q = Math.max(n, r, t)),
              (o = (Q + u) / 2),
              Q === u
                ? ((a = 0), (e = Number.NaN))
                : (a = o < 0.5 ? (Q - u) / (Q + u) : (Q - u) / (2 - Q - u)),
              n === Q
                ? (e = (r - t) / (Q - u))
                : r === Q
                ? (e = 2 + (t - n) / (Q - u))
                : t === Q && (e = 4 + (n - r) / (Q - u)),
              (e *= 60),
              e < 0 && (e += 360),
              [e, a, o]
            );
          }),
          (k.hsl = function () {
            return (function (n, r, t) {
              t.prototype = n.prototype;
              var e = new t(),
                o = n.apply(e, r);
              return Object(o) === o ? o : e;
            })(t, En.call(arguments).concat(["hsl"]), function () {});
          }),
          (d.hsl = G),
          (t.prototype.hsl = function () {
            return sn(this._rgb);
          }),
          (I = function () {
            var n, r, t, e, o, u, f, a, c, i, l, s, p, d, h, b, v, g;
            if (
              ((n = An(arguments)),
              (o = n[0]),
              (b = n[1]),
              (g = n[2]),
              (g *= 255),
              0 === b)
            )
              c = e = r = g;
            else
              switch (
                (360 === o && (o = 0),
                o > 360 && (o -= 360),
                o < 0 && (o += 360),
                (o /= 60),
                (u = E(o)),
                (t = o - u),
                (f = g * (1 - b)),
                (a = g * (1 - b * t)),
                (v = g * (1 - b * (1 - t))),
                u)
              ) {
                case 0:
                  (i = [g, v, f]), (c = i[0]), (e = i[1]), (r = i[2]);
                  break;
                case 1:
                  (l = [a, g, f]), (c = l[0]), (e = l[1]), (r = l[2]);
                  break;
                case 2:
                  (s = [f, g, v]), (c = s[0]), (e = s[1]), (r = s[2]);
                  break;
                case 3:
                  (p = [f, a, g]), (c = p[0]), (e = p[1]), (r = p[2]);
                  break;
                case 4:
                  (d = [v, f, g]), (c = d[0]), (e = d[1]), (r = d[2]);
                  break;
                case 5:
                  (h = [g, f, a]), (c = h[0]), (e = h[1]), (r = h[2]);
              }
            return [c, e, r, n.length > 3 ? n[3] : 1];
          }),
          (pn = function () {
            var n, r, t, e, o, u, f, a, c;
            return (
              (f = An(arguments)),
              (u = f[0]),
              (t = f[1]),
              (n = f[2]),
              (o = Math.min(u, t, n)),
              (Q = Math.max(u, t, n)),
              (r = Q - o),
              (c = Q / 255),
              0 === Q
                ? ((e = Number.NaN), (a = 0))
                : ((a = r / Q),
                  u === Q && (e = (t - n) / r),
                  t === Q && (e = 2 + (n - u) / r),
                  n === Q && (e = 4 + (u - t) / r),
                  (e *= 60),
                  e < 0 && (e += 360)),
              [e, a, c]
            );
          }),
          (k.hsv = function () {
            return (function (n, r, t) {
              t.prototype = n.prototype;
              var e = new t(),
                o = n.apply(e, r);
              return Object(o) === o ? o : e;
            })(t, En.call(arguments).concat(["hsv"]), function () {});
          }),
          (d.hsv = I),
          (t.prototype.hsv = function () {
            return pn(this._rgb);
          }),
          (tn = function (n) {
            var r, t, e;
            return "number" === Nn(n) && n >= 0 && n <= 16777215
              ? ((e = n >> 16),
                (t = (n >> 8) & 255),
                (r = 255 & n),
                [e, t, r, 1])
              : (console.warn("unknown num color: " + n), [0, 0, 0, 1]);
          }),
          (vn = function () {
            var n, r, t, e;
            return (
              (e = An(arguments)),
              (t = e[0]),
              (r = e[1]),
              (n = e[2]),
              (t << 16) + (r << 8) + n
            );
          }),
          (k.num = function (n) {
            return new t(n, "num");
          }),
          (t.prototype.num = function (n) {
            return null == n && (n = "rgb"), vn(this._rgb, n);
          }),
          (d.num = tn),
          s.push({
            p: 1,
            test: function (n) {
              if (
                1 === arguments.length &&
                "number" === Nn(n) &&
                n >= 0 &&
                n <= 16777215
              )
                return "num";
            },
          }),
          (B = function () {
            var n, r, t, e, o, u, f, a, c, i, l, s, p, d, h, b, v, g, y, m;
            if (
              ((t = An(arguments)),
              (a = t[0]),
              (o = t[1]),
              (r = t[2]),
              (o /= 100),
              (f = (f / 100) * 255),
              (n = 255 * o),
              0 === o)
            )
              s = f = e = r;
            else
              switch (
                (360 === a && (a = 0),
                a > 360 && (a -= 360),
                a < 0 && (a += 360),
                (a /= 60),
                (c = E(a)),
                (u = a - c),
                (i = r * (1 - o)),
                (l = i + n * (1 - u)),
                (y = i + n * u),
                (m = i + n),
                c)
              ) {
                case 0:
                  (p = [m, y, i]), (s = p[0]), (f = p[1]), (e = p[2]);
                  break;
                case 1:
                  (d = [l, m, i]), (s = d[0]), (f = d[1]), (e = d[2]);
                  break;
                case 2:
                  (h = [i, m, y]), (s = h[0]), (f = h[1]), (e = h[2]);
                  break;
                case 3:
                  (b = [i, l, m]), (s = b[0]), (f = b[1]), (e = b[2]);
                  break;
                case 4:
                  (v = [y, i, m]), (s = v[0]), (f = v[1]), (e = v[2]);
                  break;
                case 5:
                  (g = [m, i, l]), (s = g[0]), (f = g[1]), (e = g[2]);
              }
            return [s, f, e, t.length > 3 ? t[3] : 1];
          }),
          (an = function () {
            var n, r, t, e, o, u, f, a, c;
            return (
              (c = An(arguments)),
              (a = c[0]),
              (o = c[1]),
              (r = c[2]),
              (f = Math.min(a, o, r)),
              (Q = Math.max(a, o, r)),
              (e = Q - f),
              (t = (100 * e) / 255),
              (n = (f / (255 - e)) * 100),
              0 === e
                ? (u = Number.NaN)
                : (a === Q && (u = (o - r) / e),
                  o === Q && (u = 2 + (r - a) / e),
                  r === Q && (u = 4 + (a - o) / e),
                  (u *= 60),
                  u < 0 && (u += 360)),
              [u, t, n]
            );
          }),
          (k.hcg = function () {
            return (function (n, r, t) {
              t.prototype = n.prototype;
              var e = new t(),
                o = n.apply(e, r);
              return Object(o) === o ? o : e;
            })(t, En.call(arguments).concat(["hcg"]), function () {});
          }),
          (d.hcg = B),
          (t.prototype.hcg = function () {
            return an(this._rgb);
          }),
          (A = function (n) {
            var r, t, e, o, u, f, a, c;
            if (((n = n.toLowerCase()), null != k.colors && k.colors[n]))
              return L(k.colors[n]);
            if (
              (u = n.match(/rgb\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*\)/))
            ) {
              for (a = u.slice(1, 4), o = f = 0; f <= 2; o = ++f) a[o] = +a[o];
              a[3] = 1;
            } else if (
              (u = n.match(
                /rgba\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*,\s*([01]|[01]?\.\d+)\)/
              ))
            )
              for (a = u.slice(1, 5), o = c = 0; c <= 3; o = ++c) a[o] = +a[o];
            else if (
              (u = n.match(
                /rgb\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/
              ))
            ) {
              for (a = u.slice(1, 4), o = r = 0; r <= 2; o = ++r)
                a[o] = wn(2.55 * a[o]);
              a[3] = 1;
            } else if (
              (u = n.match(
                /rgba\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/
              ))
            ) {
              for (a = u.slice(1, 5), o = t = 0; t <= 2; o = ++t)
                a[o] = wn(2.55 * a[o]);
              a[3] = +a[3];
            } else
              (u = n.match(
                /hsl\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/
              ))
                ? ((e = u.slice(1, 4)),
                  (e[1] *= 0.01),
                  (e[2] *= 0.01),
                  (a = G(e)),
                  (a[3] = 1))
                : (u = n.match(
                    /hsla\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/
                  )) &&
                  ((e = u.slice(1, 4)),
                  (e[1] *= 0.01),
                  (e[2] *= 0.01),
                  (a = G(e)),
                  (a[3] = +u[4]));
            return a;
          }),
          (fn = function (n) {
            var r;
            return (
              (r = n[3] < 1 ? "rgba" : "rgb"),
              "rgb" === r
                ? r + "(" + n.slice(0, 3).map(wn).join(",") + ")"
                : "rgba" === r
                ? r + "(" + n.slice(0, 3).map(wn).join(",") + "," + n[3] + ")"
                : void 0
            );
          }),
          (xn = function (n) {
            return wn(100 * n) / 100;
          }),
          (q = function (n, r) {
            var t;
            return (
              (t = r < 1 ? "hsla" : "hsl"),
              (n[0] = xn(n[0] || 0)),
              (n[1] = xn(100 * n[1]) + "%"),
              (n[2] = xn(100 * n[2]) + "%"),
              "hsla" === t && (n[3] = r),
              t + "(" + n.join(",") + ")"
            );
          }),
          (d.css = function (n) {
            return A(n);
          }),
          (k.css = function () {
            return (function (n, r, t) {
              t.prototype = n.prototype;
              var e = new t(),
                o = n.apply(e, r);
              return Object(o) === o ? o : e;
            })(t, En.call(arguments).concat(["css"]), function () {});
          }),
          (t.prototype.css = function (n) {
            return (
              null == n && (n = "rgb"),
              "rgb" === n.slice(0, 3)
                ? fn(this._rgb)
                : "hsl" === n.slice(0, 3)
                ? q(this.hsl(), this.alpha())
                : void 0
            );
          }),
          (d.named = function (n) {
            return L(Mn[n]);
          }),
          s.push({
            p: 5,
            test: function (n) {
              if (1 === arguments.length && null != Mn[n]) return "named";
            },
          }),
          (t.prototype.name = function (n) {
            var r, t;
            arguments.length &&
              (Mn[n] && (this._rgb = L(Mn[n])), (this._rgb[3] = 1)),
              (r = this.hex());
            for (t in Mn) if (r === Mn[t]) return t;
            return r;
          }),
          (z = function () {
            var n, r, t, e;
            return (
              (e = An(arguments)),
              (t = e[0]),
              (n = e[1]),
              (r = e[2]),
              (r *= u),
              [t, N(r) * n, jn(r) * n]
            );
          }),
          (D = function () {
            var n, r, t, e, o, u, f, a, c, i, l;
            return (
              (t = An(arguments)),
              (a = t[0]),
              (o = t[1]),
              (f = t[2]),
              (i = z(a, o, f)),
              (n = i[0]),
              (r = i[1]),
              (e = i[2]),
              (l = K(n, r, e)),
              (c = l[0]),
              (u = l[1]),
              (e = l[2]),
              [c, u, e, t.length > 3 ? t[3] : 1]
            );
          }),
          (X = function () {
            var n, r, t, e, o, u;
            return (
              (u = An(arguments)),
              (o = u[0]),
              (n = u[1]),
              (r = u[2]),
              (t = _n(n * n + r * r)),
              (e = (v(r, n) * i + 360) % 360),
              0 === wn(1e4 * t) && (e = Number.NaN),
              [o, t, e]
            );
          }),
          (hn = function () {
            var n, r, t, e, o, u, f;
            return (
              (u = An(arguments)),
              (o = u[0]),
              (t = u[1]),
              (r = u[2]),
              (f = dn(o, t, r)),
              (e = f[0]),
              (n = f[1]),
              (r = f[2]),
              X(e, n, r)
            );
          }),
          (k.lch = function () {
            var n;
            return (n = An(arguments)), new t(n, "lch");
          }),
          (k.hcl = function () {
            var n;
            return (n = An(arguments)), new t(n, "hcl");
          }),
          (d.lch = D),
          (d.hcl = function () {
            var n, r, t, e;
            return (
              (e = An(arguments)),
              (r = e[0]),
              (n = e[1]),
              (t = e[2]),
              D([t, n, r])
            );
          }),
          (t.prototype.lch = function () {
            return hn(this._rgb);
          }),
          (t.prototype.hcl = function () {
            return hn(this._rgb).reverse();
          }),
          (un = function (n) {
            var r, t, e, o, u, f, a, c, i;
            return (
              null == n && (n = "rgb"),
              (c = An(arguments)),
              (a = c[0]),
              (o = c[1]),
              (r = c[2]),
              (a /= 255),
              (o /= 255),
              (r /= 255),
              (u = 1 - Math.max(a, Math.max(o, r))),
              (e = u < 1 ? 1 / (1 - u) : 0),
              (t = (1 - a - u) * e),
              (f = (1 - o - u) * e),
              (i = (1 - r - u) * e),
              [t, f, i, u]
            );
          }),
          (_ = function () {
            var n, r, t, e, o, u, f, a, c;
            return (
              (r = An(arguments)),
              (e = r[0]),
              (f = r[1]),
              (c = r[2]),
              (u = r[3]),
              (n = r.length > 4 ? r[4] : 1),
              1 === u
                ? [0, 0, 0, n]
                : ((a = e >= 1 ? 0 : 255 * (1 - e) * (1 - u)),
                  (o = f >= 1 ? 0 : 255 * (1 - f) * (1 - u)),
                  (t = c >= 1 ? 0 : 255 * (1 - c) * (1 - u)),
                  [a, o, t, n])
            );
          }),
          (d.cmyk = function () {
            return _(An(arguments));
          }),
          (k.cmyk = function () {
            return (function (n, r, t) {
              t.prototype = n.prototype;
              var e = new t(),
                o = n.apply(e, r);
              return Object(o) === o ? o : e;
            })(t, En.call(arguments).concat(["cmyk"]), function () {});
          }),
          (t.prototype.cmyk = function () {
            return un(this._rgb);
          }),
          (d.gl = function () {
            var n, r, t, e, o;
            for (
              e = function () {
                var n, t;
                (n = An(arguments)), (t = []);
                for (r in n) (o = n[r]), t.push(o);
                return t;
              }.apply(this, arguments),
                n = t = 0;
              t <= 2;
              n = ++t
            )
              e[n] *= 255;
            return e;
          }),
          (k.gl = function () {
            return (function (n, r, t) {
              t.prototype = n.prototype;
              var e = new t(),
                o = n.apply(e, r);
              return Object(o) === o ? o : e;
            })(t, En.call(arguments).concat(["gl"]), function () {});
          }),
          (t.prototype.gl = function () {
            var n;
            return (n = this._rgb), [n[0] / 255, n[1] / 255, n[2] / 255, n[3]];
          }),
          (bn = function (n, r, t) {
            var e;
            return (
              (e = An(arguments)),
              (n = e[0]),
              (r = e[1]),
              (t = e[2]),
              (n = W(n)),
              (r = W(r)),
              (t = W(t)),
              0.2126 * n + 0.7152 * r + 0.0722 * t
            );
          }),
          (W = function (n) {
            return (
              (n /= 255),
              n <= 0.03928 ? n / 12.92 : on((n + 0.055) / 1.055, 2.4)
            );
          }),
          (h = []),
          (U = function (n, r, t, e) {
            var o, u, f, a;
            for (
              null == t && (t = 0.5),
                null == e && (e = "rgb"),
                "object" !== Nn(n) && (n = k(n)),
                "object" !== Nn(r) && (r = k(r)),
                f = 0,
                u = h.length;
              f < u;
              f++
            )
              if (((o = h[f]), e === o[0])) {
                a = o[1](n, r, t, e);
                break;
              }
            if (null == a) throw "color mode " + e + " is not supported";
            return a.alpha(n.alpha() + t * (r.alpha() - n.alpha()));
          }),
          (k.interpolate = U),
          (t.prototype.interpolate = function (n, r, t) {
            return U(this, n, r, t);
          }),
          (k.mix = U),
          (t.prototype.mix = t.prototype.interpolate),
          (C = function (n, r, e, o) {
            var u, f;
            return (
              (u = n._rgb),
              (f = r._rgb),
              new t(
                u[0] + e * (f[0] - u[0]),
                u[1] + e * (f[1] - u[1]),
                u[2] + e * (f[2] - u[2]),
                o
              )
            );
          }),
          h.push(["rgb", C]),
          (t.prototype.luminance = function (n, r) {
            var t, e, o, u;
            return (
              null == r && (r = "rgb"),
              arguments.length
                ? (0 === n
                    ? (this._rgb = [0, 0, 0, this._rgb[3]])
                    : 1 === n
                    ? (this._rgb = [255, 255, 255, this._rgb[3]])
                    : ((e = 1e-7),
                      (o = 20),
                      (u = function (t, f) {
                        var a, c;
                        return (
                          (c = t.interpolate(f, 0.5, r)),
                          (a = c.luminance()),
                          Math.abs(n - a) < e || !o--
                            ? c
                            : a > n
                            ? u(t, c)
                            : u(c, f)
                        );
                      }),
                      (t = bn(this._rgb)),
                      (this._rgb = (
                        t > n ? u(k("black"), this) : u(this, k("white"))
                      ).rgba())),
                  this)
                : bn(this._rgb)
            );
          }),
          (On = function (n) {
            var r, t, e, o;
            return (
              (o = n / 100),
              o < 66
                ? ((e = 255),
                  (t =
                    -155.25485562709179 -
                    0.44596950469579133 * (t = o - 2) +
                    104.49216199393888 * T(t)),
                  (r =
                    o < 20
                      ? 0
                      : -254.76935184120902 +
                        0.8274096064007395 * (r = o - 10) +
                        115.67994401066147 * T(r)))
                : ((e =
                    351.97690566805693 +
                    0.114206453784165 * (e = o - 55) -
                    40.25366309332127 * T(e)),
                  (t =
                    325.4494125711974 +
                    0.07943456536662342 * (t = o - 50) -
                    28.0852963507957 * T(t)),
                  (r = 255)),
              [e, t, r]
            );
          }),
          (gn = function () {
            var n, r, t, e, o, u, f, a, c;
            for (
              f = An(arguments),
                u = f[0],
                t = f[1],
                n = f[2],
                o = 1e3,
                e = 4e4,
                r = 0.4;
              e - o > r;

            )
              (c = 0.5 * (e + o)),
                (a = On(c)),
                a[2] / a[0] >= n / u ? (e = c) : (o = c);
            return wn(c);
          }),
          (k.temperature = k.kelvin =
            function () {
              return (function (n, r, t) {
                t.prototype = n.prototype;
                var e = new t(),
                  o = n.apply(e, r);
                return Object(o) === o ? o : e;
              })(t, En.call(arguments).concat(["temperature"]), function () {});
            }),
          (d.temperature = d.kelvin = d.K = On),
          (t.prototype.temperature = function () {
            return gn(this._rgb);
          }),
          (t.prototype.kelvin = t.prototype.temperature),
          (k.contrast = function (n, r) {
            var e, o, u, f;
            return (
              ("string" !== (u = Nn(n)) && "number" !== u) || (n = new t(n)),
              ("string" !== (f = Nn(r)) && "number" !== f) || (r = new t(r)),
              (e = n.luminance()),
              (o = r.luminance()),
              e > o ? (e + 0.05) / (o + 0.05) : (o + 0.05) / (e + 0.05)
            );
          }),
          (k.distance = function (n, r, e) {
            var o, u, f, a, c, i, l;
            null == e && (e = "lab"),
              ("string" !== (c = Nn(n)) && "number" !== c) || (n = new t(n)),
              ("string" !== (i = Nn(r)) && "number" !== i) || (r = new t(r)),
              (f = n.get(e)),
              (a = r.get(e)),
              (l = 0);
            for (u in f) (o = (f[u] || 0) - (a[u] || 0)), (l += o * o);
            return Math.sqrt(l);
          }),
          (k.deltaE = function (n, r, e, o) {
            var u,
              f,
              c,
              i,
              l,
              s,
              p,
              d,
              h,
              g,
              y,
              m,
              x,
              w,
              k,
              j,
              _,
              O,
              A,
              M,
              P,
              S,
              E,
              B,
              L,
              R,
              q;
            for (
              null == e && (e = 1),
                null == o && (o = 1),
                ("string" !== (_ = Nn(n)) && "number" !== _) || (n = new t(n)),
                ("string" !== (O = Nn(r)) && "number" !== O) || (r = new t(r)),
                A = n.lab(),
                u = A[0],
                c = A[1],
                l = A[2],
                M = r.lab(),
                f = M[0],
                i = M[1],
                s = M[2],
                p = _n(c * c + l * l),
                d = _n(i * i + s * s),
                E = u < 16 ? 0.511 : (0.040975 * u) / (1 + 0.01765 * u),
                P = (0.0638 * p) / (1 + 0.0131 * p) + 0.638,
                j = p < 1e-6 ? 0 : (180 * v(l, c)) / a;
              j < 0;

            )
              j += 360;
            for (; j >= 360; ) j -= 360;
            return (
              (B =
                j >= 164 && j <= 345
                  ? 0.56 + b(0.2 * N((a * (j + 168)) / 180))
                  : 0.36 + b(0.4 * N((a * (j + 35)) / 180))),
              (h = p * p * p * p),
              (k = _n(h / (h + 1900))),
              (S = P * (k * B + 1 - k)),
              (w = u - f),
              (x = p - d),
              (y = c - i),
              (m = l - s),
              (g = y * y + m * m - x * x),
              (L = w / (e * E)),
              (R = x / (o * P)),
              (q = S),
              _n(L * L + R * R + g / (q * q))
            );
          }),
          (t.prototype.get = function (n) {
            var r, t, e, o, u, f;
            return (
              (e = this),
              (u = n.split(".")),
              (o = u[0]),
              (r = u[1]),
              (f = e[o]()),
              r
                ? ((t = o.indexOf(r)),
                  t > -1
                    ? f[t]
                    : console.warn("unknown channel " + r + " in mode " + o))
                : f
            );
          }),
          (t.prototype.set = function (n, r) {
            var t, e, o, u, f, a;
            if (((o = this), (f = n.split(".")), (u = f[0]), (t = f[1]), t))
              if (((a = o[u]()), (e = u.indexOf(t)), e > -1))
                if ("string" === Nn(r))
                  switch (r.charAt(0)) {
                    case "+":
                      a[e] += +r;
                      break;
                    case "-":
                      a[e] += +r;
                      break;
                    case "*":
                      a[e] *= +r.substr(1);
                      break;
                    case "/":
                      a[e] /= +r.substr(1);
                      break;
                    default:
                      a[e] = +r;
                  }
                else a[e] = r;
              else console.warn("unknown channel " + t + " in mode " + u);
            else a = r;
            return k(a, u).alpha(o.alpha());
          }),
          (t.prototype.clipped = function () {
            return this._rgb._clipped || !1;
          }),
          (t.prototype.alpha = function (n) {
            return arguments.length
              ? k.rgb([this._rgb[0], this._rgb[1], this._rgb[2], n])
              : this._rgb[3];
          }),
          (t.prototype.darken = function (n) {
            var r, t;
            return (
              null == n && (n = 1),
              (t = this),
              (r = t.lab()),
              (r[0] -= f.Kn * n),
              k.lab(r).alpha(t.alpha())
            );
          }),
          (t.prototype.brighten = function (n) {
            return null == n && (n = 1), this.darken(-n);
          }),
          (t.prototype.darker = t.prototype.darken),
          (t.prototype.brighter = t.prototype.brighten),
          (t.prototype.saturate = function (n) {
            var r, t;
            return (
              null == n && (n = 1),
              (t = this),
              (r = t.lch()),
              (r[1] += n * f.Kn),
              r[1] < 0 && (r[1] = 0),
              k.lch(r).alpha(t.alpha())
            );
          }),
          (t.prototype.desaturate = function (n) {
            return null == n && (n = 1), this.saturate(-n);
          }),
          (t.prototype.premultiply = function () {
            var n, r;
            return (
              (r = this.rgb()),
              (n = this.alpha()),
              k(r[0] * n, r[1] * n, r[2] * n, n)
            );
          }),
          (y = function (n, r, t) {
            if (!y[t]) throw "unknown blend mode " + t;
            return y[t](n, r);
          }),
          (m = function (n) {
            return function (r, t) {
              var e, o;
              return (e = k(t).rgb()), (o = k(r).rgb()), k(n(e, o), "rgb");
            };
          }),
          (S = function (n) {
            return function (r, t) {
              var e, o, u;
              for (u = [], e = o = 0; o <= 3; e = ++o) u[e] = n(r[e], t[e]);
              return u;
            };
          }),
          (rn = function (n, r) {
            return n;
          }),
          (nn = function (n, r) {
            return (n * r) / 255;
          }),
          (M = function (n, r) {
            return n > r ? r : n;
          }),
          (Z = function (n, r) {
            return n > r ? n : r;
          }),
          (kn = function (n, r) {
            return 255 * (1 - (1 - n / 255) * (1 - r / 255));
          }),
          (en = function (n, r) {
            return r < 128
              ? (2 * n * r) / 255
              : 255 * (1 - 2 * (1 - n / 255) * (1 - r / 255));
          }),
          (w = function (n, r) {
            return 255 * (1 - (1 - r / 255) / (n / 255));
          }),
          (P = function (n, r) {
            return 255 === n
              ? 255
              : ((n = (255 * (r / 255)) / (1 - n / 255)), n > 255 ? 255 : n);
          }),
          (y.normal = m(S(rn))),
          (y.multiply = m(S(nn))),
          (y.screen = m(S(kn))),
          (y.overlay = m(S(en))),
          (y.darken = m(S(M))),
          (y.lighten = m(S(Z))),
          (y.dodge = m(S(P))),
          (y.burn = m(S(w))),
          (k.blend = y),
          (k.analyze = function (n) {
            var r, t, e, o;
            for (
              e = {
                min: Number.MAX_VALUE,
                max: Number.MAX_VALUE * -1,
                sum: 0,
                values: [],
                count: 0,
              },
                t = 0,
                r = n.length;
              t < r;
              t++
            )
              (o = n[t]),
                null == o ||
                  isNaN(o) ||
                  (e.values.push(o),
                  (e.sum += o),
                  o < e.min && (e.min = o),
                  o > e.max && (e.max = o),
                  (e.count += 1));
            return (
              (e.domain = [e.min, e.max]),
              (e.limits = function (n, r) {
                return k.limits(e, n, r);
              }),
              e
            );
          }),
          (k.scale = function (n, r) {
            var t,
              e,
              o,
              u,
              f,
              a,
              c,
              i,
              l,
              s,
              p,
              d,
              h,
              b,
              v,
              g,
              y,
              m,
              x,
              w,
              j,
              _;
            return (
              (l = "rgb"),
              (s = k("#ccc")),
              (b = 0),
              (a = !1),
              (f = [0, 1]),
              (h = []),
              (d = [0, 0]),
              (t = !1),
              (o = []),
              (p = !1),
              (i = 0),
              (c = 1),
              (u = !1),
              (e = {}),
              (v = !0),
              (j = function (n) {
                var r, t, e, u, f, a;
                if (
                  (null == n && (n = ["#fff", "#000"]),
                  null != n &&
                    "string" === Nn(n) &&
                    null != k.brewer &&
                    (n = k.brewer[n] || k.brewer[n.toLowerCase()] || n),
                  "array" === Nn(n))
                ) {
                  for (
                    n = n.slice(0), r = e = 0, u = n.length - 1;
                    0 <= u ? e <= u : e >= u;
                    r = 0 <= u ? ++e : --e
                  )
                    (t = n[r]), "string" === Nn(t) && (n[r] = k(t));
                  for (
                    h.length = 0, r = a = 0, f = n.length - 1;
                    0 <= f ? a <= f : a >= f;
                    r = 0 <= f ? ++a : --a
                  )
                    h.push(r / (n.length - 1));
                }
                return w(), (o = n);
              }),
              (m = function (n) {
                var r, e;
                if (null != t) {
                  for (e = t.length - 1, r = 0; r < e && n >= t[r]; ) r++;
                  return r - 1;
                }
                return 0;
              }),
              (_ = function (n) {
                return n;
              }),
              (g = function (n) {
                var r, e, o, u, f;
                return (
                  (f = n),
                  t.length > 2 &&
                    ((u = t.length - 1),
                    (r = m(n)),
                    (o = t[0] + (t[1] - t[0]) * (0 + 0.5 * b)),
                    (e = t[u - 1] + (t[u] - t[u - 1]) * (1 - 0.5 * b)),
                    (f =
                      i +
                      ((t[r] + 0.5 * (t[r + 1] - t[r]) - o) / (e - o)) *
                        (c - i))),
                  f
                );
              }),
              (x = function (n, r) {
                var u, f, a, p, b, g, y, x;
                if ((null == r && (r = !1), isNaN(n))) return s;
                if (
                  (r
                    ? (x = n)
                    : t && t.length > 2
                    ? ((u = m(n)),
                      (x = u / (t.length - 2)),
                      (x = d[0] + x * (1 - d[0] - d[1])))
                    : c !== i
                    ? ((x = (n - i) / (c - i)),
                      (x = d[0] + x * (1 - d[0] - d[1])),
                      (x = Math.min(1, Math.max(0, x))))
                    : (x = 1),
                  r || (x = _(x)),
                  (p = Math.floor(1e4 * x)),
                  v && e[p])
                )
                  f = e[p];
                else {
                  if ("array" === Nn(o))
                    for (
                      a = b = 0, y = h.length - 1;
                      0 <= y ? b <= y : b >= y;
                      a = 0 <= y ? ++b : --b
                    ) {
                      if (((g = h[a]), x <= g)) {
                        f = o[a];
                        break;
                      }
                      if (x >= g && a === h.length - 1) {
                        f = o[a];
                        break;
                      }
                      if (x > g && x < h[a + 1]) {
                        (x = (x - g) / (h[a + 1] - g)),
                          (f = k.interpolate(o[a], o[a + 1], x, l));
                        break;
                      }
                    }
                  else "function" === Nn(o) && (f = o(x));
                  v && (e[p] = f);
                }
                return f;
              }),
              (w = function () {
                return (e = {});
              }),
              j(n),
              (y = function (n) {
                var r;
                return (r = k(x(n))), p && r[p] ? r[p]() : r;
              }),
              (y.classes = function (n) {
                var r;
                return null != n
                  ? ("array" === Nn(n)
                      ? ((t = n), (f = [n[0], n[n.length - 1]]))
                      : ((r = k.analyze(f)),
                        (t = 0 === n ? [r.min, r.max] : k.limits(r, "e", n))),
                    y)
                  : t;
              }),
              (y.domain = function (n) {
                var r, t, e, u, a, l, s;
                if (!arguments.length) return f;
                if (
                  ((i = n[0]),
                  (c = n[n.length - 1]),
                  (h = []),
                  (e = o.length),
                  n.length === e && i !== c)
                )
                  for (a = 0, u = n.length; a < u; a++)
                    (t = n[a]), h.push((t - i) / (c - i));
                else
                  for (
                    r = s = 0, l = e - 1;
                    0 <= l ? s <= l : s >= l;
                    r = 0 <= l ? ++s : --s
                  )
                    h.push(r / (e - 1));
                return (f = [i, c]), y;
              }),
              (y.mode = function (n) {
                return arguments.length ? ((l = n), w(), y) : l;
              }),
              (y.range = function (n, r) {
                return j(n, r), y;
              }),
              (y.out = function (n) {
                return (p = n), y;
              }),
              (y.spread = function (n) {
                return arguments.length ? ((b = n), y) : b;
              }),
              (y.correctLightness = function (n) {
                return (
                  null == n && (n = !0),
                  (u = n),
                  w(),
                  (_ = u
                    ? function (n) {
                        var r, t, e, o, u, f, a, c, i;
                        for (
                          r = x(0, !0).lab()[0],
                            t = x(1, !0).lab()[0],
                            a = r > t,
                            e = x(n, !0).lab()[0],
                            u = r + (t - r) * n,
                            o = e - u,
                            c = 0,
                            i = 1,
                            f = 20;
                          Math.abs(o) > 0.01 && f-- > 0;

                        )
                          !(function () {
                            return (
                              a && (o *= -1),
                              o < 0
                                ? ((c = n), (n += 0.5 * (i - n)))
                                : ((i = n), (n += 0.5 * (c - n))),
                              (e = x(n, !0).lab()[0]),
                              (o = e - u)
                            );
                          })();
                        return n;
                      }
                    : function (n) {
                        return n;
                      }),
                  y
                );
              }),
              (y.padding = function (n) {
                return null != n
                  ? ("number" === Nn(n) && (n = [n, n]), (d = n), y)
                  : d;
              }),
              (y.colors = function (r, e) {
                var u, a, c, i, l, s, p, d;
                if (
                  (arguments.length < 2 && (e = "hex"),
                  (l = []),
                  0 === arguments.length)
                )
                  l = o.slice(0);
                else if (1 === r) l = [y(0.5)];
                else if (r > 1)
                  (a = f[0]),
                    (u = f[1] - a),
                    (l = function () {
                      s = [];
                      for (
                        var n = 0;
                        0 <= r ? n < r : n > r;
                        0 <= r ? n++ : n--
                      )
                        s.push(n);
                      return s;
                    }
                      .apply(this)
                      .map(function (n) {
                        return y(a + (n / (r - 1)) * u);
                      }));
                else {
                  if (((n = []), (p = []), t && t.length > 2))
                    for (
                      c = d = 1, i = t.length;
                      1 <= i ? d < i : d > i;
                      c = 1 <= i ? ++d : --d
                    )
                      p.push(0.5 * (t[c - 1] + t[c]));
                  else p = f;
                  l = p.map(function (n) {
                    return y(n);
                  });
                }
                return (
                  k[e] &&
                    (l = l.map(function (n) {
                      return n[e]();
                    })),
                  l
                );
              }),
              (y.cache = function (n) {
                return null != n ? (v = n) : v;
              }),
              y
            );
          }),
          null == k.scales && (k.scales = {}),
          (k.scales.cool = function () {
            return k.scale([k.hsl(180, 1, 0.9), k.hsl(250, 0.7, 0.4)]);
          }),
          (k.scales.hot = function () {
            return k
              .scale(["#000", "#f00", "#ff0", "#fff"], [0, 0.25, 0.75, 1])
              .mode("rgb");
          }),
          (k.analyze = function (n, r, t) {
            var e, o, u, f, a, c, i;
            if (
              ((a = {
                min: Number.MAX_VALUE,
                max: Number.MAX_VALUE * -1,
                sum: 0,
                values: [],
                count: 0,
              }),
              null == t &&
                (t = function () {
                  return !0;
                }),
              (e = function (n) {
                null == n ||
                  isNaN(n) ||
                  (a.values.push(n),
                  (a.sum += n),
                  n < a.min && (a.min = n),
                  n > a.max && (a.max = n),
                  (a.count += 1));
              }),
              (i = function (n, o) {
                if (t(n, o))
                  return e(
                    null != r && "function" === Nn(r)
                      ? r(n)
                      : (null != r && "string" === Nn(r)) || "number" === Nn(r)
                      ? n[r]
                      : n
                  );
              }),
              "array" === Nn(n))
            )
              for (f = 0, u = n.length; f < u; f++) (c = n[f]), i(c);
            else for (o in n) (c = n[o]), i(c, o);
            return (
              (a.domain = [a.min, a.max]),
              (a.limits = function (n, r) {
                return k.limits(a, n, r);
              }),
              a
            );
          }),
          (k.limits = function (n, r, t) {
            var e,
              o,
              u,
              f,
              a,
              c,
              i,
              l,
              s,
              p,
              d,
              h,
              v,
              g,
              y,
              m,
              x,
              w,
              j,
              _,
              O,
              N,
              A,
              M,
              P,
              S,
              B,
              L,
              R,
              q,
              G,
              I,
              U,
              Y,
              $,
              F,
              C,
              X,
              K,
              V,
              z,
              D,
              Z,
              J,
              W,
              H,
              nn,
              rn,
              tn,
              en,
              un,
              fn,
              an,
              cn,
              ln,
              sn;
            if (
              (null == r && (r = "equal"),
              null == t && (t = 7),
              "array" === Nn(n) && (n = k.analyze(n)),
              (P = n.min),
              (Q = n.max),
              (un = n.sum),
              (ln = n.values.sort(function (n, r) {
                return n - r;
              })),
              1 === t)
            )
              return [P, Q];
            if (
              ((A = []),
              "c" === r.substr(0, 1) && (A.push(P), A.push(Q)),
              "e" === r.substr(0, 1))
            ) {
              for (
                A.push(P), _ = G = 1, $ = t - 1;
                1 <= $ ? G <= $ : G >= $;
                _ = 1 <= $ ? ++G : --G
              )
                A.push(P + (_ / t) * (Q - P));
              A.push(Q);
            } else if ("l" === r.substr(0, 1)) {
              if (P <= 0)
                throw "Logarithmic scales are only possible for values > 0";
              for (
                S = Math.LOG10E * T(P),
                  M = Math.LOG10E * T(Q),
                  A.push(P),
                  _ = sn = 1,
                  F = t - 1;
                1 <= F ? sn <= F : sn >= F;
                _ = 1 <= F ? ++sn : --sn
              )
                A.push(on(10, S + (_ / t) * (M - S)));
              A.push(Q);
            } else if ("q" === r.substr(0, 1)) {
              for (
                A.push(P), _ = e = 1, D = t - 1;
                1 <= D ? e <= D : e >= D;
                _ = 1 <= D ? ++e : --e
              )
                (I = ((ln.length - 1) * _) / t),
                  (U = E(I)),
                  U === I
                    ? A.push(ln[U])
                    : ((Y = I - U), A.push(ln[U] * (1 - Y) + ln[U + 1] * Y));
              A.push(Q);
            } else if ("k" === r.substr(0, 1)) {
              for (
                L = ln.length,
                  g = new Array(L),
                  w = new Array(t),
                  en = !0,
                  R = 0,
                  m = null,
                  m = [],
                  m.push(P),
                  _ = o = 1,
                  Z = t - 1;
                1 <= Z ? o <= Z : o >= Z;
                _ = 1 <= Z ? ++o : --o
              )
                m.push(P + (_ / t) * (Q - P));
              for (m.push(Q); en; ) {
                for (
                  O = u = 0, J = t - 1;
                  0 <= J ? u <= J : u >= J;
                  O = 0 <= J ? ++u : --u
                )
                  w[O] = 0;
                for (
                  _ = f = 0, W = L - 1;
                  0 <= W ? f <= W : f >= W;
                  _ = 0 <= W ? ++f : --f
                ) {
                  for (
                    cn = ln[_], B = Number.MAX_VALUE, O = a = 0, H = t - 1;
                    0 <= H ? a <= H : a >= H;
                    O = 0 <= H ? ++a : --a
                  )
                    (j = b(m[O] - cn)), j < B && ((B = j), (y = O));
                  w[y]++, (g[_] = y);
                }
                for (
                  q = new Array(t), O = c = 0, nn = t - 1;
                  0 <= nn ? c <= nn : c >= nn;
                  O = 0 <= nn ? ++c : --c
                )
                  q[O] = null;
                for (
                  _ = i = 0, rn = L - 1;
                  0 <= rn ? i <= rn : i >= rn;
                  _ = 0 <= rn ? ++i : --i
                )
                  (x = g[_]), null === q[x] ? (q[x] = ln[_]) : (q[x] += ln[_]);
                for (
                  O = l = 0, tn = t - 1;
                  0 <= tn ? l <= tn : l >= tn;
                  O = 0 <= tn ? ++l : --l
                )
                  q[O] *= 1 / w[O];
                for (
                  en = !1, O = s = 0, C = t - 1;
                  0 <= C ? s <= C : s >= C;
                  O = 0 <= C ? ++s : --s
                )
                  if (q[O] !== m[_]) {
                    en = !0;
                    break;
                  }
                (m = q), R++, R > 200 && (en = !1);
              }
              for (
                N = {}, O = p = 0, X = t - 1;
                0 <= X ? p <= X : p >= X;
                O = 0 <= X ? ++p : --p
              )
                N[O] = [];
              for (
                _ = d = 0, K = L - 1;
                0 <= K ? d <= K : d >= K;
                _ = 0 <= K ? ++d : --d
              )
                (x = g[_]), N[x].push(ln[_]);
              for (
                fn = [], O = h = 0, V = t - 1;
                0 <= V ? h <= V : h >= V;
                O = 0 <= V ? ++h : --h
              )
                fn.push(N[O][0]), fn.push(N[O][N[O].length - 1]);
              for (
                fn = fn.sort(function (n, r) {
                  return n - r;
                }),
                  A.push(fn[0]),
                  _ = v = 1,
                  z = fn.length - 1;
                v <= z;
                _ = v += 2
              )
                (an = fn[_]), isNaN(an) || A.indexOf(an) !== -1 || A.push(an);
            }
            return A;
          }),
          (R = function (n, r, t) {
            var e, o, u, f;
            return (
              (e = An(arguments)),
              (n = e[0]),
              (r = e[1]),
              (t = e[2]),
              isNaN(n) && (n = 0),
              (n /= 360),
              n < 1 / 3
                ? ((o = (1 - r) / 3),
                  (f = (1 + (r * N(l * n)) / N(c - l * n)) / 3),
                  (u = 1 - (o + f)))
                : n < 2 / 3
                ? ((n -= 1 / 3),
                  (f = (1 - r) / 3),
                  (u = (1 + (r * N(l * n)) / N(c - l * n)) / 3),
                  (o = 1 - (f + u)))
                : ((n -= 2 / 3),
                  (u = (1 - r) / 3),
                  (o = (1 + (r * N(l * n)) / N(c - l * n)) / 3),
                  (f = 1 - (u + o))),
              (f = J(t * f * 3)),
              (u = J(t * u * 3)),
              (o = J(t * o * 3)),
              [255 * f, 255 * u, 255 * o, e.length > 3 ? e[3] : 1]
            );
          }),
          (ln = function () {
            var n, r, t, e, o, u, f, a;
            return (
              (f = An(arguments)),
              (u = f[0]),
              (r = f[1]),
              (n = f[2]),
              (l = 2 * Math.PI),
              (u /= 255),
              (r /= 255),
              (n /= 255),
              (o = Math.min(u, r, n)),
              (e = (u + r + n) / 3),
              (a = 1 - o / e),
              0 === a
                ? (t = 0)
                : ((t = (u - r + (u - n)) / 2),
                  (t /= Math.sqrt((u - r) * (u - r) + (u - n) * (r - n))),
                  (t = Math.acos(t)),
                  n > r && (t = l - t),
                  (t /= l)),
              [360 * t, a, e]
            );
          }),
          (k.hsi = function () {
            return (function (n, r, t) {
              t.prototype = n.prototype;
              var e = new t(),
                o = n.apply(e, r);
              return Object(o) === o ? o : e;
            })(t, En.call(arguments).concat(["hsi"]), function () {});
          }),
          (d.hsi = R),
          (t.prototype.hsi = function () {
            return ln(this._rgb);
          }),
          (Y = function (n, r, t, e) {
            var o, u, f, a, c, i, l, s, p, d, h, b, v;
            return (
              "hsl" === e
                ? ((b = n.hsl()), (v = r.hsl()))
                : "hsv" === e
                ? ((b = n.hsv()), (v = r.hsv()))
                : "hcg" === e
                ? ((b = n.hcg()), (v = r.hcg()))
                : "hsi" === e
                ? ((b = n.hsi()), (v = r.hsi()))
                : ("lch" !== e && "hcl" !== e) ||
                  ((e = "hcl"), (b = n.hcl()), (v = r.hcl())),
              "h" === e.substr(0, 1) &&
                ((f = b[0]),
                (d = b[1]),
                (i = b[2]),
                (a = v[0]),
                (h = v[1]),
                (l = v[2])),
              isNaN(f) || isNaN(a)
                ? isNaN(f)
                  ? isNaN(a)
                    ? (u = Number.NaN)
                    : ((u = a), (1 !== i && 0 !== i) || "hsv" === e || (p = h))
                  : ((u = f), (1 !== l && 0 !== l) || "hsv" === e || (p = d))
                : ((o =
                    a > f && a - f > 180
                      ? a - (f + 360)
                      : a < f && f - a > 180
                      ? a + 360 - f
                      : a - f),
                  (u = f + t * o)),
              null == p && (p = d + t * (h - d)),
              (c = i + t * (l - i)),
              (s = k[e](u, p, c))
            );
          }),
          (h = h.concat(
            (function () {
              var n, r, t, e;
              for (
                t = ["hsv", "hsl", "hsi", "hcl", "lch", "hcg"],
                  e = [],
                  r = 0,
                  n = t.length;
                r < n;
                r++
              )
                (H = t[r]), e.push([H, Y]);
              return e;
            })()
          )),
          (F = function (n, r, t, e) {
            var o, u;
            return (o = n.num()), (u = r.num()), k.num(o + (u - o) * t, "num");
          }),
          h.push(["num", F]),
          ($ = function (n, r, e, o) {
            var u, f, a;
            return (
              (f = n.lab()),
              (a = r.lab()),
              (u = new t(
                f[0] + e * (a[0] - f[0]),
                f[1] + e * (a[1] - f[1]),
                f[2] + e * (a[2] - f[2]),
                o
              ))
            );
          }),
          h.push(["lab", $]);
      }).call(this);
    }).call(r, t(110)(n));
  },
  function (n, r, t) {
    (function (r) {
      function e(n) {
        var r = n ? n.length : 0;
        for (this.data = { hash: a(null), set: new f() }; r--; )
          this.push(n[r]);
      }
      var o = t(72),
        u = t(17),
        f = u(r, "Set"),
        a = u(Object, "create");
      (e.prototype.push = o), (n.exports = e);
    }).call(
      r,
      (function () {
        return this;
      })()
    );
  },
  function (n, r) {
    function t(n, r) {
      var t = -1,
        e = n.length;
      for (r || (r = Array(e)); ++t < e; ) r[t] = n[t];
      return r;
    }
    n.exports = t;
  },
  function (n, r) {
    function t(n, r) {
      for (var t = -1, e = n.length, o = Array(e); ++t < e; )
        o[t] = r(n[t], t, n);
      return o;
    }
    n.exports = t;
  },
  function (n, r) {
    function t(n, r) {
      for (var t = -1, e = r.length, o = n.length; ++t < e; ) n[o + t] = r[t];
      return n;
    }
    n.exports = t;
  },
  function (n, r) {
    function t(n, r) {
      for (var t = -1, e = n.length; ++t < e; ) if (r(n[t], t, n)) return !0;
      return !1;
    }
    n.exports = t;
  },
  function (n, r) {
    function t(n, r) {
      return void 0 === n ? r : n;
    }
    n.exports = t;
  },
  function (n, r, t) {
    function e(n, r, t) {
      for (var e = -1, u = o(r), f = u.length; ++e < f; ) {
        var a = u[e],
          c = n[a],
          i = t(c, r[a], a, n, r);
        ((i === i ? i === c : c !== c) && (void 0 !== c || a in n)) ||
          (n[a] = i);
      }
      return n;
    }
    var o = t(3);
    n.exports = e;
  },
  function (n, r, t) {
    function e(n, r) {
      var t = n ? n.length : 0,
        e = [];
      if (!t) return e;
      var c = -1,
        i = o,
        l = !0,
        s = l && r.length >= a ? f(r) : null,
        p = r.length;
      s && ((i = u), (l = !1), (r = s));
      n: for (; ++c < t; ) {
        var d = n[c];
        if (l && d === d) {
          for (var h = p; h--; ) if (r[h] === d) continue n;
          e.push(d);
        } else i(r, d, 0) < 0 && e.push(d);
      }
      return e;
    }
    var o = t(62),
      u = t(71),
      f = t(73),
      a = 200;
    n.exports = e;
  },
  function (n, r) {
    function t(n, r, t, e) {
      var o;
      return (
        t(n, function (n, t, u) {
          if (r(n, t, u)) return (o = e ? t : n), !1;
        }),
        o
      );
    }
    n.exports = t;
  },
  function (n, r, t) {
    function e(n, r) {
      for (var t = -1, e = r.length, u = -1, f = []; ++t < e; ) {
        var a = r[t];
        o(n[a]) && (f[++u] = a);
      }
      return f;
    }
    var o = t(18);
    n.exports = e;
  },
  function (n, r, t) {
    function e(n, r, t) {
      if (r !== r) return o(n, t);
      for (var e = t - 1, u = n.length; ++e < u; ) if (n[e] === r) return e;
      return -1;
    }
    var o = t(79);
    n.exports = e;
  },
  function (n, r, t) {
    function e(n, r, t, e, p, b, v) {
      var g = a(n),
        y = a(r),
        m = l,
        x = l;
      g || ((m = h.call(n)), m == i ? (m = s) : m != s && (g = c(n))),
        y || ((x = h.call(r)), x == i ? (x = s) : x != s && (y = c(r)));
      var w = m == s,
        k = x == s,
        j = m == x;
      if (j && !g && !w) return u(n, r, m);
      if (!p) {
        var _ = w && d.call(n, "__wrapped__"),
          O = k && d.call(r, "__wrapped__");
        if (_ || O) return t(_ ? n.value() : n, O ? r.value() : r, e, p, b, v);
      }
      if (!j) return !1;
      b || (b = []), v || (v = []);
      for (var N = b.length; N--; ) if (b[N] == n) return v[N] == r;
      b.push(n), v.push(r);
      var A = (g ? o : f)(n, r, t, e, p, b, v);
      return b.pop(), v.pop(), A;
    }
    var o = t(74),
      u = t(75),
      f = t(76),
      a = t(2),
      c = t(19),
      i = "[object Arguments]",
      l = "[object Array]",
      s = "[object Object]",
      p = Object.prototype,
      d = p.hasOwnProperty,
      h = p.toString;
    n.exports = e;
  },
  function (n, r, t) {
    function e(n, r, t) {
      var e = r.length,
        f = e,
        a = !t;
      if (null == n) return !f;
      for (n = u(n); e--; ) {
        var c = r[e];
        if (a && c[2] ? c[1] !== n[c[0]] : !(c[0] in n)) return !1;
      }
      for (; ++e < f; ) {
        c = r[e];
        var i = c[0],
          l = n[i],
          s = c[1];
        if (a && c[2]) {
          if (void 0 === l && !(i in n)) return !1;
        } else {
          var p = t ? t(l, s, i) : void 0;
          if (!(void 0 === p ? o(s, l, t, !0) : p)) return !1;
        }
      }
      return !0;
    }
    var o = t(35),
      u = t(5);
    n.exports = e;
  },
  function (n, r, t) {
    function e(n) {
      var r = u(n);
      if (1 == r.length && r[0][2]) {
        var t = r[0][0],
          e = r[0][1];
        return function (n) {
          return null != n && n[t] === e && (void 0 !== e || t in f(n));
        };
      }
      return function (n) {
        return o(n, r);
      };
    }
    var o = t(64),
      u = t(78),
      f = t(5);
    n.exports = e;
  },
  function (n, r, t) {
    function e(n, r) {
      var t = a(n),
        e = c(n) && i(r),
        d = n + "";
      return (
        (n = p(n)),
        function (a) {
          if (null == a) return !1;
          var c = d;
          if (((a = s(a)), (t || !e) && !(c in a))) {
            if (((a = 1 == n.length ? a : o(a, f(n, 0, -1))), null == a))
              return !1;
            (c = l(n)), (a = s(a));
          }
          return a[c] === r ? void 0 !== r || c in a : u(r, a[c], void 0, !0);
        }
      );
    }
    var o = t(12),
      u = t(35),
      f = t(23),
      a = t(2),
      c = t(14),
      i = t(45),
      l = t(20),
      s = t(5),
      p = t(10);
    n.exports = e;
  },
  function (n, r, t) {
    function e(n, r, t, p, d) {
      if (!c(n)) return n;
      var h = a(r) && (f(r) || l(r)),
        b = h ? void 0 : s(r);
      return (
        o(b || r, function (o, f) {
          if ((b && ((f = o), (o = r[f])), i(o)))
            p || (p = []), d || (d = []), u(n, r, f, e, t, p, d);
          else {
            var a = n[f],
              c = t ? t(a, o, f, n, r) : void 0,
              l = void 0 === c;
            l && (c = o),
              (void 0 === c && (!h || f in n)) ||
                (!l && (c === c ? c === a : a !== a)) ||
                (n[f] = c);
          }
        }),
        n
      );
    }
    var o = t(27),
      u = t(68),
      f = t(2),
      a = t(8),
      c = t(1),
      i = t(4),
      l = t(19),
      s = t(3);
    n.exports = e;
  },
  function (n, r, t) {
    function e(n, r, t, e, s, p, d) {
      for (var h = p.length, b = r[t]; h--; )
        if (p[h] == b) return void (n[t] = d[h]);
      var v = n[t],
        g = s ? s(v, b, t, n, r) : void 0,
        y = void 0 === g;
      y &&
        ((g = b),
        a(b) && (f(b) || i(b))
          ? (g = f(v) ? v : a(v) ? o(v) : [])
          : c(b) || u(b)
          ? (g = u(v) ? l(v) : c(v) ? v : {})
          : (y = !1)),
        p.push(b),
        d.push(g),
        y
          ? (n[t] = e(g, b, s, p, d))
          : (g === g ? g !== v : v === v) && (n[t] = g);
    }
    var o = t(53),
      u = t(11),
      f = t(2),
      a = t(8),
      c = t(83),
      i = t(19),
      l = t(84);
    n.exports = e;
  },
  function (n, r, t) {
    function e(n) {
      var r = n + "";
      return (
        (n = u(n)),
        function (t) {
          return o(t, n, r);
        }
      );
    }
    var o = t(12),
      u = t(10);
    n.exports = e;
  },
  function (n, r) {
    function t(n) {
      return null == n ? "" : n + "";
    }
    n.exports = t;
  },
  function (n, r, t) {
    function e(n, r) {
      var t = n.data,
        e = "string" == typeof r || o(r) ? t.set.has(r) : t.hash[r];
      return e ? 0 : -1;
    }
    var o = t(1);
    n.exports = e;
  },
  function (n, r, t) {
    function e(n) {
      var r = this.data;
      "string" == typeof n || o(n) ? r.set.add(n) : (r.hash[n] = !0);
    }
    var o = t(1);
    n.exports = e;
  },
  function (n, r, t) {
    (function (r) {
      function e(n) {
        return a && f ? new o(n) : null;
      }
      var o = t(52),
        u = t(17),
        f = u(r, "Set"),
        a = u(Object, "create");
      n.exports = e;
    }).call(
      r,
      (function () {
        return this;
      })()
    );
  },
  function (n, r, t) {
    function e(n, r, t, e, u, f, a) {
      var c = -1,
        i = n.length,
        l = r.length;
      if (i != l && !(u && l > i)) return !1;
      for (; ++c < i; ) {
        var s = n[c],
          p = r[c],
          d = e ? e(u ? p : s, u ? s : p, c) : void 0;
        if (void 0 !== d) {
          if (d) continue;
          return !1;
        }
        if (u) {
          if (
            !o(r, function (n) {
              return s === n || t(s, n, e, u, f, a);
            })
          )
            return !1;
        } else if (s !== p && !t(s, p, e, u, f, a)) return !1;
      }
      return !0;
    }
    var o = t(56);
    n.exports = e;
  },
  function (n, r) {
    function t(n, r, t) {
      switch (t) {
        case e:
        case o:
          return +n == +r;
        case u:
          return n.name == r.name && n.message == r.message;
        case f:
          return n != +n ? r != +r : n == +r;
        case a:
        case c:
          return n == r + "";
      }
      return !1;
    }
    var e = "[object Boolean]",
      o = "[object Date]",
      u = "[object Error]",
      f = "[object Number]",
      a = "[object RegExp]",
      c = "[object String]";
    n.exports = t;
  },
  function (n, r, t) {
    function e(n, r, t, e, u, a, c) {
      var i = o(n),
        l = i.length,
        s = o(r),
        p = s.length;
      if (l != p && !u) return !1;
      for (var d = l; d--; ) {
        var h = i[d];
        if (!(u ? h in r : f.call(r, h))) return !1;
      }
      for (var b = u; ++d < l; ) {
        h = i[d];
        var v = n[h],
          g = r[h],
          y = e ? e(u ? g : v, u ? v : g, h) : void 0;
        if (!(void 0 === y ? t(v, g, e, u, a, c) : y)) return !1;
        b || (b = "constructor" == h);
      }
      if (!b) {
        var m = n.constructor,
          x = r.constructor;
        if (
          m != x &&
          "constructor" in n &&
          "constructor" in r &&
          !(
            "function" == typeof m &&
            m instanceof m &&
            "function" == typeof x &&
            x instanceof x
          )
        )
          return !1;
      }
      return !0;
    }
    var o = t(3),
      u = Object.prototype,
      f = u.hasOwnProperty;
    n.exports = e;
  },
  function (n, r, t) {
    var e = t(36),
      o = e("length");
    n.exports = o;
  },
  function (n, r, t) {
    function e(n) {
      for (var r = u(n), t = r.length; t--; ) r[t][2] = o(r[t][1]);
      return r;
    }
    var o = t(45),
      u = t(49);
    n.exports = e;
  },
  function (n, r) {
    function t(n, r, t) {
      for (var e = n.length, o = r + (t ? 0 : -1); t ? o-- : ++o < e; ) {
        var u = n[o];
        if (u !== u) return o;
      }
      return -1;
    }
    n.exports = t;
  },
  function (n, r, t) {
    function e(n, r) {
      return void 0 === n ? r : o(n, r, e);
    }
    var o = t(26);
    n.exports = e;
  },
  function (n, r, t) {
    function e(n) {
      for (
        var r = c(n),
          t = r.length,
          e = t && n.length,
          i = !!e && a(e) && (u(n) || o(n)),
          s = -1,
          p = [];
        ++s < t;

      ) {
        var d = r[s];
        ((i && f(d, e)) || l.call(n, d)) && p.push(d);
      }
      return p;
    }
    var o = t(11),
      u = t(2),
      f = t(13),
      a = t(9),
      c = t(6),
      i = Object.prototype,
      l = i.hasOwnProperty;
    n.exports = e;
  },
  function (n, r, t) {
    function e(n) {
      return null != n && (o(n) ? l.test(c.call(n)) : u(n) && f.test(n));
    }
    var o = t(18),
      u = t(4),
      f = /^\[object .+?Constructor\]$/,
      a = Object.prototype,
      c = Function.prototype.toString,
      i = a.hasOwnProperty,
      l = RegExp(
        "^" +
          c
            .call(i)
            .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    n.exports = e;
  },
  function (n, r, t) {
    function e(n) {
      var r;
      if (
        !f(n) ||
        l.call(n) != a ||
        u(n) ||
        (!i.call(n, "constructor") &&
          ((r = n.constructor), "function" == typeof r && !(r instanceof r)))
      )
        return !1;
      var t;
      return (
        o(n, function (n, r) {
          t = r;
        }),
        void 0 === t || i.call(n, t)
      );
    }
    var o = t(32),
      u = t(11),
      f = t(4),
      a = "[object Object]",
      c = Object.prototype,
      i = c.hasOwnProperty,
      l = c.toString;
    n.exports = e;
  },
  function (n, r, t) {
    function e(n) {
      return o(n, u(n));
    }
    var o = t(29),
      u = t(6);
    n.exports = e;
  },
  function (n, r, t) {
    n.exports = {
      assign: t(25),
      create: t(86),
      defaults: t(87),
      defaultsDeep: t(88),
      extend: t(89),
      findKey: t(90),
      findLastKey: t(91),
      forIn: t(92),
      forInRight: t(93),
      forOwn: t(94),
      forOwnRight: t(95),
      functions: t(48),
      get: t(96),
      has: t(97),
      invert: t(98),
      keys: t(3),
      keysIn: t(6),
      mapKeys: t(99),
      mapValues: t(100),
      merge: t(26),
      methods: t(101),
      omit: t(102),
      pairs: t(49),
      pick: t(103),
      result: t(104),
      set: t(105),
      transform: t(106),
      values: t(107),
      valuesIn: t(108),
    };
  },
  function (n, r, t) {
    function e(n, r, t) {
      var e = u(n);
      return t && f(n, r, t) && (r = void 0), r ? o(e, r) : e;
    }
    var o = t(28),
      u = t(30),
      f = t(24);
    n.exports = e;
  },
  function (n, r, t) {
    var e = t(25),
      o = t(57),
      u = t(40),
      f = u(e, o);
    n.exports = f;
  },
  function (n, r, t) {
    var e = t(40),
      o = t(26),
      u = t(80),
      f = e(o, u);
    n.exports = f;
  },
  function (n, r, t) {
    n.exports = t(25);
  },
  function (n, r, t) {
    var e = t(16),
      o = t(41),
      u = o(e);
    n.exports = u;
  },
  function (n, r, t) {
    var e = t(33),
      o = t(41),
      u = o(e);
    n.exports = u;
  },
  function (n, r, t) {
    var e = t(22),
      o = t(42),
      u = o(e);
    n.exports = u;
  },
  function (n, r, t) {
    var e = t(34),
      o = t(42),
      u = o(e);
    n.exports = u;
  },
  function (n, r, t) {
    var e = t(16),
      o = t(43),
      u = o(e);
    n.exports = u;
  },
  function (n, r, t) {
    var e = t(33),
      o = t(43),
      u = o(e);
    n.exports = u;
  },
  function (n, r, t) {
    function e(n, r, t) {
      var e = null == n ? void 0 : o(n, u(r), r + "");
      return void 0 === e ? t : e;
    }
    var o = t(12),
      u = t(10);
    n.exports = e;
  },
  function (n, r, t) {
    function e(n, r) {
      if (null == n) return !1;
      var t = h.call(n, r);
      if (!t && !i(r)) {
        if (
          ((r = p(r)), (n = 1 == r.length ? n : o(n, u(r, 0, -1))), null == n)
        )
          return !1;
        (r = s(r)), (t = h.call(n, r));
      }
      return t || (l(n.length) && c(r, n.length) && (a(n) || f(n)));
    }
    var o = t(12),
      u = t(23),
      f = t(11),
      a = t(2),
      c = t(13),
      i = t(14),
      l = t(9),
      s = t(20),
      p = t(10),
      d = Object.prototype,
      h = d.hasOwnProperty;
    n.exports = e;
  },
  function (n, r, t) {
    function e(n, r, t) {
      t && o(n, r, t) && (r = void 0);
      for (var e = -1, f = u(n), c = f.length, i = {}; ++e < c; ) {
        var l = f[e],
          s = n[l];
        r ? (a.call(i, s) ? i[s].push(l) : (i[s] = [l])) : (i[s] = l);
      }
      return i;
    }
    var o = t(24),
      u = t(3),
      f = Object.prototype,
      a = f.hasOwnProperty;
    n.exports = e;
  },
  function (n, r, t) {
    var e = t(44),
      o = e(!0);
    n.exports = o;
  },
  function (n, r, t) {
    var e = t(44),
      o = e();
    n.exports = o;
  },
  function (n, r, t) {
    n.exports = t(48);
  },
  function (n, r, t) {
    var e = t(54),
      o = t(59),
      u = t(31),
      f = t(7),
      a = t(6),
      c = t(46),
      i = t(47),
      l = t(15),
      s = l(function (n, r) {
        if (null == n) return {};
        if ("function" != typeof r[0]) {
          var r = e(u(r), String);
          return c(n, o(a(n), r));
        }
        var t = f(r[0], r[1], 3);
        return i(n, function (n, r, e) {
          return !t(n, r, e);
        });
      });
    n.exports = s;
  },
  function (n, r, t) {
    var e = t(31),
      o = t(7),
      u = t(46),
      f = t(47),
      a = t(15),
      c = a(function (n, r) {
        return null == n
          ? {}
          : "function" == typeof r[0]
          ? f(n, o(r[0], r[1], 3))
          : u(n, e(r));
      });
    n.exports = c;
  },
  function (n, r, t) {
    function e(n, r, t) {
      var e = null == n ? void 0 : n[r];
      return (
        void 0 === e &&
          (null == n ||
            a(r, n) ||
            ((r = i(r)),
            (n = 1 == r.length ? n : o(n, u(r, 0, -1))),
            (e = null == n ? void 0 : n[c(r)])),
          (e = void 0 === e ? t : e)),
        f(e) ? e.call(n) : e
      );
    }
    var o = t(12),
      u = t(23),
      f = t(18),
      a = t(14),
      c = t(20),
      i = t(10);
    n.exports = e;
  },
  function (n, r, t) {
    function e(n, r, t) {
      if (null == n) return n;
      var e = r + "";
      r = null != n[e] || u(r, n) ? [e] : a(r);
      for (var c = -1, i = r.length, l = i - 1, s = n; null != s && ++c < i; ) {
        var p = r[c];
        f(s) &&
          (c == l
            ? (s[p] = t)
            : null == s[p] && (s[p] = o(r[c + 1]) ? [] : {})),
          (s = s[p]);
      }
      return n;
    }
    var o = t(13),
      u = t(14),
      f = t(1),
      a = t(10);
    n.exports = e;
  },
  function (n, r, t) {
    function e(n, r, t, e) {
      var p = c(n) || s(n);
      if (((r = u(r, e, 4)), null == t))
        if (p || l(n)) {
          var d = n.constructor;
          t = p ? (c(n) ? new d() : []) : f(i(d) ? d.prototype : void 0);
        } else t = {};
      return (
        (p ? o : a)(n, function (n, e, o) {
          return r(t, n, e, o);
        }),
        t
      );
    }
    var o = t(27),
      u = t(21),
      f = t(30),
      a = t(16),
      c = t(2),
      i = t(18),
      l = t(1),
      s = t(19);
    n.exports = e;
  },
  function (n, r, t) {
    function e(n) {
      return o(n, u(n));
    }
    var o = t(37),
      u = t(3);
    n.exports = e;
  },
  function (n, r, t) {
    function e(n) {
      return o(n, u(n));
    }
    var o = t(37),
      u = t(6);
    n.exports = e;
  },
  function (n, r, t) {
    function e(n) {
      return f(n) ? o(n) : u(n);
    }
    var o = t(36),
      u = t(69),
      f = t(14);
    n.exports = e;
  },
  function (n, r) {
    n.exports = function (n) {
      return (
        n.webpackPolyfill ||
          ((n.deprecate = function () {}),
          (n.paths = []),
          (n.children = []),
          (n.webpackPolyfill = 1)),
        n
      );
    };
  },
  function (n, r) {
    n.exports = L;
  },
]);
