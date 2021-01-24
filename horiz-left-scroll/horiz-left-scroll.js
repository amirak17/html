! function (e) {
	"function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function (e) {
	var t = function (n, i) {
		function o(t) {
			var i, o, r = t.data();
			return r.pattern && r.heights && e.isArray(r.heights) ? (retinaSuffix = f && void 0 !== r.retina ? n.retinaSuffix : "", i = i || r.pattern, "object" == typeof r.heights[0] ? (o = function () {
				for (var n = e.map(r.heights, function (e) {
						return e.size
					}), i = m(t.height(), n), o = r.heights.length - 1; o >= 0; o--)
					if (r.heights[o].size === i) return r.heights[o].slug
			}(), i = i.replace(n.sizePattern, o + retinaSuffix)) : i = i.replace(n.sizePattern, m(t.height(), r.heights) + retinaSuffix)) : (i = f ? r.srcRetina : r.src, i = i || r.src), i
		}

		function r(e) {
			e.addClass("ll-loaded").removeClass("ll-notloaded"), e.trigger("loaded"), "function" == typeof i && i.call(e)
		}

		function a() {
			u.one("laziestloader", function () {
				var t, i = e(this);
				i.data().ratio && d.call(this), n.setSourceMode && (t = n.getSource(i), t && this.getAttribute("src") !== t && this.setAttribute("src", t)), i.addClass("ll-loadstarted"), !n.setSourceMode || "IMG" !== this.nodeName && "VIDEO" !== this.nodeName && "AUDIO" !== this.nodeName ? r(i) : "IMG" === this.nodeName ? this.onload = function () {
					r(i)
				} : this.onloadstart = function () {
					r(i)
				}
			})
		}

		function c() {
			u.off("laziestloader")
		}

		function s() {
			var t = document.documentElement,
				i = window.innerHeight || t.clientHeight,
				o = window.innerWidth || t.clientWidth,
				r = n.threshold,
				a = u.not(h).filter(function () {
					if (!e(this).is(":hidden")) {
						var t = e(this)[0].getBoundingClientRect();
						return t.bottom + r > 0 && t.right + r > 0 && t.left < o + r && t.top < i + r
					}
				});
			a.trigger("laziestloader"), h.add(a)
		}

		function d() {
			var t = e(this),
				n = t.data(),
				i = window.innerWidth || docEl.clientWidth,
				o = window.innerHeight || docEl.clientHeight;
			n.ratio = n.ratio || n.widthMultiplier, n.ratio && i > 450 && o > 350 && t.css({
				width: Math.round(t.height() * n.ratio)
			})
		}
		var l = e(window),
			u = this,
			h = e(),
			f = window.devicePixelRatio > 1,
			v = !1;
		n = e.extend(!0, {
			threshold: 0,
			sizePattern: /{{SIZE}}/gi,
			retinaSuffix: "R",
			getSource: o,
			event: "scroll",
			scrollThrottle: 250,
			sizeOffsetPercent: 0,
			setSourceMode: !0
		}, n);
		var g = "string" == typeof n.event && 0 === n.event.indexOf("scroll"),
			m = t.bestFit = function (e, t) {
				var i = t[t.length - 1],
					o = t.length,
					r = e * (n.sizeOffsetPercent / 100);
				for (t.sort(function (e, t) {
						return e - t
					}); o--;) e - r <= t[o] && (i = t[o]);
				return i
			};
		return u.addClass("ll-init ll-notloaded").each(d), a(), g ? (l.on(n.event, function () {
			v = !0
		}), setInterval(function () {
			v && (v = !1, s())
		}, n.scrollThrottle)) : "function" == typeof n.event ? n.event(s) : l.on(n.event, function () {
			s()
		}), l.resize(function () {
			h = e(), c(), a(), s()
		}), e(document).ready(function () {
			s()
		}), this
	};
	e.fn.laziestloader = t
}),
function () {
	$(function () {
		function e(e) {
			var t = void 0 !== e ? v.height() : f.height();
			z > 450 && C > 350 && m.each(function (e, n) {
				var i = $(n);
				i.width(Math.round(i.data("ratio") * t))
			})
		}

		function t() {
			v.height(g.width() + f.height() - f.width())
		}

		function n() {
			var e = 0 !== document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
			g.css("margin-left", -e + "px"), e > 1 && w ? (g.removeClass("header-visible"), w = !1) : 1 >= e && !w && (g.addClass("header-visible"), w = !0), $("section.text, section.quote, section.caption, section.chapter, section#header-card").inView(-200)
		}

		function i(e, t) {
			var n = g[0].scrollLeft;
			return 668 > z ? (g.removeClass("header-visible"), void(w = !1)) : (n > 1 && w ? (g.removeClass("header-visible"), w = !1) : 1 >= n && !w && (g.addClass("header-visible"), w = !0), void((void 0 === t || t !== n) && setTimeout(function () {
				i(!1, n)
			}, 250)))
		}

		function o() {
			g.height(f.height()), f.trigger("scroll"), setTimeout(function () {
				t()
			}, 1e3)
		}

		function r() {
			e(!0), f.trigger("scroll")
		}

		function a() {
			x.addClass("opaque")
		}

		function c(e, t) {
			var n = t.lastIndexOf(" "),
				i = t.replace(/\s+$/g, "").substring(0, n);
			t.length - i.length < 4 && (i = i.substring(0, i.lastIndexOf(" "))), t = i, t = t.replace(/[\s|;|,|!|.|?|\n|\u3000]+$/g, ""), t += " ...", e[0].innerHTML = t
		}

		function s(e, t, n) {
			var i = " ";
			if ("undefined" == typeof e || !e.length || null === e) return {
				isTruncated: !1,
				truncatedHtml: t
			};
			for (var o = !1, r = t.trim().split(i), a = "", s = "", d = 0; d < r.length; d++) {
				if (s = s + i + r[d], e[0].innerHTML = s, e.height() > n) {
					c(e, a), o = !0;
					break
				}
				a = s
			}
			return {
				isTruncated: o,
				truncatedHtml: e[0].innerHTML
			}
		}

		function d() {
			var e = $(this),
				t = e.parent();
			if (t.hasClass("truncated")) {
				var n = e.data("truncate");
				e.data("truncate", encodeURI(e.html())), e.html(decodeURI(n)), t.removeClass("truncated"), t.addClass("expanded")
			} else {
				if (t.hasClass("expanded")) return;
				var n = e.data("truncate");
				if (e.data("truncate", encodeURI(e.html())), void 0 === n) {
					var i = s(e, e.html(), 40);
					n = i.truncatedHtml
				}
				e.html(decodeURI(n)), t.addClass(i.isTruncated ? "truncated" : "expanded")
			}
		}

		function l() {
			var e = $("img.pano"),
				t = e.next(),
				n = $("section.caption"),
				i = n.next();
			t.each(function () {
				"text" === $(this)[0].className && $(this).css("padding-bottom", "25px")
			}), i.each(function () {
				"text" === $(this)[0].className && ($(this).css({
					"padding-bottom": "50px",
					"padding-top": "0"
				}), $(this).prev().children("div").css({
					padding: "0 15px 25px"
				}))
			})
		}

		function u() {
			if (T || $("section.caption > div").each(d), $(".pano").laziestloader({
					threshold: 600,
					event: "scroll touchend",
					sizePattern: /360R/,
					sizeOffsetPercent: 10
				}, function () {
					p || t()
				}), p) {
				var e = h.debounce(r, 250);
				f.on("resize", e), setTimeout(function () {
					f.resize()
				}, 1e3);
				var c;
				g.on("touchend", i), b.on({
					touchstart: function () {
						c = setInterval(function () {
							g.scrollLeft(2 + g.scrollLeft())
						}, 10), i(), event.preventDefault()
					},
					touchend: function () {
						clearInterval(c), i(), event.preventDefault()
					}
				}), T || g.on("touchstart", "section.caption > div", d)
			} else {
				var s = h.debounce(o, 250);
				f.on("resize", s), f.resize(), f.on("scroll", n), $(document).keydown(function (e) {
					switch (e.which) {
						case 37:
							window.scrollTo(0, $(document).scrollTop() - 40);
							break;
						case 39:
							window.scrollTo(0, 40 + $(document).scrollTop());
							break;
						default:
							return
					}
					e.preventDefault()
				}), T || g.on("click", "section.caption > div", d), $("html").on("mousewheel", function (e) {
					e.originalEvent.wheelDelta === e.originalEvent.wheelDeltaX && e.originalEvent.wheelDeltaX && a()
				}), $("html").on("DOMMouseScroll", function (e) {
					1 === e.originalEvent.axis && a()
				});
				var l = setTimeout(a, 1e4);
				$(window).one("touchstart touchmove DOMMouseScroll mousewheel keypress focus", function () {
					clearTimeout(l)
				})
			}
			socialRiser.create();
			Iframe.init()
		}
		var h = {
				detectDevice: function () {
					var e = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i,
						t = e.test(navigator.userAgent),
						n = t ? "mobile" : "desktop";
					return $("html").attr("device", n), n
				},
				debounce: function (e, t, n) {
					var i;
					return function () {
						var o = this,
							r = arguments,
							a = function () {
								i = null, n || e.apply(o, r)
							},
							c = n && !i;
						clearTimeout(i), i = setTimeout(a, t), c && e.apply(o, r)
					}
				}
			},
			f = $(window),
			v = $("body"),
			g = $("#main-wrapper"),
			m = g.find(".pano"),
			p = ($("#header-background"), "mobile" === h.detectDevice() && Modernizr.touch),
			w = !0,
			b = $(".arrow-right"),
			x = $("#start-message"),
			T = v.data("captions"),
			z = window.innerWidth || docEl.clientWidth,
			C = window.innerHeight || docEl.clientHeight;
		$.fn.inView = function (e) {
			{
				var t = this;
				document.documentElement, t.each(function () {
					var t = $(this);
					if (!t.is(":hidden")) {
						var n = t[0].getBoundingClientRect(),
							i = n.right + e > 0 && n.left < z + e && n.top < C + e;
						i ? t.addClass("in-view") : t.removeClass("in-view")
					}
				})
			}
			return this
		}, u(), 668 > z && l()
	})
}();