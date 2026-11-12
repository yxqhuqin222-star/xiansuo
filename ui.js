// \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || (e((t = { exports: {} }).exports, t, t.exports), e = null), t.exports), s = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, c = (n, r, o) => (o = n == null ? {} : e(i(n)), s(r || !n || !n.__esModule || !a.call(n, "default") ? t(o, "default", {
	value: n,
	enumerable: !0
}) : o, n)), l = /* @__PURE__ */ o(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.for("react.activity"), p = Symbol.for("react.view_transition"), m = Symbol.iterator;
	function h(e) {
		return typeof e != "object" || !e ? null : (e = m && e[m] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var g = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, _ = Object.assign, v = {};
	function y(e, t, n) {
		this.props = e, this.context = t, this.refs = v, this.updater = n || g;
	}
	y.prototype.isReactComponent = {}, y.prototype.setState = function(e, t) {
		if (typeof e != "object" && typeof e != "function" && e != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, e, t, "setState");
	}, y.prototype.forceUpdate = function(e) {
		this.updater.enqueueForceUpdate(this, e, "forceUpdate");
	};
	function b() {}
	b.prototype = y.prototype;
	function x(e, t, n) {
		this.props = e, this.context = t, this.refs = v, this.updater = n || g;
	}
	var S = x.prototype = new b();
	S.constructor = x, _(S, y.prototype), S.isPureReactComponent = !0;
	var C = Array.isArray;
	function w() {}
	var T = {
		H: null,
		A: null,
		T: null,
		S: null
	}, E = Object.prototype.hasOwnProperty;
	function D(e, n, r) {
		var i = r.ref;
		return {
			$$typeof: t,
			type: e,
			key: n,
			ref: i === void 0 ? null : i,
			props: r
		};
	}
	function O(e, t) {
		return D(e.type, t, e.props);
	}
	function k(e) {
		return typeof e == "object" && !!e && e.$$typeof === t;
	}
	function ee(e) {
		var t = {
			"=": "=0",
			":": "=2"
		};
		return "$" + e.replace(/[=:]/g, function(e) {
			return t[e];
		});
	}
	var A = /\/+/g;
	function j(e, t) {
		return typeof e == "object" && e && e.key != null ? ee("" + e.key) : t.toString(36);
	}
	function te(e) {
		switch (e.status) {
			case "fulfilled": return e.value;
			case "rejected": throw e.reason;
			default: switch (typeof e.status == "string" ? e.then(w, w) : (e.status = "pending", e.then(function(t) {
				e.status === "pending" && (e.status = "fulfilled", e.value = t);
			}, function(t) {
				e.status === "pending" && (e.status = "rejected", e.reason = t);
			})), e.status) {
				case "fulfilled": return e.value;
				case "rejected": throw e.reason;
			}
		}
		throw e;
	}
	function ne(e, r, i, a, o) {
		var s = typeof e;
		(s === "undefined" || s === "boolean") && (e = null);
		var c = !1;
		if (e === null) c = !0;
		else switch (s) {
			case "bigint":
			case "string":
			case "number":
				c = !0;
				break;
			case "object": switch (e.$$typeof) {
				case t:
				case n:
					c = !0;
					break;
				case d: return c = e._init, ne(c(e._payload), r, i, a, o);
			}
		}
		if (c) return o = o(e), c = a === "" ? "." + j(e, 0) : a, C(o) ? (i = "", c != null && (i = c.replace(A, "$&/") + "/"), ne(o, r, i, "", function(e) {
			return e;
		})) : o != null && (k(o) && (o = O(o, i + (o.key == null || e && e.key === o.key ? "" : ("" + o.key).replace(A, "$&/") + "/") + c)), r.push(o)), 1;
		c = 0;
		var l = a === "" ? "." : a + ":";
		if (C(e)) for (var u = 0; u < e.length; u++) a = e[u], s = l + j(a, u), c += ne(a, r, i, s, o);
		else if (u = h(e), typeof u == "function") for (e = u.call(e), u = 0; !(a = e.next()).done;) a = a.value, s = l + j(a, u++), c += ne(a, r, i, s, o);
		else if (s === "object") {
			if (typeof e.then == "function") return ne(te(e), r, i, a, o);
			throw r = String(e), Error("Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.");
		}
		return c;
	}
	function M(e, t, n) {
		if (e == null) return e;
		var r = [], i = 0;
		return ne(e, r, "", "", function(e) {
			return t.call(n, e, i++);
		}), r;
	}
	function N(e) {
		if (e._status === -1) {
			var t = e._result, n = t();
			n.then(function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 1, e._result = t, n.status === void 0 && (n.status = "fulfilled", n.value = t));
			}, function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 2, e._result = t, n.status === void 0 && (n.status = "rejected", n.reason = t));
			}), e._status === -1 && (e._status = 0, e._result = n);
		}
		if (e._status === 1) return e._result.default;
		throw e._result;
	}
	var re = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	};
	function ie(e) {
		var t = T.T, n = {};
		n.types = t === null ? null : t.types, T.T = n;
		try {
			var r = e(), i = T.S;
			i !== null && i(n, r), typeof r == "object" && r && typeof r.then == "function" && r.then(w, re);
		} catch (e) {
			re(e);
		} finally {
			t !== null && n.types !== null && (t.types = n.types), T.T = t;
		}
	}
	function ae(e) {
		var t = T.T;
		if (t !== null) {
			var n = t.types;
			n === null ? t.types = [e] : n.indexOf(e) === -1 && n.push(e);
		} else ie(ae.bind(null, e));
	}
	var oe = {
		map: M,
		forEach: function(e, t, n) {
			M(e, function() {
				t.apply(this, arguments);
			}, n);
		},
		count: function(e) {
			var t = 0;
			return M(e, function() {
				t++;
			}), t;
		},
		toArray: function(e) {
			return M(e, function(e) {
				return e;
			}) || [];
		},
		only: function(e) {
			if (!k(e)) throw Error("React.Children.only expected to receive a single React element child.");
			return e;
		}
	};
	e.Activity = f, e.Children = oe, e.Component = y, e.Fragment = r, e.Profiler = a, e.PureComponent = x, e.StrictMode = i, e.Suspense = l, e.ViewTransition = p, e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T, e.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(e) {
			return T.H.useMemoCache(e);
		}
	}, e.addTransitionType = ae, e.cache = function(e) {
		return function() {
			return e.apply(null, arguments);
		};
	}, e.cacheSignal = function() {
		return null;
	}, e.cloneElement = function(e, t, n) {
		if (e == null) throw Error("The argument must be a React element, but you passed " + e + ".");
		var r = _({}, e.props), i = e.key;
		if (t != null) for (a in t.key !== void 0 && (i = "" + t.key), t) !E.call(t, a) || a === "key" || a === "__self" || a === "__source" || a === "ref" && t.ref === void 0 || (r[a] = t[a]);
		var a = arguments.length - 2;
		if (a === 1) r.children = n;
		else if (1 < a) {
			for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
			r.children = o;
		}
		return D(e.type, i, r);
	}, e.createContext = function(e) {
		return e = {
			$$typeof: s,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		}, e.Provider = e, e.Consumer = {
			$$typeof: o,
			_context: e
		}, e;
	}, e.createElement = function(e, t, n) {
		var r, i = {}, a = null;
		if (t != null) for (r in t.key !== void 0 && (a = "" + t.key), t) E.call(t, r) && r !== "key" && r !== "__self" && r !== "__source" && (i[r] = t[r]);
		var o = arguments.length - 2;
		if (o === 1) i.children = n;
		else if (1 < o) {
			for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
			i.children = s;
		}
		if (e && e.defaultProps) for (r in o = e.defaultProps, o) i[r] === void 0 && (i[r] = o[r]);
		return D(e, a, i);
	}, e.createRef = function() {
		return { current: null };
	}, e.forwardRef = function(e) {
		return {
			$$typeof: c,
			render: e
		};
	}, e.isValidElement = k, e.lazy = function(e) {
		return {
			$$typeof: d,
			_payload: {
				_status: -1,
				_result: e
			},
			_init: N
		};
	}, e.memo = function(e, t) {
		return {
			$$typeof: u,
			type: e,
			compare: t === void 0 ? null : t
		};
	}, e.startTransition = ie, e.unstable_useCacheRefresh = function() {
		return T.H.useCacheRefresh();
	}, e.use = function(e) {
		return T.H.use(e);
	}, e.useActionState = function(e, t, n) {
		return T.H.useActionState(e, t, n);
	}, e.useCallback = function(e, t) {
		return T.H.useCallback(e, t);
	}, e.useContext = function(e) {
		return T.H.useContext(e);
	}, e.useDebugValue = function() {}, e.useDeferredValue = function(e, t) {
		return T.H.useDeferredValue(e, t);
	}, e.useEffect = function(e, t) {
		return T.H.useEffect(e, t);
	}, e.useEffectEvent = function(e) {
		return T.H.useEffectEvent(e);
	}, e.useId = function() {
		return T.H.useId();
	}, e.useImperativeHandle = function(e, t, n) {
		return T.H.useImperativeHandle(e, t, n);
	}, e.useInsertionEffect = function(e, t) {
		return T.H.useInsertionEffect(e, t);
	}, e.useLayoutEffect = function(e, t) {
		return T.H.useLayoutEffect(e, t);
	}, e.useMemo = function(e, t) {
		return T.H.useMemo(e, t);
	}, e.useOptimistic = function(e, t) {
		return T.H.useOptimistic(e, t);
	}, e.useReducer = function(e, t, n) {
		return T.H.useReducer(e, t, n);
	}, e.useRef = function(e) {
		return T.H.useRef(e);
	}, e.useState = function(e) {
		return T.H.useState(e);
	}, e.useSyncExternalStore = function(e, t, n) {
		return T.H.useSyncExternalStore(e, t, n);
	}, e.useTransition = function() {
		return T.H.useTransition();
	}, e.version = "19.3.1";
})), u = /* @__PURE__ */ o(((e, t) => {
	t.exports = l();
})), d = /* @__PURE__ */ o(((e) => {
	function t(e, t) {
		var n = e.length;
		e.push(t);
		a: for (; 0 < n;) {
			var r = n - 1 >>> 1, a = e[r];
			if (0 < i(a, t)) e[r] = t, e[n] = a, n = r;
			else break a;
		}
	}
	function n(e) {
		return e.length === 0 ? null : e[0];
	}
	function r(e) {
		if (e.length === 0) return null;
		var t = e[0], n = e.pop();
		if (n !== t) {
			e[0] = n;
			a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
				var s = 2 * (r + 1) - 1, c = e[s], l = s + 1, u = e[l];
				if (0 > i(c, n)) l < a && 0 > i(u, c) ? (e[r] = u, e[l] = n, r = l) : (e[r] = c, e[s] = n, r = s);
				else if (l < a && 0 > i(u, n)) e[r] = u, e[l] = n, r = l;
				else break a;
			}
		}
		return t;
	}
	function i(e, t) {
		var n = e.sortIndex - t.sortIndex;
		return n === 0 ? e.id - t.id : n;
	}
	if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
		var a = performance;
		e.unstable_now = function() {
			return a.now();
		};
	} else {
		var o = Date, s = o.now();
		e.unstable_now = function() {
			return o.now() - s;
		};
	}
	var c = [], l = [], u = 1, d = null, f = 3, p = !1, m = !1, h = !1, g = !1, _ = typeof setTimeout == "function" ? setTimeout : null, v = typeof clearTimeout == "function" ? clearTimeout : null, y = typeof setImmediate < "u" ? setImmediate : null;
	function b(e) {
		for (var i = n(l); i !== null;) {
			if (i.callback === null) r(l);
			else if (i.startTime <= e) r(l), i.sortIndex = i.expirationTime, t(c, i);
			else break;
			i = n(l);
		}
	}
	function x(e) {
		if (h = !1, b(e), !m) {
			if (n(c) !== null) m = !0, S || (S = !0, O());
			else {
				var t = n(l);
				t !== null && A(x, t.startTime - e);
			}
		}
	}
	var S = !1, C = -1, w = 5, T = -1;
	function E() {
		return g ? !0 : !(e.unstable_now() - T < w);
	}
	function D() {
		if (g = !1, S) {
			var t = e.unstable_now();
			T = t;
			var i = !0;
			try {
				a: {
					m = !1, h && (h = !1, v(C), C = -1), p = !0;
					var a = f;
					try {
						b: {
							for (b(t), d = n(c); d !== null && !(d.expirationTime > t && E());) {
								var o = d.callback;
								if (typeof o == "function") {
									d.callback = null, f = d.priorityLevel;
									var s = o(d.expirationTime <= t);
									if (t = e.unstable_now(), typeof s == "function") {
										d.callback = s, b(t), i = !0;
										break b;
									}
									d === n(c) && r(c), b(t);
								} else r(c);
								d = n(c);
							}
							if (d !== null) i = !0;
							else {
								var u = n(l);
								u !== null && A(x, u.startTime - t), i = !1;
							}
						}
						break a;
					} finally {
						d = null, f = a, p = !1;
					}
					i = void 0;
				}
			} finally {
				i ? O() : S = !1;
			}
		}
	}
	var O;
	if (typeof y == "function") O = function() {
		y(D);
	};
	else if (typeof MessageChannel < "u") {
		var k = new MessageChannel(), ee = k.port2;
		k.port1.onmessage = D, O = function() {
			ee.postMessage(null);
		};
	} else O = function() {
		_(D, 0);
	};
	function A(t, n) {
		C = _(function() {
			t(e.unstable_now());
		}, n);
	}
	e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(e) {
		e.callback = null;
	}, e.unstable_forceFrameRate = function(e) {
		0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : w = 0 < e ? Math.floor(1e3 / e) : 5;
	}, e.unstable_getCurrentPriorityLevel = function() {
		return f;
	}, e.unstable_next = function(e) {
		switch (f) {
			case 1:
			case 2:
			case 3:
				var t = 3;
				break;
			default: t = f;
		}
		var n = f;
		f = t;
		try {
			return e();
		} finally {
			f = n;
		}
	}, e.unstable_requestPaint = function() {
		g = !0;
	}, e.unstable_runWithPriority = function(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: e = 3;
		}
		var n = f;
		f = e;
		try {
			return t();
		} finally {
			f = n;
		}
	}, e.unstable_scheduleCallback = function(r, i, a) {
		var o = e.unstable_now();
		switch (typeof a == "object" && a ? (a = a.delay, a = typeof a == "number" && 0 < a ? o + a : o) : a = o, r) {
			case 1:
				var s = -1;
				break;
			case 2:
				s = 250;
				break;
			case 5:
				s = 1073741823;
				break;
			case 4:
				s = 1e4;
				break;
			default: s = 5e3;
		}
		return s = a + s, r = {
			id: u++,
			callback: i,
			priorityLevel: r,
			startTime: a,
			expirationTime: s,
			sortIndex: -1
		}, a > o ? (r.sortIndex = a, t(l, r), n(c) === null && r === n(l) && (h ? (v(C), C = -1) : h = !0, A(x, a - o))) : (r.sortIndex = s, t(c, r), m || p || (m = !0, S || (S = !0, O()))), r;
	}, e.unstable_shouldYield = E, e.unstable_wrapCallback = function(e) {
		var t = f;
		return function() {
			var n = f;
			f = t;
			try {
				return e.apply(this, arguments);
			} finally {
				f = n;
			}
		};
	};
})), f = /* @__PURE__ */ o(((e, t) => {
	t.exports = d();
})), p = /* @__PURE__ */ o(((e) => {
	var t = u();
	function n(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function r() {}
	var i = {
		d: {
			f: r,
			r: function() {
				throw Error(n(522));
			},
			D: r,
			C: r,
			L: r,
			m: r,
			X: r,
			S: r,
			M: r
		},
		p: 0,
		findDOMNode: null
	}, a = Symbol.for("react.portal"), o = Symbol.for("react.recoverable"), s = Symbol.for("react.optimistic_key");
	function c(e, t, n) {
		var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: a,
			key: r == null ? null : r === s ? s : "" + r,
			children: e,
			containerInfo: t,
			implementation: n
		};
	}
	var l = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function d(e, t) {
		if (e === "font") return "";
		if (typeof t == "string") return t === "use-credentials" ? t : "";
	}
	e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, e.browser = function(e) {
		return {
			$$typeof: o,
			_reason: e
		};
	}, e.createPortal = function(e, t) {
		var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) throw Error(n(299));
		return c(e, t, null, r);
	}, e.flushSync = function(e) {
		var t = l.T, n = i.p;
		try {
			if (l.T = null, i.p = 2, e) return e();
		} finally {
			l.T = t, i.p = n, i.d.f();
		}
	}, e.preconnect = function(e, t) {
		typeof e == "string" && (t ? (t = t.crossOrigin, t = typeof t == "string" ? t === "use-credentials" ? t : "" : void 0) : t = null, i.d.C(e, t));
	}, e.prefetchDNS = function(e) {
		typeof e == "string" && i.d.D(e);
	}, e.preinit = function(e, t) {
		if (typeof e == "string" && t && typeof t.as == "string") {
			var n = t.as, r = d(n, t.crossOrigin), a = typeof t.integrity == "string" ? t.integrity : void 0, o = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
			n === "style" ? i.d.S(e, typeof t.precedence == "string" ? t.precedence : void 0, {
				crossOrigin: r,
				integrity: a,
				fetchPriority: o
			}) : n === "script" && i.d.X(e, {
				crossOrigin: r,
				integrity: a,
				fetchPriority: o,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0
			});
		}
	}, e.preinitModule = function(e, t) {
		if (typeof e == "string") {
			if (typeof t == "object" && t) {
				if (t.as == null || t.as === "script") {
					var n = d(t.as, t.crossOrigin);
					i.d.M(e, {
						crossOrigin: n,
						integrity: typeof t.integrity == "string" ? t.integrity : void 0,
						nonce: typeof t.nonce == "string" ? t.nonce : void 0,
						fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0
					});
				}
			} else t ?? i.d.M(e);
		}
	}, e.preload = function(e, t) {
		if (typeof e == "string" && typeof t == "object" && t && typeof t.as == "string") {
			var n = t.as, r = d(n, t.crossOrigin);
			i.d.L(e, n, {
				crossOrigin: r,
				integrity: typeof t.integrity == "string" ? t.integrity : void 0,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0,
				type: typeof t.type == "string" ? t.type : void 0,
				fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0,
				referrerPolicy: typeof t.referrerPolicy == "string" ? t.referrerPolicy : void 0,
				imageSrcSet: typeof t.imageSrcSet == "string" ? t.imageSrcSet : void 0,
				imageSizes: typeof t.imageSizes == "string" ? t.imageSizes : void 0,
				media: typeof t.media == "string" ? t.media : void 0
			});
		}
	}, e.preloadModule = function(e, t) {
		if (typeof e == "string") {
			if (t) {
				var n = d(t.as, t.crossOrigin);
				i.d.m(e, {
					as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
					crossOrigin: n,
					integrity: typeof t.integrity == "string" ? t.integrity : void 0,
					nonce: typeof t.nonce == "string" ? t.nonce : void 0,
					fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0
				});
			} else i.d.m(e);
		}
	}, e.requestFormReset = function(e) {
		i.d.r(e);
	}, e.unstable_batchedUpdates = function(e, t) {
		return e(t);
	}, e.useFormState = function(e, t, n) {
		return l.H.useFormState(e, t, n);
	}, e.useFormStatus = function() {
		return l.H.useHostTransitionStatus();
	}, e.version = "19.3.1";
})), m = /* @__PURE__ */ o(((e, t) => {
	function n() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = p();
})), h = /* @__PURE__ */ o(((e) => {
	var t = f(), n = u(), r = m();
	function i(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function a(e) {
		return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
	}
	function o(e) {
		for (var t = e, n = t; n && !n.alternate;) t = n, t.flags & 4098 && (e = t.return), n = t.return;
		for (; t.return;) t = t.return;
		return t.tag === 3 ? e : null;
	}
	function s(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function c(e) {
		if (e.tag === 31) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function l(e) {
		if (o(e) !== e) throw Error(i(188));
	}
	function d(e) {
		var t = e.alternate;
		if (!t) {
			if (t = o(e), t === null) throw Error(i(188));
			return t === e ? e : null;
		}
		for (var n = e, r = t;;) {
			var a = n.return;
			if (a === null) break;
			var s = a.alternate;
			if (s === null) {
				if (r = a.return, r !== null) {
					n = r;
					continue;
				}
				break;
			}
			if (a.child === s.child) {
				for (s = a.child; s;) {
					if (s === n) return l(a), e;
					if (s === r) return l(a), t;
					s = s.sibling;
				}
				throw Error(i(188));
			}
			if (n.return !== r.return) n = a, r = s;
			else {
				for (var c = !1, u = a.child; u;) {
					if (u === n) {
						c = !0, n = a, r = s;
						break;
					}
					if (u === r) {
						c = !0, r = a, n = s;
						break;
					}
					u = u.sibling;
				}
				if (!c) {
					for (u = s.child; u;) {
						if (u === n) {
							c = !0, n = s, r = a;
							break;
						}
						if (u === r) {
							c = !0, r = s, n = a;
							break;
						}
						u = u.sibling;
					}
					if (!c) throw Error(i(189));
				}
			}
			if (n.alternate !== r) throw Error(i(190));
		}
		if (n.tag !== 3) throw Error(i(188));
		return n.stateNode.current === n ? e : t;
	}
	function p(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e;
		for (e = e.child; e !== null;) {
			if (t = p(e), t !== null) return t;
			e = e.sibling;
		}
		return null;
	}
	function h(e, t, n, r, i, a) {
		for (; e !== null;) {
			if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && n(e, r, i, a) || (e.tag !== 22 || e.memoizedState === null) && (t || e.tag !== 5 && e.tag !== 27) && h(e.child, t, n, r, i, a)) return !0;
			e = e.sibling;
		}
		return !1;
	}
	function g(e) {
		for (e = e.return; e !== null;) {
			if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
			e = e.return;
		}
		return null;
	}
	function _(e) {
		var t = !1;
		for (e = e.return; e !== null && (e.tag === 4 && (t = !0), e.tag !== 3 && e.tag !== 5 && e.tag !== 27);) e = e.return;
		return t;
	}
	function v(e) {
		var t = [null, null], n = g(e);
		return n === null || y(t, e, n.child, { foundSelf: !1 }), t;
	}
	function y(e, t, n, r) {
		for (; n !== null;) {
			if (n === t) r.foundSelf = !0;
			else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
				if (r.foundSelf) return e[1] = n, !0;
				e[0] = n;
			} else if ((n.tag !== 22 || n.memoizedState === null) && y(e, t, n.child, r)) return !0;
			n = n.sibling;
		}
		return !1;
	}
	function b(e) {
		switch (e.tag) {
			case 5:
			case 27:
			case 6: return e.stateNode;
			case 3: return e.stateNode.containerInfo;
			default: throw Error(i(559));
		}
	}
	var x = null, S = null;
	function C(e, t, n) {
		return e === n || e === t && (x = e, !0);
	}
	function w(e, t, n) {
		return e === n ? (S = e, !1) : e === t && (S !== null && (x = e), !0);
	}
	function T(e) {
		if (e === null) return null;
		do
			e = e === null ? null : e.return;
		while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
		return e || null;
	}
	function E(e, t, n) {
		for (var r = 0, i = e; i; i = n(i)) r++;
		i = 0;
		for (var a = t; a; a = n(a)) i++;
		for (; 0 < r - i;) e = n(e), r--;
		for (; 0 < i - r;) t = n(t), i--;
		for (; r--;) {
			if (e === t || t !== null && e === t.alternate) return e;
			e = n(e), t = n(t);
		}
		return null;
	}
	var D = Object.assign, O = Symbol.for("react.element"), k = Symbol.for("react.transitional.element"), ee = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), te = Symbol.for("react.profiler"), ne = Symbol.for("react.consumer"), M = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), ie = Symbol.for("react.suspense_list"), ae = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), se = Symbol.for("react.activity"), ce = Symbol.for("react.legacy_hidden"), le = Symbol.for("react.memo_cache_sentinel"), ue = Symbol.for("react.view_transition"), de = Symbol.for("react.recoverable"), fe = Symbol.iterator;
	function pe(e) {
		return typeof e != "object" || !e ? null : (e = fe && e[fe] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var me = Symbol.for("react.client.reference");
	function he(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.$$typeof === me ? null : e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case A: return "Fragment";
			case te: return "Profiler";
			case j: return "StrictMode";
			case re: return "Suspense";
			case ie: return "SuspenseList";
			case se: return "Activity";
			case ue: return "ViewTransition";
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case ee: return "Portal";
			case M: return e.displayName || "Context";
			case ne: return (e._context.displayName || "Context") + ".Consumer";
			case N:
				var t = e.render;
				return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
			case ae: return t = e.displayName || null, t === null ? he(e.type) || "Memo" : t;
			case oe:
				t = e._payload, e = e._init;
				try {
					return he(e(t));
				} catch {}
		}
		return null;
	}
	var ge = Array.isArray, P = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _e = {
		pending: !1,
		data: null,
		method: null,
		action: null
	}, ve = [], ye = -1;
	function be(e) {
		return { current: e };
	}
	function I(e) {
		0 > ye || (e.current = ve[ye], ve[ye] = null, ye--);
	}
	function L(e, t) {
		ye++, ve[ye] = e.current, e.current = t;
	}
	var xe = be(null), Se = be(null), Ce = be(null), we = be(null);
	function Te(e, t) {
		switch (L(Ce, t), L(Se, e), L(xe, null), t.nodeType) {
			case 9:
			case 11:
				e = (e = t.documentElement) && (e = e.namespaceURI) ? mp(e) : 0;
				break;
			default: if (e = t.tagName, t = t.namespaceURI) t = mp(t), e = hp(t, e);
			else switch (e) {
				case "svg":
					e = 1;
					break;
				case "math":
					e = 2;
					break;
				default: e = 0;
			}
		}
		I(xe), L(xe, e);
	}
	function Ee() {
		I(xe), I(Se), I(Ce);
	}
	function De(e) {
		var t = e.memoizedState;
		t !== null && (uh._currentValue = t.memoizedState, L(we, e)), t = xe.current;
		var n = hp(t, e.type);
		t !== n && (L(Se, e), L(xe, n));
	}
	function Oe(e) {
		Se.current === e && (I(xe), I(Se)), we.current === e && (I(we), uh._currentValue = _e);
	}
	var R, z;
	function B(e) {
		if (R === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			R = t && t[1] || "", z = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
		}
		return "\n" + R + e + z;
	}
	var ke = !1;
	function Ae(e, t) {
		if (!e || ke) return "";
		ke = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var r = { DetermineComponentFrameRoot: function() {
				try {
					if (t) {
						var n = function() {
							throw Error();
						};
						if (Object.defineProperty(n.prototype, "props", { set: function() {
							throw Error();
						} }), typeof Reflect == "object" && Reflect.construct) {
							try {
								Reflect.construct(n, []);
							} catch (e) {
								var r = e;
							}
							Reflect.construct(e, [], n);
						} else {
							try {
								n.call();
							} catch (e) {
								r = e;
							}
							n = !1;
							try {
								var i = Object.getOwnPropertyDescriptor(e.prototype, "props");
								Object.defineProperty(e.prototype, "props", {
									configurable: !0,
									set: function() {
										throw Error();
									}
								}), n = !0, new e();
							} finally {
								n && (i === void 0 ? delete e.prototype.props : Object.defineProperty(e.prototype, "props", i));
							}
						}
					} else {
						try {
							throw Error();
						} catch (e) {
							r = e;
						}
						(n = e()) && typeof n.catch == "function" && n.catch(function() {});
					}
				} catch (e) {
					if (e && r && typeof e.stack == "string") return [e.stack, r.stack];
				}
				return [null, null];
			} };
			r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
			i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
			var a = r.DetermineComponentFrameRoot(), o = a[0], s = a[1];
			if (o && s) {
				var c = o.split("\n"), l = s.split("\n");
				for (i = r = 0; r < c.length && !c[r].includes("DetermineComponentFrameRoot");) r++;
				for (; i < l.length && !l[i].includes("DetermineComponentFrameRoot");) i++;
				if (r === c.length || i === l.length) for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i];) i--;
				for (; 1 <= r && 0 <= i; r--, i--) if (c[r] !== l[i]) {
					if (r !== 1 || i !== 1) do
						if (r--, i--, 0 > i || c[r] !== l[i]) {
							var u = "\n" + c[r].replace(" at new ", " at ");
							return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
						}
					while (1 <= r && 0 <= i);
					break;
				}
			}
		} finally {
			ke = !1, Error.prepareStackTrace = n;
		}
		return (n = e ? e.displayName || e.name : "") ? B(n) : "";
	}
	function je(e, t) {
		switch (e.tag) {
			case 26:
			case 27:
			case 5: return B(e.type);
			case 16: return B("Lazy");
			case 13: return e.child !== t && t !== null ? B("Suspense Fallback") : B("Suspense");
			case 19: return B("SuspenseList");
			case 0:
			case 15: return Ae(e.type, !1);
			case 11: return Ae(e.type.render, !1);
			case 1: return Ae(e.type, !0);
			case 31: return B("Activity");
			case 30: return B("ViewTransition");
			default: return "";
		}
	}
	function Me(e) {
		try {
			var t = "", n = null;
			do
				t += je(e, n), n = e, e = e.return;
			while (e);
			return t;
		} catch (e) {
			return "\nError generating stack: " + e.message + "\n" + e.stack;
		}
	}
	var Ne = Object.prototype.hasOwnProperty, Pe = t.unstable_scheduleCallback, Fe = t.unstable_cancelCallback, Ie = t.unstable_shouldYield, Le = t.unstable_requestPaint, Re = t.unstable_now, ze = t.unstable_getCurrentPriorityLevel, Be = t.unstable_ImmediatePriority, Ve = t.unstable_UserBlockingPriority, He = t.unstable_NormalPriority, Ue = t.unstable_LowPriority, We = t.unstable_IdlePriority, Ge = t.log, Ke = t.unstable_setDisableYieldValue, qe = null, Je = null;
	function Ye(e) {
		if (typeof Ge == "function" && Ke(e), Je && typeof Je.setStrictMode == "function") try {
			Je.setStrictMode(qe, e);
		} catch {}
	}
	var Xe = Math.clz32 ? Math.clz32 : $e, Ze = Math.log, Qe = Math.LN2;
	function $e(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (Ze(e) / Qe | 0) | 0;
	}
	var et = 256, tt = 262144, nt = 4194304;
	function rt(e) {
		var t = e & 42;
		if (t !== 0) return t;
		switch (e & -e) {
			case 1: return 1;
			case 2: return 2;
			case 4: return 4;
			case 8: return 8;
			case 16: return 16;
			case 32: return 32;
			case 64: return 64;
			case 128: return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072: return e & -e;
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return e & 3932160;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return e & 62914560;
			case 67108864: return 67108864;
			case 134217728: return 134217728;
			case 268435456: return 268435456;
			case 536870912: return 536870912;
			case 1073741824: return 0;
			default: return e;
		}
	}
	function it(e, t, n) {
		var r = e.pendingLanes;
		if (r === 0) return 0;
		var i = 0, a = e.suspendedLanes, o = e.pingedLanes;
		e = e.warmLanes;
		var s = r & 134217727;
		return s === 0 ? (s = r & ~a, s === 0 ? o === 0 ? n || (n = r & ~e, n !== 0 && (i = rt(n))) : i = rt(o) : i = rt(s)) : (r = s & ~a, r === 0 ? (o &= s, o === 0 ? n || (n = s & ~e, n !== 0 && (i = rt(n))) : i = rt(o)) : i = rt(r)), i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, n = t & -t, a >= n || a === 32 && n & 4194048) ? t : i;
	}
	function at(e, t) {
		return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
	}
	function ot(e, t) {
		t & 8 && (t |= t & 32);
		var n = e.entangledLanes;
		if (n !== 0) for (e = e.entanglements, n &= t; 0 < n;) {
			var r = 31 - Xe(n), i = 1 << r;
			t |= e[r], n &= ~i;
		}
		return t;
	}
	function st(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64: return t + 250;
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
			case 2097152: return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824: return -1;
			default: return -1;
		}
	}
	function ct() {
		var e = nt;
		return nt <<= 1, !(nt & 62914560) && (nt = 4194304), e;
	}
	function lt(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function ut(e, t) {
		e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
	}
	function dt(e, t, n, r, i, a) {
		var o = e.pendingLanes;
		e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
		var s = e.entanglements, c = e.expirationTimes, l = e.hiddenUpdates;
		for (n = o & ~n; 0 < n;) {
			var u = 31 - Xe(n), d = 1 << u;
			s[u] = 0, c[u] = -1;
			var f = l[u];
			if (f !== null) for (l[u] = null, u = 0; u < f.length; u++) {
				var p = f[u];
				p !== null && (p.lane &= -536870913);
			}
			n &= ~d;
		}
		r !== 0 && ft(e, r, 0), a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t));
	}
	function ft(e, t, n) {
		e.pendingLanes |= t, e.suspendedLanes &= ~t;
		var r = 31 - Xe(t);
		e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930;
	}
	function pt(e, t) {
		var n = e.entangledLanes |= t;
		for (e = e.entanglements; n;) {
			var r = 31 - Xe(n), i = 1 << r;
			i & t | e[r] & t && (e[r] |= t), n &= ~i;
		}
	}
	function mt(e, t) {
		var n = t & -t;
		return n = n & 42 ? 1 : ht(n), (n & (e.suspendedLanes | t)) === 0 ? n : 0;
	}
	function ht(e) {
		switch (e) {
			case 2:
				e = 1;
				break;
			case 8:
				e = 4;
				break;
			case 32:
				e = 16;
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
				e = 128;
				break;
			case 268435456:
				e = 134217728;
				break;
			default: e = 0;
		}
		return e;
	}
	function gt(e) {
		return e &= -e, 2 < e ? 8 < e ? e & 134217727 ? 32 : 268435456 : 8 : 2;
	}
	function _t() {
		var e = F.p;
		return e === 0 ? (e = window.event, e === void 0 ? 32 : Eh(e.type)) : e;
	}
	function vt(e, t) {
		var n = F.p;
		try {
			return F.p = e, t();
		} finally {
			F.p = n;
		}
	}
	var yt = Math.random().toString(36).slice(2), bt = "__reactFiber$" + yt, xt = "__reactProps$" + yt, St = "__reactContainer$" + yt, Ct = "__reactEvents$" + yt, wt = "__reactListeners$" + yt, Tt = "__reactHandles$" + yt, Et = "__reactResources$" + yt, Dt = "__reactMarker$" + yt, Ot = "__reactLoad$" + yt;
	function kt(e) {
		delete e[bt], delete e[xt], delete e[wt], delete e[Tt];
	}
	function At(e) {
		var t;
		if (t = e[bt]) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[St] || n[bt]) {
				if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = gm(e); e !== null;) {
					if (n = e[bt]) return n;
					e = gm(e);
				}
				return t;
			}
			e = n, n = e.parentNode;
		}
		return null;
	}
	function jt(e) {
		if (e = e[bt] || e[St]) {
			var t = e.tag;
			if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
		}
		return null;
	}
	function V(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
		throw Error(i(33));
	}
	function Mt(e) {
		var t = e[Et];
		return t ||= e[Et] = {
			hoistableStyles: /* @__PURE__ */ new Map(),
			hoistableScripts: /* @__PURE__ */ new Map()
		}, t;
	}
	function Nt(e) {
		e[Dt] = !0;
	}
	function Pt(e) {
		e[Ot] = void 0;
	}
	var Ft = /* @__PURE__ */ new Set(), It = {};
	function Lt(e, t) {
		Rt(e, t), Rt(e + "Capture", t);
	}
	function Rt(e, t) {
		for (It[e] = t, e = 0; e < t.length; e++) Ft.add(t[e]);
	}
	var zt = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Bt = {}, Vt = {};
	function Ht(e) {
		return Ne.call(Vt, e) ? !0 : Ne.call(Bt, e) ? !1 : zt.test(e) ? Vt[e] = !0 : (Bt[e] = !0, !1);
	}
	var H = !1;
	function Ut() {
		var e = H;
		return H = !1, e;
	}
	function Wt(e, t, n) {
		if (Ht(t)) {
			if (n === null) e.removeAttribute(t);
			else {
				switch (typeof n) {
					case "undefined":
					case "function":
					case "symbol":
						e.removeAttribute(t);
						return;
					case "boolean":
						var r = t.toLowerCase().slice(0, 5);
						if (r !== "data-" && r !== "aria-") {
							e.removeAttribute(t);
							return;
						}
				}
				e.setAttribute(t, n);
			}
		}
	}
	function Gt(e, t, n) {
		if (n === null) e.removeAttribute(t);
		else {
			switch (typeof n) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(t);
					return;
			}
			e.setAttribute(t, n);
		}
	}
	function Kt(e, t, n, r) {
		if (r === null) e.removeAttribute(n);
		else {
			switch (typeof r) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(n);
					return;
			}
			e.setAttributeNS(t, n, r);
		}
	}
	function qt(e) {
		switch (typeof e) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined": return e;
			case "object": return e;
			default: return "";
		}
	}
	function Jt(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
	}
	function Yt(e, t, n) {
		var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
		if (!e.hasOwnProperty(t) && r !== void 0 && typeof r.get == "function" && typeof r.set == "function") {
			var i = r.get, a = r.set;
			return Object.defineProperty(e, t, {
				configurable: !0,
				get: function() {
					return i.call(this);
				},
				set: function(e) {
					n = "" + e, a.call(this, e);
				}
			}), Object.defineProperty(e, t, { enumerable: r.enumerable }), {
				getValue: function() {
					return n;
				},
				setValue: function(e) {
					n = "" + e;
				},
				stopTracking: function() {
					e._valueTracker = null, delete e[t];
				}
			};
		}
	}
	function Xt(e) {
		if (!e._valueTracker) {
			var t = Jt(e) ? "checked" : "value";
			e._valueTracker = Yt(e, t, "" + e[t]);
		}
	}
	function Zt(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(), r = "";
		return e && (r = Jt(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n && (t.setValue(e), !0);
	}
	var Qt = /[\n"\\]/g;
	function $t(e) {
		return e.replace(Qt, function(e) {
			return "\\" + e.charCodeAt(0).toString(16) + " ";
		});
	}
	function en(e, t, n, r, i, a, o, s) {
		e.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.type = o : e.removeAttribute("type"), t == null ? o !== "submit" && o !== "reset" || e.removeAttribute("value") : o === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + qt(t)) : e.value !== "" + qt(t) && (e.value = "" + qt(t)), t == null ? n == null ? r != null && e.removeAttribute("value") : nn(e, qt(n)) : o === "number" && e.value == t ? nn(e, qt(e.value)) : nn(e, qt(t)), i == null && a != null && (e.defaultChecked = !!a), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + qt(s) : e.removeAttribute("name");
	}
	function tn(e, t, n, r, i, a, o, s) {
		if (a != null && typeof a != "function" && typeof a != "symbol" && typeof a != "boolean" && (e.type = a), t != null || n != null) {
			if (!(a !== "submit" && a !== "reset" || t != null)) {
				Xt(e);
				return;
			}
			n = n == null ? "" : "" + qt(n), t = t == null ? n : "" + qt(t), s || t === e.value || (e.value = t), e.defaultValue = t;
		}
		r ??= i, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = s ? e.checked : !!r, e.defaultChecked = !!r, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (e.name = o), Xt(e);
	}
	function nn(e, t) {
		e.defaultValue !== "" + t && (e.defaultValue = "" + t);
	}
	function rn(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
			for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
		} else {
			for (n = "" + qt(n), t = null, i = 0; i < e.length; i++) {
				if (e[i].value === n) {
					e[i].selected = !0, r && (e[i].defaultSelected = !0);
					return;
				}
				t !== null || e[i].disabled || (t = e[i]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function an(e, t, n) {
		t != null && (t = "" + qt(t), t !== e.value && (e.value = t), n == null) ? e.defaultValue !== t && (e.defaultValue = t) : e.defaultValue = n == null ? "" : "" + qt(n);
	}
	function on(e, t, n, r) {
		if (t == null) {
			if (r != null) {
				if (n != null) throw Error(i(92));
				if (ge(r)) {
					if (1 < r.length) throw Error(i(93));
					r = r[0];
				}
				n = r;
			}
			n ??= "", t = n;
		}
		n = qt(t), e.defaultValue = n, r = e.textContent, r === n && r !== "" && r !== null && (e.value = r), Xt(e);
	}
	function sn(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var cn = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
	function ln(e, t, n) {
		var r = t.indexOf("--") === 0;
		n == null || typeof n == "boolean" || n === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : typeof n != "number" || n === 0 || cn.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
	}
	function un(e, t, n) {
		if (t != null && typeof t != "object") throw Error(i(62));
		if (e = e.style, n != null) {
			for (var r in n) !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "", H = !0);
			for (var a in t) r = t[a], t.hasOwnProperty(a) && n[a] !== r && (ln(e, a, r), H = !0);
		} else for (var o in t) t.hasOwnProperty(o) && ln(e, o, t[o]);
	}
	function dn(e) {
		if (e.indexOf("-") === -1) return !1;
		switch (e) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": return !1;
			default: return !0;
		}
	}
	var fn = /* @__PURE__ */ new Map([
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
		["xHeight", "x-height"]
	]), pn = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function mn(e) {
		return pn.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
	}
	function hn() {}
	var gn = null;
	function _n(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
	}
	var vn = null, yn = null;
	function bn(e) {
		var t = jt(e);
		if (t && (e = t.stateNode)) {
			var n = e[xt] || null;
			a: switch (e = t.stateNode, t.type) {
				case "input":
					if (en(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
						for (n = e; n.parentNode;) n = n.parentNode;
						for (n = n.querySelectorAll("input[name=\"" + $t("" + t) + "\"][type=\"radio\"]"), t = 0; t < n.length; t++) {
							var r = n[t];
							if (r !== e && r.form === e.form) {
								var a = r[xt] || null;
								if (!a) throw Error(i(90));
								en(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
							}
						}
						for (t = 0; t < n.length; t++) r = n[t], r.form === e.form && Zt(r);
					}
					break a;
				case "textarea":
					an(e, n.value, n.defaultValue);
					break a;
				case "select": t = n.value, t != null && rn(e, !!n.multiple, t, !1);
			}
		}
	}
	var xn = !1;
	function Sn(e, t, n) {
		if (xn) return e(t, n);
		xn = !0;
		try {
			return e(t);
		} finally {
			if (xn = !1, (vn !== null || yn !== null) && (Vd(), vn && (t = vn, e = yn, yn = vn = null, bn(t), e))) for (t = 0; t < e.length; t++) bn(e[t]);
		}
	}
	function Cn(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var r = n[xt] || null;
		if (r === null) return null;
		n = r[t];
		a: switch (t) {
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
				(r = !r.disabled) || (e = e.type, r = e !== "button" && e !== "input" && e !== "select" && e !== "textarea"), e = !r;
				break a;
			default: e = !1;
		}
		if (e) return null;
		if (n && typeof n != "function") throw Error(i(231, t, typeof n));
		return n;
	}
	var wn = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, Tn = !1;
	if (wn) try {
		var En = {};
		Object.defineProperty(En, "passive", { get: function() {
			Tn = !0;
		} }), window.addEventListener("test", En, En), window.removeEventListener("test", En, En);
	} catch {
		Tn = !1;
	}
	var Dn = null, On = null, kn = null;
	function An() {
		if (kn) return kn;
		var e, t = On, n = t.length, r, i = "value" in Dn ? Dn.value : Dn.textContent, a = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
		return kn = i.slice(e, 1 < r ? 1 - r : void 0);
	}
	function jn(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
	}
	function Mn() {
		return !0;
	}
	function Nn() {
		return !1;
	}
	function Pn(e) {
		function t(t, n, r, i, a) {
			for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
			return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? Mn : Nn, this.isPropagationStopped = Nn, this;
		}
		return D(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Mn);
			},
			stopPropagation: function() {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Mn);
			},
			persist: function() {},
			isPersistent: Mn
		}), t;
	}
	var Fn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, In = Pn(Fn), Ln = D({}, Fn, {
		view: 0,
		detail: 0
	}), Rn = Pn(Ln), zn, Bn, Vn, Hn = D({}, Ln, {
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
		getModifierState: $n,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== Vn && (Vn && e.type === "mousemove" ? (zn = e.screenX - Vn.screenX, Bn = e.screenY - Vn.screenY) : Bn = zn = 0, Vn = e), zn);
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : Bn;
		}
	}), Un = Pn(Hn), Wn = Pn(D({}, Hn, { dataTransfer: 0 })), Gn = Pn(D({}, Ln, { relatedTarget: 0 })), Kn = Pn(D({}, Fn, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), qn = Pn(D({}, Fn, { clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} })), Jn = Pn(D({}, Fn, { data: 0 })), Yn = {
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
		MozPrintableKey: "Unidentified"
	}, Xn = {
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
		224: "Meta"
	}, Zn = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function Qn(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = Zn[e]) ? !!t[e] : !1;
	}
	function $n() {
		return Qn;
	}
	var er = Pn(D({}, Ln, {
		key: function(e) {
			if (e.key) {
				var t = Yn[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress" ? (e = jn(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Xn[e.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: $n,
		charCode: function(e) {
			return e.type === "keypress" ? jn(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress" ? jn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		}
	})), tr = Pn(D({}, Hn, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	})), nr = Pn(D({}, Fn, { submitter: 0 })), rr = Pn(D({}, Ln, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: $n
	})), ir = Pn(D({}, Fn, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), ar = Pn(D({}, Hn, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), or = Pn(D({}, Fn, {
		newState: 0,
		oldState: 0,
		source: 0
	})), sr = [
		9,
		13,
		27,
		32
	], cr = wn && "CompositionEvent" in window, lr = null;
	wn && "documentMode" in document && (lr = document.documentMode);
	var ur = wn && "TextEvent" in window && !lr, dr = wn && (!cr || lr && 8 < lr && 11 >= lr), fr = " ", pr = !1;
	function mr(e, t) {
		switch (e) {
			case "keyup": return sr.indexOf(t.keyCode) !== -1;
			case "keydown": return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function hr(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
	}
	var gr = !1;
	function _r(e, t) {
		switch (e) {
			case "compositionend": return hr(t);
			case "keypress": return t.which === 32 ? (pr = !0, fr) : null;
			case "textInput": return e = t.data, e === fr && pr ? null : e;
			default: return null;
		}
	}
	function vr(e, t) {
		if (gr) return e === "compositionend" || !cr && mr(e, t) ? (e = An(), kn = On = Dn = null, gr = !1, e) : null;
		switch (e) {
			case "paste": return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend": return dr && t.locale !== "ko" ? null : t.data;
			default: return null;
		}
	}
	var yr = {
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
		week: !0
	};
	function br(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!yr[e.type] : t === "textarea";
	}
	function xr(e, t, n, r) {
		vn ? yn ? yn.push(r) : yn = [r] : vn = r, t = Zf(t, "onChange"), 0 < t.length && (n = new In("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var Sr = null, Cr = null;
	function wr(e) {
		Wf(e, 0);
	}
	function Tr(e) {
		if (Zt(V(e))) return e;
	}
	function Er(e, t) {
		if (e === "change") return t;
	}
	var Dr = !1;
	if (wn) {
		var Or;
		if (wn) {
			var kr = "oninput" in document;
			if (!kr) {
				var Ar = document.createElement("div");
				Ar.setAttribute("oninput", "return;"), kr = typeof Ar.oninput == "function";
			}
			Or = kr;
		} else Or = !1;
		Dr = Or && (!document.documentMode || 9 < document.documentMode);
	}
	function jr() {
		Sr && (Sr.detachEvent("onpropertychange", Mr), Cr = Sr = null);
	}
	function Mr(e) {
		if (e.propertyName === "value" && Tr(Cr)) {
			var t = [];
			xr(t, Cr, e, _n(e)), Sn(wr, t);
		}
	}
	function Nr(e, t, n) {
		e === "focusin" ? (jr(), Sr = t, Cr = n, Sr.attachEvent("onpropertychange", Mr)) : e === "focusout" && jr();
	}
	function Pr(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return Tr(Cr);
	}
	function Fr(e, t) {
		if (e === "click") return Tr(t);
	}
	function Ir(e, t) {
		if (e === "input" || e === "change") return Tr(t);
	}
	function Lr(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var Rr = typeof Object.is == "function" ? Object.is : Lr;
	function zr(e, t) {
		if (Rr(e, t)) return !0;
		if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
		var n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var i = n[r];
			if (!Ne.call(t, i) || !Rr(e[i], t[i])) return !1;
		}
		return !0;
	}
	function Br(e) {
		if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	function Vr(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e;
	}
	function Hr(e, t) {
		var n = Vr(e);
		e = 0;
		for (var r; n;) {
			if (n.nodeType === 3) {
				if (r = e + n.textContent.length, e <= t && r >= t) return {
					node: n,
					offset: t - e
				};
				e = r;
			}
			a: {
				for (; n;) {
					if (n.nextSibling) {
						n = n.nextSibling;
						break a;
					}
					n = n.parentNode;
				}
				n = void 0;
			}
			n = Vr(n);
		}
	}
	function Ur(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ur(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
	}
	function Wr(e) {
		e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
		for (var t = Br(e.document); t instanceof e.HTMLIFrameElement;) {
			try {
				var n = typeof t.contentWindow.location.href == "string";
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = Br(e.document);
		}
		return t;
	}
	function Gr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
	}
	var Kr = wn && "documentMode" in document && 11 >= document.documentMode, qr = null, Jr = null, Yr = null, Xr = !1;
	function Zr(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		Xr || qr == null || qr !== Br(r) || (r = qr, "selectionStart" in r && Gr(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), Yr && zr(Yr, r) || (Yr = r, r = Zf(Jr, "onSelect"), 0 < r.length && (t = new In("onSelect", "select", null, t, n), e.push({
			event: t,
			listeners: r
		}), t.target = qr)));
	}
	function Qr(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
	}
	var $r = {
		animationend: Qr("Animation", "AnimationEnd"),
		animationiteration: Qr("Animation", "AnimationIteration"),
		animationstart: Qr("Animation", "AnimationStart"),
		transitionrun: Qr("Transition", "TransitionRun"),
		transitionstart: Qr("Transition", "TransitionStart"),
		transitioncancel: Qr("Transition", "TransitionCancel"),
		transitionend: Qr("Transition", "TransitionEnd")
	}, ei = {}, ti = {};
	wn && (ti = document.createElement("div").style, "AnimationEvent" in window || (delete $r.animationend.animation, delete $r.animationiteration.animation, delete $r.animationstart.animation), "TransitionEvent" in window || delete $r.transitionend.transition);
	function ni(e) {
		if (ei[e]) return ei[e];
		if (!$r[e]) return e;
		var t = $r[e], n;
		for (n in t) if (t.hasOwnProperty(n) && n in ti) return ei[e] = t[n];
		return e;
	}
	var ri = ni("animationend"), ii = ni("animationiteration"), ai = ni("animationstart"), oi = ni("transitionrun"), si = ni("transitionstart"), ci = ni("transitioncancel"), li = ni("transitionend"), ui = /* @__PURE__ */ new Map(), di = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	di.push("scrollEnd");
	function fi(e, t) {
		ui.set(e, t), Lt(t, [e]);
	}
	var pi = 0;
	function mi(e, t) {
		if (e.name != null && e.name !== "auto") return e.name;
		if (t.autoName !== null) return t.autoName;
		e = Sd.identifierPrefix;
		var n = pi++;
		return e = "_" + e + "t_" + n.toString(32) + "_", t.autoName = e;
	}
	function hi(e) {
		if (e == null || typeof e == "string") return e;
		var t = null, n = Ad;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = e[n[r]];
			if (i != null) {
				if (i === "none") return "none";
				t = t == null ? i : t + (" " + i);
			}
		}
		return t ?? e.default;
	}
	function gi(e, t) {
		return e = hi(e), t = hi(t), t == null ? e === "auto" ? null : e : t === "auto" ? null : t;
	}
	var _i = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	}, vi = [], yi = 0, bi = 0;
	function xi() {
		for (var e = yi, t = bi = yi = 0; t < e;) {
			var n = vi[t];
			vi[t++] = null;
			var r = vi[t];
			vi[t++] = null;
			var i = vi[t];
			vi[t++] = null;
			var a = vi[t];
			if (vi[t++] = null, r !== null && i !== null) {
				var o = r.pending;
				o === null ? i.next = i : (i.next = o.next, o.next = i), r.pending = i;
			}
			a !== 0 && Ti(n, i, a);
		}
	}
	function Si(e, t, n, r) {
		vi[yi++] = e, vi[yi++] = t, vi[yi++] = n, vi[yi++] = r, bi |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
	}
	function Ci(e, t, n, r) {
		return Si(e, t, n, r), Ei(e);
	}
	function wi(e, t) {
		return Si(e, null, null, t), Ei(e);
	}
	function Ti(e, t, n) {
		e.lanes |= n;
		var r = e.alternate;
		r !== null && (r.lanes |= n);
		for (var i = !1, a = e.return; a !== null;) a.childLanes |= n, r = a.alternate, r !== null && (r.childLanes |= n), a.tag === 22 && (e = a.stateNode, e === null || e._visibility & 1 || (i = !0)), e = a, a = a.return;
		return e.tag === 3 ? (a = e.stateNode, i && t !== null && (i = 31 - Xe(n), e = a.hiddenUpdates, r = e[i], r === null ? e[i] = [t] : r.push(t), t.lane = n | 536870912), a) : null;
	}
	function Ei(e) {
		if (50 < jd) throw jd = 0, Md = null, Error(i(185));
		for (var t = e.return; t !== null;) e = t, t = e.return;
		return e.tag === 3 ? e.stateNode : null;
	}
	var Di = {};
	function Oi(e, t, n, r) {
		this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
	}
	function ki(e, t, n, r) {
		return new Oi(e, t, n, r);
	}
	function Ai(e) {
		return e = e.prototype, !(!e || !e.isReactComponent);
	}
	function ji(e, t) {
		var n = e.alternate;
		return n === null ? (n = ki(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 1206910976, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
	}
	function Mi(e, t) {
		e.flags &= 1206910978;
		var n = e.alternate;
		return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}), e;
	}
	function Ni(e, t, n, r, a, o) {
		var s = 0;
		if (r = e, typeof r == "function") Ai(r) && (s = 1);
		else if (typeof r == "string") s = Zm(e, n, xe.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
		else a: switch (r) {
			case se: return e = ki(31, n, t, a), e.elementType = se, e.lanes = o, e;
			case A: return Pi(n.children, a, o, t);
			case j:
				s = 8, a |= 24;
				break;
			case te: return e = ki(12, n, t, a | 2), e.elementType = te, e.lanes = o, e;
			case re: return e = ki(13, n, t, a), e.elementType = re, e.lanes = o, e;
			case ie: return e = ki(19, n, t, a), e.elementType = ie, e.lanes = o, e;
			case ce:
			case ue: return e = a | 32, e = ki(30, n, t, e), e.elementType = ue, e.lanes = o, e.stateNode = {
				autoName: null,
				paired: null,
				clones: null,
				ref: null
			}, e;
			default:
				if (typeof r == "object" && r) switch (r.$$typeof) {
					case M:
						s = 10;
						break a;
					case ne:
						s = 9;
						break a;
					case N:
						s = 11;
						break a;
					case ae:
						s = 14;
						break a;
					case oe:
						s = 16, r = null;
						break a;
				}
				s = 29, n = Error(i(130, e === null ? "null" : typeof e, "")), r = null;
		}
		return t = ki(s, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
	}
	function Pi(e, t, n, r) {
		return e = ki(7, e, r, t), e.lanes = n, e;
	}
	function Fi(e, t, n) {
		return e = ki(6, e, null, t), e.lanes = n, e;
	}
	function Ii(e) {
		var t = ki(18, null, null, 0);
		return t.stateNode = e, t;
	}
	function Li(e, t, n) {
		return t = ki(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t;
	}
	var Ri = /* @__PURE__ */ new WeakMap();
	function zi(e, t) {
		if (typeof e == "object" && e) {
			var n = Ri.get(e);
			return n === void 0 ? (t = {
				value: e,
				source: t,
				stack: Me(t)
			}, Ri.set(e, t), t) : n;
		}
		return {
			value: e,
			source: t,
			stack: Me(t)
		};
	}
	var Bi = [], Vi = 0, Hi = null, Ui = 0, Wi = [], Gi = 0, Ki = null, qi = 1, Ji = "";
	function Yi(e, t) {
		Bi[Vi++] = Ui, Bi[Vi++] = Hi, Hi = e, Ui = t;
	}
	function Xi(e, t, n) {
		Wi[Gi++] = qi, Wi[Gi++] = Ji, Wi[Gi++] = Ki, Ki = e;
		var r = qi;
		e = Ji;
		var i = 32 - Xe(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - Xe(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, qi = 1 << 32 - Xe(t) + i | n << i | r, Ji = a + e;
		} else qi = 1 << a | n << i | r, Ji = e;
	}
	function Zi(e) {
		e.return !== null && (Yi(e, 1), Xi(e, 1, 0));
	}
	function Qi(e) {
		for (; e === Hi;) Hi = Bi[--Vi], Bi[Vi] = null, Ui = Bi[--Vi], Bi[Vi] = null;
		for (; e === Ki;) Ki = Wi[--Gi], Wi[Gi] = null, Ji = Wi[--Gi], Wi[Gi] = null, qi = Wi[--Gi], Wi[Gi] = null;
	}
	function $i(e, t) {
		Wi[Gi++] = qi, Wi[Gi++] = Ji, Wi[Gi++] = Ki, qi = t.id, Ji = t.overflow, Ki = e;
	}
	var ea = null, ta = null, U = !1, na = null, ra = !1, ia = Error(i(519));
	function aa(e) {
		throw ua(zi(Error(i(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), e)), ia;
	}
	function oa(e) {
		var t = e.stateNode, n = e.type, r = e.memoizedProps;
		switch (t[bt] = e, t[xt] = r, n) {
			case "dialog":
				Y("cancel", t), Y("close", t);
				break;
			case "iframe":
			case "object":
			case "embed":
				Y("load", t);
				break;
			case "video":
			case "audio":
				for (n = 0; n < Hf.length; n++) Y(Hf[n], t);
				break;
			case "source":
				Y("error", t);
				break;
			case "img":
			case "image":
			case "link":
				Y("error", t), Y("load", t);
				break;
			case "details":
				Y("toggle", t);
				break;
			case "input":
				Y("invalid", t), tn(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
				break;
			case "select":
				Y("invalid", t);
				break;
			case "textarea": Y("invalid", t), on(t, r.value, r.defaultValue, r.children);
		}
		n = r.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || !0 === r.suppressHydrationWarning || rp(t.textContent, n) ? (r.popover != null && (Y("beforetoggle", t), Y("toggle", t)), r.onScroll != null && Y("scroll", t), r.onScrollEnd != null && Y("scrollend", t), r.onClick != null && (t.onclick = hn), t = !0) : t = !1, t || aa(e, !0);
	}
	function sa(e) {
		for (ea = e.return; ea;) switch (ea.tag) {
			case 5:
			case 31:
			case 13:
				ra = !1;
				return;
			case 27:
			case 3:
				ra = !0;
				return;
			default: ea = ea.return;
		}
	}
	function W(e) {
		if (e !== ea) return !1;
		if (!U) return sa(e), U = !0, !1;
		var t = e.tag, n;
		if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = n === "form" || n === "button" || _p(e.type, e.memoizedProps)), n = !n), n && ta && aa(e), sa(e), t === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			ta = hm(e);
		} else if (t === 31) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			ta = hm(e);
		} else t === 27 ? (t = ta, Ep(e.type) ? (e = mm, mm = null, ta = e) : ta = t) : ta = ea ? pm(e.stateNode.nextSibling) : null;
		return !0;
	}
	function ca() {
		ta = ea = null, U = !1;
	}
	function la() {
		var e = na;
		return e !== null && (md === null ? md = e : md.push.apply(md, e), na = null), e;
	}
	function ua(e) {
		na === null ? na = [e] : na.push(e);
	}
	var da = be(null), fa = null, pa = null;
	function ma(e, t, n) {
		L(da, t._currentValue), t._currentValue = n;
	}
	function ha(e) {
		e._currentValue = da.current, I(da);
	}
	function ga(e, t, n) {
		for (; e !== null;) {
			var r = e.alternate;
			if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
			e = e.return;
		}
	}
	function _a(e, t, n, r) {
		var a = e.child;
		for (a !== null && (a.return = e); a !== null;) {
			var o = a.dependencies;
			if (o !== null) {
				var s = a.child;
				o = o.firstContext;
				a: for (; o !== null;) {
					var c = o;
					o = a;
					for (var l = 0; l < t.length; l++) if (c.context === t[l]) {
						o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), ga(o.return, n, e), r || (s = null);
						break a;
					}
					o = c.next;
				}
			} else if (a.tag === 18) {
				if (s = a.return, s === null) throw Error(i(341));
				s.lanes |= n, o = s.alternate, o !== null && (o.lanes |= n), ga(s, n, e), s = null;
			} else a.tag === 13 && a.memoizedState !== null && a.memoizedState.dehydrated === null ? (a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), ga(a.return, n, e), s = a.child, s = s === null ? null : s.sibling) : s = a.child;
			if (s !== null) s.return = a;
			else for (s = a; s !== null;) {
				if (s === e) {
					s = null;
					break;
				}
				if (a = s.sibling, a !== null) {
					a.return = s.return, s = a;
					break;
				}
				s = s.return;
			}
			a = s;
		}
	}
	function va(e, t, n, r) {
		e = null;
		for (var a = t, o = !1; a !== null;) {
			if (!o) {
				if (a.flags & 524288) o = !0;
				else if (a.flags & 262144) break;
			}
			if (a.tag === 10) {
				var s = a.alternate;
				if (s === null) throw Error(i(387));
				if (s = s.memoizedProps, s !== null) {
					var c = a.type;
					Rr(a.pendingProps.value, s.value) || (e === null ? e = [c] : e.push(c));
				}
			} else if (a === we.current) {
				if (s = a.alternate, s === null) throw Error(i(387));
				s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e === null ? e = [uh] : e.push(uh));
			}
			a = a.return;
		}
		return e !== null && _a(t, e, n, r), t.flags |= 262144, e !== null;
	}
	function ya(e) {
		for (e = e.firstContext; e !== null;) {
			if (!Rr(e.context._currentValue, e.memoizedValue)) return !0;
			e = e.next;
		}
		return !1;
	}
	function ba(e) {
		fa = e, pa = null, e = e.dependencies, e !== null && (e.firstContext = null);
	}
	function xa(e) {
		return Ca(fa, e);
	}
	function Sa(e, t) {
		return fa === null && ba(e), Ca(e, t);
	}
	function Ca(e, t) {
		var n = t._currentValue;
		if (t = {
			context: t,
			memoizedValue: n,
			next: null
		}, pa === null) {
			if (e === null) throw Error(i(308));
			pa = t, e.dependencies = {
				lanes: 0,
				firstContext: t
			}, e.flags |= 524288;
		} else pa = pa.next = t;
		return n;
	}
	var wa = typeof AbortController < "u" ? AbortController : function() {
		var e = [], t = this.signal = {
			aborted: !1,
			addEventListener: function(t, n) {
				e.push(n);
			}
		};
		this.abort = function() {
			t.aborted = !0, e.forEach(function(e) {
				return e();
			});
		};
	}, Ta = t.unstable_scheduleCallback, Ea = t.unstable_NormalPriority, Da = {
		$$typeof: M,
		Consumer: null,
		Provider: null,
		_currentValue: null,
		_currentValue2: null,
		_threadCount: 0
	};
	function Oa() {
		return {
			controller: new wa(),
			data: /* @__PURE__ */ new Map(),
			refCount: 0
		};
	}
	function ka(e) {
		e.refCount--, e.refCount === 0 && Ta(Ea, function() {
			e.controller.abort();
		});
	}
	function Aa(e, t) {
		if (e.pendingLanes & 4194048) {
			var n = e.transitionTypes;
			for (n === null && (n = e.transitionTypes = []), e = 0; e < t.length; e++) {
				var r = t[e];
				n.indexOf(r) === -1 && n.push(r);
			}
		}
	}
	var ja = null;
	function Ma(e) {
		var t = e.transitionTypes;
		return e.transitionTypes = null, t;
	}
	var Na = null, Pa = 0, Fa = 0, Ia = null;
	function La(e, t) {
		if (Na === null) {
			var n = Na = [];
			Pa = 0, Fa = Lf(), Ia = {
				status: "pending",
				value: void 0,
				then: function(e) {
					n.push(e);
				}
			};
		}
		return Pa++, t.then(Ra, Ra), t;
	}
	function Ra() {
		if (--Pa === 0 && (ja = null, Na !== null)) {
			Ia !== null && (Ia.status = "fulfilled");
			var e = Na;
			Na = null, Fa = 0, Ia = null;
			for (var t = 0; t < e.length; t++) (0, e[t])();
		}
	}
	function za(e, t) {
		var n = [], r = {
			status: "pending",
			value: null,
			reason: null,
			then: function(e) {
				n.push(e);
			}
		};
		return e.then(function() {
			r.status = "fulfilled", r.value = t;
			for (var e = 0; e < n.length; e++) (0, n[e])(t);
		}, function(e) {
			for (r.status = "rejected", r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
		}), r;
	}
	var Ba = P.S;
	P.S = function(e, t) {
		if (_d = Re(), typeof t == "object" && t && typeof t.then == "function" && La(e, t), ja !== null) for (var n = Cf; n !== null;) Aa(n, ja), n = n.next;
		if (n = e.types, n !== null) {
			for (var r = Cf; r !== null;) Aa(r, n), r = r.next;
			if (Fa !== 0) {
				r = ja, r === null && (r = ja = []);
				for (var i = 0; i < n.length; i++) {
					var a = n[i];
					r.indexOf(a) === -1 && r.push(a);
				}
			}
		}
		Ba !== null && Ba(e, t);
	};
	var Va = be(null);
	function Ha() {
		var e = Va.current;
		return e === null ? ed.pooledCache : e;
	}
	function Ua(e, t) {
		t === null ? L(Va, Va.current) : L(Va, t.pool);
	}
	function Wa() {
		var e = Ha();
		return e === null ? null : {
			parent: Da._currentValue,
			pool: e
		};
	}
	var Ga = Error(i(460)), Ka = Error(i(474)), qa = Error(i(542)), Ja = { then: function() {} };
	function Ya(e) {
		return e = e.status, e === "fulfilled" || e === "rejected";
	}
	function Xa(e, t, n) {
		switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(hn, hn), t = n), t.status) {
			case "fulfilled": return t.value;
			case "rejected": throw e = t.reason, eo(e), e === void 0 && !("reason" in t) ? Error(i(600)) : e;
			default:
				if (typeof t.status == "string") t.then(hn, hn);
				else {
					if (e = ed, e !== null && 100 < e.shellSuspendCounter) throw Error(i(482));
					e = t, e.status = "pending", e.then(function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "fulfilled", n.value = e;
						}
					}, function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "rejected", n.reason = e;
						}
					});
				}
				switch (t.status) {
					case "fulfilled": return t.value;
					case "rejected": throw e = t.reason, eo(e), e;
				}
				throw Qa = t, Ga;
		}
	}
	function Za(e) {
		try {
			var t = e._init;
			return t(e._payload);
		} catch (e) {
			throw typeof e == "object" && e && typeof e.then == "function" ? (Qa = e, Ga) : e;
		}
	}
	var Qa = null;
	function $a() {
		if (Qa === null) throw Error(i(459));
		var e = Qa;
		return Qa = null, e;
	}
	function eo(e) {
		if (e === Ga || e === qa) throw Error(i(483));
	}
	var to = null, no = 0;
	function ro(e) {
		var t = no;
		return no += 1, to === null && (to = []), Xa(to, e, t);
	}
	function io(e, t) {
		t = t.props.ref, e.ref = t === void 0 ? null : t;
	}
	function ao(e, t) {
		throw t.$$typeof === O ? Error(i(525)) : (e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
	}
	function oo(e) {
		function t(t, n) {
			if (e) {
				var r = t.deletions;
				r === null ? (t.deletions = [n], t.flags |= 16) : r.push(n);
			}
		}
		function n(n, r) {
			if (!e) return null;
			for (; r !== null;) t(n, r), r = r.sibling;
			return null;
		}
		function r(e) {
			for (var t = /* @__PURE__ */ new Map(); e !== null;) e.key === null ? t.set(e.index, e) : t.set(e.key, e), e = e.sibling;
			return t;
		}
		function a(e, t) {
			return e = ji(e, t), e.index = 0, e.sibling = null, e;
		}
		function o(t, n, r) {
			return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 134217730, n) : (r = r.index, r < n ? (t.flags |= 2, n) : r)) : (t.flags |= 1048576, n);
		}
		function s(t) {
			return e && t.alternate === null && (t.flags |= 134217730), t;
		}
		function c(e, t, n, r) {
			return t === null || t.tag !== 6 ? (t = Fi(n, e.mode, r), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function l(e, t, n, r) {
			var i = n.type;
			return i === A ? (e = d(e, t, n.props.children, r, n.key), io(e, n), e) : t !== null && (t.elementType === i || typeof i == "object" && i && i.$$typeof === oe && Za(i) === t.type) ? (t = a(t, n.props), io(t, n), t.return = e, t) : (t = Ni(n.type, n.key, n.props, null, e.mode, r), io(t, n), t.return = e, t);
		}
		function u(e, t, n, r) {
			return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = Li(n, e.mode, r), t.return = e, t) : (t = a(t, n.children || []), t.return = e, t);
		}
		function d(e, t, n, r, i) {
			return t === null || t.tag !== 7 ? (t = Pi(n, e.mode, r, i), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function f(e, t, n) {
			if (typeof t == "string" && t !== "" || typeof t == "number" || typeof t == "bigint") return t = Fi("" + t, e.mode, n), t.return = e, t;
			if (typeof t == "object" && t) {
				switch (t.$$typeof) {
					case k: return n = Ni(t.type, t.key, t.props, null, e.mode, n), io(n, t), n.return = e, n;
					case ee: return t = Li(t, e.mode, n), t.return = e, t;
					case oe: return t = Za(t), f(e, t, n);
				}
				if (ge(t) || pe(t)) return t = Pi(t, e.mode, n, null), t.return = e, t;
				if (typeof t.then == "function") return f(e, ro(t), n);
				if (t.$$typeof === M) return f(e, Sa(e, t), n);
				ao(e, t);
			}
			return null;
		}
		function p(e, t, n, r) {
			var i = t === null ? null : t.key;
			if (typeof n == "string" && n !== "" || typeof n == "number" || typeof n == "bigint") return i === null ? c(e, t, "" + n, r) : null;
			if (typeof n == "object" && n) {
				switch (n.$$typeof) {
					case k: return n.key === i ? l(e, t, n, r) : null;
					case ee: return n.key === i ? u(e, t, n, r) : null;
					case oe: return n = Za(n), p(e, t, n, r);
				}
				if (ge(n) || pe(n)) return i === null ? d(e, t, n, r, null) : null;
				if (typeof n.then == "function") return p(e, t, ro(n), r);
				if (n.$$typeof === M) return p(e, t, Sa(e, n), r);
				ao(e, n);
			}
			return null;
		}
		function m(e, t, n, r, i) {
			if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return e = e.get(n) || null, c(t, e, "" + r, i);
			if (typeof r == "object" && r) {
				switch (r.$$typeof) {
					case k: return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
					case ee: return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
					case oe: return r = Za(r), m(e, t, n, r, i);
				}
				if (ge(r) || pe(r)) return e = e.get(n) || null, d(t, e, r, i, null);
				if (typeof r.then == "function") return m(e, t, n, ro(r), i);
				if (r.$$typeof === M) return m(e, t, n, Sa(t, r), i);
				ao(t, r);
			}
			return null;
		}
		function h(i, a, s, c) {
			for (var l = null, u = null, d = a, h = a = 0, g = null; d !== null && h < s.length; h++) {
				d.index > h ? (g = d, d = null) : g = d.sibling;
				var _ = p(i, d, s[h], c);
				if (_ === null) {
					d === null && (d = g);
					break;
				}
				e && d && _.alternate === null && t(i, d), a = o(_, a, h), u === null ? l = _ : u.sibling = _, u = _, d = g;
			}
			if (h === s.length) return n(i, d), U && Yi(i, h), l;
			if (d === null) {
				for (; h < s.length; h++) d = f(i, s[h], c), d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
				return U && Yi(i, h), l;
			}
			for (d = r(d); h < s.length; h++) g = m(d, i, h, s[h], c), g !== null && (e && (_ = g.alternate, _ !== null && d.delete(_.key === null ? h : _.key)), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g);
			return e && d.forEach(function(e) {
				return t(i, e);
			}), U && Yi(i, h), l;
		}
		function g(a, s, c, l) {
			if (c == null) throw Error(i(151));
			for (var u = null, d = null, h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++, v = c.next()) {
				h.index > g ? (_ = h, h = null) : _ = h.sibling;
				var y = p(a, h, v.value, l);
				if (y === null) {
					h === null && (h = _);
					break;
				}
				e && h && y.alternate === null && t(a, h), s = o(y, s, g), d === null ? u = y : d.sibling = y, d = y, h = _;
			}
			if (v.done) return n(a, h), U && Yi(a, g), u;
			if (h === null) {
				for (; !v.done; g++, v = c.next()) v = f(a, v.value, l), v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
				return U && Yi(a, g), u;
			}
			for (h = r(h); !v.done; g++, v = c.next()) v = m(h, a, g, v.value, l), v !== null && (e && (_ = v.alternate, _ !== null && h.delete(_.key === null ? g : _.key)), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
			return e && h.forEach(function(e) {
				return t(a, e);
			}), U && Yi(a, g), u;
		}
		function _(e, r, o, c) {
			if (typeof o == "object" && o && o.type === A && o.key === null && o.props.ref === void 0 && (o = o.props.children), typeof o == "object" && o) {
				switch (o.$$typeof) {
					case k:
						a: {
							for (var l = o.key; r !== null;) {
								if (r.key === l) {
									if (l = o.type, l === A) {
										if (r.tag === 7) {
											n(e, r.sibling), c = a(r, o.props.children), io(c, o), c.return = e, e = c;
											break a;
										}
									} else if (r.elementType === l || typeof l == "object" && l && l.$$typeof === oe && Za(l) === r.type) {
										n(e, r.sibling), c = a(r, o.props), io(c, o), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							o.type === A ? (c = Pi(o.props.children, e.mode, c, o.key), io(c, o), c.return = e, e = c) : (c = Ni(o.type, o.key, o.props, null, e.mode, c), io(c, o), c.return = e, e = c);
						}
						return s(e);
					case ee:
						a: {
							for (l = o.key; r !== null;) {
								if (r.key === l) {
									if (r.tag === 4 && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
										n(e, r.sibling), c = a(r, o.children || []), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							c = Li(o, e.mode, c), c.return = e, e = c;
						}
						return s(e);
					case oe: return o = Za(o), _(e, r, o, c);
				}
				if (ge(o)) return h(e, r, o, c);
				if (pe(o)) {
					if (l = pe(o), typeof l != "function") throw Error(i(150));
					return o = l.call(o), g(e, r, o, c);
				}
				if (typeof o.then == "function") return _(e, r, ro(o), c);
				if (o.$$typeof === M) return _(e, r, Sa(e, o), c);
				ao(e, o);
			}
			return typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint" ? (o = "" + o, r !== null && r.tag === 6 ? (n(e, r.sibling), c = a(r, o), c.return = e, e = c) : (n(e, r), c = Fi(o, e.mode, c), c.return = e, e = c), s(e)) : n(e, r);
		}
		return function(e, t, n, r) {
			try {
				no = 0;
				var i = _(e, t, n, r);
				return to = null, i;
			} catch (t) {
				if (t === Ga || t === qa) throw t;
				var a = ki(29, t, null, e.mode);
				return a.lanes = r, a.return = e, a;
			}
		};
	}
	var so = oo(!0), co = oo(!1), lo = !1;
	function uo(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				lanes: 0,
				hiddenCallbacks: null
			},
			callbacks: null
		};
	}
	function fo(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			firstBaseUpdate: e.firstBaseUpdate,
			lastBaseUpdate: e.lastBaseUpdate,
			shared: e.shared,
			callbacks: null
		});
	}
	function po(e) {
		return {
			lane: e,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function mo(e, t, n) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (r = r.shared, K & 2) {
			var i = r.pending;
			return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, t = Ei(e), Ti(e, null, n), t;
		}
		return Si(e, r, t, n), Ei(e);
	}
	function ho(e, t, n) {
		if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194048)) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, pt(e, n);
		}
	}
	function go(e, t) {
		var n = e.updateQueue, r = e.alternate;
		if (r !== null && (r = r.updateQueue, n === r)) {
			var i = null, a = null;
			if (n = n.firstBaseUpdate, n !== null) {
				do {
					var o = {
						lane: n.lane,
						tag: n.tag,
						payload: n.payload,
						callback: null,
						next: null
					};
					a === null ? i = a = o : a = a.next = o, n = n.next;
				} while (n !== null);
				a === null ? i = a = t : a = a.next = t;
			} else i = a = t;
			n = {
				baseState: r.baseState,
				firstBaseUpdate: i,
				lastBaseUpdate: a,
				shared: r.shared,
				callbacks: r.callbacks
			}, e.updateQueue = n;
		} else e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
	}
	var _o = !1;
	function vo() {
		if (_o) {
			var e = Ia;
			if (e !== null) throw e;
		}
	}
	function yo(e, t, n, r) {
		_o = !1;
		var i = e.updateQueue;
		lo = !1;
		var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
		if (s !== null) {
			i.shared.pending = null;
			var c = s, l = c.next;
			c.next = null, o === null ? a = l : o.next = l, o = c;
			var u = e.alternate;
			u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l, u.lastBaseUpdate = c));
		}
		if (a !== null) {
			var d = i.baseState;
			o = 0, u = l = c = null, s = a;
			do {
				var f = s.lane & -536870913, p = f !== s.lane;
				if (p ? (J & f) === f : (r & f) === f) {
					f !== 0 && f === Fa && (_o = !0), u !== null && (u = u.next = {
						lane: 0,
						tag: s.tag,
						payload: s.payload,
						callback: null,
						next: null
					});
					a: {
						var m = e, h = s;
						f = t;
						var g = n;
						switch (h.tag) {
							case 1:
								if (m = h.payload, typeof m == "function") {
									d = m.call(g, d, f);
									break a;
								}
								d = m;
								break a;
							case 3: m.flags = m.flags & -65537 | 128;
							case 0:
								if (m = h.payload, f = typeof m == "function" ? m.call(g, d, f) : m, f == null) break a;
								d = D({}, d, f);
								break a;
							case 2: lo = !0;
						}
					}
					f = s.callback, f !== null && (e.flags |= 64, p && (e.flags |= 8192), p = i.callbacks, p === null ? i.callbacks = [f] : p.push(f));
				} else p = {
					lane: f,
					tag: s.tag,
					payload: s.payload,
					callback: s.callback,
					next: null
				}, u === null ? (l = u = p, c = d) : u = u.next = p, o |= f;
				if (s = s.next, s === null) {
					if (s = i.shared.pending, s === null) break;
					p = s, s = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null;
				}
			} while (1);
			u === null && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = u, a === null && (i.shared.lanes = 0), cd |= o, e.lanes = o, e.memoizedState = d;
		}
	}
	function bo(e, t) {
		if (typeof e != "function") throw Error(i(191, e));
		e.call(t);
	}
	function xo(e, t) {
		var n = e.callbacks;
		if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) bo(n[e], t);
	}
	var So = be(null), Co = be(0);
	function wo(e, t) {
		e = od, L(Co, e), L(So, t), od = e | t.baseLanes;
	}
	function To() {
		L(Co, od), L(So, So.current);
	}
	function Eo() {
		od = Co.current, I(So), I(Co);
	}
	var Do = be(null), Oo = null;
	function ko(e) {
		var t = e.alternate;
		L(Po, Po.current & 1), L(Do, e), Oo === null && (t === null || So.current !== null || t.memoizedState !== null) && (Oo = e);
	}
	function Ao(e) {
		L(Po, Po.current), L(Do, e), Oo === null && (Oo = e);
	}
	function jo(e) {
		e.tag === 22 ? (L(Po, Po.current), L(Do, e), Oo === null && (Oo = e)) : Mo();
	}
	function Mo() {
		L(Po, Po.current), L(Do, Do.current);
	}
	function No(e) {
		I(Do), Oo === e && (Oo = null), I(Po);
	}
	var Po = be(0);
	function Fo(e, t) {
		L(Do, Do.current), L(Po, t);
	}
	function Io(e) {
		I(Po), I(Do), Oo === e && (Oo = null);
	}
	function Lo(e) {
		for (var t = e; t !== null;) {
			if (t.tag === 13) {
				var n = t.memoizedState;
				if (n !== null && (n = n.dehydrated, n === null || um(n) || dm(n))) return t;
			} else if (t.tag === 19 && t.memoizedProps.revealOrder !== "independent") {
				if (t.flags & 128) return t;
			} else if (t.child !== null) {
				t.child.return = t, t = t.child;
				continue;
			}
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return null;
				t = t.return;
			}
			t.sibling.return = t.return, t = t.sibling;
		}
		return null;
	}
	var Ro = 0, G = null, zo = null, Bo = null, Vo = !1, Ho = !1, Uo = !1, Wo = 0, Go = 0, Ko = null, qo = 0;
	function Jo() {
		throw Error(i(321));
	}
	function Yo(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!Rr(e[n], t[n])) return !1;
		return !0;
	}
	function Xo(e, t, n, r, i, a) {
		return Ro = a, G = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, P.H = e === null || e.memoizedState === null ? pc : mc, Uo = !1, a = n(r, i), Uo = !1, Ho && (a = Qo(t, n, r, i)), Zo(e), a;
	}
	function Zo(e) {
		P.H = fc;
		var t = zo !== null && zo.next !== null;
		if (Ro = 0, Bo = zo = G = null, Vo = !1, Go = 0, Ko = null, t) throw Error(i(300));
		e === null || jc || (e = e.dependencies, e !== null && ya(e) && (jc = !0));
	}
	function Qo(e, t, n, r) {
		G = e;
		var a = 0;
		do {
			if (Ho && (Ko = null), Go = 0, Ho = !1, 25 <= a) throw Error(i(301));
			if (a += 1, Bo = zo = null, e.updateQueue != null) {
				var o = e.updateQueue;
				o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0);
			}
			P.H = hc, o = t(n, r);
		} while (Ho);
		return o;
	}
	function $o() {
		var e = P.H, t = e.useState()[0];
		return t = typeof t.then == "function" ? os(t) : t, e = e.useState()[0], (zo === null ? null : zo.memoizedState) !== e && (G.flags |= 1024), t;
	}
	function es() {
		var e = Wo !== 0;
		return Wo = 0, e;
	}
	function ts(e, t, n) {
		t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
	}
	function ns(e) {
		if (Vo) {
			for (e = e.memoizedState; e !== null;) {
				var t = e.queue;
				t !== null && (t.pending = null), e = e.next;
			}
			Vo = !1;
		}
		Ro = 0, Bo = zo = G = null, Ho = !1, Go = Wo = 0, Ko = null;
	}
	function rs() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return Bo === null ? G.memoizedState = Bo = e : Bo = Bo.next = e, Bo;
	}
	function is() {
		if (zo === null) {
			var e = G.alternate;
			e = e === null ? null : e.memoizedState;
		} else e = zo.next;
		var t = Bo === null ? G.memoizedState : Bo.next;
		if (t !== null) Bo = t, zo = e;
		else {
			if (e === null) throw G.alternate === null ? Error(i(467)) : Error(i(310));
			zo = e, e = {
				memoizedState: zo.memoizedState,
				baseState: zo.baseState,
				baseQueue: zo.baseQueue,
				queue: zo.queue,
				next: null
			}, Bo === null ? G.memoizedState = Bo = e : Bo = Bo.next = e;
		}
		return Bo;
	}
	function as() {
		return {
			lastEffect: null,
			events: null,
			stores: null,
			memoCache: null
		};
	}
	function os(e) {
		var t = Go;
		return Go += 1, Ko === null && (Ko = []), e = Xa(Ko, e, t), t = G, (Bo === null ? t.memoizedState : Bo.next) === null && (t = t.alternate, P.H = t === null || t.memoizedState === null ? pc : mc), e;
	}
	function ss(e) {
		if (typeof e == "object" && e) {
			if (typeof e.then == "function") return os(e);
			if (e.$$typeof === de) return;
			if (e.$$typeof === M) return xa(e);
		}
		throw Error(i(438, String(e)));
	}
	function cs(e) {
		var t = null, n = G.updateQueue;
		if (n !== null && (t = n.memoCache), t == null) {
			var r = G.alternate;
			r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
				data: r.data.map(function(e) {
					return e.slice();
				}),
				index: 0
			})));
		}
		if (t ??= {
			data: [],
			index: 0
		}, n === null && (n = as(), G.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0) for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = le;
		return t.index++, n;
	}
	function ls(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function us(e) {
		return ds(is(), zo, e);
	}
	function ds(e, t, n) {
		var r = e.queue;
		if (r === null) throw Error(i(311));
		r.lastRenderedReducer = n;
		var a = e.baseQueue, o = r.pending;
		if (o !== null) {
			if (a !== null) {
				var s = a.next;
				a.next = o.next, o.next = s;
			}
			t.baseQueue = a = o, r.pending = null;
		}
		if (o = e.baseState, a === null) e.memoizedState = o;
		else {
			t = a.next;
			var c = s = null, l = null, u = t, d = !1;
			do {
				var f = u.lane & -536870913;
				if (f === u.lane ? (Ro & f) === f : (J & f) === f) {
					var p = u.revertLane;
					if (p === 0) l !== null && (l = l.next = {
						lane: 0,
						revertLane: 0,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}), f === Fa && (d = !0);
					else if ((Ro & p) === p) {
						u = u.next, p === Fa && (d = !0);
						continue;
					} else f = {
						lane: 0,
						revertLane: u.revertLane,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}, l === null ? (c = l = f, s = o) : l = l.next = f, G.lanes |= p, cd |= p;
					f = u.action, Uo && n(o, f), o = u.hasEagerState ? u.eagerState : n(o, f);
				} else p = {
					lane: f,
					revertLane: u.revertLane,
					gesture: u.gesture,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				}, l === null ? (c = l = p, s = o) : l = l.next = p, G.lanes |= f, cd |= f;
				u = u.next;
			} while (u !== null && u !== t);
			if (l === null ? s = o : l.next = c, !Rr(o, e.memoizedState) && (jc = !0, d && (n = Ia, n !== null))) throw n;
			e.memoizedState = o, e.baseState = s, e.baseQueue = l, r.lastRenderedState = o;
		}
		return a === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
	}
	function fs(e) {
		var t = is(), n = t.queue;
		if (n === null) throw Error(i(311));
		n.lastRenderedReducer = e;
		var r = n.dispatch, a = n.pending, o = t.memoizedState;
		if (a !== null) {
			n.pending = null;
			var s = a = a.next;
			do
				o = e(o, s.action), s = s.next;
			while (s !== a);
			Rr(o, t.memoizedState) || (jc = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
		}
		return [o, r];
	}
	function ps(e, t, n) {
		var r = G, a = is(), o = U;
		if (o) {
			if (n === void 0) throw Error(i(407));
			n = n();
		} else n = t();
		var s = !Rr((zo || a).memoizedState, n);
		if (s && (a.memoizedState = n, jc = !0), a = a.queue, Rs(gs.bind(null, r, a, e), [e]), e = a.getSnapshot !== t || s || Bo !== null && !!(Bo.memoizedState.tag & 1), Ns(e ? 9 : 8, { destroy: void 0 }, hs.bind(null, r, a, n, t), null), e) {
			if (r.flags |= 2048, ed === null) throw Error(i(349));
			o || Ro & 127 || ms(r, t, n);
		}
		return n;
	}
	function ms(e, t, n) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: n
		}, t = G.updateQueue, t === null ? (t = as(), G.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
	}
	function hs(e, t, n, r) {
		t.value = n, t.getSnapshot = r, _s(t) && vs(e);
	}
	function gs(e, t, n) {
		return n(function() {
			_s(t) && vs(e);
		});
	}
	function _s(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !Rr(e, n);
		} catch {
			return !0;
		}
	}
	function vs(e) {
		var t = wi(e, 2);
		t !== null && Id(t, e, 2);
	}
	function ys(e) {
		var t = rs();
		if (typeof e == "function") {
			var n = e;
			if (e = n(), Uo) {
				Ye(!0);
				try {
					n();
				} finally {
					Ye(!1);
				}
			}
		}
		return t.memoizedState = t.baseState = e, t.queue = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: ls,
			lastRenderedState: e
		}, t;
	}
	function bs(e, t, n, r) {
		return e.baseState = n, ds(e, zo, typeof r == "function" ? r : ls);
	}
	function xs(e, t, n, r, a) {
		if (lc(e)) throw Error(i(485));
		if (e = t.action, e !== null) {
			var o = {
				payload: a,
				action: e,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function(e) {
					o.listeners.push(e);
				}
			};
			P.T === null ? o.isTransition = !1 : n(!0), r(o), n = t.pending, n === null ? (o.next = t.pending = o, Ss(t, o)) : (o.next = n.next, t.pending = n.next = o);
		}
	}
	function Ss(e, t) {
		var n = t.action, r = t.payload, i = e.state;
		if (t.isTransition) {
			var a = P.T, o = {};
			o.types = a === null ? null : a.types, P.T = o;
			try {
				var s = n(i, r), c = P.S;
				c !== null && c(o, s), Cs(e, t, s);
			} catch (n) {
				Ts(e, t, n);
			} finally {
				a !== null && o.types !== null && (a.types = o.types), P.T = a;
			}
		} else try {
			a = n(i, r), Cs(e, t, a);
		} catch (n) {
			Ts(e, t, n);
		}
	}
	function Cs(e, t, n) {
		typeof n == "object" && n && typeof n.then == "function" ? n.then(function(n) {
			ws(e, t, n);
		}, function(n) {
			return Ts(e, t, n);
		}) : ws(e, t, n);
	}
	function ws(e, t, n) {
		t.status = "fulfilled", t.value = n, Es(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Ss(e, n)));
	}
	function Ts(e, t, n) {
		var r = e.pending;
		if (e.pending = null, r !== null) {
			r = r.next;
			do
				t.status = "rejected", t.reason = n, Es(t), t = t.next;
			while (t !== r);
		}
		e.action = null;
	}
	function Es(e) {
		e = e.listeners;
		for (var t = 0; t < e.length; t++) (0, e[t])();
	}
	function Ds(e, t) {
		return t;
	}
	function Os(e, t) {
		if (U) {
			var n = ed.formState;
			if (n !== null) {
				a: {
					var r = G;
					if (U) {
						if (ta) {
							b: {
								for (var i = ta, a = ra; i.nodeType !== 8;) if (!a || (i = pm(i.nextSibling), i === null)) {
									i = null;
									break b;
								}
								a = i.data, i = a === "F!" || a === "F" ? i : null;
							}
							if (i) {
								ta = pm(i.nextSibling), r = i.data === "F!";
								break a;
							}
						}
						aa(r);
					}
					r = !1;
				}
				r && (t = n[0]);
			}
		}
		return n = rs(), n.memoizedState = n.baseState = t, r = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Ds,
			lastRenderedState: t
		}, n.queue = r, n = oc.bind(null, G, r), r.dispatch = n, r = ys(!1), a = cc.bind(null, G, !1, r.queue), r = rs(), i = {
			state: t,
			dispatch: null,
			action: e,
			pending: null
		}, r.queue = i, n = xs.bind(null, G, i, a, n), i.dispatch = n, r.memoizedState = e, [
			t,
			n,
			!1
		];
	}
	function ks(e) {
		return As(is(), zo, e);
	}
	function As(e, t, n) {
		if (t = ds(e, t, Ds)[0], e = us(ls)[0], typeof t == "object" && t && typeof t.then == "function") try {
			var r = os(t);
		} catch (e) {
			throw e === Ga ? qa : e;
		}
		else r = t;
		t = is();
		var i = t.queue, a = i.dispatch;
		return n !== t.memoizedState && (G.flags |= 2048, Ns(9, { destroy: void 0 }, js.bind(null, i, n), null)), [
			r,
			a,
			e
		];
	}
	function js(e, t) {
		e.action = t;
	}
	function Ms(e) {
		var t = is(), n = zo;
		if (n !== null) return As(t, n, e);
		is(), t = t.memoizedState, n = is();
		var r = n.queue.dispatch;
		return n.memoizedState = e, [
			t,
			r,
			!1
		];
	}
	function Ns(e, t, n, r) {
		return e = {
			tag: e,
			create: n,
			deps: r,
			inst: t,
			next: null
		}, t = G.updateQueue, t === null && (t = as(), G.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
	}
	function Ps() {
		return is().memoizedState;
	}
	function Fs(e, t, n, r) {
		var i = rs();
		G.flags |= e, i.memoizedState = Ns(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r);
	}
	function Is(e, t, n, r) {
		var i = is();
		r = r === void 0 ? null : r;
		var a = i.memoizedState.inst;
		zo !== null && r !== null && Yo(r, zo.memoizedState.deps) ? i.memoizedState = Ns(t, a, n, r) : (G.flags |= e, i.memoizedState = Ns(1 | t, a, n, r));
	}
	function Ls(e, t) {
		Fs(8390656, 8, e, t);
	}
	function Rs(e, t) {
		Is(2048, 8, e, t);
	}
	function zs(e) {
		G.flags |= 4;
		var t = G.updateQueue;
		if (t === null) t = as(), G.updateQueue = t, t.events = [e];
		else {
			var n = t.events;
			n === null ? t.events = [e] : n.push(e);
		}
	}
	function Bs(e) {
		var t = is().memoizedState;
		return zs({
			ref: t,
			nextImpl: e
		}), function() {
			if (K & 2) throw Error(i(440));
			return t.impl.apply(void 0, arguments);
		};
	}
	function Vs(e, t) {
		return Is(4, 2, e, t);
	}
	function Hs(e, t) {
		return Is(4, 4, e, t);
	}
	function Us(e, t) {
		if (typeof t == "function") {
			e = e();
			var n = t(e);
			return function() {
				typeof n == "function" ? n() : t(null);
			};
		}
		if (t != null) return e = e(), t.current = e, function() {
			t.current = null;
		};
	}
	function Ws(e, t, n) {
		n = n == null ? null : n.concat([e]), Is(4, 4, Us.bind(null, t, e), n);
	}
	function Gs() {}
	function Ks(e, t) {
		var n = is();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return t !== null && Yo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
	}
	function qs(e, t) {
		var n = is();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		if (t !== null && Yo(t, r[1])) return r[0];
		if (r = e(), Uo) {
			Ye(!0);
			try {
				e();
			} finally {
				Ye(!1);
			}
		}
		return n.memoizedState = [r, t], r;
	}
	function Js(e, t, n) {
		return n === void 0 || Ro & 1073741824 && !(J & 261930) ? e.memoizedState = t : (e.memoizedState = n, e = Pd(), G.lanes |= e, cd |= e, n);
	}
	function Ys(e, t, n, r) {
		return Rr(n, t) ? n : So.current === null ? !(Ro & 106) || Ro & 1073741824 && !(J & 261930) ? (jc = !0, e.memoizedState = n) : (e = Pd(), G.lanes |= e, cd |= e, t) : (e = Js(e, n, r), Rr(e, t) || (jc = !0), e);
	}
	function Xs(e, t, n, r, i) {
		var a = F.p;
		F.p = a !== 0 && 8 > a ? a : 8;
		var o = P.T, s = {};
		s.types = o === null ? null : o.types, P.T = s, cc(e, !1, t, n);
		try {
			var c = i(), l = P.S;
			l !== null && l(s, c), typeof c == "object" && c && typeof c.then == "function" ? sc(e, t, za(c, r), Nd(e)) : sc(e, t, r, Nd(e));
		} catch (n) {
			sc(e, t, {
				then: function() {},
				status: "rejected",
				reason: n
			}, Nd());
		} finally {
			F.p = a, o !== null && s.types !== null && (o.types = s.types), P.T = o;
		}
	}
	function Zs() {}
	function Qs(e, t, n, r) {
		if (e.tag !== 5) throw Error(i(476));
		var a = $s(e).queue;
		Xs(e, a, t, _e, n === null ? Zs : function() {
			return ec(e), n(r);
		});
	}
	function $s(e) {
		var t = e.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: _e,
			baseState: _e,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: ls,
				lastRenderedState: _e
			},
			next: null
		};
		var n = {};
		return t.next = {
			memoizedState: n,
			baseState: n,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: ls,
				lastRenderedState: n
			},
			next: null
		}, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
	}
	function ec(e) {
		var t = $s(e);
		t.next === null && (t = e.alternate.memoizedState), sc(e, t.next.queue, {}, Nd());
	}
	function tc() {
		return xa(uh);
	}
	function nc() {
		return is().memoizedState;
	}
	function rc() {
		return is().memoizedState;
	}
	function ic(e) {
		for (var t = e.return; t !== null;) {
			switch (t.tag) {
				case 24:
				case 3:
					var n = Nd();
					e = po(n);
					var r = mo(t, e, n);
					r !== null && (Id(r, t, n), ho(r, t, n)), t = { cache: Oa() }, e.payload = t;
					return;
			}
			t = t.return;
		}
	}
	function ac(e, t, n) {
		var r = Nd();
		n = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, lc(e) ? uc(t, n) : (n = Ci(e, t, n, r), n !== null && (Id(n, e, r), dc(n, t, r)));
	}
	function oc(e, t, n) {
		sc(e, t, n, Nd());
	}
	function sc(e, t, n, r) {
		var i = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (lc(e)) uc(t, i);
		else {
			var a = e.alternate;
			if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
				var o = t.lastRenderedState, s = a(o, n);
				if (i.hasEagerState = !0, i.eagerState = s, Rr(s, o)) return Si(e, t, i, 0), ed === null && xi(), !1;
			} catch {}
			if (n = Ci(e, t, i, r), n !== null) return Id(n, e, r), dc(n, t, r), !0;
		}
		return !1;
	}
	function cc(e, t, n, r) {
		if (r = {
			lane: 2,
			revertLane: Lf(),
			gesture: null,
			action: r,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, lc(e)) {
			if (t) throw Error(i(479));
		} else t = Ci(e, n, r, 2), t !== null && Id(t, e, 2);
	}
	function lc(e) {
		var t = e.alternate;
		return e === G || t !== null && t === G;
	}
	function uc(e, t) {
		Ho = Vo = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
	}
	function dc(e, t, n) {
		if (n & 4194048) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, pt(e, n);
		}
	}
	var fc = {
		readContext: xa,
		use: ss,
		useCallback: Jo,
		useContext: Jo,
		useEffect: Jo,
		useImperativeHandle: Jo,
		useLayoutEffect: Jo,
		useInsertionEffect: Jo,
		useMemo: Jo,
		useReducer: Jo,
		useRef: Jo,
		useState: Jo,
		useDebugValue: Jo,
		useDeferredValue: Jo,
		useTransition: Jo,
		useSyncExternalStore: Jo,
		useId: Jo,
		useHostTransitionStatus: Jo,
		useFormState: Jo,
		useActionState: Jo,
		useOptimistic: Jo,
		useMemoCache: Jo,
		useCacheRefresh: Jo,
		useEffectEvent: Jo
	}, pc = {
		readContext: xa,
		use: ss,
		useCallback: function(e, t) {
			return rs().memoizedState = [e, t === void 0 ? null : t], e;
		},
		useContext: xa,
		useEffect: Ls,
		useImperativeHandle: function(e, t, n) {
			n = n == null ? null : n.concat([e]), Fs(4194308, 4, Us.bind(null, t, e), n);
		},
		useLayoutEffect: function(e, t) {
			return Fs(4194308, 4, e, t);
		},
		useInsertionEffect: function(e, t) {
			Fs(4, 2, e, t);
		},
		useMemo: function(e, t) {
			var n = rs();
			t = t === void 0 ? null : t;
			var r = e();
			if (Uo) {
				Ye(!0);
				try {
					e();
				} finally {
					Ye(!1);
				}
			}
			return n.memoizedState = [r, t], r;
		},
		useReducer: function(e, t, n) {
			var r = rs();
			if (n !== void 0) {
				var i = n(t);
				if (Uo) {
					Ye(!0);
					try {
						n(t);
					} finally {
						Ye(!1);
					}
				}
			} else i = t;
			return r.memoizedState = r.baseState = i, e = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: i
			}, r.queue = e, e = e.dispatch = ac.bind(null, G, e), [r.memoizedState, e];
		},
		useRef: function(e) {
			var t = rs();
			return e = { current: e }, t.memoizedState = e;
		},
		useState: function(e) {
			e = ys(e);
			var t = e.queue, n = oc.bind(null, G, t);
			return t.dispatch = n, [e.memoizedState, n];
		},
		useDebugValue: Gs,
		useDeferredValue: function(e, t) {
			return Js(rs(), e, t);
		},
		useTransition: function() {
			var e = ys(!1);
			return e = Xs.bind(null, G, e.queue, !0, !1), rs().memoizedState = e, [!1, e];
		},
		useSyncExternalStore: function(e, t, n) {
			var r = G, a = rs();
			if (U) {
				if (n === void 0) throw Error(i(407));
				n = n();
			} else {
				if (n = t(), ed === null) throw Error(i(349));
				J & 127 || ms(r, t, n);
			}
			a.memoizedState = n;
			var o = {
				value: n,
				getSnapshot: t
			};
			return a.queue = o, Ls(gs.bind(null, r, o, e), [e]), r.flags |= 2048, Ns(9, { destroy: void 0 }, hs.bind(null, r, o, n, t), null), n;
		},
		useId: function() {
			var e = rs(), t = ed.identifierPrefix;
			if (U) {
				var n = Ji, r = qi;
				n = (r & ~(1 << 32 - Xe(r) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Wo++, 0 < n && (t += "H" + n.toString(32)), t += "_";
			} else n = qo++, t = "_" + t + "r_" + n.toString(32) + "_";
			return e.memoizedState = t;
		},
		useHostTransitionStatus: tc,
		useFormState: Os,
		useActionState: Os,
		useOptimistic: function(e) {
			var t = rs();
			t.memoizedState = t.baseState = e;
			var n = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: null,
				lastRenderedState: null
			};
			return t.queue = n, t = cc.bind(null, G, !0, n), n.dispatch = t, [e, t];
		},
		useMemoCache: cs,
		useCacheRefresh: function() {
			return rs().memoizedState = ic.bind(null, G);
		},
		useEffectEvent: function(e) {
			var t = rs(), n = { impl: e };
			return t.memoizedState = n, function() {
				if (K & 2) throw Error(i(440));
				return n.impl.apply(void 0, arguments);
			};
		}
	}, mc = {
		readContext: xa,
		use: ss,
		useCallback: Ks,
		useContext: xa,
		useEffect: Rs,
		useImperativeHandle: Ws,
		useInsertionEffect: Vs,
		useLayoutEffect: Hs,
		useMemo: qs,
		useReducer: us,
		useRef: Ps,
		useState: function() {
			return us(ls);
		},
		useDebugValue: Gs,
		useDeferredValue: function(e, t) {
			return Ys(is(), zo.memoizedState, e, t);
		},
		useTransition: function() {
			var e = us(ls)[0], t = is().memoizedState;
			return [typeof e == "boolean" ? e : os(e), t];
		},
		useSyncExternalStore: ps,
		useId: nc,
		useHostTransitionStatus: tc,
		useFormState: ks,
		useActionState: ks,
		useOptimistic: function(e, t) {
			return bs(is(), zo, e, t);
		},
		useMemoCache: cs,
		useCacheRefresh: rc,
		useEffectEvent: Bs
	}, hc = {
		readContext: xa,
		use: ss,
		useCallback: Ks,
		useContext: xa,
		useEffect: Rs,
		useImperativeHandle: Ws,
		useInsertionEffect: Vs,
		useLayoutEffect: Hs,
		useMemo: qs,
		useReducer: fs,
		useRef: Ps,
		useState: function() {
			return fs(ls);
		},
		useDebugValue: Gs,
		useDeferredValue: function(e, t) {
			var n = is();
			return zo === null ? Js(n, e, t) : Ys(n, zo.memoizedState, e, t);
		},
		useTransition: function() {
			var e = fs(ls)[0], t = is().memoizedState;
			return [typeof e == "boolean" ? e : os(e), t];
		},
		useSyncExternalStore: ps,
		useId: nc,
		useHostTransitionStatus: tc,
		useFormState: Ms,
		useActionState: Ms,
		useOptimistic: function(e, t) {
			var n = is();
			return zo === null ? (n.baseState = e, [e, n.queue.dispatch]) : bs(n, zo, e, t);
		},
		useMemoCache: cs,
		useCacheRefresh: rc,
		useEffectEvent: Bs
	};
	function gc(e, t, n, r) {
		t = e.memoizedState, n = n(r, t), n = n == null ? t : D({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var _c = {
		enqueueSetState: function(e, t, n) {
			e = e._reactInternals;
			var r = Nd(), i = po(r);
			i.payload = t, n != null && (i.callback = n), t = mo(e, i, r), t !== null && (Id(t, e, r), ho(t, e, r));
		},
		enqueueReplaceState: function(e, t, n) {
			e = e._reactInternals;
			var r = Nd(), i = po(r);
			i.tag = 1, i.payload = t, n != null && (i.callback = n), t = mo(e, i, r), t !== null && (Id(t, e, r), ho(t, e, r));
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternals;
			var n = Nd(), r = po(n);
			r.tag = 2, t != null && (r.callback = t), t = mo(e, r, n), t !== null && (Id(t, e, n), ho(t, e, n));
		}
	};
	function vc(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !zr(n, r) || !zr(i, a) : !0;
	}
	function yc(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && _c.enqueueReplaceState(t, t.state, null);
	}
	function bc(e, t) {
		var n = t;
		if ("ref" in t) for (var r in n = {}, t) r !== "ref" && (n[r] = t[r]);
		if (e = e.defaultProps) for (var i in n === t && (n = D({}, n)), e) n[i] === void 0 && (n[i] = e[i]);
		return n;
	}
	function xc(e) {
		_i(e);
	}
	function Sc(e) {
		console.error(e);
	}
	function Cc(e) {
		_i(e);
	}
	function wc(e, t) {
		try {
			var n = e.onUncaughtError;
			n(t.value, { componentStack: t.stack });
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function Tc(e, t, n) {
		try {
			var r = e.onCaughtError;
			r(n.value, {
				componentStack: n.stack,
				errorBoundary: t.tag === 1 ? t.stateNode : null
			});
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function Ec(e, t, n) {
		return n = po(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
			wc(e, t);
		}, n;
	}
	function Dc(e) {
		return e = po(e), e.tag = 3, e;
	}
	function Oc(e, t, n, r) {
		var i = n.type.getDerivedStateFromError;
		if (typeof i == "function") {
			var a = r.value;
			e.payload = function() {
				return i(a);
			}, e.callback = function() {
				Tc(t, n, r);
			};
		}
		var o = n.stateNode;
		o !== null && typeof o.componentDidCatch == "function" && (e.callback = function() {
			Tc(t, n, r), typeof i != "function" && (bd === null ? bd = /* @__PURE__ */ new Set([this]) : bd.add(this));
			var e = r.stack;
			this.componentDidCatch(r.value, { componentStack: e === null ? "" : e });
		});
	}
	function kc(e, t, n, r, a) {
		if (n.flags |= 32768, typeof r == "object" && r && typeof r.then == "function") {
			if (t = n.alternate, t !== null && va(t, n, a, !0), n = Do.current, n !== null) {
				switch (n.tag) {
					case 31:
					case 13:
					case 19: return Oo === null ? Jd() : n.alternate === null && sd === 0 && (sd = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, r === Ja ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([r]) : t.add(r), _f(e, r, a)), !1;
					case 22: return n.flags |= 65536, r === Ja ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
						transitions: null,
						markerInstances: null,
						retryQueue: /* @__PURE__ */ new Set([r])
					}, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([r]) : n.add(r)), _f(e, r, a)), !1;
				}
				throw Error(i(435, n.tag));
			}
			return _f(e, r, a), Jd(), !1;
		}
		if (U) return t = Do.current, t === null ? (r !== ia && (t = Error(i(423), { cause: r }), ua(zi(t, n))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, r = zi(r, n), a = Ec(e.stateNode, r, a), go(e, a), sd !== 4 && (sd = 2)) : (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = a, r !== ia && (e = Error(i(422), { cause: r }), ua(zi(e, n)))), !1;
		var o = Error(i(520), { cause: r });
		if (o = zi(o, n), pd === null ? pd = [o] : pd.push(o), sd !== 4 && (sd = 2), t === null) return !0;
		r = zi(r, n), n = t;
		do {
			switch (n.tag) {
				case 3: return n.flags |= 65536, e = a & -a, n.lanes |= e, e = Ec(n.stateNode, r, e), go(n, e), !1;
				case 1:
					if (t = n.type, o = n.stateNode, !(n.flags & 128) && (typeof t.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (bd === null || !bd.has(o)))) return n.flags |= 65536, a &= -a, n.lanes |= a, a = Dc(a), Oc(a, e, n, r), go(n, a), !1;
					break;
				case 22: if (n.memoizedState !== null) return n.flags |= 65536, !1;
			}
			n = n.return;
		} while (n !== null);
		return !1;
	}
	var Ac = Error(i(461)), jc = !1;
	function Mc(e, t, n, r) {
		t.child = e === null ? co(t, null, n, r) : so(t, e.child, n, r);
	}
	function Nc(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		if ("ref" in r) {
			var o = {};
			for (var s in r) s !== "ref" && (o[s] = r[s]);
		} else o = r;
		return ba(t), r = Xo(e, t, n, o, a, i), s = es(), e !== null && !jc ? (ts(e, t, i), sl(e, t, i)) : (U && s && Zi(t), t.flags |= 1, Mc(e, t, r, i), t.child);
	}
	function Pc(e, t, n, r, i) {
		if (e === null) {
			var a = n.type;
			return typeof a == "function" && !Ai(a) && a.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = a, Fc(e, t, a, r, i)) : (e = Ni(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, !cl(e, i)) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? zr : n, n(o, r) && e.ref === t.ref) return sl(e, t, i);
		}
		return t.flags |= 1, e = ji(a, r), e.ref = t.ref, e.return = t, t.child = e;
	}
	function Fc(e, t, n, r, i) {
		if (e !== null) {
			var a = e.memoizedProps;
			if (zr(a, r) && e.ref === t.ref) {
				if (jc = !1, t.pendingProps = r = a, cl(e, i)) e.flags & 131072 && (jc = !0);
				else return t.lanes = e.lanes, sl(e, t, i);
			}
		}
		return Uc(e, t, n, r, i);
	}
	function Ic(e, t, n, r) {
		var i = r.children, a = e === null ? null : e.memoizedState;
		if (e === null && t.stateNode === null && (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), r.mode === "hidden") {
			if (t.flags & 128) {
				if (a = a === null ? n : a.baseLanes | n, e !== null) {
					for (r = t.child = e.child, i = 0; r !== null;) i = i | r.lanes | r.childLanes, r = r.sibling;
					r = i & ~a;
				} else r = 0, t.child = null;
				return Rc(e, t, a, n, r);
			}
			if (n & 536870912) t.memoizedState = {
				baseLanes: 0,
				cachePool: null
			}, e !== null && Ua(t, a === null ? null : a.cachePool), a === null ? To() : wo(t, a), jo(t);
			else return r = t.lanes = 536870912, Rc(e, t, a === null ? n : a.baseLanes | n, n, r);
		} else a === null ? (e !== null && Ua(t, null), To(), Mo()) : (Ua(t, a.cachePool), wo(t, a), Mo(), t.memoizedState = null);
		return Mc(e, t, i, n), t.child;
	}
	function Lc(e, t) {
		return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), t.sibling;
	}
	function Rc(e, t, n, r, i) {
		var a = Ha();
		return a = a === null ? null : {
			parent: Da._currentValue,
			pool: a
		}, t.memoizedState = {
			baseLanes: n,
			cachePool: a
		}, e !== null && Ua(t, null), To(), jo(t), e !== null && va(e, t, r, !0), t.childLanes = i, null;
	}
	function zc(e, t) {
		return t = Qc({
			mode: t.mode,
			children: t.children
		}, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
	}
	function Bc(e, t, n) {
		return so(t, e.child, null, n), e = zc(t, t.pendingProps), e.flags |= 2, No(t), t.memoizedState = null, e;
	}
	function Vc(e, t, n) {
		var r = t.pendingProps, a = !!(t.flags & 128);
		if (t.flags &= -129, e === null) {
			if (U) {
				if (r.mode === "hidden") return e = zc(t, r), t.lanes = 536870912, e.memoizedState = {
					baseLanes: 0,
					cachePool: null
				}, Lc(null, e);
				if (Ao(t), (e = ta) ? (e = lm(e, ra), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Ki === null ? null : {
						id: qi,
						overflow: Ji
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = Ii(e), n.return = t, t.child = n, ea = t, ta = null)) : e = null, e === null) throw aa(t);
				return t.lanes = 536870912, null;
			}
			return zc(t, r);
		}
		var o = e.memoizedState;
		if (o !== null) {
			var s = o.dehydrated;
			if (Ao(t), a) {
				if (t.flags & 256) t.flags &= -257, t = Bc(e, t, n);
				else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
				else throw Error(i(558));
			} else if (jc || va(e, t, n, !1), a = (n & e.childLanes) !== 0, jc || a) {
				if (So.current === null) {
					if (r = ed, r !== null && (s = mt(r, n), s !== 0 && s !== o.retryLane)) throw o.retryLane = s, wi(e, s), Id(r, e, s), Ac;
					Jd();
				}
				t = Bc(e, t, n);
			} else e = o.treeContext, ta = pm(s.nextSibling), ea = t, U = !0, na = null, ra = !1, e !== null && $i(t, e), t = zc(t, r), t.flags |= 134221824;
			return t;
		}
		return e = ji(e.child, {
			mode: r.mode,
			children: r.children
		}), e.ref = t.ref, t.child = e, e.return = t, e;
	}
	function Hc(e, t) {
		var n = t.ref;
		if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
		else {
			if (typeof n != "function" && typeof n != "object") throw Error(i(284));
			(e === null || e.ref !== n) && (t.flags |= 4194816);
		}
	}
	function Uc(e, t, n, r, i) {
		return ba(t), n = Xo(e, t, n, r, void 0, i), r = es(), e !== null && !jc ? (ts(e, t, i), sl(e, t, i)) : (U && r && Zi(t), t.flags |= 1, Mc(e, t, n, i), t.child);
	}
	function Wc(e, t, n, r, i, a) {
		return ba(t), t.updateQueue = null, n = Qo(t, r, n, i), Zo(e), r = es(), e !== null && !jc ? (ts(e, t, a), sl(e, t, a)) : (U && r && Zi(t), t.flags |= 1, Mc(e, t, n, a), t.child);
	}
	function Gc(e, t, n, r, i) {
		if (ba(t), t.stateNode === null) {
			var a = Di, o = n.contextType;
			typeof o == "object" && o && (a = xa(o)), a = new n(r, a), t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = _c, t.stateNode = a, a._reactInternals = t, a = t.stateNode, a.props = r, a.state = t.memoizedState, a.refs = {}, uo(t), o = n.contextType, a.context = typeof o == "object" && o ? xa(o) : Di, a.state = t.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (gc(t, n, o, r), a.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (o = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), o !== a.state && _c.enqueueReplaceState(a, a.state, null), yo(t, r, a, i), vo(), a.state = t.memoizedState), typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
		} else if (e === null) {
			a = t.stateNode;
			var s = t.memoizedProps, c = bc(n, s);
			a.props = c;
			var l = a.context, u = n.contextType;
			o = Di, typeof u == "object" && u && (o = xa(u));
			var d = n.getDerivedStateFromProps;
			u = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function", s = t.pendingProps !== s, u || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s || l !== o) && yc(t, a, r, o), lo = !1;
			var f = t.memoizedState;
			a.state = f, yo(t, r, a, i), vo(), l = t.memoizedState, s || f !== l || lo ? (typeof d == "function" && (gc(t, n, d, r), l = t.memoizedState), (c = lo || vc(t, n, c, r, f, l, o)) ? (u || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = o, r = c) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
		} else {
			a = t.stateNode, fo(e, t), o = t.memoizedProps, u = bc(n, o), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, c = Di, typeof l == "object" && l && (c = xa(l)), s = n.getDerivedStateFromProps, (l = typeof s == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== d || f !== c) && yc(t, a, r, c), lo = !1, f = t.memoizedState, a.state = f, yo(t, r, a, i), vo();
			var p = t.memoizedState;
			o !== d || f !== p || lo || e !== null && e.dependencies !== null && ya(e.dependencies) ? (typeof s == "function" && (gc(t, n, s, r), p = t.memoizedState), (u = lo || vc(t, n, u, r, f, p, c) || e !== null && e.dependencies !== null && ya(e.dependencies)) ? (l || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, p, c), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, p, c)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = c, r = u) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
		}
		return a = r, Hc(e, t), r = !!(t.flags & 128), a || r ? (a = t.stateNode, n = r && typeof n.getDerivedStateFromError != "function" ? null : a.render(), t.flags |= 1, e !== null && r ? (t.child = so(t, e.child, null, i), t.child = so(t, null, n, i)) : Mc(e, t, n, i), t.memoizedState = a.state, e = t.child) : e = sl(e, t, i), e;
	}
	function Kc(e, t, n, r) {
		return ca(), t.flags |= 256, Mc(e, t, n, r), t.child;
	}
	var qc = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null
	};
	function Jc(e) {
		return {
			baseLanes: e,
			cachePool: Wa()
		};
	}
	function Yc(e, t, n) {
		return e = e === null ? 0 : e.childLanes & ~n, t && (e |= dd), e;
	}
	function Xc(e, t, n) {
		var r = t.pendingProps, i = !1, a = !!(t.flags & 128), o;
		if ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : !!(Po.current & 2)), o && (i = !0, t.flags &= -129), o = !!(t.flags & 32), t.flags &= -33, e === null) {
			if (U) {
				if (i ? ko(t) : Mo(), (e = ta) ? (e = lm(e, ra), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Ki === null ? null : {
						id: qi,
						overflow: Ji
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = Ii(e), n.return = t, t.child = n, ea = t, ta = null)) : e = null, e === null) throw aa(t);
				return t.lanes = dm(e) ? 32 : 536870912, null;
			}
			return a = r.children, r = r.fallback, i ? (Mo(), i = t.mode, a = Qc({
				mode: "hidden",
				children: a
			}, i), r = Pi(r, i, n, null), a.return = t, r.return = t, a.sibling = r, t.child = a, r = t.child, r.memoizedState = Jc(n), r.childLanes = Yc(e, o, n), t.memoizedState = qc, Lc(null, r)) : (ko(t), Zc(t, a));
		}
		var s = e.memoizedState;
		if (s !== null) {
			var c = s.dehydrated;
			if (c !== null) return el(e, t, a, o, r, c, s, n);
		}
		return i ? (Mo(), i = r.fallback, a = t.mode, s = e.child, c = s.sibling, r = ji(s, {
			mode: "hidden",
			children: r.children
		}), r.subtreeFlags = s.subtreeFlags & 1206910976, c === null ? (i = Pi(i, a, n, null), i.flags |= 2) : i = ji(c, i), i.return = t, r.return = t, r.sibling = i, t.child = r, Lc(null, r), r = t.child, i = e.child.memoizedState, i === null ? i = Jc(n) : (a = i.cachePool, a === null ? a = Wa() : (s = Da._currentValue, a = a.parent === s ? a : {
			parent: s,
			pool: s
		}), i = {
			baseLanes: i.baseLanes | n,
			cachePool: a
		}), r.memoizedState = i, r.childLanes = Yc(e, o, n), t.memoizedState = qc, Lc(e.child, r)) : (ko(t), n = e.child, e = n.sibling, n = ji(n, {
			mode: "visible",
			children: r.children
		}), n.return = t, n.sibling = null, e !== null && (o = t.deletions, o === null ? (t.deletions = [e], t.flags |= 16) : o.push(e)), t.child = n, t.memoizedState = null, n);
	}
	function Zc(e, t) {
		return t = Qc({
			mode: "visible",
			children: t
		}, e.mode), t.return = e, e.child = t;
	}
	function Qc(e, t) {
		return e = ki(22, e, null, t), e.lanes = 0, e;
	}
	function $c(e, t, n) {
		return so(t, e.child, null, n), e = Zc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
	}
	function el(e, t, n, r, a, o, s, c) {
		if (n) return t.flags & 256 ? (ko(t), t.flags &= -257, $c(e, t, c)) : t.memoizedState === null ? (Mo(), o = a.fallback, s = t.mode, a = Qc({
			mode: "visible",
			children: a.children
		}, s), o = Pi(o, s, c, null), o.flags |= 2, a.return = t, o.return = t, a.sibling = o, t.child = a, so(t, e.child, null, c), a = t.child, a.memoizedState = Jc(c), a.childLanes = Yc(e, r, c), t.memoizedState = qc, Lc(null, a)) : (Mo(), t.child = e.child, t.flags |= 128, null);
		if (ko(t), dm(o)) {
			if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
			return r = l, r !== "" && (a = Error(i(419)), a.stack = "", a.digest = r, ua({
				value: a,
				source: null,
				stack: null
			})), $c(e, t, c);
		}
		if (jc || va(e, t, c, !1), r = (c & e.childLanes) !== 0, jc || r) {
			if (So.current !== null) return $c(e, t, c);
			if (r = ed, r !== null && (a = mt(r, c), a !== 0 && a !== s.retryLane)) throw s.retryLane = a, wi(e, a), Id(r, e, a), Ac;
			return um(o) || Jd(), $c(e, t, c);
		}
		return um(o) ? (t.flags |= 192, t.child = e.child, null) : (e = s.treeContext, ta = pm(o.nextSibling), ea = t, U = !0, na = null, ra = !1, e !== null && $i(t, e), t = Zc(t, a.children), t.flags |= 134221824, t);
	}
	function tl(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), ga(e.return, t, n);
	}
	function nl(e) {
		for (var t = null; e !== null;) {
			var n = e.alternate;
			n !== null && Lo(n) === null && (t = e), e = e.sibling;
		}
		return t;
	}
	function rl(e, t, n, r, i, a) {
		var o = e.memoizedState;
		o === null ? e.memoizedState = {
			isBackwards: t,
			rendering: null,
			renderingStartTime: 0,
			last: r,
			tail: n,
			tailMode: i,
			treeForkCount: a
		} : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i, o.treeForkCount = a);
	}
	function il(e) {
		var t = e.child;
		for (e.child = null; t !== null;) {
			var n = t.sibling;
			t.sibling = e.child, e.child = t, t = n;
		}
	}
	function al(e, t, n) {
		var r = t.pendingProps, i = r.revealOrder, a = r.tail;
		r = r.children;
		var o = Po.current;
		if (t.flags & 128) return Fo(t, o), null;
		var s = !!(o & 2);
		if (s ? (o = o & 1 | 2, t.flags |= 128) : o &= 1, Fo(t, o), i === "backwards" && e !== null ? (il(e), Mc(e, t, r, n), il(e)) : Mc(e, t, r, n), r = U ? Ui : 0, !s && e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
			if (e.tag === 13) e.memoizedState !== null && tl(e, n, t);
			else if (e.tag === 19) tl(e, n, t);
			else if (e.child !== null) {
				e.child.return = e, e = e.child;
				continue;
			}
			if (e === t) break a;
			for (; e.sibling === null;) {
				if (e.return === null || e.return === t) break a;
				e = e.return;
			}
			e.sibling.return = e.return, e = e.sibling;
		}
		switch (i) {
			case "backwards":
				n = nl(t.child), n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null, il(t)), rl(t, !0, i, null, a, r);
				break;
			case "unstable_legacy-backwards":
				for (n = null, i = t.child, t.child = null; i !== null;) {
					if (e = i.alternate, e !== null && Lo(e) === null) {
						t.child = i;
						break;
					}
					e = i.sibling, i.sibling = n, n = i, i = e;
				}
				rl(t, !0, n, null, a, r);
				break;
			case "together":
				rl(t, !1, null, null, void 0, r);
				break;
			case "independent":
				t.memoizedState = null;
				break;
			default: n = nl(t.child), n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), rl(t, !1, i, n, a, r);
		}
		return t.child;
	}
	function ol(e, t, n) {
		var r = t.pendingProps;
		return ma(t, t.type, r.value), Mc(e, t, r.children, n), t.child;
	}
	function sl(e, t, n) {
		if (e !== null && (t.dependencies = e.dependencies), cd |= t.lanes, (n & t.childLanes) === 0) {
			if (e !== null) {
				if (va(e, t, n, !1), (n & t.childLanes) === 0) return null;
			} else return null;
		}
		if (e !== null && t.child !== e.child) throw Error(i(153));
		if (t.child !== null) {
			for (e = t.child, n = ji(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = ji(e, e.pendingProps), n.return = t;
			n.sibling = null;
		}
		return t.child;
	}
	function cl(e, t) {
		return (e.lanes & t) !== 0 || (e = e.dependencies, !!(e !== null && ya(e)));
	}
	function ll(e, t, n) {
		switch (t.tag) {
			case 3:
				Te(t, t.stateNode.containerInfo), ma(t, Da, e.memoizedState.cache), ca();
				break;
			case 27:
			case 5:
				De(t);
				break;
			case 4:
				Te(t, t.stateNode.containerInfo);
				break;
			case 10:
				ma(t, t.type, t.memoizedProps.value);
				break;
			case 31:
				if (t.memoizedState !== null) return t.flags |= 128, Ao(t), null;
				break;
			case 13:
				var r = t.memoizedState;
				if (r !== null) {
					if (r.dehydrated !== null) return ko(t), t.flags |= 128, null;
					r = va(e, t, n, !1);
					var i = t.child.childLanes;
					return r || (n & i) !== 0 ? Xc(e, t, n) : (ko(t), e = sl(e, t, n), e === null ? null : e.sibling);
				}
				ko(t);
				break;
			case 19:
				if (t.flags & 128) return al(e, t, n);
				if (i = !!(e.flags & 128), r = (n & t.childLanes) !== 0, r ||= (va(e, t, n, !1), (n & t.childLanes) !== 0), i) {
					if (r) return al(e, t, n);
					t.flags |= 128;
				}
				if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Fo(t, Po.current), r) break;
				return null;
			case 22: return t.lanes = 0, Ic(e, t, n, t.pendingProps);
			case 24: ma(t, Da, e.memoizedState.cache);
		}
		return sl(e, t, n);
	}
	function ul(e, t, n) {
		if (e !== null) {
			if (e.memoizedProps !== t.pendingProps) jc = !0;
			else {
				if (!cl(e, n) && !(t.flags & 128)) return jc = !1, ll(e, t, n);
				jc = !!(e.flags & 131072);
			}
		} else jc = !1, U && t.flags & 1048576 && Xi(t, Ui, t.index);
		switch (t.lanes = 0, t.tag) {
			case 16:
				a: {
					var r = t.pendingProps;
					if (e = Za(t.elementType), t.type = e, typeof e == "function") Ai(e) ? (r = bc(e, r), t.tag = 1, t = Gc(null, t, e, r, n)) : (t.tag = 0, t = Uc(null, t, e, r, n));
					else {
						if (e != null) {
							var a = e.$$typeof;
							if (a === N) {
								t.tag = 11, t = Nc(null, t, e, r, n);
								break a;
							}
							if (a === ae) {
								t.tag = 14, t = Pc(null, t, e, r, n);
								break a;
							}
							if (a === M) {
								t.tag = 10, t.type = e, t = ol(null, t, n);
								break a;
							}
						}
						throw t = he(e) || e, Error(i(306, t, ""));
					}
				}
				return t;
			case 0: return Uc(e, t, t.type, t.pendingProps, n);
			case 1: return r = t.type, a = bc(r, t.pendingProps), Gc(e, t, r, a, n);
			case 3:
				a: {
					if (Te(t, t.stateNode.containerInfo), e === null) throw Error(i(387));
					r = t.pendingProps;
					var o = t.memoizedState;
					a = o.element, fo(e, t), yo(t, r, null, n);
					var s = t.memoizedState;
					if (r = s.cache, ma(t, Da, r), r !== o.cache && _a(t, [Da], n, !0), vo(), r = s.element, o.isDehydrated) {
						if (o = {
							element: r,
							isDehydrated: !1,
							cache: s.cache
						}, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
							t = Kc(e, t, r, n);
							break a;
						}
						if (r !== a) {
							a = zi(Error(i(424)), t), ua(a), t = Kc(e, t, r, n);
							break a;
						}
						switch (e = t.stateNode.containerInfo, e.nodeType) {
							case 9:
								e = e.body;
								break;
							default: e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
						}
						for (ta = pm(e.firstChild), ea = t, U = !0, na = null, ra = !0, n = co(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 134221824, n = n.sibling;
					} else {
						if (ca(), r === a) {
							t = sl(e, t, n);
							break a;
						}
						Mc(e, t, r, n);
					}
					t = t.child;
				}
				return t;
			case 26: return Hc(e, t), e === null ? (n = Lm(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : U || (t.stateNode = gp(t.type, t.pendingProps, Ce.current, t)) : t.memoizedState = Lm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
			case 27: return De(t), e === null && U && (r = t.stateNode = ym(t.type, t.pendingProps, Ce.current), ea = t, ra = !0, a = ta, Ep(t.type) ? (mm = a, ta = pm(r.firstChild)) : ta = a), Mc(e, t, t.pendingProps.children, n), Hc(e, t), e === null && (t.flags |= 4194304), t.child;
			case 5: return e === null && U && ((a = r = ta) && (r = sm(r, t.type, t.pendingProps, ra), r === null ? a = !1 : (t.stateNode = r, ea = t, ta = pm(r.firstChild), ra = !1, a = !0)), a || aa(t)), De(t), a = t.type, o = t.pendingProps, s = e === null ? null : e.memoizedProps, r = o.children, _p(a, o) ? r = null : s !== null && _p(a, s) && (t.flags |= 32), t.memoizedState !== null && (a = Xo(e, t, $o, null, null, n), uh._currentValue = a), Hc(e, t), Mc(e, t, r, n), t.child;
			case 6: return e === null && U && ((e = n = ta) && (n = cm(n, t.pendingProps, ra), n === null ? e = !1 : (t.stateNode = n, ea = t, ta = null, e = !0)), e || aa(t)), null;
			case 13: return Xc(e, t, n);
			case 4: return Te(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = so(t, null, r, n) : Mc(e, t, r, n), t.child;
			case 11: return Nc(e, t, t.type, t.pendingProps, n);
			case 7: return r = t.pendingProps, Hc(e, t), Mc(e, t, r, n), t.child;
			case 8: return Mc(e, t, t.pendingProps.children, n), t.child;
			case 12: return Mc(e, t, t.pendingProps.children, n), t.child;
			case 10: return ol(e, t, n);
			case 9: return a = t.type._context, r = t.pendingProps.children, ba(t), a = xa(a), r = r(a), t.flags |= 1, Mc(e, t, r, n), t.child;
			case 14: return Pc(e, t, t.type, t.pendingProps, n);
			case 15: return Fc(e, t, t.type, t.pendingProps, n);
			case 19: return al(e, t, n);
			case 31: return Vc(e, t, n);
			case 22: return Ic(e, t, n, t.pendingProps);
			case 24: return ba(t), r = xa(Da), e === null ? (a = Ha(), a === null && (a = ed, o = Oa(), a.pooledCache = o, o.refCount++, o !== null && (a.pooledCacheLanes |= n), a = o), t.memoizedState = {
				parent: r,
				cache: a
			}, uo(t), ma(t, Da, a)) : ((e.lanes & n) !== 0 && (fo(e, t), yo(t, null, null, n), vo()), a = e.memoizedState, o = t.memoizedState, a.parent === r ? (r = o.cache, ma(t, Da, r), r !== a.cache && _a(t, [Da], n, !0)) : (a = {
				parent: r,
				cache: r
			}, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), ma(t, Da, r))), Mc(e, t, t.pendingProps.children, n), t.child;
			case 30: return t.stateNode === null && (t.stateNode = {
				autoName: null,
				paired: null,
				clones: null,
				ref: null
			}), r = t.pendingProps, r.name != null && r.name !== "auto" ? t.flags |= e === null ? 18882560 : 18874368 : U && Zi(t), e !== null && e.memoizedProps.name !== r.name ? t.flags |= 4194816 : Hc(e, t), Mc(e, t, r.children, n), t.child;
			case 29: throw t.pendingProps;
		}
		throw Error(i(156, t.tag));
	}
	function dl(e) {
		e.flags |= 4;
	}
	function fl(e, t, n, r, i) {
		var a;
		if ((a = !!(e.mode & 32)) && (a = n === null ? Qm(t, r) : Qm(t, r) && (r.src !== n.src || r.srcSet !== n.srcSet)), a) {
			if (e.flags |= 16777216, (i & 335544128) === i) {
				if (e.stateNode.complete) e.flags |= 8192;
				else if (Gd()) e.flags |= 8192;
				else throw Qa = Ja, Ka;
			}
		} else e.flags &= -16777217;
	}
	function pl(e, t) {
		if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
		else if (e.flags |= 16777216, !$m(t)) {
			if (Gd()) e.flags |= 8192;
			else throw Qa = Ja, Ka;
		}
	}
	function ml(e, t) {
		t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag === 22 ? 536870912 : ct(), e.lanes |= t, fd |= t);
	}
	function hl(e, t) {
		if (!U) switch (e.tailMode) {
			case "visible": break;
			case "collapsed":
				for (var n = e.tail, r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
				r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
				break;
			default:
				for (t = e.tail, n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
				n === null ? e.tail = null : n.sibling = null;
		}
	}
	function gl(e) {
		var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
		if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 1206910976, r |= i.flags & 1206910976, i.return = e, i = i.sibling;
		else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
		return e.subtreeFlags |= r, e.childLanes = n, t;
	}
	function _l(e, t, n) {
		var r = t.pendingProps;
		switch (Qi(t), t.tag) {
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return gl(t), null;
			case 1: return gl(t), null;
			case 3: return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), ha(Da), Ee(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (W(t) ? dl(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, la())), gl(t), null;
			case 26:
				var a = t.type, o = t.memoizedState;
				return e === null ? (dl(t), o === null ? (gl(t), fl(t, a, null, r, n)) : (gl(t), pl(t, o))) : o ? o === e.memoizedState ? (gl(t), t.flags &= -16777217) : (dl(t), gl(t), pl(t, o)) : (e = e.memoizedProps, e !== r && dl(t), gl(t), fl(t, a, e, r, n)), null;
			case 27:
				if (Oe(t), n = Ce.current, a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && dl(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return gl(t), t.subtreeFlags &= -33554433, null;
					}
					e = xe.current, W(t) ? oa(t, e) : (e = ym(a, r, n), t.stateNode = e, dl(t));
				}
				return gl(t), t.subtreeFlags &= -33554433, null;
			case 5:
				if (Oe(t), a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && dl(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return gl(t), t.subtreeFlags &= -33554433, null;
					}
					if (o = xe.current, W(t)) oa(t, o);
					else {
						var s = pp(Ce.current);
						switch (o) {
							case 1:
								o = s.createElementNS("http://www.w3.org/2000/svg", a);
								break;
							case 2:
								o = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
								break;
							default: switch (a) {
								case "svg":
									o = s.createElementNS("http://www.w3.org/2000/svg", a);
									break;
								case "math":
									o = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
									break;
								case "script":
									o = s.createElement("div"), o.innerHTML = "<script><\/script>", o = o.removeChild(o.firstChild);
									break;
								case "select":
									o = typeof r.is == "string" ? s.createElement("select", { is: r.is }) : s.createElement("select"), r.multiple ? o.multiple = !0 : r.size && (o.size = r.size);
									break;
								default: o = typeof r.is == "string" ? s.createElement(a, { is: r.is }) : s.createElement(a);
							}
						}
						o[bt] = t, o[xt] = r;
						a: for (s = t.child; s !== null;) {
							if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
							else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
								s.child.return = s, s = s.child;
								continue;
							}
							if (s === t) break a;
							for (; s.sibling === null;) {
								if (s.return === null || s.return === t) break a;
								s = s.return;
							}
							s.sibling.return = s.return, s = s.sibling;
						}
						t.stateNode = o;
						a: switch (op(o, a, r), a) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break a;
							case "img":
								r = !0;
								break a;
							default: r = !1;
						}
						r && dl(t);
					}
				}
				return gl(t), t.subtreeFlags &= -33554433, fl(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
			case 6:
				if (e && t.stateNode != null) e.memoizedProps !== r && dl(t);
				else {
					if (typeof r != "string" && t.stateNode === null) throw Error(i(166));
					if (e = Ce.current, W(t)) {
						if (e = t.stateNode, n = t.memoizedProps, r = null, a = ea, a !== null) switch (a.tag) {
							case 27:
							case 5: r = a.memoizedProps;
						}
						e[bt] = t, e = !!(e.nodeValue === n || r !== null && !0 === r.suppressHydrationWarning || rp(e.nodeValue, n)), e || aa(t, !0);
					} else e = pp(e).createTextNode(r), e[bt] = t, t.stateNode = e;
				}
				return gl(t), null;
			case 31:
				if (n = t.memoizedState, e === null || e.memoizedState !== null) {
					if (r = W(t), n !== null) {
						if (e === null) {
							if (!r) throw Error(i(318));
							if (e = t.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(557));
							e[bt] = t;
						} else ca(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						gl(t), e = !1;
					} else n = la(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
					if (!e) return t.flags & 256 ? (No(t), t) : (No(t), null);
					if (t.flags & 128) throw Error(i(558));
				}
				return gl(t), null;
			case 13:
				if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (a = W(t), r !== null && r.dehydrated !== null) {
						if (e === null) {
							if (!a) throw Error(i(318));
							if (a = t.memoizedState, a = a === null ? null : a.dehydrated, !a) throw Error(i(317));
							a[bt] = t;
						} else ca(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						gl(t), a = !1;
					} else a = la(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
					if (!a) return t.flags & 256 ? (No(t), t) : (No(t), null);
				}
				return No(t), t.flags & 128 ? (t.lanes = n, t) : (n = r !== null, e = e !== null && e.memoizedState !== null, n && (r = t.child, a = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (a = r.alternate.memoizedState.cachePool.pool), o = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool), o !== a && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), ml(t, t.updateQueue), gl(t), null);
			case 4: return Ee(), e === null && qf(t.stateNode.containerInfo), t.flags |= 67108864, gl(t), null;
			case 10: return ha(t.type), gl(t), null;
			case 19:
				if (Io(t), r = t.memoizedState, r === null) return gl(t), null;
				if (a = !!(t.flags & 128), o = r.rendering, o === null) {
					if (a) hl(r, !1);
					else {
						if (sd !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
							if (o = Lo(e), o !== null) {
								for (t.flags |= 128, hl(r, !1), e = o.updateQueue, t.updateQueue = e, ml(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) Mi(n, e), n = n.sibling;
								return Fo(t, Po.current & 1 | 2), U && Yi(t, r.treeForkCount), t.child;
							}
							e = e.sibling;
						}
						r.tail !== null && Re() > vd && (t.flags |= 128, a = !0, hl(r, !1), t.lanes = 4194304);
					}
				} else {
					if (!a) {
						if (e = Lo(o), e !== null) {
							if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, ml(t, e), hl(r, !0), r.tail === null && r.tailMode !== "collapsed" && r.tailMode !== "visible" && !o.alternate && !U) return gl(t), null;
						} else 2 * Re() - r.renderingStartTime > vd && n !== 536870912 && (t.flags |= 128, a = !0, hl(r, !1), t.lanes = 4194304);
					}
					r.isBackwards ? (o.sibling = t.child, t.child = o) : (e = r.last, e === null ? t.child = o : e.sibling = o, r.last = o);
				}
				if (r.tail !== null) {
					e = r.tail;
					a: {
						for (n = e; n !== null;) {
							if (n.alternate !== null) {
								n = !1;
								break a;
							}
							n = n.sibling;
						}
						n = !0;
					}
					return r.rendering = e, r.tail = e.sibling, r.renderingStartTime = Re(), e.sibling = null, o = Po.current, o = a ? o & 1 | 2 : o & 1, r.tailMode === "visible" || r.tailMode === "collapsed" || !n || U ? Fo(t, o) : (n = o, L(Do, t), L(Po, n), Oo === null && (Oo = t)), U && Yi(t, r.treeForkCount), e;
				}
				return gl(t), null;
			case 22:
			case 23: return No(t), Eo(), r = t.memoizedState !== null, e === null ? r && (t.flags |= 8192) : e.memoizedState !== null !== r && (t.flags |= 8192), r ? n & 536870912 && !(t.flags & 128) && (gl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : gl(t), n = t.updateQueue, n !== null && ml(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && I(Va), null;
			case 24: return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), ha(Da), gl(t), null;
			case 25: return null;
			case 30: return t.flags |= 33554432, gl(t), null;
		}
		throw Error(i(156, t.tag));
	}
	function vl(e, t) {
		switch (Qi(t), t.tag) {
			case 1: return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3: return ha(Da), Ee(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
			case 26:
			case 27:
			case 5: return Oe(t), null;
			case 31:
				if (t.memoizedState !== null) {
					if (No(t), t.alternate === null) throw Error(i(340));
					ca();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 13:
				if (No(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(i(340));
					ca();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19: return Io(t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
			case 4: return Ee(), null;
			case 10: return ha(t.type), null;
			case 22:
			case 23: return No(t), Eo(), e !== null && I(Va), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 24: return ha(Da), null;
			case 25: return null;
			default: return null;
		}
	}
	function yl(e, t) {
		switch (Qi(t), t.tag) {
			case 3:
				ha(Da), Ee();
				break;
			case 26:
			case 27:
			case 5:
				Oe(t);
				break;
			case 4:
				Ee();
				break;
			case 31:
				t.memoizedState !== null && No(t);
				break;
			case 13:
				No(t);
				break;
			case 19:
				Io(t);
				break;
			case 10:
				ha(t.type);
				break;
			case 22:
			case 23:
				No(t), Eo(), e !== null && I(Va);
				break;
			case 24: ha(Da);
		}
	}
	function bl(e, t) {
		try {
			var n = t.updateQueue, r = n === null ? null : n.lastEffect;
			if (r !== null) {
				var i = r.next;
				n = i;
				do {
					if ((n.tag & e) === e) {
						r = void 0;
						var a = n.create, o = n.inst;
						r = a(), o.destroy = r;
					}
					n = n.next;
				} while (n !== i);
			}
		} catch (e) {
			gf(t, t.return, e);
		}
	}
	function xl(e, t, n) {
		try {
			var r = t.updateQueue, i = r === null ? null : r.lastEffect;
			if (i !== null) {
				var a = i.next;
				r = a;
				do {
					if ((r.tag & e) === e) {
						var o = r.inst, s = o.destroy;
						if (s !== void 0) {
							o.destroy = void 0, i = t;
							var c = n, l = s;
							try {
								l();
							} catch (e) {
								gf(i, c, e);
							}
						}
					}
					r = r.next;
				} while (r !== a);
			}
		} catch (e) {
			gf(t, t.return, e);
		}
	}
	function Sl(e) {
		var t = e.updateQueue;
		if (t !== null) {
			var n = e.stateNode;
			try {
				xo(t, n);
			} catch (t) {
				gf(e, e.return, t);
			}
		}
	}
	function Cl(e, t, n) {
		n.props = bc(e.type, e.memoizedProps), n.state = e.memoizedState;
		try {
			n.componentWillUnmount();
		} catch (n) {
			gf(e, t, n);
		}
	}
	function wl(e, t) {
		try {
			var n = e.ref;
			if (n !== null) {
				switch (e.tag) {
					case 26:
					case 27:
					case 5:
						var r = e.stateNode;
						break;
					case 30:
						var i = e.stateNode, a = mi(e.memoizedProps, i);
						(i.ref === null || i.ref.name !== a) && (i.ref = Rp(a)), r = i.ref;
						break;
					case 7:
						if (e.stateNode === null) {
							var o = new zp(e);
							h(e.child, !1, nm, o, void 0, void 0), e.stateNode = o;
						}
						r = e.stateNode;
						break;
					default: r = e.stateNode;
				}
				typeof n == "function" ? e.refCleanup = n(r) : n.current = r;
			}
		} catch (n) {
			gf(e, t, n);
		}
	}
	function Tl(e, t) {
		var n = e.ref, r = e.refCleanup;
		if (n !== null) {
			if (typeof r == "function") try {
				r();
			} catch (n) {
				gf(e, t, n);
			} finally {
				e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
			}
			else if (typeof n == "function") try {
				n(null);
			} catch (n) {
				gf(e, t, n);
			}
			else n.current = null;
		}
	}
	function El(e, t) {
		if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null) for (var n = 0; n < t.length; n++) im(e.stateNode, t[n]);
	}
	function Dl(e) {
		for (var t = e.return; t !== null && (Al(t) && im(e.stateNode, t.stateNode), !kl(t));) t = t.return;
	}
	function Ol(e) {
		for (var t = e.return; t !== null && (Al(t) && am(e.stateNode, t.stateNode), !kl(t));) t = t.return;
	}
	function kl(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 27;
	}
	function Al(e) {
		return e && e.tag === 7 && e.stateNode !== null;
	}
	function jl(e) {
		var t = e.type, n = e.memoizedProps, r = e.stateNode;
		try {
			a: switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					n.autoFocus && r.focus();
					break a;
				case "img": n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet);
			}
		} catch (t) {
			gf(e, e.return, t);
		}
	}
	function Ml(e, t, n) {
		try {
			var r = e.stateNode;
			cp(r, e.type, n, t), r[xt] = t;
		} catch (t) {
			gf(e, e.return, t);
		}
	}
	function Nl(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ep(e.type) || e.tag === 4;
	}
	function Pl(e) {
		a: for (;;) {
			for (; e.sibling === null;) {
				if (e.return === null || Nl(e.return)) return null;
				e = e.return;
			}
			for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
				if (e.tag === 27 && Ep(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue a;
				e.child.return = e, e = e.child;
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function Fl(e, t, n, r) {
		var i = e.tag;
		if (i === 5 || i === 6) i = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(i, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(i), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = hn)), El(e, r), H = !0;
		else if (i !== 4 && (i === 27 && (El(e, r), r = null, Ep(e.type) && (n = e.stateNode, t = null)), e = e.child, e !== null)) for (Fl(e, t, n, r), e = e.sibling; e !== null;) Fl(e, t, n, r), e = e.sibling;
	}
	function Il(e, t, n, r) {
		var i = e.tag;
		if (i === 5 || i === 6) i = e.stateNode, t ? n.insertBefore(i, t) : n.appendChild(i), El(e, r), H = !0;
		else if (i !== 4 && (i === 27 && (El(e, r), r = null, Ep(e.type) && (n = e.stateNode)), e = e.child, e !== null)) for (Il(e, t, n, r), e = e.sibling; e !== null;) Il(e, t, n, r), e = e.sibling;
	}
	function Ll(e) {
		var t = e.stateNode, n = e.memoizedProps;
		try {
			for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
			op(t, r, n), t[bt] = e, t[xt] = n;
		} catch (t) {
			gf(e, e.return, t);
		}
	}
	var Rl = !1, zl = null;
	function Bl(e) {
		(e.tag === 30 || e.subtreeFlags & 33554432) && (Rl = !0);
	}
	var Vl = null;
	function Hl() {
		var e = Vl;
		return Vl = null, e;
	}
	var Ul = 0;
	function Wl(e, t, n, r, i) {
		return Ul = 0, Gl(e.child, t, n, r, i);
	}
	function Gl(e, t, n, r, i) {
		for (var a = !1; e !== null;) {
			if (e.tag === 5) {
				var o = e.stateNode;
				if (r !== null) {
					var s = Mp(o);
					r.push(s), s.view && (a = !0);
				} else a || Mp(o).view && (a = !0);
				Rl = !0, kp(o, Ul === 0 ? t : t + "_" + Ul, n), Ul++;
			} else e.tag === 22 && e.memoizedState !== null || e.tag === 30 && i || Gl(e.child, t, n, r, i) && (a = !0);
			e = e.sibling;
		}
		return a;
	}
	function Kl(e, t) {
		for (; e !== null;) e.tag === 5 ? Ap(e.stateNode, e.memoizedProps) : e.tag === 22 && e.memoizedState !== null || e.tag === 30 && t || Kl(e.child, t), e = e.sibling;
	}
	function ql(e) {
		if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
			if ((e.tag !== 22 || e.memoizedState === null) && (ql(e), e.tag === 30 && e.flags & 18874368 && e.stateNode.paired)) {
				var t = e.memoizedProps;
				if (t.name == null || t.name === "auto") throw Error(i(544));
				var n = t.name;
				t = gi(t.default, t.share), t !== "none" && (Wl(e, n, t, null, !1) || Kl(e.child, !1));
			}
			e = e.sibling;
		}
	}
	function Jl(e, t) {
		if (e.tag === 30) {
			var n = e.stateNode, r = e.memoizedProps, i = mi(r, n), a = gi(r.default, n.paired ? r.share : r.enter);
			a === "none" ? ql(e) : Wl(e, i, a, null, !1) ? (ql(e), n.paired || t || Fd(e, r.onEnter)) : Kl(e.child, !1);
		} else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) Jl(e, t), e = e.sibling;
		else ql(e);
	}
	function Yl(e) {
		if (zl !== null && zl.size !== 0) {
			var t = zl;
			if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
				if (e.tag !== 22 || e.memoizedState === null) {
					if (e.tag === 30 && e.flags & 18874368) {
						var n = e.memoizedProps, r = n.name;
						if (r != null && r !== "auto") {
							var i = t.get(r);
							if (i !== void 0) {
								var a = gi(n.default, n.share);
								if (a !== "none" && (Wl(e, r, a, null, !1) ? (a = e.stateNode, i.paired = a, a.paired = i, Fd(e, n.onShare)) : Kl(e.child, !1)), t.delete(r), t.size === 0) break;
							}
						}
					}
					Yl(e);
				}
				e = e.sibling;
			}
		}
	}
	function Xl(e) {
		if (e.tag === 30) {
			var t = e.memoizedProps, n = mi(t, e.stateNode), r = zl === null ? void 0 : zl.get(n), i = gi(t.default, r === void 0 ? t.exit : t.share);
			i !== "none" && (Wl(e, n, i, null, !1) ? r === void 0 ? Fd(e, t.onExit) : (i = e.stateNode, r.paired = i, i.paired = r, zl.delete(n), Fd(e, t.onShare)) : Kl(e.child, !1)), zl !== null && Yl(e);
		} else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) Xl(e), e = e.sibling;
		else zl !== null && Yl(e);
	}
	function Zl(e) {
		for (e = e.child; e !== null;) {
			if (e.tag === 30) {
				var t = e.memoizedProps, n = mi(t, e.stateNode);
				t = gi(t.default, t.update), e.flags &= -5, t !== "none" && Wl(e, n, t, e.memoizedState = [], !1);
			} else e.subtreeFlags & 33554432 && Zl(e);
			e = e.sibling;
		}
	}
	function Ql(e) {
		if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
			if (e.tag !== 22 || e.memoizedState === null) {
				if (e.tag === 30 && e.flags & 18874368) {
					var t = e.stateNode;
					t.paired !== null && (t.paired = null, Kl(e.child, !1));
				}
				Ql(e);
			}
			e = e.sibling;
		}
	}
	function $l(e) {
		if (e.tag === 30) e.stateNode.paired = null, Kl(e.child, !1), Ql(e);
		else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) $l(e), e = e.sibling;
		else Ql(e);
	}
	function eu(e) {
		for (e = e.child; e !== null;) e.tag === 30 ? Kl(e.child, !1) : e.subtreeFlags & 33554432 && eu(e), e = e.sibling;
	}
	function tu(e, t, n, r, i, a, o) {
		for (var s = !1; t !== null;) {
			if (t.tag === 5) {
				var c = t.stateNode;
				if (a !== null && Ul < a.length) {
					var l = a[Ul], u = Mp(c);
					(l.view || u.view) && (s = !0);
					var d;
					if (d = !(e.flags & 4)) {
						if (u.clip) d = !0;
						else {
							d = l.rect;
							var f = u.rect;
							d = d.y !== f.y || d.x !== f.x || d.height !== f.height || d.width !== f.width;
						}
					}
					d && (e.flags |= 4), u.abs ? u = !l.abs : (l = l.rect, u = u.rect, u = l.height !== u.height || l.width !== u.width), u && (e.flags |= 32);
				} else e.flags |= 32;
				e.flags & 4 && kp(c, Ul === 0 ? n : n + "_" + Ul, i), s && e.flags & 4 || (Vl === null && (Vl = []), Vl.push(c, Ul === 0 ? r : r + "_" + Ul, t.memoizedProps)), Ul++;
			} else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && o ? e.flags |= t.flags & 32 : tu(e, t.child, n, r, i, a, o) && (s = !0));
			t = t.sibling;
		}
		return s;
	}
	function nu(e, t) {
		for (e = e.child; e !== null;) {
			if (e.tag === 30) {
				var n = e.memoizedProps, r = e.stateNode, i = mi(n, r), a = gi(n.default, n.update);
				if (t) {
					r = r.clones;
					var o = r === null ? null : r.map(Np);
				} else o = e.memoizedState, e.memoizedState = null;
				r = e;
				var s = e.child;
				Ul = 0, i = tu(r, s, i, i, a, o, !1), e.flags & 4 && i && (t || Fd(e, n.onUpdate));
			} else e.subtreeFlags & 33554432 && nu(e, t);
			e = e.sibling;
		}
	}
	var ru = !1, iu = !1, au = !1, ou = !1, su = typeof WeakSet == "function" ? WeakSet : Set, cu = null, lu = !1, uu = !1, du = !1, fu = !1;
	function pu(e, t, n) {
		if (e = e.containerInfo, dp = yh, e = Wr(e), Gr(e)) {
			if ("selectionStart" in e) var r = {
				start: e.selectionStart,
				end: e.selectionEnd
			};
			else a: {
				r = (r = e.ownerDocument) && r.defaultView || window;
				var i = r.getSelection && r.getSelection();
				if (i && i.rangeCount !== 0) {
					r = i.anchorNode;
					var a = i.anchorOffset, o = i.focusNode;
					i = i.focusOffset;
					try {
						r.nodeType, o.nodeType;
					} catch {
						r = null;
						break a;
					}
					var s = 0, c = -1, l = -1, u = 0, d = 0, f = e, p = null;
					b: for (;;) {
						for (var m; f !== r || a !== 0 && f.nodeType !== 3 || (c = s + a), f !== o || i !== 0 && f.nodeType !== 3 || (l = s + i), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;) p = f, f = m;
						for (;;) {
							if (f === e) break b;
							if (p === r && ++u === a && (c = s), p === o && ++d === i && (l = s), (m = f.nextSibling) !== null) break;
							f = p, p = f.parentNode;
						}
						f = m;
					}
					r = c === -1 || l === -1 ? null : {
						start: c,
						end: l
					};
				} else r = null;
			}
			r ||= {
				start: 0,
				end: 0
			};
		} else r = null;
		for (fp = {
			focusedElem: e,
			selectionRange: r
		}, yh = !1, n = (n & 335544064) === n, cu = t, t = n ? 9270 : 1024; cu !== null;) {
			if (e = cu, n && (r = e.deletions, r !== null)) for (a = 0; a < r.length; a++) n && Xl(r[a]);
			if (e.alternate === null && e.flags & 2) n && Bl(e), mu(n);
			else {
				if (e.tag === 22) {
					if (r = e.alternate, e.memoizedState !== null) {
						r !== null && r.memoizedState === null && n && Xl(r), mu(n);
						continue;
					}
					if (r !== null && r.memoizedState !== null) {
						n && Bl(e), mu(n);
						continue;
					}
				}
				r = e.child, (e.subtreeFlags & t) !== 0 && r !== null ? (r.return = e, cu = r) : (n && Zl(e), mu(n));
			}
		}
		zl = null;
	}
	function mu(e) {
		for (; cu !== null;) {
			var t = cu, n = e, r = t.alternate, a = t.flags;
			switch (t.tag) {
				case 0:
				case 11:
				case 15: break;
				case 1:
					if (a & 1024 && r !== null) {
						n = void 0, a = r.memoizedProps, r = r.memoizedState;
						var o = t.stateNode;
						try {
							var s = bc(t.type, a);
							n = o.getSnapshotBeforeUpdate(s, r), o.__reactInternalSnapshotBeforeUpdate = n;
						} catch (e) {
							gf(t, t.return, e);
						}
					}
					break;
				case 3:
					if (a & 1024) {
						if (r = t.stateNode.containerInfo, n = r.nodeType, n === 9) om(r);
						else if (n === 1) switch (r.nodeName) {
							case "HEAD":
							case "HTML":
							case "BODY":
								om(r);
								break;
							default: r.textContent = "";
						}
					}
					break;
				case 5:
				case 26:
				case 27:
				case 6:
				case 4:
				case 17: break;
				case 30:
					n && r !== null && (n = mi(r.memoizedProps, r.stateNode), a = t.memoizedProps, a = gi(a.default, a.update), a !== "none" && Wl(r, n, a, r.memoizedState = [], !0));
					break;
				default: if (a & 1024) throw Error(i(163));
			}
			if (r = t.sibling, r !== null) {
				r.return = t.return, cu = r;
				break;
			}
			cu = t.return;
		}
	}
	function hu(e, t, n) {
		var r = n.flags;
		switch (n.tag) {
			case 0:
			case 11:
			case 15:
				Fu(e, n), r & 4 && bl(5, n);
				break;
			case 1:
				if (Fu(e, n), r & 4) {
					if (e = n.stateNode, t === null) try {
						e.componentDidMount();
					} catch (e) {
						gf(n, n.return, e);
					}
					else {
						var i = bc(n.type, t.memoizedProps);
						t = t.memoizedState;
						try {
							e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
						} catch (e) {
							gf(n, n.return, e);
						}
					}
				}
				r & 64 && Sl(n), r & 512 && wl(n, n.return);
				break;
			case 3:
				if (Fu(e, n), r & 64 && (e = n.updateQueue, e !== null)) {
					if (t = null, n.child !== null) switch (n.child.tag) {
						case 27:
						case 5:
							t = n.child.stateNode;
							break;
						case 1: t = n.child.stateNode;
					}
					try {
						xo(e, t);
					} catch (e) {
						gf(n, n.return, e);
					}
				}
				break;
			case 27: t === null && r & 4 && Ll(n);
			case 26:
			case 5:
				Fu(e, n), t === null && r & 4 && jl(n), r & 512 && wl(n, n.return);
				break;
			case 12:
				Fu(e, n);
				break;
			case 31:
				Fu(e, n), r & 4 && wu(e, n);
				break;
			case 13:
				Fu(e, n), r & 4 && Tu(e, n), r & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = bf.bind(null, n), fm(e, n))));
				break;
			case 22:
				if (r = n.memoizedState !== null || ru, !r) {
					var a = t !== null && t.memoizedState !== null || iu;
					t = ru, i = iu, ru = r, (iu = a) && !i ? (r = 2, n.subtreeFlags & 8772 && (r |= 1), Lu(e, n, r)) : Fu(e, n), ru = t, iu = i;
				}
				break;
			case 30:
				Fu(e, n), r & 512 && wl(n, n.return);
				break;
			case 7: r & 512 && wl(n, n.return);
			default: Fu(e, n);
		}
	}
	function gu(e, t) {
		for (e = e.child; e !== null;) _u(e, t), e = e.sibling;
	}
	function _u(e, t) {
		switch (e.tag) {
			case 5:
			case 26:
				try {
					var n = e.stateNode;
					if (t) {
						var r = n.style;
						typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
					} else {
						var i = e.stateNode, a = e.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null;
						i.style.display = o == null || typeof o == "boolean" ? "" : ("" + o).trim();
					}
				} catch (t) {
					gf(e, e.return, t);
				}
				vu(e, t);
				break;
			case 6:
				try {
					e.stateNode.nodeValue = t ? "" : e.memoizedProps, H = !0;
				} catch (t) {
					gf(e, e.return, t);
				}
				break;
			case 18:
				try {
					var s = e.stateNode;
					t ? Op(s, !0) : Op(e.stateNode, !1);
				} catch (t) {
					gf(e, e.return, t);
				}
				break;
			case 22:
			case 23:
				e.memoizedState === null && gu(e, t);
				break;
			default: gu(e, t);
		}
	}
	function vu(e, t) {
		if (e.subtreeFlags & 67108864) for (e = e.child; e !== null;) {
			a: {
				var n = e, r = t;
				switch (n.tag) {
					case 4:
						_u(n, r);
						break a;
					case 22:
						n.memoizedState === null && vu(n, r);
						break a;
					default: vu(n, r);
				}
			}
			e = e.sibling;
		}
	}
	function yu(e) {
		var t = e.alternate;
		t !== null && (e.alternate = null, yu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && kt(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
	}
	var bu = null, xu = !1;
	function Su(e, t, n) {
		for (n = n.child; n !== null;) Cu(e, t, n), n = n.sibling;
	}
	function Cu(e, t, n) {
		if (Je && typeof Je.onCommitFiberUnmount == "function") try {
			Je.onCommitFiberUnmount(qe, n);
		} catch {}
		switch (n.tag) {
			case 26:
				iu || Tl(n, t), Su(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !iu && (n = n.stateNode, n.parentNode.removeChild(n));
				break;
			case 27:
				iu || Tl(n, t), Ol(n);
				var r = bu, i = xu;
				Ep(n.type) && (bu = n.stateNode, xu = !1), Su(e, t, n), bm(n.stateNode, n.type, n.memoizedProps), bu = r, xu = i;
				break;
			case 5: iu || Tl(n, t), Ol(n);
			case 6:
				if (n.tag === 6 && Ol(n), r = bu, i = xu, bu = null, Su(e, t, n), bu = r, xu = i, bu !== null) {
					if (xu) try {
						(bu.nodeType === 9 ? bu.body : bu.nodeName === "HTML" ? bu.ownerDocument.body : bu).removeChild(n.stateNode), H = !0;
					} catch (e) {
						gf(n, t, e);
					}
					else try {
						bu.removeChild(n.stateNode), H = !0;
					} catch (e) {
						gf(n, t, e);
					}
				}
				break;
			case 18:
				bu !== null && (xu ? (e = bu, Dp(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), Gh(e)) : Dp(bu, n.stateNode));
				break;
			case 4:
				r = bu, i = xu, bu = n.stateNode.containerInfo, xu = !0, Su(e, t, n), bu = r, xu = i;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				xl(2, n, t), iu || xl(4, n, t), Su(e, t, n);
				break;
			case 1:
				iu || (Tl(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function" && Cl(n, t, r)), Su(e, t, n);
				break;
			case 21:
				Su(e, t, n);
				break;
			case 22:
				iu = (r = iu) || n.memoizedState !== null, Su(e, t, n), iu = r;
				break;
			case 30:
				Tl(n, t), Su(e, t, n);
				break;
			case 7:
				iu || Tl(n, t), Su(e, t, n);
				break;
			default: Su(e, t, n);
		}
	}
	function wu(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
			e = e.dehydrated;
			try {
				Gh(e);
			} catch (e) {
				gf(t, t.return, e);
			}
		}
	}
	function Tu(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
			Gh(e);
		} catch (e) {
			gf(t, t.return, e);
		}
	}
	function Eu(e) {
		switch (e.tag) {
			case 31:
			case 13:
			case 19:
				var t = e.stateNode;
				return t === null && (t = e.stateNode = new su()), t;
			case 22: return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new su()), t;
			default: throw Error(i(435, e.tag));
		}
	}
	function Du(e, t) {
		var n = Eu(e);
		t.forEach(function(t) {
			if (!n.has(t)) {
				n.add(t);
				var r = xf.bind(null, e, t);
				t.then(r, r);
			}
		});
	}
	function Ou(e, t, n) {
		var r = t.deletions;
		if (r !== null) for (var a = 0; a < r.length; a++) {
			var o = r[a], s = e, c = t, l = c;
			a: for (; l !== null;) {
				switch (l.tag) {
					case 27:
						if (Ep(l.type)) {
							bu = l.stateNode, xu = !1;
							break a;
						}
						break;
					case 5:
						bu = l.stateNode, xu = !1;
						break a;
					case 3:
					case 4:
						bu = l.stateNode.containerInfo, xu = !0;
						break a;
				}
				l = l.return;
			}
			if (bu === null) throw Error(i(160));
			Cu(s, c, o), bu = null, xu = !1, s = o.alternate, s !== null && (s.return = null), o.return = null;
		}
		if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) Au(t, e, n), t = t.sibling;
	}
	var ku = null;
	function Au(e, t, n) {
		var r = e.alternate, a = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				if (a & 4 && (r = e.updateQueue, r = r === null ? null : r.events, r !== null)) for (var o = 0; o < r.length; o++) {
					var s = r[o];
					s.ref.impl = s.nextImpl;
				}
				Ou(t, e, n), ju(e), a & 4 && (xl(3, e, e.return), bl(3, e), xl(5, e, e.return));
				break;
			case 1:
				Ou(t, e, n), ju(e), a & 512 && (iu || r === null || Tl(r, r.return)), a & 64 && ru && (e = e.updateQueue, e !== null && (t = e.callbacks, t !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? t : n.concat(t))));
				break;
			case 26:
				if (o = ku, Ou(t, e, n), ju(e), a & 512 && (iu || r === null || Tl(r, r.return)), a & 4) {
					if (a = r === null ? null : r.memoizedState, n = e.memoizedState, r === null) {
						if (n === null) {
							if (e.stateNode === null) {
								if (ru) e.stateNode = gp(e.type, e.memoizedProps, t.containerInfo, e);
								else {
									a: {
										t = e.type, n = e.memoizedProps, a = o.ownerDocument || o;
										b: switch (t) {
											case "title":
												r = a.getElementsByTagName("title")[0], (!r || r[Dt] || r[bt] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = a.createElement(t), a.head.insertBefore(r, a.querySelector("head > title"))), op(r, t, n), r[bt] = e, Nt(r), t = r;
												break a;
											case "link":
												if (o = Ym("link", "href", a).get(t + (n.href || ""))) {
													for (s = 0; s < o.length; s++) if (r = o[s], r.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && r.getAttribute("rel") === (n.rel == null ? null : n.rel) && r.getAttribute("title") === (n.title == null ? null : n.title) && r.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
														o.splice(s, 1);
														break b;
													}
												}
												r = a.createElement(t), op(r, t, n), a.head.appendChild(r);
												break;
											case "meta":
												if (o = Ym("meta", "content", a).get(t + (n.content || ""))) {
													for (s = 0; s < o.length; s++) if (r = o[s], r.getAttribute("content") === (n.content == null ? null : "" + n.content) && r.getAttribute("name") === (n.name == null ? null : n.name) && r.getAttribute("property") === (n.property == null ? null : n.property) && r.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && r.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
														o.splice(s, 1);
														break b;
													}
												}
												r = a.createElement(t), op(r, t, n), a.head.appendChild(r);
												break;
											default: throw Error(i(468, t));
										}
										r[bt] = e, Nt(r), t = r;
									}
									e.stateNode = t;
								}
							} else ru || Xm(o, e.type, e.stateNode);
						} else e.stateNode = Wm(o, n, e.memoizedProps);
					} else a === n ? n === null && e.stateNode !== null && Ml(e, e.memoizedProps, r.memoizedProps) : (a === null ? (t = r.stateNode, t === null || iu || t.parentNode.removeChild(t)) : a.count--, n === null ? ru || Xm(o, e.type, e.stateNode) : Wm(o, n, e.memoizedProps));
				}
				break;
			case 27:
				Ou(t, e, n), ju(e), a & 512 && (iu || r === null || Tl(r, r.return)), r !== null && a & 4 && Ml(e, e.memoizedProps, r.memoizedProps);
				break;
			case 5:
				if (o = au, au = !1, Ou(t, e, n), au = o, ju(e), a & 512 && (iu || r === null || Tl(r, r.return)), e.flags & 32) {
					t = e.stateNode;
					try {
						sn(t, ""), H = !0;
					} catch (t) {
						gf(e, e.return, t);
					}
				}
				a & 4 && e.stateNode != null && (t = e.memoizedProps, Ml(e, t, r === null ? t : r.memoizedProps)), a & 1024 && (ou = !0);
				break;
			case 6:
				if (Ou(t, e, n), ju(e), a & 4) {
					if (e.stateNode === null) throw Error(i(162));
					t = e.memoizedProps, n = e.stateNode;
					try {
						n.nodeValue = t, H = !0;
					} catch (t) {
						gf(e, e.return, t);
					}
				}
				break;
			case 3:
				if (H = !1, Jm = null, o = ku, ku = wm(t.containerInfo), Ou(t, e, n), ku = o, ju(e), a & 4 && r !== null && r.memoizedState.isDehydrated) try {
					Gh(t.containerInfo);
				} catch (t) {
					gf(e, e.return, t);
				}
				ou && (ou = !1, Mu(e)), H = !1;
				break;
			case 4:
				a = au, au = ru, r = Ut(), o = ku, ku = wm(e.stateNode.containerInfo), Ou(t, e, n), ju(e), ku = o, H && uu && (du = !0), H = r, au = a;
				break;
			case 12:
				Ou(t, e, n), ju(e);
				break;
			case 31:
				Ou(t, e, n), ju(e), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Du(e, t)));
				break;
			case 13:
				Ou(t, e, n), ju(e), e.child.flags & 8192 && e.memoizedState !== null != (r !== null && r.memoizedState !== null) && (gd = Re()), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Du(e, t)));
				break;
			case 22:
				o = e.memoizedState !== null, s = r !== null && r.memoizedState !== null;
				var c = ru, l = iu, u = au;
				ru = c || o, au = u || o, iu = l || s, Ou(t, e, n), iu = l, au = u, ru = c, ju(e), a & 8192 && (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, !o || r === null || s || ru || iu || (t = s || iu, n = ru, r = iu, ru = o || ru, iu = t, Iu(e, 2), ru = n, iu = r), !o && au || gu(e, o)), a & 4 && (t = e.updateQueue, t !== null && (n = t.retryQueue, n !== null && (t.retryQueue = null, Du(e, n))));
				break;
			case 19:
				Ou(t, e, n), ju(e), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Du(e, t)));
				break;
			case 30:
				a & 512 && (iu || r === null || Tl(r, r.return)), a = Ut(), o = uu, s = (n & 335544064) === n, c = e.memoizedProps, uu = s && gi(c.default, c.update) !== "none", Ou(t, e, n), ju(e), s && r !== null && H && (e.flags |= 4), uu = o, H = a;
				break;
			case 21: break;
			case 7: a & 512 && (iu || r === null || Tl(r, r.return)), r && r.stateNode !== null && (r.stateNode._fragmentFiber = e);
			default: Ou(t, e, n), ju(e);
		}
	}
	function ju(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				for (var n, r = e.return; r !== null;) {
					if (Nl(r)) {
						n = r;
						break;
					}
					r = r.return;
				}
				r = null;
				for (var a = e.return; a !== null;) {
					if (Al(a)) {
						var o = a.stateNode;
						r === null ? r = [o] : r.push(o);
					}
					if (kl(a)) break;
					a = a.return;
				}
				var s = r;
				if (n == null) throw Error(i(160));
				switch (n.tag) {
					case 27:
						var c = n.stateNode;
						Il(e, Pl(e), c, s);
						break;
					case 5:
						var l = n.stateNode;
						n.flags & 32 && (sn(l, ""), n.flags &= -33), Il(e, Pl(e), l, s);
						break;
					case 3:
					case 4:
						var u = n.stateNode.containerInfo;
						Fl(e, Pl(e), u, s);
						break;
					default: throw Error(i(161));
				}
			} catch (t) {
				gf(e, e.return, t);
			}
			e.flags &= -3;
		}
		t & 4096 && (e.flags &= -4097);
	}
	function Mu(e) {
		if (e.subtreeFlags & 1024) for (e = e.child; e !== null;) {
			var t = e;
			Mu(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, yh = !0, t.reset(), yh = !1), e = e.sibling;
		}
	}
	function Nu(e, t) {
		if (t.subtreeFlags & 9270) for (t = t.child; t !== null;) Pu(t, e), t = t.sibling;
		else nu(t, !1);
	}
	function Pu(e, t) {
		var n = e.alternate;
		if (n === null) Jl(e, !1);
		else switch (e.tag) {
			case 3:
				if (fu = lu = !1, Hl(), Nu(t, e), !lu && !du) {
					if (e = Vl, e !== null) for (var r = 0; r < e.length; r += 3) {
						n = e[r];
						var i = e[r + 1];
						Ap(n, e[r + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate({
							opacity: [0, 0],
							pointerEvents: ["none", "none"]
						}, {
							duration: 0,
							fill: "forwards",
							pseudoElement: "::view-transition-group(" + i + ")"
						});
					}
					e = t.containerInfo, e = e.nodeType === 9 ? e.documentElement : e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "" && (e.style.viewTransitionName = "none", e.animate({
						opacity: [0, 0],
						pointerEvents: ["none", "none"]
					}, {
						duration: 0,
						fill: "forwards",
						pseudoElement: "::view-transition-group(root)"
					}), e.animate({
						width: [0, 0],
						height: [0, 0]
					}, {
						duration: 0,
						fill: "forwards",
						pseudoElement: "::view-transition"
					})), fu = !0;
				}
				Vl = null;
				break;
			case 5:
				Nu(t, e);
				break;
			case 4:
				r = lu, lu = !1, Nu(t, e), lu && (du = !0), lu = r;
				break;
			case 22:
				e.memoizedState === null && (n.memoizedState === null ? Nu(t, e) : Jl(e, !1));
				break;
			case 30:
				r = lu, i = Hl(), lu = !1, Nu(t, e), lu && (e.flags |= 4);
				var a = e.memoizedProps, o = e.stateNode;
				t = mi(a, o), o = mi(n.memoizedProps, o);
				var s = gi(a.default, a.update);
				s === "none" ? t = !1 : (a = n.memoizedState, n.memoizedState = null, n = e.child, Ul = 0, t = tu(e, n, t, o, s, a, !0), Ul !== (a === null ? 0 : a.length) && (e.flags |= 32)), e.flags & 4 && t ? (Fd(e, e.memoizedProps.onUpdate), Vl = i) : i !== null && (i.push.apply(i, Vl), Vl = i), lu = e.flags & 32 ? !0 : r;
				break;
			default: Nu(t, e);
		}
	}
	function Fu(e, t) {
		if (t.subtreeFlags & 8772) for (t = t.child; t !== null;) hu(e, t.alternate, t), t = t.sibling;
	}
	function Iu(e, t) {
		for (e = e.child; e !== null;) {
			var n = e, r = t;
			switch (n.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					xl(4, n, n.return), Iu(n, r);
					break;
				case 1:
					Tl(n, n.return);
					var i = n.stateNode;
					typeof i.componentWillUnmount == "function" && Cl(n, n.return, i), Iu(n, r);
					break;
				case 27: r & 2 && bm(n.stateNode, n.type, n.memoizedProps);
				case 5:
					Tl(n, n.return), n.tag !== 5 && n.tag !== 27 || Ol(n), Iu(n, r);
					break;
				case 6:
					Ol(n);
					break;
				case 26:
					Tl(n, n.return), i = n.stateNode, n.memoizedState !== null || i === null || iu || i.parentNode.removeChild(i), Iu(n, r);
					break;
				case 22:
					n.memoizedState === null && Iu(n, r);
					break;
				case 30:
					Tl(n, n.return), Iu(n, r);
					break;
				case 7: Tl(n, n.return);
				default: Iu(n, r);
			}
			e = e.sibling;
		}
	}
	function Lu(e, t, n) {
		for (n = t.subtreeFlags & 8772 ? n : n & -2, t = t.child; t !== null;) {
			var r = t.alternate, i = e, a = t, o = a.flags, s = !!(n & 1);
			switch (a.tag) {
				case 0:
				case 11:
				case 15:
					Lu(i, a, n), bl(4, a);
					break;
				case 1:
					if (Lu(i, a, n), r = a, i = r.stateNode, typeof i.componentDidMount == "function") try {
						i.componentDidMount();
					} catch (e) {
						gf(r, r.return, e);
					}
					if (r = a, i = r.updateQueue, i !== null) {
						var c = r.stateNode;
						try {
							var l = i.shared.hiddenCallbacks;
							if (l !== null) for (i.shared.hiddenCallbacks = null, i = 0; i < l.length; i++) bo(l[i], c);
						} catch (e) {
							gf(r, r.return, e);
						}
					}
					s && o & 64 && Sl(a), wl(a, a.return);
					break;
				case 27: n & 2 && Ll(a);
				case 5:
					a.tag !== 5 && a.tag !== 27 || Dl(a), Lu(i, a, n), s && r === null && o & 4 && jl(a), wl(a, a.return);
					break;
				case 6:
					Dl(a);
					break;
				case 26:
					c = a.stateNode, a.memoizedState !== null || c === null || ru || Xm(wm(c.ownerDocument), a.type, c), Lu(i, a, n), s && r === null && o & 4 && jl(a), wl(a, a.return);
					break;
				case 12:
					Lu(i, a, n);
					break;
				case 31:
					Lu(i, a, n), s && o & 4 && wu(i, a);
					break;
				case 13:
					Lu(i, a, n), s && o & 4 && Tu(i, a);
					break;
				case 22:
					a.memoizedState === null && Lu(i, a, n), wl(a, a.return);
					break;
				case 30:
					Lu(i, a, n), wl(a, a.return);
					break;
				case 7: wl(a, a.return);
				default: Lu(i, a, n);
			}
			t = t.sibling;
		}
	}
	function Ru(e, t) {
		var n = null;
		e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && ka(n));
	}
	function zu(e, t) {
		e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ka(e));
	}
	function Bu(e, t, n, r) {
		var i = (n & 335544064) === n;
		if (t.subtreeFlags & (i ? 10262 : 10256)) for (t = t.child; t !== null;) Vu(e, t, n, r), t = t.sibling;
		else i && eu(t);
	}
	function Vu(e, t, n, r) {
		var i = (n & 335544064) === n;
		i && t.alternate === null && t.return !== null && t.return.alternate !== null && $l(t);
		var a = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				Bu(e, t, n, r), a & 2048 && bl(9, t);
				break;
			case 1:
				Bu(e, t, n, r);
				break;
			case 3:
				Bu(e, t, n, r), i && fu && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), a & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && (t.refCount++, a != null && ka(a)));
				break;
			case 12:
				if (a & 2048) {
					Bu(e, t, n, r), a = t.stateNode;
					try {
						var o = t.memoizedProps, s = o.id, c = o.onPostCommit;
						typeof c == "function" && c(s, t.alternate === null ? "mount" : "update", a.passiveEffectDuration, -0);
					} catch (e) {
						gf(t, t.return, e);
					}
				} else Bu(e, t, n, r);
				break;
			case 31:
				Bu(e, t, n, r);
				break;
			case 13:
				Bu(e, t, n, r);
				break;
			case 23: break;
			case 22:
				o = t.stateNode, s = t.alternate, t.memoizedState === null ? (i && s !== null && s.memoizedState !== null && $l(t), o._visibility & 2 ? Bu(e, t, n, r) : (o._visibility |= 2, Hu(e, t, n, r, !!(t.subtreeFlags & 10256) || !1))) : (i && s !== null && s.memoizedState === null && $l(s), o._visibility & 2 ? Bu(e, t, n, r) : Uu(e, t)), a & 2048 && Ru(s, t);
				break;
			case 24:
				Bu(e, t, n, r), a & 2048 && zu(t.alternate, t);
				break;
			case 30:
				i && (a = t.alternate, a !== null && (Kl(a.child, !0), Kl(t.child, !0))), Bu(e, t, n, r);
				break;
			default: Bu(e, t, n, r);
		}
	}
	function Hu(e, t, n, r, i) {
		for (i &&= !!(t.subtreeFlags & 10256) || !1, t = t.child; t !== null;) {
			var a = e, o = t, s = n, c = r, l = o.flags;
			switch (o.tag) {
				case 0:
				case 11:
				case 15:
					Hu(a, o, s, c, i), bl(8, o);
					break;
				case 23: break;
				case 22:
					var u = o.stateNode;
					o.memoizedState === null ? (u._visibility |= 2, Hu(a, o, s, c, i)) : u._visibility & 2 ? Hu(a, o, s, c, i) : Uu(a, o), i && l & 2048 && Ru(o.alternate, o);
					break;
				case 24:
					Hu(a, o, s, c, i), i && l & 2048 && zu(o.alternate, o);
					break;
				default: Hu(a, o, s, c, i);
			}
			t = t.sibling;
		}
	}
	function Uu(e, t) {
		if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) {
			var n = e, r = t, i = r.flags;
			switch (r.tag) {
				case 22:
					Uu(n, r), i & 2048 && Ru(r.alternate, r);
					break;
				case 24:
					Uu(n, r), i & 2048 && zu(r.alternate, r);
					break;
				default: Uu(n, r);
			}
			t = t.sibling;
		}
	}
	var Wu = 8192;
	function Gu(e, t, n) {
		if (e.subtreeFlags & Wu) for (e = e.child; e !== null;) Ku(e, t, n), e = e.sibling;
	}
	function Ku(e, t, n) {
		switch (e.tag) {
			case 26:
				Gu(e, t, n), e.flags & Wu && (e.memoizedState === null ? (e = e.stateNode, (t & 335544128) === t && th(n, e)) : nh(n, ku, e.memoizedState, e.memoizedProps));
				break;
			case 5:
				Gu(e, t, n), e.flags & Wu && (e = e.stateNode, (t & 335544128) === t && th(n, e));
				break;
			case 3:
			case 4:
				var r = ku;
				ku = wm(e.stateNode.containerInfo), Gu(e, t, n), ku = r;
				break;
			case 22:
				e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = Wu, Wu = 16777216, Gu(e, t, n), Wu = r) : Gu(e, t, n));
				break;
			case 30:
				if ((e.flags & Wu) !== 0 && (r = e.memoizedProps.name, r != null && r !== "auto")) {
					var i = e.stateNode;
					i.paired = null, zl === null && (zl = /* @__PURE__ */ new Map()), zl.set(r, i);
				}
				Gu(e, t, n);
				break;
			default: Gu(e, t, n);
		}
	}
	function qu(e) {
		var t = e.alternate;
		if (t !== null && (e = t.child, e !== null)) {
			t.child = null;
			do
				t = e.sibling, e.sibling = null, e = t;
			while (e !== null);
		}
	}
	function Ju(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				cu = r, Zu(r, e);
			}
			qu(e);
		}
		if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) Yu(e), e = e.sibling;
	}
	function Yu(e) {
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				Ju(e), e.flags & 2048 && xl(9, e, e.return);
				break;
			case 3:
				Ju(e);
				break;
			case 12:
				Ju(e);
				break;
			case 22:
				var t = e.stateNode;
				e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Xu(e)) : Ju(e);
				break;
			default: Ju(e);
		}
	}
	function Xu(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				cu = r, Zu(r, e);
			}
			qu(e);
		}
		for (e = e.child; e !== null;) {
			switch (t = e, t.tag) {
				case 0:
				case 11:
				case 15:
					xl(8, t, t.return), Xu(t);
					break;
				case 22:
					n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Xu(t));
					break;
				default: Xu(t);
			}
			e = e.sibling;
		}
	}
	function Zu(e, t) {
		for (; cu !== null;) {
			var n = cu;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					xl(8, n, t);
					break;
				case 23:
				case 22:
					if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
						var r = n.memoizedState.cachePool.pool;
						r != null && r.refCount++;
					}
					break;
				case 24: ka(n.memoizedState.cache);
			}
			if (r = n.child, r !== null) r.return = n, cu = r;
			else a: for (n = e; cu !== null;) {
				r = cu;
				var i = r.sibling, a = r.return;
				if (yu(r), r === n) {
					cu = null;
					break a;
				}
				if (i !== null) {
					i.return = a, cu = i;
					break a;
				}
				cu = a;
			}
		}
	}
	var Qu = {
		getCacheForType: function(e) {
			var t = xa(Da), n = t.data.get(e);
			return n === void 0 && (n = e(), t.data.set(e, n)), n;
		},
		cacheSignal: function() {
			return xa(Da).controller.signal;
		}
	}, $u = typeof WeakMap == "function" ? WeakMap : Map, K = 0, ed = null, q = null, J = 0, td = 0, nd = null, rd = !1, id = !1, ad = !1, od = 0, sd = 0, cd = 0, ld = 0, ud = 0, dd = 0, fd = 0, pd = null, md = null, hd = !1, gd = 0, _d = 0, vd = Infinity, yd = null, bd = null, xd = 0, Sd = null, Cd = null, wd = 0, Td = 0, Ed = null, Dd = null, Od = null, kd = null, Ad = null, jd = 0, Md = null;
	function Nd() {
		return K & 2 && J !== 0 ? J & -J : P.T === null ? _t() : Lf();
	}
	function Pd() {
		if (dd === 0) {
			if (!(J & 536870912) || U) {
				var e = tt;
				tt <<= 1, !(tt & 3932160) && (tt = 262144), dd = e;
			} else dd = 536870912;
		}
		return e = Do.current, e !== null && (e.flags |= 32), dd;
	}
	function Fd(e, t) {
		if (t != null) {
			var n = e.stateNode, r = n.ref;
			r === null && (r = n.ref = Rp(mi(e.memoizedProps, n))), kd === null && (kd = []), kd.push(t.bind(null, r));
		}
	}
	function Id(e, t, n) {
		(e === ed && (td === 2 || td === 9) || e.cancelPendingCommit !== null) && (Ud(e, 0), Bd(e, J, dd, !1)), ut(e, n), K & 2 && e === ed || (e === ed && (!(K & 2) && (ld |= n), sd === 4 && Bd(e, J, dd, !1)), kf(e));
	}
	function Ld(e, t, n) {
		if (K & 6) throw Error(i(327));
		var r = !n && !(t & 127) && (t & e.expiredLanes) === 0 || at(e, t), a = r ? Zd(e, t) : Yd(e, t, !0), o = r;
		do {
			if (a === 0) {
				id && !r && Bd(e, t, 0, !1);
				break;
			}
			if (n = e.current.alternate, o && !zd(n)) a = Yd(e, t, !1), o = !1;
			else {
				if (a === 2) {
					if (o = t, e.errorRecoveryDisabledLanes & o) var s = 0;
					else s = e.pendingLanes & -536870913, s = s === 0 ? s & 536870912 ? 536870912 : 0 : s;
					if (s !== 0) {
						t = s;
						a: {
							var c = e;
							a = pd;
							var l = c.current.memoizedState.isDehydrated;
							if (l && (Ud(c, s).flags |= 256), s = Yd(c, s, !1), s !== 2 && s !== 6) {
								if (ad && !l) {
									c.errorRecoveryDisabledLanes |= o, ld |= o, a = 4;
									break a;
								}
								o = md, md = a, o !== null && (md === null ? md = o : md.push.apply(md, o));
							}
							a = s;
						}
						if (o = !1, a !== 2) continue;
					}
				}
				if (a === 1) {
					Ud(e, 0), Bd(e, t, 0, !0);
					break;
				}
				a: {
					switch (r = e, o = a, o) {
						case 0:
						case 1: throw Error(i(345));
						case 4: if ((t & 4194048) !== t && (t & 62914560) !== t) break;
						case 6:
							Bd(r, t, dd, !rd);
							break a;
						case 2:
							md = null;
							break;
						case 3:
						case 5: break;
						default: throw Error(i(329));
					}
					if ((t & 62914560) === t && (a = gd + 300 - Re(), 10 < a)) {
						if (Bd(r, t, dd, !rd), it(r, 0, !0) !== 0) break a;
						wd = t, r.timeoutHandle = bp(Rd.bind(null, r, n, md, yd, hd, t, dd, ld, fd, rd, o, "Throttled", -0, 0), a);
						break a;
					}
					Rd(r, n, md, yd, hd, t, dd, ld, fd, rd, o, null, -0, 0);
				}
				break;
			}
		} while (1);
		kf(e);
	}
	function Rd(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
		e.timeoutHandle = -1;
		var m = t.subtreeFlags, h = (a & 335544064) === a;
		d = null, (h || m & 8192 || (m & 16785408) == 16785408) && (d = {
			stylesheets: null,
			count: 0,
			imgCount: 0,
			imgBytes: 0,
			suspenseyImages: [],
			waitingForImages: !0,
			waitingForViewTransition: !1,
			unsuspend: hn
		}, zl = null, Ku(t, a, d), h && (m = d, h = e.containerInfo, h = (h.nodeType === 9 ? h : h.ownerDocument).__reactViewTransition, h != null && (m.count++, m.waitingForViewTransition = !0, m = oh.bind(m), h.finished.then(m, m))), m = (a & 62914560) === a ? gd - Re() : (a & 4194048) === a ? _d - Re() : 0, m = ih(d, m), m !== null) ? (wd = a, e.cancelPendingCommit = m(af.bind(null, e, t, a, n, r, i, o, s, c, l, u, d, null, f, p)), Bd(e, a, o, !l)) : af(e, t, a, n, r, i, o, s, c, l, u, d);
	}
	function zd(e) {
		for (var t = e;;) {
			var n = t.tag;
			if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var r = 0; r < n.length; r++) {
				var i = n[r], a = i.getSnapshot;
				i = i.value;
				try {
					if (!Rr(a(), i)) return !1;
				} catch {
					return !1;
				}
			}
			if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
			else {
				if (t === e) break;
				for (; t.sibling === null;) {
					if (t.return === null || t.return === e) return !0;
					t = t.return;
				}
				t.sibling.return = t.return, t = t.sibling;
			}
		}
		return !0;
	}
	function Bd(e, t, n, r) {
		t = ot(e, t), t &= ~ud, t &= ~ld, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
		for (var i = t; 0 < i;) {
			var a = 31 - Xe(i), o = 1 << a;
			r[a] = -1, i &= ~o;
		}
		n !== 0 && ft(e, n, t);
	}
	function Vd() {
		return K & 6 ? !0 : (Af(0, !1), !1);
	}
	function Hd() {
		if (q !== null) {
			if (td === 0) var e = q.return;
			else e = q, pa = fa = null, ns(e), to = null, no = 0, e = q;
			for (; e !== null;) yl(e.alternate, e), e = e.return;
			q = null;
		}
	}
	function Ud(e, t) {
		var n = e.timeoutHandle;
		return n !== -1 && (e.timeoutHandle = -1, xp(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), wd = 0, Hd(), ed = e, q = n = ji(e.current, null), J = t, td = 0, nd = null, rd = !1, id = at(e, t), ad = !1, fd = dd = ud = ld = cd = sd = 0, md = pd = null, hd = !1, od = ot(e, t), xi(), n;
	}
	function Wd(e, t) {
		G = null, P.H = fc, t === Ga || t === qa ? (t = $a(), td = 3) : t === Ka ? (t = $a(), td = 4) : td = t === Ac ? 8 : typeof t == "object" && t && typeof t.then == "function" ? 6 : 1, nd = t, q === null && (sd = 1, wc(e, zi(t, e.current)));
	}
	function Gd() {
		var e = Do.current;
		return e === null ? !0 : (J & 4194048) === J ? Oo === null : (J & 62914560) === J || J & 536870912 ? e === Oo : !1;
	}
	function Kd() {
		var e = P.H;
		return P.H = fc, e === null ? fc : e;
	}
	function qd() {
		var e = P.A;
		return P.A = Qu, e;
	}
	function Jd() {
		sd = 4, rd || (J & 4194048) !== J && Do.current !== null || (id = !0), !(cd & 134217727) && !(ld & 134217727) || ed === null || Bd(ed, J, dd, !1);
	}
	function Yd(e, t, n) {
		var r = K;
		K |= 2;
		var i = Kd(), a = qd();
		(ed !== e || J !== t) && (yd = null, Ud(e, t)), t = !1;
		var o = sd;
		a: do
			try {
				if (td !== 0 && q !== null) {
					var s = q, c = nd;
					switch (td) {
						case 8:
							Hd(), o = 6;
							break a;
						case 3:
						case 2:
						case 9:
						case 6:
							Do.current === null && (t = !0);
							var l = td;
							if (td = 0, nd = null, tf(e, s, c, l), n && id) {
								o = 0;
								break a;
							}
							break;
						default: l = td, td = 0, nd = null, tf(e, s, c, l);
					}
				}
				Xd(), o = sd;
				break;
			} catch (t) {
				Wd(e, t);
			}
		while (1);
		return t && e.shellSuspendCounter++, pa = fa = null, K = r, P.H = i, P.A = a, q === null && (ed = null, J = 0, xi()), o;
	}
	function Xd() {
		for (; q !== null;) $d(q);
	}
	function Zd(e, t) {
		var n = K;
		K |= 2;
		var r = Kd(), a = qd();
		ed !== e || J !== t ? (yd = null, vd = Re() + 500, Ud(e, t)) : id = at(e, t);
		a: do
			try {
				if (td !== 0 && q !== null) {
					t = q;
					var o = nd;
					b: switch (td) {
						case 1:
							td = 0, nd = null, tf(e, t, o, 1);
							break;
						case 2:
						case 9:
							if (Ya(o)) {
								td = 0, nd = null, ef(t);
								break;
							}
							t = function() {
								td !== 2 && td !== 9 || ed !== e || (td = 7), kf(e);
							}, o.then(t, t);
							break a;
						case 3:
							td = 7;
							break a;
						case 4:
							td = 5;
							break a;
						case 7:
							Ya(o) ? (td = 0, nd = null, ef(t)) : (td = 0, nd = null, tf(e, t, o, 7));
							break;
						case 5:
							var s = null;
							switch (q.tag) {
								case 26: s = q.memoizedState;
								case 5:
								case 27:
									var c = q;
									if (s ? $m(s) : c.stateNode.complete) {
										td = 0, nd = null;
										var l = c.sibling;
										if (l !== null) q = l;
										else {
											var u = c.return;
											u === null ? q = null : (q = u, nf(u));
										}
										break b;
									}
							}
							td = 0, nd = null, tf(e, t, o, 5);
							break;
						case 6:
							td = 0, nd = null, tf(e, t, o, 6);
							break;
						case 8:
							Hd(), sd = 6;
							break a;
						default: throw Error(i(462));
					}
				}
				Qd();
				break;
			} catch (t) {
				Wd(e, t);
			}
		while (1);
		return pa = fa = null, P.H = r, P.A = a, K = n, q === null ? (ed = null, J = 0, xi(), sd) : 0;
	}
	function Qd() {
		for (; q !== null && !Ie();) $d(q);
	}
	function $d(e) {
		var t = ul(e.alternate, e, od);
		e.memoizedProps = e.pendingProps, t === null ? nf(e) : q = t;
	}
	function ef(e) {
		var t = e, n = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = Wc(n, t, t.pendingProps, t.type, void 0, J);
				break;
			case 11:
				t = Wc(n, t, t.pendingProps, t.type.render, t.ref, J);
				break;
			case 5:
				ns(t);
				var r = t;
				r === ea && (U ? (sa(r), r.tag === 5 && r.stateNode != null && (ta = r.stateNode)) : (sa(r), U = !0));
			default: yl(n, t), t = q = Mi(t, od), t = ul(n, t, od);
		}
		e.memoizedProps = e.pendingProps, t === null ? nf(e) : q = t;
	}
	function tf(e, t, n, r) {
		pa = fa = null, ns(t), to = null, no = 0;
		var i = t.return;
		try {
			if (kc(e, i, t, n, J)) {
				sd = 1, wc(e, zi(n, e.current)), q = null;
				return;
			}
		} catch (t) {
			if (i !== null) throw q = i, t;
			sd = 1, wc(e, zi(n, e.current)), q = null;
			return;
		}
		t.flags & 32768 ? (U || r === 1 ? e = !0 : id || J & 536870912 ? e = !1 : (rd = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = Do.current, r !== null && r.tag === 13 && (r.flags |= 16384))), rf(t, e)) : nf(t);
	}
	function nf(e) {
		var t = e;
		do {
			if (t.flags & 32768) {
				rf(t, rd);
				return;
			}
			e = t.return;
			var n = _l(t.alternate, t, od);
			if (n !== null) {
				q = n;
				return;
			}
			if (t = t.sibling, t !== null) {
				q = t;
				return;
			}
			q = t = e;
		} while (t !== null);
		sd === 0 && (sd = 5);
	}
	function rf(e, t) {
		do {
			var n = vl(e.alternate, e);
			if (n !== null) {
				n.flags &= 32767, q = n;
				return;
			}
			if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
				q = e;
				return;
			}
			q = e = n;
		} while (e !== null);
		sd = 6, q = null;
	}
	function af(e, t, n, r, a, o, s, c, l, u, d, f) {
		e.cancelPendingCommit = null;
		do
			pf();
		while (xd !== 0);
		if (K & 6) throw Error(i(327));
		if (t !== null) {
			if (t === e.current) throw Error(i(177));
			e === ed && (q = ed = null, J = 0), Cd = t, Sd = e, wd = n, Ed = a, Dd = r, of(e, t, n, s, c, l, f);
		}
	}
	function of(e, t, n, r, i, a, o) {
		var s = t.lanes | t.childLanes;
		if (Td = s, s |= bi, dt(e, n, s, r, i, a), kd = null, (n & 335544064) === n ? (Ad = Ma(e), r = 10262) : (Ad = null, r = 10256), (t.subtreeFlags & r) !== 0 || (t.flags & r) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Sf(He, function() {
			return mf(), null;
		})) : (e.callbackNode = null, e.callbackPriority = 0), Rl = !1, r = !!(t.flags & 13878), t.subtreeFlags & 13878 || r) {
			r = P.T, P.T = null, i = F.p, F.p = 2, a = K, K |= 4;
			try {
				pu(e, t, n);
			} finally {
				K = a, F.p = i, P.T = r;
			}
		}
		xd = 1, Rl ? Od = Ip(o, e.containerInfo, Ad, lf, uf, cf, df, mf, sf, null, null) : (lf(), uf(), df());
	}
	function sf(e) {
		if (xd !== 0) {
			var t = Sd.onRecoverableError;
			t(e, { componentStack: null });
		}
	}
	function cf() {
		xd === 3 && (xd = 0, Pu(Cd, Sd), xd = 4);
	}
	function lf() {
		if (xd === 1) {
			xd = 0;
			var e = Sd, t = Cd, n = wd, r = !!(t.flags & 13878);
			if (t.subtreeFlags & 13878 || r) {
				r = P.T, P.T = null;
				var i = F.p;
				F.p = 2;
				var a = K;
				K |= 4;
				try {
					uu = du = !1, Au(t, e, n), n = fp;
					var o = Wr(e.containerInfo), s = n.focusedElem, c = n.selectionRange;
					if (o !== s && s && s.ownerDocument && Ur(s.ownerDocument.documentElement, s)) {
						if (c !== null && Gr(s)) {
							var l = c.start, u = c.end;
							if (u === void 0 && (u = l), "selectionStart" in s) s.selectionStart = l, s.selectionEnd = Math.min(u, s.value.length);
							else {
								var d = s.ownerDocument || document, f = d && d.defaultView || window;
								if (f.getSelection) {
									var p = f.getSelection(), m = s.textContent.length, h = Math.min(c.start, m), g = c.end === void 0 ? h : Math.min(c.end, m);
									!p.extend && h > g && (o = g, g = h, h = o);
									var _ = Hr(s, h), v = Hr(s, g);
									if (_ && v && (p.rangeCount !== 1 || p.anchorNode !== _.node || p.anchorOffset !== _.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
										var y = d.createRange();
										y.setStart(_.node, _.offset), p.removeAllRanges(), h > g ? (p.addRange(y), p.extend(v.node, v.offset)) : (y.setEnd(v.node, v.offset), p.addRange(y));
									}
								}
							}
						}
						for (d = [], p = s; p = p.parentNode;) p.nodeType === 1 && d.push({
							element: p,
							left: p.scrollLeft,
							top: p.scrollTop
						});
						for (typeof s.focus == "function" && s.focus(), s = 0; s < d.length; s++) {
							var b = d[s];
							b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
						}
					}
					yh = !!dp, fp = dp = null;
				} finally {
					K = a, F.p = i, P.T = r;
				}
			}
			e.current = t, xd = 2;
		}
	}
	function uf() {
		if (xd === 2) {
			xd = 0;
			var e = Sd, t = Cd, n = !!(t.flags & 8772);
			if (t.subtreeFlags & 8772 || n) {
				n = P.T, P.T = null;
				var r = F.p;
				F.p = 2;
				var i = K;
				K |= 4;
				try {
					hu(e, t.alternate, t);
				} finally {
					K = i, F.p = r, P.T = n;
				}
			}
			xd = 3;
		}
	}
	function df() {
		if (xd === 4 || xd === 3) {
			xd = 0;
			var e = Od;
			Od = null, Le();
			var t = Sd, n = Cd, r = wd, i = Dd, a = (r & 335544064) === r ? 10262 : 10256;
			if ((n.subtreeFlags & a) !== 0 || (n.flags & a) !== 0 ? xd = 5 : (xd = 0, Cd = Sd = null, ff(t, t.pendingLanes)), a = t.pendingLanes, a === 0 && (bd = null), gt(r), n = n.stateNode, Je && typeof Je.onCommitFiberRoot == "function") try {
				Je.onCommitFiberRoot(qe, n, void 0, (n.current.flags & 128) == 128);
			} catch {}
			if (i !== null) {
				n = P.T, a = F.p, F.p = 2, P.T = null;
				try {
					for (var o = t.onRecoverableError, s = 0; s < i.length; s++) {
						var c = i[s];
						o(c.value, { componentStack: c.stack });
					}
				} finally {
					P.T = n, F.p = a;
				}
			}
			if (i = kd, o = Ad, Ad = null, i !== null && (kd = null, o === null && (o = []), e !== null)) for (c = 0; c < i.length; c++) n = (0, i[c])(o), n !== void 0 && e.finished.finally(n);
			wd & 3 && pf(), kf(t), a = t.pendingLanes, r & 261930 && a & 42 ? t === Md ? jd++ : (jd = 0, Md = t) : (jd = 0, Md = null), Af(0, !1);
		}
	}
	function ff(e, t) {
		(e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, ka(t)));
	}
	function pf() {
		return Od !== null && (Od.skipTransition(), Od = null), lf(), uf(), df(), mf();
	}
	function mf() {
		if (xd !== 5) return !1;
		var e = Sd, t = Td;
		Td = 0;
		var n = gt(wd), r = P.T, a = F.p;
		try {
			F.p = 32 > n ? 32 : n, P.T = null, n = Ed, Ed = null;
			var o = Sd, s = wd;
			if (xd = 0, Cd = Sd = null, wd = 0, K & 6) throw Error(i(331));
			var c = K;
			if (K |= 4, Yu(o.current), Vu(o, o.current, s, n), K = c, Af(0, !1), Je && typeof Je.onPostCommitFiberRoot == "function") try {
				Je.onPostCommitFiberRoot(qe, o);
			} catch {}
			return !0;
		} finally {
			F.p = a, P.T = r, ff(e, t);
		}
	}
	function hf(e, t, n) {
		t = zi(n, t), t = Ec(e.stateNode, t, 2), e = mo(e, t, 2), e !== null && (ut(e, 2), kf(e));
	}
	function gf(e, t, n) {
		if (e.tag === 3) hf(e, e, n);
		else for (; t !== null;) {
			if (t.tag === 3) {
				hf(t, e, n);
				break;
			}
			if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (bd === null || !bd.has(r))) {
					e = zi(n, e), n = Dc(2), r = mo(t, n, 2), r !== null && (Oc(n, r, t, e), ut(r, 2), kf(r));
					break;
				}
			}
			t = t.return;
		}
	}
	function _f(e, t, n) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new $u();
			var i = /* @__PURE__ */ new Set();
			r.set(t, i);
		} else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
		i.has(n) || (ad = !0, i.add(n), e = vf.bind(null, e, t, n), t.then(e, e));
	}
	function vf(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, ed === e && (J & n) === n && (sd === 4 || sd === 3 && (J & 62914560) === J && 300 > Re() - gd ? K & 2 ? ud |= n : Ud(e, 0) : ud |= n, fd === J && (fd = 0)), kf(e);
	}
	function yf(e, t) {
		t === 0 && (t = ct()), e = wi(e, t), e !== null && (ut(e, t), kf(e));
	}
	function bf(e) {
		var t = e.memoizedState, n = 0;
		t !== null && (n = t.retryLane), yf(e, n);
	}
	function xf(e, t) {
		var n = 0;
		switch (e.tag) {
			case 31:
			case 13:
				var r = e.stateNode, a = e.memoizedState;
				a !== null && (n = a.retryLane);
				break;
			case 19:
				r = e.stateNode;
				break;
			case 22:
				r = e.stateNode._retryCache;
				break;
			default: throw Error(i(314));
		}
		r !== null && r.delete(t), yf(e, n);
	}
	function Sf(e, t) {
		return Pe(e, t);
	}
	var Cf = null, wf = null, Tf = !1, Ef = !1, Df = !1, Of = 0;
	function kf(e) {
		e !== wf && e.next === null && (wf === null ? Cf = wf = e : wf = wf.next = e), Ef = !0, Tf || (Tf = !0, If());
	}
	function Af(e, t) {
		if (!Df && Ef) {
			Df = !0;
			do
				for (var n = !1, r = Cf; r !== null;) {
					if (!t) {
						if (e !== 0) {
							var i = r.pendingLanes;
							if (i === 0) var a = 0;
							else {
								var o = r.suspendedLanes, s = r.pingedLanes;
								a = (1 << 31 - Xe(42 | e) + 1) - 1, a &= i & ~(o & ~s), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
							}
							a !== 0 && (n = !0, Ff(r, a));
						} else a = J, a = it(r, r === ed ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), !(a & 3) || at(r, a) || (n = !0, Ff(r, a));
					}
					r = r.next;
				}
			while (n);
			Df = !1;
		}
	}
	function jf() {
		Mf();
	}
	function Mf() {
		Ef = Tf = !1;
		var e = 0;
		Of !== 0 && yp() && (e = Of);
		for (var t = Re(), n = null, r = Cf; r !== null;) {
			var i = r.next, a = Nf(r, t);
			a === 0 ? (r.next = null, n === null ? Cf = i : n.next = i, i === null && (wf = n)) : (n = r, (e !== 0 || a & 3) && (Ef = !0)), r = i;
		}
		xd !== 0 && xd !== 5 || Af(e, !1), Of !== 0 && (Of = 0);
	}
	function Nf(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a;) {
			var o = 31 - Xe(a), s = 1 << o, c = i[o];
			c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = st(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
		}
		if (t = ed, n = J, n = it(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, n === 0 || e === t && (td === 2 || td === 9) || e.cancelPendingCommit !== null) return r !== null && r !== null && Fe(r), e.callbackNode = null, e.callbackPriority = 0;
		if (!(n & 3) || at(e, n)) {
			if (t = n & -n, t === e.callbackPriority) return t;
			switch (r !== null && Fe(r), gt(n)) {
				case 2:
				case 8:
					n = Ve;
					break;
				case 32:
					n = He;
					break;
				case 268435456:
					n = We;
					break;
				default: n = He;
			}
			return r = Pf.bind(null, e), n = Pe(n, r), e.callbackPriority = t, e.callbackNode = n, t;
		}
		return r !== null && r !== null && Fe(r), e.callbackPriority = 2, e.callbackNode = null, 2;
	}
	function Pf(e, t) {
		if (xd !== 0 && xd !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
		var n = e.callbackNode;
		if (pf() && e.callbackNode !== n) return null;
		var r = J;
		return r = it(e, e === ed ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (Ld(e, r, t), Nf(e, Re()), e.callbackNode != null && e.callbackNode === n ? Pf.bind(null, e) : null);
	}
	function Ff(e, t) {
		if (pf()) return null;
		Ld(e, t, !0);
	}
	function If() {
		wp(function() {
			K & 6 ? Pe(Be, jf) : Mf();
		});
	}
	function Lf() {
		if (Of === 0) {
			var e = Fa;
			e === 0 && (e = et, et <<= 1, !(et & 261888) && (et = 256)), Of = e;
		}
		return Of;
	}
	function Rf(e) {
		return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : mn(e);
	}
	function zf(e, t, n, r, i) {
		if (t === "submit" && n && n.stateNode === i) {
			var a = Rf((i[xt] || null).action), o = r.submitter;
			o && (t = (t = o[xt] || null) ? Rf(t.formAction) : o.getAttribute("formAction"), t !== null && (a = t, o = null));
			var s = new In("action", "action", null, r, i);
			e.push({
				event: s,
				listeners: [{
					instance: null,
					listener: function() {
						if (r.defaultPrevented) {
							if (Of !== 0) {
								var e = new FormData(i, o);
								Qs(n, {
									pending: !0,
									data: e,
									method: i.method,
									action: a
								}, null, e);
							}
						} else typeof a == "function" && (s.preventDefault(), e = new FormData(i, o), Qs(n, {
							pending: !0,
							data: e,
							method: i.method,
							action: a
						}, a, e));
					},
					currentTarget: i
				}]
			});
		}
	}
	for (var Bf = 0; Bf < di.length; Bf++) {
		var Vf = di[Bf];
		fi(Vf.toLowerCase(), "on" + (Vf[0].toUpperCase() + Vf.slice(1)));
	}
	fi(ri, "onAnimationEnd"), fi(ii, "onAnimationIteration"), fi(ai, "onAnimationStart"), fi("dblclick", "onDoubleClick"), fi("focusin", "onFocus"), fi("focusout", "onBlur"), fi(oi, "onTransitionRun"), fi(si, "onTransitionStart"), fi(ci, "onTransitionCancel"), fi(li, "onTransitionEnd"), Rt("onMouseEnter", ["mouseout", "mouseover"]), Rt("onMouseLeave", ["mouseout", "mouseover"]), Rt("onPointerEnter", ["pointerout", "pointerover"]), Rt("onPointerLeave", ["pointerout", "pointerover"]), Lt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Lt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Lt("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]), Lt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Lt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Lt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var Hf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Uf = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Hf));
	function Wf(e, t) {
		t = !!(t & 4);
		for (var n = 0; n < e.length; n++) {
			var r = e[n], i = r.event;
			r = r.listeners;
			a: {
				var a = void 0;
				if (t) for (var o = r.length - 1; 0 <= o; o--) {
					var s = r[o], c = s.instance, l = s.currentTarget;
					if (s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						_i(e);
					}
					i.currentTarget = null, a = c;
				}
				else for (o = 0; o < r.length; o++) {
					if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						_i(e);
					}
					i.currentTarget = null, a = c;
				}
			}
		}
	}
	function Y(e, t) {
		var n = t[Ct];
		n === void 0 && (n = t[Ct] = /* @__PURE__ */ new Set());
		var r = e + "__bubble";
		n.has(r) || (Jf(t, e, 2, !1), n.add(r));
	}
	function Gf(e, t, n) {
		var r = 0;
		t && (r |= 4), Jf(n, e, r, t);
	}
	var Kf = "_reactListening" + Math.random().toString(36).slice(2);
	function qf(e) {
		if (!e[Kf]) {
			e[Kf] = !0, Ft.forEach(function(t) {
				t !== "selectionchange" && (Uf.has(t) || Gf(t, !1, e), Gf(t, !0, e));
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[Kf] || (t[Kf] = !0, Gf("selectionchange", !1, t));
		}
	}
	function Jf(e, t, n, r) {
		switch (Eh(t)) {
			case 2:
				var i = bh;
				break;
			case 8:
				i = xh;
				break;
			default: i = Sh;
		}
		n = i.bind(null, t, n, e), i = void 0, !Tn || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
			capture: !0,
			passive: i
		}) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, { passive: i });
	}
	function Yf(e, t, n, r, i) {
		var a = r;
		if (!(t & 1) && !(t & 2) && r !== null) a: for (;;) {
			if (r === null) return;
			var s = r.tag;
			if (s === 3 || s === 4) {
				var c = r.stateNode.containerInfo;
				if (c === i) break;
				if (s === 4) for (s = r.return; s !== null;) {
					var l = s.tag;
					if ((l === 3 || l === 4) && s.stateNode.containerInfo === i) return;
					s = s.return;
				}
				for (; c !== null;) {
					if (s = At(c), s === null) return;
					if (l = s.tag, l === 5 || l === 6 || l === 26 || l === 27) {
						r = a = s;
						continue a;
					}
					c = c.parentNode;
				}
			}
			r = r.return;
		}
		Sn(function() {
			var r = a, i = _n(n), s = [];
			a: {
				var c = ui.get(e);
				if (c !== void 0) {
					var l = In, u = e;
					switch (e) {
						case "keypress": if (jn(n) === 0) break a;
						case "keydown":
						case "keyup":
							l = er;
							break;
						case "focusin":
							u = "focus", l = Gn;
							break;
						case "focusout":
							u = "blur", l = Gn;
							break;
						case "beforeblur":
						case "afterblur":
							l = Gn;
							break;
						case "click": if (n.button === 2) break a;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							l = Un;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							l = Wn;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							l = rr;
							break;
						case ri:
						case ii:
						case ai:
							l = Kn;
							break;
						case li:
							l = ir;
							break;
						case "scroll":
						case "scrollend":
							l = Rn;
							break;
						case "wheel":
							l = ar;
							break;
						case "copy":
						case "cut":
						case "paste":
							l = qn;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							l = tr;
							break;
						case "submit":
							l = nr;
							break;
						case "toggle":
						case "beforetoggle": l = or;
					}
					var d = !!(t & 4), f = !d && (e === "scroll" || e === "scrollend"), p = d ? c === null ? null : c + "Capture" : c;
					d = [];
					for (var m = r, h; m !== null;) {
						var g = m;
						if (h = g.stateNode, g = g.tag, g !== 5 && g !== 26 && g !== 27 || h === null || p === null || (g = Cn(m, p), g != null && d.push(Xf(m, g, h))), f) break;
						m = m.return;
					}
					0 < d.length && (c = new l(c, u, null, n, i), s.push({
						event: c,
						listeners: d
					}));
				}
			}
			if (!(t & 7)) {
				a: {
					if (l = e === "mouseover" || e === "pointerover", c = e === "mouseout" || e === "pointerout", l && n !== gn && (u = n.relatedTarget || n.fromElement) && (At(u) || u[St])) break a;
					(c || l) && (u = i.window === i ? i : (l = i.ownerDocument) ? l.defaultView || l.parentWindow : window, c ? (l = n.relatedTarget || n.toElement, c = r, l = l ? At(l) : null, l !== null && (f = o(l), d = l.tag, l !== f || d !== 5 && d !== 27 && d !== 6) && (l = null)) : (c = null, l = r), c !== l && (d = Un, g = "onMouseLeave", p = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (d = tr, g = "onPointerLeave", p = "onPointerEnter", m = "pointer"), f = c == null ? u : V(c), h = l == null ? u : V(l), u = new d(g, m + "leave", c, n, i), u.target = f, u.relatedTarget = h, g = null, At(i) === r && (d = new d(p, m + "enter", l, n, i), d.target = h, d.relatedTarget = f, g = d), f = g, d = c && l ? E(c, l, Qf) : null, c !== null && $f(s, u, c, d, !1), l !== null && f !== null && $f(s, f, l, d, !0)));
				}
				a: {
					if (c = r ? V(r) : window, l = c.nodeName && c.nodeName.toLowerCase(), l === "select" || l === "input" && c.type === "file") var _ = Er;
					else if (br(c)) {
						if (Dr) _ = Ir;
						else {
							_ = Pr;
							var v = Nr;
						}
					} else l = c.nodeName, !l || l.toLowerCase() !== "input" || c.type !== "checkbox" && c.type !== "radio" ? r && dn(r.elementType) && (_ = Er) : _ = Fr;
					if (_ &&= _(e, r)) {
						xr(s, _, n, i);
						break a;
					}
					v && v(e, c, r);
				}
				switch (v = r ? V(r) : window, e) {
					case "focusin":
						(br(v) || v.contentEditable === "true") && (qr = v, Jr = r, Yr = null);
						break;
					case "focusout":
						Yr = Jr = qr = null;
						break;
					case "mousedown":
						Xr = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						Xr = !1, Zr(s, n, i);
						break;
					case "selectionchange": if (Kr) break;
					case "keydown":
					case "keyup": Zr(s, n, i);
				}
				var y;
				if (cr) b: {
					switch (e) {
						case "compositionstart":
							var b = "onCompositionStart";
							break b;
						case "compositionend":
							b = "onCompositionEnd";
							break b;
						case "compositionupdate":
							b = "onCompositionUpdate";
							break b;
					}
					b = void 0;
				}
				else gr ? mr(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
				b && (dr && n.locale !== "ko" && (gr || b !== "onCompositionStart" ? b === "onCompositionEnd" && gr && (y = An()) : (Dn = i, On = "value" in Dn ? Dn.value : Dn.textContent, gr = !0)), v = Zf(r, b), 0 < v.length && (b = new Jn(b, e, null, n, i), s.push({
					event: b,
					listeners: v
				}), y ? b.data = y : (y = hr(n), y !== null && (b.data = y)))), (y = ur ? _r(e, n) : vr(e, n)) && (b = Zf(r, "onBeforeInput"), 0 < b.length && (v = new Jn("onBeforeInput", "beforeinput", null, n, i), s.push({
					event: v,
					listeners: b
				}), v.data = y)), zf(s, e, r, n, i);
			}
			Wf(s, t);
		});
	}
	function Xf(e, t, n) {
		return {
			instance: e,
			listener: t,
			currentTarget: n
		};
	}
	function Zf(e, t) {
		for (var n = t + "Capture", r = []; e !== null;) {
			var i = e, a = i.stateNode;
			if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || a === null || (i = Cn(e, n), i != null && r.unshift(Xf(e, i, a)), i = Cn(e, t), i != null && r.push(Xf(e, i, a))), e.tag === 3) return r;
			e = e.return;
		}
		return [];
	}
	function Qf(e) {
		if (e === null) return null;
		do
			e = e.return;
		while (e && e.tag !== 5 && e.tag !== 27);
		return e || null;
	}
	function $f(e, t, n, r, i) {
		for (var a = t._reactName, o = []; n !== null && n !== r;) {
			var s = n, c = s.alternate, l = s.stateNode;
			if (s = s.tag, c !== null && c === r) break;
			s !== 5 && s !== 26 && s !== 27 || l === null || (c = l, i ? (l = Cn(n, a), l != null && o.unshift(Xf(n, l, c))) : i || (l = Cn(n, a), l != null && o.push(Xf(n, l, c)))), n = n.return;
		}
		o.length !== 0 && e.push({
			event: t,
			listeners: o
		});
	}
	var ep = /\r\n?/g, tp = /\u0000|\uFFFD/g;
	function np(e) {
		return (typeof e == "string" ? e : "" + e).replace(ep, "\n").replace(tp, "");
	}
	function rp(e, t) {
		return t = np(t), np(e) === t;
	}
	function ip(e, t, n, r, a, o) {
		switch (n) {
			case "children":
				if (typeof r == "string") t === "body" || t === "textarea" && r === "" || sn(e, r);
				else if (typeof r == "number" || typeof r == "bigint") t !== "body" && sn(e, "" + r);
				else return;
				break;
			case "className":
				Gt(e, "class", r);
				break;
			case "tabIndex":
				Gt(e, "tabindex", r);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				Gt(e, n, r);
				break;
			case "style":
				un(e, r, o);
				return;
			case "data": if (t !== "object") {
				Gt(e, "data", r);
				break;
			}
			case "src":
			case "href":
				if (r === "" && (t !== "a" || n !== "href") || r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = mn(r), e.setAttribute(n, r);
				break;
			case "action":
			case "formAction":
				if (typeof r == "function") {
					e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
					break;
				}
				if (typeof o == "function" && (n === "formAction" ? (t !== "input" && ip(e, t, "name", a.name, a, null), ip(e, t, "formEncType", a.formEncType, a, null), ip(e, t, "formMethod", a.formMethod, a, null), ip(e, t, "formTarget", a.formTarget, a, null)) : (ip(e, t, "encType", a.encType, a, null), ip(e, t, "method", a.method, a, null), ip(e, t, "target", a.target, a, null))), r == null || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = mn(r), e.setAttribute(n, r);
				break;
			case "onClick":
				r != null && (e.onclick = hn);
				return;
			case "onScroll":
				r != null && Y("scroll", e);
				return;
			case "onScrollEnd":
				r != null && Y("scrollend", e);
				return;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
					if (n = r.__html, n != null) {
						if (a.children != null) throw Error(i(60));
						o?.__html !== n && (e.innerHTML = n);
					}
				}
				break;
			case "multiple":
				e.multiple = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "muted":
				e.muted = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref": break;
			case "autoFocus": break;
			case "xlinkHref":
				if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
					e.removeAttribute("xlink:href");
					break;
				}
				n = mn(r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
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
				r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
				break;
			case "capture":
			case "download":
				!0 === r ? e.setAttribute(n, "") : !1 !== r && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "rowSpan":
			case "start":
				r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
				break;
			case "popover":
				Y("beforetoggle", e), Y("toggle", e), Wt(e, "popover", r);
				break;
			case "xlinkActuate":
				Kt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
				break;
			case "xlinkArcrole":
				Kt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
				break;
			case "xlinkRole":
				Kt(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
				break;
			case "xlinkShow":
				Kt(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
				break;
			case "xlinkTitle":
				Kt(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
				break;
			case "xlinkType":
				Kt(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
				break;
			case "xmlBase":
				Kt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
				break;
			case "xmlLang":
				Kt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
				break;
			case "xmlSpace":
				Kt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
				break;
			case "is":
				Wt(e, "is", r);
				break;
			case "innerText":
			case "textContent": return;
			default: if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") n = fn.get(n) || n, Wt(e, n, r);
			else return;
		}
		H = !0;
	}
	function ap(e, t, n, r, a, o) {
		switch (n) {
			case "style":
				un(e, r, o);
				return;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
					if (n = r.__html, n != null) {
						if (a.children != null) throw Error(i(60));
						o?.__html !== n && (e.innerHTML = n);
					}
				}
				break;
			case "children":
				if (typeof r == "string") sn(e, r);
				else if (typeof r == "number" || typeof r == "bigint") sn(e, "" + r);
				else return;
				break;
			case "onScroll":
				r != null && Y("scroll", e);
				return;
			case "onScrollEnd":
				r != null && Y("scrollend", e);
				return;
			case "onClick":
				r != null && (e.onclick = hn);
				return;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref": return;
			case "innerText":
			case "textContent": return;
			default:
				if (!It.hasOwnProperty(n)) a: {
					if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), o = n.slice(2, a ? n.length - 7 : void 0), t = e[xt] || null, t = t == null ? null : t[n], typeof t == "function" && e.removeEventListener(o, t, a), typeof r == "function")) {
						typeof t != "function" && t !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(o, r, a);
						break a;
					}
					H = !0, n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : Wt(e, n, r);
				}
				return;
		}
		H = !0;
	}
	function op(e, t, n) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "img":
				Y("error", e), Y("load", e);
				var r = !1, a = !1, o;
				for (o in n) if (n.hasOwnProperty(o)) {
					var s = n[o];
					if (s != null) switch (o) {
						case "src":
							r = !0;
							break;
						case "srcSet":
							a = !0;
							break;
						case "children":
						case "dangerouslySetInnerHTML": throw Error(i(137, t));
						default: ip(e, t, o, s, n, null);
					}
				}
				a && ip(e, t, "srcSet", n.srcSet, n, null), r && ip(e, t, "src", n.src, n, null);
				return;
			case "input":
				Y("invalid", e);
				var c = o = s = a = null, l = null, u = null;
				for (r in n) if (n.hasOwnProperty(r)) {
					var d = n[r];
					if (d != null) switch (r) {
						case "name":
							a = d;
							break;
						case "type":
							s = d;
							break;
						case "checked":
							l = d;
							break;
						case "defaultChecked":
							u = d;
							break;
						case "value":
							o = d;
							break;
						case "defaultValue":
							c = d;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (d != null) throw Error(i(137, t));
							break;
						default: ip(e, t, r, d, n, null);
					}
				}
				tn(e, o, c, l, u, s, a, !1);
				return;
			case "select":
				for (a in Y("invalid", e), r = s = o = null, n) if (n.hasOwnProperty(a) && (c = n[a], c != null)) switch (a) {
					case "value":
						o = c;
						break;
					case "defaultValue":
						s = c;
						break;
					case "multiple": r = c;
					default: ip(e, t, a, c, n, null);
				}
				t = o, n = s, e.multiple = !!r, t == null ? n != null && rn(e, !!r, n, !0) : rn(e, !!r, t, !1);
				return;
			case "textarea":
				for (s in Y("invalid", e), o = a = r = null, n) if (n.hasOwnProperty(s) && (c = n[s], c != null)) switch (s) {
					case "value":
						r = c;
						break;
					case "defaultValue":
						a = c;
						break;
					case "children":
						o = c;
						break;
					case "dangerouslySetInnerHTML":
						if (c != null) throw Error(i(91));
						break;
					default: ip(e, t, s, c, n, null);
				}
				on(e, r, a, o);
				return;
			case "option":
				for (l in n) if (n.hasOwnProperty(l) && (r = n[l], r != null)) switch (l) {
					case "selected":
						e.selected = r && typeof r != "function" && typeof r != "symbol";
						break;
					default: ip(e, t, l, r, n, null);
				}
				return;
			case "dialog":
				Y("beforetoggle", e), Y("toggle", e), Y("cancel", e), Y("close", e);
				break;
			case "iframe":
			case "object":
				Y("load", e);
				break;
			case "video":
			case "audio":
				for (r = 0; r < Hf.length; r++) Y(Hf[r], e);
				break;
			case "image":
				Y("error", e), Y("load", e);
				break;
			case "details":
				Y("toggle", e);
				break;
			case "embed":
			case "source":
			case "link": Y("error", e), Y("load", e);
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
				for (u in n) if (n.hasOwnProperty(u) && (r = n[u], r != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML": throw Error(i(137, t));
					default: ip(e, t, u, r, n, null);
				}
				return;
			default: if (dn(t)) {
				for (d in n) n.hasOwnProperty(d) && (r = n[d], r !== void 0 && ap(e, t, d, r, n, void 0));
				return;
			}
		}
		for (c in n) n.hasOwnProperty(c) && (r = n[c], r != null && ip(e, t, c, r, n, null));
	}
	var sp = {};
	function cp(e, t, n, r) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "input":
				var a = null, o = null, s = null, c = null, l = null, u = null, d = null;
				for (m in n) {
					var f = n[m];
					if (n.hasOwnProperty(m) && f != null) switch (m) {
						case "checked": break;
						case "value": break;
						case "defaultValue": l = f;
						default: r.hasOwnProperty(m) || ip(e, t, m, null, r, f);
					}
				}
				for (var p in r) {
					var m = r[p];
					if (f = n[p], r.hasOwnProperty(p) && (m != null || f != null)) switch (p) {
						case "type":
							m !== f && (H = !0), o = m;
							break;
						case "name":
							m !== f && (H = !0), a = m;
							break;
						case "checked":
							m !== f && (H = !0), u = m;
							break;
						case "defaultChecked":
							m !== f && (H = !0), d = m;
							break;
						case "value":
							m !== f && (H = !0), s = m;
							break;
						case "defaultValue":
							m !== f && (H = !0), c = m;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (m != null) throw Error(i(137, t));
							break;
						default: m !== f && ip(e, t, p, m, r, f);
					}
				}
				en(e, s, c, l, u, d, o, a);
				return;
			case "select":
				for (o in m = s = c = p = null, n) if (l = n[o], n.hasOwnProperty(o) && l != null) switch (o) {
					case "value": break;
					case "multiple": m = l;
					default: r.hasOwnProperty(o) || ip(e, t, o, null, r, l);
				}
				for (a in r) if (o = r[a], l = n[a], r.hasOwnProperty(a) && (o != null || l != null)) switch (a) {
					case "value":
						o !== l && (H = !0), p = o;
						break;
					case "defaultValue":
						o !== l && (H = !0), c = o;
						break;
					case "multiple": o !== l && (H = !0), s = o;
					default: o !== l && ip(e, t, a, o, r, l);
				}
				t = c, n = s, r = m, p == null ? !!r != !!n && (t == null ? rn(e, !!n, n ? [] : "", !1) : rn(e, !!n, t, !0)) : rn(e, !!n, p, !1);
				return;
			case "textarea":
				for (c in m = p = null, n) if (a = n[c], n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c)) switch (c) {
					case "value": break;
					case "children": break;
					default: ip(e, t, c, null, r, a);
				}
				for (s in r) if (a = r[s], o = n[s], r.hasOwnProperty(s) && (a != null || o != null)) switch (s) {
					case "value":
						a !== o && (H = !0), p = a;
						break;
					case "defaultValue":
						a !== o && (H = !0), m = a;
						break;
					case "children": break;
					case "dangerouslySetInnerHTML":
						if (a != null) throw Error(i(91));
						break;
					default: a !== o && ip(e, t, s, a, r, o);
				}
				an(e, p, m);
				return;
			case "option":
				for (var h in n) if (p = n[h], n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)) switch (h) {
					case "selected":
						e.selected = !1;
						break;
					default: ip(e, t, h, null, r, p);
				}
				for (l in r) if (p = r[l], m = n[l], r.hasOwnProperty(l) && p !== m && (p != null || m != null)) switch (l) {
					case "selected":
						p !== m && (H = !0), e.selected = p && typeof p != "function" && typeof p != "symbol";
						break;
					default: ip(e, t, l, p, r, m);
				}
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
				for (var g in n) p = n[g], n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && ip(e, t, g, null, r, p);
				for (u in r) if (p = r[u], m = n[u], r.hasOwnProperty(u) && p !== m && (p != null || m != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML":
						if (p != null) throw Error(i(137, t));
						break;
					default: ip(e, t, u, p, r, m);
				}
				return;
			default: if (dn(t)) {
				for (var _ in n) p = n[_], n.hasOwnProperty(_) && p !== void 0 && !r.hasOwnProperty(_) && ap(e, t, _, void 0, r, p);
				for (d in r) p = r[d], m = n[d], !r.hasOwnProperty(d) || p === m || p === void 0 && m === void 0 || ap(e, t, d, p, r, m);
				return;
			}
		}
		for (var v in n) p = n[v], n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && ip(e, t, v, null, r, p);
		for (f in r) p = r[f], m = n[f], !r.hasOwnProperty(f) || p === m || p == null && m == null || ip(e, t, f, p, r, m);
	}
	function lp(e) {
		switch (e) {
			case "css":
			case "script":
			case "font":
			case "img":
			case "image":
			case "input":
			case "link": return !0;
			default: return !1;
		}
	}
	function up() {
		if (typeof performance.getEntriesByType == "function") {
			for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), r = 0; r < n.length; r++) {
				var i = n[r], a = i.transferSize, o = i.initiatorType, s = i.duration;
				if (a && s && lp(o)) {
					for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
						var c = n[r], l = c.startTime;
						if (l > s) break;
						var u = c.transferSize, d = c.initiatorType;
						u && lp(d) && (c = c.responseEnd, o += u * (c < s ? 1 : (s - l) / (c - l)));
					}
					if (--r, t += 8 * (a + o) / (i.duration / 1e3), e++, 10 < e) break;
				}
			}
			if (0 < e) return t / e / 1e6;
		}
		return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
	}
	var dp = null, fp = null;
	function pp(e) {
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	function mp(e) {
		switch (e) {
			case "http://www.w3.org/2000/svg": return 1;
			case "http://www.w3.org/1998/Math/MathML": return 2;
			default: return 0;
		}
	}
	function hp(e, t) {
		if (e === 0) switch (t) {
			case "svg": return 1;
			case "math": return 2;
			default: return 0;
		}
		return e === 1 && t === "foreignObject" ? 0 : e;
	}
	function gp(e, t, n, r) {
		return n = pp(n).createElement(e), n[bt] = r, n[xt] = t, op(n, e, t), Nt(n), n;
	}
	function _p(e, t) {
		return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
	}
	var vp = null;
	function yp() {
		var e = window.event;
		return e && e.type === "popstate" ? e !== vp && (vp = e, !0) : (vp = null, !1);
	}
	var bp = typeof setTimeout == "function" ? setTimeout : void 0, xp = typeof clearTimeout == "function" ? clearTimeout : void 0, Sp = typeof Promise == "function" ? Promise : void 0, Cp = typeof requestAnimationFrame == "function" ? requestAnimationFrame : bp, wp = typeof queueMicrotask == "function" ? queueMicrotask : Sp === void 0 ? bp : function(e) {
		return Sp.resolve(null).then(e).catch(Tp);
	};
	function Tp(e) {
		setTimeout(function() {
			throw e;
		});
	}
	function Ep(e) {
		return e === "head";
	}
	function Dp(e, t) {
		var n = t, r = 0;
		do {
			var i = n.nextSibling;
			if (e.removeChild(n), i && i.nodeType === 8) {
				if (n = i.data, n === "/$" || n === "/&") {
					if (r === 0) {
						e.removeChild(i), Gh(t);
						return;
					}
					r--;
				} else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") r++;
				else if (n === "html") xm(e.ownerDocument.documentElement);
				else if (n === "head") {
					n = e.ownerDocument.head, xm(n);
					for (var a = n.firstChild; a;) {
						var o = a.nextSibling, s = a.nodeName;
						a[Dt] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && a.rel.toLowerCase() === "stylesheet" || n.removeChild(a), a = o;
					}
				} else n === "body" && xm(e.ownerDocument.body);
			}
			n = i;
		} while (n);
		Gh(t);
	}
	function Op(e, t) {
		var n = e;
		e = 0;
		do {
			var r = n.nextSibling;
			if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), r && r.nodeType === 8) {
				if (n = r.data, n === "/$") {
					if (e === 0) break;
					e--;
				} else n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
			}
			n = r;
		} while (n);
	}
	function kp(e, t, n) {
		if (t = CSS.escape(t) === t ? t : "r-" + btoa(t).replace(/=/g, ""), e.style.viewTransitionName = t, n != null && (e.style.viewTransitionClass = n), n = getComputedStyle(e), n.display === "inline") {
			if (t = e.getClientRects(), t.length === 1) var r = 1;
			else for (var i = r = 0; i < t.length; i++) {
				var a = t[i];
				0 < a.width && 0 < a.height && r++;
			}
			r === 1 && (e = e.style, e.display = t.length === 1 ? "inline-block" : "block", e.marginTop = "-" + n.paddingTop, e.marginBottom = "-" + n.paddingBottom);
		}
	}
	function Ap(e, t) {
		e = e.style, t = t.style;
		var n = t == null ? null : t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null;
		e.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = t == null ? null : t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null, e.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), e.display === "inline-block" && (t == null ? e.display = e.margin = "" : (n = t.display, e.display = n == null || typeof n == "boolean" ? "" : n, n = t.margin, n == null ? (n = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], e.marginTop = n == null || typeof n == "boolean" ? "" : n, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], e.marginBottom = t == null || typeof t == "boolean" ? "" : t) : e.margin = n));
	}
	function jp(e, t, n) {
		return n = n.ownerDocument.defaultView, {
			rect: e,
			abs: t.position === "absolute" || t.position === "fixed",
			clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
			view: 0 <= e.bottom && 0 <= e.right && e.top <= n.innerHeight && e.left <= n.innerWidth
		};
	}
	function Mp(e) {
		return jp(e.getBoundingClientRect(), getComputedStyle(e), e);
	}
	function Np(e) {
		var t = e.getBoundingClientRect();
		t = new DOMRect(t.x + 2e4, t.y + 2e4, t.width, t.height);
		var n = getComputedStyle(e);
		return jp(t, n, e);
	}
	function Pp(e) {
		return e.documentElement.clientHeight;
	}
	function Fp(e) {
		this.addEventListener("load", e), this.addEventListener("error", e);
	}
	function Ip(e, t, n, r, i, a, o, s, c) {
		var l = t.nodeType === 9 ? t : t.ownerDocument;
		try {
			var u = l.startViewTransition({
				update: function() {
					var t = l.defaultView, n = t.navigation && t.navigation.transition, o = l.fonts.status;
					r();
					var s = [];
					if (o === "loaded" && (Pp(l), l.fonts.status === "loading" && s.push(l.fonts.ready)), o = s.length, e !== null) for (var c = e.suspenseyImages, u = 0, d = 0; d < c.length; d++) {
						var f = c[d];
						if (!f.complete) {
							var p = f.getBoundingClientRect();
							if (0 < p.bottom && 0 < p.right && p.top < t.innerHeight && p.left < t.innerWidth) {
								if (u += eh(f), u > rh) {
									s.length = o;
									break;
								}
								f = new Promise(Fp.bind(f)), s.push(f);
							}
						}
					}
					if (0 < s.length) return t = Promise.race([Promise.all(s), new Promise(function(e) {
						return setTimeout(e, 500);
					})]).then(i, i), (n ? Promise.allSettled([n.finished, t]) : t).then(a, a);
					if (i(), n) return n.finished.then(a, a);
					a();
				},
				types: n
			});
			l.__reactViewTransition = u;
			var d = [];
			return u.ready.then(function() {
				for (var e = l.documentElement.getAnimations({ subtree: !0 }), t = 0; t < e.length; t++) {
					var n = e[t], r = n.effect, i = r.pseudoElement;
					if (i != null && i.startsWith("::view-transition")) {
						d.push(n), n = r.getKeyframes();
						for (var a = i = void 0, s = !0, c = 0; c < n.length; c++) {
							var u = n[c], f = u.width;
							if (i === void 0) i = f;
							else if (i !== f) {
								s = !1;
								break;
							}
							if (f = u.height, a === void 0) a = f;
							else if (a !== f) {
								s = !1;
								break;
							}
							delete u.width, delete u.height, u.transform === "none" && delete u.transform;
						}
						s && i !== void 0 && a !== void 0 && (r.setKeyframes(n), s = getComputedStyle(r.target, r.pseudoElement), s.width !== i || s.height !== a) && (s = n[0], s.width = i, s.height = a, s = n[n.length - 1], s.width = i, s.height = a, r.setKeyframes(n));
					}
				}
				o();
			}, function(e) {
				l.__reactViewTransition === u && (l.__reactViewTransition = null);
				try {
					if (typeof e == "object" && e) switch (e.name) {
						case "InvalidStateError": (e.message === "View transition was skipped because document visibility state is hidden." || e.message === "Skipping view transition because document visibility state has become hidden." || e.message === "Skipping view transition because viewport size changed." || e.message === "Transition was aborted because of invalid state") && (e = null);
					}
					e !== null && c(e);
				} finally {
					r(), i(), o();
				}
			}), u.finished.finally(function() {
				for (var e = 0; e < d.length; e++) d[e].cancel();
				l.__reactViewTransition === u && (l.__reactViewTransition = null), s();
			}), u;
		} catch {
			return r(), i(), o(), null;
		}
	}
	function Lp(e, t) {
		this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + t + ")";
	}
	Lp.prototype.animate = function(e, t) {
		return t = typeof t == "number" ? { duration: t } : D({}, t), t.pseudoElement = this._selector, this._scope.animate(e, t);
	}, Lp.prototype.getAnimations = function() {
		for (var e = this._scope, t = this._selector, n = e.getAnimations({ subtree: !0 }), r = [], i = 0; i < n.length; i++) {
			var a = n[i].effect;
			a !== null && a.target === e && a.pseudoElement === t && r.push(n[i]);
		}
		return r;
	}, Lp.prototype.getComputedStyle = function() {
		return getComputedStyle(this._scope, this._selector);
	};
	function Rp(e) {
		return {
			name: e,
			group: new Lp("group", e),
			imagePair: new Lp("image-pair", e),
			old: new Lp("old", e),
			new: new Lp("new", e)
		};
	}
	function zp(e) {
		this._fragmentFiber = e, this._observers = this._eventListeners = null;
	}
	zp.prototype.addEventListener = function(e, t, n) {
		var r = null, i = null;
		if (!(n != null && typeof n != "boolean" && (r = n.signal || null, r !== null && r.aborted))) {
			this._eventListeners === null && (this._eventListeners = []);
			var a = this._eventListeners;
			if (Wp(a, e, t, n) === -1) {
				var o = this, s = t;
				n != null && typeof n != "boolean" && !0 === n.once && (s = function(r) {
					o.removeEventListener(e, t, n), typeof t == "function" ? t.call(this, r) : t.handleEvent(r);
				}), r !== null && (i = o.removeEventListener.bind(o, e, t, n), r.addEventListener("abort", i, { once: !0 }), i = r.removeEventListener.bind(r, "abort", i)), r = Hp(n), a.push({
					type: e,
					listener: t,
					optionsOrUseCapture: n,
					attachedListener: s,
					cleanup: i
				}), h(this._fragmentFiber.child, !1, Bp, e, s, r);
			}
			this._eventListeners = a;
		}
	};
	function Bp(e, t, n, r) {
		return b(e).addEventListener(t, n, r), !1;
	}
	zp.prototype.removeEventListener = function(e, t, n) {
		var r = this._eventListeners;
		if (r !== null && (t = Wp(r, e, t, n), t !== -1)) {
			var i = r[t];
			n = i.attachedListener;
			var a = i.cleanup;
			i = Hp(i.optionsOrUseCapture), h(this._fragmentFiber.child, !1, Vp, e, n, i), r.splice(t, 1), a !== null && a();
		}
	};
	function Vp(e, t, n, r) {
		return b(e).removeEventListener(t, n, r), !1;
	}
	function Hp(e) {
		return e != null && typeof e != "boolean" && (!0 === e.once || e.signal instanceof AbortSignal) ? {
			capture: e.capture,
			passive: e.passive
		} : e;
	}
	function Up(e) {
		return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
	}
	function Wp(e, t, n, r) {
		if (e.length === 0) return -1;
		r = Up(r);
		for (var i = 0; i < e.length; i++) {
			var a = e[i];
			if (a.type === t && a.listener === n && Up(a.optionsOrUseCapture) === r) return i;
		}
		return -1;
	}
	zp.prototype.dispatchEvent = function(e) {
		var t = g(this._fragmentFiber);
		if (t === null) return !0;
		t = b(t);
		var n = this._eventListeners;
		if (n !== null && 0 < n.length || !e.bubbles) {
			var r = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
			if (n) for (var i = 0; i < n.length; i++) {
				var a = n[i];
				r.addEventListener(a.type, a.attachedListener, Hp(a.optionsOrUseCapture));
			}
			if (t.appendChild(r), e = r.dispatchEvent(e), n) for (i = 0; i < n.length; i++) a = n[i], r.removeEventListener(a.type, a.attachedListener, Hp(a.optionsOrUseCapture));
			return t.removeChild(r), e;
		}
		return t.dispatchEvent(e);
	}, zp.prototype.focus = function(e) {
		h(this._fragmentFiber.child, !0, Gp, e, void 0, void 0);
	};
	function Gp(e, t) {
		return e.tag !== 6 && (e = b(e), _m(e, t));
	}
	zp.prototype.focusLast = function(e) {
		var t = [];
		h(this._fragmentFiber.child, !0, Kp, t, void 0, void 0);
		for (var n = t.length - 1; 0 <= n && !Gp(t[n], e); n--);
	};
	function Kp(e, t) {
		return t.push(e), !1;
	}
	zp.prototype.blur = function() {
		var e = g(this._fragmentFiber);
		e !== null && (e = b(e), e = pp(e).activeElement, e !== null && h(this._fragmentFiber.child, !1, qp, e, void 0, void 0));
	};
	function qp(e, t) {
		return e.tag !== 6 && (e = b(e), e === t || e.contains(t) ? (t.blur(), !0) : !1);
	}
	zp.prototype.observeUsing = function(e) {
		this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), h(this._fragmentFiber.child, !1, Jp, e, void 0, void 0);
	};
	function Jp(e, t) {
		return e.tag === 6 || (e = b(e), t.observe(e)), !1;
	}
	zp.prototype.unobserveUsing = function(e) {
		var t = this._observers;
		if (t !== null && t.has(e)) {
			t.delete(e), h(this._fragmentFiber.child, !1, Yp, e, void 0, void 0);
			for (var n = t = 0; n < Xp.length; n++) {
				var r = Xp[n];
				r.fragmentInstance === this && r.observer === e ? e.unobserve(r.instance) : Xp[t++] = r;
			}
			Xp.length = t;
		}
	};
	function Yp(e, t) {
		return e.tag === 6 || (e = b(e), t.unobserve(e)), !1;
	}
	var Xp = [], Zp = !1;
	function Qp(e, t, n) {
		Xp.push({
			fragmentInstance: e,
			observer: t,
			instance: n
		}), Zp || (Zp = !0, vm(function() {
			Zp = !1;
			var e = Xp;
			Xp = [];
			for (var t = 0; t < e.length; t++) {
				var n = e[t];
				n.observer.unobserve(n.instance);
			}
		}));
	}
	zp.prototype.getClientRects = function() {
		var e = [];
		return h(this._fragmentFiber.child, !1, $p, e, void 0, void 0), e;
	};
	function $p(e, t) {
		if (e.tag === 6) {
			e = e.stateNode;
			var n = e.ownerDocument.createRange();
			n.selectNodeContents(e), t.push.apply(t, n.getClientRects());
		} else e = b(e), t.push.apply(t, e.getClientRects());
		return !1;
	}
	zp.prototype.getRootNode = function(e) {
		var t = g(this._fragmentFiber);
		return t === null ? this : b(t).getRootNode(e);
	}, zp.prototype.compareDocumentPosition = function(e) {
		var t = g(this._fragmentFiber);
		if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
		var n = [];
		h(this._fragmentFiber.child, !1, Kp, n, void 0, void 0);
		var r = b(t);
		if (n.length === 0) {
			if (n = r, _(this._fragmentFiber)) {
				a: {
					for (t = this._fragmentFiber.return; t !== null;) {
						if (t.tag === 4) {
							t = t.stateNode.containerInfo;
							break a;
						}
						if (t.tag === 3 || t.tag === 5 || t.tag === 27) break;
						t = t.return;
					}
					t = null;
				}
				t != null && (n = t);
			}
			t = this._fragmentFiber;
			var i = r = n.compareDocumentPosition(e);
			return n === e ? i = Node.DOCUMENT_POSITION_CONTAINS : r & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = v(t)[1], n === null ? i = Node.DOCUMENT_POSITION_PRECEDING : (e = b(n).compareDocumentPosition(e), i = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), i |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
		}
		t = b(n[0]), i = b(n[n.length - 1]);
		var a = _(this._fragmentFiber) ? t.parentElement : r;
		if (a == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
		r = a.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, a = a.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY;
		var o = t.compareDocumentPosition(e), s = i.compareDocumentPosition(e), c = o & Node.DOCUMENT_POSITION_CONTAINED_BY || s & Node.DOCUMENT_POSITION_CONTAINED_BY;
		return s = r && a && o & Node.DOCUMENT_POSITION_FOLLOWING && s & Node.DOCUMENT_POSITION_PRECEDING, t = r && t === e || a && i === e || c || s ? Node.DOCUMENT_POSITION_CONTAINED_BY : !r && t === e || !a && i === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : o, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || em(t, this._fragmentFiber, n[0], n[n.length - 1], e) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
	};
	function em(e, t, n, r, i) {
		var a = At(i);
		if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
			if (n = !!a) a: {
				for (; a !== null;) {
					if (a.tag === 7 && (a === t || a.alternate === t)) {
						n = !0;
						break a;
					}
					a = a.return;
				}
				n = !1;
			}
			return n;
		}
		if (e & Node.DOCUMENT_POSITION_CONTAINS) {
			if (a === null) return a = i.ownerDocument, i === a || i === a.documentElement || i === a.body;
			a: {
				for (a = t, t = g(t); a !== null;) {
					if (!(a.tag !== 5 && a.tag !== 3 && a.tag !== 27 || a !== t && a.alternate !== t)) {
						a = !0;
						break a;
					}
					a = a.return;
				}
				a = !1;
			}
			return a;
		}
		return e & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!a) && !(t = a === n) && (t = E(n, a, T), t === null ? t = !1 : (h(t, !0, C, a, n), a = x, x = null, t = a !== null)), t) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!a) && !(t = a === r) && (t = E(r, a, T), t === null ? t = !1 : (h(t, !0, w, a, r), a = x, S = x = null, t = a !== null)), t) : !1;
	}
	function tm(e, t) {
		var n = e.ownerDocument.createRange();
		n.selectNodeContents(e), e = n.getBoundingClientRect(), window.scrollTo(window.scrollX + e.left, t ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight);
	}
	zp.prototype.scrollIntoView = function(e) {
		if (typeof e == "object") throw Error(i(566));
		var t = [];
		h(this._fragmentFiber.child, !1, Kp, t, void 0, void 0);
		var n = !1 !== e;
		if (t.length === 0) {
			var r = v(this._fragmentFiber);
			if (r = n ? r[1] || r[0] || g(this._fragmentFiber) : r[0] || r[1], r === null) return;
			if (r.tag === 6) {
				e = b(r), tm(e, n);
				return;
			}
			if (r = b(r), r.nodeType !== 9) {
				if (r.nodeType === 11) {
					n = "host" in r ? r.host : null, n !== null && n.scrollIntoView(e);
					return;
				}
				r.scrollIntoView(e);
			}
		}
		for (r = n ? t.length - 1 : 0; r !== (n ? -1 : t.length);) {
			var a = t[r];
			a.tag === 6 ? (a = b(a), tm(a, n)) : b(a).scrollIntoView(e), r += n ? -1 : 1;
		}
	};
	function nm(e, t) {
		return e = b(e), rm(e, t), !1;
	}
	function rm(e, t) {
		e.reactFragments ??= /* @__PURE__ */ new Set(), e.reactFragments.add(t);
	}
	function im(e, t) {
		var n = t._eventListeners;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = n[r];
			e.addEventListener(i.type, i.attachedListener, Hp(i.optionsOrUseCapture));
		}
		e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(n) {
			for (var r = 0, i = 0; i < Xp.length; i++) {
				var a = Xp[i];
				(a.fragmentInstance !== t || a.observer !== n || a.instance !== e) && (Xp[r++] = a);
			}
			Xp.length = r, n.observe(e);
		}), rm(e, t));
	}
	function am(e, t) {
		var n = t._eventListeners;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = n[r];
			e.removeEventListener(i.type, i.attachedListener, Hp(i.optionsOrUseCapture));
		}
		e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(n) {
			typeof n.rootMargin == "string" ? Qp(t, n, e) : n.unobserve(e);
		}), e.reactFragments != null && e.reactFragments.delete(t));
	}
	function om(e) {
		var t = e.firstChild;
		for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
			var n = t;
			switch (t = t.nextSibling, n.nodeName) {
				case "HTML":
				case "HEAD":
				case "BODY":
					om(n), kt(n);
					continue;
				case "SCRIPT":
				case "STYLE": continue;
				case "LINK": if (n.rel.toLowerCase() === "stylesheet") continue;
			}
			e.removeChild(n);
		}
	}
	function sm(e, t, n, r) {
		for (; e.nodeType === 1;) {
			var i = n;
			if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
			} else if (!r) {
				if (t === "input" && e.type === "hidden") {
					var a = i.name == null ? null : "" + i.name;
					if (i.type === "hidden" && e.getAttribute("name") === a) return e;
				} else return e;
			} else if (!e[Dt]) switch (t) {
				case "meta":
					if (!e.hasAttribute("itemprop")) break;
					return e;
				case "link":
					if (a = e.getAttribute("rel"), a === "stylesheet" && e.hasAttribute("data-precedence") || a !== i.rel || e.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title)) break;
					return e;
				case "style":
					if (e.hasAttribute("data-precedence")) break;
					return e;
				case "script":
					if (a = e.getAttribute("src"), (a !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && a && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
					return e;
				default: return e;
			}
			if (e = pm(e.nextSibling), e === null) break;
		}
		return null;
	}
	function cm(e, t, n) {
		if (t === "") return null;
		for (; e.nodeType !== 3;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = pm(e.nextSibling), e === null)) return null;
		return e;
	}
	function lm(e, t) {
		for (; e.nodeType !== 8;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = pm(e.nextSibling), e === null)) return null;
		return e;
	}
	function um(e) {
		return e.data === "$?" || e.data === "$~";
	}
	function dm(e) {
		return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
	}
	function fm(e, t) {
		var n = e.ownerDocument;
		if (e.data === "$~") e._reactRetry = t;
		else if (e.data !== "$?" || n.readyState !== "loading") t();
		else {
			var r = function() {
				t(), n.removeEventListener("DOMContentLoaded", r);
			};
			n.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
		}
	}
	function pm(e) {
		for (; e != null; e = e.nextSibling) {
			var t = e.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
				if (t === "/$" || t === "/&") return null;
			}
		}
		return e;
	}
	var mm = null;
	function hm(e) {
		e = e.nextSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "/$" || n === "/&") {
					if (t === 0) return pm(e.nextSibling);
					t--;
				} else n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
			}
			e = e.nextSibling;
		}
		return null;
	}
	function gm(e) {
		e = e.previousSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
					if (t === 0) return e;
					t--;
				} else n !== "/$" && n !== "/&" || t++;
			}
			e = e.previousSibling;
		}
		return null;
	}
	function _m(e, t) {
		function n() {
			r = !0;
		}
		if (e.ownerDocument.activeElement === e) return !0;
		var r = !1;
		try {
			e.ownerDocument.addEventListener("focus", n, !0), (e.focus || HTMLElement.prototype.focus).call(e, t);
		} finally {
			e.ownerDocument.removeEventListener("focus", n, !0);
		}
		return r;
	}
	function vm(e) {
		Cp(function() {
			Cp(function(t) {
				return e(t);
			});
		});
	}
	function ym(e, t, n) {
		switch (t = pp(n), e) {
			case "html":
				if (e = t.documentElement, !e) throw Error(i(452));
				return e;
			case "head":
				if (e = t.head, !e) throw Error(i(453));
				return e;
			case "body":
				if (e = t.body, !e) throw Error(i(454));
				return e;
			default: throw Error(i(451));
		}
	}
	function bm(e, t, n) {
		for (var r in n) {
			var i = n[r];
			n.hasOwnProperty(r) && i != null && ip(e, t, r, null, sp, i);
		}
		n.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === hn && (e.onclick = null), kt(e);
	}
	function xm(e) {
		for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
		kt(e);
	}
	var Sm = /* @__PURE__ */ new Map(), Cm = /* @__PURE__ */ new Set();
	function wm(e) {
		if (typeof e.getRootNode == "function") {
			var t = e.getRootNode();
			if (t.nodeType === 9 || t.nodeType === 11) return t;
		}
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	var Tm = F.d;
	F.d = {
		f: Em,
		r: Dm,
		D: Am,
		C: jm,
		L: Mm,
		m: Nm,
		X: Fm,
		S: Pm,
		M: Im
	};
	function Em() {
		var e = Tm.f(), t = Vd();
		return e || t;
	}
	function Dm(e) {
		var t = jt(e);
		t !== null && t.tag === 5 && t.type === "form" ? ec(t) : Tm.r(e);
	}
	var Om = typeof document > "u" ? null : document;
	function km(e, t, n) {
		var r = Om;
		if (r && typeof t == "string" && t) {
			var i = $t(t);
			i = "link[rel=\"" + e + "\"][href=\"" + i + "\"]", typeof n == "string" && (i += "[crossorigin=\"" + n + "\"]"), Cm.has(i) || (Cm.add(i), e = {
				rel: e,
				crossOrigin: n,
				href: t
			}, r.querySelector(i) === null && (t = r.createElement("link"), op(t, "link", e), Nt(t), r.head.appendChild(t)));
		}
	}
	function Am(e) {
		Tm.D(e), km("dns-prefetch", e, null);
	}
	function jm(e, t) {
		Tm.C(e, t), km("preconnect", e, t);
	}
	function Mm(e, t, n) {
		Tm.L(e, t, n);
		var r = Om;
		if (r && e && t) {
			var i = "link[rel=\"preload\"][as=\"" + $t(t) + "\"]";
			t === "image" && n && n.imageSrcSet ? (i += "[imagesrcset=\"" + $t(n.imageSrcSet) + "\"]", typeof n.imageSizes == "string" && (i += "[imagesizes=\"" + $t(n.imageSizes) + "\"]")) : i += "[href=\"" + $t(e) + "\"]";
			var a = i;
			switch (t) {
				case "style":
					a = Rm(e);
					break;
				case "script": a = Hm(e);
			}
			if (!(Sm.has(a) || (e = D({
				rel: "preload",
				href: t === "image" && n && n.imageSrcSet ? void 0 : e,
				as: t
			}, n), Sm.set(a, e), r.querySelector(i) !== null || t === "style" && r.querySelector(zm(a)) || t === "script" && r.querySelector(Um(a))))) {
				var o = r.createElement("link");
				op(o, "link", e), t === "style" && (o[Ot] = !0, o.onload = o.onerror = function() {
					Pt(o);
				}), Nt(o), r.head.appendChild(o);
			}
		}
	}
	function Nm(e, t) {
		Tm.m(e, t);
		var n = Om;
		if (n && e) {
			var r = t && typeof t.as == "string" ? t.as : "script", i = "link[rel=\"modulepreload\"][as=\"" + $t(r) + "\"][href=\"" + $t(e) + "\"]", a = i;
			switch (r) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script": a = Hm(e);
			}
			if (!Sm.has(a) && (e = D({
				rel: "modulepreload",
				href: e
			}, t), Sm.set(a, e), n.querySelector(i) === null)) {
				switch (r) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script": if (n.querySelector(Um(a))) return;
				}
				r = n.createElement("link"), op(r, "link", e), Nt(r), n.head.appendChild(r);
			}
		}
	}
	function Pm(e, t, n) {
		Tm.S(e, t, n);
		var r = Om;
		if (r && e) {
			var i = Mt(r).hoistableStyles, a = Rm(e);
			t ||= "default";
			var o = i.get(a);
			if (!o) {
				var s = {
					loading: 0,
					preload: null
				};
				if (o = r.querySelector(zm(a))) s.loading = 5;
				else {
					e = D({
						rel: "stylesheet",
						href: e,
						"data-precedence": t
					}, n), (n = Sm.get(a)) && Km(e, n);
					var c = o = r.createElement("link");
					Nt(c), op(c, "link", e), c._p = new Promise(function(e, t) {
						c.onload = e, c.onerror = t;
					}), c.addEventListener("load", function() {
						s.loading |= 1;
					}), c.addEventListener("error", function() {
						s.loading |= 2;
					}), s.loading |= 4, Gm(o, t, r);
				}
				o = {
					type: "stylesheet",
					instance: o,
					count: 1,
					state: s
				}, i.set(a, o);
			}
		}
	}
	function Fm(e, t) {
		Tm.X(e, t);
		var n = Om;
		if (n && e) {
			var r = Mt(n).hoistableScripts, i = Hm(e), a = r.get(i);
			a || (a = n.querySelector(Um(i)), a || (e = D({
				src: e,
				async: !0
			}, t), (t = Sm.get(i)) && qm(e, t), a = n.createElement("script"), Nt(a), op(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Im(e, t) {
		Tm.M(e, t);
		var n = Om;
		if (n && e) {
			var r = Mt(n).hoistableScripts, i = Hm(e), a = r.get(i);
			a || (a = n.querySelector(Um(i)), a || (e = D({
				src: e,
				async: !0,
				type: "module"
			}, t), (t = Sm.get(i)) && qm(e, t), a = n.createElement("script"), Nt(a), op(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Lm(e, t, n, r) {
		var a = (a = Ce.current) ? wm(a) : null;
		if (!a) throw Error(i(446));
		switch (e) {
			case "meta":
			case "title": return null;
			case "style": return typeof n.precedence == "string" && typeof n.href == "string" ? (n = Rm(n.href), t = Mt(a).hoistableStyles, r = t.get(n), r || (r = {
				type: "style",
				instance: null,
				count: 0,
				state: null
			}, t.set(n, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			case "link":
				if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
					e = Rm(n.href);
					var o = Mt(a).hoistableStyles, s = o.get(e);
					if (s || (a = a.ownerDocument || a, s = {
						type: "stylesheet",
						instance: null,
						count: 0,
						state: {
							loading: 0,
							preload: null
						}
					}, o.set(e, s), (o = a.querySelector(zm(e))) ? o._p || (s.instance = o, s.state.loading = 5) : (o = Sm.get(e), o || (o = {
						rel: "preload",
						as: "style",
						href: n.href,
						crossOrigin: n.crossOrigin,
						integrity: n.integrity,
						media: n.media,
						hrefLang: n.hrefLang,
						referrerPolicy: n.referrerPolicy
					}, Sm.set(e, o)), Vm(a, e, o, s.state))), t && r === null) throw Error(i(528, ""));
					return s;
				}
				if (t && r !== null) throw Error(i(529, ""));
				return null;
			case "script": return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (n = Hm(n), t = Mt(a).hoistableScripts, r = t.get(n), r || (r = {
				type: "script",
				instance: null,
				count: 0,
				state: null
			}, t.set(n, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			default: throw Error(i(444, e));
		}
	}
	function Rm(e) {
		return "href=\"" + $t(e) + "\"";
	}
	function zm(e) {
		return "link[rel=\"stylesheet\"][" + e + "]";
	}
	function Bm(e) {
		return D({}, e, {
			"data-precedence": e.precedence,
			precedence: null
		});
	}
	function Vm(e, t, n, r) {
		if (t = e.querySelector("link[rel=\"preload\"][as=\"style\"][" + t + "]")) {
			if (!0 !== t[Ot]) {
				r.loading = 1;
				return;
			}
		} else t = e.createElement("link"), t[Ot] = !0, t.onload = t.onerror = Pt.bind(null, t), op(t, "link", n), Nt(t), e.head.appendChild(t);
		r.preload = t, t.addEventListener("load", function() {
			return r.loading |= 1;
		}), t.addEventListener("error", function() {
			return r.loading |= 2;
		});
	}
	function Hm(e) {
		return "[src=\"" + $t(e) + "\"]";
	}
	function Um(e) {
		return "script[async]" + e;
	}
	function Wm(e, t, n) {
		if (t.count++, t.instance === null) switch (t.type) {
			case "style":
				var r = e.querySelector("style[data-href~=\"" + $t(n.href) + "\"]");
				if (r) return t.instance = r, Nt(r), r;
				var a = D({}, n, {
					"data-href": n.href,
					"data-precedence": n.precedence,
					href: null,
					precedence: null
				});
				return r = (e.ownerDocument || e).createElement("style"), Nt(r), op(r, "style", a), Gm(r, n.precedence, e), t.instance = r;
			case "stylesheet":
				a = Rm(n.href);
				var o = e.querySelector(zm(a));
				if (o) return t.state.loading |= 4, t.instance = o, Nt(o), o;
				r = Bm(n), (a = Sm.get(a)) && Km(r, a), o = (e.ownerDocument || e).createElement("link"), Nt(o);
				var s = o;
				return s._p = new Promise(function(e, t) {
					s.onload = e, s.onerror = t;
				}), op(o, "link", r), t.state.loading |= 4, Gm(o, n.precedence, e), t.instance = o;
			case "script": return o = Hm(n.src), (a = e.querySelector(Um(o))) ? (t.instance = a, Nt(a), a) : (r = n, (a = Sm.get(o)) && (r = D({}, n), qm(r, a)), e = e.ownerDocument || e, a = e.createElement("script"), Nt(a), op(a, "link", r), e.head.appendChild(a), t.instance = a);
			case "void": return null;
			default: throw Error(i(443, t.type));
		}
		else t.type === "stylesheet" && !(t.state.loading & 4) && (r = t.instance, t.state.loading |= 4, Gm(r, n.precedence, e));
		return t.instance;
	}
	function Gm(e, t, n) {
		for (var r = n.querySelectorAll("link[rel=\"stylesheet\"][data-precedence],style[data-precedence]"), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
			var s = r[o];
			if (s.dataset.precedence === t) a = s;
			else if (a !== i) break;
		}
		a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
	}
	function Km(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.title ??= t.title;
	}
	function qm(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.integrity ??= t.integrity;
	}
	var Jm = null;
	function Ym(e, t, n) {
		if (Jm === null) {
			var r = /* @__PURE__ */ new Map(), i = Jm = /* @__PURE__ */ new Map();
			i.set(n, r);
		} else i = Jm, r = i.get(n), r || (r = /* @__PURE__ */ new Map(), i.set(n, r));
		if (r.has(e)) return r;
		for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
			var a = n[i];
			if (!(a[Dt] || a[bt] || e === "link" && a.getAttribute("rel") === "stylesheet") && a.namespaceURI !== "http://www.w3.org/2000/svg") {
				var o = a.getAttribute(t) || "";
				o = e + o;
				var s = r.get(o);
				s ? s.push(a) : r.set(o, [a]);
			}
		}
		return r;
	}
	function Xm(e, t, n) {
		e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
	}
	function Zm(e, t, n) {
		if (n === 1 || t.itemProp != null) return !1;
		switch (e) {
			case "meta":
			case "title": return !0;
			case "style":
				if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
				return !0;
			case "link":
				if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
				switch (t.rel) {
					case "stylesheet": return e = t.disabled, typeof t.precedence == "string" && e == null;
					default: return !0;
				}
			case "script": if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0;
		}
		return !1;
	}
	function Qm(e, t) {
		return e === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
	}
	function $m(e) {
		return !(e.type === "stylesheet" && !(e.state.loading & 3));
	}
	function eh(e) {
		return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * .25;
	}
	function th(e, t) {
		typeof t.decode == "function" && (e.imgCount++, t.complete || (e.imgBytes += eh(t), e.suspenseyImages.push(t)), e = sh.bind(e), t.decode().then(e, e));
	}
	function nh(e, t, n, r) {
		if (n.type === "stylesheet" && (typeof r.media != "string" || !1 !== matchMedia(r.media).matches) && !(n.state.loading & 4)) {
			if (n.instance === null) {
				var i = Rm(r.href), a = t.querySelector(zm(i));
				if (a) {
					t = a._p, typeof t == "object" && t && typeof t.then == "function" && (e.count++, e = oh.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = a, Nt(a);
					return;
				}
				a = t.ownerDocument || t, r = Bm(r), (i = Sm.get(i)) && Km(r, i), a = a.createElement("link"), Nt(a);
				var o = a;
				o._p = new Promise(function(e, t) {
					o.onload = e, o.onerror = t;
				}), op(a, "link", r), n.instance = a;
			}
			e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && !(n.state.loading & 3) && (e.count++, n = oh.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
		}
	}
	var rh = 0;
	function ih(e, t) {
		return e.stylesheets && e.count === 0 && X(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
			var r = setTimeout(function() {
				if (e.stylesheets && X(e, e.stylesheets), e.unsuspend) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, 6e4 + t);
			0 < e.imgBytes && rh === 0 && (rh = 62500 * up());
			var i = setTimeout(function() {
				if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && X(e, e.stylesheets), e.unsuspend)) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, (e.imgBytes > rh ? 50 : 800) + t);
			return e.unsuspend = n, function() {
				e.unsuspend = null, clearTimeout(r), clearTimeout(i);
			};
		} : null;
	}
	function ah(e) {
		if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
			if (e.stylesheets) X(e, e.stylesheets);
			else if (e.unsuspend) {
				var t = e.unsuspend;
				e.unsuspend = null, t();
			}
		}
	}
	function oh() {
		this.count--, ah(this);
	}
	function sh() {
		this.imgCount--, ah(this);
	}
	var ch = null;
	function X(e, t) {
		e.stylesheets = null, e.unsuspend !== null && (e.count++, ch = /* @__PURE__ */ new Map(), t.forEach(lh, e), ch = null, oh.call(e));
	}
	function lh(e, t) {
		if (!(t.state.loading & 4)) {
			var n = ch.get(e);
			if (n) var r = n.get(null);
			else {
				n = /* @__PURE__ */ new Map(), ch.set(e, n);
				for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), a = 0; a < i.length; a++) {
					var o = i[a];
					(o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (n.set(o.dataset.precedence, o), r = o);
				}
				r && n.set(null, r);
			}
			i = t.instance, o = i.getAttribute("data-precedence"), a = n.get(o) || r, a === r && n.set(null, i), n.set(o, i), this.count++, r = oh.bind(this), i.addEventListener("load", r), i.addEventListener("error", r), a ? a.parentNode.insertBefore(i, a.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
		}
	}
	var uh = {
		$$typeof: M,
		Provider: null,
		Consumer: null,
		_currentValue: _e,
		_currentValue2: _e,
		_threadCount: 0
	};
	function dh(e, t, n, r, i, a, o, s, c) {
		this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = lt(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = lt(0), this.hiddenUpdates = lt(null), this.identifierPrefix = r, this.onUncaughtError = i, this.onCaughtError = a, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
	}
	function fh(e, t, n, r, i, a, o, s, c, l, u, d) {
		return e = new dh(e, t, n, o, c, l, u, d, s), t = 1, !0 === a && (t |= 24), a = ki(3, null, null, t), e.current = a, a.stateNode = e, t = Oa(), t.refCount++, e.pooledCache = t, t.refCount++, a.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: t
		}, uo(a), e;
	}
	function ph(e) {
		return e ? (e = Di, e) : Di;
	}
	function mh(e, t, n, r, i, a) {
		i = ph(i), r.context === null ? r.context = i : r.pendingContext = i, r = po(t), r.payload = { element: n }, a = a === void 0 ? null : a, a !== null && (r.callback = a), n = mo(e, r, t), n !== null && (Id(n, e, t), ho(n, e, t));
	}
	function hh(e, t) {
		if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
			var n = e.retryLane;
			e.retryLane = n !== 0 && n < t ? n : t;
		}
	}
	function gh(e, t) {
		hh(e, t), (e = e.alternate) && hh(e, t);
	}
	function _h(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = wi(e, 67108864);
			t !== null && Id(t, e, 67108864), gh(e, 67108864);
		}
	}
	function vh(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = Nd();
			t = ht(t);
			var n = wi(e, t);
			n !== null && Id(n, e, t), gh(e, t);
		}
	}
	var yh = !0;
	function bh(e, t, n, r) {
		var i = P.T;
		P.T = null;
		var a = F.p;
		try {
			F.p = 2, Sh(e, t, n, r);
		} finally {
			F.p = a, P.T = i;
		}
	}
	function xh(e, t, n, r) {
		var i = P.T;
		P.T = null;
		var a = F.p;
		try {
			F.p = 8, Sh(e, t, n, r);
		} finally {
			F.p = a, P.T = i;
		}
	}
	function Sh(e, t, n, r) {
		if (yh) {
			var i = Ch(r);
			if (i === null) Yf(e, t, r, wh, n), Fh(e, r);
			else if (Lh(i, e, t, n, r)) r.stopPropagation();
			else if (Fh(e, r), t & 4 && -1 < Ph.indexOf(e)) {
				for (; i !== null;) {
					var a = jt(i);
					if (a !== null) switch (a.tag) {
						case 3:
							if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
								var o = rt(a.pendingLanes);
								if (o !== 0) {
									var s = a;
									for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
										var c = 1 << 31 - Xe(o);
										s.entanglements[1] |= c, o &= ~c;
									}
									kf(a), !(K & 6) && (vd = Re() + 500, Af(0, !1));
								}
							}
							break;
						case 31:
						case 13: s = wi(a, 2), s !== null && Id(s, a, 2), Vd(), gh(a, 2);
					}
					if (a = Ch(r), a === null && Yf(e, t, r, wh, n), a === i) break;
					i = a;
				}
				i !== null && r.stopPropagation();
			} else Yf(e, t, r, null, n);
		}
	}
	function Ch(e) {
		return e = _n(e), Th(e);
	}
	var wh = null;
	function Th(e) {
		if (wh = null, e = At(e), e !== null) {
			var t = o(e);
			if (t === null) e = null;
			else {
				var n = t.tag;
				if (n === 13) {
					if (e = s(t), e !== null) return e;
					e = null;
				} else if (n === 31) {
					if (e = c(t), e !== null) return e;
					e = null;
				} else if (n === 3) {
					if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
					e = null;
				} else t !== e && (e = null);
			}
		}
		return wh = e, null;
	}
	function Eh(e) {
		switch (e) {
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
			case "selectstart": return 2;
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
			case "pointerleave": return 8;
			case "message": switch (ze()) {
				case Be: return 2;
				case Ve: return 8;
				case He:
				case Ue: return 32;
				case We: return 268435456;
				default: return 32;
			}
			default: return 32;
		}
	}
	var Dh = !1, Oh = null, kh = null, Ah = null, jh = /* @__PURE__ */ new Map(), Mh = /* @__PURE__ */ new Map(), Nh = [], Ph = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
	function Fh(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				Oh = null;
				break;
			case "dragenter":
			case "dragleave":
				kh = null;
				break;
			case "mouseover":
			case "mouseout":
				Ah = null;
				break;
			case "pointerover":
			case "pointerout":
				jh.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": Mh.delete(t.pointerId);
		}
	}
	function Ih(e, t, n, r, i, a) {
		return e === null || e.nativeEvent !== a ? (e = {
			blockedOn: t,
			domEventName: n,
			eventSystemFlags: r,
			nativeEvent: a,
			targetContainers: [i]
		}, t !== null && (t = jt(t), t !== null && _h(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
	}
	function Lh(e, t, n, r, i) {
		switch (t) {
			case "focusin": return Oh = Ih(Oh, e, t, n, r, i), !0;
			case "dragenter": return kh = Ih(kh, e, t, n, r, i), !0;
			case "mouseover": return Ah = Ih(Ah, e, t, n, r, i), !0;
			case "pointerover":
				var a = i.pointerId;
				return jh.set(a, Ih(jh.get(a) || null, e, t, n, r, i)), !0;
			case "gotpointercapture": return a = i.pointerId, Mh.set(a, Ih(Mh.get(a) || null, e, t, n, r, i)), !0;
		}
		return !1;
	}
	function Rh(e) {
		var t = At(e.target);
		if (t !== null) {
			var n = o(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = s(n), t !== null) {
						e.blockedOn = t, vt(e.priority, function() {
							vh(n);
						});
						return;
					}
				} else if (t === 31) {
					if (t = c(n), t !== null) {
						e.blockedOn = t, vt(e.priority, function() {
							vh(n);
						});
						return;
					}
				} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
					e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
					return;
				}
			}
		}
		e.blockedOn = null;
	}
	function zh(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length;) {
			var n = Ch(e.nativeEvent);
			if (n === null) {
				n = e.nativeEvent;
				var r = new n.constructor(n.type, n);
				gn = r, n.target.dispatchEvent(r), gn = null;
			} else return t = jt(n), t !== null && _h(t), e.blockedOn = n, !1;
			t.shift();
		}
		return !0;
	}
	function Bh(e, t, n) {
		zh(e) && n.delete(t);
	}
	function Vh() {
		Dh = !1, Oh !== null && zh(Oh) && (Oh = null), kh !== null && zh(kh) && (kh = null), Ah !== null && zh(Ah) && (Ah = null), jh.forEach(Bh), Mh.forEach(Bh);
	}
	function Hh(e, n) {
		e.blockedOn === n && (e.blockedOn = null, Dh || (Dh = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, Vh)));
	}
	var Uh = null;
	function Wh(e) {
		Uh !== e && (Uh = e, t.unstable_scheduleCallback(t.unstable_NormalPriority, function() {
			Uh === e && (Uh = null);
			for (var t = 0; t < e.length; t += 3) {
				var n = e[t], r = e[t + 1], i = e[t + 2];
				if (typeof r != "function") {
					if (Th(r || n) === null) continue;
					break;
				}
				var a = jt(n);
				a !== null && (e.splice(t, 3), t -= 3, Qs(a, {
					pending: !0,
					data: i,
					method: n.method,
					action: r
				}, r, i));
			}
		}));
	}
	function Gh(e) {
		function t(t) {
			return Hh(t, e);
		}
		Oh !== null && Hh(Oh, e), kh !== null && Hh(kh, e), Ah !== null && Hh(Ah, e), jh.forEach(t), Mh.forEach(t);
		for (var n = 0; n < Nh.length; n++) {
			var r = Nh[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
		for (; 0 < Nh.length && (n = Nh[0], n.blockedOn === null);) Rh(n), n.blockedOn === null && Nh.shift();
		if (n = (e.ownerDocument || e).$$reactFormReplay, n != null) for (r = 0; r < n.length; r += 3) {
			var i = n[r], a = n[r + 1], o = i[xt] || null;
			if (typeof a == "function") o || Wh(n);
			else if (o) {
				var s = null;
				if (a && a.hasAttribute("formAction")) {
					if (i = a, o = a[xt] || null) s = o.formAction;
					else if (Th(i) !== null) continue;
				} else s = o.action;
				typeof s == "function" ? n[r + 1] = s : (n.splice(r, 3), r -= 3), Wh(n);
			}
		}
	}
	function Kh() {
		function e(e) {
			e.canIntercept && e.info === "react-transition" && e.intercept({
				handler: function() {
					return new Promise(function(e) {
						return i = e;
					});
				},
				focusReset: "manual",
				scroll: "manual"
			});
		}
		function t() {
			i !== null && (i(), i = null), r || setTimeout(n, 20);
		}
		function n() {
			if (!r && !navigation.transition) {
				var e = navigation.currentEntry;
				e && e.url != null && navigation.navigate(e.url, {
					state: e.getState(),
					info: "react-transition",
					history: "replace"
				});
			}
		}
		if (typeof navigation == "object") {
			var r = !1, i = null;
			return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
				r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), i !== null && (i(), i = null);
			};
		}
	}
	function qh(e) {
		this._internalRoot = e;
	}
	Jh.prototype.render = qh.prototype.render = function(e) {
		var t = this._internalRoot;
		if (t === null) throw Error(i(409));
		var n = t.current;
		mh(n, Nd(), e, t, null, null);
	}, Jh.prototype.unmount = qh.prototype.unmount = function() {
		var e = this._internalRoot;
		if (e !== null) {
			this._internalRoot = null;
			var t = e.containerInfo;
			mh(e.current, 2, null, e, null, null), Vd(), t[St] = null;
		}
	};
	function Jh(e) {
		this._internalRoot = e;
	}
	Jh.prototype.unstable_scheduleHydration = function(e) {
		if (e) {
			var t = _t();
			e = {
				blockedOn: null,
				target: e,
				priority: t
			};
			for (var n = 0; n < Nh.length && t !== 0 && t < Nh[n].priority; n++);
			Nh.splice(n, 0, e), n === 0 && Rh(e);
		}
	};
	var Yh = n.version;
	if (Yh !== "19.3.1") throw Error(i(527, Yh, "19.3.1"));
	F.findDOMNode = function(e) {
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
		return e = d(t), e = e === null ? null : p(e), e = e === null ? null : e.stateNode, e;
	};
	var Xh = {
		bundleType: 0,
		version: "19.3.1",
		rendererPackageName: "react-dom",
		currentDispatcherRef: P,
		reconcilerVersion: "19.3.1"
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var Zh = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!Zh.isDisabled && Zh.supportsFiber) try {
			qe = Zh.inject(Xh), Je = Zh;
		} catch {}
	}
	e.createRoot = function(e, t) {
		if (!a(e)) throw Error(i(299));
		var n = !1, r = "", o = xc, s = Sc, c = Cc;
		return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = fh(e, 1, !1, null, null, n, r, null, o, s, c, Kh), e[St] = t.current, qf(e), new qh(t);
	};
})), g = /* @__PURE__ */ o(((e, t) => {
	function n() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = h();
}));
// node_modules/react-aria/dist/private/utils/chain.mjs
function _(...e) {
	return (...t) => {
		for (let n of e) typeof n == "function" && n(...t);
	};
}
// node_modules/react-aria/dist/private/utils/useLayoutEffect.mjs
var v = /* @__PURE__ */ c(u(), 1), y = typeof document < "u" ? v.useLayoutEffect : () => {}, b = {
	prefix: String(Math.round(Math.random() * 1e10)),
	current: 0
}, x = /*#__PURE__*/ v.createContext(b), S = /*#__PURE__*/ v.createContext(!1);
typeof window < "u" && window.document && window.document.createElement;
var C = /* @__PURE__ */ new WeakMap();
function w(e = !1) {
	let t = (0, v.useContext)(x), n = (0, v.useRef)(null);
	if (n.current === null && !e) {
		let e = v.default.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?.ReactCurrentOwner?.current;
		if (e) {
			let n = C.get(e);
			n == null ? C.set(e, {
				id: t.current,
				state: e.memoizedState
			}) : e.memoizedState !== n.state && (t.current = n.id, C.delete(e));
		}
		n.current = ++t.current;
	}
	return n.current;
}
function T(e) {
	let t = (0, v.useContext)(x), n = w(!!e), r = `react-aria${t.prefix}`;
	return e || `${r}-${n}`;
}
function E(e) {
	let t = v.useId(), [n] = (0, v.useState)(A()), r = n ? "react-aria" : `react-aria${b.prefix}`;
	return e || `${r}-${t}`;
}
var D = typeof v.useId == "function" ? E : T;
function O() {
	return !1;
}
function k() {
	return !0;
}
function ee(e) {
	return () => {};
}
function A() {
	return typeof v.useSyncExternalStore == "function" ? v.useSyncExternalStore(ee, O, k) : (0, v.useContext)(S);
}
// node_modules/react-aria/dist/private/utils/useValueEffect.mjs
function j(e) {
	let [t, n] = (0, v.useState)(e), r = (0, v.useRef)(t), i = (0, v.useRef)(null), a = (0, v.useRef)(() => {
		if (!i.current) return;
		let e = i.current.next();
		e.done ? i.current = null : r.current === e.value ? a.current() : n(e.value);
	});
	return y(() => {
		r.current = t, i.current && a.current();
	}), [t, (0, v.useCallback)((e) => {
		i.current = e(r.current), a.current();
	}, [a])];
}
// node_modules/react-aria/dist/private/utils/useId.mjs
var te = !!(typeof window < "u" && window.document && window.document.createElement), ne = /* @__PURE__ */ new Map(), M;
typeof FinalizationRegistry < "u" && (M = new FinalizationRegistry((e) => {
	ne.delete(e);
}));
var N = /* @__PURE__ */ new WeakMap();
function re(e) {
	let [t, n] = (0, v.useState)(e), r = (0, v.useRef)(null), i = D(t), a = (0, v.useRef)(null), o = N.get(a);
	if (M && o !== i && (o != null && M.unregister(a), M.register(a, i, a), N.set(a, i)), te) {
		let e = ne.get(i);
		e && !e.includes(r) ? e.push(r) : ne.set(i, [r]);
	}
	return y(() => {
		let e = i;
		return () => {
			M && (M.unregister(a), N.delete(a)), ne.delete(e);
		};
	}, [i]), (0, v.useEffect)(() => {
		let e = r.current;
		return e && n(e), () => {
			e && (r.current = null);
		};
	}), i;
}
function ie(e, t) {
	if (e === t) return e;
	let n = ne.get(e);
	if (n) return n.forEach((e) => e.current = t), t;
	let r = ne.get(t);
	return r ? (r.forEach((t) => t.current = e), e) : t;
}
function ae(e = []) {
	let t = re(), [n, r] = j(t), i = (0, v.useCallback)(() => {
		r(function* () {
			yield t, yield document.getElementById(t) ? t : void 0;
		});
	}, [t, r]);
	return y(i, [
		t,
		i,
		...e
	]), n;
}
// node_modules/react-aria/dist/private/utils/mergeRefs.mjs
function oe(...e) {
	return e.length === 1 && e[0] ? e[0] : (t) => {
		let n = !1, r = e.map((e) => {
			let r = se(e, t);
			return n ||= typeof r == "function", r;
		});
		if (n) return () => {
			r.forEach((t, n) => {
				typeof t == "function" ? t() : se(e[n], null);
			});
		};
	};
}
function se(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
// node_modules/clsx/dist/clsx.mjs
function ce(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") {
		if (Array.isArray(e)) {
			var i = e.length;
			for (t = 0; t < i; t++) e[t] && (n = ce(e[t])) && (r && (r += " "), r += n);
		} else for (n in e) e[n] && (r && (r += " "), r += n);
	}
	return r;
}
function le() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = ce(e)) && (r && (r += " "), r += t);
	return r;
}
// node_modules/react-aria/dist/private/utils/mergeProps.mjs
function ue(...e) {
	let t = { ...e[0] };
	for (let n = 1; n < e.length; n++) {
		let r = e[n];
		for (let e in r) {
			let n = t[e], i = r[e];
			typeof n == "function" && typeof i == "function" && e[0] === "o" && e[1] === "n" && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = _(n, i) : (e === "className" || e === "UNSAFE_className") && typeof n == "string" && typeof i == "string" ? t[e] = le(n, i) : e === "id" && n && i ? t.id = ie(n, i) : e === "ref" && n && i ? t.ref = oe(n, i) : t[e] = i === void 0 ? n : i;
		}
	}
	return t;
}
// node_modules/react-aria/dist/private/utils/useObjectRef.mjs
function de(e) {
	let t = (0, v.useRef)(null), n = (0, v.useRef)(void 0), r = (0, v.useCallback)((t) => {
		if (typeof e == "function") {
			let n = e, r = n(t);
			return () => {
				typeof r == "function" ? r() : n(null);
			};
		}
		if (e) return e.current = t, () => {
			e.current = null;
		};
	}, [e]);
	return (0, v.useMemo)(() => ({
		get current() {
			return t.current;
		},
		set current(e) {
			t.current = e, n.current &&= (n.current(), void 0), e != null && (n.current = r(e));
		}
	}), [r]);
}
// node_modules/react-aria-components/dist/private/utils.mjs
var fe = Symbol("default");
function pe({ values: e, children: t }) {
	for (let [n, r] of e) t = /*#__PURE__*/ v.createElement(n.Provider, { value: r }, t);
	return t;
}
function me(e) {
	let { className: t, style: n, children: r, defaultClassName: i, defaultChildren: a, defaultStyle: o, values: s, render: c } = e;
	return (0, v.useMemo)(() => {
		let e, l, u;
		return e = typeof t == "function" ? t({
			...s,
			defaultClassName: i
		}) : t, l = typeof n == "function" ? n({
			...s,
			defaultStyle: o || {}
		}) : n, u = typeof r == "function" ? r({
			...s,
			defaultChildren: a
		}) : r ?? a, {
			className: e ?? i,
			style: l || o ? {
				...o,
				...l
			} : void 0,
			children: u ?? a,
			"data-rac": "",
			render: c ? (e) => c(e, s) : void 0
		};
	}, [
		t,
		n,
		r,
		i,
		a,
		o,
		s,
		c
	]);
}
function he(e, t) {
	return (n) => t(typeof e == "function" ? e(n) : e, n);
}
function ge(e, t) {
	let n = (0, v.useContext)(e);
	if (t === null) return null;
	if (n && typeof n == "object" && "slots" in n && n.slots) {
		let e = t || fe;
		if (!n.slots[e]) {
			let e = new Intl.ListFormat().format(Object.keys(n.slots).map((e) => `"${e}"`)), r = t ? `Invalid slot "${t}".` : "A slot prop is required.";
			throw Error(`${r} Valid slot names are ${e}.`);
		}
		return n.slots[e];
	}
	return n;
}
function P(e, t, n) {
	let { ref: r, ...i } = ge(n, e.slot) || {}, a = de((0, v.useMemo)(() => oe(t, r), [t, r])), o = ue(i, e);
	return "style" in i && i.style && "style" in e && e.style && (o.style = typeof i.style == "function" || typeof e.style == "function" ? (t) => {
		let n = typeof i.style == "function" ? i.style(t) : i.style, r = {
			...t.defaultStyle,
			...n
		}, a = typeof e.style == "function" ? e.style({
			...t,
			defaultStyle: r
		}) : e.style;
		return {
			...r,
			...a
		};
	} : {
		...i.style,
		...e.style
	}), [o, a];
}
function F(e = !0) {
	let [t, n] = (0, v.useState)(e), r = (0, v.useRef)(!1), i = (0, v.useCallback)((e) => {
		r.current = !0, n(!!e);
	}, []);
	return y(() => {
		r.current || n(!1);
	}, []), [i, t];
}
function _e(e) {
	let t = /^(data-.*)$/, n = {};
	for (let r in e) t.test(r) || (n[r] = e[r]);
	return n;
}
function ve(e, t, n) {
	let { render: r, ...i } = t, a = (0, v.useRef)(null), o = (0, v.useMemo)(() => oe(n, a), [n, a]);
	y(() => {}, [e, r]);
	let s = {
		...i,
		ref: o
	};
	return r ? r(s, void 0) : /*#__PURE__*/ v.createElement(e, s);
}
var ye = {}, be = new Proxy({}, { get(e, t) {
	if (typeof t != "string") return;
	let n = ye[t];
	return n || (n = /*#__PURE__*/ (0, v.forwardRef)(ve.bind(null, t)), ye[t] = n), n;
} }), I = (e) => Se(e) ? e.document : Ce(e) ? e : e?.ownerDocument ?? (typeof document < "u" ? document : void 0), L = (e) => I(e)?.defaultView ?? (typeof window < "u" ? window : void 0);
function xe(e) {
	return typeof e == "object" && !!e && "nodeType" in e && typeof e.nodeType == "number";
}
function Se(e) {
	return typeof e == "object" && !!e && "window" in e && e.window === e;
}
function Ce(e) {
	return xe(e) && e.nodeType === 9;
}
function we(e) {
	return xe(e) && e.nodeType === 11 && "host" in e;
}
function Te(e, t, n, r) {
	if (n == null || e == null) return () => {};
	let i = Array.isArray(e) ? e : [e];
	for (let e of i) e.addEventListener(t, n, r);
	return () => {
		for (let e of i) e.removeEventListener(t, n, r);
	};
}
function Ee(e, t, n, r) {
	if (e == null) return () => {};
	let i = [], a = Array.isArray(e) ? e : [e];
	for (let e of a) {
		let a = e.style.getPropertyValue(t), o = e.style.getPropertyPriority(t);
		e.style.setProperty(t, n, r), i.unshift(() => {
			a ? e.style.setProperty(t, a, o) : e.style.removeProperty(t);
		});
	}
	return () => {
		for (let e of i) e();
	};
}
// node_modules/react-stately/dist/private/flags/flags.mjs
var De = !1;
function Oe() {
	return De;
}
// node_modules/react-aria/dist/private/utils/shadowdom/DOMFunctions.mjs
function R(e, t) {
	if (!Oe()) return t && e ? e.contains(t) : !1;
	if (!e || !t) return !1;
	let n = t;
	for (; n != null;) {
		if (n === e) return !0;
		n = typeof n.assignedElements != "function" && n.assignedSlot?.parentNode ? n.assignedSlot.parentNode : we(n) ? n.host : n.parentNode;
	}
	return !1;
}
var z = (e = document) => {
	if (!Oe()) return e.activeElement;
	let t = e.activeElement;
	for (; t && "shadowRoot" in t && t.shadowRoot?.activeElement;) t = t.shadowRoot.activeElement;
	return t;
};
function B(e) {
	if (Oe() && e.target instanceof Element && e.target.shadowRoot) {
		if ("composedPath" in e) return e.composedPath()[0] ?? null;
		if ("composedPath" in e.nativeEvent) return e.nativeEvent.composedPath()[0] ?? null;
	}
	return e.target;
}
function ke(e, t) {
	if (t === null) return [];
	t ??= L(e);
	let n = [t];
	if (!Oe() || !e || e === t) return n;
	let r = "getRootNode" in t ? t.getRootNode() : null, i = e.getRootNode() ?? null;
	for (; we(i) && i !== r;) n.push(i), i = i.host.getRootNode();
	return n;
}
function Ae(e) {
	if (!e) return !1;
	let t = e.getRootNode(), n = L(e);
	if (!(t instanceof n.Document || t instanceof n.ShadowRoot)) return !1;
	let r = t.activeElement;
	return r != null && e.contains(r);
}
// node_modules/react-aria/dist/private/utils/focusWithoutScrolling.mjs
function je(e) {
	e.focus({ preventScroll: !0 });
}
// node_modules/react-aria/dist/private/utils/isElementVisible.mjs
var Me = typeof Element < "u" && "checkVisibility" in Element.prototype;
function Ne(e) {
	let t = L(e);
	if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
	let { display: n, visibility: r } = e.style, i = n !== "none" && r !== "hidden" && r !== "collapse";
	if (i) {
		let { getComputedStyle: t } = L(e), { display: n, visibility: r } = t(e);
		i = n !== "none" && r !== "hidden" && r !== "collapse";
	}
	return i;
}
function Pe(e, t) {
	return !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function Fe(e, t) {
	return Me ? e.checkVisibility({ visibilityProperty: !0 }) && !e.closest("[data-react-aria-prevent-focus]") : e.nodeName !== "#comment" && Ne(e) && Pe(e, t) && (!e.parentElement || Fe(e.parentElement, e));
}
// node_modules/react-aria/dist/private/utils/isFocusable.mjs
var Ie = [
	"input:not([disabled]):not([type=hidden])",
	"select:not([disabled])",
	"textarea:not([disabled])",
	"button:not([disabled])",
	"a[href]",
	"area[href]",
	"summary",
	"iframe",
	"object",
	"embed",
	"audio[controls]",
	"video[controls]",
	"[contenteditable]:not([contenteditable^=\"false\"])",
	"permission"
], Le = Ie.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
Ie.push("[tabindex]:not([tabindex=\"-1\"]):not([disabled])");
var Re = Ie.join(":not([hidden]):not([tabindex=\"-1\"]),");
function ze(e, t) {
	return e.matches(Le) && !Ve(e) && (t?.skipVisibilityCheck || Fe(e));
}
function Be(e) {
	return e.matches(Re) && Fe(e) && !Ve(e);
}
function Ve(e) {
	let t = e;
	for (; t != null;) {
		if (t instanceof L(t).HTMLElement && t.inert) return !0;
		t = t.parentElement;
	}
	return !1;
}
// node_modules/react-aria/dist/private/interactions/utils.mjs
function He(e) {
	let t = e;
	return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t;
}
function Ue(e, t) {
	Object.defineProperty(e, "target", { value: t }), Object.defineProperty(e, "currentTarget", { value: t });
}
function We(e) {
	let t = (0, v.useRef)({
		isFocused: !1,
		observer: null
	});
	return y(() => {
		let e = t.current;
		return () => {
			e.observer &&= (e.observer.disconnect(), null);
		};
	}, []), (0, v.useCallback)((n) => {
		let r = B(n);
		if (r instanceof HTMLButtonElement || r instanceof HTMLInputElement || r instanceof HTMLTextAreaElement || r instanceof HTMLSelectElement) {
			t.current.isFocused = !0;
			let n = r;
			n.addEventListener("focusout", (r) => {
				if (t.current.isFocused = !1, n.disabled) {
					let t = He(r);
					e?.(t);
				}
				t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
			}, { once: !0 }), t.current.observer = new MutationObserver(() => {
				if (t.current.isFocused && n.disabled) {
					t.current.observer?.disconnect();
					let e = n === z() ? null : z();
					n.dispatchEvent(new FocusEvent("blur", { relatedTarget: e })), n.dispatchEvent(new FocusEvent("focusout", {
						bubbles: !0,
						relatedTarget: e
					}));
				}
			}), t.current.observer.observe(n, {
				attributes: !0,
				attributeFilter: ["disabled"]
			});
		}
	}, [e]);
}
var Ge = !1;
function Ke(e) {
	for (; e && !ze(e, { skipVisibilityCheck: !0 });) e = e.parentElement;
	let t = z(L(e).document);
	if (!t || t === e) return;
	let n = e?.getRootNode(), r = n != null && we(n) ? n : L(e), i = (t) => t === e || xe(t) && R(e, t), a = (e) => e === t || t != null && xe(e) && R(t, e);
	Ge = !0;
	let o = !1, s = (e) => {
		(a(B(e)) || o) && e.stopImmediatePropagation();
	}, c = (n) => {
		(a(B(n)) || o) && (n.stopImmediatePropagation(), !e && !o && (o = !0, je(t), d()));
	}, l = (e) => {
		(i(B(e)) || o) && e.stopImmediatePropagation();
	}, u = (e) => {
		(i(B(e)) || o) && (e.stopImmediatePropagation(), o || (o = !0, je(t), d()));
	};
	r.addEventListener("blur", s, !0), r.addEventListener("focusout", c, !0), r.addEventListener("focusin", u, !0), r.addEventListener("focus", l, !0);
	let d = () => {
		cancelAnimationFrame(f), r.removeEventListener("blur", s, !0), r.removeEventListener("focusout", c, !0), r.removeEventListener("focusin", u, !0), r.removeEventListener("focus", l, !0), Ge = !1, o = !1;
	}, f = requestAnimationFrame(d);
	return d;
}
// node_modules/react-aria/dist/private/utils/platform.mjs
function qe(e) {
	if (typeof window > "u" || window.navigator == null) return !1;
	let t = window.navigator.userAgentData?.brands;
	return Array.isArray(t) && t.some((t) => e.test(t.brand)) || e.test(window.navigator.userAgent);
}
function Je(e) {
	return typeof window < "u" && window.navigator != null && e.test(window.navigator.userAgentData?.platform || window.navigator.platform);
}
function Ye(e) {
	let t = null;
	return () => (t ??= e(), t);
}
var Xe = Ye(function() {
	return Je(/^Mac/i);
}), Ze = Ye(function() {
	return Je(/^iPhone/i);
}), Qe = Ye(function() {
	return Je(/^iPad/i) || Xe() && navigator.maxTouchPoints > 1;
}), $e = Ye(function() {
	return Ze() || Qe();
}), et = Ye(function() {
	return qe(/AppleWebKit/i) && ($e() || !tt());
}), tt = Ye(function() {
	return qe(/Chrome|CriOS|CrMo/i);
}), nt = Ye(function() {
	return qe(/Android/i);
});
// node_modules/react-aria/dist/private/utils/isVirtualEvent.mjs
function rt(e) {
	return e.pointerType === "" && e.isTrusted ? !0 : nt() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function it(e) {
	return !nt() && e.width === 0 && e.height === 0 || nt() && e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
// node_modules/react-aria/dist/private/utils/openLink.mjs
function at(e, t, n = !0) {
	let { metaKey: r, ctrlKey: i, altKey: a, shiftKey: o } = t, s = et() && Xe() && !Qe() ? new KeyboardEvent("keydown", {
		keyIdentifier: "Enter",
		metaKey: r,
		ctrlKey: i,
		altKey: a,
		shiftKey: o
	}) : new MouseEvent("click", {
		metaKey: r,
		ctrlKey: i,
		altKey: a,
		shiftKey: o,
		detail: 1,
		bubbles: !0,
		cancelable: !0
	});
	at.isOpening = n, je(e), e.dispatchEvent(s), at.isOpening = !1;
}
at.isOpening = !1;
// node_modules/react-aria/dist/private/interactions/useFocusVisible.mjs
var ot = null, st = /* @__PURE__ */ new Set(), ct = /* @__PURE__ */ new Map(), lt = !1, ut = !1, dt = {
	Tab: !0,
	Escape: !0
};
function ft(e, t) {
	for (let n of st) n(e, t);
}
function pt(e) {
	return !(e.metaKey || !Xe() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function mt(e) {
	lt = !0, !at.isOpening && pt(e) && (ot = "keyboard", ft("keyboard", e));
}
function ht(e) {
	ot = "pointer", "pointerType" in e && e.pointerType, (e.type === "mousedown" || e.type === "pointerdown") && (lt = !0, ft("pointer", e));
}
function gt(e) {
	!at.isOpening && rt(e) && (lt = !0, ot = "virtual");
}
function _t(e) {
	if (Ge) return;
	let t = B(e), n = L(t), r = I(t);
	t === n ? ut = !0 : t !== r && e.isTrusted && (!lt && !ut && (ot = "virtual", ft("virtual", e)), lt = !1, ut = !1);
}
function vt() {
	Ge || (lt = !1, ut = !0);
}
function yt(e) {
	let t = z(I(B(e)));
	queueMicrotask(() => {
		z(I(B(e))) !== t && Tt("keyboard");
	});
}
function bt(e) {
	if (typeof window > "u" || typeof document > "u") return;
	let t = L(e), n = I(e);
	if (ct.get(t)) return;
	let r = t.HTMLElement.prototype.focus;
	Reflect.defineProperty(t.HTMLElement.prototype, "focus", {
		configurable: !0,
		writable: !0,
		value: function() {
			lt = !0, r.apply(this, arguments);
		}
	}), n.addEventListener("keydown", mt, !0), n.addEventListener("keyup", mt, !0), n.addEventListener("click", gt, !0), n.addEventListener("invalid", yt, !0), t.addEventListener("focus", _t, !0), t.addEventListener("blur", vt, !1), typeof PointerEvent < "u" && (n.addEventListener("pointerdown", ht, !0), n.addEventListener("pointermove", ht, !0), n.addEventListener("pointerup", ht, !0)), t.addEventListener("beforeunload", () => {
		xt(e);
	}, { once: !0 }), ct.set(t, { focus: r });
}
var xt = (e, t) => {
	let n = L(e), r = I(e);
	t && r.removeEventListener("DOMContentLoaded", t), ct.has(n) && (Reflect.defineProperty(n.HTMLElement.prototype, "focus", {
		configurable: !0,
		writable: !0,
		value: ct.get(n).focus
	}), r.removeEventListener("keydown", mt, !0), r.removeEventListener("keyup", mt, !0), r.removeEventListener("click", gt, !0), r.removeEventListener("invalid", yt, !0), n.removeEventListener("focus", _t, !0), n.removeEventListener("blur", vt, !1), typeof PointerEvent < "u" && (r.removeEventListener("pointerdown", ht, !0), r.removeEventListener("pointermove", ht, !0), r.removeEventListener("pointerup", ht, !0)), ct.delete(n));
};
function St(e) {
	let t = I(e), n;
	return t.readyState === "loading" ? (n = () => {
		bt(e);
	}, t.addEventListener("DOMContentLoaded", n)) : bt(e), () => xt(e, n);
}
typeof document < "u" && St();
function Ct() {
	return ot !== "pointer";
}
function wt() {
	return ot;
}
function Tt(e) {
	ot = e, ft(e, null);
}
var Et = /* @__PURE__ */ new Set([
	"checkbox",
	"radio",
	"range",
	"color",
	"file",
	"image",
	"button",
	"submit",
	"reset"
]);
function Dt(e, t, n) {
	let r = n ? B(n) : void 0, i = I(r), a = L(r), o = a === void 0 ? HTMLInputElement : a.HTMLInputElement, s = a === void 0 ? HTMLTextAreaElement : a.HTMLTextAreaElement, c = a === void 0 ? HTMLElement : a.HTMLElement, l = a === void 0 ? KeyboardEvent : a.KeyboardEvent, u = z(i);
	return e = e || u instanceof o && !Et.has(u.type) || u instanceof s || u instanceof c && u.isContentEditable, !(e && t === "keyboard" && n instanceof l && !dt[n.key]);
}
function Ot(e, t, n) {
	bt(), (0, v.useEffect)(() => {
		if (n?.enabled === !1) return;
		let t = (t, r) => {
			Dt(!!n?.isTextInput, t, r) && e(Ct());
		};
		return st.add(t), () => {
			st.delete(t);
		};
	}, t);
}
// node_modules/react-aria/dist/private/utils/getMetaValue.mjs
function kt(e, t) {
	let n = L(t), r = I(t);
	if (r == null || n == null) return;
	let i, a = `meta[name="${CSS.escape(e)}"], meta[property="${CSS.escape(e)}"]`, o = r.querySelector(a);
	return o && o instanceof n.HTMLMetaElement && (e === "csp-nonce" && o.nonce && (i ??= o.nonce || void 0), o.content && (i ??= o.content || void 0)), e === "csp-nonce" && (i ??= n.__webpack_nonce__ || globalThis.__webpack_nonce__ || void 0), i;
}
// node_modules/react-aria/dist/private/utils/keyboard.mjs
var At = 100, jt = 600, V = {
	isOpen: !1,
	screenWidth: 0,
	screenHeight: 0,
	screenAngle: 0,
	screenTimeout: 0,
	startTimeStamp: 0,
	endTimeStamp: 0,
	resizeTimeStamp: 0,
	resizeTimeout: 0
}, Mt = /* @__PURE__ */ new Set([
	"checkbox",
	"radio",
	"range",
	"color",
	"file",
	"image",
	"button",
	"submit",
	"reset"
]);
function Nt() {
	let e = Number(window.visualViewport?.width ?? window.innerWidth), t = Number(window.visualViewport?.height ?? window.innerHeight), n = Number(window.visualViewport?.scale ?? 1);
	return {
		width: e * n,
		height: t * n,
		angle: window.screen.orientation?.angle ?? 0
	};
}
function Pt(e) {
	V.resizeTimeStamp <= e.timeStamp + 50 && (V.resizeTimeStamp = e.timeStamp + 150, window.clearTimeout(V.resizeTimeout), V.resizeTimeout = window.setTimeout(Ft, 150));
}
function Ft() {
	let e = kt("viewport");
	if (nt() && e?.includes("overlays-content")) return;
	let t = performance.now(), n = Nt(), r = t - V.startTimeStamp, i = V.screenHeight - n.height, a = V.screenAngle - n.angle;
	Math.abs(a) % 180 && V.screenWidth - n.height < At && (V.screenWidth = n.width, V.screenHeight = n.height, V.screenAngle = n.angle, i = 0), r > jt && (window.clearTimeout(V.screenTimeout), V.screenTimeout = window.setTimeout(() => {
		let e = Bt(document.hasFocus() ? z() : null), t = Nt();
		Math.abs(V.screenAngle - t.angle) % 180 || V.isOpen && e || (V.screenWidth = t.width, V.screenHeight = t.height, V.screenAngle = t.angle, V.isOpen = !1);
	}, jt)), r <= jt && i >= At && (V.endTimeStamp = t), V.isOpen = i >= At;
}
function It() {
	let e = Nt(), t = V.screenAngle - e.angle;
	if (Math.abs(t) % 180 && !V.isOpen) {
		let e = V.screenWidth;
		V.screenWidth = V.screenHeight, V.screenHeight = e;
	}
	V.isOpen || (V.screenAngle = e.angle);
}
function Lt(e) {
	let t = Bt(B(e)), n = performance.now(), r = Nt(), i = V.screenHeight - r.height;
	i < At && t && (V.screenWidth = r.width, V.screenHeight = r.height, V.screenAngle = r.angle, V.startTimeStamp = n), t && window.clearTimeout(V.screenTimeout), i >= At && t && (V.endTimeStamp = n);
}
function Rt() {
	let e = Nt();
	Te(window.visualViewport, "resize", et() ? Ft : Pt), Te(window.screen.orientation, "change", It), Te(window, "focus", Lt, {
		capture: !0,
		passive: !0
	}), V.screenWidth = e.width, V.screenHeight = e.height, V.screenAngle = e.angle;
}
typeof document < "u" && (document.readyState === "loading" ? Te(document, "DOMContentLoaded", Rt) : Rt());
function zt() {
	let e = kt("viewport");
	return nt() && e?.includes("overlays-content") ? !1 : V.isOpen ? !0 : V.startTimeStamp ? V.endTimeStamp >= V.startTimeStamp ? !0 : performance.now() - V.startTimeStamp <= jt ? V.endTimeStamp > 0 || window.navigator.maxTouchPoints > 0 : !1 : window.navigator.maxTouchPoints > 0;
}
function Bt(e) {
	if (!(e instanceof Element) || !ze(e)) return !1;
	let t = e instanceof HTMLTextAreaElement, n = e instanceof HTMLElement && e.isContentEditable, r = e instanceof HTMLInputElement && !Mt.has(e.type);
	return t || n || r;
}
function Vt() {
	return V.isOpen;
}
// node_modules/react-aria/dist/private/utils/useEffectEvent.mjs
var Ht = v.useInsertionEffect ?? y;
function H(e) {
	let t = (0, v.useRef)(null);
	return Ht(() => {
		t.current = e;
	}, [e]), (0, v.useCallback)((...e) => {
		let n = t.current;
		return n?.(...e);
	}, []);
}
// node_modules/react-aria/dist/private/utils/useEvent.mjs
function Ut(e, t, n, r) {
	let i = H(n), a = n == null;
	(0, v.useEffect)(() => {
		if (!(a || e.current == null)) return Te(e.current, t, i, r);
	}, [
		e,
		t,
		r,
		a
	]);
}
// node_modules/react-aria/dist/private/utils/useLabels.mjs
function Wt(e, t) {
	let { id: n, "aria-label": r, "aria-labelledby": i } = e;
	return n = re(n), i && r ? i = [.../* @__PURE__ */ new Set([n, ...i.trim().split(/\s+/)])].join(" ") : i &&= i.trim().split(/\s+/).join(" "), !r && !i && t && (r = t), {
		id: n,
		"aria-label": r,
		"aria-labelledby": i
	};
}
// node_modules/react-aria/dist/private/i18n/utils.mjs
var Gt = /* @__PURE__ */ new Set([
	"Arab",
	"Syrc",
	"Samr",
	"Mand",
	"Thaa",
	"Mend",
	"Nkoo",
	"Adlm",
	"Rohg",
	"Hebr"
]), Kt = /* @__PURE__ */ new Set([
	"ae",
	"ar",
	"arc",
	"bcc",
	"bqi",
	"ckb",
	"dv",
	"fa",
	"glk",
	"he",
	"ku",
	"mzn",
	"nqo",
	"pnb",
	"ps",
	"sd",
	"ug",
	"ur",
	"yi"
]);
function qt(e) {
	if (Intl.Locale) {
		let t = new Intl.Locale(e).maximize(), n = typeof t.getTextInfo == "function" ? t.getTextInfo() : t.textInfo;
		if (n) return n.direction === "rtl";
		if (t.script) return Gt.has(t.script);
	}
	let t = e.split("-")[0];
	return Kt.has(t);
}
// node_modules/react-aria/dist/private/i18n/useDefaultLocale.mjs
var Jt = Symbol.for("react-aria.i18n.locale");
function Yt() {
	let e = typeof window < "u" && window[Jt] || typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
	try {
		Intl.DateTimeFormat.supportedLocalesOf([e]);
	} catch {
		e = "en-US";
	}
	return {
		locale: e,
		direction: qt(e) ? "rtl" : "ltr"
	};
}
var Xt = Yt(), Zt = /* @__PURE__ */ new Set();
function Qt() {
	Xt = Yt();
	for (let e of Zt) e(Xt);
}
function $t() {
	let e = A(), [t, n] = (0, v.useState)(Xt);
	return (0, v.useEffect)(() => (Zt.size === 0 && window.addEventListener("languagechange", Qt), Zt.add(n), () => {
		Zt.delete(n), Zt.size === 0 && window.removeEventListener("languagechange", Qt);
	}), []), e ? {
		locale: typeof window < "u" && window[Jt] || "en-US",
		direction: "ltr"
	} : t;
}
// node_modules/react-aria/dist/private/i18n/I18nProvider.mjs
var en = /*#__PURE__*/ v.createContext(null);
function tn(e) {
	let { locale: t, children: n } = e, r = v.useMemo(() => ({
		locale: t,
		direction: qt(t) ? "rtl" : "ltr"
	}), [t]);
	return /*#__PURE__*/ v.createElement(en.Provider, { value: r }, n);
}
function nn(e) {
	let { children: t } = e, n = $t();
	return /*#__PURE__*/ v.createElement(en.Provider, { value: n }, t);
}
function rn(e) {
	let { locale: t, children: n } = e;
	return t ? /*#__PURE__*/ v.createElement(tn, {
		locale: t,
		children: n
	}) : /*#__PURE__*/ v.createElement(nn, { children: n });
}
function an() {
	let e = $t();
	return (0, v.useContext)(en) || e;
}
// node_modules/@internationalized/string/dist/private/LocalizedStringDictionary.mjs
var on = Symbol.for("react-aria.i18n.locale"), sn = Symbol.for("react-aria.i18n.strings"), cn = void 0, ln = class e {
	constructor(e, t = "en-US") {
		this.strings = Object.fromEntries(Object.entries(e).filter(([, e]) => e)), this.defaultLocale = t;
	}
	getStringForLocale(e, t) {
		let n = this.getStringsForLocale(t)[e];
		if (!n) throw Error(`Could not find intl message ${e} in ${t} locale`);
		return n;
	}
	getStringsForLocale(e) {
		let t = this.strings[e];
		return t || (t = un(e, this.strings, this.defaultLocale), this.strings[e] = t), t;
	}
	static getGlobalDictionaryForPackage(t) {
		if (typeof window > "u") return null;
		let n = window[on];
		if (cn === void 0) {
			let t = window[sn];
			if (!t) return null;
			cn = {};
			for (let r in t) cn[r] = new e({ [n]: t[r] }, n);
		}
		let r = cn?.[t];
		if (!r) throw Error(`Strings for package "${t}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
		return r;
	}
};
function un(e, t, n = "en-US") {
	if (t[e]) return t[e];
	let r = dn(e), i = fn(e);
	if (i && t[`${r}-${i}`]) return t[`${r}-${i}`];
	if (t[r]) return t[r];
	for (let e in t) if (e.startsWith(r + "-")) return t[e];
	return t[n];
}
function dn(e) {
	return Intl.Locale ? new Intl.Locale(e).language : e.split("-")[0];
}
function fn(e) {
	if (Intl.Locale) return new Intl.Locale(e).script;
}
// node_modules/@internationalized/string/dist/private/LocalizedStringFormatter.mjs
var pn = /* @__PURE__ */ new Map(), mn = /* @__PURE__ */ new Map(), hn = class {
	constructor(e, t) {
		this.locale = e, this.strings = t;
	}
	format(e, t) {
		let n = this.strings.getStringForLocale(e, this.locale);
		return typeof n == "function" ? n(t, this) : n;
	}
	plural(e, t, n = "cardinal") {
		let r = t["=" + e];
		if (r) return typeof r == "function" ? r() : r;
		let i = this.locale + ":" + n, a = pn.get(i);
		return a || (a = new Intl.PluralRules(this.locale, { type: n }), pn.set(i, a)), r = t[a.select(e)] || t.other, typeof r == "function" ? r() : r;
	}
	number(e) {
		let t = mn.get(this.locale);
		return t || (t = new Intl.NumberFormat(this.locale), mn.set(this.locale, t)), t.format(e);
	}
	select(e, t) {
		let n = e[t] || e.other;
		return typeof n == "function" ? n() : n;
	}
}, gn = /* @__PURE__ */ new WeakMap();
function _n(e) {
	let t = gn.get(e);
	return t || (t = new ln(e), gn.set(e, t)), t;
}
function vn(e, t) {
	return t && ln.getGlobalDictionaryForPackage(t) || _n(e);
}
function yn(e, t) {
	let { locale: n } = an(), r = vn(e, t);
	return (0, v.useMemo)(() => new hn(n, r), [n, r]);
}
// node_modules/react-stately/dist/private/utils/useControlledState.mjs
var bn = v.useInsertionEffect ?? v.useLayoutEffect;
function xn(e, t, n) {
	let [r, i] = (0, v.useState)(e || t), a = (0, v.useRef)(r), o = (0, v.useRef)(e !== void 0), s = e !== void 0;
	(0, v.useEffect)(() => {
		o.current, o.current = s;
	}, [s]);
	let c = s ? e : r;
	bn(() => {
		a.current = c;
	});
	let [, l] = (0, v.useReducer)(() => ({}), {});
	return [c, (0, v.useCallback)((e, ...t) => {
		let r = typeof e == "function" ? e(a.current) : e;
		Object.is(a.current, r) || (a.current = r, i(r), l(), n?.(r, ...t));
	}, [n])];
}
// node_modules/react-aria/dist/private/utils/runAfterTransition.mjs
var Sn = /* @__PURE__ */ new Map(), Cn = /* @__PURE__ */ new Set();
function wn(e) {
	return "propertyName" in e;
}
function Tn(e) {
	let t = B(e);
	if (!wn(e) || !t) return;
	let n = Sn.get(t);
	n || (n = /* @__PURE__ */ new Set(), Sn.set(t, n), t.addEventListener("transitioncancel", En, { once: !0 })), n.add(e.propertyName);
}
function En(e) {
	let t = B(e);
	if (!wn(e) || !t) return;
	let n = Sn.get(t);
	if (n && (n.delete(e.propertyName), n.size === 0 && (t.removeEventListener("transitioncancel", En), Sn.delete(t)), Sn.size === 0)) for (let e of Cn) e(!0), Cn.delete(e);
}
function Dn() {
	Te(document, "transitionrun", Tn), Te(document, "transitionend", En);
}
function On() {
	for (let [e] of Sn) "isConnected" in e && !e.isConnected && Sn.delete(e);
}
typeof document < "u" && (document.readyState === "loading" ? Te(document, "DOMContentLoaded", Dn) : Dn());
function kn(e) {
	let t = window.requestAnimationFrame(() => {
		if (On(), Sn.size === 0) return e(!1);
		Cn.add(e);
	});
	return () => {
		window.cancelAnimationFrame(t), Cn.delete(e);
	};
}
// node_modules/react-aria/dist/private/interactions/focusSafely.mjs
function An(e) {
	if (!e.isConnected) return;
	let t = I(e);
	if (wt() === "virtual") {
		let n = z(t);
		kn(() => {
			let r = z(t);
			(r === n || r === t.body) && e.isConnected && je(e);
		});
	} else je(e);
}
// node_modules/react-aria/dist/private/interactions/useFocus.mjs
function jn(e) {
	let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: i } = e, a = (0, v.useCallback)((e) => {
		if (B(e) === e.currentTarget) return r && r(e), i && i(!1), !0;
	}, [r, i]), o = We(a), s = (0, v.useCallback)((e) => {
		let t = B(e), r = I(t), a = r ? z(r) : z();
		t === e.currentTarget && t === a && (n && n(e), i && i(!0), o(e));
	}, [
		i,
		n,
		o
	]);
	return { focusProps: {
		onFocus: !t && (n || i || r) ? s : void 0,
		onBlur: !t && (r || i) ? a : void 0
	} };
}
// node_modules/react-aria/dist/private/interactions/createEventHandler.mjs
function Mn(e) {
	if (e) return (t) => {
		let n = !0;
		e({
			...t,
			preventDefault() {
				t.preventDefault();
			},
			isDefaultPrevented() {
				return t.isDefaultPrevented();
			},
			stopPropagation() {
				n = !0;
			},
			continuePropagation() {
				n = !1, typeof t.continuePropagation == "function" && t.continuePropagation();
			},
			isPropagationStopped() {
				return n;
			}
		}), n && !(typeof t.isPropagationStopped == "function" && t.isPropagationStopped()) && t.stopPropagation();
	};
}
// node_modules/react-aria/dist/private/interactions/createKeyboardShortcutHandler.mjs
var Nn = /* @__PURE__ */ new Set([
	"shift",
	"alt",
	"control",
	"meta",
	"mod"
]), Pn = [
	"Alt",
	"Control",
	"Meta",
	"Shift"
];
function Fn(e) {
	let t = /* @__PURE__ */ new Set();
	return e.alt && t.add("Alt"), e.shift && t.add("Shift"), e.ctrl && t.add("Control"), e.meta && t.add("Meta"), e.mod && t.add(Xe() ? "Meta" : "Control"), t;
}
function In(e) {
	let t = /* @__PURE__ */ new Set();
	return e.altKey && t.add("Alt"), e.ctrlKey && t.add("Control"), e.metaKey && t.add("Meta"), e.shiftKey && t.add("Shift"), t;
}
function Ln(e) {
	return Pn.filter((t) => e.has(t));
}
function Rn(e) {
	let t = e.split("+").reduce((e, t) => {
		let n = t.toLowerCase();
		return Nn.has(n) ? n === "shift" ? e.shift = !0 : n === "alt" ? e.alt = !0 : n === "control" ? e.ctrl = !0 : n === "meta" ? e.meta = !0 : n === "mod" && (e.mod = !0) : e.key = t, e;
	}, {
		shift: !1,
		alt: !1,
		ctrl: !1,
		meta: !1,
		mod: !1,
		key: ""
	});
	if (t.key === "") throw Error(`Invalid keyboard shortcut: "${e}". Must include exactly one non-modifier key (e.g. "a", "Enter", "ArrowDown"). Combine any of Shift, Alt, Ctrl, Meta, and Mod.`);
	return t;
}
function zn(e) {
	return e.toLowerCase();
}
var Bn = {
	space: " ",
	esc: "escape",
	del: "delete",
	ins: "insert",
	left: "arrowleft",
	right: "arrowright",
	up: "arrowup",
	down: "arrowdown",
	pageup: "pageup",
	pagedown: "pagedown"
};
function Vn(e) {
	let t = zn(e);
	return Bn[t] ?? t;
}
function Hn(e) {
	let t = Ln(Fn(e)), n = Vn(e.key);
	return t.length > 0 ? `${t.join("+")}+${n}` : n;
}
function Un(e) {
	let t = Ln(In(e)), n = zn(e.key);
	return (t.length > 0 ? `${t.join("+")}+` : "") + n;
}
function Wn(e) {
	let t = /* @__PURE__ */ new Map();
	for (let [n, r] of Object.entries(e)) {
		let e = Rn(n);
		t.set(Hn(e), r);
	}
	return (e) => {
		let n = Un(e), r = t.get(n), i = r?.(e);
		i === void 0 && r !== void 0 ? i = {
			shouldContinuePropagation: !1,
			shouldPreventDefault: !0
		} : typeof i == "boolean" && (i = {
			shouldContinuePropagation: !i,
			shouldPreventDefault: i
		}), i?.shouldPreventDefault && e.preventDefault(), (!r || i?.shouldContinuePropagation) && e.continuePropagation();
	};
}
// node_modules/react-aria/dist/private/interactions/useKeyboard.mjs
function Gn(e) {
	let { shortcuts: t, allowRepeats: n = !1, allowComposing: r = !1 } = e, i, a;
	if (t) {
		let o = Wn(t), s = Mn((e) => {
			R(e.currentTarget, B(e)) ? e.nativeEvent?.repeat && !n || e.nativeEvent?.isComposing && !r ? e.continuePropagation() : o(e) : e.continuePropagation();
		}), c = Mn((e) => {
			R(e.currentTarget, B(e)) && (e.nativeEvent?.repeat && !n || e.nativeEvent?.isComposing), e.continuePropagation();
		});
		i = e.onKeyDown ? _(e.onKeyDown, s) : s, a = e.onKeyUp ? _(e.onKeyUp, c) : c;
	} else i = Mn(e.onKeyDown), a = Mn(e.onKeyUp);
	return { keyboardProps: e.isDisabled ? {} : {
		onKeyDown: i,
		onKeyUp: a
	} };
}
// node_modules/react-aria/dist/private/utils/useSyncRef.mjs
function Kn(e, t) {
	y(() => {
		if (e && e.ref && t) return e.ref.current = t.current, () => {
			e.ref && (e.ref.current = null);
		};
	});
}
// node_modules/react-aria/dist/private/interactions/useFocusable.mjs
var qn = /*#__PURE__*/ v.createContext(null);
function Jn(e) {
	let t = (0, v.useContext)(qn) || {};
	Kn(t, e);
	let { ref: n, ...r } = t;
	return r;
}
function Yn(e, t) {
	let { focusProps: n } = jn(e), { keyboardProps: r } = Gn(e), i = ue(n, r), a = Jn(t), o = e.isDisabled ? {} : a, s = (0, v.useRef)(e.autoFocus);
	(0, v.useEffect)(() => {
		s.current && t.current && An(t.current), s.current = !1;
	}, [t]);
	let c = e.excludeFromTabOrder ? -1 : 0;
	return e.isDisabled && (c = void 0), { focusableProps: ue({
		...i,
		tabIndex: c
	}, o) };
}
// node_modules/react-aria/dist/private/collections/Hidden.mjs
typeof HTMLTemplateElement < "u" && (Object.defineProperty(HTMLTemplateElement.prototype, "firstChild", {
	configurable: !0,
	enumerable: !0,
	get: function() {
		return this.content.firstChild;
	}
}), Object.defineProperty(HTMLTemplateElement.prototype, "appendChild", {
	configurable: !0,
	enumerable: !0,
	value: function(e) {
		return this.content.appendChild(e);
	}
}), Object.defineProperty(HTMLTemplateElement.prototype, "removeChild", {
	configurable: !0,
	enumerable: !0,
	value: function(e) {
		return this.content.removeChild(e);
	}
}), Object.defineProperty(HTMLTemplateElement.prototype, "insertBefore", {
	configurable: !0,
	enumerable: !0,
	value: function(e, t) {
		return this.content.insertBefore(e, t);
	}
}));
var Xn = /*#__PURE__*/ (0, v.createContext)(!1);
function Zn(e) {
	let t = (t, n) => (0, v.useContext)(Xn) ? null : e(t, n);
	return t.displayName = e.displayName || e.name, (0, v.forwardRef)(t);
}
function Qn() {
	return (0, v.useContext)(Xn);
}
// node_modules/react-aria/dist/private/utils/filterDOMProps.mjs
var $n = /* @__PURE__ */ new Set(["id"]), er = /* @__PURE__ */ new Set([
	"aria-label",
	"aria-labelledby",
	"aria-describedby",
	"aria-details"
]), tr = /* @__PURE__ */ new Set([
	"href",
	"hrefLang",
	"target",
	"rel",
	"download",
	"ping",
	"referrerPolicy"
]), nr = /* @__PURE__ */ new Set([
	"dir",
	"lang",
	"hidden",
	"inert",
	"translate",
	"suppressHydrationWarning"
]), rr = /* @__PURE__ */ new Set(/* @__PURE__ */ "onClick.onAuxClick.onContextMenu.onDoubleClick.onMouseDown.onMouseEnter.onMouseLeave.onMouseMove.onMouseOut.onMouseOver.onMouseUp.onTouchCancel.onTouchEnd.onTouchMove.onTouchStart.onPointerDown.onPointerMove.onPointerUp.onPointerCancel.onPointerEnter.onPointerLeave.onPointerOver.onPointerOut.onGotPointerCapture.onLostPointerCapture.onScroll.onWheel.onAnimationStart.onAnimationEnd.onAnimationIteration.onTransitionCancel.onTransitionEnd.onTransitionRun.onTransitionStart".split(".")), ir = /^(data-.*)$/;
function ar(e, t = {}) {
	let { labelable: n, isLink: r, global: i, events: a = i, propNames: o } = t, s = {};
	for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && ($n.has(t) || n && er.has(t) || r && tr.has(t) || i && nr.has(t) || a && (rr.has(t) || t.endsWith("Capture") && rr.has(t.slice(0, -7))) || o?.has(t) || ir.test(t)) && (s[t] = e[t]);
	return s;
}
// node_modules/react-aria/dist/private/interactions/textSelection.mjs
var or = "default", sr = "", cr = /* @__PURE__ */ new WeakMap();
function lr(e) {
	if ($e() && et()) {
		if (or === "default") {
			let t = I(e);
			sr = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none";
		}
		or = "disabled";
	} else if (e instanceof HTMLElement || e instanceof SVGElement) {
		let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
		cr.set(e, e.style[t]), e.style[t] = "none";
	}
}
function ur(e) {
	if ($e() && et()) {
		if (or !== "disabled") return;
		or = "restoring", setTimeout(() => {
			kn(() => {
				if (or === "restoring") {
					let t = I(e);
					t.documentElement.style.webkitUserSelect === "none" && (t.documentElement.style.webkitUserSelect = sr || ""), sr = "", or = "default";
				}
			});
		}, 300);
	} else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && cr.has(e)) {
		let t = cr.get(e), n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
		e.style[n] === "none" && (e.style[n] = t), e.getAttribute("style") === "" && e.removeAttribute("style"), cr.delete(e);
	}
}
// node_modules/react-aria/dist/private/utils/getNonce.mjs
var dr = /* @__PURE__ */ new WeakMap();
function fr(e) {
	let t = I(e), n = dr.get(t);
	return n ??= kt("csp-nonce", t), n !== void 0 && dr.set(t, n), n;
}
// node_modules/react-aria/dist/private/interactions/context.mjs
var pr = v.createContext({ register: () => {} });
pr.displayName = "PressResponderContext";
// node_modules/react-aria/dist/private/utils/useGlobalListeners.mjs
function mr() {
	let e = (0, v.useRef)(/* @__PURE__ */ new Map()), t = (0, v.useCallback)((t, n, r, i) => {
		let a = i?.once ? (...t) => {
			e.current.delete(r), r(...t);
		} : r;
		e.current.set(r, {
			type: n,
			eventTarget: t,
			fn: a,
			options: i
		}), t.addEventListener(n, a, i);
	}, []), n = (0, v.useCallback)((t, n, r, i) => {
		let a = e.current.get(r)?.fn || r;
		t.removeEventListener(n, a, i), e.current.delete(r);
	}, []), r = (0, v.useCallback)(() => {
		e.current.forEach((e, t) => {
			n(e.eventTarget, e.type, t, e.options);
		});
	}, [n]);
	return (0, v.useEffect)(() => r, [r]), {
		addGlobalListener: t,
		removeGlobalListener: n,
		removeAllGlobalListeners: r
	};
}
// node_modules/react-aria/dist/private/interactions/usePress.mjs
var hr = /* @__PURE__ */ c(m(), 1);
function gr(e) {
	let t = (0, v.useContext)(pr);
	if (t) {
		let { register: n, ref: r, ...i } = t;
		e = ue(i, e), n();
	}
	return Kn(t, e.ref), e;
}
var _r = class {
	#e;
	constructor(e, t, n, r) {
		this.#e = !0;
		let i = (r?.target ?? n.currentTarget)?.getBoundingClientRect(), a, o = 0, s, c = null;
		n.clientX != null && n.clientY != null && (s = n.clientX, c = n.clientY), i && (s != null && c != null ? (a = s - i.left, o = c - i.top) : (a = i.width / 2, o = i.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = a, this.y = o, this.key = n.key;
	}
	continuePropagation() {
		this.#e = !1;
	}
	get shouldStopPropagation() {
		return this.#e;
	}
}, vr = Symbol("linkClicked"), yr = "react-aria-pressable-style", br = "data-react-aria-pressable";
function xr(e) {
	let { onPress: t, onPressChange: n, onPressStart: r, onPressEnd: i, onPressUp: a, onClick: o, isDisabled: s, isPressed: c, preventFocusOnPress: l, shouldCancelOnPointerExit: u, allowTextSelectionOnPress: d, ref: f, ...p } = gr(e), [m, h] = (0, v.useState)(!1), g = (0, v.useRef)({
		isPressed: !1,
		ignoreEmulatedMouseEvents: !1,
		didFirePressStart: !1,
		isTriggeringEvent: !1,
		activePointerId: null,
		target: null,
		isOverTarget: !1,
		pointerType: null,
		disposables: []
	}), { addGlobalListener: y, removeAllGlobalListeners: b } = mr(), x = (0, v.useCallback)((e, t) => {
		let i = g.current;
		if (s || i.didFirePressStart) return !1;
		let a = !0;
		if (i.isTriggeringEvent = !0, r) {
			let n = new _r("pressstart", t, e);
			r(n), a = n.shouldStopPropagation;
		}
		return n && n(!0), i.isTriggeringEvent = !1, i.didFirePressStart = !0, h(!0), a;
	}, [
		s,
		r,
		n
	]), S = (0, v.useCallback)((e, r, a = !0) => {
		let o = g.current;
		if (!o.didFirePressStart) return !1;
		o.didFirePressStart = !1, o.isTriggeringEvent = !0;
		let c = !0;
		if (i) {
			let t = new _r("pressend", r, e);
			i(t), c = t.shouldStopPropagation;
		}
		if (n && n(!1), h(!1), t && a && !s) {
			let n = new _r("press", r, e);
			t(n), c &&= n.shouldStopPropagation;
		}
		return o.isTriggeringEvent = !1, c;
	}, [
		s,
		i,
		n,
		t
	]), C = H(S), w = H((0, v.useCallback)((e, t) => {
		let n = g.current;
		if (s) return !1;
		if (a) {
			n.isTriggeringEvent = !0;
			let r = new _r("pressup", t, e);
			return a(r), n.isTriggeringEvent = !1, r.shouldStopPropagation;
		}
		return !0;
	}, [s, a])), T = (0, v.useCallback)((e) => {
		let t = g.current;
		if (t.isPressed && t.target) {
			t.didFirePressStart && t.pointerType != null && S(wr(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, b(), d || ur(t.target);
			for (let e of t.disposables) e();
			t.disposables = [];
		}
	}, [
		d,
		b,
		S
	]), E = H(T);
	(0, v.useEffect)(() => {
		s && g.current.isPressed && E({
			currentTarget: g.current.target,
			shiftKey: !1,
			ctrlKey: !1,
			metaKey: !1,
			altKey: !1
		});
	}, [s]);
	let D = (0, v.useCallback)((e) => {
		u && T(e);
	}, [u, T]), O = (0, v.useCallback)((e) => {
		s || o?.(e);
	}, [s, o]), k = (0, v.useCallback)((e, t) => {
		if (!s && o) {
			let n = new MouseEvent("click", e);
			Ue(n, t), o(He(n));
		}
	}, [s, o]), ee = (0, v.useMemo)(() => {
		let e = g.current, t = {
			onKeyDown(t) {
				if (Cr(t.nativeEvent, t.currentTarget) && R(t.currentTarget, B(t))) {
					Er(B(t), t.key) && t.preventDefault();
					let r = !0;
					!e.isPressed && !t.repeat && (e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", r = x(t, "keyboard"));
					let i = t.currentTarget;
					y(I(t.currentTarget), "keyup", _((t) => {
						Cr(t, i) && !t.repeat && R(i, B(t)) && e.target && w(wr(e.target, t), "keyboard");
					}, n), !0), r && t.stopPropagation(), t.metaKey && Xe() && e.metaKeyEvents?.set(t.key, t.nativeEvent);
				} else t.key === "Meta" && (e.metaKeyEvents = /* @__PURE__ */ new Map());
			},
			onClick(t) {
				if ((!t || R(t.currentTarget, B(t))) && t && t.button === 0 && !e.isTriggeringEvent && !at.isOpening) {
					let n = !0;
					if (s && t.preventDefault(), !e.ignoreEmulatedMouseEvents && !e.isPressed && (e.pointerType === "virtual" || rt(t.nativeEvent))) {
						let e = x(t, "virtual"), r = w(t, "virtual"), i = C(t, "virtual");
						O(t), n = e && r && i;
					} else if (e.isPressed && e.pointerType !== "keyboard") {
						let r = e.pointerType || t.nativeEvent.pointerType || "virtual", i = w(wr(t.currentTarget, t), r), a = C(wr(t.currentTarget, t), r, !0);
						n = i && a, e.isOverTarget = !1, O(t), E(t);
					}
					e.ignoreEmulatedMouseEvents = !1, n && t.stopPropagation();
				}
			}
		}, n = (t) => {
			if (e.isPressed && e.target && Cr(t, e.target)) {
				Er(B(t), t.key) && t.preventDefault();
				let n = B(t), r = R(e.target, n);
				C(wr(e.target, t), "keyboard", r), r && k(t, e.target), b(), t.key !== "Enter" && Sr(e.target) && R(e.target, n) && !t[vr] && (t[vr] = !0, at(e.target, t, !1)), e.isPressed = !1, e.metaKeyEvents?.delete(t.key);
			} else if (t.key === "Meta" && e.metaKeyEvents?.size) {
				let t = e.metaKeyEvents;
				e.metaKeyEvents = void 0;
				for (let n of t.values()) e.target?.dispatchEvent(new KeyboardEvent("keyup", n));
			}
		};
		if (typeof PointerEvent < "u") {
			t.onPointerDown = (t) => {
				if (t.button !== 0 || !R(t.currentTarget, B(t))) return;
				if (it(t.nativeEvent)) {
					e.pointerType = "virtual";
					return;
				}
				e.pointerType = t.pointerType;
				let i = !0;
				if (!e.isPressed) {
					e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, d || lr(e.target), i = x(t, e.pointerType);
					let a = B(t);
					"releasePointerCapture" in a && ("hasPointerCapture" in a ? a.hasPointerCapture(t.pointerId) && a.releasePointerCapture(t.pointerId) : a.releasePointerCapture(t.pointerId)), y(I(t.currentTarget), "pointerup", n, !1), y(I(t.currentTarget), "pointercancel", r, !1);
				}
				i && t.stopPropagation();
			}, t.onMouseDown = (t) => {
				if (R(t.currentTarget, B(t)) && t.button === 0) {
					if (l) {
						let n = Ke(t.target);
						n && e.disposables.push(n);
					}
					t.stopPropagation();
				}
			}, t.onPointerUp = (t) => {
				R(t.currentTarget, B(t)) && e.pointerType !== "virtual" && t.button === 0 && !e.isPressed && w(t, e.pointerType || t.pointerType);
			}, t.onPointerEnter = (t) => {
				t.pointerId === e.activePointerId && e.target && !e.isOverTarget && e.pointerType != null && (e.isOverTarget = !0, x(wr(e.target, t), e.pointerType));
			}, t.onPointerLeave = (t) => {
				t.pointerId === e.activePointerId && e.target && e.isOverTarget && e.pointerType != null && (e.isOverTarget = !1, C(wr(e.target, t), e.pointerType, !1), D(t));
			};
			let n = (t) => {
				if (t.pointerId === e.activePointerId && e.isPressed && t.button === 0 && e.target) {
					if (R(e.target, B(t)) && e.pointerType != null) {
						let n = !1, r = setTimeout(() => {
							e.isPressed && e.target instanceof HTMLElement && (n ? E(t) : (je(e.target), e.target.click()));
						}, 80);
						y(t.currentTarget, "click", () => n = !0, !0), e.disposables.push(() => clearTimeout(r));
					} else E(t);
					e.isOverTarget = !1;
				}
			}, r = (e) => {
				E(e);
			};
			t.onDragStart = (e) => {
				R(e.currentTarget, B(e)) && E(e);
			};
		}
		return t;
	}, [
		y,
		s,
		l,
		b,
		d,
		D,
		x,
		O,
		k
	]);
	return (0, v.useEffect)(() => {
		if (!f) return;
		let e = I(f.current);
		if (!e || !e.head || e.getElementById(yr)) return;
		let t = e.createElement("style");
		t.id = yr;
		let n = fr(e);
		n && (t.nonce = n), t.textContent = `
@layer {
  [${br}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), e.head.prepend(t);
	}, [f]), (0, v.useEffect)(() => {
		let e = g.current;
		return () => {
			d || ur(e.target ?? void 0);
			for (let t of e.disposables) t();
			e.disposables = [];
		};
	}, [d]), {
		isPressed: c || m,
		pressProps: ue(p, ee, { [br]: !0 })
	};
}
function Sr(e) {
	return e.tagName === "A" && e.hasAttribute("href");
}
function Cr(e, t) {
	let { key: n, code: r } = e, i = t, a = i.getAttribute("role");
	return (n === "Enter" || n === " " || n === "Spacebar" || r === "Space") && !(i instanceof L(i).HTMLInputElement && !Or(i, n) || i instanceof L(i).HTMLTextAreaElement || i.isContentEditable) && !((a === "link" || !a && Sr(i)) && n !== "Enter");
}
function wr(e, t) {
	let n = t.clientX, r = t.clientY;
	return {
		currentTarget: e,
		shiftKey: t.shiftKey,
		ctrlKey: t.ctrlKey,
		metaKey: t.metaKey,
		altKey: t.altKey,
		clientX: n,
		clientY: r,
		key: t.key
	};
}
function Tr(e) {
	return e instanceof HTMLInputElement ? !1 : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !Sr(e);
}
function Er(e, t) {
	return Xe() && t === "Enter" ? !1 : e instanceof HTMLInputElement ? t === "Enter" && (e.type === "checkbox" || e.type === "radio") ? !1 : !Or(e, t) : Tr(e);
}
var Dr = /* @__PURE__ */ new Set([
	"checkbox",
	"radio",
	"range",
	"color",
	"file",
	"image",
	"button",
	"submit",
	"reset"
]);
function Or(e, t) {
	return e.type === "checkbox" || e.type === "radio" ? t === " " : Dr.has(e.type);
}
// node_modules/react-aria/dist/private/interactions/useFocusWithin.mjs
function kr(e) {
	let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: i } = e, a = (0, v.useRef)({ isFocusWithin: !1 }), { addGlobalListener: o, removeAllGlobalListeners: s } = mr(), c = (0, v.useCallback)((e) => {
		R(e.currentTarget, B(e)) && a.current.isFocusWithin && !R(e.currentTarget, e.relatedTarget) && (a.current.isFocusWithin = !1, s(), n && n(e), i && i(!1));
	}, [
		n,
		i,
		a,
		s
	]), l = We(c), u = (0, v.useCallback)((e) => {
		if (!R(e.currentTarget, B(e))) return;
		let t = B(e), n = I(t), s = z(n);
		if (!a.current.isFocusWithin && s === t) {
			r && r(e), i && i(!0), a.current.isFocusWithin = !0, l(e);
			let t = e.currentTarget;
			o(n, "focus", (e) => {
				let r = B(e);
				if (a.current.isFocusWithin && !R(t, r)) {
					let e = new n.defaultView.FocusEvent("blur", { relatedTarget: r });
					Ue(e, t);
					let i = He(e);
					c(i);
				}
			}, { capture: !0 });
		}
	}, [
		r,
		i,
		l,
		o,
		c
	]);
	return t ? { focusWithinProps: {
		onFocus: void 0,
		onBlur: void 0
	} } : { focusWithinProps: {
		onFocus: u,
		onBlur: c
	} };
}
// node_modules/react-aria/dist/private/focus/useFocusRing.mjs
function Ar(e = {}) {
	let { autoFocus: t = !1, isTextInput: n, within: r } = e, i = (0, v.useRef)({
		isFocused: !1,
		isFocusVisible: t || Ct()
	}), [a, o] = (0, v.useState)(!1), [s, c] = (0, v.useState)(() => i.current.isFocused && i.current.isFocusVisible), l = (0, v.useCallback)(() => c(i.current.isFocused && i.current.isFocusVisible), []), u = (0, v.useCallback)((e) => {
		i.current.isFocused = e, i.current.isFocusVisible = Ct(), o(e), l();
	}, [l]);
	Ot((e) => {
		i.current.isFocusVisible = e, l();
	}, [n, a], {
		enabled: a,
		isTextInput: n
	});
	let { focusProps: d } = jn({
		isDisabled: r,
		onFocusChange: u
	}), { focusWithinProps: f } = kr({
		isDisabled: !r,
		onFocusWithinChange: u
	});
	return {
		isFocused: a,
		isFocusVisible: s,
		focusProps: r ? f : d
	};
}
// node_modules/react-aria/dist/private/interactions/useHover.mjs
var jr = !1, Mr = 0;
function Nr() {
	jr = !0, setTimeout(() => {
		jr = !1;
	}, 500);
}
function Pr(e) {
	e.pointerType === "touch" && Nr();
}
function Fr() {
	let e = I(null);
	if (e !== void 0) return Mr === 0 && typeof PointerEvent < "u" && e.addEventListener("pointerup", Pr), Mr++, () => {
		Mr--, Mr > 0 || typeof PointerEvent < "u" && e.removeEventListener("pointerup", Pr);
	};
}
function Ir(e) {
	let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: i } = e, [a, o] = (0, v.useState)(!1), s = (0, v.useRef)({
		isHovered: !1,
		ignoreEmulatedMouseEvents: !1,
		pointerType: "",
		target: null
	}).current;
	(0, v.useEffect)(Fr, []);
	let { addGlobalListener: c, removeAllGlobalListeners: l } = mr(), { hoverProps: u, triggerHoverEnd: d } = (0, v.useMemo)(() => {
		let e = (e, r) => {
			if (s.pointerType = r, i || r === "touch" || s.isHovered || !R(e.currentTarget, B(e))) return;
			s.isHovered = !0;
			let l = e.currentTarget;
			s.target = l, c(I(B(e)), "pointerover", (e) => {
				s.isHovered && s.target && !R(s.target, B(e)) && a(e, e.pointerType);
			}, { capture: !0 }), t && t({
				type: "hoverstart",
				target: l,
				pointerType: r
			}), n && n(!0), o(!0);
		}, a = (e, t) => {
			let i = s.target;
			s.pointerType = "", s.target = null, t !== "touch" && s.isHovered && i && (s.isHovered = !1, l(), r && r({
				type: "hoverend",
				target: i,
				pointerType: t
			}), n && n(!1), o(!1));
		}, u = {};
		return typeof PointerEvent < "u" && (u.onPointerEnter = (t) => {
			jr && t.pointerType === "mouse" || e(t, t.pointerType);
		}, u.onPointerLeave = (e) => {
			!i && R(e.currentTarget, B(e)) && a(e, e.pointerType);
		}), {
			hoverProps: u,
			triggerHoverEnd: a
		};
	}, [
		t,
		n,
		r,
		i,
		s,
		c,
		l
	]);
	return (0, v.useEffect)(() => {
		i && d({ currentTarget: s.target }, s.pointerType);
	}, [i]), {
		hoverProps: u,
		isHovered: a
	};
}
// node_modules/react-aria-components/dist/private/Label.mjs
var Lr = /*#__PURE__*/ (0, v.createContext)({}), Rr = /*#__PURE__*/ Zn(function(e, t) {
	[e, t] = P(e, t, Lr);
	let { elementType: n = "label", ...r } = e, i = be[n];
	return /*#__PURE__*/ v.createElement(i, {
		className: "react-aria-Label",
		...r,
		ref: t
	});
});
// node_modules/react-aria/dist/private/label/useLabel.mjs
function zr(e) {
	let { id: t, label: n, "aria-labelledby": r, "aria-label": i, labelElementType: a = "label" } = e;
	t = re(t);
	let o = re(), s = {};
	n && (r = r ? `${o} ${r}` : o, s = {
		id: o,
		htmlFor: a === "label" ? t : void 0
	});
	let c = Wt({
		id: t,
		"aria-label": i,
		"aria-labelledby": r
	});
	return {
		labelProps: s,
		fieldProps: c
	};
}
// node_modules/@internationalized/number/dist/private/NumberFormatter.mjs
var Br = /* @__PURE__ */ new Map(), Vr = !1;
try {
	Vr = new Intl.NumberFormat("de-DE", { signDisplay: "exceptZero" }).resolvedOptions().signDisplay === "exceptZero";
} catch {}
var Hr = class {
	constructor(e, t = {}) {
		this.numberFormatter = Ur(e, t), this.options = t;
	}
	format(e) {
		let t = "";
		return t = !Vr && this.options.signDisplay != null ? Wr(this.numberFormatter, this.options.signDisplay, e) : this.numberFormatter.format(e), t;
	}
	formatToParts(e) {
		return this.numberFormatter.formatToParts(e);
	}
	formatRange(e, t) {
		if (typeof this.numberFormatter.formatRange == "function") return this.numberFormatter.formatRange(e, t);
		if (t < e) throw RangeError("End date must be >= start date");
		return `${this.format(e)} \u{2013} ${this.format(t)}`;
	}
	formatRangeToParts(e, t) {
		if (typeof this.numberFormatter.formatRangeToParts == "function") return this.numberFormatter.formatRangeToParts(e, t);
		if (t < e) throw RangeError("End date must be >= start date");
		let n = this.numberFormatter.formatToParts(e), r = this.numberFormatter.formatToParts(t);
		return [
			...n.map((e) => ({
				...e,
				source: "startRange"
			})),
			{
				type: "literal",
				value: " – ",
				source: "shared"
			},
			...r.map((e) => ({
				...e,
				source: "endRange"
			}))
		];
	}
	resolvedOptions() {
		let e = this.numberFormatter.resolvedOptions();
		return !Vr && this.options.signDisplay != null && (e = {
			...e,
			signDisplay: this.options.signDisplay
		}), e;
	}
};
function Ur(e, t = {}) {
	let { numberingSystem: n } = t;
	n && e.includes("-nu-") && (e.includes("-u-") || (e += "-u-"), e += `-nu-${n}`);
	let r = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
	if (Br.has(r)) return Br.get(r);
	let i = new Intl.NumberFormat(e, t);
	return Br.set(r, i), i;
}
function Wr(e, t, n) {
	if (t === "auto") return e.format(n);
	if (t === "never") return e.format(Math.abs(n));
	{
		let r = !1;
		if (t === "always" ? r = n > 0 || Object.is(n, 0) : t === "exceptZero" && (Object.is(n, -0) || Object.is(n, 0) ? n = Math.abs(n) : r = n > 0), r) {
			let t = e.format(-n), r = e.format(n), i = t.replace(r, "").replace(/\u200e|\u061C/, "");
			return [...i].length !== 1 && console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"), t.replace(r, "!!!").replace(i, "+").replace("!!!", r);
		}
		return e.format(n);
	}
}
// node_modules/@internationalized/number/dist/private/NumberParser.mjs
var Gr = /* @__PURE__ */ RegExp("^.*\\(.*\\).*$"), Kr = [
	"latn",
	"arab",
	"hanidec",
	"deva",
	"beng",
	"fullwide"
], qr = class {
	constructor(e, t = {}) {
		this.locale = e, this.options = t;
	}
	parse(e) {
		return Yr(this.locale, this.options, e).parse(e);
	}
	isValidPartialNumber(e, t, n) {
		return Yr(this.locale, this.options, e).isValidPartialNumber(e, t, n);
	}
	getNumberingSystem(e) {
		return Yr(this.locale, this.options, e).options.numberingSystem;
	}
}, Jr = /* @__PURE__ */ new Map();
function Yr(e, t, n) {
	let r = Xr(e, t);
	if (!e.includes("-nu-") && !r.isValidPartialNumber(n)) {
		for (let i of Kr) if (i !== r.options.numberingSystem) {
			let r = Xr(e + (e.includes("-u-") ? "-nu-" : "-u-nu-") + i, t);
			if (r.isValidPartialNumber(n)) return r;
		}
	}
	return r;
}
function Xr(e, t) {
	let n = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : ""), r = Jr.get(n);
	return r || (r = new Zr(e, t), Jr.set(n, r)), r;
}
var Zr = class {
	constructor(e, t = {}) {
		this.locale = e, t.roundingIncrement !== 1 && t.roundingIncrement != null && (t.maximumFractionDigits == null && t.minimumFractionDigits == null ? (t.maximumFractionDigits = 0, t.minimumFractionDigits = 0) : t.maximumFractionDigits == null ? t.maximumFractionDigits = t.minimumFractionDigits : t.minimumFractionDigits ??= t.maximumFractionDigits), this.formatter = new Intl.NumberFormat(e, t), this.options = this.formatter.resolvedOptions(), this.symbols = ei(e, this.formatter, this.options, t), this.options.style === "percent" && ((this.options.minimumFractionDigits ?? 0) > 18 || (this.options.maximumFractionDigits ?? 0) > 18) && console.warn("NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.");
	}
	parse(e) {
		let t = this.formatter.resolvedOptions().useGrouping, n = this.sanitize(e);
		if (!t && this.symbols.group && n.includes(this.symbols.group)) return NaN;
		if (this.symbols.group && (n = n.replaceAll(this.symbols.group, "")), this.symbols.decimal && (n = n.replace(this.symbols.decimal, ".")), this.symbols.minusSign && (n = n.replace(this.symbols.minusSign, "-")), n = n.replace(this.symbols.numeral, this.symbols.index), this.options.style === "percent") {
			let e = n.indexOf("-");
			n = n.replace("-", ""), n = n.replace("+", "");
			let t = n.indexOf(".");
			t === -1 && (t = n.length), n = n.replace(".", ""), n = t - 2 == 0 ? `0.${n}` : t - 2 == -1 ? `0.0${n}` : t - 2 == -2 ? "0.00" : `${n.slice(0, t - 2)}.${n.slice(t - 2)}`, e > -1 && (n = `-${n}`);
		}
		let r = n ? +n : NaN;
		if (isNaN(r)) return NaN;
		if (this.options.style === "percent") {
			let e = {
				...this.options,
				style: "decimal",
				minimumFractionDigits: Math.min((this.options.minimumFractionDigits ?? 0) + 2, 20),
				maximumFractionDigits: Math.min((this.options.maximumFractionDigits ?? 0) + 2, 20)
			};
			return new qr(this.locale, e).parse(new Hr(this.locale, e).format(r));
		}
		return this.options.currencySign === "accounting" && Gr.test(e) && (r = -1 * r), r;
	}
	sanitize(e) {
		let t = this.formatter.resolvedOptions().useGrouping;
		return this.symbols.noNumeralUnits.length > 0 && this.symbols.noNumeralUnits.find((t) => t.unit === e) ? this.symbols.noNumeralUnits.find((t) => t.unit === e).value.toString() : (e = e.replace(this.symbols.literals, ""), this.symbols.minusSign && (e = e.replace("-", this.symbols.minusSign)), this.options.numberingSystem === "arab" && (this.symbols.decimal && (e = ti(e, ",", this.symbols.decimal), e = ti(e, "،", this.symbols.decimal)), this.symbols.group && t && (e = ti(e, ".", this.symbols.group))), this.symbols.group === "’" && e.includes("'") && t && (e = ti(e, "'", this.symbols.group)), this.symbols.group === "'" && e.includes("’") && t && (e = ti(e, "’", this.symbols.group)), this.options.locale === "fr-FR" && this.symbols.group && t && (e = ti(e, " ", this.symbols.group), e = ti(e, /\u00A0/g, this.symbols.group)), e);
	}
	isValidPartialNumber(e, t = -Infinity, n = Infinity) {
		let r = this.formatter.resolvedOptions().useGrouping;
		return e = this.sanitize(e), this.symbols.minusSign && e.startsWith(this.symbols.minusSign) && t < 0 ? e = e.slice(this.symbols.minusSign.length) : this.symbols.plusSign && e.startsWith(this.symbols.plusSign) && n > 0 && (e = e.slice(this.symbols.plusSign.length)), this.symbols.decimal && e.indexOf(this.symbols.decimal) > -1 && this.options.maximumFractionDigits === 0 ? !1 : (this.symbols.group && r && (e = ti(e, this.symbols.group, "")), e = e.replace(this.symbols.numeral, ""), this.symbols.decimal && (e = e.replace(this.symbols.decimal, "")), e.length === 0);
	}
}, Qr = /* @__PURE__ */ new Set([
	"decimal",
	"fraction",
	"integer",
	"minusSign",
	"plusSign",
	"group"
]), $r = [
	0,
	4,
	2,
	1,
	11,
	20,
	3,
	7,
	100,
	21,
	.1,
	1.1
];
function ei(e, t, n, r) {
	let i = new Intl.NumberFormat(e, {
		...n,
		minimumSignificantDigits: 1,
		maximumSignificantDigits: 21,
		roundingIncrement: 1,
		roundingPriority: "auto",
		roundingMode: "halfExpand",
		useGrouping: !0
	}), a = i.formatToParts(-10000.111), o = i.formatToParts(10000.111), s = $r.map((e) => i.formatToParts(e)), c = s.map((e, t) => {
		let n = e.find((e) => e.type === "unit");
		return n && !e.some((e) => e.type === "integer" || e.type === "fraction") ? {
			unit: n.value,
			value: $r[t]
		} : null;
	}).filter((e) => !!e), l = a.find((e) => e.type === "minusSign")?.value ?? "-", u = o.find((e) => e.type === "plusSign")?.value;
	u || r?.signDisplay !== "exceptZero" && r?.signDisplay !== "always" || (u = "+");
	let d = new Intl.NumberFormat(e, {
		...n,
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}).formatToParts(.001).find((e) => e.type === "decimal")?.value, f = a.find((e) => e.type === "group")?.value, p = a.filter((e) => !Qr.has(e.type)).map((e) => ni(e.value)), m = s.flatMap((e) => e.filter((e) => !Qr.has(e.type)).map((e) => ni(e.value))), h = [.../* @__PURE__ */ new Set([...p, ...m])].sort((e, t) => t.length - e.length), g = h.length === 0 ? /* @__PURE__ */ RegExp("\\p{White_Space}|\\p{Cf}", "gu") : RegExp(`${h.join("|")}|\\p{White_Space}|\\p{Cf}`, "gu"), _ = [...new Intl.NumberFormat(n.locale, { useGrouping: !1 }).format(9876543210)].reverse(), v = new Map(_.map((e, t) => [e, t])), y = RegExp(`[${_.join("")}]`, "g");
	return {
		minusSign: l,
		plusSign: u,
		decimal: d,
		group: f,
		literals: g,
		numeral: y,
		numerals: _,
		index: (e) => String(v.get(e)),
		noNumeralUnits: c
	};
}
function ti(e, t, n) {
	return e.replaceAll ? e.replaceAll(t, n) : e.split(t).join(n);
}
function ni(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
// node_modules/react-stately/dist/private/utils/number.mjs
function ri(e, t = -Infinity, n = Infinity) {
	return Math.min(Math.max(e, t), n);
}
// node_modules/react-aria-components/dist/private/ProgressBar.mjs
var ii = /*#__PURE__*/ (0, v.createContext)(null), ai = 7e3, oi = null;
function si(e, t = "assertive", n = ai) {
	oi ? oi.announce(e, t, n) : (oi = new li(), (typeof IS_REACT_ACT_ENVIRONMENT == "boolean" ? IS_REACT_ACT_ENVIRONMENT : typeof jest < "u") ? oi.announce(e, t, n) : setTimeout(() => {
		oi?.isAttached() && oi?.announce(e, t, n);
	}, 100));
}
function ci(e) {
	oi && oi.clear(e);
}
var li = class {
	constructor() {
		this.node = null, this.assertiveLog = null, this.politeLog = null, typeof document < "u" && (this.node = document.createElement("div"), this.node.dataset.liveAnnouncer = "true", Object.assign(this.node.style, {
			border: 0,
			clip: "rect(0 0 0 0)",
			clipPath: "inset(50%)",
			height: "1px",
			margin: "-1px",
			overflow: "hidden",
			padding: 0,
			position: "absolute",
			width: "1px",
			whiteSpace: "nowrap"
		}), this.assertiveLog = this.createLog("assertive"), this.node.appendChild(this.assertiveLog), this.politeLog = this.createLog("polite"), this.node.appendChild(this.politeLog), document.body.prepend(this.node));
	}
	isAttached() {
		return this.node?.isConnected;
	}
	createLog(e) {
		let t = document.createElement("div");
		return t.setAttribute("role", "log"), t.setAttribute("aria-live", e), t.setAttribute("aria-relevant", "additions"), t;
	}
	destroy() {
		this.node &&= (document.body.removeChild(this.node), null);
	}
	announce(e, t = "assertive", n = ai) {
		if (!this.node) return;
		let r = document.createElement("div");
		typeof e == "object" ? (r.setAttribute("role", "img"), r.setAttribute("aria-labelledby", e["aria-labelledby"])) : r.textContent = e, t === "assertive" ? this.assertiveLog?.appendChild(r) : this.politeLog?.appendChild(r), e !== "" && setTimeout(() => {
			r.remove();
		}, n);
	}
	clear(e) {
		this.node && ((!e || e === "assertive") && this.assertiveLog && (this.assertiveLog.innerHTML = ""), (!e || e === "polite") && this.politeLog && (this.politeLog.innerHTML = ""));
	}
};
// node_modules/react-aria/dist/private/button/useButton.mjs
function ui(e, t) {
	let { elementType: n = "button", isDisabled: r, onPress: i, onPressStart: a, onPressEnd: o, onPressUp: s, onPressChange: c, preventFocusOnPress: l, allowFocusWhenDisabled: u, onClick: d, href: f, target: p, rel: m, type: h = "button" } = e, g;
	g = n === "button" ? {
		type: h,
		disabled: r,
		form: e.form,
		formAction: e.formAction,
		formEncType: e.formEncType,
		formMethod: e.formMethod,
		formNoValidate: e.formNoValidate,
		formTarget: e.formTarget,
		name: e.name,
		value: e.value
	} : {
		role: "button",
		href: n === "a" && !r ? f : void 0,
		target: n === "a" ? p : void 0,
		type: n === "input" ? h : void 0,
		disabled: n === "input" ? r : void 0,
		"aria-disabled": !r || n === "input" ? void 0 : r,
		rel: n === "a" ? m : void 0
	};
	let { pressProps: _, isPressed: v } = xr({
		onPressStart: a,
		onPressEnd: o,
		onPressChange: c,
		onPress: i,
		onPressUp: s,
		onClick: d,
		isDisabled: r,
		preventFocusOnPress: l,
		ref: t
	}), { focusableProps: y } = Yn(e, t);
	u && (y.tabIndex = r ? -1 : y.tabIndex);
	let b = ue(y, _, ar(e, { labelable: !0 }));
	return {
		isPressed: v,
		buttonProps: ue(g, b, {
			"aria-haspopup": e["aria-haspopup"],
			"aria-expanded": e["aria-expanded"],
			"aria-controls": e["aria-controls"],
			"aria-pressed": e["aria-pressed"],
			"aria-current": e["aria-current"],
			"aria-disabled": e["aria-disabled"]
		})
	};
}
// node_modules/react-aria-components/dist/private/Button.mjs
var di = /*#__PURE__*/ (0, v.createContext)({}), fi = /*#__PURE__*/ Zn(function(e, t) {
	[e, t] = P(e, t, di);
	let n = e, { isPending: r } = n, { buttonProps: i, isPressed: a } = ui(e, t);
	i = mi(i, r);
	let { focusProps: o, isFocused: s, isFocusVisible: c } = Ar(e), { hoverProps: l, isHovered: u } = Ir({
		...e,
		isDisabled: e.isDisabled || r
	}), d = {
		isHovered: u,
		isPressed: (n.isPressed || a) && !r,
		isFocused: s,
		isFocusVisible: c,
		isDisabled: e.isDisabled || !1,
		isPending: r ?? !1
	}, f = me({
		...e,
		values: d,
		defaultClassName: "react-aria-Button"
	}), p = re(i.id), m = re(), h = i["aria-labelledby"];
	r && (h ? h = `${h} ${m}` : i["aria-label"] && (h = `${p} ${m}`));
	let g = (0, v.useRef)(r);
	(0, v.useEffect)(() => {
		let e = { "aria-labelledby": h || p };
		(!g.current && s && r || g.current && s && !r) && si(e, "assertive"), g.current = r;
	}, [
		r,
		s,
		h,
		p
	]);
	let _ = ar(e, { global: !0 });
	return delete _.onClick, /*#__PURE__*/ v.createElement(be.button, {
		...ue(_, f, i, o, l),
		type: i.type === "submit" && r ? "button" : i.type,
		id: p,
		ref: t,
		"aria-labelledby": h,
		slot: e.slot || void 0,
		"aria-disabled": r ? "true" : i["aria-disabled"],
		"data-disabled": e.isDisabled || void 0,
		"data-pressed": d.isPressed || void 0,
		"data-hovered": u || void 0,
		"data-focused": s || void 0,
		"data-pending": r || void 0,
		"data-focus-visible": c || void 0
	}, /*#__PURE__*/ v.createElement(ii.Provider, { value: { id: m } }, f.children));
}), pi = /Focus|Blur|Hover|Pointer(Enter|Leave|Over|Out)|Mouse(Enter|Leave|Over|Out)/;
function mi(e, t) {
	if (t) {
		for (let t in e) t.startsWith("on") && !pi.test(t) && (e[t] = void 0);
		e.href = void 0, e.target = void 0;
	}
	return e;
}
// node_modules/react-aria-components/dist/private/Heading.mjs
var hi = /*#__PURE__*/ (0, v.createContext)({}), gi = /*#__PURE__*/ (0, v.forwardRef)(function(e, t) {
	[e, t] = P(e, t, hi);
	let { children: n, level: r = 3, className: i, ...a } = e, o = be[`h${r}`];
	return /*#__PURE__*/ v.createElement(o, {
		...a,
		ref: t,
		className: i ?? "react-aria-Heading"
	}, n);
}), _i = /*#__PURE__*/ (0, v.createContext)({}), vi = {};
vi = {
	dateRange: (e) => `${e.startDate} \u{625}\u{644}\u{649} ${e.endDate}`,
	dateSelected: (e) => `${e.date} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}`,
	finishRangeSelectionPrompt: "انقر لإنهاء عملية تحديد نطاق التاريخ",
	maximumDate: "آخر تاريخ متاح",
	minimumDate: "أول تاريخ متاح",
	next: "التالي",
	previous: "السابق",
	selectedDateDescription: (e) => `\u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{645}\u{62D}\u{62F}\u{62F}: ${e.date}`,
	selectedRangeDescription: (e) => `\u{627}\u{644}\u{645}\u{62F}\u{649} \u{627}\u{644}\u{632}\u{645}\u{646}\u{64A} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}: ${e.dateRange}`,
	startRangeSelectionPrompt: "انقر لبدء عملية تحديد نطاق التاريخ",
	todayDate: (e) => `\u{627}\u{644}\u{64A}\u{648}\u{645}\u{60C} ${e.date}`,
	todayDateSelected: (e) => `\u{627}\u{644}\u{64A}\u{648}\u{645}\u{60C} ${e.date} \u{645}\u{62D}\u{62F}\u{62F}`
};
// node_modules/react-aria/dist/private/intl/calendar/bg-BG.mjs
var yi = {};
yi = {
	dateRange: (e) => `${e.startDate} \u{434}\u{43E} ${e.endDate}`,
	dateSelected: (e) => `\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{43E} \u{435} ${e.date}`,
	finishRangeSelectionPrompt: "Натиснете, за да довършите избора на времеви интервал",
	maximumDate: "Последна налична дата",
	minimumDate: "Първа налична дата",
	next: "Напред",
	previous: "Назад",
	selectedDateDescription: (e) => `\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,
	selectedRangeDescription: (e) => `\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.dateRange}`,
	startRangeSelectionPrompt: "Натиснете, за да пристъпите към избора на времеви интервал",
	todayDate: (e) => `\u{414}\u{43D}\u{435}\u{441}, ${e.date}`,
	todayDateSelected: (e) => `\u{414}\u{43D}\u{435}\u{441}, ${e.date} \u{441}\u{430} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438}`
};
// node_modules/react-aria/dist/private/intl/calendar/cs-CZ.mjs
var bi = {};
bi = {
	dateRange: (e) => `${e.startDate} a\u{17E} ${e.endDate}`,
	dateSelected: (e) => `Vybr\xe1no ${e.date}`,
	finishRangeSelectionPrompt: "Kliknutím dokončíte výběr rozsahu dat",
	maximumDate: "Poslední dostupné datum",
	minimumDate: "První dostupné datum",
	next: "Další",
	previous: "Předchozí",
	selectedDateDescription: (e) => `Vybran\xe9 datum: ${e.date}`,
	selectedRangeDescription: (e) => `Vybran\xe9 obdob\xed: ${e.dateRange}`,
	startRangeSelectionPrompt: "Kliknutím zahájíte výběr rozsahu dat",
	todayDate: (e) => `Dnes, ${e.date}`,
	todayDateSelected: (e) => `Dnes, vybr\xe1no ${e.date}`
};
// node_modules/react-aria/dist/private/intl/calendar/da-DK.mjs
var xi = {};
xi = {
	dateRange: (e) => `${e.startDate} til ${e.endDate}`,
	dateSelected: (e) => `${e.date} valgt`,
	finishRangeSelectionPrompt: "Klik for at fuldføre valg af datoområde",
	maximumDate: "Sidste ledige dato",
	minimumDate: "Første ledige dato",
	next: "Næste",
	previous: "Forrige",
	selectedDateDescription: (e) => `Valgt dato: ${e.date}`,
	selectedRangeDescription: (e) => `Valgt interval: ${e.dateRange}`,
	startRangeSelectionPrompt: "Klik for at starte valg af datoområde",
	todayDate: (e) => `I dag, ${e.date}`,
	todayDateSelected: (e) => `I dag, ${e.date} valgt`
};
// node_modules/react-aria/dist/private/intl/calendar/de-DE.mjs
var Si = {};
Si = {
	dateRange: (e) => `${e.startDate} bis ${e.endDate}`,
	dateSelected: (e) => `${e.date} ausgew\xe4hlt`,
	finishRangeSelectionPrompt: "Klicken, um die Auswahl des Datumsbereichs zu beenden",
	maximumDate: "Letztes verfügbares Datum",
	minimumDate: "Erstes verfügbares Datum",
	next: "Weiter",
	previous: "Zurück",
	selectedDateDescription: (e) => `Ausgew\xe4hltes Datum: ${e.date}`,
	selectedRangeDescription: (e) => `Ausgew\xe4hlter Bereich: ${e.dateRange}`,
	startRangeSelectionPrompt: "Klicken, um die Auswahl des Datumsbereichs zu beginnen",
	todayDate: (e) => `Heute, ${e.date}`,
	todayDateSelected: (e) => `Heute, ${e.date} ausgew\xe4hlt`
};
// node_modules/react-aria/dist/private/intl/calendar/el-GR.mjs
var Ci = {};
Ci = {
	dateRange: (e) => `${e.startDate} \u{3AD}\u{3C9}\u{3C2} ${e.endDate}`,
	dateSelected: (e) => `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B5} ${e.date}`,
	finishRangeSelectionPrompt: "Κάντε κλικ για να ολοκληρώσετε την επιλογή εύρους ημερομηνιών",
	maximumDate: "Τελευταία διαθέσιμη ημερομηνία",
	minimumDate: "Πρώτη διαθέσιμη ημερομηνία",
	next: "Επόμενο",
	previous: "Προηγούμενο",
	selectedDateDescription: (e) => `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1}: ${e.date}`,
	selectedRangeDescription: (e) => `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3BF} \u{3B5}\u{3CD}\u{3C1}\u{3BF}\u{3C2}: ${e.dateRange}`,
	startRangeSelectionPrompt: "Κάντε κλικ για να ξεκινήσετε την επιλογή εύρους ημερομηνιών",
	todayDate: (e) => `\u{3A3}\u{3AE}\u{3BC}\u{3B5}\u{3C1}\u{3B1}, ${e.date}`,
	todayDateSelected: (e) => `\u{3A3}\u{3AE}\u{3BC}\u{3B5}\u{3C1}\u{3B1}, \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3C4}\u{3B7}\u{3BA}\u{3B5} ${e.date}`
};
// node_modules/react-aria/dist/private/intl/calendar/en-US.mjs
var wi = {};
wi = {
	previous: "Previous",
	next: "Next",
	selectedDateDescription: (e) => `Selected Date: ${e.date}`,
	selectedRangeDescription: (e) => `Selected Range: ${e.dateRange}`,
	todayDate: (e) => `Today, ${e.date}`,
	todayDateSelected: (e) => `Today, ${e.date} selected`,
	dateSelected: (e) => `${e.date} selected`,
	startRangeSelectionPrompt: "Click to start selecting date range",
	finishRangeSelectionPrompt: "Click to finish selecting date range",
	minimumDate: "First available date",
	maximumDate: "Last available date",
	dateRange: (e) => `${e.startDate} to ${e.endDate}`
};
// node_modules/react-aria/dist/private/intl/calendar/es-ES.mjs
var Ti = {};
Ti = {
	dateRange: (e) => `${e.startDate} a ${e.endDate}`,
	dateSelected: (e) => `${e.date} seleccionado`,
	finishRangeSelectionPrompt: "Haga clic para terminar de seleccionar rango de fechas",
	maximumDate: "Última fecha disponible",
	minimumDate: "Primera fecha disponible",
	next: "Siguiente",
	previous: "Anterior",
	selectedDateDescription: (e) => `Fecha seleccionada: ${e.date}`,
	selectedRangeDescription: (e) => `Intervalo seleccionado: ${e.dateRange}`,
	startRangeSelectionPrompt: "Haga clic para comenzar a seleccionar un rango de fechas",
	todayDate: (e) => `Hoy, ${e.date}`,
	todayDateSelected: (e) => `Hoy, ${e.date} seleccionado`
};
// node_modules/react-aria/dist/private/intl/calendar/et-EE.mjs
var Ei = {};
Ei = {
	dateRange: (e) => `${e.startDate} kuni ${e.endDate}`,
	dateSelected: (e) => `${e.date} valitud`,
	finishRangeSelectionPrompt: "Klõpsake kuupäevavahemiku valimise lõpetamiseks",
	maximumDate: "Viimane saadaolev kuupäev",
	minimumDate: "Esimene saadaolev kuupäev",
	next: "Järgmine",
	previous: "Eelmine",
	selectedDateDescription: (e) => `Valitud kuup\xe4ev: ${e.date}`,
	selectedRangeDescription: (e) => `Valitud vahemik: ${e.dateRange}`,
	startRangeSelectionPrompt: "Klõpsake kuupäevavahemiku valimiseks",
	todayDate: (e) => `T\xe4na, ${e.date}`,
	todayDateSelected: (e) => `T\xe4na, ${e.date} valitud`
};
// node_modules/react-aria/dist/private/intl/calendar/fi-FI.mjs
var Di = {};
Di = {
	dateRange: (e) => `${e.startDate} \u{2013} ${e.endDate}`,
	dateSelected: (e) => `${e.date} valittu`,
	finishRangeSelectionPrompt: "Lopeta päivämääräalueen valinta napsauttamalla tätä.",
	maximumDate: "Viimeinen varattavissa oleva päivämäärä",
	minimumDate: "Ensimmäinen varattavissa oleva päivämäärä",
	next: "Seuraava",
	previous: "Edellinen",
	selectedDateDescription: (e) => `Valittu p\xe4iv\xe4m\xe4\xe4r\xe4: ${e.date}`,
	selectedRangeDescription: (e) => `Valittu aikav\xe4li: ${e.dateRange}`,
	startRangeSelectionPrompt: "Aloita päivämääräalueen valinta napsauttamalla tätä.",
	todayDate: (e) => `T\xe4n\xe4\xe4n, ${e.date}`,
	todayDateSelected: (e) => `T\xe4n\xe4\xe4n, ${e.date} valittu`
};
// node_modules/react-aria/dist/private/intl/calendar/fr-FR.mjs
var Oi = {};
Oi = {
	dateRange: (e) => `${e.startDate} \xe0 ${e.endDate}`,
	dateSelected: (e) => `${e.date} s\xe9lectionn\xe9`,
	finishRangeSelectionPrompt: "Cliquer pour finir de sélectionner la plage de dates",
	maximumDate: "Dernière date disponible",
	minimumDate: "Première date disponible",
	next: "Suivant",
	previous: "Précédent",
	selectedDateDescription: (e) => `Date s\xe9lectionn\xe9e\xa0: ${e.date}`,
	selectedRangeDescription: (e) => `Plage s\xe9lectionn\xe9e\xa0: ${e.dateRange}`,
	startRangeSelectionPrompt: "Cliquer pour commencer à sélectionner la plage de dates",
	todayDate: (e) => `Aujourd'hui, ${e.date}`,
	todayDateSelected: (e) => `Aujourd\u{2019}hui, ${e.date} s\xe9lectionn\xe9`
};
// node_modules/react-aria/dist/private/intl/calendar/he-IL.mjs
var ki = {};
ki = {
	dateRange: (e) => `${e.startDate} \u{5E2}\u{5D3} ${e.endDate}`,
	dateSelected: (e) => `${e.date} \u{5E0}\u{5D1}\u{5D7}\u{5E8}`,
	finishRangeSelectionPrompt: "חץ כדי לסיים את בחירת טווח התאריכים",
	maximumDate: "תאריך פנוי אחרון",
	minimumDate: "תאריך פנוי ראשון",
	next: "הבא",
	previous: "הקודם",
	selectedDateDescription: (e) => `\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${e.date}`,
	selectedRangeDescription: (e) => `\u{5D8}\u{5D5}\u{5D5}\u{5D7} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${e.dateRange}`,
	startRangeSelectionPrompt: "לחץ כדי להתחיל בבחירת טווח התאריכים",
	todayDate: (e) => `\u{5D4}\u{5D9}\u{5D5}\u{5DD}, ${e.date}`,
	todayDateSelected: (e) => `\u{5D4}\u{5D9}\u{5D5}\u{5DD}, ${e.date} \u{5E0}\u{5D1}\u{5D7}\u{5E8}`
};
// node_modules/react-aria/dist/private/intl/calendar/hr-HR.mjs
var Ai = {};
Ai = {
	dateRange: (e) => `${e.startDate} do ${e.endDate}`,
	dateSelected: (e) => `${e.date} odabran`,
	finishRangeSelectionPrompt: "Kliknite da dovršite raspon odabranih datuma",
	maximumDate: "Posljednji raspoloživi datum",
	minimumDate: "Prvi raspoloživi datum",
	next: "Sljedeći",
	previous: "Prethodni",
	selectedDateDescription: (e) => `Odabrani datum: ${e.date}`,
	selectedRangeDescription: (e) => `Odabrani raspon: ${e.dateRange}`,
	startRangeSelectionPrompt: "Kliknite da započnete raspon odabranih datuma",
	todayDate: (e) => `Danas, ${e.date}`,
	todayDateSelected: (e) => `Danas, odabran ${e.date}`
};
// node_modules/react-aria/dist/private/intl/calendar/hu-HU.mjs
var ji = {};
ji = {
	dateRange: (e) => `${e.startDate}\u{2013}${e.endDate}`,
	dateSelected: (e) => `${e.date} kiv\xe1lasztva`,
	finishRangeSelectionPrompt: "Kattintson a dátumtartomány kijelölésének befejezéséhez",
	maximumDate: "Utolsó elérhető dátum",
	minimumDate: "Az első elérhető dátum",
	next: "Következő",
	previous: "Előző",
	selectedDateDescription: (e) => `Kijel\xf6lt d\xe1tum: ${e.date}`,
	selectedRangeDescription: (e) => `Kijel\xf6lt tartom\xe1ny: ${e.dateRange}`,
	startRangeSelectionPrompt: "Kattintson a dátumtartomány kijelölésének indításához",
	todayDate: (e) => `Ma, ${e.date}`,
	todayDateSelected: (e) => `Ma, ${e.date} kijel\xf6lve`
};
// node_modules/react-aria/dist/private/intl/calendar/it-IT.mjs
var Mi = {};
Mi = {
	dateRange: (e) => `Da ${e.startDate} a ${e.endDate}`,
	dateSelected: (e) => `${e.date} selezionata`,
	finishRangeSelectionPrompt: "Fai clic per completare la selezione dell’intervallo di date",
	maximumDate: "Ultima data disponibile",
	minimumDate: "Prima data disponibile",
	next: "Successivo",
	previous: "Precedente",
	selectedDateDescription: (e) => `Data selezionata: ${e.date}`,
	selectedRangeDescription: (e) => `Intervallo selezionato: ${e.dateRange}`,
	startRangeSelectionPrompt: "Fai clic per selezionare l’intervallo di date",
	todayDate: (e) => `Oggi, ${e.date}`,
	todayDateSelected: (e) => `Oggi, ${e.date} selezionata`
};
// node_modules/react-aria/dist/private/intl/calendar/ja-JP.mjs
var Ni = {};
Ni = {
	dateRange: (e) => `${e.startDate} \u{304B}\u{3089} ${e.endDate}`,
	dateSelected: (e) => `${e.date} \u{3092}\u{9078}\u{629E}`,
	finishRangeSelectionPrompt: "クリックして日付範囲の選択を終了",
	maximumDate: "最終利用可能日",
	minimumDate: "最初の利用可能日",
	next: "次へ",
	previous: "前へ",
	selectedDateDescription: (e) => `\u{9078}\u{629E}\u{3057}\u{305F}\u{65E5}\u{4ED8} : ${e.date}`,
	selectedRangeDescription: (e) => `\u{9078}\u{629E}\u{7BC4}\u{56F2} : ${e.dateRange}`,
	startRangeSelectionPrompt: "クリックして日付範囲の選択を開始",
	todayDate: (e) => `\u{672C}\u{65E5}\u{3001}${e.date}`,
	todayDateSelected: (e) => `\u{672C}\u{65E5}\u{3001}${e.date} \u{3092}\u{9078}\u{629E}`
};
// node_modules/react-aria/dist/private/intl/calendar/ko-KR.mjs
var Pi = {};
Pi = {
	dateRange: (e) => `${e.startDate} ~ ${e.endDate}`,
	dateSelected: (e) => `${e.date} \u{C120}\u{D0DD}\u{B428}`,
	finishRangeSelectionPrompt: "날짜 범위 선택을 완료하려면 클릭하십시오.",
	maximumDate: "마지막으로 사용 가능한 일자",
	minimumDate: "처음으로 사용 가능한 일자",
	next: "다음",
	previous: "이전",
	selectedDateDescription: (e) => `\u{C120}\u{D0DD} \u{C77C}\u{C790}: ${e.date}`,
	selectedRangeDescription: (e) => `\u{C120}\u{D0DD} \u{BC94}\u{C704}: ${e.dateRange}`,
	startRangeSelectionPrompt: "날짜 범위 선택을 시작하려면 클릭하십시오.",
	todayDate: (e) => `\u{C624}\u{B298}, ${e.date}`,
	todayDateSelected: (e) => `\u{C624}\u{B298}, ${e.date} \u{C120}\u{D0DD}\u{B428}`
};
// node_modules/react-aria/dist/private/intl/calendar/lt-LT.mjs
var Fi = {};
Fi = {
	dateRange: (e) => `Nuo ${e.startDate} iki ${e.endDate}`,
	dateSelected: (e) => `Pasirinkta ${e.date}`,
	finishRangeSelectionPrompt: "Spustelėkite, kad baigtumėte pasirinkti datų intervalą",
	maximumDate: "Paskutinė galima data",
	minimumDate: "Pirmoji galima data",
	next: "Paskesnis",
	previous: "Ankstesnis",
	selectedDateDescription: (e) => `Pasirinkta data: ${e.date}`,
	selectedRangeDescription: (e) => `Pasirinktas intervalas: ${e.dateRange}`,
	startRangeSelectionPrompt: "Spustelėkite, kad pradėtumėte pasirinkti datų intervalą",
	todayDate: (e) => `\u{160}iandien, ${e.date}`,
	todayDateSelected: (e) => `\u{160}iandien, pasirinkta ${e.date}`
};
// node_modules/react-aria/dist/private/intl/calendar/lv-LV.mjs
var Ii = {};
Ii = {
	dateRange: (e) => `No ${e.startDate} l\u{12B}dz ${e.endDate}`,
	dateSelected: (e) => `Atlas\u{12B}ts: ${e.date}`,
	finishRangeSelectionPrompt: "Noklikšķiniet, lai pabeigtu datumu diapazona atlasi",
	maximumDate: "Pēdējais pieejamais datums",
	minimumDate: "Pirmais pieejamais datums",
	next: "Tālāk",
	previous: "Atpakaļ",
	selectedDateDescription: (e) => `Atlas\u{12B}tais datums: ${e.date}`,
	selectedRangeDescription: (e) => `Atlas\u{12B}tais diapazons: ${e.dateRange}`,
	startRangeSelectionPrompt: "Noklikšķiniet, lai sāktu datumu diapazona atlasi",
	todayDate: (e) => `\u{160}odien, ${e.date}`,
	todayDateSelected: (e) => `Atlas\u{12B}ta \u{161}odiena, ${e.date}`
};
// node_modules/react-aria/dist/private/intl/calendar/nb-NO.mjs
var Li = {};
Li = {
	dateRange: (e) => `${e.startDate} til ${e.endDate}`,
	dateSelected: (e) => `${e.date} valgt`,
	finishRangeSelectionPrompt: "Klikk for å fullføre valg av datoområde",
	maximumDate: "Siste tilgjengelige dato",
	minimumDate: "Første tilgjengelige dato",
	next: "Neste",
	previous: "Forrige",
	selectedDateDescription: (e) => `Valgt dato: ${e.date}`,
	selectedRangeDescription: (e) => `Valgt omr\xe5de: ${e.dateRange}`,
	startRangeSelectionPrompt: "Klikk for å starte valg av datoområde",
	todayDate: (e) => `I dag, ${e.date}`,
	todayDateSelected: (e) => `I dag, ${e.date} valgt`
};
// node_modules/react-aria/dist/private/intl/calendar/nl-NL.mjs
var Ri = {};
Ri = {
	dateRange: (e) => `${e.startDate} tot ${e.endDate}`,
	dateSelected: (e) => `${e.date} geselecteerd`,
	finishRangeSelectionPrompt: "Klik om de selectie van het datumbereik te voltooien",
	maximumDate: "Laatste beschikbare datum",
	minimumDate: "Eerste beschikbare datum",
	next: "Volgende",
	previous: "Vorige",
	selectedDateDescription: (e) => `Geselecteerde datum: ${e.date}`,
	selectedRangeDescription: (e) => `Geselecteerd bereik: ${e.dateRange}`,
	startRangeSelectionPrompt: "Klik om het datumbereik te selecteren",
	todayDate: (e) => `Vandaag, ${e.date}`,
	todayDateSelected: (e) => `Vandaag, ${e.date} geselecteerd`
};
// node_modules/react-aria/dist/private/intl/calendar/pl-PL.mjs
var zi = {};
zi = {
	dateRange: (e) => `${e.startDate} do ${e.endDate}`,
	dateSelected: (e) => `Wybrano ${e.date}`,
	finishRangeSelectionPrompt: "Kliknij, aby zakończyć wybór zakresu dat",
	maximumDate: "Ostatnia dostępna data",
	minimumDate: "Pierwsza dostępna data",
	next: "Dalej",
	previous: "Wstecz",
	selectedDateDescription: (e) => `Wybrana data: ${e.date}`,
	selectedRangeDescription: (e) => `Wybrany zakres: ${e.dateRange}`,
	startRangeSelectionPrompt: "Kliknij, aby rozpocząć wybór zakresu dat",
	todayDate: (e) => `Dzisiaj, ${e.date}`,
	todayDateSelected: (e) => `Dzisiaj wybrano ${e.date}`
};
// node_modules/react-aria/dist/private/intl/calendar/pt-BR.mjs
var Bi = {};
Bi = {
	dateRange: (e) => `${e.startDate} a ${e.endDate}`,
	dateSelected: (e) => `${e.date} selecionado`,
	finishRangeSelectionPrompt: "Clique para concluir a seleção do intervalo de datas",
	maximumDate: "Última data disponível",
	minimumDate: "Primeira data disponível",
	next: "Próximo",
	previous: "Anterior",
	selectedDateDescription: (e) => `Data selecionada: ${e.date}`,
	selectedRangeDescription: (e) => `Intervalo selecionado: ${e.dateRange}`,
	startRangeSelectionPrompt: "Clique para iniciar a seleção do intervalo de datas",
	todayDate: (e) => `Hoje, ${e.date}`,
	todayDateSelected: (e) => `Hoje, ${e.date} selecionado`
};
// node_modules/react-aria/dist/private/intl/calendar/pt-PT.mjs
var Vi = {};
Vi = {
	dateRange: (e) => `${e.startDate} a ${e.endDate}`,
	dateSelected: (e) => `${e.date} selecionado`,
	finishRangeSelectionPrompt: "Clique para terminar de selecionar o intervalo de datas",
	maximumDate: "Última data disponível",
	minimumDate: "Primeira data disponível",
	next: "Próximo",
	previous: "Anterior",
	selectedDateDescription: (e) => `Data selecionada: ${e.date}`,
	selectedRangeDescription: (e) => `Intervalo selecionado: ${e.dateRange}`,
	startRangeSelectionPrompt: "Clique para começar a selecionar o intervalo de datas",
	todayDate: (e) => `Hoje, ${e.date}`,
	todayDateSelected: (e) => `Hoje, ${e.date} selecionado`
};
// node_modules/react-aria/dist/private/intl/calendar/ro-RO.mjs
var Hi = {};
Hi = {
	dateRange: (e) => `De la ${e.startDate} p\xe2n\u{103} la ${e.endDate}`,
	dateSelected: (e) => `${e.date} selectat\u{103}`,
	finishRangeSelectionPrompt: "Apăsaţi pentru a finaliza selecţia razei pentru dată",
	maximumDate: "Ultima dată disponibilă",
	minimumDate: "Prima dată disponibilă",
	next: "Următorul",
	previous: "Înainte",
	selectedDateDescription: (e) => `Dat\u{103} selectat\u{103}: ${e.date}`,
	selectedRangeDescription: (e) => `Interval selectat: ${e.dateRange}`,
	startRangeSelectionPrompt: "Apăsaţi pentru a începe selecţia razei pentru dată",
	todayDate: (e) => `Ast\u{103}zi, ${e.date}`,
	todayDateSelected: (e) => `Azi, ${e.date} selectat\u{103}`
};
// node_modules/react-aria/dist/private/intl/calendar/ru-RU.mjs
var Ui = {};
Ui = {
	dateRange: (e) => `\u{421} ${e.startDate} \u{43F}\u{43E} ${e.endDate}`,
	dateSelected: (e) => `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${e.date}`,
	finishRangeSelectionPrompt: "Щелкните, чтобы завершить выбор диапазона дат",
	maximumDate: "Последняя доступная дата",
	minimumDate: "Первая доступная дата",
	next: "Далее",
	previous: "Назад",
	selectedDateDescription: (e) => `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,
	selectedRangeDescription: (e) => `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{439} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.dateRange}`,
	startRangeSelectionPrompt: "Щелкните, чтобы начать выбор диапазона дат",
	todayDate: (e) => `\u{421}\u{435}\u{433}\u{43E}\u{434}\u{43D}\u{44F}, ${e.date}`,
	todayDateSelected: (e) => `\u{421}\u{435}\u{433}\u{43E}\u{434}\u{43D}\u{44F}, \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${e.date}`
};
// node_modules/react-aria/dist/private/intl/calendar/sk-SK.mjs
var Wi = {};
Wi = {
	dateRange: (e) => `Od ${e.startDate} do ${e.endDate}`,
	dateSelected: (e) => `Vybrat\xfd d\xe1tum ${e.date}`,
	finishRangeSelectionPrompt: "Kliknutím dokončíte výber rozsahu dátumov",
	maximumDate: "Posledný dostupný dátum",
	minimumDate: "Prvý dostupný dátum",
	next: "Nasledujúce",
	previous: "Predchádzajúce",
	selectedDateDescription: (e) => `Vybrat\xfd d\xe1tum: ${e.date}`,
	selectedRangeDescription: (e) => `Vybrat\xfd rozsah: ${e.dateRange}`,
	startRangeSelectionPrompt: "Kliknutím spustíte výber rozsahu dátumov",
	todayDate: (e) => `Dnes ${e.date}`,
	todayDateSelected: (e) => `Vybrat\xfd dne\u{161}n\xfd d\xe1tum ${e.date}`
};
// node_modules/react-aria/dist/private/intl/calendar/sl-SI.mjs
var Gi = {};
Gi = {
	dateRange: (e) => `${e.startDate} do ${e.endDate}`,
	dateSelected: (e) => `${e.date} izbrano`,
	finishRangeSelectionPrompt: "Kliknite za dokončanje izbire datumskega obsega",
	maximumDate: "Zadnji razpoložljivi datum",
	minimumDate: "Prvi razpoložljivi datum",
	next: "Naprej",
	previous: "Nazaj",
	selectedDateDescription: (e) => `Izbrani datum: ${e.date}`,
	selectedRangeDescription: (e) => `Izbrano obmo\u{10D}je: ${e.dateRange}`,
	startRangeSelectionPrompt: "Kliknite za začetek izbire datumskega obsega",
	todayDate: (e) => `Danes, ${e.date}`,
	todayDateSelected: (e) => `Danes, ${e.date} izbrano`
};
// node_modules/react-aria/dist/private/intl/calendar/sr-SP.mjs
var Ki = {};
Ki = {
	dateRange: (e) => `${e.startDate} do ${e.endDate}`,
	dateSelected: (e) => `${e.date} izabran`,
	finishRangeSelectionPrompt: "Kliknite da dovršite opseg izabranih datuma",
	maximumDate: "Zadnji raspoloživi datum",
	minimumDate: "Prvi raspoloživi datum",
	next: "Sledeći",
	previous: "Prethodni",
	selectedDateDescription: (e) => `Izabrani datum: ${e.date}`,
	selectedRangeDescription: (e) => `Izabrani period: ${e.dateRange}`,
	startRangeSelectionPrompt: "Kliknite da započnete opseg izabranih datuma",
	todayDate: (e) => `Danas, ${e.date}`,
	todayDateSelected: (e) => `Danas, izabran ${e.date}`
};
// node_modules/react-aria/dist/private/intl/calendar/sv-SE.mjs
var qi = {};
qi = {
	dateRange: (e) => `${e.startDate} till ${e.endDate}`,
	dateSelected: (e) => `${e.date} har valts`,
	finishRangeSelectionPrompt: "Klicka för att avsluta val av datumintervall",
	maximumDate: "Sista tillgängliga datum",
	minimumDate: "Första tillgängliga datum",
	next: "Nästa",
	previous: "Föregående",
	selectedDateDescription: (e) => `Valt datum: ${e.date}`,
	selectedRangeDescription: (e) => `Valt intervall: ${e.dateRange}`,
	startRangeSelectionPrompt: "Klicka för att välja datumintervall",
	todayDate: (e) => `Idag, ${e.date}`,
	todayDateSelected: (e) => `Idag, ${e.date} har valts`
};
// node_modules/react-aria/dist/private/intl/calendar/tr-TR.mjs
var Ji = {};
Ji = {
	dateRange: (e) => `${e.startDate} - ${e.endDate}`,
	dateSelected: (e) => `${e.date} se\xe7ildi`,
	finishRangeSelectionPrompt: "Tarih aralığı seçimini tamamlamak için tıklayın",
	maximumDate: "Son müsait tarih",
	minimumDate: "İlk müsait tarih",
	next: "Sonraki",
	previous: "Önceki",
	selectedDateDescription: (e) => `Se\xe7ilen Tarih: ${e.date}`,
	selectedRangeDescription: (e) => `Se\xe7ilen Aral\u{131}k: ${e.dateRange}`,
	startRangeSelectionPrompt: "Tarih aralığı seçimini başlatmak için tıklayın",
	todayDate: (e) => `Bug\xfcn, ${e.date}`,
	todayDateSelected: (e) => `Bug\xfcn, ${e.date} se\xe7ildi`
};
// node_modules/react-aria/dist/private/intl/calendar/uk-UA.mjs
var Yi = {};
Yi = {
	dateRange: (e) => `${e.startDate} \u{2014} ${e.endDate}`,
	dateSelected: (e) => `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${e.date}`,
	finishRangeSelectionPrompt: "Натисніть, щоб завершити вибір діапазону дат",
	maximumDate: "Остання доступна дата",
	minimumDate: "Перша доступна дата",
	next: "Наступний",
	previous: "Попередній",
	selectedDateDescription: (e) => `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,
	selectedRangeDescription: (e) => `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{434}\u{456}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.dateRange}`,
	startRangeSelectionPrompt: "Натисніть, щоб почати вибір діапазону дат",
	todayDate: (e) => `\u{421}\u{44C}\u{43E}\u{433}\u{43E}\u{434}\u{43D}\u{456}, ${e.date}`,
	todayDateSelected: (e) => `\u{421}\u{44C}\u{43E}\u{433}\u{43E}\u{434}\u{43D}\u{456}, \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${e.date}`
};
// node_modules/react-aria/dist/private/intl/calendar/zh-CN.mjs
var Xi = {};
Xi = {
	dateRange: (e) => `${e.startDate} \u{81F3} ${e.endDate}`,
	dateSelected: (e) => `\u{5DF2}\u{9009}\u{62E9} ${e.date}`,
	finishRangeSelectionPrompt: "单击以完成选择日期范围",
	maximumDate: "最后一个可用日期",
	minimumDate: "第一个可用日期",
	next: "下一页",
	previous: "上一页",
	selectedDateDescription: (e) => `\u{9009}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${e.date}`,
	selectedRangeDescription: (e) => `\u{9009}\u{5B9A}\u{7684}\u{8303}\u{56F4}\u{FF1A}${e.dateRange}`,
	startRangeSelectionPrompt: "单击以开始选择日期范围",
	todayDate: (e) => `\u{4ECA}\u{5929}\u{FF0C}\u{5373} ${e.date}`,
	todayDateSelected: (e) => `\u{5DF2}\u{9009}\u{62E9}\u{4ECA}\u{5929}\u{FF0C}\u{5373} ${e.date}`
};
// node_modules/react-aria/dist/private/intl/calendar/zh-TW.mjs
var Zi = {};
Zi = {
	dateRange: (e) => `${e.startDate} \u{81F3} ${e.endDate}`,
	dateSelected: (e) => `\u{5DF2}\u{9078}\u{53D6} ${e.date}`,
	finishRangeSelectionPrompt: "按一下以完成選取日期範圍",
	maximumDate: "最後一個可用日期",
	minimumDate: "第一個可用日期",
	next: "下一頁",
	previous: "上一頁",
	selectedDateDescription: (e) => `\u{9078}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${e.date}`,
	selectedRangeDescription: (e) => `\u{9078}\u{5B9A}\u{7684}\u{7BC4}\u{570D}\u{FF1A}${e.dateRange}`,
	startRangeSelectionPrompt: "按一下以開始選取日期範圍",
	todayDate: (e) => `\u{4ECA}\u{5929}\u{FF0C}${e.date}`,
	todayDateSelected: (e) => `\u{5DF2}\u{9078}\u{53D6}\u{4ECA}\u{5929}\u{FF0C}${e.date}`
};
// node_modules/react-aria/dist/private/calendar/intlStrings.mjs
var Qi = {};
Qi = {
	"ar-AE": vi,
	"bg-BG": yi,
	"cs-CZ": bi,
	"da-DK": xi,
	"de-DE": Si,
	"el-GR": Ci,
	"en-US": wi,
	"es-ES": Ti,
	"et-EE": Ei,
	"fi-FI": Di,
	"fr-FR": Oi,
	"he-IL": ki,
	"hr-HR": Ai,
	"hu-HU": ji,
	"it-IT": Mi,
	"ja-JP": Ni,
	"ko-KR": Pi,
	"lt-LT": Fi,
	"lv-LV": Ii,
	"nb-NO": Li,
	"nl-NL": Ri,
	"pl-PL": zi,
	"pt-BR": Bi,
	"pt-PT": Vi,
	"ro-RO": Hi,
	"ru-RU": Ui,
	"sk-SK": Wi,
	"sl-SI": Gi,
	"sr-SP": Ki,
	"sv-SE": qi,
	"tr-TR": Ji,
	"uk-UA": Yi,
	"zh-CN": Xi,
	"zh-TW": Zi
};
// node_modules/react-aria/dist/private/utils/useDeepMemo.mjs
function $i(e, t) {
	let n = (0, v.useRef)(null);
	return e && n.current && t(e, n.current) && (e = n.current), n.current = e, e;
}
// node_modules/@internationalized/date/dist/private/utils.mjs
function ea(e, t) {
	return e - t * Math.floor(e / t);
}
// node_modules/@internationalized/date/dist/private/calendars/GregorianCalendar.mjs
var ta = 1721426;
function U(e, t, n, r) {
	t = ra(e, t);
	let i = t - 1, a = -2;
	return n <= 2 ? a = 0 : na(t) && (a = -1), 1721425 + 365 * i + Math.floor(i / 4) - Math.floor(i / 100) + Math.floor(i / 400) + Math.floor((367 * n - 362) / 12 + a + r);
}
function na(e) {
	return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function ra(e, t) {
	return e === "BC" ? 1 - t : t;
}
function ia(e) {
	let t = "AD";
	return e <= 0 && (t = "BC", e = 1 - e), [t, e];
}
var aa = {
	standard: [
		31,
		28,
		31,
		30,
		31,
		30,
		31,
		31,
		30,
		31,
		30,
		31
	],
	leapyear: [
		31,
		29,
		31,
		30,
		31,
		30,
		31,
		31,
		30,
		31,
		30,
		31
	]
}, oa = class {
	fromJulianDay(e) {
		let t = e, n = t - ta, r = Math.floor(n / 146097), i = ea(n, 146097), a = Math.floor(i / 36524), o = ea(i, 36524), s = Math.floor(o / 1461), c = ea(o, 1461), l = Math.floor(c / 365), [u, d] = ia(r * 400 + a * 100 + s * 4 + l + +(a !== 4 && l !== 4)), f = t - U(u, d, 1, 1), p = 2;
		t < U(u, d, 3, 1) ? p = 0 : na(d) && (p = 1);
		let m = Math.floor(((f + p) * 12 + 373) / 367);
		return new Lo(u, d, m, t - U(u, d, m, 1) + 1);
	}
	toJulianDay(e) {
		return U(e.era, e.year, e.month, e.day);
	}
	getDaysInMonth(e) {
		return aa[na(e.year) ? "leapyear" : "standard"][e.month - 1];
	}
	getMonthsInYear(e) {
		return 12;
	}
	getDaysInYear(e) {
		return na(e.year) ? 366 : 365;
	}
	getMaximumMonthsInYear() {
		return 12;
	}
	getMaximumDaysInMonth() {
		return 31;
	}
	getYearsInEra(e) {
		return 9999;
	}
	getEras() {
		return ["BC", "AD"];
	}
	isInverseEra(e) {
		return e.era === "BC";
	}
	balanceDate(e) {
		e.year <= 0 && (e.era = e.era === "BC" ? "AD" : "BC", e.year = 1 - e.year);
	}
	constructor() {
		this.identifier = "gregory";
	}
}, sa = {
	"001": 1,
	AD: 1,
	AE: 6,
	AF: 6,
	AI: 1,
	AL: 1,
	AM: 1,
	AN: 1,
	AR: 1,
	AT: 1,
	AU: 1,
	AX: 1,
	AZ: 1,
	BA: 1,
	BE: 1,
	BG: 1,
	BH: 6,
	BM: 1,
	BN: 1,
	BY: 1,
	CH: 1,
	CL: 1,
	CM: 1,
	CN: 1,
	CR: 1,
	CY: 1,
	CZ: 1,
	DE: 1,
	DJ: 6,
	DK: 1,
	DZ: 6,
	EC: 1,
	EE: 1,
	EG: 6,
	ES: 1,
	FI: 1,
	FJ: 1,
	FO: 1,
	FR: 1,
	GB: 1,
	GE: 1,
	GF: 1,
	GP: 1,
	GR: 1,
	HR: 1,
	HU: 1,
	IE: 1,
	IQ: 6,
	IR: 6,
	IS: 1,
	IT: 1,
	JO: 6,
	KG: 1,
	KW: 6,
	KZ: 1,
	LB: 1,
	LI: 1,
	LK: 1,
	LT: 1,
	LU: 1,
	LV: 1,
	LY: 6,
	MC: 1,
	MD: 1,
	ME: 1,
	MK: 1,
	MN: 1,
	MQ: 1,
	MV: 5,
	MY: 1,
	NL: 1,
	NO: 1,
	NZ: 1,
	OM: 6,
	PL: 1,
	QA: 6,
	RE: 1,
	RO: 1,
	RS: 1,
	RU: 1,
	SD: 6,
	SE: 1,
	SI: 1,
	SK: 1,
	SM: 1,
	SY: 6,
	TJ: 1,
	TM: 1,
	TR: 1,
	UA: 1,
	UY: 1,
	UZ: 1,
	VA: 1,
	VN: 1,
	XK: 1
};
// node_modules/@internationalized/date/dist/private/queries.mjs
function W(e, t) {
	return t = Ya(t, e.calendar), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function ca(e, t) {
	return t = Ya(t, e.calendar), e = wa(e), t = wa(t), e.era === t.era && e.year === t.year && e.month === t.month;
}
function la(e, t) {
	return t = Ya(t, e.calendar), e = Ea(e), t = Ea(t), e.era === t.era && e.year === t.year;
}
function ua(e, t) {
	return da(e.calendar, t.calendar) && W(e, t);
}
function da(e, t) {
	return e.isEqual?.(t) ?? t.isEqual?.(e) ?? e.identifier === t.identifier;
}
function fa(e, t) {
	return W(e, ga(t));
}
var pa = {
	sun: 0,
	mon: 1,
	tue: 2,
	wed: 3,
	thu: 4,
	fri: 5,
	sat: 6
};
function ma(e, t, n) {
	let r = e.calendar.toJulianDay(e), i = n ? pa[n] : Ma(t), a = Math.ceil(r + 1 - i) % 7;
	return a < 0 && (a += 7), a;
}
function ha(e) {
	return Ka(Date.now(), e);
}
function ga(e) {
	return qa(ha(e));
}
function _a(e, t) {
	return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function va(e, t) {
	return ya(e) - ya(t);
}
function ya(e) {
	return e.hour * 36e5 + e.minute * 6e4 + e.second * 1e3 + e.millisecond;
}
var ba = null, xa = !1;
function Sa() {
	return ba ??= new Intl.DateTimeFormat().resolvedOptions().timeZone, ba;
}
function Ca() {
	return xa;
}
function wa(e) {
	return e.subtract({ days: e.day - 1 });
}
function Ta(e) {
	return e.add({ days: e.calendar.getDaysInMonth(e) - e.day });
}
function Ea(e) {
	return wa(e.subtract({ months: e.month - 1 }));
}
function Da(e, t, n) {
	let r = ma(e, t, n);
	return e.subtract({ days: r });
}
function Oa(e, t, n) {
	return Da(e, t, n).add({ days: 6 });
}
var ka = /* @__PURE__ */ new Map(), Aa = /* @__PURE__ */ new Map();
function ja(e) {
	if (Intl.Locale) {
		let t = ka.get(e);
		return t || (t = new Intl.Locale(e).maximize().region, t && ka.set(e, t)), t;
	}
	let t = e.split("-")[1];
	return t === "u" ? void 0 : t;
}
function Ma(e) {
	let t = Aa.get(e);
	if (!t) {
		if (Intl.Locale) {
			let n = new Intl.Locale(e);
			if ("getWeekInfo" in n && (t = n.getWeekInfo(), t)) return Aa.set(e, t), t.firstDay;
		}
		let n = ja(e);
		if (e.includes("-fw-")) {
			let n = e.split("-fw-")[1].split("-")[0];
			t = n === "mon" ? { firstDay: 1 } : n === "tue" ? { firstDay: 2 } : n === "wed" ? { firstDay: 3 } : n === "thu" ? { firstDay: 4 } : n === "fri" ? { firstDay: 5 } : n === "sat" ? { firstDay: 6 } : { firstDay: 0 };
		} else t = e.includes("-ca-iso8601") ? { firstDay: 1 } : { firstDay: n && sa[n] || 0 };
		Aa.set(e, t);
	}
	return t.firstDay;
}
function Na(e, t, n) {
	let r = e.calendar.getDaysInMonth(e);
	return Math.ceil((ma(wa(e), t, n) + r) / 7);
}
function Pa(e, t) {
	return e && t ? e.compare(t) <= 0 ? e : t : e || t;
}
function Fa(e, t) {
	return e && t ? e.compare(t) >= 0 ? e : t : e || t;
}
// node_modules/@internationalized/date/dist/private/conversion.mjs
function Ia(e) {
	return e = Ya(e, new oa()), La(ra(e.era, e.year), e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function La(e, t, n, r, i, a, o) {
	let s = /* @__PURE__ */ new Date();
	return s.setUTCHours(r, i, a, o), s.setUTCFullYear(e, t - 1, n), s.getTime();
}
function Ra(e, t) {
	if (t === "UTC") return 0;
	if (e > 0 && t === Sa() && !Ca()) return new Date(e).getTimezoneOffset() * -6e4;
	let { year: n, month: r, day: i, hour: a, minute: o, second: s } = Ba(e, t);
	return La(n, r, i, a, o, s, 0) - Math.floor(e / 1e3) * 1e3;
}
var za = /* @__PURE__ */ new Map();
function Ba(e, t) {
	let n = za.get(t);
	n || (n = new Intl.DateTimeFormat("en-US", {
		timeZone: t,
		hour12: !1,
		era: "short",
		year: "numeric",
		month: "numeric",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		second: "numeric"
	}), za.set(t, n));
	let r = n.formatToParts(new Date(e)), i = {};
	for (let e of r) e.type !== "literal" && (i[e.type] = e.value);
	return {
		year: i.era === "BC" || i.era === "B" ? -i.year + 1 : +i.year,
		month: +i.month,
		day: +i.day,
		hour: i.hour === "24" ? 0 : +i.hour,
		minute: +i.minute,
		second: +i.second
	};
}
var Va = 864e5;
function Ha(e, t, n, r) {
	return (n === r ? [n] : [n, r]).filter((n) => Ua(e, t, n));
}
function Ua(e, t, n) {
	let r = Ba(n, t);
	return e.year === r.year && e.month === r.month && e.day === r.day && e.hour === r.hour && e.minute === r.minute && e.second === r.second;
}
function Wa(e, t, n = "compatible") {
	let r = Ja(e);
	if (t === "UTC") return Ia(r);
	if (t === Sa() && n === "compatible" && !Ca()) {
		r = Ya(r, new oa());
		let e = /* @__PURE__ */ new Date(), t = ra(r.era, r.year);
		return e.setFullYear(t, r.month - 1, r.day), e.setHours(r.hour, r.minute, r.second, r.millisecond), e.getTime();
	}
	let i = Ia(r), a = Ra(i - Va, t), o = Ra(i + Va, t), s = Ha(r, t, i - a, i - o);
	if (s.length === 1) return s[0];
	if (s.length > 1) switch (n) {
		case "compatible":
		case "earlier": return s[0];
		case "later": return s[s.length - 1];
		case "reject": throw RangeError("Multiple possible absolute times found");
	}
	switch (n) {
		case "earlier": return Math.min(i - a, i - o);
		case "compatible":
		case "later": return Math.max(i - a, i - o);
		case "reject": throw RangeError("No such absolute time found");
	}
}
function Ga(e, t, n = "compatible") {
	return new Date(Wa(e, t, n));
}
function Ka(e, t) {
	let n = Ra(e, t), r = new Date(e + n), i = r.getUTCFullYear(), a = r.getUTCMonth() + 1, o = r.getUTCDate(), s = r.getUTCHours(), c = r.getUTCMinutes(), l = r.getUTCSeconds(), u = r.getUTCMilliseconds();
	return new zo(i < 1 ? "BC" : "AD", i < 1 ? -i + 1 : i, a, o, t, n, s, c, l, u);
}
function qa(e) {
	return new Lo(e.calendar, e.era, e.year, e.month, e.day);
}
function Ja(e, t) {
	let n = 0, r = 0, i = 0, a = 0;
	if ("timeZone" in e) ({hour: n, minute: r, second: i, millisecond: a} = e);
	else if ("hour" in e && !t) return e;
	return t && ({hour: n, minute: r, second: i, millisecond: a} = t), new G(e.calendar, e.era, e.year, e.month, e.day, n, r, i, a);
}
function Ya(e, t) {
	if (da(e.calendar, t)) return e;
	let n = t.fromJulianDay(e.calendar.toJulianDay(e)), r = e.copy();
	return r.calendar = t, r.era = n.era, r.year = n.year, r.month = n.month, r.day = n.day, oo(r), r;
}
function Xa(e, t, n) {
	return e instanceof zo ? e.timeZone === t ? e : Qa(e, t) : Ka(Wa(e, t, n), t);
}
function Za(e) {
	let t = Ia(e) - e.offset;
	return new Date(t);
}
function Qa(e, t) {
	return Ya(Ka(Ia(e) - e.offset, t), e.calendar);
}
function $a(e) {
	return Qa(e, Sa());
}
// node_modules/@internationalized/date/dist/private/manipulation.mjs
var eo = 36e5;
function to(e, t) {
	let n = e.copy(), r = "hour" in n ? ho(n, t) : 0;
	no(n, t.years || 0), n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e), n.month += t.months || 0, ro(n), ao(n), n.day += (t.weeks || 0) * 7, n.day += t.days || 0, n.day += r, io(n), n.calendar.balanceDate && n.calendar.balanceDate(n), n.year < 1 && (n.year = 1, n.month = 1, n.day = 1);
	let i = n.calendar.getYearsInEra(n);
	if (n.year > i) {
		let e = n.calendar.isInverseEra?.(n);
		n.year = i, n.month = e ? 1 : n.calendar.getMonthsInYear(n), n.day = e ? 1 : n.calendar.getDaysInMonth(n);
	}
	n.month < 1 && (n.month = 1, n.day = 1);
	let a = n.calendar.getMonthsInYear(n);
	return n.month > a && (n.month = a, n.day = n.calendar.getDaysInMonth(n)), n.day = Math.max(1, Math.min(n.calendar.getDaysInMonth(n), n.day)), n;
}
function no(e, t) {
	e.calendar.isInverseEra?.(e) && (t = -t), e.year += t;
}
function ro(e) {
	for (; e.month < 1;) no(e, -1), e.month += e.calendar.getMonthsInYear(e);
	let t = 0;
	for (; e.month > (t = e.calendar.getMonthsInYear(e));) e.month -= t, no(e, 1);
}
function io(e) {
	for (; e.day < 1;) e.month--, ro(e), e.day += e.calendar.getDaysInMonth(e);
	for (; e.day > e.calendar.getDaysInMonth(e);) e.day -= e.calendar.getDaysInMonth(e), e.month++, ro(e);
}
function ao(e) {
	e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day));
}
function oo(e) {
	e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), ao(e);
}
function so(e) {
	let t = {};
	for (let n in e) typeof e[n] == "number" && (t[n] = -e[n]);
	return t;
}
function co(e, t) {
	return to(e, so(t));
}
function lo(e, t) {
	let n = e.copy();
	return t.era != null && (n.era = t.era), t.year != null && (n.year = t.year), t.month != null && (n.month = t.month), t.day != null && (n.day = t.day), oo(n), n;
}
function uo(e, t) {
	let n = e.copy();
	return t.hour != null && (n.hour = t.hour), t.minute != null && (n.minute = t.minute), t.second != null && (n.second = t.second), t.millisecond != null && (n.millisecond = t.millisecond), po(n), n;
}
function fo(e) {
	e.second += Math.floor(e.millisecond / 1e3), e.millisecond = mo(e.millisecond, 1e3), e.minute += Math.floor(e.second / 60), e.second = mo(e.second, 60), e.hour += Math.floor(e.minute / 60), e.minute = mo(e.minute, 60);
	let t = Math.floor(e.hour / 24);
	return e.hour = mo(e.hour, 24), t;
}
function po(e) {
	e.millisecond = Math.max(0, Math.min(e.millisecond, 999)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23));
}
function mo(e, t) {
	let n = e % t;
	return n < 0 && (n += t), n;
}
function ho(e, t) {
	return e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0, fo(e);
}
function go(e, t) {
	let n = e.copy();
	return ho(n, t), n;
}
function _o(e, t) {
	return go(e, so(t));
}
function vo(e, t, n, r) {
	let i = e.copy();
	switch (t) {
		case "era": {
			let t = e.calendar.getEras(), a = t.indexOf(e.era);
			if (a < 0) throw Error("Invalid era: " + e.era);
			a = bo(a, n, 0, t.length - 1, r?.round), i.era = t[a], oo(i);
			break;
		}
		case "year":
			i.calendar.isInverseEra?.(i) && (n = -n), i.year = bo(e.year, n, -Infinity, 9999, r?.round), i.year === -Infinity && (i.year = 1), i.calendar.balanceYearMonth && i.calendar.balanceYearMonth(i, e);
			break;
		case "month":
			i.month = bo(e.month, n, 1, e.calendar.getMonthsInYear(e), r?.round);
			break;
		case "day":
			i.day = bo(e.day, n, 1, e.calendar.getDaysInMonth(e), r?.round);
			break;
		default: throw Error("Unsupported field " + t);
	}
	return e.calendar.balanceDate && e.calendar.balanceDate(i), oo(i), i;
}
function yo(e, t, n, r) {
	let i = e.copy();
	switch (t) {
		case "hour": {
			let t = e.hour, a = 0, o = 23;
			if (r?.hourCycle === 12) {
				let e = t >= 12;
				a = e ? 12 : 0, o = e ? 23 : 11;
			}
			i.hour = bo(t, n, a, o, r?.round);
			break;
		}
		case "minute":
			i.minute = bo(e.minute, n, 0, 59, r?.round);
			break;
		case "second":
			i.second = bo(e.second, n, 0, 59, r?.round);
			break;
		case "millisecond":
			i.millisecond = bo(e.millisecond, n, 0, 999, r?.round);
			break;
		default: throw Error("Unsupported field " + t);
	}
	return i;
}
function bo(e, t, n, r, i = !1) {
	if (i) {
		e += Math.sign(t), e < n && (e = r);
		let i = Math.abs(t);
		e = t > 0 ? Math.ceil(e / i) * i : Math.floor(e / i) * i, e > r && (e = n);
	} else e += t, e < n ? e = r - (n - e - 1) : e > r && (e = n + (e - r - 1));
	return e;
}
function xo(e, t) {
	let n;
	return n = t.years != null && t.years !== 0 || t.months != null && t.months !== 0 || t.weeks != null && t.weeks !== 0 || t.days != null && t.days !== 0 ? Wa(to(Ja(e), {
		years: t.years,
		months: t.months,
		weeks: t.weeks,
		days: t.days
	}), e.timeZone) : Ia(e) - e.offset, n += t.milliseconds || 0, n += (t.seconds || 0) * 1e3, n += (t.minutes || 0) * 6e4, n += (t.hours || 0) * 36e5, Ya(Ka(n, e.timeZone), e.calendar);
}
function So(e, t) {
	return xo(e, so(t));
}
function Co(e, t, n, r) {
	switch (t) {
		case "hour": {
			let t = 0, i = 23;
			if (r?.hourCycle === 12) {
				let n = e.hour >= 12;
				t = n ? 12 : 0, i = n ? 23 : 11;
			}
			let a = Ja(e), o = Ya(uo(a, { hour: t }), new oa()), s = [Wa(o, e.timeZone, "earlier"), Wa(o, e.timeZone, "later")].filter((t) => Ka(t, e.timeZone).day === o.day)[0], c = Ya(uo(a, { hour: i }), new oa()), l = [Wa(c, e.timeZone, "earlier"), Wa(c, e.timeZone, "later")].filter((t) => Ka(t, e.timeZone).day === c.day).pop(), u = Ia(e) - e.offset, d = Math.floor(u / eo), f = u % eo;
			return u = bo(d, n, Math.floor(s / eo), Math.floor(l / eo), r?.round) * eo + f, Ya(Ka(u, e.timeZone), e.calendar);
		}
		case "minute":
		case "second":
		case "millisecond": return yo(e, t, n, r);
		case "era":
		case "year":
		case "month":
		case "day": return Ya(Ka(Wa(vo(Ja(e), t, n, r), e.timeZone), e.timeZone), e.calendar);
		default: throw Error("Unsupported field " + t);
	}
}
function wo(e, t, n) {
	let r = Ja(e), i = uo(lo(r, t), t);
	return i.compare(r) === 0 ? e : Ya(Ka(Wa(i, e.timeZone, n), e.timeZone), e.calendar);
}
// node_modules/@internationalized/date/dist/private/string.mjs
var To = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})$/, Eo = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?$/, Do = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:(?:([+-]\d{2})(?::?(\d{2}))?)|Z)$/;
function Oo(e) {
	let t = e.match(To);
	if (!t) throw Do.test(e) ? Error(`Invalid ISO 8601 date string: ${e}. Use parseAbsolute() instead.`) : Error("Invalid ISO 8601 date string: " + e);
	let n = new Lo(Ao(t[1], 0, 9999), Ao(t[2], 1, 12), 1);
	return n.day = Ao(t[3], 1, n.calendar.getDaysInMonth(n)), n;
}
function ko(e) {
	let t = e.match(Eo);
	if (!t) throw Do.test(e) ? Error(`Invalid ISO 8601 date time string: ${e}. Use parseAbsolute() instead.`) : Error("Invalid ISO 8601 date time string: " + e);
	let n = Ao(t[1], -9999, 9999), r = new G(n < 1 ? "BC" : "AD", n < 1 ? -n + 1 : n, Ao(t[2], 1, 12), 1, t[4] ? Ao(t[4], 0, 23) : 0, t[5] ? Ao(t[5], 0, 59) : 0, t[6] ? Ao(t[6], 0, 59) : 0, t[7] ? Ao(t[7], 0, Infinity) * 1e3 : 0);
	return r.day = Ao(t[3], 0, r.calendar.getDaysInMonth(r)), r;
}
function Ao(e, t, n) {
	let r = Number(e);
	if (r < t || r > n) throw RangeError(`Value out of range: ${t} <= ${r} <= ${n}`);
	return r;
}
function jo(e) {
	return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`;
}
function Mo(e) {
	let t = Ya(e, new oa()), n;
	return n = t.era === "BC" ? t.year === 1 ? "0000" : "-" + String(Math.abs(1 - t.year)).padStart(6, "00") : String(t.year).padStart(4, "0"), `${n}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`;
}
function No(e) {
	return `${Mo(e)}T${jo(e)}`;
}
function Po(e) {
	let t = Math.sign(e) < 0 ? "-" : "+";
	e = Math.abs(e);
	let n = Math.floor(e / 36e5), r = Math.floor(e % 36e5 / 6e4), i = Math.floor(e % 36e5 % 6e4 / 1e3), a = `${t}${String(n).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
	return i !== 0 && (a += `:${String(i).padStart(2, "0")}`), a;
}
function Fo(e) {
	return `${No(e)}${Po(e.offset)}[${e.timeZone}]`;
}
// node_modules/@internationalized/date/dist/private/CalendarDate.mjs
function Io(e) {
	let t = typeof e[0] == "object" ? e.shift() : new oa(), n;
	if (typeof e[0] == "string") n = e.shift();
	else {
		let e = t.getEras();
		n = e[e.length - 1];
	}
	let r = e.shift(), i = e.shift(), a = e.shift();
	return [
		t,
		n,
		r,
		i,
		a
	];
}
var Lo = class e {
	constructor(...e) {
		let [t, n, r, i, a] = Io(e);
		this.calendar = t, this.era = n, this.year = r, this.month = i, this.day = a, oo(this);
	}
	copy() {
		return this.era ? new e(this.calendar, this.era, this.year, this.month, this.day) : new e(this.calendar, this.year, this.month, this.day);
	}
	add(e) {
		return to(this, e);
	}
	subtract(e) {
		return co(this, e);
	}
	set(e) {
		return lo(this, e);
	}
	cycle(e, t, n) {
		return vo(this, e, t, n);
	}
	toDate(e) {
		return Ga(this, e);
	}
	toString() {
		return Mo(this);
	}
	compare(e) {
		return _a(this, e);
	}
}, Ro = class e {
	constructor(e = 0, t = 0, n = 0, r = 0) {
		this.hour = e, this.minute = t, this.second = n, this.millisecond = r, po(this);
	}
	copy() {
		return new e(this.hour, this.minute, this.second, this.millisecond);
	}
	add(e) {
		return go(this, e);
	}
	subtract(e) {
		return _o(this, e);
	}
	set(e) {
		return uo(this, e);
	}
	cycle(e, t, n) {
		return yo(this, e, t, n);
	}
	toString() {
		return jo(this);
	}
	compare(e) {
		return va(this, e);
	}
}, G = class e {
	constructor(...e) {
		let [t, n, r, i, a] = Io(e);
		this.calendar = t, this.era = n, this.year = r, this.month = i, this.day = a, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, oo(this);
	}
	copy() {
		return this.era ? new e(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new e(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
	}
	add(e) {
		return to(this, e);
	}
	subtract(e) {
		return co(this, e);
	}
	set(e) {
		return lo(uo(this, e), e);
	}
	cycle(e, t, n) {
		switch (e) {
			case "era":
			case "year":
			case "month":
			case "day": return vo(this, e, t, n);
			default: return yo(this, e, t, n);
		}
	}
	toDate(e, t) {
		return Ga(this, e, t);
	}
	toString() {
		return No(this);
	}
	compare(e) {
		let t = _a(this, e);
		return t === 0 ? va(this, Ja(e)) : t;
	}
}, zo = class e {
	constructor(...e) {
		let [t, n, r, i, a] = Io(e), o = e.shift(), s = e.shift();
		this.calendar = t, this.era = n, this.year = r, this.month = i, this.day = a, this.timeZone = o, this.offset = s, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, oo(this);
	}
	copy() {
		return this.era ? new e(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new e(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
	}
	add(e) {
		return xo(this, e);
	}
	subtract(e) {
		return So(this, e);
	}
	set(e, t) {
		return wo(this, e, t);
	}
	cycle(e, t, n) {
		return Co(this, e, t, n);
	}
	toDate() {
		return Za(this);
	}
	toString() {
		return Fo(this);
	}
	toAbsoluteString() {
		return this.toDate().toISOString();
	}
	compare(e) {
		return this.toDate().getTime() - Xa(e, this.timeZone).toDate().getTime();
	}
}, Bo = [
	[
		1868,
		9,
		8
	],
	[
		1912,
		7,
		30
	],
	[
		1926,
		12,
		25
	],
	[
		1989,
		1,
		8
	],
	[
		2019,
		5,
		1
	]
], Vo = [
	[
		1912,
		7,
		29
	],
	[
		1926,
		12,
		24
	],
	[
		1989,
		1,
		7
	],
	[
		2019,
		4,
		30
	]
], Ho = [
	1867,
	1911,
	1925,
	1988,
	2018
], Uo = [
	"meiji",
	"taisho",
	"showa",
	"heisei",
	"reiwa"
];
function Wo(e) {
	let t = Bo.findIndex(([t, n, r]) => e.year < t || e.year === t && e.month < n || e.year === t && e.month === n && e.day < r);
	return t === -1 ? Bo.length - 1 : t === 0 ? 0 : t - 1;
}
function Go(e) {
	let t = Ho[Uo.indexOf(e.era)];
	if (!t) throw Error("Unknown era: " + e.era);
	return new Lo(e.year + t, e.month, e.day);
}
var Ko = class extends oa {
	fromJulianDay(e) {
		let t = super.fromJulianDay(e), n = Wo(t);
		return new Lo(this, Uo[n], t.year - Ho[n], t.month, t.day);
	}
	toJulianDay(e) {
		return super.toJulianDay(Go(e));
	}
	balanceDate(e) {
		let t = Go(e), n = Wo(t);
		Uo[n] !== e.era && (e.era = Uo[n], e.year = t.year - Ho[n]), this.constrainDate(e);
	}
	constrainDate(e) {
		let t = Uo.indexOf(e.era), n = Vo[t];
		if (n != null) {
			let [r, i, a] = n, o = r - Ho[t];
			e.year = Math.max(1, Math.min(o, e.year)), e.year === o && (e.month = Math.min(i, e.month), e.month === i && (e.day = Math.min(a, e.day)));
		}
		if (e.year === 1 && t >= 0) {
			let [, n, r] = Bo[t];
			e.month = Math.max(n, e.month), e.month === n && (e.day = Math.max(r, e.day));
		}
	}
	getEras() {
		return Uo;
	}
	getYearsInEra(e) {
		let t = Uo.indexOf(e.era), n = Bo[t], r = Bo[t + 1];
		if (r == null) return 9999 - n[0] + 1;
		let i = r[0] - n[0];
		return (e.month < r[1] || e.month === r[1] && e.day < r[2]) && i++, i;
	}
	getDaysInMonth(e) {
		return super.getDaysInMonth(Go(e));
	}
	getMinimumMonthInYear(e) {
		let t = qo(e);
		return t ? t[1] : 1;
	}
	getMinimumDayInMonth(e) {
		let t = qo(e);
		return t && e.month === t[1] ? t[2] : 1;
	}
	constructor(...e) {
		super(...e), this.identifier = "japanese";
	}
};
function qo(e) {
	if (e.year === 1) return Bo[Uo.indexOf(e.era)];
}
// node_modules/@internationalized/date/dist/private/calendars/BuddhistCalendar.mjs
var Jo = -543, Yo = class extends oa {
	fromJulianDay(e) {
		let t = super.fromJulianDay(e), n = ra(t.era, t.year);
		return new Lo(this, n - Jo, t.month, t.day);
	}
	toJulianDay(e) {
		return super.toJulianDay(Xo(e));
	}
	getEras() {
		return ["BE"];
	}
	getDaysInMonth(e) {
		return super.getDaysInMonth(Xo(e));
	}
	balanceDate() {}
	constructor(...e) {
		super(...e), this.identifier = "buddhist";
	}
};
function Xo(e) {
	let [t, n] = ia(e.year + Jo);
	return new Lo(t, n, e.month, e.day);
}
// node_modules/@internationalized/date/dist/private/calendars/TaiwanCalendar.mjs
var Zo = 1911;
function Qo(e) {
	return e.era === "minguo" ? e.year + Zo : 1 - e.year + Zo;
}
function $o(e) {
	let t = e - Zo;
	return t > 0 ? ["minguo", t] : ["before_minguo", 1 - t];
}
var es = class extends oa {
	fromJulianDay(e) {
		let t = super.fromJulianDay(e), [n, r] = $o(ra(t.era, t.year));
		return new Lo(this, n, r, t.month, t.day);
	}
	toJulianDay(e) {
		return super.toJulianDay(ts(e));
	}
	getEras() {
		return ["before_minguo", "minguo"];
	}
	balanceDate(e) {
		let [t, n] = $o(Qo(e));
		e.era = t, e.year = n;
	}
	isInverseEra(e) {
		return e.era === "before_minguo";
	}
	getDaysInMonth(e) {
		return super.getDaysInMonth(ts(e));
	}
	getYearsInEra(e) {
		return e.era === "before_minguo" ? 9999 : 8088;
	}
	constructor(...e) {
		super(...e), this.identifier = "roc";
	}
};
function ts(e) {
	let [t, n] = ia(Qo(e));
	return new Lo(t, n, e.month, e.day);
}
// node_modules/@internationalized/date/dist/private/calendars/PersianCalendar.mjs
var ns = 1948320, rs = [
	0,
	31,
	62,
	93,
	124,
	155,
	186,
	216,
	246,
	276,
	306,
	336
], is = class {
	fromJulianDay(e) {
		let t = e - ns, n = 1 + Math.floor((33 * t + 3) / 12053), r = t - (365 * (n - 1) + Math.floor((8 * n + 21) / 33)), i = Math.floor(r < 216 ? r / 31 : (r - 6) / 30), a = r - rs[i] + 1;
		return new Lo(this, n, i + 1, a);
	}
	toJulianDay(e) {
		let t = 1948319 + 365 * (e.year - 1) + Math.floor((8 * e.year + 21) / 33);
		return t += rs[e.month - 1], t += e.day, t;
	}
	getMonthsInYear() {
		return 12;
	}
	getDaysInMonth(e) {
		return e.month <= 6 ? 31 : e.month <= 11 || ea(25 * e.year + 11, 33) < 8 ? 30 : 29;
	}
	getMaximumMonthsInYear() {
		return 12;
	}
	getMaximumDaysInMonth() {
		return 31;
	}
	getEras() {
		return ["AP"];
	}
	getYearsInEra() {
		return 9377;
	}
	constructor() {
		this.identifier = "persian";
	}
}, as = 78, os = 80, ss = class extends oa {
	fromJulianDay(e) {
		let t = super.fromJulianDay(e), n = t.year - as, r = e - U(t.era, t.year, 1, 1), i;
		r < os ? (n--, i = na(t.year - 1) ? 31 : 30, r += i + 155 + 90 + 10) : (i = na(t.year) ? 31 : 30, r -= os);
		let a, o;
		if (r < i) a = 1, o = r + 1;
		else {
			let e = r - i;
			e < 155 ? (a = Math.floor(e / 31) + 2, o = e % 31 + 1) : (e -= 155, a = Math.floor(e / 30) + 7, o = e % 30 + 1);
		}
		return new Lo(this, n, a, o);
	}
	toJulianDay(e) {
		let [t, n] = ia(e.year + as), r, i;
		return na(n) ? (r = 31, i = U(t, n, 3, 21)) : (r = 30, i = U(t, n, 3, 22)), e.month === 1 ? i + e.day - 1 : (i += r + Math.min(e.month - 2, 5) * 31, e.month >= 8 && (i += (e.month - 7) * 30), i += e.day - 1, i);
	}
	getDaysInMonth(e) {
		return e.month === 1 && na(e.year + as) || e.month >= 2 && e.month <= 6 ? 31 : 30;
	}
	getYearsInEra() {
		return 9919;
	}
	getEras() {
		return ["saka"];
	}
	balanceDate() {}
	constructor(...e) {
		super(...e), this.identifier = "indian";
	}
}, cs = 1948440, ls = 1948439, us = 1300, ds = 1600, fs = 460322;
function ps(e, t, n, r) {
	return r + Math.ceil(29.5 * (n - 1)) + (t - 1) * 354 + Math.floor((3 + 11 * t) / 30) + e - 1;
}
function ms(e, t, n) {
	let r = Math.floor((30 * (n - t) + 10646) / 10631), i = Math.min(12, Math.ceil((n - (29 + ps(t, r, 1, 1))) / 29.5) + 1);
	return new Lo(e, r, i, n - ps(t, r, i, 1) + 1);
}
function hs(e) {
	return (14 + 11 * e) % 30 < 11;
}
var gs = class {
	fromJulianDay(e) {
		return ms(this, cs, e);
	}
	toJulianDay(e) {
		return ps(cs, e.year, e.month, e.day);
	}
	getDaysInMonth(e) {
		let t = 29 + e.month % 2;
		return e.month === 12 && hs(e.year) && t++, t;
	}
	getMonthsInYear() {
		return 12;
	}
	getDaysInYear(e) {
		return hs(e.year) ? 355 : 354;
	}
	getMaximumMonthsInYear() {
		return 12;
	}
	getMaximumDaysInMonth() {
		return 30;
	}
	getYearsInEra() {
		return 9665;
	}
	getEras() {
		return ["AH"];
	}
	constructor() {
		this.identifier = "islamic-civil";
	}
}, _s = class extends gs {
	fromJulianDay(e) {
		return ms(this, ls, e);
	}
	toJulianDay(e) {
		return ps(ls, e.year, e.month, e.day);
	}
	constructor(...e) {
		super(...e), this.identifier = "islamic-tbla";
	}
}, vs = "qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=", ys, bs;
function xs(e) {
	return fs + bs[e - us];
}
function Ss(e, t) {
	let n = e - us, r = 1 << 11 - (t - 1);
	return (ys[n] & r) === 0 ? 29 : 30;
}
function Cs(e, t) {
	let n = xs(e);
	for (let r = 1; r < t; r++) n += Ss(e, r);
	return n;
}
function ws(e) {
	return bs[e + 1 - us] - bs[e - us];
}
var Ts = class extends gs {
	constructor() {
		if (super(), this.identifier = "islamic-umalqura", ys ||= new Uint16Array(Uint8Array.from(atob(vs), (e) => e.charCodeAt(0)).buffer), !bs) {
			bs = /* @__PURE__ */ new Uint32Array(301);
			let e = 0;
			for (let t = us; t <= ds; t++) {
				bs[t - us] = e;
				for (let n = 1; n <= 12; n++) e += Ss(t, n);
			}
		}
	}
	fromJulianDay(e) {
		let t = e - cs, n = xs(us), r = xs(ds);
		if (t < n || t > r) return super.fromJulianDay(e);
		{
			let e = 1299, n = 1, r = 1;
			for (; r > 0;) {
				e++, r = t - xs(e) + 1;
				let i = ws(e);
				if (r === i) {
					n = 12;
					break;
				}
				if (r < i) {
					let t = Ss(e, n);
					for (n = 1; r > t;) r -= t, n++, t = Ss(e, n);
					break;
				}
			}
			return new Lo(this, e, n, t - Cs(e, n) + 1);
		}
	}
	toJulianDay(e) {
		return e.year < us || e.year > ds ? super.toJulianDay(e) : cs + Cs(e.year, e.month) + (e.day - 1);
	}
	getDaysInMonth(e) {
		return e.year < us || e.year > ds ? super.getDaysInMonth(e) : Ss(e.year, e.month);
	}
	getDaysInYear(e) {
		return e.year < us || e.year > ds ? super.getDaysInYear(e) : ws(e.year);
	}
}, Es = 347997, Ds = 25920, Os = 765433;
function ks(e) {
	return ea(e * 7 + 1, 19) < 7;
}
function As(e) {
	let t = Math.floor((235 * e - 234) / 19), n = 12084 + 13753 * t, r = t * 29 + Math.floor(n / 25920);
	return ea(3 * (r + 1), 7) < 3 && (r += 1), r;
}
function js(e) {
	let t = As(e - 1), n = As(e);
	return As(e + 1) - n === 356 ? 2 : +(n - t === 382);
}
function Ms(e) {
	return As(e) + js(e);
}
function Ns(e) {
	return Ms(e + 1) - Ms(e);
}
function Ps(e) {
	let t = Ns(e);
	switch (t > 380 && (t -= 30), t) {
		case 353: return 0;
		case 354: return 1;
		case 355: return 2;
	}
}
function Fs(e, t) {
	if (t >= 6 && !ks(e) && t++, t === 4 || t === 7 || t === 9 || t === 11 || t === 13) return 29;
	let n = Ps(e);
	return t === 2 ? n === 2 ? 30 : 29 : t === 3 ? n === 0 ? 29 : 30 : t === 6 ? ks(e) ? 30 : 0 : 30;
}
var Is = class {
	fromJulianDay(e) {
		let t = e - Es, n = t * Ds / Os, r = Math.floor((19 * n + 234) / 235) + 1, i = Ms(r), a = Math.floor(t - i);
		for (; a < 1;) r--, i = Ms(r), a = Math.floor(t - i);
		let o = 1, s = 0;
		for (; s < a;) s += Fs(r, o), o++;
		o--, s -= Fs(r, o);
		let c = a - s;
		return new Lo(this, r, o, c);
	}
	toJulianDay(e) {
		let t = Ms(e.year);
		for (let n = 1; n < e.month; n++) t += Fs(e.year, n);
		return t + e.day + Es;
	}
	getDaysInMonth(e) {
		return Fs(e.year, e.month);
	}
	getMonthsInYear(e) {
		return ks(e.year) ? 13 : 12;
	}
	getDaysInYear(e) {
		return Ns(e.year);
	}
	getMaximumMonthsInYear() {
		return 13;
	}
	getMaximumDaysInMonth() {
		return 30;
	}
	getYearsInEra() {
		return 9999;
	}
	getEras() {
		return ["AM"];
	}
	balanceYearMonth(e, t) {
		t.year !== e.year && (ks(t.year) && !ks(e.year) && t.month > 6 ? e.month-- : !ks(t.year) && ks(e.year) && t.month > 6 && e.month++);
	}
	constructor() {
		this.identifier = "hebrew";
	}
}, Ls = 1723856, Rs = 1824665, zs = 5500;
function Bs(e, t, n, r) {
	return e + 365 * t + Math.floor(t / 4) + 30 * (n - 1) + r - 1;
}
function Vs(e, t) {
	let n = Math.floor(4 * (t - e) / 1461);
	t >= Bs(e, n + 1, 1, 1) && n++;
	let r = 1 + Math.floor((t - Bs(e, n, 1, 1)) / 30), i = t + 1 - Bs(e, n, r, 1);
	return [
		n,
		r,
		i
	];
}
function Hs(e) {
	return Math.floor(e % 4 / 3);
}
function Us(e, t) {
	return t % 13 == 0 ? Hs(e) + 5 : 30;
}
var Ws = class {
	fromJulianDay(e) {
		let [t, n, r] = Vs(Ls, e), i = "AM";
		return t <= 0 && (i = "AA", t += zs), new Lo(this, i, t, n, r);
	}
	toJulianDay(e) {
		let t = e.year;
		return e.era === "AA" && (t -= zs), Bs(Ls, t, e.month, e.day);
	}
	getDaysInMonth(e) {
		return Us(e.year, e.month);
	}
	getMonthsInYear() {
		return 13;
	}
	getDaysInYear(e) {
		return 365 + Hs(e.year);
	}
	getMaximumMonthsInYear() {
		return 13;
	}
	getMaximumDaysInMonth() {
		return 30;
	}
	getYearsInEra(e) {
		return e.era === "AA" ? 9999 : 9991;
	}
	getEras() {
		return ["AA", "AM"];
	}
	constructor() {
		this.identifier = "ethiopic";
	}
}, Gs = class extends Ws {
	fromJulianDay(e) {
		let [t, n, r] = Vs(Ls, e);
		return t += zs, new Lo(this, "AA", t, n, r);
	}
	getEras() {
		return ["AA"];
	}
	getYearsInEra() {
		return 9999;
	}
	constructor(...e) {
		super(...e), this.identifier = "ethioaa";
	}
}, Ks = class extends Ws {
	fromJulianDay(e) {
		let [t, n, r] = Vs(Rs, e), i = "CE";
		return t <= 0 && (i = "BCE", t = 1 - t), new Lo(this, i, t, n, r);
	}
	toJulianDay(e) {
		let t = e.year;
		return e.era === "BCE" && (t = 1 - t), Bs(Rs, t, e.month, e.day);
	}
	getDaysInMonth(e) {
		let t = e.year;
		return e.era === "BCE" && (t = 1 - t), Us(t, e.month);
	}
	isInverseEra(e) {
		return e.era === "BCE";
	}
	balanceDate(e) {
		e.year <= 0 && (e.era = e.era === "BCE" ? "CE" : "BCE", e.year = 1 - e.year);
	}
	getEras() {
		return ["BCE", "CE"];
	}
	getYearsInEra(e) {
		return e.era === "BCE" ? 9999 : 9715;
	}
	constructor(...e) {
		super(...e), this.identifier = "coptic";
	}
};
// node_modules/@internationalized/date/dist/private/createCalendar.mjs
function qs(e) {
	switch (e) {
		case "buddhist": return new Yo();
		case "ethiopic": return new Ws();
		case "ethioaa": return new Gs();
		case "coptic": return new Ks();
		case "hebrew": return new Is();
		case "indian": return new ss();
		case "islamic-civil": return new gs();
		case "islamic-tbla": return new _s();
		case "islamic-umalqura": return new Ts();
		case "japanese": return new Ko();
		case "persian": return new is();
		case "roc": return new es();
		default: return new oa();
	}
}
// node_modules/@internationalized/date/dist/private/DateFormatter.mjs
var Js = /* @__PURE__ */ new Map(), Ys = class {
	constructor(e, t = {}) {
		this.formatter = Zs(e, t), this.options = t;
	}
	format(e) {
		return this.formatter.format(e);
	}
	formatToParts(e) {
		return this.formatter.formatToParts(e);
	}
	formatRange(e, t) {
		if (typeof this.formatter.formatRange == "function") return this.formatter.formatRange(e, t);
		if (t < e) throw RangeError("End date must be >= start date");
		return `${this.formatter.format(e)} \u{2013} ${this.formatter.format(t)}`;
	}
	formatRangeToParts(e, t) {
		if (typeof this.formatter.formatRangeToParts == "function") return this.formatter.formatRangeToParts(e, t);
		if (t < e) throw RangeError("End date must be >= start date");
		let n = this.formatter.formatToParts(e), r = this.formatter.formatToParts(t);
		return [
			...n.map((e) => ({
				...e,
				source: "startRange"
			})),
			{
				type: "literal",
				value: " – ",
				source: "shared"
			},
			...r.map((e) => ({
				...e,
				source: "endRange"
			}))
		];
	}
	resolvedOptions() {
		let e = this.formatter.resolvedOptions();
		return tc() && (this.resolvedHourCycle ||= nc(e.locale, this.options), e.hourCycle = this.resolvedHourCycle, e.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), e.calendar === "ethiopic-amete-alem" && (e.calendar = "ethioaa"), e;
	}
}, Xs = {
	true: { ja: "h11" },
	false: {}
};
function Zs(e, t = {}) {
	if (typeof t.hour12 == "boolean" && $s()) {
		t = { ...t };
		let n = Xs[String(t.hour12)][e.split("-")[0]], r = t.hour12 ? "h12" : "h23";
		t.hourCycle = n ?? r, delete t.hour12;
	}
	let n = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
	if (Js.has(n)) return Js.get(n);
	let r = new Intl.DateTimeFormat(e, t);
	return Js.set(n, r), r;
}
var Qs = null;
function $s() {
	return Qs ??= new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		hour12: !1
	}).format(new Date(2020, 2, 3, 0)) === "24", Qs;
}
var ec = null;
function tc() {
	return ec ??= new Intl.DateTimeFormat("fr", {
		hour: "numeric",
		hour12: !1
	}).resolvedOptions().hourCycle === "h12", ec;
}
function nc(e, t) {
	if (!t.timeStyle && !t.hour) return;
	e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), e += (e.includes("-u-") ? "" : "-u") + "-nu-latn";
	let n = Zs(e, {
		...t,
		timeZone: void 0
	}), r = parseInt(n.formatToParts(new Date(2020, 2, 3, 0)).find((e) => e.type === "hour").value, 10), i = parseInt(n.formatToParts(new Date(2020, 2, 3, 23)).find((e) => e.type === "hour").value, 10);
	if (r === 0 && i === 23) return "h23";
	if (r === 24 && i === 23) return "h24";
	if (r === 0 && i === 11) return "h11";
	if (r === 12 && i === 11) return "h12";
	throw Error("Unexpected hour cycle result");
}
// node_modules/react-aria/dist/private/i18n/useDateFormatter.mjs
function rc(e) {
	e = $i(e ?? {}, ic);
	let { locale: t } = an();
	return (0, v.useMemo)(() => new Ys(t, e), [t, e]);
}
function ic(e, t) {
	if (e === t) return !0;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let r of n) if (t[r] !== e[r]) return !1;
	return !0;
}
// node_modules/react-aria/dist/private/calendar/utils.mjs
function ac(e) {
	return e && e.__esModule ? e.default : e;
}
var oc = /* @__PURE__ */ new WeakMap();
function sc(e) {
	return e?.calendar.identifier === "gregory" && e.era === "BC" ? "short" : void 0;
}
function cc(e) {
	let t = yn(ac(Qi), "@react-aria/calendar"), n, r;
	"highlightedRange" in e ? {start: n, end: r} = e.highlightedRange || {} : (n = Array.isArray(e.value) ? e.value[0] : e.value ?? void 0, r = Array.isArray(e.value) ? e.value.at(-1) : e.value ?? void 0);
	let i = rc({
		weekday: "long",
		month: "long",
		year: "numeric",
		day: "numeric",
		era: sc(n) || sc(r),
		timeZone: e.timeZone
	}), { locale: a } = an(), o = (0, v.useMemo)(() => new Intl.ListFormat(a), [a]), s = "anchorDate" in e ? e.anchorDate : null;
	return (0, v.useMemo)(() => {
		if (!s && n && r) {
			if (W(n, r)) {
				let r = i.format(n.toDate(e.timeZone));
				return t.format("selectedDateDescription", { date: r });
			}
			if ("highlightedRange" in e) {
				let a = uc(i, t, n, r, e.timeZone);
				return t.format("selectedRangeDescription", { dateRange: a });
			}
			if (Array.isArray(e.value)) {
				let n = e.value.map((t) => i.format(t.toDate(e.timeZone))), r = o.format(n);
				return t.format("selectedDateDescription", { date: r });
			}
		}
		return "";
	}, [
		n,
		r,
		s,
		e,
		t,
		i,
		o
	]);
}
function lc(e, t, n, r) {
	let i = yn(ac(Qi), "@react-aria/calendar"), a = sc(e) || sc(t), o = rc({
		month: "long",
		year: "numeric",
		era: a,
		calendar: e.calendar.identifier,
		timeZone: n
	}), s = rc({
		month: "long",
		year: "numeric",
		day: "numeric",
		era: a,
		calendar: e.calendar.identifier,
		timeZone: n
	});
	return (0, v.useMemo)(() => {
		if (W(e, wa(e))) {
			let a = e, s = t;
			if (e.calendar.getFormattableMonth && (a = e.calendar.getFormattableMonth(e)), t.calendar.getFormattableMonth && (s = t.calendar.getFormattableMonth(t)), W(t, Ta(e))) return o.format(a.toDate(n));
			if (W(t, Ta(t))) return r ? uc(o, i, a, s, n) : o.formatRange(a.toDate(n), s.toDate(n));
		}
		return r ? uc(s, i, e, t, n) : s.formatRange(e.toDate(n), t.toDate(n));
	}, [
		e,
		t,
		o,
		s,
		i,
		n,
		r
	]);
}
function uc(e, t, n, r, i) {
	let a = e.formatRangeToParts(n.toDate(i), r.toDate(i)), o = -1;
	for (let e = 0; e < a.length; e++) {
		let t = a[e];
		if (t.source === "shared" && t.type === "literal") o = e;
		else if (t.source === "endRange") break;
	}
	let s = "", c = "";
	for (let e = 0; e < a.length; e++) e < o ? s += a[e].value : e > o && (c += a[e].value);
	return t.format("dateRange", {
		startDate: s,
		endDate: c
	});
}
// node_modules/react-aria/dist/private/utils/useUpdateEffect.mjs
function dc(e, t) {
	let n = (0, v.useRef)(!0), r = (0, v.useRef)(null), i = H(e);
	(0, v.useEffect)(() => (n.current = !0, () => {
		n.current = !1;
	}), []), (0, v.useEffect)(() => {
		let e = r.current;
		n.current ? n.current = !1 : (!e || t.some((t, n) => !Object.is(t, e[n]))) && i(), r.current = t;
	}, t);
}
// node_modules/react-aria/dist/private/calendar/useCalendarBase.mjs
function fc(e) {
	return e && e.__esModule ? e.default : e;
}
function pc(e, t) {
	let n = yn(fc(Qi), "@react-aria/calendar"), r = ar(e), i = lc(t.visibleRange.start, t.visibleRange.end, t.timeZone, !1), a = lc(t.visibleRange.start, t.visibleRange.end, t.timeZone, !0);
	dc(() => {
		t.isFocused || si(a);
	}, [a]);
	let o = cc(t);
	dc(() => {
		o && si(o, "polite", 4e3);
	}, [o]);
	let s = ae([
		!!e.errorMessage,
		e.isInvalid,
		e.validationState
	]);
	oc.set(t, {
		ariaLabel: e["aria-label"],
		ariaLabelledBy: e["aria-labelledby"],
		errorMessageId: s,
		selectedDateDescription: o
	});
	let [c, l] = (0, v.useState)(!1), u = e.isDisabled || t.isNextVisibleRangeInvalid();
	u && c && (l(!1), t.setFocused(!0));
	let [d, f] = (0, v.useState)(!1), p = e.isDisabled || t.isPreviousVisibleRangeInvalid();
	return p && d && (f(!1), t.setFocused(!0)), {
		calendarProps: ue(r, Wt({
			id: e.id,
			"aria-label": [e["aria-label"], a].filter(Boolean).join(", "),
			"aria-labelledby": e["aria-labelledby"]
		}), {
			role: "application",
			"aria-details": e["aria-details"] || void 0,
			"aria-describedby": e["aria-describedby"] || void 0
		}),
		nextButtonProps: {
			onPress: () => t.focusNextPage(),
			"aria-label": n.format("next"),
			isDisabled: u,
			onFocusChange: l
		},
		prevButtonProps: {
			onPress: () => t.focusPreviousPage(),
			"aria-label": n.format("previous"),
			isDisabled: p,
			onFocusChange: f
		},
		errorMessageProps: { id: s },
		title: i
	};
}
// node_modules/react-aria/dist/private/calendar/useCalendar.mjs
function mc(e, t) {
	return pc(e, t);
}
// node_modules/react-aria/dist/private/calendar/useCalendarGrid.mjs
function hc(e, t) {
	let { startDate: n = t.visibleRange.start, endDate: r = t.visibleRange.end, firstDayOfWeek: i } = e, { direction: a } = an(), { keyboardProps: o } = Gn({ shortcuts: {
		End: () => {
			t.focusSectionEnd();
		},
		Home: () => {
			t.focusSectionStart();
		},
		Escape: () => ("setAnchorDate" in t && t.setAnchorDate(null), !1)
	} }), { keyboardProps: s } = Gn({
		shortcuts: {
			Enter: () => {
				t.selectFocusedDate();
			},
			" ": () => {
				t.selectFocusedDate();
			},
			PageUp: () => {
				t.focusPreviousSection();
			},
			"Shift+PageUp": () => {
				t.focusPreviousSection(!0);
			},
			PageDown: () => {
				t.focusNextSection();
			},
			"Shift+PageDown": () => {
				t.focusNextSection(!0);
			},
			ArrowLeft: () => {
				a === "rtl" ? t.focusNextDay() : t.focusPreviousDay();
			},
			ArrowUp: () => {
				t.focusPreviousRow();
			},
			ArrowRight: () => {
				a === "rtl" ? t.focusPreviousDay() : t.focusNextDay();
			},
			ArrowDown: () => {
				t.focusNextRow();
			}
		},
		allowRepeats: !0
	}), c = lc(n, r, t.timeZone, !0), { ariaLabel: l, ariaLabelledBy: u } = oc.get(t), d = Wt({
		"aria-label": [l, c].filter(Boolean).join(", "),
		"aria-labelledby": u
	}), f = rc({
		weekday: e.weekdayStyle || "narrow",
		timeZone: t.timeZone
	}), { locale: p } = an(), m = (0, v.useMemo)(() => {
		let e = t.visibleDuration.days && t.visibleDuration.days < 7, r = e ? n : Da(ga(t.timeZone), p, i), a = e ? t.visibleDuration.days : 7;
		return [...Array(a).keys()].map((e) => {
			let n = r.add({ days: e }).toDate(t.timeZone);
			return f.format(n);
		});
	}, [
		p,
		t.timeZone,
		f,
		i,
		n,
		t.visibleDuration.days
	]), h = t.getWeeksInMonth(n);
	return {
		gridProps: ue(d, {
			role: "grid",
			"aria-readonly": t.isReadOnly || void 0,
			"aria-disabled": t.isDisabled || void 0,
			"aria-multiselectable": "highlightedRange" in t || t.selectionMode === "multiple" || void 0,
			onFocus: () => t.setFocused(!0),
			onBlur: () => t.setFocused(!1)
		}, o, s),
		headerProps: { "aria-hidden": !0 },
		weekDays: m,
		weeksInMonth: h
	};
}
// node_modules/react-aria/dist/private/utils/isScrollable.mjs
function gc(e, t) {
	if (!e) return !1;
	let n = window.getComputedStyle(e), r = document.scrollingElement || document.documentElement, i = /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
	return e === r && n.overflow !== "hidden" && (i = !0), i && t && (i = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), i;
}
// node_modules/react-aria/dist/private/utils/getScrollParent.mjs
function _c(e, t) {
	let n = e;
	for (gc(n, t) && (n = n.parentElement); n && !gc(n, t);) n = n.parentElement;
	return n || document.scrollingElement || document.documentElement;
}
// node_modules/react-aria/dist/private/utils/getScrollParents.mjs
function vc(e, t) {
	let n = [], r = document.scrollingElement || document.documentElement;
	for (; e && (gc(e, t) && n.push(e), e !== r);) e = e.parentElement;
	return n;
}
// node_modules/react-aria/dist/private/utils/scrollIntoView.mjs
function yc(e, t, n = {}) {
	e !== t && bc(e, t, t.getBoundingClientRect(), n);
}
function bc(e, t, n, r = {}) {
	let { block: i = "nearest", inline: a = "nearest" } = r, o = e.scrollTop, s = e.scrollLeft, c = e.getBoundingClientRect(), l = window.getComputedStyle(t), u = window.getComputedStyle(e), d = document.scrollingElement || document.documentElement, f = e === d, p = e === d ? 0 : c.top, m = e === d ? e.clientHeight : c.bottom, h = e === d ? 0 : c.left, g = e === d ? e.clientWidth : c.right, _ = parseFloat(l.scrollMarginTop) || 0, v = parseFloat(l.scrollMarginBottom) || 0, y = parseFloat(l.scrollMarginLeft) || 0, b = parseFloat(l.scrollMarginRight) || 0, x = parseFloat(u.scrollPaddingTop) || 0, S = parseFloat(u.scrollPaddingBottom) || 0, C = parseFloat(u.scrollPaddingLeft) || 0, w = parseFloat(u.scrollPaddingRight) || 0, T = parseFloat(u.borderTopWidth) || 0, E = parseFloat(u.borderBottomWidth) || 0, D = parseFloat(u.borderLeftWidth) || 0, O = parseFloat(u.borderRightWidth) || 0, k = n.top - _, ee = n.bottom + v, A = n.left - y, j = n.right + b, te = e === d ? 0 : D + O, ne = e === d ? 0 : T + E, M = e === d ? 0 : e.offsetWidth - e.clientWidth - te, N = e === d ? 0 : e.offsetHeight - e.clientHeight - ne, re = p + (f ? 0 : T) + x, ie = m - (f ? 0 : E) - S - N, ae = h + (f ? 0 : D) + C, oe = g - (f ? 0 : O) - w;
	$e() && et() || u.direction === "ltr" ? oe -= M : u.direction === "rtl" && (ae += M);
	let se = k < re || ee > ie, ce = A < ae || j > oe;
	if (se && i === "start") o += k - re;
	else if (se && i === "center") o += (k + ee) / 2 - (re + ie) / 2;
	else if (se && i === "end") o += ee - ie;
	else if (se && i === "nearest") {
		let e = k - re, t = ee - ie;
		o += Math.abs(e) <= Math.abs(t) ? e : t;
	}
	if (ce && a === "start") s += A - ae;
	else if (ce && a === "center") s += (A + j) / 2 - (ae + oe) / 2;
	else if (ce && a === "end") s += j - oe;
	else if (ce && a === "nearest") {
		let e = A - ae, t = j - oe;
		s += Math.abs(e) <= Math.abs(t) ? e : t;
	}
	e.scrollTo({
		left: s,
		top: o
	});
}
function xc(e, t = {}) {
	let { containingElement: n } = t;
	if (e && e.isConnected) {
		let t = document.scrollingElement || document.documentElement;
		if (window.getComputedStyle(t).overflow !== "hidden") {
			let { left: t, top: r } = e.getBoundingClientRect();
			e?.scrollIntoView?.({ block: "nearest" });
			let { left: i, top: a } = e.getBoundingClientRect();
			(Math.abs(t - i) > 1 || Math.abs(r - a) > 1) && (n?.scrollIntoView?.({
				block: "center",
				inline: "center"
			}), e.scrollIntoView?.({ block: "nearest" }));
		} else {
			let { left: t, top: r } = e.getBoundingClientRect(), i = vc(e, !0);
			for (let t of i) yc(t, e);
			let { left: a, top: o } = e.getBoundingClientRect();
			if (Math.abs(t - a) > 1 || Math.abs(r - o) > 1) {
				i = n ? vc(n, !0) : [];
				for (let e of i) yc(e, n, {
					block: "center",
					inline: "center"
				});
				for (let t of vc(e, !0)) yc(t, e);
			}
		}
	}
}
// node_modules/react-aria/dist/private/utils/useDescription.mjs
var Sc = 0, Cc = /* @__PURE__ */ new Map();
function wc(e) {
	let [t, n] = (0, v.useState)();
	return y(() => {
		if (!e) return;
		let t = Cc.get(e);
		if (t) n(t.element.id);
		else {
			let r = `react-aria-description-${Sc++}`;
			n(r);
			let i = document.createElement("div");
			i.id = r, i.style.display = "none", i.textContent = e, document.body.appendChild(i), t = {
				refCount: 0,
				element: i
			}, Cc.set(e, t);
		}
		return t.refCount++, () => {
			t && --t.refCount === 0 && (t.element.remove(), Cc.delete(e));
		};
	}, [e]), { "aria-describedby": e ? t : void 0 };
}
// node_modules/react-aria/dist/private/calendar/useCalendarCell.mjs
function Tc(e) {
	return e && e.__esModule ? e.default : e;
}
function Ec(e, t, n) {
	let { date: r, isDisabled: i } = e, { errorMessageId: a, selectedDateDescription: o } = oc.get(t), s = yn(Tc(Qi), "@react-aria/calendar"), c = rc({
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric",
		era: sc(r),
		timeZone: t.timeZone
	}), l = t.isCellFocused(r) && !e.isOutsideMonth;
	i = i || t.isCellDisabled(r) || !!e.isOutsideMonth;
	let u = t.isCellUnavailable(r), d = !i && !u, f = t.isSelected(r) && d, p = !1;
	t.isValueInvalid && ("highlightedRange" in t ? p = !t.anchorDate && t.highlightedRange != null && r.compare(t.highlightedRange.start) >= 0 && r.compare(t.highlightedRange.end) <= 0 : Array.isArray(t.value) ? p = t.value.some((e) => W(e, r)) : t.value && (p = W(t.value, r))), p && !i && (f = !0), r = $i(r, ua);
	let m = (0, v.useMemo)(() => r.toDate(t.timeZone), [r, t.timeZone]), h = fa(r, t.timeZone), g = (0, v.useMemo)(() => {
		let e = "";
		return "highlightedRange" in t && t.value && !t.anchorDate && (W(r, t.value.start) || W(r, t.value.end)) && (e = o + ", "), e += c.format(m), h ? e = s.format(f ? "todayDateSelected" : "todayDate", { date: e }) : f && (e = s.format("dateSelected", { date: e })), t.minValue && W(r, t.minValue) ? e += ", " + s.format("minimumDate") : t.maxValue && W(r, t.maxValue) && (e += ", " + s.format("maximumDate")), e;
	}, [
		c,
		m,
		s,
		f,
		h,
		r,
		t,
		o
	]), _ = "";
	"anchorDate" in t && l && !t.isReadOnly && d && (_ = t.anchorDate ? s.format("finishRangeSelectionPrompt") : s.format("startRangeSelectionPrompt"));
	let y = wc(_), b = (0, v.useRef)(!1), x = (0, v.useRef)(!1), S = (0, v.useRef)(void 0), { pressProps: C, isPressed: w } = xr({
		shouldCancelOnPointerExit: "anchorDate" in t && !!t.anchorDate,
		preventFocusOnPress: !0,
		isDisabled: !d || t.isReadOnly,
		onPressStart(e) {
			if (t.isReadOnly) t.setFocusedDate(r), t.setFocused(!0);
			else if ("highlightedRange" in t && !t.anchorDate && (e.pointerType === "mouse" || e.pointerType === "touch")) {
				if (t.highlightedRange && !p) {
					if (W(r, t.highlightedRange.start)) {
						t.setAnchorDate(t.highlightedRange.end), t.setFocusedDate(r), t.setFocused(!0), t.setDragging(!0), x.current = !0;
						return;
					}
					if (W(r, t.highlightedRange.end)) {
						t.setAnchorDate(t.highlightedRange.start), t.setFocusedDate(r), t.setFocused(!0), t.setDragging(!0), x.current = !0;
						return;
					}
				}
				let n = () => {
					t.setDragging(!0), S.current = void 0, t.selectDate(r), t.setFocusedDate(r), t.setFocused(!0), b.current = !0;
				};
				e.pointerType === "touch" ? S.current = setTimeout(n, 200) : n();
			}
		},
		onPressEnd() {
			x.current = !1, b.current = !1, clearTimeout(S.current), S.current = void 0;
		},
		onPress() {
			!("anchorDate" in t) && !t.isReadOnly && (t.selectDate(r), t.setFocusedDate(r), t.setFocused(!0));
		},
		onPressUp(e) {
			t.isReadOnly || ("anchorDate" in t && S.current && (t.selectDate(r), t.setFocusedDate(r), t.setFocused(!0)), "anchorDate" in t && (x.current ? t.setAnchorDate(r) : t.anchorDate && !b.current ? (t.selectDate(r), t.setFocusedDate(r), t.setFocused(!0)) : e.pointerType === "keyboard" && !t.anchorDate ? (t.selectDate(r), t.focusNearestAvailableDate(r)) : e.pointerType === "virtual" && (t.selectDate(r), t.setFocusedDate(r), t.setFocused(!0))));
		}
	}), T;
	i || (T = W(r, t.focusedDate) ? 0 : -1), (0, v.useEffect)(() => {
		l && n.current && (je(n.current), wt() !== "pointer" && z() === n.current && xc(n.current, { containingElement: _c(n.current) }));
	}, [l, n]);
	let E = rc({
		day: "numeric",
		timeZone: t.timeZone,
		calendar: r.calendar.identifier
	}), D = (0, v.useMemo)(() => E.formatToParts(m).find((e) => e.type === "day").value, [E, m]);
	return {
		cellProps: {
			role: "gridcell",
			"aria-disabled": !d || void 0,
			"aria-selected": f || void 0,
			"aria-invalid": p || void 0
		},
		buttonProps: ue(C, {
			onFocus() {
				i || (t.setFocusedDate(r), t.setFocused(!0));
			},
			tabIndex: T,
			role: "button",
			"aria-disabled": !d || void 0,
			"aria-label": g,
			"aria-invalid": p || void 0,
			"aria-describedby": [p ? a : void 0, y["aria-describedby"]].filter(Boolean).join(" ") || void 0,
			onPointerEnter(e) {
				"highlightDate" in t && (e.pointerType !== "touch" || t.isDragging) && d && t.highlightDate(r);
			},
			onPointerDown(e) {
				let t = B(e);
				t instanceof HTMLElement && "releasePointerCapture" in t && ("hasPointerCapture" in t ? t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId) : t.releasePointerCapture(e.pointerId));
			},
			onContextMenu(e) {
				e.preventDefault();
			}
		}),
		isPressed: w,
		isFocused: l,
		isSelected: f,
		isDisabled: i,
		isUnavailable: u,
		isOutsideVisibleRange: r.compare(t.visibleRange.start) < 0 || r.compare(t.visibleRange.end) > 0,
		isInvalid: p,
		formattedDate: D
	};
}
// node_modules/react-aria/dist/private/calendar/useCalendarYearPicker.mjs
function Dc(e, t) {
	let n = rc({
		year: e.format?.year || "numeric",
		era: e.format?.era || (t.focusedDate.calendar.identifier === "gregory" && t.focusedDate.era === "BC" ? "short" : void 0),
		calendar: t.focusedDate.calendar.identifier,
		timeZone: t.timeZone
	}), r = e.visibleYears || 20, i = t.focusedDate.subtract({ years: Math.floor(r / 2) }), a = t.focusedDate.add({ years: Math.ceil(r / 2) - 1 });
	t.maxValue && a.compare(t.maxValue) > 0 && (a = qa(t.maxValue), i = a.subtract({ years: r - 1 })), t.minValue && i.compare(t.minValue) < 0 && (i = qa(t.minValue), a = i.add({ years: r - 1 }), t.maxValue && a.compare(t.maxValue) > 0 && (a = qa(t.maxValue)));
	let o = [], s = i, c = 0;
	for (; s.compare(a) <= 0 || la(s, a);) {
		let e = s.compare(a) > 0 ? a : s;
		la(e, t.focusedDate) && (c = o.length), o.push({
			id: o.length,
			date: e,
			formatted: n.format(e.toDate(t.timeZone))
		}), s = s.add({ years: 1 });
	}
	let { locale: l } = an();
	return {
		"aria-label": (0, v.useMemo)(() => new Intl.DisplayNames(l, { type: "dateTimeField" }).of("year"), [l]),
		value: c,
		onChange: (e) => {
			e != null && t.setFocusedDate(o[e].date);
		},
		items: o
	};
}
// node_modules/react-aria/dist/private/calendar/useCalendarHeading.mjs
function Oc(e, t) {
	let n = (0, v.useMemo)(() => {
		let n = t.visibleRange.start;
		return e.offset && (n = n.add(e.offset)), n;
	}, [t.visibleRange.start, e.offset]), r = t.visibleDuration.days || t.visibleDuration.weeks, i = rc({
		day: e.format?.day || (r ? "numeric" : void 0),
		month: e.format?.month || "long",
		year: e.format?.year || "numeric",
		era: e.format?.era || n && n.calendar.identifier === "gregory" && n.era === "BC" ? "short" : void 0,
		calendar: t.visibleRange?.start.calendar.identifier,
		timeZone: t.timeZone
	});
	return (0, v.useMemo)(() => {
		if (r) return i.formatRange(n.toDate(t.timeZone), t.visibleRange.end.toDate(t.timeZone));
		let e = n.calendar.getFormattableMonth ? n.calendar.getFormattableMonth(n) : n;
		return i.format(e.toDate(t.timeZone));
	}, [
		i,
		r,
		n,
		t.timeZone,
		t.visibleRange.end
	]);
}
// node_modules/react-stately/dist/private/calendar/utils.mjs
function kc(e, t, n) {
	return t != null && e.compare(t) < 0 || n != null && e.compare(n) > 0;
}
function Ac(e, t, n, r, i) {
	let a = {};
	for (let e in t) a[e] = Math.floor(t[e] / 2), a[e] > 0 && t[e] % 2 == 0 && a[e]--;
	return Nc(e, jc(e, t, n).subtract(a), t, n, r, i);
}
function jc(e, t, n, r, i) {
	let a = e;
	return t.years ? a = Ea(e) : t.months ? a = wa(e) : (t.weeks || t.days && t.days > 7) && (a = Da(e, n)), Nc(e, a, t, n, r, i);
}
function Mc(e, t, n, r, i) {
	let a = { ...t };
	return a.days ? a.days-- : a.weeks ? a.weeks-- : a.months ? a.months-- : a.years && a.years--, Nc(e, jc(e, t, n).subtract(a), t, n, r, i);
}
function Nc(e, t, n, r, i, a) {
	if (i && e.compare(i) >= 0) {
		let e = Fa(t, jc(qa(i), n, r));
		e && (t = e);
	}
	if (a && e.compare(a) <= 0) {
		let e = Pa(t, Mc(qa(a), n, r));
		e && (t = e);
	}
	return t;
}
function Pc(e, t, n) {
	if (t) {
		let n = Fa(e, qa(t));
		n && (e = n);
	}
	if (n) {
		let t = Pa(e, qa(n));
		t && (e = t);
	}
	return e;
}
function Fc(e, t, n) {
	if (!n) return e;
	for (; e.compare(t) >= 0 && n(e);) e = e.subtract({ days: 1 });
	return e.compare(t) >= 0 ? e : null;
}
function Ic(e, t) {
	return e === t || e.days === t.days && e.weeks === t.weeks && e.months === t.months && e.years === t.years;
}
// node_modules/react-stately/dist/private/calendar/useCalendarState.mjs
function Lc(e) {
	let t = (0, v.useMemo)(() => new Ys(e.locale), [e.locale]), n = (0, v.useMemo)(() => t.resolvedOptions(), [t]), { locale: r, createCalendar: i, visibleDuration: a = { months: 1 }, minValue: o, maxValue: s, selectionAlignment: c, isDateUnavailable: l, pageBehavior: u = "visible", selectionMode: d = "single", firstDayOfWeek: f, weeksInMonth: p } = e, m = (0, v.useMemo)(() => i(n.calendar), [i, n.calendar]), [h, g] = xn(e.value, e.defaultValue ?? null, e.onChange), _ = (0, v.useMemo)(() => Array.isArray(h) ? h.map((e) => Ya(qa(e), m)) : h ? Ya(qa(h), m) : null, [h, m]), y = (0, v.useMemo)(() => {
		let e = Array.isArray(h) ? h[0] : h;
		return e && "timeZone" in e ? e.timeZone : n.timeZone;
	}, [h, n.timeZone]), [b, x] = xn((0, v.useMemo)(() => e.focusedValue ? Pc(Ya(qa(e.focusedValue), m), o, s) : void 0, [
		e.focusedValue,
		m,
		o,
		s
	]), (0, v.useMemo)(() => e.defaultFocusedValue ? Pc(Ya(qa(e.defaultFocusedValue), m), o, s) : Pc(_ ? Array.isArray(_) ? _[0] : _ : Ya(ga(y), m), o, s), [
		e.defaultFocusedValue,
		_,
		y,
		m,
		o,
		s
	]), e.onFocusChange), S = () => {
		switch (c) {
			case "start": return jc(b, a, r, o, s);
			case "end": return Mc(b, a, r, o, s);
			default: return Ac(b, a, r, o, s);
		}
	}, [C, w] = (0, v.useState)(S), [T, E] = (0, v.useState)(e.autoFocus || !1), [D, O] = (0, v.useState)(a);
	Ic(a, D) || (O(a), w(S()));
	let k = (0, v.useMemo)(() => {
		let e = { ...a };
		return e.days ? e.days-- : e.days = -1, C.add(e);
	}, [C, a]), [ee, A] = (0, v.useState)(m);
	if (!da(m, ee)) {
		let e = Ya(b, m);
		w(Ac(e, a, r, o, s)), x(e), A(m);
	}
	kc(b, o, s) ? x(Pc(b, o, s)) : b.compare(C) < 0 ? w(Mc(b, a, r, o, s)) : b.compare(k) > 0 && w(jc(b, a, r, o, s));
	function j(e) {
		e = Pc(e, o, s), x(e);
	}
	function te(e) {
		let t = Pc(e, o, s), n = Fc(t, o ?? Pa(t, C), l);
		if (!n) return null;
		let r = Array.isArray(h) ? h[0] : h, i = Ya(n, r?.calendar || new oa());
		return r && "hour" in r ? r.set(i) : i;
	}
	function ne(t) {
		if (!e.isDisabled && !e.isReadOnly) {
			if (t === null) {
				g(d === "multiple" ? [] : null);
				return;
			}
			if (Array.isArray(t)) g(t.map(te).filter(Boolean));
			else {
				let e = te(t);
				e && g(e);
			}
		}
	}
	let M = (0, v.useMemo)(() => _ ? Array.isArray(_) ? _.some((e) => l?.(e) || kc(e, o, s)) : l?.(_) || kc(_, o, s) : !1, [
		_,
		l,
		o,
		s
	]), N = e.isInvalid || e.validationState === "invalid" || M, re = N ? "invalid" : null, ie = (0, v.useMemo)(() => u === "visible" ? a : Rc(a), [u, a]);
	return {
		isDisabled: e.isDisabled ?? !1,
		isReadOnly: e.isReadOnly ?? !1,
		value: _,
		setValue: ne,
		selectionMode: d,
		visibleDuration: a,
		visibleRange: {
			start: C,
			end: k
		},
		minValue: o,
		maxValue: s,
		focusedDate: b,
		timeZone: y,
		validationState: re,
		isValueInvalid: N,
		setFocusedDate(e) {
			j(e);
		},
		focusNextDay() {
			j(b.add({ days: 1 }));
		},
		focusPreviousDay() {
			j(b.subtract({ days: 1 }));
		},
		focusNextRow() {
			a.days ? this.focusNextPage() : (a.weeks || a.months || a.years) && j(b.add({ weeks: 1 }));
		},
		focusPreviousRow() {
			a.days ? this.focusPreviousPage() : (a.weeks || a.months || a.years) && j(b.subtract({ weeks: 1 }));
		},
		focusNextPage() {
			let e = C.add(ie);
			x(Pc(b.add(ie), o, s)), w(jc(Nc(b, e, ie, r, o, s), ie, r));
		},
		focusPreviousPage() {
			let e = C.subtract(ie);
			x(Pc(b.subtract(ie), o, s)), w(jc(Nc(b, e, ie, r, o, s), ie, r));
		},
		focusSectionStart() {
			a.days ? j(C) : a.weeks ? j(Da(b, r)) : (a.months || a.years) && j(wa(b));
		},
		focusSectionEnd() {
			a.days ? j(k) : a.weeks ? j(Oa(b, r)) : (a.months || a.years) && j(Ta(b));
		},
		focusNextSection(e) {
			!e && !a.days ? j(b.add(Rc(a))) : a.days ? this.focusNextPage() : a.weeks ? j(b.add({ months: 1 })) : (a.months || a.years) && j(b.add({ years: 1 }));
		},
		focusPreviousSection(e) {
			!e && !a.days ? j(b.subtract(Rc(a))) : a.days ? this.focusPreviousPage() : a.weeks ? j(b.subtract({ months: 1 })) : (a.months || a.years) && j(b.subtract({ years: 1 }));
		},
		selectFocusedDate() {
			l && l(b) || this.selectDate(b);
		},
		selectDate(t) {
			if (!(e.isDisabled || e.isReadOnly)) {
				if (d === "multiple" && t != null) {
					let e = te(t);
					if (!e) return;
					let n = [];
					Array.isArray(h) ? n = h : h != null && (n = [h]);
					let r = n.findIndex((t) => W(t, e)), i = r >= 0 ? n.slice(0, r).concat(n.slice(r + 1)) : [...n, e];
					g(i);
				} else ne(t);
			}
		},
		isFocused: T,
		setFocused: E,
		isInvalid(e) {
			return kc(e, o, s);
		},
		isSelected(e) {
			return !_ || this.isCellDisabled(e) || this.isCellUnavailable(e) ? !1 : Array.isArray(_) ? _.some((t) => W(t, e)) : W(e, _);
		},
		isCellFocused(e) {
			return T && b && W(e, b);
		},
		isCellDisabled(t) {
			return e.isDisabled || t.compare(C) < 0 || t.compare(k) > 0 || this.isInvalid(t);
		},
		isCellUnavailable(t) {
			return e.isDateUnavailable ? e.isDateUnavailable(t) : !1;
		},
		isPreviousVisibleRangeInvalid() {
			let e = C.subtract({ days: 1 });
			return W(e, C) || this.isInvalid(e);
		},
		isNextVisibleRangeInvalid() {
			let e = k.add({ days: 1 });
			return W(e, k) || this.isInvalid(e);
		},
		getDatesInWeek(e, t = C) {
			let n = t.add({ weeks: e }), i = [], o = a.days && a.days < 7 ? a.days : 7;
			if (o === 7) {
				n = Da(n, r, f);
				let e = ma(n, r, f);
				for (let t = 0; t < e; t++) i.push(null);
			}
			for (; i.length < o;) {
				i.push(n);
				let e = n.add({ days: 1 });
				if (W(n, e)) break;
				n = e;
			}
			for (; i.length < o;) i.push(null);
			return i;
		},
		getWeeksInMonth(e = C) {
			let t = p || Na(e, r, f);
			return (a.weeks || a.days) && (t = a.weeks ?? 0, a.days && (t += Math.ceil(a.days / 7))), t;
		}
	};
}
function Rc(e) {
	let t = { ...e };
	for (let n in e) t[n] = 1;
	return t;
}
// node_modules/react-aria/dist/private/visually-hidden/VisuallyHidden.mjs
var zc = {
	border: 0,
	clip: "rect(0 0 0 0)",
	clipPath: "inset(50%)",
	height: "1px",
	margin: "-1px",
	overflow: "hidden",
	padding: 0,
	position: "absolute",
	width: "1px",
	whiteSpace: "nowrap"
};
function Bc(e = {}) {
	let { style: t, isFocusable: n } = e, [r, i] = (0, v.useState)(!1), { focusWithinProps: a } = kr({
		isDisabled: !n,
		onFocusWithinChange: (e) => i(e)
	}), o = (0, v.useMemo)(() => r ? t : t ? {
		...zc,
		...t
	} : zc, [r]);
	return { visuallyHiddenProps: {
		...a,
		style: o
	} };
}
function Vc(e) {
	let { children: t, elementType: n = "div", isFocusable: r, style: i, ...a } = e, { visuallyHiddenProps: o } = Bc(e);
	return /*#__PURE__*/ v.createElement(n, ue(a, o), t);
}
// node_modules/react-aria-components/dist/private/Calendar.mjs
var Hc = /*#__PURE__*/ (0, v.createContext)(null), Uc = /*#__PURE__*/ (0, v.createContext)(null), Wc = /*#__PURE__*/ (0, v.createContext)(null), Gc = /*#__PURE__*/ (0, v.createContext)(null), Kc = /*#__PURE__*/ (0, v.forwardRef)(function(e, t) {
	[e, t] = P(e, t, Hc);
	let { locale: n } = an(), r = Lc({
		...e,
		locale: n,
		createCalendar: e.createCalendar || qs
	}), { calendarProps: i, prevButtonProps: a, nextButtonProps: o, errorMessageProps: s, title: c } = mc(e, r), l = me({
		...e,
		values: {
			state: r,
			isDisabled: e.isDisabled || !1,
			isInvalid: r.isValueInvalid
		},
		defaultClassName: "react-aria-Calendar"
	}), u = ar(e, { global: !0 });
	return /*#__PURE__*/ v.createElement(be.div, {
		...ue(u, l, i),
		ref: t,
		slot: e.slot || void 0,
		"data-disabled": e.isDisabled || void 0,
		"data-invalid": r.isValueInvalid || void 0
	}, /*#__PURE__*/ v.createElement(pe, { values: [
		[di, { slots: {
			previous: a,
			next: o
		} }],
		[hi, {
			"aria-hidden": !0,
			level: 2,
			children: c
		}],
		[Wc, r],
		[Hc, e],
		[_i, { slots: { errorMessage: s } }]
	] }, /*#__PURE__*/ v.createElement(Vc, null, /*#__PURE__*/ v.createElement("h2", null, i["aria-label"])), l.children, /*#__PURE__*/ v.createElement(Vc, null, /*#__PURE__*/ v.createElement("button", {
		"aria-label": o["aria-label"],
		disabled: o.isDisabled,
		onClick: () => r.focusNextPage(),
		tabIndex: -1
	}))));
}), qc = /*#__PURE__*/ (0, v.createContext)(null), Jc = /*#__PURE__*/ (0, v.forwardRef)(function(e, t) {
	let n = (0, v.useContext)(Wc), r = (0, v.useContext)(Gc), i = ge(Hc), a = ge(Uc), o = n ?? r, s = o.visibleRange.start;
	e.offset && (s = s.add(e.offset));
	let c = i?.firstDayOfWeek ?? a?.firstDayOfWeek, { gridProps: l, headerProps: u, weekDays: d, weeksInMonth: f } = hc({
		startDate: s,
		endDate: Ta(s),
		weekdayStyle: e.weekdayStyle,
		firstDayOfWeek: c
	}, o), p = ar(e, { global: !0 });
	return /*#__PURE__*/ v.createElement(qc.Provider, { value: {
		headerProps: u,
		weekDays: d,
		startDate: s,
		weeksInMonth: f
	} }, /*#__PURE__*/ v.createElement(be.table, {
		render: e.render,
		...ue(p, l),
		ref: t,
		style: e.style,
		cellPadding: 0,
		className: e.className ?? "react-aria-CalendarGrid"
	}, typeof e.children == "function" ? /*#__PURE__*/ v.createElement(v.Fragment, null, /*#__PURE__*/ v.createElement(Xc, null, (e) => /*#__PURE__*/ v.createElement(Qc, null, e)), /*#__PURE__*/ v.createElement(el, null, e.children)) : e.children));
});
function Yc(e, t) {
	let { children: n, style: r, className: i } = e, { headerProps: a, weekDays: o } = (0, v.useContext)(qc), s = ar(e, { global: !0 });
	return /*#__PURE__*/ v.createElement(be.thead, {
		render: e.render,
		...ue(s, a),
		ref: t,
		style: r,
		className: i ?? "react-aria-CalendarGridHeader"
	}, /*#__PURE__*/ v.createElement("tr", null, o.map((e, t) => /*#__PURE__*/ v.cloneElement(n(e), { key: t }))));
}
var Xc = /*#__PURE__*/ (0, v.forwardRef)(Yc);
function Zc(e, t) {
	let { children: n, style: r, className: i } = e, a = ar(e, { global: !0 });
	return /*#__PURE__*/ v.createElement(be.th, {
		render: e.render,
		...a,
		ref: t,
		style: r,
		className: i || "react-aria-CalendarHeaderCell"
	}, n);
}
var Qc = /*#__PURE__*/ (0, v.forwardRef)(Zc);
function $c(e, t) {
	let { children: n, style: r, className: i } = e, a = (0, v.useContext)(Wc), o = (0, v.useContext)(Gc), s = a ?? o, { startDate: c, weeksInMonth: l } = (0, v.useContext)(qc), u = ar(e, { global: !0 });
	return /*#__PURE__*/ v.createElement(be.tbody, {
		render: e.render,
		...u,
		ref: t,
		style: r,
		className: i ?? "react-aria-CalendarGridBody"
	}, [...Array(l).keys()].map((e) => /*#__PURE__*/ v.createElement("tr", { key: e }, s.getDatesInWeek(e, c).map((e, t) => e ? /*#__PURE__*/ v.cloneElement(n(e), { key: t }) : /*#__PURE__*/ v.createElement("td", { key: t })))));
}
var el = /*#__PURE__*/ (0, v.forwardRef)($c), tl = /*#__PURE__*/ (0, v.forwardRef)(function({ date: e, ...t }, n) {
	let r = (0, v.useContext)(Wc), i = (0, v.useContext)(Gc), a = r ?? i, { startDate: o } = (0, v.useContext)(qc) ?? { startDate: a.visibleRange.start }, s = a.visibleDuration.days || a.visibleDuration.weeks ? !1 : !ca(o, e), c = fa(e, a.timeZone), l = (0, v.useRef)(null), { cellProps: u, buttonProps: d, ...f } = Ec({
		date: e,
		isOutsideMonth: s
	}, a, l), { hoverProps: p, isHovered: m } = Ir({
		...t,
		isDisabled: f.isDisabled || f.isUnavailable
	}), { focusProps: h, isFocusVisible: g } = Ar();
	g &&= f.isFocused;
	let _ = !1, y = !1;
	"highlightedRange" in a && a.highlightedRange && (_ = W(e, a.highlightedRange.start), y = W(e, a.highlightedRange.end));
	let b = me({
		...t,
		defaultChildren: f.formattedDate,
		defaultClassName: "react-aria-CalendarCell",
		values: {
			date: e,
			isHovered: m,
			isOutsideMonth: s,
			isFocusVisible: g,
			isSelectionStart: _,
			isSelectionEnd: y,
			isToday: c,
			...f
		}
	}), x = {
		"data-focused": f.isFocused || void 0,
		"data-hovered": m || void 0,
		"data-pressed": f.isPressed || void 0,
		"data-unavailable": f.isUnavailable || void 0,
		"data-disabled": f.isDisabled || void 0,
		"data-focus-visible": g || void 0,
		"data-outside-visible-range": f.isOutsideVisibleRange || void 0,
		"data-outside-month": s || void 0,
		"data-selected": f.isSelected || void 0,
		"data-selection-start": _ || void 0,
		"data-selection-end": y || void 0,
		"data-invalid": f.isInvalid || void 0,
		"data-today": c || void 0
	}, S = ar(t, { global: !0 });
	return /*#__PURE__*/ v.createElement("td", {
		...u,
		ref: n
	}, /*#__PURE__*/ v.createElement(be.div, {
		...ue(S, d, h, p, x, b),
		ref: l
	}));
}), nl = /*#__PURE__*/ (0, v.forwardRef)(function(e, t) {
	let { offset: n, format: r, className: i = "react-aria-CalendarHeading", ...a } = e, o = v.useContext(Wc), s = v.useContext(Gc), c = Oc({
		offset: n,
		format: r
	}, o || s);
	return /*#__PURE__*/ v.createElement(gi, {
		...a,
		className: i,
		ref: t
	}, c);
}), rl = /*#__PURE__*/ (0, v.createContext)(null), il = {
	badInput: !1,
	customError: !1,
	patternMismatch: !1,
	rangeOverflow: !1,
	rangeUnderflow: !1,
	stepMismatch: !1,
	tooLong: !1,
	tooShort: !1,
	typeMismatch: !1,
	valueMissing: !1,
	valid: !0
}, al = {
	...il,
	customError: !0,
	valid: !1
}, ol = {
	isInvalid: !1,
	validationDetails: il,
	validationErrors: []
}, sl = (0, v.createContext)({}), cl = "__reactAriaFormValidationState";
function ll(e) {
	if (e.__reactAriaFormValidationState) {
		let { realtimeValidation: t, displayValidation: n, updateValidation: r, resetValidation: i, commitValidation: a } = e[cl];
		return {
			realtimeValidation: t,
			displayValidation: n,
			updateValidation: r,
			resetValidation: i,
			commitValidation: a
		};
	}
	return ul(e);
}
function ul(e) {
	let { isInvalid: t, validationState: n, name: r, value: i, builtinValidation: a, validate: o, validationBehavior: s = "aria" } = e;
	n && (t ||= n === "invalid");
	let c = t === void 0 ? null : {
		isInvalid: t,
		validationErrors: [],
		validationDetails: al
	}, l = (0, v.useMemo)(() => !o || i == null ? null : pl(fl(o, i)), [o, i]);
	a?.validationDetails.valid && (a = void 0);
	let u = (0, v.useContext)(sl), d = (0, v.useMemo)(() => r ? Array.isArray(r) ? r.flatMap((e) => dl(u[e])) : dl(u[r]) : [], [u, r]), [f, p] = (0, v.useState)(u), [m, h] = (0, v.useState)(!1);
	u !== f && (p(u), h(!1));
	let g = (0, v.useMemo)(() => pl(m ? [] : d), [m, d]), _ = (0, v.useRef)(ol), [y, b] = (0, v.useState)(ol), x = (0, v.useRef)(ol), S = () => {
		if (!C) return;
		w(!1);
		let e = l || a || _.current;
		ml(e, x.current) || (x.current = e, b(e));
	}, [C, w] = (0, v.useState)(!1);
	return (0, v.useEffect)(S), {
		realtimeValidation: c || g || l || a || ol,
		displayValidation: s === "native" ? c || g || y : c || g || l || a || y,
		updateValidation(e) {
			s === "aria" && !ml(y, e) ? b(e) : _.current = e;
		},
		resetValidation() {
			let e = ol;
			ml(e, x.current) || (x.current = e, b(e)), s === "native" && w(!1), h(!0);
		},
		commitValidation() {
			s === "native" && w(!0), h(!0);
		}
	};
}
function dl(e) {
	return e ? Array.isArray(e) ? e : [e] : [];
}
function fl(e, t) {
	if (typeof e == "function") {
		let n = e(t);
		if (n && typeof n != "boolean") return dl(n);
	}
	return [];
}
function pl(e) {
	return e.length ? {
		isInvalid: !0,
		validationErrors: e,
		validationDetails: al
	} : null;
}
function ml(e, t) {
	return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, n) => e === t.validationErrors[n]) && Object.entries(e.validationDetails).every(([e, n]) => t.validationDetails[e] === n);
}
// node_modules/react-aria-components/dist/private/Form.mjs
var hl = /*#__PURE__*/ (0, v.createContext)(null);
// node_modules/react-aria/dist/private/label/useField.mjs
function gl(e) {
	let { description: t, errorMessage: n, isInvalid: r, validationState: i } = e, { labelProps: a, fieldProps: o } = zr(e), s = ae([
		!!t,
		!!n,
		r,
		i
	]), c = ae([
		!!t,
		!!n,
		r,
		i
	]);
	return o = ue(o, { "aria-describedby": [
		s,
		c,
		e["aria-describedby"]
	].filter(Boolean).join(" ") || void 0 }), {
		labelProps: a,
		fieldProps: o,
		descriptionProps: { id: s },
		errorMessageProps: { id: c }
	};
}
// node_modules/react-aria/dist/private/utils/useFormReset.mjs
function _l(e, t, n) {
	let r = H((e) => {
		n && !e.defaultPrevented && n(t);
	});
	(0, v.useEffect)(() => {
		let t = e?.current?.form;
		return t?.addEventListener("reset", r), () => {
			t?.removeEventListener("reset", r);
		};
	}, [e]);
}
// node_modules/react-aria/dist/private/form/useFormValidation.mjs
function vl(e, t, n) {
	let { validationBehavior: r, focus: i } = e;
	y(() => {
		if (r === "native" && n?.current && "setCustomValidity" in n.current && !n.current.disabled) {
			let e = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
			n.current.setCustomValidity(e), n.current.hasAttribute("title") || (n.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation(bl(n.current));
		}
	});
	let a = (0, v.useRef)(!1), o = H(() => {
		a.current || t.resetValidation();
	}), s = H((e) => {
		t.displayValidation.isInvalid || t.commitValidation();
		let r = n?.current?.form;
		!e.defaultPrevented && n && r && xl(r) === n.current && (i ? i() : n.current?.focus(), Tt("keyboard")), e.preventDefault();
	}), c = H(() => {
		t.commitValidation();
	});
	(0, v.useEffect)(() => {
		let e = n?.current;
		if (!e) return;
		let t = e.form, r = t?.reset;
		return t && (t.reset = () => {
			a.current = !window.event || window.event.type === "message" && B(window.event) instanceof MessagePort, r?.call(t), a.current = !1;
		}), e.addEventListener("invalid", s), e.addEventListener("change", c), t?.addEventListener("reset", o), () => {
			e.removeEventListener("invalid", s), e.removeEventListener("change", c), t?.removeEventListener("reset", o), t && (t.reset = r);
		};
	}, [n, r]);
}
function yl(e) {
	let t = e.validity;
	return {
		badInput: t.badInput,
		customError: t.customError,
		patternMismatch: t.patternMismatch,
		rangeOverflow: t.rangeOverflow,
		rangeUnderflow: t.rangeUnderflow,
		stepMismatch: t.stepMismatch,
		tooLong: t.tooLong,
		tooShort: t.tooShort,
		typeMismatch: t.typeMismatch,
		valueMissing: t.valueMissing,
		valid: t.valid
	};
}
function bl(e) {
	return {
		isInvalid: !e.validity.valid,
		validationDetails: yl(e),
		validationErrors: e.validationMessage ? [e.validationMessage] : []
	};
}
function xl(e) {
	for (let t = 0; t < e.elements.length; t++) {
		let n = e.elements[t];
		if (n.validity?.valid === !1) return n;
	}
	return null;
}
// node_modules/react-aria-components/dist/private/Group.mjs
var Sl = /*#__PURE__*/ (0, v.createContext)({}), Cl = /*#__PURE__*/ (0, v.forwardRef)(function(e, t) {
	[e, t] = P(e, t, Sl);
	let { isDisabled: n, isInvalid: r, isReadOnly: i, onHoverStart: a, onHoverChange: o, onHoverEnd: s, ...c } = e;
	n ??= !!e["aria-disabled"] && e["aria-disabled"] !== "false", r ??= !!e["aria-invalid"] && e["aria-invalid"] !== "false";
	let { hoverProps: l, isHovered: u } = Ir({
		onHoverStart: a,
		onHoverChange: o,
		onHoverEnd: s,
		isDisabled: n
	}), { isFocused: d, isFocusVisible: f, focusProps: p } = Ar({ within: !0 }), m = me({
		...e,
		values: {
			isHovered: u,
			isFocusWithin: d,
			isFocusVisible: f,
			isDisabled: n,
			isInvalid: r
		},
		defaultClassName: "react-aria-Group"
	});
	return /*#__PURE__*/ v.createElement(be.div, {
		...ue(c, p, l),
		...m,
		ref: t,
		role: e.role ?? "group",
		slot: e.slot ?? void 0,
		"data-focus-within": d || void 0,
		"data-hovered": u || void 0,
		"data-focus-visible": f || void 0,
		"data-disabled": n || void 0,
		"data-invalid": r || void 0,
		"data-readonly": i || void 0
	}, m.children);
}), wl = /*#__PURE__*/ (0, v.createContext)({}), Tl = (e) => {
	let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, ...i } = e;
	return i;
}, El = /*#__PURE__*/ Zn(function(e, t) {
	[e, t] = P(e, t, wl);
	let { hoverProps: n, isHovered: r } = Ir({
		...e,
		isDisabled: e.disabled
	}), { isFocused: i, isFocusVisible: a, focusProps: o } = Ar({
		isTextInput: !0,
		autoFocus: e.autoFocus
	}), s = !!e["aria-invalid"] && e["aria-invalid"] !== "false", c = me({
		...e,
		values: {
			isHovered: r,
			isFocused: i,
			isFocusVisible: a,
			isDisabled: e.disabled || !1,
			isInvalid: s
		},
		defaultClassName: "react-aria-Input"
	});
	return /*#__PURE__*/ v.createElement(be.input, {
		...ue(Tl(e), o, n),
		...c,
		ref: t,
		"data-focused": i || void 0,
		"data-disabled": e.disabled || void 0,
		"data-hovered": r || void 0,
		"data-focus-visible": a || void 0,
		"data-invalid": s || void 0
	});
}), Dl = {};
Dl = { Empty: "فارغ" };
// node_modules/react-aria/dist/private/intl/spinbutton/bg-BG.mjs
var Ol = {};
Ol = { Empty: "Изпразни" };
// node_modules/react-aria/dist/private/intl/spinbutton/cs-CZ.mjs
var kl = {};
kl = { Empty: "Prázdné" };
// node_modules/react-aria/dist/private/intl/spinbutton/da-DK.mjs
var Al = {};
Al = { Empty: "Tom" };
// node_modules/react-aria/dist/private/intl/spinbutton/de-DE.mjs
var jl = {};
jl = { Empty: "Leer" };
// node_modules/react-aria/dist/private/intl/spinbutton/el-GR.mjs
var Ml = {};
Ml = { Empty: "Άδειο" };
// node_modules/react-aria/dist/private/intl/spinbutton/en-US.mjs
var Nl = {};
Nl = { Empty: "Empty" };
// node_modules/react-aria/dist/private/intl/spinbutton/es-ES.mjs
var Pl = {};
Pl = { Empty: "Vacío" };
// node_modules/react-aria/dist/private/intl/spinbutton/et-EE.mjs
var Fl = {};
Fl = { Empty: "Tühjenda" };
// node_modules/react-aria/dist/private/intl/spinbutton/fi-FI.mjs
var Il = {};
Il = { Empty: "Tyhjä" };
// node_modules/react-aria/dist/private/intl/spinbutton/fr-FR.mjs
var Ll = {};
Ll = { Empty: "Vide" };
// node_modules/react-aria/dist/private/intl/spinbutton/he-IL.mjs
var Rl = {};
Rl = { Empty: "ריק" };
// node_modules/react-aria/dist/private/intl/spinbutton/hr-HR.mjs
var zl = {};
zl = { Empty: "Prazno" };
// node_modules/react-aria/dist/private/intl/spinbutton/hu-HU.mjs
var Bl = {};
Bl = { Empty: "Üres" };
// node_modules/react-aria/dist/private/intl/spinbutton/it-IT.mjs
var Vl = {};
Vl = { Empty: "Vuoto" };
// node_modules/react-aria/dist/private/intl/spinbutton/ja-JP.mjs
var Hl = {};
Hl = { Empty: "空" };
// node_modules/react-aria/dist/private/intl/spinbutton/ko-KR.mjs
var Ul = {};
Ul = { Empty: "비어 있음" };
// node_modules/react-aria/dist/private/intl/spinbutton/lt-LT.mjs
var Wl = {};
Wl = { Empty: "Tuščias" };
// node_modules/react-aria/dist/private/intl/spinbutton/lv-LV.mjs
var Gl = {};
Gl = { Empty: "Tukšs" };
// node_modules/react-aria/dist/private/intl/spinbutton/nb-NO.mjs
var Kl = {};
Kl = { Empty: "Tom" };
// node_modules/react-aria/dist/private/intl/spinbutton/nl-NL.mjs
var ql = {};
ql = { Empty: "Leeg" };
// node_modules/react-aria/dist/private/intl/spinbutton/pl-PL.mjs
var Jl = {};
Jl = { Empty: "Pusty" };
// node_modules/react-aria/dist/private/intl/spinbutton/pt-BR.mjs
var Yl = {};
Yl = { Empty: "Vazio" };
// node_modules/react-aria/dist/private/intl/spinbutton/pt-PT.mjs
var Xl = {};
Xl = { Empty: "Vazio" };
// node_modules/react-aria/dist/private/intl/spinbutton/ro-RO.mjs
var Zl = {};
Zl = { Empty: "Gol" };
// node_modules/react-aria/dist/private/intl/spinbutton/ru-RU.mjs
var Ql = {};
Ql = { Empty: "Не заполнено" };
// node_modules/react-aria/dist/private/intl/spinbutton/sk-SK.mjs
var $l = {};
$l = { Empty: "Prázdne" };
// node_modules/react-aria/dist/private/intl/spinbutton/sl-SI.mjs
var eu = {};
eu = { Empty: "Prazen" };
// node_modules/react-aria/dist/private/intl/spinbutton/sr-SP.mjs
var tu = {};
tu = { Empty: "Prazno" };
// node_modules/react-aria/dist/private/intl/spinbutton/sv-SE.mjs
var nu = {};
nu = { Empty: "Tomt" };
// node_modules/react-aria/dist/private/intl/spinbutton/tr-TR.mjs
var ru = {};
ru = { Empty: "Boş" };
// node_modules/react-aria/dist/private/intl/spinbutton/uk-UA.mjs
var iu = {};
iu = { Empty: "Пусто" };
// node_modules/react-aria/dist/private/intl/spinbutton/zh-CN.mjs
var au = {};
au = { Empty: "空" };
// node_modules/react-aria/dist/private/intl/spinbutton/zh-TW.mjs
var ou = {};
ou = { Empty: "空白" };
// node_modules/react-aria/dist/private/spinbutton/intlStrings.mjs
var su = {};
su = {
	"ar-AE": Dl,
	"bg-BG": Ol,
	"cs-CZ": kl,
	"da-DK": Al,
	"de-DE": jl,
	"el-GR": Ml,
	"en-US": Nl,
	"es-ES": Pl,
	"et-EE": Fl,
	"fi-FI": Il,
	"fr-FR": Ll,
	"he-IL": Rl,
	"hr-HR": zl,
	"hu-HU": Bl,
	"it-IT": Vl,
	"ja-JP": Hl,
	"ko-KR": Ul,
	"lt-LT": Wl,
	"lv-LV": Gl,
	"nb-NO": Kl,
	"nl-NL": ql,
	"pl-PL": Jl,
	"pt-BR": Yl,
	"pt-PT": Xl,
	"ro-RO": Zl,
	"ru-RU": Ql,
	"sk-SK": $l,
	"sl-SI": eu,
	"sr-SP": tu,
	"sv-SE": nu,
	"tr-TR": ru,
	"uk-UA": iu,
	"zh-CN": au,
	"zh-TW": ou
};
// node_modules/react-aria/dist/private/spinbutton/useSpinButton.mjs
function cu(e) {
	return e && e.__esModule ? e.default : e;
}
var lu = () => {};
function uu(e) {
	let t = (0, v.useRef)(void 0), { value: n, textValue: r, minValue: i, maxValue: a, isDisabled: o, isReadOnly: s, isRequired: c, onIncrement: l, onIncrementPage: u, onDecrement: d, onDecrementPage: f, onDecrementToMin: p, onIncrementToMax: m } = e, h = yn(cu(su), "@react-aria/spinbutton"), g = (0, v.useRef)(!1), _ = (0, v.useCallback)(() => {
		clearTimeout(t.current), g.current = !1;
	}, []), y = H(() => {
		_();
	});
	(0, v.useEffect)(() => () => y(), []);
	let { keyboardProps: b } = Gn({
		isDisabled: o || s,
		shortcuts: {
			PageUp: () => {
				if (u) u();
				else if (l) l();
				else return !1;
			},
			ArrowUp: () => {
				if (l) l();
				else return !1;
			},
			PageDown: () => {
				if (f) f();
				else if (d) d();
				else return !1;
			},
			ArrowDown: () => {
				if (d) d();
				else return !1;
			},
			Home: () => {
				if (p) p();
				else return !1;
			},
			End: () => {
				if (m) m();
				else return !1;
			}
		},
		allowRepeats: !0
	}), x = (0, v.useRef)(!1), S = () => {
		x.current = !0;
	}, C = () => {
		x.current = !1;
	}, w = r === "" ? h.format("Empty") : (r || `${n}`).replace("-", "−");
	(0, v.useEffect)(() => {
		x.current && (ci("assertive"), si(w, "assertive"));
	}, [w]);
	let T = (0, v.useCallback)(() => {
		_();
	}, [_]), E = H(l ?? lu), D = H(d ?? lu), O = H(() => {
		(a === void 0 || isNaN(a) || n === void 0 || isNaN(n) || n < a) && (E(), k(60));
	}), k = H((e) => {
		y(), g.current = !0, t.current = window.setTimeout(O, e);
	}), ee = H(() => {
		(i === void 0 || isNaN(i) || n === void 0 || isNaN(n) || n > i) && (D(), A(60));
	}), A = H((e) => {
		y(), g.current = !0, t.current = window.setTimeout(ee, e);
	}), j = (e) => {
		e.preventDefault();
	}, { addGlobalListener: te, removeAllGlobalListeners: ne } = mr(), M = (0, v.useRef)(!1), [N, re] = (0, v.useState)(null);
	(0, v.useEffect)(() => {
		N === "touch" ? k(600) : N ? k(400) : N || y();
	}, [N]);
	let [ie, ae] = (0, v.useState)(null);
	return (0, v.useEffect)(() => {
		ie === "touch" ? A(600) : ie ? A(400) : ie || y();
	}, [ie]), {
		spinButtonProps: {
			role: "spinbutton",
			"aria-valuenow": n !== void 0 && !isNaN(n) ? n : void 0,
			"aria-valuetext": w,
			"aria-valuemin": i,
			"aria-valuemax": a,
			"aria-disabled": o || void 0,
			"aria-readonly": s || void 0,
			"aria-required": c || void 0,
			...b,
			onFocus: S,
			onBlur: C
		},
		incrementButtonProps: {
			onPressStart: (e) => {
				_(), e.pointerType === "touch" ? (te(window, "pointercancel", T, { capture: !0 }), M.current = !1, re("touch")) : (l?.(), re("mouse")), te(window, "contextmenu", j);
			},
			onPressUp: (e) => {
				_(), e.pointerType === "touch" && (M.current = !0), ne(), re(null);
			},
			onPressEnd: (e) => {
				_(), e.pointerType === "touch" && !g.current && M.current && l?.(), M.current = !1, re(null);
			},
			onFocus: S,
			onBlur: C
		},
		decrementButtonProps: {
			onPressStart: (e) => {
				_(), e.pointerType === "touch" ? (te(window, "pointercancel", T, { capture: !0 }), M.current = !1, ae("touch")) : (d?.(), ae("mouse"));
			},
			onPressUp: (e) => {
				_(), e.pointerType === "touch" && (M.current = !0), ne(), ae(null);
			},
			onPressEnd: (e) => {
				_(), e.pointerType === "touch" && !g.current && M.current && d?.(), M.current = !1, ae(null);
			},
			onFocus: S,
			onBlur: C
		}
	};
}
// node_modules/react-aria/dist/private/utils/shadowdom/ShadowTreeWalker.mjs
var du = class {
	constructor(e, t, n, r) {
		this._walkerStack = [], this._currentSetFor = /* @__PURE__ */ new Set(), this._acceptNode = (e) => {
			if (e.nodeType === Node.ELEMENT_NODE) {
				let t = e.shadowRoot;
				if (t) {
					let e = this._doc.createTreeWalker(t, this.whatToShow, { acceptNode: this._acceptNode });
					return this._walkerStack.unshift(e), NodeFilter.FILTER_ACCEPT;
				}
				if (typeof this.filter == "function") return this.filter(e);
				if (this.filter?.acceptNode) return this.filter.acceptNode(e);
				if (this.filter === null) return NodeFilter.FILTER_ACCEPT;
			}
			return NodeFilter.FILTER_SKIP;
		}, this._doc = e, this.root = t, this.filter = r ?? null, this.whatToShow = n ?? NodeFilter.SHOW_ALL, this._currentNode = t, this._walkerStack.unshift(e.createTreeWalker(t, n, this._acceptNode));
		let i = t.shadowRoot;
		if (i) {
			let e = this._doc.createTreeWalker(i, this.whatToShow, { acceptNode: this._acceptNode });
			this._walkerStack.unshift(e);
		}
	}
	get currentNode() {
		return this._currentNode;
	}
	set currentNode(e) {
		if (!R(this.root, e)) throw Error("Cannot set currentNode to a node that is not contained by the root node.");
		let t = [], n = e, r = e;
		for (this._currentNode = e; n && n !== this.root;) if (n.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
			let e = n, i = this._doc.createTreeWalker(e, this.whatToShow, { acceptNode: this._acceptNode });
			t.push(i), i.currentNode = r, this._currentSetFor.add(i), n = r = e.host;
		} else n = n.parentNode;
		let i = this._doc.createTreeWalker(this.root, this.whatToShow, { acceptNode: this._acceptNode });
		t.push(i), i.currentNode = r, this._currentSetFor.add(i), this._walkerStack = t;
	}
	get doc() {
		return this._doc;
	}
	firstChild() {
		let e = this.currentNode, t = this.nextNode();
		return R(e, t) ? (t && (this.currentNode = t), t) : (this.currentNode = e, null);
	}
	lastChild() {
		let e = this._walkerStack[0].lastChild();
		return e && (this.currentNode = e), e;
	}
	nextNode() {
		let e = this._walkerStack[0].nextNode();
		if (e) {
			if (e.shadowRoot) {
				let t;
				if (typeof this.filter == "function" ? t = this.filter(e) : this.filter?.acceptNode && (t = this.filter.acceptNode(e)), t === NodeFilter.FILTER_ACCEPT) return this.currentNode = e, e;
				let n = this.nextNode();
				return n && (this.currentNode = n), n;
			}
			return e && (this.currentNode = e), e;
		}
		if (this._walkerStack.length > 1) {
			this._walkerStack.shift();
			let e = this.nextNode();
			return e && (this.currentNode = e), e;
		}
		return null;
	}
	previousNode() {
		let e = this._walkerStack[0];
		if (e.currentNode === e.root) {
			if (this._currentSetFor.has(e)) {
				if (this._currentSetFor.delete(e), this._walkerStack.length > 1) {
					this._walkerStack.shift();
					let e = this.previousNode();
					return e && (this.currentNode = e), e;
				}
				return null;
			}
			return null;
		}
		let t = e.previousNode();
		if (t) {
			if (t.shadowRoot) {
				let e;
				if (typeof this.filter == "function" ? e = this.filter(t) : this.filter?.acceptNode && (e = this.filter.acceptNode(t)), e === NodeFilter.FILTER_ACCEPT) return t && (this.currentNode = t), t;
				let n = this.lastChild();
				return n && (this.currentNode = n), n;
			}
			return t && (this.currentNode = t), t;
		}
		if (this._walkerStack.length > 1) {
			this._walkerStack.shift();
			let e = this.previousNode();
			return e && (this.currentNode = e), e;
		}
		return null;
	}
	nextSibling() {
		return null;
	}
	previousSibling() {
		return null;
	}
	parentNode() {
		return null;
	}
};
function fu(e, t, n, r) {
	return Oe() ? new du(e, t, n, r) : e.createTreeWalker(t, n, r);
}
// node_modules/react-aria/dist/private/focus/FocusScope.mjs
var pu = /*#__PURE__*/ v.createContext(null), mu = "react-aria-focus-scope-restore", hu = null;
function gu(e) {
	let { children: t, contain: n, restoreFocus: r, autoFocus: i } = e, a = (0, v.useRef)(null), o = (0, v.useRef)(null), s = (0, v.useRef)([]), { parentNode: c } = (0, v.useContext)(pu) || {}, l = (0, v.useMemo)(() => new Bu({ scopeRef: s }), [s]);
	y(() => {
		let e = c || Vu.root;
		if (Vu.getTreeNode(e.scopeRef) && hu && !Du(hu, e.scopeRef)) {
			let t = Vu.getTreeNode(hu);
			t && (e = t);
		}
		e.addChild(l), Vu.addNode(l);
	}, [l, c]), y(() => {
		let e = Vu.getTreeNode(s);
		e && (e.contain = !!n);
	}, [n]), y(() => {
		let e = a.current?.nextSibling, t = [], n = (e) => e.stopPropagation();
		for (; e && e !== o.current;) t.push(e), e.addEventListener(mu, n), e = e.nextSibling;
		return s.current = t, () => {
			for (let e of t) e.removeEventListener(mu, n);
		};
	}, [t]), Mu(s, r, n), Su(s, n), Pu(s, r, n), ju(s, i), (0, v.useEffect)(() => {
		let e = z(I(s.current ? s.current[0] : void 0)), t = null;
		if (wu(e, s.current)) {
			for (let n of Vu.traverse()) n.scopeRef && wu(e, n.scopeRef.current) && (t = n);
			t === Vu.getTreeNode(s) && (hu = t.scopeRef);
		}
	}, [s]), y(() => () => {
		let e = Vu.getTreeNode(s)?.parent?.scopeRef ?? null;
		s !== hu && !Du(s, hu) || e && !Vu.getTreeNode(e) || (hu = e), Vu.removeTreeNode(s);
	}, [s]);
	let u = (0, v.useMemo)(() => _u(s), []), d = (0, v.useMemo)(() => ({
		focusManager: u,
		parentNode: l
	}), [l, u]);
	return /*#__PURE__*/ v.createElement(pu.Provider, { value: d }, /*#__PURE__*/ v.createElement("span", {
		"data-focus-scope-start": !0,
		hidden: !0,
		ref: a
	}), t, /*#__PURE__*/ v.createElement("span", {
		"data-focus-scope-end": !0,
		hidden: !0,
		ref: o
	}));
}
function _u(e) {
	return {
		focusNext(t = {}) {
			let n = e.current, { from: r, tabbable: i, wrap: a, accept: o } = t, s = r || z(I(n[0] ?? void 0)), c = n[0].previousElementSibling, l = Iu(vu(n), {
				tabbable: i,
				accept: o
			}, n);
			l.currentNode = wu(s, n) ? s : c;
			let u = l.nextNode();
			return !u && a && (l.currentNode = c, u = l.nextNode()), u && Ou(u, !0), u;
		},
		focusPrevious(t = {}) {
			let n = e.current, { from: r, tabbable: i, wrap: a, accept: o } = t, s = r || z(I(n[0] ?? void 0)), c = n[n.length - 1].nextElementSibling, l = Iu(vu(n), {
				tabbable: i,
				accept: o
			}, n);
			l.currentNode = wu(s, n) ? s : c;
			let u = l.previousNode();
			return !u && a && (l.currentNode = c, u = l.previousNode()), u && Ou(u, !0), u;
		},
		focusFirst(t = {}) {
			let n = e.current, { tabbable: r, accept: i } = t, a = Iu(vu(n), {
				tabbable: r,
				accept: i
			}, n);
			a.currentNode = n[0].previousElementSibling;
			let o = a.nextNode();
			return o && Ou(o, !0), o;
		},
		focusLast(t = {}) {
			let n = e.current, { tabbable: r, accept: i } = t, a = Iu(vu(n), {
				tabbable: r,
				accept: i
			}, n);
			a.currentNode = n[n.length - 1].nextElementSibling;
			let o = a.previousNode();
			return o && Ou(o, !0), o;
		}
	};
}
function vu(e) {
	return e[0].parentElement;
}
function yu(e) {
	let t = Vu.getTreeNode(hu);
	for (; t && t.scopeRef !== e;) {
		if (t.contain) return !1;
		t = t.parent;
	}
	return !0;
}
function bu(e) {
	if (!e.form) return Array.from(I(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)).filter((e) => !e.form);
	let t = e.form.elements.namedItem(e.name), n = L(e);
	return t instanceof n.RadioNodeList ? Array.from(t).filter((e) => e instanceof n.HTMLInputElement) : t instanceof n.HTMLInputElement ? [t] : [];
}
function xu(e) {
	if (e.checked) return !0;
	let t = bu(e);
	return t.length > 0 && !t.some((e) => e.checked);
}
function Su(e, t) {
	let n = (0, v.useRef)(void 0), r = (0, v.useRef)(void 0);
	y(() => {
		let i = e.current;
		if (!t) {
			r.current &&= (cancelAnimationFrame(r.current), void 0);
			return;
		}
		let a = I(i ? i[0] : void 0), o = (t) => {
			if (t.key !== "Tab" || t.altKey || t.ctrlKey || t.metaKey || !yu(e) || t.isComposing) return;
			let n = z(a), r = e.current;
			if (!r || !wu(n, r)) return;
			let i = Iu(vu(r), { tabbable: !0 }, r);
			if (!n) return;
			i.currentNode = n;
			let o = t.shiftKey ? i.previousNode() : i.nextNode();
			o ||= (i.currentNode = t.shiftKey ? r[r.length - 1].nextElementSibling : r[0].previousElementSibling, t.shiftKey ? i.previousNode() : i.nextNode()), t.preventDefault(), o && (Ou(o, !0), o instanceof L(o).HTMLInputElement && o.select());
		}, s = (t) => {
			(!hu || Du(hu, e)) && wu(B(t), e.current) ? (hu = e, n.current = B(t)) : yu(e) && !Tu(B(t), e) ? n.current ? Ou(n.current) : hu && hu.current && Au(hu.current) : yu(e) && (n.current = B(t));
		}, c = (t) => {
			r.current && cancelAnimationFrame(r.current), r.current = requestAnimationFrame(() => {
				let r = wt(), i = (r === "virtual" || r === null) && nt() && tt(), o = z(a);
				if (!i && o && yu(e) && !Tu(o, e)) {
					hu = e;
					let r = B(t);
					r && r.isConnected ? (n.current = r, Ou(n.current)) : hu.current && Au(hu.current);
				}
			});
		};
		return a.addEventListener("keydown", o, !1), a.addEventListener("focusin", s, !1), i?.forEach((e) => e.addEventListener("focusin", s, !1)), i?.forEach((e) => e.addEventListener("focusout", c, !1)), () => {
			a.removeEventListener("keydown", o, !1), a.removeEventListener("focusin", s, !1), i?.forEach((e) => e.removeEventListener("focusin", s, !1)), i?.forEach((e) => e.removeEventListener("focusout", c, !1));
		};
	}, [e, t]), y(() => () => {
		r.current && cancelAnimationFrame(r.current);
	}, [r]);
}
function Cu(e) {
	return Tu(e);
}
function wu(e, t) {
	return !e || !t ? !1 : t.some((t) => R(t, e));
}
function Tu(e, t = null) {
	if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
	for (let { scopeRef: n } of Vu.traverse(Vu.getTreeNode(t))) if (n && wu(e, n.current)) return !0;
	return !1;
}
function Eu(e) {
	return Tu(e, hu);
}
function Du(e, t) {
	let n = Vu.getTreeNode(t)?.parent;
	for (; n;) {
		if (n.scopeRef === e) return !0;
		n = n.parent;
	}
	return !1;
}
function Ou(e, t = !1) {
	if (e != null && !t) try {
		An(e);
	} catch {}
	else if (e != null) try {
		e.focus();
	} catch {}
}
function ku(e, t = !0) {
	let n = e[0].previousElementSibling, r = vu(e), i = Iu(r, { tabbable: t }, e);
	i.currentNode = n;
	let a = i.nextNode();
	return t && !a && (r = vu(e), i = Iu(r, { tabbable: !1 }, e), i.currentNode = n, a = i.nextNode()), a;
}
function Au(e, t = !0) {
	Ou(ku(e, t));
}
function ju(e, t) {
	let n = v.useRef(t);
	(0, v.useEffect)(() => {
		n.current && (hu = e, !wu(z(I(e.current ? e.current[0] : void 0)), hu.current) && e.current && Au(e.current)), n.current = !1;
	}, [e]);
}
function Mu(e, t, n) {
	y(() => {
		if (t || n) return;
		let r = e.current, i = I(r ? r[0] : void 0), a = (t) => {
			let n = B(t);
			wu(n, e.current) ? hu = e : Cu(n) || (hu = null);
		};
		return i.addEventListener("focusin", a, !1), r?.forEach((e) => e.addEventListener("focusin", a, !1)), () => {
			i.removeEventListener("focusin", a, !1), r?.forEach((e) => e.removeEventListener("focusin", a, !1));
		};
	}, [
		e,
		t,
		n
	]);
}
function Nu(e) {
	let t = Vu.getTreeNode(hu);
	for (; t && t.scopeRef !== e;) {
		if (t.nodeToRestore) return !1;
		t = t.parent;
	}
	return t?.scopeRef === e;
}
function Pu(e, t, n) {
	let r = (0, v.useRef)(typeof document < "u" ? z(I(e.current ? e.current[0] : void 0)) : null);
	y(() => {
		let r = e.current, i = I(r ? r[0] : void 0);
		if (!t || n) return;
		let a = () => {
			(!hu || Du(hu, e)) && wu(z(i), e.current) && (hu = e);
		};
		return i.addEventListener("focusin", a, !1), r?.forEach((e) => e.addEventListener("focusin", a, !1)), () => {
			i.removeEventListener("focusin", a, !1), r?.forEach((e) => e.removeEventListener("focusin", a, !1));
		};
	}, [e, n]), y(() => {
		let r = I(e.current ? e.current[0] : void 0);
		if (!t) return;
		let i = (t) => {
			if (t.key !== "Tab" || t.altKey || t.ctrlKey || t.metaKey || !yu(e) || t.isComposing) return;
			let n = r.activeElement;
			if (!Tu(n, e) || !Nu(e)) return;
			let i = Vu.getTreeNode(e);
			if (!i) return;
			let a = i.nodeToRestore, o = Iu(r.body, { tabbable: !0 });
			o.currentNode = n;
			let s = t.shiftKey ? o.previousNode() : o.nextNode();
			if (a && a.isConnected && a !== r.body || (a = void 0, i.nodeToRestore = void 0), (!s || !Tu(s, e)) && a) {
				o.currentNode = a;
				do
					s = t.shiftKey ? o.previousNode() : o.nextNode();
				while (Tu(s, e));
				t.preventDefault(), t.stopPropagation(), s ? Ou(s, !0) : Cu(a) ? Ou(a, !0) : n.blur();
			}
		};
		return n || r.addEventListener("keydown", i, !0), () => {
			n || r.removeEventListener("keydown", i, !0);
		};
	}, [
		e,
		t,
		n
	]), y(() => {
		let n = I(e.current ? e.current[0] : void 0);
		if (!t) return;
		let i = Vu.getTreeNode(e);
		if (i) return i.nodeToRestore = r.current ?? void 0, () => {
			let r = Vu.getTreeNode(e);
			if (!r) return;
			let i = r.nodeToRestore, a = z(n);
			if (t && i && (a && Tu(a, e) || a === n.body && Nu(e))) {
				let t = Vu.clone();
				requestAnimationFrame(() => {
					if (n.activeElement === n.body) {
						let n = t.getTreeNode(e);
						for (; n;) {
							if (n.nodeToRestore && n.nodeToRestore.isConnected) {
								Fu(n.nodeToRestore);
								return;
							}
							n = n.parent;
						}
						for (n = t.getTreeNode(e); n;) {
							if (n.scopeRef && n.scopeRef.current && Vu.getTreeNode(n.scopeRef)) {
								let e = ku(n.scopeRef.current, !0);
								if (e) {
									Fu(e);
									return;
								}
							}
							n = n.parent;
						}
					}
				});
			}
		};
	}, [e, t]);
}
function Fu(e) {
	e.dispatchEvent(new CustomEvent(mu, {
		bubbles: !0,
		cancelable: !0
	})) && Ou(e);
}
function Iu(e, t, n) {
	let r = t?.tabbable ? Be : ze, i = I(e?.nodeType === Node.ELEMENT_NODE ? e : null), a = fu(i, e || i, NodeFilter.SHOW_ELEMENT, { acceptNode(e) {
		return R(t?.from, e) || t?.tabbable && e.tagName === "INPUT" && e.getAttribute("type") === "radio" && (!xu(e) || a.currentNode.tagName === "INPUT" && a.currentNode.type === "radio" && a.currentNode.name === e.name) ? NodeFilter.FILTER_REJECT : r(e) && (!n || wu(e, n)) && (!t?.accept || t.accept(e)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	return t?.from && (a.currentNode = t.from), a;
}
function Lu(e, t = {}) {
	return {
		focusNext(n = {}) {
			let r = e.current;
			if (!r) return null;
			let { from: i, tabbable: a = t.tabbable, wrap: o = t.wrap, accept: s = t.accept } = n, c = i || z(I(r)), l = Iu(r, {
				tabbable: a,
				accept: s
			});
			R(r, c) && (l.currentNode = c);
			let u = l.nextNode();
			return !u && o && (l.currentNode = r, u = l.nextNode()), u && Ou(u, !0), u;
		},
		focusPrevious(n = t) {
			let r = e.current;
			if (!r) return null;
			let { from: i, tabbable: a = t.tabbable, wrap: o = t.wrap, accept: s = t.accept } = n, c = i || z(I(r)), l = Iu(r, {
				tabbable: a,
				accept: s
			});
			if (R(r, c)) l.currentNode = c;
			else {
				let e = Ru(l);
				return e && Ou(e, !0), e ?? null;
			}
			let u = l.previousNode();
			if (!u && o) {
				l.currentNode = r;
				let e = Ru(l);
				if (!e) return null;
				u = e;
			}
			return u && Ou(u, !0), u ?? null;
		},
		focusFirst(n = t) {
			let r = e.current;
			if (!r) return null;
			let { tabbable: i = t.tabbable, accept: a = t.accept } = n, o = Iu(r, {
				tabbable: i,
				accept: a
			}).nextNode();
			return o && Ou(o, !0), o;
		},
		focusLast(n = t) {
			let r = e.current;
			if (!r) return null;
			let { tabbable: i = t.tabbable, accept: a = t.accept } = n, o = Ru(Iu(r, {
				tabbable: i,
				accept: a
			}));
			return o && Ou(o, !0), o ?? null;
		}
	};
}
function Ru(e) {
	let t, n;
	do
		n = e.lastChild(), n && (t = n);
	while (n);
	return t;
}
var zu = class e {
	constructor() {
		this.fastMap = /* @__PURE__ */ new Map(), this.root = new Bu({ scopeRef: null }), this.fastMap.set(null, this.root);
	}
	get size() {
		return this.fastMap.size;
	}
	getTreeNode(e) {
		return this.fastMap.get(e);
	}
	addTreeNode(e, t, n) {
		let r = this.fastMap.get(t ?? null);
		if (!r) return;
		let i = new Bu({ scopeRef: e });
		r.addChild(i), i.parent = r, this.fastMap.set(e, i), n && (i.nodeToRestore = n);
	}
	addNode(e) {
		this.fastMap.set(e.scopeRef, e);
	}
	removeTreeNode(e) {
		if (e === null) return;
		let t = this.fastMap.get(e);
		if (!t) return;
		let n = t.parent;
		for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && wu(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
		let r = t.children;
		n && (n.removeChild(t), r.size > 0 && r.forEach((e) => n && n.addChild(e))), this.fastMap.delete(t.scopeRef);
	}
	*traverse(e = this.root) {
		if (e.scopeRef != null && (yield e), e.children.size > 0) for (let t of e.children) yield* this.traverse(t);
	}
	clone() {
		let t = new e();
		for (let e of this.traverse()) t.addTreeNode(e.scopeRef, e.parent?.scopeRef ?? null, e.nodeToRestore);
		return t;
	}
}, Bu = class {
	constructor(e) {
		this.children = /* @__PURE__ */ new Set(), this.contain = !1, this.scopeRef = e.scopeRef;
	}
	addChild(e) {
		this.children.add(e), e.parent = this;
	}
	removeChild(e) {
		this.children.delete(e), e.parent = void 0;
	}
}, Vu = new zu(), Hu = /* @__PURE__ */ new Map();
function Uu(e) {
	let { locale: t } = an(), n = t + (e ? Object.entries(e).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
	if (Hu.has(n)) return Hu.get(n);
	let r = new Intl.Collator(t, e);
	return Hu.set(n, r), r;
}
// node_modules/react-aria-components/dist/private/OverlayArrow.mjs
var Wu = /*#__PURE__*/ (0, v.createContext)({ placement: "bottom" }), Gu = typeof HTMLElement < "u" && "inert" in HTMLElement.prototype;
function Ku(e) {
	return e.dataset.liveAnnouncer === "true" || e.dataset.reactAriaTopLayer !== void 0;
}
var qu = /* @__PURE__ */ new WeakMap(), Ju = [];
function Yu(e, t) {
	let n = L(e?.[0]), r = t instanceof n.Element ? { root: t } : t, i = r?.root ?? document.body, a = r?.shouldUseInert && Gu, o = new Set(e), s = /* @__PURE__ */ new Set(), c = (e) => a && e instanceof n.HTMLElement ? e.inert : e.getAttribute("aria-hidden") === "true", l = (e, t) => {
		a && e instanceof n.HTMLElement ? e.inert = t : t ? e.setAttribute("aria-hidden", "true") : (e.removeAttribute("aria-hidden"), e instanceof n.HTMLElement && (e.inert = !1));
	}, u = /* @__PURE__ */ new Set();
	if (Oe()) {
		let t = i.getRootNode();
		for (let n of e) {
			let e = n.getRootNode();
			for (; we(e) && e !== t;) u.add(e), e = e.host.getRootNode();
		}
	}
	let d = (e) => {
		for (let t of e.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]")) o.add(t);
		let t = (e) => {
			if (s.has(e) || o.has(e) || e.parentElement && s.has(e.parentElement) && e.parentElement.getAttribute("role") !== "row") return NodeFilter.FILTER_REJECT;
			for (let t of o) if (R(e, t)) return NodeFilter.FILTER_SKIP;
			return NodeFilter.FILTER_ACCEPT;
		}, n = fu(I(e), e, NodeFilter.SHOW_ELEMENT, { acceptNode: t }), r = t(e);
		if (r === NodeFilter.FILTER_ACCEPT && f(e), r !== NodeFilter.FILTER_REJECT) {
			let e = n.nextNode();
			for (; e != null;) f(e), e = n.nextNode();
		}
	}, f = (e) => {
		let t = qu.get(e) ?? 0;
		c(e) && t === 0 || (t === 0 && l(e, !0), s.add(e), qu.set(e, t + 1));
	};
	Ju.length && Ju[Ju.length - 1].disconnect(), d(i);
	let p = new MutationObserver((e) => {
		for (let t of e) if (t.type === "childList") {
			if (t.target.isConnected && ![...o, ...s].some((e) => R(e, t.target))) for (let e of t.addedNodes) (e instanceof HTMLElement || e instanceof SVGElement) && Ku(e) ? o.add(e) : e instanceof Element && d(e);
			if (Oe()) {
				for (let e of u) if (!e.isConnected) {
					p.disconnect();
					break;
				}
			}
		}
	});
	p.observe(i, {
		childList: !0,
		subtree: !0
	});
	let m = /* @__PURE__ */ new Set();
	if (Oe()) for (let e of u) {
		let t = new MutationObserver((e) => {
			for (let t of e) if (t.type === "childList") {
				if (t.target.isConnected && ![...o, ...s].some((e) => R(e, t.target))) for (let e of t.addedNodes) (e instanceof HTMLElement || e instanceof SVGElement) && Ku(e) ? o.add(e) : e instanceof Element && d(e);
				if (Oe()) {
					for (let e of u) if (!e.isConnected) {
						p.disconnect();
						break;
					}
				}
			}
		});
		t.observe(e, {
			childList: !0,
			subtree: !0
		}), m.add(t);
	}
	let h = {
		visibleNodes: o,
		hiddenNodes: s,
		observe() {
			p.observe(i, {
				childList: !0,
				subtree: !0
			});
		},
		disconnect() {
			p.disconnect();
		}
	};
	return Ju.push(h), () => {
		if (p.disconnect(), Oe()) for (let e of m) e.disconnect();
		for (let e of s) {
			let t = qu.get(e);
			t != null && (t === 1 ? (l(e, !1), qu.delete(e)) : qu.set(e, t - 1));
		}
		h === Ju[Ju.length - 1] ? (Ju.pop(), Ju.length && Ju[Ju.length - 1].observe()) : Ju.splice(Ju.indexOf(h), 1);
	};
}
function Xu(e) {
	let t = Ju[Ju.length - 1];
	if (t && !t.visibleNodes.has(e)) return t.visibleNodes.add(e), () => {
		t.visibleNodes.delete(e);
	};
}
// node_modules/react-aria/dist/private/overlays/calculatePosition.mjs
var Zu = {
	top: "top",
	bottom: "top",
	left: "left",
	right: "left"
}, Qu = {
	top: "bottom",
	bottom: "top",
	left: "right",
	right: "left"
}, $u = {
	top: "left",
	left: "top"
}, K = {
	top: "height",
	left: "width"
}, ed = {
	width: "totalWidth",
	height: "totalHeight"
}, q = {}, J = () => typeof document < "u" ? window.visualViewport : null;
function td(e, t) {
	let n = 0, r = 0, i = 0, a = 0, o = 0, s = 0, c = {}, l = (t?.scale ?? 1) > 1;
	if (e.tagName === "BODY" || e.tagName === "HTML") {
		let l = document.documentElement;
		i = l.clientWidth, a = l.clientHeight, n = t?.width ?? i, r = t?.height ?? a, c.top = l.scrollTop || e.scrollTop, c.left = l.scrollLeft || e.scrollLeft, t && (o = Math.max(0, t.pageTop - (c.top ?? 0)), s = Math.max(0, t.pageLeft - (c.left ?? 0)));
	} else ({width: n, height: r, top: o, left: s} = fd(e, !1)), c.top = e.scrollTop, c.left = e.scrollLeft, i = n, a = r;
	return et() && (e.tagName === "BODY" || e.tagName === "HTML") && l && (c.top = 0, c.left = 0, o = t?.pageTop ?? 0, s = t?.pageLeft ?? 0), {
		width: n,
		height: r,
		totalWidth: i,
		totalHeight: a,
		scroll: c,
		top: o,
		left: s
	};
}
function nd(e) {
	return {
		top: e.scrollTop,
		left: e.scrollLeft,
		width: e.scrollWidth,
		height: e.scrollHeight
	};
}
function rd(e, t, n, r, i, a, o) {
	let s = i.scroll[e] ?? 0, c = r[K[e]], l = o[e] + r.scroll[Zu[e]] + a, u = o[e] + r.scroll[Zu[e]] + c - a, d = t - s + r.scroll[Zu[e]] + o[e] - r[Zu[e]], f = t - s + n + r.scroll[Zu[e]] + o[e] - r[Zu[e]];
	return d < l ? l - d : f > u ? Math.max(u - f, l - d) : 0;
}
function id(e) {
	let t = window.getComputedStyle(e);
	return {
		top: parseInt(t.marginTop, 10) || 0,
		bottom: parseInt(t.marginBottom, 10) || 0,
		left: parseInt(t.marginLeft, 10) || 0,
		right: parseInt(t.marginRight, 10) || 0
	};
}
function ad(e) {
	if (q[e]) return q[e];
	let [t, n] = e.split(" "), r = Zu[t] || "right", i = $u[r];
	Zu[n] || (n = "center");
	let a = K[r], o = K[i];
	return q[e] = {
		placement: t,
		crossPlacement: n,
		axis: r,
		crossAxis: i,
		size: a,
		crossSize: o
	}, q[e];
}
function od(e, t, n, r, i, a, o, s, c, l, u) {
	let { placement: d, crossPlacement: f, axis: p, crossAxis: m, size: h, crossSize: g } = r, _ = {};
	_[m] = e[m] ?? 0, f === "center" ? _[m] += ((e[g] ?? 0) - (n[g] ?? 0)) / 2 : f !== m && (_[m] += (e[g] ?? 0) - (n[g] ?? 0)), _[m] += a;
	let v = e[m] - n[g] + c + l, y = e[m] + e[g] - c - l;
	if (_[m] = ri(_[m], v, y), d === p) {
		let t = s ? u[h] : u[ed[h]];
		_[Qu[p]] = Math.floor(t - e[p] + i);
	} else _[p] = Math.floor(e[p] + e[h] + i);
	return _;
}
function sd(e, t, n, r, i, a, o, s, c, l, u) {
	let d = (e.top == null ? c[ed.height] - (e.bottom ?? 0) - o : e.top) - (c.scroll.top ?? 0), f = l ? n.top : 0, p = {
		top: Math.max(t.top + f, (u?.offsetTop ?? t.top) + f),
		bottom: Math.min(t.top + t.height + f, (u?.offsetTop ?? 0) + (u?.height ?? 0))
	};
	return s === "top" ? Math.max(0, d + o - p.top - ((i.top ?? 0) + (i.bottom ?? 0) + a)) : Math.max(0, p.bottom - d - ((i.top ?? 0) + (i.bottom ?? 0) + a));
}
function cd(e, t, n, r, i, a, o, s) {
	let { placement: c, axis: l, size: u } = a;
	return c === l ? Math.max(0, n[l] - (o.scroll[l] ?? 0) - (e[l] + (s ? t[l] : 0)) - (r[l] ?? 0) - r[Qu[l]] - i) : Math.max(0, e[u] + e[l] + (s ? t[l] : 0) - n[l] - n[u] + (o.scroll[l] ?? 0) - (r[l] ?? 0) - r[Qu[l]] - i);
}
function ld(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _) {
	let v = ad(e), { size: y, crossAxis: b, crossSize: x, placement: S, crossPlacement: C } = v, w = od(t, s, n, v, u, d, l, f, m, h, c), T = u, E = cd(s, l, t, i, a + u, v, c, g);
	if (o && n[y] > E) {
		let e = ad(`${Qu[S]} ${C}`), r = od(t, s, n, e, u, d, l, f, m, h, c);
		cd(s, l, t, i, a + u, e, c, g) > E && (v = e, w = r, T = u);
	}
	let D = "bottom";
	v.axis === "top" ? v.placement === "top" ? D = "top" : v.placement === "bottom" && (D = "bottom") : v.crossAxis === "top" && (v.crossPlacement === "top" ? D = "bottom" : v.crossPlacement === "bottom" && (D = "top"));
	let O = rd(b, w[b], n[x], s, c, a, l);
	w[b] += O;
	let k = sd(w, s, l, f, i, a, n.height, D, c, g, _);
	p && p < k && (k = p), n.height = Math.min(n.height, k), w = od(t, s, n, v, T, d, l, f, m, h, c), O = rd(b, w[b], n[x], s, c, a, l), w[b] += O;
	let ee = {}, A = t[b] - w[b] - i[Zu[b]], j = A + .5 * t[x], te = m / 2 + h, ne = Zu[b] === "left" ? (i.left ?? 0) + (i.right ?? 0) : (i.top ?? 0) + (i.bottom ?? 0), M = n[x] - ne - m / 2 - h;
	ee[b] = ri(ri(j, t[b] + m / 2 - (w[b] + i[Zu[b]]), t[b] + t[x] - m / 2 - (w[b] + i[Zu[b]])), te, M), {placement: S, crossPlacement: C} = v, m ? A = ee[b] : C === "right" ? A += t[x] : C === "center" && (A += t[x] / 2);
	let N = S === "left" || S === "top" ? n[y] : 0, re = {
		x: S === "top" || S === "bottom" ? A : N,
		y: S === "left" || S === "right" ? A : N
	};
	return {
		position: w,
		maxHeight: k,
		arrowOffsetLeft: ee.left,
		arrowOffsetTop: ee.top,
		placement: S,
		triggerAnchorPoint: re
	};
}
function ud(e) {
	let { placement: t, targetNode: n, overlayNode: r, scrollNode: i, padding: a, shouldFlip: o, boundaryElement: s, offset: c, crossOffset: l, maxHeight: u, arrowSize: d = 0, arrowBoundaryOffset: f = 0, targetRect: p } = e, m = J(), h = r instanceof HTMLElement ? md(r) : document.documentElement, g = h === document.documentElement, _ = window.getComputedStyle(h).position, v = !!_ && _ !== "static", y = g ? fd(n, !1, p) : pd(n, h, !1, p);
	if (!g) {
		let { marginTop: e, marginLeft: t } = window.getComputedStyle(n);
		y.top += parseInt(e, 10) || 0, y.left += parseInt(t, 10) || 0;
	}
	let b = fd(r, !0), x = id(r);
	b.width += (x.left ?? 0) + (x.right ?? 0), b.height += (x.top ?? 0) + (x.bottom ?? 0);
	let S = nd(i), C = td(s, m), w = td(h, m), T;
	if ((s.tagName === "BODY" || s.tagName === "HTML") && !g) {
		let e = dd(h, !1);
		T = {
			top: -(e.top - C.top),
			left: -(e.left - C.left),
			width: 0,
			height: 0
		};
	} else T = (s.tagName === "BODY" || s.tagName === "HTML") && g ? {
		top: 0,
		left: 0,
		width: 0,
		height: 0
	} : pd(s, h, !1);
	let E = R(s, h);
	return ld(t, y, b, S, x, a, o, C, w, T, c, l, v, u, d, f, E, m);
}
function dd(e, t) {
	let { top: n, left: r, width: i, height: a } = e.getBoundingClientRect();
	return t && e instanceof e.ownerDocument.defaultView.HTMLElement && (i = e.offsetWidth, a = e.offsetHeight), {
		top: n,
		left: r,
		width: i,
		height: a
	};
}
function fd(e, t, n) {
	let { top: r, left: i, width: a, height: o } = n || dd(e, t), { scrollTop: s, scrollLeft: c, clientTop: l, clientLeft: u } = document.documentElement;
	return {
		top: r + s - l,
		left: i + c - u,
		width: a,
		height: o
	};
}
function pd(e, t, n, r) {
	let i = window.getComputedStyle(e), a;
	if (i.position === "fixed") a = r || dd(e, n);
	else {
		a = fd(e, n, r);
		let i = fd(t, n), o = window.getComputedStyle(t);
		i.top += (parseInt(o.borderTopWidth, 10) || 0) - t.scrollTop, i.left += (parseInt(o.borderLeftWidth, 10) || 0) - t.scrollLeft, a.top -= i.top, a.left -= i.left;
	}
	return a.top -= parseInt(i.marginTop, 10) || 0, a.left -= parseInt(i.marginLeft, 10) || 0, a;
}
function md(e) {
	let t = e.offsetParent;
	if (t && t === document.body && window.getComputedStyle(t).position === "static" && !hd(t) && (t = document.documentElement), t == null) for (t = e.parentElement; t && !hd(t);) t = t.parentElement;
	return t || document.documentElement;
}
function hd(e) {
	let t = window.getComputedStyle(e);
	return t.transform !== "none" || /transform|perspective/.test(t.willChange) || t.filter !== "none" || t.contain === "paint" || "backdropFilter" in t && t.backdropFilter !== "none" || "WebkitBackdropFilter" in t && t.WebkitBackdropFilter !== "none";
}
// node_modules/react-aria/dist/private/overlays/useCloseOnScroll.mjs
var gd = /* @__PURE__ */ new WeakMap();
function _d(e) {
	let { triggerRef: t, isOpen: n, onClose: r } = e;
	(0, v.useEffect)(() => !n || r === null ? void 0 : Te(ke(t.current), "scroll", (e) => {
		let n = B(e);
		if (!t.current || n instanceof Node && !R(n, t.current) || n instanceof HTMLInputElement || n instanceof HTMLTextAreaElement) return;
		let i = r || gd.get(t.current);
		i && i();
	}, !0), [
		n,
		r,
		t
	]);
}
// node_modules/react-aria/dist/private/utils/useResizeObserver.mjs
function vd() {
	return window.ResizeObserver !== void 0;
}
function yd(e) {
	let { ref: t, box: n, onResize: r } = e, i = H(r);
	(0, v.useEffect)(() => {
		let e = t?.current;
		if (e) {
			if (vd()) {
				let t = new window.ResizeObserver((e) => {
					e.length && i();
				});
				return t.observe(e, { box: n }), () => {
					e && t.unobserve(e);
				};
			}
			return window.addEventListener("resize", i, !1), () => {
				window.removeEventListener("resize", i, !1);
			};
		}
	}, [t, n]);
}
// node_modules/react-aria/dist/private/overlays/useOverlayPosition.mjs
var bd = typeof document < "u" ? window.visualViewport : null;
function xd(e) {
	let { direction: t } = an(), { arrowSize: n, targetRef: r, overlayRef: i, arrowRef: a, scrollRef: o = i, placement: s = "bottom", containerPadding: c = 12, shouldFlip: l = !0, boundaryElement: u = typeof document < "u" ? document.body : null, offset: d = 0, crossOffset: f = 0, shouldUpdatePosition: p = !0, isOpen: m = !0, onClose: h, maxHeight: g, arrowBoundaryOffset: _ = 0, getTargetRect: b } = e, [x, S] = (0, v.useState)(null), C = [
		p,
		s,
		i.current,
		r.current,
		a?.current,
		o.current,
		c,
		l,
		u,
		d,
		f,
		m,
		t,
		g,
		_,
		n
	], w = (0, v.useRef)(bd?.scale);
	(0, v.useEffect)(() => {
		m && (w.current = bd?.scale);
	}, [m]);
	let T = (0, v.useCallback)(() => {
		if (p === !1 || !m || !i.current || !r.current || !u || bd?.scale !== w.current) return;
		let e = null;
		if (o.current && Ae(o.current)) {
			let t = z()?.getBoundingClientRect(), n = o.current.getBoundingClientRect();
			e = {
				type: "top",
				offset: (t?.top ?? 0) - n.top
			}, e.offset > n.height / 2 && (e.type = "bottom", e.offset = (t?.bottom ?? 0) - n.bottom);
		}
		let h = i.current;
		!g && i.current && (h.style.top = "0px", h.style.bottom = "", h.style.maxHeight = (window.visualViewport?.height ?? window.innerHeight) + "px");
		let v = ud({
			placement: Cd(s, t),
			overlayNode: i.current,
			targetNode: r.current,
			scrollNode: o.current || i.current,
			padding: c,
			shouldFlip: l,
			boundaryElement: u,
			offset: d,
			crossOffset: f,
			maxHeight: g,
			arrowSize: n ?? (a?.current ? dd(a.current, !0).width : 0),
			arrowBoundaryOffset: _,
			targetRect: b?.(r.current)
		});
		if (!v.position) return;
		h.style.top = "", h.style.bottom = "", h.style.left = "", h.style.right = "", Object.keys(v.position).forEach((e) => h.style[e] = v.position[e] + "px"), h.style.maxHeight = v.maxHeight == null ? "" : v.maxHeight + "px";
		let y = z();
		if (e && y && o.current) {
			let t = y.getBoundingClientRect(), n = o.current.getBoundingClientRect(), r = t[e.type] - n[e.type];
			o.current.scrollTop += r - e.offset;
		}
		S(v);
	}, C);
	y(T, C), Sd(T), yd({
		ref: i,
		onResize: T
	}), yd({
		ref: r,
		onResize: T
	});
	let E = (0, v.useRef)(!1);
	y(() => {
		let e, t = () => {
			E.current = !0, clearTimeout(e), e = setTimeout(() => {
				E.current = !1;
			}, 500), T();
		}, n = () => {
			E.current && t();
		};
		bd?.addEventListener("resize", t), bd?.addEventListener("scroll", n);
		let r = Te(ke(window), "scroll", n);
		return () => {
			bd?.removeEventListener("resize", t), bd?.removeEventListener("scroll", n), r();
		};
	}, [T]);
	let D = (0, v.useCallback)(() => {
		E.current || h?.();
	}, [h, E]);
	return _d({
		triggerRef: r,
		isOpen: m,
		onClose: h && D
	}), {
		overlayProps: { style: {
			position: x ? "absolute" : "fixed",
			top: x ? void 0 : 0,
			left: x ? void 0 : 0,
			zIndex: 1e5,
			...x?.position,
			maxHeight: x?.maxHeight ?? "100vh"
		} },
		placement: x?.placement ?? null,
		triggerAnchorPoint: x?.triggerAnchorPoint ?? null,
		arrowProps: {
			"aria-hidden": "true",
			role: "presentation",
			style: {
				left: x?.arrowOffsetLeft,
				top: x?.arrowOffsetTop
			}
		},
		updatePosition: T
	};
}
function Sd(e) {
	y(() => (window.addEventListener("resize", e, !1), () => {
		window.removeEventListener("resize", e, !1);
	}), [e]);
}
function Cd(e, t) {
	return t === "rtl" ? e.replace("start", "right").replace("end", "left") : e.replace("start", "left").replace("end", "right");
}
// node_modules/react-aria/dist/private/interactions/useInteractOutside.mjs
function wd(e) {
	let { ref: t, onInteractOutside: n, isDisabled: r, onInteractOutsideStart: i } = e, a = (0, v.useRef)({
		isPointerDown: !1,
		ignoreEmulatedMouseEvents: !1
	}), o = H((e) => {
		n && Td(e, t) && (i && i(e), a.current.isPointerDown = !0);
	}), s = H((e) => {
		n && n(e);
	});
	(0, v.useEffect)(() => {
		let e = a.current;
		if (r) return;
		let n = t.current, i = I(n);
		if (typeof PointerEvent < "u") {
			let n = (n) => {
				e.isPointerDown && Td(n, t) && s(n), e.isPointerDown = !1;
			};
			return i.addEventListener("pointerdown", o, !0), i.addEventListener("click", n, !0), () => {
				i.removeEventListener("pointerdown", o, !0), i.removeEventListener("click", n, !0);
			};
		}
	}, [t, r]);
}
function Td(e, t) {
	if (e.button > 0) return !1;
	let n = B(e);
	if (n) {
		let e = n.ownerDocument;
		if (!e || !R(e.documentElement, n) || n.closest("[data-react-aria-top-layer]")) return !1;
	}
	return t.current ? !e.composedPath().includes(t.current) : !1;
}
// node_modules/react-aria/dist/private/overlays/useOverlay.mjs
var Ed = [];
function Dd(e, t) {
	let { onClose: n, shouldCloseOnBlur: r, isOpen: i, isDismissable: a = !1, isKeyboardDismissDisabled: o = !1, shouldCloseOnInteractOutside: s } = e, c = (0, v.useRef)(void 0);
	(0, v.useEffect)(() => {
		if (i && !Ed.includes(t)) return Ed.push(t), () => {
			let e = Ed.indexOf(t);
			e >= 0 && Ed.splice(e, 1);
		};
	}, [i, t]);
	let l = () => {
		Ed[Ed.length - 1] === t && n && n();
	}, u = (e) => {
		let n = Ed[Ed.length - 1];
		c.current = n, (!s || s(B(e))) && n === t && e.stopPropagation();
	}, d = (e) => {
		(!s || s(B(e))) && (Ed[Ed.length - 1] === t && e.stopPropagation(), c.current === t && l()), c.current = void 0;
	}, { keyboardProps: f } = Gn({ shortcuts: { Escape: () => {
		if (!o) l();
		else return !1;
	} } });
	wd({
		ref: t,
		onInteractOutside: a && i ? d : void 0,
		onInteractOutsideStart: u
	});
	let { focusWithinProps: p } = kr({
		isDisabled: !r,
		onBlurWithin: (e) => {
			e.relatedTarget && !Eu(e.relatedTarget) && (!s || s(e.relatedTarget)) && n?.();
		}
	});
	return {
		overlayProps: {
			...f,
			...p
		},
		underlayProps: {}
	};
}
// node_modules/react-aria/dist/private/utils/runAfterKeyboard.mjs
var Od = 200, kd = 50, Ad = 600, jd = /* @__PURE__ */ new WeakMap(), Md = /* @__PURE__ */ new Set(), Nd = /* @__PURE__ */ new Set();
function Pd(e, t) {
	let n = Vt();
	if (e !== n || t.aborted) for (let e of Nd) e(n), Nd.delete(e);
	if (!e && n && et() && !t.aborted) window.clearInterval(jd.get(window)), jd.set(window, Fd(Od));
	else {
		if (e !== n || t.aborted) for (let e of Md) e(n), Md.delete(e);
		(Nd.size + Md.size <= 0 || t.aborted) && (window.clearInterval(jd.get(window)), jd.delete(window));
	}
}
function Fd(e = Ad) {
	return window.setInterval(Pd, kd, Vt(), AbortSignal.timeout(e));
}
function Id(e) {
	if (!zt()) return e(!1), () => {};
	let t = window.requestAnimationFrame(() => {
		t = window.requestAnimationFrame(() => {
			let t = Bt(document.hasFocus() ? z() : null);
			if (Vt() === t || Vt() && !t) return e(t);
			Nd.add(e), jd.has(window) || jd.set(window, Fd());
		});
	});
	return () => {
		window.cancelAnimationFrame(t), Nd.delete(e);
	};
}
function Ld(e) {
	if (!zt()) return e(!1), () => {};
	let t = window.requestAnimationFrame(() => {
		t = window.requestAnimationFrame(() => {
			let t = Bt(document.hasFocus() ? z() : null);
			if (Vt() === t) return e(t);
			Md.add(e), jd.has(window) || jd.set(window, Fd());
		});
	});
	return () => {
		window.cancelAnimationFrame(t), Md.delete(e);
	};
}
// node_modules/react-aria/dist/private/overlays/usePreventScroll.mjs
var Rd = typeof document < "u" && window.visualViewport, zd = 0, Bd;
function Vd(e = {}) {
	let { isDisabled: t, UNSTABLE_overrideFocus: n } = e;
	y(() => {
		if (!t) return zd++, zd === 1 && (Bd = $e() && et() ? Ud() : Hd(n)), () => {
			zd--, zd === 0 && Bd();
		};
	}, [t, n]);
}
function Hd(e) {
	let t = window.innerWidth - document.documentElement.clientWidth;
	return _(t > 0 && ("scrollbarGutter" in document.documentElement.style ? Ee(document.documentElement, "scrollbar-gutter", "stable") : Ee(document.documentElement, "padding-right", `${t}px`)), Ee(document.documentElement, "overflow", "hidden"), e && Gd(), e && zt() && Wd());
}
function Ud() {
	let e = Ee(document.documentElement, "overflow", "hidden"), t, n = !1, r = (e) => {
		let r = B(e);
		t = gc(r, !0) ? r : _c(r, !0), n = !1;
		let i = r.ownerDocument.defaultView.getSelection();
		i && !i.isCollapsed && i.containsNode(r, !0) && (n = !0), e.composedPath().some((e) => e instanceof HTMLInputElement && e.type === "range") && (n = !0), "selectionStart" in r && "selectionEnd" in r && r.selectionStart < r.selectionEnd && r.ownerDocument.activeElement === r && (n = !0);
	}, i = document.createElement("style"), a = fr();
	a && (i.nonce = a), i.textContent = "@layer {\n  * {\n    overscroll-behavior: contain;\n  }\n}", document.head.prepend(i);
	let o = (e) => {
		e.touches.length === 2 || n || (!t || t === document.documentElement || t === document.body || t.scrollHeight === t.clientHeight && t.scrollWidth === t.clientWidth) && e.preventDefault();
	}, s = Gd(), c = _(Te(document, "touchstart", r, {
		passive: !1,
		capture: !0
	}), Te(document, "touchmove", o, {
		passive: !1,
		capture: !0
	}), Wd());
	return () => {
		e(), c(), i.remove(), s();
	};
}
function Wd() {
	return Te(document, "blur", (e) => {
		let t = B(e), n = e.relatedTarget;
		n && Bt(n) ? n.focus() : n || (t.parentElement?.closest("[tabindex]"))?.focus({ preventScroll: !0 });
	}, !0);
}
function Gd() {
	let e = HTMLElement.prototype.focus;
	return Reflect.defineProperty(HTMLElement.prototype, "focus", {
		configurable: !0,
		writable: !0,
		value: function(t) {
			if (e.call(this, {
				...t,
				preventScroll: !0
			}), !t || !t.preventScroll) {
				let e = () => {
					z() === this && Kd(this);
				};
				Id((t) => t ? e() : Ld(() => e()));
			}
		}
	}), () => {
		Reflect.defineProperty(HTMLElement.prototype, "focus", {
			configurable: !0,
			writable: !0,
			value: e
		});
	};
}
function Kd(e) {
	let t = document.scrollingElement || document.documentElement, n = e;
	for (; n && n !== t && n.isConnected;) {
		let e = _c(n);
		if (e !== document.documentElement && e !== document.body && e !== n) {
			let t = e.getBoundingClientRect(), r = n.getBoundingClientRect();
			if (r.top < t.top || r.bottom > t.top + n.clientHeight) {
				let n = t.bottom;
				Rd && (n = Math.min(n, Rd.offsetTop + Rd.height));
				let i = r.top - t.top - ((n - t.top) / 2 - r.height / 2);
				e.scrollTo({
					top: Math.max(0, Math.min(e.scrollHeight - e.clientHeight, e.scrollTop + i)),
					behavior: "smooth"
				});
			}
		}
		n = e.parentElement;
	}
}
// node_modules/react-aria/dist/private/overlays/usePopover.mjs
function qd(e, t) {
	let { triggerRef: n, popoverRef: r, groupRef: i, isNonModal: a, isKeyboardDismissDisabled: o, shouldCloseOnInteractOutside: s, ...c } = e, l = c.trigger === "SubmenuTrigger", { overlayProps: u, underlayProps: d } = Dd({
		isOpen: t.isOpen,
		onClose: t.close,
		shouldCloseOnBlur: !0,
		isDismissable: !a || l,
		isKeyboardDismissDisabled: o,
		shouldCloseOnInteractOutside: s
	}, i ?? r), { overlayProps: f, arrowProps: p, placement: m, triggerAnchorPoint: h } = xd({
		...c,
		targetRef: n,
		overlayRef: r,
		isOpen: t.isOpen,
		onClose: a && !l ? t.close : null,
		getTargetRect: c.getTargetRect ?? (t.point ? () => new DOMRect(t.point.x, t.point.y, 0, 0) : void 0)
	});
	Vd({ isDisabled: a || !t.isOpen }), (0, v.useEffect)(() => {
		if (t.isOpen && r.current) return a ? Xu(i?.current ?? r.current) : Yu([i?.current ?? r.current], { shouldUseInert: !0 });
	}, [
		a,
		t.isOpen,
		r,
		i
	]);
	let { focusWithinProps: g } = kr(e);
	return {
		popoverProps: ue(u, f, g),
		arrowProps: p,
		underlayProps: d,
		placement: m,
		triggerAnchorPoint: h
	};
}
// node_modules/react-aria/dist/private/intl/overlays/ar-AE.mjs
var Jd = {};
Jd = { dismiss: "تجاهل" };
// node_modules/react-aria/dist/private/intl/overlays/bg-BG.mjs
var Yd = {};
Yd = { dismiss: "Отхвърляне" };
// node_modules/react-aria/dist/private/intl/overlays/cs-CZ.mjs
var Xd = {};
Xd = { dismiss: "Odstranit" };
// node_modules/react-aria/dist/private/intl/overlays/da-DK.mjs
var Zd = {};
Zd = { dismiss: "Luk" };
// node_modules/react-aria/dist/private/intl/overlays/de-DE.mjs
var Qd = {};
Qd = { dismiss: "Schließen" };
// node_modules/react-aria/dist/private/intl/overlays/el-GR.mjs
var $d = {};
$d = { dismiss: "Απόρριψη" };
// node_modules/react-aria/dist/private/intl/overlays/en-US.mjs
var ef = {};
ef = { dismiss: "Dismiss" };
// node_modules/react-aria/dist/private/intl/overlays/es-ES.mjs
var tf = {};
tf = { dismiss: "Descartar" };
// node_modules/react-aria/dist/private/intl/overlays/et-EE.mjs
var nf = {};
nf = { dismiss: "Lõpeta" };
// node_modules/react-aria/dist/private/intl/overlays/fi-FI.mjs
var rf = {};
rf = { dismiss: "Hylkää" };
// node_modules/react-aria/dist/private/intl/overlays/fr-FR.mjs
var af = {};
af = { dismiss: "Rejeter" };
// node_modules/react-aria/dist/private/intl/overlays/he-IL.mjs
var of = {};
of = { dismiss: "התעלם" };
// node_modules/react-aria/dist/private/intl/overlays/hr-HR.mjs
var sf = {};
sf = { dismiss: "Odbaci" };
// node_modules/react-aria/dist/private/intl/overlays/hu-HU.mjs
var cf = {};
cf = { dismiss: "Elutasítás" };
// node_modules/react-aria/dist/private/intl/overlays/it-IT.mjs
var lf = {};
lf = { dismiss: "Ignora" };
// node_modules/react-aria/dist/private/intl/overlays/ja-JP.mjs
var uf = {};
uf = { dismiss: "閉じる" };
// node_modules/react-aria/dist/private/intl/overlays/ko-KR.mjs
var df = {};
df = { dismiss: "무시" };
// node_modules/react-aria/dist/private/intl/overlays/lt-LT.mjs
var ff = {};
ff = { dismiss: "Atmesti" };
// node_modules/react-aria/dist/private/intl/overlays/lv-LV.mjs
var pf = {};
pf = { dismiss: "Nerādīt" };
// node_modules/react-aria/dist/private/intl/overlays/nb-NO.mjs
var mf = {};
mf = { dismiss: "Lukk" };
// node_modules/react-aria/dist/private/intl/overlays/nl-NL.mjs
var hf = {};
hf = { dismiss: "Negeren" };
// node_modules/react-aria/dist/private/intl/overlays/pl-PL.mjs
var gf = {};
gf = { dismiss: "Zignoruj" };
// node_modules/react-aria/dist/private/intl/overlays/pt-BR.mjs
var _f = {};
_f = { dismiss: "Descartar" };
// node_modules/react-aria/dist/private/intl/overlays/pt-PT.mjs
var vf = {};
vf = { dismiss: "Dispensar" };
// node_modules/react-aria/dist/private/intl/overlays/ro-RO.mjs
var yf = {};
yf = { dismiss: "Revocare" };
// node_modules/react-aria/dist/private/intl/overlays/ru-RU.mjs
var bf = {};
bf = { dismiss: "Пропустить" };
// node_modules/react-aria/dist/private/intl/overlays/sk-SK.mjs
var xf = {};
xf = { dismiss: "Zrušiť" };
// node_modules/react-aria/dist/private/intl/overlays/sl-SI.mjs
var Sf = {};
Sf = { dismiss: "Opusti" };
// node_modules/react-aria/dist/private/intl/overlays/sr-SP.mjs
var Cf = {};
Cf = { dismiss: "Odbaci" };
// node_modules/react-aria/dist/private/intl/overlays/sv-SE.mjs
var wf = {};
wf = { dismiss: "Avvisa" };
// node_modules/react-aria/dist/private/intl/overlays/tr-TR.mjs
var Tf = {};
Tf = { dismiss: "Kapat" };
// node_modules/react-aria/dist/private/intl/overlays/uk-UA.mjs
var Ef = {};
Ef = { dismiss: "Скасувати" };
// node_modules/react-aria/dist/private/intl/overlays/zh-CN.mjs
var Df = {};
Df = { dismiss: "取消" };
// node_modules/react-aria/dist/private/intl/overlays/zh-TW.mjs
var Of = {};
Of = { dismiss: "關閉" };
// node_modules/react-aria/dist/private/overlays/intlStrings.mjs
var kf = {};
kf = {
	"ar-AE": Jd,
	"bg-BG": Yd,
	"cs-CZ": Xd,
	"da-DK": Zd,
	"de-DE": Qd,
	"el-GR": $d,
	"en-US": ef,
	"es-ES": tf,
	"et-EE": nf,
	"fi-FI": rf,
	"fr-FR": af,
	"he-IL": of,
	"hr-HR": sf,
	"hu-HU": cf,
	"it-IT": lf,
	"ja-JP": uf,
	"ko-KR": df,
	"lt-LT": ff,
	"lv-LV": pf,
	"nb-NO": mf,
	"nl-NL": hf,
	"pl-PL": gf,
	"pt-BR": _f,
	"pt-PT": vf,
	"ro-RO": yf,
	"ru-RU": bf,
	"sk-SK": xf,
	"sl-SI": Sf,
	"sr-SP": Cf,
	"sv-SE": wf,
	"tr-TR": Tf,
	"uk-UA": Ef,
	"zh-CN": Df,
	"zh-TW": Of
};
// node_modules/react-aria/dist/private/overlays/DismissButton.mjs
function Af(e) {
	return e && e.__esModule ? e.default : e;
}
function jf(e) {
	let { onDismiss: t, ...n } = e, r = Wt(n, yn(Af(kf), "@react-aria/overlays").format("dismiss")), i = () => {
		t && t();
	};
	return /*#__PURE__*/ v.createElement(Vc, null, /*#__PURE__*/ v.createElement("button", {
		...r,
		tabIndex: -1,
		onClick: i,
		style: {
			width: 1,
			height: 1
		}
	}));
}
// node_modules/react-aria/dist/private/interactions/PressResponder.mjs
function Mf({ children: e }) {
	let t = (0, v.useMemo)(() => ({ register: () => {} }), []);
	return /*#__PURE__*/ v.createElement(pr.Provider, { value: t }, e);
}
// node_modules/react-aria/dist/private/overlays/PortalProvider.mjs
var Nf = /*#__PURE__*/ (0, v.createContext)({});
function Pf() {
	return (0, v.useContext)(Nf) ?? {};
}
// node_modules/react-aria/dist/private/overlays/Overlay.mjs
var Ff = /*#__PURE__*/ v.createContext(null);
function If(e) {
	let t = A(), { portalContainer: n = t ? null : document.body, isExiting: r } = e, [i, a] = (0, v.useState)(!1), o = (0, v.useMemo)(() => ({
		contain: i,
		setContain: a
	}), [i, a]), { getContainer: s } = Pf();
	if (!e.portalContainer && s && (n = s()), !n) return null;
	let c = e.children;
	return e.disableFocusManagement || (c = /*#__PURE__*/ v.createElement(gu, {
		restoreFocus: !0,
		contain: (e.shouldContainFocus || i) && !r
	}, c)), c = /*#__PURE__*/ v.createElement(Ff.Provider, { value: o }, /*#__PURE__*/ v.createElement(Mf, null, /*#__PURE__*/ v.createElement(qn.Provider, { value: null }, c))), /*#__PURE__*/ hr.createPortal(c, n);
}
// node_modules/react-stately/dist/private/overlays/useOverlayTriggerState.mjs
function Lf(e) {
	let [t, n] = xn(e.isOpen, e.defaultOpen || !1, e.onOpenChange), [r, i] = (0, v.useState)(null);
	return {
		isOpen: t,
		setOpen: n,
		open: (0, v.useCallback)(() => {
			n(!0);
		}, [n]),
		close: (0, v.useCallback)(() => {
			n(!1);
		}, [n]),
		toggle: (0, v.useCallback)(() => {
			n(!t);
		}, [n, t]),
		point: r,
		setPoint: i
	};
}
// node_modules/react-aria/dist/private/utils/animation.mjs
function Rf(e, t = !0, n) {
	let [r, i] = (0, v.useState)(!0), a = r && t;
	return y(() => {
		if (!t && e.current) return _(Ee(e.current, "opacity", "0"), Ee(e.current, "clip", "rect(0 0 0 0)"), Ee(e.current, "clip-path", "inset(50%)"), Ee(e.current, "mask-image", "linear-gradient(#0000, #0000)"));
	}, [e, t]), y(() => {
		if (a && e.current && "getAnimations" in e.current) for (let t of e.current.getAnimations()) t instanceof CSSTransition && t.cancel();
	}, [e, a]), Bf(e, a, n, (0, v.useCallback)(() => i(!1), [])), a;
}
function zf(e, t, n) {
	let [r, i] = (0, v.useState)(t ? "open" : "closed");
	switch (r) {
		case "open":
			t || i("exiting");
			break;
		case "closed":
		case "exiting": t && i("open");
	}
	let a = r === "exiting";
	return Bf(e, a, n, (0, v.useCallback)(() => {
		i((e) => e === "exiting" ? "closed" : e);
	}, [])), a;
}
function Bf(e, t, n, r) {
	let i = (0, v.useRef)(null), a = H(n);
	y(() => {
		if (t && e.current && i.current !== t) {
			if (i.current = t, !("getAnimations" in e.current)) {
				r();
				return;
			}
			let n = a?.(e.current), o = e.current.getAnimations().filter((e) => (typeof DocumentTimeline > "u" || e.timeline instanceof DocumentTimeline) && e.playState === "running");
			if (o.length === 0 && !n) {
				r();
				return;
			}
			Promise.all([n, ...o.map((e) => e.finished)]).then(() => {
				(0, hr.flushSync)(() => {
					r();
				});
			}).catch(() => {});
		}
		i.current = t;
	}, [
		e,
		t,
		r
	]);
}
// node_modules/react-aria-components/dist/private/Popover.mjs
var Vf = /*#__PURE__*/ (0, v.createContext)(null), Hf = /*#__PURE__*/ (0, v.createContext)(null), Uf = /*#__PURE__*/ (0, v.forwardRef)(function(e, t) {
	[e, t] = P(e, t, Vf);
	let n = (0, v.useContext)(Gf), r = Lf(e), i = e.isOpen != null || e.defaultOpen != null || !n ? r : n, a = zf(t, i.isOpen), o = e.isExiting || !e.shouldSkipAnimation && a || !1, s = Qn(), { direction: c } = an();
	if (s) {
		let t = e.children;
		return typeof t == "function" && (t = t({
			trigger: e.trigger || null,
			placement: "bottom",
			isEntering: !1,
			isExiting: !1,
			defaultChildren: null
		})), /*#__PURE__*/ v.createElement(v.Fragment, null, t);
	}
	return i && !i.isOpen && !o ? null : /*#__PURE__*/ v.createElement(Wf, {
		...e,
		triggerRef: e.triggerRef,
		state: i,
		popoverRef: t,
		isExiting: o,
		dir: c
	});
});
function Wf({ state: e, isExiting: t, UNSTABLE_portalContainer: n, clearContexts: r, ...i }) {
	let a = (0, v.useRef)(null), o = (0, v.useRef)(null), s = (0, v.useContext)(Hf), c = s && i.trigger === "SubmenuTrigger", [l, u] = (0, v.useState)(!1), { popoverProps: d, underlayProps: f, arrowProps: p, placement: m, triggerAnchorPoint: h } = qd({
		...i,
		offset: i.offset ?? 8,
		arrowRef: a,
		groupRef: c ? s : o
	}, e), g = i.popoverRef, _ = Rf(g, !!m && l), b = i.isEntering || !i.shouldSkipAnimation && _ || !1, x = me({
		...i,
		defaultClassName: "react-aria-Popover",
		values: {
			trigger: i.trigger || null,
			placement: m,
			isEntering: b,
			isExiting: t
		}
	}), S = !i.isNonModal || i.trigger === "SubmenuTrigger" || i.trigger === "PreviewTrigger", [C, w] = (0, v.useState)(i.trigger === "PreviewTrigger");
	y(() => {
		g.current && w(S && !g.current.querySelector("[role=dialog]"));
	}, [g, S]), (0, v.useEffect)(() => {
		C && i.trigger !== "PreviewTrigger" && (i.trigger !== "SubmenuTrigger" || wt() !== "pointer") && g.current && !Ae(g.current) && An(g.current);
	}, [
		C,
		g,
		i.trigger
	]);
	let T = (0, v.useMemo)(() => {
		let e = x.children;
		for (let t of [Vf, ...r ?? []]) e = /*#__PURE__*/ v.createElement(t.Provider, { value: null }, e);
		return e;
	}, [x.children, r]), [E, D] = (0, v.useState)(null), O = (0, v.useCallback)(() => {
		i.triggerRef.current && D(i.triggerRef.current.getBoundingClientRect().width + "px");
	}, [i.triggerRef]);
	y(O, [O]), yd({
		ref: x.style?.["--trigger-width"] ? void 0 : i.triggerRef,
		onResize: O
	});
	let k = {
		...d.style,
		"--trigger-anchor-point": h ? `${h.x}px ${h.y}px` : void 0,
		...x.style,
		"--trigger-width": x.style?.["--trigger-width"] || E
	};
	y(() => Id(() => u(!0)), []);
	let ee = /*#__PURE__*/ v.createElement(be.div, {
		...ue(ar(i, { global: !0 }), d),
		...x,
		id: C ? i.id : void 0,
		role: C ? "dialog" : void 0,
		tabIndex: C ? -1 : void 0,
		"aria-label": i["aria-label"],
		"aria-labelledby": i["aria-labelledby"],
		ref: g,
		slot: i.slot || void 0,
		style: k,
		dir: i.dir,
		"data-trigger": i.trigger,
		"data-placement": m,
		"data-entering": b || void 0,
		"data-exiting": t || void 0
	}, !i.isNonModal && /*#__PURE__*/ v.createElement(jf, { onDismiss: e.close }), /*#__PURE__*/ v.createElement(Wu.Provider, { value: {
		...p,
		placement: m,
		ref: a
	} }, T), /*#__PURE__*/ v.createElement(jf, { onDismiss: e.close }));
	return c ? /*#__PURE__*/ v.createElement(If, {
		...i,
		shouldContainFocus: C && i.trigger !== "PreviewTrigger",
		isExiting: t,
		portalContainer: n ?? s?.current ?? void 0
	}, ee) : /*#__PURE__*/ v.createElement(If, {
		...i,
		shouldContainFocus: C && i.trigger !== "PreviewTrigger",
		isExiting: t,
		portalContainer: n
	}, !i.isNonModal && e.isOpen && /*#__PURE__*/ v.createElement("div", {
		"data-testid": "underlay",
		...f,
		style: {
			position: "fixed",
			inset: 0
		}
	}), /*#__PURE__*/ v.createElement("div", {
		ref: o,
		style: { display: "contents" }
	}, /*#__PURE__*/ v.createElement(Hf.Provider, { value: o }, ee)));
}
// node_modules/react-aria-components/dist/private/Dialog.mjs
var Y = /*#__PURE__*/ (0, v.createContext)(null), Gf = /*#__PURE__*/ (0, v.createContext)(null);
// node_modules/react-aria/dist/private/i18n/useFilter.mjs
function Kf(e) {
	let t = Uu({
		usage: "search",
		...e
	}), n = (0, v.useCallback)((e, n) => n.length === 0 || (e = e.normalize("NFC"), n = n.normalize("NFC"), t.compare(e.slice(0, n.length), n) === 0), [t]), r = (0, v.useCallback)((e, n) => n.length === 0 || (e = e.normalize("NFC"), n = n.normalize("NFC"), t.compare(e.slice(-n.length), n) === 0), [t]), i = (0, v.useCallback)((e, n) => {
		if (n.length === 0) return !0;
		e = e.normalize("NFC"), n = n.normalize("NFC");
		let r = 0, i = n.length;
		for (; r + i <= e.length; r++) {
			let a = e.slice(r, r + i);
			if (t.compare(n, a) === 0) return !0;
		}
		return !1;
	}, [t]);
	return (0, v.useMemo)(() => ({
		startsWith: n,
		endsWith: r,
		contains: i
	}), [
		n,
		r,
		i
	]);
}
// node_modules/react-aria-components/dist/private/HiddenDateInput.mjs
var qf = [
	"day",
	"month",
	"year"
], Jf = {
	hour: 1,
	minute: 2,
	second: 3
};
function Yf(e, t) {
	let { autoComplete: n, isDisabled: r, name: i } = e, { visuallyHiddenProps: a } = Bc({ style: {
		position: "fixed",
		top: 0,
		left: 0
	} }), o = 60;
	t.granularity === "second" ? o = 1 : t.granularity === "hour" && (o = 3600);
	let s = "";
	t.value && (s = t.granularity === "day" ? qa(t.value).toString() : Ja("timeZone" in t.value ? $a(t.value) : t.value).toString());
	let c = t.granularity === "day" ? "date" : "datetime-local", l = [
		"hour",
		"minute",
		"second"
	], u = 0;
	return l.includes(t.granularity) && (u = Jf[t.granularity], l = l.slice(0, u)), {
		containerProps: {
			...a,
			"aria-hidden": !0,
			"data-react-aria-prevent-focus": !0,
			"data-a11y-ignore": "aria-hidden-focus"
		},
		inputProps: {
			tabIndex: -1,
			autoComplete: n,
			disabled: r,
			type: c,
			form: "",
			name: i,
			step: o,
			value: s,
			onChange: (e) => {
				let n = B(e).value.toString();
				if (n) try {
					let e = ko(n);
					if (t.granularity === "day" && (e = Oo(n)), "setSegment" in t) for (let n in e) qf.includes(n) && t.setSegment(n, e[n]), l.includes(n) && t.setSegment(n, e[n]);
					t.setValue(e);
				} catch {}
			}
		}
	};
}
function Xf(e) {
	let { state: t } = e, { containerProps: n, inputProps: r } = Yf({ ...e }, t);
	return /*#__PURE__*/ v.createElement("div", {
		...n,
		"data-testid": "hidden-dateinput-container"
	}, /*#__PURE__*/ v.createElement("input", r));
}
// node_modules/react-aria/dist/private/intl/datepicker/ar-AE.mjs
var Zf = {};
Zf = {
	calendar: "التقويم",
	day: "يوم",
	dayPeriod: "ص/م",
	endDate: "تاريخ الانتهاء",
	era: "العصر",
	hour: "الساعات",
	minute: "الدقائق",
	month: "الشهر",
	second: "الثواني",
	selectedDateDescription: (e) => `\u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{645}\u{62D}\u{62F}\u{62F}: ${e.date}`,
	selectedRangeDescription: (e) => `\u{627}\u{644}\u{645}\u{62F}\u{649} \u{627}\u{644}\u{632}\u{645}\u{646}\u{64A} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}: ${e.startDate} \u{625}\u{644}\u{649} ${e.endDate}`,
	selectedTimeDescription: (e) => `\u{627}\u{644}\u{648}\u{642}\u{62A} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}: ${e.time}`,
	startDate: "تاريخ البدء",
	timeZoneName: "التوقيت",
	weekday: "اليوم",
	year: "السنة"
};
// node_modules/react-aria/dist/private/intl/datepicker/bg-BG.mjs
var Qf = {};
Qf = {
	calendar: "Календар",
	day: "ден",
	dayPeriod: "пр.об./сл.об.",
	endDate: "Крайна дата",
	era: "ера",
	hour: "час",
	minute: "минута",
	month: "месец",
	second: "секунда",
	selectedDateDescription: (e) => `\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,
	selectedRangeDescription: (e) => `\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.startDate} \u{434}\u{43E} ${e.endDate}`,
	selectedTimeDescription: (e) => `\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{43E} \u{432}\u{440}\u{435}\u{43C}\u{435}: ${e.time}`,
	startDate: "Начална дата",
	timeZoneName: "часова зона",
	weekday: "ден от седмицата",
	year: "година"
};
// node_modules/react-aria/dist/private/intl/datepicker/cs-CZ.mjs
var $f = {};
$f = {
	calendar: "Kalendář",
	day: "den",
	dayPeriod: "část dne",
	endDate: "Konečné datum",
	era: "letopočet",
	hour: "hodina",
	minute: "minuta",
	month: "měsíc",
	second: "sekunda",
	selectedDateDescription: (e) => `Vybran\xe9 datum: ${e.date}`,
	selectedRangeDescription: (e) => `Vybran\xe9 obdob\xed: ${e.startDate} a\u{17E} ${e.endDate}`,
	selectedTimeDescription: (e) => `Vybran\xfd \u{10D}as: ${e.time}`,
	startDate: "Počáteční datum",
	timeZoneName: "časové pásmo",
	weekday: "den v týdnu",
	year: "rok"
};
// node_modules/react-aria/dist/private/intl/datepicker/da-DK.mjs
var ep = {};
ep = {
	calendar: "Kalender",
	day: "dag",
	dayPeriod: "AM/PM",
	endDate: "Slutdato",
	era: "æra",
	hour: "time",
	minute: "minut",
	month: "måned",
	second: "sekund",
	selectedDateDescription: (e) => `Valgt dato: ${e.date}`,
	selectedRangeDescription: (e) => `Valgt interval: ${e.startDate} til ${e.endDate}`,
	selectedTimeDescription: (e) => `Valgt tidspunkt: ${e.time}`,
	startDate: "Startdato",
	timeZoneName: "tidszone",
	weekday: "ugedag",
	year: "år"
};
// node_modules/react-aria/dist/private/intl/datepicker/de-DE.mjs
var tp = {};
tp = {
	calendar: "Kalender",
	day: "Tag",
	dayPeriod: "Tageshälfte",
	endDate: "Enddatum",
	era: "Epoche",
	hour: "Stunde",
	minute: "Minute",
	month: "Monat",
	second: "Sekunde",
	selectedDateDescription: (e) => `Ausgew\xe4hltes Datum: ${e.date}`,
	selectedRangeDescription: (e) => `Ausgew\xe4hlter Bereich: ${e.startDate} bis ${e.endDate}`,
	selectedTimeDescription: (e) => `Ausgew\xe4hlte Zeit: ${e.time}`,
	startDate: "Startdatum",
	timeZoneName: "Zeitzone",
	weekday: "Wochentag",
	year: "Jahr"
};
// node_modules/react-aria/dist/private/intl/datepicker/el-GR.mjs
var np = {};
np = {
	calendar: "Ημερολόγιο",
	day: "ημέρα",
	dayPeriod: "π.μ./μ.μ.",
	endDate: "Ημερομηνία λήξης",
	era: "περίοδος",
	hour: "ώρα",
	minute: "λεπτό",
	month: "μήνας",
	second: "δευτερόλεπτο",
	selectedDateDescription: (e) => `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1}: ${e.date}`,
	selectedRangeDescription: (e) => `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3BF} \u{3B5}\u{3CD}\u{3C1}\u{3BF}\u{3C2}: ${e.startDate} \u{3AD}\u{3C9}\u{3C2} ${e.endDate}`,
	selectedTimeDescription: (e) => `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3CE}\u{3C1}\u{3B1}: ${e.time}`,
	startDate: "Ημερομηνία έναρξης",
	timeZoneName: "ζώνη ώρας",
	weekday: "καθημερινή",
	year: "έτος"
};
// node_modules/react-aria/dist/private/intl/datepicker/en-US.mjs
var rp = {};
rp = {
	era: "era",
	year: "year",
	month: "month",
	day: "day",
	hour: "hour",
	minute: "minute",
	second: "second",
	dayPeriod: "AM/PM",
	calendar: "Calendar",
	startDate: "Start Date",
	endDate: "End Date",
	weekday: "day of the week",
	timeZoneName: "time zone",
	selectedDateDescription: (e) => `Selected Date: ${e.date}`,
	selectedRangeDescription: (e) => `Selected Range: ${e.startDate} to ${e.endDate}`,
	selectedTimeDescription: (e) => `Selected Time: ${e.time}`
};
// node_modules/react-aria/dist/private/intl/datepicker/es-ES.mjs
var ip = {};
ip = {
	calendar: "Calendario",
	day: "día",
	dayPeriod: "a.\xA0m./p.\xA0m.",
	endDate: "Fecha final",
	era: "era",
	hour: "hora",
	minute: "minuto",
	month: "mes",
	second: "segundo",
	selectedDateDescription: (e) => `Fecha seleccionada: ${e.date}`,
	selectedRangeDescription: (e) => `Rango seleccionado: ${e.startDate} a ${e.endDate}`,
	selectedTimeDescription: (e) => `Hora seleccionada: ${e.time}`,
	startDate: "Fecha de inicio",
	timeZoneName: "zona horaria",
	weekday: "día de la semana",
	year: "año"
};
// node_modules/react-aria/dist/private/intl/datepicker/et-EE.mjs
var ap = {};
ap = {
	calendar: "Kalender",
	day: "päev",
	dayPeriod: "enne/pärast lõunat",
	endDate: "Lõppkuupäev",
	era: "ajastu",
	hour: "tund",
	minute: "minut",
	month: "kuu",
	second: "sekund",
	selectedDateDescription: (e) => `Valitud kuup\xe4ev: ${e.date}`,
	selectedRangeDescription: (e) => `Valitud vahemik: ${e.startDate} kuni ${e.endDate}`,
	selectedTimeDescription: (e) => `Valitud aeg: ${e.time}`,
	startDate: "Alguskuupäev",
	timeZoneName: "ajavöönd",
	weekday: "nädalapäev",
	year: "aasta"
};
// node_modules/react-aria/dist/private/intl/datepicker/fi-FI.mjs
var op = {};
op = {
	calendar: "Kalenteri",
	day: "päivä",
	dayPeriod: "vuorokaudenaika",
	endDate: "Päättymispäivä",
	era: "aikakausi",
	hour: "tunti",
	minute: "minuutti",
	month: "kuukausi",
	second: "sekunti",
	selectedDateDescription: (e) => `Valittu p\xe4iv\xe4m\xe4\xe4r\xe4: ${e.date}`,
	selectedRangeDescription: (e) => `Valittu aikav\xe4li: ${e.startDate} \u{2013} ${e.endDate}`,
	selectedTimeDescription: (e) => `Valittu aika: ${e.time}`,
	startDate: "Alkamispäivä",
	timeZoneName: "aikavyöhyke",
	weekday: "viikonpäivä",
	year: "vuosi"
};
// node_modules/react-aria/dist/private/intl/datepicker/fr-FR.mjs
var sp = {};
sp = {
	calendar: "Calendrier",
	day: "jour",
	dayPeriod: "cadran",
	endDate: "Date de fin",
	era: "ère",
	hour: "heure",
	minute: "minute",
	month: "mois",
	second: "seconde",
	selectedDateDescription: (e) => `Date s\xe9lectionn\xe9e\xa0: ${e.date}`,
	selectedRangeDescription: (e) => `Plage s\xe9lectionn\xe9e\xa0: ${e.startDate} au ${e.endDate}`,
	selectedTimeDescription: (e) => `Heure choisie\xa0: ${e.time}`,
	startDate: "Date de début",
	timeZoneName: "fuseau horaire",
	weekday: "jour de la semaine",
	year: "année"
};
// node_modules/react-aria/dist/private/intl/datepicker/he-IL.mjs
var cp = {};
cp = {
	calendar: "לוח שנה",
	day: "יום",
	dayPeriod: "לפנה״צ/אחה״צ",
	endDate: "תאריך סיום",
	era: "תקופה",
	hour: "שעה",
	minute: "דקה",
	month: "חודש",
	second: "שנייה",
	selectedDateDescription: (e) => `\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${e.date}`,
	selectedRangeDescription: (e) => `\u{5D8}\u{5D5}\u{5D5}\u{5D7} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${e.startDate} \u{5E2}\u{5D3} ${e.endDate}`,
	selectedTimeDescription: (e) => `\u{5D6}\u{5DE}\u{5DF} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${e.time}`,
	startDate: "תאריך התחלה",
	timeZoneName: "אזור זמן",
	weekday: "יום בשבוע",
	year: "שנה"
};
// node_modules/react-aria/dist/private/intl/datepicker/hr-HR.mjs
var lp = {};
lp = {
	calendar: "Kalendar",
	day: "dan",
	dayPeriod: "AM/PM",
	endDate: "Datum završetka",
	era: "era",
	hour: "sat",
	minute: "minuta",
	month: "mjesec",
	second: "sekunda",
	selectedDateDescription: (e) => `Odabrani datum: ${e.date}`,
	selectedRangeDescription: (e) => `Odabrani raspon: ${e.startDate} do ${e.endDate}`,
	selectedTimeDescription: (e) => `Odabrano vrijeme: ${e.time}`,
	startDate: "Datum početka",
	timeZoneName: "vremenska zona",
	weekday: "dan u tjednu",
	year: "godina"
};
// node_modules/react-aria/dist/private/intl/datepicker/hu-HU.mjs
var up = {};
up = {
	calendar: "Naptár",
	day: "nap",
	dayPeriod: "napszak",
	endDate: "Befejező dátum",
	era: "éra",
	hour: "óra",
	minute: "perc",
	month: "hónap",
	second: "másodperc",
	selectedDateDescription: (e) => `Kijel\xf6lt d\xe1tum: ${e.date}`,
	selectedRangeDescription: (e) => `Kijel\xf6lt tartom\xe1ny: ${e.startDate}\u{2013}${e.endDate}`,
	selectedTimeDescription: (e) => `Kijel\xf6lt id\u{151}: ${e.time}`,
	startDate: "Kezdő dátum",
	timeZoneName: "időzóna",
	weekday: "hét napja",
	year: "év"
};
// node_modules/react-aria/dist/private/intl/datepicker/it-IT.mjs
var dp = {};
dp = {
	calendar: "Calendario",
	day: "giorno",
	dayPeriod: "AM/PM",
	endDate: "Data finale",
	era: "era",
	hour: "ora",
	minute: "minuto",
	month: "mese",
	second: "secondo",
	selectedDateDescription: (e) => `Data selezionata: ${e.date}`,
	selectedRangeDescription: (e) => `Intervallo selezionato: da ${e.startDate} a ${e.endDate}`,
	selectedTimeDescription: (e) => `Ora selezionata: ${e.time}`,
	startDate: "Data iniziale",
	timeZoneName: "fuso orario",
	weekday: "giorno della settimana",
	year: "anno"
};
// node_modules/react-aria/dist/private/intl/datepicker/ja-JP.mjs
var fp = {};
fp = {
	calendar: "カレンダー",
	day: "日",
	dayPeriod: "午前/午後",
	endDate: "終了日",
	era: "時代",
	hour: "時",
	minute: "分",
	month: "月",
	second: "秒",
	selectedDateDescription: (e) => `\u{9078}\u{629E}\u{3057}\u{305F}\u{65E5}\u{4ED8} : ${e.date}`,
	selectedRangeDescription: (e) => `\u{9078}\u{629E}\u{7BC4}\u{56F2} : ${e.startDate} \u{304B}\u{3089} ${e.endDate}`,
	selectedTimeDescription: (e) => `\u{9078}\u{629E}\u{3057}\u{305F}\u{6642}\u{9593} : ${e.time}`,
	startDate: "開始日",
	timeZoneName: "タイムゾーン",
	weekday: "曜日",
	year: "年"
};
// node_modules/react-aria/dist/private/intl/datepicker/ko-KR.mjs
var pp = {};
pp = {
	calendar: "달력",
	day: "일",
	dayPeriod: "오전/오후",
	endDate: "종료일",
	era: "연호",
	hour: "시",
	minute: "분",
	month: "월",
	second: "초",
	selectedDateDescription: (e) => `\u{C120}\u{D0DD} \u{C77C}\u{C790}: ${e.date}`,
	selectedRangeDescription: (e) => `\u{C120}\u{D0DD} \u{BC94}\u{C704}: ${e.startDate} ~ ${e.endDate}`,
	selectedTimeDescription: (e) => `\u{C120}\u{D0DD} \u{C2DC}\u{AC04}: ${e.time}`,
	startDate: "시작일",
	timeZoneName: "시간대",
	weekday: "요일",
	year: "년"
};
// node_modules/react-aria/dist/private/intl/datepicker/lt-LT.mjs
var mp = {};
mp = {
	calendar: "Kalendorius",
	day: "diena",
	dayPeriod: "iki pietų / po pietų",
	endDate: "Pabaigos data",
	era: "era",
	hour: "valanda",
	minute: "minutė",
	month: "mėnuo",
	second: "sekundė",
	selectedDateDescription: (e) => `Pasirinkta data: ${e.date}`,
	selectedRangeDescription: (e) => `Pasirinktas intervalas: nuo ${e.startDate} iki ${e.endDate}`,
	selectedTimeDescription: (e) => `Pasirinktas laikas: ${e.time}`,
	startDate: "Pradžios data",
	timeZoneName: "laiko juosta",
	weekday: "savaitės diena",
	year: "metai"
};
// node_modules/react-aria/dist/private/intl/datepicker/lv-LV.mjs
var hp = {};
hp = {
	calendar: "Kalendārs",
	day: "diena",
	dayPeriod: "priekšpusdienā/pēcpusdienā",
	endDate: "Beigu datums",
	era: "ēra",
	hour: "stundas",
	minute: "minūtes",
	month: "mēnesis",
	second: "sekundes",
	selectedDateDescription: (e) => `Atlas\u{12B}tais datums: ${e.date}`,
	selectedRangeDescription: (e) => `Atlas\u{12B}tais diapazons: no ${e.startDate} l\u{12B}dz ${e.endDate}`,
	selectedTimeDescription: (e) => `Atlas\u{12B}tais laiks: ${e.time}`,
	startDate: "Sākuma datums",
	timeZoneName: "laika josla",
	weekday: "nedēļas diena",
	year: "gads"
};
// node_modules/react-aria/dist/private/intl/datepicker/nb-NO.mjs
var gp = {};
gp = {
	calendar: "Kalender",
	day: "dag",
	dayPeriod: "a.m./p.m.",
	endDate: "Sluttdato",
	era: "tidsalder",
	hour: "time",
	minute: "minutt",
	month: "måned",
	second: "sekund",
	selectedDateDescription: (e) => `Valgt dato: ${e.date}`,
	selectedRangeDescription: (e) => `Valgt omr\xe5de: ${e.startDate} til ${e.endDate}`,
	selectedTimeDescription: (e) => `Valgt tid: ${e.time}`,
	startDate: "Startdato",
	timeZoneName: "tidssone",
	weekday: "ukedag",
	year: "år"
};
// node_modules/react-aria/dist/private/intl/datepicker/nl-NL.mjs
var _p = {};
_p = {
	calendar: "Kalender",
	day: "dag",
	dayPeriod: "a.m./p.m.",
	endDate: "Einddatum",
	era: "tijdperk",
	hour: "uur",
	minute: "minuut",
	month: "maand",
	second: "seconde",
	selectedDateDescription: (e) => `Geselecteerde datum: ${e.date}`,
	selectedRangeDescription: (e) => `Geselecteerd bereik: ${e.startDate} tot ${e.endDate}`,
	selectedTimeDescription: (e) => `Geselecteerde tijd: ${e.time}`,
	startDate: "Startdatum",
	timeZoneName: "tijdzone",
	weekday: "dag van de week",
	year: "jaar"
};
// node_modules/react-aria/dist/private/intl/datepicker/pl-PL.mjs
var vp = {};
vp = {
	calendar: "Kalendarz",
	day: "dzień",
	dayPeriod: "rano / po południu / wieczorem",
	endDate: "Data końcowa",
	era: "era",
	hour: "godzina",
	minute: "minuta",
	month: "miesiąc",
	second: "sekunda",
	selectedDateDescription: (e) => `Wybrana data: ${e.date}`,
	selectedRangeDescription: (e) => `Wybrany zakres: ${e.startDate} do ${e.endDate}`,
	selectedTimeDescription: (e) => `Wybrany czas: ${e.time}`,
	startDate: "Data początkowa",
	timeZoneName: "strefa czasowa",
	weekday: "dzień tygodnia",
	year: "rok"
};
// node_modules/react-aria/dist/private/intl/datepicker/pt-BR.mjs
var yp = {};
yp = {
	calendar: "Calendário",
	day: "dia",
	dayPeriod: "AM/PM",
	endDate: "Data final",
	era: "era",
	hour: "hora",
	minute: "minuto",
	month: "mês",
	second: "segundo",
	selectedDateDescription: (e) => `Data selecionada: ${e.date}`,
	selectedRangeDescription: (e) => `Intervalo selecionado: ${e.startDate} a ${e.endDate}`,
	selectedTimeDescription: (e) => `Hora selecionada: ${e.time}`,
	startDate: "Data inicial",
	timeZoneName: "fuso horário",
	weekday: "dia da semana",
	year: "ano"
};
// node_modules/react-aria/dist/private/intl/datepicker/pt-PT.mjs
var bp = {};
bp = {
	calendar: "Calendário",
	day: "dia",
	dayPeriod: "am/pm",
	endDate: "Data de Término",
	era: "era",
	hour: "hora",
	minute: "minuto",
	month: "mês",
	second: "segundo",
	selectedDateDescription: (e) => `Data selecionada: ${e.date}`,
	selectedRangeDescription: (e) => `Intervalo selecionado: ${e.startDate} a ${e.endDate}`,
	selectedTimeDescription: (e) => `Hora selecionada: ${e.time}`,
	startDate: "Data de Início",
	timeZoneName: "fuso horário",
	weekday: "dia da semana",
	year: "ano"
};
// node_modules/react-aria/dist/private/intl/datepicker/ro-RO.mjs
var xp = {};
xp = {
	calendar: "Calendar",
	day: "zi",
	dayPeriod: "a.m/p.m.",
	endDate: "Dată final",
	era: "eră",
	hour: "oră",
	minute: "minut",
	month: "lună",
	second: "secundă",
	selectedDateDescription: (e) => `Dat\u{103} selectat\u{103}: ${e.date}`,
	selectedRangeDescription: (e) => `Interval selectat: de la ${e.startDate} p\xe2n\u{103} la ${e.endDate}`,
	selectedTimeDescription: (e) => `Ora selectat\u{103}: ${e.time}`,
	startDate: "Dată început",
	timeZoneName: "fus orar",
	weekday: "ziua din săptămână",
	year: "an"
};
// node_modules/react-aria/dist/private/intl/datepicker/ru-RU.mjs
var Sp = {};
Sp = {
	calendar: "Календарь",
	day: "день",
	dayPeriod: "AM/PM",
	endDate: "Дата окончания",
	era: "эра",
	hour: "час",
	minute: "минута",
	month: "месяц",
	second: "секунда",
	selectedDateDescription: (e) => `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,
	selectedRangeDescription: (e) => `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{439} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: \u{441} ${e.startDate} \u{43F}\u{43E} ${e.endDate}`,
	selectedTimeDescription: (e) => `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{43E}\u{435} \u{432}\u{440}\u{435}\u{43C}\u{44F}: ${e.time}`,
	startDate: "Дата начала",
	timeZoneName: "часовой пояс",
	weekday: "день недели",
	year: "год"
};
// node_modules/react-aria/dist/private/intl/datepicker/sk-SK.mjs
var Cp = {};
Cp = {
	calendar: "Kalendár",
	day: "deň",
	dayPeriod: "AM/PM",
	endDate: "Dátum ukončenia",
	era: "letopočet",
	hour: "hodina",
	minute: "minúta",
	month: "mesiac",
	second: "sekunda",
	selectedDateDescription: (e) => `Vybrat\xfd d\xe1tum: ${e.date}`,
	selectedRangeDescription: (e) => `Vybrat\xfd rozsah: od ${e.startDate} do ${e.endDate}`,
	selectedTimeDescription: (e) => `Vybrat\xfd \u{10D}as: ${e.time}`,
	startDate: "Dátum začatia",
	timeZoneName: "časové pásmo",
	weekday: "deň týždňa",
	year: "rok"
};
// node_modules/react-aria/dist/private/intl/datepicker/sl-SI.mjs
var wp = {};
wp = {
	calendar: "Koledar",
	day: "dan",
	dayPeriod: "dop/pop",
	endDate: "Datum konca",
	era: "doba",
	hour: "ura",
	minute: "minuta",
	month: "mesec",
	second: "sekunda",
	selectedDateDescription: (e) => `Izbrani datum: ${e.date}`,
	selectedRangeDescription: (e) => `Izbrano obmo\u{10D}je: ${e.startDate} do ${e.endDate}`,
	selectedTimeDescription: (e) => `Izbrani \u{10D}as: ${e.time}`,
	startDate: "Datum začetka",
	timeZoneName: "časovni pas",
	weekday: "dan v tednu",
	year: "leto"
};
// node_modules/react-aria/dist/private/intl/datepicker/sr-SP.mjs
var Tp = {};
Tp = {
	calendar: "Kalendar",
	day: "дан",
	dayPeriod: "пре подне/по подне",
	endDate: "Datum završetka",
	era: "ера",
	hour: "сат",
	minute: "минут",
	month: "месец",
	second: "секунд",
	selectedDateDescription: (e) => `Izabrani datum: ${e.date}`,
	selectedRangeDescription: (e) => `Izabrani opseg: od ${e.startDate} do ${e.endDate}`,
	selectedTimeDescription: (e) => `Izabrano vreme: ${e.time}`,
	startDate: "Datum početka",
	timeZoneName: "временска зона",
	weekday: "дан у недељи",
	year: "година"
};
// node_modules/react-aria/dist/private/intl/datepicker/sv-SE.mjs
var Ep = {};
Ep = {
	calendar: "Kalender",
	day: "dag",
	dayPeriod: "fm/em",
	endDate: "Slutdatum",
	era: "era",
	hour: "timme",
	minute: "minut",
	month: "månad",
	second: "sekund",
	selectedDateDescription: (e) => `Valt datum: ${e.date}`,
	selectedRangeDescription: (e) => `Valt intervall: ${e.startDate} till ${e.endDate}`,
	selectedTimeDescription: (e) => `Vald tid: ${e.time}`,
	startDate: "Startdatum",
	timeZoneName: "tidszon",
	weekday: "veckodag",
	year: "år"
};
// node_modules/react-aria/dist/private/intl/datepicker/tr-TR.mjs
var Dp = {};
Dp = {
	calendar: "Takvim",
	day: "gün",
	dayPeriod: "ÖÖ/ÖS",
	endDate: "Bitiş Tarihi",
	era: "çağ",
	hour: "saat",
	minute: "dakika",
	month: "ay",
	second: "saniye",
	selectedDateDescription: (e) => `Se\xe7ilen Tarih: ${e.date}`,
	selectedRangeDescription: (e) => `Se\xe7ilen Aral\u{131}k: ${e.startDate} - ${e.endDate}`,
	selectedTimeDescription: (e) => `Se\xe7ilen Zaman: ${e.time}`,
	startDate: "Başlangıç Tarihi",
	timeZoneName: "saat dilimi",
	weekday: "haftanın günü",
	year: "yıl"
};
// node_modules/react-aria/dist/private/intl/datepicker/uk-UA.mjs
var Op = {};
Op = {
	calendar: "Календар",
	day: "день",
	dayPeriod: "дп/пп",
	endDate: "Дата завершення",
	era: "ера",
	hour: "година",
	minute: "хвилина",
	month: "місяць",
	second: "секунда",
	selectedDateDescription: (e) => `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,
	selectedRangeDescription: (e) => `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{434}\u{456}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.startDate} \u{2014} ${e.endDate}`,
	selectedTimeDescription: (e) => `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{447}\u{430}\u{441}: ${e.time}`,
	startDate: "Дата початку",
	timeZoneName: "часовий пояс",
	weekday: "день тижня",
	year: "рік"
};
// node_modules/react-aria/dist/private/intl/datepicker/zh-CN.mjs
var kp = {};
kp = {
	calendar: "日历",
	day: "日",
	dayPeriod: "上午/下午",
	endDate: "结束日期",
	era: "纪元",
	hour: "小时",
	minute: "分钟",
	month: "月",
	second: "秒",
	selectedDateDescription: (e) => `\u{9009}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${e.date}`,
	selectedRangeDescription: (e) => `\u{9009}\u{5B9A}\u{7684}\u{8303}\u{56F4}\u{FF1A}${e.startDate} \u{81F3} ${e.endDate}`,
	selectedTimeDescription: (e) => `\u{9009}\u{5B9A}\u{7684}\u{65F6}\u{95F4}\u{FF1A}${e.time}`,
	startDate: "开始日期",
	timeZoneName: "时区",
	weekday: "工作日",
	year: "年"
};
// node_modules/react-aria/dist/private/intl/datepicker/zh-TW.mjs
var Ap = {};
Ap = {
	calendar: "日曆",
	day: "日",
	dayPeriod: "上午/下午",
	endDate: "結束日期",
	era: "纪元",
	hour: "小时",
	minute: "分钟",
	month: "月",
	second: "秒",
	selectedDateDescription: (e) => `\u{9078}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${e.date}`,
	selectedRangeDescription: (e) => `\u{9078}\u{5B9A}\u{7684}\u{7BC4}\u{570D}\u{FF1A}${e.startDate} \u{81F3} ${e.endDate}`,
	selectedTimeDescription: (e) => `\u{9078}\u{5B9A}\u{7684}\u{6642}\u{9593}\u{FF1A}${e.time}`,
	startDate: "開始日期",
	timeZoneName: "时区",
	weekday: "工作日",
	year: "年"
};
// node_modules/react-aria/dist/private/datepicker/intlStrings.mjs
var jp = {};
jp = {
	"ar-AE": Zf,
	"bg-BG": Qf,
	"cs-CZ": $f,
	"da-DK": ep,
	"de-DE": tp,
	"el-GR": np,
	"en-US": rp,
	"es-ES": ip,
	"et-EE": ap,
	"fi-FI": op,
	"fr-FR": sp,
	"he-IL": cp,
	"hr-HR": lp,
	"hu-HU": up,
	"it-IT": dp,
	"ja-JP": fp,
	"ko-KR": pp,
	"lt-LT": mp,
	"lv-LV": hp,
	"nb-NO": gp,
	"nl-NL": _p,
	"pl-PL": vp,
	"pt-BR": yp,
	"pt-PT": bp,
	"ro-RO": xp,
	"ru-RU": Sp,
	"sk-SK": Cp,
	"sl-SI": wp,
	"sr-SP": Tp,
	"sv-SE": Ep,
	"tr-TR": Dp,
	"uk-UA": Op,
	"zh-CN": kp,
	"zh-TW": Ap
};
// node_modules/react-aria/dist/private/datepicker/useDatePickerGroup.mjs
function Mp(e, t, n) {
	let { direction: r } = an(), i = (0, v.useMemo)(() => Lu(t), [t]), { keyboardProps: a } = Gn({
		shortcuts: {
			"Alt+ArrowDown": () => {
				if ("setOpen" in e) e.setOpen(!0);
				else return !1;
			},
			"Alt+ArrowUp": () => {
				if ("setOpen" in e) e.setOpen(!0);
				else return !1;
			},
			ArrowLeft: (e) => {
				if (n) return !1;
				if (r === "rtl") {
					if (t.current) {
						let n = B(e), r = Np(t.current, n.getBoundingClientRect().left, -1);
						if (r) {
							r.focus();
							return;
						}
					}
				} else {
					i.focusPrevious();
					return;
				}
				return !1;
			},
			ArrowRight: (e) => {
				if (n) return !1;
				if (r === "rtl") {
					if (t.current) {
						let n = B(e), r = Np(t.current, n.getBoundingClientRect().left, 1);
						if (r) {
							r.focus();
							return;
						}
					}
				} else {
					i.focusNext();
					return;
				}
				return !1;
			}
		},
		allowRepeats: !0
	}), o = () => {
		if (!t.current) return;
		let e = window.event ? B(window.event) : null, n = Iu(t.current, { tabbable: !0 });
		if (e &&= (n.currentNode = e, n.previousNode()), !e) {
			let t;
			do
				t = n.lastChild(), t && (e = t);
			while (t);
		}
		for (; e?.hasAttribute("data-placeholder");) {
			let t = n.previousNode();
			if (t && t.hasAttribute("data-placeholder")) e = t;
			else break;
		}
		e && e.focus();
	}, { pressProps: s } = xr({
		preventFocusOnPress: !0,
		allowTextSelectionOnPress: !0,
		onPressStart(e) {
			e.pointerType === "mouse" && o();
		},
		onPress(e) {
			(e.pointerType === "touch" || e.pointerType === "pen") && o();
		}
	});
	return ue(s, a);
}
function Np(e, t, n) {
	let r = Iu(e, { tabbable: !0 }), i = r.nextNode(), a = null, o = Infinity;
	for (; i;) {
		let e = i.getBoundingClientRect().left - t, s = Math.abs(e);
		Math.sign(e) === n && s < o && (a = i, o = s), i = r.nextNode();
	}
	return a;
}
// node_modules/react-aria/dist/private/datepicker/useDateField.mjs
function Pp(e) {
	return e && e.__esModule ? e.default : e;
}
var Fp = /* @__PURE__ */ new WeakMap(), Ip = "__reactAriaDateFieldRole", Lp = "__reactAriaDateFieldFocusManager";
function Rp(e, t, n) {
	let { isInvalid: r, validationErrors: i, validationDetails: a } = t.displayValidation, { labelProps: o, fieldProps: s, descriptionProps: c, errorMessageProps: l } = gl({
		...e,
		labelElementType: "span",
		isInvalid: r,
		errorMessage: e.errorMessage || i
	}), u = (0, v.useRef)(null), { focusWithinProps: d } = kr({
		...e,
		onFocusWithin(n) {
			u.current = t.value, e.onFocus?.(n);
		},
		onBlurWithin: (n) => {
			t.confirmPlaceholder(), t.value !== u.current && t.commitValidation(), e.onBlur?.(n);
		},
		onFocusWithinChange: e.onFocusChange
	}), f = yn(Pp(jp), "@react-aria/datepicker"), p = t.maxGranularity === "hour" ? "selectedTimeDescription" : "selectedDateDescription", m = t.maxGranularity === "hour" ? "time" : "date", h = wc(t.value ? f.format(p, { [m]: t.formatValue({ month: "long" }) }) : ""), g = e.__reactAriaDateFieldRole === "presentation" ? s["aria-describedby"] : [h["aria-describedby"], s["aria-describedby"]].filter(Boolean).join(" ") || void 0, _ = e[Lp], y = (0, v.useMemo)(() => _ || Lu(n), [_, n]), b = Mp(t, n, e[Ip] === "presentation");
	Fp.set(t, {
		ariaLabel: e["aria-label"],
		ariaLabelledBy: [o.id, e["aria-labelledby"]].filter(Boolean).join(" ") || void 0,
		ariaDescribedBy: g,
		focusManager: y
	});
	let x = (0, v.useRef)(e.autoFocus), S;
	S = e.__reactAriaDateFieldRole === "presentation" ? { role: "presentation" } : ue(s, {
		role: "group",
		"aria-disabled": e.isDisabled || void 0,
		"aria-describedby": g
	}), (0, v.useEffect)(() => {
		x.current && y.focusFirst(), x.current = !1;
	}, [y]), _l(e.inputRef, t.defaultValue, t.setValue), vl({
		...e,
		focus() {
			y.focusFirst();
		}
	}, t, e.inputRef);
	let C = {
		type: "hidden",
		name: e.name,
		form: e.form,
		value: t.value?.toString() || "",
		disabled: e.isDisabled
	};
	e.validationBehavior === "native" && (C.type = "text", C.hidden = !0, C.required = e.isRequired, C.onChange = () => {});
	let w = ar(e);
	return {
		labelProps: {
			...o,
			onClick: () => {
				y.focusFirst();
			}
		},
		fieldProps: ue(w, S, b, d, {
			onKeyDown: e.onKeyDown,
			onKeyUp: e.onKeyUp,
			style: { unicodeBidi: "isolate" }
		}),
		inputProps: C,
		descriptionProps: c,
		errorMessageProps: l,
		isInvalid: r,
		validationErrors: i,
		validationDetails: a
	};
}
// node_modules/react-aria/dist/private/datepicker/useDisplayNames.mjs
function zp(e) {
	return e && e.__esModule ? e.default : e;
}
function Bp() {
	let { locale: e } = an(), t = vn(zp(jp), "@react-aria/datepicker");
	return (0, v.useMemo)(() => {
		try {
			return new Intl.DisplayNames(e, { type: "dateTimeField" });
		} catch {
			return new Vp(e, t);
		}
	}, [e, t]);
}
var Vp = class {
	constructor(e, t) {
		this.locale = e, this.dictionary = t;
	}
	of(e) {
		return this.dictionary.getStringForLocale(e, this.locale);
	}
};
// node_modules/react-aria/dist/private/datepicker/useDateSegment.mjs
function Hp(e, t, n) {
	let r = (0, v.useRef)(""), { locale: i, direction: a } = an(), o = Bp(), { ariaLabel: s, ariaLabelledBy: c, ariaDescribedBy: l, focusManager: u } = Fp.get(t), d = e.isPlaceholder ? "" : e.text, f = (0, v.useMemo)(() => t.dateFormatter.resolvedOptions(), [t.dateFormatter]), p = rc({
		month: "long",
		timeZone: f.timeZone
	}), m = rc({
		hour: "numeric",
		hour12: f.hour12,
		timeZone: f.timeZone
	});
	if (e.type === "month" && !e.isPlaceholder) {
		let e = p.format(t.dateValue);
		d = e === d ? e : `${d} \u{2013} ${e}`;
	} else e.type === "hour" && !e.isPlaceholder && (d = m.format(t.dateValue));
	let { spinButtonProps: h } = uu({
		value: e.value ?? void 0,
		textValue: d,
		minValue: e.minValue,
		maxValue: e.maxValue,
		isDisabled: t.isDisabled,
		isReadOnly: t.isReadOnly || !e.isEditable,
		isRequired: t.isRequired,
		onIncrement: () => {
			r.current = "", t.increment(e.type);
		},
		onDecrement: () => {
			r.current = "", t.decrement(e.type);
		},
		onIncrementPage: () => {
			r.current = "", t.incrementPage(e.type);
		},
		onDecrementPage: () => {
			r.current = "", t.decrementPage(e.type);
		},
		onIncrementToMax: () => {
			r.current = "", t.incrementToMax(e.type);
		},
		onDecrementToMin: () => {
			r.current = "", t.decrementToMin(e.type);
		}
	}), g = (0, v.useMemo)(() => new qr(i, { maximumFractionDigits: 0 }), [i]), _ = () => {
		if (e.text === e.placeholder && u.focusPrevious(), g.isValidPartialNumber(e.text) && !t.isReadOnly && !e.isPlaceholder) {
			let n = e.text.slice(0, -1), i = g.parse(n);
			n = i === 0 ? "" : n, n.length === 0 || i === 0 ? t.clearSegment(e.type) : t.setSegment(e.type, i), r.current = n;
		} else (e.type === "dayPeriod" || e.type === "era") && t.clearSegment(e.type);
	}, { keyboardProps: b } = Gn({
		shortcuts: {
			Backspace: () => {
				_();
			},
			Delete: () => {
				_();
			},
			"Mod+a": () => {}
		},
		allowRepeats: !0
	}), { startsWith: x } = Kf({ sensitivity: "base" }), S = rc({
		hour: "numeric",
		hour12: !0
	}), C = (0, v.useMemo)(() => {
		let e = /* @__PURE__ */ new Date();
		return e.setHours(0), S.formatToParts(e).find((e) => e.type === "dayPeriod").value;
	}, [S]), w = (0, v.useMemo)(() => {
		let e = /* @__PURE__ */ new Date();
		return e.setHours(12), S.formatToParts(e).find((e) => e.type === "dayPeriod").value;
	}, [S]), T = rc({
		year: "numeric",
		era: "narrow",
		timeZone: "UTC"
	}), E = (0, v.useMemo)(() => {
		if (e.type !== "era") return [];
		let n = Ya(new Lo(1, 1, 1), t.calendar), r = t.calendar.getEras().map((e) => {
			let t = n.set({
				year: 1,
				month: 1,
				day: 1,
				era: e
			}).toDate("UTC");
			return {
				era: e,
				formatted: T.formatToParts(t).find((e) => e.type === "era")?.value ?? e
			};
		}), i = Up(r.map((e) => e.formatted));
		if (i) for (let e of r) e.formatted = e.formatted.slice(i);
		return r;
	}, [
		T,
		t.calendar,
		e.type
	]), D = (n) => {
		if (t.isDisabled || t.isReadOnly) return;
		let i = r.current + n;
		switch (e.type) {
			case "dayPeriod":
				if (x(C, n)) t.setSegment("dayPeriod", 0);
				else if (x(w, n)) t.setSegment("dayPeriod", 1);
				else break;
				u.focusNext();
				break;
			case "era": {
				let e = E.find((e) => x(e.formatted, n));
				e && (t.setSegment("era", e.era), u.focusNext());
				break;
			}
			case "day":
			case "hour":
			case "minute":
			case "second":
			case "month":
			case "year": {
				if (!g.isValidPartialNumber(i)) return;
				let a = g.parse(i), o = a;
				if (e.maxValue !== void 0 && a > e.maxValue && (o = g.parse(n)), isNaN(a)) return;
				t.setSegment(e.type, o), e.maxValue !== void 0 && (Number(a + "0") > e.maxValue || i.length >= String(e.maxValue).length) ? (r.current = "", u.focusNext()) : r.current = i;
				break;
			}
		}
	}, O = () => {
		r.current = "", n.current && xc(n.current, { containingElement: _c(n.current) }), window.getSelection()?.collapse(n.current);
	};
	Ut((0, v.useRef)(typeof document < "u" ? document : null), "selectionchange", () => {
		let e = window.getSelection();
		e?.anchorNode && R(n.current, e?.anchorNode) && z() === n.current && e.collapse(n.current);
	});
	let k = (0, v.useRef)("");
	Ut(n, "beforeinput", (r) => {
		if (n.current) switch (r.preventDefault(), r.inputType) {
			case "deleteContentBackward":
			case "deleteContentForward":
				g.isValidPartialNumber(e.text) && !t.isReadOnly && _();
				break;
			case "insertCompositionText":
				k.current = n.current.textContent, n.current.textContent = n.current.textContent;
				break;
			default: r.data != null && D(r.data);
		}
	}), Ut(n, "input", (e) => {
		let { inputType: t, data: r } = e;
		t === "insertCompositionText" && (n.current && (n.current.textContent = k.current), r != null && (x(C, r) || x(w, r)) && D(r));
	}), y(() => {
		let e = n.current;
		return () => {
			z() === e && (u.focusPrevious() || u.focusNext());
		};
	}, [n, u]);
	let ee = $e() || e.type === "timeZoneName" ? {
		role: "textbox",
		"aria-valuemax": null,
		"aria-valuemin": null,
		"aria-valuetext": null,
		"aria-valuenow": null
	} : {};
	e !== (0, v.useMemo)(() => t.segments.find((e) => e.isEditable), [t.segments]) && !t.isInvalid && (l = void 0);
	let A = re(), j = !t.isDisabled && !t.isReadOnly && e.isEditable, te = Wt({
		"aria-label": `${e.type === "literal" ? "" : o.of(e.type)}${s ? `, ${s}` : ""}${c ? ", " : ""}`,
		"aria-labelledby": c
	});
	if (e.type === "literal") return { segmentProps: { "aria-hidden": !0 } };
	let ne = { caretColor: "transparent" };
	if (a === "rtl") {
		ne.unicodeBidi = "embed";
		let t = f[e.type];
		(t === "numeric" || t === "2-digit") && (ne.direction = "ltr");
	}
	return { segmentProps: ue(h, te, {
		id: A,
		...ee,
		...b,
		"aria-invalid": t.isInvalid ? "true" : void 0,
		"aria-describedby": l,
		"aria-readonly": t.isReadOnly || !e.isEditable ? "true" : void 0,
		"data-placeholder": e.isPlaceholder || void 0,
		contentEditable: j,
		suppressContentEditableWarning: j,
		spellCheck: j ? "false" : void 0,
		autoCorrect: j ? "off" : void 0,
		enterKeyHint: j ? "next" : void 0,
		inputMode: t.isDisabled || e.type === "dayPeriod" || e.type === "era" || !j ? void 0 : "numeric",
		tabIndex: t.isDisabled ? void 0 : 0,
		onFocus: O,
		style: ne,
		onPointerDown(e) {
			e.stopPropagation();
		},
		onMouseDown(e) {
			e.stopPropagation();
		}
	}) };
}
function Up(e) {
	e.sort();
	let t = e[0], n = e[e.length - 1];
	for (let e = 0; e < t.length; e++) if (t[e] !== n[e]) return e;
	return 0;
}
// node_modules/react-stately/dist/private/intl/datepicker/ar-AE.mjs
var Wp = {};
Wp = {
	rangeOverflow: (e) => `\u{64A}\u{62C}\u{628} \u{623}\u{646} \u{62A}\u{643}\u{648}\u{646} \u{627}\u{644}\u{642}\u{64A}\u{645}\u{629} ${e.maxValue} \u{623}\u{648} \u{642}\u{628}\u{644} \u{630}\u{644}\u{643}.`,
	rangeReversed: "تاريخ البدء يجب أن يكون قبل تاريخ الانتهاء.",
	rangeUnderflow: (e) => `\u{64A}\u{62C}\u{628} \u{623}\u{646} \u{62A}\u{643}\u{648}\u{646} \u{627}\u{644}\u{642}\u{64A}\u{645}\u{629} ${e.minValue} \u{623}\u{648} \u{628}\u{639}\u{62F} \u{630}\u{644}\u{643}.`,
	unavailableDate: "البيانات المحددة غير متاحة."
};
// node_modules/react-stately/dist/private/intl/datepicker/bg-BG.mjs
var Gp = {};
Gp = {
	rangeOverflow: (e) => `\u{421}\u{442}\u{43E}\u{439}\u{43D}\u{43E}\u{441}\u{442}\u{442}\u{430} \u{442}\u{440}\u{44F}\u{431}\u{432}\u{430} \u{434}\u{430} \u{435} ${e.maxValue} \u{438}\u{43B}\u{438} \u{43F}\u{43E}-\u{440}\u{430}\u{43D}\u{43D}\u{430}.`,
	rangeReversed: "Началната дата трябва да е преди крайната.",
	rangeUnderflow: (e) => `\u{421}\u{442}\u{43E}\u{439}\u{43D}\u{43E}\u{441}\u{442}\u{442}\u{430} \u{442}\u{440}\u{44F}\u{431}\u{432}\u{430} \u{434}\u{430} \u{435} ${e.minValue} \u{438}\u{43B}\u{438} \u{43F}\u{43E}-\u{43A}\u{44A}\u{441}\u{43D}\u{43E}.`,
	unavailableDate: "Избраната дата не е налична."
};
// node_modules/react-stately/dist/private/intl/datepicker/cs-CZ.mjs
var Kp = {};
Kp = {
	rangeOverflow: (e) => `Hodnota mus\xed b\xfdt ${e.maxValue} nebo d\u{159}\xedv\u{11B}j\u{161}\xed.`,
	rangeReversed: "Datum zahájení musí předcházet datu ukončení.",
	rangeUnderflow: (e) => `Hodnota mus\xed b\xfdt ${e.minValue} nebo pozd\u{11B}j\u{161}\xed.`,
	unavailableDate: "Vybrané datum není k dispozici."
};
// node_modules/react-stately/dist/private/intl/datepicker/da-DK.mjs
var qp = {};
qp = {
	rangeOverflow: (e) => `V\xe6rdien skal v\xe6re ${e.maxValue} eller tidligere.`,
	rangeReversed: "Startdatoen skal være før slutdatoen.",
	rangeUnderflow: (e) => `V\xe6rdien skal v\xe6re ${e.minValue} eller nyere.`,
	unavailableDate: "Den valgte dato er ikke tilgængelig."
};
// node_modules/react-stately/dist/private/intl/datepicker/de-DE.mjs
var Jp = {};
Jp = {
	rangeOverflow: (e) => `Der Wert muss ${e.maxValue} oder fr\xfcher sein.`,
	rangeReversed: "Das Startdatum muss vor dem Enddatum liegen.",
	rangeUnderflow: (e) => `Der Wert muss ${e.minValue} oder sp\xe4ter sein.`,
	unavailableDate: "Das ausgewählte Datum ist nicht verfügbar."
};
// node_modules/react-stately/dist/private/intl/datepicker/el-GR.mjs
var Yp = {};
Yp = {
	rangeOverflow: (e) => `\u{397} \u{3C4}\u{3B9}\u{3BC}\u{3AE} \u{3C0}\u{3C1}\u{3AD}\u{3C0}\u{3B5}\u{3B9} \u{3BD}\u{3B1} \u{3B5}\u{3AF}\u{3BD}\u{3B1}\u{3B9} ${e.maxValue} \u{3AE} \u{3C0}\u{3B1}\u{3BB}\u{3B1}\u{3B9}\u{3CC}\u{3C4}\u{3B5}\u{3C1}\u{3B7}.`,
	rangeReversed: "Η ημερομηνία έναρξης πρέπει να είναι πριν από την ημερομηνία λήξης.",
	rangeUnderflow: (e) => `\u{397} \u{3C4}\u{3B9}\u{3BC}\u{3AE} \u{3C0}\u{3C1}\u{3AD}\u{3C0}\u{3B5}\u{3B9} \u{3BD}\u{3B1} \u{3B5}\u{3AF}\u{3BD}\u{3B1}\u{3B9} ${e.minValue} \u{3AE} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3B3}\u{3B5}\u{3BD}\u{3AD}\u{3C3}\u{3C4}\u{3B5}\u{3C1}\u{3B7}.`,
	unavailableDate: "Η επιλεγμένη ημερομηνία δεν είναι διαθέσιμη."
};
// node_modules/react-stately/dist/private/intl/datepicker/en-US.mjs
var Xp = {};
Xp = {
	rangeUnderflow: (e) => `Value must be ${e.minValue} or later.`,
	rangeOverflow: (e) => `Value must be ${e.maxValue} or earlier.`,
	rangeReversed: "Start date must be before end date.",
	unavailableDate: "Selected date unavailable."
};
// node_modules/react-stately/dist/private/intl/datepicker/es-ES.mjs
var Zp = {};
Zp = {
	rangeOverflow: (e) => `El valor debe ser ${e.maxValue} o anterior.`,
	rangeReversed: "La fecha de inicio debe ser anterior a la fecha de finalización.",
	rangeUnderflow: (e) => `El valor debe ser ${e.minValue} o posterior.`,
	unavailableDate: "Fecha seleccionada no disponible."
};
// node_modules/react-stately/dist/private/intl/datepicker/et-EE.mjs
var Qp = {};
Qp = {
	rangeOverflow: (e) => `V\xe4\xe4rtus peab olema ${e.maxValue} v\xf5i varasem.`,
	rangeReversed: "Alguskuupäev peab olema enne lõppkuupäeva.",
	rangeUnderflow: (e) => `V\xe4\xe4rtus peab olema ${e.minValue} v\xf5i hilisem.`,
	unavailableDate: "Valitud kuupäev pole saadaval."
};
// node_modules/react-stately/dist/private/intl/datepicker/fi-FI.mjs
var $p = {};
$p = {
	rangeOverflow: (e) => `Arvon on oltava ${e.maxValue} tai sit\xe4 aikaisempi.`,
	rangeReversed: "Aloituspäivän on oltava ennen lopetuspäivää.",
	rangeUnderflow: (e) => `Arvon on oltava ${e.minValue} tai sit\xe4 my\xf6h\xe4isempi.`,
	unavailableDate: "Valittu päivämäärä ei ole käytettävissä."
};
// node_modules/react-stately/dist/private/intl/datepicker/fr-FR.mjs
var em = {};
em = {
	rangeOverflow: (e) => `La valeur doit \xeatre ${e.maxValue} ou ant\xe9rieure.`,
	rangeReversed: "La date de début doit être antérieure à la date de fin.",
	rangeUnderflow: (e) => `La valeur doit \xeatre ${e.minValue} ou ult\xe9rieure.`,
	unavailableDate: "La date sélectionnée n’est pas disponible."
};
// node_modules/react-stately/dist/private/intl/datepicker/he-IL.mjs
var tm = {};
tm = {
	rangeOverflow: (e) => `\u{5D4}\u{5E2}\u{5E8}\u{5DA} \u{5D7}\u{5D9}\u{5D9}\u{5D1} \u{5DC}\u{5D4}\u{5D9}\u{5D5}\u{5EA} ${e.maxValue} \u{5D0}\u{5D5} \u{5DE}\u{5D5}\u{5E7}\u{5D3}\u{5DD} \u{5D9}\u{5D5}\u{5EA}\u{5E8}.`,
	rangeReversed: "תאריך ההתחלה חייב להיות לפני תאריך הסיום.",
	rangeUnderflow: (e) => `\u{5D4}\u{5E2}\u{5E8}\u{5DA} \u{5D7}\u{5D9}\u{5D9}\u{5D1} \u{5DC}\u{5D4}\u{5D9}\u{5D5}\u{5EA} ${e.minValue} \u{5D0}\u{5D5} \u{5DE}\u{5D0}\u{5D5}\u{5D7}\u{5E8} \u{5D9}\u{5D5}\u{5EA}\u{5E8}.`,
	unavailableDate: "התאריך הנבחר אינו זמין."
};
// node_modules/react-stately/dist/private/intl/datepicker/hr-HR.mjs
var nm = {};
nm = {
	rangeOverflow: (e) => `Vrijednost mora biti ${e.maxValue} ili ranije.`,
	rangeReversed: "Datum početka mora biti prije datuma završetka.",
	rangeUnderflow: (e) => `Vrijednost mora biti ${e.minValue} ili kasnije.`,
	unavailableDate: "Odabrani datum nije dostupan."
};
// node_modules/react-stately/dist/private/intl/datepicker/hu-HU.mjs
var rm = {};
rm = {
	rangeOverflow: (e) => `Az \xe9rt\xe9knek ${e.maxValue} vagy kor\xe1bbinak kell lennie.`,
	rangeReversed: "A kezdő dátumnak a befejező dátumnál korábbinak kell lennie.",
	rangeUnderflow: (e) => `Az \xe9rt\xe9knek ${e.minValue} vagy k\xe9s\u{151}bbinek kell lennie.`,
	unavailableDate: "A kiválasztott dátum nem érhető el."
};
// node_modules/react-stately/dist/private/intl/datepicker/it-IT.mjs
var im = {};
im = {
	rangeOverflow: (e) => `Il valore deve essere ${e.maxValue} o precedente.`,
	rangeReversed: "La data di inizio deve essere antecedente alla data di fine.",
	rangeUnderflow: (e) => `Il valore deve essere ${e.minValue} o successivo.`,
	unavailableDate: "Data selezionata non disponibile."
};
// node_modules/react-stately/dist/private/intl/datepicker/ja-JP.mjs
var am = {};
am = {
	rangeOverflow: (e) => `\u{5024}\u{306F} ${e.maxValue} \u{4EE5}\u{4E0B}\u{306B}\u{3059}\u{308B}\u{5FC5}\u{8981}\u{304C}\u{3042}\u{308A}\u{307E}\u{3059}\u{3002}`,
	rangeReversed: "開始日は終了日より前にする必要があります。",
	rangeUnderflow: (e) => `\u{5024}\u{306F} ${e.minValue} \u{4EE5}\u{4E0A}\u{306B}\u{3059}\u{308B}\u{5FC5}\u{8981}\u{304C}\u{3042}\u{308A}\u{307E}\u{3059}\u{3002}`,
	unavailableDate: "選択した日付は使用できません。"
};
// node_modules/react-stately/dist/private/intl/datepicker/ko-KR.mjs
var om = {};
om = {
	rangeOverflow: (e) => `\u{AC12}\u{C740} ${e.maxValue} \u{C774}\u{C804}\u{C774}\u{C5B4}\u{C57C} \u{D569}\u{B2C8}\u{B2E4}.`,
	rangeReversed: "시작일은 종료일 이전이어야 합니다.",
	rangeUnderflow: (e) => `\u{AC12}\u{C740} ${e.minValue} \u{C774}\u{D6C4}\u{C5EC}\u{C57C} \u{D569}\u{B2C8}\u{B2E4}.`,
	unavailableDate: "선택한 날짜를 사용할 수 없습니다."
};
// node_modules/react-stately/dist/private/intl/datepicker/lt-LT.mjs
var sm = {};
sm = {
	rangeOverflow: (e) => `Reik\u{161}m\u{117} turi b\u{16B}ti ${e.maxValue} arba ankstesn\u{117}.`,
	rangeReversed: "Pradžios data turi būti ankstesnė nei pabaigos data.",
	rangeUnderflow: (e) => `Reik\u{161}m\u{117} turi b\u{16B}ti ${e.minValue} arba naujesn\u{117}.`,
	unavailableDate: "Pasirinkta data nepasiekiama."
};
// node_modules/react-stately/dist/private/intl/datepicker/lv-LV.mjs
var cm = {};
cm = {
	rangeOverflow: (e) => `V\u{113}rt\u{12B}bai ir j\u{101}b\u{16B}t ${e.maxValue} vai agr\u{101}kai.`,
	rangeReversed: "Sākuma datumam ir jābūt pirms beigu datuma.",
	rangeUnderflow: (e) => `V\u{113}rt\u{12B}bai ir j\u{101}b\u{16B}t ${e.minValue} vai v\u{113}l\u{101}kai.`,
	unavailableDate: "Atlasītais datums nav pieejams."
};
// node_modules/react-stately/dist/private/intl/datepicker/nb-NO.mjs
var lm = {};
lm = {
	rangeOverflow: (e) => `Verdien m\xe5 v\xe6re ${e.maxValue} eller tidligere.`,
	rangeReversed: "Startdatoen må være før sluttdatoen.",
	rangeUnderflow: (e) => `Verdien m\xe5 v\xe6re ${e.minValue} eller senere.`,
	unavailableDate: "Valgt dato utilgjengelig."
};
// node_modules/react-stately/dist/private/intl/datepicker/nl-NL.mjs
var um = {};
um = {
	rangeOverflow: (e) => `Waarde moet ${e.maxValue} of eerder zijn.`,
	rangeReversed: "De startdatum moet voor de einddatum liggen.",
	rangeUnderflow: (e) => `Waarde moet ${e.minValue} of later zijn.`,
	unavailableDate: "Geselecteerde datum niet beschikbaar."
};
// node_modules/react-stately/dist/private/intl/datepicker/pl-PL.mjs
var dm = {};
dm = {
	rangeOverflow: (e) => `Warto\u{15B}\u{107} musi mie\u{107} warto\u{15B}\u{107} ${e.maxValue} lub wcze\u{15B}niejsz\u{105}.`,
	rangeReversed: "Data rozpoczęcia musi być wcześniejsza niż data zakończenia.",
	rangeUnderflow: (e) => `Warto\u{15B}\u{107} musi mie\u{107} warto\u{15B}\u{107} ${e.minValue} lub p\xf3\u{17A}niejsz\u{105}.`,
	unavailableDate: "Wybrana data jest niedostępna."
};
// node_modules/react-stately/dist/private/intl/datepicker/pt-BR.mjs
var fm = {};
fm = {
	rangeOverflow: (e) => `O valor deve ser ${e.maxValue} ou anterior.`,
	rangeReversed: "A data inicial deve ser anterior à data final.",
	rangeUnderflow: (e) => `O valor deve ser ${e.minValue} ou posterior.`,
	unavailableDate: "Data selecionada indisponível."
};
// node_modules/react-stately/dist/private/intl/datepicker/pt-PT.mjs
var pm = {};
pm = {
	rangeOverflow: (e) => `O valor tem de ser ${e.maxValue} ou anterior.`,
	rangeReversed: "A data de início deve ser anterior à data de fim.",
	rangeUnderflow: (e) => `O valor tem de ser ${e.minValue} ou posterior.`,
	unavailableDate: "Data selecionada indisponível."
};
// node_modules/react-stately/dist/private/intl/datepicker/ro-RO.mjs
var mm = {};
mm = {
	rangeOverflow: (e) => `Valoarea trebuie s\u{103} fie ${e.maxValue} sau anterioar\u{103}.`,
	rangeReversed: "Data de început trebuie să fie anterioară datei de sfârșit.",
	rangeUnderflow: (e) => `Valoarea trebuie s\u{103} fie ${e.minValue} sau ulterioar\u{103}.`,
	unavailableDate: "Data selectată nu este disponibilă."
};
// node_modules/react-stately/dist/private/intl/datepicker/ru-RU.mjs
var hm = {};
hm = {
	rangeOverflow: (e) => `\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{438}\u{435} \u{434}\u{43E}\u{43B}\u{436}\u{43D}\u{43E} \u{431}\u{44B}\u{442}\u{44C} \u{43D}\u{435} \u{43F}\u{43E}\u{437}\u{436}\u{435} ${e.maxValue}.`,
	rangeReversed: "Дата начала должна предшествовать дате окончания.",
	rangeUnderflow: (e) => `\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{438}\u{435} \u{434}\u{43E}\u{43B}\u{436}\u{43D}\u{43E} \u{431}\u{44B}\u{442}\u{44C} \u{43D}\u{435} \u{440}\u{430}\u{43D}\u{44C}\u{448}\u{435} ${e.minValue}.`,
	unavailableDate: "Выбранная дата недоступна."
};
// node_modules/react-stately/dist/private/intl/datepicker/sk-SK.mjs
var gm = {};
gm = {
	rangeOverflow: (e) => `Hodnota mus\xed by\u{165} ${e.maxValue} alebo skor\u{161}ia.`,
	rangeReversed: "Dátum začiatku musí byť skorší ako dátum konca.",
	rangeUnderflow: (e) => `Hodnota mus\xed by\u{165} ${e.minValue} alebo neskor\u{161}ia.`,
	unavailableDate: "Vybratý dátum je nedostupný."
};
// node_modules/react-stately/dist/private/intl/datepicker/sl-SI.mjs
var _m = {};
_m = {
	rangeOverflow: (e) => `Vrednost mora biti ${e.maxValue} ali starej\u{161}a.`,
	rangeReversed: "Začetni datum mora biti pred končnim datumom.",
	rangeUnderflow: (e) => `Vrednost mora biti ${e.minValue} ali novej\u{161}a.`,
	unavailableDate: "Izbrani datum ni na voljo."
};
// node_modules/react-stately/dist/private/intl/datepicker/sr-SP.mjs
var vm = {};
vm = {
	rangeOverflow: (e) => `Vrednost mora da bude ${e.maxValue} ili starija.`,
	rangeReversed: "Datum početka mora biti pre datuma završetka.",
	rangeUnderflow: (e) => `Vrednost mora da bude ${e.minValue} ili novija.`,
	unavailableDate: "Izabrani datum nije dostupan."
};
// node_modules/react-stately/dist/private/intl/datepicker/sv-SE.mjs
var ym = {};
ym = {
	rangeOverflow: (e) => `V\xe4rdet m\xe5ste vara ${e.maxValue} eller tidigare.`,
	rangeReversed: "Startdatumet måste vara före slutdatumet.",
	rangeUnderflow: (e) => `V\xe4rdet m\xe5ste vara ${e.minValue} eller senare.`,
	unavailableDate: "Det valda datumet är inte tillgängligt."
};
// node_modules/react-stately/dist/private/intl/datepicker/tr-TR.mjs
var bm = {};
bm = {
	rangeOverflow: (e) => `De\u{11F}er, ${e.maxValue} veya \xf6ncesi olmal\u{131}d\u{131}r.`,
	rangeReversed: "Başlangıç tarihi bitiş tarihinden önce olmalıdır.",
	rangeUnderflow: (e) => `De\u{11F}er, ${e.minValue} veya sonras\u{131} olmal\u{131}d\u{131}r.`,
	unavailableDate: "Seçilen tarih kullanılamıyor."
};
// node_modules/react-stately/dist/private/intl/datepicker/uk-UA.mjs
var xm = {};
xm = {
	rangeOverflow: (e) => `\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{43D}\u{44F} \u{43C}\u{430}\u{454} \u{431}\u{443}\u{442}\u{438} \u{43D}\u{435} \u{43F}\u{456}\u{437}\u{43D}\u{456}\u{448}\u{435} ${e.maxValue}.`,
	rangeReversed: "Дата початку має передувати даті завершення.",
	rangeUnderflow: (e) => `\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{43D}\u{44F} \u{43C}\u{430}\u{454} \u{431}\u{443}\u{442}\u{438} \u{43D}\u{435} \u{440}\u{430}\u{43D}\u{456}\u{448}\u{435} ${e.minValue}.`,
	unavailableDate: "Вибрана дата недоступна."
};
// node_modules/react-stately/dist/private/intl/datepicker/zh-CN.mjs
var Sm = {};
Sm = {
	rangeOverflow: (e) => `\u{503C}\u{5FC5}\u{987B}\u{662F} ${e.maxValue} \u{6216}\u{66F4}\u{65E9}\u{65E5}\u{671F}\u{3002}`,
	rangeReversed: "开始日期必须早于结束日期。",
	rangeUnderflow: (e) => `\u{503C}\u{5FC5}\u{987B}\u{662F} ${e.minValue} \u{6216}\u{66F4}\u{665A}\u{65E5}\u{671F}\u{3002}`,
	unavailableDate: "所选日期不可用。"
};
// node_modules/react-stately/dist/private/intl/datepicker/zh-TW.mjs
var Cm = {};
Cm = {
	rangeOverflow: (e) => `\u{503C}\u{5FC5}\u{9808}\u{662F} ${e.maxValue} \u{6216}\u{66F4}\u{65E9}\u{3002}`,
	rangeReversed: "開始日期必須在結束日期之前。",
	rangeUnderflow: (e) => `\u{503C}\u{5FC5}\u{9808}\u{662F} ${e.minValue} \u{6216}\u{66F4}\u{665A}\u{3002}`,
	unavailableDate: "所選日期無法使用。"
};
// node_modules/react-stately/dist/private/datepicker/intlStrings.mjs
var wm = {};
wm = {
	"ar-AE": Wp,
	"bg-BG": Gp,
	"cs-CZ": Kp,
	"da-DK": qp,
	"de-DE": Jp,
	"el-GR": Yp,
	"en-US": Xp,
	"es-ES": Zp,
	"et-EE": Qp,
	"fi-FI": $p,
	"fr-FR": em,
	"he-IL": tm,
	"hr-HR": nm,
	"hu-HU": rm,
	"it-IT": im,
	"ja-JP": am,
	"ko-KR": om,
	"lt-LT": sm,
	"lv-LV": cm,
	"nb-NO": lm,
	"nl-NL": um,
	"pl-PL": dm,
	"pt-BR": fm,
	"pt-PT": pm,
	"ro-RO": mm,
	"ru-RU": hm,
	"sk-SK": gm,
	"sl-SI": _m,
	"sr-SP": vm,
	"sv-SE": ym,
	"tr-TR": bm,
	"uk-UA": xm,
	"zh-CN": Sm,
	"zh-TW": Cm
};
// node_modules/react-stately/dist/private/datepicker/utils.mjs
function Tm(e) {
	return e && e.__esModule ? e.default : e;
}
var Em = new ln(Tm(wm));
function Dm() {
	let e = typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
	try {
		Intl.DateTimeFormat.supportedLocalesOf([e]);
	} catch {
		e = "en-US";
	}
	return e;
}
function Om(e, t, n, r, i) {
	let a = e != null && n != null && e.compare(n) > 0, o = e != null && t != null && e.compare(t) < 0, s = e != null && r?.(e) || !1, c = a || o || s, l = [];
	if (c) {
		let e = Dm(), r = new hn(e, ln.getGlobalDictionaryForPackage("@react-stately/datepicker") || Em), c = new Ys(e, jm({}, i)), u = c.resolvedOptions().timeZone;
		o && t != null && l.push(r.format("rangeUnderflow", { minValue: c.format(t.toDate(u)) })), a && n != null && l.push(r.format("rangeOverflow", { maxValue: c.format(n.toDate(u)) })), s && l.push(r.format("unavailableDate"));
	}
	return {
		isInvalid: c,
		validationErrors: l,
		validationDetails: {
			badInput: s,
			customError: !1,
			patternMismatch: !1,
			rangeOverflow: a,
			rangeUnderflow: o,
			stepMismatch: !1,
			tooLong: !1,
			tooShort: !1,
			typeMismatch: !1,
			valueMissing: !1,
			valid: !c
		}
	};
}
var km = {
	year: "numeric",
	month: "numeric",
	day: "numeric",
	hour: "numeric",
	minute: "2-digit",
	second: "2-digit"
}, Am = {
	year: "numeric",
	month: "2-digit",
	day: "2-digit",
	hour: "2-digit",
	minute: "2-digit",
	second: "2-digit"
};
function jm(e, t) {
	e = {
		...t.shouldForceLeadingZeros ? Am : km,
		...e
	};
	let n = t.granularity || "minute", r = Object.keys(e), i = r.indexOf(t.maxGranularity ?? "year");
	i < 0 && (i = 0);
	let a = r.indexOf(n);
	if (a < 0 && (a = 2), i > a) throw Error("maxGranularity must be greater than granularity");
	let o = r.slice(i, a + 1).reduce((t, n) => (t[n] = e[n], t), {});
	return t.hourCycle != null && (o.hour12 = t.hourCycle === 12), o.timeZone = t.timeZone || "UTC", (n === "hour" || n === "minute" || n === "second") && t.timeZone && !t.hideTimeZone && (o.timeZoneName = "short"), t.showEra && i === 0 && (o.era = "short"), o;
}
function Mm(e) {
	return e && "hour" in e ? e : new Ro();
}
function Nm(e, t) {
	if (e === null) return null;
	if (e) return Ya(e, t);
}
function Pm(e, t, n, r) {
	if (e) return Nm(e, n);
	let i = Ya(ha(r ?? Sa()).set({
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	}), n);
	return t === "year" || t === "month" || t === "day" ? qa(i) : r ? i : Ja(i);
}
function Fm(e, t) {
	let n = e && "timeZone" in e ? e.timeZone : void 0, r = e && "minute" in e ? "minute" : "day";
	if (e && t && !(t in e)) throw Error("Invalid granularity " + t + " for value " + e.toString());
	let [i, a] = (0, v.useState)([r, n]);
	e && (i[0] !== r || i[1] !== n) && a([r, n]), t ||= e ? r : i[0];
	let o = e ? n : i[1];
	return [t, o];
}
// node_modules/react-stately/dist/private/datepicker/placeholders.mjs
var Im = new ln({
	ach: {
		year: "mwaka",
		month: "dwe",
		day: "nino"
	},
	af: {
		year: "jjjj",
		month: "mm",
		day: "dd"
	},
	am: {
		year: "ዓዓዓዓ",
		month: "ሚሜ",
		day: "ቀቀ"
	},
	an: {
		year: "aaaa",
		month: "mm",
		day: "dd"
	},
	ar: {
		year: "سنة",
		month: "شهر",
		day: "يوم"
	},
	ast: {
		year: "aaaa",
		month: "mm",
		day: "dd"
	},
	az: {
		year: "iiii",
		month: "aa",
		day: "gg"
	},
	be: {
		year: "гггг",
		month: "мм",
		day: "дд"
	},
	bg: {
		year: "гггг",
		month: "мм",
		day: "дд"
	},
	bn: {
		year: "yyyy",
		month: "মিমি",
		day: "dd"
	},
	br: {
		year: "bbbb",
		month: "mm",
		day: "dd"
	},
	bs: {
		year: "gggg",
		month: "mm",
		day: "dd"
	},
	ca: {
		year: "aaaa",
		month: "mm",
		day: "dd"
	},
	cak: {
		year: "jjjj",
		month: "ii",
		day: "q'q'"
	},
	ckb: {
		year: "ساڵ",
		month: "مانگ",
		day: "ڕۆژ"
	},
	cs: {
		year: "rrrr",
		month: "mm",
		day: "dd"
	},
	cy: {
		year: "bbbb",
		month: "mm",
		day: "dd"
	},
	da: {
		year: "åååå",
		month: "mm",
		day: "dd"
	},
	de: {
		year: "jjjj",
		month: "mm",
		day: "tt"
	},
	dsb: {
		year: "llll",
		month: "mm",
		day: "źź"
	},
	el: {
		year: "εεεε",
		month: "μμ",
		day: "ηη"
	},
	en: {
		year: "yyyy",
		month: "mm",
		day: "dd"
	},
	eo: {
		year: "jjjj",
		month: "mm",
		day: "tt"
	},
	es: {
		year: "aaaa",
		month: "mm",
		day: "dd"
	},
	et: {
		year: "aaaa",
		month: "kk",
		day: "pp"
	},
	eu: {
		year: "uuuu",
		month: "hh",
		day: "ee"
	},
	fa: {
		year: "سال",
		month: "ماه",
		day: "روز"
	},
	ff: {
		year: "hhhh",
		month: "ll",
		day: "ññ"
	},
	fi: {
		year: "vvvv",
		month: "kk",
		day: "pp"
	},
	fr: {
		year: "aaaa",
		month: "mm",
		day: "jj"
	},
	fy: {
		year: "jjjj",
		month: "mm",
		day: "dd"
	},
	ga: {
		year: "bbbb",
		month: "mm",
		day: "ll"
	},
	gd: {
		year: "bbbb",
		month: "mm",
		day: "ll"
	},
	gl: {
		year: "aaaa",
		month: "mm",
		day: "dd"
	},
	he: {
		year: "שנה",
		month: "חודש",
		day: "יום"
	},
	hr: {
		year: "gggg",
		month: "mm",
		day: "dd"
	},
	hsb: {
		year: "llll",
		month: "mm",
		day: "dd"
	},
	hu: {
		year: "éééé",
		month: "hh",
		day: "nn"
	},
	ia: {
		year: "aaaa",
		month: "mm",
		day: "dd"
	},
	id: {
		year: "tttt",
		month: "bb",
		day: "hh"
	},
	is: {
		year: "áááá",
		month: "mm",
		day: "dd"
	},
	it: {
		year: "aaaa",
		month: "mm",
		day: "gg"
	},
	ja: {
		year: "年",
		month: "月",
		day: "日"
	},
	ka: {
		year: "წწწწ",
		month: "თთ",
		day: "რრ"
	},
	kk: {
		year: "жжжж",
		month: "аа",
		day: "кк"
	},
	kn: {
		year: "ವವವವ",
		month: "ಮಿಮೀ",
		day: "ದಿದಿ"
	},
	ko: {
		year: "연도",
		month: "월",
		day: "일"
	},
	lb: {
		year: "jjjj",
		month: "mm",
		day: "dd"
	},
	lo: {
		year: "ປປປປ",
		month: "ດດ",
		day: "ວວ"
	},
	lt: {
		year: "mmmm",
		month: "mm",
		day: "dd"
	},
	lv: {
		year: "gggg",
		month: "mm",
		day: "dd"
	},
	meh: {
		year: "aaaa",
		month: "mm",
		day: "dd"
	},
	ml: {
		year: "വർഷം",
		month: "മാസം",
		day: "തീയതി"
	},
	ms: {
		year: "tttt",
		month: "mm",
		day: "hh"
	},
	nb: {
		year: "åååå",
		month: "mm",
		day: "dd"
	},
	nl: {
		year: "jjjj",
		month: "mm",
		day: "dd"
	},
	nn: {
		year: "åååå",
		month: "mm",
		day: "dd"
	},
	no: {
		year: "åååå",
		month: "mm",
		day: "dd"
	},
	oc: {
		year: "aaaa",
		month: "mm",
		day: "jj"
	},
	pl: {
		year: "rrrr",
		month: "mm",
		day: "dd"
	},
	pt: {
		year: "aaaa",
		month: "mm",
		day: "dd"
	},
	rm: {
		year: "oooo",
		month: "mm",
		day: "dd"
	},
	ro: {
		year: "aaaa",
		month: "ll",
		day: "zz"
	},
	ru: {
		year: "гггг",
		month: "мм",
		day: "дд"
	},
	sc: {
		year: "aaaa",
		month: "mm",
		day: "dd"
	},
	scn: {
		year: "aaaa",
		month: "mm",
		day: "jj"
	},
	sk: {
		year: "rrrr",
		month: "mm",
		day: "dd"
	},
	sl: {
		year: "llll",
		month: "mm",
		day: "dd"
	},
	sr: {
		year: "гггг",
		month: "мм",
		day: "дд"
	},
	"sr-Latn": {
		year: "gggg",
		month: "mm",
		day: "dd"
	},
	sv: {
		year: "åååå",
		month: "mm",
		day: "dd"
	},
	szl: {
		year: "rrrr",
		month: "mm",
		day: "dd"
	},
	tg: {
		year: "сссс",
		month: "мм",
		day: "рр"
	},
	th: {
		year: "ปปปป",
		month: "ดด",
		day: "วว"
	},
	tr: {
		year: "yyyy",
		month: "aa",
		day: "gg"
	},
	uk: {
		year: "рррр",
		month: "мм",
		day: "дд"
	},
	"zh-CN": {
		year: "年",
		month: "月",
		day: "日"
	},
	"zh-TW": {
		year: "年",
		month: "月",
		day: "日"
	}
}, "en");
function Lm(e, t, n) {
	return e === "era" || e === "dayPeriod" ? t : e === "year" || e === "month" || e === "day" ? Im.getStringForLocale(e, n) : "––";
}
// node_modules/react-stately/dist/private/datepicker/IncompleteDate.mjs
var Rm = class e {
	constructor(e, t, n) {
		if (this.era = n?.era ?? null, this.calendar = e, this.year = n?.year ?? null, this.month = n?.month ?? null, this.day = n?.day ?? null, this.hour = n?.hour ?? null, this.hourCycle = t, this.dayPeriod = null, this.minute = n?.minute ?? null, this.second = n?.second ?? null, this.millisecond = n?.millisecond ?? null, this.offset = "offset" in (n ?? {}) ? n.offset : null, this.hour != null) {
			let [e, n] = Bm(this.hour, t);
			this.dayPeriod = e, this.hour = n;
		}
	}
	copy() {
		let t = new e(this.calendar, this.hourCycle);
		return t.era = this.era, t.year = this.year, t.month = this.month, t.day = this.day, t.hour = this.hour, t.dayPeriod = this.dayPeriod, t.minute = this.minute, t.second = this.second, t.millisecond = this.millisecond, t.offset = this.offset, t;
	}
	isComplete(e) {
		return e.every((e) => this[e] != null);
	}
	validate(e, t) {
		return t.every((t) => {
			if ((t === "hour" || t === "dayPeriod") && "hour" in e) {
				let [t, n] = Bm(e.hour, this.hourCycle);
				return this.dayPeriod === t && this.hour === n;
			}
			return this[t] === e[t];
		});
	}
	isCleared(e) {
		return e.every((e) => this[e] === null);
	}
	set(e, t, n) {
		let r = this.copy();
		return r[e] = t, e === "hour" && r.dayPeriod == null && "hour" in n && (r.dayPeriod = Bm(n.hour, this.hourCycle)[0]), e === "year" && r.era == null && (r.era = n.era), e !== "second" && e !== "literal" && e !== "timeZoneName" && (r.offset = null), r;
	}
	clear(e) {
		let t = this.copy();
		return t[e] = null, e === "year" && (t.era = null), t.offset = null, t;
	}
	cycle(e, t, n, r) {
		let i = this.copy();
		if (i[e] == null && e !== "dayPeriod" && e !== "era") {
			if (e === "hour" && "hour" in n) {
				let [e, t] = Bm(n.hour, this.hourCycle);
				i.dayPeriod = e, i.hour = t;
			} else i[e] = n[e];
			return e === "year" && i.era == null && (i.era = n.era), i;
		}
		switch (e) {
			case "era": {
				let e = this.calendar.getEras(), n = e.indexOf(i.era);
				n = zm(n, t, 0, e.length - 1), i.era = e[n];
				break;
			}
			case "year": {
				let r = new Lo(this.calendar, this.era ?? n.era, this.year ?? n.year, this.month ?? 1, this.day ?? 1);
				r = r.cycle(e, t, { round: e === "year" }), i.era = r.era, i.year = r.year;
				break;
			}
			case "month":
				i.month = zm(i.month ?? 1, t, 1, this.calendar.getMaximumMonthsInYear());
				break;
			case "day":
				i.day = zm(i.day ?? 1, t, 1, this.calendar.getMaximumDaysInMonth());
				break;
			case "hour": {
				let e = r.some((e) => [
					"year",
					"month",
					"day"
				].includes(e));
				if ("timeZone" in n && (!e || i.year != null && i.month != null && i.day != null)) {
					let e = this.toValue(n);
					e = e.cycle("hour", t, {
						hourCycle: this.hourCycle === "h12" ? 12 : 24,
						round: !1
					});
					let [r, a] = Bm(e.hour, this.hourCycle);
					i.hour = a, i.dayPeriod = r, i.offset = e.offset;
				} else {
					let e = i.hour ?? 0, r = this.getSegmentLimits("hour");
					i.hour = zm(e, t, r.minValue, r.maxValue), i.dayPeriod == null && "hour" in n && (i.dayPeriod = Bm(n.hour, this.hourCycle)[0]);
				}
				break;
			}
			case "dayPeriod":
				i.dayPeriod = zm(i.dayPeriod ?? 0, t, 0, 1);
				break;
			case "minute":
				i.minute = zm(i.minute ?? 0, t, 0, 59, !0);
				break;
			case "second": i.second = zm(i.second ?? 0, t, 0, 59, !0);
		}
		return i;
	}
	toValue(e) {
		if ("hour" in e) {
			let t = this.hour;
			t == null ? (this.hourCycle === "h12" || this.hourCycle === "h11") && (t = this.dayPeriod === 1 ? 12 : 0) : t = Vm(t, this.dayPeriod ?? 0, this.hourCycle);
			let n = e.set({
				era: this.era ?? e.era,
				year: this.year ?? e.year,
				month: this.month ?? e.month,
				day: this.day ?? e.day,
				hour: t ?? e.hour,
				minute: this.minute ?? e.minute,
				second: this.second ?? e.second,
				millisecond: this.millisecond ?? e.millisecond
			});
			return "offset" in n && this.offset != null && n.offset !== this.offset && (n = n.add({ milliseconds: n.offset - this.offset })), n;
		}
		return e.set({
			era: this.era ?? e.era,
			year: this.year ?? e.year,
			month: this.month ?? e.month,
			day: this.day ?? e.day
		});
	}
	getSegmentLimits(e) {
		switch (e) {
			case "era": {
				let e = this.calendar.getEras();
				return {
					value: this.era == null ? e.length - 1 : e.indexOf(this.era),
					minValue: 0,
					maxValue: e.length - 1
				};
			}
			case "year": return {
				value: this.year,
				minValue: 1,
				maxValue: 9999
			};
			case "month": return {
				value: this.month,
				minValue: 1,
				maxValue: this.calendar.getMaximumMonthsInYear()
			};
			case "day": return {
				value: this.day,
				minValue: 1,
				maxValue: this.calendar.getMaximumDaysInMonth()
			};
			case "dayPeriod": return {
				value: this.dayPeriod,
				minValue: 0,
				maxValue: 1
			};
			case "hour": {
				let e = 0, t = 23;
				return this.hourCycle === "h12" ? (e = 1, t = 12) : this.hourCycle === "h11" && (e = 0, t = 11), {
					value: this.hour,
					minValue: e,
					maxValue: t
				};
			}
			case "minute": return {
				value: this.minute,
				minValue: 0,
				maxValue: 59
			};
			case "second": return {
				value: this.second,
				minValue: 0,
				maxValue: 59
			};
		}
	}
};
function zm(e, t, n, r, i = !1) {
	if (i) {
		e += Math.sign(t), e < n && (e = r);
		let i = Math.abs(t);
		e = t > 0 ? Math.ceil(e / i) * i : Math.floor(e / i) * i, e > r && (e = n);
	} else e += t, e < n ? e = r - (n - e - 1) : e > r && (e = n + (e - r - 1));
	return e;
}
function Bm(e, t) {
	let n = +(e >= 12);
	switch (t) {
		case "h11":
			e >= 12 && (e -= 12);
			break;
		case "h12":
			e === 0 ? e = 12 : e > 12 && (e -= 12);
			break;
		case "h23":
			n = null;
			break;
		case "h24": e += 1, n = null;
	}
	return [n, e];
}
function Vm(e, t, n) {
	switch (n) {
		case "h11":
			t === 1 && (e += 12);
			break;
		case "h12":
			e === 12 && (e = 0), t === 1 && (e += 12);
			break;
		case "h24": --e;
	}
	return e;
}
// node_modules/react-stately/dist/private/datepicker/useDateFieldState.mjs
var Hm = {
	year: !0,
	month: !0,
	day: !0,
	hour: !0,
	minute: !0,
	second: !0,
	dayPeriod: !0,
	era: !0
}, Um = {
	year: 5,
	month: 2,
	day: 7,
	hour: 2,
	minute: 15,
	second: 15
}, Wm = {
	dayperiod: "dayPeriod",
	relatedYear: "year",
	yearName: "literal",
	unknown: "literal"
};
function Gm(e) {
	let { locale: t, createCalendar: n, hideTimeZone: r, isDisabled: i = !1, isReadOnly: a = !1, isRequired: o = !1, minValue: s, maxValue: c, isDateUnavailable: l } = e, u = e.value || e.defaultValue || e.placeholderValue || null, [d, f] = Fm(u, e.granularity), p = f || "UTC";
	if (u && !(d in u)) throw Error("Invalid granularity " + d + " for value " + u.toString());
	let [m, h] = (0, v.useMemo)(() => {
		let r = new Ys(t, {
			dateStyle: "short",
			timeStyle: "short",
			hour12: e.hourCycle == null ? void 0 : e.hourCycle === 12
		}).resolvedOptions();
		return [n(r.calendar), r.hourCycle];
	}, [
		t,
		e.hourCycle,
		n
	]), [g, _] = xn(e.value, e.defaultValue ?? null, e.onChange), [y] = (0, v.useState)(g), b = (0, v.useMemo)(() => Nm(g, m) ?? null, [g, m]), [x, S] = (0, v.useState)(() => new Rm(m, h, b)), C = m.identifier === "gregory" && x.era === "BC", w = (0, v.useMemo)(() => ({
		granularity: d,
		maxGranularity: e.maxGranularity ?? "year",
		timeZone: f,
		hideTimeZone: r,
		hourCycle: e.hourCycle,
		showEra: C,
		shouldForceLeadingZeros: e.shouldForceLeadingZeros
	}), [
		e.maxGranularity,
		d,
		e.hourCycle,
		e.shouldForceLeadingZeros,
		f,
		r,
		C
	]), T = (0, v.useMemo)(() => jm({}, w), [w]), E = (0, v.useMemo)(() => new Ys(t, T), [t, T]), D = (0, v.useMemo)(() => E.resolvedOptions(), [E]), O = (0, v.useMemo)(() => Pm(e.placeholderValue, d, m, f), [
		e.placeholderValue,
		d,
		m,
		f
	]), k = (0, v.useMemo)(() => {
		let t = h === "h11" || h === "h12", n = [
			"era",
			"year",
			"month",
			"day",
			"hour",
			...t ? ["dayPeriod"] : [],
			"minute",
			"second"
		], r = n.indexOf(e.maxGranularity || "era"), i = n.indexOf(d === "hour" && t ? "dayPeriod" : d);
		return n.slice(r, i + 1);
	}, [
		e.maxGranularity,
		d,
		h
	]), [ee, A] = (0, v.useState)(b), [j, te] = (0, v.useState)(m), [ne, M] = (0, v.useState)(h);
	b === ee && h === ne && da(m, j) || (x = new Rm(m, h, b), A(b), te(m), M(h), S(x));
	let N = (t) => {
		if (!(e.isDisabled || e.isReadOnly)) {
			if (t == null || t instanceof Rm && t.isCleared(k)) S(new Rm(m, h, b)), _(null);
			else if (!(t instanceof Rm)) t = Ya(t, u?.calendar || new oa()), S(new Rm(m, h, b)), _(t);
			else {
				if (t.isComplete(k)) {
					let e = t.toValue(b ?? O);
					if (t.validate(e, k)) {
						let t = Ya(e, u?.calendar || new oa());
						if (!g || t.compare(g) !== 0) {
							S(new Rm(m, h, b)), _(t);
							return;
						}
					}
				}
				S(t);
			}
		}
	}, re = (0, v.useMemo)(() => x.toValue(b ?? O).toDate(p), [
		x,
		p,
		b,
		O
	]), ie = (0, v.useMemo)(() => Km(re, x, E, D, m, t, d), [
		re,
		E,
		D,
		x,
		m,
		t,
		d
	]), ae = (e, t) => {
		N(x.cycle(e, t, O, k));
	}, oe = (0, v.useMemo)(() => Om(g, s, c, l, w), [
		g,
		s,
		c,
		l,
		w
	]), se = ll({
		...e,
		value: g,
		builtinValidation: oe
	}), ce = se.displayValidation.isInvalid, le = e.validationState || (ce ? "invalid" : null);
	return {
		...se,
		value: b,
		defaultValue: e.defaultValue ?? y,
		dateValue: re,
		calendar: m,
		setValue: N,
		segments: ie,
		dateFormatter: E,
		validationState: le,
		isInvalid: ce,
		granularity: d,
		maxGranularity: e.maxGranularity ?? "year",
		isDisabled: i,
		isReadOnly: a,
		isRequired: o,
		increment(e) {
			ae(e, 1);
		},
		decrement(e) {
			ae(e, -1);
		},
		incrementPage(e) {
			ae(e, Um[e] || 1);
		},
		decrementPage(e) {
			ae(e, -(Um[e] || 1));
		},
		incrementToMax(e) {
			let t = e === "hour" && h === "h12" ? 11 : x.getSegmentLimits(e).maxValue;
			N(x.set(e, t, O));
		},
		decrementToMin(e) {
			let t = e === "hour" && h === "h12" ? 12 : x.getSegmentLimits(e).minValue;
			N(x.set(e, t, O));
		},
		setSegment(e, t) {
			N(x.set(e, t, O));
		},
		confirmPlaceholder() {
			if (!(e.isDisabled || e.isReadOnly) && x.isComplete(k)) {
				let e = Ya(x.toValue(b ?? O), u?.calendar || new oa());
				g && e.compare(g) === 0 || _(e), S(new Rm(m, h, b));
			}
		},
		clearSegment(e) {
			let t = x;
			e !== "timeZoneName" && e !== "literal" && (t = x.clear(e)), N(t);
		},
		formatValue(e) {
			if (!b) return "";
			let n = jm(e, w);
			return new Ys(t, n).format(re);
		},
		getDateFormatter(e, t) {
			return new Ys(e, jm({}, {
				...w,
				...t
			}));
		}
	};
}
function Km(e, t, n, r, i, a, o) {
	let s = [
		"hour",
		"minute",
		"second"
	], c = n.formatToParts(e), l = new Hr(a, { useGrouping: !1 }), u = new Hr(a, {
		useGrouping: !1,
		minimumIntegerDigits: 2
	});
	for (let e of c) if (e.type === "year" || e.type === "month" || e.type === "day" || e.type === "hour") {
		let n = t[e.type] ?? 0;
		e.value = r[e.type] === "2-digit" ? u.format(n) : l.format(n);
	}
	let d = [];
	for (let e of c) {
		let n = Wm[e.type] || e.type, r = Hm[n];
		n === "era" && i.getEras().length === 1 && (r = !1);
		let c = Hm[n] && t[e.type] == null, l = Hm[n] ? Lm(n, e.value, a) : null, u = {
			type: n,
			text: c ? l : e.value,
			...t.getSegmentLimits(n),
			isPlaceholder: c,
			placeholder: l,
			isEditable: r
		};
		n === "hour" ? (d.push({
			type: "literal",
			text: "⁦",
			isPlaceholder: !1,
			placeholder: "",
			isEditable: !1
		}), d.push(u), n === o && d.push({
			type: "literal",
			text: "⁩",
			isPlaceholder: !1,
			placeholder: "",
			isEditable: !1
		})) : s.includes(n) && n === o ? (d.push(u), d.push({
			type: "literal",
			text: "⁩",
			isPlaceholder: !1,
			placeholder: "",
			isEditable: !1
		})) : d.push(u);
	}
	return d;
}
// node_modules/react-aria-components/dist/private/DateField.mjs
var qm = /*#__PURE__*/ (0, v.createContext)(null), Jm = /*#__PURE__*/ (0, v.createContext)(null), Ym = /*#__PURE__*/ (0, v.createContext)(null), Xm = /*#__PURE__*/ (0, v.forwardRef)(function(e, t) {
	[e, t] = P(e, t, qm);
	let { validationBehavior: n } = ge(hl) || {}, r = e.validationBehavior ?? n ?? "native", { locale: i } = an(), a = Gm({
		...e,
		locale: i,
		createCalendar: qs,
		validationBehavior: r
	}), o = (0, v.useRef)(null), [s, c] = F(!e["aria-label"] && !e["aria-labelledby"]), l = (0, v.useRef)(null), { labelProps: u, fieldProps: d, inputProps: f, descriptionProps: p, errorMessageProps: m, ...h } = Rp({
		..._e(e),
		label: c,
		inputRef: l,
		validationBehavior: r
	}, a, o), g = me({
		..._e(e),
		values: {
			state: a,
			isInvalid: a.isInvalid,
			isDisabled: a.isDisabled,
			isReadOnly: a.isReadOnly,
			isRequired: e.isRequired || !1
		},
		defaultClassName: "react-aria-DateField"
	}), _ = ar(e, { global: !0 });
	return delete _.id, /*#__PURE__*/ v.createElement(pe, { values: [
		[Jm, a],
		[Sl, {
			...d,
			ref: o,
			isInvalid: a.isInvalid,
			isDisabled: a.isDisabled
		}],
		[wl, {
			...f,
			ref: l
		}],
		[Lr, {
			...u,
			ref: s,
			elementType: "span"
		}],
		[_i, { slots: {
			description: p,
			errorMessage: m
		} }],
		[rl, h]
	] }, /*#__PURE__*/ v.createElement(be.div, {
		..._,
		...g,
		ref: t,
		slot: e.slot || void 0,
		"data-invalid": a.isInvalid || void 0,
		"data-disabled": a.isDisabled || void 0,
		"data-readonly": a.isReadOnly || void 0,
		"data-required": e.isRequired || void 0
	}), /*#__PURE__*/ v.createElement(Xf, {
		autoComplete: e.autoComplete,
		name: e.name,
		isDisabled: e.isDisabled,
		state: a
	}));
}), Zm = /*#__PURE__*/ (0, v.forwardRef)(function(e, t) {
	let n = (0, v.useContext)(Jm), r = (0, v.useContext)(Ym);
	return n || r ? /*#__PURE__*/ v.createElement($m, {
		...e,
		ref: t
	}) : /*#__PURE__*/ v.createElement(Qm, {
		...e,
		ref: t
	});
}), Qm = /*#__PURE__*/ (0, v.forwardRef)((e, t) => {
	let [n, r] = P({ slot: e.slot }, t, qm), { locale: i } = an(), a = Gm({
		...n,
		locale: i,
		createCalendar: qs
	}), o = (0, v.useRef)(null), { fieldProps: s, inputProps: c } = Rp({
		...n,
		inputRef: o
	}, a, r);
	return /*#__PURE__*/ v.createElement(pe, { values: [
		[Jm, a],
		[wl, {
			...c,
			ref: o
		}],
		[Sl, {
			...s,
			ref: r,
			isInvalid: a.isInvalid,
			isDisabled: a.isDisabled
		}]
	] }, /*#__PURE__*/ v.createElement($m, e));
}), $m = /*#__PURE__*/ (0, v.forwardRef)((e, t) => {
	let { className: n, children: r } = e, i = (0, v.useContext)(Jm), a = (0, v.useContext)(Ym), o = i ?? a;
	return /*#__PURE__*/ v.createElement(v.Fragment, null, /*#__PURE__*/ v.createElement(Cl, {
		...e,
		ref: t,
		slot: e.slot || void 0,
		className: n ?? "react-aria-DateInput",
		isReadOnly: o.isReadOnly,
		isInvalid: o.isInvalid,
		isDisabled: o.isDisabled
	}, o.segments.map((e, t) => /*#__PURE__*/ (0, v.cloneElement)(r(e), { key: t }))), /*#__PURE__*/ v.createElement(El, { className: "" }));
}), eh = /*#__PURE__*/ (0, v.forwardRef)(function({ segment: e, ...t }, n) {
	let r = (0, v.useContext)(Jm), i = (0, v.useContext)(Ym), a = r ?? i, o = de(n), { segmentProps: s } = Hp(e, a, o), { focusProps: c, isFocused: l, isFocusVisible: u } = Ar(), { hoverProps: d, isHovered: f } = Ir({
		...t,
		isDisabled: a.isDisabled || e.type === "literal"
	}), p = me({
		...t,
		values: {
			...e,
			isReadOnly: a.isReadOnly,
			isInvalid: a.isInvalid,
			isDisabled: a.isDisabled,
			isHovered: f,
			isFocused: l,
			isFocusVisible: u
		},
		defaultChildren: e.text,
		defaultClassName: "react-aria-DateSegment"
	});
	return /*#__PURE__*/ v.createElement(be.span, {
		...ue(ar(t, { global: !0 }), s, c, d),
		...p,
		style: s.style,
		ref: o,
		"data-placeholder": e.isPlaceholder || void 0,
		"data-invalid": a.isInvalid || void 0,
		"data-readonly": a.isReadOnly || void 0,
		"data-disabled": a.isDisabled || void 0,
		"data-type": e.type,
		"data-hovered": f || void 0,
		"data-focused": l || void 0,
		"data-focus-visible": u || void 0
	});
});
// node_modules/react-aria/dist/private/datepicker/useDatePicker.mjs
function th(e) {
	return e && e.__esModule ? e.default : e;
}
function nh(e, t, n) {
	let r = re(), i = re(), a = re(), o = yn(th(jp), "@react-aria/datepicker"), { isInvalid: s, validationErrors: c, validationDetails: l } = t.displayValidation, { labelProps: u, fieldProps: d, descriptionProps: f, errorMessageProps: p } = gl({
		...e,
		labelElementType: "span",
		isInvalid: s,
		errorMessage: e.errorMessage || c
	}), m = Mp(t, n), h = d["aria-labelledby"] || d.id, { locale: g } = an(), _ = t.formatValue(g, { month: "long" }), y = wc(_ ? o.format("selectedDateDescription", { date: _ }) : ""), b = [y["aria-describedby"], d["aria-describedby"]].filter(Boolean).join(" ") || void 0, x = ar(e), S = (0, v.useMemo)(() => Lu(n), [n]), C = (0, v.useRef)(!1), { focusWithinProps: w } = kr({
		...e,
		isDisabled: t.isOpen,
		onBlurWithin: (t) => {
			R(document.getElementById(i), t.relatedTarget) || (C.current = !1, e.onBlur?.(t), e.onFocusChange?.(!1));
		},
		onFocusWithin: (t) => {
			C.current || (C.current = !0, e.onFocus?.(t), e.onFocusChange?.(!0));
		}
	});
	return {
		groupProps: ue(x, m, d, y, w, {
			role: "group",
			"aria-disabled": e.isDisabled || null,
			"aria-labelledby": h,
			"aria-describedby": b,
			onKeyDown(n) {
				t.isOpen || e.onKeyDown && e.onKeyDown(n);
			},
			onKeyUp(n) {
				t.isOpen || e.onKeyUp && e.onKeyUp(n);
			}
		}),
		labelProps: {
			...u,
			onClick: () => {
				S.focusFirst();
			}
		},
		fieldProps: {
			...d,
			id: a,
			[Ip]: "presentation",
			"aria-describedby": b,
			value: t.value,
			defaultValue: t.defaultValue,
			onChange: t.setValue,
			placeholderValue: e.placeholderValue,
			hideTimeZone: e.hideTimeZone,
			hourCycle: e.hourCycle,
			shouldForceLeadingZeros: e.shouldForceLeadingZeros,
			granularity: e.granularity,
			isDisabled: e.isDisabled,
			isReadOnly: e.isReadOnly,
			isRequired: e.isRequired,
			validationBehavior: e.validationBehavior,
			[cl]: t,
			autoFocus: e.autoFocus,
			name: e.name,
			form: e.form
		},
		descriptionProps: f,
		errorMessageProps: p,
		buttonProps: {
			...y,
			id: r,
			"aria-haspopup": "dialog",
			"aria-label": o.format("calendar"),
			"aria-labelledby": `${r} ${h}`,
			"aria-describedby": b,
			"aria-expanded": t.isOpen,
			isDisabled: e.isDisabled || e.isReadOnly,
			onPress: () => t.setOpen(!0)
		},
		dialogProps: {
			id: i,
			"aria-labelledby": `${r} ${h}`
		},
		calendarProps: {
			autoFocus: !0,
			value: t.dateValue,
			onChange: t.setDateValue,
			minValue: e.minValue,
			maxValue: e.maxValue,
			isDisabled: e.isDisabled,
			isReadOnly: e.isReadOnly,
			isDateUnavailable: e.isDateUnavailable,
			defaultFocusedValue: t.dateValue ? void 0 : e.placeholderValue,
			isInvalid: t.isInvalid,
			errorMessage: typeof e.errorMessage == "function" ? e.errorMessage(t.displayValidation) : e.errorMessage || t.displayValidation.validationErrors.join(" "),
			firstDayOfWeek: e.firstDayOfWeek,
			pageBehavior: e.pageBehavior
		},
		isInvalid: s,
		validationErrors: c,
		validationDetails: l
	};
}
// node_modules/react-stately/dist/private/datepicker/useDatePickerState.mjs
function rh(e) {
	let t = Lf(e), [n, r] = xn(e.value, e.defaultValue || null, e.onChange), [i] = (0, v.useState)(n), a = n || e.placeholderValue || null, [o, s] = Fm(a, e.granularity), c = n == null ? null : n.toDate(s ?? "UTC"), l = o === "hour" || o === "minute" || o === "second", u = e.shouldCloseOnSelect ?? !0, [d, f] = (0, v.useState)(null), [p, m] = (0, v.useState)(null);
	if (n && (d = n, "hour" in n && (p = n)), a && !(o in a)) throw Error("Invalid granularity " + o + " for value " + a.toString());
	let h = n?.calendar.identifier === "gregory" && n.era === "BC", g = (0, v.useMemo)(() => ({
		granularity: o,
		timeZone: s,
		hideTimeZone: e.hideTimeZone,
		hourCycle: e.hourCycle,
		shouldForceLeadingZeros: e.shouldForceLeadingZeros,
		showEra: h
	}), [
		o,
		e.hourCycle,
		e.shouldForceLeadingZeros,
		s,
		e.hideTimeZone,
		h
	]), { minValue: _, maxValue: y, isDateUnavailable: b } = e, x = (0, v.useMemo)(() => Om(n, _, y, b, g), [
		n,
		_,
		y,
		b,
		g
	]), S = ll({
		...e,
		value: n,
		builtinValidation: x
	}), C = S.displayValidation.isInvalid, w = e.validationState || (C ? "invalid" : null), T = (e, t) => {
		r("timeZone" in t ? t.set(qa(e)) : Ja(e, t)), f(null), m(null), S.commitValidation();
	}, E = (n) => {
		let i = typeof u == "function" ? u() : u;
		l ? p || i ? T(n, p || Mm(e.defaultValue || e.placeholderValue)) : f(n) : (r(n), S.commitValidation()), i && t.setOpen(!1);
	}, D = (e) => {
		d && e ? T(d, e) : m(e);
	};
	return {
		...S,
		value: n,
		defaultValue: e.defaultValue ?? i,
		setValue: r,
		dateValue: d,
		timeValue: p,
		setDateValue: E,
		setTimeValue: D,
		granularity: o,
		hasTime: l,
		...t,
		setOpen(r) {
			!r && !n && d && l && T(d, p || Mm(e.defaultValue || e.placeholderValue)), t.setOpen(r);
		},
		validationState: w,
		isInvalid: C,
		formatValue(e, t) {
			return c ? new Ys(e, jm(t, g)).format(c) : "";
		},
		getDateFormatter(e, t) {
			return new Ys(e, jm({}, {
				...g,
				...t
			}));
		}
	};
}
// node_modules/react-aria-components/dist/private/DatePicker.mjs
var ih = /*#__PURE__*/ (0, v.createContext)(null), ah = /*#__PURE__*/ (0, v.createContext)(null), oh = [
	Sl,
	di,
	Lr,
	_i
], sh = /*#__PURE__*/ (0, v.forwardRef)(function(e, t) {
	[e, t] = P(e, t, ih);
	let { validationBehavior: n } = ge(hl) || {}, r = e.validationBehavior ?? n ?? "native", i = rh({
		...e,
		validationBehavior: r
	}), a = (0, v.useRef)(null), [o, s] = F(!e["aria-label"] && !e["aria-labelledby"]), { groupProps: c, labelProps: l, fieldProps: u, buttonProps: d, dialogProps: f, calendarProps: p, descriptionProps: m, errorMessageProps: h, ...g } = nh({
		..._e(e),
		label: s,
		validationBehavior: r
	}, i, a), { focusProps: _, isFocused: y, isFocusVisible: b } = Ar({ within: !0 }), x = me({
		...e,
		values: {
			state: i,
			isFocusWithin: y,
			isFocusVisible: b,
			isDisabled: e.isDisabled || !1,
			isInvalid: i.isInvalid,
			isOpen: i.isOpen,
			isReadOnly: e.isReadOnly || !1,
			isRequired: e.isRequired || !1
		},
		defaultClassName: "react-aria-DatePicker"
	}), S = ar(e, { global: !0 });
	return delete S.id, /*#__PURE__*/ v.createElement(pe, { values: [
		[ah, i],
		[Sl, {
			...c,
			ref: a,
			isInvalid: i.isInvalid
		}],
		[qm, u],
		[di, {
			...d,
			isPressed: i.isOpen
		}],
		[Lr, {
			...l,
			ref: o,
			elementType: "span"
		}],
		[Hc, p],
		[Gf, i],
		[Vf, {
			trigger: "DatePicker",
			triggerRef: a,
			placement: "bottom start",
			clearContexts: oh
		}],
		[Y, f],
		[_i, { slots: {
			description: m,
			errorMessage: h
		} }],
		[rl, g]
	] }, /*#__PURE__*/ v.createElement(be.div, {
		...ue(S, x, _),
		ref: t,
		slot: e.slot || void 0,
		"data-focus-within": y || void 0,
		"data-invalid": i.isInvalid || void 0,
		"data-focus-visible": b || void 0,
		"data-disabled": e.isDisabled || void 0,
		"data-readonly": e.isReadOnly || void 0,
		"data-required": e.isRequired || void 0,
		"data-open": i.isOpen || void 0
	}), /*#__PURE__*/ v.createElement(Xf, {
		autoComplete: e.autoComplete,
		name: e.name,
		isDisabled: e.isDisabled,
		state: i
	}));
}), ch = /* @__PURE__ */ o(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), X = (/* @__PURE__ */ o(((e, t) => {
	t.exports = ch();
})))();
function lh(e, t) {
	let { ref: n, render: r, ...i } = t, a = (0, v.useRef)(null), o = (0, v.useMemo)(() => oe(n, a), [n, a]);
	y(() => {}, [e, r]);
	let s = {
		...i,
		ref: o
	};
	return r ? r(s, void 0) : /*#__PURE__*/ (0, X.jsx)(e, { ...s });
}
var uh = {}, dh = new Proxy({}, { get(e, t) {
	if (typeof t != "string") return;
	let n = uh[t];
	return n || (n = lh.bind(null, t), uh[t] = n), n;
} }), fh = Array.isArray, ph = (e) => {
	if (!e && e !== 0 && e !== 0n) return "";
	if (typeof e == "string") return e;
	if (typeof e == "number") return e === e ? "" + e : "";
	if (typeof e == "bigint") return "" + e;
	let t = "";
	if (fh(e)) {
		let n = e.length;
		for (let r = 0; r < n; r++) {
			let n = e[r];
			if (!n && n !== 0 && n !== 0n) continue;
			let i = typeof n == "string" ? n : ph(n);
			i && (t && (t += " "), t += i);
		}
		return t;
	}
	if (typeof e == "object") for (let n in e) e[n] && (t && (t += " "), t += n);
	return t;
}, mh = /\s+/g, hh = Array.isArray, gh = (e) => typeof e != "string" || !e ? e : e.replace(mh, " ").trim(), _h = (e) => {
	let t = e.length;
	if (t === 0) return !1;
	let n = e.charCodeAt(0), r = e.charCodeAt(t - 1);
	if (n === 32 || r === 32 || n >= 9 && n <= 13 || n === 160 || r >= 9 && r <= 13 || r === 160) return !0;
	for (let n = 0; n < t; n++) {
		let r = e.charCodeAt(n);
		if (r >= 9 && r <= 13 || r === 160 || r === 32 && n + 1 < t && e.charCodeAt(n + 1) === 32) return !0;
	}
	return !1;
}, vh = (...e) => {
	let t = ph(e);
	if (t) return _h(t) ? gh(t) : t;
}, yh = (e) => e === !1 ? "false" : e === !0 ? "true" : e === 0 ? "0" : e, bh = (e) => {
	if (!e || typeof e != "object") return !0;
	for (let t in e) return !1;
	return !0;
}, xh = (e, t) => {
	if (e === t) return !0;
	if (!e || !t) return !1;
	let n = e, r = t, i = Object.keys(n), a = Object.keys(r);
	if (i.length !== a.length) return !1;
	for (let e = 0; e < i.length; e++) {
		let t = i[e];
		if (!a.includes(t) || n[t] !== r[t]) return !1;
	}
	return !0;
}, Sh = (e, t) => {
	let n = e;
	for (let e in t) if (Object.hasOwn(t, e)) {
		let r = t[e];
		n[e] = e in n ? vh(n[e], r) : r;
	}
	return e;
}, Ch = (e, t) => {
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		hh(r) ? Ch(r, t) : r && t.push(r);
	}
}, wh = (...e) => {
	let t = [];
	Ch(e, t);
	let n = [];
	for (let e = 0; e < t.length; e++) t[e] && n.push(t[e]);
	return n;
}, Th = (e, t) => {
	let n = e, r = t, i = {};
	for (let e in n) {
		let t = n[e];
		if (e in r) {
			let n = r[e];
			i[e] = hh(t) || hh(n) ? wh(n, t) : typeof t == "object" && typeof n == "object" && t && n ? Th(t, n) : n + " " + t;
		} else i[e] = t;
	}
	for (let e in r) e in n || (i[e] = r[e]);
	return i;
}, Eh = {
	twMerge: !0,
	twMergeConfig: {}
}, Dh = 256, Oh = 128, kh = /* @__PURE__ */ Symbol("tv-cache-miss"), Ah = (e) => e?.class != null && e.class !== "" || e?.className != null && e.className !== "", jh = (e) => {
	if (e === void 0) return "";
	if (e === null) return "null";
	if (typeof e == "string") return e;
	if (typeof e == "boolean") return e ? "true" : "false";
	if (typeof e == "number") return e === 0 ? "0" : String(e);
	if (typeof e == "bigint") return String(e);
	let t = yh(e), n = typeof t;
	if (n === "string" || n === "number" || n === "boolean" || n === "bigint") return String(t);
	if (n === "object") try {
		return JSON.stringify(t);
	} catch {
		return null;
	}
	return null;
}, Mh = (e, t) => {
	if (t === void 0) return e;
	if (t === null) return e + "null";
	let n = typeof t;
	if (n === "string" || n === "number" || n === "boolean" || n === "bigint") return e + String(t);
	if (Array.isArray(t)) return e + t.join("\0");
	try {
		return e + JSON.stringify(t);
	} catch {
		return e + "?";
	}
}, Nh = (e, t, n, r) => {
	let i = "", a = /* @__PURE__ */ Object.create(null);
	for (let r = 0; r < e.length; r++) {
		let o = e[r];
		a[o] = 1;
		let s = t[o];
		n && n[o] !== void 0 && (s = n[o]);
		let c = jh(s);
		if (c === null) return null;
		i += o + ":" + c + ";";
	}
	let o = [];
	for (let e in t) e === "class" || e === "className" || a[e] || (a[e] = 1, o.push(e));
	if (n) for (let e in n) e === "class" || e === "className" || a[e] || n[e] === void 0 || (a[e] = 1, o.push(e));
	o.length > 1 && o.sort();
	for (let e = 0; e < o.length; e++) {
		let r = o[e], a = t[r];
		n && n[r] !== void 0 && (a = n[r]);
		let s = jh(a);
		if (s === null) return null;
		i += r + ":" + s + ";";
	}
	return i;
}, Ph = (e, t) => {
	let n = "";
	for (let t = 0; t < e.length; t++) {
		let { conditionKeys: r, source: i } = e[t];
		for (let e = 0; e < r.length; e++) {
			let t = r[e];
			n += t + "=", n = Mh(n, i[t]), n += ",";
		}
		n += "c=", n = Mh(n, i.class), n += "|cn=", n = Mh(n, i.className), n += ";";
	}
	for (let e = 0; e < t.length; e++) {
		let { conditionKeys: r, source: i } = t[e];
		for (let e = 0; e < r.length; e++) {
			let t = r[e];
			n += t + "=", n = Mh(n, i[t]), n += ",";
		}
		Array.isArray(i.slots) && (n += "slots=" + i.slots.join(",") + ","), n += "c=", n = Mh(n, i.class), n += "|cn=", n = Mh(n, i.className), n += ";";
	}
	return n;
}, Fh = (e = Dh) => {
	let t = /* @__PURE__ */ new Map(), n = null;
	return {
		get(e) {
			if (t.has(e)) return t.get(e);
			if (n?.has(e)) {
				let r = n.get(e);
				return t.set(e, r), r;
			}
			return kh;
		},
		set(r, i) {
			t.size >= e && (n = t, t = /* @__PURE__ */ new Map()), t.set(r, i);
		}
	};
}, Ih = (e = Dh) => {
	let t = Fh(e);
	return {
		get(e) {
			return t.get(e);
		},
		set(e, n) {
			t.set(e, n);
		}
	};
}, Lh = (e = Oh) => {
	let t = /* @__PURE__ */ new Map(), n = null, r = 0;
	return {
		get(e, i) {
			let a = t.get(e);
			if (a) {
				let e = a.get(i);
				if (e !== void 0 || a.has(i)) return e;
			}
			if (n) {
				let a = n.get(e);
				if (a) {
					let n = a.get(i);
					if (n !== void 0 || a.has(i)) {
						let a = t.get(e);
						return a || (a = /* @__PURE__ */ new Map(), t.set(e, a)), a.has(i) || r++, a.set(i, n), n;
					}
				}
			}
			return kh;
		},
		set(i, a, o) {
			r >= e && (n = t, t = /* @__PURE__ */ new Map(), r = 0);
			let s = t.get(i);
			s || (s = /* @__PURE__ */ new Map(), t.set(i, s)), s.has(a) || r++, s.set(a, o);
		}
	};
}, Rh = (e, t) => {
	let n = null;
	return (r, i) => {
		if (!Ah(i)) return r;
		let a = i.class, o = i.className;
		if (a != null && a !== "" && typeof a != "string" || o != null && o !== "" && typeof o != "string") return e(t, r, a, o);
		n ??= Lh();
		let s = r ?? "", c = (typeof a == "string" ? a : "") + "\0" + (typeof o == "string" ? o : ""), l = n.get(s, c);
		if (l !== kh) return l;
		let u = e(t, r, a, o);
		return n.set(s, c, u), u;
	};
};
function zh() {
	let e = null, t = {}, n = !1;
	return {
		get cachedTwMerge() {
			return e;
		},
		set cachedTwMerge(t) {
			e = t;
		},
		get cachedTwMergeConfig() {
			return t;
		},
		set cachedTwMergeConfig(e) {
			t = e;
		},
		get didTwMergeConfigChange() {
			return n;
		},
		set didTwMergeConfigChange(e) {
			n = e;
		},
		reset() {
			e = null, t = {}, n = !1;
		}
	};
}
var Bh = zh(), Vh = (e) => {
	!bh(e.twMergeConfig) && !xh(e.twMergeConfig, Bh.cachedTwMergeConfig) && (Bh.didTwMergeConfigChange = !0, Bh.cachedTwMergeConfig = e.twMergeConfig);
}, Hh = (e, t) => {
	let n = [];
	for (let r = 0; r < t.length; r++) {
		let i = t[r], a = e[i];
		n.push({
			key: i,
			values: a,
			isEmpty: bh(a)
		});
	}
	return n;
}, Uh = (e) => {
	if (!Array.isArray(e) || e.length === 0) return [];
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let r = e[n], i = [];
		for (let e in r) e !== "class" && e !== "className" && i.push(e);
		t.push({
			conditionKeys: i,
			source: r
		});
	}
	return t;
}, Wh = (e) => {
	if (!Array.isArray(e) || e.length === 0) return [];
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let r = e[n], i = [];
		for (let e in r) e !== "slots" && e !== "class" && e !== "className" && i.push(e);
		t.push({
			conditionKeys: i,
			source: r
		});
	}
	return t;
}, Gh = (e) => {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n], i = r.source.slots;
		if (Array.isArray(i)) for (let e = 0; e < i.length; e++) {
			let n = i[e];
			t[n] || (t[n] = []), t[n].push(r);
		}
	}
	return t;
}, Kh = (e, t) => {
	let { extend: n = null, slots: r = {}, variants: i = {}, compoundVariants: a = [], compoundSlots: o = [], defaultVariants: s = {} } = e, c = {
		...Eh,
		...t
	}, l = e.slots !== void 0, u = n?.base ? vh(n.base, e?.base) : e?.base, d = n?.variants && !bh(n.variants) ? Th(i, n.variants) : i, f = n?.defaultVariants && !bh(n.defaultVariants) ? {
		...n.defaultVariants,
		...s
	} : s;
	Vh(c);
	let p = !n?.slots || bh(n.slots), m = l ? p && n?.base ? vh(e?.base, n.base) : typeof e?.base == "string" || e?.base == null ? e.base : vh(e.base) : void 0, h = l ? {
		base: m,
		...r
	} : {}, g = p ? h : Sh({ ...n?.slots }, bh(h) ? { base: e?.base } : h), _ = !n?.compoundVariants || bh(n.compoundVariants) ? a : wh(n?.compoundVariants, a), v = !n?.compoundSlots || bh(n.compoundSlots) ? o : wh(n?.compoundSlots, o), y = Object.keys(d);
	return {
		config: c,
		extend: n,
		base: u,
		variants: d,
		defaultVariants: f,
		slots: g,
		compoundVariants: _,
		compoundSlots: v,
		compiledVariants: null,
		compiledCompoundVariants: null,
		compiledCompoundSlots: null,
		compiledCompoundSlotsBySlot: null,
		deferredError: _ && !Array.isArray(_) ? /* @__PURE__ */ TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof _}`) : v && !Array.isArray(v) ? /* @__PURE__ */ TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof v}`) : null,
		mode: l || !p ? "slots" : y.length === 0 ? "plain" : "variants",
		slotKeys: null,
		variantKeys: y
	};
}, qh = (e) => (e.compiledVariants === null && (e.compiledVariants = Hh(e.variants, e.variantKeys), e.compiledCompoundVariants = Uh(e.compoundVariants), e.compiledCompoundSlots = Wh(e.compoundSlots), e.compiledCompoundSlotsBySlot = Gh(e.compiledCompoundSlots), e.slotKeys = e.slots && typeof e.slots == "object" ? Object.keys(e.slots) : []), e), Jh = [], Yh = [], Xh = [], Zh = [], Qh = [], $h = (e, t, n) => {
	let r = {};
	for (let t in e) r[t] = e[t];
	if (t) for (let e in t) t[e] !== void 0 && (r[e] = t[e]);
	if (n) for (let e in n) n[e] !== void 0 && (r[e] = n[e]);
	return r;
}, eg = (e) => e == null || e === !1, tg = (e, t) => {
	if (!Array.isArray(e)) return e === t || eg(e) && eg(t);
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		if (r === t || eg(r) && eg(t)) return !0;
	}
	return !1;
}, ng = (e, t, n, r) => {
	if (e.isEmpty) return null;
	let i = r?.[e.key] ?? n?.[e.key];
	if (i === null) return null;
	let a = yh(i);
	if (typeof a == "object") return null;
	let o = t?.[e.key], s = a ?? yh(o);
	return e.values[s || "false"];
}, rg = (e, t) => {
	let { conditionKeys: n, source: r } = e;
	for (let e = 0; e < n.length; e++) {
		let i = n[e];
		if (!tg(r[i], t[i])) return !1;
	}
	return !0;
}, ig = (e, t, n) => {
	typeof n == "string" ? t === "base" && e.push(n) : n && typeof n == "object" && n[t] && e.push(n[t]);
}, ag = (e, t, n) => {
	let r = Yh;
	r.length = 0;
	for (let i = 0; i < e.length; i++) {
		let a = ng(e[i], t, n);
		a && r.push(a);
	}
	return r;
}, og = (e, t, n, r, i) => {
	let a = Yh;
	a.length = 0;
	for (let o = 0; o < t.length; o++) {
		let s = ng(t[o], n, r, i), c = e === "base" && typeof s == "string" ? s : s && s[e];
		c && a.push(c);
	}
	return a;
}, sg = (e, t) => {
	let n = Xh;
	n.length = 0;
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		rg(i, t) && (i.source.class && n.push(i.source.class), i.source.className && n.push(i.source.className));
	}
	return n;
}, cg = (e, t, n) => {
	let r = Zh;
	r.length = 0;
	for (let i = 0; i < t.length; i++) {
		let a = t[i];
		rg(a, n) && (ig(r, e, a.source.class), ig(r, e, a.source.className));
	}
	return r;
}, lg = (e, t) => {
	let n = Qh;
	n.length = 0;
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		rg(i, t) && (i.source.class && n.push(i.source.class), i.source.className && n.push(i.source.className));
	}
	return n;
}, ug = (e, t) => {
	let { base: n, config: r } = e, i = kh, a = Rh(t, r);
	return ((e) => (i === kh && (i = t(r, n)), a(i, e)));
}, dg = (e, t) => {
	let { base: n, config: r, defaultVariants: i, deferredError: a, variantKeys: o } = e, s = e.compiledCompoundVariants, c = e.compiledVariants, l = Jh, u = null, d = Rh(t, r), f = 1, p = (e) => {
		let a = s.length > 0 ? sg(s, $h(i, e)) : void 0;
		return t(r, n, ag(c, i, e), a);
	};
	return ((t) => {
		if (a) throw a;
		(c === null || s === null) && (qh(e), c = e.compiledVariants, s = e.compiledCompoundVariants, l = e.compiledCompoundSlots ?? Jh);
		let n;
		if (f > 0) f--, n = p(t);
		else {
			u ??= Ih();
			let e = Nh(o, i, t);
			if (e !== null) {
				let r = s.length > 0 || l.length > 0 ? Ph(s, l) : "", i = e + "#" + r, a = u.get(i);
				a === kh ? (n = p(t), u.set(i, n)) : n = a;
			} else n = p(t);
		}
		return d(n, t);
	});
}, fg = (e, t) => {
	let { config: n, defaultVariants: r, deferredError: i, slots: a, variantKeys: o } = e, s = null, c = null, l = null, u = null, d = !1, f = null, p = null, m = 1, h = () => {
		if (l !== null) return;
		(e.compiledVariants === null || e.compiledCompoundVariants === null || e.compiledCompoundSlots === null || e.compiledCompoundSlotsBySlot === null || e.slotKeys === null) && qh(e);
		let i = e.compiledVariants;
		s = e.compiledCompoundVariants, c = e.compiledCompoundSlots;
		let o = e.compiledCompoundSlotsBySlot;
		l = e.slotKeys, d = s.length > 0 || c.length > 0, f = Rh(t, n);
		let p = Array(l.length);
		for (let e = 0; e < l.length; e++) {
			let c = l[e], u = o[c] ?? Jh;
			p[e] = (e, o) => {
				let l = d ? $h(r, e, o) : void 0, f = l ? cg(c, s, l) : void 0, p = l ? lg(u, l) : void 0;
				return t(n, a[c], og(c, i, r, e, o), f, p);
			};
		}
		u = p;
	}, g = (e) => {
		let t = l, n = u, r = f, i = {};
		for (let a = 0; a < t.length; a++) {
			let o = n[a], s = o(e);
			i[t[a]] = (t) => {
				if (t == null) return s;
				let n = !1;
				for (let e in t) if (e !== "class" && e !== "className" && t[e] !== void 0) {
					n = !0;
					break;
				}
				return r(n ? o(e, t) : s, t);
			};
		}
		return i;
	};
	return ((e) => {
		if (i) throw i;
		if (h(), m > 0) return m--, g(e);
		let t = Nh(o, r, e);
		if (t === null) return g(e);
		let n = d ? Ph(s, c) : "", a = t + "#" + n;
		p ??= Fh();
		let l = p.get(a);
		if (l !== kh) return l;
		let u = g(e);
		return p.set(a, u), u;
	});
}, pg = (e, t) => {
	if (e.mode === "plain") return ug(e, t);
	let n;
	return ((r) => (n ??= e.mode === "slots" ? fg(e, t) : dg(e, t), n(r)));
}, mg = (e, t) => {
	e.variantKeys = t.variantKeys, e.extend = t.extend, e.base = t.base, e.slots = t.slots, e.variants = t.variants, e.defaultVariants = t.defaultVariants, e.compoundSlots = t.compoundSlots, e.compoundVariants = t.compoundVariants;
}, hg = (e) => {
	let t = (t, n) => {
		let r = Kh(t, n), i = pg(r, e);
		return mg(i, r), i;
	};
	return {
		tv: t,
		createTV: (e) => (n, r) => t(n, r ? Th(e, r) : e)
	};
}, gg = (e, t) => {
	let n = e.length, r = t.length, i = Array(n + r);
	for (let t = 0; t < n; t++) i[t] = e[t];
	for (let e = 0; e < r; e++) i[n + e] = t[e];
	return i;
}, _g = (e, t) => ({
	classGroupId: e,
	validator: t
}), vg = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), yg = "-", bg = [], xg = "arbitrary..", Sg = (e) => {
	let t = Tg(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e[0] === "[" && e[e.length - 1] === "]") return wg(e);
			let n = e.split(yg);
			return Cg(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? gg(i, t) : t : i || bg;
			}
			return n[e] || bg;
		}
	};
}, Cg = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = Cg(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(yg) : e.slice(t).join(yg), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, wg = (e) => {
	let t = e.slice(1, -1), n = t.indexOf(":");
	if (n === -1) return;
	let r = t.slice(0, n);
	return r ? xg + r : void 0;
}, Tg = (e) => {
	let { theme: t, classGroups: n } = e;
	return Eg(n, t);
}, Eg = (e, t) => {
	let n = vg();
	for (let r in e) {
		let i = e[r];
		Dg(i, n, r, t);
	}
	return n;
}, Dg = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		Og(i, t, n, r);
	}
}, Og = (e, t, n, r) => {
	typeof e == "string" ? kg(e, t, n) : typeof e == "function" ? Ag(e, t, n, r) : jg(e, t, n, r);
}, kg = (e, t, n) => {
	let r = e === "" ? t : Mg(t, e);
	r.classGroupId = n;
}, Ag = (e, t, n, r) => {
	Ng(e) ? Dg(e(r), t, n, r) : (t.validators === null && (t.validators = []), t.validators.push(_g(n, e)));
}, jg = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		Dg(o, Mg(t, a), n, r);
	}
}, Mg = (e, t) => {
	let n = e, r = t.split(yg), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = vg(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, Ng = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Pg = "!", Fg = 58, Ig = 47, Lg = 91, Rg = 93, zg = 40, Bg = 41, Vg = 33, Hg = (e, t, n, r) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: void 0
}), Ug = (e) => {
	let t = [], n = 0, r = 0, i = 0, a, o = e.length;
	for (let s = 0; s < o; s++) {
		let o = e.charCodeAt(s);
		if (n === 0 && r === 0) {
			if (o === Fg) {
				t.push(e.slice(i, s)), i = s + 1;
				continue;
			}
			if (o === Ig) {
				a = s;
				continue;
			}
		}
		o === Lg ? n++ : o === Rg ? n-- : o === zg ? r++ : o === Bg && r--;
	}
	let s = t.length === 0 ? e : e.slice(i), c = s, l = !1, u = s.length - 1;
	s.charCodeAt(u) === Vg ? (c = s.slice(0, -1), l = !0) : s.charCodeAt(0) === Vg && (c = s.slice(1), l = !0);
	let d = a && a > i ? a - i : void 0;
	return Hg(t, l, c, d);
}, Wg = (e) => {
	let t = new Set(e.orderSensitiveModifiers);
	return (e) => {
		let n = [], r = [];
		for (let i = 0; i < e.length; i++) {
			let a = e[i], o = a[0] === "[", s = t.has(a);
			if (o || s) {
				if (r.length > 0) {
					r.sort();
					for (let e = 0; e < r.length; e++) n.push(r[e]);
					r = [];
				}
				n.push(a);
			} else r.push(a);
		}
		if (r.length > 0) {
			r.sort();
			for (let e = 0; e < r.length; e++) n.push(r[e]);
		}
		return n;
	};
}, Gg = {
	isExternal: !0,
	classId: -1,
	conflictIds: []
}, Kg = 4096, qg = 16384, Jg = (e) => {
	let t = Wg(e), n = Yg(e), { getClassGroupId: r, getConflictingClassGroupIds: i } = Sg(e), a = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null), s = 0, c = /* @__PURE__ */ new Int32Array(256), l = 0, u = /* @__PURE__ */ new Uint8Array(64), d = !1, f = (e) => {
		let t = [], n = e.length, r = -1;
		d = !1;
		for (let i = 0; i < n; i++) {
			let n = e.charCodeAt(i);
			n === 32 ? r !== -1 && (t.push(e.slice(r, i)), r = -1) : n >= 9 && n <= 13 ? (d = !0, r !== -1 && (t.push(e.slice(r, i)), r = -1)) : r === -1 && (r = i);
		}
		return r !== -1 && t.push(e.slice(r)), t;
	}, p = /* @__PURE__ */ new Map(), m = 0, h = (e) => {
		let t = p.get(e);
		if (t === void 0 && (t = m++, p.set(e, t), t >= c.length)) {
			let e = new Int32Array(c.length * 2);
			e.set(c), c = e;
		}
		return t;
	}, g = (e) => {
		let { isExternal: a, modifiers: o, hasImportantModifier: s, baseClassName: c, maybePostfixModifierPosition: l } = Ug(e);
		if (a) return Gg;
		let u = !!l, d;
		if (u) {
			let e = c.substring(0, l);
			d = r(e);
			let t = d && n[d] ? r(c) : void 0;
			t && t !== d && (d = t, u = !1);
		} else d = r(c);
		if (!d) {
			if (!u || (d = r(c), !d)) return Gg;
			u = !1;
		}
		let f = o.length === 0 ? "" : o.length === 1 ? o[0] : t(o).join(":"), p = s ? f + Pg : f, m = i(d, u), g = [];
		for (let e = 0; e < m.length; e++) g.push(h(p + m[e]));
		return {
			isExternal: !1,
			classId: h(p + d),
			conflictIds: g
		};
	}, _ = (e) => {
		let t = a[e];
		return t === void 0 && (t = o[e], t === void 0 && (t = g(e)), a[e] = t, ++s > Kg && (s = 0, o = a, a = /* @__PURE__ */ Object.create(null))), t;
	};
	return {
		parseClassName: Ug,
		sortModifiers: t,
		postfixLookupClassGroupIds: n,
		getClassGroupId: r,
		getConflictingClassGroupIds: i,
		getClassDescriptor: _,
		mergeClassList: (e) => {
			let t = f(e), n = t.length;
			if (n === 1) return t[0];
			m > qg && (p.clear(), m = 0, a = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null), s = 0), l = l + 1 | 0, l === 0 && (l = 1);
			let r = l;
			if (n > u.length) {
				let e = u.length;
				for (; e < n;) e *= 2;
				u = new Uint8Array(e);
			}
			let i = !1, h = 0;
			for (let e = n - 1; e >= 0; --e) {
				let n = t[e];
				h += n.length;
				let a = _(n);
				if (a.isExternal) {
					u[e] = 1;
					continue;
				}
				let o = a.classId;
				if (c[o] === r) {
					u[e] = 0, i = !0;
					continue;
				}
				c[o] = r;
				let s = a.conflictIds;
				for (let e = 0; e < s.length; e++) c[s[e]] = r;
				u[e] = 1;
			}
			if (!i && !d && e.length === h + n - 1) return e;
			let g = "";
			for (let e = 0; e < n; e++) u[e] === 1 && (g && (g += " "), g += t[e]);
			return g;
		}
	};
}, Yg = (e) => {
	let t = /* @__PURE__ */ Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, Xg = 500, Zg = (e) => {
	let t, n, r = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), a = 0, o = (r) => (t = Jg(e()), n = t.mergeClassList, c.mergeString = s, s(r)), s = (e) => {
		let t = r[e];
		return t === void 0 && (t = i[e], t === void 0 && (t = n(e)), r[e] = t, ++a > Xg && (a = 0, i = r, r = /* @__PURE__ */ Object.create(null))), t;
	}, c = (...e) => c.mergeString(ph(e));
	return c.mergeString = o, c;
}, Qg = [], $g = (e) => {
	let t = (t) => t[e] || Qg;
	return t.isThemeGetter = !0, t;
}, e_ = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, t_ = /^\((?:(\w[\w-]*):)?(.+)\)$/i, n_ = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, r_ = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, i_ = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, a_ = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, o_ = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, s_ = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, c_ = Number, l_ = Number.isNaN, u_ = Number.isInteger, d_ = (e) => n_.test(e), Z = (e) => !!e && !l_(c_(e)), f_ = (e) => !!e && u_(c_(e)), p_ = (e) => e.endsWith("%") && Z(e.slice(0, -1)), m_ = (e) => r_.test(e), h_ = () => !0, g_ = (e) => i_.test(e) && !a_.test(e), __ = () => !1, v_ = (e) => o_.test(e), y_ = (e) => s_.test(e), b_ = (e) => !Q(e) && !$(e), x_ = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), S_ = (e) => L_(e, V_, __), Q = (e) => e_.test(e), C_ = (e) => L_(e, H_, g_), w_ = (e) => L_(e, U_, Z), T_ = (e) => L_(e, G_, h_), E_ = (e) => L_(e, W_, __), D_ = (e) => L_(e, z_, __), O_ = (e) => L_(e, B_, y_), k_ = (e) => L_(e, K_, v_), $ = (e) => t_.test(e), A_ = (e) => R_(e, H_), j_ = (e) => R_(e, W_), M_ = (e) => R_(e, z_), N_ = (e) => R_(e, V_), P_ = (e) => R_(e, B_), F_ = (e) => R_(e, K_, !0), I_ = (e) => R_(e, G_, !0), L_ = (e, t, n) => {
	let r = e_.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, R_ = (e, t, n = !1) => {
	let r = t_.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, z_ = (e) => e === "position" || e === "percentage", B_ = (e) => e === "image" || e === "url", V_ = (e) => e === "length" || e === "size" || e === "bg-size", H_ = (e) => e === "length", U_ = (e) => e === "number", W_ = (e) => e === "family-name", G_ = (e) => e === "number" || e === "weight", K_ = (e) => e === "shadow", q_ = () => {
	let e = $g("color"), t = $g("font"), n = $g("text"), r = $g("font-weight"), i = $g("tracking"), a = $g("leading"), o = $g("breakpoint"), s = $g("container"), c = $g("spacing"), l = $g("radius"), u = $g("shadow"), d = $g("inset-shadow"), f = $g("text-shadow"), p = $g("drop-shadow"), m = $g("blur"), h = $g("perspective"), g = $g("aspect"), _ = $g("ease"), v = $g("animate"), y = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	], b = () => [
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"left-top",
		"top-right",
		"right-top",
		"bottom-right",
		"right-bottom",
		"bottom-left",
		"left-bottom"
	], x = () => [
		...b(),
		$,
		Q
	], S = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], C = () => [
		"auto",
		"contain",
		"none"
	], w = () => [
		$,
		Q,
		c
	], T = () => [
		d_,
		"full",
		"auto",
		...w()
	], E = () => [
		f_,
		"none",
		"subgrid",
		$,
		Q
	], D = () => [
		"auto",
		{ span: [
			"full",
			f_,
			$,
			Q
		] },
		f_,
		$,
		Q
	], O = () => [
		f_,
		"auto",
		$,
		Q
	], k = () => [
		"auto",
		"min",
		"max",
		"fr",
		$,
		Q
	], ee = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch",
		"baseline",
		"center-safe",
		"end-safe"
	], A = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], j = () => ["auto", ...w()], te = () => [
		d_,
		"auto",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], ne = () => [
		d_,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...w()
	], M = () => [
		d_,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], N = () => [
		e,
		$,
		Q
	], re = () => [
		...b(),
		M_,
		D_,
		{ position: [$, Q] }
	], ie = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], ae = () => [
		"auto",
		"cover",
		"contain",
		N_,
		S_,
		{ size: [$, Q] }
	], oe = () => [
		p_,
		A_,
		C_
	], se = () => [
		"",
		"none",
		"full",
		l,
		$,
		Q
	], ce = () => [
		"",
		Z,
		A_,
		C_
	], le = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], ue = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	], de = () => [
		Z,
		p_,
		M_,
		D_
	], fe = () => [
		"",
		"none",
		m,
		$,
		Q
	], pe = () => [
		"none",
		Z,
		$,
		Q
	], me = () => [
		"none",
		Z,
		$,
		Q
	], he = () => [
		Z,
		$,
		Q
	], ge = () => [
		d_,
		"full",
		...w()
	];
	return {
		theme: {
			animate: [
				"spin",
				"ping",
				"pulse",
				"bounce"
			],
			aspect: ["video"],
			blur: [m_],
			breakpoint: [m_],
			color: [h_],
			container: [m_],
			"drop-shadow": [m_],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [b_],
			"font-weight": [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black"
			],
			"inset-shadow": [m_],
			leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose"
			],
			perspective: [
				"dramatic",
				"near",
				"normal",
				"midrange",
				"distant",
				"none"
			],
			radius: [m_],
			shadow: [m_],
			spacing: ["px", Z],
			text: [m_],
			"text-shadow": [m_],
			tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest"
			]
		},
		classGroups: {
			aspect: [{ aspect: [
				"auto",
				"square",
				d_,
				Q,
				$,
				g
			] }],
			container: ["container"],
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				$,
				Q
			] }],
			"container-named": [x_],
			columns: [{ columns: [
				Z,
				Q,
				$,
				s
			] }],
			"break-after": [{ "break-after": y() }],
			"break-before": [{ "break-before": y() }],
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			box: [{ box: ["border", "content"] }],
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			sr: ["sr-only", "not-sr-only"],
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			isolation: ["isolate", "isolation-auto"],
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			"object-position": [{ object: x() }],
			overflow: [{ overflow: S() }],
			"overflow-x": [{ "overflow-x": S() }],
			"overflow-y": [{ "overflow-y": S() }],
			overscroll: [{ overscroll: C() }],
			"overscroll-x": [{ "overscroll-x": C() }],
			"overscroll-y": [{ "overscroll-y": C() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: T() }],
			"inset-x": [{ "inset-x": T() }],
			"inset-y": [{ "inset-y": T() }],
			start: [{
				"inset-s": T(),
				start: T()
			}],
			end: [{
				"inset-e": T(),
				end: T()
			}],
			"inset-bs": [{ "inset-bs": T() }],
			"inset-be": [{ "inset-be": T() }],
			top: [{ top: T() }],
			right: [{ right: T() }],
			bottom: [{ bottom: T() }],
			left: [{ left: T() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				f_,
				"auto",
				$,
				Q
			] }],
			basis: [{ basis: [
				d_,
				"full",
				"auto",
				s,
				...w()
			] }],
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			"flex-wrap": [{ flex: [
				"nowrap",
				"wrap",
				"wrap-reverse"
			] }],
			flex: [{ flex: [
				Z,
				d_,
				"auto",
				"initial",
				"none",
				Q
			] }],
			grow: [{ grow: [
				"",
				Z,
				$,
				Q
			] }],
			shrink: [{ shrink: [
				"",
				Z,
				$,
				Q
			] }],
			order: [{ order: [
				f_,
				"first",
				"last",
				"none",
				$,
				Q
			] }],
			"grid-cols": [{ "grid-cols": E() }],
			"col-start-end": [{ col: D() }],
			"col-start": [{ "col-start": O() }],
			"col-end": [{ "col-end": O() }],
			"grid-rows": [{ "grid-rows": E() }],
			"row-start-end": [{ row: D() }],
			"row-start": [{ "row-start": O() }],
			"row-end": [{ "row-end": O() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": k() }],
			"auto-rows": [{ "auto-rows": k() }],
			gap: [{ gap: w() }],
			"gap-x": [{ "gap-x": w() }],
			"gap-y": [{ "gap-y": w() }],
			"justify-content": [{ justify: [...ee(), "normal"] }],
			"justify-items": [{ "justify-items": [...A(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...A()] }],
			"align-content": [{ content: ["normal", ...ee()] }],
			"align-items": [{ items: [...A(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...A(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": ee() }],
			"place-items": [{ "place-items": [...A(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...A()] }],
			p: [{ p: w() }],
			px: [{ px: w() }],
			py: [{ py: w() }],
			ps: [{ ps: w() }],
			pe: [{ pe: w() }],
			pbs: [{ pbs: w() }],
			pbe: [{ pbe: w() }],
			pt: [{ pt: w() }],
			pr: [{ pr: w() }],
			pb: [{ pb: w() }],
			pl: [{ pl: w() }],
			m: [{ m: j() }],
			mx: [{ mx: j() }],
			my: [{ my: j() }],
			ms: [{ ms: j() }],
			me: [{ me: j() }],
			mbs: [{ mbs: j() }],
			mbe: [{ mbe: j() }],
			mt: [{ mt: j() }],
			mr: [{ mr: j() }],
			mb: [{ mb: j() }],
			ml: [{ ml: j() }],
			"space-x": [{ "space-x": w() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": w() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: te() }],
			"inline-size": [{ inline: ["auto", ...ne()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...ne()] }],
			"max-inline-size": [{ "max-inline": ["none", ...ne()] }],
			"block-size": [{ block: ["auto", ...M()] }],
			"min-block-size": [{ "min-block": ["auto", ...M()] }],
			"max-block-size": [{ "max-block": ["none", ...M()] }],
			w: [{ w: [
				s,
				"screen",
				...te()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...te()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...te()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...te()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...te()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...te()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				A_,
				C_
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				I_,
				T_
			] }],
			"font-stretch": [{ "font-stretch": [
				"ultra-condensed",
				"extra-condensed",
				"condensed",
				"semi-condensed",
				"normal",
				"semi-expanded",
				"expanded",
				"extra-expanded",
				"ultra-expanded",
				p_,
				Q
			] }],
			"font-family": [{ font: [
				j_,
				E_,
				t
			] }],
			"font-features": [{ "font-features": [Q] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				$,
				Q
			] }],
			"line-clamp": [{ "line-clamp": [
				Z,
				"none",
				$,
				w_
			] }],
			leading: [{ leading: [a, ...w()] }],
			"list-image": [{ "list-image": [
				"none",
				$,
				Q
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				$,
				Q
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: N() }],
			"text-color": [{ text: N() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...le(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				Z,
				"from-font",
				"auto",
				$,
				C_
			] }],
			"text-decoration-color": [{ decoration: N() }],
			"underline-offset": [{ "underline-offset": [
				Z,
				"auto",
				$,
				Q
			] }],
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			indent: [{ indent: w() }],
			"tab-size": [{ tab: [
				f_,
				$,
				Q
			] }],
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				$,
				Q
			] }],
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			wrap: [{ wrap: [
				"break-word",
				"anywhere",
				"normal"
			] }],
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			content: [{ content: [
				"none",
				$,
				Q
			] }],
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			"bg-position": [{ bg: re() }],
			"bg-repeat": [{ bg: ie() }],
			"bg-size": [{ bg: ae() }],
			"bg-image": [{ bg: [
				"none",
				{
					linear: [
						{ to: [
							"t",
							"tr",
							"r",
							"br",
							"b",
							"bl",
							"l",
							"tl"
						] },
						f_,
						$,
						Q
					],
					radial: [
						"",
						$,
						Q
					],
					conic: [
						f_,
						$,
						Q
					]
				},
				P_,
				O_
			] }],
			"bg-color": [{ bg: N() }],
			"gradient-from-pos": [{ from: oe() }],
			"gradient-via-pos": [{ via: oe() }],
			"gradient-to-pos": [{ to: oe() }],
			"gradient-from": [{ from: N() }],
			"gradient-via": [{ via: N() }],
			"gradient-to": [{ to: N() }],
			rounded: [{ rounded: se() }],
			"rounded-s": [{ "rounded-s": se() }],
			"rounded-e": [{ "rounded-e": se() }],
			"rounded-t": [{ "rounded-t": se() }],
			"rounded-r": [{ "rounded-r": se() }],
			"rounded-b": [{ "rounded-b": se() }],
			"rounded-l": [{ "rounded-l": se() }],
			"rounded-ss": [{ "rounded-ss": se() }],
			"rounded-se": [{ "rounded-se": se() }],
			"rounded-ee": [{ "rounded-ee": se() }],
			"rounded-es": [{ "rounded-es": se() }],
			"rounded-tl": [{ "rounded-tl": se() }],
			"rounded-tr": [{ "rounded-tr": se() }],
			"rounded-br": [{ "rounded-br": se() }],
			"rounded-bl": [{ "rounded-bl": se() }],
			"border-w": [{ border: ce() }],
			"border-w-x": [{ "border-x": ce() }],
			"border-w-y": [{ "border-y": ce() }],
			"border-w-s": [{ "border-s": ce() }],
			"border-w-e": [{ "border-e": ce() }],
			"border-w-bs": [{ "border-bs": ce() }],
			"border-w-be": [{ "border-be": ce() }],
			"border-w-t": [{ "border-t": ce() }],
			"border-w-r": [{ "border-r": ce() }],
			"border-w-b": [{ "border-b": ce() }],
			"border-w-l": [{ "border-l": ce() }],
			"divide-x": [{ "divide-x": ce() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": ce() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...le(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...le(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: N() }],
			"border-color-x": [{ "border-x": N() }],
			"border-color-y": [{ "border-y": N() }],
			"border-color-s": [{ "border-s": N() }],
			"border-color-e": [{ "border-e": N() }],
			"border-color-bs": [{ "border-bs": N() }],
			"border-color-be": [{ "border-be": N() }],
			"border-color-t": [{ "border-t": N() }],
			"border-color-r": [{ "border-r": N() }],
			"border-color-b": [{ "border-b": N() }],
			"border-color-l": [{ "border-l": N() }],
			"divide-color": [{ divide: N() }],
			"outline-style": [{ outline: [
				...le(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				Z,
				$,
				Q
			] }],
			"outline-w": [{ outline: [
				"",
				Z,
				A_,
				C_
			] }],
			"outline-color": [{ outline: N() }],
			shadow: [{ shadow: [
				"",
				"none",
				u,
				F_,
				k_
			] }],
			"shadow-color": [{ shadow: N() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				F_,
				k_
			] }],
			"inset-shadow-color": [{ "inset-shadow": N() }],
			"ring-w": [{ ring: ce() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: N() }],
			"ring-offset-w": [{ "ring-offset": [Z, C_] }],
			"ring-offset-color": [{ "ring-offset": N() }],
			"inset-ring-w": [{ "inset-ring": ce() }],
			"inset-ring-color": [{ "inset-ring": N() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				F_,
				k_
			] }],
			"text-shadow-color": [{ "text-shadow": N() }],
			opacity: [{ opacity: [
				Z,
				$,
				Q
			] }],
			"mix-blend": [{ "mix-blend": [
				...ue(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": ue() }],
			"mask-clip": [{ "mask-clip": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }, "mask-no-clip"],
			"mask-composite": [{ mask: [
				"add",
				"subtract",
				"intersect",
				"exclude"
			] }],
			"mask-image-linear-pos": [{ "mask-linear": [Z] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": de() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": de() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": N() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": N() }],
			"mask-image-t-from-pos": [{ "mask-t-from": de() }],
			"mask-image-t-to-pos": [{ "mask-t-to": de() }],
			"mask-image-t-from-color": [{ "mask-t-from": N() }],
			"mask-image-t-to-color": [{ "mask-t-to": N() }],
			"mask-image-r-from-pos": [{ "mask-r-from": de() }],
			"mask-image-r-to-pos": [{ "mask-r-to": de() }],
			"mask-image-r-from-color": [{ "mask-r-from": N() }],
			"mask-image-r-to-color": [{ "mask-r-to": N() }],
			"mask-image-b-from-pos": [{ "mask-b-from": de() }],
			"mask-image-b-to-pos": [{ "mask-b-to": de() }],
			"mask-image-b-from-color": [{ "mask-b-from": N() }],
			"mask-image-b-to-color": [{ "mask-b-to": N() }],
			"mask-image-l-from-pos": [{ "mask-l-from": de() }],
			"mask-image-l-to-pos": [{ "mask-l-to": de() }],
			"mask-image-l-from-color": [{ "mask-l-from": N() }],
			"mask-image-l-to-color": [{ "mask-l-to": N() }],
			"mask-image-x-from-pos": [{ "mask-x-from": de() }],
			"mask-image-x-to-pos": [{ "mask-x-to": de() }],
			"mask-image-x-from-color": [{ "mask-x-from": N() }],
			"mask-image-x-to-color": [{ "mask-x-to": N() }],
			"mask-image-y-from-pos": [{ "mask-y-from": de() }],
			"mask-image-y-to-pos": [{ "mask-y-to": de() }],
			"mask-image-y-from-color": [{ "mask-y-from": N() }],
			"mask-image-y-to-color": [{ "mask-y-to": N() }],
			"mask-image-radial": [{ "mask-radial": [$, Q] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": de() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": de() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": N() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": N() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [Z] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": de() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": de() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": N() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": N() }],
			"mask-mode": [{ mask: [
				"alpha",
				"luminance",
				"match"
			] }],
			"mask-origin": [{ "mask-origin": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }],
			"mask-position": [{ mask: re() }],
			"mask-repeat": [{ mask: ie() }],
			"mask-size": [{ mask: ae() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				$,
				Q
			] }],
			filter: [{ filter: [
				"",
				"none",
				$,
				Q
			] }],
			blur: [{ blur: fe() }],
			brightness: [{ brightness: [
				Z,
				$,
				Q
			] }],
			contrast: [{ contrast: [
				Z,
				$,
				Q
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				F_,
				k_
			] }],
			"drop-shadow-color": [{ "drop-shadow": N() }],
			grayscale: [{ grayscale: [
				"",
				Z,
				$,
				Q
			] }],
			"hue-rotate": [{ "hue-rotate": [
				Z,
				$,
				Q
			] }],
			invert: [{ invert: [
				"",
				Z,
				$,
				Q
			] }],
			saturate: [{ saturate: [
				Z,
				$,
				Q
			] }],
			sepia: [{ sepia: [
				"",
				Z,
				$,
				Q
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				$,
				Q
			] }],
			"backdrop-blur": [{ "backdrop-blur": fe() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				Z,
				$,
				Q
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				Z,
				$,
				Q
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				Z,
				$,
				Q
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				Z,
				$,
				Q
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				Z,
				$,
				Q
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				Z,
				$,
				Q
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				Z,
				$,
				Q
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				Z,
				$,
				Q
			] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": w() }],
			"border-spacing-x": [{ "border-spacing-x": w() }],
			"border-spacing-y": [{ "border-spacing-y": w() }],
			"table-layout": [{ table: ["auto", "fixed"] }],
			caption: [{ caption: ["top", "bottom"] }],
			transition: [{ transition: [
				"",
				"all",
				"colors",
				"opacity",
				"shadow",
				"transform",
				"none",
				$,
				Q
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				Z,
				"initial",
				$,
				Q
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				_,
				$,
				Q
			] }],
			delay: [{ delay: [
				Z,
				$,
				Q
			] }],
			animate: [{ animate: [
				"none",
				v,
				$,
				Q
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				$,
				Q
			] }],
			"perspective-origin": [{ "perspective-origin": x() }],
			rotate: [{ rotate: pe() }],
			"rotate-x": [{ "rotate-x": pe() }],
			"rotate-y": [{ "rotate-y": pe() }],
			"rotate-z": [{ "rotate-z": pe() }],
			scale: [{ scale: me() }],
			"scale-x": [{ "scale-x": me() }],
			"scale-y": [{ "scale-y": me() }],
			"scale-z": [{ "scale-z": me() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: he() }],
			"skew-x": [{ "skew-x": he() }],
			"skew-y": [{ "skew-y": he() }],
			transform: [{ transform: [
				$,
				Q,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: x() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: ge() }],
			"translate-x": [{ "translate-x": ge() }],
			"translate-y": [{ "translate-y": ge() }],
			"translate-z": [{ "translate-z": ge() }],
			"translate-none": ["translate-none"],
			zoom: [{ zoom: [
				f_,
				$,
				Q
			] }],
			accent: [{ accent: N() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: N() }],
			"color-scheme": [{ scheme: [
				"normal",
				"dark",
				"light",
				"light-dark",
				"only-dark",
				"only-light"
			] }],
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				$,
				Q
			] }],
			"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
			"pointer-events": [{ "pointer-events": ["auto", "none"] }],
			resize: [{ resize: [
				"none",
				"",
				"y",
				"x"
			] }],
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			"scrollbar-thumb-color": [{ "scrollbar-thumb": N() }],
			"scrollbar-track-color": [{ "scrollbar-track": N() }],
			"scrollbar-gutter": [{ "scrollbar-gutter": [
				"auto",
				"stable",
				"both"
			] }],
			"scrollbar-w": [{ scrollbar: [
				"auto",
				"thin",
				"none"
			] }],
			"scroll-m": [{ "scroll-m": w() }],
			"scroll-mx": [{ "scroll-mx": w() }],
			"scroll-my": [{ "scroll-my": w() }],
			"scroll-ms": [{ "scroll-ms": w() }],
			"scroll-me": [{ "scroll-me": w() }],
			"scroll-mbs": [{ "scroll-mbs": w() }],
			"scroll-mbe": [{ "scroll-mbe": w() }],
			"scroll-mt": [{ "scroll-mt": w() }],
			"scroll-mr": [{ "scroll-mr": w() }],
			"scroll-mb": [{ "scroll-mb": w() }],
			"scroll-ml": [{ "scroll-ml": w() }],
			"scroll-p": [{ "scroll-p": w() }],
			"scroll-px": [{ "scroll-px": w() }],
			"scroll-py": [{ "scroll-py": w() }],
			"scroll-ps": [{ "scroll-ps": w() }],
			"scroll-pe": [{ "scroll-pe": w() }],
			"scroll-pbs": [{ "scroll-pbs": w() }],
			"scroll-pbe": [{ "scroll-pbe": w() }],
			"scroll-pt": [{ "scroll-pt": w() }],
			"scroll-pr": [{ "scroll-pr": w() }],
			"scroll-pb": [{ "scroll-pb": w() }],
			"scroll-pl": [{ "scroll-pl": w() }],
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			"snap-stop": [{ snap: ["normal", "always"] }],
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			"touch-pz": ["touch-pinch-zoom"],
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				$,
				Q
			] }],
			fill: [{ fill: ["none", ...N()] }],
			"stroke-w": [{ stroke: [
				Z,
				A_,
				C_,
				w_
			] }],
			stroke: [{ stroke: ["none", ...N()] }],
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			"container-named": ["container-type"],
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"inset-bs",
				"inset-be",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": ["right", "left"],
			"inset-y": ["top", "bottom"],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pbs",
				"pbe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: ["pr", "pl"],
			py: ["pt", "pb"],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mbs",
				"mbe",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: ["mr", "ml"],
			my: ["mt", "mb"],
			size: ["w", "h"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-x",
				"border-w-y",
				"border-w-s",
				"border-w-e",
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": ["border-w-r", "border-w-l"],
			"border-w-y": ["border-w-t", "border-w-b"],
			"border-color": [
				"border-color-x",
				"border-color-y",
				"border-color-s",
				"border-color-e",
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": ["border-color-r", "border-color-l"],
			"border-color-y": ["border-color-t", "border-color-b"],
			translate: [
				"translate-x",
				"translate-y",
				"translate-none"
			],
			"translate-none": [
				"translate",
				"translate-x",
				"translate-y",
				"translate-z"
			],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": ["scroll-mr", "scroll-ml"],
			"scroll-my": ["scroll-mt", "scroll-mb"],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": ["scroll-pr", "scroll-pl"],
			"scroll-py": ["scroll-pt", "scroll-pb"],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
		postfixLookupClassGroups: ["container-type"],
		orderSensitiveModifiers: [
			"*",
			"**",
			"after",
			"backdrop",
			"before",
			"details-content",
			"file",
			"first-letter",
			"first-line",
			"marker",
			"placeholder",
			"selection"
		]
	};
}, J_ = (e, { extend: t = {}, override: n = {} }) => (X_(e.theme, n.theme), X_(e.classGroups, n.classGroups), X_(e.conflictingClassGroups, n.conflictingClassGroups), X_(e.conflictingClassGroupModifiers, n.conflictingClassGroupModifiers), Y_(e, "postfixLookupClassGroups", n.postfixLookupClassGroups), Y_(e, "orderSensitiveModifiers", n.orderSensitiveModifiers), Z_(e.theme, t.theme), Z_(e.classGroups, t.classGroups), Z_(e.conflictingClassGroups, t.conflictingClassGroups), Z_(e.conflictingClassGroupModifiers, t.conflictingClassGroupModifiers), Q_(e, t, "postfixLookupClassGroups"), Q_(e, t, "orderSensitiveModifiers"), e), Y_ = (e, t, n) => {
	n !== void 0 && (e[t] = n);
}, X_ = (e, t) => {
	if (t) for (let n in t) Y_(e, n, t[n]);
}, Z_ = (e, t) => {
	if (t) for (let n in t) Q_(e, t, n);
}, Q_ = (e, t, n) => {
	let r = t[n];
	r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
}, $_ = (e) => Zg(e ? typeof e == "function" ? () => e(q_()) : () => J_(q_(), e) : q_), ev = (e) => {
	if (bh(e)) return;
	let t = e, n = { ...t.extend ?? {} };
	for (let e of [
		"theme",
		"classGroups",
		"conflictingClassGroups",
		"conflictingClassGroupModifiers",
		"postfixLookupClassGroups",
		"orderSensitiveModifiers",
		"cacheSize",
		"prefix",
		"separator",
		"experimentalParseClassName"
	]) t[e] !== void 0 && n[e] === void 0 && (n[e] = t[e]);
	let r = {};
	if (Object.keys(n).length > 0 && (r.extend = n), t.override != null && !bh(t.override) && (r.override = t.override), r.extend || r.override) return r;
}, tv = (e) => {
	let t = $_(ev(e));
	return (e) => t.mergeString(e);
}, nv, rv = () => (nv ||= $_(), nv), iv = () => ((!Bh.cachedTwMerge || Bh.didTwMergeConfigChange) && (Bh.didTwMergeConfigChange = !1, Bh.cachedTwMerge = tv(Bh.cachedTwMergeConfig)), Bh.cachedTwMerge), av = (e) => {
	let t = e?.twMergeConfig;
	t && !bh(t) && (xh(t, Bh.cachedTwMergeConfig) || (Bh.cachedTwMergeConfig = t, Bh.didTwMergeConfigChange = !0));
}, ov = (e) => ph(e);
(() => {
	let e = /* @__PURE__ */ Error();
	return !("line" in e) && !("lineNumber" in e);
})();
var sv = Bh.reset.bind(Bh);
Bh.reset = () => {
	nv = void 0, sv();
};
var cv = (e, t) => {
	let n = ov(e);
	return !n || !(t?.twMerge ?? !0) ? n || void 0 : n.indexOf(" ") === -1 ? n : (av(t), (t?.twMergeConfig && !bh(t.twMergeConfig) ? iv() : rv().mergeString)(n) || void 0);
}, lv = hg((e, ...t) => cv(t, e)), uv = lv.tv;
lv.createTV;
var dv = vh, fv = uv({
	defaultVariants: {},
	slots: {
		base: "calendar",
		cell: "calendar__cell",
		cellIndicator: "calendar__cell-indicator",
		grid: "calendar__grid",
		gridBody: "calendar__grid-body",
		gridHeader: "calendar__grid-header",
		gridRow: "calendar__grid-row",
		header: "calendar__header",
		headerCell: "calendar__header-cell",
		heading: "calendar__heading",
		navButton: "calendar__nav-button",
		navButtonIcon: "calendar__nav-button-icon"
	},
	variants: {}
}), pv = uv({ slots: {
	trigger: "calendar-year-picker__trigger",
	triggerHeading: "calendar-year-picker__trigger-heading",
	triggerIndicator: "calendar-year-picker__trigger-indicator",
	yearCell: "calendar-year-picker__year-cell",
	yearGrid: "calendar-year-picker__year-grid"
} }), mv = uv({
	base: "date-field",
	defaultVariants: { fullWidth: !1 },
	variants: { fullWidth: {
		false: "",
		true: "date-field--full-width"
	} }
}), hv = uv({
	defaultVariants: {
		fullWidth: !1,
		variant: "primary"
	},
	slots: {
		base: "date-input-group",
		input: "date-input-group__input",
		inputContainer: "date-input-group__input-container",
		prefix: "date-input-group__prefix",
		segment: "date-input-group__segment",
		suffix: "date-input-group__suffix"
	},
	variants: {
		fullWidth: {
			false: {},
			true: { base: "date-input-group--full-width" }
		},
		variant: {
			primary: { base: "date-input-group--primary" },
			secondary: { base: "date-input-group--secondary" }
		}
	}
}), gv = uv({ slots: {
	base: "date-picker",
	popover: "date-picker__popover",
	trigger: "date-picker__trigger",
	triggerIndicator: "date-picker__trigger-indicator"
} }), _v = uv({
	base: "label",
	defaultVariants: {
		isDisabled: !1,
		isInvalid: !1,
		isRequired: !1
	},
	variants: {
		isDisabled: { true: "label--disabled" },
		isInvalid: { true: "label--invalid" },
		isRequired: { true: "label--required" }
	}
});
uv({
	base: "surface",
	defaultVariants: { variant: "default" },
	variants: { variant: {
		default: "surface--default",
		secondary: "surface--secondary",
		tertiary: "surface--tertiary",
		transparent: "surface--transparent"
	} }
});
var vv = (e) => e ? "true" : void 0;
// node_modules/@heroui/react/dist/utils/compose.js
function yv(e, t) {
	return he(e, (e, n) => dv(typeof t == "function" ? t(n) ?? "" : t ?? "", e ?? "") ?? "");
}
var bv = (e, t, n) => typeof e == "function" ? e({
	...n ?? {},
	className: t
}) : t;
function xv(e, t) {
	return (0, v.useMemo)(() => typeof e == "function" ? yv(e, t) : t ? e ? dv(t, e) ?? t : t : e ?? "", [e, t]);
}
// node_modules/@heroui/react/dist/components/icons.js
var Sv = (e) => /*#__PURE__*/ (0, X.jsx)("svg", {
	"aria-hidden": "true",
	fill: "none",
	height: 16,
	role: "presentation",
	viewBox: "0 0 16 16",
	width: 16,
	xmlns: "http://www.w3.org/2000/svg",
	...e,
	children: /*#__PURE__*/ (0, X.jsx)("path", {
		clipRule: "evenodd",
		d: "M10.53 2.97a.75.75 0 0 1 0 1.06L6.56 8l3.97 3.97a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 0",
		fill: "currentColor",
		fillRule: "evenodd"
	})
}), Cv = (e) => /*#__PURE__*/ (0, X.jsx)("svg", {
	"aria-hidden": "true",
	fill: "none",
	height: 16,
	role: "presentation",
	viewBox: "0 0 16 16",
	width: 16,
	xmlns: "http://www.w3.org/2000/svg",
	...e,
	children: /*#__PURE__*/ (0, X.jsx)("path", {
		clipRule: "evenodd",
		d: "M5.47 2.97a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06L9.44 8 5.47 4.03a.75.75 0 0 1 0-1.06Z",
		fill: "currentColor",
		fillRule: "evenodd"
	})
}), wv = (e) => /*#__PURE__*/ (0, X.jsx)("svg", {
	"aria-hidden": "true",
	fill: "none",
	height: "1em",
	role: "presentation",
	viewBox: "0 0 13 14",
	width: "1em",
	xmlns: "http://www.w3.org/2000/svg",
	...e,
	children: /*#__PURE__*/ (0, X.jsx)("path", {
		clipRule: "evenodd",
		d: "M3.75 4.5A.75.75 0 0 1 3 3.75v-.748a1.5 1.5 0 0 0-1.5 1.5v1h10v-1a1.5 1.5 0 0 0-1.5-1.5v.75a.75.75 0 1 1-1.5 0v-.75h-4v.747a.75.75 0 0 1-.75.75ZM8.5 1.501h-4V.75a.75.75 0 0 0-1.5 0v.752a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3v-.75a.75.75 0 0 0-1.5 0v.75Zm-7 5.5v3.5a1.5 1.5 0 0 0 1.5 1.5h7a1.5 1.5 0 0 0 1.5-1.5v-3.5h-10Z",
		fill: "currentColor",
		fillRule: "evenodd"
	})
}), Tv = /*#__PURE__*/ (0, v.createContext)({}), Ev = "[data-exiting=\"true\"]", Dv = (e) => {
	let t = getComputedStyle(e).animationDuration.split(",").map((e) => {
		let t = e.trim(), n = Number.parseFloat(t);
		return Number.isNaN(n) ? 0 : t.endsWith("ms") ? n : n * 1e3;
	});
	return Math.max(0, ...t);
}, Ov = (e) => getComputedStyle(e).animationName.split(",").some((e) => {
	let t = e.trim().replaceAll("\"", "");
	return t !== "" && t !== "none";
}), kv = (e) => [e, ...e.querySelectorAll(Ev)], Av = (e) => Math.max(0, ...kv(e).map((e) => Ov(e) ? Dv(e) : 0)), jv = (e, t) => t instanceof Element && (t === e || e.contains(t) && t.matches(Ev)), Mv = (e) => typeof e.getAnimations != "function" || typeof CSSAnimation > "u" ? [] : e.getAnimations({ subtree: !0 }).filter((t) => t instanceof CSSAnimation && jv(e, t.effect?.target) && (t.playState === "running" || String(t.playState) === "pending")), Nv = (e, { enabled: t = !0, prepare: n, ref: r } = {}) => {
	let i = (0, v.useRef)(null), a = (0, v.useRef)(/* @__PURE__ */ new Map()), [o, s] = (0, v.useState)(!1), [c, l] = (0, v.useState)(e), u = o;
	e === c ? (!t || e) && o && (s(!1), u = !1) : (l(e), u = t && e === !1, u !== o && s(u));
	let d = (0, v.useCallback)((e) => oe(i, r)(e), [r]), f = (0, v.useCallback)(() => s(!1), []);
	return (0, v.useLayoutEffect)(() => {
		if (!i.current) a.current.clear();
		else if (e) {
			for (let [e, { priority: t, value: n }] of a.current) e.style.opacity === "0" && (n ? e.style.setProperty("opacity", n, t) : e.style.removeProperty("opacity"));
			a.current.clear();
		}
	}), (0, v.useLayoutEffect)(() => {
		let e = i.current;
		if (!u || !e) return;
		n?.(e);
		let t = !1, r = () => {
			t || (t = !0, f());
		}, o = () => {
			if (!t) {
				t = !0;
				for (let t of kv(e)) a.current.set(t, {
					priority: t.style.getPropertyPriority("opacity"),
					value: t.style.opacity
				}), t.style.opacity = "0";
				(0, hr.flushSync)(f);
			}
		}, s = (e) => {
			e.length === 0 ? r() : Promise.all(e.map((e) => e.finished)).then(o, o);
		}, c = Mv(e);
		if (c.length > 0) return s(c), () => {
			t = !0;
		};
		let l = Av(e);
		if (l === 0) {
			r();
			return;
		}
		let d = (t) => {
			jv(e, t.target) && (Mv(e).length > 0 || o());
		};
		e.addEventListener("animationend", d), e.addEventListener("animationcancel", d);
		let p = window.setTimeout(o, l + 50), m = window.requestAnimationFrame(() => {
			let t = Mv(e);
			t.length !== 0 && (window.clearTimeout(p), s(t));
		});
		return () => {
			t = !0, e.removeEventListener("animationend", d), e.removeEventListener("animationcancel", d), window.clearTimeout(p), window.cancelAnimationFrame(m);
		};
	}, [
		f,
		u,
		n
	]), {
		isExiting: u,
		ref: d
	};
}, Pv = (e, t, n) => e != null || t != null || !n ? e : n.isOpen, Fv = (e, t) => {
	let n = ge(Vf, e.slot), r = (0, v.use)(Gf), i = e.shouldSkipAnimation ?? n?.shouldSkipAnimation;
	return Nv(Pv(e.isOpen ?? n?.isOpen, e.defaultOpen ?? n?.defaultOpen, r), {
		...t,
		enabled: !i
	});
};
// node_modules/@heroui/react/dist/utils/calendar.js
function Iv(e) {
	switch (e) {
		case "buddhist": return 543;
		case "ethiopic":
		case "ethioaa": return -8;
		case "coptic": return -284;
		case "hebrew": return 3760;
		case "indian": return -78;
		case "islamic-civil":
		case "islamic-tbla":
		case "islamic-umalqura": return -579;
		case "persian": return -600;
		default: return 0;
	}
}
function Lv(e, t) {
	let n = [];
	if (!e || !t) return n;
	let r = Ea(e);
	for (; r.compare(t) <= 0;) n.push(r), r = Ea(r.add({ years: 1 }));
	return n;
}
function Rv(e, t, n, r = "short", i = "UTC") {
	let a = new Intl.DateTimeFormat(t, {
		weekday: r,
		timeZone: i
	}), o = Da(e, t, n), s = [], c = o;
	for (let e = 0; e < 7; e++) {
		s.push(a.format(c.toDate(i)));
		let e = c.add({ days: 1 });
		if (W(c, e)) break;
		c = e;
	}
	for (; s.length < 7;) s.push("");
	return s;
}
function zv(e, t) {
	let n = [], r = e;
	for (let e = 0; e < 7; e++) {
		n.push(r.compare(t) > 0 ? null : r);
		let e = r.add({ days: 1 });
		if (W(r, e)) {
			for (; n.length < 7;) n.push(null);
			return n;
		}
		r = e;
	}
	return n;
}
function Bv(e, t, n, r) {
	let i = [], a = Da(e, n, r);
	for (i.push(zv(a, t)), a = a.add({ weeks: 1 }); a.compare(t) <= 0;) {
		i.push(zv(a, t));
		let e = a.add({ weeks: 1 });
		if (W(a, e)) break;
		a = e;
	}
	return i;
}
// node_modules/@heroui/react/dist/components/calendar-year-picker/use-calendar-state.js
function Vv() {
	let e = (0, v.use)(Wc), t = (0, v.use)(Gc), n = e ?? t;
	if (!n) throw Error("useCalendarOrRangeState must be used within a <Calendar> or <RangeCalendar> component.");
	return n;
}
// node_modules/@heroui/react/dist/components/calendar-year-picker/year-picker-context.js
var Hv = /*#__PURE__*/ (0, v.createContext)(null);
function Uv() {
	let e = (0, v.use)(Hv);
	if (!e) throw Error("useYearPicker must be used within a <Calendar> or <RangeCalendar> component.");
	return e;
}
// node_modules/@heroui/react/dist/components/calendar-year-picker/calendar-year-picker.js
var Wv = /*#__PURE__*/ v.createContext(null);
function Gv() {
	let e = v.use(Wv);
	if (!e) throw Error("CalendarYearPicker trigger components must be used within <CalendarYearPicker.Trigger>.");
	return e;
}
var Kv = ({ children: e, className: t, onKeyDown: n, onPress: r, ...i }) => {
	let { isYearPickerOpen: a, setIsYearPickerOpen: o } = Uv(), s = Oc({}, Vv()), c = v.useMemo(() => pv(), []), l = v.useCallback(() => {
		o(!a);
	}, [a, o]), u = (e) => {
		n?.(e), e.defaultPrevented || e.key === "Escape" && a && (e.preventDefault(), o(!1));
	}, d = v.useMemo(() => ({
		isOpen: a,
		monthYear: s,
		toggle: l
	}), [
		l,
		a,
		s
	]), f = v.useMemo(() => ({
		...d,
		slots: c
	}), [c, d]);
	return /*#__PURE__*/ (0, X.jsx)(Wv, {
		value: f,
		children: /*#__PURE__*/ (0, X.jsx)(fi, {
			"aria-expanded": a,
			"aria-label": `${s}, year selector`,
			className: xv(t, c.trigger()),
			"data-open": a || void 0,
			"data-slot": "calendar-year-picker-trigger",
			slot: null,
			onKeyDown: u,
			onPress: (e) => {
				r?.(e), l();
			},
			...i,
			children: typeof e == "function" ? e(d) : e
		})
	});
};
Kv.displayName = "HeroUI.CalendarYearPicker.Trigger";
var qv = ({ children: e, className: t, format: n, offset: r, ...i }) => {
	let { monthYear: a, slots: o, ...s } = Gv(), c = Vv(), l = Oc({
		format: n,
		offset: r
	}, c);
	return /*#__PURE__*/ (0, X.jsx)(dh.span, {
		className: bv(o.triggerHeading, t),
		"data-slot": "calendar-year-picker-trigger-heading",
		...i,
		children: typeof e == "function" ? e({
			monthYear: a,
			...s
		}) : e || l
	});
};
qv.displayName = "HeroUI.CalendarYearPicker.TriggerHeading";
var Jv = ({ children: e, className: t, ...n }) => {
	let { monthYear: r, slots: i, ...a } = Gv();
	return /*#__PURE__*/ (0, X.jsx)(dh.span, {
		"aria-hidden": "true",
		className: bv(i.triggerIndicator, t),
		"data-slot": "calendar-year-picker-trigger-indicator",
		...n,
		children: typeof e == "function" ? e({
			monthYear: r,
			...a
		}) : e || /*#__PURE__*/ (0, X.jsx)(Cv, {
			height: "1em",
			width: "1em"
		})
	});
};
Jv.displayName = "HeroUI.CalendarYearPicker.TriggerIndicator";
var Yv = /*#__PURE__*/ v.createContext(null);
function Xv() {
	let e = v.use(Yv);
	if (!e) throw Error("CalendarYearPicker components must be used within <CalendarYearPicker.Grid>.");
	return e;
}
var Zv = ({ children: e, className: t, format: n, onKeyDown: r, visibleYears: i, ...a }) => {
	let { calendarGridSlot: o, calendarRef: s, isYearPickerOpen: c, setIsYearPickerOpen: l } = Uv(), u = Vv(), d = v.useRef(null), f = v.useMemo(() => pv(), []), { "aria-label": p, items: m, onChange: h, value: g } = Dc({
		format: n,
		visibleYears: v.useMemo(() => i ?? (!u.minValue || !u.maxValue ? 20 : Lv(u.minValue, u.maxValue).length), [
			u.maxValue,
			u.minValue,
			i
		])
	}, u), _ = m.map((e) => `${e.id}:${e.date.year}`).join("|"), y = m.map((e) => e.formatted).join("|"), b = v.useMemo(() => m.map((e) => e.date.year), [_]), x = v.useMemo(() => new Map(m.map((e) => [e.date.year, e])), [_, y]), S = m[g]?.date.year ?? u.focusedDate.year, C = v.useCallback((e) => x.get(e)?.formatted ?? String(e), [x]), [w, T] = v.useState(S);
	c && b.length > 0 && !b.includes(w) && T(b[0]);
	let E = v.useRef(!1);
	v.useEffect(() => {
		let e = d.current;
		if (!e) return;
		let t = s.current?.querySelector(`[data-slot='${o}']`);
		t && (e.style.top = `${t.offsetTop}px`, e.style.height = `${t.offsetHeight}px`);
	}, [
		o,
		s,
		u.focusedDate
	]);
	let D = v.useCallback((e) => {
		let t = d.current;
		if (!t) return;
		let n = t.querySelector(`[data-year='${e}']`);
		n && n.focus();
	}, []);
	v.useEffect(() => {
		let e = c && !E.current;
		if (E.current = c, !e || b.length === 0) return;
		let [t] = b;
		if (t == null) return;
		let n = b.includes(S) ? S : t, r = requestAnimationFrame(() => {
			T(n), D(n);
		});
		return () => {
			cancelAnimationFrame(r);
		};
	}, [
		D,
		S,
		c,
		_,
		b
	]);
	let O = v.useCallback((e) => {
		let t = x.get(e);
		t != null && (l(!1), h(t.id));
	}, [
		x,
		h,
		l
	]), k = (e) => {
		if (r?.(e), e.defaultPrevented) return;
		if (e.key === "Escape" && c) {
			e.preventDefault(), l(!1);
			return;
		}
		if (!c || b.length === 0) return;
		let t = b.indexOf(w);
		if (t === -1) return;
		let n = t;
		switch (e.key) {
			case "ArrowRight":
				n = Math.min(t + 1, b.length - 1);
				break;
			case "ArrowLeft":
				n = Math.max(t - 1, 0);
				break;
			case "ArrowDown":
				n = Math.min(t + 3, b.length - 1);
				break;
			case "ArrowUp":
				n = Math.max(t - 3, 0);
				break;
			case "Home":
				n = 0;
				break;
			case "End":
				n = b.length - 1;
				break;
			default: return;
		}
		if (n !== t) {
			let t = b[n];
			if (t == null) return;
			e.preventDefault(), T(t), D(t);
		}
	}, ee = (/* @__PURE__ */ new Date()).getFullYear(), A = v.useMemo(() => ({
		activeYear: w,
		currentYear: ee,
		focusedYear: S,
		getFormattedYear: C,
		isYearPickerOpen: c,
		selectYear: O,
		setActiveYear: T,
		slots: f,
		years: b
	}), [
		w,
		ee,
		S,
		C,
		O,
		c,
		f,
		b
	]);
	return /*#__PURE__*/ (0, X.jsx)(Yv, {
		value: A,
		children: /*#__PURE__*/ (0, X.jsx)(dh.div, {
			ref: d,
			"aria-hidden": !c,
			"aria-label": p,
			className: bv(f.yearGrid, t),
			"data-open": c || void 0,
			"data-slot": "calendar-year-picker-grid",
			role: "listbox",
			tabIndex: -1,
			onKeyDown: k,
			...a,
			children: e
		})
	});
};
Zv.displayName = "HeroUI.CalendarYearPicker.Grid";
var Qv = ({ children: e }) => {
	let { currentYear: t, focusedYear: n, getFormattedYear: r, isYearPickerOpen: i, selectYear: a, years: o } = Xv();
	return /*#__PURE__*/ (0, X.jsx)(X.Fragment, { children: o.map((o) => {
		let s = o === n, c = {
			formattedYear: r(o),
			isCurrentYear: o === t,
			isOpen: i,
			isSelected: s,
			selectYear: () => a(o),
			year: o
		};
		return /*#__PURE__*/ (0, X.jsx)(v.Fragment, { children: typeof e == "function" ? e(c) : /*#__PURE__*/ (0, X.jsx)($v, { year: o }) }, o);
	}) });
};
Qv.displayName = "HeroUI.CalendarYearPicker.GridBody";
var $v = ({ children: e, className: t, excludeFromTabOrder: n, onFocus: r, onPress: i, year: a, ...o }) => {
	let { activeYear: s, currentYear: c, focusedYear: l, getFormattedYear: u, isYearPickerOpen: d, selectYear: f, setActiveYear: p, slots: m } = Xv(), h = a === l, g = a === s, _ = u(a), v = {
		formattedYear: _,
		isCurrentYear: a === c,
		isOpen: d,
		isSelected: h,
		selectYear: () => f(a),
		year: a
	};
	return /*#__PURE__*/ (0, X.jsx)(fi, {
		"aria-label": _,
		"aria-selected": h,
		className: xv(t, m.yearCell()),
		"data-selected": h || void 0,
		"data-slot": "calendar-year-picker-year-cell",
		"data-year": a,
		excludeFromTabOrder: n ?? !(d && g),
		slot: null,
		onFocus: (e) => {
			r?.(e), p(a);
		},
		onPress: (e) => {
			i?.(e), f(a);
		},
		...o,
		children: typeof e == "function" ? e(v) : e || _
	});
};
$v.displayName = "HeroUI.CalendarYearPicker.Cell";
// node_modules/@heroui/react/dist/components/calendar/calendar-day-view-grid-body.js
function ey({ children: e, className: t, "data-slot": n = "calendar-grid-body", firstDayOfWeek: r, visibleRange: i }) {
	let { locale: a } = an(), o = v.useMemo(() => Bv(i.start, i.end, a, r), [
		r,
		a,
		i.end,
		i.start
	]);
	return /*#__PURE__*/ (0, X.jsx)(dh.tbody, {
		className: t,
		"data-slot": n,
		children: o.map((t, n) => /*#__PURE__*/ (0, X.jsx)("tr", { children: t.map((t, n) => t ? /*#__PURE__*/ v.cloneElement(e(t), { key: n }) : /*#__PURE__*/ (0, X.jsx)("td", {}, n)) }, n))
	});
}
// node_modules/@heroui/react/dist/components/calendar/calendar-day-view-grid-header.js
function ty({ children: e, className: t, "data-slot": n = "calendar-grid-header", firstDayOfWeek: r, timeZone: i = "UTC", visibleRange: a, weekdayStyle: o = "short" }) {
	let { locale: s } = an(), c = v.useMemo(() => Rv(a.start, s, r, o, i), [
		r,
		s,
		i,
		a.start,
		o
	]);
	return /*#__PURE__*/ (0, X.jsx)(dh.thead, {
		"aria-hidden": !0,
		className: t,
		"data-slot": n,
		children: /*#__PURE__*/ (0, X.jsx)("tr", { children: c.map((t, n) => /*#__PURE__*/ v.cloneElement(e(t), { key: n })) })
	});
}
// node_modules/@heroui/react/dist/components/calendar/calendar.js
var ny = /*#__PURE__*/ (0, v.createContext)({}), ry = ({ children: e, dayViewBase: t, slots: n, timeZone: r, visibleRange: i }) => {
	let { end: a, start: o } = i, s = v.useMemo(() => t ? {
		...t,
		timeZone: r,
		visibleRange: {
			end: a,
			start: o
		}
	} : void 0, [
		t,
		r,
		a,
		o
	]), c = v.useMemo(() => ({
		dayView: s,
		slots: n
	}), [s, n]);
	return /*#__PURE__*/ (0, X.jsx)(ny, {
		value: c,
		children: e
	});
};
function iy({ children: e, className: t, defaultYearPickerOpen: n = !1, firstDayOfWeek: r, isYearPickerOpen: i, maxValue: a, minValue: o, onYearPickerOpenChange: s, visibleDuration: c, ...l }) {
	let u = c?.weeks != null, d = c?.days != null, f = c?.days, { locale: p } = an(), m = v.useMemo(() => fv(), []), h = v.useRef(null), [g, _] = xn(i, n, s), y = v.useMemo(() => {
		let e = new Ys(p).resolvedOptions().calendar;
		return qs(e);
	}, [p]), b = v.useMemo(() => Iv(y.identifier), [y.identifier]), x = v.useMemo(() => o ?? new Lo(y, 1900 + b, 1, 1), [
		o,
		y,
		b
	]), S = v.useMemo(() => a ?? new Lo(y, 2099 + b, 12, 31), [
		a,
		y,
		b
	]), C = v.useMemo(() => d && f != null ? {
		days: f,
		firstDayOfWeek: r
	} : void 0, [
		d,
		f,
		r
	]), w = v.useMemo(() => ({
		calendarGridSlot: "calendar-grid",
		isYearPickerOpen: g,
		setIsYearPickerOpen: _,
		calendarRef: h
	}), [g, _]);
	return /*#__PURE__*/ (0, X.jsx)(Hv, {
		value: w,
		children: /*#__PURE__*/ (0, X.jsx)(Kc, {
			ref: h,
			"data-slot": "calendar",
			firstDayOfWeek: r,
			maxValue: S,
			minValue: x,
			visibleDuration: c,
			...l,
			className: xv(t, dv(m.base(), u && "calendar--week-view", d && "calendar--day-view")),
			children: (t) => /*#__PURE__*/ (0, X.jsx)(ry, {
				dayViewBase: C,
				slots: m,
				timeZone: t.state.timeZone,
				visibleRange: t.state.visibleRange,
				children: typeof e == "function" ? e(t) : e
			})
		})
	});
}
iy.displayName = "HeroUI.Calendar";
var ay = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, v.use)(ny);
	return /*#__PURE__*/ (0, X.jsx)(dh.div, {
		className: bv(r?.header, t),
		"data-slot": "calendar-header",
		...n,
		children: e
	});
};
ay.displayName = "HeroUI.Calendar.Header";
var oy = ({ className: e, ...t }) => {
	let { slots: n } = (0, v.use)(ny);
	return /*#__PURE__*/ (0, X.jsx)(nl, {
		"data-slot": "calendar-heading",
		...t,
		className: bv(n?.heading, e)
	});
};
oy.displayName = "HeroUI.Calendar.Heading";
var sy = ({ children: e, className: t, slot: n, ...r }) => {
	let { slots: i } = (0, v.use)(ny);
	return /*#__PURE__*/ (0, X.jsx)(fi, {
		"data-slot": "calendar-nav-button",
		slot: n,
		...r,
		className: xv(t, i?.navButton()),
		children: e || (n === "previous" ? /*#__PURE__*/ (0, X.jsx)(Sv, {
			className: i?.navButtonIcon(),
			"data-slot": "calendar-nav-button-icon"
		}) : /*#__PURE__*/ (0, X.jsx)(Cv, {
			className: i?.navButtonIcon(),
			"data-slot": "calendar-nav-button-icon"
		}))
	});
};
sy.displayName = "HeroUI.Calendar.NavButton";
var cy = ({ children: e, className: t, weekdayStyle: n = "short", ...r }) => {
	let i = (0, v.use)(ny), { dayView: a, slots: o } = i, s = v.useMemo(() => ({
		...i,
		dayView: a ? {
			...a,
			weekdayStyle: n
		} : void 0
	}), [
		i,
		a,
		n
	]);
	return /*#__PURE__*/ (0, X.jsx)(ny, {
		value: s,
		children: /*#__PURE__*/ (0, X.jsx)(Jc, {
			"data-slot": "calendar-grid",
			weekdayStyle: n,
			...r,
			className: bv(o?.grid, t),
			children: e
		})
	});
};
cy.displayName = "HeroUI.Calendar.Grid";
var ly = ({ children: e, className: t, ...n }) => {
	let { dayView: r, slots: i } = (0, v.use)(ny);
	return r && r.days >= 7 && typeof e == "function" ? /*#__PURE__*/ (0, X.jsx)(ty, {
		className: bv(i?.gridHeader, t),
		"data-slot": "calendar-grid-header",
		firstDayOfWeek: r.firstDayOfWeek,
		timeZone: r.timeZone,
		visibleRange: r.visibleRange,
		weekdayStyle: r.weekdayStyle,
		children: e
	}) : /*#__PURE__*/ (0, X.jsx)(Xc, {
		"data-slot": "calendar-grid-header",
		...n,
		className: bv(i?.gridHeader, t),
		children: e
	});
};
ly.displayName = "HeroUI.Calendar.GridHeader";
var uy = ({ children: e, className: t, ...n }) => {
	let { dayView: r, slots: i } = (0, v.use)(ny);
	return r && r.days >= 7 && typeof e == "function" ? /*#__PURE__*/ (0, X.jsx)(ey, {
		className: bv(i?.gridBody, t),
		"data-slot": "calendar-grid-body",
		firstDayOfWeek: r.firstDayOfWeek,
		visibleRange: r.visibleRange,
		children: e
	}) : /*#__PURE__*/ (0, X.jsx)(el, {
		"data-slot": "calendar-grid-body",
		...n,
		className: bv(i?.gridBody, t),
		children: e
	});
};
uy.displayName = "HeroUI.Calendar.GridBody";
var dy = ({ className: e, ...t }) => {
	let { slots: n } = (0, v.use)(ny);
	return /*#__PURE__*/ (0, X.jsx)(Qc, {
		"data-slot": "calendar-header-cell",
		...t,
		className: bv(n?.headerCell, e)
	});
};
dy.displayName = "HeroUI.Calendar.HeaderCell";
var fy = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, v.use)(ny);
	return /*#__PURE__*/ (0, X.jsx)(tl, {
		"data-slot": "calendar-cell",
		...n,
		className: xv(t, r?.cell()),
		children: (t) => {
			let { formattedDate: n } = t;
			return typeof e == "function" ? e(t) : e || n;
		}
	});
};
fy.displayName = "HeroUI.Calendar.Cell";
var py = ({ className: e, ...t }) => {
	let { slots: n } = (0, v.use)(ny);
	return /*#__PURE__*/ (0, X.jsx)(dh.span, {
		"aria-hidden": "true",
		className: bv(n?.cellIndicator, e),
		"data-slot": "calendar-cell-indicator",
		...t
	});
};
py.displayName = "HeroUI.Calendar.CellIndicator";
// node_modules/@heroui/react/dist/components/calendar/index.js
var my = Object.assign(iy, {
	Root: iy,
	Header: ay,
	Heading: oy,
	NavButton: sy,
	Grid: cy,
	GridHeader: ly,
	GridBody: uy,
	HeaderCell: dy,
	Cell: fy,
	CellIndicator: py,
	YearPickerTrigger: Kv,
	YearPickerTriggerHeading: qv,
	YearPickerTriggerIndicator: Jv,
	YearPickerGrid: Zv,
	YearPickerGridBody: Qv,
	YearPickerCell: $v
}), hy = /*#__PURE__*/ (0, v.createContext)({}), gy = ({ children: e, className: t, fullWidth: n, variant: r, ...i }) => {
	let a = v.useMemo(() => hv({
		fullWidth: n,
		variant: r
	}), [n, r]), o = v.useMemo(() => ({ slots: a }), [a]);
	return /*#__PURE__*/ (0, X.jsx)(hy, {
		value: o,
		children: /*#__PURE__*/ (0, X.jsx)(Cl, {
			className: xv(t, a?.base()),
			"data-slot": "date-input-group",
			...i,
			children: e
		})
	});
};
gy.displayName = "HeroUI.DateInputGroup";
var _y = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, v.use)(hy);
	return /*#__PURE__*/ (0, X.jsx)(dh.div, {
		className: bv(r?.prefix, t),
		"data-slot": "date-input-group-prefix",
		...n,
		children: e
	});
};
_y.displayName = "HeroUI.DateInputGroup.Prefix";
var vy = ({ className: e, ...t }) => {
	let { slots: n } = (0, v.use)(hy);
	return /*#__PURE__*/ (0, X.jsx)(Zm, {
		className: xv(e, n?.input()),
		"data-slot": "date-input-group-input",
		...t
	});
};
vy.displayName = "HeroUI.DateInputGroup.Input";
var yy = ({ className: e, segment: t, ...n }) => {
	let { slots: r } = (0, v.use)(hy);
	return /*#__PURE__*/ (0, X.jsx)(eh, {
		className: bv(r?.segment, e),
		"data-slot": "date-input-group-segment",
		segment: t,
		...n
	});
};
yy.displayName = "HeroUI.DateInputGroup.Segment";
var by = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, v.use)(hy);
	return /*#__PURE__*/ (0, X.jsx)(dh.div, {
		className: bv(r?.inputContainer, t),
		"data-slot": "date-input-group-input-container",
		...n,
		children: e
	});
};
by.displayName = "HeroUI.DateInputGroup.InputContainer";
var xy = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, v.use)(hy);
	return /*#__PURE__*/ (0, X.jsx)(dh.div, {
		className: bv(r?.suffix, t),
		"data-slot": "date-input-group-suffix",
		...n,
		children: e
	});
};
xy.displayName = "HeroUI.DateInputGroup.Suffix";
// node_modules/@heroui/react/dist/components/date-field/date-field.js
function Sy({ children: e, className: t, fullWidth: n, ...r }) {
	let i = v.useMemo(() => mv({ fullWidth: n }), [n]);
	return /*#__PURE__*/ (0, X.jsx)(Xm, {
		"data-required": vv(r.isRequired),
		"data-slot": "date-field",
		...r,
		className: xv(t, i),
		children: e
	});
}
Sy.displayName = "HeroUI.DateField";
// node_modules/@heroui/react/dist/components/date-field/index.js
var Cy = Object.assign(Sy, {
	Root: Sy,
	Group: gy,
	Input: vy,
	InputContainer: by,
	Segment: yy,
	Prefix: _y,
	Suffix: xy
}), wy = /*#__PURE__*/ (0, v.createContext)({ triggerRef: { current: null } }), Ty = ({ children: e, className: t, onOpenChange: n, ...r }) => {
	let i = v.useMemo(() => gv(), []), a = (0, v.useRef)(null), [o, s] = v.useState(!1), c = (0, v.useRef)(!1);
	(0, v.useEffect)(() => {
		if (!o) return;
		let e = (e) => {
			e.metaKey || e.ctrlKey || e.altKey || (c.current = !0);
		};
		return window.addEventListener("keydown", e, !0), () => {
			window.removeEventListener("keydown", e, !0);
		};
	}, [o]);
	let l = (e) => {
		s(e), !e && c.current && window.requestAnimationFrame(() => {
			a.current?.focus();
		}), c.current = !1, n?.(e);
	}, u = v.useMemo(() => ({
		slots: i,
		triggerRef: a
	}), [i, a]);
	return /*#__PURE__*/ (0, X.jsx)(wy, {
		value: u,
		children: /*#__PURE__*/ (0, X.jsx)(sh, {
			"data-required": vv(r.isRequired),
			"data-slot": "date-picker",
			...r,
			className: xv(t, i?.base()),
			onOpenChange: l,
			children: e
		})
	});
};
Ty.displayName = "HeroUI.DatePicker";
var Ey = ({ children: e, className: t, ref: n, ...r }) => {
	let { slots: i, triggerRef: a } = (0, v.use)(wy), o = v.useCallback((e) => {
		a.current = e;
	}, [a]), s = v.useMemo(() => oe(o, n), [o, n]);
	return /*#__PURE__*/ (0, X.jsx)(fi, {
		ref: s,
		className: xv(t, i?.trigger()),
		"data-slot": "date-picker-trigger",
		...r,
		children: e
	});
};
Ey.displayName = "HeroUI.DatePicker.Trigger";
var Dy = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, v.use)(wy);
	return /*#__PURE__*/ (0, X.jsx)(dh.span, {
		"aria-hidden": "true",
		className: bv(r?.triggerIndicator, t),
		"data-slot": "date-picker-trigger-indicator",
		...n,
		children: e || /*#__PURE__*/ (0, X.jsx)(wv, {})
	});
};
Dy.displayName = "HeroUI.DatePicker.TriggerIndicator";
var Oy = ({ children: e, className: t, defaultOpen: n, isExiting: r, isOpen: i, placement: a = "bottom", ref: o, render: s, ...c }) => {
	let { slots: l } = (0, v.use)(wy), u = ge(Y), d = ge(Vf, c.slot), f = s ?? d?.render, { isExiting: p, ref: m } = Fv({
		...c,
		defaultOpen: n,
		isOpen: i
	}, { ref: o });
	return /*#__PURE__*/ (0, X.jsx)(Tv, {
		value: { variant: "default" },
		children: /*#__PURE__*/ (0, X.jsx)(Uf, {
			...c,
			ref: m,
			className: xv(t, l?.popover()),
			"data-slot": "date-picker-popover",
			defaultOpen: n,
			isExiting: p || r,
			isOpen: i,
			placement: a,
			render: (e, t) => {
				let n = e.role === "dialog" ? {
					...e,
					id: e.id ?? u?.id,
					"aria-labelledby": e["aria-labelledby"] ?? (e["aria-label"] ? void 0 : u?.["aria-labelledby"])
				} : e;
				return f ? f(n, t) : /*#__PURE__*/ (0, X.jsx)("div", { ...n });
			},
			children: e
		})
	});
};
Oy.displayName = "HeroUI.DatePicker.Popover";
// node_modules/@heroui/react/dist/components/date-picker/index.js
var ky = Object.assign(Ty, {
	Root: Ty,
	Trigger: Ey,
	TriggerIndicator: Dy,
	Popover: Oy
}), Ay = ({ children: e, className: t, isDisabled: n, isInvalid: r, isRequired: i, ...a }) => {
	let o = (0, v.useMemo)(() => _v({
		className: t,
		isDisabled: n,
		isInvalid: r,
		isRequired: i
	}), [
		t,
		n,
		r,
		i
	]);
	return /*#__PURE__*/ (0, X.jsx)(Rr, {
		className: o,
		"data-slot": "label",
		...a,
		children: e
	});
};
Ay.displayName = "HeroUI.Label";
// node_modules/@heroui/react/dist/components/label/index.js
var jy = Object.assign(Ay, { Root: Ay }), My = g();
// frontend/controls.jsx
function Ny({ element: e, label: t }) {
	let [n, r] = (0, v.useState)([]), [i, a] = (0, v.useState)([]), [o, s] = (0, v.useState)(""), c = (0, v.useRef)(null);
	(0, v.useEffect)(() => {
		let t = () => {
			r(Array.from(e.options).map((e) => ({
				id: e.value,
				label: e.textContent
			}))), a(Array.from(e.selectedOptions).map((e) => e.value));
		};
		t();
		let n = new MutationObserver(t);
		n.observe(e, { childList: !0 });
		let i = () => setTimeout(() => {
			t(), s("");
		}, 0), o = (e) => {
			c.current && !c.current.contains(e.target) && (c.current.open = !1);
		};
		return e.form?.addEventListener("reset", i), e.addEventListener("change", t), document.addEventListener("pointerdown", o), () => {
			n.disconnect(), e.form?.removeEventListener("reset", i), e.removeEventListener("change", t), document.removeEventListener("pointerdown", o);
		};
	}, [e]);
	let l = (t, n) => {
		for (let r of e.options) r.value === t && (r.selected = n);
		e.dispatchEvent(new Event("change", { bubbles: !0 }));
	}, u = () => {
		for (let t of e.options) t.selected = !1;
		e.dispatchEvent(new Event("change", { bubbles: !0 }));
	}, d = n.filter((e) => e.label.toLocaleLowerCase().includes(o.toLocaleLowerCase())), f = () => {
		let t = new Set(d.map((e) => e.id));
		for (let n of e.options) t.has(n.value) && (n.selected = !0);
		e.dispatchEvent(new Event("change", { bubbles: !0 }));
	}, p = i.map((e) => n.find((t) => t.id === e)?.label ?? e).join("、");
	return /* @__PURE__ */ (0, X.jsxs)("div", {
		className: "filter-control",
		children: [/* @__PURE__ */ (0, X.jsx)("span", {
			className: "label",
			id: `${e.id}-label`,
			children: t
		}), /* @__PURE__ */ (0, X.jsxs)("details", {
			ref: c,
			className: "multi-select",
			onKeyDown: (e) => {
				e.key === "Escape" && (c.current.open = !1, c.current.querySelector("summary").focus());
			},
			children: [/* @__PURE__ */ (0, X.jsxs)("summary", {
				"aria-labelledby": `${e.id}-label ${e.id}-value`,
				children: [/* @__PURE__ */ (0, X.jsx)("span", {
					id: `${e.id}-value`,
					className: "multi-select__value",
					title: p || void 0,
					children: i.length ? p : `全部${t === "流量期次" ? "期次" : t === "线索批次" ? "批次" : t}`
				}), /* @__PURE__ */ (0, X.jsx)("span", {
					"aria-hidden": "true",
					className: "multi-select__chevron",
					children: "⌄"
				})]
			}), /* @__PURE__ */ (0, X.jsxs)("div", {
				className: "multi-select__panel",
				children: [
					/* @__PURE__ */ (0, X.jsx)("div", {
						className: "multi-select__toolbar",
						children: /* @__PURE__ */ (0, X.jsx)("input", {
							type: "search",
							value: o,
							onChange: (e) => s(e.target.value),
							onKeyDown: (e) => {
								e.key === "Enter" && e.preventDefault();
							},
							placeholder: "搜索选项",
							"aria-label": `搜索${t}`
						})
					}),
					/* @__PURE__ */ (0, X.jsxs)("div", {
						className: "multi-select__actions",
						children: [/* @__PURE__ */ (0, X.jsx)("button", {
							type: "button",
							onClick: f,
							disabled: !d.length,
							children: o ? "全选搜索结果" : "全选"
						}), /* @__PURE__ */ (0, X.jsx)("button", {
							type: "button",
							onClick: u,
							children: "清空"
						})]
					}),
					/* @__PURE__ */ (0, X.jsx)("div", {
						className: "multi-select__options",
						children: d.length ? d.map((e) => /* @__PURE__ */ (0, X.jsxs)("label", {
							className: "multi-select__option",
							children: [/* @__PURE__ */ (0, X.jsx)("input", {
								type: "checkbox",
								checked: i.includes(e.id),
								onChange: (t) => l(e.id, t.target.checked)
							}), /* @__PURE__ */ (0, X.jsx)("span", { children: e.label })]
						}, e.id)) : /* @__PURE__ */ (0, X.jsx)("p", {
							className: "multi-select__empty",
							children: "没有匹配的选项"
						})
					})
				]
			})]
		})]
	});
}
function Py({ element: e, label: t }) {
	let [n, r] = (0, v.useState)(null);
	return (0, v.useEffect)(() => {
		let t = () => r(e.value ? Oo(e.value) : null), n = () => setTimeout(t, 0);
		return t(), e.addEventListener("change", t), e.form?.addEventListener("reset", n), () => {
			e.removeEventListener("change", t), e.form?.removeEventListener("reset", n);
		};
	}, [e]), /* @__PURE__ */ (0, X.jsxs)(ky, {
		className: "filter-control",
		value: n,
		onChange: (t) => {
			r(t), e.value = t ? t.toString() : "", e.dispatchEvent(new Event("change", { bubbles: !0 }));
		},
		children: [
			/* @__PURE__ */ (0, X.jsx)(jy, { children: t }),
			/* @__PURE__ */ (0, X.jsxs)(Cy.Group, {
				fullWidth: !0,
				children: [/* @__PURE__ */ (0, X.jsx)(Cy.Input, { children: (e) => /* @__PURE__ */ (0, X.jsx)(Cy.Segment, { segment: e }) }), /* @__PURE__ */ (0, X.jsx)(Cy.Suffix, { children: /* @__PURE__ */ (0, X.jsx)(ky.Trigger, { children: /* @__PURE__ */ (0, X.jsx)(ky.TriggerIndicator, {}) }) })]
			}),
			/* @__PURE__ */ (0, X.jsx)(ky.Popover, {
				className: "date-popover",
				children: /* @__PURE__ */ (0, X.jsxs)(my, {
					"aria-label": t,
					children: [
						/* @__PURE__ */ (0, X.jsxs)(my.Header, { children: [
							/* @__PURE__ */ (0, X.jsxs)(my.YearPickerTrigger, { children: [/* @__PURE__ */ (0, X.jsx)(my.YearPickerTriggerHeading, {}), /* @__PURE__ */ (0, X.jsx)(my.YearPickerTriggerIndicator, {})] }),
							/* @__PURE__ */ (0, X.jsx)(my.NavButton, { slot: "previous" }),
							/* @__PURE__ */ (0, X.jsx)(my.NavButton, { slot: "next" })
						] }),
						/* @__PURE__ */ (0, X.jsxs)(my.Grid, { children: [/* @__PURE__ */ (0, X.jsx)(my.GridHeader, { children: (e) => /* @__PURE__ */ (0, X.jsx)(my.HeaderCell, { children: e }) }), /* @__PURE__ */ (0, X.jsx)(my.GridBody, { children: (e) => /* @__PURE__ */ (0, X.jsx)(my.Cell, { date: e }) })] }),
						/* @__PURE__ */ (0, X.jsx)(my.YearPickerGrid, { children: /* @__PURE__ */ (0, X.jsx)(my.YearPickerGridBody, { children: ({ year: e }) => /* @__PURE__ */ (0, X.jsx)(my.YearPickerCell, { year: e }) }) })
					]
				})
			})
		]
	});
}
for (let e of document.querySelectorAll("[data-control]")) {
	let t = document.getElementById(e.dataset.control), n = t.tagName === "SELECT" ? Ny : Py;
	(0, My.createRoot)(e).render(/* @__PURE__ */ (0, X.jsx)(rn, {
		locale: "zh-CN",
		children: /* @__PURE__ */ (0, X.jsx)(n, {
			element: t,
			label: e.dataset.label
		})
	}));
}
