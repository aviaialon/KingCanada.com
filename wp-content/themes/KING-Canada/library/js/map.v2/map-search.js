Exposed_Api = {
	exposedMethods : {},
	
	expose: function(name, func) {
		Exposed_Api.exposedMethods[name] = func;
	},
	
	get: function(name) {
		return Exposed_Api.exposedMethods[name];	
	},
	
	call: function (name, args) {
		if (typeof Exposed_Api.exposedMethods[name] !== "undefined") {
			Exposed_Api.exposedMethods[name].call(null, args);
		}
		
		return false;
	}
};
var ManualFilterTrigger  = null,
	___mapTriggersLoaded = false;

(function (context) {
    var factories = {}, loaded = {};
    var isArray = Array.isArray || function (obj) {
            return obj.constructor == Array
        };
    var map = Array.map || function (arr, fn, scope) {
            for (var i = 0, len = arr.length, result = []; i < len; i++) {
                result.push(fn.call(scope, arr[i]))
            }
            return result
        };

    function define() {
        var args = Array.prototype.slice.call(arguments),
            dependencies = [],
            id, factory;
        if (typeof args[0] == "string") {
            id = args.shift()
        }
        if (isArray(args[0])) {
            dependencies = args.shift()
        }
        factory = args.shift();
        factories[id] = [dependencies, factory]
    }

    function require(id) {
        function resolve(dep) {
            var relativeParts = id.split("/"),
                depParts = dep.split("/"),
                relative = false;
            relativeParts.pop();
            while (depParts[0] == ".." && relativeParts.length) {
                relativeParts.pop();
                depParts.shift();
                relative = true
            }
            if (depParts[0] == ".") {
                depParts.shift();
                relative = true
            }
            if (relative) {
                depParts = relativeParts.concat(depParts)
            }
            return depParts.join("/")
        }
        var unresolved, factory, dependencies;
        if (typeof loaded[id] == "undefined") {
            unresolved = factories[id];
            if (unresolved) {
                dependencies = unresolved[0];
                factory = unresolved[1];
                loaded[id] = factory.apply(undefined, map(dependencies, function (id) {
                    return require(resolve(id))
                }))
            }
        }
        return loaded[id]
    }
    define("lib/utils", [], function () {
        var a = [],
            b = 100,
            c = {
                isDomObj: function (a) {
                    return !!a.nodeType || a === window
                },
                toArray: function (b, c) {
                    return a.slice.call(b, c)
                },
                merge: function () {
                    var a = arguments.length,
                        b = 0,
                        c = new Array(a + 1);
                    for (; b < a; b++) {
                        c[b + 1] = arguments[b]
                    }
                    return a === 0 ? {} : (c[0] = {}, c[c.length - 1] === !0 && (c.pop(), c.unshift(!0)), $.extend.apply(undefined, c))
                },
                push: function (a, b, c) {
                    return a && Object.keys(b || {}).forEach(function (d) {
                        if (a[d] && c) {
                            throw Error("utils.push attempted to overwrite '" + d + "' while running in protected mode")
                        }
                        typeof a[d] == "object" && typeof b[d] == "object" ? this.push(a[d], b[d]) : a[d] = b[d]
                    }, this), a
                },
                isEnumerable: function (a, b) {
                    return Object.keys(a).indexOf(b) > -1
                },
                compose: function () {
                    var a = arguments;
                    return function () {
                        var b = arguments;
                        for (var c = a.length - 1; c >= 0; c--) {
                            b = [a[c].apply(this, b)]
                        }
                        return b[0]
                    }
                },
                uniqueArray: function (a) {
                    var b = {}, c = [];
                    for (var d = 0, e = a.length; d < e;
                        ++d) {
                        if (b.hasOwnProperty(a[d])) {
                            continue
                        }
                        c.push(a[d]), b[a[d]] = 1
                    }
                    return c
                },
                debounce: function (a, c, d) {
                    typeof c != "number" && (c = b);
                    var e, f;
                    return function () {
                        var b = this,
                            g = arguments,
                            h = function () {
                                e = null, d || (f = a.apply(b, g))
                            }, i = d && !e;
                        return clearTimeout(e), e = setTimeout(h, c), i && (f = a.apply(b, g)), f
                    }
                },
                throttle: function (a, c) {
                    typeof c != "number" && (c = b);
                    var d, e, f, g, h, i, j = this.debounce(function () {
                            h = g = !1
                        }, c);
                    return function () {
                        d = this, e = arguments;
                        var b = function () {
                            f = null, h && (i = a.apply(d, e)), j()
                        };
                        return f || (f = setTimeout(b, c)), g ? h = !0 : (g = !0, i = a.apply(d, e)), j(), i
                    }
                },
                countThen: function (a, b) {
                    return function () {
                        if (!--a) {
                            return b.apply(this, arguments)
                        }
                    }
                },
                delegate: function (a) {
                    return function (b, c) {
                        var d = $(b.target),
                            e;
                        Object.keys(a).forEach(function (f) {
                            if ((e = d.closest(f)).length) {
                                return c = c || {}, c.el = e[0], a[f].apply(this, [b, c])
                            }
                        }, this)
                    }
                }
            };
        return c
    });
    define("lib/registry", ["./utils"], function (a) {
        function b(a, b) {
            var c, d, e, f = b.length;
            return typeof b[f - 1] == "function" && (f -= 1, e = b[f]), typeof b[f - 1] == "object" && (f -= 1), f == 2 ? (c = b[0], d = b[1]) : (c = a.node, d = b[0]), {
                element: c,
                type: d,
                callback: e
            }
        }

        function c(a, b) {
            return a.element == b.element && a.type == b.type && (b.callback == null || a.callback == b.callback)
        }

        function d() {
            function d(b) {
                this.component = b, this.attachedTo = [], this.instances = {}, this.addInstance = function (a) {
                    var b = new e(a);
                    return this.instances[a.identity] = b, this.attachedTo.push(a.node), b
                }, this.removeInstance = function (b) {
                    delete this.instances[b.identity];
                    var c = this.attachedTo.indexOf(b.node);
                    c > -1 && this.attachedTo.splice(c, 1), this.instances.length || a.removeComponentInfo(this)
                }, this.isAttachedTo = function (a) {
                    return this.attachedTo.indexOf(a) > -1
                }
            }

            function e(b) {
                this.instance = b, this.events = [], this.addBind = function (b) {
                    this.events.push(b), a.events.push(b)
                }, this.removeBind = function (a) {
                    for (var b = 0, d; d = this.events[b]; b++) {
                        c(d, a) && this.events.splice(b, 1)
                    }
                }
            }
            var a = this;
            (this.reset = function () {
                this.components = [], this.allInstances = {}, this.events = []
            }).call(this), this.addInstance = function (a) {
                var b = this.findComponentInfo(a);
                b || (b = new d(a.constructor), this.components.push(b));
                var c = b.addInstance(a);
                return this.allInstances[a.identity] = c, b
            }, this.removeInstance = function (a) {
                var b, c = this.findInstanceInfo(a),
                    d = this.findComponentInfo(a);
                d && d.removeInstance(a), delete this.allInstances[a.identity]
            }, this.removeComponentInfo = function (a) {
                var b = this.components.indexOf(a);
                b > -1 && this.components.splice(b, 1)
            }, this.findComponentInfo = function (a) {
                var b = a.attachTo ? a : a.constructor;
                for (var c = 0, d; d = this.components[c]; c++) {
                    if (d.component === b) {
                        return d
                    }
                }
                return null
            }, this.findInstanceInfo = function (a) {
                return this.allInstances[a.identity] || null
            }, this.findInstanceInfoByNode = function (a) {
                var b = [];
                return Object.keys(this.allInstances).forEach(function (c) {
                    var d = this.allInstances[c];
                    d.instance.node === a && b.push(d)
                }, this), b
            }, this.on = function (c) {
                var d = a.findInstanceInfo(this),
                    e, f = arguments.length,
                    g = 1,
                    h = new Array(f - 1);
                for (; g < f; g++) {
                    h[g - 1] = arguments[g]
                }
                if (d) {
                    e = c.apply(null, h), e && (h[h.length - 1] = e);
                    var i = b(this, h);
                    d.addBind(i)
                }
            }, this.off = function (c, d, e) {
                var f = b(this, arguments),
                    g = a.findInstanceInfo(this);
                g && g.removeBind(f)
            }, window.DEBUG && DEBUG.enabled && (a.trigger = new Function), this.teardown = function () {
                a.removeInstance(this)
            }, this.withRegistration = function () {
                this.before("initialize", function () {
                    a.addInstance(this)
                }), this.around("on", a.on), this.after("off", a.off), window.DEBUG && DEBUG.enabled && this.after("trigger", a.trigger), this.after("teardown", {
                    obj: a,
                    fnName: "teardown"
                })
            }
        }
        return new d
    });
    define("tools/debug/debug", ["../../lib/registry", "../../lib/utils"], function (a, b) {
        function d(a, b, c) {
            var c = c || {}, e = c.obj || window,
                g = c.path || (e == window ? "window" : ""),
                h = Object.keys(e);
            h.forEach(function (c) {
                (f[a] || a)(b, e, c) && console.log([g, ".", c].join(""), "->", ["(", typeof e[c], ")"].join(""), e[c]), Object.prototype.toString.call(e[c]) == "[object Object]" && e[c] != e && g.split(".").indexOf(c) == -1 && d(a, b, {
                    obj: e[c],
                    path: [g, c].join(".")
                })
            })
        }

        function e(a, b, c, e) {
            !b || typeof c == b ? d(a, c, e) : console.error([c, "must be", b].join(" "))
        }

        function g(a, b) {
            e("name", "string", a, b)
        }

        function h(a, b) {
            e("nameContains", "string", a, b)
        }

        function i(a, b) {
            e("type", "function", a, b)
        }

        function j(a, b) {
            e("value", null, a, b)
        }

        function k(a, b) {
            e("valueCoerced", null, a, b)
        }

        function l(a, b) {
            d(a, null, b)
        }

        function p() {
            var a = [].slice.call(arguments);
            c.eventNames.length || (c.eventNames = m), c.actions = a.length ? a : m, t()
        }

        function q() {
            var a = [].slice.call(arguments);
            c.actions.length || (c.actions = m), c.eventNames = a.length ? a : m, t()
        }

        function r() {
            c.actions = [], c.eventNames = [], t()
        }

        function s() {
            c.actions = m, c.eventNames = m, t()
        }

        function t() {
            window.localStorage && (localStorage.setItem("logFilter_eventNames", c.eventNames), localStorage.setItem("logFilter_actions", c.actions))
        }

        function u() {
            var a = {
                eventNames: window.localStorage && localStorage.getItem("logFilter_eventNames") || n,
                actions: window.localStorage && localStorage.getItem("logFilter_actions") || o
            };
            return (Object.keys(a).forEach(function (b) {
                var c = a[b];
                typeof c == "string" && c !== m && (a[b] = c.split(","))
            }), a);
        }
        var c, f = {
                name: function (a, b, c) {
                    return a == c
                },
                nameContains: function (a, b, c) {
                    return c.indexOf(a) > -1
                },
                type: function (a, b, c) {
                    return b[c] instanceof a
                },
                value: function (a, b, c) {
                    return b[c] === a
                },
                valueCoerced: function (a, b, c) {
                    return b[c] == a
                }
            }, m = "all",
            n = [],
            o = [],
            c = u();
        return {
            enable: function (a) {
                this.enabled = !! a, a && window.console && (console.info("Booting in DEBUG mode"), console.info("You can configure event logging with DEBUG.events.logAll()/logNone()/logByName()/logByAction()")), window.DEBUG = this
            },
            find: {
                byName: g,
                byNameContains: h,
                byType: i,
                byValue: j,
                byValueCoerced: k,
                custom: l
            },
            events: {
                logFilter: c,
                logByAction: p,
                logByName: q,
                logAll: s,
                logNone: r
            }
        }
    });
    define("lib/compose", ["./utils", "../tools/debug/debug"], function (a, b) {
        function f(a, b) {
            if (!c) {
                return
            }
            var e = Object.create(null);
            Object.keys(a).forEach(function (c) {
                if (d.indexOf(c) < 0) {
                    var f = Object.getOwnPropertyDescriptor(a, c);
                    f.writable = b, e[c] = f
                }
            }), Object.defineProperties(a, e)
        }

        function g(a, b, d) {
            var e;
            if (!c || !a.hasOwnProperty(b)) {
                d.call(a);
                return
            }
            e = Object.getOwnPropertyDescriptor(a, b).writable, Object.defineProperty(a, b, {
                writable: !0
            }), d.call(a), Object.defineProperty(a, b, {
                writable: e
            })
        }

        function h(a, b) {
            a.mixedIn = a.hasOwnProperty("mixedIn") ? a.mixedIn : [], b.forEach(function (b) {
                a.mixedIn.indexOf(b) == -1 && (f(a, !1), b.call(a), a.mixedIn.push(b))
            }), f(a, !0)
        }
        var c = b.enabled && !a.isEnumerable(Object, "getOwnPropertyDescriptor"),
            d = ["mixedIn"];
        if (c) {
            try {
                Object.getOwnPropertyDescriptor(Object, "keys")
            } catch (e) {
                c = !1
            }
        }
        return {
            mixin: h,
            unlockProperty: g
        }
    });
    define("lib/advice", ["./utils", "./compose"], function (a, b) {
        var c = {
            around: function (a, b) {
                return function () {
                    var d = 0,
                        e = arguments.length,
                        f = new Array(e + 1);
                    f[0] = a.bind(this);
                    for (; d < e; d++) {
                        f[d + 1] = arguments[d]
                    }
                    return b.apply(this, f)
                }
            },
            before: function (a, b) {
                var c = typeof b == "function" ? b : b.obj[b.fnName];
                return function () {
                    return c.apply(this, arguments), a.apply(this, arguments)
                }
            },
            after: function (a, b) {
                var c = typeof b == "function" ? b : b.obj[b.fnName];
                return function () {
                    var d = (a.unbound || a).apply(this, arguments);
                    return c.apply(this, arguments), d
                }
            },
            withAdvice: function () {
                ["before", "after", "around"].forEach(function (a) {
                    this[a] = function (d, e) {
                        b.unlockProperty(this, d, function () {
                            return typeof this[d] == "function" ? this[d] = c[a](this[d], e) : this[d] = e
                        })
                    }
                }, this)
            }
        };
        return c
    });
    define("lib/component", ["./advice", "./utils", "./compose", "./registry"], function (a, b, c, d) {
        function g(a) {
            a.events.slice().forEach(function (a) {
                var b = [a.type];
                a.element && b.unshift(a.element), typeof a.callback == "function" && b.push(a.callback), this.off.apply(this, b)
            }, a.instance)
        }

        function h() {
            g(d.findInstanceInfo(this))
        }

        function i() {
            var a = d.findComponentInfo(this);
            a && Object.keys(a.instances).forEach(function (b) {
                var c = a.instances[b];
                c.instance.teardown()
            })
        }

        function j(a, b) {
            try {
                window.postMessage(b, "*")
            } catch (c) {
                throw console.log("unserializable data for event", a, ":", b), new Error(["The event", a, "on component", this.toString(), "was triggered with non-serializable data"].join(" "))
            }
        }

        function k() {
            this.trigger = function () {
                var a, b, c, d, e, f = arguments.length - 1,
                    g = arguments[f];
                return typeof g != "string" && (!g || !g.defaultBehavior) && (f--, c = g), f == 1 ? (a = $(arguments[0]), d = arguments[1]) : (a = this.$node, d = arguments[0]), d.defaultBehavior && (e = d.defaultBehavior, d = $.Event(d.type)), b = d.type || d, window.DEBUG && window.DEBUG.enabled && window.postMessage && j.call(this, b, c), typeof this.attr.eventData == "object" && (c = $.extend(!0, {}, this.attr.eventData, c)), a.trigger(d || b, c), e && !d.isDefaultPrevented() && (this[e] || e).call(this), a
            }, this.on = function () {
                var a, c, d, e, f = arguments.length - 1,
                    g = arguments[f];
                typeof g == "object" ? e = b.delegate(this.resolveDelegateRules(g)) : e = g, f == 2 ? (a = $(arguments[0]), c = arguments[1]) : (a = this.$node, c = arguments[0]);
                if (typeof e != "function" && typeof e != "object") {
                    throw new Error("Unable to bind to '" + c + "' because the given callback is not a function or an object")
                }
                return d = e.bind(this), d.target = e, e.guid && (d.guid = e.guid), a.on(c, d), e.guid = d.guid, d
            }, this.off = function () {
                var a, b, c, d = arguments.length - 1;
                return typeof arguments[d] == "function" && (c = arguments[d], d -= 1), d == 1 ? (a = $(arguments[0]), b = arguments[1]) : (a = this.$node, b = arguments[0]), a.off(b, c)
            }, this.resolveDelegateRules = function (a) {
                var b = {};
                return Object.keys(a).forEach(function (c) {
                    if (!c in this.attr) {
                        throw new Error('Component "' + this.toString() + '" wants to listen on "' + c + '" but no such attribute was defined.')
                    }
                    b[this.attr[c]] = a[c]
                }, this), b
            }, this.defaultAttrs = function (a) {
                b.push(this.defaults, a, !0) || (this.defaults = a)
            }, this.select = function (a) {
                return this.$node.find(this.attr[a])
            }, this.initialize = $.noop, this.teardown = h
        }

        function l(a) {
            var c = arguments.length,
                e = new Array(c - 1);
            for (var f = 1; f < c; f++) {
                e[f - 1] = arguments[f]
            }
            if (!a) {
                throw new Error("Component needs to be attachTo'd a jQuery object, native node or selector string")
            }
            var g = b.merge.apply(b, e);
            $(a).each(function (a, b) {
                var c = b.jQuery ? b[0] : b,
                    e = d.findComponentInfo(this);
                if (e && e.isAttachedTo(c)) {
                    return
                }
                new this(b, g)
            }.bind(this))
        }

        function m() {
            function j(a, b) {
                b = b || {}, this.identity = f++;
                if (!a) {
                    throw new Error("Component needs a node")
                }
                a.jquery ? (this.node = a[0], this.$node = a) : (this.node = a, this.$node = $(a)), this.toString = j.toString, window.DEBUG && window.DEBUG.enabled && (this.describe = this.toString());
                var c = Object.create(b);
                for (var d in this.defaults) {
                    b.hasOwnProperty(d) || (c[d] = this.defaults[d])
                }
                this.attr = c, Object.keys(this.defaults || {}).forEach(function (a) {
                    if (this.defaults[a] === null && this.attr[a] === null) {
                        throw new Error('Required attribute "' + a + '" not specified in attachTo for component "' + this.toString() + '".')
                    }
                }, this), this.initialize.call(this, b)
            }
            var b = arguments.length,
                g = new Array(b);
            for (var h = 0; h < b; h++) {
                g[h] = arguments[h]
            }
            return j.toString = function () {
                var a = g.map(function (a) {
                    if (a.name == null) {
                        var b = a.toString().match(e);
                        return b && b[1] ? b[1] : ""
                    }
                    return a.name != "withBaseComponent" ? a.name : ""
                }).filter(Boolean).join(", ");
                return a
            }, window.DEBUG && window.DEBUG.enabled && (j.describe = j.toString()), j.attachTo = l, j.teardownAll = i, g.unshift(k, a.withAdvice, d.withRegistration), c.mixin(j.prototype, g), j
        }
        var e = /function (.*?)\s?\(/,
            f = 0;
        return m.teardownAll = function () {
            d.components.slice().forEach(function (a) {
                a.component.teardownAll()
            }), d.reset()
        }, m
    });
    define("lib/logger", ["./compose", "./utils"], function (a, b) {
        function d(a) {
            var b = a.tagName ? a.tagName.toLowerCase() : a.toString(),
                c = a.className ? "." + a.className : "",
                d = b + c;
            return a.tagName ? ["'", "'"].join(d) : d
        }

        function e(a, b, e) {
            var f, g, h, i, j, k, l, m;
            typeof e[e.length - 1] == "function" && (h = e.pop(), h = h.unbound || h), typeof e[e.length - 1] == "object" && e.pop(), e.length == 2 ? (g = e[0], f = e[1]) : (g = b.$node[0], f = e[0]), window.DEBUG && window.DEBUG.enabled && (j = DEBUG.events.logFilter, l = j.actions == "all" || j.actions.indexOf(a) > -1, k = function (a) {
                return a.test ? a : new RegExp("^" + a.replace(/\*/g, ".*") + "$")
            }, m = j.eventNames == "all" || j.eventNames.some(function (a) {
                return k(a).test(f)
            }), l && m && console.info(c[a], a, "[" + f + "]", d(g), b.constructor.toString(), h && (i = h.name || h.displayName) && "->  " + i))
        }

        function f() {
            this.before("trigger", function () {
                e("trigger", this, b.toArray(arguments))
            }), this.before("on", function () {
                e("on", this, b.toArray(arguments))
            }), this.before("off", function (a) {
                e("off", this, b.toArray(arguments))
            })
        }
        var c = {
            on: "<-",
            trigger: "->",
            off: "x "
        };
        return f
    });
    define("lib/index", ["./advice", "./component", "./compose", "./logger", "./registry", "./utils"], function (a, b, c, d, e, f) {
        return {
            advice: a,
            component: b,
            compose: c,
            logger: d,
            registry: e,
            utils: f
        }
    });
    context.flight = require("lib/index")
})(this);

eval(function (p, a, c, k, e, r) {
    e = function (c) {
        return (c < a ? "" : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!"".replace(/^/, String)) {
        while (c--) {
            r[e(c)] = k[c] || e(c)
        }
        k = [
            function (e) {
                return r[e]
            }
        ];
        e = function () {
            return "\\w+"
        };
        c = 1
    }
    while (c--) {
        if (k[c]) {
            p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c])
        }
    }
    return p
}('6 8(a){a=a||{};r.s.1P.2j(2,36);2.M=a.1y||"";2.1z=a.1q||J;2.U=a.1H||0;2.G=a.1B||1g r.s.1Y(0,0);2.E=a.Y||1g r.s.2B(0,0);2.X=a.V||t;2.1p=a.1s||"2g";2.1m=a.F||{};2.1G=a.1E||"39";2.N=a.1j||"34://31.r.2W/2Q/2O/2K/1u.2I";3(a.1j===""){2.N=""}2.19=a.1A||1g r.s.1Y(1,1);3(p a.A==="q"){3(p a.18==="q"){a.A=L}v{a.A=!a.18}}2.w=!a.A;2.17=a.1n||J;2.1I=a.2f||"2d";2.15=a.1l||J;2.4=t;2.z=t;2.14=t;2.T=t;2.B=t;2.R=t}8.9=1g r.s.1P();8.9.24=6(){5 i;5 f;5 a;5 d=2;5 c=6(e){e.20=L;3(e.1i){e.1i()}};5 b=6(e){e.2T=J;3(e.1Z){e.1Z()}3(!d.15){c(e)}};3(!2.4){2.4=16.2N("2M");2.1d();3(p 2.M.1v==="q"){2.4.Q=2.I()+2.M}v{2.4.Q=2.I();2.4.1e(2.M)}2.2F()[2.1I].1e(2.4);2.1t();3(2.4.7.C){2.R=L}v{3(2.U!==0&&2.4.Z>2.U){2.4.7.C=2.U;2.4.7.2A="2x";2.R=L}v{a=2.22();2.4.7.C=(2.4.Z-a.13-a.12)+"11";2.R=J}}2.1r(2.1z);3(!2.15){2.B=[];f=["2q","1N","2p","2o","1M","2n","2m","2l","2k"];1o(i=0;i<f.1L;i++){2.B.1K(r.s.u.1c(2.4,f[i],c))}2.B.1K(r.s.u.1c(2.4,"1N",6(e){2.7.1J="2i"}))}2.T=r.s.u.1c(2.4,"2h",b);r.s.u.S(2,"2e")}};8.9.I=6(){5 a="";3(2.N!==""){a="<2c";a+=" 2b=\'"+2.N+"\'";a+=" 2a=12";a+=" 7=\'";a+=" Y: 29;";a+=" 1J: 28;";a+=" 27: "+2.1G+";";a+="\'>"}K a};8.9.1t=6(){5 a;3(2.N!==""){a=2.4.3f;2.z=r.s.u.1c(a,"1M",2.26())}v{2.z=t}};8.9.26=6(){5 a=2;K 6(e){e.20=L;3(e.1i){e.1i()}r.s.u.S(a,"3e");a.1u()}};8.9.1r=6(d){5 m;5 n;5 e=0,H=0;3(!d){m=2.1F();3(m 3d r.s.3c){3(!m.25().3a(2.E)){m.38(2.E)}n=m.25();5 a=m.37();5 h=a.Z;5 f=a.23;5 k=2.G.C;5 l=2.G.1k;5 g=2.4.Z;5 b=2.4.23;5 i=2.19.C;5 j=2.19.1k;5 o=2.21().35(2.E);3(o.x<(-k+i)){e=o.x+k-i}v 3((o.x+g+k+i)>h){e=o.x+g+k+i-h}3(2.17){3(o.y<(-l+j+b)){H=o.y+l-j-b}v 3((o.y+l+j)>f){H=o.y+l+j-f}}v{3(o.y<(-l+j)){H=o.y+l-j}v 3((o.y+b+l+j)>f){H=o.y+b+l+j-f}}3(!(e===0&&H===0)){5 c=m.33();m.32(e,H)}}}};8.9.1d=6(){5 i,F;3(2.4){2.4.30=2.1p;2.4.7.2Z="";F=2.1m;1o(i 2Y F){3(F.2X(i)){2.4.7[i]=F[i]}}3(p 2.4.7.1f!=="q"&&2.4.7.1f!==""){2.4.7.2V="2S(1f="+(2.4.7.1f*2R)+")"}2.4.7.Y="2P";2.4.7.P=\'1b\';3(2.X!==t){2.4.7.V=2.X}}};8.9.22=6(){5 c;5 a={1a:0,1h:0,13:0,12:0};5 b=2.4;3(16.1w&&16.1w.1X){c=b.2L.1w.1X(b,"");3(c){a.1a=D(c.1W,10)||0;a.1h=D(c.1V,10)||0;a.13=D(c.1U,10)||0;a.12=D(c.1T,10)||0}}v 3(16.2J.O){3(b.O){a.1a=D(b.O.1W,10)||0;a.1h=D(b.O.1V,10)||0;a.13=D(b.O.1U,10)||0;a.12=D(b.O.1T,10)||0}}K a};8.9.2H=6(){3(2.4){2.4.2G.2U(2.4);2.4=t}};8.9.1x=6(){2.24();5 a=2.21().2E(2.E);2.4.7.13=(a.x+2.G.C)+"11";3(2.17){2.4.7.1h=-(a.y+2.G.1k)+"11"}v{2.4.7.1a=(a.y+2.G.1k)+"11"}3(2.w){2.4.7.P=\'1b\'}v{2.4.7.P="A"}};8.9.2D=6(a){3(p a.1s!=="q"){2.1p=a.1s;2.1d()}3(p a.F!=="q"){2.1m=a.F;2.1d()}3(p a.1y!=="q"){2.1S(a.1y)}3(p a.1q!=="q"){2.1z=a.1q}3(p a.1H!=="q"){2.U=a.1H}3(p a.1B!=="q"){2.G=a.1B}3(p a.1n!=="q"){2.17=a.1n}3(p a.Y!=="q"){2.1D(a.Y)}3(p a.V!=="q"){2.1R(a.V)}3(p a.1E!=="q"){2.1G=a.1E}3(p a.1j!=="q"){2.N=a.1j}3(p a.1A!=="q"){2.19=a.1A}3(p a.18!=="q"){2.w=a.18}3(p a.A!=="q"){2.w=!a.A}3(p a.1l!=="q"){2.15=a.1l}3(2.4){2.1x()}};8.9.1S=6(a){2.M=a;3(2.4){3(2.z){r.s.u.W(2.z);2.z=t}3(!2.R){2.4.7.C=""}3(p a.1v==="q"){2.4.Q=2.I()+a}v{2.4.Q=2.I();2.4.1e(a)}3(!2.R){2.4.7.C=2.4.Z+"11";3(p a.1v==="q"){2.4.Q=2.I()+a}v{2.4.Q=2.I();2.4.1e(a)}}2.1t()}r.s.u.S(2,"2C")};8.9.1D=6(a){2.E=a;3(2.4){2.1x()}r.s.u.S(2,"1Q")};8.9.1R=6(a){2.X=a;3(2.4){2.4.7.V=a}r.s.u.S(2,"2z")};8.9.2y=6(a){2.w=!a;3(2.4){2.4.7.P=(2.w?"1b":"A")}};8.9.2w=6(){K 2.M};8.9.1C=6(){K 2.E};8.9.2v=6(){K 2.X};8.9.2u=6(){5 a;3((p 2.1F()==="q")||(2.1F()===t)){a=J}v{a=!2.w}K a};8.9.2t=6(){2.w=J;3(2.4){2.4.7.P="A"}};8.9.3b=6(){2.w=L;3(2.4){2.4.7.P="1b"}};8.9.2s=6(c,b){5 a=2;3(b){2.E=b.1C();2.14=r.s.u.2r(b,"1Q",6(){a.1D(2.1C())})}2.1O(c);3(2.4){2.1r()}};8.9.1u=6(){5 i;3(2.z){r.s.u.W(2.z);2.z=t}3(2.B){1o(i=0;i<2.B.1L;i++){r.s.u.W(2.B[i])}2.B=t}3(2.14){r.s.u.W(2.14);2.14=t}3(2.T){r.s.u.W(2.T);2.T=t}2.1O(t)};', 62, 202, "||this|if|div_|var|function|style|InfoBox|prototype||||||||||||||||typeof|undefined|google|maps|null|event|else|isHidden_|||closeListener_|visible|eventListeners_|width|parseInt|position_|boxStyle|pixelOffset_|yOffset|getCloseBoxImg_|false|return|true|content_|closeBoxURL_|currentStyle|visibility|innerHTML|fixedWidthSet_|trigger|contextListener_|maxWidth_|zIndex|removeListener|zIndex_|position|offsetWidth||px|right|left|moveListener_|enableEventPropagation_|document|alignBottom_|isHidden|infoBoxClearance_|top|hidden|addDomListener|setBoxStyle_|appendChild|opacity|new|bottom|stopPropagation|closeBoxURL|height|enableEventPropagation|boxStyle_|alignBottom|for|boxClass_|disableAutoPan|panBox_|boxClass|addClickHandler_|close|nodeType|defaultView|draw|content|disableAutoPan_|infoBoxClearance|pixelOffset|getPosition|setPosition|closeBoxMargin|getMap|closeBoxMargin_|maxWidth|pane_|cursor|push|length|click|mouseover|setMap|OverlayView|position_changed|setZIndex|setContent|borderRightWidth|borderLeftWidth|borderBottomWidth|borderTopWidth|getComputedStyle|Size|preventDefault|cancelBubble|getProjection|getBoxWidths_|offsetHeight|createInfoBoxDiv_|getBounds|getCloseClickHandler_|margin|pointer|relative|align|src|img|floatPane|domready|pane|infoBox|contextmenu|default|apply|touchmove|touchend|touchstart|dblclick|mouseup|mouseout|mousedown|addListener|open|show|getVisible|getZIndex|getContent|auto|setVisible|zindex_changed|overflow|LatLng|content_changed|setOptions|fromLatLngToDivPixel|getPanes|parentNode|onRemove|gif|documentElement|mapfiles|ownerDocument|div|createElement|en_us|absolute|intl|100|alpha|returnValue|removeChild|filter|com|hasOwnProperty|in|cssText|className|www|panBy|getCenter|http|fromLatLngToContainerPixel|arguments|getDiv|setCenter|2px|contains|hide|Map|instanceof|closeclick|firstChild".split("|"), 0, {}));

