var KingCanada = window.KingCanada || {};
/**
 * Cookie functions
 */
! function(window, document) {
  var KingCanada = window.KingCanada || {};

  function readCookie(name) {
    var match = new RegExp("(" + name + ")=([^;]*)").exec(document.cookie);
    if (!match) {
      return ""
    }
    return decodeURIComponent(match[2]).replace(/\+/g, " ")
  }
  KingCanada.initUserAttributes = function() {
    var userAttributes, id, FLAGS = window.userAttributeCookies.flags,
        ROLES = window.userAttributeCookies.roles;
    try {
      KingCanada.userAttributes = userAttributes = JSON.parse(readCookie("_user_attributes")) || {}
    } catch (e) {
      KingCanada.userAttributes = userAttributes = {}
    }
    function copyAttributes(flagset, cookie) {
      var cookieVal;
      cookie = readCookie(cookie);
      cookieVal = cookie === "" ? 0 : parseInt(cookie, 10);
      for (var flagName in flagset) {
        if (flagset.hasOwnProperty(flagName)) {
          userAttributes[flagName] = (flagset[flagName] & cookie) !== 0
        }
      }
    }
    copyAttributes(FLAGS, window.userAttributeCookies.flags_name);
    copyAttributes(ROLES, window.userAttributeCookies.roles_name);
    csrfMetaTags()
  };

  function csrfMetaTags() {
    var csrfTokenMetaTag = document.getElementById("csrf-token-meta-tag"),
        csrfToken = readCookie("_csrf_token");
    if (csrfTokenMetaTag != null) {
      csrfTokenMetaTag.setAttribute("content", csrfToken)
    } else {
      var newCsrfTokenMeta = document.createElement("meta");
      newCsrfTokenMeta.name = "csrf-token";
      newCsrfTokenMeta.id = "csrf-token-meta-tag";
      newCsrfTokenMeta.content = csrfToken;
      document.getElementsByTagName("head")[0].appendChild(newCsrfTokenMeta);
      var csrfParamMetaTag = document.getElementById("csrf-param-meta-tag");
      if (csrfParamMetaTag == null) {
        var newCsrfParamMeta = document.createElement("meta");
        newCsrfParamMeta.name = "csrf-param";
        newCsrfParamMeta.id = "csrf-param-meta-tag";
        newCsrfParamMeta.content = "authenticity_token";
        document.getElementsByTagName("head")[0].appendChild(newCsrfParamMeta)
      }
    }
  }
  KingCanada.initUserAttributes();
  window.KingCanada = KingCanada
}(window, document);
/*!
 * JS Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
!
function(window, document) {
  window.JSCookie = {
    cookie: function(key, value, options) {
      if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
        options = JSON.parse(JSON.stringify(options || {}));
        if (value === null || value === undefined) {
          options.expires = -1
        }
        if (typeof options.expires === "number") {
          var days = options.expires,
              t = options.expires = new Date();
          t.setDate(t.getDate() + days)
        }
        value = String(value);
        return (document.cookie = [encodeURIComponent(key), "=", options.raw ? value : encodeURIComponent(value), options.expires ? "; expires=" + options.expires.toUTCString() : "", options.path ? "; path=" + options.path : "", options.domain ? "; domain=" + options.domain : "", options.secure ? "; secure" : ""].join(""))
      }
      options = value || {};
      var decode = options.raw ?
      function(s) {
        return s
      } : decodeURIComponent;
      var encode = options.raw ?
      function(s) {
        return s
      } : encodeURIComponent;
      var cookies = document.cookie ? document.cookie.split("; ") : [];
      for (var i = 0, l = cookies.length;
      i < l;
      i++) {
        var parts = cookies[i].split("="),
            name = decode(parts[0]);
        if (key && key === name) {
          return decode(parts[1] || "")
        }
      }
      return null
    }
  }
}(window, document);

!function(exports, document) {
  var J = function(el) {
    if (typeof el === "string") {
      return new J.fn.init(document.querySelectorAll(el))
    }
    return new J.fn.init(el)
  };
  J.fn = J.prototype = {
    constructor: J,
    init: function(el) {
      if (!el) {
        this._el = []
      } else {
        this._el = el instanceof NodeList ? el : [el]
      }
      return this
    },
    each: function(handler) {
      var curr;
      for (var i = 0, length = this._el.length;
      i < length;
      i++) {
        if (this._el[i] instanceof NodeList) {
          this.each(this._el[i], handler)
        } else {
          handler(i, this._el[i])
        }
      }
      return this
    },
    attr: function(name, value) {
      return this.each(function(i, el) {
        el.setAttribute(name, value)
      })
    },
    show: function() {
      return this.each(function(i, el) {
        el.setAttribute("style", "display: block")
      })
    },
    hide: function() {
      return this.each(function(i, el) {
        el.setAttribute("style", "display: none")
      })
    },
    addClass: function(newClass) {
      return this.each(function(i, el) {
        var classes = el.className.split(/\s+/);
        classes.push(newClass);
        el.className = classes.join(" ")
      })
    },
    text: function(text) {
      return this.each(function(i, el) {
        el.innerText = text
      })
    }
  };
  J.fn.init.prototype = J.fn;
  exports.J = J
}(window, document);
!
function(exports) {
  var HeaderPreload = function() {
    var self = this;
    this.el = document.getElementById("header");
    this.userAttributes = KingCanada.userAttributes;
    this.personalize()
  };
  HeaderPreload.prototype.personalize = function() {
    if (KingCanada.userAttributes.name) {
      J(this.el).addClass("logged_in")
    }
    if (KingCanada.userAttributes) {
      var ua = KingCanada.userAttributes;
      if (ua.name) {
        this.name(KingCanada.userAttributes.name)
      }
      if (ua.curr) {
        this.curr(KingCanada.userAttributes.curr)
      }
      if (ua.num_h) {
        this.hosting_count(KingCanada.userAttributes.num_h)
      }
      if (ua.num_msg) {
        this.unread_message_count(KingCanada.userAttributes.num_msg)
      }
    }
  };
  HeaderPreload.prototype.name = function(name) {
    J(this.el.querySelectorAll(".value_name")).text(name)
  };
  HeaderPreload.prototype.curr = function(curr) {
    J(this.el.querySelectorAll(".value_currency")).text(curr);
    J(document.getElementById("currency_header_icon")).addClass(curr)
  };
  HeaderPreload.prototype.hosting_count = function(count) {
    count = parseInt(count, 10);
    var el = this.el.querySelector(".header-dropdown-list-item.listings");
    var $el = J(el);
    if (count === 0) {
      $el.hide()
    } else {
      if (el && count === 1) {
        J(el.querySelectorAll(".singular")).show();
        J(el.querySelectorAll(".plural")).hide()
      }
    }
  };
  HeaderPreload.prototype.unread_message_count = function(count) {
    if (count > 0) {
      J(this.el.querySelector(".unread_count, .alert-count")).show().addClass("in").text(count)
    }
  };
  exports.HeaderPreload = HeaderPreload
}(window);

/**
 * This module transforms the filter request into URL fragments
 */ 
