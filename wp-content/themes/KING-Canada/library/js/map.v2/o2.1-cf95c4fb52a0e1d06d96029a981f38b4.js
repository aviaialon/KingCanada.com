! function () {
    var ENV = {
        NODE: false,
        ENDER: false,
        either: function (node, ender) {
            if (ENV.NODE || !ender) {
                return node
            }
            return ender
        },
        run: function (node, ender) {
            return ENV.either(node, ender)()
        }
    };
    if (typeof module !== "undefined" && typeof require !== "undefined") {
        ENV.NODE = true
    } else {
        if (typeof require !== "undefined" && typeof provide !== "undefined") {
            ENV.ENDER = true
        }
    }
    ENV.run(function () {
        module.exports = ENV
    }, function () {
        provide("std::env", ENV)
    })
}();
! function () {
    var _ = require("underscore");
    _.mixin({
        args: function (args, start, end) {
            if (!start) {
                start = 0
            }
            if (!end) {
                end = args.length
            }
            return Array.prototype.slice.call(args, start, end)
        },
        log: function (msg) {
            if (typeof console !== "undefined" && console.log) {
                console.log(msg)
            }
            return msg
        },
        inherit: (function () {
            var Temp = function () {};
            return function (Base, Derived) {
                Temp.prototype = Base.prototype;
                Derived.prototype = new Temp();
                Derived.prototype.constructor = Derived;
                _.extend(Derived, Base);
                return Derived
            }
        }()),
        nextTick: function (callback) {
            if (typeof process !== "undefined" && process.nextTick) {
                process.nextTick(callback)
            } else {
                if (typeof window !== "undefined" && window.setImmediate) {
                    window.setImmediate(callback)
                } else {
                    setTimeout(callback, 0)
                }
            }
        },
        combine: function () {
            var fns = _.chain(arguments).args().flatten().value();
            return function () {
                var args = _.args(arguments),
                    index = 0,
                    length = fns.length;
                for (index, length; index < length; index++) {
                    fns[index].apply(null, args)
                }
            }
        },
        callback: function () {
            var args = _.chain(arguments).args().flatten().hashify().value().optional("ctx", null, {
                type: "object"
            }).required("callback").many("rest").end;
            if (args.callback) {
                args.callback.apply(args.ctx, args.rest)
            }
        },
        hashify: (function () {
            var propCheck = function (propName, check, truthFn) {
                var val, invert = false;
                if (_.has(check, propName)) {
                    val = check[propName];
                    if (typeof val === "object" && _.has(val, "not")) {
                        val = val[propName];
                        invert = true
                    }
                    return !(invert === truthFn(val))
                }
                return true
            };
            var checkArgument = function (arg, index, args, check) {
                var passed = true,
                    LENGTH = "length",
                    GTLENGTH = ">" + LENGTH,
                    GTELENGTH = ">=" + LENGTH,
                    LTLENGTH = "<" + LENGTH,
                    LTELENGTH = "<=" + LENGTH;
                if (typeof check === "function") {
                    return check(arg, index, args)
                }
                if (typeof check === "boolean") {
                    return check
                }
                passed = propCheck("type", check, function (val) {
                    return typeof arg === val
                });
                passed = passed && propCheck("instance", check, function (val) {
                    return arg instanceof val
                });
                passed = passed && propCheck(LENGTH, check, function (val) {
                    return args.length === val
                });
                passed = passed && propCheck(GTLENGTH, check, function (val) {
                    return args.length > val
                });
                passed = passed && propCheck(GTELENGTH, check, function (val) {
                    return args.length >= val
                });
                passed = passed && propCheck(LTLENGTH, check, function (val) {
                    return args.length < val
                });
                passed = passed && propCheck(LTELENGTH, check, function (val) {
                    return args.length <= val
                });
                return passed
            };
            return function (args) {
                var next = 0;
                if (!_.isArray(args)) {
                    args = _.args(args)
                }
                return {
                    end: {},
                    required: function (name) {
                        this.end[name] = args[next];
                        next++;
                        return this
                    },
                    optional: function (name, defaultValue, check) {
                        var curr = args[next],
                            value = defaultValue,
                            passed = checkArgument(curr, next, args, check);
                        if (passed) {
                            next++;
                            value = curr
                        }
                        this.end[name] = value;
                        return this
                    },
                    many: function (name, check) {
                        var curr, values = [],
                            passed = true;
                        if (check) {
                            while (passed && next < args.length) {
                                curr = args[next];
                                passed = checkArgument(curr, next, args, check);
                                if (passed) {
                                    next++;
                                    values.push(curr)
                                }
                            }
                        } else {
                            values = args.slice(next)
                        }
                        this.end[name] = values;
                        return this
                    }
                }
            }
        }())
    });
    if (typeof provide !== "undefined") {
        provide("std::utils", _)
    } else {
        module.exports = _
    }
}();
! function () {
    var ENV = typeof provide === "undefined" ? require("./env") : require("std::env");
    var _ = require(ENV.either("./utils", "std::utils"));
    var EventEmitter = function () {
        this._events = {};
        this._maxListeners = 10
    };
    EventEmitter.prototype.listeners = function (evt) {
        if (!this._events[evt]) {
            this._events[evt] = []
        }
        return this._events[evt]
    };
    EventEmitter.prototype.setMaxListeners = function (max) {
        this._maxListeners = max
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener = function (evt, handler) {
        this.emit("newListener", handler);
        var listeners = this.listeners(evt);
        listeners.push(handler);
        if (listeners.length >= this._maxListeners) {
            _.log("Warning: " + this + " has more than " + this._maxListeners + " attached to event " + evt + ".")
        }
        return this
    };
    EventEmitter.prototype.once = function (evt, handler) {
        var wrapper = {
            listener: handler
        };
        this.listeners(evt).push(wrapper);
        this.emit("newListener", wrapper);
        return this
    };
    EventEmitter.prototype.removeListener = function (evt, handler) {
        var index, listeners = this.listeners(evt);
        for (index = 0; index < listeners.length; index++) {
            if (listeners[index] === handler) {
                listeners.splice(index, 1);
                break
            }
        }
        return this
    };
    EventEmitter.prototype.removeAllListeners = function (evt) {
        this._events[evt] = [];
        return this
    };
    EventEmitter.prototype.emit = function () {
        var index, curr, evt = arguments[0],
            args = _.args(arguments, 1),
            listeners = this._events[evt] || [],
            any = listeners.length !== 0,
            clean = [];
        for (index = 0; index < listeners.length; index++) {
            curr = listeners[index];
            if (typeof curr === "object") {
                clean.push(index);
                curr = curr.listener
            }
            curr.apply(this, args)
        }
        for (index = 0; index < clean.length; index++) {
            listeners.splice(clean[index] - index, 1)
        }
        return any
    };
    ENV.run(function () {
        module.exports = EventEmitter
    }, function () {
        provide("std::emitter", EventEmitter)
    })
}();
! function () {
    var ENV = require(typeof provide === "undefined" ? "./env" : "std::env");
    var _ = require(ENV.either("./utils", "std::utils"));
    var EventEmitter = ENV.run(function () {
        return require("events").EventEmitter
    }, function () {
        return require("std::emitter")
    });
    var DONE_EVT = "done",
        CANCEL_EVT = "cancel";
    var FlowObject = function (dependencies, callback) {
        var index, length, dep, guts, depDone, isCancelled = false,
            isReady = true,
            err = null;
        this._internal = {
            emitter: new EventEmitter(),
            count: 0,
            isDone: false,
            isCancelled: false,
            err: null,
            data: null,
            callback: callback
        };
        for (index = 0, length = dependencies.length; index < length; index++) {
            dep = dependencies[index];
            guts = dep._internal;
            isCancelled = isCancelled || guts.isCancelled;
            err = guts.err;
            depDone = guts.isDone && !isCancelled;
            isReady = isReady && depDone;
            if (isCancelled) {
                break
            }
            if (!depDone) {
                this._internal.count++;
                dep.done(buildNotify(this));
                dep.cancel(buildCancel(this))
            }
        }
        if (isReady) {
            callDeferred(this)
        }
        if (isCancelled) {
            cancel(this, err)
        }
    };
    FlowObject.prototype.isDone = function () {
        return this._internal.isDone
    };
    FlowObject.prototype.isCancelled = function () {
        return this._internal.isCancelled
    };
    FlowObject.prototype.error = function () {
        return this._internal.err
    };
    FlowObject.prototype.data = function () {
        return this._internal.data
    };
    FlowObject.prototype.done = function (fn) {
        var guts = this._internal;
        if (!guts.isCancelled) {
            fn = _.bind(fn, this);
            if (guts.isDone) {
                fn(guts.data)
            } else {
                guts.emitter.on(DONE_EVT, fn)
            }
        }
        return this
    };
    FlowObject.prototype.cancel = function (fn) {
        var guts = this._internal;
        if (!guts.isDone) {
            fn = _.bind(fn, this);
            if (guts.isCancelled) {
                fn(guts.err)
            } else {
                guts.emitter.on(CANCEL_EVT, fn)
            }
        }
        return this
    };
    FlowObject.prototype.removeDone = function (fn) {
        this._internal.emitter.removeListener(DONE_EVT, fn)
    };
    FlowObject.prototype.removeCancelled = function (fn) {
        this._internal.emitter.removeListener(CANCEL_EVT, fn)
    };
    var callDeferred = function (waiting) {
        var guts = waiting._internal;
        if (!guts.isCancelled && !guts.isDone) {
            guts.callback.call(waiting, doneCallback(waiting), cancelCallback(waiting))
        }
    };
    var notify = function (waiting) {
        var guts = waiting._internal;
        guts.count--;
        if (guts.count === 0) {
            callDeferred(waiting)
        }
    };
    var done = function (waiting, data) {
        var guts = waiting._internal;
        if (guts.isDone || guts.isCancelled) {
            return
        }
        guts.isDone = true;
        guts.data = data;
        guts.emitter.emit(DONE_EVT, data);
        guts.emitter = new EventEmitter()
    };
    var cancel = function (waiting, err) {
        var guts = waiting._internal;
        if (guts.isDone || guts.isCancelled) {
            return
        }
        guts.isCancelled = true;
        guts.err = err;
        guts.emitter.emit(CANCEL_EVT, err);
        guts.emitter = new EventEmitter()
    };
    var buildNotify = function (waiting) {
        return _.once(function () {
            notify(waiting)
        })
    };
    var buildCancel = function (waiting) {
        return _.once(function (err) {
            cancel(waiting, err)
        })
    };
    var doneCallback = function (waiting) {
        return _.once(function (data) {
            done(waiting, data)
        })
    };
    var cancelCallback = function (waiting) {
        return _.once(function (err) {
            cancel(waiting, err)
        })
    };
    var flow = function () {
        var args = _.chain(arguments).args().flatten().hashify().value().many("dependencies", {
            instance: FlowObject
        }).required("callback").end;
        return new FlowObject(args.dependencies, args.callback)
    };
    ENV.run(function () {
        module.exports = flow
    }, function () {
        provide("std::wait", flow)
    })
}();
! function () {
    var ENV = require(typeof provide === "undefined" ? "./env" : "std::env");
    var wait = require(ENV.either("./wait", "std::wait"));
    var AsyncQueue = function () {
        this._internal = {
            promise: wait(function (done) {
                done()
            })
        }
    };
    AsyncQueue.prototype.enqueue = function (fn) {
        var guts = this._internal;
        var promise = guts.promise = wait(guts.promise, fn);
        promise.cancel(function () {
            if (guts.promise === this) {
                guts.promise = wait(function (done) {
                    done()
                })
            }
        });
        return promise
    };
    AsyncQueue.prototype.top = function () {
        return this._internal.promise
    };
    if (typeof provide === "undefined") {
        module.exports = AsyncQueue
    } else {
        provide("std::async-queue", AsyncQueue)
    }
}();
! function () {
    var ENV = require(typeof provide === "undefined" ? "./env" : "std::env");
    var EventEmitter = ENV.run(function () {
        return require("events").EventEmitter
    }, function () {
        return require("std::emitter")
    });
    var _ = require(ENV.either("./utils", "std::utils")),
        wait = require(ENV.either("./wait", "std::wait"));
    var SET_PREFIX = "set:",
        DESTROY_PREFIX = "destroy:",
        INVALIDATE_PREFIX = "invalidate:",
        CHANGE_PREFIX = "change:";
    var Cache = _.inherit(EventEmitter, function () {
        EventEmitter.call(this);
        this._data = {};
        this._loading = {};
        init(this)
    });
    Cache.serialize = function (property, serializers) {
        var type, propSerializer;
        this.serial = this.serial || {};
        propSerializer = this.serial[property] = this.serial[property] || {};
        for (type in serializers) {
            if (_.has(serializers, type)) {
                propSerializer[type] = serializers[type]
            }
        }
    };
    Cache.prototype.get = function (key, callback) {
        if (callback) {
            if (this._data.hasOwnProperty(key)) {
                callback(null, this._data[key])
            } else {
                this.load(key, callback)
            }
        } else {
            return waitForAndGet(this, [], key)
        }
    };

    function waitForAndGet(cache, deps, property) {
        var promise = wait(deps, function (done, cancel) {
            cache = typeof cache === "function" ? cache() : cache;
            cache.get(property, function (err, data) {
                err ? cancel(err) : done(data)
            })
        });
        promise.get = function (key, callback) {
            var cacheFn = function () {
                return promise.data()
            };
            if (key && callback) {
                promise.done(function (data) {
                    cacheFn().get(key, callback)
                });
                promise.cancel(function (err) {
                    callback(err)
                });
                return
            }
            return waitForAndGet(cacheFn, [promise], key)
        };
        return promise
    }
    Cache.prototype.invalidate = function (key, callback) {
        var ref = this;
        if (_.has(this._data, key)) {
            delete this._data[key]
        }
        var request = wait(function (done, cancel) {
            ref.load(key, function (err, data) {
                if (err) {
                    cancel(err)
                } else {
                    done(data)
                } if (callback) {
                    callback(err, data)
                }
            })
        });
        this.emit(INVALIDATE_PREFIX + key, request)
    };
    Cache.prototype.load = function (key, callback) {
        var ref = this,
            oldVal = this._data[key];
        if (this._loading[key]) {
            this._loading[key].push(callback);
            return
        }
        this._loading[key] = [];
        if (callback) {
            this._loading[key].push(callback)
        }
        callSerializer(this, "get", key, function (err, data) {
            if (!err) {
                ref._data[key] = data;
                ref.emit(CHANGE_PREFIX + key, oldVal, data);
                _.each(ref._loading[key], function (callback) {
                    callback.call(ref, null, data)
                })
            } else {
                _.each(ref._loading[key], function (callback) {
                    callback.call(ref, err)
                })
            }
            delete ref._loading[key]
        })
    };
    Cache.prototype.set = function (key, value, callback) {
        var oldVal = this._data[key];
        if (oldVal !== value) {
            this._data[key] = value;
            this.emit(SET_PREFIX + key, oldVal, value);
            this.emit(CHANGE_PREFIX + key, oldVal, value);
            callSerializer(this, "set", key, callback)
        } else {
            _.callback(callback, null, value)
        }
    };
    Cache.prototype.destroy = function (key, callback) {
        if (this._data.hasOwnProperty(key)) {
            delete this._data[key];
            this.emit(DESTROY_PREFIX + key, value);
            callSerializer(this, "destroy", key, callback)
        } else {
            _.callback(callback, null)
        }
    };
    var init = function (cache) {
        var prop, propSerializer, CacheClass = cache.constructor,
            serial = CacheClass.serial;
        if (serial) {
            for (prop in serial) {
                if (_.has(serial, prop)) {
                    initProp(cache, serial[prop], prop)
                }
            }
        }
    };
    var initProp = function (cache, propSerializer, prop) {
        if (_.has(propSerializer, "init")) {
            propSerializer.init.call(cache, function (err, data) {
                if (!err) {
                    cache._data[prop] = data
                } else {
                    _.log(err)
                }
            })
        }
    };
    var callSerializer = function (cache, type, key, callback) {
        var propSerializer, CacheClass = cache.constructor,
            serial = CacheClass.serial;
        if (serial) {
            if (_.has(serial, key)) {
                propSerializer = serial[key];
                if (_.has(propSerializer, type)) {
                    _.nextTick(function () {
                        propSerializer[type].call(cache, callback)
                    });
                    return
                }
            }
        }
        _.nextTick(function () {
            _.callback(cache, callback, "No serializer!", null)
        })
    };
    ENV.run(function () {
        module.exports = Cache
    }, function () {
        provide("std::cache", Cache)
    })
}();
! function () {
    var ENV = require(typeof provide === "undefined" ? "./env" : "std::env");
    var EventEmitter = ENV.run(function () {
        return require("events").EventEmitter
    }, function () {
        return require("std::emitter")
    });
    var _ = require(ENV.either("./utils", "std::utils"));
    var Alarm = _.inherit(EventEmitter, function (time, looping) {
        EventEmitter.call(this);
        this.time = time || 0;
        this._internal = {
            on: false,
            looping: looping || false
        }
    });
    Alarm.prototype.start = function () {
        if (!this._internal.on) {
            this._internal.on = true;
            this._internal.countdown = 0;
            this.emit("start");
            tick(this, this.time)
        }
    };
    Alarm.prototype.stop = function () {
        if (this._internal.on) {
            this._internal.on = false;
            this._internal.countdown = 0;
            this.emit("stop")
        }
    };
    var tick = function (alarm, time) {
        var prevTime = new Date;
        setTimeout(function () {
            var delta = (new Date) - prevTime,
                guts = alarm._internal;
            if (guts.on) {
                alarm.emit("tick", delta, time);
                if (guts.looping) {
                    tick(alarm, time)
                } else {
                    alarm.stop()
                }
            }
        }, time)
    };
    ENV.run(function () {
        module.exports = Alarm
    }, function () {
        provide("std::alarm", Alarm)
    })
}();
! function () {
    var ENV = require(typeof provide === "undefined" ? "./env" : "std::env");
    var Alarm = ENV.run(function () {
        return require("./alarm")
    }, function () {
        return require("std::alarm")
    });

    function Timing(granularity) {
        this._internal = {
            a: new Alarm(granularity, true)
        };
        this._internal.a.start()
    }
    Timing.prototype.setInterval = function (handler, time) {
        var wrapper = buildWrapper(handler, time);
        this._internal.a.on("tick", wrapper);
        return wrapper
    };
    Timing.prototype.clearInterval = function (handler) {
        this._internal.a.removeListener("tick", handler)
    };
    Timing.prototype.setTimeout = function (handler, time) {
        var ref = this;
        var wrapper = buildWrapper(function () {
            ref._internal.a.removeListener("tick", wrapper);
            handler()
        }, time);
        wrapper._isTimeout = true;
        this._internal.a.on("tick", wrapper);
        return wrapper
    };
    Timing.prototype.clearTimeout = function (handler) {
        if (handler) {
            this._internal.a.removeListener("tick", handler)
        } else {
            var index, length, curr, ls = this._internal.a.listeners("tick"),
                timeouts = [];
            for (index = 0, length = ls.length; index < length; index++) {
                curr = ls[index];
                if (curr._isTimeout) {
                    timeouts.push(curr)
                }
            }
            for (index = 0, length = timeouts.length; index < length; index++) {
                this._internal.a.removeListener("tick", timeouts[index])
            }
        }
    };
    Timing.prototype.start = function () {
        this._internal.a.start()
    };
    Timing.prototype.stop = function () {
        this._internal.a.stop()
    };

    function buildWrapper(handler, time) {
        var elapsed = 0;
        return function (delta) {
            elapsed += delta;
            if (elapsed >= time) {
                elapsed -= time;
                handler()
            }
        }
    }
    ENV.run(function () {
        module.exports = Timing
    }, function () {
        provide("std::timing", Timing)
    })
}();
require = function (a, b, c) {
    function d(c, f) {
        if (!b[c]) {
            if (!a[c]) {
                var g = "function" == typeof require && require;
                if (!f && g) {
                    return g(c, !0)
                }
                if (e) {
                    return e(c, !0)
                }
                throw new Error("Cannot find module '" + c + "'")
            }
            var h = b[c] = {
                exports: {}
            };
            a[c][0].call(h.exports, function (b) {
                var e = a[c][1][b];
                return d(e ? e : b)
            }, h, h.exports)
        }
        return b[c].exports
    }
    for (var e = "function" == typeof require && require, f = 0; f < c.length; f++) {
        d(c[f])
    }
    return d
}({
    1: [
        function (a, b) {
            b.exports = function () {
                function a() {}
                return a.prototype.on = function (a, b) {
                    a && b && (this.queue || (this.queue = {}), this.queue[a] || (this.queue[a] = []), this.queue[a].push(b))
                }, a.prototype.off = function (a, b) {
                    return a ? (this.queue && this.queue[a] && (this.queue[a] = b ? this.queue[a].filter(function (a) {
                        return a !== b
                    }) : []), void 0) : (this.queue = {}, void 0)
                }, a.prototype.emit = function (a) {
                    var b = Array.prototype.slice.call(arguments, 1);
                    a && this.queue && this.queue[a] && this.queue[a].forEach(function (a) {
                        a.apply(this, b)
                    }, this)
                }, a.mixin = function (b) {
                    Object.keys(a.prototype).forEach(function (c) {
                        b.prototype[c] = a.prototype[c]
                    })
                }, a
            }
        }, {}
    ],
    2: [
        function (a, b) {
            b.exports = function (a, b) {
                function c(b, d) {
                    if (!b) {
                        throw new Error
                    }
                    if (d || (d = c.defaultOptions), this.$element = a(b), 1 !== this.$element.length || this.$element.data()["o2-modal"]) {
                        throw new Error
                    }
                    if (this.$trigger = a(d.trigger), this.$trigger.length < 1) {
                        this.$trigger = a()
                    } else {
                        if (this.$trigger.data()["o2-modal"]) {
                            throw new Error
                        }
                    }
                    this.$container = a(d.container), 1 !== this.$container.length && (this.$container = a("body")), this.$element.parents().is(this.$container) || this.$element.appendTo(this.$container), null == this.$container.data()["o2-modal-instances"] && (this.$container.data()["o2-modal-instances"] = [], this.$container.data()["o2-modal-open"] = 0), this.$container.is("body") || this.$element.addClass("modal-absolute"), this.$element.attr("aria-hidden", "true").reflow().on("click.o2-modal", '[data-behavior="modal-close"]', this.close.bind(this)), this.$trigger.on("click.o2-modal", this.open.bind(this)), d.sticky || (this.$element.on("click.o2-modal", function (b) {
                        a(b.target).is(".modal-cell") && this.close()
                    }.bind(this)), this.$container.on("keyup.o2-modal", function (b) {
                        var c = 27;
                        b.which == c && a(b.target).is(":not(input)") && this.close()
                    }.bind(this))), this.$element.data()["o2-modal"] = this, this.$trigger.length && (this.$trigger.data()["o2-modal"] = this), this.$container.data()["o2-modal-instances"].push(this)
                }
                return b.mixin(c), c.defaultOptions = {
                    sticky: !1
                }, c.bind = function (b) {
                    var c = this,
                        d = [];
                    return a(b || "body").find('[role="dialog"]').each(function () {
                        var b = a(this),
                            e = a(b.data("trigger")),
                            f = a(b.data("container")),
                            g = !! b.data("sticky");
                        if (!b.data()["o2-modal"]) {
                            try {
                                d.push(new c(b, {
                                    trigger: e,
                                    container: f,
                                    sticky: g
                                }))
                            } catch (h) {}
                        }
                    }), d
                }, c.prototype.open = function (a) {
                    a && a.preventDefault(), "true" === this.$element.attr("aria-hidden") && this.$element.attr("aria-hidden", "false").afterTransition(function () {
                        this.$element.reflow(), 0 === this.$container.data()["o2-modal-open"]++ && this.$container.addClass("modal-open"), this.emit("open", this)
                    }.bind(this))
                }, c.prototype.close = function (a) {
                    a && a.preventDefault(), "false" === this.$element.attr("aria-hidden") && this.$element.removeAttr("aria-hidden").afterTransition(function () {
                        this.$element.attr("aria-hidden", "true").reflow(), 1 === this.$container.data()["o2-modal-open"]-- && this.$container.removeClass("modal-open"), this.emit("close", this)
                    }.bind(this))
                }, c.prototype.dispose = function () {
                    this.close(), delete this.$element.data()["o2-modal"], this.$element.removeClass("modal-absolute").removeAttr("aria-hidden").off(".o2-modal").detach(), this.$trigger.length && delete this.$trigger.data()["o2-modal"], this.$trigger.off(".o2-modal"), this.$container.data()["o2-modal-instances"] = this.$container.data()["o2-modal-instances"].filter(function (a) {
                        return a !== this
                    }.bind(this)), 0 === this.$container.data()["o2-modal-instances"].length && (delete this.$container.data()["o2-modal-instances"], delete this.$container.data()["o2-modal-open"], this.$container.off(".o2-modal"))
                }, c
            }
        }, {}
    ],
    3: [
        function (a, b) {
            b.exports = function (a, b) {
                function c(b) {
                    if (!b) {
                        throw new Error
                    }
                    if (this.$element = a(b), 1 !== this.$element.length || this.$element.data()["o2-tabs"]) {
                        throw new Error
                    }
                    this.$element.on("click.o2-tabs", '[role="tab"]', this.activateTarget.bind(this)).data()["o2-tabs"] = this
                }
                return b.mixin(c), c.bind = function (b) {
                    var c = this,
                        d = [];
                    return a(b || "body").find('[role="tablist"]').each(function () {
                        if (!a(this).data()["o2-tabs"]) {
                            try {
                                d.push(new c(a(this)))
                            } catch (b) {}
                        }
                    }), d
                }, c.prototype.activateTarget = function (b) {
                    var c = a(b.currentTarget);
                    b.preventDefault(), c.attr("aria-disabled") || this.activate(a(b.currentTarget).attr("aria-controls"))
                }, c.prototype.activate = function (b) {
                    var c, d, e, f, g;
                    b && (d = a("#" + b), f = this.$element.find('[aria-controls="' + b + '"]'), 1 === d.length && 1 === f.length && (g = this.$element.find('[aria-selected="true"]'), c = g.attr("aria-controls"), e = a(c ? "#" + c : ""), c !== b && (e.attr("aria-hidden", "true").reflow(), d.attr("aria-hidden", "false").reflow(), g.attr("aria-selected", "false").reflow(), f.attr("aria-selected", "true").reflow(), this.emit("activate", this, b))))
                }, c.prototype.dispose = function () {
                    delete this.$element.data()["o2-tabs"], this.$element.off(".o2-tabs")
                }, c
            }
        }, {}
    ],
    4: [
        function (a, b) {
            b.exports = function (a, b) {
                function c(b, c, d) {
                    var e;
                    if (!b || !c) {
                        throw new Error
                    }
                    if (d || (d = {}), this.$element = a(b), this.$trigger = a(c), 1 !== this.$element.length || 1 !== this.$trigger.length || this.$element.data()["o2-tooltip"] || this.$trigger.data()["o2-tooltip"]) {
                        throw new Error
                    }
                    switch (this.$element.appendTo(a("body")), e = this.$trigger.attr("title"), e && (this.$trigger.attr("aria-label", e), this.$trigger.removeAttr("title")), this.$element.attr("aria-hidden", "true").reflow(), d.event) {
                    case "none":
                        break;
                    case "click":
                        this.$trigger.on("click.o2-tooltip", this.toggle.bind(this));
                        break;
                    case "hover":
                    default:
                        this.$trigger.on("mouseenter.o2-tooltip", this.show.bind(this)).on("mouseleave.o2-tooltip", this.hide.bind(this))
                    }
                    this.$element.data()["o2-tooltip"] = this, this.$trigger.data()["o2-tooltip"] = this
                }
                return b.mixin(c), c.template = '<div class="tooltip {{position}}" role="tooltip">  <p class="panel-body">{{text}}</p></div>', c.bind = function (b) {
                    var d = this,
                        e = [];
                    return b = b || "body", a(b).find('[role="tooltip"]').each(function () {
                        var b = a(this),
                            c = a(b.data("trigger")),
                            f = b.data("event");
                        if (!b.data()["o2-tooltip"]) {
                            try {
                                e.push(new d(b, c, {
                                    event: f
                                }))
                            } catch (g) {}
                        }
                    }), a(b).find('[data-behavior="tooltip"][title]').each(function () {
                        var b, f, g = a(this),
                            h = g.data("position"),
                            i = g.data("event"),
                            j = g.attr("title");
                        if (!g.data()["o2-tooltip"]) {
                            switch (h) {
                            case "bottom":
                                f = "tooltip-top-middle";
                                break;
                            case "right":
                                f = "tooltip-left-middle";
                                break;
                            case "left":
                                f = "tooltip-right-middle";
                                break;
                            case "top":
                            default:
                                f = "tooltip-bottom-middle"
                            }
                            b = a(c.template.replace("{{position}}", f).replace("{{text}}", j)).appendTo(g.parent());
                            try {
                                e.push(new d(b, g, {
                                    event: i
                                }))
                            } catch (k) {}
                        }
                    }), e
                }, c.prototype.show = function (a) {
                    a && a.preventDefault(), "true" === this.$element.attr("aria-hidden") && (this.initializePosition(), this.$element.attr("aria-hidden", "false").reflow(), this.emit("show", this))
                }, c.prototype.hide = function (a) {
                    a && a.preventDefault(), "false" === this.$element.attr("aria-hidden") && this.$element.removeAttr("aria-hidden").afterTransition(function () {
                        this.$element.attr("aria-hidden", "true").reflow(), this.emit("hide", this)
                    }.bind(this))
                }, c.prototype.toggle = function (a) {
                    "true" === this.$element.attr("aria-hidden") ? this.show(a) : this.hide(a)
                }, c.prototype.dispose = function () {
                    this.hide(), delete this.$element.data()["o2-tooltip"], this.$element.removeAttr("aria-hidden").detach(), delete this.$trigger.data()["o2-tooltip"], this.$trigger.off(".o2-tooltip")
                }, c.caretSize = 12, c.prototype.initializePosition = function () {
                    var a, b, d, e = {}, f = ["top", "bottom", "left", "right"];
                    for (b = {
                        height: this.$trigger.outerHeight() || parseInt(this.$trigger.attr("height")) || 0,
                        width: this.$trigger.outerWidth() || parseInt(this.$trigger.attr("width")) || 0,
                        offset: this.$trigger.offset() || {
                            top: 0,
                            left: 0
                        }
                    }, d = {
                        height: this.$element.outerHeight(),
                        width: this.$element.outerWidth(),
                        classes: this.$element.attr("class").split(" ")
                    }, a = 0; a < d.classes.length && (0 !== d.classes[a].indexOf("tooltip-") || (d.classes = d.classes[a].split("-").slice(1), -1 === f.indexOf(d.classes[0]))); a++) {}
                    switch (d.classes[0]) {
                    case "top":
                        e.top = b.offset.top + b.height + c.caretSize;
                        break;
                    case "bottom":
                        e.top = b.offset.top - d.height - c.caretSize;
                        break;
                    case "left":
                        e.left = b.offset.left + b.width + c.caretSize;
                        break;
                    case "right":
                        e.left = b.offset.left - d.width - c.caretSize;
                        break;
                    default:
                        throw new Error
                    }
                    if (e.hasOwnProperty("top")) {
                        switch (d.classes[1]) {
                        case "left":
                            e.left = b.offset.left;
                            break;
                        case "middle":
                            e.left = b.offset.left + b.width / 2 - d.width / 2;
                            break;
                        case "right":
                            e.left = b.offset.left + b.width - d.width;
                            break;
                        default:
                            throw new Error
                        }
                    } else {
                        switch (d.classes[1]) {
                        case "top":
                            e.top = b.offset.top;
                            break;
                        case "middle":
                            e.top = b.offset.top + b.height / 2 - d.height / 2;
                            break;
                        case "bottom":
                            e.top = b.offset.top + b.height - d.height;
                            break;
                        default:
                            throw new Error
                        }
                    }
                    this.$element.css(e)
                }, c
            }
        }, {}
    ],
    eS0Sby: [
        function (a, b) {
            b.exports = function (b, c) {
                function d(a) {
                    var b = [];
                    return b = b.concat(g.bind(a)), b = b.concat(h.bind(a)), b = b.concat(i.bind(a))
                }

                function e() {
                    c(window).off("load.o2")
                }
                var f = a("./emitter")(),
                    g = a("./modules/modal")(c, f),
                    h = a("./modules/tabs")(c, f),
                    i = a("./modules/tooltip")(c, f);
                return a("./transitions")(b, c), a("./reflow")(c), c(window).on("load.o2", d.bind(this, null)), {
                    bind: d,
                    suppressBind: e,
                    Modal: g,
                    Tabs: h,
                    Tooltip: i
                }
            }(window, $)
        }, {
            "./emitter": 1,
            "./modules/modal": 2,
            "./modules/tabs": 3,
            "./modules/tooltip": 4,
            "./reflow": 6,
            "./transitions": 7
        }
    ],
    6: [
        function (a, b) {
            b.exports = function (a) {
                return a.fn.reflow ? a : (a.extend(a.fn, {
                    reflow: function () {
                        return this.each(function () {
                            a(this).addClass("o2-reflow").removeClass("o2-reflow").height()
                        }), this
                    }
                }), a)
            }
        }, {}
    ],
    7: [
        function (a, b) {
            b.exports = function (a, b) {
                return b.Transitions ? b : (b.Transitions = {
                    timeout: 600,
                    events: {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend"
                    },
                    eventName: function () {
                        var a, b = !1;
                        for (a in this.events) {
                            if ("undefined" != typeof document.body.style[a]) {
                                b = this.events[a];
                                break
                            }
                        }
                        return this.eventName = function () {
                            return b
                        }, b
                    },
                    supported: function () {
                        return this.eventName() !== !1
                    }
                }, b.extend(b.fn, {
                    afterTransition: function (c, d) {
                        var e, f;
                        return d = Number(d), (!d || 0 > d) && (d = b.Transitions.timeout), "function" != typeof c && (c = function () {}), e = b.Transitions.eventName(), this.each(function () {
                            if (f = b.Event("transitionend"), f.target = f.currentTarget = this, e) {
                                var g, h = !1,
                                    i = function (d) {
                                        h || (h = !0, c.call(this, d || f), b(this).off(e, i), a.clearTimeout(g))
                                    }.bind(this);
                                b(this).on(e, i), g = a.setTimeout(i, d)
                            } else {
                                c.call(this, f)
                            }
                        }), this
                    }
                }), b)
            }
        }, {}
    ],
    o2: [
        function (a, b) {
            b.exports = a("eS0Sby")
        }, {}
    ]
}, {}, ["eS0Sby"]);
! function ($) {
    function stub() {}
    provide("o2-tooltip", stub);
    var Modal = (function ($, Modal2) {
        var open = false,
            inst, instElement;

        function Modal(element) {
            var wasOpen = open;
            if (!element) {
                return Modal
            }
            element = $(element);
            if (element.is(instElement)) {
                return Modal
            }
            instElement = element;
            if (!element.hasClass("modal-content")) {
                element = element.removeClass("modal").addClass("modal-content").wrap('<div class="modal"><div class="modal-table"><div class="modal-cell"></div></div></div>')
            }
            while (element.length && !element.hasClass("modal")) {
                element = element.parent()
            }

            function instElementTrigger(value) {
                return function () {
                    instElement.trigger("modalTransitionStart", value).trigger("modalTransitionEnd", value).trigger(value ? "modalOpen" : "modalClose")
                }
            }
            if (wasOpen) {
                inst.close()
            }
            inst = element.data("o2-modal");
            if (!inst) {
                inst = new Modal2(element, {
                    sticky: instElement.hasClass("modal-sticky")
                });
                inst.on("open", instElementTrigger(true));
                inst.on("close", instElementTrigger(false))
            }
            if (wasOpen) {
                inst.open()
            }
            return Modal
        }
        Modal.bind = function () {
            $("body").on("click", '.modal .close, .modal [data-modal-close="true"]', function (e) {
                e.preventDefault();
                Modal.close()
            }).on("click", 'a[rel="modal"]', function (e) {
                e.preventDefault();
                Modal($(this).attr("href")).open()
            })
        };
        Modal._toggle = function (value, callback) {
            function cb() {
                if (typeof callback === "function") {
                    callback()
                }
            }
            if (open !== value) {
                open = value;
                if (instElement) {
                    instElement.one("modalTransitionEnd", cb)
                }
                if (inst) {
                    inst[value ? "open" : "close"]()
                }
            } else {
                cb()
            }
            return Modal
        };
        Modal.open = function (callback) {
            return Modal._toggle(true, callback)
        };
        Modal.close = function (callback) {
            return Modal._toggle(false, callback)
        };
        Modal.toggle = function (callback) {
            return Modal._toggle(!open, callback)
        };
        Modal.current = function () {
            return instElement
        };
        Modal.isOpen = function () {
            return open
        };
        return Modal
    })($, require("o2").Modal);
    provide("o2-modal", Modal);
    var Collapsible = (function ($) {
        return {
            bind: function () {
                $("body").on("click", '[data-collapsible-role="toggle"]', function (e) {
                    var $target = $(e.currentTarget),
                        $panel = $($target.attr("href")),
                        $icon = $target.find('[data-collapsible-role="icon"]'),
                        addRight = !$icon.hasClass("icon-caret-right");
                    if ($panel.length) {
                        e.preventDefault();
                        $panel.toggle();
                        $icon.toggleClass("icon-caret-right", addRight);
                        $icon.toggleClass("icon-caret-down", !addRight)
                    }
                })
            }
        }
    })($);
    var Dropdown = (function ($) {
        function Dropdown(element) {
            if (!element) {
                throw new Error()
            }
            this.$element = $(element);
            if (this.$element.length !== 1) {
                throw new Error()
            }
            this.$element.data("dropdown", this)
        }
        Dropdown.bind = function (scope) {
            var instances = [];
            scope = scope || "body";

            function closeAll(exceptInstance) {
                var i, instance;
                for (i = 0; i < instances.length; i++) {
                    instance = instances[i];
                    if (exceptInstance !== instance) {
                        instance.hide()
                    }
                }
            }
            $(scope).find(".dropdown-toggle").each(function () {
                var $this = $(this),
                    $element = $this.parent(),
                    $menu = $element.find(".dropdown-menu"),
                    dropdown;
                if ($element.data("dropdown")) {
                    return
                }
                try {
                    dropdown = new Dropdown($element)
                } catch (e) {}
                if (dropdown) {
                    $menu.on("click", function (e) {
                        if (e.originalEvent) {
                            e.originalEvent.dropdown = dropdown
                        }
                    });
                    $this.on("click", function (e) {
                        e.stopPropagation();
                        closeAll(dropdown);
                        dropdown.toggle()
                    });
                    instances.push(dropdown)
                }
            });
            $(scope).on("click", function (e) {
                e.originalEvent = e.originalEvent || {};
                closeAll(e.originalEvent.dropdown)
            })
        };
        Dropdown.prototype.show = function (e) {
            if (e) {
                e.preventDefault()
            }
            if (this.$element.hasClass("open")) {
                return
            }
            this.$element.addClass("open")
        };
        Dropdown.prototype.hide = function (e) {
            if (e) {
                e.preventDefault()
            }
            if (!this.$element.hasClass("open")) {
                return
            }
            this.$element.removeClass("open")
        };
        Dropdown.prototype.toggle = function (e) {
            if (!this.$element.hasClass("open")) {
                this.show(e)
            } else {
                this.hide(e)
            }
        };
        return Dropdown
    })($);
    $(window).on("load", function () {
        Modal.bind();
        Collapsible.bind();
        Dropdown.bind()
    })
}($);

function FastClick(layer) {
    var oldOnClick, self = this;
    this.trackingClick = false;
    this.trackingClickStart = 0;
    this.targetElement = null;
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.lastTouchIdentifier = 0;
    this.touchBoundary = 10;
    this.layer = layer;
    if (!layer || !layer.nodeType) {
        throw new TypeError("Layer must be a document node")
    }
    this.onClick = function () {
        return FastClick.prototype.onClick.apply(self, arguments)
    };
    this.onMouse = function () {
        return FastClick.prototype.onMouse.apply(self, arguments)
    };
    this.onTouchStart = function () {
        return FastClick.prototype.onTouchStart.apply(self, arguments)
    };
    this.onTouchMove = function () {
        return FastClick.prototype.onTouchMove.apply(self, arguments)
    };
    this.onTouchEnd = function () {
        return FastClick.prototype.onTouchEnd.apply(self, arguments)
    };
    this.onTouchCancel = function () {
        return FastClick.prototype.onTouchCancel.apply(self, arguments)
    };
    if (FastClick.notNeeded(layer)) {
        return
    }
    if (this.deviceIsAndroid) {
        layer.addEventListener("mouseover", this.onMouse, true);
        layer.addEventListener("mousedown", this.onMouse, true);
        layer.addEventListener("mouseup", this.onMouse, true)
    }
    layer.addEventListener("click", this.onClick, true);
    layer.addEventListener("touchstart", this.onTouchStart, false);
    layer.addEventListener("touchmove", this.onTouchMove, false);
    layer.addEventListener("touchend", this.onTouchEnd, false);
    layer.addEventListener("touchcancel", this.onTouchCancel, false);
    if (!Event.prototype.stopImmediatePropagation) {
        layer.removeEventListener = function (type, callback, capture) {
            var rmv = Node.prototype.removeEventListener;
            if (type === "click") {
                rmv.call(layer, type, callback.hijacked || callback, capture)
            } else {
                rmv.call(layer, type, callback, capture)
            }
        };
        layer.addEventListener = function (type, callback, capture) {
            var adv = Node.prototype.addEventListener;
            if (type === "click") {
                adv.call(layer, type, callback.hijacked || (callback.hijacked = function (event) {
                    if (!event.propagationStopped) {
                        callback(event)
                    }
                }), capture)
            } else {
                adv.call(layer, type, callback, capture)
            }
        }
    }
    if (typeof layer.onclick === "function") {
        oldOnClick = layer.onclick;
        layer.addEventListener("click", function (event) {
            oldOnClick(event)
        }, false);
        layer.onclick = null
    }
}
FastClick.prototype.deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0;
FastClick.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent);
FastClick.prototype.deviceIsIOS4 = FastClick.prototype.deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);
FastClick.prototype.deviceIsIOSWithBadTarget = FastClick.prototype.deviceIsIOS && (/OS ([6-9]|\d{2})_\d/).test(navigator.userAgent);
FastClick.prototype.needsClick = function (target) {
    switch (target.nodeName.toLowerCase()) {
    case "button":
    case "select":
    case "textarea":
        if (target.disabled) {
            return true
        }
        break;
    case "input":
        if ((this.deviceIsIOS && target.type === "file") || target.disabled) {
            return true
        }
        break;
    case "label":
    case "video":
        return true
    }
    return (/\bneedsclick\b/).test(target.className)
};
FastClick.prototype.needsFocus = function (target) {
    switch (target.nodeName.toLowerCase()) {
    case "textarea":
        return true;
    case "select":
        return !this.deviceIsAndroid;
    case "input":
        switch (target.type) {
        case "button":
        case "checkbox":
        case "file":
        case "image":
        case "radio":
        case "submit":
            return false
        }
        return !target.disabled && !target.readOnly;
    default:
        return (/\bneedsfocus\b/).test(target.className)
    }
};
FastClick.prototype.sendClick = function (targetElement, event) {
    var clickEvent, touch;
    if (document.activeElement && document.activeElement !== targetElement) {
        document.activeElement.blur()
    }
    touch = event.changedTouches[0];
    clickEvent = document.createEvent("MouseEvents");
    clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
    clickEvent.forwardedTouchEvent = true;
    targetElement.dispatchEvent(clickEvent)
};
FastClick.prototype.determineEventType = function (targetElement) {
    if (this.deviceIsAndroid && targetElement.tagName.toLowerCase() === "select") {
        return "mousedown"
    }
    return "click"
};
FastClick.prototype.focus = function (targetElement) {
    var length;
    if (this.deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf("date") !== 0 && targetElement.type !== "time") {
        length = targetElement.value.length;
        targetElement.setSelectionRange(length, length)
    } else {
        targetElement.focus()
    }
};
FastClick.prototype.updateScrollParent = function (targetElement) {
    var scrollParent, parentElement;
    scrollParent = targetElement.fastClickScrollParent;
    if (!scrollParent || !scrollParent.contains(targetElement)) {
        parentElement = targetElement;
        do {
            if (parentElement.scrollHeight > parentElement.offsetHeight) {
                scrollParent = parentElement;
                targetElement.fastClickScrollParent = parentElement;
                break
            }
            parentElement = parentElement.parentElement
        } while (parentElement)
    }
    if (scrollParent) {
        scrollParent.fastClickLastScrollTop = scrollParent.scrollTop
    }
};
FastClick.prototype.getTargetElementFromEventTarget = function (eventTarget) {
    if (eventTarget.nodeType === Node.TEXT_NODE) {
        return eventTarget.parentNode
    }
    return eventTarget
};
FastClick.prototype.onTouchStart = function (event) {
    var targetElement, touch, selection;
    if (event.targetTouches.length > 1) {
        return true
    }
    targetElement = this.getTargetElementFromEventTarget(event.target);
    touch = event.targetTouches[0];
    if (this.deviceIsIOS) {
        selection = window.getSelection();
        if (selection.rangeCount && !selection.isCollapsed) {
            return true
        }
        if (!this.deviceIsIOS4) {
            if (touch.identifier === this.lastTouchIdentifier) {
                event.preventDefault();
                return false
            }
            this.lastTouchIdentifier = touch.identifier;
            this.updateScrollParent(targetElement)
        }
    }
    this.trackingClick = true;
    this.trackingClickStart = event.timeStamp;
    this.targetElement = targetElement;
    this.touchStartX = touch.pageX;
    this.touchStartY = touch.pageY;
    if ((event.timeStamp - this.lastClickTime) < 200) {
        event.preventDefault()
    }
    return true
};
FastClick.prototype.touchHasMoved = function (event) {
    var touch = event.changedTouches[0],
        boundary = this.touchBoundary;
    if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
        return true
    }
    return false
};
FastClick.prototype.onTouchMove = function (event) {
    if (!this.trackingClick) {
        return true
    }
    if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
        this.trackingClick = false;
        this.targetElement = null
    }
    return true
};
FastClick.prototype.findControl = function (labelElement) {
    if (labelElement.control !== undefined) {
        return labelElement.control
    }
    if (labelElement.htmlFor) {
        return document.getElementById(labelElement.htmlFor)
    }
    return labelElement.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
};
FastClick.prototype.onTouchEnd = function (event) {
    var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;
    if (!this.trackingClick) {
        return true
    }
    if ((event.timeStamp - this.lastClickTime) < 200) {
        this.cancelNextClick = true;
        return true
    }
    this.cancelNextClick = false;
    this.lastClickTime = event.timeStamp;
    trackingClickStart = this.trackingClickStart;
    this.trackingClick = false;
    this.trackingClickStart = 0;
    if (this.deviceIsIOSWithBadTarget) {
        touch = event.changedTouches[0];
        targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
        targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent
    }
    targetTagName = targetElement.tagName.toLowerCase();
    if (targetTagName === "label") {
        forElement = this.findControl(targetElement);
        if (forElement) {
            this.focus(targetElement);
            if (this.deviceIsAndroid) {
                return false
            }
            targetElement = forElement
        }
    } else {
        if (this.needsFocus(targetElement)) {
            if ((event.timeStamp - trackingClickStart) > 100 || (this.deviceIsIOS && window.top !== window && targetTagName === "input")) {
                this.targetElement = null;
                return false
            }
            this.focus(targetElement);
            if (!this.deviceIsIOS4 || targetTagName !== "select") {
                this.targetElement = null;
                event.preventDefault()
            }
            return false
        }
    } if (this.deviceIsIOS && !this.deviceIsIOS4) {
        scrollParent = targetElement.fastClickScrollParent;
        if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
            return true
        }
    }
    if (!this.needsClick(targetElement)) {
        event.preventDefault();
        this.sendClick(targetElement, event)
    }
    return false
};
FastClick.prototype.onTouchCancel = function () {
    this.trackingClick = false;
    this.targetElement = null
};
FastClick.prototype.onMouse = function (event) {
    if (!this.targetElement) {
        return true
    }
    if (event.forwardedTouchEvent) {
        return true
    }
    if (!event.cancelable) {
        return true
    }
    if (!this.needsClick(this.targetElement) || this.cancelNextClick) {
        if (event.stopImmediatePropagation) {
            event.stopImmediatePropagation()
        } else {
            event.propagationStopped = true
        }
        event.stopPropagation();
        event.preventDefault();
        return false
    }
    return true
};
FastClick.prototype.onClick = function (event) {
    var permitted;
    if (this.trackingClick) {
        this.targetElement = null;
        this.trackingClick = false;
        return true
    }
    if (event.target.type === "submit" && event.detail === 0) {
        return true
    }
    permitted = this.onMouse(event);
    if (!permitted) {
        this.targetElement = null
    }
    return permitted
};
FastClick.prototype.destroy = function () {
    var layer = this.layer;
    if (this.deviceIsAndroid) {
        layer.removeEventListener("mouseover", this.onMouse, true);
        layer.removeEventListener("mousedown", this.onMouse, true);
        layer.removeEventListener("mouseup", this.onMouse, true)
    }
    layer.removeEventListener("click", this.onClick, true);
    layer.removeEventListener("touchstart", this.onTouchStart, false);
    layer.removeEventListener("touchmove", this.onTouchMove, false);
    layer.removeEventListener("touchend", this.onTouchEnd, false);
    layer.removeEventListener("touchcancel", this.onTouchCancel, false)
};
FastClick.notNeeded = function (layer) {
    var metaViewport;
    if (typeof window.ontouchstart === "undefined") {
        return true
    }
    if ((/Chrome\/[0-9]+/).test(navigator.userAgent)) {
        if (FastClick.prototype.deviceIsAndroid) {
            metaViewport = document.querySelector("meta[name=viewport]");
            if (metaViewport && metaViewport.content.indexOf("user-scalable=no") !== -1) {
                return true
            }
        } else {
            return true
        }
    }
    if (layer.style.msTouchAction === "none") {
        return true
    }
    return false
};
FastClick.attach = function (layer) {
    return new FastClick(layer)
};
if (typeof define !== "undefined" && define.amd) {
    define(function () {
        return FastClick
    })
} else {
    if (typeof module !== "undefined" && module.exports) {
        module.exports = FastClick.attach;
        module.exports.FastClick = FastClick
    } else {
        window.FastClick = FastClick
    }
};