(function (b) {
    b.support.touch = "ontouchend" in document;
    if (!b.support.touch) {
        return
    }
    var c = b.ui.mouse.prototype,
        e = c._mouseInit,
        a;

    function d(g, h) {
        if (g.originalEvent.touches.length > 1) {
            return
        }
        g.preventDefault();
        var i = g.originalEvent.changedTouches[0],
            f = document.createEvent("MouseEvents");
        f.initMouseEvent(h, true, true, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, false, false, false, false, 0, null);
        g.target.dispatchEvent(f)
    }
    c._touchStart = function (g) {
        var f = this;
        if (a || !f._mouseCapture(g.originalEvent.changedTouches[0])) {
            return
        }
        a = true;
        f._touchMoved = false;
        d(g, "mouseover");
        d(g, "mousemove");
        d(g, "mousedown")
    };
    c._touchMove = function (f) {
        if (!a) {
            return
        }
        this._touchMoved = true;
        d(f, "mousemove")
    };
    c._touchEnd = function (f) {
        if (!a) {
            return
        }
        d(f, "mouseup");
        d(f, "mouseout");
        if (!this._touchMoved) {
            d(f, "click")
        }
        a = false
    };
    c._mouseInit = function () {
        var f = this;
        f.element.bind("touchstart", b.proxy(f, "_touchStart")).bind("touchmove", b.proxy(f, "_touchMove")).bind("touchend", b.proxy(f, "_touchEnd"));
        e.call(f)
    }
})(jQuery);
!(function () {
    var GoogleMapStyle = [{
        featureType: "water",
        stylers: [{
            visibility: "simplified"
        }, {
            color: "#81c9ea"
        }]
    }, {
        featureType: "all",
        elementType: "labels.text.stroke",
        stylers: [{
            color: "#ffffff"
        }]
    }, {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [{
            color: "#393c3d"
        }]
    }, {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [{
            color: "#ffffff"
        }]
    }, {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{
            color: "#d1d1d1"
        }]
    }, {
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [{
            color: "#393c3d"
        }]
    }, {
        featureType: "administrative",
        elementType: "labels.text.stroke",
        stylers: [{
            color: "#ffffff"
        }, {
            weight: 4.5
        }]
    }, {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{
            color: "#b9db9a"
        }]
    }];
    provide("map_search/GoogleMapStyle", GoogleMapStyle)
})();

		/*https://a1.muscache.com/airbnb/static/map_search/markers-1eedad27879b2e2159046678adb53345.png*/