! function (exports, $) {
	KingCanada.SearchUtils = {
        get_location_from_pathname: function (windowLocation) {
            var pathElements = windowLocation.pathname.split("/");
            if (pathElements.length >= 3) {
                return this.location_from_url_parameter(decodeURIComponent(pathElements[2].replace(/\+/g, " ")))
            } else {
                return null
            }
        },
        location_to_url_parameter: function (t) {
            return (t || "").replace("/", " ").replace(")", "").replace("(", "").replace("]", "").replace("[", "").replace(/\s+/g, " ").replace(/-/g, "~").replace(/, ?/g, "--").replace(/ /g, "-").replace(/\./g, "%252E")
        },
        location_from_url_parameter: function (t) {
            return (t || "").replace(/-/g, " ").replace(/~/g, "-").replace(/ {2}/g, ", ").replace(/%2E/g, ".")
        },
        handleFormSubmit: function (form) {
            var $form, data, params, location, qs, action, collectionRegex;
            $form = $(form);
            data = $form.serializeArray();
            collectionRegex = /\[\]$/;
            params = _.reduce(_.filter(data, function (pair) {
                return !!pair.value
            }), function (memo, obj) {
                if (obj.name.match(collectionRegex)) {
                    memo[obj.name] = memo[obj.name] || [];
                    memo[obj.name].push(obj.value)
                } else {
                    memo[obj.name] = obj.value
                }
                return memo
            }, {});
            location = params.location;
            delete params.location;
            if (params.guests === "1") {
                delete params.guests
            }
            qs = $.param(params);
            action = "/s";
            if (location) {
                action += "/" + this.location_to_url_parameter(location)
            }
            if (qs) {
                action += "?" + qs
            }
            window.location.href = action
        }
    }
}(jQuery);


/**
 * FAQ Menu dropdown
 */ 
(function () {
    this.JST || (this.JST = {});
    this.JST["header/faq_dropdown_row"] = (function () {
        this.JST || (this.JST = {});
        this.JST["header/faq_dropdown_row"] = Handlebars.template(function (Handlebars, depth0, helpers, partials, data) {
            this.compilerInfo = [2, ">= 1.0.0-rc.3"];
            helpers = helpers || Handlebars.helpers;
            data = data || {};
            var buffer = "",
                stack1, stack2, self = this,
                functionType = "function",
                escapeExpression = this.escapeExpression;

            function program1(depth0, data) {
                var stack1, stack2;
                stack2 = helpers["if"].call(depth0, ((stack1 = depth0.userAttributes), stack1 == null || stack1 === false ? stack1 : stack1.is_content_manager), {
                    hash: {},
                    inverse: self.noop,
                    fn: self.program(2, program2, data),
                    data: data
                });
                if (stack2 || stack2 === 0) {
                    return stack2
                } else {
                    return ""
                }
            }

            function program2(depth0, data) {
                return '\n  <a class="icon icon-arrow-up faq-edit faq-edit-up" href="#"></a>\n  <a class="icon icon-arrow-down faq-edit faq-edit-down" href="#"></a>\n  <a class="icon icon-remove faq-edit faq-edit-remove" href="#"></a>\n'
            }
            buffer += '<li class="header-dropdown-list-item faqs-ajaxed-in"\n    data-faq="' + escapeExpression(((stack1 = ((stack1 = depth0.link), stack1 == null || stack1 === false ? stack1 : stack1.id)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1)) + '" data-priority="' + escapeExpression(((stack1 = ((stack1 = depth0.link), stack1 == null || stack1 === false ? stack1 : stack1.priority)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1)) + '">\n  <a href="/help/question/' + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.link), stack1 == null || stack1 === false ? stack1 : stack1.faq)), stack1 == null || stack1 === false ? stack1 : stack1.id)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1)) + '?ref=help-dropdown"\n     class="faq_link">' + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.link), stack1 == null || stack1 === false ? stack1 : stack1.faq)), stack1 == null || stack1 === false ? stack1 : stack1.localized_question)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1)) + "</a>\n";
            stack2 = helpers["if"].call(depth0, ((stack1 = depth0.userAttributes), stack1 == null || stack1 === false ? stack1 : stack1.is_admin), {
                hash: {},
                inverse: self.noop,
                fn: self.program(1, program1, data),
                data: data
            });
            if (stack2 || stack2 === 0) {
                buffer += stack2
            }
            buffer += "\n</li>\n";
            return buffer
        });
        return this.JST["header/faq_dropdown_row"]
    }).call(this)
}).call(this);

