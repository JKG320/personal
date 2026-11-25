import {mountHeadlineScramble} from './headline-scramble.js';
import {mountHomeScroll} from './home-scroll.js';
import {mountColorGrowth} from './project-color-growth.js';
import { heroControls, gradientControls, liftControls, shadowControls } from './hero-controls.js';
(function () {
  const W = document.createElement("link").relList;
  if (W && W.supports && W.supports("modulepreload")) return;
  for (const H of document.querySelectorAll('link[rel="modulepreload"]')) g(H);
  new MutationObserver((H) => {
    for (const L of H)
      if (L.type === "childList")
        for (const ml of L.addedNodes)
          ml.tagName === "LINK" && ml.rel === "modulepreload" && g(ml);
  }).observe(document, { childList: !0, subtree: !0 });
  function k(H) {
    const L = {};
    return (
      H.integrity && (L.integrity = H.integrity),
      H.referrerPolicy && (L.referrerPolicy = H.referrerPolicy),
      H.crossOrigin === "use-credentials"
        ? (L.credentials = "include")
        : H.crossOrigin === "anonymous"
          ? (L.credentials = "omit")
          : (L.credentials = "same-origin"),
      L
    );
  }
  function g(H) {
    if (H.ep) return;
    H.ep = !0;
    const L = k(H);
    fetch(H.href, L);
  }
})();
function ch(O) {
  return O && O.__esModule && Object.prototype.hasOwnProperty.call(O, "default")
    ? O.default
    : O;
}
var zo = { exports: {} },
  en = {};
var lr;
function oh() {
  if (lr) return en;
  lr = 1;
  var O = Symbol.for("react.transitional.element"),
    W = Symbol.for("react.fragment");
  function k(g, H, L) {
    var ml = null;
    if (
      (L !== void 0 && (ml = "" + L),
      H.key !== void 0 && (ml = "" + H.key),
      "key" in H)
    ) {
      L = {};
      for (var hl in H) hl !== "key" && (L[hl] = H[hl]);
    } else L = H;
    return (
      (H = L.ref),
      { $$typeof: O, type: g, key: ml, ref: H !== void 0 ? H : null, props: L }
    );
  }
  return ((en.Fragment = W), (en.jsx = k), (en.jsxs = k), en);
}
var tr;
function sh() {
  return (tr || ((tr = 1), (zo.exports = oh())), zo.exports);
}
var z = sh(),
  Oo = { exports: {} },
  nn = {},
  _o = { exports: {} },
  Ao = {};
var ur;
function vh() {
  return (
    ur ||
      ((ur = 1),
      (function (O) {
        function W(A, Y) {
          var B = A.length;
          A.push(Y);
          l: for (; 0 < B;) {
            var Sl = (B - 1) >>> 1,
              nl = A[Sl];
            if (0 < H(nl, Y)) ((A[Sl] = Y), (A[B] = nl), (B = Sl));
            else break l;
          }
        }
        function k(A) {
          return A.length === 0 ? null : A[0];
        }
        function g(A) {
          if (A.length === 0) return null;
          var Y = A[0],
            B = A.pop();
          if (B !== Y) {
            A[0] = B;
            l: for (var Sl = 0, nl = A.length, Yt = nl >>> 1; Sl < Yt;) {
              var uu = 2 * (Sl + 1) - 1,
                Fu = A[uu],
                s = uu + 1,
                b = A[s];
              if (0 > H(Fu, B))
                s < nl && 0 > H(b, Fu)
                  ? ((A[Sl] = b), (A[s] = B), (Sl = s))
                  : ((A[Sl] = Fu), (A[uu] = B), (Sl = uu));
              else if (s < nl && 0 > H(b, B))
                ((A[Sl] = b), (A[s] = B), (Sl = s));
              else break l;
            }
          }
          return Y;
        }
        function H(A, Y) {
          var B = A.sortIndex - Y.sortIndex;
          return B !== 0 ? B : A.id - Y.id;
        }
        if (
          ((O.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var L = performance;
          O.unstable_now = function () {
            return L.now();
          };
        } else {
          var ml = Date,
            hl = ml.now();
          O.unstable_now = function () {
            return ml.now() - hl;
          };
        }
        var ll = [],
          fl = [],
          C = 1,
          S = null,
          R = 3,
          cl = !1,
          Ul = !1,
          Cl = !1,
          ol = !1,
          Pl = typeof setTimeout == "function" ? setTimeout : null,
          Vl = typeof clearTimeout == "function" ? clearTimeout : null,
          kl = typeof setImmediate < "u" ? setImmediate : null;
        function it(A) {
          for (var Y = k(fl); Y !== null;) {
            if (Y.callback === null) g(fl);
            else if (Y.startTime <= A)
              (g(fl), (Y.sortIndex = Y.expirationTime), W(ll, Y));
            else break;
            Y = k(fl);
          }
        }
        function At(A) {
          if (((Cl = !1), it(A), !Ul))
            if (k(ll) !== null) ((Ul = !0), gl || ((gl = !0), tt()));
            else {
              var Y = k(fl);
              Y !== null && Al(At, Y.startTime - A);
            }
        }
        var gl = !1,
          X = -1,
          w = 5,
          Nt = -1;
        function ft() {
          return ol ? !0 : !(O.unstable_now() - Nt < w);
        }
        function lt() {
          if (((ol = !1), gl)) {
            var A = O.unstable_now();
            Nt = A;
            var Y = !0;
            try {
              l: {
                ((Ul = !1), Cl && ((Cl = !1), Vl(X), (X = -1)), (cl = !0));
                var B = R;
                try {
                  t: {
                    for (
                      it(A), S = k(ll);
                      S !== null && !(S.expirationTime > A && ft());
                    ) {
                      var Sl = S.callback;
                      if (typeof Sl == "function") {
                        ((S.callback = null), (R = S.priorityLevel));
                        var nl = Sl(S.expirationTime <= A);
                        if (((A = O.unstable_now()), typeof nl == "function")) {
                          ((S.callback = nl), it(A), (Y = !0));
                          break t;
                        }
                        (S === k(ll) && g(ll), it(A));
                      } else g(ll);
                      S = k(ll);
                    }
                    if (S !== null) Y = !0;
                    else {
                      var Yt = k(fl);
                      (Yt !== null && Al(At, Yt.startTime - A), (Y = !1));
                    }
                  }
                  break l;
                } finally {
                  ((S = null), (R = B), (cl = !1));
                }
                Y = void 0;
              }
            } finally {
              Y ? tt() : (gl = !1);
            }
          }
        }
        var tt;
        if (typeof kl == "function")
          tt = function () {
            kl(lt);
          };
        else if (typeof MessageChannel < "u") {
          var sl = new MessageChannel(),
            _l = sl.port2;
          ((sl.port1.onmessage = lt),
            (tt = function () {
              _l.postMessage(null);
            }));
        } else
          tt = function () {
            Pl(lt, 0);
          };
        function Al(A, Y) {
          X = Pl(function () {
            A(O.unstable_now());
          }, Y);
        }
        ((O.unstable_IdlePriority = 5),
          (O.unstable_ImmediatePriority = 1),
          (O.unstable_LowPriority = 4),
          (O.unstable_NormalPriority = 3),
          (O.unstable_Profiling = null),
          (O.unstable_UserBlockingPriority = 2),
          (O.unstable_cancelCallback = function (A) {
            A.callback = null;
          }),
          (O.unstable_forceFrameRate = function (A) {
            0 > A || 125 < A
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (w = 0 < A ? Math.floor(1e3 / A) : 5);
          }),
          (O.unstable_getCurrentPriorityLevel = function () {
            return R;
          }),
          (O.unstable_next = function (A) {
            switch (R) {
              case 1:
              case 2:
              case 3:
                var Y = 3;
                break;
              default:
                Y = R;
            }
            var B = R;
            R = Y;
            try {
              return A();
            } finally {
              R = B;
            }
          }),
          (O.unstable_requestPaint = function () {
            ol = !0;
          }),
          (O.unstable_runWithPriority = function (A, Y) {
            switch (A) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                A = 3;
            }
            var B = R;
            R = A;
            try {
              return Y();
            } finally {
              R = B;
            }
          }),
          (O.unstable_scheduleCallback = function (A, Y, B) {
            var Sl = O.unstable_now();
            switch (
              (typeof B == "object" && B !== null
                ? ((B = B.delay),
                  (B = typeof B == "number" && 0 < B ? Sl + B : Sl))
                : (B = Sl),
              A)
            ) {
              case 1:
                var nl = -1;
                break;
              case 2:
                nl = 250;
                break;
              case 5:
                nl = 1073741823;
                break;
              case 4:
                nl = 1e4;
                break;
              default:
                nl = 5e3;
            }
            return (
              (nl = B + nl),
              (A = {
                id: C++,
                callback: Y,
                priorityLevel: A,
                startTime: B,
                expirationTime: nl,
                sortIndex: -1,
              }),
              B > Sl
                ? ((A.sortIndex = B),
                  W(fl, A),
                  k(ll) === null &&
                    A === k(fl) &&
                    (Cl ? (Vl(X), (X = -1)) : (Cl = !0), Al(At, B - Sl)))
                : ((A.sortIndex = nl),
                  W(ll, A),
                  Ul || cl || ((Ul = !0), gl || ((gl = !0), tt()))),
              A
            );
          }),
          (O.unstable_shouldYield = ft),
          (O.unstable_wrapCallback = function (A) {
            var Y = R;
            return function () {
              var B = R;
              R = Y;
              try {
                return A.apply(this, arguments);
              } finally {
                R = B;
              }
            };
          }));
      })(Ao)),
    Ao
  );
}
var ar;
function dh() {
  return (ar || ((ar = 1), (_o.exports = vh())), _o.exports);
}
var No = { exports: {} },
  G = {};
var er;
function rh() {
  if (er) return G;
  er = 1;
  var O = Symbol.for("react.transitional.element"),
    W = Symbol.for("react.portal"),
    k = Symbol.for("react.fragment"),
    g = Symbol.for("react.strict_mode"),
    H = Symbol.for("react.profiler"),
    L = Symbol.for("react.consumer"),
    ml = Symbol.for("react.context"),
    hl = Symbol.for("react.forward_ref"),
    ll = Symbol.for("react.suspense"),
    fl = Symbol.for("react.memo"),
    C = Symbol.for("react.lazy"),
    S = Symbol.for("react.activity"),
    R = Symbol.for("react.view_transition"),
    cl = Symbol.iterator;
  function Ul(s) {
    return s === null || typeof s != "object"
      ? null
      : ((s = (cl && s[cl]) || s["@@iterator"]),
        typeof s == "function" ? s : null);
  }
  var Cl = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    ol = Object.assign,
    Pl = {};
  function Vl(s, b, j) {
    ((this.props = s),
      (this.context = b),
      (this.refs = Pl),
      (this.updater = j || Cl));
  }
  ((Vl.prototype.isReactComponent = {}),
    (Vl.prototype.setState = function (s, b) {
      if (typeof s != "object" && typeof s != "function" && s != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, s, b, "setState");
    }),
    (Vl.prototype.forceUpdate = function (s) {
      this.updater.enqueueForceUpdate(this, s, "forceUpdate");
    }));
  function kl() {}
  kl.prototype = Vl.prototype;
  function it(s, b, j) {
    ((this.props = s),
      (this.context = b),
      (this.refs = Pl),
      (this.updater = j || Cl));
  }
  var At = (it.prototype = new kl());
  ((At.constructor = it), ol(At, Vl.prototype), (At.isPureReactComponent = !0));
  var gl = Array.isArray;
  function X() {}
  var w = { H: null, A: null, T: null, S: null },
    Nt = Object.prototype.hasOwnProperty;
  function ft(s, b, j) {
    var p = j.ref;
    return {
      $$typeof: O,
      type: s,
      key: b,
      ref: p !== void 0 ? p : null,
      props: j,
    };
  }
  function lt(s, b) {
    return ft(s.type, b, s.props);
  }
  function tt(s) {
    return typeof s == "object" && s !== null && s.$$typeof === O;
  }
  function sl(s) {
    var b = { "=": "=0", ":": "=2" };
    return (
      "$" +
      s.replace(/[=:]/g, function (j) {
        return b[j];
      })
    );
  }
  var _l = /\/+/g;
  function Al(s, b) {
    return typeof s == "object" && s !== null && s.key != null
      ? sl("" + s.key)
      : b.toString(36);
  }
  function A(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (
          (typeof s.status == "string"
            ? s.then(X, X)
            : ((s.status = "pending"),
              s.then(
                function (b) {
                  s.status === "pending" &&
                    ((s.status = "fulfilled"), (s.value = b));
                },
                function (b) {
                  s.status === "pending" &&
                    ((s.status = "rejected"), (s.reason = b));
                },
              )),
          s.status)
        ) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw s.reason;
        }
    }
    throw s;
  }
  function Y(s, b, j, p, P) {
    var tl = typeof s;
    (tl === "undefined" || tl === "boolean") && (s = null);
    var al = !1;
    if (s === null) al = !0;
    else
      switch (tl) {
        case "bigint":
        case "string":
        case "number":
          al = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case O:
            case W:
              al = !0;
              break;
            case C:
              return ((al = s._init), Y(al(s._payload), b, j, p, P));
          }
      }
    if (al)
      return (
        (P = P(s)),
        (al = p === "" ? "." + Al(s, 0) : p),
        gl(P)
          ? ((j = ""),
            al != null && (j = al.replace(_l, "$&/") + "/"),
            Y(P, b, j, "", function (au) {
              return au;
            }))
          : P != null &&
            (tt(P) &&
              (P = lt(
                P,
                j +
                  (P.key == null || (s && s.key === P.key)
                    ? ""
                    : ("" + P.key).replace(_l, "$&/") + "/") +
                  al,
              )),
            b.push(P)),
        1
      );
    al = 0;
    var M = p === "" ? "." : p + ":";
    if (gl(s))
      for (var x = 0; x < s.length; x++)
        ((p = s[x]), (tl = M + Al(p, x)), (al += Y(p, b, j, tl, P)));
    else if (((x = Ul(s)), typeof x == "function"))
      for (s = x.call(s), x = 0; !(p = s.next()).done;)
        ((p = p.value), (tl = M + Al(p, x++)), (al += Y(p, b, j, tl, P)));
    else if (tl === "object") {
      if (typeof s.then == "function") return Y(A(s), b, j, p, P);
      throw (
        (b = String(s)),
        Error(
          "Objects are not valid as a React child (found: " +
            (b === "[object Object]"
              ? "object with keys {" + Object.keys(s).join(", ") + "}"
              : b) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return al;
  }
  function B(s, b, j) {
    if (s == null) return s;
    var p = [],
      P = 0;
    return (
      Y(s, p, "", "", function (tl) {
        return b.call(j, tl, P++);
      }),
      p
    );
  }
  function Sl(s) {
    if (s._status === -1) {
      var b = s._result,
        j = b();
      (j.then(
        function (p) {
          (s._status === 0 || s._status === -1) &&
            ((s._status = 1),
            (s._result = p),
            j.status === void 0 && ((j.status = "fulfilled"), (j.value = p)));
        },
        function (p) {
          (s._status === 0 || s._status === -1) &&
            ((s._status = 2),
            (s._result = p),
            j.status === void 0 && ((j.status = "rejected"), (j.reason = p)));
        },
      ),
        s._status === -1 && ((s._status = 0), (s._result = j)));
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var nl =
    typeof reportError == "function"
      ? reportError
      : function (s) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var b = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof s == "object" &&
                s !== null &&
                typeof s.message == "string"
                  ? String(s.message)
                  : String(s),
              error: s,
            });
            if (!window.dispatchEvent(b)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", s);
            return;
          }
          console.error(s);
        };
  function Yt(s) {
    var b = w.T,
      j = {};
    ((j.types = b !== null ? b.types : null), (w.T = j));
    try {
      var p = s(),
        P = w.S;
      (P !== null && P(j, p),
        typeof p == "object" &&
          p !== null &&
          typeof p.then == "function" &&
          p.then(X, nl));
    } catch (tl) {
      nl(tl);
    } finally {
      (b !== null && j.types !== null && (b.types = j.types), (w.T = b));
    }
  }
  function uu(s) {
    var b = w.T;
    if (b !== null) {
      var j = b.types;
      j === null ? (b.types = [s]) : j.indexOf(s) === -1 && j.push(s);
    } else Yt(uu.bind(null, s));
  }
  var Fu = {
    map: B,
    forEach: function (s, b, j) {
      B(
        s,
        function () {
          b.apply(this, arguments);
        },
        j,
      );
    },
    count: function (s) {
      var b = 0;
      return (
        B(s, function () {
          b++;
        }),
        b
      );
    },
    toArray: function (s) {
      return (
        B(s, function (b) {
          return b;
        }) || []
      );
    },
    only: function (s) {
      if (!tt(s))
        throw Error(
          "React.Children.only expected to receive a single React element child.",
        );
      return s;
    },
  };
  return (
    (G.Activity = S),
    (G.Children = Fu),
    (G.Component = Vl),
    (G.Fragment = k),
    (G.Profiler = H),
    (G.PureComponent = it),
    (G.StrictMode = g),
    (G.Suspense = ll),
    (G.ViewTransition = R),
    (G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w),
    (G.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (s) {
        return w.H.useMemoCache(s);
      },
    }),
    (G.addTransitionType = uu),
    (G.cache = function (s) {
      return function () {
        return s.apply(null, arguments);
      };
    }),
    (G.cacheSignal = function () {
      return null;
    }),
    (G.cloneElement = function (s, b, j) {
      if (s == null)
        throw Error(
          "The argument must be a React element, but you passed " + s + ".",
        );
      var p = ol({}, s.props),
        P = s.key;
      if (b != null)
        for (tl in (b.key !== void 0 && (P = "" + b.key), b))
          !Nt.call(b, tl) ||
            tl === "key" ||
            tl === "__self" ||
            tl === "__source" ||
            (tl === "ref" && b.ref === void 0) ||
            (p[tl] = b[tl]);
      var tl = arguments.length - 2;
      if (tl === 1) p.children = j;
      else if (1 < tl) {
        for (var al = Array(tl), M = 0; M < tl; M++) al[M] = arguments[M + 2];
        p.children = al;
      }
      return ft(s.type, P, p);
    }),
    (G.createContext = function (s) {
      return (
        (s = {
          $$typeof: ml,
          _currentValue: s,
          _currentValue2: s,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (s.Provider = s),
        (s.Consumer = { $$typeof: L, _context: s }),
        s
      );
    }),
    (G.createElement = function (s, b, j) {
      var p,
        P = {},
        tl = null;
      if (b != null)
        for (p in (b.key !== void 0 && (tl = "" + b.key), b))
          Nt.call(b, p) &&
            p !== "key" &&
            p !== "__self" &&
            p !== "__source" &&
            (P[p] = b[p]);
      var al = arguments.length - 2;
      if (al === 1) P.children = j;
      else if (1 < al) {
        for (var M = Array(al), x = 0; x < al; x++) M[x] = arguments[x + 2];
        P.children = M;
      }
      if (s && s.defaultProps)
        for (p in ((al = s.defaultProps), al))
          P[p] === void 0 && (P[p] = al[p]);
      return ft(s, tl, P);
    }),
    (G.createRef = function () {
      return { current: null };
    }),
    (G.forwardRef = function (s) {
      return { $$typeof: hl, render: s };
    }),
    (G.isValidElement = tt),
    (G.lazy = function (s) {
      return { $$typeof: C, _payload: { _status: -1, _result: s }, _init: Sl };
    }),
    (G.memo = function (s, b) {
      return { $$typeof: fl, type: s, compare: b === void 0 ? null : b };
    }),
    (G.startTransition = Yt),
    (G.unstable_useCacheRefresh = function () {
      return w.H.useCacheRefresh();
    }),
    (G.use = function (s) {
      return w.H.use(s);
    }),
    (G.useActionState = function (s, b, j) {
      return w.H.useActionState(s, b, j);
    }),
    (G.useCallback = function (s, b) {
      return w.H.useCallback(s, b);
    }),
    (G.useContext = function (s) {
      return w.H.useContext(s);
    }),
    (G.useDebugValue = function () {}),
    (G.useDeferredValue = function (s, b) {
      return w.H.useDeferredValue(s, b);
    }),
    (G.useEffect = function (s, b) {
      return w.H.useEffect(s, b);
    }),
    (G.useEffectEvent = function (s) {
      return w.H.useEffectEvent(s);
    }),
    (G.useId = function () {
      return w.H.useId();
    }),
    (G.useImperativeHandle = function (s, b, j) {
      return w.H.useImperativeHandle(s, b, j);
    }),
    (G.useInsertionEffect = function (s, b) {
      return w.H.useInsertionEffect(s, b);
    }),
    (G.useLayoutEffect = function (s, b) {
      return w.H.useLayoutEffect(s, b);
    }),
    (G.useMemo = function (s, b) {
      return w.H.useMemo(s, b);
    }),
    (G.useOptimistic = function (s, b) {
      return w.H.useOptimistic(s, b);
    }),
    (G.useReducer = function (s, b, j) {
      return w.H.useReducer(s, b, j);
    }),
    (G.useRef = function (s) {
      return w.H.useRef(s);
    }),
    (G.useState = function (s) {
      return w.H.useState(s);
    }),
    (G.useSyncExternalStore = function (s, b, j) {
      return w.H.useSyncExternalStore(s, b, j);
    }),
    (G.useTransition = function () {
      return w.H.useTransition();
    }),
    (G.version = "19.3.1"),
    G
  );
}
var nr;
function Mo() {
  return (nr || ((nr = 1), (No.exports = rh())), No.exports);
}
var Do = { exports: {} },
  Wl = {};
var ir;
function mh() {
  if (ir) return Wl;
  ir = 1;
  var O = Mo();
  function W(C) {
    var S = "https://react.dev/errors/" + C;
    if (1 < arguments.length) {
      S += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var R = 2; R < arguments.length; R++)
        S += "&args[]=" + encodeURIComponent(arguments[R]);
    }
    return (
      "Minified React error #" +
      C +
      "; visit " +
      S +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function k() {}
  var g = {
      d: {
        f: k,
        r: function () {
          throw Error(W(522));
        },
        D: k,
        C: k,
        L: k,
        m: k,
        X: k,
        S: k,
        M: k,
      },
      p: 0,
      findDOMNode: null,
    },
    H = Symbol.for("react.portal"),
    L = Symbol.for("react.recoverable"),
    ml = Symbol.for("react.optimistic_key");
  function hl(C, S, R) {
    var cl =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: H,
      key: cl == null ? null : cl === ml ? ml : "" + cl,
      children: C,
      containerInfo: S,
      implementation: R,
    };
  }
  var ll = O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function fl(C, S) {
    if (C === "font") return "";
    if (typeof S == "string") return S === "use-credentials" ? S : "";
  }
  return (
    (Wl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = g),
    (Wl.browser = function (C) {
      return { $$typeof: L, _reason: C };
    }),
    (Wl.createPortal = function (C, S) {
      var R =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!S || (S.nodeType !== 1 && S.nodeType !== 9 && S.nodeType !== 11))
        throw Error(W(299));
      return hl(C, S, null, R);
    }),
    (Wl.flushSync = function (C) {
      var S = ll.T,
        R = g.p;
      try {
        if (((ll.T = null), (g.p = 2), C)) return C();
      } finally {
        ((ll.T = S), (g.p = R), g.d.f());
      }
    }),
    (Wl.preconnect = function (C, S) {
      typeof C == "string" &&
        (S
          ? ((S = S.crossOrigin),
            (S =
              typeof S == "string"
                ? S === "use-credentials"
                  ? S
                  : ""
                : void 0))
          : (S = null),
        g.d.C(C, S));
    }),
    (Wl.prefetchDNS = function (C) {
      typeof C == "string" && g.d.D(C);
    }),
    (Wl.preinit = function (C, S) {
      if (typeof C == "string" && S && typeof S.as == "string") {
        var R = S.as,
          cl = fl(R, S.crossOrigin),
          Ul = typeof S.integrity == "string" ? S.integrity : void 0,
          Cl = typeof S.fetchPriority == "string" ? S.fetchPriority : void 0;
        R === "style"
          ? g.d.S(C, typeof S.precedence == "string" ? S.precedence : void 0, {
              crossOrigin: cl,
              integrity: Ul,
              fetchPriority: Cl,
            })
          : R === "script" &&
            g.d.X(C, {
              crossOrigin: cl,
              integrity: Ul,
              fetchPriority: Cl,
              nonce: typeof S.nonce == "string" ? S.nonce : void 0,
            });
      }
    }),
    (Wl.preinitModule = function (C, S) {
      if (typeof C == "string")
        if (typeof S == "object" && S !== null) {
          if (S.as == null || S.as === "script") {
            var R = fl(S.as, S.crossOrigin);
            g.d.M(C, {
              crossOrigin: R,
              integrity: typeof S.integrity == "string" ? S.integrity : void 0,
              nonce: typeof S.nonce == "string" ? S.nonce : void 0,
              fetchPriority:
                typeof S.fetchPriority == "string" ? S.fetchPriority : void 0,
            });
          }
        } else S == null && g.d.M(C);
    }),
    (Wl.preload = function (C, S) {
      if (
        typeof C == "string" &&
        typeof S == "object" &&
        S !== null &&
        typeof S.as == "string"
      ) {
        var R = S.as,
          cl = fl(R, S.crossOrigin);
        g.d.L(C, R, {
          crossOrigin: cl,
          integrity: typeof S.integrity == "string" ? S.integrity : void 0,
          nonce: typeof S.nonce == "string" ? S.nonce : void 0,
          type: typeof S.type == "string" ? S.type : void 0,
          fetchPriority:
            typeof S.fetchPriority == "string" ? S.fetchPriority : void 0,
          referrerPolicy:
            typeof S.referrerPolicy == "string" ? S.referrerPolicy : void 0,
          imageSrcSet:
            typeof S.imageSrcSet == "string" ? S.imageSrcSet : void 0,
          imageSizes: typeof S.imageSizes == "string" ? S.imageSizes : void 0,
          media: typeof S.media == "string" ? S.media : void 0,
        });
      }
    }),
    (Wl.preloadModule = function (C, S) {
      if (typeof C == "string")
        if (S) {
          var R = fl(S.as, S.crossOrigin);
          g.d.m(C, {
            as: typeof S.as == "string" && S.as !== "script" ? S.as : void 0,
            crossOrigin: R,
            integrity: typeof S.integrity == "string" ? S.integrity : void 0,
            nonce: typeof S.nonce == "string" ? S.nonce : void 0,
            fetchPriority:
              typeof S.fetchPriority == "string" ? S.fetchPriority : void 0,
          });
        } else g.d.m(C);
    }),
    (Wl.requestFormReset = function (C) {
      g.d.r(C);
    }),
    (Wl.unstable_batchedUpdates = function (C, S) {
      return C(S);
    }),
    (Wl.useFormState = function (C, S, R) {
      return ll.H.useFormState(C, S, R);
    }),
    (Wl.useFormStatus = function () {
      return ll.H.useHostTransitionStatus();
    }),
    (Wl.version = "19.3.1"),
    Wl
  );
}
var fr;
function yh() {
  if (fr) return Do.exports;
  fr = 1;
  function O() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O);
      } catch (W) {
        console.error(W);
      }
  }
  return (O(), (Do.exports = mh()), Do.exports);
}
var cr;
function hh() {
  if (cr) return nn;
  cr = 1;
  var O = dh(),
    W = Mo(),
    k = yh();
  function g(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        t += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function H(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function L(l) {
    for (var t = l, u = t; u && !u.alternate;)
      ((t = u), (t.flags & 4098) !== 0 && (l = t.return), (u = t.return));
    for (; t.return;) t = t.return;
    return t.tag === 3 ? l : null;
  }
  function ml(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function hl(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function ll(l) {
    if (L(l) !== l) throw Error(g(188));
  }
  function fl(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = L(l)), t === null)) throw Error(g(188));
      return t !== l ? null : l;
    }
    for (var u = l, a = t; ;) {
      var e = u.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (((a = e.return), a !== null)) {
          u = a;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n;) {
          if (n === u) return (ll(e), l);
          if (n === a) return (ll(e), t);
          n = n.sibling;
        }
        throw Error(g(188));
      }
      if (u.return !== a.return) ((u = e), (a = n));
      else {
        for (var i = !1, f = e.child; f;) {
          if (f === u) {
            ((i = !0), (u = e), (a = n));
            break;
          }
          if (f === a) {
            ((i = !0), (a = e), (u = n));
            break;
          }
          f = f.sibling;
        }
        if (!i) {
          for (f = n.child; f;) {
            if (f === u) {
              ((i = !0), (u = n), (a = e));
              break;
            }
            if (f === a) {
              ((i = !0), (a = n), (u = e));
              break;
            }
            f = f.sibling;
          }
          if (!i) throw Error(g(189));
        }
      }
      if (u.alternate !== a) throw Error(g(190));
    }
    if (u.tag !== 3) throw Error(g(188));
    return u.stateNode.current === u ? l : t;
  }
  function C(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null;) {
      if (((t = C(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  function S(l, t, u, a, e, n) {
    for (; l !== null;) {
      if (
        ((l.tag === 5 || l.tag === 27 || l.tag === 6) && u(l, a, e, n)) ||
        ((l.tag !== 22 || l.memoizedState === null) &&
          (t || (l.tag !== 5 && l.tag !== 27)) &&
          S(l.child, t, u, a, e, n))
      )
        return !0;
      l = l.sibling;
    }
    return !1;
  }
  function R(l) {
    for (l = l.return; l !== null;) {
      if (l.tag === 3 || l.tag === 5 || l.tag === 27) return l;
      l = l.return;
    }
    return null;
  }
  function cl(l) {
    var t = !1;
    for (
      l = l.return;
      l !== null &&
      (l.tag === 4 && (t = !0), !(l.tag === 3 || l.tag === 5 || l.tag === 27));
    )
      l = l.return;
    return t;
  }
  function Ul(l) {
    var t = [null, null],
      u = R(l);
    return (u === null || Cl(t, l, u.child, { foundSelf: !1 }), t);
  }
  function Cl(l, t, u, a) {
    for (; u !== null;) {
      if (u === t) a.foundSelf = !0;
      else if (u.tag === 5 || u.tag === 27 || u.tag === 6) {
        if (a.foundSelf) return ((l[1] = u), !0);
        l[0] = u;
      } else if (
        (u.tag !== 22 || u.memoizedState === null) &&
        Cl(l, t, u.child, a)
      )
        return !0;
      u = u.sibling;
    }
    return !1;
  }
  function ol(l) {
    switch (l.tag) {
      case 5:
      case 27:
      case 6:
        return l.stateNode;
      case 3:
        return l.stateNode.containerInfo;
      default:
        throw Error(g(559));
    }
  }
  var Pl = null,
    Vl = null;
  function kl(l, t, u) {
    return l === u ? !0 : l === t ? ((Pl = l), !0) : !1;
  }
  function it(l, t, u) {
    return l === u
      ? ((Vl = l), !1)
      : l === t
        ? (Vl !== null && (Pl = l), !0)
        : !1;
  }
  function At(l) {
    if (l === null) return null;
    do l = l === null ? null : l.return;
    while (l && l.tag !== 5 && l.tag !== 27 && l.tag !== 3);
    return l || null;
  }
  function gl(l, t, u) {
    for (var a = 0, e = l; e; e = u(e)) a++;
    e = 0;
    for (var n = t; n; n = u(n)) e++;
    for (; 0 < a - e;) ((l = u(l)), a--);
    for (; 0 < e - a;) ((t = u(t)), e--);
    for (; a--;) {
      if (l === t || (t !== null && l === t.alternate)) return l;
      ((l = u(l)), (t = u(t)));
    }
    return null;
  }
  var X = Object.assign,
    w = Symbol.for("react.element"),
    Nt = Symbol.for("react.transitional.element"),
    ft = Symbol.for("react.portal"),
    lt = Symbol.for("react.fragment"),
    tt = Symbol.for("react.strict_mode"),
    sl = Symbol.for("react.profiler"),
    _l = Symbol.for("react.consumer"),
    Al = Symbol.for("react.context"),
    A = Symbol.for("react.forward_ref"),
    Y = Symbol.for("react.suspense"),
    B = Symbol.for("react.suspense_list"),
    Sl = Symbol.for("react.memo"),
    nl = Symbol.for("react.lazy"),
    Yt = Symbol.for("react.activity"),
    uu = Symbol.for("react.legacy_hidden"),
    Fu = Symbol.for("react.memo_cache_sentinel"),
    s = Symbol.for("react.view_transition"),
    b = Symbol.for("react.recoverable"),
    j = Symbol.iterator;
  function p(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (j && l[j]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var P = Symbol.for("react.client.reference");
  function tl(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === P ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case lt:
        return "Fragment";
      case sl:
        return "Profiler";
      case tt:
        return "StrictMode";
      case Y:
        return "Suspense";
      case B:
        return "SuspenseList";
      case Yt:
        return "Activity";
      case s:
        return "ViewTransition";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case ft:
          return "Portal";
        case Al:
          return l.displayName || "Context";
        case _l:
          return (l._context.displayName || "Context") + ".Consumer";
        case A:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case Sl:
          return (
            (t = l.displayName || null),
            t !== null ? t : tl(l.type) || "Memo"
          );
        case nl:
          ((t = l._payload), (l = l._init));
          try {
            return tl(l(t));
          } catch {}
      }
    return null;
  }
  var al = Array.isArray,
    M = W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    x = k.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    au = { pending: !1, data: null, method: null, action: null },
    Gi = [],
    Sa = -1;
  function Zt(l) {
    return { current: l };
  }
  function Zl(l) {
    0 > Sa || ((l.current = Gi[Sa]), (Gi[Sa] = null), Sa--);
  }
  function El(l, t) {
    (Sa++, (Gi[Sa] = l.current), (l.current = t));
  }
  var Lt = Zt(null),
    se = Zt(null),
    Tu = Zt(null),
    cn = Zt(null);
  function on(l, t) {
    switch ((El(Tu, t), El(se, l), El(Lt, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? od(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI)))
          ((t = od(t)), (l = sd(t, l)));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    (Zl(Lt), El(Lt, l));
  }
  function Ta() {
    (Zl(Lt), Zl(se), Zl(Tu));
  }
  function Xi(l) {
    var t = l.memoizedState;
    (t !== null && ((ie._currentValue = t.memoizedState), El(cn, l)),
      (t = Lt.current));
    var u = sd(t, l.type);
    t !== u && (El(se, l), El(Lt, u));
  }
  function sn(l) {
    (se.current === l && (Zl(Lt), Zl(se)),
      cn.current === l && (Zl(cn), (ie._currentValue = au)));
  }
  var Qi, Ro;
  function Eu(l) {
    if (Qi === void 0)
      try {
        throw Error();
      } catch (u) {
        var t = u.stack.trim().match(/\n( *(at )?)/);
        ((Qi = (t && t[1]) || ""),
          (Ro =
            -1 <
            u.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < u.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Qi +
      l +
      Ro
    );
  }
  var Vi = !1;
  function Zi(l, t) {
    if (!l || Vi) return "";
    Vi = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var E = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(E.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(E, []);
                } catch (_) {
                  var v = _;
                }
                Reflect.construct(l, [], E);
              } else {
                try {
                  E.call();
                } catch (_) {
                  v = _;
                }
                E = !1;
                try {
                  var y = Object.getOwnPropertyDescriptor(l.prototype, "props");
                  (Object.defineProperty(l.prototype, "props", {
                    configurable: !0,
                    set: function () {
                      throw Error();
                    },
                  }),
                    (E = !0),
                    new l());
                } finally {
                  E &&
                    (y !== void 0
                      ? Object.defineProperty(l.prototype, "props", y)
                      : delete l.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (_) {
                v = _;
              }
              (E = l()) &&
                typeof E.catch == "function" &&
                E.catch(function () {});
            }
          } catch (_) {
            if (_ && v && typeof _.stack == "string") return [_.stack, v.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name",
      );
      e &&
        e.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = a.DetermineComponentFrameRoot(),
        i = n[0],
        f = n[1];
      if (i && f) {
        var c = i.split(`
`),
          r = f.split(`
`);
        for (
          e = a = 0;
          a < c.length && !c[a].includes("DetermineComponentFrameRoot");
        )
          a++;
        for (; e < r.length && !r[e].includes("DetermineComponentFrameRoot");)
          e++;
        if (a === c.length || e === r.length)
          for (
            a = c.length - 1, e = r.length - 1;
            1 <= a && 0 <= e && c[a] !== r[e];
          )
            e--;
        for (; 1 <= a && 0 <= e; a--, e--)
          if (c[a] !== r[e]) {
            if (a !== 1 || e !== 1)
              do
                if ((a--, e--, 0 > e || c[a] !== r[e])) {
                  var h =
                    `
` + c[a].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      h.includes("<anonymous>") &&
                      (h = h.replace("<anonymous>", l.displayName)),
                    h
                  );
                }
              while (1 <= a && 0 <= e);
            break;
          }
      }
    } finally {
      ((Vi = !1), (Error.prepareStackTrace = u));
    }
    return (u = l ? l.displayName || l.name : "") ? Eu(u) : "";
  }
  function dr(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Eu(l.type);
      case 16:
        return Eu("Lazy");
      case 13:
        return l.child !== t && t !== null
          ? Eu("Suspense Fallback")
          : Eu("Suspense");
      case 19:
        return Eu("SuspenseList");
      case 0:
      case 15:
        return Zi(l.type, !1);
      case 11:
        return Zi(l.type.render, !1);
      case 1:
        return Zi(l.type, !0);
      case 31:
        return Eu("Activity");
      case 30:
        return Eu("ViewTransition");
      default:
        return "";
    }
  }
  function Uo(l) {
    try {
      var t = "",
        u = null;
      do ((t += dr(l, u)), (u = l), (l = l.return));
      while (l);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var Li = Object.prototype.hasOwnProperty,
    Ki = O.unstable_scheduleCallback,
    Ji = O.unstable_cancelCallback,
    rr = O.unstable_shouldYield,
    mr = O.unstable_requestPaint,
    mt = O.unstable_now,
    yr = O.unstable_getCurrentPriorityLevel,
    Ho = O.unstable_ImmediatePriority,
    jo = O.unstable_UserBlockingPriority,
    vn = O.unstable_NormalPriority,
    hr = O.unstable_LowPriority,
    po = O.unstable_IdlePriority,
    gr = O.log,
    Sr = O.unstable_setDisableYieldValue,
    ve = null,
    yt = null;
  function bu(l) {
    if (
      (typeof gr == "function" && Sr(l),
      yt && typeof yt.setStrictMode == "function")
    )
      try {
        yt.setStrictMode(ve, l);
      } catch {}
  }
  var ht = Math.clz32 ? Math.clz32 : br,
    Tr = Math.log,
    Er = Math.LN2;
  function br(l) {
    return ((l >>>= 0), l === 0 ? 32 : (31 - ((Tr(l) / Er) | 0)) | 0);
  }
  var dn = 256,
    rn = 262144,
    mn = 4194304;
  function $u(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & -l;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function yn(l, t, u) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var e = 0,
      n = l.suspendedLanes,
      i = l.pingedLanes;
    l = l.warmLanes;
    var f = a & 134217727;
    return (
      f !== 0
        ? ((a = f & ~n),
          a !== 0
            ? (e = $u(a))
            : ((i &= f),
              i !== 0
                ? (e = $u(i))
                : u || ((u = f & ~l), u !== 0 && (e = $u(u)))))
        : ((f = a & ~n),
          f !== 0
            ? (e = $u(f))
            : i !== 0
              ? (e = $u(i))
              : u || ((u = a & ~l), u !== 0 && (e = $u(u)))),
      e === 0
        ? 0
        : t !== 0 &&
            t !== e &&
            (t & n) === 0 &&
            ((n = e & -e),
            (u = t & -t),
            n >= u || (n === 32 && (u & 4194048) !== 0))
          ? t
          : e
    );
  }
  function de(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function qo(l, t) {
    (t & 8) !== 0 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u;) {
        var a = 31 - ht(u),
          e = 1 << a;
        ((t |= l[a]), (u &= ~e));
      }
    return t;
  }
  function zr(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Yo() {
    var l = mn;
    return ((mn <<= 1), (mn & 62914560) === 0 && (mn = 4194304), l);
  }
  function wi(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function re(l, t) {
    ((l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0)));
  }
  function Or(l, t, u, a, e, n) {
    var i = l.pendingLanes;
    ((l.pendingLanes = u),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= u),
      (l.entangledLanes &= u),
      (l.errorRecoveryDisabledLanes &= u),
      (l.shellSuspendCounter = 0));
    var f = l.entanglements,
      c = l.expirationTimes,
      r = l.hiddenUpdates;
    for (u = i & ~u; 0 < u;) {
      var h = 31 - ht(u),
        E = 1 << h;
      ((f[h] = 0), (c[h] = -1));
      var v = r[h];
      if (v !== null)
        for (r[h] = null, h = 0; h < v.length; h++) {
          var y = v[h];
          y !== null && (y.lane &= -536870913);
        }
      u &= ~E;
    }
    (a !== 0 && Bo(l, a, 0),
      n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t)));
  }
  function Bo(l, t, u) {
    ((l.pendingLanes |= t), (l.suspendedLanes &= ~t));
    var a = 31 - ht(t);
    ((l.entangledLanes |= t),
      (l.entanglements[a] = l.entanglements[a] | 1073741824 | (u & 261930)));
  }
  function xo(l, t) {
    var u = (l.entangledLanes |= t);
    for (l = l.entanglements; u;) {
      var a = 31 - ht(u),
        e = 1 << a;
      ((e & t) | (l[a] & t) && (l[a] |= t), (u &= ~e));
    }
  }
  function Go(l, t) {
    var u = t & -t;
    return (
      (u = (u & 42) !== 0 ? 1 : Fi(u)),
      (u & (l.suspendedLanes | t)) !== 0 ? 0 : u
    );
  }
  function Fi(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function $i(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Xo() {
    var l = x.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : wd(l.type));
  }
  function Qo(l, t) {
    var u = x.p;
    try {
      return ((x.p = l), t());
    } finally {
      x.p = u;
    }
  }
  var eu = Math.random().toString(36).slice(2),
    Ll = "__reactFiber$" + eu,
    ct = "__reactProps$" + eu,
    Ea = "__reactContainer$" + eu,
    Vo = "__reactEvents$" + eu,
    _r = "__reactListeners$" + eu,
    Ar = "__reactHandles$" + eu,
    Zo = "__reactResources$" + eu,
    me = "__reactMarker$" + eu,
    hn = "__reactLoad$" + eu;
  function gn(l) {
    (delete l[Ll], delete l[ct], delete l[_r], delete l[Ar]);
  }
  function Wu(l) {
    var t;
    if ((t = l[Ll])) return t;
    for (var u = l.parentNode; u;) {
      if ((t = u[Ea] || u[Ll])) {
        if (
          ((u = t.alternate),
          t.child !== null || (u !== null && u.child !== null))
        )
          for (l = Dd(l); l !== null;) {
            if ((u = l[Ll])) return u;
            l = Dd(l);
          }
        return t;
      }
      ((l = u), (u = l.parentNode));
    }
    return null;
  }
  function ba(l) {
    if ((l = l[Ll] || l[Ea])) {
      var t = l.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return l;
    }
    return null;
  }
  function ye(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(g(33));
  }
  function za(l) {
    var t = l[Zo];
    return (
      t ||
        (t = l[Zo] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function xl(l) {
    l[me] = !0;
  }
  function Lo(l) {
    l[hn] = void 0;
  }
  var Ko = new Set(),
    Jo = {};
  function ku(l, t) {
    (Oa(l, t), Oa(l + "Capture", t));
  }
  function Oa(l, t) {
    for (Jo[l] = t, l = 0; l < t.length; l++) Ko.add(t[l]);
  }
  var Nr = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    wo = {},
    Fo = {};
  function Dr(l) {
    return Li.call(Fo, l)
      ? !0
      : Li.call(wo, l)
        ? !1
        : Nr.test(l)
          ? (Fo[l] = !0)
          : ((wo[l] = !0), !1);
  }
  var ul = !1;
  function $o() {
    var l = ul;
    return ((ul = !1), l);
  }
  function Sn(l, t, u) {
    if (Dr(t))
      if (u === null) l.removeAttribute(t);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, u);
      }
  }
  function Tn(l, t, u) {
    if (u === null) l.removeAttribute(t);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, u);
    }
  }
  function nu(l, t, u, a) {
    if (a === null) l.removeAttribute(u);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(t, u, a);
    }
  }
  function gt(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Wo(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Cr(l, t, u) {
    var a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (
      !l.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var e = a.get,
        n = a.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return e.call(this);
          },
          set: function (i) {
            ((u = "" + i), n.call(this, i));
          },
        }),
        Object.defineProperty(l, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return u;
          },
          setValue: function (i) {
            u = "" + i;
          },
          stopTracking: function () {
            ((l._valueTracker = null), delete l[t]);
          },
        }
      );
    }
  }
  function Wi(l) {
    if (!l._valueTracker) {
      var t = Wo(l) ? "checked" : "value";
      l._valueTracker = Cr(l, t, "" + l[t]);
    }
  }
  function ko(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var u = t.getValue(),
      a = "";
    return (
      l && (a = Wo(l) ? (l.checked ? "true" : "false") : l.value),
      (l = a),
      l !== u ? (t.setValue(l), !0) : !1
    );
  }
  var Mr = /[\n"\\]/g;
  function Dt(l) {
    return l.replace(Mr, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function ki(l, t, u, a, e, n, i, f) {
    ((l.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (l.type = i)
        : l.removeAttribute("type"),
      t != null
        ? i === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + gt(t))
          : l.value !== "" + gt(t) && (l.value = "" + gt(t))
        : (i !== "submit" && i !== "reset") || l.removeAttribute("value"),
      t != null
        ? i === "number" && l.value == t
          ? Ii(l, gt(l.value))
          : Ii(l, gt(t))
        : u != null
          ? Ii(l, gt(u))
          : a != null && l.removeAttribute("value"),
      e == null && n != null && (l.defaultChecked = !!n),
      e != null &&
        (l.checked = e && typeof e != "function" && typeof e != "symbol"),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (l.name = "" + gt(f))
        : l.removeAttribute("name"));
  }
  function Io(l, t, u, a, e, n, i, f) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      t != null || u != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || t != null)) {
        Wi(l);
        return;
      }
      ((u = u != null ? "" + gt(u) : ""),
        (t = t != null ? "" + gt(t) : u),
        f || t === l.value || (l.value = t),
        (l.defaultValue = t));
    }
    ((a = a ?? e),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (l.checked = f ? l.checked : !!a),
      (l.defaultChecked = !!a),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (l.name = i),
      Wi(l));
  }
  function Ii(l, t) {
    l.defaultValue !== "" + t && (l.defaultValue = "" + t);
  }
  function _a(l, t, u, a) {
    if (((l = l.options), t)) {
      t = {};
      for (var e = 0; e < u.length; e++) t["$" + u[e]] = !0;
      for (u = 0; u < l.length; u++)
        ((e = t.hasOwnProperty("$" + l[u].value)),
          l[u].selected !== e && (l[u].selected = e),
          e && a && (l[u].defaultSelected = !0));
    } else {
      for (u = "" + gt(u), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === u) {
          ((l[e].selected = !0), a && (l[e].defaultSelected = !0));
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Po(l, t, u) {
    if (
      t != null &&
      ((t = "" + gt(t)), t !== l.value && (l.value = t), u == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = u != null ? "" + gt(u) : "";
  }
  function ls(l, t, u, a) {
    if (t == null) {
      if (a != null) {
        if (u != null) throw Error(g(92));
        if (al(a)) {
          if (1 < a.length) throw Error(g(93));
          a = a[0];
        }
        u = a;
      }
      (u == null && (u = ""), (t = u));
    }
    ((u = gt(t)),
      (l.defaultValue = u),
      (a = l.textContent),
      a === u && a !== "" && a !== null && (l.value = a),
      Wi(l));
  }
  function Aa(l, t) {
    if (t) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Rr = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function ts(l, t, u) {
    var a = t.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === ""
      ? a
        ? l.setProperty(t, "")
        : t === "float"
          ? (l.cssFloat = "")
          : (l[t] = "")
      : a
        ? l.setProperty(t, u)
        : typeof u != "number" || u === 0 || Rr.has(t)
          ? t === "float"
            ? (l.cssFloat = u)
            : (l[t] = ("" + u).trim())
          : (l[t] = u + "px");
  }
  function us(l, t, u) {
    if (t != null && typeof t != "object") throw Error(g(62));
    if (((l = l.style), u != null)) {
      for (var a in u)
        !u.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? l.setProperty(a, "")
            : a === "float"
              ? (l.cssFloat = "")
              : (l[a] = ""),
          (ul = !0));
      for (var e in t)
        ((a = t[e]),
          t.hasOwnProperty(e) && u[e] !== a && (ts(l, e, a), (ul = !0)));
    } else for (var n in t) t.hasOwnProperty(n) && ts(l, n, t[n]);
  }
  function Pi(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ur = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["maskType", "mask-type"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Hr =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function En(l) {
    return Hr.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  function Kt() {}
  var lf = null;
  function tf(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var Na = null,
    Da = null;
  function as(l) {
    var t = ba(l);
    if (t && (l = t.stateNode)) {
      var u = l[ct] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (ki(
              l,
              u.value,
              u.defaultValue,
              u.defaultValue,
              u.checked,
              u.defaultChecked,
              u.type,
              u.name,
            ),
            (t = u.name),
            u.type === "radio" && t != null)
          ) {
            for (u = l; u.parentNode;) u = u.parentNode;
            for (
              u = u.querySelectorAll(
                'input[name="' + Dt("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < u.length;
              t++
            ) {
              var a = u[t];
              if (a !== l && a.form === l.form) {
                var e = a[ct] || null;
                if (!e) throw Error(g(90));
                ki(
                  a,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name,
                );
              }
            }
            for (t = 0; t < u.length; t++)
              ((a = u[t]), a.form === l.form && ko(a));
          }
          break l;
        case "textarea":
          Po(l, u.value, u.defaultValue);
          break l;
        case "select":
          ((t = u.value), t != null && _a(l, !!u.multiple, t, !1));
      }
    }
  }
  var uf = !1;
  function es(l, t, u) {
    if (uf) return l(t, u);
    uf = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (
        ((uf = !1),
        (Na !== null || Da !== null) &&
          (Ei(), Na && ((t = Na), (l = Da), (Da = Na = null), as(t), l)))
      )
        for (t = 0; t < l.length; t++) as(l[t]);
    }
  }
  function he(l, t) {
    var u = l.stateNode;
    if (u === null) return null;
    var a = u[ct] || null;
    if (a === null) return null;
    u = a[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((a = !a.disabled) ||
          ((l = l.type),
          (a = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !a));
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function") throw Error(g(231, t, typeof u));
    return u;
  }
  var iu = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    af = !1;
  if (iu)
    try {
      var ge = {};
      (Object.defineProperty(ge, "passive", {
        get: function () {
          af = !0;
        },
      }),
        window.addEventListener("test", ge, ge),
        window.removeEventListener("test", ge, ge));
    } catch {
      af = !1;
    }
  var zu = null,
    ef = null,
    bn = null;
  function ns() {
    if (bn) return bn;
    var l,
      t = ef,
      u = t.length,
      a,
      e = "value" in zu ? zu.value : zu.textContent,
      n = e.length;
    for (l = 0; l < u && t[l] === e[l]; l++);
    var i = u - l;
    for (a = 1; a <= i && t[u - a] === e[n - a]; a++);
    return (bn = e.slice(l, 1 < a ? 1 - a : void 0));
  }
  function zn(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function On() {
    return !0;
  }
  function is() {
    return !1;
  }
  function ut(l) {
    function t(u, a, e, n, i) {
      ((this._reactName = u),
        (this._targetInst = e),
        (this.type = a),
        (this.nativeEvent = n),
        (this.target = i),
        (this.currentTarget = null));
      for (var f in l)
        l.hasOwnProperty(f) && ((u = l[f]), (this[f] = u ? u(n) : n[f]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? On
          : is),
        (this.isPropagationStopped = is),
        this
      );
    }
    return (
      X(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var u = this.nativeEvent;
          u &&
            (u.preventDefault
              ? u.preventDefault()
              : typeof u.returnValue != "unknown" && (u.returnValue = !1),
            (this.isDefaultPrevented = On));
        },
        stopPropagation: function () {
          var u = this.nativeEvent;
          u &&
            (u.stopPropagation
              ? u.stopPropagation()
              : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0),
            (this.isPropagationStopped = On));
        },
        persist: function () {},
        isPersistent: On,
      }),
      t
    );
  }
  var Ou = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    _n = ut(Ou),
    Se = X({}, Ou, { view: 0, detail: 0 }),
    jr = ut(Se),
    nf,
    ff,
    Te,
    An = X({}, Se, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: of,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== Te &&
              (Te && l.type === "mousemove"
                ? ((nf = l.screenX - Te.screenX), (ff = l.screenY - Te.screenY))
                : (ff = nf = 0),
              (Te = l)),
            nf);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : ff;
      },
    }),
    fs = ut(An),
    pr = X({}, An, { dataTransfer: 0 }),
    qr = ut(pr),
    Yr = X({}, Se, { relatedTarget: 0 }),
    cf = ut(Yr),
    Br = X({}, Ou, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    xr = ut(Br),
    Gr = X({}, Ou, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    Xr = ut(Gr),
    Qr = X({}, Ou, { data: 0 }),
    cs = ut(Qr),
    Vr = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Zr = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Lr = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Kr(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = Lr[l])
        ? !!t[l]
        : !1;
  }
  function of() {
    return Kr;
  }
  var Jr = X({}, Se, {
      key: function (l) {
        if (l.key) {
          var t = Vr[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = zn(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
            ? Zr[l.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: of,
      charCode: function (l) {
        return l.type === "keypress" ? zn(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? zn(l)
          : l.type === "keydown" || l.type === "keyup"
            ? l.keyCode
            : 0;
      },
    }),
    wr = ut(Jr),
    Fr = X({}, An, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    os = ut(Fr),
    $r = X({}, Ou, { submitter: 0 }),
    Wr = ut($r),
    kr = X({}, Se, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: of,
    }),
    Ir = ut(kr),
    Pr = X({}, Ou, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    lm = ut(Pr),
    tm = X({}, An, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
            ? -l.wheelDeltaX
            : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
            ? -l.wheelDeltaY
            : "wheelDelta" in l
              ? -l.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    um = ut(tm),
    am = X({}, Ou, { newState: 0, oldState: 0, source: 0 }),
    em = ut(am),
    nm = [9, 13, 27, 32],
    sf = iu && "CompositionEvent" in window,
    Ee = null;
  iu && "documentMode" in document && (Ee = document.documentMode);
  var im = iu && "TextEvent" in window && !Ee,
    ss = iu && (!sf || (Ee && 8 < Ee && 11 >= Ee)),
    vs = " ",
    ds = !1;
  function rs(l, t) {
    switch (l) {
      case "keyup":
        return nm.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ms(l) {
    return (
      (l = l.detail),
      typeof l == "object" && "data" in l ? l.data : null
    );
  }
  var Ca = !1;
  function fm(l, t) {
    switch (l) {
      case "compositionend":
        return ms(t);
      case "keypress":
        return t.which !== 32 ? null : ((ds = !0), vs);
      case "textInput":
        return ((l = t.data), l === vs && ds ? null : l);
      default:
        return null;
    }
  }
  function cm(l, t) {
    if (Ca)
      return l === "compositionend" || (!sf && rs(l, t))
        ? ((l = ns()), (bn = ef = zu = null), (Ca = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return ss && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var om = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function ys(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!om[l.type] : t === "textarea";
  }
  function hs(l, t, u, a) {
    (Na ? (Da ? Da.push(a) : (Da = [a])) : (Na = a),
      (t = Ni(t, "onChange")),
      0 < t.length &&
        ((u = new _n("onChange", "change", null, u, a)),
        l.push({ event: u, listeners: t })));
  }
  var be = null,
    ze = null;
  function sm(l) {
    ad(l, 0);
  }
  function Nn(l) {
    var t = ye(l);
    if (ko(t)) return l;
  }
  function gs(l, t) {
    if (l === "change") return t;
  }
  var Ss = !1;
  if (iu) {
    var vf;
    if (iu) {
      var df = "oninput" in document;
      if (!df) {
        var Ts = document.createElement("div");
        (Ts.setAttribute("oninput", "return;"),
          (df = typeof Ts.oninput == "function"));
      }
      vf = df;
    } else vf = !1;
    Ss = vf && (!document.documentMode || 9 < document.documentMode);
  }
  function Es() {
    be && (be.detachEvent("onpropertychange", bs), (ze = be = null));
  }
  function bs(l) {
    if (l.propertyName === "value" && Nn(ze)) {
      var t = [];
      (hs(t, ze, l, tf(l)), es(sm, t));
    }
  }
  function vm(l, t, u) {
    l === "focusin"
      ? (Es(), (be = t), (ze = u), be.attachEvent("onpropertychange", bs))
      : l === "focusout" && Es();
  }
  function dm(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Nn(ze);
  }
  function rm(l, t) {
    if (l === "click") return Nn(t);
  }
  function mm(l, t) {
    if (l === "input" || l === "change") return Nn(t);
  }
  function ym(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var St = typeof Object.is == "function" ? Object.is : ym;
  function Oe(l, t) {
    if (St(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var u = Object.keys(l),
      a = Object.keys(t);
    if (u.length !== a.length) return !1;
    for (a = 0; a < u.length; a++) {
      var e = u[a];
      if (!Li.call(t, e) || !St(l[e], t[e])) return !1;
    }
    return !0;
  }
  function rf(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  function zs(l) {
    for (; l && l.firstChild;) l = l.firstChild;
    return l;
  }
  function Os(l, t) {
    var u = zs(l);
    l = 0;
    for (var a; u;) {
      if (u.nodeType === 3) {
        if (((a = l + u.textContent.length), l <= t && a >= t))
          return { node: u, offset: t - l };
        l = a;
      }
      l: {
        for (; u;) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break l;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = zs(u);
    }
  }
  function _s(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? _s(l, t.parentNode)
            : "contains" in l
              ? l.contains(t)
              : l.compareDocumentPosition
                ? !!(l.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function As(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = rf(l.document); t instanceof l.HTMLIFrameElement;) {
      try {
        var u = typeof t.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = t.contentWindow;
      else break;
      t = rf(l.document);
    }
    return t;
  }
  function mf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var hm = iu && "documentMode" in document && 11 >= document.documentMode,
    Ma = null,
    yf = null,
    _e = null,
    hf = !1;
  function Ns(l, t, u) {
    var a =
      u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    hf ||
      Ma == null ||
      Ma !== rf(a) ||
      ((a = Ma),
      "selectionStart" in a && mf(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (_e && Oe(_e, a)) ||
        ((_e = a),
        (a = Ni(yf, "onSelect")),
        0 < a.length &&
          ((t = new _n("onSelect", "select", null, t, u)),
          l.push({ event: t, listeners: a }),
          (t.target = Ma))));
  }
  function Iu(l, t) {
    var u = {};
    return (
      (u[l.toLowerCase()] = t.toLowerCase()),
      (u["Webkit" + l] = "webkit" + t),
      (u["Moz" + l] = "moz" + t),
      u
    );
  }
  var Ra = {
      animationend: Iu("Animation", "AnimationEnd"),
      animationiteration: Iu("Animation", "AnimationIteration"),
      animationstart: Iu("Animation", "AnimationStart"),
      transitionrun: Iu("Transition", "TransitionRun"),
      transitionstart: Iu("Transition", "TransitionStart"),
      transitioncancel: Iu("Transition", "TransitionCancel"),
      transitionend: Iu("Transition", "TransitionEnd"),
    },
    gf = {},
    Ds = {};
  iu &&
    ((Ds = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ra.animationend.animation,
      delete Ra.animationiteration.animation,
      delete Ra.animationstart.animation),
    "TransitionEvent" in window || delete Ra.transitionend.transition);
  function Pu(l) {
    if (gf[l]) return gf[l];
    if (!Ra[l]) return l;
    var t = Ra[l],
      u;
    for (u in t) if (t.hasOwnProperty(u) && u in Ds) return (gf[l] = t[u]);
    return l;
  }
  var Cs = Pu("animationend"),
    Ms = Pu("animationiteration"),
    Rs = Pu("animationstart"),
    gm = Pu("transitionrun"),
    Sm = Pu("transitionstart"),
    Tm = Pu("transitioncancel"),
    Us = Pu("transitionend"),
    Hs = new Map(),
    Sf =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Sf.push("scrollEnd");
  function Bt(l, t) {
    (Hs.set(l, t), ku(t, [l]));
  }
  var Em = 0;
  function fu(l, t) {
    if (l.name != null && l.name !== "auto") return l.name;
    if (t.autoName !== null) return t.autoName;
    l = Qt.identifierPrefix;
    var u = Em++;
    return ((l = "_" + l + "t_" + u.toString(32) + "_"), (t.autoName = l));
  }
  function js(l) {
    if (l == null || typeof l == "string") return l;
    var t = null,
      u = Wa;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = l[u[a]];
        if (e != null) {
          if (e === "none") return "none";
          t = t == null ? e : t + (" " + e);
        }
      }
    return t ?? l.default;
  }
  function cu(l, t) {
    return (
      (l = js(l)),
      (t = js(t)),
      t == null ? (l === "auto" ? null : l) : t === "auto" ? null : t
    );
  }
  var Dn =
      typeof reportError == "function"
        ? reportError
        : function (l) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof l == "object" &&
                  l !== null &&
                  typeof l.message == "string"
                    ? String(l.message)
                    : String(l),
                error: l,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", l);
              return;
            }
            console.error(l);
          },
    Ct = [],
    Ua = 0,
    Tf = 0;
  function Cn() {
    for (var l = Ua, t = (Tf = Ua = 0); t < l;) {
      var u = Ct[t];
      Ct[t++] = null;
      var a = Ct[t];
      Ct[t++] = null;
      var e = Ct[t];
      Ct[t++] = null;
      var n = Ct[t];
      if (((Ct[t++] = null), a !== null && e !== null)) {
        var i = a.pending;
        (i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
          (a.pending = e));
      }
      n !== 0 && ps(u, e, n);
    }
  }
  function Mn(l, t, u, a) {
    ((Ct[Ua++] = l),
      (Ct[Ua++] = t),
      (Ct[Ua++] = u),
      (Ct[Ua++] = a),
      (Tf |= a),
      (l.lanes |= a),
      (l = l.alternate),
      l !== null && (l.lanes |= a));
  }
  function Ef(l, t, u, a) {
    return (Mn(l, t, u, a), Rn(l));
  }
  function la(l, t) {
    return (Mn(l, null, null, t), Rn(l));
  }
  function ps(l, t, u) {
    l.lanes |= u;
    var a = l.alternate;
    a !== null && (a.lanes |= u);
    for (var e = !1, n = l.return; n !== null;)
      ((n.childLanes |= u),
        (a = n.alternate),
        a !== null && (a.childLanes |= u),
        n.tag === 22 &&
          ((l = n.stateNode), l === null || l._visibility & 1 || (e = !0)),
        (l = n),
        (n = n.return));
    return l.tag === 3
      ? ((n = l.stateNode),
        e &&
          t !== null &&
          ((e = 31 - ht(u)),
          (l = n.hiddenUpdates),
          (a = l[e]),
          a === null ? (l[e] = [t]) : a.push(t),
          (t.lane = u | 536870912)),
        n)
      : null;
  }
  function Rn(l) {
    if (50 < Je) throw ((Je = 0), (Ti = null), Error(g(185)));
    for (var t = l.return; t !== null;) ((l = t), (t = l.return));
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ha = {};
  function bm(l, t, u, a) {
    ((this.tag = l),
      (this.key = u),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function ot(l, t, u, a) {
    return new bm(l, t, u, a);
  }
  function bf(l) {
    return ((l = l.prototype), !(!l || !l.isReactComponent));
  }
  function ou(l, t) {
    var u = l.alternate;
    return (
      u === null
        ? ((u = ot(l.tag, t, l.key, l.mode)),
          (u.elementType = l.elementType),
          (u.type = l.type),
          (u.stateNode = l.stateNode),
          (u.alternate = l),
          (l.alternate = u))
        : ((u.pendingProps = t),
          (u.type = l.type),
          (u.flags = 0),
          (u.subtreeFlags = 0),
          (u.deletions = null)),
      (u.flags = l.flags & 1206910976),
      (u.childLanes = l.childLanes),
      (u.lanes = l.lanes),
      (u.child = l.child),
      (u.memoizedProps = l.memoizedProps),
      (u.memoizedState = l.memoizedState),
      (u.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (u.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (u.sibling = l.sibling),
      (u.index = l.index),
      (u.ref = l.ref),
      (u.refCleanup = l.refCleanup),
      u
    );
  }
  function qs(l, t) {
    l.flags &= 1206910978;
    var u = l.alternate;
    return (
      u === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = u.childLanes),
          (l.lanes = u.lanes),
          (l.child = u.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = u.memoizedProps),
          (l.memoizedState = u.memoizedState),
          (l.updateQueue = u.updateQueue),
          (l.type = u.type),
          (t = u.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function Un(l, t, u, a, e, n) {
    var i = 0;
    if (((a = l), typeof a == "function")) bf(a) && (i = 1);
    else if (typeof a == "string")
      i = $y(l, u, Lt.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
          ? 27
          : 5;
    else
      l: switch (a) {
        case Yt:
          return (
            (l = ot(31, u, t, e)),
            (l.elementType = Yt),
            (l.lanes = n),
            l
          );
        case lt:
          return ta(u.children, e, n, t);
        case tt:
          ((i = 8), (e |= 24));
          break;
        case sl:
          return (
            (l = ot(12, u, t, e | 2)),
            (l.elementType = sl),
            (l.lanes = n),
            l
          );
        case Y:
          return ((l = ot(13, u, t, e)), (l.elementType = Y), (l.lanes = n), l);
        case B:
          return ((l = ot(19, u, t, e)), (l.elementType = B), (l.lanes = n), l);
        case uu:
        case s:
          return (
            (l = e | 32),
            (l = ot(30, u, t, l)),
            (l.elementType = s),
            (l.lanes = n),
            (l.stateNode = {
              autoName: null,
              paired: null,
              clones: null,
              ref: null,
            }),
            l
          );
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case Al:
                i = 10;
                break l;
              case _l:
                i = 9;
                break l;
              case A:
                i = 11;
                break l;
              case Sl:
                i = 14;
                break l;
              case nl:
                ((i = 16), (a = null));
                break l;
            }
          ((i = 29),
            (u = Error(g(130, l === null ? "null" : typeof l, ""))),
            (a = null));
      }
    return (
      (t = ot(i, u, t, e)),
      (t.elementType = l),
      (t.type = a),
      (t.lanes = n),
      t
    );
  }
  function ta(l, t, u, a) {
    return ((l = ot(7, l, a, t)), (l.lanes = u), l);
  }
  function zf(l, t, u) {
    return ((l = ot(6, l, null, t)), (l.lanes = u), l);
  }
  function Ys(l) {
    var t = ot(18, null, null, 0);
    return ((t.stateNode = l), t);
  }
  function Of(l, t, u) {
    return (
      (t = ot(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = u),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var Bs = new WeakMap();
  function Mt(l, t) {
    if (typeof l == "object" && l !== null) {
      var u = Bs.get(l);
      return u !== void 0
        ? u
        : ((t = { value: l, source: t, stack: Uo(t) }), Bs.set(l, t), t);
    }
    return { value: l, source: t, stack: Uo(t) };
  }
  var ja = [],
    pa = 0,
    Hn = null,
    Ae = 0,
    Rt = [],
    Ut = 0,
    _u = null,
    Jt = 1,
    wt = "";
  function su(l, t) {
    ((ja[pa++] = Ae), (ja[pa++] = Hn), (Hn = l), (Ae = t));
  }
  function xs(l, t, u) {
    ((Rt[Ut++] = Jt), (Rt[Ut++] = wt), (Rt[Ut++] = _u), (_u = l));
    var a = Jt;
    l = wt;
    var e = 32 - ht(a) - 1;
    ((a &= ~(1 << e)), (u += 1));
    var n = 32 - ht(t) + e;
    if (30 < n) {
      var i = e - (e % 5);
      ((n = (a & ((1 << i) - 1)).toString(32)),
        (a >>= i),
        (e -= i),
        (Jt = (1 << (32 - ht(t) + e)) | (u << e) | a),
        (wt = n + l));
    } else ((Jt = (1 << n) | (u << e) | a), (wt = l));
  }
  function jn(l) {
    l.return !== null && (su(l, 1), xs(l, 1, 0));
  }
  function _f(l) {
    for (; l === Hn;)
      ((Hn = ja[--pa]), (ja[pa] = null), (Ae = ja[--pa]), (ja[pa] = null));
    for (; l === _u;)
      ((_u = Rt[--Ut]),
        (Rt[Ut] = null),
        (wt = Rt[--Ut]),
        (Rt[Ut] = null),
        (Jt = Rt[--Ut]),
        (Rt[Ut] = null));
  }
  function Gs(l, t) {
    ((Rt[Ut++] = Jt),
      (Rt[Ut++] = wt),
      (Rt[Ut++] = _u),
      (Jt = t.id),
      (wt = t.overflow),
      (_u = l));
  }
  var Gl = null,
    bl = null,
    Z = !1,
    Au = null,
    Ht = !1,
    Af = Error(g(519));
  function Nu(l) {
    var t = Error(
      g(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Ne(Mt(t, l)), Af);
  }
  function Xs(l) {
    var t = l.stateNode,
      u = l.type,
      a = l.memoizedProps;
    switch (((t[Ll] = l), (t[ct] = a), u)) {
      case "dialog":
        (J("cancel", t), J("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        J("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < Fe.length; u++) J(Fe[u], t);
        break;
      case "source":
        J("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (J("error", t), J("load", t));
        break;
      case "details":
        J("toggle", t);
        break;
      case "input":
        (J("invalid", t),
          Io(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          ));
        break;
      case "select":
        J("invalid", t);
        break;
      case "textarea":
        (J("invalid", t), ls(t, a.value, a.defaultValue, a.children));
    }
    ((u = a.children),
      (typeof u != "string" && typeof u != "number" && typeof u != "bigint") ||
      t.textContent === "" + u ||
      a.suppressHydrationWarning === !0 ||
      fd(t.textContent, u)
        ? (a.popover != null && (J("beforetoggle", t), J("toggle", t)),
          a.onScroll != null && J("scroll", t),
          a.onScrollEnd != null && J("scrollend", t),
          a.onClick != null && (t.onclick = Kt),
          (t = !0))
        : (t = !1),
      t || Nu(l, !0));
  }
  function pn(l) {
    for (Gl = l.return; Gl;)
      switch (Gl.tag) {
        case 5:
        case 31:
        case 13:
          Ht = !1;
          return;
        case 27:
        case 3:
          Ht = !0;
          return;
        default:
          Gl = Gl.return;
      }
  }
  function qa(l) {
    if (l !== Gl) return !1;
    if (!Z) return (pn(l), (Z = !0), !1);
    var t = l.tag,
      u;
    if (
      ((u = t !== 3 && t !== 27) &&
        ((u = t === 5) &&
          ((u = l.type),
          (u =
            !(u !== "form" && u !== "button") || to(l.type, l.memoizedProps))),
        (u = !u)),
      u && bl && Nu(l),
      pn(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(g(317));
      bl = Nd(l);
    } else if (t === 31) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(g(317));
      bl = Nd(l);
    } else
      t === 27
        ? ((t = bl), Vu(l.type) ? ((l = so), (so = null), (bl = l)) : (bl = t))
        : (bl = Gl ? pt(l.stateNode.nextSibling) : null);
    return !0;
  }
  function ua() {
    ((bl = Gl = null), (Z = !1));
  }
  function Nf() {
    var l = Au;
    return (
      l !== null &&
        (dt === null ? (dt = l) : dt.push.apply(dt, l), (Au = null)),
      l
    );
  }
  function Ne(l) {
    Au === null ? (Au = [l]) : Au.push(l);
  }
  var Df = Zt(null),
    aa = null,
    vu = null;
  function Du(l, t, u) {
    (El(Df, t._currentValue), (t._currentValue = u));
  }
  function du(l) {
    ((l._currentValue = Df.current), Zl(Df));
  }
  function qn(l, t, u) {
    for (; l !== null;) {
      var a = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        l === u)
      )
        break;
      l = l.return;
    }
  }
  function Cf(l, t, u, a) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null;) {
      var n = e.dependencies;
      if (n !== null) {
        var i = e.child;
        n = n.firstContext;
        l: for (; n !== null;) {
          var f = n;
          n = e;
          for (var c = 0; c < t.length; c++)
            if (f.context === t[c]) {
              ((n.lanes |= u),
                (f = n.alternate),
                f !== null && (f.lanes |= u),
                qn(n.return, u, l),
                a || (i = null));
              break l;
            }
          n = f.next;
        }
      } else if (e.tag === 18) {
        if (((i = e.return), i === null)) throw Error(g(341));
        ((i.lanes |= u),
          (n = i.alternate),
          n !== null && (n.lanes |= u),
          qn(i, u, l),
          (i = null));
      } else
        e.tag === 13 &&
        e.memoizedState !== null &&
        e.memoizedState.dehydrated === null
          ? ((e.lanes |= u),
            (i = e.alternate),
            i !== null && (i.lanes |= u),
            qn(e.return, u, l),
            (i = e.child),
            (i = i !== null ? i.sibling : null))
          : (i = e.child);
      if (i !== null) i.return = e;
      else
        for (i = e; i !== null;) {
          if (i === l) {
            i = null;
            break;
          }
          if (((e = i.sibling), e !== null)) {
            ((e.return = i.return), (i = e));
            break;
          }
          i = i.return;
        }
      e = i;
    }
  }
  function ea(l, t, u, a) {
    l = null;
    for (var e = t, n = !1; e !== null;) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var i = e.alternate;
        if (i === null) throw Error(g(387));
        if (((i = i.memoizedProps), i !== null)) {
          var f = e.type;
          St(e.pendingProps.value, i.value) ||
            (l !== null ? l.push(f) : (l = [f]));
        }
      } else if (e === cn.current) {
        if (((i = e.alternate), i === null)) throw Error(g(387));
        i.memoizedState.memoizedState !== e.memoizedState.memoizedState &&
          (l !== null ? l.push(ie) : (l = [ie]));
      }
      e = e.return;
    }
    return (l !== null && Cf(t, l, u, a), (t.flags |= 262144), l !== null);
  }
  function Yn(l) {
    for (l = l.firstContext; l !== null;) {
      if (!St(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function na(l) {
    ((aa = l),
      (vu = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null));
  }
  function Kl(l) {
    return Qs(aa, l);
  }
  function Bn(l, t) {
    return (aa === null && na(l), Qs(l, t));
  }
  function Qs(l, t) {
    var u = t._currentValue;
    if (((t = { context: t, memoizedValue: u, next: null }), vu === null)) {
      if (l === null) throw Error(g(308));
      ((vu = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288));
    } else vu = vu.next = t;
    return u;
  }
  var zm =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (u, a) {
                  l.push(a);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                l.forEach(function (u) {
                  return u();
                }));
            };
          },
    Om = O.unstable_scheduleCallback,
    _m = O.unstable_NormalPriority,
    jl = {
      $$typeof: Al,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Mf() {
    return { controller: new zm(), data: new Map(), refCount: 0 };
  }
  function De(l) {
    (l.refCount--,
      l.refCount === 0 &&
        Om(_m, function () {
          l.controller.abort();
        }));
  }
  function Vs(l, t) {
    if ((l.pendingLanes & 4194048) !== 0) {
      var u = l.transitionTypes;
      for (
        u === null && (u = l.transitionTypes = []), l = 0;
        l < t.length;
        l++
      ) {
        var a = t[l];
        u.indexOf(a) === -1 && u.push(a);
      }
    }
  }
  var Ce = null;
  function Am(l) {
    var t = l.transitionTypes;
    return ((l.transitionTypes = null), t);
  }
  var Me = null,
    Rf = 0,
    ia = 0,
    Ya = null;
  function Nm(l, t) {
    if (Me === null) {
      var u = (Me = []);
      ((Rf = 0),
        (ia = Jc()),
        (Ya = {
          status: "pending",
          value: void 0,
          then: function (a) {
            u.push(a);
          },
        }));
    }
    return (Rf++, t.then(Zs, Zs), t);
  }
  function Zs() {
    if (--Rf === 0 && ((Ce = null), Me !== null)) {
      Ya !== null && (Ya.status = "fulfilled");
      var l = Me;
      ((Me = null), (ia = 0), (Ya = null));
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Dm(l, t) {
    var u = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (e) {
          u.push(e);
        },
      };
    return (
      l.then(
        function () {
          ((a.status = "fulfilled"), (a.value = t));
          for (var e = 0; e < u.length; e++) (0, u[e])(t);
        },
        function (e) {
          for (a.status = "rejected", a.reason = e, e = 0; e < u.length; e++)
            (0, u[e])(void 0);
        },
      ),
      a
    );
  }
  var Ls = M.S;
  M.S = function (l, t) {
    if (
      ((Yv = mt()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        Nm(l, t),
      Ce !== null)
    )
      for (var u = le; u !== null;) (Vs(u, Ce), (u = u.next));
    if (((u = l.types), u !== null)) {
      for (var a = le; a !== null;) (Vs(a, u), (a = a.next));
      if (ia !== 0) {
        ((a = Ce), a === null && (a = Ce = []));
        for (var e = 0; e < u.length; e++) {
          var n = u[e];
          a.indexOf(n) === -1 && a.push(n);
        }
      }
    }
    Ls !== null && Ls(l, t);
  };
  var fa = Zt(null);
  function Uf() {
    var l = fa.current;
    return l !== null ? l : Tl.pooledCache;
  }
  function xn(l, t) {
    t === null ? El(fa, fa.current) : El(fa, t.pool);
  }
  function Ks() {
    var l = Uf();
    return l === null ? null : { parent: jl._currentValue, pool: l };
  }
  var Ba = Error(g(460)),
    Hf = Error(g(474)),
    Gn = Error(g(542)),
    Xn = { then: function () {} };
  function Js(l) {
    return ((l = l.status), l === "fulfilled" || l === "rejected");
  }
  function ws(l, t, u) {
    switch (
      ((u = l[u]),
      u === void 0 ? l.push(t) : u !== t && (t.then(Kt, Kt), (t = u)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw (
          (l = t.reason),
          $s(l),
          l === void 0 && !("reason" in t) ? Error(g(600)) : l
        );
      default:
        if (typeof t.status == "string") t.then(Kt, Kt);
        else {
          if (((l = Tl), l !== null && 100 < l.shellSuspendCounter))
            throw Error(g(482));
          ((l = t),
            (l.status = "pending"),
            l.then(
              function (a) {
                if (t.status === "pending") {
                  var e = t;
                  ((e.status = "fulfilled"), (e.value = a));
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var e = t;
                  ((e.status = "rejected"), (e.reason = a));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), $s(l), l);
        }
        throw ((oa = t), Ba);
    }
  }
  function ca(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function"
        ? ((oa = u), Ba)
        : u;
    }
  }
  var oa = null;
  function Fs() {
    if (oa === null) throw Error(g(459));
    var l = oa;
    return ((oa = null), l);
  }
  function $s(l) {
    if (l === Ba || l === Gn) throw Error(g(483));
  }
  var xa = null,
    Re = 0;
  function Qn(l) {
    var t = Re;
    return ((Re += 1), xa === null && (xa = []), ws(xa, l, t));
  }
  function Cu(l, t) {
    ((t = t.props.ref), (l.ref = t !== void 0 ? t : null));
  }
  function Vn(l, t) {
    throw t.$$typeof === w
      ? Error(g(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          g(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l,
          ),
        ));
  }
  function Ws(l) {
    function t(d, o) {
      if (l) {
        var m = d.deletions;
        m === null ? ((d.deletions = [o]), (d.flags |= 16)) : m.push(o);
      }
    }
    function u(d, o) {
      if (!l) return null;
      for (; o !== null;) (t(d, o), (o = o.sibling));
      return null;
    }
    function a(d) {
      for (var o = new Map(); d !== null;)
        (d.key === null ? o.set(d.index, d) : o.set(d.key, d), (d = d.sibling));
      return o;
    }
    function e(d, o) {
      return ((d = ou(d, o)), (d.index = 0), (d.sibling = null), d);
    }
    function n(d, o, m) {
      return (
        (d.index = m),
        l
          ? ((m = d.alternate),
            m !== null
              ? ((m = m.index), m < o ? ((d.flags |= 2), o) : m)
              : ((d.flags |= 134217730), o))
          : ((d.flags |= 1048576), o)
      );
    }
    function i(d) {
      return (l && d.alternate === null && (d.flags |= 134217730), d);
    }
    function f(d, o, m, T) {
      return o === null || o.tag !== 6
        ? ((o = zf(m, d.mode, T)), (o.return = d), o)
        : ((o = e(o, m)), (o.return = d), o);
    }
    function c(d, o, m, T) {
      var N = m.type;
      return N === lt
        ? ((d = h(d, o, m.props.children, T, m.key)), Cu(d, m), d)
        : o !== null &&
            (o.elementType === N ||
              (typeof N == "object" &&
                N !== null &&
                N.$$typeof === nl &&
                ca(N) === o.type))
          ? ((o = e(o, m.props)), Cu(o, m), (o.return = d), o)
          : ((o = Un(m.type, m.key, m.props, null, d.mode, T)),
            Cu(o, m),
            (o.return = d),
            o);
    }
    function r(d, o, m, T) {
      return o === null ||
        o.tag !== 4 ||
        o.stateNode.containerInfo !== m.containerInfo ||
        o.stateNode.implementation !== m.implementation
        ? ((o = Of(m, d.mode, T)), (o.return = d), o)
        : ((o = e(o, m.children || [])), (o.return = d), o);
    }
    function h(d, o, m, T, N) {
      return o === null || o.tag !== 7
        ? ((o = ta(m, d.mode, T, N)), (o.return = d), o)
        : ((o = e(o, m)), (o.return = d), o);
    }
    function E(d, o, m) {
      if (
        (typeof o == "string" && o !== "") ||
        typeof o == "number" ||
        typeof o == "bigint"
      )
        return ((o = zf("" + o, d.mode, m)), (o.return = d), o);
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case Nt:
            return (
              (m = Un(o.type, o.key, o.props, null, d.mode, m)),
              Cu(m, o),
              (m.return = d),
              m
            );
          case ft:
            return ((o = Of(o, d.mode, m)), (o.return = d), o);
          case nl:
            return ((o = ca(o)), E(d, o, m));
        }
        if (al(o) || p(o))
          return ((o = ta(o, d.mode, m, null)), (o.return = d), o);
        if (typeof o.then == "function") return E(d, Qn(o), m);
        if (o.$$typeof === Al) return E(d, Bn(d, o), m);
        Vn(d, o);
      }
      return null;
    }
    function v(d, o, m, T) {
      var N = o !== null ? o.key : null;
      if (
        (typeof m == "string" && m !== "") ||
        typeof m == "number" ||
        typeof m == "bigint"
      )
        return N !== null ? null : f(d, o, "" + m, T);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Nt:
            return m.key === N ? c(d, o, m, T) : null;
          case ft:
            return m.key === N ? r(d, o, m, T) : null;
          case nl:
            return ((m = ca(m)), v(d, o, m, T));
        }
        if (al(m) || p(m)) return N !== null ? null : h(d, o, m, T, null);
        if (typeof m.then == "function") return v(d, o, Qn(m), T);
        if (m.$$typeof === Al) return v(d, o, Bn(d, m), T);
        Vn(d, m);
      }
      return null;
    }
    function y(d, o, m, T, N) {
      if (
        (typeof T == "string" && T !== "") ||
        typeof T == "number" ||
        typeof T == "bigint"
      )
        return ((d = d.get(m) || null), f(o, d, "" + T, N));
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case Nt:
            return (
              (d = d.get(T.key === null ? m : T.key) || null),
              c(o, d, T, N)
            );
          case ft:
            return (
              (d = d.get(T.key === null ? m : T.key) || null),
              r(o, d, T, N)
            );
          case nl:
            return ((T = ca(T)), y(d, o, m, T, N));
        }
        if (al(T) || p(T)) return ((d = d.get(m) || null), h(o, d, T, N, null));
        if (typeof T.then == "function") return y(d, o, m, Qn(T), N);
        if (T.$$typeof === Al) return y(d, o, m, Bn(o, T), N);
        Vn(o, T);
      }
      return null;
    }
    function _(d, o, m, T) {
      for (
        var N = null, $ = null, U = o, q = (o = 0), Yl = null;
        U !== null && q < m.length;
        q++
      ) {
        U.index > q ? ((Yl = U), (U = null)) : (Yl = U.sibling);
        var I = v(d, U, m[q], T);
        if (I === null) {
          U === null && (U = Yl);
          break;
        }
        (l && U && I.alternate === null && t(d, U),
          (o = n(I, o, q)),
          $ === null ? (N = I) : ($.sibling = I),
          ($ = I),
          (U = Yl));
      }
      if (q === m.length) return (u(d, U), Z && su(d, q), N);
      if (U === null) {
        for (; q < m.length; q++)
          ((U = E(d, m[q], T)),
            U !== null &&
              ((o = n(U, o, q)),
              $ === null ? (N = U) : ($.sibling = U),
              ($ = U)));
        return (Z && su(d, q), N);
      }
      for (U = a(U); q < m.length; q++)
        ((Yl = y(U, d, q, m[q], T)),
          Yl !== null &&
            (l &&
              ((I = Yl.alternate),
              I !== null && U.delete(I.key === null ? q : I.key)),
            (o = n(Yl, o, q)),
            $ === null ? (N = Yl) : ($.sibling = Yl),
            ($ = Yl)));
      return (
        l &&
          U.forEach(function (wu) {
            return t(d, wu);
          }),
        Z && su(d, q),
        N
      );
    }
    function D(d, o, m, T) {
      if (m == null) throw Error(g(151));
      for (
        var N = null, $ = null, U = o, q = (o = 0), Yl = null, I = m.next();
        U !== null && !I.done;
        q++, I = m.next()
      ) {
        U.index > q ? ((Yl = U), (U = null)) : (Yl = U.sibling);
        var wu = v(d, U, I.value, T);
        if (wu === null) {
          U === null && (U = Yl);
          break;
        }
        (l && U && wu.alternate === null && t(d, U),
          (o = n(wu, o, q)),
          $ === null ? (N = wu) : ($.sibling = wu),
          ($ = wu),
          (U = Yl));
      }
      if (I.done) return (u(d, U), Z && su(d, q), N);
      if (U === null) {
        for (; !I.done; q++, I = m.next())
          ((I = E(d, I.value, T)),
            I !== null &&
              ((o = n(I, o, q)),
              $ === null ? (N = I) : ($.sibling = I),
              ($ = I)));
        return (Z && su(d, q), N);
      }
      for (U = a(U); !I.done; q++, I = m.next())
        ((I = y(U, d, q, I.value, T)),
          I !== null &&
            (l &&
              ((Yl = I.alternate),
              Yl !== null && U.delete(Yl.key === null ? q : Yl.key)),
            (o = n(I, o, q)),
            $ === null ? (N = I) : ($.sibling = I),
            ($ = I)));
      return (
        l &&
          U.forEach(function (fh) {
            return t(d, fh);
          }),
        Z && su(d, q),
        N
      );
    }
    function V(d, o, m, T) {
      if (
        (typeof m == "object" &&
          m !== null &&
          m.type === lt &&
          m.key === null &&
          m.props.ref === void 0 &&
          (m = m.props.children),
        typeof m == "object" && m !== null)
      ) {
        switch (m.$$typeof) {
          case Nt:
            l: {
              for (var N = m.key; o !== null;) {
                if (o.key === N) {
                  if (((N = m.type), N === lt)) {
                    if (o.tag === 7) {
                      (u(d, o.sibling),
                        (T = e(o, m.props.children)),
                        Cu(T, m),
                        (T.return = d),
                        (d = T));
                      break l;
                    }
                  } else if (
                    o.elementType === N ||
                    (typeof N == "object" &&
                      N !== null &&
                      N.$$typeof === nl &&
                      ca(N) === o.type)
                  ) {
                    (u(d, o.sibling),
                      (T = e(o, m.props)),
                      Cu(T, m),
                      (T.return = d),
                      (d = T));
                    break l;
                  }
                  u(d, o);
                  break;
                } else t(d, o);
                o = o.sibling;
              }
              m.type === lt
                ? ((T = ta(m.props.children, d.mode, T, m.key)),
                  Cu(T, m),
                  (T.return = d),
                  (d = T))
                : ((T = Un(m.type, m.key, m.props, null, d.mode, T)),
                  Cu(T, m),
                  (T.return = d),
                  (d = T));
            }
            return i(d);
          case ft:
            l: {
              for (N = m.key; o !== null;) {
                if (o.key === N)
                  if (
                    o.tag === 4 &&
                    o.stateNode.containerInfo === m.containerInfo &&
                    o.stateNode.implementation === m.implementation
                  ) {
                    (u(d, o.sibling),
                      (T = e(o, m.children || [])),
                      (T.return = d),
                      (d = T));
                    break l;
                  } else {
                    u(d, o);
                    break;
                  }
                else t(d, o);
                o = o.sibling;
              }
              ((T = Of(m, d.mode, T)), (T.return = d), (d = T));
            }
            return i(d);
          case nl:
            return ((m = ca(m)), V(d, o, m, T));
        }
        if (al(m)) return _(d, o, m, T);
        if (p(m)) {
          if (((N = p(m)), typeof N != "function")) throw Error(g(150));
          return ((m = N.call(m)), D(d, o, m, T));
        }
        if (typeof m.then == "function") return V(d, o, Qn(m), T);
        if (m.$$typeof === Al) return V(d, o, Bn(d, m), T);
        Vn(d, m);
      }
      return (typeof m == "string" && m !== "") ||
        typeof m == "number" ||
        typeof m == "bigint"
        ? ((m = "" + m),
          o !== null && o.tag === 6
            ? (u(d, o.sibling), (T = e(o, m)), (T.return = d), (d = T))
            : (u(d, o), (T = zf(m, d.mode, T)), (T.return = d), (d = T)),
          i(d))
        : u(d, o);
    }
    return function (d, o, m, T) {
      try {
        Re = 0;
        var N = V(d, o, m, T);
        return ((xa = null), N);
      } catch (U) {
        if (U === Ba || U === Gn) throw U;
        var $ = ot(29, U, null, d.mode);
        return (($.lanes = T), ($.return = d), $);
      }
    };
  }
  var sa = Ws(!0),
    ks = Ws(!1),
    Mu = !1;
  function jf(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function pf(l, t) {
    ((l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        }));
  }
  function Ru(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Uu(l, t, u) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (el & 2) !== 0)) {
      var e = a.pending;
      return (
        e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
        (a.pending = t),
        (t = Rn(l)),
        ps(l, null, u),
        t
      );
    }
    return (Mn(l, a, t, u), Rn(l));
  }
  function Ue(l, t, u) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (u & 4194048) !== 0))
    ) {
      var a = t.lanes;
      ((a &= l.pendingLanes), (u |= a), (t.lanes = u), xo(l, u));
    }
  }
  function qf(l, t) {
    var u = l.updateQueue,
      a = l.alternate;
    if (a !== null && ((a = a.updateQueue), u === a)) {
      var e = null,
        n = null;
      if (((u = u.firstBaseUpdate), u !== null)) {
        do {
          var i = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null,
          };
          (n === null ? (e = n = i) : (n = n.next = i), (u = u.next));
        } while (u !== null);
        n === null ? (e = n = t) : (n = n.next = t);
      } else e = n = t;
      ((u = {
        baseState: a.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (l.updateQueue = u));
      return;
    }
    ((l = u.lastBaseUpdate),
      l === null ? (u.firstBaseUpdate = t) : (l.next = t),
      (u.lastBaseUpdate = t));
  }
  var Yf = !1;
  function He() {
    if (Yf) {
      var l = Ya;
      if (l !== null) throw l;
    }
  }
  function je(l, t, u, a) {
    Yf = !1;
    var e = l.updateQueue;
    Mu = !1;
    var n = e.firstBaseUpdate,
      i = e.lastBaseUpdate,
      f = e.shared.pending;
    if (f !== null) {
      e.shared.pending = null;
      var c = f,
        r = c.next;
      ((c.next = null), i === null ? (n = r) : (i.next = r), (i = c));
      var h = l.alternate;
      h !== null &&
        ((h = h.updateQueue),
        (f = h.lastBaseUpdate),
        f !== i &&
          (f === null ? (h.firstBaseUpdate = r) : (f.next = r),
          (h.lastBaseUpdate = c)));
    }
    if (n !== null) {
      var E = e.baseState;
      ((i = 0), (h = r = c = null), (f = n));
      do {
        var v = f.lane & -536870913,
          y = v !== f.lane;
        if (y ? (F & v) === v : (a & v) === v) {
          (v !== 0 && v === ia && (Yf = !0),
            h !== null &&
              (h = h.next =
                {
                  lane: 0,
                  tag: f.tag,
                  payload: f.payload,
                  callback: null,
                  next: null,
                }));
          l: {
            var _ = l,
              D = f;
            v = t;
            var V = u;
            switch (D.tag) {
              case 1:
                if (((_ = D.payload), typeof _ == "function")) {
                  E = _.call(V, E, v);
                  break l;
                }
                E = _;
                break l;
              case 3:
                _.flags = (_.flags & -65537) | 128;
              case 0:
                if (
                  ((_ = D.payload),
                  (v = typeof _ == "function" ? _.call(V, E, v) : _),
                  v == null)
                )
                  break l;
                E = X({}, E, v);
                break l;
              case 2:
                Mu = !0;
            }
          }
          ((v = f.callback),
            v !== null &&
              ((l.flags |= 64),
              y && (l.flags |= 8192),
              (y = e.callbacks),
              y === null ? (e.callbacks = [v]) : y.push(v)));
        } else
          ((y = {
            lane: v,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null,
          }),
            h === null ? ((r = h = y), (c = E)) : (h = h.next = y),
            (i |= v));
        if (((f = f.next), f === null)) {
          if (((f = e.shared.pending), f === null)) break;
          ((y = f),
            (f = y.next),
            (y.next = null),
            (e.lastBaseUpdate = y),
            (e.shared.pending = null));
        }
      } while (!0);
      (h === null && (c = E),
        (e.baseState = c),
        (e.firstBaseUpdate = r),
        (e.lastBaseUpdate = h),
        n === null && (e.shared.lanes = 0),
        (xu |= i),
        (l.lanes = i),
        (l.memoizedState = E));
    }
  }
  function Is(l, t) {
    if (typeof l != "function") throw Error(g(191, l));
    l.call(t);
  }
  function Ps(l, t) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++) Is(u[l], t);
  }
  var Hu = Zt(null),
    Zn = Zt(0);
  function l0(l, t) {
    ((l = gu), El(Zn, l), El(Hu, t), (gu = l | t.baseLanes));
  }
  function Bf() {
    (El(Zn, gu), El(Hu, Hu.current));
  }
  function xf() {
    ((gu = Zn.current), Zl(Hu), Zl(Zn));
  }
  var Jl = Zt(null),
    Il = null;
  function ju(l) {
    var t = l.alternate;
    (El(wl, wl.current & 1),
      El(Jl, l),
      Il === null &&
        (t === null || Hu.current !== null || t.memoizedState !== null) &&
        (Il = l));
  }
  function Gf(l) {
    (El(wl, wl.current), El(Jl, l), Il === null && (Il = l));
  }
  function t0(l) {
    l.tag === 22
      ? (El(wl, wl.current), El(Jl, l), Il === null && (Il = l))
      : pu();
  }
  function pu() {
    (El(wl, wl.current), El(Jl, Jl.current));
  }
  function Tt(l) {
    (Zl(Jl), Il === l && (Il = null), Zl(wl));
  }
  var wl = Zt(0);
  function pe(l, t) {
    (El(Jl, Jl.current), El(wl, t));
  }
  function Xf(l) {
    (Zl(wl), Zl(Jl), Il === l && (Il = null));
  }
  function Ln(l) {
    for (var t = l; t !== null;) {
      if (t.tag === 13) {
        var u = t.memoizedState;
        if (u !== null && ((u = u.dehydrated), u === null || co(u) || oo(u)))
          return t;
      } else if (
        t.tag === 19 &&
        t.memoizedProps.revealOrder !== "independent"
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var ru = 0,
    Q = null,
    yl = null,
    pl = null,
    Kn = !1,
    Ga = !1,
    va = !1,
    Jn = 0,
    qe = 0,
    Xa = null,
    Cm = 0;
  function Ml() {
    throw Error(g(321));
  }
  function Qf(l, t) {
    if (t === null) return !1;
    for (var u = 0; u < t.length && u < l.length; u++)
      if (!St(l[u], t[u])) return !1;
    return !0;
  }
  function Vf(l, t, u, a, e, n) {
    return (
      (ru = n),
      (Q = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (M.H = l === null || l.memoizedState === null ? x0 : G0),
      (va = !1),
      (n = u(a, e)),
      (va = !1),
      Ga && (n = a0(t, u, a, e)),
      u0(l),
      n
    );
  }
  function u0(l) {
    M.H = Pn;
    var t = yl !== null && yl.next !== null;
    if (((ru = 0), (pl = yl = Q = null), (Kn = !1), (qe = 0), (Xa = null), t))
      throw Error(g(300));
    l === null ||
      ql ||
      ((l = l.dependencies), l !== null && Yn(l) && (ql = !0));
  }
  function a0(l, t, u, a) {
    Q = l;
    var e = 0;
    do {
      if ((Ga && (Xa = null), (qe = 0), (Ga = !1), 25 <= e))
        throw Error(g(301));
      if (((e += 1), (pl = yl = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        ((n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0));
      }
      ((M.H = Ym), (n = t(u, a)));
    } while (Ga);
    return n;
  }
  function Mm() {
    var l = M.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? Ye(t) : t),
      (l = l.useState()[0]),
      (yl !== null ? yl.memoizedState : null) !== l && (Q.flags |= 1024),
      t
    );
  }
  function Zf() {
    var l = Jn !== 0;
    return ((Jn = 0), l);
  }
  function Lf(l, t, u) {
    ((t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~u));
  }
  function Kf(l) {
    if (Kn) {
      for (l = l.memoizedState; l !== null;) {
        var t = l.queue;
        (t !== null && (t.pending = null), (l = l.next));
      }
      Kn = !1;
    }
    ((ru = 0), (pl = yl = Q = null), (Ga = !1), (qe = Jn = 0), (Xa = null));
  }
  function at() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (pl === null ? (Q.memoizedState = pl = l) : (pl = pl.next = l), pl);
  }
  function Hl() {
    if (yl === null) {
      var l = Q.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = yl.next;
    var t = pl === null ? Q.memoizedState : pl.next;
    if (t !== null) ((pl = t), (yl = l));
    else {
      if (l === null)
        throw Q.alternate === null ? Error(g(467)) : Error(g(310));
      ((yl = l),
        (l = {
          memoizedState: yl.memoizedState,
          baseState: yl.baseState,
          baseQueue: yl.baseQueue,
          queue: yl.queue,
          next: null,
        }),
        pl === null ? (Q.memoizedState = pl = l) : (pl = pl.next = l));
    }
    return pl;
  }
  function wn() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ye(l) {
    var t = qe;
    return (
      (qe += 1),
      Xa === null && (Xa = []),
      (l = ws(Xa, l, t)),
      (t = Q),
      (pl === null ? t.memoizedState : pl.next) === null &&
        ((t = t.alternate),
        (M.H = t === null || t.memoizedState === null ? x0 : G0)),
      l
    );
  }
  function Fn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Ye(l);
      if (l.$$typeof === b) return;
      if (l.$$typeof === Al) return Kl(l);
    }
    throw Error(g(438, String(l)));
  }
  function Jf(l) {
    var t = null,
      u = Q.updateQueue;
    if ((u !== null && (t = u.memoCache), t == null)) {
      var a = Q.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (e) {
                return e.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      u === null && ((u = wn()), (Q.updateQueue = u)),
      (u.memoCache = t),
      (u = t.data[t.index]),
      u === void 0)
    )
      for (u = t.data[t.index] = Array(l), a = 0; a < l; a++) u[a] = Fu;
    return (t.index++, u);
  }
  function mu(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function $n(l) {
    var t = Hl();
    return wf(t, yl, l);
  }
  function wf(l, t, u) {
    var a = l.queue;
    if (a === null) throw Error(g(311));
    a.lastRenderedReducer = u;
    var e = l.baseQueue,
      n = a.pending;
    if (n !== null) {
      if (e !== null) {
        var i = e.next;
        ((e.next = n.next), (n.next = i));
      }
      ((t.baseQueue = e = n), (a.pending = null));
    }
    if (((n = l.baseState), e === null)) l.memoizedState = n;
    else {
      t = e.next;
      var f = (i = null),
        c = null,
        r = t,
        h = !1;
      do {
        var E = r.lane & -536870913;
        if (E !== r.lane ? (F & E) === E : (ru & E) === E) {
          var v = r.revertLane;
          if (v === 0)
            (c !== null &&
              (c = c.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: r.action,
                  hasEagerState: r.hasEagerState,
                  eagerState: r.eagerState,
                  next: null,
                }),
              E === ia && (h = !0));
          else if ((ru & v) === v) {
            ((r = r.next), v === ia && (h = !0));
            continue;
          } else
            ((E = {
              lane: 0,
              revertLane: r.revertLane,
              gesture: null,
              action: r.action,
              hasEagerState: r.hasEagerState,
              eagerState: r.eagerState,
              next: null,
            }),
              c === null ? ((f = c = E), (i = n)) : (c = c.next = E),
              (Q.lanes |= v),
              (xu |= v));
          ((E = r.action),
            va && u(n, E),
            (n = r.hasEagerState ? r.eagerState : u(n, E)));
        } else
          ((v = {
            lane: E,
            revertLane: r.revertLane,
            gesture: r.gesture,
            action: r.action,
            hasEagerState: r.hasEagerState,
            eagerState: r.eagerState,
            next: null,
          }),
            c === null ? ((f = c = v), (i = n)) : (c = c.next = v),
            (Q.lanes |= E),
            (xu |= E));
        r = r.next;
      } while (r !== null && r !== t);
      if (
        (c === null ? (i = n) : (c.next = f),
        !St(n, l.memoizedState) && ((ql = !0), h && ((u = Ya), u !== null)))
      )
        throw u;
      ((l.memoizedState = n),
        (l.baseState = i),
        (l.baseQueue = c),
        (a.lastRenderedState = n));
    }
    return (e === null && (a.lanes = 0), [l.memoizedState, a.dispatch]);
  }
  function Ff(l) {
    var t = Hl(),
      u = t.queue;
    if (u === null) throw Error(g(311));
    u.lastRenderedReducer = l;
    var a = u.dispatch,
      e = u.pending,
      n = t.memoizedState;
    if (e !== null) {
      u.pending = null;
      var i = (e = e.next);
      do ((n = l(n, i.action)), (i = i.next));
      while (i !== e);
      (St(n, t.memoizedState) || (ql = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (u.lastRenderedState = n));
    }
    return [n, a];
  }
  function e0(l, t, u) {
    var a = Q,
      e = Hl(),
      n = Z;
    if (n) {
      if (u === void 0) throw Error(g(407));
      u = u();
    } else u = t();
    var i = !St((yl || e).memoizedState, u);
    if (
      (i && ((e.memoizedState = u), (ql = !0)),
      (e = e.queue),
      kf(f0.bind(null, a, e, l), [l]),
      (l =
        e.getSnapshot !== t ||
        i ||
        (pl !== null && (pl.memoizedState.tag & 1) !== 0)),
      Qa(l ? 9 : 8, { destroy: void 0 }, i0.bind(null, a, e, u, t), null),
      l)
    ) {
      if (((a.flags |= 2048), Tl === null)) throw Error(g(349));
      n || (ru & 127) !== 0 || n0(a, t, u);
    }
    return u;
  }
  function n0(l, t, u) {
    ((l.flags |= 16384),
      (l = { getSnapshot: t, value: u }),
      (t = Q.updateQueue),
      t === null
        ? ((t = wn()), (Q.updateQueue = t), (t.stores = [l]))
        : ((u = t.stores), u === null ? (t.stores = [l]) : u.push(l)));
  }
  function i0(l, t, u, a) {
    ((t.value = u), (t.getSnapshot = a), c0(t) && o0(l));
  }
  function f0(l, t, u) {
    return u(function () {
      c0(t) && o0(l);
    });
  }
  function c0(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var u = t();
      return !St(l, u);
    } catch {
      return !0;
    }
  }
  function o0(l) {
    var t = la(l, 2);
    t !== null && rt(t, l, 2);
  }
  function $f(l) {
    var t = at();
    if (typeof l == "function") {
      var u = l;
      if (((l = u()), va)) {
        bu(!0);
        try {
          u();
        } finally {
          bu(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: mu,
        lastRenderedState: l,
      }),
      t
    );
  }
  function s0(l, t, u, a) {
    return ((l.baseState = u), wf(l, yl, typeof a == "function" ? a : mu));
  }
  function Rm(l, t, u, a, e) {
    if (In(l)) throw Error(g(485));
    if (((l = t.action), l !== null)) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          n.listeners.push(i);
        },
      };
      (M.T !== null ? u(!0) : (n.isTransition = !1),
        a(n),
        (u = t.pending),
        u === null
          ? ((n.next = t.pending = n), v0(t, n))
          : ((n.next = u.next), (t.pending = u.next = n)));
    }
  }
  function v0(l, t) {
    var u = t.action,
      a = t.payload,
      e = l.state;
    if (t.isTransition) {
      var n = M.T,
        i = {};
      ((i.types = n !== null ? n.types : null), (M.T = i));
      try {
        var f = u(e, a),
          c = M.S;
        (c !== null && c(i, f), d0(l, t, f));
      } catch (r) {
        Wf(l, t, r);
      } finally {
        (n !== null && i.types !== null && (n.types = i.types), (M.T = n));
      }
    } else
      try {
        ((n = u(e, a)), d0(l, t, n));
      } catch (r) {
        Wf(l, t, r);
      }
  }
  function d0(l, t, u) {
    u !== null && typeof u == "object" && typeof u.then == "function"
      ? u.then(
          function (a) {
            r0(l, t, a);
          },
          function (a) {
            return Wf(l, t, a);
          },
        )
      : r0(l, t, u);
  }
  function r0(l, t, u) {
    ((t.status = "fulfilled"),
      (t.value = u),
      m0(t),
      (l.state = u),
      (t = l.pending),
      t !== null &&
        ((u = t.next),
        u === t ? (l.pending = null) : ((u = u.next), (t.next = u), v0(l, u))));
  }
  function Wf(l, t, u) {
    var a = l.pending;
    if (((l.pending = null), a !== null)) {
      a = a.next;
      do ((t.status = "rejected"), (t.reason = u), m0(t), (t = t.next));
      while (t !== a);
    }
    l.action = null;
  }
  function m0(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function y0(l, t) {
    return t;
  }
  function h0(l, t) {
    if (Z) {
      var u = Tl.formState;
      if (u !== null) {
        l: {
          var a = Q;
          if (Z) {
            if (bl) {
              t: {
                for (var e = bl, n = Ht; e.nodeType !== 8;) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (((e = pt(e.nextSibling)), e === null)) {
                    e = null;
                    break t;
                  }
                }
                ((n = e.data), (e = n === "F!" || n === "F" ? e : null));
              }
              if (e) {
                ((bl = pt(e.nextSibling)), (a = e.data === "F!"));
                break l;
              }
            }
            Nu(a);
          }
          a = !1;
        }
        a && (t = u[0]);
      }
    }
    return (
      (u = at()),
      (u.memoizedState = u.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: y0,
        lastRenderedState: t,
      }),
      (u.queue = a),
      (u = q0.bind(null, Q, a)),
      (a.dispatch = u),
      (a = $f(!1)),
      (n = uc.bind(null, Q, !1, a.queue)),
      (a = at()),
      (e = { state: t, dispatch: null, action: l, pending: null }),
      (a.queue = e),
      (u = Rm.bind(null, Q, e, n, u)),
      (e.dispatch = u),
      (a.memoizedState = l),
      [t, u, !1]
    );
  }
  function g0(l) {
    var t = Hl();
    return S0(t, yl, l);
  }
  function S0(l, t, u) {
    if (
      ((t = wf(l, t, y0)[0]),
      (l = $n(mu)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var a = Ye(t);
      } catch (i) {
        throw i === Ba ? Gn : i;
      }
    else a = t;
    t = Hl();
    var e = t.queue,
      n = e.dispatch;
    return (
      u !== t.memoizedState &&
        ((Q.flags |= 2048),
        Qa(9, { destroy: void 0 }, Um.bind(null, e, u), null)),
      [a, n, l]
    );
  }
  function Um(l, t) {
    l.action = t;
  }
  function T0(l) {
    var t = Hl(),
      u = yl;
    if (u !== null) return S0(t, u, l);
    (Hl(), (t = t.memoizedState), (u = Hl()));
    var a = u.queue.dispatch;
    return ((u.memoizedState = l), [t, a, !1]);
  }
  function Qa(l, t, u, a) {
    return (
      (l = { tag: l, create: u, deps: a, inst: t, next: null }),
      (t = Q.updateQueue),
      t === null && ((t = wn()), (Q.updateQueue = t)),
      (u = t.lastEffect),
      u === null
        ? (t.lastEffect = l.next = l)
        : ((a = u.next), (u.next = l), (l.next = a), (t.lastEffect = l)),
      l
    );
  }
  function E0() {
    return Hl().memoizedState;
  }
  function Wn(l, t, u, a) {
    var e = at();
    ((Q.flags |= l),
      (e.memoizedState = Qa(
        1 | t,
        { destroy: void 0 },
        u,
        a === void 0 ? null : a,
      )));
  }
  function kn(l, t, u, a) {
    var e = Hl();
    a = a === void 0 ? null : a;
    var n = e.memoizedState.inst;
    yl !== null && a !== null && Qf(a, yl.memoizedState.deps)
      ? (e.memoizedState = Qa(t, n, u, a))
      : ((Q.flags |= l), (e.memoizedState = Qa(1 | t, n, u, a)));
  }
  function b0(l, t) {
    Wn(8390656, 8, l, t);
  }
  function kf(l, t) {
    kn(2048, 8, l, t);
  }
  function Hm(l) {
    Q.flags |= 4;
    var t = Q.updateQueue;
    if (t === null) ((t = wn()), (Q.updateQueue = t), (t.events = [l]));
    else {
      var u = t.events;
      u === null ? (t.events = [l]) : u.push(l);
    }
  }
  function z0(l) {
    var t = Hl().memoizedState;
    return (
      Hm({ ref: t, nextImpl: l }),
      function () {
        if ((el & 2) !== 0) throw Error(g(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function O0(l, t) {
    return kn(4, 2, l, t);
  }
  function _0(l, t) {
    return kn(4, 4, l, t);
  }
  function A0(l, t) {
    if (typeof t == "function") {
      l = l();
      var u = t(l);
      return function () {
        typeof u == "function" ? u() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function N0(l, t, u) {
    ((u = u != null ? u.concat([l]) : null), kn(4, 4, A0.bind(null, t, l), u));
  }
  function If() {}
  function D0(l, t) {
    var u = Hl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    return t !== null && Qf(t, a[1]) ? a[0] : ((u.memoizedState = [l, t]), l);
  }
  function C0(l, t) {
    var u = Hl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    if (t !== null && Qf(t, a[1])) return a[0];
    if (((a = l()), va)) {
      bu(!0);
      try {
        l();
      } finally {
        bu(!1);
      }
    }
    return ((u.memoizedState = [a, t]), a);
  }
  function Pf(l, t, u) {
    return u === void 0 || ((ru & 1073741824) !== 0 && (F & 261930) === 0)
      ? (l.memoizedState = t)
      : ((l.memoizedState = u), (l = xv()), (Q.lanes |= l), (xu |= l), u);
  }
  function M0(l, t, u, a) {
    return St(u, t)
      ? u
      : Hu.current !== null
        ? ((l = Pf(l, u, a)), St(l, t) || (ql = !0), l)
        : (ru & 106) === 0 || ((ru & 1073741824) !== 0 && (F & 261930) === 0)
          ? ((ql = !0), (l.memoizedState = u))
          : ((l = xv()), (Q.lanes |= l), (xu |= l), t);
  }
  function R0(l, t, u, a, e) {
    var n = x.p;
    x.p = n !== 0 && 8 > n ? n : 8;
    var i = M.T,
      f = {};
    ((f.types = i !== null ? i.types : null), (M.T = f), uc(l, !1, t, u));
    try {
      var c = e(),
        r = M.S;
      if (
        (r !== null && r(f, c),
        c !== null && typeof c == "object" && typeof c.then == "function")
      ) {
        var h = Dm(c, a);
        Be(l, t, h, Ot(l));
      } else Be(l, t, a, Ot(l));
    } catch (E) {
      Be(l, t, { then: function () {}, status: "rejected", reason: E }, Ot());
    } finally {
      ((x.p = n),
        i !== null && f.types !== null && (i.types = f.types),
        (M.T = i));
    }
  }
  function jm() {}
  function lc(l, t, u, a) {
    if (l.tag !== 5) throw Error(g(476));
    var e = U0(l).queue;
    R0(
      l,
      e,
      t,
      au,
      u === null
        ? jm
        : function () {
            return (H0(l), u(a));
          },
    );
  }
  function U0(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: au,
      baseState: au,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: mu,
        lastRenderedState: au,
      },
      next: null,
    };
    var u = {};
    return (
      (t.next = {
        memoizedState: u,
        baseState: u,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: mu,
          lastRenderedState: u,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function H0(l) {
    var t = U0(l);
    (t.next === null && (t = l.alternate.memoizedState),
      Be(l, t.next.queue, {}, Ot()));
  }
  function tc() {
    return Kl(ie);
  }
  function j0() {
    return Hl().memoizedState;
  }
  function p0() {
    return Hl().memoizedState;
  }
  function pm(l) {
    for (var t = l.return; t !== null;) {
      switch (t.tag) {
        case 24:
        case 3:
          var u = Ot();
          l = Ru(u);
          var a = Uu(t, l, u);
          (a !== null && (rt(a, t, u), Ue(a, t, u)),
            (t = { cache: Mf() }),
            (l.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function qm(l, t, u) {
    var a = Ot();
    ((u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      In(l)
        ? Y0(t, u)
        : ((u = Ef(l, t, u, a)), u !== null && (rt(u, l, a), B0(u, t, a))));
  }
  function q0(l, t, u) {
    var a = Ot();
    Be(l, t, u, a);
  }
  function Be(l, t, u, a) {
    var e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (In(l)) Y0(t, e);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var i = t.lastRenderedState,
            f = n(i, u);
          if (((e.hasEagerState = !0), (e.eagerState = f), St(f, i)))
            return (Mn(l, t, e, 0), Tl === null && Cn(), !1);
        } catch {}
      if (((u = Ef(l, t, e, a)), u !== null))
        return (rt(u, l, a), B0(u, t, a), !0);
    }
    return !1;
  }
  function uc(l, t, u, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Jc(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      In(l))
    ) {
      if (t) throw Error(g(479));
    } else ((t = Ef(l, u, a, 2)), t !== null && rt(t, l, 2));
  }
  function In(l) {
    var t = l.alternate;
    return l === Q || (t !== null && t === Q);
  }
  function Y0(l, t) {
    Ga = Kn = !0;
    var u = l.pending;
    (u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
      (l.pending = t));
  }
  function B0(l, t, u) {
    if ((u & 4194048) !== 0) {
      var a = t.lanes;
      ((a &= l.pendingLanes), (u |= a), (t.lanes = u), xo(l, u));
    }
  }
  var Pn = {
      readContext: Kl,
      use: Fn,
      useCallback: Ml,
      useContext: Ml,
      useEffect: Ml,
      useImperativeHandle: Ml,
      useLayoutEffect: Ml,
      useInsertionEffect: Ml,
      useMemo: Ml,
      useReducer: Ml,
      useRef: Ml,
      useState: Ml,
      useDebugValue: Ml,
      useDeferredValue: Ml,
      useTransition: Ml,
      useSyncExternalStore: Ml,
      useId: Ml,
      useHostTransitionStatus: Ml,
      useFormState: Ml,
      useActionState: Ml,
      useOptimistic: Ml,
      useMemoCache: Ml,
      useCacheRefresh: Ml,
      useEffectEvent: Ml,
    },
    x0 = {
      readContext: Kl,
      use: Fn,
      useCallback: function (l, t) {
        return ((at().memoizedState = [l, t === void 0 ? null : t]), l);
      },
      useContext: Kl,
      useEffect: b0,
      useImperativeHandle: function (l, t, u) {
        ((u = u != null ? u.concat([l]) : null),
          Wn(4194308, 4, A0.bind(null, t, l), u));
      },
      useLayoutEffect: function (l, t) {
        return Wn(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        Wn(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var u = at();
        t = t === void 0 ? null : t;
        var a = l();
        if (va) {
          bu(!0);
          try {
            l();
          } finally {
            bu(!1);
          }
        }
        return ((u.memoizedState = [a, t]), a);
      },
      useReducer: function (l, t, u) {
        var a = at();
        if (u !== void 0) {
          var e = u(t);
          if (va) {
            bu(!0);
            try {
              u(t);
            } finally {
              bu(!1);
            }
          }
        } else e = t;
        return (
          (a.memoizedState = a.baseState = e),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: e,
          }),
          (a.queue = l),
          (l = l.dispatch = qm.bind(null, Q, l)),
          [a.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = at();
        return ((l = { current: l }), (t.memoizedState = l));
      },
      useState: function (l) {
        l = $f(l);
        var t = l.queue,
          u = q0.bind(null, Q, t);
        return ((t.dispatch = u), [l.memoizedState, u]);
      },
      useDebugValue: If,
      useDeferredValue: function (l, t) {
        var u = at();
        return Pf(u, l, t);
      },
      useTransition: function () {
        var l = $f(!1);
        return (
          (l = R0.bind(null, Q, l.queue, !0, !1)),
          (at().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, t, u) {
        var a = Q,
          e = at();
        if (Z) {
          if (u === void 0) throw Error(g(407));
          u = u();
        } else {
          if (((u = t()), Tl === null)) throw Error(g(349));
          (F & 127) !== 0 || n0(a, t, u);
        }
        e.memoizedState = u;
        var n = { value: u, getSnapshot: t };
        return (
          (e.queue = n),
          b0(f0.bind(null, a, n, l), [l]),
          (a.flags |= 2048),
          Qa(9, { destroy: void 0 }, i0.bind(null, a, n, u, t), null),
          u
        );
      },
      useId: function () {
        var l = at(),
          t = Tl.identifierPrefix;
        if (Z) {
          var u = wt,
            a = Jt;
          ((u = (a & ~(1 << (32 - ht(a) - 1))).toString(32) + u),
            (t = "_" + t + "R_" + u),
            (u = Jn++),
            0 < u && (t += "H" + u.toString(32)),
            (t += "_"));
        } else ((u = Cm++), (t = "_" + t + "r_" + u.toString(32) + "_"));
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: tc,
      useFormState: h0,
      useActionState: h0,
      useOptimistic: function (l) {
        var t = at();
        t.memoizedState = t.baseState = l;
        var u = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = u),
          (t = uc.bind(null, Q, !0, u)),
          (u.dispatch = t),
          [l, t]
        );
      },
      useMemoCache: Jf,
      useCacheRefresh: function () {
        return (at().memoizedState = pm.bind(null, Q));
      },
      useEffectEvent: function (l) {
        var t = at(),
          u = { impl: l };
        return (
          (t.memoizedState = u),
          function () {
            if ((el & 2) !== 0) throw Error(g(440));
            return u.impl.apply(void 0, arguments);
          }
        );
      },
    },
    G0 = {
      readContext: Kl,
      use: Fn,
      useCallback: D0,
      useContext: Kl,
      useEffect: kf,
      useImperativeHandle: N0,
      useInsertionEffect: O0,
      useLayoutEffect: _0,
      useMemo: C0,
      useReducer: $n,
      useRef: E0,
      useState: function () {
        return $n(mu);
      },
      useDebugValue: If,
      useDeferredValue: function (l, t) {
        var u = Hl();
        return M0(u, yl.memoizedState, l, t);
      },
      useTransition: function () {
        var l = $n(mu)[0],
          t = Hl().memoizedState;
        return [typeof l == "boolean" ? l : Ye(l), t];
      },
      useSyncExternalStore: e0,
      useId: j0,
      useHostTransitionStatus: tc,
      useFormState: g0,
      useActionState: g0,
      useOptimistic: function (l, t) {
        var u = Hl();
        return s0(u, yl, l, t);
      },
      useMemoCache: Jf,
      useCacheRefresh: p0,
      useEffectEvent: z0,
    },
    Ym = {
      readContext: Kl,
      use: Fn,
      useCallback: D0,
      useContext: Kl,
      useEffect: kf,
      useImperativeHandle: N0,
      useInsertionEffect: O0,
      useLayoutEffect: _0,
      useMemo: C0,
      useReducer: Ff,
      useRef: E0,
      useState: function () {
        return Ff(mu);
      },
      useDebugValue: If,
      useDeferredValue: function (l, t) {
        var u = Hl();
        return yl === null ? Pf(u, l, t) : M0(u, yl.memoizedState, l, t);
      },
      useTransition: function () {
        var l = Ff(mu)[0],
          t = Hl().memoizedState;
        return [typeof l == "boolean" ? l : Ye(l), t];
      },
      useSyncExternalStore: e0,
      useId: j0,
      useHostTransitionStatus: tc,
      useFormState: T0,
      useActionState: T0,
      useOptimistic: function (l, t) {
        var u = Hl();
        return yl !== null
          ? s0(u, yl, l, t)
          : ((u.baseState = l), [l, u.queue.dispatch]);
      },
      useMemoCache: Jf,
      useCacheRefresh: p0,
      useEffectEvent: z0,
    };
  function ac(l, t, u, a) {
    ((t = l.memoizedState),
      (u = u(a, t)),
      (u = u == null ? t : X({}, t, u)),
      (l.memoizedState = u),
      l.lanes === 0 && (l.updateQueue.baseState = u));
  }
  var ec = {
    enqueueSetState: function (l, t, u) {
      l = l._reactInternals;
      var a = Ot(),
        e = Ru(a);
      ((e.payload = t),
        u != null && (e.callback = u),
        (t = Uu(l, e, a)),
        t !== null && (rt(t, l, a), Ue(t, l, a)));
    },
    enqueueReplaceState: function (l, t, u) {
      l = l._reactInternals;
      var a = Ot(),
        e = Ru(a);
      ((e.tag = 1),
        (e.payload = t),
        u != null && (e.callback = u),
        (t = Uu(l, e, a)),
        t !== null && (rt(t, l, a), Ue(t, l, a)));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var u = Ot(),
        a = Ru(u);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = Uu(l, a, u)),
        t !== null && (rt(t, l, u), Ue(t, l, u)));
    },
  };
  function X0(l, t, u, a, e, n, i) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(a, n, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Oe(u, a) || !Oe(e, n)
          : !0
    );
  }
  function Q0(l, t, u, a) {
    ((l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(u, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(u, a),
      t.state !== l && ec.enqueueReplaceState(t, t.state, null));
  }
  function da(l, t) {
    var u = t;
    if ("ref" in t) {
      u = {};
      for (var a in t) a !== "ref" && (u[a] = t[a]);
    }
    if ((l = l.defaultProps)) {
      u === t && (u = X({}, u));
      for (var e in l) u[e] === void 0 && (u[e] = l[e]);
    }
    return u;
  }
  function V0(l) {
    Dn(l);
  }
  function Z0(l) {
    console.error(l);
  }
  function L0(l) {
    Dn(l);
  }
  function li(l, t) {
    try {
      var u = l.onUncaughtError;
      u(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function K0(l, t, u) {
    try {
      var a = l.onCaughtError;
      a(u.value, {
        componentStack: u.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function nc(l, t, u) {
    return (
      (u = Ru(u)),
      (u.tag = 3),
      (u.payload = { element: null }),
      (u.callback = function () {
        li(l, t);
      }),
      u
    );
  }
  function J0(l) {
    return ((l = Ru(l)), (l.tag = 3), l);
  }
  function w0(l, t, u, a) {
    var e = u.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = a.value;
      ((l.payload = function () {
        return e(n);
      }),
        (l.callback = function () {
          K0(t, u, a);
        }));
    }
    var i = u.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (l.callback = function () {
        (K0(t, u, a),
          typeof e != "function" &&
            (Gu === null ? (Gu = new Set([this])) : Gu.add(this)));
        var f = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: f !== null ? f : "",
        });
      });
  }
  function Bm(l, t, u, a, e) {
    if (
      ((u.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = u.alternate),
        t !== null && ea(t, u, e, !0),
        (u = Jl.current),
        u !== null)
      ) {
        switch (u.tag) {
          case 31:
          case 13:
          case 19:
            return (
              Il === null ? bi() : u.alternate === null && Rl === 0 && (Rl = 3),
              (u.flags &= -257),
              (u.flags |= 65536),
              (u.lanes = e),
              a === Xn
                ? (u.flags |= 16384)
                : ((t = u.updateQueue),
                  t === null ? (u.updateQueue = new Set([a])) : t.add(a),
                  Zc(l, a, e)),
              !1
            );
          case 22:
            return (
              (u.flags |= 65536),
              a === Xn
                ? (u.flags |= 16384)
                : ((t = u.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (u.updateQueue = t))
                    : ((u = t.retryQueue),
                      u === null ? (t.retryQueue = new Set([a])) : u.add(a)),
                  Zc(l, a, e)),
              !1
            );
        }
        throw Error(g(435, u.tag));
      }
      return (Zc(l, a, e), bi(), !1);
    }
    if (Z)
      return (
        (t = Jl.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = e),
            a !== Af && ((l = Error(g(422), { cause: a })), Ne(Mt(l, u))))
          : (a !== Af && ((t = Error(g(423), { cause: a })), Ne(Mt(t, u))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (e &= -e),
            (l.lanes |= e),
            (a = Mt(a, u)),
            (e = nc(l.stateNode, a, e)),
            qf(l, e),
            Rl !== 4 && (Rl = 2)),
        !1
      );
    var n = Error(g(520), { cause: a });
    if (
      ((n = Mt(n, u)),
      Ke === null ? (Ke = [n]) : Ke.push(n),
      Rl !== 4 && (Rl = 2),
      t === null)
    )
      return !0;
    ((a = Mt(a, u)), (u = t));
    do {
      switch (u.tag) {
        case 3:
          return (
            (u.flags |= 65536),
            (l = e & -e),
            (u.lanes |= l),
            (l = nc(u.stateNode, a, l)),
            qf(u, l),
            !1
          );
        case 1:
          if (
            ((t = u.type),
            (n = u.stateNode),
            (u.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (Gu === null || !Gu.has(n)))))
          )
            return (
              (u.flags |= 65536),
              (e &= -e),
              (u.lanes |= e),
              (e = J0(e)),
              w0(e, l, u, a),
              qf(u, e),
              !1
            );
          break;
        case 22:
          if (u.memoizedState !== null) return ((u.flags |= 65536), !1);
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var ic = Error(g(461)),
    ql = !1;
  function Bl(l, t, u, a) {
    t.child = l === null ? ks(t, null, u, a) : sa(t, l.child, u, a);
  }
  function F0(l, t, u, a, e) {
    u = u.render;
    var n = t.ref;
    if ("ref" in a) {
      var i = {};
      for (var f in a) f !== "ref" && (i[f] = a[f]);
    } else i = a;
    return (
      na(t),
      (a = Vf(l, t, u, i, n, e)),
      (f = Zf()),
      l !== null && !ql
        ? (Lf(l, t, e), yu(l, t, e))
        : (Z && f && jn(t), (t.flags |= 1), Bl(l, t, a, e), t.child)
    );
  }
  function $0(l, t, u, a, e) {
    if (l === null) {
      var n = u.type;
      return typeof n == "function" &&
        !bf(n) &&
        n.defaultProps === void 0 &&
        u.compare === null
        ? ((t.tag = 15), (t.type = n), W0(l, t, n, a, e))
        : ((l = Un(u.type, null, a, t, t.mode, e)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((n = l.child), !mc(l, e))) {
      var i = n.memoizedProps;
      if (
        ((u = u.compare), (u = u !== null ? u : Oe), u(i, a) && l.ref === t.ref)
      )
        return yu(l, t, e);
    }
    return (
      (t.flags |= 1),
      (l = ou(n, a)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function W0(l, t, u, a, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Oe(n, a) && l.ref === t.ref)
        if (((ql = !1), (t.pendingProps = a = n), mc(l, e)))
          (l.flags & 131072) !== 0 && (ql = !0);
        else return ((t.lanes = l.lanes), yu(l, t, e));
    }
    return fc(l, t, u, a, e);
  }
  function k0(l, t, u, a) {
    var e = a.children,
      n = l !== null ? l.memoizedState : null;
    if (
      (l === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((n = n !== null ? n.baseLanes | u : u), l !== null)) {
          for (a = t.child = l.child, e = 0; a !== null;)
            ((e = e | a.lanes | a.childLanes), (a = a.sibling));
          a = e & ~n;
        } else ((a = 0), (t.child = null));
        return I0(l, t, n, u, a);
      }
      if ((u & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && xn(t, n !== null ? n.cachePool : null),
          n !== null ? l0(t, n) : Bf(),
          t0(t));
      else
        return (
          (a = t.lanes = 536870912),
          I0(l, t, n !== null ? n.baseLanes | u : u, u, a)
        );
    } else
      n !== null
        ? (xn(t, n.cachePool), l0(t, n), pu(), (t.memoizedState = null))
        : (l !== null && xn(t, null), Bf(), pu());
    return (Bl(l, t, e, u), t.child);
  }
  function xe(l, t) {
    return (
      (l !== null && l.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function I0(l, t, u, a, e) {
    var n = Uf();
    return (
      (n = n === null ? null : { parent: jl._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: u, cachePool: n }),
      l !== null && xn(t, null),
      Bf(),
      t0(t),
      l !== null && ea(l, t, a, !0),
      (t.childLanes = e),
      null
    );
  }
  function ti(l, t) {
    return (
      (t = ui({ mode: t.mode, children: t.children }, l.mode)),
      (t.ref = l.ref),
      (l.child = t),
      (t.return = l),
      t
    );
  }
  function P0(l, t, u) {
    return (
      sa(t, l.child, null, u),
      (l = ti(t, t.pendingProps)),
      (l.flags |= 2),
      Tt(t),
      (t.memoizedState = null),
      l
    );
  }
  function xm(l, t, u) {
    var a = t.pendingProps,
      e = (t.flags & 128) !== 0;
    if (((t.flags &= -129), l === null)) {
      if (Z) {
        if (a.mode === "hidden")
          return (
            (l = ti(t, a)),
            (t.lanes = 536870912),
            (l.memoizedState = { baseLanes: 0, cachePool: null }),
            xe(null, l)
          );
        if (
          (Gf(t),
          (l = bl)
            ? ((l = Ad(l, Ht)),
              (l = l !== null && l.data === "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: _u !== null ? { id: Jt, overflow: wt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (u = Ys(l)),
                (u.return = t),
                (t.child = u),
                (Gl = t),
                (bl = null)))
            : (l = null),
          l === null)
        )
          throw Nu(t);
        return ((t.lanes = 536870912), null);
      }
      return ti(t, a);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if ((Gf(t), e))
        if (t.flags & 256) ((t.flags &= -257), (t = P0(l, t, u)));
        else if (t.memoizedState !== null)
          ((t.child = l.child), (t.flags |= 128), (t = null));
        else throw Error(g(558));
      else if (
        (ql || ea(l, t, u, !1), (e = (u & l.childLanes) !== 0), ql || e)
      ) {
        if (Hu.current === null) {
          if (
            ((a = Tl),
            a !== null && ((i = Go(a, u)), i !== 0 && i !== n.retryLane))
          )
            throw ((n.retryLane = i), la(l, i), rt(a, l, i), ic);
          bi();
        }
        t = P0(l, t, u);
      } else
        ((l = n.treeContext),
          (bl = pt(i.nextSibling)),
          (Gl = t),
          (Z = !0),
          (Au = null),
          (Ht = !1),
          l !== null && Gs(t, l),
          (t = ti(t, a)),
          (t.flags |= 134221824));
      return t;
    }
    return (
      (l = ou(l.child, { mode: a.mode, children: a.children })),
      (l.ref = t.ref),
      (t.child = l),
      (l.return = t),
      l
    );
  }
  function Va(l, t) {
    var u = t.ref;
    if (u === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object") throw Error(g(284));
      (l === null || l.ref !== u) && (t.flags |= 4194816);
    }
  }
  function fc(l, t, u, a, e) {
    return (
      na(t),
      (u = Vf(l, t, u, a, void 0, e)),
      (a = Zf()),
      l !== null && !ql
        ? (Lf(l, t, e), yu(l, t, e))
        : (Z && a && jn(t), (t.flags |= 1), Bl(l, t, u, e), t.child)
    );
  }
  function lv(l, t, u, a, e, n) {
    return (
      na(t),
      (t.updateQueue = null),
      (u = a0(t, a, u, e)),
      u0(l),
      (a = Zf()),
      l !== null && !ql
        ? (Lf(l, t, n), yu(l, t, n))
        : (Z && a && jn(t), (t.flags |= 1), Bl(l, t, u, n), t.child)
    );
  }
  function tv(l, t, u, a, e) {
    if ((na(t), t.stateNode === null)) {
      var n = Ha,
        i = u.contextType;
      (typeof i == "object" && i !== null && (n = Kl(i)),
        (n = new u(a, n)),
        (t.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = ec),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = a),
        (n.state = t.memoizedState),
        (n.refs = {}),
        jf(t),
        (i = u.contextType),
        (n.context = typeof i == "object" && i !== null ? Kl(i) : Ha),
        (n.state = t.memoizedState),
        (i = u.getDerivedStateFromProps),
        typeof i == "function" && (ac(t, u, i, a), (n.state = t.memoizedState)),
        typeof u.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((i = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          i !== n.state && ec.enqueueReplaceState(n, n.state, null),
          je(t, a, n, e),
          He(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0));
    } else if (l === null) {
      n = t.stateNode;
      var f = t.memoizedProps,
        c = da(u, f);
      n.props = c;
      var r = n.context,
        h = u.contextType;
      ((i = Ha), typeof h == "object" && h !== null && (i = Kl(h)));
      var E = u.getDerivedStateFromProps;
      ((h =
        typeof E == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (f = t.pendingProps !== f),
        h ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((f || r !== i) && Q0(t, n, a, i)),
        (Mu = !1));
      var v = t.memoizedState;
      ((n.state = v),
        je(t, a, n, e),
        He(),
        (r = t.memoizedState),
        f || v !== r || Mu
          ? (typeof E == "function" && (ac(t, u, E, a), (r = t.memoizedState)),
            (c = Mu || X0(t, u, c, a, v, r, i))
              ? (h ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = r)),
            (n.props = a),
            (n.state = r),
            (n.context = i),
            (a = c))
          : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1)));
    } else {
      ((n = t.stateNode),
        pf(l, t),
        (i = t.memoizedProps),
        (h = da(u, i)),
        (n.props = h),
        (E = t.pendingProps),
        (v = n.context),
        (r = u.contextType),
        (c = Ha),
        typeof r == "object" && r !== null && (c = Kl(r)),
        (f = u.getDerivedStateFromProps),
        (r =
          typeof f == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i !== E || v !== c) && Q0(t, n, a, c)),
        (Mu = !1),
        (v = t.memoizedState),
        (n.state = v),
        je(t, a, n, e),
        He());
      var y = t.memoizedState;
      i !== E ||
      v !== y ||
      Mu ||
      (l !== null && l.dependencies !== null && Yn(l.dependencies))
        ? (typeof f == "function" && (ac(t, u, f, a), (y = t.memoizedState)),
          (h =
            Mu ||
            X0(t, u, h, a, v, y, c) ||
            (l !== null && l.dependencies !== null && Yn(l.dependencies)))
            ? (r ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(a, y, c),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(a, y, c)),
              typeof n.componentDidUpdate == "function" && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (i === l.memoizedProps && v === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (i === l.memoizedProps && v === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = y)),
          (n.props = a),
          (n.state = y),
          (n.context = c),
          (a = h))
        : (typeof n.componentDidUpdate != "function" ||
            (i === l.memoizedProps && v === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (i === l.memoizedProps && v === l.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (n = a),
      Va(l, t),
      (a = (t.flags & 128) !== 0),
      n || a
        ? ((n = t.stateNode),
          (u =
            a && typeof u.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (t.flags |= 1),
          l !== null && a
            ? ((t.child = sa(t, l.child, null, e)),
              (t.child = sa(t, null, u, e)))
            : Bl(l, t, u, e),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = yu(l, t, e)),
      l
    );
  }
  function uv(l, t, u, a) {
    return (ua(), (t.flags |= 256), Bl(l, t, u, a), t.child);
  }
  var cc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function oc(l) {
    return { baseLanes: l, cachePool: Ks() };
  }
  function sc(l, t, u) {
    return ((l = l !== null ? l.childLanes & ~u : 0), t && (l |= zt), l);
  }
  function av(l, t, u) {
    var a = t.pendingProps,
      e = !1,
      n = (t.flags & 128) !== 0,
      i;
    if (
      ((i = n) ||
        (i =
          l !== null && l.memoizedState === null ? !1 : (wl.current & 2) !== 0),
      i && ((e = !0), (t.flags &= -129)),
      (i = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (Z) {
        if (
          (e ? ju(t) : pu(),
          (l = bl)
            ? ((l = Ad(l, Ht)),
              (l = l !== null && l.data !== "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: _u !== null ? { id: Jt, overflow: wt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (u = Ys(l)),
                (u.return = t),
                (t.child = u),
                (Gl = t),
                (bl = null)))
            : (l = null),
          l === null)
        )
          throw Nu(t);
        return (oo(l) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      return (
        (n = a.children),
        (a = a.fallback),
        e
          ? (pu(),
            (e = t.mode),
            (n = ui({ mode: "hidden", children: n }, e)),
            (a = ta(a, e, u, null)),
            (n.return = t),
            (a.return = t),
            (n.sibling = a),
            (t.child = n),
            (a = t.child),
            (a.memoizedState = oc(u)),
            (a.childLanes = sc(l, i, u)),
            (t.memoizedState = cc),
            xe(null, a))
          : (ju(t), vc(t, n))
      );
    }
    var f = l.memoizedState;
    if (f !== null) {
      var c = f.dehydrated;
      if (c !== null) return Gm(l, t, n, i, a, c, f, u);
    }
    return e
      ? (pu(),
        (e = a.fallback),
        (n = t.mode),
        (f = l.child),
        (c = f.sibling),
        (a = ou(f, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = f.subtreeFlags & 1206910976),
        c !== null ? (e = ou(c, e)) : ((e = ta(e, n, u, null)), (e.flags |= 2)),
        (e.return = t),
        (a.return = t),
        (a.sibling = e),
        (t.child = a),
        xe(null, a),
        (a = t.child),
        (e = l.child.memoizedState),
        e === null
          ? (e = oc(u))
          : ((n = e.cachePool),
            n !== null
              ? ((f = jl._currentValue),
                (n = n.parent !== f ? { parent: f, pool: f } : n))
              : (n = Ks()),
            (e = { baseLanes: e.baseLanes | u, cachePool: n })),
        (a.memoizedState = e),
        (a.childLanes = sc(l, i, u)),
        (t.memoizedState = cc),
        xe(l.child, a))
      : (ju(t),
        (u = l.child),
        (l = u.sibling),
        (u = ou(u, { mode: "visible", children: a.children })),
        (u.return = t),
        (u.sibling = null),
        l !== null &&
          ((i = t.deletions),
          i === null ? ((t.deletions = [l]), (t.flags |= 16)) : i.push(l)),
        (t.child = u),
        (t.memoizedState = null),
        u);
  }
  function vc(l, t) {
    return (
      (t = ui({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function ui(l, t) {
    return ((l = ot(22, l, null, t)), (l.lanes = 0), l);
  }
  function ai(l, t, u) {
    return (
      sa(t, l.child, null, u),
      (l = vc(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function Gm(l, t, u, a, e, n, i, f) {
    if (u)
      return t.flags & 256
        ? (ju(t), (t.flags &= -257), ai(l, t, f))
        : t.memoizedState !== null
          ? (pu(), (t.child = l.child), (t.flags |= 128), null)
          : (pu(),
            (n = e.fallback),
            (i = t.mode),
            (e = ui({ mode: "visible", children: e.children }, i)),
            (n = ta(n, i, f, null)),
            (n.flags |= 2),
            (e.return = t),
            (n.return = t),
            (e.sibling = n),
            (t.child = e),
            sa(t, l.child, null, f),
            (e = t.child),
            (e.memoizedState = oc(f)),
            (e.childLanes = sc(l, a, f)),
            (t.memoizedState = cc),
            xe(null, e));
    if ((ju(t), oo(n))) {
      if (((a = n.nextSibling && n.nextSibling.dataset), a)) var c = a.dgst;
      return (
        (a = c),
        a !== "" &&
          ((e = Error(g(419))),
          (e.stack = ""),
          (e.digest = a),
          Ne({ value: e, source: null, stack: null })),
        ai(l, t, f)
      );
    }
    if ((ql || ea(l, t, f, !1), (a = (f & l.childLanes) !== 0), ql || a)) {
      if (Hu.current !== null) return ai(l, t, f);
      if (
        ((a = Tl), a !== null && ((e = Go(a, f)), e !== 0 && e !== i.retryLane))
      )
        throw ((i.retryLane = e), la(l, e), rt(a, l, e), ic);
      return (co(n) || bi(), ai(l, t, f));
    }
    return co(n)
      ? ((t.flags |= 192), (t.child = l.child), null)
      : ((l = i.treeContext),
        (bl = pt(n.nextSibling)),
        (Gl = t),
        (Z = !0),
        (Au = null),
        (Ht = !1),
        l !== null && Gs(t, l),
        (t = vc(t, e.children)),
        (t.flags |= 134221824),
        t);
  }
  function ev(l, t, u) {
    l.lanes |= t;
    var a = l.alternate;
    (a !== null && (a.lanes |= t), qn(l.return, t, u));
  }
  function nv(l) {
    for (var t = null; l !== null;) {
      var u = l.alternate;
      (u !== null && Ln(u) === null && (t = l), (l = l.sibling));
    }
    return t;
  }
  function ei(l, t, u, a, e, n) {
    var i = l.memoizedState;
    i === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: u,
          tailMode: e,
          treeForkCount: n,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = a),
        (i.tail = u),
        (i.tailMode = e),
        (i.treeForkCount = n));
  }
  function dc(l) {
    var t = l.child;
    for (l.child = null; t !== null;) {
      var u = t.sibling;
      ((t.sibling = l.child), (l.child = t), (t = u));
    }
  }
  function rc(l, t, u) {
    var a = t.pendingProps,
      e = a.revealOrder,
      n = a.tail;
    a = a.children;
    var i = wl.current;
    if (t.flags & 128) return (pe(t, i), null);
    var f = (i & 2) !== 0;
    if (
      (f ? ((i = (i & 1) | 2), (t.flags |= 128)) : (i &= 1),
      pe(t, i),
      e === "backwards" && l !== null
        ? (dc(l), Bl(l, t, a, u), dc(l))
        : Bl(l, t, a, u),
      (a = Z ? Ae : 0),
      !f && l !== null && (l.flags & 128) !== 0)
    )
      l: for (l = t.child; l !== null;) {
        if (l.tag === 13) l.memoizedState !== null && ev(l, u, t);
        else if (l.tag === 19) ev(l, u, t);
        else if (l.child !== null) {
          ((l.child.return = l), (l = l.child));
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null;) {
          if (l.return === null || l.return === t) break l;
          l = l.return;
        }
        ((l.sibling.return = l.return), (l = l.sibling));
      }
    switch (e) {
      case "backwards":
        ((u = nv(t.child)),
          u === null
            ? ((e = t.child), (t.child = null))
            : ((e = u.sibling), (u.sibling = null), dc(t)),
          ei(t, !0, e, null, n, a));
        break;
      case "unstable_legacy-backwards":
        for (u = null, e = t.child, t.child = null; e !== null;) {
          if (((l = e.alternate), l !== null && Ln(l) === null)) {
            t.child = e;
            break;
          }
          ((l = e.sibling), (e.sibling = u), (u = e), (e = l));
        }
        ei(t, !0, u, null, n, a);
        break;
      case "together":
        ei(t, !1, null, null, void 0, a);
        break;
      case "independent":
        t.memoizedState = null;
        break;
      default:
        ((u = nv(t.child)),
          u === null
            ? ((e = t.child), (t.child = null))
            : ((e = u.sibling), (u.sibling = null)),
          ei(t, !1, e, u, n, a));
    }
    return t.child;
  }
  function iv(l, t, u) {
    var a = t.pendingProps;
    return (Du(t, t.type, a.value), Bl(l, t, a.children, u), t.child);
  }
  function yu(l, t, u) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (xu |= t.lanes),
      (u & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((ea(l, t, u, !1), (u & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(g(153));
    if (t.child !== null) {
      for (
        l = t.child, u = ou(l, l.pendingProps), t.child = u, u.return = t;
        l.sibling !== null;
      )
        ((l = l.sibling),
          (u = u.sibling = ou(l, l.pendingProps)),
          (u.return = t));
      u.sibling = null;
    }
    return t.child;
  }
  function mc(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && Yn(l)));
  }
  function Xm(l, t, u) {
    switch (t.tag) {
      case 3:
        (on(t, t.stateNode.containerInfo),
          Du(t, jl, l.memoizedState.cache),
          ua());
        break;
      case 27:
      case 5:
        Xi(t);
        break;
      case 4:
        on(t, t.stateNode.containerInfo);
        break;
      case 10:
        Du(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Gf(t), null);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null) {
          if (a.dehydrated !== null) return (ju(t), (t.flags |= 128), null);
          a = ea(l, t, u, !1);
          var e = t.child.childLanes;
          return a || (u & e) !== 0
            ? av(l, t, u)
            : (ju(t), (l = yu(l, t, u)), l !== null ? l.sibling : null);
        }
        ju(t);
        break;
      case 19:
        if (t.flags & 128) return rc(l, t, u);
        if (
          ((e = (l.flags & 128) !== 0),
          (a = (u & t.childLanes) !== 0),
          a || (ea(l, t, u, !1), (a = (u & t.childLanes) !== 0)),
          e)
        ) {
          if (a) return rc(l, t, u);
          t.flags |= 128;
        }
        if (
          ((e = t.memoizedState),
          e !== null &&
            ((e.rendering = null), (e.tail = null), (e.lastEffect = null)),
          pe(t, wl.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), k0(l, t, u, t.pendingProps));
      case 24:
        Du(t, jl, l.memoizedState.cache);
    }
    return yu(l, t, u);
  }
  function fv(l, t, u) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) ql = !0;
      else {
        if (!mc(l, u) && (t.flags & 128) === 0) return ((ql = !1), Xm(l, t, u));
        ql = (l.flags & 131072) !== 0;
      }
    else ((ql = !1), Z && (t.flags & 1048576) !== 0 && xs(t, Ae, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (((l = ca(t.elementType)), (t.type = l), typeof l == "function"))
            bf(l)
              ? ((a = da(l, a)), (t.tag = 1), (t = tv(null, t, l, a, u)))
              : ((t.tag = 0), (t = fc(null, t, l, a, u)));
          else {
            if (l != null) {
              var e = l.$$typeof;
              if (e === A) {
                ((t.tag = 11), (t = F0(null, t, l, a, u)));
                break l;
              } else if (e === Sl) {
                ((t.tag = 14), (t = $0(null, t, l, a, u)));
                break l;
              } else if (e === Al) {
                ((t.tag = 10), (t.type = l), (t = iv(null, t, u)));
                break l;
              }
            }
            throw ((t = tl(l) || l), Error(g(306, t, "")));
          }
        }
        return t;
      case 0:
        return fc(l, t, t.type, t.pendingProps, u);
      case 1:
        return ((a = t.type), (e = da(a, t.pendingProps)), tv(l, t, a, e, u));
      case 3:
        l: {
          if ((on(t, t.stateNode.containerInfo), l === null))
            throw Error(g(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          ((e = n.element), pf(l, t), je(t, a, null, u));
          var i = t.memoizedState;
          if (
            ((a = i.cache),
            Du(t, jl, a),
            a !== n.cache && Cf(t, [jl], u, !0),
            He(),
            (a = i.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: a, isDehydrated: !1, cache: i.cache }),
              (t.updateQueue.baseState = n),
              (t.memoizedState = n),
              t.flags & 256)
            ) {
              t = uv(l, t, a, u);
              break l;
            } else if (a !== e) {
              ((e = Mt(Error(g(424)), t)), Ne(e), (t = uv(l, t, a, u)));
              break l;
            } else
              for (
                l = t.stateNode.containerInfo,
                  l.nodeType === 9
                    ? (l = l.body)
                    : (l = l.nodeName === "HTML" ? l.ownerDocument.body : l),
                  bl = pt(l.firstChild),
                  Gl = t,
                  Z = !0,
                  Au = null,
                  Ht = !0,
                  u = ks(t, null, a, u),
                  t.child = u;
                u;
              )
                ((u.flags = (u.flags & -3) | 134221824), (u = u.sibling));
          else {
            if ((ua(), a === e)) {
              t = yu(l, t, u);
              break l;
            }
            Bl(l, t, a, u);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Va(l, t),
          l === null
            ? (u = Hd(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = u)
              : Z || (t.stateNode = vd(t.type, t.pendingProps, Tu.current, t))
            : (t.memoizedState = Hd(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Xi(t),
          l === null &&
            Z &&
            ((a = t.stateNode = Cd(t.type, t.pendingProps, Tu.current)),
            (Gl = t),
            (Ht = !0),
            (e = bl),
            Vu(t.type) ? ((so = e), (bl = pt(a.firstChild))) : (bl = e)),
          Bl(l, t, t.pendingProps.children, u),
          Va(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            Z &&
            ((e = a = bl) &&
              ((a = py(a, t.type, t.pendingProps, Ht)),
              a !== null
                ? ((t.stateNode = a),
                  (Gl = t),
                  (bl = pt(a.firstChild)),
                  (Ht = !1),
                  (e = !0))
                : (e = !1)),
            e || Nu(t)),
          Xi(t),
          (e = t.type),
          (n = t.pendingProps),
          (i = l !== null ? l.memoizedProps : null),
          (a = n.children),
          to(e, n) ? (a = null) : i !== null && to(e, i) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((e = Vf(l, t, Mm, null, null, u)), (ie._currentValue = e)),
          Va(l, t),
          Bl(l, t, a, u),
          t.child
        );
      case 6:
        return (
          l === null &&
            Z &&
            ((l = u = bl) &&
              ((u = qy(u, t.pendingProps, Ht)),
              u !== null
                ? ((t.stateNode = u), (Gl = t), (bl = null), (l = !0))
                : (l = !1)),
            l || Nu(t)),
          null
        );
      case 13:
        return av(l, t, u);
      case 4:
        return (
          on(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          l === null ? (t.child = sa(t, null, a, u)) : Bl(l, t, a, u),
          t.child
        );
      case 11:
        return F0(l, t, t.type, t.pendingProps, u);
      case 7:
        return ((a = t.pendingProps), Va(l, t), Bl(l, t, a, u), t.child);
      case 8:
        return (Bl(l, t, t.pendingProps.children, u), t.child);
      case 12:
        return (Bl(l, t, t.pendingProps.children, u), t.child);
      case 10:
        return iv(l, t, u);
      case 9:
        return (
          (e = t.type._context),
          (a = t.pendingProps.children),
          na(t),
          (e = Kl(e)),
          (a = a(e)),
          (t.flags |= 1),
          Bl(l, t, a, u),
          t.child
        );
      case 14:
        return $0(l, t, t.type, t.pendingProps, u);
      case 15:
        return W0(l, t, t.type, t.pendingProps, u);
      case 19:
        return rc(l, t, u);
      case 31:
        return xm(l, t, u);
      case 22:
        return k0(l, t, u, t.pendingProps);
      case 24:
        return (
          na(t),
          (a = Kl(jl)),
          l === null
            ? ((e = Uf()),
              e === null &&
                ((e = Tl),
                (n = Mf()),
                (e.pooledCache = n),
                n.refCount++,
                n !== null && (e.pooledCacheLanes |= u),
                (e = n)),
              (t.memoizedState = { parent: a, cache: e }),
              jf(t),
              Du(t, jl, e))
            : ((l.lanes & u) !== 0 && (pf(l, t), je(t, null, null, u), He()),
              (e = l.memoizedState),
              (n = t.memoizedState),
              e.parent !== a
                ? ((e = { parent: a, cache: a }),
                  (t.memoizedState = e),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = e),
                  Du(t, jl, a))
                : ((a = n.cache),
                  Du(t, jl, a),
                  a !== e.cache && Cf(t, [jl], u, !0))),
          Bl(l, t, t.pendingProps.children, u),
          t.child
        );
      case 30:
        return (
          t.stateNode === null &&
            (t.stateNode = {
              autoName: null,
              paired: null,
              clones: null,
              ref: null,
            }),
          (a = t.pendingProps),
          a.name != null && a.name !== "auto"
            ? (t.flags |= l === null ? 18882560 : 18874368)
            : Z && jn(t),
          l !== null && l.memoizedProps.name !== a.name
            ? (t.flags |= 4194816)
            : Va(l, t),
          Bl(l, t, a.children, u),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(g(156, t.tag));
  }
  function hu(l) {
    l.flags |= 4;
  }
  function yc(l, t, u, a, e) {
    var n;
    if (
      ((n = (l.mode & 32) !== 0) &&
        (n =
          u === null
            ? Yd(t, a)
            : Yd(t, a) && (a.src !== u.src || a.srcSet !== u.srcSet)),
      n)
    ) {
      if (((l.flags |= 16777216), (e & 335544128) === e))
        if (l.stateNode.complete) l.flags |= 8192;
        else if (Vv()) l.flags |= 8192;
        else throw ((oa = Xn), Hf);
    } else l.flags &= -16777217;
  }
  function cv(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !Bd(t)))
      if (Vv()) l.flags |= 8192;
      else throw ((oa = Xn), Hf);
  }
  function ni(l, t) {
    (t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? Yo() : 536870912), (l.lanes |= t), (wa |= t)));
  }
  function Ge(l, t) {
    if (!Z)
      switch (l.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var u = l.tail, a = null; u !== null;)
            (u.alternate !== null && (a = u), (u = u.sibling));
          a === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (a.sibling = null);
          break;
        default:
          for (t = l.tail, u = null; t !== null;)
            (t.alternate !== null && (u = t), (t = t.sibling));
          u === null ? (l.tail = null) : (u.sibling = null);
      }
  }
  function zl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      u = 0,
      a = 0;
    if (t)
      for (var e = l.child; e !== null;)
        ((u |= e.lanes | e.childLanes),
          (a |= e.subtreeFlags & 1206910976),
          (a |= e.flags & 1206910976),
          (e.return = l),
          (e = e.sibling));
    else
      for (e = l.child; e !== null;)
        ((u |= e.lanes | e.childLanes),
          (a |= e.subtreeFlags),
          (a |= e.flags),
          (e.return = l),
          (e = e.sibling));
    return ((l.subtreeFlags |= a), (l.childLanes = u), t);
  }
  function Qm(l, t, u) {
    var a = t.pendingProps;
    switch ((_f(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (zl(t), null);
      case 1:
        return (zl(t), null);
      case 3:
        return (
          (u = t.stateNode),
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          du(jl),
          Ta(),
          u.pendingContext &&
            ((u.context = u.pendingContext), (u.pendingContext = null)),
          (l === null || l.child === null) &&
            (qa(t)
              ? hu(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Nf())),
          zl(t),
          null
        );
      case 26:
        var e = t.type,
          n = t.memoizedState;
        return (
          l === null
            ? (hu(t),
              n !== null ? (zl(t), cv(t, n)) : (zl(t), yc(t, e, null, a, u)))
            : n
              ? n !== l.memoizedState
                ? (hu(t), zl(t), cv(t, n))
                : (zl(t), (t.flags &= -16777217))
              : ((l = l.memoizedProps),
                l !== a && hu(t),
                zl(t),
                yc(t, e, l, a, u)),
          null
        );
      case 27:
        if (
          (sn(t),
          (u = Tu.current),
          (e = t.type),
          l !== null && t.stateNode != null)
        )
          l.memoizedProps !== a && hu(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(g(166));
            return (zl(t), (t.subtreeFlags &= -33554433), null);
          }
          ((l = Lt.current),
            qa(t) ? Xs(t) : ((l = Cd(e, a, u)), (t.stateNode = l), hu(t)));
        }
        return (zl(t), (t.subtreeFlags &= -33554433), null);
      case 5:
        if ((sn(t), (e = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== a && hu(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(g(166));
            return (zl(t), (t.subtreeFlags &= -33554433), null);
          }
          if (((n = Lt.current), qa(t))) Xs(t);
          else {
            var i = We(Tu.current);
            switch (n) {
              case 1:
                n = i.createElementNS("http://www.w3.org/2000/svg", e);
                break;
              case 2:
                n = i.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                break;
              default:
                switch (e) {
                  case "svg":
                    n = i.createElementNS("http://www.w3.org/2000/svg", e);
                    break;
                  case "math":
                    n = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e,
                    );
                    break;
                  case "script":
                    ((n = i.createElement("div")),
                      (n.innerHTML = "<script><\/script>"),
                      (n = n.removeChild(n.firstChild)));
                    break;
                  case "select":
                    ((n =
                      typeof a.is == "string"
                        ? i.createElement("select", { is: a.is })
                        : i.createElement("select")),
                      a.multiple
                        ? (n.multiple = !0)
                        : a.size && (n.size = a.size));
                    break;
                  default:
                    n =
                      typeof a.is == "string"
                        ? i.createElement(e, { is: a.is })
                        : i.createElement(e);
                }
            }
            ((n[Ll] = t), (n[ct] = a));
            l: for (i = t.child; i !== null;) {
              if (i.tag === 5 || i.tag === 6) n.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                ((i.child.return = i), (i = i.child));
                continue;
              }
              if (i === t) break l;
              for (; i.sibling === null;) {
                if (i.return === null || i.return === t) break l;
                i = i.return;
              }
              ((i.sibling.return = i.return), (i = i.sibling));
            }
            t.stateNode = n;
            l: switch (($l(n, e, a), e)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = !0;
                break l;
              default:
                a = !1;
            }
            a && hu(t);
          }
        }
        return (
          zl(t),
          (t.subtreeFlags &= -33554433),
          yc(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, u),
          null
        );
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== a && hu(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(g(166));
          if (((l = Tu.current), qa(t))) {
            if (
              ((l = t.stateNode),
              (u = t.memoizedProps),
              (a = null),
              (e = Gl),
              e !== null)
            )
              switch (e.tag) {
                case 27:
                case 5:
                  a = e.memoizedProps;
              }
            ((l[Ll] = t),
              (l = !!(
                l.nodeValue === u ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                fd(l.nodeValue, u)
              )),
              l || Nu(t, !0));
          } else
            ((l = We(l).createTextNode(a)), (l[Ll] = t), (t.stateNode = l));
        }
        return (zl(t), null);
      case 31:
        if (((u = t.memoizedState), l === null || l.memoizedState !== null)) {
          if (((a = qa(t)), u !== null)) {
            if (l === null) {
              if (!a) throw Error(g(318));
              if (
                ((l = t.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(g(557));
              l[Ll] = t;
            } else
              (ua(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (zl(t), (l = !1));
          } else
            ((u = Nf()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = u),
              (l = !0));
          if (!l) return t.flags & 256 ? (Tt(t), t) : (Tt(t), null);
          if ((t.flags & 128) !== 0) throw Error(g(558));
        }
        return (zl(t), null);
      case 13:
        if (
          ((a = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((e = qa(t)), a !== null && a.dehydrated !== null)) {
            if (l === null) {
              if (!e) throw Error(g(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(g(317));
              e[Ll] = t;
            } else
              (ua(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (zl(t), (e = !1));
          } else
            ((e = Nf()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = e),
              (e = !0));
          if (!e) return t.flags & 256 ? (Tt(t), t) : (Tt(t), null);
        }
        return (
          Tt(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = u), t)
            : ((u = a !== null),
              (l = l !== null && l.memoizedState !== null),
              u &&
                ((a = t.child),
                (e = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (e = a.alternate.memoizedState.cachePool.pool),
                (n = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (n = a.memoizedState.cachePool.pool),
                n !== e && (a.flags |= 2048)),
              u !== l && u && (t.child.flags |= 8192),
              ni(t, t.updateQueue),
              zl(t),
              null)
        );
      case 4:
        return (
          Ta(),
          l === null && Wc(t.stateNode.containerInfo),
          (t.flags |= 67108864),
          zl(t),
          null
        );
      case 10:
        return (du(t.type), zl(t), null);
      case 19:
        if ((Xf(t), (a = t.memoizedState), a === null)) return (zl(t), null);
        if (((e = (t.flags & 128) !== 0), (n = a.rendering), n === null))
          if (e) Ge(a, !1);
          else {
            if (Rl !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null;) {
                if (((n = Ln(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      Ge(a, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      ni(t, l),
                      t.subtreeFlags = 0,
                      l = u,
                      u = t.child;
                    u !== null;
                  )
                    (qs(u, l), (u = u.sibling));
                  return (
                    pe(t, (wl.current & 1) | 2),
                    Z && su(t, a.treeForkCount),
                    t.child
                  );
                }
                l = l.sibling;
              }
            a.tail !== null &&
              mt() > gi &&
              ((t.flags |= 128), (e = !0), Ge(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!e)
            if (((l = Ln(n)), l !== null)) {
              if (
                ((t.flags |= 128),
                (e = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                ni(t, l),
                Ge(a, !0),
                a.tail === null &&
                  a.tailMode !== "collapsed" &&
                  a.tailMode !== "visible" &&
                  !n.alternate &&
                  !Z)
              )
                return (zl(t), null);
            } else
              2 * mt() - a.renderingStartTime > gi &&
                u !== 536870912 &&
                ((t.flags |= 128), (e = !0), Ge(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = a.last),
              l !== null ? (l.sibling = n) : (t.child = n),
              (a.last = n));
        }
        if (a.tail !== null) {
          l = a.tail;
          l: {
            for (u = l; u !== null;) {
              if (u.alternate !== null) {
                u = !1;
                break l;
              }
              u = u.sibling;
            }
            u = !0;
          }
          return (
            (a.rendering = l),
            (a.tail = l.sibling),
            (a.renderingStartTime = mt()),
            (l.sibling = null),
            (n = wl.current),
            (n = e ? (n & 1) | 2 : n & 1),
            a.tailMode === "visible" || a.tailMode === "collapsed" || !u || Z
              ? pe(t, n)
              : ((u = n), El(Jl, t), El(wl, u), Il === null && (Il = t)),
            Z && su(t, a.treeForkCount),
            l
          );
        }
        return (zl(t), null);
      case 22:
      case 23:
        return (
          Tt(t),
          xf(),
          (a = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (u & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (zl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : zl(t),
          (u = t.updateQueue),
          u !== null && ni(t, u.retryQueue),
          (u = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (u = l.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== u && (t.flags |= 2048),
          l !== null && Zl(fa),
          null
        );
      case 24:
        return (
          (u = null),
          l !== null && (u = l.memoizedState.cache),
          t.memoizedState.cache !== u && (t.flags |= 2048),
          du(jl),
          zl(t),
          null
        );
      case 25:
        return null;
      case 30:
        return ((t.flags |= 33554432), zl(t), null);
    }
    throw Error(g(156, t.tag));
  }
  function Vm(l, t) {
    switch ((_f(t), t.tag)) {
      case 1:
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          du(jl),
          Ta(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (sn(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((Tt(t), t.alternate === null)) throw Error(g(340));
          ua();
        }
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 13:
        if (
          (Tt(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(g(340));
          ua();
        }
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return (
          Xf(t),
          (l = t.flags),
          l & 65536
            ? ((t.flags = (l & -65537) | 128),
              (l = t.memoizedState),
              l !== null && ((l.rendering = null), (l.tail = null)),
              (t.flags |= 4),
              t)
            : null
        );
      case 4:
        return (Ta(), null);
      case 10:
        return (du(t.type), null);
      case 22:
      case 23:
        return (
          Tt(t),
          xf(),
          l !== null && Zl(fa),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return (du(jl), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ov(l, t) {
    switch ((_f(t), t.tag)) {
      case 3:
        (du(jl), Ta());
        break;
      case 26:
      case 27:
      case 5:
        sn(t);
        break;
      case 4:
        Ta();
        break;
      case 31:
        t.memoizedState !== null && Tt(t);
        break;
      case 13:
        Tt(t);
        break;
      case 19:
        Xf(t);
        break;
      case 10:
        du(t.type);
        break;
      case 22:
      case 23:
        (Tt(t), xf(), l !== null && Zl(fa));
        break;
      case 24:
        du(jl);
    }
  }
  function Xe(l, t) {
    try {
      var u = t.updateQueue,
        a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var e = a.next;
        u = e;
        do {
          if ((u.tag & l) === l) {
            a = void 0;
            var n = u.create,
              i = u.inst;
            ((a = n()), (i.destroy = a));
          }
          u = u.next;
        } while (u !== e);
      }
    } catch (f) {
      dl(t, t.return, f);
    }
  }
  function qu(l, t, u) {
    try {
      var a = t.updateQueue,
        e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var i = a.inst,
              f = i.destroy;
            if (f !== void 0) {
              ((i.destroy = void 0), (e = t));
              var c = u,
                r = f;
              try {
                r();
              } catch (h) {
                dl(e, c, h);
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (h) {
      dl(t, t.return, h);
    }
  }
  function sv(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var u = l.stateNode;
      try {
        Ps(t, u);
      } catch (a) {
        dl(l, l.return, a);
      }
    }
  }
  function vv(l, t, u) {
    ((u.props = da(l.type, l.memoizedProps)), (u.state = l.memoizedState));
    try {
      u.componentWillUnmount();
    } catch (a) {
      dl(l, t, a);
    }
  }
  function Ft(l, t) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            var e = l.stateNode,
              n = fu(l.memoizedProps, e);
            ((e.ref === null || e.ref.name !== n) && (e.ref = Sd(n)),
              (a = e.ref));
            break;
          case 7:
            if (l.stateNode === null) {
              var i = new _t(l);
              (S(l.child, !1, Hy, i, void 0, void 0), (l.stateNode = i));
            }
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof u == "function" ? (l.refCleanup = u(a)) : (u.current = a);
      }
    } catch (f) {
      dl(l, t, f);
    }
  }
  function Fl(l, t) {
    var u = l.ref,
      a = l.refCleanup;
    if (u !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (e) {
          dl(l, t, e);
        } finally {
          ((l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null));
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (e) {
          dl(l, t, e);
        }
      else u.current = null;
  }
  function ii(l, t) {
    if (
      (l.tag === 5 || l.tag === 27 || l.tag === 6) &&
      l.alternate === null &&
      t !== null
    )
      for (var u = 0; u < t.length; u++) _d(l.stateNode, t[u]);
  }
  function dv(l) {
    for (
      var t = l.return;
      t !== null && (gc(t) && _d(l.stateNode, t.stateNode), !hc(t));
    )
      t = t.return;
  }
  function Qe(l) {
    for (
      var t = l.return;
      t !== null && (gc(t) && jy(l.stateNode, t.stateNode), !hc(t));
    )
      t = t.return;
  }
  function hc(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 27;
  }
  function gc(l) {
    return l && l.tag === 7 && l.stateNode !== null;
  }
  function Sc(l) {
    var t = l.type,
      u = l.memoizedProps,
      a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && a.focus();
          break l;
        case "img":
          u.src ? (a.src = u.src) : u.srcSet && (a.srcset = u.srcSet);
      }
    } catch (e) {
      dl(l, l.return, e);
    }
  }
  function Tc(l, t, u) {
    try {
      var a = l.stateNode;
      (my(a, l.type, u, t), (a[ct] = t));
    } catch (e) {
      dl(l, l.return, e);
    }
  }
  function rv(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && Vu(l.type)) ||
      l.tag === 4
    );
  }
  function Ec(l) {
    l: for (;;) {
      for (; l.sibling === null;) {
        if (l.return === null || rv(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;
      ) {
        if (
          (l.tag === 27 && Vu(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        ((l.child.return = l), (l = l.child));
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function bc(l, t, u, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      ((e = l.stateNode),
        t
          ? (u.nodeType === 9
              ? u.body
              : u.nodeName === "HTML"
                ? u.ownerDocument.body
                : u
            ).insertBefore(e, t)
          : ((t =
              u.nodeType === 9
                ? u.body
                : u.nodeName === "HTML"
                  ? u.ownerDocument.body
                  : u),
            t.appendChild(e),
            (u = u._reactRootContainer),
            u != null || t.onclick !== null || (t.onclick = Kt)),
        ii(l, a),
        (ul = !0));
    else if (
      e !== 4 &&
      (e === 27 &&
        (ii(l, a), (a = null), Vu(l.type) && ((u = l.stateNode), (t = null))),
      (l = l.child),
      l !== null)
    )
      for (bc(l, t, u, a), l = l.sibling; l !== null;)
        (bc(l, t, u, a), (l = l.sibling));
  }
  function fi(l, t, u, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      ((e = l.stateNode),
        t ? u.insertBefore(e, t) : u.appendChild(e),
        ii(l, a),
        (ul = !0));
    else if (
      e !== 4 &&
      (e === 27 && (ii(l, a), (a = null), Vu(l.type) && (u = l.stateNode)),
      (l = l.child),
      l !== null)
    )
      for (fi(l, t, u, a), l = l.sibling; l !== null;)
        (fi(l, t, u, a), (l = l.sibling));
  }
  function mv(l) {
    var t = l.stateNode,
      u = l.memoizedProps;
    try {
      for (var a = l.type, e = t.attributes; e.length;)
        t.removeAttributeNode(e[0]);
      ($l(t, a, u), (t[Ll] = l), (t[ct] = u));
    } catch (n) {
      dl(l, l.return, n);
    }
  }
  var ci = !1,
    Et = null;
  function yv(l) {
    (l.tag === 30 || (l.subtreeFlags & 33554432) !== 0) && (ci = !0);
  }
  var $t = null;
  function hv() {
    var l = $t;
    return (($t = null), l);
  }
  var st = 0;
  function Za(l, t, u, a, e) {
    return ((st = 0), gv(l.child, t, u, a, e));
  }
  function gv(l, t, u, a, e) {
    for (var n = !1; l !== null;) {
      if (l.tag === 5) {
        var i = l.stateNode;
        if (a !== null) {
          var f = eo(i);
          (a.push(f), f.view && (n = !0));
        } else n || (eo(i).view && (n = !0));
        ((ci = !0), hd(i, st === 0 ? t : t + "_" + st, u), st++);
      } else
        (l.tag !== 22 || l.memoizedState === null) &&
          ((l.tag === 30 && e) || (gv(l.child, t, u, a, e) && (n = !0)));
      l = l.sibling;
    }
    return n;
  }
  function Wt(l, t) {
    for (; l !== null;)
      (l.tag === 5
        ? gd(l.stateNode, l.memoizedProps)
        : (l.tag !== 22 || l.memoizedState === null) &&
          ((l.tag === 30 && t) || Wt(l.child, t)),
        (l = l.sibling));
  }
  function oi(l) {
    if ((l.subtreeFlags & 18874368) !== 0)
      for (l = l.child; l !== null;) {
        if (
          (l.tag !== 22 || l.memoizedState === null) &&
          (oi(l),
          l.tag === 30 && (l.flags & 18874368) !== 0 && l.stateNode.paired)
        ) {
          var t = l.memoizedProps;
          if (t.name == null || t.name === "auto") throw Error(g(544));
          var u = t.name;
          ((t = cu(t.default, t.share)),
            t !== "none" && (Za(l, u, t, null, !1) || Wt(l.child, !1)));
        }
        l = l.sibling;
      }
  }
  function zc(l, t) {
    if (l.tag === 30) {
      var u = l.stateNode,
        a = l.memoizedProps,
        e = fu(a, u),
        n = cu(a.default, u.paired ? a.share : a.enter);
      n !== "none"
        ? Za(l, e, n, null, !1)
          ? (oi(l), u.paired || t || ka(l, a.onEnter))
          : Wt(l.child, !1)
        : oi(l);
    } else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null;) (zc(l, t), (l = l.sibling));
    else oi(l);
  }
  function Oc(l) {
    if (Et !== null && Et.size !== 0) {
      var t = Et;
      if ((l.subtreeFlags & 18874368) !== 0)
        for (l = l.child; l !== null;) {
          if (l.tag !== 22 || l.memoizedState === null) {
            if (l.tag === 30 && (l.flags & 18874368) !== 0) {
              var u = l.memoizedProps,
                a = u.name;
              if (a != null && a !== "auto") {
                var e = t.get(a);
                if (e !== void 0) {
                  var n = cu(u.default, u.share);
                  if (
                    (n !== "none" &&
                      (Za(l, a, n, null, !1)
                        ? ((n = l.stateNode),
                          (e.paired = n),
                          (n.paired = e),
                          ka(l, u.onShare))
                        : Wt(l.child, !1)),
                    t.delete(a),
                    t.size === 0)
                  )
                    break;
                }
              }
            }
            Oc(l);
          }
          l = l.sibling;
        }
    }
  }
  function _c(l) {
    if (l.tag === 30) {
      var t = l.memoizedProps,
        u = fu(t, l.stateNode),
        a = Et !== null ? Et.get(u) : void 0,
        e = cu(t.default, a !== void 0 ? t.share : t.exit);
      (e !== "none" &&
        (Za(l, u, e, null, !1)
          ? a !== void 0
            ? ((e = l.stateNode),
              (a.paired = e),
              (e.paired = a),
              Et.delete(u),
              ka(l, t.onShare))
            : ka(l, t.onExit)
          : Wt(l.child, !1)),
        Et !== null && Oc(l));
    } else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null;) (_c(l), (l = l.sibling));
    else Et !== null && Oc(l);
  }
  function Sv(l) {
    for (l = l.child; l !== null;) {
      if (l.tag === 30) {
        var t = l.memoizedProps,
          u = fu(t, l.stateNode);
        ((t = cu(t.default, t.update)),
          (l.flags &= -5),
          t !== "none" && Za(l, u, t, (l.memoizedState = []), !1));
      } else (l.subtreeFlags & 33554432) !== 0 && Sv(l);
      l = l.sibling;
    }
  }
  function Ac(l) {
    if ((l.subtreeFlags & 18874368) !== 0)
      for (l = l.child; l !== null;) {
        if (l.tag !== 22 || l.memoizedState === null) {
          if (l.tag === 30 && (l.flags & 18874368) !== 0) {
            var t = l.stateNode;
            t.paired !== null && ((t.paired = null), Wt(l.child, !1));
          }
          Ac(l);
        }
        l = l.sibling;
      }
  }
  function si(l) {
    if (l.tag === 30) ((l.stateNode.paired = null), Wt(l.child, !1), Ac(l));
    else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null;) (si(l), (l = l.sibling));
    else Ac(l);
  }
  function Tv(l) {
    for (l = l.child; l !== null;)
      (l.tag === 30
        ? Wt(l.child, !1)
        : (l.subtreeFlags & 33554432) !== 0 && Tv(l),
        (l = l.sibling));
  }
  function Nc(l, t, u, a, e, n, i) {
    for (var f = !1; t !== null;) {
      if (t.tag === 5) {
        var c = t.stateNode;
        if (n !== null && st < n.length) {
          var r = n[st],
            h = eo(c);
          (r.view || h.view) && (f = !0);
          var E;
          if ((E = (l.flags & 4) === 0))
            if (h.clip) E = !0;
            else {
              E = r.rect;
              var v = h.rect;
              E =
                E.y !== v.y ||
                E.x !== v.x ||
                E.height !== v.height ||
                E.width !== v.width;
            }
          (E && (l.flags |= 4),
            h.abs
              ? (h = !r.abs)
              : ((r = r.rect),
                (h = h.rect),
                (h = r.height !== h.height || r.width !== h.width)),
            h && (l.flags |= 32));
        } else l.flags |= 32;
        ((l.flags & 4) !== 0 && hd(c, st === 0 ? u : u + "_" + st, e),
          (f && (l.flags & 4) !== 0) ||
            ($t === null && ($t = []),
            $t.push(c, st === 0 ? a : a + "_" + st, t.memoizedProps)),
          st++);
      } else
        (t.tag !== 22 || t.memoizedState === null) &&
          (t.tag === 30 && i
            ? (l.flags |= t.flags & 32)
            : Nc(l, t.child, u, a, e, n, i) && (f = !0));
      t = t.sibling;
    }
    return f;
  }
  function Ev(l, t) {
    for (l = l.child; l !== null;) {
      if (l.tag === 30) {
        var u = l.memoizedProps,
          a = l.stateNode,
          e = fu(u, a),
          n = cu(u.default, u.update),
          i;
        ((i = l.memoizedState), (l.memoizedState = null), (a = l));
        var f = l.child;
        ((st = 0),
          (e = Nc(a, f, e, e, n, i, !1)),
          (l.flags & 4) !== 0 && e && ka(l, u.onUpdate));
      } else (l.subtreeFlags & 33554432) !== 0 && Ev(l);
      l = l.sibling;
    }
  }
  var Xl = !1,
    il = !1,
    kt = !1,
    Dc = !1,
    bv = typeof WeakSet == "function" ? WeakSet : Set,
    Ql = null,
    It = !1,
    Ve = !1,
    vi = !1,
    Cc = !1;
  function Zm(l, t, u) {
    if (((l = l.containerInfo), (Pc = fe), (l = As(l)), mf(l))) {
      if ("selectionStart" in l)
        var a = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          a = ((a = l.ownerDocument) && a.defaultView) || window;
          var e = a.getSelection && a.getSelection();
          if (e && e.rangeCount !== 0) {
            a = e.anchorNode;
            var n = e.anchorOffset,
              i = e.focusNode;
            e = e.focusOffset;
            try {
              (a.nodeType, i.nodeType);
            } catch {
              a = null;
              break l;
            }
            var f = 0,
              c = -1,
              r = -1,
              h = 0,
              E = 0,
              v = l,
              y = null;
            t: for (;;) {
              for (
                var _;
                v !== a || (n !== 0 && v.nodeType !== 3) || (c = f + n),
                  v !== i || (e !== 0 && v.nodeType !== 3) || (r = f + e),
                  v.nodeType === 3 && (f += v.nodeValue.length),
                  (_ = v.firstChild) !== null;
              )
                ((y = v), (v = _));
              for (;;) {
                if (v === l) break t;
                if (
                  (y === a && ++h === n && (c = f),
                  y === i && ++E === e && (r = f),
                  (_ = v.nextSibling) !== null)
                )
                  break;
                ((v = y), (y = v.parentNode));
              }
              v = _;
            }
            a = c === -1 || r === -1 ? null : { start: c, end: r };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      lo = { focusedElem: l, selectionRange: a },
        fe = !1,
        u = (u & 335544064) === u,
        Ql = t,
        t = u ? 9270 : 1024;
      Ql !== null;
    ) {
      if (((l = Ql), u && ((a = l.deletions), a !== null)))
        for (n = 0; n < a.length; n++) u && _c(a[n]);
      if (l.alternate === null && (l.flags & 2) !== 0) (u && yv(l), di(u));
      else {
        if (l.tag === 22) {
          if (((a = l.alternate), l.memoizedState !== null)) {
            (a !== null && a.memoizedState === null && u && _c(a), di(u));
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            (u && yv(l), di(u));
            continue;
          }
        }
        ((a = l.child),
          (l.subtreeFlags & t) !== 0 && a !== null
            ? ((a.return = l), (Ql = a))
            : (u && Sv(l), di(u)));
      }
    }
    Et = null;
  }
  function di(l) {
    for (; Ql !== null;) {
      var t = Ql,
        u = l,
        a = t.alternate,
        e = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((e & 1024) !== 0 && a !== null) {
            ((u = void 0), (e = a.memoizedProps), (a = a.memoizedState));
            var n = t.stateNode;
            try {
              var i = da(t.type, e);
              ((u = n.getSnapshotBeforeUpdate(i, a)),
                (n.__reactInternalSnapshotBeforeUpdate = u));
            } catch (f) {
              dl(t, t.return, f);
            }
          }
          break;
        case 3:
          if ((e & 1024) !== 0) {
            if (((a = t.stateNode.containerInfo), (u = a.nodeType), u === 9))
              fo(a);
            else if (u === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  fo(a);
                  break;
                default:
                  a.textContent = "";
              }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          u &&
            a !== null &&
            ((u = fu(a.memoizedProps, a.stateNode)),
            (e = t.memoizedProps),
            (e = cu(e.default, e.update)),
            e !== "none" && Za(a, u, e, (a.memoizedState = []), !0));
          break;
        default:
          if ((e & 1024) !== 0) throw Error(g(163));
      }
      if (((a = t.sibling), a !== null)) {
        ((a.return = t.return), (Ql = a));
        break;
      }
      Ql = t.return;
    }
  }
  function zv(l, t, u) {
    var a = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        (Pt(l, u), a & 4 && Xe(5, u));
        break;
      case 1:
        if ((Pt(l, u), a & 4))
          if (((l = u.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (i) {
              dl(u, u.return, i);
            }
          else {
            var e = da(u.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(e, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              dl(u, u.return, i);
            }
          }
        (a & 64 && sv(u), a & 512 && Ft(u, u.return));
        break;
      case 3:
        if ((Pt(l, u), a & 64 && ((l = u.updateQueue), l !== null))) {
          if (((t = null), u.child !== null))
            switch (u.child.tag) {
              case 27:
              case 5:
                t = u.child.stateNode;
                break;
              case 1:
                t = u.child.stateNode;
            }
          try {
            Ps(l, t);
          } catch (i) {
            dl(u, u.return, i);
          }
        }
        break;
      case 27:
        t === null && a & 4 && mv(u);
      case 26:
      case 5:
        (Pt(l, u), t === null && a & 4 && Sc(u), a & 512 && Ft(u, u.return));
        break;
      case 12:
        Pt(l, u);
        break;
      case 31:
        (Pt(l, u), a & 4 && Nv(l, u));
        break;
      case 13:
        (Pt(l, u),
          a & 4 && Dv(l, u),
          a & 64 &&
            ((l = u.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((u = ty.bind(null, u)), Yy(l, u)))));
        break;
      case 22:
        if (((a = u.memoizedState !== null || Xl), !a)) {
          var n = (t !== null && t.memoizedState !== null) || il;
          ((t = Xl),
            (e = il),
            (Xl = a),
            (il = n) && !e
              ? ((a = 2),
                (u.subtreeFlags & 8772) !== 0 && (a |= 1),
                Xt(l, u, a))
              : Pt(l, u),
            (Xl = t),
            (il = e));
        }
        break;
      case 30:
        (Pt(l, u), a & 512 && Ft(u, u.return));
        break;
      case 7:
        a & 512 && Ft(u, u.return);
      default:
        Pt(l, u);
    }
  }
  function Mc(l, t) {
    for (l = l.child; l !== null;) (Ov(l, t), (l = l.sibling));
  }
  function Ov(l, t) {
    switch (l.tag) {
      case 5:
      case 26:
        try {
          var u = l.stateNode;
          if (t) {
            var a = u.style;
            typeof a.setProperty == "function"
              ? a.setProperty("display", "none", "important")
              : (a.display = "none");
          } else {
            var e = l.stateNode,
              n = l.memoizedProps.style,
              i = n != null && n.hasOwnProperty("display") ? n.display : null;
            e.style.display =
              i == null || typeof i == "boolean" ? "" : ("" + i).trim();
          }
        } catch (c) {
          dl(l, l.return, c);
        }
        Rc(l, t);
        break;
      case 6:
        try {
          ((l.stateNode.nodeValue = t ? "" : l.memoizedProps), (ul = !0));
        } catch (c) {
          dl(l, l.return, c);
        }
        break;
      case 18:
        try {
          var f = l.stateNode;
          t ? yd(f, !0) : yd(l.stateNode, !1);
        } catch (c) {
          dl(l, l.return, c);
        }
        break;
      case 22:
      case 23:
        l.memoizedState === null && Mc(l, t);
        break;
      default:
        Mc(l, t);
    }
  }
  function Rc(l, t) {
    if (l.subtreeFlags & 67108864)
      for (l = l.child; l !== null;) {
        l: {
          var u = l,
            a = t;
          switch (u.tag) {
            case 4:
              Ov(u, a);
              break l;
            case 22:
              u.memoizedState === null && Rc(u, a);
              break l;
            default:
              Rc(u, a);
          }
        }
        l = l.sibling;
      }
  }
  function _v(l) {
    var t = l.alternate;
    (t !== null && ((l.alternate = null), _v(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && gn(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null));
  }
  var Nl = null,
    vt = !1;
  function xt(l, t, u) {
    for (u = u.child; u !== null;) (Av(l, t, u), (u = u.sibling));
  }
  function Av(l, t, u) {
    if (yt && typeof yt.onCommitFiberUnmount == "function")
      try {
        yt.onCommitFiberUnmount(ve, u);
      } catch {}
    switch (u.tag) {
      case 26:
        (il || Fl(u, t),
          xt(l, t, u),
          u.memoizedState
            ? u.memoizedState.count--
            : u.stateNode &&
              !il &&
              ((u = u.stateNode), u.parentNode.removeChild(u)));
        break;
      case 27:
        (il || Fl(u, t), Qe(u));
        var a = Nl,
          e = vt;
        (Vu(u.type) && ((Nl = u.stateNode), (vt = !1)),
          xt(l, t, u),
          Md(u.stateNode, u.type, u.memoizedProps),
          (Nl = a),
          (vt = e));
        break;
      case 5:
        (il || Fl(u, t), Qe(u));
      case 6:
        if (
          (u.tag === 6 && Qe(u),
          (a = Nl),
          (e = vt),
          (Nl = null),
          xt(l, t, u),
          (Nl = a),
          (vt = e),
          Nl !== null)
        )
          if (vt)
            try {
              ((Nl.nodeType === 9
                ? Nl.body
                : Nl.nodeName === "HTML"
                  ? Nl.ownerDocument.body
                  : Nl
              ).removeChild(u.stateNode),
                (ul = !0));
            } catch (n) {
              dl(u, t, n);
            }
          else
            try {
              (Nl.removeChild(u.stateNode), (ul = !0));
            } catch (n) {
              dl(u, t, n);
            }
        break;
      case 18:
        Nl !== null &&
          (vt
            ? ((l = Nl),
              md(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                    ? l.ownerDocument.body
                    : l,
                u.stateNode,
              ),
              ce(l))
            : md(Nl, u.stateNode));
        break;
      case 4:
        ((a = Nl),
          (e = vt),
          (Nl = u.stateNode.containerInfo),
          (vt = !0),
          xt(l, t, u),
          (Nl = a),
          (vt = e));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (qu(2, u, t), il || qu(4, u, t), xt(l, t, u));
        break;
      case 1:
        (il ||
          (Fl(u, t),
          (a = u.stateNode),
          typeof a.componentWillUnmount == "function" && vv(u, t, a)),
          xt(l, t, u));
        break;
      case 21:
        xt(l, t, u);
        break;
      case 22:
        ((il = (a = il) || u.memoizedState !== null), xt(l, t, u), (il = a));
        break;
      case 30:
        (Fl(u, t), xt(l, t, u));
        break;
      case 7:
        (il || Fl(u, t), xt(l, t, u));
        break;
      default:
        xt(l, t, u);
    }
  }
  function Nv(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate), l !== null && ((l = l.memoizedState), l !== null))
    ) {
      l = l.dehydrated;
      try {
        ce(l);
      } catch (u) {
        dl(t, t.return, u);
      }
    }
  }
  function Dv(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        ce(l);
      } catch (u) {
        dl(t, t.return, u);
      }
  }
  function Lm(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return (t === null && (t = l.stateNode = new bv()), t);
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new bv()),
          t
        );
      default:
        throw Error(g(435, l.tag));
    }
  }
  function ri(l, t) {
    var u = Lm(l);
    t.forEach(function (a) {
      if (!u.has(a)) {
        u.add(a);
        var e = uy.bind(null, l, a);
        a.then(e, e);
      }
    });
  }
  function et(l, t, u) {
    var a = t.deletions;
    if (a !== null)
      for (var e = 0; e < a.length; e++) {
        var n = a[e],
          i = l,
          f = t,
          c = f;
        l: for (; c !== null;) {
          switch (c.tag) {
            case 27:
              if (Vu(c.type)) {
                ((Nl = c.stateNode), (vt = !1));
                break l;
              }
              break;
            case 5:
              ((Nl = c.stateNode), (vt = !1));
              break l;
            case 3:
            case 4:
              ((Nl = c.stateNode.containerInfo), (vt = !0));
              break l;
          }
          c = c.return;
        }
        if (Nl === null) throw Error(g(160));
        (Av(i, f, n),
          (Nl = null),
          (vt = !1),
          (i = n.alternate),
          i !== null && (i.return = null),
          (n.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null;) (Cv(t, l, u), (t = t.sibling));
  }
  var Gt = null;
  function Cv(l, t, u) {
    var a = l.alternate,
      e = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          e & 4 &&
          ((a = l.updateQueue), (a = a !== null ? a.events : null), a !== null)
        )
          for (var n = 0; n < a.length; n++) {
            var i = a[n];
            i.ref.impl = i.nextImpl;
          }
        (et(t, l, u),
          nt(l),
          e & 4 && (qu(3, l, l.return), Xe(3, l), qu(5, l, l.return)));
        break;
      case 1:
        (et(t, l, u),
          nt(l),
          e & 512 && (il || a === null || Fl(a, a.return)),
          e & 64 &&
            Xl &&
            ((l = l.updateQueue),
            l !== null &&
              ((t = l.callbacks),
              t !== null &&
                ((u = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = u === null ? t : u.concat(t))))));
        break;
      case 26:
        if (
          ((n = Gt),
          et(t, l, u),
          nt(l),
          e & 512 && (il || a === null || Fl(a, a.return)),
          e & 4)
        )
          if (
            ((e = a !== null ? a.memoizedState : null),
            (u = l.memoizedState),
            a === null)
          )
            if (u === null)
              if (l.stateNode === null)
                if (Xl)
                  l.stateNode = vd(l.type, l.memoizedProps, t.containerInfo, l);
                else {
                  l: {
                    ((t = l.type),
                      (u = l.memoizedProps),
                      (e = n.ownerDocument || n));
                    t: switch (t) {
                      case "title":
                        ((a = e.getElementsByTagName("title")[0]),
                          (!a ||
                            a[me] ||
                            a[Ll] ||
                            a.namespaceURI === "http://www.w3.org/2000/svg" ||
                            a.hasAttribute("itemprop")) &&
                            ((a = e.createElement(t)),
                            e.head.insertBefore(
                              a,
                              e.querySelector("head > title"),
                            )),
                          $l(a, t, u),
                          (a[Ll] = l),
                          xl(a),
                          (t = a));
                        break l;
                      case "link":
                        if (
                          (n = qd("link", "href", e).get(t + (u.href || "")))
                        ) {
                          for (i = 0; i < n.length; i++)
                            if (
                              ((a = n[i]),
                              a.getAttribute("href") ===
                                (u.href == null || u.href === ""
                                  ? null
                                  : u.href) &&
                                a.getAttribute("rel") ===
                                  (u.rel == null ? null : u.rel) &&
                                a.getAttribute("title") ===
                                  (u.title == null ? null : u.title) &&
                                a.getAttribute("crossorigin") ===
                                  (u.crossOrigin == null
                                    ? null
                                    : u.crossOrigin))
                            ) {
                              n.splice(i, 1);
                              break t;
                            }
                        }
                        ((a = e.createElement(t)),
                          $l(a, t, u),
                          e.head.appendChild(a));
                        break;
                      case "meta":
                        if (
                          (n = qd("meta", "content", e).get(
                            t + (u.content || ""),
                          ))
                        ) {
                          for (i = 0; i < n.length; i++)
                            if (
                              ((a = n[i]),
                              a.getAttribute("content") ===
                                (u.content == null ? null : "" + u.content) &&
                                a.getAttribute("name") ===
                                  (u.name == null ? null : u.name) &&
                                a.getAttribute("property") ===
                                  (u.property == null ? null : u.property) &&
                                a.getAttribute("http-equiv") ===
                                  (u.httpEquiv == null ? null : u.httpEquiv) &&
                                a.getAttribute("charset") ===
                                  (u.charSet == null ? null : u.charSet))
                            ) {
                              n.splice(i, 1);
                              break t;
                            }
                        }
                        ((a = e.createElement(t)),
                          $l(a, t, u),
                          e.head.appendChild(a));
                        break;
                      default:
                        throw Error(g(468, t));
                    }
                    ((a[Ll] = l), xl(a), (t = a));
                  }
                  l.stateNode = t;
                }
              else Xl || yo(n, l.type, l.stateNode);
            else l.stateNode = pd(n, u, l.memoizedProps);
          else
            e !== u
              ? (e === null
                  ? ((t = a.stateNode),
                    t === null || il || t.parentNode.removeChild(t))
                  : e.count--,
                u === null
                  ? Xl || yo(n, l.type, l.stateNode)
                  : pd(n, u, l.memoizedProps))
              : u === null &&
                l.stateNode !== null &&
                Tc(l, l.memoizedProps, a.memoizedProps);
        break;
      case 27:
        (et(t, l, u),
          nt(l),
          e & 512 && (il || a === null || Fl(a, a.return)),
          a !== null && e & 4 && Tc(l, l.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          ((n = kt),
          (kt = !1),
          et(t, l, u),
          (kt = n),
          nt(l),
          e & 512 && (il || a === null || Fl(a, a.return)),
          l.flags & 32)
        ) {
          t = l.stateNode;
          try {
            (Aa(t, ""), (ul = !0));
          } catch (h) {
            dl(l, l.return, h);
          }
        }
        (e & 4 &&
          l.stateNode != null &&
          ((t = l.memoizedProps), Tc(l, t, a !== null ? a.memoizedProps : t)),
          e & 1024 && (Dc = !0));
        break;
      case 6:
        if ((et(t, l, u), nt(l), e & 4)) {
          if (l.stateNode === null) throw Error(g(162));
          ((t = l.memoizedProps), (u = l.stateNode));
          try {
            ((u.nodeValue = t), (ul = !0));
          } catch (h) {
            dl(l, l.return, h);
          }
        }
        break;
      case 3:
        if (
          ((ul = !1),
          (Ci = null),
          (n = Gt),
          (Gt = ke(t.containerInfo)),
          et(t, l, u),
          (Gt = n),
          nt(l),
          e & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            ce(t.containerInfo);
          } catch (h) {
            dl(l, l.return, h);
          }
        (Dc && ((Dc = !1), Mv(l)), (ul = !1));
        break;
      case 4:
        ((e = kt),
          (kt = Xl),
          (a = $o()),
          (n = Gt),
          (Gt = ke(l.stateNode.containerInfo)),
          et(t, l, u),
          nt(l),
          (Gt = n),
          ul && Ve && (vi = !0),
          (ul = a),
          (kt = e));
        break;
      case 12:
        (et(t, l, u), nt(l));
        break;
      case 31:
        (et(t, l, u),
          nt(l),
          e & 4 &&
            ((t = l.updateQueue),
            t !== null && ((l.updateQueue = null), ri(l, t))));
        break;
      case 13:
        (et(t, l, u),
          nt(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (hi = mt()),
          e & 4 &&
            ((t = l.updateQueue),
            t !== null && ((l.updateQueue = null), ri(l, t))));
        break;
      case 22:
        ((n = l.memoizedState !== null),
          (i = a !== null && a.memoizedState !== null));
        var f = Xl,
          c = il,
          r = kt;
        ((Xl = f || n),
          (kt = r || n),
          (il = c || i),
          et(t, l, u),
          (il = c),
          (kt = r),
          (Xl = f),
          nt(l),
          e & 8192 &&
            ((t = l.stateNode),
            (t._visibility = n ? t._visibility & -2 : t._visibility | 1),
            !n ||
              a === null ||
              i ||
              Xl ||
              il ||
              ((t = i || il),
              (u = Xl),
              (a = il),
              (Xl = n || Xl),
              (il = t),
              Yu(l, 2),
              (Xl = u),
              (il = a)),
            (!n && kt) || Mc(l, n)),
          e & 4 &&
            ((t = l.updateQueue),
            t !== null &&
              ((u = t.retryQueue),
              u !== null && ((t.retryQueue = null), ri(l, u)))));
        break;
      case 19:
        (et(t, l, u),
          nt(l),
          e & 4 &&
            ((t = l.updateQueue),
            t !== null && ((l.updateQueue = null), ri(l, t))));
        break;
      case 30:
        (e & 512 && (il || a === null || Fl(a, a.return)),
          (e = $o()),
          (n = Ve),
          (i = (u & 335544064) === u),
          (f = l.memoizedProps),
          (Ve = i && cu(f.default, f.update) !== "none"),
          et(t, l, u),
          nt(l),
          i && a !== null && ul && (l.flags |= 4),
          (Ve = n),
          (ul = e));
        break;
      case 21:
        break;
      case 7:
        (e & 512 && (il || a === null || Fl(a, a.return)),
          a && a.stateNode !== null && (a.stateNode._fragmentFiber = l));
      default:
        (et(t, l, u), nt(l));
    }
  }
  function nt(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var u, a = l.return; a !== null;) {
          if (rv(a)) {
            u = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var e = l.return; e !== null;) {
          if (gc(e)) {
            var n = e.stateNode;
            a === null ? (a = [n]) : a.push(n);
          }
          if (hc(e)) break;
          e = e.return;
        }
        var i = a;
        if (u == null) throw Error(g(160));
        switch (u.tag) {
          case 27:
            var f = u.stateNode,
              c = Ec(l);
            fi(l, c, f, i);
            break;
          case 5:
            var r = u.stateNode;
            u.flags & 32 && (Aa(r, ""), (u.flags &= -33));
            var h = Ec(l);
            fi(l, h, r, i);
            break;
          case 3:
          case 4:
            var E = u.stateNode.containerInfo,
              v = Ec(l);
            bc(l, v, E, i);
            break;
          default:
            throw Error(g(161));
        }
      } catch (y) {
        dl(l, l.return, y);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function Mv(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null;) {
        var t = l;
        (Mv(t),
          t.tag === 5 &&
            t.flags & 1024 &&
            ((t = t.stateNode), (fe = !0), t.reset(), (fe = !1)),
          (l = l.sibling));
      }
  }
  function La(l, t) {
    if (t.subtreeFlags & 9270)
      for (t = t.child; t !== null;) (Rv(t, l), (t = t.sibling));
    else Ev(t);
  }
  function Rv(l, t) {
    var u = l.alternate;
    if (u === null) zc(l, !1);
    else
      switch (l.tag) {
        case 3:
          if (((Cc = It = !1), hv(), La(t, l), !It && !vi)) {
            if (((l = $t), l !== null))
              for (var a = 0; a < l.length; a += 3) {
                u = l[a];
                var e = l[a + 1];
                (gd(u, l[a + 2]),
                  (u = u.ownerDocument.documentElement),
                  u !== null &&
                    u.animate(
                      { opacity: [0, 0], pointerEvents: ["none", "none"] },
                      {
                        duration: 0,
                        fill: "forwards",
                        pseudoElement: "::view-transition-group(" + e + ")",
                      },
                    ));
              }
            ((l = t.containerInfo),
              (l =
                l.nodeType === 9
                  ? l.documentElement
                  : l.ownerDocument.documentElement),
              l !== null &&
                l.style.viewTransitionName === "" &&
                ((l.style.viewTransitionName = "none"),
                l.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(root)",
                  },
                ),
                l.animate(
                  { width: [0, 0], height: [0, 0] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition",
                  },
                )),
              (Cc = !0));
          }
          $t = null;
          break;
        case 5:
          La(t, l);
          break;
        case 4:
          ((a = It), (It = !1), La(t, l), It && (vi = !0), (It = a));
          break;
        case 22:
          l.memoizedState === null &&
            (u.memoizedState !== null ? zc(l, !1) : La(t, l));
          break;
        case 30:
          ((a = It), (e = hv()), (It = !1), La(t, l), It && (l.flags |= 4));
          var n = l.memoizedProps,
            i = l.stateNode;
          ((t = fu(n, i)), (i = fu(u.memoizedProps, i)));
          var f = cu(n.default, n.update);
          (f === "none"
            ? (t = !1)
            : ((n = u.memoizedState),
              (u.memoizedState = null),
              (u = l.child),
              (st = 0),
              (t = Nc(l, u, t, i, f, n, !0)),
              st !== (n === null ? 0 : n.length) && (l.flags |= 32)),
            (l.flags & 4) !== 0 && t
              ? (ka(l, l.memoizedProps.onUpdate), ($t = e))
              : e !== null && (e.push.apply(e, $t), ($t = e)),
            (It = (l.flags & 32) !== 0 ? !0 : a));
          break;
        default:
          La(t, l);
      }
  }
  function Pt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null;) (zv(l, t.alternate, t), (t = t.sibling));
  }
  function Yu(l, t) {
    for (l = l.child; l !== null;) {
      var u = l,
        a = t;
      switch (u.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (qu(4, u, u.return), Yu(u, a));
          break;
        case 1:
          Fl(u, u.return);
          var e = u.stateNode;
          (typeof e.componentWillUnmount == "function" && vv(u, u.return, e),
            Yu(u, a));
          break;
        case 27:
          (a & 2) !== 0 && Md(u.stateNode, u.type, u.memoizedProps);
        case 5:
          (Fl(u, u.return), (u.tag !== 5 && u.tag !== 27) || Qe(u), Yu(u, a));
          break;
        case 6:
          Qe(u);
          break;
        case 26:
          (Fl(u, u.return),
            (e = u.stateNode),
            u.memoizedState !== null ||
              e === null ||
              il ||
              e.parentNode.removeChild(e),
            Yu(u, a));
          break;
        case 22:
          u.memoizedState === null && Yu(u, a);
          break;
        case 30:
          (Fl(u, u.return), Yu(u, a));
          break;
        case 7:
          Fl(u, u.return);
        default:
          Yu(u, a);
      }
      l = l.sibling;
    }
  }
  function Xt(l, t, u) {
    for (
      u = (t.subtreeFlags & 8772) !== 0 ? u : u & -2, t = t.child;
      t !== null;
    ) {
      var a = t.alternate,
        e = l,
        n = t,
        i = n.flags,
        f = (u & 1) !== 0;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (Xt(e, n, u), Xe(4, n));
          break;
        case 1:
          if (
            (Xt(e, n, u),
            (a = n),
            (e = a.stateNode),
            typeof e.componentDidMount == "function")
          )
            try {
              e.componentDidMount();
            } catch (h) {
              dl(a, a.return, h);
            }
          if (((a = n), (e = a.updateQueue), e !== null)) {
            var c = a.stateNode;
            try {
              var r = e.shared.hiddenCallbacks;
              if (r !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < r.length; e++)
                  Is(r[e], c);
            } catch (h) {
              dl(a, a.return, h);
            }
          }
          (f && i & 64 && sv(n), Ft(n, n.return));
          break;
        case 27:
          (u & 2) !== 0 && mv(n);
        case 5:
          ((n.tag !== 5 && n.tag !== 27) || dv(n),
            Xt(e, n, u),
            f && a === null && i & 4 && Sc(n),
            Ft(n, n.return));
          break;
        case 6:
          dv(n);
          break;
        case 26:
          ((c = n.stateNode),
            n.memoizedState !== null ||
              c === null ||
              Xl ||
              yo(ke(c.ownerDocument), n.type, c),
            Xt(e, n, u),
            f && a === null && i & 4 && Sc(n),
            Ft(n, n.return));
          break;
        case 12:
          Xt(e, n, u);
          break;
        case 31:
          (Xt(e, n, u), f && i & 4 && Nv(e, n));
          break;
        case 13:
          (Xt(e, n, u), f && i & 4 && Dv(e, n));
          break;
        case 22:
          (n.memoizedState === null && Xt(e, n, u), Ft(n, n.return));
          break;
        case 30:
          (Xt(e, n, u), Ft(n, n.return));
          break;
        case 7:
          Ft(n, n.return);
        default:
          Xt(e, n, u);
      }
      t = t.sibling;
    }
  }
  function Uc(l, t) {
    var u = null;
    (l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (u = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== u && (l != null && l.refCount++, u != null && De(u)));
  }
  function Hc(l, t) {
    ((l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && De(l)));
  }
  function jt(l, t, u, a) {
    var e = (u & 335544064) === u;
    if (t.subtreeFlags & (e ? 10262 : 10256))
      for (t = t.child; t !== null;) (Uv(l, t, u, a), (t = t.sibling));
    else e && Tv(t);
  }
  function Uv(l, t, u, a) {
    var e = (u & 335544064) === u;
    e &&
      t.alternate === null &&
      t.return !== null &&
      t.return.alternate !== null &&
      si(t);
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (jt(l, t, u, a), n & 2048 && Xe(9, t));
        break;
      case 1:
        jt(l, t, u, a);
        break;
      case 3:
        (jt(l, t, u, a),
          e &&
            Cc &&
            ((l = l.containerInfo),
            (l =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l),
            l.style.viewTransitionName === "root" &&
              (l.style.viewTransitionName = ""),
            (l = l.ownerDocument.documentElement),
            l !== null &&
              l.style.viewTransitionName === "none" &&
              (l.style.viewTransitionName = "")),
          n & 2048 &&
            ((n = null),
            t.alternate !== null && (n = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== n && (t.refCount++, n != null && De(n))));
        break;
      case 12:
        if (n & 2048) {
          (jt(l, t, u, a), (n = t.stateNode));
          try {
            var i = t.memoizedProps,
              f = i.id,
              c = i.onPostCommit;
            typeof c == "function" &&
              c(
                f,
                t.alternate === null ? "mount" : "update",
                n.passiveEffectDuration,
                -0,
              );
          } catch (r) {
            dl(t, t.return, r);
          }
        } else jt(l, t, u, a);
        break;
      case 31:
        jt(l, t, u, a);
        break;
      case 13:
        jt(l, t, u, a);
        break;
      case 23:
        break;
      case 22:
        ((i = t.stateNode),
          (f = t.alternate),
          t.memoizedState !== null
            ? (e && f !== null && f.memoizedState === null && si(f),
              i._visibility & 2 ? jt(l, t, u, a) : Ze(l, t))
            : (e && f !== null && f.memoizedState !== null && si(t),
              i._visibility & 2
                ? jt(l, t, u, a)
                : ((i._visibility |= 2),
                  Ka(l, t, u, a, (t.subtreeFlags & 10256) !== 0 || !1))),
          n & 2048 && Uc(f, t));
        break;
      case 24:
        (jt(l, t, u, a), n & 2048 && Hc(t.alternate, t));
        break;
      case 30:
        (e &&
          ((n = t.alternate), n !== null && (Wt(n.child, !0), Wt(t.child, !0))),
          jt(l, t, u, a));
        break;
      default:
        jt(l, t, u, a);
    }
  }
  function Ka(l, t, u, a, e) {
    for (
      e = e && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var n = l,
        i = t,
        f = u,
        c = a,
        r = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (Ka(n, i, f, c, e), Xe(8, i));
          break;
        case 23:
          break;
        case 22:
          var h = i.stateNode;
          (i.memoizedState !== null
            ? h._visibility & 2
              ? Ka(n, i, f, c, e)
              : Ze(n, i)
            : ((h._visibility |= 2), Ka(n, i, f, c, e)),
            e && r & 2048 && Uc(i.alternate, i));
          break;
        case 24:
          (Ka(n, i, f, c, e), e && r & 2048 && Hc(i.alternate, i));
          break;
        default:
          Ka(n, i, f, c, e);
      }
      t = t.sibling;
    }
  }
  function Ze(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) {
        var u = l,
          a = t,
          e = a.flags;
        switch (a.tag) {
          case 22:
            (Ze(u, a), e & 2048 && Uc(a.alternate, a));
            break;
          case 24:
            (Ze(u, a), e & 2048 && Hc(a.alternate, a));
            break;
          default:
            Ze(u, a);
        }
        t = t.sibling;
      }
  }
  var ra = 8192;
  function ma(l, t, u) {
    if (l.subtreeFlags & ra)
      for (l = l.child; l !== null;) (Hv(l, t, u), (l = l.sibling));
  }
  function Hv(l, t, u) {
    switch (l.tag) {
      case 26:
        (ma(l, t, u),
          l.flags & ra &&
            (l.memoizedState !== null
              ? Wy(u, Gt, l.memoizedState, l.memoizedProps)
              : ((l = l.stateNode), (t & 335544128) === t && Gd(u, l))));
        break;
      case 5:
        (ma(l, t, u),
          l.flags & ra &&
            ((l = l.stateNode), (t & 335544128) === t && Gd(u, l)));
        break;
      case 3:
      case 4:
        var a = Gt;
        ((Gt = ke(l.stateNode.containerInfo)), ma(l, t, u), (Gt = a));
        break;
      case 22:
        l.memoizedState === null &&
          ((a = l.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = ra), (ra = 16777216), ma(l, t, u), (ra = a))
            : ma(l, t, u));
        break;
      case 30:
        if (
          (l.flags & ra) !== 0 &&
          ((a = l.memoizedProps.name), a != null && a !== "auto")
        ) {
          var e = l.stateNode;
          ((e.paired = null), Et === null && (Et = new Map()), Et.set(a, e));
        }
        ma(l, t, u);
        break;
      default:
        ma(l, t, u);
    }
  }
  function jv(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do ((t = l.sibling), (l.sibling = null), (l = t));
      while (l !== null);
    }
  }
  function Le(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          ((Ql = a), qv(a, l));
        }
      jv(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null;) (pv(l), (l = l.sibling));
  }
  function pv(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (Le(l), l.flags & 2048 && qu(9, l, l.return));
        break;
      case 3:
        Le(l);
        break;
      case 12:
        Le(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), mi(l))
          : Le(l);
        break;
      default:
        Le(l);
    }
  }
  function mi(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          ((Ql = a), qv(a, l));
        }
      jv(l);
    }
    for (l = l.child; l !== null;) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          (qu(8, t, t.return), mi(t));
          break;
        case 22:
          ((u = t.stateNode),
            u._visibility & 2 && ((u._visibility &= -3), mi(t)));
          break;
        default:
          mi(t);
      }
      l = l.sibling;
    }
  }
  function qv(l, t) {
    for (; Ql !== null;) {
      var u = Ql;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          qu(8, u, t);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var a = u.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          De(u.memoizedState.cache);
      }
      if (((a = u.child), a !== null)) ((a.return = u), (Ql = a));
      else
        l: for (u = l; Ql !== null;) {
          a = Ql;
          var e = a.sibling,
            n = a.return;
          if ((_v(a), a === u)) {
            Ql = null;
            break l;
          }
          if (e !== null) {
            ((e.return = n), (Ql = e));
            break l;
          }
          Ql = n;
        }
    }
  }
  var Km = {
      getCacheForType: function (l) {
        var t = Kl(jl),
          u = t.data.get(l);
        return (u === void 0 && ((u = l()), t.data.set(l, u)), u);
      },
      cacheSignal: function () {
        return Kl(jl).controller.signal;
      },
    },
    Jm = typeof WeakMap == "function" ? WeakMap : Map,
    el = 0,
    Tl = null,
    K = null,
    F = 0,
    vl = 0,
    bt = null,
    Bu = !1,
    Ja = !1,
    jc = !1,
    gu = 0,
    Rl = 0,
    xu = 0,
    ya = 0,
    yi = 0,
    zt = 0,
    wa = 0,
    Ke = null,
    dt = null,
    pc = !1,
    hi = 0,
    Yv = 0,
    gi = 1 / 0,
    Si = null,
    Gu = null,
    Dl = 0,
    Qt = null,
    ha = null,
    lu = 0,
    qc = 0,
    Yc = null,
    Bv = null,
    Fa = null,
    $a = null,
    Wa = null,
    Je = 0,
    Ti = null;
  function Ot() {
    return (el & 2) !== 0 && F !== 0 ? F & -F : M.T !== null ? Jc() : Xo();
  }
  function xv() {
    if (zt === 0)
      if ((F & 536870912) === 0 || Z) {
        var l = rn;
        ((rn <<= 1), (rn & 3932160) === 0 && (rn = 262144), (zt = l));
      } else zt = 536870912;
    return ((l = Jl.current), l !== null && (l.flags |= 32), zt);
  }
  function ka(l, t) {
    if (t != null) {
      var u = l.stateNode,
        a = u.ref;
      (a === null && (a = u.ref = Sd(fu(l.memoizedProps, u))),
        $a === null && ($a = []),
        $a.push(t.bind(null, a)));
    }
  }
  function rt(l, t, u) {
    (((l === Tl && (vl === 2 || vl === 9)) || l.cancelPendingCommit !== null) &&
      (Ia(l, 0), Xu(l, F, zt, !1)),
      re(l, u),
      ((el & 2) === 0 || l !== Tl) &&
        (l === Tl &&
          ((el & 2) === 0 && (ya |= u), Rl === 4 && Xu(l, F, zt, !1)),
        tu(l)));
  }
  function Gv(l, t, u) {
    if ((el & 6) !== 0) throw Error(g(327));
    var a = (!u && (t & 127) === 0 && (t & l.expiredLanes) === 0) || de(l, t),
      e = a ? $m(l, t) : xc(l, t, !0),
      n = a;
    do {
      if (e === 0) {
        Ja && !a && Xu(l, t, 0, !1);
        break;
      } else {
        if (((u = l.current.alternate), n && !wm(u))) {
          ((e = xc(l, t, !1)), (n = !1));
          continue;
        }
        if (e === 2) {
          if (((n = t), l.errorRecoveryDisabledLanes & n)) var i = 0;
          else
            ((i = l.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
          if (i !== 0) {
            t = i;
            l: {
              var f = l;
              e = Ke;
              var c = f.current.memoizedState.isDehydrated;
              if (
                (c && (Ia(f, i).flags |= 256),
                (i = xc(f, i, !1)),
                i !== 2 && i !== 6)
              ) {
                if (jc && !c) {
                  ((f.errorRecoveryDisabledLanes |= n), (ya |= n), (e = 4));
                  break l;
                }
                ((n = dt),
                  (dt = e),
                  n !== null &&
                    (dt === null ? (dt = n) : dt.push.apply(dt, n)));
              }
              e = i;
            }
            if (((n = !1), e !== 2)) continue;
          }
        }
        if (e === 1) {
          (Ia(l, 0), Xu(l, t, 0, !0));
          break;
        }
        l: {
          switch (((a = l), (n = e), n)) {
            case 0:
            case 1:
              throw Error(g(345));
            case 4:
              if ((t & 4194048) !== t && (t & 62914560) !== t) break;
            case 6:
              Xu(a, t, zt, !Bu);
              break l;
            case 2:
              dt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(g(329));
          }
          if ((t & 62914560) === t && ((e = hi + 300 - mt()), 10 < e)) {
            if ((Xu(a, t, zt, !Bu), yn(a, 0, !0) !== 0)) break l;
            ((lu = t),
              (a.timeoutHandle = ao(
                Xv.bind(
                  null,
                  a,
                  u,
                  dt,
                  Si,
                  pc,
                  t,
                  zt,
                  ya,
                  wa,
                  Bu,
                  n,
                  "Throttled",
                  -0,
                  0,
                ),
                e,
              )));
            break l;
          }
          Xv(a, u, dt, Si, pc, t, zt, ya, wa, Bu, n, null, -0, 0);
        }
      }
      break;
    } while (!0);
    tu(l);
  }
  function Xv(l, t, u, a, e, n, i, f, c, r, h, E, v, y) {
    l.timeoutHandle = -1;
    var _ = t.subtreeFlags,
      D = (n & 335544064) === n;
    if (
      ((E = null),
      (D || _ & 8192 || (_ & 16785408) === 16785408) &&
        ((E = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: Kt,
        }),
        (Et = null),
        Hv(t, n, E),
        D &&
          ((_ = E),
          (D = l.containerInfo),
          (D = (D.nodeType === 9 ? D : D.ownerDocument).__reactViewTransition),
          D != null &&
            (_.count++,
            (_.waitingForViewTransition = !0),
            (_ = ln.bind(_)),
            D.finished.then(_, _))),
        (_ =
          (n & 62914560) === n
            ? hi - mt()
            : (n & 4194048) === n
              ? Yv - mt()
              : 0),
        (_ = ky(E, _)),
        _ !== null))
    ) {
      ((lu = n),
        (l.cancelPendingCommit = _(
          Fv.bind(null, l, t, n, u, a, e, i, f, c, r, h, E, null, v, y),
        )),
        Xu(l, n, i, !r));
      return;
    }
    Fv(l, t, n, u, a, e, i, f, c, r, h, E);
  }
  function wm(l) {
    for (var t = l; ;) {
      var u = t.tag;
      if (
        (u === 0 || u === 11 || u === 15) &&
        t.flags & 16384 &&
        ((u = t.updateQueue), u !== null && ((u = u.stores), u !== null))
      )
        for (var a = 0; a < u.length; a++) {
          var e = u[a],
            n = e.getSnapshot;
          e = e.value;
          try {
            if (!St(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (((u = t.child), t.subtreeFlags & 16384 && u !== null))
        ((u.return = t), (t = u));
      else {
        if (t === l) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Xu(l, t, u, a) {
    ((t = qo(l, t)),
      (t &= ~yi),
      (t &= ~ya),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      a && (l.warmLanes |= t),
      (a = l.expirationTimes));
    for (var e = t; 0 < e;) {
      var n = 31 - ht(e),
        i = 1 << n;
      ((a[n] = -1), (e &= ~i));
    }
    u !== 0 && Bo(l, u, t);
  }
  function Ei() {
    return (el & 6) === 0 ? (we(0), !1) : !0;
  }
  function Bc() {
    if (K !== null) {
      if (vl === 0) var l = K.return;
      else ((l = K), (vu = aa = null), Kf(l), (xa = null), (Re = 0), (l = K));
      for (; l !== null;) (ov(l.alternate, l), (l = l.return));
      K = null;
    }
  }
  function Ia(l, t) {
    var u = l.timeoutHandle;
    return (
      u !== -1 && ((l.timeoutHandle = -1), gy(u)),
      (u = l.cancelPendingCommit),
      u !== null && ((l.cancelPendingCommit = null), u()),
      (lu = 0),
      Bc(),
      (Tl = l),
      (K = u = ou(l.current, null)),
      (F = t),
      (vl = 0),
      (bt = null),
      (Bu = !1),
      (Ja = de(l, t)),
      (jc = !1),
      (wa = zt = yi = ya = xu = Rl = 0),
      (dt = Ke = null),
      (pc = !1),
      (gu = qo(l, t)),
      Cn(),
      u
    );
  }
  function Qv(l, t) {
    ((Q = null),
      (M.H = Pn),
      t === Ba || t === Gn
        ? ((t = Fs()), (vl = 3))
        : t === Hf
          ? ((t = Fs()), (vl = 4))
          : (vl =
              t === ic
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (bt = t),
      K === null && ((Rl = 1), li(l, Mt(t, l.current))));
  }
  function Vv() {
    var l = Jl.current;
    return l === null
      ? !0
      : (F & 4194048) === F
        ? Il === null
        : (F & 62914560) === F || (F & 536870912) !== 0
          ? l === Il
          : !1;
  }
  function Zv() {
    var l = M.H;
    return ((M.H = Pn), l === null ? Pn : l);
  }
  function Lv() {
    var l = M.A;
    return ((M.A = Km), l);
  }
  function bi() {
    ((Rl = 4),
      Bu || ((F & 4194048) !== F && Jl.current !== null) || (Ja = !0),
      ((xu & 134217727) === 0 && (ya & 134217727) === 0) ||
        Tl === null ||
        Xu(Tl, F, zt, !1));
  }
  function xc(l, t, u) {
    var a = el;
    el |= 2;
    var e = Zv(),
      n = Lv();
    ((Tl !== l || F !== t) && ((Si = null), Ia(l, t)), (t = !1));
    var i = Rl;
    l: do
      try {
        if (vl !== 0 && K !== null) {
          var f = K,
            c = bt;
          switch (vl) {
            case 8:
              (Bc(), (i = 6));
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              Jl.current === null && (t = !0);
              var r = vl;
              if (((vl = 0), (bt = null), Pa(l, f, c, r), u && Ja)) {
                i = 0;
                break l;
              }
              break;
            default:
              ((r = vl), (vl = 0), (bt = null), Pa(l, f, c, r));
          }
        }
        (Fm(), (i = Rl));
        break;
      } catch (h) {
        Qv(l, h);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (vu = aa = null),
      (el = a),
      (M.H = e),
      (M.A = n),
      K === null && ((Tl = null), (F = 0), Cn()),
      i
    );
  }
  function Fm() {
    for (; K !== null;) Kv(K);
  }
  function $m(l, t) {
    var u = el;
    el |= 2;
    var a = Zv(),
      e = Lv();
    Tl !== l || F !== t
      ? ((Si = null), (gi = mt() + 500), Ia(l, t))
      : (Ja = de(l, t));
    l: do
      try {
        if (vl !== 0 && K !== null) {
          t = K;
          var n = bt;
          t: switch (vl) {
            case 1:
              ((vl = 0), (bt = null), Pa(l, t, n, 1));
              break;
            case 2:
            case 9:
              if (Js(n)) {
                ((vl = 0), (bt = null), Jv(t));
                break;
              }
              ((t = function () {
                ((vl !== 2 && vl !== 9) || Tl !== l || (vl = 7), tu(l));
              }),
                n.then(t, t));
              break l;
            case 3:
              vl = 7;
              break l;
            case 4:
              vl = 5;
              break l;
            case 7:
              Js(n)
                ? ((vl = 0), (bt = null), Jv(t))
                : ((vl = 0), (bt = null), Pa(l, t, n, 7));
              break;
            case 5:
              var i = null;
              switch (K.tag) {
                case 26:
                  i = K.memoizedState;
                case 5:
                case 27:
                  var f = K;
                  if (i ? Bd(i) : f.stateNode.complete) {
                    ((vl = 0), (bt = null));
                    var c = f.sibling;
                    if (c !== null) K = c;
                    else {
                      var r = f.return;
                      r !== null ? ((K = r), zi(r)) : (K = null);
                    }
                    break t;
                  }
              }
              ((vl = 0), (bt = null), Pa(l, t, n, 5));
              break;
            case 6:
              ((vl = 0), (bt = null), Pa(l, t, n, 6));
              break;
            case 8:
              (Bc(), (Rl = 6));
              break l;
            default:
              throw Error(g(462));
          }
        }
        Wm();
        break;
      } catch (h) {
        Qv(l, h);
      }
    while (!0);
    return (
      (vu = aa = null),
      (M.H = a),
      (M.A = e),
      (el = u),
      K !== null ? 0 : ((Tl = null), (F = 0), Cn(), Rl)
    );
  }
  function Wm() {
    for (; K !== null && !rr();) Kv(K);
  }
  function Kv(l) {
    var t = fv(l.alternate, l, gu);
    ((l.memoizedProps = l.pendingProps), t === null ? zi(l) : (K = t));
  }
  function Jv(l) {
    var t = l,
      u = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = lv(u, t, t.pendingProps, t.type, void 0, F);
        break;
      case 11:
        t = lv(u, t, t.pendingProps, t.type.render, t.ref, F);
        break;
      case 5:
        Kf(t);
        var a = t;
        a === Gl &&
          (Z
            ? (pn(a), a.tag === 5 && a.stateNode != null && (bl = a.stateNode))
            : (pn(a), (Z = !0)));
      default:
        (ov(u, t), (t = K = qs(t, gu)), (t = fv(u, t, gu)));
    }
    ((l.memoizedProps = l.pendingProps), t === null ? zi(l) : (K = t));
  }
  function Pa(l, t, u, a) {
    ((vu = aa = null), Kf(t), (xa = null), (Re = 0));
    var e = t.return;
    try {
      if (Bm(l, e, t, u, F)) {
        ((Rl = 1), li(l, Mt(u, l.current)), (K = null));
        return;
      }
    } catch (n) {
      if (e !== null) throw ((K = e), n);
      ((Rl = 1), li(l, Mt(u, l.current)), (K = null));
      return;
    }
    t.flags & 32768
      ? (Z || a === 1
          ? (l = !0)
          : Ja || (F & 536870912) !== 0
            ? (l = !1)
            : ((Bu = l = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = Jl.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        wv(t, l))
      : zi(t);
  }
  function zi(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        wv(t, Bu);
        return;
      }
      l = t.return;
      var u = Qm(t.alternate, t, gu);
      if (u !== null) {
        K = u;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        K = t;
        return;
      }
      K = t = l;
    } while (t !== null);
    Rl === 0 && (Rl = 5);
  }
  function wv(l, t) {
    do {
      var u = Vm(l.alternate, l);
      if (u !== null) {
        ((u.flags &= 32767), (K = u));
        return;
      }
      if (
        ((u = l.return),
        u !== null &&
          ((u.flags |= 32768), (u.subtreeFlags = 0), (u.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        K = l;
        return;
      }
      K = l = u;
    } while (l !== null);
    ((Rl = 6), (K = null));
  }
  function Fv(l, t, u, a, e, n, i, f, c, r, h, E) {
    l.cancelPendingCommit = null;
    do Oi();
    while (Dl !== 0);
    if ((el & 6) !== 0) throw Error(g(327));
    if (t !== null) {
      if (t === l.current) throw Error(g(177));
      (l === Tl && ((K = Tl = null), (F = 0)),
        (ha = t),
        (Qt = l),
        (lu = u),
        (Yc = e),
        (Bv = a),
        km(l, t, u, i, f, c, E));
    }
  }
  function km(l, t, u, a, e, n, i) {
    var f = t.lanes | t.childLanes;
    if (
      ((qc = f),
      (f |= Tf),
      Or(l, u, f, a, e, n),
      ($a = null),
      (u & 335544064) === u
        ? ((Wa = Am(l)), (a = 10262))
        : ((Wa = null), (a = 10256)),
      (t.subtreeFlags & a) !== 0 || (t.flags & a) !== 0
        ? ((l.callbackNode = null),
          (l.callbackPriority = 0),
          ay(vn, function () {
            return (Vc(), null);
          }))
        : ((l.callbackNode = null), (l.callbackPriority = 0)),
      (ci = !1),
      (a = (t.flags & 13878) !== 0),
      (t.subtreeFlags & 13878) !== 0 || a)
    ) {
      ((a = M.T), (M.T = null), (e = x.p), (x.p = 2), (n = el), (el |= 4));
      try {
        Zm(l, t, u);
      } finally {
        ((el = n), (x.p = e), (M.T = a));
      }
    }
    ((Dl = 1),
      ci
        ? (Fa = Oy(i, l.containerInfo, Wa, Gc, Xc, Pm, Qc, Vc, Im))
        : (Gc(), Xc(), Qc()));
  }
  function Im(l) {
    if (Dl !== 0) {
      var t = Qt.onRecoverableError;
      t(l, { componentStack: null });
    }
  }
  function Pm() {
    Dl === 3 && ((Dl = 0), Rv(ha, Qt), (Dl = 4));
  }
  function Gc() {
    if (Dl === 1) {
      Dl = 0;
      var l = Qt,
        t = ha,
        u = lu,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        ((a = M.T), (M.T = null));
        var e = x.p;
        x.p = 2;
        var n = el;
        el |= 4;
        try {
          ((Ve = vi = !1), Cv(t, l, u), (u = lo));
          var i = As(l.containerInfo),
            f = u.focusedElem,
            c = u.selectionRange;
          if (
            i !== f &&
            f &&
            f.ownerDocument &&
            _s(f.ownerDocument.documentElement, f)
          ) {
            if (c !== null && mf(f)) {
              var r = c.start,
                h = c.end;
              if ((h === void 0 && (h = r), "selectionStart" in f))
                ((f.selectionStart = r),
                  (f.selectionEnd = Math.min(h, f.value.length)));
              else {
                var E = f.ownerDocument || document,
                  v = (E && E.defaultView) || window;
                if (v.getSelection) {
                  var y = v.getSelection(),
                    _ = f.textContent.length,
                    D = Math.min(c.start, _),
                    V = c.end === void 0 ? D : Math.min(c.end, _);
                  !y.extend && D > V && ((i = V), (V = D), (D = i));
                  var d = Os(f, D),
                    o = Os(f, V);
                  if (
                    d &&
                    o &&
                    (y.rangeCount !== 1 ||
                      y.anchorNode !== d.node ||
                      y.anchorOffset !== d.offset ||
                      y.focusNode !== o.node ||
                      y.focusOffset !== o.offset)
                  ) {
                    var m = E.createRange();
                    (m.setStart(d.node, d.offset),
                      y.removeAllRanges(),
                      D > V
                        ? (y.addRange(m), y.extend(o.node, o.offset))
                        : (m.setEnd(o.node, o.offset), y.addRange(m)));
                  }
                }
              }
            }
            for (E = [], y = f; (y = y.parentNode);)
              y.nodeType === 1 &&
                E.push({ element: y, left: y.scrollLeft, top: y.scrollTop });
            for (
              typeof f.focus == "function" && f.focus(), f = 0;
              f < E.length;
              f++
            ) {
              var T = E[f];
              ((T.element.scrollLeft = T.left), (T.element.scrollTop = T.top));
            }
          }
          ((fe = !!Pc), (lo = Pc = null));
        } finally {
          ((el = n), (x.p = e), (M.T = a));
        }
      }
      ((l.current = t), (Dl = 2));
    }
  }
  function Xc() {
    if (Dl === 2) {
      Dl = 0;
      var l = Qt,
        t = ha,
        u = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || u) {
        ((u = M.T), (M.T = null));
        var a = x.p;
        x.p = 2;
        var e = el;
        el |= 4;
        try {
          zv(l, t.alternate, t);
        } finally {
          ((el = e), (x.p = a), (M.T = u));
        }
      }
      Dl = 3;
    }
  }
  function Qc() {
    if (Dl === 4 || Dl === 3) {
      Dl = 0;
      var l = Fa;
      ((Fa = null), mr());
      var t = Qt,
        u = ha,
        a = lu,
        e = Bv,
        n = (a & 335544064) === a ? 10262 : 10256;
      if (
        ((u.subtreeFlags & n) !== 0 || (u.flags & n) !== 0
          ? (Dl = 5)
          : ((Dl = 0), (ha = Qt = null), $v(t, t.pendingLanes)),
        (n = t.pendingLanes),
        n === 0 && (Gu = null),
        $i(a),
        (u = u.stateNode),
        yt && typeof yt.onCommitFiberRoot == "function")
      )
        try {
          yt.onCommitFiberRoot(ve, u, void 0, (u.current.flags & 128) === 128);
        } catch {}
      if (e !== null) {
        ((u = M.T), (n = x.p), (x.p = 2), (M.T = null));
        try {
          for (var i = t.onRecoverableError, f = 0; f < e.length; f++) {
            var c = e[f];
            i(c.value, { componentStack: c.stack });
          }
        } finally {
          ((M.T = u), (x.p = n));
        }
      }
      if (
        ((e = $a),
        (i = Wa),
        (Wa = null),
        e !== null && (($a = null), i === null && (i = []), l !== null))
      )
        for (c = 0; c < e.length; c++)
          ((u = (0, e[c])(i)), u !== void 0 && l.finished.finally(u));
      ((lu & 3) !== 0 && Oi(),
        tu(t),
        (n = t.pendingLanes),
        (a & 261930) !== 0 && (n & 42) !== 0
          ? t === Ti
            ? Je++
            : ((Je = 0), (Ti = t))
          : ((Je = 0), (Ti = null)),
        we(0));
    }
  }
  function $v(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), De(t)));
  }
  function Oi() {
    return (
      Fa !== null && (Fa.skipTransition(), (Fa = null)),
      Gc(),
      Xc(),
      Qc(),
      Vc()
    );
  }
  function Vc() {
    if (Dl !== 5) return !1;
    var l = Qt,
      t = qc;
    qc = 0;
    var u = $i(lu),
      a = M.T,
      e = x.p;
    try {
      ((x.p = 32 > u ? 32 : u), (M.T = null), (u = Yc), (Yc = null));
      var n = Qt,
        i = lu;
      if (((Dl = 0), (ha = Qt = null), (lu = 0), (el & 6) !== 0))
        throw Error(g(331));
      var f = el;
      if (
        ((el |= 4),
        pv(n.current),
        Uv(n, n.current, i, u),
        (el = f),
        we(0, !1),
        yt && typeof yt.onPostCommitFiberRoot == "function")
      )
        try {
          yt.onPostCommitFiberRoot(ve, n);
        } catch {}
      return !0;
    } finally {
      ((x.p = e), (M.T = a), $v(l, t));
    }
  }
  function Wv(l, t, u) {
    ((t = Mt(u, t)),
      (t = nc(l.stateNode, t, 2)),
      (l = Uu(l, t, 2)),
      l !== null && (re(l, 2), tu(l)));
  }
  function dl(l, t, u) {
    if (l.tag === 3) Wv(l, l, u);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          Wv(t, l, u);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (Gu === null || !Gu.has(a)))
          ) {
            ((l = Mt(u, l)),
              (u = J0(2)),
              (a = Uu(t, u, 2)),
              a !== null && (w0(u, a, t, l), re(a, 2), tu(a)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Zc(l, t, u) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Jm();
      var e = new Set();
      a.set(t, e);
    } else ((e = a.get(t)), e === void 0 && ((e = new Set()), a.set(t, e)));
    e.has(u) ||
      ((jc = !0), e.add(u), (l = ly.bind(null, l, t, u)), t.then(l, l));
  }
  function ly(l, t, u) {
    var a = l.pingCache;
    (a !== null && a.delete(t),
      (l.pingedLanes |= l.suspendedLanes & u),
      (l.warmLanes &= ~u),
      Tl === l &&
        (F & u) === u &&
        ((Rl === 4 || (Rl === 3 && (F & 62914560) === F && 300 > mt() - hi)) &&
        (el & 2) === 0
          ? Ia(l, 0)
          : (yi |= u),
        wa === F && (wa = 0)),
      tu(l));
  }
  function kv(l, t) {
    (t === 0 && (t = Yo()), (l = la(l, t)), l !== null && (re(l, t), tu(l)));
  }
  function ty(l) {
    var t = l.memoizedState,
      u = 0;
    (t !== null && (u = t.retryLane), kv(l, u));
  }
  function uy(l, t) {
    var u = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode,
          e = l.memoizedState;
        e !== null && (u = e.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(g(314));
    }
    (a !== null && a.delete(t), kv(l, u));
  }
  function ay(l, t) {
    return Ki(l, t);
  }
  var le = null,
    te = null,
    Lc = !1,
    _i = !1,
    Kc = !1,
    Qu = 0;
  function tu(l) {
    (l !== te &&
      l.next === null &&
      (te === null ? (le = te = l) : (te = te.next = l)),
      (_i = !0),
      Lc || ((Lc = !0), ny()));
  }
  function we(l, t) {
    if (!Kc && _i) {
      Kc = !0;
      do
        for (var u = !1, a = le; a !== null;) {
          if (l !== 0) {
            var e = a.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var i = a.suspendedLanes,
                f = a.pingedLanes;
              ((n = (1 << (31 - ht(42 | l) + 1)) - 1),
                (n &= e & ~(i & ~f)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0));
            }
            n !== 0 && ((u = !0), td(a, n));
          } else
            ((n = F),
              (n = yn(
                a,
                a === Tl ? n : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (n & 3) === 0 || de(a, n) || ((u = !0), td(a, n)));
          a = a.next;
        }
      while (u);
      Kc = !1;
    }
  }
  function ey() {
    Iv();
  }
  function Iv() {
    _i = Lc = !1;
    var l = 0;
    Qu !== 0 && hy() && (l = Qu);
    for (var t = mt(), u = null, a = le; a !== null;) {
      var e = a.next,
        n = Pv(a, t);
      (n === 0
        ? ((a.next = null),
          u === null ? (le = e) : (u.next = e),
          e === null && (te = u))
        : ((u = a), (l !== 0 || (n & 3) !== 0) && (_i = !0)),
        (a = e));
    }
    ((Dl !== 0 && Dl !== 5) || we(l), Qu !== 0 && (Qu = 0));
  }
  function Pv(l, t) {
    for (
      var u = l.suspendedLanes,
        a = l.pingedLanes,
        e = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;
    ) {
      var i = 31 - ht(n),
        f = 1 << i,
        c = e[i];
      (c === -1
        ? ((f & u) === 0 || (f & a) !== 0) && (e[i] = zr(f, t))
        : c <= t && (l.expiredLanes |= f),
        (n &= ~f));
    }
    if (
      ((t = Tl),
      (u = F),
      (u = yn(
        l,
        l === t ? u : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      (a = l.callbackNode),
      u === 0 ||
        (l === t && (vl === 2 || vl === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Ji(a),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((u & 3) === 0 || de(l, u)) {
      if (((t = u & -u), t === l.callbackPriority)) return t;
      switch ((a !== null && Ji(a), $i(u))) {
        case 2:
        case 8:
          u = jo;
          break;
        case 32:
          u = vn;
          break;
        case 268435456:
          u = po;
          break;
        default:
          u = vn;
      }
      return (
        (a = ld.bind(null, l)),
        (u = Ki(u, a)),
        (l.callbackPriority = t),
        (l.callbackNode = u),
        t
      );
    }
    return (
      a !== null && a !== null && Ji(a),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function ld(l, t) {
    if (Dl !== 0 && Dl !== 5)
      return ((l.callbackNode = null), (l.callbackPriority = 0), null);
    var u = l.callbackNode;
    if (Oi() && l.callbackNode !== u) return null;
    var a = F;
    return (
      (a = yn(
        l,
        l === Tl ? a : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (Gv(l, a, t),
          Pv(l, mt()),
          l.callbackNode != null && l.callbackNode === u
            ? ld.bind(null, l)
            : null)
    );
  }
  function td(l, t) {
    if (Oi()) return null;
    Gv(l, t, !0);
  }
  function ny() {
    Sy(function () {
      (el & 6) !== 0 ? Ki(Ho, ey) : Iv();
    });
  }
  function Jc() {
    if (Qu === 0) {
      var l = ia;
      (l === 0 && ((l = dn), (dn <<= 1), (dn & 261888) === 0 && (dn = 256)),
        (Qu = l));
    }
    return Qu;
  }
  function ud(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
        ? l
        : En(l);
  }
  function iy(l, t, u, a, e) {
    if (t === "submit" && u && u.stateNode === e) {
      var n = ud((e[ct] || null).action),
        i = a.submitter;
      i &&
        ((t = (t = i[ct] || null)
          ? ud(t.formAction)
          : i.getAttribute("formAction")),
        t !== null && ((n = t), (i = null)));
      var f = new _n("action", "action", null, a, e);
      l.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Qu !== 0) {
                  var c = new FormData(e, i);
                  lc(
                    u,
                    { pending: !0, data: c, method: e.method, action: n },
                    null,
                    c,
                  );
                }
              } else
                typeof n == "function" &&
                  (f.preventDefault(),
                  (c = new FormData(e, i)),
                  lc(
                    u,
                    { pending: !0, data: c, method: e.method, action: n },
                    n,
                    c,
                  ));
            },
            currentTarget: e,
          },
        ],
      });
    }
  }
  for (var wc = 0; wc < Sf.length; wc++) {
    var Fc = Sf[wc],
      fy = Fc.toLowerCase(),
      cy = Fc[0].toUpperCase() + Fc.slice(1);
    Bt(fy, "on" + cy);
  }
  (Bt(Cs, "onAnimationEnd"),
    Bt(Ms, "onAnimationIteration"),
    Bt(Rs, "onAnimationStart"),
    Bt("dblclick", "onDoubleClick"),
    Bt("focusin", "onFocus"),
    Bt("focusout", "onBlur"),
    Bt(gm, "onTransitionRun"),
    Bt(Sm, "onTransitionStart"),
    Bt(Tm, "onTransitionCancel"),
    Bt(Us, "onTransitionEnd"),
    Oa("onMouseEnter", ["mouseout", "mouseover"]),
    Oa("onMouseLeave", ["mouseout", "mouseover"]),
    Oa("onPointerEnter", ["pointerout", "pointerover"]),
    Oa("onPointerLeave", ["pointerout", "pointerover"]),
    ku(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    ku(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    ku("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    ku(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    ku(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    ku(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Fe =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    oy = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Fe),
    );
  function ad(l, t) {
    t = (t & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var a = l[u],
        e = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var i = a.length - 1; 0 <= i; i--) {
            var f = a[i],
              c = f.instance,
              r = f.currentTarget;
            if (((f = f.listener), c !== n && e.isPropagationStopped()))
              break l;
            ((n = f), (e.currentTarget = r));
            try {
              n(e);
            } catch (h) {
              Dn(h);
            }
            ((e.currentTarget = null), (n = c));
          }
        else
          for (i = 0; i < a.length; i++) {
            if (
              ((f = a[i]),
              (c = f.instance),
              (r = f.currentTarget),
              (f = f.listener),
              c !== n && e.isPropagationStopped())
            )
              break l;
            ((n = f), (e.currentTarget = r));
            try {
              n(e);
            } catch (h) {
              Dn(h);
            }
            ((e.currentTarget = null), (n = c));
          }
      }
    }
  }
  function J(l, t) {
    var u = t[Vo];
    u === void 0 && (u = t[Vo] = new Set());
    var a = l + "__bubble";
    u.has(a) || (ed(t, l, 2, !1), u.add(a));
  }
  function $c(l, t, u) {
    var a = 0;
    (t && (a |= 4), ed(u, l, a, t));
  }
  var Ai = "_reactListening" + Math.random().toString(36).slice(2);
  function Wc(l) {
    if (!l[Ai]) {
      ((l[Ai] = !0),
        Ko.forEach(function (u) {
          u !== "selectionchange" && (oy.has(u) || $c(u, !1, l), $c(u, !0, l));
        }));
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Ai] || ((t[Ai] = !0), $c("selectionchange", !1, t));
    }
  }
  function ed(l, t, u, a) {
    switch (wd(t)) {
      case 2:
        var e = th;
        break;
      case 8:
        e = uh;
        break;
      default:
        e = go;
    }
    ((u = e.bind(null, t, u, l)),
      (e = void 0),
      !af ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (e = !0),
      a
        ? e !== void 0
          ? l.addEventListener(t, u, { capture: !0, passive: e })
          : l.addEventListener(t, u, !0)
        : e !== void 0
          ? l.addEventListener(t, u, { passive: e })
          : l.addEventListener(t, u, !1));
  }
  function kc(l, t, u, a, e) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (;;) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var f = a.stateNode.containerInfo;
          if (f === e) break;
          if (i === 4)
            for (i = a.return; i !== null;) {
              var c = i.tag;
              if ((c === 3 || c === 4) && i.stateNode.containerInfo === e)
                return;
              i = i.return;
            }
          for (; f !== null;) {
            if (((i = Wu(f)), i === null)) return;
            if (((c = i.tag), c === 5 || c === 6 || c === 26 || c === 27)) {
              a = n = i;
              continue l;
            }
            f = f.parentNode;
          }
        }
        a = a.return;
      }
    es(function () {
      var r = n,
        h = tf(u),
        E = [];
      l: {
        var v = Hs.get(l);
        if (v !== void 0) {
          var y = _n,
            _ = l;
          switch (l) {
            case "keypress":
              if (zn(u) === 0) break l;
            case "keydown":
            case "keyup":
              y = wr;
              break;
            case "focusin":
              ((_ = "focus"), (y = cf));
              break;
            case "focusout":
              ((_ = "blur"), (y = cf));
              break;
            case "beforeblur":
            case "afterblur":
              y = cf;
              break;
            case "click":
              if (u.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              y = fs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              y = qr;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              y = Ir;
              break;
            case Cs:
            case Ms:
            case Rs:
              y = xr;
              break;
            case Us:
              y = lm;
              break;
            case "scroll":
            case "scrollend":
              y = jr;
              break;
            case "wheel":
              y = um;
              break;
            case "copy":
            case "cut":
            case "paste":
              y = Xr;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              y = os;
              break;
            case "submit":
              y = Wr;
              break;
            case "toggle":
            case "beforetoggle":
              y = em;
          }
          var D = (t & 4) !== 0,
            V = !D && (l === "scroll" || l === "scrollend"),
            d = D ? (v !== null ? v + "Capture" : null) : v;
          D = [];
          for (var o = r, m; o !== null;) {
            var T = o;
            if (
              ((m = T.stateNode),
              (T = T.tag),
              (T !== 5 && T !== 26 && T !== 27) ||
                m === null ||
                d === null ||
                ((T = he(o, d)), T != null && D.push($e(o, T, m))),
              V)
            )
              break;
            o = o.return;
          }
          0 < D.length &&
            ((v = new y(v, _, null, u, h)), E.push({ event: v, listeners: D }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((y = l === "mouseover" || l === "pointerover"),
            (v = l === "mouseout" || l === "pointerout"),
            y &&
              u !== lf &&
              (_ = u.relatedTarget || u.fromElement) &&
              (Wu(_) || _[Ea]))
          )
            break l;
          (v || y) &&
            ((_ =
              h.window === h
                ? h
                : (y = h.ownerDocument)
                  ? y.defaultView || y.parentWindow
                  : window),
            v
              ? ((y = u.relatedTarget || u.toElement),
                (v = r),
                (y = y ? Wu(y) : null),
                y !== null &&
                  ((V = L(y)),
                  (D = y.tag),
                  y !== V || (D !== 5 && D !== 27 && D !== 6)) &&
                  (y = null))
              : ((v = null), (y = r)),
            v !== y &&
              ((D = fs),
              (T = "onMouseLeave"),
              (d = "onMouseEnter"),
              (o = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((D = os),
                (T = "onPointerLeave"),
                (d = "onPointerEnter"),
                (o = "pointer")),
              (V = v == null ? _ : ye(v)),
              (m = y == null ? _ : ye(y)),
              (_ = new D(T, o + "leave", v, u, h)),
              (_.target = V),
              (_.relatedTarget = m),
              (T = null),
              Wu(h) === r &&
                ((D = new D(d, o + "enter", y, u, h)),
                (D.target = m),
                (D.relatedTarget = V),
                (T = D)),
              (V = T),
              (D = v && y ? gl(v, y, sy) : null),
              v !== null && nd(E, _, v, D, !1),
              y !== null && V !== null && nd(E, V, y, D, !0)));
        }
        l: {
          if (
            ((v = r ? ye(r) : window),
            (y = v.nodeName && v.nodeName.toLowerCase()),
            y === "select" || (y === "input" && v.type === "file"))
          )
            var N = gs;
          else if (ys(v))
            if (Ss) N = mm;
            else {
              N = dm;
              var $ = vm;
            }
          else
            ((y = v.nodeName),
              !y ||
              y.toLowerCase() !== "input" ||
              (v.type !== "checkbox" && v.type !== "radio")
                ? r && Pi(r.elementType) && (N = gs)
                : (N = rm));
          if (N && (N = N(l, r))) {
            hs(E, N, u, h);
            break l;
          }
          $ && $(l, v, r);
        }
        switch ((($ = r ? ye(r) : window), l)) {
          case "focusin":
            (ys($) || $.contentEditable === "true") &&
              ((Ma = $), (yf = r), (_e = null));
            break;
          case "focusout":
            _e = yf = Ma = null;
            break;
          case "mousedown":
            hf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((hf = !1), Ns(E, u, h));
            break;
          case "selectionchange":
            if (hm) break;
          case "keydown":
          case "keyup":
            Ns(E, u, h);
        }
        var U;
        if (sf)
          l: {
            switch (l) {
              case "compositionstart":
                var q = "onCompositionStart";
                break l;
              case "compositionend":
                q = "onCompositionEnd";
                break l;
              case "compositionupdate":
                q = "onCompositionUpdate";
                break l;
            }
            q = void 0;
          }
        else
          Ca
            ? rs(l, u) && (q = "onCompositionEnd")
            : l === "keydown" &&
              u.keyCode === 229 &&
              (q = "onCompositionStart");
        (q &&
          (ss &&
            u.locale !== "ko" &&
            (Ca || q !== "onCompositionStart"
              ? q === "onCompositionEnd" && Ca && (U = ns())
              : ((zu = h),
                (ef = "value" in zu ? zu.value : zu.textContent),
                (Ca = !0))),
          ($ = Ni(r, q)),
          0 < $.length &&
            ((q = new cs(q, l, null, u, h)),
            E.push({ event: q, listeners: $ }),
            U ? (q.data = U) : ((U = ms(u)), U !== null && (q.data = U)))),
          (U = im ? fm(l, u) : cm(l, u)) &&
            ((q = Ni(r, "onBeforeInput")),
            0 < q.length &&
              (($ = new cs("onBeforeInput", "beforeinput", null, u, h)),
              E.push({ event: $, listeners: q }),
              ($.data = U))),
          iy(E, l, r, u, h));
      }
      ad(E, t);
    });
  }
  function $e(l, t, u) {
    return { instance: l, listener: t, currentTarget: u };
  }
  function Ni(l, t) {
    for (var u = t + "Capture", a = []; l !== null;) {
      var e = l,
        n = e.stateNode;
      if (
        ((e = e.tag),
        (e !== 5 && e !== 26 && e !== 27) ||
          n === null ||
          ((e = he(l, u)),
          e != null && a.unshift($e(l, e, n)),
          (e = he(l, t)),
          e != null && a.push($e(l, e, n))),
        l.tag === 3)
      )
        return a;
      l = l.return;
    }
    return [];
  }
  function sy(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function nd(l, t, u, a, e) {
    for (var n = t._reactName, i = []; u !== null && u !== a;) {
      var f = u,
        c = f.alternate,
        r = f.stateNode;
      if (((f = f.tag), c !== null && c === a)) break;
      ((f !== 5 && f !== 26 && f !== 27) ||
        r === null ||
        ((c = r),
        e
          ? ((r = he(u, n)), r != null && i.unshift($e(u, r, c)))
          : e || ((r = he(u, n)), r != null && i.push($e(u, r, c)))),
        (u = u.return));
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var vy = /\r\n?/g,
    dy = /\u0000|\uFFFD/g;
  function id(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        vy,
        `
`,
      )
      .replace(dy, "");
  }
  function fd(l, t) {
    return ((t = id(t)), id(l) === t);
  }
  function rl(l, t, u, a, e, n) {
    switch (u) {
      case "children":
        if (typeof a == "string")
          t === "body" || (t === "textarea" && a === "") || Aa(l, a);
        else if (typeof a == "number" || typeof a == "bigint")
          t !== "body" && Aa(l, "" + a);
        else return;
        break;
      case "className":
        Tn(l, "class", a);
        break;
      case "tabIndex":
        Tn(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Tn(l, u, a);
        break;
      case "style":
        us(l, a, n);
        return;
      case "data":
        if (t !== "object") {
          Tn(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          l.removeAttribute(u);
          break;
        }
        ((a = En(a)), l.setAttribute(u, a));
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof n == "function" &&
            (u === "formAction"
              ? (t !== "input" && rl(l, t, "name", e.name, e, null),
                rl(l, t, "formEncType", e.formEncType, e, null),
                rl(l, t, "formMethod", e.formMethod, e, null),
                rl(l, t, "formTarget", e.formTarget, e, null))
              : (rl(l, t, "encType", e.encType, e, null),
                rl(l, t, "method", e.method, e, null),
                rl(l, t, "target", e.target, e, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        ((a = En(a)), l.setAttribute(u, a));
        break;
      case "onClick":
        a != null && (l.onclick = Kt);
        return;
      case "onScroll":
        a != null && J("scroll", l);
        return;
      case "onScrollEnd":
        a != null && J("scrollend", l);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(g(61));
          if (((u = a.__html), u != null)) {
            if (e.children != null) throw Error(g(60));
            n?.__html !== u && (l.innerHTML = u);
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        ((u = En(a)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", u));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? l.setAttribute(u, a)
          : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? l.setAttribute(u, "")
          : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        a === !0
          ? l.setAttribute(u, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? l.setAttribute(u, a)
            : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? l.setAttribute(u, a)
          : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? l.removeAttribute(u)
          : l.setAttribute(u, a);
        break;
      case "popover":
        (J("beforetoggle", l), J("toggle", l), Sn(l, "popover", a));
        break;
      case "xlinkActuate":
        nu(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        nu(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        nu(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        nu(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        nu(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        nu(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        nu(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        nu(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        nu(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Sn(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (
          !(2 < u.length) ||
          (u[0] !== "o" && u[0] !== "O") ||
          (u[1] !== "n" && u[1] !== "N")
        )
          ((u = Ur.get(u) || u), Sn(l, u, a));
        else return;
    }
    ul = !0;
  }
  function Ic(l, t, u, a, e, n) {
    switch (u) {
      case "style":
        us(l, a, n);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(g(61));
          if (((u = a.__html), u != null)) {
            if (e.children != null) throw Error(g(60));
            n?.__html !== u && (l.innerHTML = u);
          }
        }
        break;
      case "children":
        if (typeof a == "string") Aa(l, a);
        else if (typeof a == "number" || typeof a == "bigint") Aa(l, "" + a);
        else return;
        break;
      case "onScroll":
        a != null && J("scroll", l);
        return;
      case "onScrollEnd":
        a != null && J("scrollend", l);
        return;
      case "onClick":
        a != null && (l.onclick = Kt);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!Jo.hasOwnProperty(u))
          l: {
            if (
              u[0] === "o" &&
              u[1] === "n" &&
              ((e = u.endsWith("Capture")),
              (n = u.slice(2, e ? u.length - 7 : void 0)),
              (t = l[ct] || null),
              (t = t != null ? t[u] : null),
              typeof t == "function" && l.removeEventListener(n, t, e),
              typeof a == "function")
            ) {
              (typeof t != "function" &&
                t !== null &&
                (u in l
                  ? (l[u] = null)
                  : l.hasAttribute(u) && l.removeAttribute(u)),
                l.addEventListener(n, a, e));
              break l;
            }
            ((ul = !0),
              u in l
                ? (l[u] = a)
                : a === !0
                  ? l.setAttribute(u, "")
                  : Sn(l, u, a));
          }
        return;
    }
    ul = !0;
  }
  function $l(l, t, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (J("error", l), J("load", l));
        var a = !1,
          e = !1,
          n;
        for (n in u)
          if (u.hasOwnProperty(n)) {
            var i = u[n];
            if (i != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(g(137, t));
                default:
                  rl(l, t, n, i, u, null);
              }
          }
        (e && rl(l, t, "srcSet", u.srcSet, u, null),
          a && rl(l, t, "src", u.src, u, null));
        return;
      case "input":
        J("invalid", l);
        var f = (n = i = e = null),
          c = null,
          r = null;
        for (a in u)
          if (u.hasOwnProperty(a)) {
            var h = u[a];
            if (h != null)
              switch (a) {
                case "name":
                  e = h;
                  break;
                case "type":
                  i = h;
                  break;
                case "checked":
                  c = h;
                  break;
                case "defaultChecked":
                  r = h;
                  break;
                case "value":
                  n = h;
                  break;
                case "defaultValue":
                  f = h;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (h != null) throw Error(g(137, t));
                  break;
                default:
                  rl(l, t, a, h, u, null);
              }
          }
        Io(l, n, f, c, r, i, e, !1);
        return;
      case "select":
        (J("invalid", l), (a = i = n = null));
        for (e in u)
          if (u.hasOwnProperty(e) && ((f = u[e]), f != null))
            switch (e) {
              case "value":
                n = f;
                break;
              case "defaultValue":
                i = f;
                break;
              case "multiple":
                a = f;
              default:
                rl(l, t, e, f, u, null);
            }
        ((t = n),
          (u = i),
          (l.multiple = !!a),
          t != null ? _a(l, !!a, t, !1) : u != null && _a(l, !!a, u, !0));
        return;
      case "textarea":
        (J("invalid", l), (n = e = a = null));
        for (i in u)
          if (u.hasOwnProperty(i) && ((f = u[i]), f != null))
            switch (i) {
              case "value":
                a = f;
                break;
              case "defaultValue":
                e = f;
                break;
              case "children":
                n = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(g(91));
                break;
              default:
                rl(l, t, i, f, u, null);
            }
        ls(l, a, e, n);
        return;
      case "option":
        for (c in u)
          u.hasOwnProperty(c) &&
            ((a = u[c]), a != null) &&
            (c === "selected"
              ? (l.selected =
                  a && typeof a != "function" && typeof a != "symbol")
              : rl(l, t, c, a, u, null));
        return;
      case "dialog":
        (J("beforetoggle", l), J("toggle", l), J("cancel", l), J("close", l));
        break;
      case "iframe":
      case "object":
        J("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Fe.length; a++) J(Fe[a], l);
        break;
      case "image":
        (J("error", l), J("load", l));
        break;
      case "details":
        J("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        (J("error", l), J("load", l));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (r in u)
          if (u.hasOwnProperty(r) && ((a = u[r]), a != null))
            switch (r) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(g(137, t));
              default:
                rl(l, t, r, a, u, null);
            }
        return;
      default:
        if (Pi(t)) {
          for (h in u)
            u.hasOwnProperty(h) &&
              ((a = u[h]), a !== void 0 && Ic(l, t, h, a, u, void 0));
          return;
        }
    }
    for (f in u)
      u.hasOwnProperty(f) && ((a = u[f]), a != null && rl(l, t, f, a, u, null));
  }
  var ry = {};
  function my(l, t, u, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null,
          n = null,
          i = null,
          f = null,
          c = null,
          r = null,
          h = null;
        for (y in u) {
          var E = u[y];
          if (u.hasOwnProperty(y) && E != null)
            switch (y) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                c = E;
              default:
                a.hasOwnProperty(y) || rl(l, t, y, null, a, E);
            }
        }
        for (var v in a) {
          var y = a[v];
          if (((E = u[v]), a.hasOwnProperty(v) && (y != null || E != null)))
            switch (v) {
              case "type":
                (y !== E && (ul = !0), (n = y));
                break;
              case "name":
                (y !== E && (ul = !0), (e = y));
                break;
              case "checked":
                (y !== E && (ul = !0), (r = y));
                break;
              case "defaultChecked":
                (y !== E && (ul = !0), (h = y));
                break;
              case "value":
                (y !== E && (ul = !0), (i = y));
                break;
              case "defaultValue":
                (y !== E && (ul = !0), (f = y));
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(g(137, t));
                break;
              default:
                y !== E && rl(l, t, v, y, a, E);
            }
        }
        ki(l, i, f, c, r, h, n, e);
        return;
      case "select":
        y = i = f = v = null;
        for (n in u)
          if (((c = u[n]), u.hasOwnProperty(n) && c != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                y = c;
              default:
                a.hasOwnProperty(n) || rl(l, t, n, null, a, c);
            }
        for (e in a)
          if (
            ((n = a[e]),
            (c = u[e]),
            a.hasOwnProperty(e) && (n != null || c != null))
          )
            switch (e) {
              case "value":
                (n !== c && (ul = !0), (v = n));
                break;
              case "defaultValue":
                (n !== c && (ul = !0), (f = n));
                break;
              case "multiple":
                (n !== c && (ul = !0), (i = n));
              default:
                n !== c && rl(l, t, e, n, a, c);
            }
        ((t = f),
          (u = i),
          (a = y),
          v != null
            ? _a(l, !!u, v, !1)
            : !!a != !!u &&
              (t != null ? _a(l, !!u, t, !0) : _a(l, !!u, u ? [] : "", !1)));
        return;
      case "textarea":
        y = v = null;
        for (f in u)
          if (
            ((e = u[f]),
            u.hasOwnProperty(f) && e != null && !a.hasOwnProperty(f))
          )
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                rl(l, t, f, null, a, e);
            }
        for (i in a)
          if (
            ((e = a[i]),
            (n = u[i]),
            a.hasOwnProperty(i) && (e != null || n != null))
          )
            switch (i) {
              case "value":
                (e !== n && (ul = !0), (v = e));
                break;
              case "defaultValue":
                (e !== n && (ul = !0), (y = e));
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(g(91));
                break;
              default:
                e !== n && rl(l, t, i, e, a, n);
            }
        Po(l, v, y);
        return;
      case "option":
        for (var _ in u)
          ((v = u[_]),
            u.hasOwnProperty(_) &&
              v != null &&
              !a.hasOwnProperty(_) &&
              (_ === "selected" ? (l.selected = !1) : rl(l, t, _, null, a, v)));
        for (c in a)
          ((v = a[c]),
            (y = u[c]),
            a.hasOwnProperty(c) &&
              v !== y &&
              (v != null || y != null) &&
              (c === "selected"
                ? (v !== y && (ul = !0),
                  (l.selected =
                    v && typeof v != "function" && typeof v != "symbol"))
                : rl(l, t, c, v, a, y)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var D in u)
          ((v = u[D]),
            u.hasOwnProperty(D) &&
              v != null &&
              !a.hasOwnProperty(D) &&
              rl(l, t, D, null, a, v));
        for (r in a)
          if (
            ((v = a[r]),
            (y = u[r]),
            a.hasOwnProperty(r) && v !== y && (v != null || y != null))
          )
            switch (r) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(g(137, t));
                break;
              default:
                rl(l, t, r, v, a, y);
            }
        return;
      default:
        if (Pi(t)) {
          for (var V in u)
            ((v = u[V]),
              u.hasOwnProperty(V) &&
                v !== void 0 &&
                !a.hasOwnProperty(V) &&
                Ic(l, t, V, void 0, a, v));
          for (h in a)
            ((v = a[h]),
              (y = u[h]),
              !a.hasOwnProperty(h) ||
                v === y ||
                (v === void 0 && y === void 0) ||
                Ic(l, t, h, v, a, y));
          return;
        }
    }
    for (var d in u)
      ((v = u[d]),
        u.hasOwnProperty(d) &&
          v != null &&
          !a.hasOwnProperty(d) &&
          rl(l, t, d, null, a, v));
    for (E in a)
      ((v = a[E]),
        (y = u[E]),
        !a.hasOwnProperty(E) ||
          v === y ||
          (v == null && y == null) ||
          rl(l, t, E, v, a, y));
  }
  function cd(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function yy() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var l = 0, t = 0, u = performance.getEntriesByType("resource"), a = 0;
        a < u.length;
        a++
      ) {
        var e = u[a],
          n = e.transferSize,
          i = e.initiatorType,
          f = e.duration;
        if (n && f && cd(i)) {
          for (i = 0, f = e.responseEnd, a += 1; a < u.length; a++) {
            var c = u[a],
              r = c.startTime;
            if (r > f) break;
            var h = c.transferSize,
              E = c.initiatorType;
            h &&
              cd(E) &&
              ((c = c.responseEnd), (i += h * (c < f ? 1 : (f - r) / (c - r))));
          }
          if ((--a, (t += (8 * (n + i)) / (e.duration / 1e3)), l++, 10 < l))
            break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection &&
      ((l = navigator.connection.downlink), typeof l == "number")
      ? l
      : 5;
  }
  var Pc = null,
    lo = null;
  function We(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function od(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function sd(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function vd(l, t, u, a) {
    return (
      (u = We(u).createElement(l)),
      (u[Ll] = a),
      (u[ct] = t),
      $l(u, l, t),
      xl(u),
      u
    );
  }
  function to(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var uo = null;
  function hy() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === uo
        ? !1
        : ((uo = l), !0)
      : ((uo = null), !1);
  }
  var ao = typeof setTimeout == "function" ? setTimeout : void 0,
    gy = typeof clearTimeout == "function" ? clearTimeout : void 0,
    dd = typeof Promise == "function" ? Promise : void 0,
    rd =
      typeof requestAnimationFrame == "function" ? requestAnimationFrame : ao,
    Sy =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof dd < "u"
          ? function (l) {
              return dd.resolve(null).then(l).catch(Ty);
            }
          : ao;
  function Ty(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function Vu(l) {
    return l === "head";
  }
  function md(l, t) {
    var u = t,
      a = 0;
    do {
      var e = u.nextSibling;
      if ((l.removeChild(u), e && e.nodeType === 8))
        if (((u = e.data), u === "/$" || u === "/&")) {
          if (a === 0) {
            (l.removeChild(e), ce(t));
            return;
          }
          a--;
        } else if (
          u === "$" ||
          u === "$?" ||
          u === "$~" ||
          u === "$!" ||
          u === "&"
        )
          a++;
        else if (u === "html") vo(l.ownerDocument.documentElement);
        else if (u === "head") {
          ((u = l.ownerDocument.head), vo(u));
          for (var n = u.firstChild; n;) {
            var i = n.nextSibling,
              f = n.nodeName;
            (n[me] ||
              f === "SCRIPT" ||
              f === "STYLE" ||
              (f === "LINK" && n.rel.toLowerCase() === "stylesheet") ||
              u.removeChild(n),
              (n = i));
          }
        } else u === "body" && vo(l.ownerDocument.body);
      u = e;
    } while (u);
    ce(t);
  }
  function yd(l, t) {
    var u = l;
    l = 0;
    do {
      var a = u.nextSibling;
      if (
        (u.nodeType === 1
          ? t
            ? ((u._stashedDisplay = u.style.display),
              (u.style.display = "none"))
            : ((u.style.display = u._stashedDisplay || ""),
              u.getAttribute("style") === "" && u.removeAttribute("style"))
          : u.nodeType === 3 &&
            (t
              ? ((u._stashedText = u.nodeValue), (u.nodeValue = ""))
              : (u.nodeValue = u._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((u = a.data), u === "/$")) {
          if (l === 0) break;
          l--;
        } else (u !== "$" && u !== "$?" && u !== "$~" && u !== "$!") || l++;
      u = a;
    } while (u);
  }
  function hd(l, t, u) {
    if (
      ((t = CSS.escape(t) !== t ? "r-" + btoa(t).replace(/=/g, "") : t),
      (l.style.viewTransitionName = t),
      u != null && (l.style.viewTransitionClass = u),
      (u = getComputedStyle(l)),
      u.display === "inline")
    ) {
      if (((t = l.getClientRects()), t.length === 1)) var a = 1;
      else
        for (var e = (a = 0); e < t.length; e++) {
          var n = t[e];
          0 < n.width && 0 < n.height && a++;
        }
      a === 1 &&
        ((l = l.style),
        (l.display = t.length === 1 ? "inline-block" : "block"),
        (l.marginTop = "-" + u.paddingTop),
        (l.marginBottom = "-" + u.paddingBottom));
    }
  }
  function gd(l, t) {
    ((l = l.style), (t = t.style));
    var u =
      t != null
        ? t.hasOwnProperty("viewTransitionName")
          ? t.viewTransitionName
          : t.hasOwnProperty("view-transition-name")
            ? t["view-transition-name"]
            : null
        : null;
    ((l.viewTransitionName =
      u == null || typeof u == "boolean" ? "" : ("" + u).trim()),
      (u =
        t != null
          ? t.hasOwnProperty("viewTransitionClass")
            ? t.viewTransitionClass
            : t.hasOwnProperty("view-transition-class")
              ? t["view-transition-class"]
              : null
          : null),
      (l.viewTransitionClass =
        u == null || typeof u == "boolean" ? "" : ("" + u).trim()),
      l.display === "inline-block" &&
        (t == null
          ? (l.display = l.margin = "")
          : ((u = t.display),
            (l.display = u == null || typeof u == "boolean" ? "" : u),
            (u = t.margin),
            u != null
              ? (l.margin = u)
              : ((u = t.hasOwnProperty("marginTop")
                  ? t.marginTop
                  : t["margin-top"]),
                (l.marginTop = u == null || typeof u == "boolean" ? "" : u),
                (t = t.hasOwnProperty("marginBottom")
                  ? t.marginBottom
                  : t["margin-bottom"]),
                (l.marginBottom =
                  t == null || typeof t == "boolean" ? "" : t)))));
  }
  function Ey(l, t, u) {
    return (
      (u = u.ownerDocument.defaultView),
      {
        rect: l,
        abs: t.position === "absolute" || t.position === "fixed",
        clip:
          t.clipPath !== "none" ||
          t.overflow !== "visible" ||
          t.filter !== "none" ||
          t.mask !== "none" ||
          t.mask !== "none" ||
          t.borderRadius !== "0px",
        view:
          0 <= l.bottom &&
          0 <= l.right &&
          l.top <= u.innerHeight &&
          l.left <= u.innerWidth,
      }
    );
  }
  function eo(l) {
    var t = l.getBoundingClientRect(),
      u = getComputedStyle(l);
    return Ey(t, u, l);
  }
  function by(l) {
    return l.documentElement.clientHeight;
  }
  function zy(l) {
    (this.addEventListener("load", l), this.addEventListener("error", l));
  }
  function Oy(l, t, u, a, e, n, i, f, c) {
    var r = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var h = r.startViewTransition({
        update: function () {
          var v = r.defaultView,
            y = v.navigation && v.navigation.transition,
            _ = r.fonts.status;
          a();
          var D = [];
          if (
            (_ === "loaded" &&
              (by(r), r.fonts.status === "loading" && D.push(r.fonts.ready)),
            (_ = D.length),
            l !== null)
          )
            for (var V = l.suspenseyImages, d = 0, o = 0; o < V.length; o++) {
              var m = V[o];
              if (!m.complete) {
                var T = m.getBoundingClientRect();
                if (
                  0 < T.bottom &&
                  0 < T.right &&
                  T.top < v.innerHeight &&
                  T.left < v.innerWidth
                ) {
                  if (((d += xd(m)), d > Mi)) {
                    D.length = _;
                    break;
                  }
                  ((m = new Promise(zy.bind(m))), D.push(m));
                }
              }
            }
          if (0 < D.length)
            return (
              (v = Promise.race([
                Promise.all(D),
                new Promise(function (N) {
                  return setTimeout(N, 500);
                }),
              ]).then(e, e)),
              (y ? Promise.allSettled([y.finished, v]) : v).then(n, n)
            );
          if ((e(), y)) return y.finished.then(n, n);
          n();
        },
        types: u,
      });
      r.__reactViewTransition = h;
      var E = [];
      return (
        h.ready.then(
          function () {
            for (
              var v = r.documentElement.getAnimations({ subtree: !0 }), y = 0;
              y < v.length;
              y++
            ) {
              var _ = v[y],
                D = _.effect,
                V = D.pseudoElement;
              if (V != null && V.startsWith("::view-transition")) {
                (E.push(_), (_ = D.getKeyframes()));
                for (var d = (V = void 0), o = !0, m = 0; m < _.length; m++) {
                  var T = _[m],
                    N = T.width;
                  if (V === void 0) V = N;
                  else if (V !== N) {
                    o = !1;
                    break;
                  }
                  if (((N = T.height), d === void 0)) d = N;
                  else if (d !== N) {
                    o = !1;
                    break;
                  }
                  (delete T.width,
                    delete T.height,
                    T.transform === "none" && delete T.transform);
                }
                o &&
                  V !== void 0 &&
                  d !== void 0 &&
                  (D.setKeyframes(_),
                  (o = getComputedStyle(D.target, D.pseudoElement)),
                  o.width !== V || o.height !== d) &&
                  ((o = _[0]),
                  (o.width = V),
                  (o.height = d),
                  (o = _[_.length - 1]),
                  (o.width = V),
                  (o.height = d),
                  D.setKeyframes(_));
              }
            }
            i();
          },
          function (v) {
            r.__reactViewTransition === h && (r.__reactViewTransition = null);
            try {
              (typeof v == "object" &&
                v !== null &&
                v.name === "InvalidStateError" &&
                (v.message ===
                  "View transition was skipped because document visibility state is hidden." ||
                  v.message ===
                    "Skipping view transition because document visibility state has become hidden." ||
                  v.message ===
                    "Skipping view transition because viewport size changed." ||
                  v.message ===
                    "Transition was aborted because of invalid state") &&
                (v = null),
                v !== null && c(v));
            } finally {
              (a(), e(), i());
            }
          },
        ),
        h.finished.finally(function () {
          for (var v = 0; v < E.length; v++) E[v].cancel();
          (r.__reactViewTransition === h && (r.__reactViewTransition = null),
            f());
        }),
        h
      );
    } catch {
      return (a(), e(), i(), null);
    }
  }
  function ga(l, t) {
    ((this._scope = document.documentElement),
      (this._selector = "::view-transition-" + l + "(" + t + ")"));
  }
  ((ga.prototype.animate = function (l, t) {
    return (
      (t = typeof t == "number" ? { duration: t } : X({}, t)),
      (t.pseudoElement = this._selector),
      this._scope.animate(l, t)
    );
  }),
    (ga.prototype.getAnimations = function () {
      for (
        var l = this._scope,
          t = this._selector,
          u = l.getAnimations({ subtree: !0 }),
          a = [],
          e = 0;
        e < u.length;
        e++
      ) {
        var n = u[e].effect;
        n !== null && n.target === l && n.pseudoElement === t && a.push(u[e]);
      }
      return a;
    }),
    (ga.prototype.getComputedStyle = function () {
      return getComputedStyle(this._scope, this._selector);
    }));
  function Sd(l) {
    return {
      name: l,
      group: new ga("group", l),
      imagePair: new ga("image-pair", l),
      old: new ga("old", l),
      new: new ga("new", l),
    };
  }
  function _t(l) {
    ((this._fragmentFiber = l),
      (this._observers = this._eventListeners = null));
  }
  _t.prototype.addEventListener = function (l, t, u) {
    var a = null,
      e = null;
    if (!(
      u != null &&
      typeof u != "boolean" &&
      ((a = u.signal || null), a !== null && a.aborted)
    )) {
      this._eventListeners === null && (this._eventListeners = []);
      var n = this._eventListeners;
      if (Ed(n, l, t, u) === -1) {
        var i = this,
          f = t;
        (u != null &&
          typeof u != "boolean" &&
          u.once === !0 &&
          (f = function (c) {
            (i.removeEventListener(l, t, u),
              typeof t == "function" ? t.call(this, c) : t.handleEvent(c));
          }),
          a !== null &&
            ((e = i.removeEventListener.bind(i, l, t, u)),
            a.addEventListener("abort", e, { once: !0 }),
            (e = a.removeEventListener.bind(a, "abort", e))),
          (a = ue(u)),
          n.push({
            type: l,
            listener: t,
            optionsOrUseCapture: u,
            attachedListener: f,
            cleanup: e,
          }),
          S(this._fragmentFiber.child, !1, _y, l, f, a));
      }
      this._eventListeners = n;
    }
  };
  function _y(l, t, u, a) {
    return (ol(l).addEventListener(t, u, a), !1);
  }
  _t.prototype.removeEventListener = function (l, t, u) {
    var a = this._eventListeners;
    if (a !== null && ((t = Ed(a, l, t, u)), t !== -1)) {
      var e = a[t];
      u = e.attachedListener;
      var n = e.cleanup;
      ((e = ue(e.optionsOrUseCapture)),
        S(this._fragmentFiber.child, !1, Ay, l, u, e),
        a.splice(t, 1),
        n !== null && n());
    }
  };
  function Ay(l, t, u, a) {
    return (ol(l).removeEventListener(t, u, a), !1);
  }
  function ue(l) {
    return l != null &&
      typeof l != "boolean" &&
      (l.once === !0 || l.signal instanceof AbortSignal)
      ? { capture: l.capture, passive: l.passive }
      : l;
  }
  function Td(l) {
    return l == null
      ? "c=0"
      : typeof l == "boolean"
        ? "c=" + (l ? "1" : "0")
        : "c=" + (l.capture ? "1" : "0");
  }
  function Ed(l, t, u, a) {
    if (l.length === 0) return -1;
    a = Td(a);
    for (var e = 0; e < l.length; e++) {
      var n = l[e];
      if (n.type === t && n.listener === u && Td(n.optionsOrUseCapture) === a)
        return e;
    }
    return -1;
  }
  ((_t.prototype.dispatchEvent = function (l) {
    var t = R(this._fragmentFiber);
    if (t === null) return !0;
    t = ol(t);
    var u = this._eventListeners;
    if ((u !== null && 0 < u.length) || !l.bubbles) {
      var a =
        t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
      if (u)
        for (var e = 0; e < u.length; e++) {
          var n = u[e];
          a.addEventListener(
            n.type,
            n.attachedListener,
            ue(n.optionsOrUseCapture),
          );
        }
      if ((t.appendChild(a), (l = a.dispatchEvent(l)), u))
        for (e = 0; e < u.length; e++)
          ((n = u[e]),
            a.removeEventListener(
              n.type,
              n.attachedListener,
              ue(n.optionsOrUseCapture),
            ));
      return (t.removeChild(a), l);
    }
    return t.dispatchEvent(l);
  }),
    (_t.prototype.focus = function (l) {
      S(this._fragmentFiber.child, !0, bd, l, void 0, void 0);
    }));
  function bd(l, t) {
    return l.tag === 6 ? !1 : ((l = ol(l)), By(l, t));
  }
  _t.prototype.focusLast = function (l) {
    var t = [];
    S(this._fragmentFiber.child, !0, no, t, void 0, void 0);
    for (var u = t.length - 1; 0 <= u && !bd(t[u], l); u--);
  };
  function no(l, t) {
    return (t.push(l), !1);
  }
  _t.prototype.blur = function () {
    var l = R(this._fragmentFiber);
    l !== null &&
      ((l = ol(l)),
      (l = We(l).activeElement),
      l !== null && S(this._fragmentFiber.child, !1, Ny, l, void 0, void 0));
  };
  function Ny(l, t) {
    return l.tag === 6
      ? !1
      : ((l = ol(l)), l === t || l.contains(t) ? (t.blur(), !0) : !1);
  }
  _t.prototype.observeUsing = function (l) {
    (this._observers === null && (this._observers = new Set()),
      this._observers.add(l),
      S(this._fragmentFiber.child, !1, Dy, l, void 0, void 0));
  };
  function Dy(l, t) {
    return (l.tag === 6 || ((l = ol(l)), t.observe(l)), !1);
  }
  _t.prototype.unobserveUsing = function (l) {
    var t = this._observers;
    if (t !== null && t.has(l)) {
      (t.delete(l), S(this._fragmentFiber.child, !1, Cy, l, void 0, void 0));
      for (var u = (t = 0); u < Vt.length; u++) {
        var a = Vt[u];
        a.fragmentInstance === this && a.observer === l
          ? l.unobserve(a.instance)
          : (Vt[t++] = a);
      }
      Vt.length = t;
    }
  };
  function Cy(l, t) {
    return (l.tag === 6 || ((l = ol(l)), t.unobserve(l)), !1);
  }
  var Vt = [],
    io = !1;
  function My(l, t, u) {
    (Vt.push({ fragmentInstance: l, observer: t, instance: u }),
      io ||
        ((io = !0),
        xy(function () {
          io = !1;
          var a = Vt;
          Vt = [];
          for (var e = 0; e < a.length; e++) {
            var n = a[e];
            n.observer.unobserve(n.instance);
          }
        })));
  }
  _t.prototype.getClientRects = function () {
    var l = [];
    return (S(this._fragmentFiber.child, !1, Ry, l, void 0, void 0), l);
  };
  function Ry(l, t) {
    if (l.tag === 6) {
      l = l.stateNode;
      var u = l.ownerDocument.createRange();
      (u.selectNodeContents(l), t.push.apply(t, u.getClientRects()));
    } else ((l = ol(l)), t.push.apply(t, l.getClientRects()));
    return !1;
  }
  ((_t.prototype.getRootNode = function (l) {
    var t = R(this._fragmentFiber);
    return t === null ? this : ol(t).getRootNode(l);
  }),
    (_t.prototype.compareDocumentPosition = function (l) {
      var t = R(this._fragmentFiber);
      if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
      var u = [];
      S(this._fragmentFiber.child, !1, no, u, void 0, void 0);
      var a = ol(t);
      if (u.length === 0) {
        if (((u = a), cl(this._fragmentFiber))) {
          l: {
            for (t = this._fragmentFiber.return; t !== null;) {
              if (t.tag === 4) {
                t = t.stateNode.containerInfo;
                break l;
              }
              if (t.tag === 3 || t.tag === 5 || t.tag === 27) break;
              t = t.return;
            }
            t = null;
          }
          t != null && (u = t);
        }
        t = this._fragmentFiber;
        var e = (a = u.compareDocumentPosition(l));
        return (
          u === l
            ? (e = Node.DOCUMENT_POSITION_CONTAINS)
            : a & Node.DOCUMENT_POSITION_CONTAINED_BY &&
              ((u = Ul(t)[1]),
              u === null
                ? (e = Node.DOCUMENT_POSITION_PRECEDING)
                : ((l = ol(u).compareDocumentPosition(l)),
                  (e =
                    l === 0 || l & Node.DOCUMENT_POSITION_FOLLOWING
                      ? Node.DOCUMENT_POSITION_FOLLOWING
                      : Node.DOCUMENT_POSITION_PRECEDING))),
          (e |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)
        );
      }
      ((t = ol(u[0])), (e = ol(u[u.length - 1])));
      var n = cl(this._fragmentFiber) ? t.parentElement : a;
      if (n == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
      ((a = n.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY),
        (n =
          n.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY));
      var i = t.compareDocumentPosition(l),
        f = e.compareDocumentPosition(l),
        c =
          i & Node.DOCUMENT_POSITION_CONTAINED_BY ||
          f & Node.DOCUMENT_POSITION_CONTAINED_BY;
      return (
        (f =
          a &&
          n &&
          i & Node.DOCUMENT_POSITION_FOLLOWING &&
          f & Node.DOCUMENT_POSITION_PRECEDING),
        (t =
          (a && t === l) || (n && e === l) || c || f
            ? Node.DOCUMENT_POSITION_CONTAINED_BY
            : (!a && t === l) || (!n && e === l)
              ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
              : i),
        t & Node.DOCUMENT_POSITION_DISCONNECTED ||
        t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC ||
        Uy(t, this._fragmentFiber, u[0], u[u.length - 1], l)
          ? t
          : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
      );
    }));
  function Uy(l, t, u, a, e) {
    var n = Wu(e);
    if (l & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if ((u = !!n))
        l: {
          for (; n !== null;) {
            if (n.tag === 7 && (n === t || n.alternate === t)) {
              u = !0;
              break l;
            }
            n = n.return;
          }
          u = !1;
        }
      return u;
    }
    if (l & Node.DOCUMENT_POSITION_CONTAINS) {
      if (n === null)
        return (
          (n = e.ownerDocument),
          e === n || e === n.documentElement || e === n.body
        );
      l: {
        for (n = t, t = R(t); n !== null;) {
          if (!(
            (n.tag !== 5 && n.tag !== 3 && n.tag !== 27) ||
            (n !== t && n.alternate !== t)
          )) {
            n = !0;
            break l;
          }
          n = n.return;
        }
        n = !1;
      }
      return n;
    }
    return l & Node.DOCUMENT_POSITION_PRECEDING
      ? ((t = !!n) &&
          !(t = n === u) &&
          ((t = gl(u, n, At)),
          t === null
            ? (t = !1)
            : (S(t, !0, kl, n, u), (n = Pl), (Pl = null), (t = n !== null))),
        t)
      : l & Node.DOCUMENT_POSITION_FOLLOWING
        ? ((t = !!n) &&
            !(t = n === a) &&
            ((t = gl(a, n, At)),
            t === null
              ? (t = !1)
              : (S(t, !0, it, n, a),
                (n = Pl),
                (Vl = Pl = null),
                (t = n !== null))),
          t)
        : !1;
  }
  function zd(l, t) {
    var u = l.ownerDocument.createRange();
    (u.selectNodeContents(l),
      (l = u.getBoundingClientRect()),
      window.scrollTo(
        window.scrollX + l.left,
        t
          ? window.scrollY + l.top
          : window.scrollY + l.bottom - window.innerHeight,
      ));
  }
  _t.prototype.scrollIntoView = function (l) {
    if (typeof l == "object") throw Error(g(566));
    var t = [];
    S(this._fragmentFiber.child, !1, no, t, void 0, void 0);
    var u = l !== !1;
    if (t.length === 0) {
      var a = Ul(this._fragmentFiber);
      if (
        ((a = u ? a[1] || a[0] || R(this._fragmentFiber) : a[0] || a[1]),
        a === null)
      )
        return;
      if (a.tag === 6) {
        ((l = ol(a)), zd(l, u));
        return;
      }
      if (((a = ol(a)), a.nodeType !== 9)) {
        if (a.nodeType === 11) {
          ((u = "host" in a ? a.host : null),
            u !== null && u.scrollIntoView(l));
          return;
        }
        a.scrollIntoView(l);
      }
    }
    for (a = u ? t.length - 1 : 0; a !== (u ? -1 : t.length);) {
      var e = t[a];
      (e.tag === 6 ? ((e = ol(e)), zd(e, u)) : ol(e).scrollIntoView(l),
        (a += u ? -1 : 1));
    }
  };
  function Hy(l, t) {
    return ((l = ol(l)), Od(l, t), !1);
  }
  function Od(l, t) {
    (l.reactFragments == null && (l.reactFragments = new Set()),
      l.reactFragments.add(t));
  }
  function _d(l, t) {
    var u = t._eventListeners;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = u[a];
        l.addEventListener(
          e.type,
          e.attachedListener,
          ue(e.optionsOrUseCapture),
        );
      }
    l.nodeType !== 3 &&
      ((u = t._observers),
      u !== null &&
        u.forEach(function (n) {
          for (var i = 0, f = 0; f < Vt.length; f++) {
            var c = Vt[f];
            (c.fragmentInstance !== t ||
              c.observer !== n ||
              c.instance !== l) &&
              (Vt[i++] = c);
          }
          ((Vt.length = i), n.observe(l));
        }),
      Od(l, t));
  }
  function jy(l, t) {
    var u = t._eventListeners;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = u[a];
        l.removeEventListener(
          e.type,
          e.attachedListener,
          ue(e.optionsOrUseCapture),
        );
      }
    l.nodeType !== 3 &&
      ((u = t._observers),
      u !== null &&
        u.forEach(function (n) {
          typeof n.rootMargin == "string" ? My(t, n, l) : n.unobserve(l);
        }),
      l.reactFragments != null && l.reactFragments.delete(t));
  }
  function fo(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
      var u = t;
      switch (((t = t.nextSibling), u.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (fo(u), gn(u));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function py(l, t, u, a) {
    for (; l.nodeType === 1;) {
      var e = u;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (a) {
        if (!l[me])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((n = l.getAttribute("rel")),
                n === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== e.rel ||
                l.getAttribute("href") !==
                  (e.href == null || e.href === "" ? null : e.href) ||
                l.getAttribute("crossorigin") !==
                  (e.crossOrigin == null ? null : e.crossOrigin) ||
                l.getAttribute("title") !== (e.title == null ? null : e.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((n = l.getAttribute("src")),
                (n !== (e.src == null ? null : e.src) ||
                  l.getAttribute("type") !== (e.type == null ? null : e.type) ||
                  l.getAttribute("crossorigin") !==
                    (e.crossOrigin == null ? null : e.crossOrigin)) &&
                  n &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (((l = pt(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function qy(l, t, u) {
    if (t === "") return null;
    for (; l.nodeType !== 3;)
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !u) ||
        ((l = pt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Ad(l, t) {
    for (; l.nodeType !== 8;)
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !t) ||
        ((l = pt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function co(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function oo(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState !== "loading")
    );
  }
  function Yy(l, t) {
    var u = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || u.readyState !== "loading") t();
    else {
      var a = function () {
        (t(), u.removeEventListener("DOMContentLoaded", a));
      };
      (u.addEventListener("DOMContentLoaded", a), (l._reactRetry = a));
    }
  }
  function pt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var so = null;
  function Nd(l) {
    l = l.nextSibling;
    for (var t = 0; l;) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (t === 0) return pt(l.nextSibling);
          t--;
        } else
          (u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&") ||
            t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Dd(l) {
    l = l.previousSibling;
    for (var t = 0; l;) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?" || u === "$~" || u === "&") {
          if (t === 0) return l;
          t--;
        } else (u !== "/$" && u !== "/&") || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function By(l, t) {
    function u() {
      a = !0;
    }
    if (l.ownerDocument.activeElement === l) return !0;
    var a = !1;
    try {
      (l.ownerDocument.addEventListener("focus", u, !0),
        (l.focus || HTMLElement.prototype.focus).call(l, t));
    } finally {
      l.ownerDocument.removeEventListener("focus", u, !0);
    }
    return a;
  }
  function xy(l) {
    rd(function () {
      rd(function (t) {
        return l(t);
      });
    });
  }
  function Cd(l, t, u) {
    switch (((t = We(u)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(g(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(g(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(g(454));
        return l;
      default:
        throw Error(g(451));
    }
  }
  function Md(l, t, u) {
    for (var a in u) {
      var e = u[a];
      u.hasOwnProperty(a) && e != null && rl(l, t, a, null, ry, e);
    }
    (u.dangerouslySetInnerHTML != null && (l.textContent = ""),
      l.onclick === Kt && (l.onclick = null),
      gn(l));
  }
  function vo(l) {
    for (var t = l.attributes; t.length;) l.removeAttributeNode(t[0]);
    gn(l);
  }
  var qt = new Map(),
    Rd = new Set();
  function ke(l) {
    if (typeof l.getRootNode == "function") {
      var t = l.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Su = x.d;
  x.d = { f: Gy, r: Xy, D: Qy, C: Vy, L: Zy, m: Ly, X: Jy, S: Ky, M: wy };
  function Gy() {
    var l = Su.f(),
      t = Ei();
    return l || t;
  }
  function Xy(l) {
    var t = ba(l);
    t !== null && t.tag === 5 && t.type === "form" ? H0(t) : Su.r(l);
  }
  var ae = typeof document > "u" ? null : document;
  function Ud(l, t, u) {
    var a = ae;
    if (a && typeof t == "string" && t) {
      var e = Dt(t);
      ((e = 'link[rel="' + l + '"][href="' + e + '"]'),
        typeof u == "string" && (e += '[crossorigin="' + u + '"]'),
        Rd.has(e) ||
          (Rd.add(e),
          (l = { rel: l, crossOrigin: u, href: t }),
          a.querySelector(e) === null &&
            ((t = a.createElement("link")),
            $l(t, "link", l),
            xl(t),
            a.head.appendChild(t))));
    }
  }
  function Qy(l) {
    (Su.D(l), Ud("dns-prefetch", l, null));
  }
  function Vy(l, t) {
    (Su.C(l, t), Ud("preconnect", l, t));
  }
  function Zy(l, t, u) {
    Su.L(l, t, u);
    var a = ae;
    if (a && l && t) {
      var e = 'link[rel="preload"][as="' + Dt(t) + '"]';
      t === "image" && u && u.imageSrcSet
        ? ((e += '[imagesrcset="' + Dt(u.imageSrcSet) + '"]'),
          typeof u.imageSizes == "string" &&
            (e += '[imagesizes="' + Dt(u.imageSizes) + '"]'))
        : (e += '[href="' + Dt(l) + '"]');
      var n = e;
      switch (t) {
        case "style":
          n = ee(l);
          break;
        case "script":
          n = ne(l);
      }
      if (!(
        qt.has(n) ||
        ((l = X(
          {
            rel: "preload",
            href: t === "image" && u && u.imageSrcSet ? void 0 : l,
            as: t,
          },
          u,
        )),
        qt.set(n, l),
        a.querySelector(e) !== null ||
          (t === "style" && a.querySelector(Ie(n))) ||
          (t === "script" && a.querySelector(Pe(n))))
      )) {
        var i = a.createElement("link");
        ($l(i, "link", l),
          t === "style" &&
            ((i[hn] = !0),
            (i.onload = i.onerror =
              function () {
                Lo(i);
              })),
          xl(i),
          a.head.appendChild(i));
      }
    }
  }
  function Ly(l, t) {
    Su.m(l, t);
    var u = ae;
    if (u && l) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        e =
          'link[rel="modulepreload"][as="' + Dt(a) + '"][href="' + Dt(l) + '"]',
        n = e;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = ne(l);
      }
      if (
        !qt.has(n) &&
        ((l = X({ rel: "modulepreload", href: l }, t)),
        qt.set(n, l),
        u.querySelector(e) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(Pe(n))) return;
        }
        ((a = u.createElement("link")),
          $l(a, "link", l),
          xl(a),
          u.head.appendChild(a));
      }
    }
  }
  function Ky(l, t, u) {
    Su.S(l, t, u);
    var a = ae;
    if (a && l) {
      var e = za(a).hoistableStyles,
        n = ee(l);
      t = t || "default";
      var i = e.get(n);
      if (!i) {
        var f = { loading: 0, preload: null };
        if ((i = a.querySelector(Ie(n)))) f.loading = 5;
        else {
          ((l = X({ rel: "stylesheet", href: l, "data-precedence": t }, u)),
            (u = qt.get(n)) && ro(l, u));
          var c = (i = a.createElement("link"));
          (xl(c),
            $l(c, "link", l),
            (c._p = new Promise(function (r, h) {
              ((c.onload = r), (c.onerror = h));
            })),
            c.addEventListener("load", function () {
              f.loading |= 1;
            }),
            c.addEventListener("error", function () {
              f.loading |= 2;
            }),
            (f.loading |= 4),
            Di(i, t, a));
        }
        ((i = { type: "stylesheet", instance: i, count: 1, state: f }),
          e.set(n, i));
      }
    }
  }
  function Jy(l, t) {
    Su.X(l, t);
    var u = ae;
    if (u && l) {
      var a = za(u).hoistableScripts,
        e = ne(l),
        n = a.get(e);
      n ||
        ((n = u.querySelector(Pe(e))),
        n ||
          ((l = X({ src: l, async: !0 }, t)),
          (t = qt.get(e)) && mo(l, t),
          (n = u.createElement("script")),
          xl(n),
          $l(n, "link", l),
          u.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(e, n));
    }
  }
  function wy(l, t) {
    Su.M(l, t);
    var u = ae;
    if (u && l) {
      var a = za(u).hoistableScripts,
        e = ne(l),
        n = a.get(e);
      n ||
        ((n = u.querySelector(Pe(e))),
        n ||
          ((l = X({ src: l, async: !0, type: "module" }, t)),
          (t = qt.get(e)) && mo(l, t),
          (n = u.createElement("script")),
          xl(n),
          $l(n, "link", l),
          u.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(e, n));
    }
  }
  function Hd(l, t, u, a) {
    var e = (e = Tu.current) ? ke(e) : null;
    if (!e) throw Error(g(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string"
          ? ((u = ee(u.href)),
            (t = za(e).hoistableStyles),
            (a = t.get(u)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              t.set(u, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          u.rel === "stylesheet" &&
          typeof u.href == "string" &&
          typeof u.precedence == "string"
        ) {
          l = ee(u.href);
          var n = za(e).hoistableStyles,
            i = n.get(l);
          if (
            (i ||
              ((e = e.ownerDocument || e),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(l, i),
              (n = e.querySelector(Ie(l)))
                ? n._p || ((i.instance = n), (i.state.loading = 5))
                : ((n = qt.get(l)),
                  n ||
                    ((n = {
                      rel: "preload",
                      as: "style",
                      href: u.href,
                      crossOrigin: u.crossOrigin,
                      integrity: u.integrity,
                      media: u.media,
                      hrefLang: u.hrefLang,
                      referrerPolicy: u.referrerPolicy,
                    }),
                    qt.set(l, n)),
                  Fy(e, l, n, i.state))),
            t && a === null)
          )
            throw Error(g(528, ""));
          return i;
        }
        if (t && a !== null) throw Error(g(529, ""));
        return null;
      case "script":
        return (
          (t = u.async),
          (u = u.src),
          typeof u == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((u = ne(u)),
              (t = za(e).hoistableScripts),
              (a = t.get(u)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                t.set(u, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(g(444, l));
    }
  }
  function ee(l) {
    return 'href="' + Dt(l) + '"';
  }
  function Ie(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function jd(l) {
    return X({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function Fy(l, t, u, a) {
    if ((t = l.querySelector('link[rel="preload"][as="style"][' + t + "]"))) {
      if (t[hn] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      ((t = l.createElement("link")),
        (t[hn] = !0),
        (t.onload = t.onerror = Lo.bind(null, t)),
        $l(t, "link", u),
        xl(t),
        l.head.appendChild(t));
    ((a.preload = t),
      t.addEventListener("load", function () {
        return (a.loading |= 1);
      }),
      t.addEventListener("error", function () {
        return (a.loading |= 2);
      }));
  }
  function ne(l) {
    return '[src="' + Dt(l) + '"]';
  }
  function Pe(l) {
    return "script[async]" + l;
  }
  function pd(l, t, u) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = l.querySelector('style[data-href~="' + Dt(u.href) + '"]');
          if (a) return ((t.instance = a), xl(a), a);
          var e = X({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (l.ownerDocument || l).createElement("style")),
            xl(a),
            $l(a, "style", e),
            Di(a, u.precedence, l),
            (t.instance = a)
          );
        case "stylesheet":
          e = ee(u.href);
          var n = l.querySelector(Ie(e));
          if (n) return ((t.state.loading |= 4), (t.instance = n), xl(n), n);
          ((a = jd(u)),
            (e = qt.get(e)) && ro(a, e),
            (n = (l.ownerDocument || l).createElement("link")),
            xl(n));
          var i = n;
          return (
            (i._p = new Promise(function (f, c) {
              ((i.onload = f), (i.onerror = c));
            })),
            $l(n, "link", a),
            (t.state.loading |= 4),
            Di(n, u.precedence, l),
            (t.instance = n)
          );
        case "script":
          return (
            (n = ne(u.src)),
            (e = l.querySelector(Pe(n)))
              ? ((t.instance = e), xl(e), e)
              : ((a = u),
                (e = qt.get(n)) && ((a = X({}, u)), mo(a, e)),
                (l = l.ownerDocument || l),
                (e = l.createElement("script")),
                xl(e),
                $l(e, "link", a),
                l.head.appendChild(e),
                (t.instance = e))
          );
        case "void":
          return null;
        default:
          throw Error(g(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), Di(a, u.precedence, l));
    return t.instance;
  }
  function Di(l, t, u) {
    for (
      var a = u.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        e = a.length ? a[a.length - 1] : null,
        n = e,
        i = 0;
      i < a.length;
      i++
    ) {
      var f = a[i];
      if (f.dataset.precedence === t) n = f;
      else if (n !== e) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = u.nodeType === 9 ? u.head : u), t.insertBefore(l, t.firstChild));
  }
  function ro(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title));
  }
  function mo(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity));
  }
  var Ci = null;
  function qd(l, t, u) {
    if (Ci === null) {
      var a = new Map(),
        e = (Ci = new Map());
      e.set(u, a);
    } else ((e = Ci), (a = e.get(u)), a || ((a = new Map()), e.set(u, a)));
    if (a.has(l)) return a;
    for (
      a.set(l, null), u = u.getElementsByTagName(l), e = 0;
      e < u.length;
      e++
    ) {
      var n = u[e];
      if (
        !(
          n[me] ||
          n[Ll] ||
          (l === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = n.getAttribute(t) || "";
        i = l + i;
        var f = a.get(i);
        f ? f.push(n) : a.set(i, [n]);
      }
    }
    return a;
  }
  function yo(l, t, u) {
    ((l = l.ownerDocument || l),
      l.head.insertBefore(
        u,
        t === "title" ? l.querySelector("head > title") : null,
      ));
  }
  function $y(l, t, u) {
    if (u === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        return t.rel === "stylesheet"
          ? ((l = t.disabled), typeof t.precedence == "string" && l == null)
          : !0;
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Yd(l, t) {
    return (
      l === "img" &&
      t.src != null &&
      t.src !== "" &&
      t.onLoad == null &&
      t.loading !== "lazy"
    );
  }
  function Bd(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function xd(l) {
    return (
      (l.width || 100) *
      (l.height || 100) *
      (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) *
      0.25
    );
  }
  function Gd(l, t) {
    typeof t.decode == "function" &&
      (l.imgCount++,
      t.complete || ((l.imgBytes += xd(t)), l.suspenseyImages.push(t)),
      (l = Iy.bind(l)),
      t.decode().then(l, l));
  }
  function Wy(l, t, u, a) {
    if (
      u.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (u.state.loading & 4) === 0
    ) {
      if (u.instance === null) {
        var e = ee(a.href),
          n = t.querySelector(Ie(e));
        if (n) {
          ((t = n._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (l.count++, (l = ln.bind(l)), t.then(l, l)),
            (u.state.loading |= 4),
            (u.instance = n),
            xl(n));
          return;
        }
        ((n = t.ownerDocument || t),
          (a = jd(a)),
          (e = qt.get(e)) && ro(a, e),
          (n = n.createElement("link")),
          xl(n));
        var i = n;
        ((i._p = new Promise(function (f, c) {
          ((i.onload = f), (i.onerror = c));
        })),
          $l(n, "link", a),
          (u.instance = n));
      }
      (l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(u, t),
        (t = u.state.preload) &&
          (u.state.loading & 3) === 0 &&
          (l.count++,
          (u = ln.bind(l)),
          t.addEventListener("load", u),
          t.addEventListener("error", u)));
    }
  }
  var Mi = 0;
  function ky(l, t) {
    return (
      l.stylesheets && l.count === 0 && Ui(l, l.stylesheets),
      0 < l.count || 0 < l.imgCount
        ? function (u) {
            var a = setTimeout(function () {
              if ((l.stylesheets && Ui(l, l.stylesheets), l.unsuspend)) {
                var n = l.unsuspend;
                ((l.unsuspend = null), n());
              }
            }, 6e4 + t);
            0 < l.imgBytes && Mi === 0 && (Mi = 62500 * yy());
            var e = setTimeout(
              function () {
                if (
                  ((l.waitingForImages = !1),
                  l.count === 0 &&
                    (l.stylesheets && Ui(l, l.stylesheets), l.unsuspend))
                ) {
                  var n = l.unsuspend;
                  ((l.unsuspend = null), n());
                }
              },
              (l.imgBytes > Mi ? 50 : 800) + t,
            );
            return (
              (l.unsuspend = u),
              function () {
                ((l.unsuspend = null), clearTimeout(a), clearTimeout(e));
              }
            );
          }
        : null
    );
  }
  function Xd(l) {
    if (l.count === 0 && (l.imgCount === 0 || !l.waitingForImages)) {
      if (l.stylesheets) Ui(l, l.stylesheets);
      else if (l.unsuspend) {
        var t = l.unsuspend;
        ((l.unsuspend = null), t());
      }
    }
  }
  function ln() {
    (this.count--, Xd(this));
  }
  function Iy() {
    (this.imgCount--, Xd(this));
  }
  var Ri = null;
  function Ui(l, t) {
    ((l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (Ri = new Map()),
        t.forEach(Py, l),
        (Ri = null),
        ln.call(l)));
  }
  function Py(l, t) {
    if (!(t.state.loading & 4)) {
      var u = Ri.get(l);
      if (u) var a = u.get(null);
      else {
        ((u = new Map()), Ri.set(l, u));
        for (
          var e = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            n = 0;
          n < e.length;
          n++
        ) {
          var i = e[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (u.set(i.dataset.precedence, i), (a = i));
        }
        a && u.set(null, a);
      }
      ((e = t.instance),
        (i = e.getAttribute("data-precedence")),
        (n = u.get(i) || a),
        n === a && u.set(null, e),
        u.set(i, e),
        this.count++,
        (a = ln.bind(this)),
        e.addEventListener("load", a),
        e.addEventListener("error", a),
        n
          ? n.parentNode.insertBefore(e, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(e, l.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var ie = {
    $$typeof: Al,
    Provider: null,
    Consumer: null,
    _currentValue: au,
    _currentValue2: au,
    _threadCount: 0,
  };
  function lh(l, t, u, a, e, n, i, f, c) {
    ((this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = wi(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = wi(0)),
      (this.hiddenUpdates = wi(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = e),
      (this.onCaughtError = n),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = c),
      (this.transitionTypes = null),
      (this.incompleteTransitions = new Map()));
  }
  function Qd(l, t, u, a, e, n, i, f, c, r, h, E) {
    return (
      (l = new lh(l, t, u, i, c, r, h, E, f)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = ot(3, null, null, t)),
      (l.current = n),
      (n.stateNode = l),
      (t = Mf()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (n.memoizedState = { element: a, isDehydrated: u, cache: t }),
      jf(n),
      l
    );
  }
  function Vd(l) {
    return l ? ((l = Ha), l) : Ha;
  }
  function Zd(l, t, u, a, e, n) {
    ((e = Vd(e)),
      a.context === null ? (a.context = e) : (a.pendingContext = e),
      (a = Ru(t)),
      (a.payload = { element: u }),
      (n = n === void 0 ? null : n),
      n !== null && (a.callback = n),
      (u = Uu(l, a, t)),
      u !== null && (rt(u, l, t), Ue(u, l, t)));
  }
  function Ld(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < t ? u : t;
    }
  }
  function ho(l, t) {
    (Ld(l, t), (l = l.alternate) && Ld(l, t));
  }
  function Kd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = la(l, 67108864);
      (t !== null && rt(t, l, 67108864), ho(l, 67108864));
    }
  }
  function Jd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Ot();
      t = Fi(t);
      var u = la(l, t);
      (u !== null && rt(u, l, t), ho(l, t));
    }
  }
  var fe = !0;
  function th(l, t, u, a) {
    var e = M.T;
    M.T = null;
    var n = x.p;
    try {
      ((x.p = 2), go(l, t, u, a));
    } finally {
      ((x.p = n), (M.T = e));
    }
  }
  function uh(l, t, u, a) {
    var e = M.T;
    M.T = null;
    var n = x.p;
    try {
      ((x.p = 8), go(l, t, u, a));
    } finally {
      ((x.p = n), (M.T = e));
    }
  }
  function go(l, t, u, a) {
    if (fe) {
      var e = So(a);
      if (e === null) (kc(l, t, a, Hi, u), Fd(l, a));
      else if (eh(e, l, t, u, a)) a.stopPropagation();
      else if ((Fd(l, a), t & 4 && -1 < ah.indexOf(l))) {
        for (; e !== null;) {
          var n = ba(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var i = $u(n.pendingLanes);
                  if (i !== 0) {
                    var f = n;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; i;) {
                      var c = 1 << (31 - ht(i));
                      ((f.entanglements[1] |= c), (i &= ~c));
                    }
                    (tu(n), (el & 6) === 0 && ((gi = mt() + 500), we(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((f = la(n, 2)), f !== null && rt(f, n, 2), Ei(), ho(n, 2));
            }
          if (((n = So(a)), n === null && kc(l, t, a, Hi, u), n === e)) break;
          e = n;
        }
        e !== null && a.stopPropagation();
      } else kc(l, t, a, null, u);
    }
  }
  function So(l) {
    return ((l = tf(l)), To(l));
  }
  var Hi = null;
  function To(l) {
    if (((Hi = null), (l = Wu(l)), l !== null)) {
      var t = L(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (((l = ml(t)), l !== null)) return l;
          l = null;
        } else if (u === 31) {
          if (((l = hl(t)), l !== null)) return l;
          l = null;
        } else if (u === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return ((Hi = l), null);
  }
  function wd(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (yr()) {
          case Ho:
            return 2;
          case jo:
            return 8;
          case vn:
          case hr:
            return 32;
          case po:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Eo = !1,
    Zu = null,
    Lu = null,
    Ku = null,
    tn = new Map(),
    un = new Map(),
    Ju = [],
    ah =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Fd(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        Zu = null;
        break;
      case "dragenter":
      case "dragleave":
        Lu = null;
        break;
      case "mouseover":
      case "mouseout":
        Ku = null;
        break;
      case "pointerover":
      case "pointerout":
        tn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        un.delete(t.pointerId);
    }
  }
  function an(l, t, u, a, e, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: t,
          domEventName: u,
          eventSystemFlags: a,
          nativeEvent: n,
          targetContainers: [e],
        }),
        t !== null && ((t = ba(t)), t !== null && Kd(t)),
        l)
      : ((l.eventSystemFlags |= a),
        (t = l.targetContainers),
        e !== null && t.indexOf(e) === -1 && t.push(e),
        l);
  }
  function eh(l, t, u, a, e) {
    switch (t) {
      case "focusin":
        return ((Zu = an(Zu, l, t, u, a, e)), !0);
      case "dragenter":
        return ((Lu = an(Lu, l, t, u, a, e)), !0);
      case "mouseover":
        return ((Ku = an(Ku, l, t, u, a, e)), !0);
      case "pointerover":
        var n = e.pointerId;
        return (tn.set(n, an(tn.get(n) || null, l, t, u, a, e)), !0);
      case "gotpointercapture":
        return (
          (n = e.pointerId),
          un.set(n, an(un.get(n) || null, l, t, u, a, e)),
          !0
        );
    }
    return !1;
  }
  function $d(l) {
    var t = Wu(l.target);
    if (t !== null) {
      var u = L(t);
      if (u !== null) {
        if (((t = u.tag), t === 13)) {
          if (((t = ml(u)), t !== null)) {
            ((l.blockedOn = t),
              Qo(l.priority, function () {
                Jd(u);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = hl(u)), t !== null)) {
            ((l.blockedOn = t),
              Qo(l.priority, function () {
                Jd(u);
              }));
            return;
          }
        } else if (t === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function ji(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length;) {
      var u = So(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var a = new u.constructor(u.type, u);
        ((lf = a), u.target.dispatchEvent(a), (lf = null));
      } else return ((t = ba(u)), t !== null && Kd(t), (l.blockedOn = u), !1);
      t.shift();
    }
    return !0;
  }
  function Wd(l, t, u) {
    ji(l) && u.delete(t);
  }
  function nh() {
    ((Eo = !1),
      Zu !== null && ji(Zu) && (Zu = null),
      Lu !== null && ji(Lu) && (Lu = null),
      Ku !== null && ji(Ku) && (Ku = null),
      tn.forEach(Wd),
      un.forEach(Wd));
  }
  function pi(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      Eo ||
        ((Eo = !0),
        O.unstable_scheduleCallback(O.unstable_NormalPriority, nh)));
  }
  var qi = null;
  function kd(l) {
    qi !== l &&
      ((qi = l),
      O.unstable_scheduleCallback(O.unstable_NormalPriority, function () {
        qi === l && (qi = null);
        for (var t = 0; t < l.length; t += 3) {
          var u = l[t],
            a = l[t + 1],
            e = l[t + 2];
          if (typeof a != "function") {
            if (To(a || u) === null) continue;
            break;
          }
          var n = ba(u);
          n !== null &&
            (l.splice(t, 3),
            (t -= 3),
            lc(n, { pending: !0, data: e, method: u.method, action: a }, a, e));
        }
      }));
  }
  function ce(l) {
    function t(c) {
      return pi(c, l);
    }
    (Zu !== null && pi(Zu, l),
      Lu !== null && pi(Lu, l),
      Ku !== null && pi(Ku, l),
      tn.forEach(t),
      un.forEach(t));
    for (var u = 0; u < Ju.length; u++) {
      var a = Ju[u];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < Ju.length && ((u = Ju[0]), u.blockedOn === null);)
      ($d(u), u.blockedOn === null && Ju.shift());
    if (((u = (l.ownerDocument || l).$$reactFormReplay), u != null))
      for (a = 0; a < u.length; a += 3) {
        var e = u[a],
          n = u[a + 1],
          i = e[ct] || null;
        if (typeof n == "function") i || kd(u);
        else if (i) {
          var f = null;
          if (n && n.hasAttribute("formAction")) {
            if (((e = n), (i = n[ct] || null))) f = i.formAction;
            else if (To(e) !== null) continue;
          } else f = i.action;
          (typeof f == "function" ? (u[a + 1] = f) : (u.splice(a, 3), (a -= 3)),
            kd(u));
        }
      }
  }
  function Id() {
    function l(n) {
      n.canIntercept &&
        n.info === "react-transition" &&
        n.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (e = i);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (e !== null && (e(), (e = null)), a || setTimeout(u, 20));
    }
    function u() {
      if (!a && !navigation.transition) {
        var n = navigation.currentEntry;
        n &&
          n.url != null &&
          navigation.navigate(n.url, {
            state: n.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        e = null;
      return (
        navigation.addEventListener("navigate", l),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(u, 100),
        function () {
          ((a = !0),
            navigation.removeEventListener("navigate", l),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            e !== null && (e(), (e = null)));
        }
      );
    }
  }
  function bo(l) {
    this._internalRoot = l;
  }
  ((Yi.prototype.render = bo.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(g(409));
      var u = t.current,
        a = Ot();
      Zd(u, a, l, t, null, null);
    }),
    (Yi.prototype.unmount = bo.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          (Zd(l.current, 2, null, l, null, null), Ei(), (t[Ea] = null));
        }
      }));
  function Yi(l) {
    this._internalRoot = l;
  }
  Yi.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = Xo();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < Ju.length && t !== 0 && t < Ju[u].priority; u++);
      (Ju.splice(u, 0, l), u === 0 && $d(l));
    }
  };
  var Pd = W.version;
  if (Pd !== "19.3.1") throw Error(g(527, Pd, "19.3.1"));
  x.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(g(188))
        : ((l = Object.keys(l).join(",")), Error(g(268, l)));
    return (
      (l = fl(t)),
      (l = l !== null ? C(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var ih = {
    bundleType: 0,
    version: "19.3.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.3.1",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Bi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Bi.isDisabled && Bi.supportsFiber)
      try {
        ((ve = Bi.inject(ih)), (yt = Bi));
      } catch {}
  }
  return (
    (nn.createRoot = function (l, t) {
      if (!H(l)) throw Error(g(299));
      var u = !1,
        a = "",
        e = V0,
        n = Z0,
        i = L0;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (u = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (e = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = Qd(l, 1, !1, null, null, u, a, null, e, n, i, Id)),
        (l[Ea] = t.current),
        Wc(l),
        new bo(t)
      );
    }),
    (nn.hydrateRoot = function (l, t, u) {
      if (!H(l)) throw Error(g(299));
      var a = !1,
        e = "",
        n = V0,
        i = Z0,
        f = L0,
        c = null;
      return (
        u != null &&
          (u.unstable_strictMode === !0 && (a = !0),
          u.identifierPrefix !== void 0 && (e = u.identifierPrefix),
          u.onUncaughtError !== void 0 && (n = u.onUncaughtError),
          u.onCaughtError !== void 0 && (i = u.onCaughtError),
          u.onRecoverableError !== void 0 && (f = u.onRecoverableError),
          u.formState !== void 0 && (c = u.formState)),
        (t = Qd(l, 1, !0, t, u ?? null, a, e, c, n, i, f, Id)),
        (t.context = Vd(null)),
        (u = t.current),
        (a = Ot()),
        (a = Fi(a)),
        (e = Ru(a)),
        (e.callback = null),
        Uu(u, e, a),
        (u = a),
        (t.current.lanes = u),
        re(t, u),
        tu(t),
        (l[Ea] = t.current),
        Wc(l),
        new Yi(t)
      );
    }),
    (nn.version = "19.3.1"),
    nn
  );
}
var or;
function gh() {
  if (or) return Oo.exports;
  or = 1;
  function O() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O);
      } catch (W) {
        console.error(W);
      }
  }
  return (O(), (Oo.exports = hh()), Oo.exports);
}
var Sh = gh();
const Th = "modulepreload",
  Eh = function (O, W) {
    return new URL(O, W).href;
  },
  sr = {},
  vr = function (W, k, g) {
    let H = Promise.resolve();
    if (k && k.length > 0) {
      let fl = function (C) {
        return Promise.all(
          C.map((S) =>
            Promise.resolve(S).then(
              (R) => ({ status: "fulfilled", value: R }),
              (R) => ({ status: "rejected", reason: R }),
            ),
          ),
        );
      };
      const ml = document.getElementsByTagName("link"),
        hl = document.querySelector("meta[property=csp-nonce]"),
        ll = hl?.nonce || hl?.getAttribute("nonce");
      H = fl(
        k.map((C) => {
          if (((C = Eh(C, g)), C in sr)) return;
          sr[C] = !0;
          const S = C.endsWith(".css"),
            R = S ? '[rel="stylesheet"]' : "";
          if (g)
            for (let Ul = ml.length - 1; Ul >= 0; Ul--) {
              const Cl = ml[Ul];
              if (Cl.href === C && (!S || Cl.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${C}"]${R}`)) return;
          const cl = document.createElement("link");
          if (
            ((cl.rel = S ? "stylesheet" : Th),
            S || (cl.as = "script"),
            (cl.crossOrigin = ""),
            (cl.href = C),
            ll && cl.setAttribute("nonce", ll),
            document.head.appendChild(cl),
            S)
          )
            return new Promise((Ul, Cl) => {
              (cl.addEventListener("load", Ul),
                cl.addEventListener("error", () =>
                  Cl(new Error(`Unable to preload CSS for ${C}`)),
                ));
            });
        }),
      );
    }
    function L(ml) {
      const hl = new Event("vite:preloadError", { cancelable: !0 });
      if (((hl.payload = ml), window.dispatchEvent(hl), !hl.defaultPrevented))
        throw ml;
    }
    return H.then((ml) => {
      for (const hl of ml || []) hl.status === "rejected" && L(hl.reason);
      return W().catch(L);
    });
  };
var Ol = Mo();
const Dh = ch(Ol),
  bh = {
    cardCount: 12,
    cardSpacing: 0.6,
    cardYaw: 20,
    cardWidth: 24,
    cardHeight: 32,
    cardThickness: 2,
    cardUnitScale: 0.075,
    artworkCoverage: 0.7,
    horizontalMargin: 0.1,
    verticalMargin: 0.16,
    centerProjection: !0,
    camElevation: 30,
    camAzimuth: 50,
    fov: 28,
    gradientCenter: "#F2F2F0",
    gradientEdge: "#CFCFCC",
    gradientCorner: "#A8A8A5",
    gradientOrigin: [0.45, 0.28],
    gradientRadius: [0.76, 0.86],
    headerColor: "#1A1A1A",
    shellColor: "#202020",
    roughness: 0.88,
    metalness: 0,
    labelRoughness: 0.92,
    wear: 0.6,
    keyIntensity: 3.2,
    keyHeight: 12,
    keyBehind: 7,
    keyLeft: 7,
    fillIntensity: 1.25,
    fillSky: "#FFFFFF",
    fillGround: "#A8A8A5",
    shadowOpacity: 0.21,
    shadowResolution: 256,
    shadowRadius: 4,
    contactOpacity: 0.24,
    contactWidth: 1.24,
    contactDepth: 0.25,
    floorOffset: 0.004,
    grainOpacity: 0.028,
    focusDistance: 12.5,
    focusOffset: 0.9,
    focusResponse: 10,
    dragSensitivity: 0.008,
    frameRate: 60,
    maxPixelRatio: 2,
  },
  Co = (O) => `A${String(O + 1).padStart(3, "0")}`,
  xi = [
    {
      id: "PX–01",
      title: "A little out of the ordinary.",
      discipline: "EXPERIMENTAL DESIGN",
      year: "2026",
      color: "#de4f36",
      art: "starburst",
      description:
        "An exploration of familiar things, seen a little differently. A space for unexpected interactions, playful details, and ideas that don’t quite fit in a folder.",
      note: "This is a placeholder project. Add the story, process, and details that make this one yours.",
    },
    {
      id: "A–002",
      title: "Somewhere between worlds.",
      discipline: "DIGITAL EXPERIENCE",
      year: "2026",
      color: "#4969a0",
      art: "orbit",
      description:
        "A study in space, rhythm, and the feeling of discovering something new. Bringing a small imaginary world to life, one considered interaction at a time.",
      note: "Use this space to share the initial question, your approach, and what you discovered along the way.",
    },
    {
      id: "A–003",
      title: "A softer kind of signal.",
      discipline: "VISUAL IDENTITY",
      year: "2025",
      color: "#51917b",
      art: "wave",
      description:
        "Finding a visual language in the overlap between nature and technology. An evolving system of shapes, textures, and moments of quiet clarity.",
      note: "Replace this copy with your project overview, collaborators, and a few details about the finished work.",
    },
    {
      id: "A–004",
      title: "Room for possibility.",
      discipline: "SPATIAL EXPLORATION",
      year: "2025",
      color: "#9c668f",
      art: "grid",
      description:
        "An open-ended experiment in the way objects occupy space. Building a sense of place through simple forms and the relationships between them.",
      note: "Tell the story behind this project here. What did you set out to make, and where did the process take you?",
    },
    {
      id: "A–005",
      title: "Ideas in full bloom.",
      discipline: "CREATIVE CODING",
      year: "2025",
      color: "#c99948",
      art: "bloom",
      description:
        "A collection of small generative experiments. Rules become patterns, patterns become surprises, and a few lines of code become something worth keeping.",
      note: "This is sample content, ready for your images, research, and the little details that matter.",
    },
    {
      id: "A–006",
      title: "A frequency of its own.",
      discipline: "INTERACTION DESIGN",
      year: "2024",
      color: "#b5b6a7",
      art: "signal",
      description:
        "Turning an invisible rhythm into something tangible. An investigation of feedback, movement, and the small moments that make an interface feel alive.",
      note: "Add your project narrative here, from early experiments to the final outcome.",
    },
  ],
  zh = Ol.lazy(() =>
    vr(() => import("./Gallery-CsqLrdB-.js?v=archive-entry-14"), [], import.meta.url).then(
      (O) => ({ default: O.Gallery }),
    ),
  ),
  Oh = Ol.lazy(() =>
    vr(
      () => import("./_frame-debug-disabled-ChG-6rmU.js"),
      [],
      import.meta.url,
    ),
  );
function PixelStar({className, color = "#000000"}) {
  return z.jsx("svg", {
    className, viewBox:"0 0 9 9", "aria-hidden":true, focusable:false,
    children:z.jsx("path", {fill:color,d:"M0 0h1v1h-1zM4 0h1v1h-1zM8 0h1v1h-1zM1 1h1v1h-1zM4 1h1v1h-1zM7 1h1v1h-1zM2 2h1v1h-1zM4 2h1v1h-1zM6 2h1v1h-1zM3 3h1v1h-1zM4 3h1v1h-1zM5 3h1v1h-1zM0 4h1v1h-1zM1 4h1v1h-1zM2 4h1v1h-1zM3 4h1v1h-1zM4 4h1v1h-1zM5 4h1v1h-1zM6 4h1v1h-1zM7 4h1v1h-1zM8 4h1v1h-1zM3 5h1v1h-1zM4 5h1v1h-1zM5 5h1v1h-1zM2 6h1v1h-1zM4 6h1v1h-1zM6 6h1v1h-1zM1 7h1v1h-1zM4 7h1v1h-1zM7 7h1v1h-1zM0 8h1v1h-1zM4 8h1v1h-1zM8 8h1v1h-1z"}),
  });
}
function oe({ direction: O = "right" }) {
  return z.jsx("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      transform: `rotate(${O === "left" ? 180 : O === "down" ? 90 : 0}deg)`,
    },
    children: z.jsx("path", {
      d: "M4 12h15m-6-6 6 6-6 6",
      stroke: "currentColor",
      strokeWidth: "1.3",
    }),
  });
}
class _h extends Ol.Component {
  state = { failed: !1 };
  static getDerivedStateFromError() {
    return { failed: !0 };
  }
  componentDidCatch() {
    this.props.onError();
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}
function Ah({ initialScreen: O = "hero" } = {}) {
  const [base, k] = Ol.useState(bh),
    live = Ol.useSyncExternalStore(heroControls.subscribe, heroControls.get, heroControls.get),
    gradientLive = Ol.useSyncExternalStore(gradientControls.subscribe, gradientControls.get, gradientControls.get),
    liftLive = Ol.useSyncExternalStore(liftControls.subscribe, liftControls.get, liftControls.get),
    shadowLive = Ol.useSyncExternalStore(shadowControls.subscribe, shadowControls.get, shadowControls.get),
    W = Ol.useMemo(() => ({...base, ...live.Camera, ...live.Lighting, ...live.Shadows, ...live.Quality, ...live.Cards, ...live.Surface,
      gradientOrigin: [gradientLive['Move highlight'].x, gradientLive['Move highlight'].y],
      gradientRadius: [gradientLive.Width, gradientLive.Height],
      hoverLift: liftLive['Lift height (% of card)'] / 100,
      hoverSpeed: liftLive.Speed,
      hoverBounce: liftLive['Bounce (%)'] / 100,
      scrollLagDegrees: liftLive['Scroll body lag (degrees)'],
      scrollLagResponse: liftLive['Scroll lag response'],
      shadowTint: shadowLive['Shadow tint'],
      shadowExtraBlur: shadowLive['Extra blur'],
      shadowStretch: shadowLive['Blur stretch'],
      shadowDistanceSoftening: shadowLive['Distance softening'],
      shadowDistanceFade: shadowLive['Distance fade'],
      shadowFadeRange: shadowLive['Fade distance'],
    }), [base, live, gradientLive, liftLive, shadowLive]),
    [g] = Ol.useState(() =>
      false,
    ),
    [H, L] = Ol.useState(O === "project" || O === "notes" ? 1 : null),
    [projectEntry, setProjectEntry] = Ol.useState("hero"),
    [ml, hl] = Ol.useState(null),
    [ll, fl] = Ol.useState(
      O === "archive" || O === "about" || O === "notes" ? O : null,
    ),
    [C, S] = Ol.useState(!1),
    [R, cl] = Ol.useState(!1),
    [Ul, Cl] = Ol.useState(!1),
    ol = Ol.useRef(null),
    Pl = Ol.useRef(null),
    Vl = Ol.useRef(void 0),
    projectRoot = Ol.useRef(null),
    projectStory = Ol.useRef(null),
    headlineRef = Ol.useRef(null),
    [scrollTurn, setScrollTurn] = Ol.useState(0),
    kl = W.cardCount,
    it = String(kl).padStart(2, "0"),
    At = Ol.useCallback((sl) => {
      (k(sl), L((_l) => (_l !== null && _l >= sl.cardCount ? null : _l)));
    }, []),
    gl = H === null ? null : xi[H % xi.length],
    X = Ol.useCallback((sl, source = "hero") => {
      (setProjectEntry(source), L(sl), projectRoot.current && (projectRoot.current.scrollTop = 0), setScrollTurn(0),
        hl(null),
        fl(null),
        window.setTimeout(() => Pl.current?.focus({ preventScroll: !0 }), 50));
    }, []),
    w = Ol.useCallback(() => {
      (L(null), projectRoot.current && (projectRoot.current.scrollTop = 0), setScrollTurn(0), hl(null), Cl(!1));
    }, []),
    Nt = Ol.useCallback(() => S(!0), []),
    ft = Ol.useCallback(() => {
      (cl(!0), S(!0));
    }, []),
    lt = Ol.useCallback((sl) => {
      (clearTimeout(Vl.current),
        sl === null ? (Vl.current = setTimeout(() => hl(null), 160)) : hl(sl));
    }, []);
  (Ol.useEffect(() => () => clearTimeout(Vl.current), []),
    Ol.useEffect(() => {
      const sl = (_l) => {
        const Al = _l.target;
        _l.defaultPrevented ||
          Al.closest(
            'input, textarea, select, [contenteditable="true"]',
          ) ||
          ll !== null ||
          (_l.key === "Escape" && w(),
          H !== null &&
            (_l.key === "ArrowRight" || _l.key === "ArrowLeft") &&
            (_l.preventDefault(),
            X((H + (_l.key === "ArrowRight" ? 1 : kl - 1)) % kl)));
      };
      return (
        window.addEventListener("keydown", sl),
        () => window.removeEventListener("keydown", sl)
      );
    }, [w, ll, X, H, kl]),
    Ol.useEffect(() => {
      const sl = ol.current;
      if (ll !== null) { if (sl && !sl.open) sl.showModal(); }
      else if (sl?.open) sl.close();
    }, [ll]));
  const openProjectStory = () => projectRoot.current?.dispatchEvent(new CustomEvent('project:growth-go', {detail:1}));
  const returnToCard = () => projectRoot.current?.dispatchEvent(new CustomEvent('project:growth-go', {detail:0}));
  Ol.useEffect(() => {
    const root=projectRoot.current;
    if (!root || H===null || ll!==null) return;
    return mountColorGrowth(root, projectStory.current);
  }, [H,ll]);
  Ol.useEffect(()=>{
    const root=projectRoot.current;
    if(!root||H!==null||ll!==null)return;
    return mountHomeScroll(root);
  },[H,ll]);
  Ol.useEffect(()=>{
    if(H!==null)return;
    return mountHeadlineScramble(headlineRef.current);
  },[H]);
  const galleryConfig = Ol.useMemo(() => ({...W, projectTurn: scrollTurn, projectEntry}), [W, scrollTurn, projectEntry]);
  const tt = {
    "--grain-opacity": W.grainOpacity,
    "--project-shadow-strength": "80%",
    "--header-color": W.headerColor,
    "--gradient-center": H === null ? W.gradientCenter : "#c2bfbf",
    "--gradient-edge": W.gradientEdge,
    "--gradient-corner": W.gradientCorner,
    "--story-gradient-edge": "linear-gradient(90deg, #cececb 0%, #c7c6c4 25%, #cececb 65%, #cfcfcc 100%)",
    "--accent": gl?.color ?? "#de4f36",
  };
  return z.jsxs("main", {
    ref: projectRoot,
    onScroll: event => setScrollTurn(Math.min(1, event.currentTarget.scrollTop / 180)),
    className: `portfolio ${H !== null ? "is-focused" : ""} ${ml !== null ? "is-hovering" : ""} ${Ul ? "is-dragging" : ""}`,
    style: tt,
    children: [
      z.jsxs('div', {className:'portfolio-stage', children: [
      z.jsx("div", {
        className: "scene",
        "aria-label":
          "Interactive 3D project archive. Select a card to explore; drag a selected card to rotate it.",
        onPointerLeave: () => lt(null),
        children: z.jsx(_h, {
          onError: ft,
          children: z.jsx(Ol.Suspense, {
            fallback: null,
            children: z.jsx(zh, {
              config: galleryConfig,
              selected: H,
              onSelect: X,
              onHover: lt,
              onReady: Nt,
              onDragging: Cl,
            }),
          }),
        }),
      }),
      z.jsx("div", { className: "grain", "aria-hidden": "true" }),
      z.jsxs("header", {
        className: "header",
        children: [
          z.jsxs("button", {
            className: "wordmark",
            onClick: w,
            "aria-label": "REV 000, return to home",
            children: [
              "REV ",
              z.jsx("span", { children: "000" }),
              z.jsx("svg", {
                className: "wordmark-symbol",
                viewBox: "0 0 9 9",
                "aria-hidden": true,
                children: z.jsx("path", {fill: "#000000", d: "M0 0h1v1h-1zM4 0h1v1h-1zM8 0h1v1h-1zM1 1h1v1h-1zM4 1h1v1h-1zM7 1h1v1h-1zM2 2h1v1h-1zM4 2h1v1h-1zM6 2h1v1h-1zM3 3h1v1h-1zM4 3h1v1h-1zM5 3h1v1h-1zM0 4h1v1h-1zM1 4h1v1h-1zM2 4h1v1h-1zM3 4h1v1h-1zM4 4h1v1h-1zM5 4h1v1h-1zM6 4h1v1h-1zM7 4h1v1h-1zM8 4h1v1h-1zM3 5h1v1h-1zM4 5h1v1h-1zM5 5h1v1h-1zM2 6h1v1h-1zM4 6h1v1h-1zM6 6h1v1h-1zM1 7h1v1h-1zM4 7h1v1h-1zM7 7h1v1h-1zM0 8h1v1h-1zM4 8h1v1h-1zM8 8h1v1h-1z"}),
              }),
            ],
          }),
          z.jsxs("nav", {
            "aria-label": "Main navigation",
            children: [
              z.jsxs("button", {
                onClick: () => fl("about"),
                children: ["About ", z.jsx("span", { children: "↗" })],
              }),
              z.jsxs("button", {
                onClick: () => fl("archive"),
                children: [
                  "Archive ",
                  z.jsx("span", { className: "archive-count", children: it }),
                ],
              }),
            ],
          }),
        ],
      }),
      z.jsxs("div", {
        className: `loading ${C ? "is-ready" : ""}`,
        "aria-live": "polite",
        children: [
          z.jsx(PixelStar, {className:"loading-indicator"}),
          "LOADING MEMORIES",
        ],
      }),
      R &&
        z.jsxs("div", {
          className: "fallback-message",
          children: [
            z.jsx("p", {
              children: "The 3D view couldn’t load on this device.",
            }),
            z.jsxs("button", {
              onClick: () => fl("archive"),
              children: ["Explore the archive ", z.jsx(oe, {})],
            }),
          ],
        }),
      z.jsx("section", {
        className: "home-caption",
        "aria-hidden": H !== null,
        children: z.jsxs("h1", {
          ref: headlineRef,
          children: ["Small objects.", z.jsx("br", {}), "Bigger ideas."],
        }),
      }),
      gl &&
        H !== null &&
        z.jsxs(z.Fragment, {
          children: [
            z.jsxs("button", {
              ref: Pl,
              className: "back-button",
              onClick: w,
              children: [
                z.jsx(oe, { direction: "left" }),
                " Back to collection ",
                z.jsx("kbd", { children: "ESC" }),
              ],
            }),
            scrollTurn === 0 && ll === null && z.jsxs("nav", {
              className: "project-pagination",
              "aria-label": "Project navigation",
              children: [
                z.jsx("button", {
                  className: "project-pagination-arrow previous",
                  "aria-label": "Previous project",
                  onClick: () => X((H + kl - 1) % kl),
                  children: z.jsx(oe, {direction: "left"}),
                }),
                z.jsx("button", {
                  className: "project-pagination-arrow next",
                  "aria-label": "Next project",
                  onClick: () => X((H + 1) % kl),
                  children: z.jsx(oe, {direction: "right"}),
                }),
              ],
            }, `project-nav-${H}`),
            z.jsx("div", { className: "project-shadow", "aria-hidden": true }),
            z.jsxs("section", {
              className: "project-info",
              "aria-live": "polite",
              children: [
                z.jsx("h1", { children: Co(H) }),
                z.jsx("p", { children: gl.description }),
                z.jsx("button", {
                  className: "project-chevron",
                  "aria-label": "Continue to the project story",
                  onClick: openProjectStory,
                  children: z.jsx("svg", { viewBox: "0 0 32 20", fill: "none", "aria-hidden": true,
                    children: z.jsx("path", { d: "m2 3 14 14L30 3", stroke: "currentColor", strokeWidth: 1.25 }),
                  }),
                }),
              ],
            }, H),
          ],
        }),
      z.jsx("dialog", {
        ref: ol,
        onCancel: () => fl(null),
        onClose: () => fl(null),
        onClick: (sl) => {
          sl.target === sl.currentTarget && fl(null);
        },
        children: z.jsxs("div", {
          className: "dialog-content",
          children: [
            z.jsxs("div", {
              className: "dialog-top",
              children: [
                z.jsxs("span", {
                  className: "eyebrow",
                  children: [
                    "REV 000 / ",
                    ll === "archive"
                      ? "INDEX"
                      : ll === "notes"
                        ? "PROJECT NOTES"
                        : "ABOUT",
                  ],
                }),
                z.jsx("button", {
                  className: "close-button",
                  "aria-label": "Close dialog",
                  onClick: () => fl(null),
                  children: "×",
                }),
              ],
            }),
            ll === "archive"
              ? z.jsxs(z.Fragment, {
                  children: [
                    z.jsxs("h2", {
                      className: "dialog-title",
                      children: [
                        "The collection",
                        z.jsx("span", { children: it }),
                      ],
                    }),
                    z.jsx("p", {
                      className: "dialog-intro",
                      children:
                        "A place for finished things and open questions.",
                    }),
                    z.jsx("div", {
                      className: "archive-list",
                      children: Array.from({ length: kl }, (sl, _l) => {
                        const Al = xi[_l % xi.length];
                        return z.jsxs(
                          "button",
                          {
                            onClick: () => X(_l, "archive"),
                            children: [
                              z.jsx("span", {
                                className: "archive-number",
                                children: String(_l + 1).padStart(2, "0"),
                              }),
                              z.jsx("span", {
                                className: "archive-art",
                                children: z.jsx(PixelStar, {className:"archive-star",color:"#ffffff"}),
                              }),
                              z.jsxs("span", {
                                className: "archive-name",
                                children: [
                                  z.jsx("strong", { children: Co(_l) }),
                                  z.jsx("span", { children: Al.discipline }),
                                ],
                              }),
                              z.jsx("span", {
                                className: "archive-year",
                                children: Al.year,
                              }),
                              z.jsx(oe, {}),
                            ],
                          },
                          _l,
                        );
                      }),
                    }),

                  ],
                })
              : ll === "notes" && gl
                ? z.jsxs(z.Fragment, {
                    children: [
                      z.jsxs("span", {
                        className: "eyebrow",
                        style: { color: gl.color },
                        children: [Co(H ?? 0), " / ", gl.year],
                      }),
                      z.jsx("h2", {
                        className: "dialog-title",
                        children: gl.title,
                      }),
                      z.jsx("p", {
                        className: "about-lead",
                        children: gl.description,
                      }),
                      z.jsx("p", {
                        className: "about-copy",
                        children: gl.note,
                      }),
                      z.jsxs("div", {
                        className: "project-facts",
                        children: [
                          z.jsxs("div", {
                            children: [
                              z.jsx("span", { children: "DISCIPLINE" }),
                              gl.discipline,
                            ],
                          }),
                          z.jsxs("div", {
                            children: [
                              z.jsx("span", { children: "STATUS" }),
                              "PLACEHOLDER / IN PROGRESS",
                            ],
                          }),
                        ],
                      }),
                    ],
                  })
                : z.jsxs(z.Fragment, {
                    children: [
                      z.jsxs("h2", {
                        className: "dialog-title",
                        children: [
                          "Always a work",
                          z.jsx("br", {}),
                          "in progress.",
                        ],
                      }),
                      z.jsxs("p", {
                        className: "about-lead",
                        children: [
                          "An ongoing ",
                          z.jsx("a", {href:"#archive",className:"about-inline-link",onClick:event=>{event.preventDefault();fl("archive");},children:"archive"}),
                          " of ideas, experiments, and things made ",
                          z.jsxs("a", {href:"https://julesgates.com",target:"_blank",rel:"noopener noreferrer",className:"about-inline-link", "aria-label":"by Jules Gates (opens in a new tab)",children:["by Jules Gates ",z.jsx("span",{"aria-hidden":true,children:"↗"})]}),
                          ".",
                        ],
                      }),
                      z.jsxs("p", {
                        className: "about-copy",
                        children:[
                          "Every card holds a project. Pick one up and explore.",
                          z.jsx("br", {}),
                          "This collection is built to grow, one memory at a time.",
                        ],
                      }),
                      z.jsxs("div", {
                        className: "about-bottom",
                        children: [
                          z.jsx(PixelStar, {className:"about-symbol"}),
                          z.jsxs("span", {
                            children: [
                              "REVISION 000 IS",
                              z.jsx("br", {}),
                              "THE FIRST OF MANY.",
                            ],
                          }),
                          z.jsxs("span", {
                            children: [
                              "DESIGN IS",
                              z.jsx("br", {}),
                              "IN THE DETAILS.",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
          ],
        }),
      }),
      g &&
        z.jsx(Ol.Suspense, {
          fallback: null,
          children: z.jsx(Oh, { config: W, onChange: At }),
        }),
      ]}),
      H !== null && gl && z.jsx('article', {
        ref: projectStory, className:'project-story', 'aria-labelledby':'hover-story-title',
        children: z.jsxs('div',{className:'project-story-content',children:[
          z.jsx('button',{className:'project-story-back',onClick:returnToCard,children:'↑ Back to card'}),
          z.jsx('p',{className:'project-story-kicker',children:Co(H)+' / FIELD NOTES'}),
          z.jsx('h2',{id:'hover-story-title',children:gl.title}),
          z.jsx('p',{children:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat, nunc a gravida aliquam, ligula erat tempor erat, sit amet fermentum magna dolor in augue.'}),
          z.jsx('p',{children:'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur vitae diam non justo tincidunt varius. Donec tincidunt risus quis erat vehicula, at faucibus nunc dictum.'}),
          z.jsx('h3',{children:'Process'}),
          z.jsx('p',{children:'Praesent feugiat, mi quis pharetra vulputate, lacus nibh egestas est, quis porttitor nisi neque vel nulla. Suspendisse potenti. Mauris malesuada, velit quis imperdiet convallis, justo augue dignissim lorem, id efficitur urna velit nec enim.'}),
        ]}),
      }),
    ],
  });
}
const fn = new URLSearchParams(window.location.search).get("screen"),
  Nh =
    fn === "project" || fn === "archive" || fn === "about" || fn === "notes"
      ? fn
      : "hero";
Sh.createRoot(document.getElementById("root")).render(
  z.jsx(Ah, { initialScreen: Nh }),
);
export {
  Dh as R,
  dh as a,
  Ol as b,
  Co as c,
  ch as g,
  z as j,
  xi as p,
  Mo as r,
};