!(function () {
    var MapPinPaths = {
		primaryPin: new google.maps.MarkerImage("https://a1.muscache.com/airbnb/static/map_search/markers-pretzel-41cc737abbd3651d4cf8b04bfc8257c2.png", new google.maps.Size(22, 30), new google.maps.Point(0, 0)),
        viewedPrimaryPin: new google.maps.MarkerImage("https://a1.muscache.com/airbnb/static/map_search/markers-1eedad27879b2e2159046678adb53345.png", new google.maps.Size(22, 30), new google.maps.Point(0, 40)),
        currentPrimaryPin: new google.maps.MarkerImage("https://a1.muscache.com/airbnb/static/map_search/markers-1eedad27879b2e2159046678adb53345.png", new google.maps.Size(22, 30), new google.maps.Point(53, 0)),
        viewedCurrentPrimaryPin: new google.maps.MarkerImage("https://a1.muscache.com/airbnb/static/map_search/markers-1eedad27879b2e2159046678adb53345.png", new google.maps.Size(22, 30), new google.maps.Point(53, 0)),
        secondaryPin: new google.maps.MarkerImage("https://a1.muscache.com/airbnb/static/map_search/markers-1eedad27879b2e2159046678adb53345.png", new google.maps.Size(11, 11), new google.maps.Point(75, 0)),
        viewedSecondaryPin: new google.maps.MarkerImage("https://a1.muscache.com/airbnb/static/map_search/markers-1eedad27879b2e2159046678adb53345.png", new google.maps.Size(11, 11), new google.maps.Point(75, 40)),
        currentSecondaryPin: new google.maps.MarkerImage("https://a1.muscache.com/airbnb/static/map_search/markers-1eedad27879b2e2159046678adb53345.png", new google.maps.Size(11, 11), new google.maps.Point(86, 0)),
        viewedCurrentSecondaryPin: new google.maps.MarkerImage("https://a1.muscache.com/airbnb/static/map_search/markers-1eedad27879b2e2159046678adb53345.png", new google.maps.Size(11, 11), new google.maps.Point(86, 0)),
        wishListPin: new google.maps.MarkerImage("https://a1.muscache.com/airbnb/static/map_search/markers-1eedad27879b2e2159046678adb53345.png", new google.maps.Size(31, 27), new google.maps.Point(22, 0)),
        currentWishListPin: new google.maps.MarkerImage("https://a1.muscache.com/airbnb/static/map_search/markers-1eedad27879b2e2159046678adb53345.png", new google.maps.Size(31, 27), new google.maps.Point(22, 40)),
        primaryPinShadowUrl: "https://a1.muscache.com/airbnb/static/map_search/marker-shadow-dfebbf0eb3368c537ba4fa5a77830284.png"
    };
    provide("map_search/MapPinPaths", MapPinPaths)
})();