! function (global, exports, $, utils) {
    var _ = global._,
        KingCanada = global.KingCanada,
        EventEmitter = global.require("std::emitter"),
        Header, faqLinkTemplate, HeaderSearchBar;
    	HeaderSearchBar = _.inherit(EventEmitter, function (options) {
        var clickHandled = false,
            that = this;
        EventEmitter.call(this);
        this.$el = $(options.el);
        this.$ = function (selector) {
            return this.$el.find(selector)
        };
        this.searchbarStates = {
            allClosed: 0,
            autocomplete: 1,
            settingsOpen: 2
        };
        this.$locationSearch = this.$("#header-location");
        this.$searchForm = this.$("#search-form");
        this.$searchSettings = this.$("#header-search-settings");
        this.active = true;
        if (this.$locationSearch.length <= 0) {
            this.active = false;
            return
        }
        this.$locationSearch.one("focus", function () {
            KingCanada.Utils.withGooglePlaces(that.setupAutocomplete)
        });
        this.setupAutocomplete = function () {
            that.autocomplete = new google.maps.places.Autocomplete(that.$locationSearch.get(0), {
                types: ["geocode"]
            });
            google.maps.event.addListener(that.autocomplete, "place_changed", function () {
                that.emit("place_changed", that.serializeData());
                that.openSettings()
            })
        };
        this.searchState = this.searchbarStates.allClosed;
        this.autocompleteContainer = $(".pac-container");
        this.$searchForm.KingCanadaInputDateSpan();
        this.$searchForm.on("submit", function (event) {
            that.emit("submit", that.serializeData($(this), event));
            setTimeout(function () {
                if (that.autocompleteOpen()) {
                    that.setAutocomplete();
                    that.autocompleteContainer.css({
                        width: "280px"
                    })
                }
            }, 10);
            clickHandled = true;
            if (!event.isDefaultPrevented()) {
                event.preventDefault();
                KingCanada.SearchUtils.handleFormSubmit(event.currentTarget)
            }
        });
        this.$locationSearch.keydown(function (e) {
            var key = e.which,
                $this = $(this);
            if (key === 13) {
                e.preventDefault();
                if ($this.val() !== "") {
                    that.$searchSettings.addClass("shown")
                }
            }
            if (that.autocompleteContainer[0] === undefined) {
                that.autocompleteContainer = $(".pac-container")
            }
            that.setAutocomplete()
        });
        this.$searchSettings.mousedown(function (e) {
            clickHandled = true
        });
        $("body").on("mousedown", ".pac-container, .ui-datepicker", function (e) {
            clickHandled = true
        });
        $(document).mousedown(function (e) {
            if (!clickHandled) {
                that.closeSearch()
            } else {
                clickHandled = false
            }
        })
    });
    HeaderSearchBar.prototype.setLocation = function (location) {
        this.$locationSearch.val(location)
    };
    HeaderSearchBar.prototype.openSettings = function () {
        this.$searchSettings.addClass("shown");
        this.searchState = this.searchbarStates.settingsOpen;
        $("#header-search-checkin").focus().datepicker("show")
    };
    HeaderSearchBar.prototype.autocompleteOpen = function () {
        if (this.autocompleteContainer === undefined) {
            return false
        }
        return (this.autocompleteContainer.css("display") === "block")
    };
    HeaderSearchBar.prototype.setAutocomplete = function () {
        this.$searchSettings.removeClass("shown");
        this.searchState = this.searchbarStates.autocomplete
    };
    HeaderSearchBar.prototype.closeSearch = function () {
        this.$searchSettings.removeClass("shown");
        this.emit("close");
        this.searchState = this.searchbarStates.allClosed
    };
    HeaderSearchBar.prototype.serializeData = function ($el, event) {
        var i, iter, length;
        $el = $el || this.$searchForm;
        event = event || null;
        var serializedArray = $el.serializeArray();
        var serializedObject = {};
        for (i = 0, length = serializedArray.length; i < length; i++) {
            iter = serializedArray[i];
            serializedObject[iter.name] = iter.value
        }
        return {
            data: serializedObject,
            event: event
        }
    };
    Header = _.inherit(EventEmitter, function (options) {
        EventEmitter.call(this);
        this.$el = $("#header");
        this.personalizeHeader();
        this.initDropdowns();
        this.trackLysButton()
    });
    Header.prototype.trackLysButton = function () {
        $("#list-your-space").on("click", function (e) {
            KingCanada.Tracking.setUiRef("header_" + window.location.pathname)
        })
    };
    Header.prototype.personalizeHeader = function () {
        var self = this;
        this.userAttributes = KingCanada.userAttributes;
        if (this.userAttributes) {
            $.each(this.userAttributes, function (key, value) {
                if (typeof self[key] === "function") {
                    self[key](value)
                }
            })
        }
        this.$el.toggleClass("logged_in", KingCanada.Utils.isUserLoggedIn);
        this.$el.toggleClass("is_host", KingCanada.userAttributes.has_been_host);
        this.initHeader();
        this.setFavicon()
    };
    Header.prototype.name = function (name) {
        this.$el.find(".value_name").text(name)
    };
    Header.prototype.setLocation = function (location) {
        this.searchbar.setLocation(location)
    };
    Header.prototype.setFavicon = function () {
        if (this.userAttributes.revert_to_admin) {
            $("#favicon").attr("href", require("header/magenta_favicon"))
        }
    };
    Header.prototype.hosting_count = function (hostingCount) {
        hostingCount = parseInt(hostingCount, 10);
        var $li = this.$el.find(".header-dropdown-list-item.listings");
        if (hostingCount === 0) {
            $li.hide()
        } else {
            if (hostingCount === 1) {
                $li.find("span.singular").show();
                $li.find("span.plural").hide()
            }
        }
    };
    Header.prototype.can_see_meetups = function (canSeeMeetups) {
        if (canSeeMeetups) {
            var $meetups = this.$el.find(".meetups");
            $meetups.css("display", "block")
        }
    };
    Header.prototype.can_see_groups = function (canSeeGroups) {
        if (canSeeGroups) {
            var $groups = this.$el.find(".groups");
            $groups.css("display", "block")
        }
    };
    Header.prototype.unread_message_count = function (count) {
        if (count > 0) {
            this.$el.find(".unread_count, .alert-count").show().addClass("in").text(count)
        }
    };
    Header.prototype.show_header_search = function (show) {
        if (show) {
            this.$el.addClass("show_search")
        }
    };
    Header.prototype.initDropdowns = function () {
        $(".header-list-item.dropdown > a").on("click", function (event) {
            var $this = $(this),
                $dropdown = $this.siblings(".header-dropdown"),
                hideThatShit = function () {
                    $dropdown.fadeOut(150);
                    $this.removeClass("active");
                    $(document).unbind("click.header_dropdown")
                };
            event.preventDefault();
            if (!$this.hasClass("active")) {
                $dropdown.fadeIn(50);
                $this.addClass("active");
                setTimeout(function () {
                    $(document).bind("click.header_dropdown", function (e) {
                        if (!$(".help_search_box").is(":focus")) {
                            hideThatShit()
                        }
                    })
                }, 0)
            } else {
                hideThatShit()
            }
        })
    };
    Header.prototype.buildLinkFromFaqLink = function (link) {
        var faqLinkTemplate = JST["header/faq_dropdown_row"];
        return faqLinkTemplate({
            link: link,
            userAttributes: this.userAttributes
        })
    };
    Header.prototype.loadFaqs = function (page, rule, force) {
        var $helpLink = $(".help-toggle"),
            $dropdown = $(".help-dropdown"),
            $loading = $dropdown.find(".loading"),
            html = "",
            self = this;
        if (!rule) {
            rule = ""
        }
        $.ajax({
            type: "GET",
            url: "/faq_links",
            data: {
                query: {
                    page: page,
                    rule: rule
                }
            },
            dataType: "json",
            success: function (data) {
                $(".faqs-ajaxed-in").remove();
                if (data.length < 1 && rule !== "guest_default" && !force) {
                    if (rule !== "host_default" && /host_/.exec(rule)) {
                        return self.loadFaqs(page, "host_default")
                    } else {
                        return self.loadFaqs(page, "guest_default")
                    }
                }
                var faqLinks = data,
                    i = 0;
                for (i; i < faqLinks.length; i++) {
                    html += self.buildLinkFromFaqLink(faqLinks[i].faq_link)
                }
                $loading.before(html);
                $loading.addClass("hidden")
            },
            complete: function (xhr, ajaxOptions, thrownError) {
                $(".all_faqs").removeClass("hidden")
            }
        })
    };
    Header.prototype.initCustomFaqs = function () {
        var $helpLink = $(".help-toggle"),
            $dropdown = $(".help-dropdown"),
            $loading = $dropdown.find(".loading"),
            html = "",
            self = this;
        $helpLink.one("click", function () {
            KingCanada.Tracking.Mixpanel.register({
                faq_link_variation: "faq_link_control"
            });
            $(".faqs-ajaxed-in").remove();
            $.ajax({
                type: "GET",
                url: "/old_help/populate_help_dropdown",
                dataType: "json",
                success: function (data) {
                    var faqs = data.faqs,
                        i = 0;
                    for (i = 0; i < faqs.length; i++) {
                        html += '<li class="header-dropdown-list-item faqs-ajaxed-in"><a href="' + faqs[i].link + '?ref=help-dropdown" class="faq_link">' + faqs[i].title + "</a></li>"
                    }
                    $loading.before(html);
                    $loading.addClass("hidden")
                },
                complete: function (xhr, ajaxOptions, thrownError) {
                    $(".all_faqs").removeClass("hidden")
                }
            })
        })
    };
    Header.prototype.initHeader = function () {
        var amplify = global.amplify,
            $faqAdmin, self = this,
            $helpDropdown = $(".help-dropdown");
        KingCanada.Tracking.Moonshine.track("impression");
        this.searchbar = new HeaderSearchBar({
            el: "#header-search"
        });
        this.searchbar.on("open", function () {
            self.$el.addClass("search_open")
        });
        this.searchbar.on("close", function () {
            self.$el.removeClass("search_open")
        });
        this.searchbar.on("submit", function (options) {
            self.emit("search", options)
        });
        this.searchbar.on("place_changed", function (options) {
            self.emit("search", options)
        });
        
        self.initCustomFaqs()
    };
    exports.Header = Header
}(this, KingCanada, jQuery, KingCanada.Utils);
LazyLoad = function (j) {
    function p(c, a) {
        var g = j.createElement(c),
            b;
        for (b in a) {
            a.hasOwnProperty(b) && g.setAttribute(b, a[b])
        }
        return g
    }

    function m(c) {
        var a = k[c],
            b, e;
        if (a) {
            b = a.callback, e = a.urls, e.shift(), h = 0, e.length || (b && b.call(a.context, a.obj), k[c] = null, n[c].length && i(c))
        }
    }

    function u() {
        if (!b) {
            var c = navigator.userAgent;
            b = {
                async: j.createElement("script").async === !0
            };
            (b.webkit = /AppleWebKit\//.test(c)) || (b.ie = /MSIE/.test(c)) || (b.opera = /Opera/.test(c)) || (b.gecko = /Gecko\//.test(c)) || (b.unknown = !0)
        }
    }

    function i(c, a, g, e, h) {
        var i = function () {
            m(c)
        }, o = c === "css",
            f, l, d, q;
        u();
        if (a) {
            if (a = typeof a === "string" ? [a] : a.concat(), o || b.async || b.gecko || b.opera) {
                n[c].push({
                    urls: a,
                    callback: g,
                    obj: e,
                    context: h
                })
            } else {
                f = 0;
                for (l = a.length; f < l;
                    ++f) {
                    n[c].push({
                        urls: [a[f]],
                        callback: f === l - 1 ? g : null,
                        obj: e,
                        context: h
                    })
                }
            }
        }
        if (!k[c] && (q = k[c] = n[c].shift())) {
            r || (r = j.head || j.getElementsByTagName("head")[0]);
            a = q.urls;
            f = 0;
            for (l = a.length; f < l;
                ++f) {
                g = a[f], o ? d = b.gecko ? p("style") : p("link", {
                    href: g,
                    rel: "stylesheet"
                }) : (d = p("script", {
                    src: g
                }), d.async = !1), d.className = "lazyload", d.setAttribute("charset", "utf-8"), b.ie && !o ? d.onreadystatechange = function () {
                    if (/loaded|complete/.test(d.readyState)) {
                        d.onreadystatechange = null, i()
                    }
                } : o && (b.gecko || b.webkit) ? b.webkit ? (q.urls[f] = d.href, s()) : (d.innerHTML = '@import "' + g + '";', m("css")) : d.onload = d.onerror = i, r.appendChild(d)
            }
        }
    }

    function s() {
        var c = k.css,
            a;
        if (c) {
            for (a = t.length;
                --a >= 0;
            ) {
                if (t[a].href === c.urls[0]) {
                    m("css");
                    break
                }
            }
            h += 1;
            c && (h < 200 ? setTimeout(s, 50) : m("css"))
        }
    }
    var b, r, k = {}, h = 0,
        n = {
            css: [],
            js: []
        }, t = j.styleSheets;
    return {
        css: function (c, a, b, e) {
            i("css", c, a, b, e)
        },
        js: function (c, a, b, e) {
            i("js", c, a, b, e)
        }
    }
}(this.document);

(function () {
    this.JST || (this.JST = {});
    this.JST.currency_picker = (function () {
        this.JST || (this.JST = {});
        this.JST.currency_picker = Handlebars.template(function (Handlebars, depth0, helpers, partials, data) {
            this.compilerInfo = [2, ">= 1.0.0-rc.3"];
            helpers = helpers || Handlebars.helpers;
            data = data || {};
            var buffer = "",
                stack1, stack2, options, functionType = "function",
                escapeExpression = this.escapeExpression,
                helperMissing = helpers.helperMissing,
                self = this,
                blockHelperMissing = helpers.blockHelperMissing;

            function program1(depth0, data) {
                var buffer = "",
                    stack1;
                buffer += '\n      <li class="picker-item" data-currency="';
                if (stack1 = helpers.curr) {
                    stack1 = stack1.call(depth0, {
                        hash: {},
                        data: data
                    })
                } else {
                    stack1 = depth0.curr;
                    stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1
                }
                buffer += escapeExpression(stack1) + '">\n        <a href="#">\n          <i class="icon icon-currency-';
                if (stack1 = helpers.currLowerCase) {
                    stack1 = stack1.call(depth0, {
                        hash: {},
                        data: data
                    })
                } else {
                    stack1 = depth0.currLowerCase;
                    stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1
                }
                buffer += escapeExpression(stack1) + ' currency-symbol"></i> ';
                if (stack1 = helpers.curr) {
                    stack1 = stack1.call(depth0, {
                        hash: {},
                        data: data
                    })
                } else {
                    stack1 = depth0.curr;
                    stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1
                }
                buffer += escapeExpression(stack1) + "</a>\n      </li>\n    ";
                return buffer
            }
            buffer += '\n\n<div class="curr-selector btn-group btn-dropdown">\n  <button class="btn gray dropdown-toggle">\n    <i class="icon icon-currency-';
            if (stack1 = helpers.currentCurrLowerCase) {
                stack1 = stack1.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                stack1 = depth0.currentCurrLowerCase;
                stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1
            }
            buffer += escapeExpression(stack1) + ' currency-symbol"></i>\n    <span class="value currency"> ';
            if (stack1 = helpers.current_curr) {
                stack1 = stack1.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                stack1 = depth0.current_curr;
                stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1
            }
            buffer += escapeExpression(stack1) + ' </span>\n    <i class="icon icon-caret-down"></i>\n  </button>\n  <ul class="dropdown-menu nav currency-dropdown">\n    <li class="nav-header">';
            options = {
                hash: {},
                data: data
            };
            buffer += escapeExpression(((stack1 = helpers.t), stack1 ? stack1.call(depth0, "choose_currency", options) : helperMissing.call(depth0, "t", "choose_currency", options))) + "</li>\n    ";
            options = {
                hash: {},
                inverse: self.noop,
                fn: self.program(1, program1, data),
                data: data
            };
            if (stack2 = helpers.currencies) {
                stack2 = stack2.call(depth0, options)
            } else {
                stack2 = depth0.currencies;
                stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2
            } if (!helpers.currencies) {
                stack2 = blockHelperMissing.call(depth0, stack2, options)
            }
            if (stack2 || stack2 === 0) {
                buffer += stack2
            }
            buffer += "\n  </ul>\n</div>\n";
            return buffer
        });
        return this.JST.currency_picker
    }).call(this)
}).call(this);
(function () {
    this.JST || (this.JST = {});
    this.JST.language_picker = (function () {
        this.JST || (this.JST = {});
        this.JST.language_picker = Handlebars.template(function (Handlebars, depth0, helpers, partials, data) {
            this.compilerInfo = [2, ">= 1.0.0-rc.3"];
            helpers = helpers || Handlebars.helpers;
            data = data || {};
            var buffer = "",
                stack1, stack2, options, functionType = "function",
                escapeExpression = this.escapeExpression,
                helperMissing = helpers.helperMissing,
                self = this,
                blockHelperMissing = helpers.blockHelperMissing;

            function program1(depth0, data) {
                var buffer = "",
                    stack1;
                buffer += '\n      <li class="picker-item" data-locale="';
                if (stack1 = helpers.locale) {
                    stack1 = stack1.call(depth0, {
                        hash: {},
                        data: data
                    })
                } else {
                    stack1 = depth0.locale;
                    stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1
                }
                buffer += escapeExpression(stack1) + '"><a href="#">';
                if (stack1 = helpers.locale_name) {
                    stack1 = stack1.call(depth0, {
                        hash: {},
                        data: data
                    })
                } else {
                    stack1 = depth0.locale_name;
                    stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1
                }
                buffer += escapeExpression(stack1) + "</a></li>\n    ";
                return buffer
            }
            buffer += '<div class="lang-selector btn-group btn-dropdown">\n  <button class="btn gray dropdown-toggle">\n    <i class="icon icon-globe"></i>\n    <span class="value language">';
            if (stack1 = helpers.current_locale_name) {
                stack1 = stack1.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                stack1 = depth0.current_locale_name;
                stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1
            }
            buffer += escapeExpression(stack1) + ' </span>\n    <i class="icon icon-caret-down"></i>\n  </button>\n  <ul class="dropdown-menu nav language-dropdown">\n    <li class="nav-header">';
            options = {
                hash: {},
                data: data
            };
            buffer += escapeExpression(((stack1 = helpers.t), stack1 ? stack1.call(depth0, "choose_language", options) : helperMissing.call(depth0, "t", "choose_language", options))) + "</li>\n    ";
            options = {
                hash: {},
                inverse: self.noop,
                fn: self.program(1, program1, data),
                data: data
            };
            if (stack2 = helpers.languages) {
                stack2 = stack2.call(depth0, options)
            } else {
                stack2 = depth0.languages;
                stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2
            } if (!helpers.languages) {
                stack2 = blockHelperMissing.call(depth0, stack2, options)
            }
            if (stack2 || stack2 === 0) {
                buffer += stack2
            }
            buffer += "\n  </ul>\n</div>\n";
            return buffer
        });
        return this.JST.language_picker
    }).call(this)
}).call(this);


function ExceptionTrackerFactory(_, $) {
    var EXCEPTION_INTERVAL = 20,
        PAST_EXCEPTIONS_SIZE = 30,
        PAST_EVENTS_SIZE = 10;
    var MiniLogger = (function () {
        function MiniLogger(n) {
            this._buf = new Array(n);
            this._idx = 0
        }
        MiniLogger.prototype.add = function (obj) {
            this._idx %= this._buf.length;
            this._buf[(this._idx)++] = obj
        };
        MiniLogger.prototype.lastN = function () {
            var initial = [];
            if (this._buf[this._idx]) {
                initial = this._buf.slice(this._idx)
            }
            return initial.concat(this._buf.slice(0, this._idx))
        };
        return MiniLogger
    })();
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var generateUID = function () {
        var length = 7,
            arr = [];
        for (var i = 0; i < length; i++) {
            arr.push(chars[Math.floor(Math.random() * chars.length)])
        }
        return arr.join("")
    };
    var ExceptionTracker = {
        init: function (TraceKit, Tracking, userID, roleType) {
            if (this._initialized) {
                return
            }
            this._tracking = Tracking;
            this._userID = userID;
            this._roleType = roleType;
            _.bindAll(this, "handleBodyClick", "handleReport");
            this._pastEvents = new MiniLogger(PAST_EVENTS_SIZE);
            $("body").on("click", this.handleBodyClick);
            this._pastExceptions = {};
            TraceKit.globalHandling = true;
            TraceKit.report.subscribe(this.handleReport);
            this._initialized = true
        },
        handleBodyClick: function (e) {
            var el = e.target;
            var elemArr = [];
            while (el) {
                elemArr.push(el.nodeName);
                if (el.className) {
                    elemArr.push(".", el.className)
                }
                if (el.id) {
                    elemArr.push("#", el.id)
                }
                elemArr.push("\n");
                el = el.parentElement
            }
            if (elemArr.length > 0) {
                this._pastEvents.add(elemArr.join(""))
            }
        },
        handleReport: function (errorReport, options) {
            if (!this._shouldReport(errorReport)) {
                return
            }
            options = options || {};
            options = _.defaults(options, {
                projectKey: "MONORAIL_JAVASCRIPT",
                severity: "exception",
                userDataSmall: {},
                userDataLarge: {}
            });
            options.userDataSmall.url = errorReport.url;
            if (errorReport.stack && errorReport.stack[0] && errorReport.stack[0].context) {
                options.userDataLarge.context = JSON.stringify(errorReport.stack[0].context)
            }
            var pastEvents = this._pastEvents.lastN();
            if (pastEvents) {
                options.userDataLarge.pastEvents = pastEvents.join("\n\n")
            }
            var backtrace = _.map(errorReport.stack, function (line) {
                return [line.url, line.func, line.line].join(";")
            });
            var bev = (window.JSCookie) ? window.JSCookie.cookie("bev") : null;
            this._logEvent(errorReport, options, bev, backtrace)
        },
        _shouldReport: function (errorReport) {
            var stackTop = (errorReport.stack && errorReport.stack[0]) ? [errorReport.stack[0].url, errorReport.stack[0].line].join(":") : null;
            var exceptionKey = [errorReport.name, errorReport.message, stackTop].join(":");
            var timeNow = parseInt(Date.now() / 1000);
            if (exceptionKey in this._pastExceptions) {
                if (timeNow - this._pastExceptions[exceptionKey] < EXCEPTION_INTERVAL) {
                    return false
                }
            } else {
                var keys = _.keys(this._pastExceptions);
                if (keys.length >= PAST_EXCEPTIONS_SIZE) {
                    var randomKey = keys[Math.floor((Math.random() * keys.length))];
                    delete this._pastExceptions[randomKey]
                }
            }
            this._pastExceptions[exceptionKey] = timeNow;
            return true
        },
        _logEvent: function (errorReport, options, bev, backtrace) {
            this._tracking.logEvent({
                event_name: "exception",
                event_data: {
                    occurred_at: Date.now() / 1000,
                    backtrace: backtrace,
                    user_id: this._userID,
                    visitor_id: bev,
                    error_name: errorReport.name + ": " + errorReport.message,
                    cluster: "current-deploy-" + this._roleType,
                    minotaur_project_key: options.projectKey,
                    severity: options.severity,
                    err_id: generateUID(),
                    user_data_large: options.userDataLarge,
                    user_data_small: options.userDataSmall
                }
            })
        }
    };
    ExceptionTracker.MiniLogger = MiniLogger;
    return ExceptionTracker
}
if (this.KingCanada) {
    this.KingCanada.ExceptionTracker = ExceptionTrackerFactory(_, $)
} else {
    if (typeof module !== "undefined" && module.exports) {
        module.exports = ExceptionTrackerFactory
    }
}


(function ($) {
    function beforeShowGenerator(options) {
        options = options || {};
        options.dateOffset = options.dateOffset || "+0";
        return function (input, inst) {
            var $input = $(input);
            var val = $input.val();
            $input.trigger("beforeShow.datepicker", {
                el: input
            });
            if (!val) {
                if (typeof inst !== "undefined") {
                    $input.datepicker("option", "minDate", options.dateOffset)
                }
            }
        }
    }

    function checkBeyondRange(el, offsetMsec) {
        var $el = $(el);
        try {
            var dateFormat = $.datepicker._defaults.dateFormat;
            var enteredDate = $.datepicker.parseDate(dateFormat, $el.val());
            var maxDate = new Date();
            maxDate.setFullYear(maxDate.getFullYear() + 3);
            if (offsetMsec) {
                maxDate += offsetMsec
            }
            if (enteredDate > maxDate) {
                $el.val($.datepicker.formatDate(dateFormat, maxDate))
            }
        } catch (e) {}
        return $el.val()
    }

    function attachDatepicker(element, options) {
        var defOpts;
        var defaultCalendarOptions = {
            minDate: 0,
            maxDate: "+3Y",
            nextText: "",
            prevText: "",
            numberOfMonths: 1,
            showButtonPanel: true,
            closeText: "Clear Dates"
        };
        var _ref = $(element);
        options = options || {};
        defOpts = {
            checkinDatePicker: $(options.checkin),
            checkoutDatePicker: $(options.checkout),
            onSuccessCallback: options.onSuccess,
            onReset: options.onReset,
            onCheckinClose: options.onCheckinClose,
            onCheckoutClose: options.onCheckoutClose
        };
        if (!options.defaultsCheckin) {
            options.defaultsCheckin = defaultCalendarOptions
        }
        if (!options.defaultsCheckout) {
            options.defaultsCheckout = defaultCalendarOptions
        }
        if (!options.checkin) {
            defOpts.checkinDatePicker = _ref.find("input.checkin")
        }
        if (!options.checkout) {
            defOpts.checkoutDatePicker = _ref.find("input.checkout")
        }
        $.each(["onSuccessCallback", "onReset", "onCheckinClose", "onCheckoutClose"], function (i, val) {
            if (!defOpts[val]) {
                defOpts[val] = function () {}
            }
        });
        _ref.data("KingCanada-datepickeroptions", defOpts);
        var checkinCalendarOptions = $.extend($.extend(true, {}, options.defaultsCheckin), {
            beforeShow: beforeShowGenerator(),
            onClose: function (dateText, inst) {
                var dateFormat = $.datepicker._defaults.dateFormat;
                var opts = _ref.data("KingCanada-datepickeroptions");
                if (dateText) {
                    dateText = checkBeyondRange(this);
                    var nextDate = $.datepicker.parseDate(dateFormat, dateText);
                    nextDate = new Date(nextDate.setDate(nextDate.getDate() + 1));
                    var checkoutEl = opts.checkoutDatePicker;
                    try {
                        var checkoutDate = $.datepicker.parseDate(dateFormat, checkoutEl.val());
                        checkoutEl.datepicker("option", "minDate", nextDate);
                        if (nextDate > checkoutDate) {
                            checkoutEl.val($.datepicker.formatDate(dateFormat, nextDate));
                            checkoutEl.change();
                            checkoutEl.focus()
                        } else {
                            opts.onSuccessCallback(nextDate, checkoutEl.val())
                        }
                    } catch (e) {
                        checkoutEl.datepicker("option", "minDate", nextDate);
                        checkoutEl.val($.datepicker.formatDate(dateFormat, nextDate));
                        checkoutEl.focus()
                    }
                }
                opts.onCheckinClose()
            },
            onReset: function () {
                var opts = _ref.data("KingCanada-datepickeroptions");
                opts.checkoutDatePicker.datepicker("reset", true);
                opts.onReset()
            }
        });
        var checkoutCalendarOptions = $.extend($.extend(true, {}, options.defaultsCheckout), {
            beforeShow: beforeShowGenerator({
                dateOffset: "+1"
            }),
            onClose: function (dateText, inst) {
                var dateFormat = $.datepicker._defaults.dateFormat;
                var opts = _ref.data("KingCanada-datepickeroptions");
                if (dateText) {
                    dateText = checkBeyondRange(this, 1000 * 60 * 60 * 24);
                    var prevDate = $.datepicker.parseDate(dateFormat, dateText);
                    prevDate = new Date(prevDate.setDate(prevDate.getDate() - 1));
                    var checkinEl = opts.checkinDatePicker;
                    try {
                        var checkinDate = $.datepicker.parseDate(dateFormat, checkinEl.val());
                        if (prevDate < checkinDate) {
                            checkinEl.val($.datepicker.formatDate(dateFormat, prevDate));
                            checkinEl.focus()
                        } else {
                            opts.onSuccessCallback(checkinEl.val(), dateText)
                        }
                    } catch (e) {
                        checkinEl.val($.datepicker.formatDate(dateFormat, prevDate));
                        checkinEl.focus()
                    }
                }
                opts.onCheckoutClose()
            },
            onReset: function () {
                var opts = _ref.data("KingCanada-datepickeroptions");
                opts.checkinDatePicker.datepicker("reset", true)
            }
        });
        defOpts.checkinDatePicker.datepicker(checkinCalendarOptions);
        defOpts.checkoutDatePicker.datepicker(checkoutCalendarOptions);
        checkinCalendarOptions.beforeShow(defOpts.checkinDatePicker);
        checkoutCalendarOptions.beforeShow(defOpts.checkoutDatePicker)
    }
    $.fn.KingCanadaInputDateSpan = function (options) {
        return this.each(function () {
            if (typeof options === "string") {} else {
                attachDatepicker(this, options)
            }
        })
    }
})(jQuery);

(function () {
    var AIR, _ref, __bind = function (fn, me) {
            return function () {
                return fn.apply(me, arguments)
            }
        }, __hasProp = {}.hasOwnProperty,
        __extends = function (child, parent) {
            for (var key in parent) {
                if (__hasProp.call(parent, key)) {
                    child[key] = parent[key]
                }
            }

            function ctor() {
                this.constructor = child
            }
            ctor.prototype = parent.prototype;
            child.prototype = new ctor();
            child.__super__ = parent.prototype;
            return child
        };
    this.AIR || (this.AIR = {});
    AIR = this.AIR;
    AIR.Views || (AIR.Views = {});
    AIR.Views.BaseView = (function (_super) {
        __extends(BaseView, _super);

        function BaseView() {
            this.render = __bind(this.render, this);
            this.initialize = __bind(this.initialize, this);
            _ref = BaseView.__super__.constructor.apply(this, arguments);
            return _ref
        }
        BaseView.prototype.template = null;
        BaseView.prototype._hasRendered = false;
        BaseView.prototype.initialize = function (options) {
            this._bindViewEvents();
            this.bindings();
            return this._postInitialize()
        };
        BaseView.prototype._bindViewEvents = function () {
            var _this = this;
            if (this.viewEvents == null) {
                return
            }
            return _.each(this.viewEvents, function (fn, eventName) {
                if (_.isString(fn)) {
                    fn = _this[fn]
                }
                return _this.on(eventName, fn, _this)
            })
        };
        BaseView.prototype._postInitialize = function () {
            this.postInitialize();
            return this.trigger("initialize")
        };
        BaseView.prototype.postInitialize = function () {};
        BaseView.prototype._preRender = function () {
            this.preRender();
            return this.trigger("render:pre")
        };
        BaseView.prototype.preRender = function () {};
        BaseView.prototype.getRenderData = function () {
            if (this.model) {
                return this.model.toJSON()
            } else {
                return {}
            }
        };
        BaseView.prototype.getTemplate = function () {
            if (this.template && JST[this.template]) {
                return JST[this.template]
            } else {
                return null
            }
        };
        BaseView.prototype.getHtml = function () {
            var template;
            template = this.getTemplate();
            if (template) {
                return template(this.getRenderData(), {
                    partials: JST
                })
            } else {
                return ""
            }
        };
        BaseView.prototype.render = function (options) {
            if (options == null) {
                options = {}
            }
            this._preRender();
            if (options.html !== false) {
                this.$el.html(this.getHtml())
            }
            this.trigger("render");
            this._bindUIElements();
            this._postRender();
            this._hasRendered = true;
            return this
        };
        BaseView.prototype._postRender = function () {
            this.postRender();
            return this.trigger("render:post")
        };
        BaseView.prototype._bindUIElements = function () {
            var name, selector, _ref1, _results;
            if (!this.ui) {
                return
            }
            if (!this.uiBindings) {
                this.uiBindings = _.result(this, "ui")
            }
            this.ui = {};
            _ref1 = this.uiBindings;
            _results = [];
            for (name in _ref1) {
                selector = _ref1[name];
                _results.push(this.ui[name] = this.$(selector))
            }
            return _results
        };
        BaseView.prototype.postRender = function () {};
        BaseView.prototype.bindings = function () {};
        BaseView.prototype.cleanup = function () {
            this.trigger("cleanup");
            this.dispose();
            return this.remove()
        };
        BaseView.prototype.dispose = function () {
            return;
            this.undelegateEvents();
            if (this.model) {
                this.model.off(null, null, this)
            }
            if (this.collection) {
                this.collection.off(null, null, this)
            }
            return this
        };
        BaseView.prototype.$get = function (key, fresh) {
            if (fresh == null) {
                fresh = false
            }
            this._$getEls || (this._$getEls = {});
            if (fresh || !this._$getEls[key]) {
                this._$getEls[key] = this.$("[data-" + key + "]")
            }
            return this._$getEls[key]
        };
        return BaseView
    })(Backbone.View)
}).call(this);