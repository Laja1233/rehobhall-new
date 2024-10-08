! function(e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Lightgallery = e()
}(function() {
    return function l(i, o, d) {
        function r(s, e) {
            if (!o[s]) {
                if (!i[s]) {
                    var t = "function" == typeof require && require;
                    if (!e && t) return t(s, !0);
                    if (a) return a(s, !0);
                    t = new Error("Cannot find module '" + s + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                t = o[s] = {
                    exports: {}
                };
                i[s][0].call(t.exports, function(e) {
                    var t = i[s][1][e];
                    return r(t || e)
                }, t, t.exports, l, i, o, d)
            }
            return o[s].exports
        }
        for (var a = "function" == typeof require && require, e = 0; e < d.length; e++) r(d[e]);
        return r
    }({
        1: [function(e, t, s) {
            ! function(e, t) {
                void 0 !== s ? t(s) : (t(t = {}), e.lgUtils = t)
            }(this, function(e) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), window.getAttribute = function(e) {
                    return window[e]
                }, window.setAttribute = function(e, t) {
                    window[e] = t
                }, document.getAttribute = function(e) {
                    return document[e]
                }, document.setAttribute = function(e, t) {
                    document[e] = t
                };
                var d = {
                    wrap: function(e, t) {
                        var s;
                        e && ((s = document.createElement("div")).className = t, e.parentNode.insertBefore(s, e), e.parentNode.removeChild(e), s.appendChild(e))
                    },
                    addClass: function(e, t) {
                        e && (e.classList ? e.classList.add(t) : e.className += " " + t)
                    },
                    removeClass: function(e, t) {
                        e && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "))
                    },
                    hasClass: function(e, t) {
                        return e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className)
                    },
                    setVendor: function(e, t, s) {
                        e && (e.style[t.charAt(0).toLowerCase() + t.slice(1)] = s, e.style["webkit" + t] = s, e.style["moz" + t] = s, e.style["ms" + t] = s, e.style["o" + t] = s)
                    },
                    trigger: function(e, t) {
                        e && (t = new CustomEvent(t, {
                            detail: 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null
                        }), e.dispatchEvent(t))
                    },
                    Listener: {
                        uid: 0
                    },
                    on: function(s, e, l) {
                        s && e.split(" ").forEach(function(e) {
                            var t = s.getAttribute("lg-event-uid") || "";
                            d.Listener.uid++, t += "&" + d.Listener.uid, s.setAttribute("lg-event-uid", t), d.Listener[e + d.Listener.uid] = l, s.addEventListener(e.split(".")[0], l, !1)
                        })
                    },
                    off: function(e, t) {
                        if (e && (s = e.getAttribute("lg-event-uid")))
                            for (var s = s.split("&"), l = 0; l < s.length; l++)
                                if (s[l]) {
                                    var i = t + s[l];
                                    if ("." === i.substring(0, 1))
                                        for (var o in d.Listener) d.Listener.hasOwnProperty(o) && -1 < o.split(".").indexOf(i.split(".")[1]) && (e.removeEventListener(o.split(".")[0], d.Listener[o]), e.setAttribute("lg-event-uid", e.getAttribute("lg-event-uid").replace("&" + s[l], "")), delete d.Listener[o]);
                                    else e.removeEventListener(i.split(".")[0], d.Listener[i]), e.setAttribute("lg-event-uid", e.getAttribute("lg-event-uid").replace("&" + s[l], "")), delete d.Listener[i]
                                }
                    },
                    param: function(t) {
                        return Object.keys(t).map(function(e) {
                            return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
                        }).join("&")
                    }
                };
                e.default = d
            })
        }, {}],
        2: [function(e, t, s) {
            var l, i;
            l = this, i = function(e) {
                "use strict";

                function l(e, t) {
                    if (this.el = e, this.s = s({}, i, t), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) throw "When using dynamic mode, you must also define dynamicEl as an Array.";
                    return this.modules = {}, this.lGalleryOn = !1, this.lgBusy = !1, this.hideBartimeout = !1, this.isTouch = "ontouchstart" in document.documentElement, this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1), this.items = [], this.s.dynamic ? this.items = this.s.dynamicEl : "this" === this.s.selector ? this.items.push(this.el) : "" !== this.s.selector ? this.s.selectWithin ? this.items = document.querySelector(this.s.selectWithin).querySelectorAll(this.s.selector) : this.items = this.el.querySelectorAll(this.s.selector) : this.items = this.el.children, this.___slide = "", this.outer = "", this.init(), this
                }
                var h = (e = e) && e.__esModule ? e : {
                        default: e
                    },
                    s = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var s, l = arguments[t];
                            for (s in l) Object.prototype.hasOwnProperty.call(l, s) && (e[s] = l[s])
                        }
                        return e
                    };

                function t(e, t) {
                    t = t || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    };
                    var s = document.createEvent("CustomEvent");
                    return s.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), s
                }
                "function" == typeof window.CustomEvent || (t.prototype = window.Event.prototype, window.CustomEvent = t), window.utils = h.default, window.lgData = {
                    uid: 0
                };
                var i = {
                    mode: "lg-slide",
                    cssEasing: "ease",
                    easing: "linear",
                    speed: 600,
                    height: "100%",
                    width: "100%",
                    addClass: "",
                    startClass: "lg-start-zoom",
                    backdropDuration: 150,
                    hideBarsDelay: 6e3,
                    useLeft: !(window.lgModules = {}),
                    closable: !0,
                    loop: !0,
                    escKey: !0,
                    keyPress: !0,
                    controls: !0,
                    slideEndAnimatoin: !0,
                    hideControlOnEnd: !1,
                    mousewheel: !1,
                    getCaptionFromTitleOrAlt: !0,
                    appendSubHtmlTo: ".lg-sub-html",
                    subHtmlSelectorRelative: !1,
                    preload: 1,
                    showAfterLoad: !0,
                    selector: "",
                    selectWithin: "",
                    nextHtml: "",
                    prevHtml: "",
                    index: !1,
                    iframeMaxWidth: "100%",
                    download: !0,
                    counter: !0,
                    appendCounterTo: ".lg-toolbar",
                    swipeThreshold: 50,
                    enableSwipe: !0,
                    enableDrag: !0,
                    dynamic: !1,
                    dynamicEl: [],
                    galleryId: 1
                };
                l.prototype.init = function() {
                    var s = this;
                    s.s.preload > s.items.length && (s.s.preload = s.items.length);
                    var e = window.location.hash;
                    if (0 < e.indexOf("lg=" + this.s.galleryId) && (s.index = parseInt(e.split("&slide=")[1], 10), h.default.addClass(document.body, "lg-from-hash"), h.default.hasClass(document.body, "lg-on") || (h.default.addClass(document.body, "lg-on"), setTimeout(function() {
                            s.build(s.index)
                        }))), s.s.dynamic) h.default.trigger(this.el, "onBeforeOpen"), s.index = s.s.index || 0, h.default.hasClass(document.body, "lg-on") || (h.default.addClass(document.body, "lg-on"), setTimeout(function() {
                        s.build(s.index)
                    }));
                    else
                        for (var t = 0; t < s.items.length; t++) ! function(t) {
                            h.default.on(s.items[t], "click.lgcustom", function(e) {
                                e.preventDefault(), h.default.trigger(s.el, "onBeforeOpen"), s.index = s.s.index || t, h.default.hasClass(document.body, "lg-on") || (s.build(s.index), h.default.addClass(document.body, "lg-on"))
                            })
                        }(t)
                }, l.prototype.build = function(e) {
                    var t, s = this;
                    for (t in s.structure(), window.lgModules) s.modules[t] = new window.lgModules[t](s.el);
                    s.slide(e, !1, !1), s.s.keyPress && s.keyPress(), 1 < s.items.length && (s.arrow(), setTimeout(function() {
                        s.enableDrag(), s.enableSwipe()
                    }, 50), s.s.mousewheel && s.mousewheel()), s.counter(), s.closeGallery(), h.default.trigger(s.el, "onAfterOpen"), h.default.on(s.outer, "mousemove.lg click.lg touchstart.lg", function() {
                        h.default.removeClass(s.outer, "lg-hide-items"), clearTimeout(s.hideBartimeout), s.hideBartimeout = setTimeout(function() {
                            h.default.addClass(s.outer, "lg-hide-items")
                        }, s.s.hideBarsDelay)
                    })
                }, l.prototype.structure = function() {
                    var e = "",
                        t = "",
                        s = 0,
                        l = "",
                        i = this;
                    for (document.body.insertAdjacentHTML("beforeend", '<div class="lg-backdrop"></div>'), h.default.setVendor(document.querySelector(".lg-backdrop"), "TransitionDuration", this.s.backdropDuration + "ms"), s = 0; s < this.items.length; s++) e += '<div class="lg-item"></div>';
                    this.s.controls && 1 < this.items.length && (t = '<div class="lg-actions"><div class="lg-prev lg-icon">' + this.s.prevHtml + '</div><div class="lg-next lg-icon">' + this.s.nextHtml + "</div></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (l = '<div class="lg-sub-html"></div>'), l = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + e + '</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>' + t + l + "</div></div>", document.body.insertAdjacentHTML("beforeend", l), this.outer = document.querySelector(".lg-outer"), this.___slide = this.outer.querySelectorAll(".lg-item"), this.s.useLeft ? (h.default.addClass(this.outer, "lg-use-left"), this.s.mode = "lg-slide") : h.default.addClass(this.outer, "lg-use-css3"), i.setTop(), h.default.on(window, "resize.lg orientationchange.lg", function() {
                        setTimeout(function() {
                            i.setTop()
                        }, 100)
                    }), h.default.addClass(this.___slide[this.index], "lg-current"), this.doCss() ? h.default.addClass(this.outer, "lg-css3") : (h.default.addClass(this.outer, "lg-css"), this.s.speed = 0), h.default.addClass(this.outer, this.s.mode), this.s.enableDrag && 1 < this.items.length && h.default.addClass(this.outer, "lg-grab"), this.s.showAfterLoad && h.default.addClass(this.outer, "lg-show-after-load"), this.doCss() && (l = this.outer.querySelector(".lg-inner"), h.default.setVendor(l, "TransitionTimingFunction", this.s.cssEasing), h.default.setVendor(l, "TransitionDuration", this.s.speed + "ms")), setTimeout(function() {
                        h.default.addClass(document.querySelector(".lg-backdrop"), "in")
                    }), setTimeout(function() {
                        h.default.addClass(i.outer, "lg-visible")
                    }, this.s.backdropDuration), this.s.download && this.outer.querySelector(".lg-toolbar").insertAdjacentHTML("beforeend", '<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'), this.prevScrollTop = document.documentElement.scrollTop || document.body.scrollTop
                }, l.prototype.setTop = function() {
                    var e, t, s;
                    "100%" !== this.s.height && (t = ((e = window.innerHeight) - parseInt(this.s.height, 10)) / 2, s = this.outer.querySelector(".lg"), e >= parseInt(this.s.height, 10) ? s.style.top = t + "px" : s.style.top = "0px")
                }, l.prototype.doCss = function() {
                    return !! function() {
                        for (var e = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"], t = document.documentElement, s = 0, s = 0; s < e.length; s++)
                            if (e[s] in t.style) return !0
                    }()
                }, l.prototype.isVideo = function(e, t) {
                    if (!e) throw new Error("Make sure that slide " + t + " has an image/video src");
                    var s = this.s.dynamic ? this.s.dynamicEl[t].html : this.items[t].getAttribute("data-html");
                    if (!e && s) return {
                        html5: !0
                    };
                    var l = e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),
                        t = e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
                        s = e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
                        e = e.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
                    return l ? {
                        youtube: l
                    } : t ? {
                        vimeo: t
                    } : s ? {
                        dailymotion: s
                    } : e ? {
                        vk: e
                    } : void 0
                }, l.prototype.counter = function() {
                    this.s.counter && this.outer.querySelector(this.s.appendCounterTo).insertAdjacentHTML("beforeend", '<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.items.length + "</span></div>")
                }, l.prototype.addHtml = function(e) {
                    var t, s, l = null;
                    this.s.dynamic ? l = this.s.dynamicEl[e].subHtml : (l = (t = this.items[e]).getAttribute("data-sub-html"), !this.s.getCaptionFromTitleOrAlt || l || (l = t.getAttribute("title")) && t.querySelector("img") && (l = t.querySelector("img").getAttribute("alt"))), null != l ? "." !== (s = l.substring(0, 1)) && "#" !== s || (l = (this.s.subHtmlSelectorRelative && !this.s.dynamic ? t : document).querySelector(l).innerHTML) : l = "", ".lg-sub-html" === this.s.appendSubHtmlTo ? this.outer.querySelector(this.s.appendSubHtmlTo).innerHTML = l : this.___slide[e].insertAdjacentHTML("beforeend", l), null != l && ("" === l ? h.default.addClass(this.outer.querySelector(this.s.appendSubHtmlTo), "lg-empty-html") : h.default.removeClass(this.outer.querySelector(this.s.appendSubHtmlTo), "lg-empty-html")), h.default.trigger(this.el, "onAfterAppendSubHtml", {
                        index: e
                    })
                }, l.prototype.preload = function(e) {
                    for (var t = 1, s = 1, t = 1; t <= this.s.preload && !(t >= this.items.length - e); t++) this.loadContent(e + t, !1, 0);
                    for (s = 1; s <= this.s.preload && !(e - s < 0); s++) this.loadContent(e - s, !1, 0)
                }, l.prototype.loadContent = function(t, e, s) {
                    function l(e) {
                        for (var t = [], s = [], l = 0; l < e.length; l++) {
                            var i = e[l].split(" ");
                            "" === i[0] && i.splice(0, 1), s.push(i[0]), t.push(i[1])
                        }
                        for (var o = window.innerWidth, d = 0; d < t.length; d++)
                            if (parseInt(t[d], 10) > o) {
                                r = s[d];
                                break
                            }
                    }
                    var r, i, o, d, a = this,
                        n = !1,
                        u = a.s.dynamic ? (a.s.dynamicEl[t].poster && (n = !0, i = a.s.dynamicEl[t].poster), d = a.s.dynamicEl[t].html, r = a.s.dynamicEl[t].src, a.s.dynamicEl[t].responsive && l(a.s.dynamicEl[t].responsive.split(",")), o = a.s.dynamicEl[t].srcset, a.s.dynamicEl[t].sizes) : (a.items[t].getAttribute("data-poster") && (n = !0, i = a.items[t].getAttribute("data-poster")), d = a.items[t].getAttribute("data-html"), r = a.items[t].getAttribute("href") || a.items[t].getAttribute("data-src"), a.items[t].getAttribute("data-responsive") && l(a.items[t].getAttribute("data-responsive").split(",")), o = a.items[t].getAttribute("data-srcset"), a.items[t].getAttribute("data-sizes")),
                        c = !1;
                    a.s.dynamic ? a.s.dynamicEl[t].iframe && (c = !0) : "true" === a.items[t].getAttribute("data-iframe") && (c = !0);
                    var g = a.isVideo(r, t);
                    if (!h.default.hasClass(a.___slide[t], "lg-loaded")) {
                        if (c ? a.___slide[t].insertAdjacentHTML("afterbegin", '<div class="lg-video-cont" style="max-width:' + a.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + r + '"  allowfullscreen="true"></iframe></div></div>') : n ? (c = "", c = g && g.youtube ? "lg-has-youtube" : g && g.vimeo ? "lg-has-vimeo" : "lg-has-html5", a.___slide[t].insertAdjacentHTML("beforeend", '<div class="lg-video-cont ' + c + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + i + '" /></div></div>')) : g ? (a.___slide[t].insertAdjacentHTML("beforeend", '<div class="lg-video-cont "><div class="lg-video"></div></div>'), h.default.trigger(a.el, "hasVideo", {
                                index: t,
                                src: r,
                                html: d
                            })) : a.___slide[t].insertAdjacentHTML("beforeend", '<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + r + '" /></div>'), h.default.trigger(a.el, "onAferAppendSlide", {
                                index: t
                            }), d = a.___slide[t].querySelector(".lg-object"), u && d.setAttribute("sizes", u), o) {
                            d.setAttribute("srcset", o);
                            try {
                                picturefill({
                                    elements: [d[0]]
                                })
                            } catch (t) {
                                console.error("Make sure you have included Picturefill version 2")
                            }
                        }
                        ".lg-sub-html" !== this.s.appendSubHtmlTo && a.addHtml(t), h.default.addClass(a.___slide[t], "lg-loaded")
                    }
                    h.default.on(a.___slide[t].querySelector(".lg-object"), "load.lg error.lg", function() {
                        var e = 0;
                        s && !h.default.hasClass(document.body, "lg-from-hash") && (e = s), setTimeout(function() {
                            h.default.addClass(a.___slide[t], "lg-complete"), h.default.trigger(a.el, "onSlideItemLoad", {
                                index: t,
                                delay: s || 0
                            })
                        }, e)
                    }), g && g.html5 && !n && h.default.addClass(a.___slide[t], "lg-complete"), !0 === e && (h.default.hasClass(a.___slide[t], "lg-complete") ? a.preload(t) : h.default.on(a.___slide[t].querySelector(".lg-object"), "load.lg error.lg", function() {
                        a.preload(t)
                    }))
                }, l.prototype.slide = function(e, t, s) {
                    for (var l = 0, i = 0; i < this.___slide.length; i++)
                        if (h.default.hasClass(this.___slide[i], "lg-current")) {
                            l = i;
                            break
                        }
                    var o = this;
                    if (!o.lGalleryOn || l !== e) {
                        var d = this.___slide.length,
                            r = o.lGalleryOn ? this.s.speed : 0,
                            a = !1,
                            n = !1;
                        if (!o.lgBusy) {
                            if (this.s.download && ((u = o.s.dynamic ? !1 !== o.s.dynamicEl[e].downloadUrl && (o.s.dynamicEl[e].downloadUrl || o.s.dynamicEl[e].src) : "false" !== o.items[e].getAttribute("data-download-url") && (o.items[e].getAttribute("data-download-url") || o.items[e].getAttribute("href") || o.items[e].getAttribute("data-src"))) ? (document.getElementById("lg-download").setAttribute("href", u), h.default.removeClass(o.outer, "lg-hide-download")) : h.default.addClass(o.outer, "lg-hide-download")), h.default.trigger(o.el, "onBeforeSlide", {
                                    prevIndex: l,
                                    index: e,
                                    fromTouch: t,
                                    fromThumb: s
                                }), o.lgBusy = !0, clearTimeout(o.hideBartimeout), ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout(function() {
                                    o.addHtml(e)
                                }, r), this.arrowDisable(e), t) {
                                var u = e - 1,
                                    r = e + 1;
                                (0 === e && l === d - 1 || e === d - 1 && 0 === l) && (r = 0, u = d - 1), h.default.removeClass(o.outer.querySelector(".lg-prev-slide"), "lg-prev-slide"), h.default.removeClass(o.outer.querySelector(".lg-current"), "lg-current"), h.default.removeClass(o.outer.querySelector(".lg-next-slide"), "lg-next-slide"), h.default.addClass(o.___slide[u], "lg-prev-slide"), h.default.addClass(o.___slide[r], "lg-next-slide"), h.default.addClass(o.___slide[e], "lg-current")
                            } else {
                                h.default.addClass(o.outer, "lg-no-trans");
                                for (var c = 0; c < this.___slide.length; c++) h.default.removeClass(this.___slide[c], "lg-prev-slide"), h.default.removeClass(this.___slide[c], "lg-next-slide");
                                e < l ? (n = !0, 0 !== e || l !== d - 1 || s || (a = !(n = !1))) : l < e && (a = !0, e !== d - 1 || 0 !== l || s || (a = !(n = !0))), n ? (h.default.addClass(this.___slide[e], "lg-prev-slide"), h.default.addClass(this.___slide[l], "lg-next-slide")) : a && (h.default.addClass(this.___slide[e], "lg-next-slide"), h.default.addClass(this.___slide[l], "lg-prev-slide")), setTimeout(function() {
                                    h.default.removeClass(o.outer.querySelector(".lg-current"), "lg-current"), h.default.addClass(o.___slide[e], "lg-current"), h.default.removeClass(o.outer, "lg-no-trans")
                                }, 50)
                            }
                            o.lGalleryOn ? (setTimeout(function() {
                                o.loadContent(e, !0, 0)
                            }, this.s.speed + 50), setTimeout(function() {
                                o.lgBusy = !1, h.default.trigger(o.el, "onAfterSlide", {
                                    prevIndex: l,
                                    index: e,
                                    fromTouch: t,
                                    fromThumb: s
                                })
                            }, this.s.speed)) : (o.loadContent(e, !0, o.s.backdropDuration), o.lgBusy = !1, h.default.trigger(o.el, "onAfterSlide", {
                                prevIndex: l,
                                index: e,
                                fromTouch: t,
                                fromThumb: s
                            })), o.lGalleryOn = !0, this.s.counter && document.getElementById("lg-counter-current") && (document.getElementById("lg-counter-current").innerHTML = e + 1)
                        }
                    }
                }, l.prototype.goToNextSlide = function(e) {
                    var t = this;
                    t.lgBusy || (t.index + 1 < t.___slide.length ? (t.index++, h.default.trigger(t.el, "onBeforeNextSlide", {
                        index: t.index
                    }), t.slide(t.index, e, !1)) : t.s.loop ? (t.index = 0, h.default.trigger(t.el, "onBeforeNextSlide", {
                        index: t.index
                    }), t.slide(t.index, e, !1)) : t.s.slideEndAnimatoin && (h.default.addClass(t.outer, "lg-right-end"), setTimeout(function() {
                        h.default.removeClass(t.outer, "lg-right-end")
                    }, 400)))
                }, l.prototype.goToPrevSlide = function(e) {
                    var t = this;
                    t.lgBusy || (0 < t.index ? (t.index--, h.default.trigger(t.el, "onBeforePrevSlide", {
                        index: t.index,
                        fromTouch: e
                    }), t.slide(t.index, e, !1)) : t.s.loop ? (t.index = t.items.length - 1, h.default.trigger(t.el, "onBeforePrevSlide", {
                        index: t.index,
                        fromTouch: e
                    }), t.slide(t.index, e, !1)) : t.s.slideEndAnimatoin && (h.default.addClass(t.outer, "lg-left-end"), setTimeout(function() {
                        h.default.removeClass(t.outer, "lg-left-end")
                    }, 400)))
                }, l.prototype.keyPress = function() {
                    var t = this;
                    1 < this.items.length && h.default.on(window, "keyup.lg", function(e) {
                        1 < t.items.length && (37 === e.keyCode && (e.preventDefault(), t.goToPrevSlide()), 39 === e.keyCode && (e.preventDefault(), t.goToNextSlide()))
                    }), h.default.on(window, "keydown.lg", function(e) {
                        !0 === t.s.escKey && 27 === e.keyCode && (e.preventDefault(), h.default.hasClass(t.outer, "lg-thumb-open") ? h.default.removeClass(t.outer, "lg-thumb-open") : t.destroy())
                    })
                }, l.prototype.arrow = function() {
                    var e = this;
                    h.default.on(this.outer.querySelector(".lg-prev"), "click.lg", function() {
                        e.goToPrevSlide()
                    }), h.default.on(this.outer.querySelector(".lg-next"), "click.lg", function() {
                        e.goToNextSlide()
                    })
                }, l.prototype.arrowDisable = function(e) {
                    var t, s;
                    !this.s.loop && this.s.hideControlOnEnd && (t = this.outer.querySelector(".lg-next"), s = this.outer.querySelector(".lg-prev"), e + 1 < this.___slide.length ? (t.removeAttribute("disabled"), h.default.removeClass(t, "disabled")) : (t.setAttribute("disabled", "disabled"), h.default.addClass(t, "disabled")), 0 < e ? (s.removeAttribute("disabled"), h.default.removeClass(s, "disabled")) : (t.setAttribute("disabled", "disabled"), h.default.addClass(t, "disabled")))
                }, l.prototype.setTranslate = function(e, t, s) {
                    this.s.useLeft ? e.style.left = t : h.default.setVendor(e, "Transform", "translate3d(" + t + "px, " + s + "px, 0px)")
                }, l.prototype.touchMove = function(e, t) {
                    e = t - e;
                    15 < Math.abs(e) && (h.default.addClass(this.outer, "lg-dragging"), this.setTranslate(this.___slide[this.index], e, 0), this.setTranslate(document.querySelector(".lg-prev-slide"), -this.___slide[this.index].clientWidth + e, 0), this.setTranslate(document.querySelector(".lg-next-slide"), this.___slide[this.index].clientWidth + e, 0))
                }, l.prototype.touchEnd = function(t) {
                    var s = this;
                    "lg-slide" !== s.s.mode && h.default.addClass(s.outer, "lg-slide");
                    for (var e = 0; e < this.___slide.length; e++) h.default.hasClass(this.___slide[e], "lg-current") || h.default.hasClass(this.___slide[e], "lg-prev-slide") || h.default.hasClass(this.___slide[e], "lg-next-slide") || (this.___slide[e].style.opacity = "0");
                    setTimeout(function() {
                        h.default.removeClass(s.outer, "lg-dragging"), t < 0 && Math.abs(t) > s.s.swipeThreshold ? s.goToNextSlide(!0) : 0 < t && Math.abs(t) > s.s.swipeThreshold ? s.goToPrevSlide(!0) : Math.abs(t) < 5 && h.default.trigger(s.el, "onSlideClick");
                        for (var e = 0; e < s.___slide.length; e++) s.___slide[e].removeAttribute("style")
                    }), setTimeout(function() {
                        h.default.hasClass(s.outer, "lg-dragging") || "lg-slide" === s.s.mode || h.default.removeClass(s.outer, "lg-slide")
                    }, s.s.speed + 100)
                }, l.prototype.enableSwipe = function() {
                    var t = this,
                        s = 0,
                        l = 0,
                        i = !1;
                    if (t.s.enableSwipe && t.isTouch && t.doCss()) {
                        for (var e = 0; e < t.___slide.length; e++) h.default.on(t.___slide[e], "touchstart.lg", function(e) {
                            h.default.hasClass(t.outer, "lg-zoomed") || t.lgBusy || (e.preventDefault(), t.manageSwipeClass(), s = e.targetTouches[0].pageX)
                        });
                        for (var o = 0; o < t.___slide.length; o++) h.default.on(t.___slide[o], "touchmove.lg", function(e) {
                            h.default.hasClass(t.outer, "lg-zoomed") || (e.preventDefault(), l = e.targetTouches[0].pageX, t.touchMove(s, l), i = !0)
                        });
                        for (var d = 0; d < t.___slide.length; d++) h.default.on(t.___slide[d], "touchend.lg", function() {
                            h.default.hasClass(t.outer, "lg-zoomed") || (i ? (i = !1, t.touchEnd(l - s)) : h.default.trigger(t.el, "onSlideClick"))
                        })
                    }
                }, l.prototype.enableDrag = function() {
                    var t = this,
                        s = 0,
                        l = 0,
                        i = !1,
                        o = !1;
                    if (t.s.enableDrag && !t.isTouch && t.doCss()) {
                        for (var e = 0; e < t.___slide.length; e++) h.default.on(t.___slide[e], "mousedown.lg", function(e) {
                            h.default.hasClass(t.outer, "lg-zoomed") || (h.default.hasClass(e.target, "lg-object") || h.default.hasClass(e.target, "lg-video-play")) && (e.preventDefault(), t.lgBusy || (t.manageSwipeClass(), s = e.pageX, i = !0, t.outer.scrollLeft += 1, --t.outer.scrollLeft, h.default.removeClass(t.outer, "lg-grab"), h.default.addClass(t.outer, "lg-grabbing"), h.default.trigger(t.el, "onDragstart")))
                        });
                        h.default.on(window, "mousemove.lg", function(e) {
                            i && (o = !0, l = e.pageX, t.touchMove(s, l), h.default.trigger(t.el, "onDragmove"))
                        }), h.default.on(window, "mouseup.lg", function(e) {
                            o ? (o = !1, t.touchEnd(l - s), h.default.trigger(t.el, "onDragend")) : (h.default.hasClass(e.target, "lg-object") || h.default.hasClass(e.target, "lg-video-play")) && h.default.trigger(t.el, "onSlideClick"), i && (i = !1, h.default.removeClass(t.outer, "lg-grabbing"), h.default.addClass(t.outer, "lg-grab"))
                        })
                    }
                }, l.prototype.manageSwipeClass = function() {
                    var e = this.index + 1,
                        t = this.index - 1,
                        s = this.___slide.length;
                    this.s.loop && (0 === this.index ? t = s - 1 : this.index === s - 1 && (e = 0));
                    for (var l = 0; l < this.___slide.length; l++) h.default.removeClass(this.___slide[l], "lg-next-slide"), h.default.removeClass(this.___slide[l], "lg-prev-slide"); - 1 < t && h.default.addClass(this.___slide[t], "lg-prev-slide"), h.default.addClass(this.___slide[e], "lg-next-slide")
                }, l.prototype.mousewheel = function() {
                    var t = this;
                    h.default.on(t.outer, "mousewheel.lg", function(e) {
                        e.deltaY && (0 < e.deltaY ? t.goToPrevSlide() : t.goToNextSlide(), e.preventDefault())
                    })
                }, l.prototype.closeGallery = function() {
                    var t = this,
                        s = !1;
                    h.default.on(this.outer.querySelector(".lg-close"), "click.lg", function() {
                        t.destroy()
                    }), t.s.closable && (h.default.on(t.outer, "mousedown.lg", function(e) {
                        s = !!(h.default.hasClass(e.target, "lg-outer") || h.default.hasClass(e.target, "lg-item") || h.default.hasClass(e.target, "lg-img-wrap"))
                    }), h.default.on(t.outer, "mouseup.lg", function(e) {
                        (h.default.hasClass(e.target, "lg-outer") || h.default.hasClass(e.target, "lg-item") || h.default.hasClass(e.target, "lg-img-wrap") && s) && (h.default.hasClass(t.outer, "lg-dragging") || t.destroy())
                    }))
                }, l.prototype.destroy = function(e) {
                    var t, s = this;
                    if (e || h.default.trigger(s.el, "onBeforeClose"), document.body.scrollTop = s.prevScrollTop, document.documentElement.scrollTop = s.prevScrollTop, e) {
                        if (!s.s.dynamic)
                            for (var l = 0; l < this.items.length; l++) h.default.off(this.items[l], ".lg"), h.default.off(this.items[l], ".lgcustom");
                        var i = s.el.getAttribute("lg-uid");
                        delete window.lgData[i], s.el.removeAttribute("lg-uid")
                    }
                    for (t in h.default.off(this.el, ".lgtm"), window.lgModules) s.modules[t] && s.modules[t].destroy();
                    this.lGalleryOn = !1, clearTimeout(s.hideBartimeout), this.hideBartimeout = !1, h.default.off(window, ".lg"), h.default.removeClass(document.body, "lg-on"), h.default.removeClass(document.body, "lg-from-hash"), s.outer && h.default.removeClass(s.outer, "lg-visible"), h.default.removeClass(document.querySelector(".lg-backdrop"), "in"), setTimeout(function() {
                        try {
                            s.outer && s.outer.parentNode.removeChild(s.outer), document.querySelector(".lg-backdrop") && document.querySelector(".lg-backdrop").parentNode.removeChild(document.querySelector(".lg-backdrop")), e || h.default.trigger(s.el, "onCloseAfter")
                        } catch (e) {}
                    }, s.s.backdropDuration + 50)
                }, window.lightGallery = function(e, t) {
                    if (e) try {
                        if (e.getAttribute("lg-uid")) try {
                            window.lgData[e.getAttribute("lg-uid")].init()
                        } catch (e) {
                            console.error("lightGallery has not initiated properly")
                        } else {
                            var s = "lg" + window.lgData.uid++;
                            window.lgData[s] = new l(e, t), e.setAttribute("lg-uid", s)
                        }
                    } catch (e) {
                        console.error("lightGallery has not initiated properly")
                    }
                }
            }, void 0 !== s ? i(e("./lg-utils")) : (i(l.lgUtils), l.lightgallery = {})
        }, {
            "./lg-utils": 1
        }]
    }, {}, [2])(2)
});