!(function () {
    var withListings = function () {
        this.defaultAttrs({
            listingSelector: ".listing",
            listingContainerSelector: ".search-result",
            listingImageSelector: ".listing-img",
            nextSelector: ".target-next",
            prevSelector: ".target-prev",
            socialProofSelector: ".social-proof"
        });
        this.nextListingImage = function (e, data) {
            var $img = $(data.el).closest(this.attr.listingImageSelector).find("img");
            var newIndex = $img.data("current") + 1;
            if (newIndex >= $img.data("urls").length) {
                newIndex = 0
            }
            $img.attr("src", $img.data("urls")[newIndex]);
            $img.data("current", newIndex);
            if (!$img.data("preloaded")) {
                $img.data("urls").forEach(function (url) {
                    (new Image()).src = url
                });
                $img.data("preloaded", true)
            }
            this.hideSocialProof($(data.el).closest(this.attr.listingSelector))
        };
        this.prevListingImage = function (e, data) {
            var $img = $(data.el).closest(this.attr.listingImageSelector).find("img");
            var newIndex = $img.data("current") - 1;
            if (newIndex < 0) {
                newIndex = $img.data("urls").length - 1
            }
            $img.attr("src", $img.data("urls")[newIndex]);
            $img.data("current", newIndex);
            this.hideSocialProof($(data.el).closest(this.attr.listingSelector))
        };
        this.hideSocialProof = function ($listing) {
            var $socialProof = $listing.find(this.attr.socialProofSelector),
                timeoutId = window.setTimeout(function () {
                    $socialProof.removeClass("hide")
                }, 5000);
            $socialProof.addClass("hide");
            window.clearTimeout($socialProof.data("hideTimeoutId"));
            $socialProof.data("hideTimeoutId", timeoutId)
        };
        this.clearListings = function () {
            this.select("listingSelector").remove()
        };
        this.displayImages = function ($container) {
            $container.find(this.attr.listingImageSelector).find("img").each(function () {
                $(this).attr("src", $(this).data("urls")[0]).removeClass("hide")
            })
        };
        this.after("initialize", function () {
            this.on("click", {
                nextSelector: this.nextListingImage,
                prevSelector: this.prevListingImage
            })
        })
    };
    provide("map_search/withListings", withListings)
})();

!(function () {
    var SearchHeader = flight.component(function () {
        this.defaultAttrs({
            locationSelector: ".location",
            searchButtonSelector: ".search-button",
            formSelector: "form"
        });
        this.triggerHeaderFieldsChanged = function (e) {
            e.preventDefault();
            var location = this.select("locationSelector").val();
            if (!location) {
                return
            }
            this.trigger(".map-search", "uiHeaderFieldsChanged", {
                location: location
            })
        };
        this.after("initialize", function () {
            new google.maps.places.Autocomplete(this.select("locationSelector").get(0), {
                types: ["geocode"]
            });
            this.on("submit", {
                formSelector: this.triggerHeaderFieldsChanged
            })
        })
    });
	
    provide("map_search/SearchHeader", SearchHeader)
})();



!(function () {
	var SearchInForm = flight.component(function () {
        this.defaultAttrs({
            locationSelector: "#map_filter_location",
            searchButtonSelector: ".search-button",
            formSelector: "form"
        });
        this.triggerLocationFieldsChanged = function (e) {
            e.preventDefault();
            var location = this.select("locationSelector").val();
            if (!location) {
                return
            }
            this.trigger(".map-search", "uiHeaderFieldsChanged", {
                location: location
            })
        };
		
        this.after("initialize", function () {
			var component = this;
            autocomplete = new google.maps.places.Autocomplete(this.select("locationSelector").get(0), {
                types: ["geocode"]
            });
			
			google.maps.event.addListener(autocomplete, 'place_changed', function() {
				component.trigger("location.updated");
			});
			
            this.on("submit", function(event) {
				this.trigger("location.updated");	
			});
			
			this.on("location.updated", function(event) {
				$('.location').val(this.select("locationSelector").val());
				this.triggerLocationFieldsChanged(event);
			});
        })
    });
	
    provide("map_search/SearchInForm", SearchInForm);
})();


