(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [671],
  {
    2703: function (t, e, i) {
      "use strict";
      var s = i(414);
      function r() {}
      function o() {}
      (o.resetWarningCache = r),
        (t.exports = function () {
          function t(t, e, i, r, o, n) {
            if (n !== s) {
              var l = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((l.name = "Invariant Violation"), l);
            }
          }
          function e() {
            return t;
          }
          t.isRequired = t;
          var i = {
            array: t,
            bigint: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: e,
            element: t,
            elementType: t,
            instanceOf: e,
            node: t,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e,
            checkPropTypes: o,
            resetWarningCache: r,
          };
          return (i.PropTypes = i), i;
        });
    },
    5697: function (t, e, i) {
      t.exports = i(2703)();
    },
    414: function (t) {
      "use strict";
      t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    139: function (t, e, i) {
      "use strict";
      /**
       * @license React
       * use-sync-external-store-shim/with-selector.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var s = i(7294),
        r = i(1688),
        o =
          "function" == typeof Object.is
            ? Object.is
            : function (t, e) {
                return (
                  (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e)
                );
              },
        n = r.useSyncExternalStore,
        l = s.useRef,
        a = s.useEffect,
        h = s.useMemo,
        c = s.useDebugValue;
      e.useSyncExternalStoreWithSelector = function (t, e, i, s, r) {
        var u = l(null);
        if (null === u.current) {
          var p = { hasValue: !1, value: null };
          u.current = p;
        } else p = u.current;
        u = h(
          function () {
            function t(t) {
              if (!a) {
                if (
                  ((a = !0), (n = t), (t = s(t)), void 0 !== r && p.hasValue)
                ) {
                  var e = p.value;
                  if (r(e, t)) return (l = e);
                }
                return (l = t);
              }
              if (((e = l), o(n, t))) return e;
              var i = s(t);
              return void 0 !== r && r(e, i) ? e : ((n = t), (l = i));
            }
            var n,
              l,
              a = !1,
              h = void 0 === i ? null : i;
            return [
              function () {
                return t(e());
              },
              null === h
                ? void 0
                : function () {
                    return t(h());
                  },
            ];
          },
          [e, i, s, r]
        );
        var d = n(t, u[0], u[1]);
        return (
          a(
            function () {
              (p.hasValue = !0), (p.value = d);
            },
            [d]
          ),
          c(d),
          d
        );
      };
    },
    2798: function (t, e, i) {
      "use strict";
      t.exports = i(139);
    },
    7671: function (t, e, i) {
      "use strict";
      i.d(e, {
        pi: function () {
          return z;
        },
        LZ: function () {
          return O;
        },
      });
      var s,
        r = i(7294),
        o =
          "undefined" != typeof window &&
          new (class {
            constructor() {
              (this.raf = (t) => {
                requestAnimationFrame(this.raf);
                let e = t - this.now;
                this.now = t;
                for (let i = 0; i < this.callbacks.length; i++)
                  this.callbacks[i].callback(t, e);
              }),
                (this.callbacks = []),
                (this.now = performance.now()),
                requestAnimationFrame(this.raf);
            }
            add(t, e = 0) {
              return (
                this.callbacks.push({ callback: t, priority: e }),
                this.callbacks.sort((t, e) => t.priority - e.priority),
                () => this.remove(t)
              );
            }
            remove(t) {
              this.callbacks = this.callbacks.filter(
                ({ callback: e }) => t !== e
              );
            }
          })();
      function n() {
        return (n = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var s in i)
                  Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
              }
              return t;
            }).apply(this, arguments);
      }
      function l(t, e, i) {
        return Math.max(t, Math.min(e, i));
      }
      class a {
        advance(t) {
          var e, i, s, r;
          if (!this.isRunning) return;
          let o = !1;
          if (this.lerp)
            (this.value =
              ((i = this.value),
              (s = this.to),
              (1 - (r = 1 - Math.exp(-60 * this.lerp * t))) * i + r * s)),
              Math.round(this.value) === this.to &&
                ((this.value = this.to), (o = !0));
          else {
            this.currentTime += t;
            let e = l(0, this.currentTime / this.duration, 1);
            o = e >= 1;
            let i = o ? 1 : this.easing(e);
            this.value = this.from + (this.to - this.from) * i;
          }
          null == (e = this.onUpdate) || e.call(this, this.value, o),
            o && this.stop();
        }
        stop() {
          this.isRunning = !1;
        }
        fromTo(
          t,
          e,
          {
            lerp: i = 0.1,
            duration: s = 1,
            easing: r = (t) => t,
            onStart: o,
            onUpdate: n,
          }
        ) {
          (this.from = this.value = t),
            (this.to = e),
            (this.lerp = i),
            (this.duration = s),
            (this.easing = r),
            (this.currentTime = 0),
            (this.isRunning = !0),
            null == o || o(),
            (this.onUpdate = n);
        }
      }
      class h {
        constructor({ wrapper: t, content: e, autoResize: i = !0 } = {}) {
          if (
            ((this.resize = () => {
              this.onWrapperResize(), this.onContentResize();
            }),
            (this.onWrapperResize = () => {
              this.wrapper === window
                ? ((this.width = window.innerWidth),
                  (this.height = window.innerHeight))
                : ((this.width = this.wrapper.clientWidth),
                  (this.height = this.wrapper.clientHeight));
            }),
            (this.onContentResize = () => {
              (this.scrollHeight = this.content.scrollHeight),
                (this.scrollWidth = this.content.scrollWidth);
            }),
            (this.wrapper = t),
            (this.content = e),
            i)
          ) {
            var s;
            let t;
            let e =
              ((s = this.resize),
              function () {
                let e = arguments,
                  i = this;
                clearTimeout(t),
                  (t = setTimeout(function () {
                    s.apply(i, e);
                  }, 250));
              });
            this.wrapper !== window &&
              ((this.wrapperResizeObserver = new ResizeObserver(e)),
              this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(e)),
              this.contentResizeObserver.observe(this.content);
          }
          this.resize();
        }
        destroy() {
          var t, e;
          null == (t = this.wrapperResizeObserver) || t.disconnect(),
            null == (e = this.contentResizeObserver) || e.disconnect();
        }
        get limit() {
          return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height,
          };
        }
      }
      class c {
        constructor() {
          this.events = {};
        }
        emit(t, ...e) {
          let i = this.events[t] || [];
          for (let t = 0, s = i.length; t < s; t++) i[t](...e);
        }
        on(t, e) {
          var i;
          return (
            (null == (i = this.events[t]) ? void 0 : i.push(e)) ||
              (this.events[t] = [e]),
            () => {
              var i;
              this.events[t] =
                null == (i = this.events[t])
                  ? void 0
                  : i.filter((t) => e !== t);
            }
          );
        }
        off(t, e) {
          var i;
          this.events[t] =
            null == (i = this.events[t]) ? void 0 : i.filter((t) => e !== t);
        }
        destroy() {
          this.events = {};
        }
      }
      class u {
        constructor(
          t,
          {
            wheelMultiplier: e = 1,
            touchMultiplier: i = 2,
            normalizeWheel: s = !1,
          }
        ) {
          (this.onTouchStart = (t) => {
            let { clientX: e, clientY: i } = t.targetTouches
              ? t.targetTouches[0]
              : t;
            (this.touchStart.x = e),
              (this.touchStart.y = i),
              (this.lastDelta = { x: 0, y: 0 });
          }),
            (this.onTouchMove = (t) => {
              let { clientX: e, clientY: i } = t.targetTouches
                  ? t.targetTouches[0]
                  : t,
                s = -(e - this.touchStart.x) * this.touchMultiplier,
                r = -(i - this.touchStart.y) * this.touchMultiplier;
              (this.touchStart.x = e),
                (this.touchStart.y = i),
                (this.lastDelta = { x: s, y: r }),
                this.emitter.emit("scroll", { deltaX: s, deltaY: r, event: t });
            }),
            (this.onTouchEnd = (t) => {
              this.emitter.emit("scroll", {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: t,
              });
            }),
            (this.onWheel = (t) => {
              let { deltaX: e, deltaY: i } = t;
              this.normalizeWheel &&
                ((e = l(-100, e, 100)), (i = l(-100, i, 100))),
                (e *= this.wheelMultiplier),
                (i *= this.wheelMultiplier),
                this.emitter.emit("scroll", { deltaX: e, deltaY: i, event: t });
            }),
            (this.element = t),
            (this.wheelMultiplier = e),
            (this.touchMultiplier = i),
            (this.normalizeWheel = s),
            (this.touchStart = { x: null, y: null }),
            (this.emitter = new c()),
            this.element.addEventListener("wheel", this.onWheel, {
              passive: !1,
            }),
            this.element.addEventListener("touchstart", this.onTouchStart, {
              passive: !1,
            }),
            this.element.addEventListener("touchmove", this.onTouchMove, {
              passive: !1,
            }),
            this.element.addEventListener("touchend", this.onTouchEnd, {
              passive: !1,
            });
        }
        on(t, e) {
          return this.emitter.on(t, e);
        }
        destroy() {
          this.emitter.destroy(),
            this.element.removeEventListener("wheel", this.onWheel, {
              passive: !1,
            }),
            this.element.removeEventListener("touchstart", this.onTouchStart, {
              passive: !1,
            }),
            this.element.removeEventListener("touchmove", this.onTouchMove, {
              passive: !1,
            }),
            this.element.removeEventListener("touchend", this.onTouchEnd, {
              passive: !1,
            });
        }
      }
      class p {
        constructor({
          wrapper: t = window,
          content: e = document.documentElement,
          wheelEventsTarget: i = t,
          eventsTarget: s = i,
          smoothWheel: r = !0,
          smoothTouch: o = !1,
          syncTouch: l = !1,
          syncTouchLerp: p = 0.1,
          __iosNoInertiaSyncTouchLerp: d = 0.4,
          touchInertiaMultiplier: m = 35,
          duration: f,
          easing: v = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          lerp: g = !f && 0.1,
          infinite: S = !1,
          orientation: y = "vertical",
          gestureOrientation: b = "vertical",
          touchMultiplier: w = 1,
          wheelMultiplier: E = 1,
          normalizeWheel: T = !1,
          autoResize: _ = !0,
        } = {}) {
          (this.onVirtualScroll = ({ deltaX: t, deltaY: e, event: i }) => {
            if (i.ctrlKey) return;
            let s = i.type.includes("touch"),
              r = i.type.includes("wheel");
            if (
              ("both" === this.options.gestureOrientation &&
                0 === t &&
                0 === e) ||
              ("vertical" === this.options.gestureOrientation && 0 === e) ||
              ("horizontal" === this.options.gestureOrientation && 0 === t) ||
              (s &&
                "vertical" === this.options.gestureOrientation &&
                0 === this.scroll &&
                !this.options.infinite &&
                e <= 0)
            )
              return;
            let o = i.composedPath();
            if (
              (o = o.slice(0, o.indexOf(this.rootElement))).find((t) => {
                var e;
                return (
                  (null == t.hasAttribute
                    ? void 0
                    : t.hasAttribute("data-lenis-prevent")) ||
                  (s &&
                    (null == t.hasAttribute
                      ? void 0
                      : t.hasAttribute("data-lenis-prevent-touch"))) ||
                  (r &&
                    (null == t.hasAttribute
                      ? void 0
                      : t.hasAttribute("data-lenis-prevent-wheel"))) ||
                  (null == (e = t.classList) ? void 0 : e.contains("lenis"))
                );
              })
            )
              return;
            if (this.isStopped || this.isLocked) return void i.preventDefault();
            if (
              ((this.isSmooth =
                ((this.options.smoothTouch || this.options.syncTouch) && s) ||
                (this.options.smoothWheel && r)),
              !this.isSmooth)
            )
              return (this.isScrolling = !1), void this.animate.stop();
            i.preventDefault();
            let l = e;
            "both" === this.options.gestureOrientation
              ? (l = Math.abs(e) > Math.abs(t) ? e : t)
              : "horizontal" === this.options.gestureOrientation && (l = t);
            let a = s && this.options.syncTouch,
              h = s && "touchend" === i.type && Math.abs(l) > 1;
            h && (l = this.velocity * this.options.touchInertiaMultiplier),
              this.scrollTo(
                this.targetScroll + l,
                n(
                  { programmatic: !1 },
                  a && {
                    lerp: h
                      ? this.syncTouchLerp
                      : this.options.__iosNoInertiaSyncTouchLerp,
                  }
                )
              );
          }),
            (this.onNativeScroll = () => {
              if (!this.__preventNextScrollEvent && !this.isScrolling) {
                let t = this.animatedScroll;
                (this.animatedScroll = this.targetScroll = this.actualScroll),
                  (this.velocity = 0),
                  (this.direction = Math.sign(this.animatedScroll - t)),
                  this.emit();
              }
            }),
            (window.lenisVersion = "1.0.29"),
            (t !== document.documentElement && t !== document.body) ||
              (t = window),
            (this.options = {
              wrapper: t,
              content: e,
              wheelEventsTarget: i,
              eventsTarget: s,
              smoothWheel: r,
              smoothTouch: o,
              syncTouch: l,
              syncTouchLerp: p,
              __iosNoInertiaSyncTouchLerp: d,
              touchInertiaMultiplier: m,
              duration: f,
              easing: v,
              lerp: g,
              infinite: S,
              gestureOrientation: b,
              orientation: y,
              touchMultiplier: w,
              wheelMultiplier: E,
              normalizeWheel: T,
              autoResize: _,
            }),
            (this.animate = new a()),
            (this.emitter = new c()),
            (this.dimensions = new h({
              wrapper: t,
              content: e,
              autoResize: _,
            })),
            this.toggleClass("lenis", !0),
            (this.velocity = 0),
            (this.isLocked = !1),
            (this.isStopped = !1),
            (this.isSmooth = l || r || o),
            (this.isScrolling = !1),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            this.options.wrapper.addEventListener(
              "scroll",
              this.onNativeScroll,
              { passive: !1 }
            ),
            (this.virtualScroll = new u(s, {
              touchMultiplier: w,
              wheelMultiplier: E,
              normalizeWheel: T,
            })),
            this.virtualScroll.on("scroll", this.onVirtualScroll);
        }
        destroy() {
          this.emitter.destroy(),
            this.options.wrapper.removeEventListener(
              "scroll",
              this.onNativeScroll,
              { passive: !1 }
            ),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.toggleClass("lenis", !1),
            this.toggleClass("lenis-smooth", !1),
            this.toggleClass("lenis-scrolling", !1),
            this.toggleClass("lenis-stopped", !1),
            this.toggleClass("lenis-locked", !1);
        }
        on(t, e) {
          return this.emitter.on(t, e);
        }
        off(t, e) {
          return this.emitter.off(t, e);
        }
        setScroll(t) {
          this.isHorizontal
            ? (this.rootElement.scrollLeft = t)
            : (this.rootElement.scrollTop = t);
        }
        resize() {
          this.dimensions.resize();
        }
        emit() {
          this.emitter.emit("scroll", this);
        }
        reset() {
          (this.isLocked = !1),
            (this.isScrolling = !1),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.velocity = 0),
            this.animate.stop();
        }
        start() {
          (this.isStopped = !1), this.reset();
        }
        stop() {
          (this.isStopped = !0), this.animate.stop(), this.reset();
        }
        raf(t) {
          let e = t - (this.time || t);
          (this.time = t), this.animate.advance(0.001 * e);
        }
        scrollTo(
          t,
          {
            offset: e = 0,
            immediate: i = !1,
            lock: s = !1,
            duration: r = this.options.duration,
            easing: o = this.options.easing,
            lerp: n = !r && this.options.lerp,
            onComplete: a = null,
            force: h = !1,
            programmatic: c = !0,
          } = {}
        ) {
          if ((!this.isStopped && !this.isLocked) || h) {
            if (["top", "left", "start"].includes(t)) t = 0;
            else if (["bottom", "right", "end"].includes(t)) t = this.limit;
            else {
              var u;
              let i;
              if (
                ("string" == typeof t
                  ? (i = document.querySelector(t))
                  : null != (u = t) && u.nodeType && (i = t),
                i)
              ) {
                if (this.options.wrapper !== window) {
                  let t = this.options.wrapper.getBoundingClientRect();
                  e -= this.isHorizontal ? t.left : t.top;
                }
                let s = i.getBoundingClientRect();
                t = (this.isHorizontal ? s.left : s.top) + this.animatedScroll;
              }
            }
            if ("number" == typeof t) {
              if (
                ((t += e),
                (t = Math.round(t)),
                this.options.infinite
                  ? c && (this.targetScroll = this.animatedScroll = this.scroll)
                  : (t = l(0, t, this.limit)),
                i)
              )
                return (
                  (this.animatedScroll = this.targetScroll = t),
                  this.setScroll(this.scroll),
                  this.reset(),
                  void (null == a || a(this))
                );
              if (!c) {
                if (t === this.targetScroll) return;
                this.targetScroll = t;
              }
              this.animate.fromTo(this.animatedScroll, t, {
                duration: r,
                easing: o,
                lerp: n,
                onStart: () => {
                  s && (this.isLocked = !0), (this.isScrolling = !0);
                },
                onUpdate: (t, e) => {
                  (this.isScrolling = !0),
                    (this.velocity = t - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = t),
                    this.setScroll(this.scroll),
                    c && (this.targetScroll = t),
                    e || this.emit(),
                    e &&
                      (this.reset(),
                      this.emit(),
                      null == a || a(this),
                      (this.__preventNextScrollEvent = !0),
                      requestAnimationFrame(() => {
                        delete this.__preventNextScrollEvent;
                      }));
                },
              });
            }
          }
        }
        get rootElement() {
          return this.options.wrapper === window
            ? document.documentElement
            : this.options.wrapper;
        }
        get limit() {
          return this.dimensions.limit[this.isHorizontal ? "x" : "y"];
        }
        get isHorizontal() {
          return "horizontal" === this.options.orientation;
        }
        get actualScroll() {
          return this.isHorizontal
            ? this.rootElement.scrollLeft
            : this.rootElement.scrollTop;
        }
        get scroll() {
          var t;
          return this.options.infinite
            ? ((this.animatedScroll % (t = this.limit)) + t) % t
            : this.animatedScroll;
        }
        get progress() {
          return 0 === this.limit ? 1 : this.scroll / this.limit;
        }
        get isSmooth() {
          return this.__isSmooth;
        }
        set isSmooth(t) {
          this.__isSmooth !== t &&
            ((this.__isSmooth = t), this.toggleClass("lenis-smooth", t));
        }
        get isScrolling() {
          return this.__isScrolling;
        }
        set isScrolling(t) {
          this.__isScrolling !== t &&
            ((this.__isScrolling = t), this.toggleClass("lenis-scrolling", t));
        }
        get isStopped() {
          return this.__isStopped;
        }
        set isStopped(t) {
          this.__isStopped !== t &&
            ((this.__isStopped = t), this.toggleClass("lenis-stopped", t));
        }
        get isLocked() {
          return this.__isLocked;
        }
        set isLocked(t) {
          this.__isLocked !== t &&
            ((this.__isLocked = t), this.toggleClass("lenis-locked", t));
        }
        get className() {
          let t = "lenis";
          return (
            this.isStopped && (t += " lenis-stopped"),
            this.isLocked && (t += " lenis-locked"),
            this.isScrolling && (t += " lenis-scrolling"),
            this.isSmooth && (t += " lenis-smooth"),
            t
          );
        }
        toggleClass(t, e) {
          this.rootElement.classList.toggle(t, e),
            this.emitter.emit("className change", this);
        }
      }
      var d = i(5697);
      let m = (t) => {
          let e;
          let i = new Set(),
            s = (t, s) => {
              let r = "function" == typeof t ? t(e) : t;
              if (!Object.is(r, e)) {
                let t = e;
                (e = (null != s ? s : "object" != typeof r || null === r)
                  ? r
                  : Object.assign({}, e, r)),
                  i.forEach((i) => i(e, t));
              }
            },
            r = () => e,
            o = {
              setState: s,
              getState: r,
              subscribe: (t) => (i.add(t), () => i.delete(t)),
              destroy: () => {
                console.warn(
                  "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
                ),
                  i.clear();
              },
            };
          return (e = t(s, r, o)), o;
        },
        f = (t) => (t ? m(t) : m);
      var v = i(2798);
      let { useDebugValue: g } = r,
        { useSyncExternalStoreWithSelector: S } = v,
        y = !1,
        b = (t) => {
          "function" != typeof t &&
            console.warn(
              "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
            );
          let e = "function" == typeof t ? f(t) : t,
            i = (t, i) =>
              (function (t, e = t.getState, i) {
                i &&
                  !y &&
                  (console.warn(
                    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
                  ),
                  (y = !0));
                let s = S(
                  t.subscribe,
                  t.getState,
                  t.getServerState || t.getState,
                  e,
                  i
                );
                return g(s), s;
              })(e, t, i);
          return Object.assign(i, e), i;
        };
      var w = function () {
        for (var t, e, i = 0, s = ""; i < arguments.length; )
          (t = arguments[i++]) &&
            (e = (function t(e) {
              var i,
                s,
                r = "";
              if ("string" == typeof e || "number" == typeof e) r += e;
              else if ("object" == typeof e) {
                if (Array.isArray(e))
                  for (i = 0; i < e.length; i++)
                    e[i] && (s = t(e[i])) && (r && (r += " "), (r += s));
                else for (i in e) e[i] && (r && (r += " "), (r += i));
              }
              return r;
            })(t)) &&
            (s && (s += " "), (s += e));
        return s;
      };
      function E() {
        return (E = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var s in i)
                  Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
              }
              return t;
            }).apply(this, arguments);
      }
      let T = [
          "children",
          "root",
          "options",
          "autoRaf",
          "rafPriority",
          "className",
        ],
        _ = (0, r.createContext)(),
        k = (s = () => ({})) ? b(s) : b;
      function O(t, e = [], i = 0) {
        let {
          lenis: s,
          addCallback: o,
          removeCallback: n,
        } = (function () {
          let t = (0, r.useContext)(_),
            e = k();
          return null != t ? t : e;
        })();
        return (
          (0, r.useEffect)(() => {
            if (t && o && n && s)
              return (
                o(t, i),
                t(s),
                () => {
                  n(t);
                }
              );
          }, [s, o, n, i, ...e]),
          s
        );
      }
      let z = (0, r.forwardRef)((t, e) => {
        let {
            children: i,
            root: s = !1,
            options: n = {},
            autoRaf: l = !0,
            rafPriority: a = 0,
            className: h,
          } = t,
          c = (function (t, e) {
            if (null == t) return {};
            var i,
              s,
              r = {},
              o = Object.keys(t);
            for (s = 0; s < o.length; s++)
              e.indexOf((i = o[s])) >= 0 || (r[i] = t[i]);
            return r;
          })(t, T),
          u = (0, r.useRef)(),
          d = (0, r.useRef)(),
          [m, f] = (0, r.useState)(),
          v = (0, r.useRef)([]),
          g = (0, r.useCallback)((t, e) => {
            v.current.push({ callback: t, priority: e }),
              v.current.sort((t, e) => t.priority - e.priority);
          }, []),
          S = (0, r.useCallback)((t) => {
            v.current = v.current.filter((e) => e.callback !== t);
          }, []);
        (0, r.useImperativeHandle)(e, () => m, [m]),
          (0, r.useEffect)(() => {
            let t = new p(
              E({}, n, !s && { wrapper: u.current, content: d.current })
            );
            return (
              f(t),
              () => {
                t.destroy(), f(void 0);
              }
            );
          }, [s, JSON.stringify(n)]),
          (function (t, e = 0) {
            (0, r.useEffect)(() => {
              if (t) return o.add(t, e), () => o.remove(t);
            }, [t, e]);
          })((t) => {
            l && (null == m || m.raf(t));
          }, a),
          (0, r.useEffect)(() => {
            s &&
              m &&
              k.setState({ lenis: m, addCallback: g, removeCallback: S });
          }, [s, m, g, S]);
        let y = (0, r.useCallback)((t) => {
          for (let e = 0; e < v.current.length; e++) v.current[e].callback(t);
        }, []);
        (0, r.useEffect)(
          () => (
            null == m || m.on("scroll", y),
            () => {
              null == m || m.off("scroll", y);
            }
          ),
          [m, y]
        );
        let b = (0, r.useCallback)(() => {
          u.current &&
            (u.current.className = w(null == m ? void 0 : m.className, h));
        }, [m, h]);
        return (
          (0, r.useEffect)(
            () => (
              b(),
              null == m || m.on("className change", b),
              () => {
                null == m || m.off("className change", b);
              }
            ),
            [m, b]
          ),
          r.createElement(
            _.Provider,
            { value: { lenis: m, addCallback: g, removeCallback: S } },
            s
              ? i
              : r.createElement(
                  "div",
                  E(
                    {
                      ref: u,
                      className: w(null == m ? void 0 : m.className, h),
                    },
                    c
                  ),
                  r.createElement("div", { ref: d }, i)
                )
          )
        );
      });
      (z.displayName = "ReactLenis"),
        (z.propTypes = {
          children: d.node,
          root: d.bool,
          options: d.object,
          autoRaf: d.bool,
          rafPriority: d.number,
          className: d.string,
        });
    },
  },
]);