!(function () {
    var MapPinPaths = require("map_search/MapPinPaths"),
        withListings = require("map_search/withListings"),
        GoogleMapStyle = require("map_search/GoogleMapStyle");
    var Map = flight.component(function () {
        this.defaultAttrs({
            mapCanvasSelector: ".map-canvas",
            closeInfoBoxSelector: ".close-box",
            infoBoxSelector: ".infoBox",
            autoRefreshPanelSelector: ".map-auto-refresh",
            refreshButtonSelector: ".map-manual-refresh",
            autoRefreshCheckboxSelector: ".map-auto-refresh-checkbox",
            mapRefreshControlsSelector: ".map-refresh-controls",
            pixelSideBorder: 20,
            pixelTopBorder: 40,
            pixelBottomBorder: 30
        });
        this.plotResults = function (e, data) {
			console.log('=====================================================');
			console.log(data);
			console.log(e);
			console.log('=====================================================');
            if (!data.listingData.length) {
                return
            }
            this.closeInfoWindow();
            var $listingNodes = data.$listings,
                mapBounds = new google.maps.LatLngBounds();
				
            if (data.currentSearch.source === "initial" && data.currentSearch.map.search_by_map) {
                var mapData = data.currentSearch.map,
                    swLatLng = new google.maps.LatLng(mapData.sw_lat, mapData.sw_lng),
                    neLatLng = new google.maps.LatLng(mapData.ne_lat, mapData.ne_lng);
                mapBounds = new google.maps.LatLngBounds(swLatLng, neLatLng);
                if (data.currentSearch.map.zoom) {
                    this._map.setCenter(mapBounds.getCenter());
                    this._map.setZoom(parseInt(data.currentSearch.map.zoom, 10))
                } else {
                    this._map.fitBounds(mapBounds)
                }
            }
            if (e.type === "dataNewSearchResultsLoaded") {
                data.listingData.forEach(function (listing) {
                    if (this.currentMarkers[listing.id]) {
                        listing.isOldMarker = true
                    }
                }, this);
                this.clearMap()
            } else {
                if (e.type === "dataMoreSearchResultsLoaded") {
                    Object.keys(this.currentMarkers).forEach(function (id, i) {
                        var marker = this.currentMarkers[id];
                        marker.setFlat(true);
                        if (marker.icon === MapPinPaths.primaryPin) {
                            marker.setIcon(MapPinPaths.secondaryPin)
                        } else {
                            if (marker.icon === MapPinPaths.viewedPrimaryPin) {
                                marker.setIcon(MapPinPaths.viewedSecondaryPin)
                            }
                        }
                        mapBounds.extend(marker.getPosition())
                    }, this)
                }
            }
            data.listingData.forEach(function (listing, i) {
                var position = new google.maps.LatLng(listing.lat, listing.lng),
                    isWishlisted = this.wishlists && this.wishlists.hasListing(listing.id),
                    $close = $('<div class="close-box">&times;</div>'),
                    $infoContent, animation = (listing.isOldMarker || !data.currentSearch.pageDir) ? null : google.maps.Animation.DROP,
                    shadow = {
                        url: MapPinPaths.primaryPinShadowUrl,
                        size: new google.maps.Size(28, 30),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(15, 23)
                    }, marker = new google.maps.Marker({
                        position: position,
                        map: this._map,
                        title: listing.name.toString(),
                        clickable: true,
                        animation: animation,
                        icon: isWishlisted ? MapPinPaths.wishListPin : MapPinPaths.primaryPin,
                        shadow: shadow
                    });
                mapBounds.extend(position);
                $infoContent = $listingNodes.find(".listing[data-id=" + listing.id + "]").clone().prepend($close);
                if (data.currentSearch.source === "initial" && data.currentSearch.page === 1) {
                    $(window).one("load", (function () {
                        this.displayImages($infoContent)
                    }).bind(this))
                } else {
                    this.displayImages($infoContent)
                }
                marker.infoContent = $infoContent.get(0);
                google.maps.event.addListener(marker, "click", (function () {
                    this.trigger("uiOpenInfoWindow", {
                        marker: marker,
                        map: this._map
                    });
                    if (marker.icon === MapPinPaths.primaryPin) {
                        marker.setIcon(MapPinPaths.viewedPrimaryPin)
                    } else {
                        if (marker.icon === MapPinPaths.secondaryPin) {
                            marker.setIcon(MapPinPaths.viewedSecondaryPin)
                        }
                    }
                }).bind(this));
                this.currentMarkers[listing.id] = marker
            }, this);
			
            if (data.currentSearch.map.search_by_map) {
                this.select("autoRefreshPanelSelector").removeClass("hide");
                this.select("refreshButtonSelector").addClass("hide")
            } else {
                this.detachZoomListener();
                if (data.listingData.length) {
                    this._map.fitBounds(mapBounds)
                } else {
                    var geocoder = new google.maps.Geocoder();
                    geocoder.geocode({
                        address: data.currentSearch.header.location
                    }, (function (results, status) {
                        if (status === "OK") {
                            this._map.fitBounds(results[0].geometry.viewport)
                        }
                    }).bind(this))
                } if (this._map.getBounds()) {
                    window.setTimeout(this.attachZoomListener.bind(this), 1000)
                }
            }
        };
        this.affectMarker = function (e, data) {
            this.currentMarkers[data.id].setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
            switch (this.currentMarkers[data.id].icon) {
            case MapPinPaths.primaryPin:
                this.currentMarkers[data.id].setIcon(MapPinPaths.currentPrimaryPin);
                break;
            case MapPinPaths.viewedPrimaryPin:
                this.currentMarkers[data.id].setIcon(MapPinPaths.viewedCurrentPrimaryPin);
                break;
            case MapPinPaths.secondaryPin:
                this.currentMarkers[data.id].setIcon(MapPinPaths.currentSecondaryPin);
                break;
            case MapPinPaths.viewedSecondaryPin:
                this.currentMarkers[data.id].setIcon(MapPinPaths.viewedCurrentSecondaryPin);
                break;
            case MapPinPaths.wishListPin:
                this.currentMarkers[data.id].setIcon(MapPinPaths.currentWishListPin);
                break
            }
        };
        this.settleMarker = function (e, data) {
            switch (this.currentMarkers[data.id].icon) {
            case MapPinPaths.currentPrimaryPin:
                this.currentMarkers[data.id].setIcon(MapPinPaths.primaryPin);
                break;
            case MapPinPaths.viewedCurrentPrimaryPin:
                this.currentMarkers[data.id].setIcon(MapPinPaths.viewedPrimaryPin);
                break;
            case MapPinPaths.currentSecondaryPin:
                this.currentMarkers[data.id].setIcon(MapPinPaths.secondaryPin);
                break;
            case MapPinPaths.viewedCurrentSecondaryPin:
                this.currentMarkers[data.id].setIcon(MapPinPaths.viewedSecondaryPin);
                break;
            case MapPinPaths.currentWishListPin:
                this.currentMarkers[data.id].setIcon(MapPinPaths.wishListPin);
                break
            }
        };
        this.addWishlistMarker = function (e, data) {
            this.currentMarkers[data.id].setIcon(MapPinPaths.wishListPin)
        };
        this.removeWishlistMarker = function (e, data) {
            if (data.selectedIds.length === 0) {
                this.currentMarkers[data.id].setIcon(MapPinPaths.viewedPrimaryPin)
            }
        };
        this.loadWishlistsCollection = function (e, data) {
            /*this.wishlists = data.wishlists;
            Object.keys(this.currentMarkers).forEach(function (id) {
                if (this.wishlists.hasListing(id)) {
                    this.addWishlistMarker({}, {
                        id: id
                    })
                }
            }, this)*/
        };
        this.openInfoWindow = function (e, data) {
            this._info.close();
            this._info.setContent(data.marker.infoContent);
            this._info.open(data.map, data.marker)
        };
        this.closeInfoWindow = function () {
            this._info.close();
            this._map.setOptions({
                disableDoubleClickZoom: false,
                draggable: true
            })
        };
        this.onInfoWindow = function () {
            this._map.setOptions({
                disableDoubleClickZoom: true,
                draggable: false
            });
            google.maps.event.clearListeners(this._map, "click")
        };
        this.offInfoWindow = function () {
            this._map.setOptions({
                disableDoubleClickZoom: false,
                draggable: true
            });
            google.maps.event.addListener(this._map, "click", (function () {
                this.closeInfoWindow()
            }).bind(this))
        };
        this.attachZoomListener = function () {
            if (this._zoomListener) {
                google.maps.event.removeListener(this._zoomListener)
            }
            this._zoomListener = google.maps.event.addListener(this._map, "zoom_changed", (this.mapMoved).bind(this))
        };
        this.detachZoomListener = function () {
            google.maps.event.removeListener(this._zoomListener)
        };
        this.toggleAutoRefresh = function (e, data) {
            this._autoRefresh = $(data.el).prop("checked");
            if (window.localStorage) {
                if (this._autoRefresh) {
                    delete window.localStorage.magellanManualRefresh
                } else {
                    window.localStorage.magellanManualRefresh = "1"
                }
            }
        };
        this.mapMovedEnough = function () {
            if (this._zoom !== this._map.zoom) {
                return true
            }
            var northEast = this._map.getBounds().getNorthEast(),
                southWest = this._map.getBounds().getSouthWest(),
                deltaLat = Math.abs(this._sw.lat() - southWest.lat()),
                deltaLng = Math.abs(this._sw.lng() - southWest.lng()),
                height = northEast.lat() - southWest.lat(),
                width = northEast.lng() - southWest.lng(),
                threshold = 0.05;
            height += deltaLng;
            width += deltaLat;
            return (deltaLat * width + deltaLng * height - deltaLat * deltaLng) / (width * height) > threshold
        };
        this.mapMoved = function () {
            if (this.mapMovedEnough()) {
                if (this._autoRefresh) {
                    this.refreshMap()
                } else {
                    this.select("autoRefreshPanelSelector").addClass("hide");
                    this.select("refreshButtonSelector").removeClass("hide");
                    this.trigger("uiMapBoundsChangedWithoutAutoRefresh", this.getMapBounds())
                }
                this._sw = this._map.getBounds().getSouthWest();
                this._zoom = this._map.zoom
            }
        };
        this.clearMap = function () {
            this.clearListings();
            Object.keys(this.currentMarkers).forEach(function (id) {
                this.currentMarkers[id].setMap(null);
                delete this.currentMarkers[id]
            }, this)
        };
        this.getMapBounds = function () {
            var pixelWidth = this.select("mapCanvasSelector").width(),
                mapWidth = this._map.getBounds().getNorthEast().lng() - this._map.getBounds().getSouthWest().lng(),
                mapSideBorder, mapTopBorder, mapBottomBorder, sw_lng, ne_lng, zoom;
            if (mapWidth < 0) {
                mapWidth += 360
            }
            mapSideBorder = (this.attr.pixelSideBorder / pixelWidth) * mapWidth;
            mapTopBorder = (this.attr.pixelTopBorder / pixelWidth) * mapWidth;
            mapBottomBorder = (this.attr.pixelBottomBorder / pixelWidth) * mapWidth;
            sw_lng = this._map.getBounds().getSouthWest().lng() + mapSideBorder;
            if (sw_lng > 180) {
                sw_lng -= 360
            }
            ne_lng = this._map.getBounds().getNorthEast().lng() - mapSideBorder;
            if (ne_lng < -180) {
                ne_lng += 360
            }
            zoom = this._map.zoom;
            return {
                sw_lat: this._map.getBounds().getSouthWest().lat() + mapBottomBorder,
                sw_lng: sw_lng,
                ne_lat: this._map.getBounds().getNorthEast().lat() - mapTopBorder,
                ne_lng: ne_lng,
                zoom: zoom,
                search_by_map: true
            }
        };
        this.refreshMap = function () {
            this.trigger("uiMapBoundsChanged", this.getMapBounds())
        };
        this.isTouchDevice = function () {
            var userAgent = navigator.userAgent;
            return (userAgent.indexOf("iPhone") !== -1 || userAgent.indexOf("iPad") !== -1 || userAgent.indexOf("Android") !== -1)
        };
        this.wrapLng = function (unwrappedLng) {
            if (unwrappedLng < 0) {
                return ((unwrappedLng - 180) % 360) + 180
            } else {
                return ((unwrappedLng + 180) % 360) - 180
            }
        };
        this.after("initialize", function () {
            var usingCustomGmapsStyle = true;
            this._map = new google.maps.Map(this.select("mapCanvasSelector").get(0), {
                center: new google.maps.LatLng(37.768942, -122.402785),
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true,
                zoomControl: true,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.SMALL,
                    position: google.maps.ControlPosition.TOP_LEFT
                },
                styles: GoogleMapStyle,
                maxZoom: 18
            });
            this._info = new InfoBox({
                closeBoxURL: "",
                pane: "floatPane",
                alignBottom: true,
                infoBoxClearance: new google.maps.Size(15, 50),
                enableEventPropagation: true,
                pixelOffset: new google.maps.Size(-134, -30),
                zIndex: 330
            });
            this._autoRefresh = !(window.localStorage && window.localStorage.magellanManualRefresh);
            if (!this._autoRefresh) {
                this.select("autoRefreshCheckboxSelector").prop("checked", false)
            }
            if (this.isTouchDevice()) {
                this.select("mapRefreshControlsSelector").addClass("touch")
            }
            this.select("autoRefreshPanelSelector").removeClass("hide");
            google.maps.event.addListener(this._map, "click", (function () {
                this.closeInfoWindow()
            }).bind(this));
            google.maps.event.addListenerOnce(this._map, "bounds_changed", (function () {
                this._sw = this._map.getBounds().getSouthWest();
                this._ne = this._map.getBounds().getNorthEast();
                this._zoom = this._map.zoom;
                this.attachZoomListener()
            }).bind(this));
            google.maps.event.addListener(this._map, "bounds_changed", (function () {
                var center = this._map.getCenter(),
                    zoom = this._map.getZoom(),
                    lat = center.lat(),
                    lng = this.wrapLng(center.lng());
                if (lat > 34.202338942225985 && lat < 38.49650860060402 && lng > 125.84092141017254 && lng < 129.73008156642254 && zoom > 6) {
                    if (usingCustomGmapsStyle) {
                        this._map.setOptions({
                            styles: undefined
                        });
                        usingCustomGmapsStyle = false
                    }
                } else {
                    if (!usingCustomGmapsStyle) {
                        this._map.setOptions({
                            styles: GoogleMapStyle
                        });
                        usingCustomGmapsStyle = true
                    }
                }
            }).bind(this));
            google.maps.event.addListener(this._map, "dragend", this.mapMoved.bind(this));
            this.currentMarkers = {};
            this.on(".map-search", "dataNewSearchResultsLoaded", this.plotResults);
            this.on(".map-search", "dataMoreSearchResultsLoaded", this.plotResults);
            this.on("uiOpenInfoWindow", this.openInfoWindow);
            this.on(".map-search", "uiListingFocused", this.affectMarker);
            this.on(".map-search", "uiListingBlurred", this.settleMarker);
            this.on(document, "addListing.wishlists", this.addWishlistMarker);
            this.on(document, "removeListing.wishlists", this.removeWishlistMarker);
            this.on(document, "initialize.wishlists", this.loadWishlistsCollection);
            this.on("mouseover", {
                infoBoxSelector: this.onInfoWindow
            });
            this.on("mouseout", {
                infoBoxSelector: this.offInfoWindow
            });
            this.on("click", {
                refreshButtonSelector: this.refreshMap,
                closeInfoBoxSelector: this.closeInfoWindow,
                autoRefreshCheckboxSelector: this.toggleAutoRefresh
            })
        })
    }, withListings);
    provide("map_search/Map", Map)
})();

!(function () {
    var withListings = require("map_search/withListings");
    var SearchResults = flight.component(function () {
        this.defaultAttrs({
            seeMoreButtonSelector: ".see-more-button",
            seeMoreButtonContainerSelector: ".see-more-button-container",
            pageDividerMarkup: '<div class="page-divider"><span></span></div>',
            pageDividerSelector: ".page-divider",
            spinnerContanerBottomSelector: ".spinner-container-bottom",
            spinnerContainerTopSelector: ".spinner-container-top"
        });
        this.renderNew = function (e, data) {
			
			console.log('RENDER NEW HERE...');
			console.log(data.$listings);
			
            var $container = this.$node.find(".outer-listings-container");
            if (data.currentSearch.source === "initial") {
                if (data.currentSearch.page > 1) {
                    $container.prepend(this.addPageDivider(data.currentSearch.page))
                }
                return
            }
            if (data.currentSearch.page > 1) {
                data.$listings.prepend(this.addPageDivider(data.currentSearch.page))
            }
            this.displayImages(data.$listings);
            $container.html(data.$listings);
            this.$node.removeClass("loading");
            this.trigger("uiNewSearchResultsRendered");
        };
        this.renderMore = function (e, data) {
            if (!data.listingData.length) {
                return
            }
            var $container = this.$node.find(".outer-listings-container"),
                $divider = this.addPageDivider(data.currentSearch.page);
            this.displayImages(data.$listings);
            if (data.currentSearch.pageDir === "prev") {
                this.renderMoreOnTop($divider, $container, data)
            } else {
                this.renderMoreOnBottom($divider, $container, data)
            }
            this.select("seeMoreButtonSelector").removeClass("disabled");
        };
        this.addPageDivider = function (page) {
            var $divider = $(this.attr.pageDividerMarkup);
            $divider.find("span").html(page);
            $divider.addClass("page-divider-" + page);
            return $divider
        };
        this.renderMoreOnTop = function ($divider, $container, data) {
            if (data.currentSearch.page > 1) {
                $container.prepend(data.$listings).prepend($divider)
            } else {
                $container.prepend(data.$listings)
            }
            this.$topSpinner.addClass("hide")
        };
        this.renderMoreOnBottom = function ($divider, $container, data) {
            $container.append($divider).append(data.$listings);
            this.$bottomSpinner.addClass("hide")
        };
        this.setNewLoading = function (e, data) {
            this.$node.addClass("loading")
        };
        this.setMoreLoading = function (e, data) {
            if (data.currentSearch.pageDir === "prev") {
                this.$topSpinner.removeClass("hide")
            } else {
                if (data.currentSearch.pageDir === "next") {
                    this.$bottomSpinner.removeClass("hide");
                    this.select("seeMoreButtonSelector").addClass("disabled")
                }
            }
        };
        this.updateSeeMoreButton = function (e, data) {
            if (data.pagination_mode === "show_more" && data.pageDir !== "prev") {
                var hasMorePages = (data.count / 18) > data.page;
                this.select("seeMoreButtonContainerSelector").toggleClass("hide", !hasMorePages)
            }
        };
        this.triggerListingFocused = function (e, data) {
            this.trigger("uiListingFocused", {
                id: $(data.el).data("id")
            })
        };
        this.triggerListingBlurred = function (e, data) {
            this.trigger("uiListingBlurred", {
                id: $(data.el).data("id")
            })
        };
        this.after("initialize", function () {
            $(window).one("load", (function () {
                this.displayImages(this.$node)
            }).bind(this));
            this.$bottomSpinner = this.select("spinnerContanerBottomSelector");
            this.$topSpinner = this.select("spinnerContainerTopSelector");
            this.on(".map-search", "dataResultsLoaded", this.updateSeeMoreButton);
            this.on(".map-search", "dataNewSearchResultsLoading", this.setNewLoading);
            this.on(".map-search", "dataNewSearchResultsLoaded", this.renderNew);
            this.on(".map-search", "dataMoreSearchResultsLoading", this.setMoreLoading);
            this.on(".map-search", "dataMoreSearchResultsLoaded", this.renderMore);
            this.on("mouseover", {
                listingSelector: this.triggerListingFocused
            });
            this.on("mouseout", {
                listingSelector: this.triggerListingBlurred
            })
        })
    }, withListings);
    provide("map_search/SearchResults", SearchResults)
})();


/**
 * begin form filters
 */
!(function () {
    var Filters = flight.component(function () {
        this.defaultAttrs({
            categoryId: ".category-id",
            filterSelector: ".categorySelector"
        });
		
        this.loadBootstrapData = function (e, data) {
			var currentFilters = data.currentSearch.filters;
            if (data.currentSearch.source !== "initial") {
                return
            }
			
            var me = this;
			$('.category-id').change(function(event) {
            	me.triggerFiltersChanged(event);
			});
            
            this.lastFilterData = this.processFilters()
        };
		
        this.processFilters = function () {
            var filterData = {}, 
				categoryId = $('input[name=categoryId]:checked').val();
				
			if (categoryId) {
				filterData.categoryId = categoryId
			}
            return filterData;
        };
        this.triggerFiltersChanged = function (e, appendFilters) {
			if (false == ___mapTriggersLoaded) return;
			
            var filterData = this.processFilters(),
                filtersChanged = !_.isEqual(filterData, this.lastFilterData);
				
			if (typeof appendFilters !== "undefined") {
				$.extend(true, filterData, appendFilters);
			}
			
            this.trigger("uiFiltersChanged", {
                filterData: filterData,
                changed: filtersChanged
            });
            this.lastFilterData = filterData;
			
			ManualFilterTrigger.searchFromFilters(e, {
                filterData: {'categoryId': filterData.categoryId},
                changed: filtersChanged
            });
        };
		
        this.after("initialize", function () {
            this.on(".map-search", "dataNewSearchResultsLoaded", this.loadBootstrapData);
            /*this.on("click", {
                filterSelector: this.triggerFiltersChanged
            });*/
        })
    });
    provide("map_search/Filters", Filters);
})();

!(function () {
    var SidebarHeader = flight.component(function () {
        this.defaultAttrs({});
		
        this.updateAppliedFilters = function (e, data) {
			console.log(' ------------- updateAppliedFilters ------------------------------------');
            var filters = data.currentSearch.filters;
            this.$appliedFilters.addClass("hide");
            $.each(filters, (function (key) {
                this.select("appliedFilterGroupSelector").find('li[data-applied-filter="' + key + '"]').removeClass("hide")
            }).bind(this));
        };
		
        this.updateResultsCount = function (e, data) {
            this.select("resultsCountSelector").html(data.results_count_string)
        };
		
        this.after("initialize", function () {
            /*this.$appliedFilters = this.select("appliedFilterSelector").not(".results-count-item");
            this.on("click", {
                showFiltersSelector: this.filtersButtonClicked,
                appliedFilterSelector: this.removeAppliedFilter
            });*/
			
            this.on(".map-search", "dataResultsLoaded", this.updateResultsCount);
            this.on(".map-search", "dataNewSearchResultsLoaded", this.updateAppliedFilters);
            //this.on(".map-search", "uiFiltersChanged", this.show)
        })
    });
    provide("map_search/SidebarHeader", SidebarHeader)
})();


!(function () {
    var Filters = require("map_search/Filters"),
        SearchResults = require("map_search/SearchResults"),
        SidebarHeader = require("map_search/SidebarHeader");
    var Sidebar = flight.component(function () {
        this.defaultAttrs({
            filtersSelector: ".filters",
            searchResultsSelector: ".search-results",
            sidebarHeaderSelector: ".sidebar-header",
            sidebarHeaderPlaceholderSelector: ".sidebar-header-placeholder",
            scrollPositionStorageKey: "magellanScrollPosition",
            seeMoreButtonSelector: ".see-more-button"
        });
        this.openFiltersPanel = function () {
            this.select("filtersSelector").removeClass("hide").removeClass("collapse")
        };
        this.closeFiltersPanel = function (e, data) {
            var $filters = this.select("filtersSelector");
            $filters.addClass("collapse");
            if (!data.changed && this._topPage && this._topPage > 1) {
                $filters.addClass("hide")
            }
        };
        this.initSidebarHeader = function () {
            var $searchResults = this.select("searchResultsSelector"),
                $body = $(document.body),
                $sidebarHeader = this.select("sidebarHeaderSelector"),
                $sidebarHeaderPlaceholder = this.select("sidebarHeaderPlaceholderSelector");
            var prevIsStuck = false;
            this.$node.on("scroll", (function () {
                var searchResultsPos = $searchResults.offset();
                var isStuck = (searchResultsPos.top <= 100);
                if (isStuck !== prevIsStuck) {
                    prevIsStuck = isStuck;
                    $body.toggleClass("stuck", isStuck);
                    if (isStuck) {
                        $sidebarHeader.insertBefore(this.$node)
                    } else {
                        $sidebarHeader.insertBefore($sidebarHeaderPlaceholder)
                    }
                }
            }).bind(this))
        };
        this.updatePaginationButtons = function (data) {
            $(".results-footer").replaceWith(data.pagination_html);
            $(".results-footer").removeClass("hide");
            $(".pagination").find("a").each(function () {
                var _this = $(this);
                _this.click(function () {
                    var newPage = parseInt(_this.attr("target"), 10);
                    _this.trigger("uiPageRequested", {
                        page: newPage
                    });
                    return false
                })
            })
        };
        this.scrollToTop = function () {
            this.$node.scrollTop(0)
        };
        this.getScrollPos = function () {
            return this.$node.scrollTop()
        };
        this.infiniteResultsLoaded = function (data) {
            if (data.pageDir === "prev") {
                this._topPage = data.page;
                var $divider = this.$node.find(".page-divider-" + (this._topPage + 1)),
                    dividerHeight = ($divider.length) ? $divider.offset().top : 0,
                    newHeight = this.getScrollPos() * 2 + dividerHeight - 132;
                if (data.page === 1) {
                    this.select("filtersSelector").removeClass("hide");
                    this._filterHeight = this.select("filtersSelector").height();
                    newHeight += this._filterHeight
                }
                this.$node.scrollTop(newHeight);
                this._currentlyLoading = false
            } else {
                if (data.pageDir === "next") {
                    this._bottomPage = data.page;
                    this._currentlyLoading = false
                } else {
                    this._topPage = data.page;
                    this._bottomPage = data.page;
                    this.updateDividerAndCurrentPage(null, data)
                }
            } if (data.source === "initial" && data.page > 1 && !this._currentlyLoading && this.select("searchResultsSelector").height() < $(window).height()) {
                this._currentlyLoading = true;
                this.triggerFetchMoreFromTop(500)
            }
            this.updateScrollHandlerConstants(data);
            this.select("filtersSelector").toggleClass("hide", this._topPage > 1)
        };
        this.triggerFetchMoreFromTop = function (delay) {
            var _this = this;
            setTimeout(function () {
                _this.trigger("uiAdditionalPageRequested", {
                    page: _this._topPage - 1,
                    pageDir: "prev"
                })
            }, delay)
        };
        this.triggerFetchMoreFromBottom = function () {
            this.trigger("uiAdditionalPageRequested", {
                page: this._bottomPage + 1,
                pageDir: "next"
            })
        };
        this.updateScrollHandlerConstants = function (data) {
            this._totalHeight = this.select("searchResultsSelector").height();
            this._windowHeight = $(window).height();
            this._pageHeight = this.$node.find(".listings-container").height();
            this._moreToLoadBottom = (data.count / 18) > this._bottomPage;
            this._moreToLoadTop = this._topPage > 1;
            this._filterHeight = this.select("filtersSelector").height()
        };
        this.updateDividerAndCurrentPage = function (e, data) {
            if (data.page > 1) {
                this.$node.lastDivider = this.$node.find(".page-divider-" + data.page)
            }
            this._currentPage = data.page
        };
        this.updateCountAndPagination = function (e, data) {
            this.select("resultsCountSelector").html(data.results_count_string);
            this._paginationMode = data.pagination_mode;
            if (this._paginationMode === "classic") {
                this.updatePaginationButtons(data)
            } else {
                this.infiniteResultsLoaded(data)
            } if (data.source === "initial" && !data.pageDir) {
                if (this._paginationMode !== "classic") {
                    this.initializeInfiniteScroll(data)
                }
                this.restoreScrollPosition()
            }
			
			//___bindQuickView();
        };
        this.initializeInfiniteScroll = function (data) {
            this.$node.on("scroll", (function () {
                var myHeight = this.getScrollPos(),
                    totalHeight = this._totalHeight,
                    windowHeight = this._windowHeight,
                    pageHeight = this._pageHeight,
                    topPage = this._topPage,
                    myAdjustedHeight = (topPage > 1) ? myHeight : myHeight - this._filterHeight,
                    newPage, searchResultsPos, isStuck;
                newPage = Math.max(Math.floor((myAdjustedHeight + windowHeight / 2) / pageHeight + topPage), 1);
                if (isFinite(newPage) && newPage !== this._currentPage && !this._currentlyLoading) {
                    this._currentPage = newPage;
                    this.trigger("uiScrollOverNewPage", {
                        page: newPage
                    })
                }
                if ((myHeight + windowHeight + 100) > totalHeight && this._moreToLoadBottom && this._paginationMode === "infinite" && !this._currentlyLoading) {
                    this._currentlyLoading = true;
                    this.triggerFetchMoreFromBottom()
                } else {
                    if (myHeight < 100 && this._moreToLoadTop && !this._currentlyLoading) {
                        this._currentlyLoading = true;
                        this.triggerFetchMoreFromTop(100)
                    }
                }
            }).bind(this));
            $(window).resize((function () {
                this._totalHeight = this.select("searchResultsSelector").height();
                this._windowHeight = $(window).height();
                this._pageHeight = this.$node.find(".listings-loading").height();
                this._filterHeight = this.select("filtersSelector").height()
            }).bind(this))
        };
        this.restoreScrollPosition = function () {
            var savedPosition = amplify.store(this.attr.scrollPositionStorageKey);
            if (this._paginationMode !== "classic" && this._topPage > 1) {
                if (savedPosition && savedPosition.url === window.location.href && savedPosition.pos > 1) {
                    this.$node.scrollTop(savedPosition.pos + 107)
                } else {
                    this.$node.scrollTop(1)
                }
            } else {
                if (savedPosition && savedPosition.url === window.location.href) {
                    this.$node.scrollTop(savedPosition.pos)
                }
            }
        };
        this.after("initialize", function () {
            Filters.attachTo(".filters");
            SearchResults.attachTo(".search-results");
            SidebarHeader.attachTo(".sidebar-header");
            
            /*
            $(window).on("unload", (function () {
                var position;
                if (this._paginationMode === "classic" || this._currentPage === 1) {
                    position = this.$node.scrollTop()
                } else {
                	console.log(this.$node);
                    position = Math.max(-this.$node.lastDivider.offset().top, 1)
                }
                amplify.store(this.attr.scrollPositionStorageKey, {
                    pos: position,
                    url: window.location.href
                })
            }).bind(this));
            
            */
            this.initSidebarHeader();
            this.on("click", {
                seeMoreButtonSelector: this.triggerFetchMoreFromBottom
            });
            this.on(".map-search", "dataResultsLoaded", this.updateCountAndPagination);
            this.on("uiNewSearchResultsRendered", this.scrollToTop);
            this.on("uiScrollOverNewPage", this.updateDividerAndCurrentPage);
            this.on(".map-search", "uiFiltersButtonClicked", this.openFiltersPanel);
            //this.on("uiFiltersChanged", this.closeFiltersPanel)
        })
    });
    provide("map_search/Sidebar", Sidebar)
})();

!(function () {
    var History = flight.component(function () {
        this.updateLocation = function (e, data) {};
        this.stripLocationFromPath = function (path) {
            return "/" + path.split("/")[1] + "/"
        };
        this.getLocationFromPath = function (path) {
            return path.split("/")[2]
        };
        this.updatePageParam = function (e, data) {
            var currentPath, newText = (data.page === 1) ? "" : "page=" + data.page,
                newPath;
            if (this.hasPushState) {
                currentPath = window.location.href
            } else {
                currentPath = window.location.hash
            } if (data.page === 1) {
                newPath = currentPath.replace(/([&\?])page=[0-9]*/, newText)
            } else {
                if (currentPath.match(/page=[0-9]*/)) {
                    newPath = currentPath.replace(/([&\?])page=[0-9]*/, "$1" + newText)
                } else {
                    if (currentPath.match(/\?/)) {
                        newPath = currentPath + "&" + newText
                    } else {
                        newPath = currentPath + "?" + newText
                    }
                }
            } if (this.hasPushState) {
                window.history.replaceState({
                    id: this.historyId
                }, null, newPath)
            } else {
                if (!window.location.hash) {
                    var location = this.getLocationFromPath(window.location.pathname);
                    if (location) {
                        newPath = location + newPath
                    }
                    newPath = "!" + newPath
                }
                window.location.hash = newPath
            }
        };
        this.after("initialize", function () {
            if (window.location.hash && window.location.hash.indexOf("!") !== -1) {
                window.location.replace(this.stripLocationFromPath(window.location.pathname) + window.location.hash.replace("#!", ""))
            }
            this.hasPushState = (typeof window.history.pushState === "function");
            if (this.hasPushState) {
                window.addEventListener("popstate", (function (e) {
                    if (e.state && e.state.id !== this.historyId) {
                        window.location = window.location
                    }
                }).bind(this));
                if (window.history.state) {
                    this.historyId = window.history.state.id
                } else {
                    this.historyId = 1;
                    window.history.replaceState({
                        id: this.historyId
                    }, null, window.location)
                }
            }
            this.on("dataNewSearchResultsLoading", this.updateLocation);
            this.on("uiScrollOverNewPage", this.updatePageParam)
        })
    });
    provide("map_search/History", History)
})();


!(function () {
    var FindMe = flight.component(function () {
        this.defaultAttrs({
            buttonSelector: ".__location",
            inputSelector: ".map_filter_location"
        });
		this.findLocationByAddress = function (event) {
			var component = this,
				target = $(event.target);
			objMapDirectionApi = new MAP_DIRECTION_API();
			objMapDirectionApi.getAddressGeocode($(event.target).val(), function(data, result) {
				$('#lat').val(data.lat);
				$('#lng').val(data.lng);
				target.val(data.fma);
				component.trigger(".map-search", "uiHeaderFieldsChanged", {
					location: data.fma
				})
			}, function(status, strAddress) {
				if (status == 'ZERO_RESULTS') {
					alert('Sorry, We couldn\'t find the lcoation: ' + strAddress);	
				}
			});
		},
		
        this.findMyLocation = function (event) {
			event.preventDefault();
			var component = this;
			var me = component.$node;
			this.$node.addClass('loaderIcon');
			objMapDirectionApi = new MAP_DIRECTION_API();
			objMapDirectionApi.getGeoLocation(function(objGeoLocation) {
				me.trigger('location.found', [objGeoLocation.coords]);
				$('#lat').val(objGeoLocation.coords.latitude);
				$('#lng').val(objGeoLocation.coords.longitude);
				objMapDirectionApi.getAddressReverseGeocode(
					objGeoLocation.coords.latitude,
					objGeoLocation.coords.longitude,
					function(strFormattedAddress) {
						$(me.attr('data-bind')).val(strFormattedAddress);
						$(me.attr('data-bind')).trigger('change');
						var location = strFormattedAddress;
						if (!location) {
							return
						}
						component.trigger(".map-search", "uiHeaderFieldsChanged", {
							location: location
						})
						
						component.trigger(me, "location.updated");
						// 
						
						//__onLocationFound.call(this);
					}
				);
			});
        };
		
        this.after("initialize", function () {
			var me = this;
			this.on("click", {
                buttonSelector: this.findMyLocation
            });

			$(".map_filter_location").on('keypress', function(e){
				 if (e.which == 13 && $(this).val() !== "") {
					 me.findLocationByAddress(event);
				 }
			 });
        })
    });
	
    provide("map_search/FindMe", FindMe);
})();



!(function () {
    var MapSearchData = flight.component(function () {
        this.SEARCH_PARAMS = {
            map: ["sw_lat", "sw_lng", "ne_lat", "ne_lng", "search_by_map"],
            header: ["location"],
            filters: ["categoryId"]
        };
        this.defaultAttrs({
            sTagRegex: /([\?&]s=)[0-9a-zA-Z_\-]+/g
        });
        this.mergedParams = function () {
            var mapParams = {};
            console.log('MERGE PARAMS');
            console.log(this.SEARCH_PARAMS);
			
            for (var i = 0; i < this.SEARCH_PARAMS.map.length; i++) {
                mapParams[this.SEARCH_PARAMS.map[i]] = this.currentSearch.map[this.SEARCH_PARAMS.map[i]]
            }
            return $.extend({
                page: this.currentSearch.page,
				lat: $('#lat').val(),
				lng: $('#lng').val()
            }, mapParams, this.currentSearch.header, this.currentSearch.filters)
			
        };
        this.fetchMore = function (e, data) {
            this.currentSearch.pageDir = data.pageDir;
            this.currentSearch.page = data.page;
            this.trigger("dataMoreSearchResultsLoading", {
                currentSearch: this.currentSearch
            });
            if (this._activeRequest) {
                this._activeRequest.abort()
            }
            this._activeRequest = $.get("/wp-content/themes/KING-Canada/library/js/map/api.php", this.mergedParams(), (function (data) {
                this.dataLoaded("dataMoreSearchResultsLoaded", data);
                this._activeRequest = false
            }).bind(this))
        };
        
        this.fetchResults = function (e) {
			___mapTriggersLoaded = true;
            var params = this.mergedParams();
            if (this.currentSearch.source !== "page") {
                params.page = 1;
                this.currentSearch.page = 1;
                this.currentSearch.pageDir = null;
                delete params.s_tag
            }
            this.trigger("dataNewSearchResultsLoading", {
                currentSearch: this.currentSearch
            });
            if (this._activeRequest) {
                this._activeRequest.abort()
            }
			
            this._activeRequest = $.get("/wp-content/themes/KING-Canada/library/js/map/api.php", params, (function (data) {
                if (this.currentSearch.source !== "page") {
                    this.currentSearch.logging.s_tag = data.url_tag
                }
                this.dataLoaded("dataNewSearchResultsLoaded", data);
                this._activeRequest = false
            }).bind(this))
        };
        
        this.loadBootstrapData = function () {
            var urlParams = $.query.load(window.location.href).keys,
                bootstrapData = this.$node.data("bootstrapData"),
                bootstrapFilter = function (param) {
                    try { return bootstrapData[param] !== undefined }
					catch (exception) { return false; } 
                };
            this.currentSearch = {
                page: 1,
                pageDir: undefined,
                source: "initial",
                map: {},
                header: {},
                filters: {categoryId: $('input[name=categoryId]:checked').val()},
                logging: {},
                developer: {}
            };
			
            Object.keys(this.SEARCH_PARAMS).forEach(function (category) {
                this.SEARCH_PARAMS[category].filter(bootstrapFilter).forEach(function (param) {
                    this.currentSearch[category][param] = bootstrapData[param]
                }, this)
            }, this);
			
            this.currentSearch.page = (typeof bootstrapData !== "undefined" && typeof bootstrapData.page !== "undefined" ? bootstrapData.page : 1);
            if (this.currentSearch.map.search_by_map && urlParams.zoom) {
                this.currentSearch.map.zoom = urlParams.zoom
            }
			console.log('OK WE TRY TO RENDER NEW!!!');
			//this.currentSearch.source = 'initial';
			
            this.dataLoaded("dataNewSearchResultsLoaded", {
                results: $(".listings-container"),
                filters: $(),
                visible_results_count: bootstrapData.visible_results_count,
                results_count_string: bootstrapData.results_count_string,
                per_month: bootstrapData.per_month,
                center_lat: bootstrapData.center_lat,
                center_lng: bootstrapData.center_lng,
                geo: bootstrapData.geo,
                trebuchet_experience_types: bootstrapData.trebuchet_experience_types,
                pagination_mode: bootstrapData.pagination_mode,
                pagination_footer: bootstrapData.pagination_footer
            });
        };
        this.dataLoaded = function (eventName, data) {
        	console.log("this.dataLoaded: " + eventName);
        	console.log(data);
	
            var $results, 
				results = data.results,
                $filters = $(data.filters),
                listingData,
				api = this;
            if (eventName === "dataMoreSearchResultsLoaded" && this.currentSearch.logging.s_tag) {
                results = results.replace(this.attr.sTagRegex, "$1" + this.currentSearch.logging.s_tag)
            }
            $results = $(results);
            listingData = $results.find(".listing").map(function () {
                return $(this).data()
            }).get();
			
			/*
			console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
			console.log(eventName);
			$('ul.listings-container').html($results);
			console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
			*/
			
            this.trigger(eventName, {
                listingData: listingData,
                $listings: $results.clone(),
                currentSearch: this.currentSearch,
                perMonth: data.per_month,
                center_lat: data.center_lat,
                center_lng: data.center_lng,
                geo: data.geo,
                trebuchet_experience_types: data.trebuchet_experience_types
            });
			
            if ($filters.length) {
                this.trigger("dataFiltersLoaded", {
                    $filters: $filters,
                    currentFilters: this.currentSearch.filters,
                    perMonth: data.per_month
                })
            }
			
            this.triggerResultsLoaded(data);
        };
        this.triggerResultsLoaded = function (data) {
            this.trigger("dataResultsLoaded", {
                count: data.visible_results_count,
                page: this.currentSearch.page,
                pageDir: this.currentSearch.pageDir,
                results_count_string: data.results_count_string,
                pagination_mode: data.pagination_mode,
                pagination_html: data.pagination_footer,
                source: this.currentSearch.source
            });
        };
        this.searchFromFilters = function (e, params) {
			console.log('searchFromFilters');
			console.log(params);
            if (params.changed) {
                this.currentSearch.filters = params.filterData;
                this.currentSearch.source = "filters";
                this.fetchResults()
            }
        };
        this.searchFromHeader = function (e, params) {
            if (params.location && params.location !== this.currentSearch.header.location) {
                delete this.currentSearch.map.sw_lat;
                delete this.currentSearch.map.sw_lng;
                delete this.currentSearch.map.ne_lat;
                delete this.currentSearch.map.ne_lng;
                delete this.currentSearch.map.search_by_map;
                delete this.currentSearch.map.zoom;
                delete this.currentSearch.filters.neighborhoods;
                this.trigger("uiLocationChanged")
            }
            this.currentSearch.header = params;
            this.currentSearch.source = "header";
            this.fetchResults()
        };
        this.searchFromMap = function (e, params) {
            delete this.currentSearch.filters.neighborhoods;
            this.currentSearch.map = params;
            this.currentSearch.source = "map";
            this.fetchResults()
        };
        this.updateFromMap = function (e, params) {
            if (this.currentSearch.map.search_by_map) {
                this.currentSearch.map = params
            }
        };
        this.updateFromPagination = function (e, data) {
            this.currentSearch.page = data.page;
            this.currentSearch.source = "page";
            this.fetchResults()
        };
        this.after("initialize", function () {
            this.loadBootstrapData();
            this.on("uiHeaderFieldsChanged", this.searchFromHeader);
            this.on("uiFiltersChanged", this.searchFromFilters);
            this.on("uiMapBoundsChanged", this.searchFromMap);
            this.on("uiAdditionalPageRequested", this.fetchMore);
            this.on("uiPageRequested", this.updateFromPagination);
			
			ManualFilterTrigger = this;
        })
    });
    provide("map_search/MapSearchData", MapSearchData)
})();

!(function () {
    var Map = require("map_search/Map"),
        History = require("map_search/History"),
        Sidebar = require("map_search/Sidebar"),
        SearchHeader = require("map_search/SearchHeader"),
        SearchInForm = require("map_search/SearchInForm"),
        FindMyLocation = require("map_search/FindMe"),
        MapSearchData = require("map_search/MapSearchData");
    var MapSearchPage = flight.component(function () {
        this.after("initialize", function () {
            Map.attachTo(".map");
            History.attachTo(this.$node);
            Sidebar.attachTo(".___sidebar");
            SearchHeader.attachTo(".search-header");
            SearchInForm.attachTo(".searchLocFrm");
            FindMyLocation.attachTo(".__location");
            MapSearchData.attachTo(this.$node);
        })
    });
    provide("map_search/MapSearchPage", MapSearchPage)
})();

/*
UTF8 = {
	encode: function(s){
		for(var c, i = -1, l = (s = s.split("")).length, o = String.fromCharCode; ++i < l;
			s[i] = (c = s[i].charCodeAt(0)) >= 127 ? o(0xc0 | (c >>> 6)) + o(0x80 | (c & 0x3f)) : s[i]
		);
		return s.join("");
	},
	decode: function(s){
		for(var a, b, i = -1, l = (s = s.split("")).length, o = String.fromCharCode, c = "charCodeAt"; ++i < l;
			((a = s[i][c](0)) & 0x80) &&
			(s[i] = (a & 0xfc) == 0xc0 && ((b = s[i + 1][c](0)) & 0xc0) == 0x80 ?
			o(((a & 0x03) << 6) + (b & 0x3f)) : o(128), s[++i] = "")
		);
		return s.join("");
	}
};*/
var UTF8 = {
 
    // public method for url encoding
    encode : function (string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";
 
        for (var n = 0; n < string.length; n++) {
 
            var c = string.charCodeAt(n);
 
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
 
        }
 
        return utftext;
    },
 
    // public method for url decoding
    decode : function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
 
        while ( i < utftext.length ) {
 
            c = utftext.charCodeAt(i);
 
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i+1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utftext.charCodeAt(i+1);
                c3 = utftext.charCodeAt(i+2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
 
        }
 
        return string;
    }
 
}
