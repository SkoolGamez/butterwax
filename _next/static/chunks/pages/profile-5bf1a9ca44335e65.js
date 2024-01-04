(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [277],
  {
    3235: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/profile",
        function () {
          return r(7408);
        },
      ]);
    },
    4211: function (e, t, r) {
      "use strict";
      var a = r(5893),
        l = r(7294),
        n = r(2853),
        i = r.n(n),
        o = r(4924),
        c = r(6010),
        s = r(8440);
      let u = l.forwardRef((e, t) => {
        let {
            className: r,
            copy: n,
            enabled: u = !1,
            glui: f,
            rotation: _,
          } = e,
          d = (0, l.useRef)(),
          p = (0, l.useRef)([]);
        (0, l.useRef)(!1),
          (0, l.useImperativeHandle)(
            t,
            () => ({
              async animateSet() {
                p.current.forEach((e) => {
                  e.animateSet();
                });
              },
              animateIn() {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0;
                p.current.forEach((t) => {
                  t.animateIn(e);
                });
              },
              animateOut() {
                p.current.forEach((e) => {
                  e.animateOut();
                });
              },
            }),
            []
          );
        let { wait: m } = (0, s.mI)();
        return (
          (0, l.useEffect)(() => {
            p.current.map(async (e) => {
              await m(() => null !== e.glui());
              let t = e.glui();
              "boolean" != typeof t.__pristine && (t.__pristine = !0);
              let r = async () => {
                var e;
                if (
                  ((t.__pristine = !1),
                  !(null === (e = d.current) || void 0 === e
                    ? void 0
                    : e.getBoundingClientRect))
                )
                  return;
                let {
                  x: r,
                  y: a,
                  width: l,
                  height: n,
                } = d.current.getBoundingClientRect();
                (a += (0, s.TN)("scrollY") || 0),
                  (r += _ > 0 ? 0 : l / 2),
                  (a += _ > 0 ? n : n / 2),
                  (t.wrapper.rotation = _),
                  t.setTransformOrigin(r, a),
                  t.gluiElements.forEach((e) => {
                    e.__initialPosition = new Vector3(e.x, e.y, e.z);
                  });
              };
              t.__pristine && r();
            });
          }, [m, _]),
          (0, l.useEffect)(() => {
            let e = subBusState("resize", (e) => {
              e &&
                p.current.map(async (e) => {
                  var t;
                  await m(() => null !== e.glui());
                  let r = e.glui();
                  if (
                    ((r.__pristine = !1),
                    !(null === (t = d.current) || void 0 === t
                      ? void 0
                      : t.getBoundingClientRect))
                  )
                    return;
                  let {
                    x: a,
                    y: l,
                    width: n,
                    height: i,
                  } = d.current.getBoundingClientRect();
                  (l += (0, s.TN)("scrollY") || 0),
                    (a += _ > 0 ? 0 : n / 2),
                    (l += _ > 0 ? i : i / 2),
                    (r.wrapper.rotation = _),
                    r.setTransformOrigin(a, l),
                    r.gluiElements.forEach((e) => {
                      e.__initialPosition = new Vector3(e.x, e.y, e.z);
                    });
                });
            });
            return () => e();
          }),
          (0, a.jsx)("div", {
            className: (0, c.Z)(i().copy, r),
            ref: d,
            children: n.map((e, t) =>
              (0, a.jsx)(
                o.Z,
                { text: e.line || e, ref: (e) => (p.current[t] = e), glui: !0 },
                t
              )
            ),
          })
        );
      });
      (u.displayName = "AnimatingCopy"), (t.Z = u);
    },
    192: function (e, t, r) {
      "use strict";
      var a = r(5893),
        l = r(7294),
        n = r(2797),
        i = r.n(n),
        o = r(6010),
        c = r(6489),
        s = r(7735),
        u = r(9352),
        f = r(2364);
      r(3890);
      var _ = r(8440);
      r(9726);
      let d = (e) => {
        let { active: t, className: r } = e,
          n = (0, l.useRef)(),
          d = (0, s.v8)(
            n,
            {
              uniforms: {
                uActive: { value: 0 },
                tDraw: { value: null },
                uMapResolution: { value: new Vector2(1) },
              },
              keepAlive: !0,
            },
            !0
          ),
          p = (0, u.F)(),
          m = (0, f.rE)(),
          { container: h } = (0, s.pq)();
        (0, l.useEffect)(() => {
          d &&
            d.shader.uniforms.tDraw &&
            m &&
            (d.setStyle(), (d.shader.uniforms.tDraw.value = m));
        }, [d, m]),
          (0, l.useEffect)(() => {
            if (d && p) {
              let { secondary: e } = p;
              d.shader.set("uType", 1),
                t &&
                  d.shader.tween(
                    "uBorderColor",
                    new Color(e),
                    RootScene.TR_DURATION,
                    "easeOutCubic"
                  );
            }
          }, [d, p]),
          (0, l.useEffect)(() => {
            let e = (0, _.l2)("scrollY", (e) => {
              d && (d.scrollPos = e || 0);
            });
            return () => e();
          }, [d]);
        let { resize: x } = (0, _.d_)();
        (0, l.useEffect)(() => {
          x && d && d.handleResize();
        }, [x, d]);
        let { full: g } = (0, c.WZ)();
        return (0, a.jsx)("div", {
          ref: n,
          className: (0, o.Z)(i().root, g, r),
        });
      };
      (d.displayName = "Background"), (t.Z = d);
    },
    8612: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return f;
        },
      });
      var a = r(5893),
        l = r(7294),
        n = r(2364),
        i = r(5658),
        o = r(7735),
        c = r(8440),
        s = r(9726);
      let u = (0, l.forwardRef)((e, t) => {
        let { asset: r, className: u, map: f, glui: _, fixed: d = !0 } = e,
          p = (0, l.useRef)(null),
          m = (0, l.useRef)(null),
          h = (0, l.useRef)(null),
          x = (0, l.useRef)(null),
          { setSize: g } = (0, n.g3)(),
          v = (0, n.rE)();
        (0, l.useImperativeHandle)(t, () => ({
          wrapper: () => m.current,
          el: () => elRef.current,
          elGlui: () => h.current,
        }));
        let y = (0, o.v8)(
          p,
          {
            shaderName: "BaseVideoShader",
            uniforms: {
              uActive: { value: 0 },
              tDraw: { value: null },
              uScroll: { value: 0 },
              uColor: { value: new Color("#EFEFEF") },
              uBGColor: { value: new Color("#FFD600") },
              uVelocity: RootScene.VELOCITY,
              uMouseMove: RootScene.MOUSE_MOVE,
              tMap: { value: null },
              uDiscard: { value: 0 },
              uFixed: { value: d },
            },
            map: async () => {
              if (f) return (f = await f()), (x.current = f), f;
              let e = (0, i.B)(VideoTexture, { path: r.url });
              return (
                (x.current = e),
                (Global.video = e),
                (Global.videoDimensions = { width: 900, height: 900 }),
                e.texture
              );
            },
          },
          _
        );
        (0, l.useEffect)(() => {
          Global.videoDimensions &&
            y &&
            y.element.shader.set(
              "uMapResolution",
              new Vector2(
                Global.videoDimensions.width,
                Global.videoDimensions.height
              )
            );
        }, [Global.videoDimensions, y]),
          (0, l.useEffect)(() => {
            let e = (0, c.l2)("scrollY", (e) => {
              y &&
                ((y.scrollPos = e || 0),
                (y.shader.uniforms.uScroll.value = e),
                (y.element.scaleX = 1.03),
                (y.element.scaleY = 1.03),
                (e -= 10),
                d && (y.element.group.position.y = -e || 0));
            });
            return () => e();
          }, [y]);
        let { wait: b } = (0, c.mI)();
        (0, l.useEffect)(() => {
          let e = async () => {
            v &&
              b &&
              (await b(() => void 0 !== y),
              (y.shader.uniforms.tDraw.value = v));
          };
          e();
        }, [v, y, b]),
          (0, l.useEffect)(() => {
            y && (h.current = y);
          }, [y]);
        let w = (0, l.useCallback)(() => {
            g && g(3);
          }, [g]),
          R = (0, l.useCallback)(() => {
            g && g(0);
          }, [g]),
          N = (0, l.useCallback)(
            (e) => {
              if (!y) return;
              let t = window.getComputedStyle(m.current);
              ("none" === t.display || 0 === t.opacity) && (e = !1),
                x.current &&
                  (x.current[e ? "start" : "stop"](), (Global.videoInView = e)),
                y.wrapper[e ? "show" : "hide"](),
                (y.wrapper.alpha = e ? 1 : 0);
            },
            [y]
          );
        return (
          (0, s.YD)(N),
          (0, a.jsx)("div", {
            ref: m,
            onPointerEnter: w,
            onPointerLeave: R,
            style: {
              visibility: _ ? "hidden" : "visible",
              pointerEvents: _ ? "none" : "auto",
              height: "100%",
            },
            children: _
              ? (0, a.jsx)("div", { className: "".concat(u || ""), ref: p })
              : (0, a.jsx)("div", {
                  className: "".concat(u || ""),
                  ref: p,
                  children: (0, a.jsx)("video", {
                    src: r.url,
                    autoPlay: !0,
                    muted: !0,
                    loop: !0,
                    playsInline: !0,
                  }),
                }),
          })
        );
      });
      u.displayName = "BaseVideo";
      var f = u;
    },
    1770: function (e, t, r) {
      "use strict";
      var a = r(5893),
        l = r(7294),
        n = r(6010),
        i = r(4924),
        o = r(545),
        c = r(3890),
        s = r(8440);
      let u = l.forwardRef((e, t) => {
        let {
            className: r,
            copyLines: u,
            moveCharacters: f = !1,
            enable3D: _ = !0,
            offsets: d = [
              { x: -0.01, z: -2 },
              { x: 0.9, z: -1 },
              { x: -0.1, z: -1 },
              { x: 0.2, z: 2 },
            ],
          } = e,
          p = (0, l.useRef)([]),
          [m, h] = (0, o.Rg)(),
          x = (0, l.useRef)(new Vector2(0, 0));
        (0, l.useRef)(0),
          (0, l.useRef)({ x: 0, y: 0, value: 0 }),
          (0, l.useImperativeHandle)(
            t,
            () => ({
              async animateSet() {
                m.current.forEach((e) => {
                  e.animateSet();
                });
              },
              animateIn() {
                m.current.forEach((e) => {
                  e.animateIn();
                });
              },
              animateOut() {
                m.current.forEach((e) => {
                  e.animateOut();
                });
              },
              setCenterSize(e, t) {
                x.current.set(e, t);
              },
            }),
            []
          );
        let g = (0, l.useCallback)(() => {
          (!Device.mobile ||
            (Device.mobile.tablet && Stage.width > Stage.height)) &&
            y();
        }, []);
        (0, c.Vu)(g);
        let { wait: v } = (0, s.mI)(),
          y = async () => {
            await v(16),
              p.current.forEach(async (e, t) => {
                e.targets = e.querySelectorAll(".words p");
                let r = e.offsetWidth,
                  a =
                    Stage.width < 1024
                      ? 45
                      : Stage.width < 1200
                      ? 79.5
                      : Stage.width < 1600
                      ? 150
                      : Stage.width < 2e3
                      ? 200
                      : Stage.width < 2500
                      ? 250
                      : 300,
                  l = 6 + d[t].z,
                  n = (Device.mobile, 0.5 * r),
                  i = Device.mobile
                    ? 0.35 * x.current.width
                    : 0.5 * x.current.width,
                  o = 0;
                if (d[t].z > 0) {
                  let e = Math.range(d[t].x, -1, 1, -n, n);
                  o = d[t].x < 0 ? e - i : e + i;
                } else o = Math.range(d[t].x, -1, 1, -n, n);
                (e.style.transform = "translateX(".concat(o, "px)")),
                  (e.style.fontSize = "".concat(
                    (1 -
                      (2 * l * Math.tan(15 * (Math.PI / 180))) /
                        (2 * (l - 1) * Math.tan(15 * (Math.PI / 180)))) *
                      a +
                      a,
                    "px"
                  )),
                  e.targets.forEach(async (e) => {
                    e.style.zIndex = d[t].z;
                  });
              });
          };
        return (0, a.jsx)("div", {
          className: (0, n.Z)(r),
          children: u.map((e, t) => {
            let { words: r, full: l } = e;
            return (0, a.jsxs)(
              "div",
              {
                ref: (e) => (p.current[t] = e),
                children: [
                  (0, a.jsx)("div", {
                    className: "proxy",
                    children: (0, a.jsx)(i.Z, { text: l }, t),
                  }),
                  (0, a.jsx)("div", {
                    className: "words",
                    children: r.map((e, t) =>
                      (0, a.jsx)(
                        i.Z,
                        {
                          ref: h,
                          text: e.word || e,
                          enable3D:
                            (!Device.mobile ||
                              (Device.mobile.tablet &&
                                Stage.width > Stage.height)) &&
                            _,
                          glui: !0,
                        },
                        t
                      )
                    ),
                  }),
                ],
              },
              "line - ".concat(t, " ")
            );
          }),
        });
      });
      (u.displayName = "HeaderLines"), (t.Z = u);
    },
    3983: function (e, t, r) {
      "use strict";
      var a = r(5893),
        l = r(7294),
        n = r(3821),
        i = r.n(n),
        o = r(4924),
        c = r(9726),
        s = r(6010);
      let u = l.forwardRef((e, t) => {
        let { className: r, title: n, subtitle: u } = e,
          f = (0, l.useRef)();
        n = n
          .replace(/\s+/g, " ")
          .replaceAll(" <br /> ", " ")
          .replaceAll("<br />", " ");
        let _ = n.split(" "),
          d = Device.mobile ? 2 : 3;
        return (
          (n = _.map((e, t) =>
            t === d
              ? "".concat(e, "<br />")
              : t === _.length - 1
              ? e
              : "".concat(e, " ")
          ).join("")),
          (0, l.useImperativeHandle)(t, () => ({
            animateSet() {},
            animateIn() {
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                arguments.length > 1 && arguments[1];
            },
            animateOut() {},
          })),
          (0, a.jsxs)(c.Zs, {
            className: (0, s.Z)(r, i().headertext),
            children: [
              (0, a.jsx)(o.Z, {
                className: i()["headertext--subtitle"],
                text: u,
                glui: !0,
                noRevert: !0,
              }),
              (0, a.jsx)(o.Z, {
                className: i()["headertext--title"],
                text: n,
                ref: f,
                by: "lines",
                glui: !0,
                noRevert: !0,
              }),
            ],
          })
        );
      });
      (u.displayName = "HeaderText"), (t.Z = u);
    },
    1002: function (e, t, r) {
      "use strict";
      var a = r(7294);
      t.Z = (e) => {
        let {
            $element: t,
            height: r,
            keyboard: l = !0,
            limit: n = !0,
            overscroll: i = -(0.05 * Stage.height),
            ...o
          } = e,
          c = (0, a.useRef)();
        return (
          (0, a.useEffect)(
            () => (
              (c.current = Object.create(Scroll.prototype)),
              Scroll.apply(c.current, [
                {
                  height: t.current.offsetHeight - window.innerHeight,
                  keyboard: l,
                  limit: n,
                  touchScale: 1,
                  ...o,
                },
              ]),
              (c.current.enabled = !1),
              () => c.current.destroy()
            ),
            []
          ),
          c
        );
      };
    },
    7408: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSG: function () {
            return P;
          },
          default: function () {
            return O;
          },
        });
      var a = r(5893),
        l = r(1163),
        n = r(7294);
      r(9008);
      var i = r(5410),
        o = r.n(i),
        c = r(8477),
        s = r(8440),
        u = r(5658),
        f = r(3983),
        _ = r(4924),
        d = r(8612),
        p = r(8997),
        m = r(7759),
        h = r(1770),
        x = r(4138),
        g = r.n(x),
        v = r(3890);
      function y(e) {
        let {
            index: t,
            className: r,
            tag: l,
            count: i,
            copy: o,
            subcopy: c,
            icon: s,
          } = e,
          u = (0, n.useRef)(null),
          f = (0, n.useRef)(null),
          _ = (0, n.useRef)(null),
          d = (0, n.useRef)(null),
          p = (0, n.useRef)(null),
          h = (0, n.useRef)(!1),
          x = (0, n.useRef)(),
          y = (0, n.useRef)(0),
          b = (0, n.useRef)(0),
          w = (0, n.useRef)(),
          R = (0, n.useRef)({ cur: 2, next: 2 }),
          { wait: N } = (0, v.mI)(),
          E = (0, n.useCallback)(() => {
            if (Device.mobile || !x.current || w.current) return;
            let e = Math.range(
                ((0, v.TN)("scrollY") || 0) + window.innerHeight,
                x.current.top,
                x.current.top + 1.25 * x.current.height,
                0,
                1,
                !0
              ),
              r =
                ((x.current.height * (2 - t)) / 4) * (1 - e) +
                0.5 * x.current.height * t;
            (r = h.current ? 0 : r),
              (y.current += (r - y.current) * 0.06),
              (u.current.style.transform = "translateY(".concat(
                y.current,
                "px)"
              )),
              (R.current.cur += (R.current.next - R.current.cur) * 0.06),
              (f.current.style.clipPath = "polygon(0% 0%, 100% 0%, 100% "
                .concat(R.current.cur, "%, 0% ")
                .concat(R.current.cur, "%)"));
            let a = Math.map(R.current.cur, 2, 100, 0, 1);
            (d.current.style.transform = "translateX(".concat(
              -(a * b.current),
              "px)"
            )),
              (_.current.style.transform = "translateX(".concat(
                (1 - a) * b.current,
                "px)"
              ));
          }, []);
        (0, v.y2)(E);
        let j = (0, n.useCallback)((e) => {
            Device.mobile ||
              ((h.current = "over" === e),
              (R.current.next = "over" === e ? 100 : 2));
          }, []),
          { resize: M } = (0, v.d_)();
        return (
          (0, n.useEffect)(() => {
            if (!M || !p.current) return;
            let e = async () => {
              (w.current = !0),
                (x.current = p.current.getBoundingClientRect()),
                (x.current.y += (0, v.TN)("scrollY") || 0),
                (d.current.style.transform = "none"),
                (_.current.style.transform = "none");
              let { left: e } = d.current.getBoundingClientRect(),
                { left: t } = _.current.getBoundingClientRect();
              (b.current = e - t), await N(16), (w.current = !1);
            };
            e();
          }, [M, N]),
          (0, a.jsx)("div", {
            className: "".concat(r, " ").concat(g().fact, " "),
            ref: p,
            onMouseEnter: () => j("over"),
            onMouseLeave: () => j("out"),
            children: (0, a.jsxs)("div", {
              className: g()["fact--mask"],
              ref: u,
              children: [
                (0, a.jsx)("div", {
                  className: g()["fact--proxywrapper"],
                  children: (0, a.jsx)("div", {
                    className: g()["fact--countproxy"],
                    ref: d,
                    children: i,
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: g()["fact--inner"],
                  ref: f,
                  children: [
                    (0, a.jsx)("div", {
                      className: g()["fact--tag"],
                      children: l,
                    }),
                    (0, a.jsx)("div", {
                      className: g()["fact--count"],
                      ref: _,
                      children: i,
                    }),
                    (0, a.jsxs)("div", {
                      className: g()["fact--footer"],
                      children: [
                        (0, a.jsx)("p", {
                          className: g()["fact--footer__copy"],
                          dangerouslySetInnerHTML: { __html: c },
                        }),
                        (0, a.jsx)(m.Z, {
                          className: g()["fact--footer__icon"],
                          icon: s.toLowerCase(),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      var b = r(545),
        w = r(1304),
        R = r.n(w),
        N = r(6038),
        E = r(3491),
        j = r.n(E),
        M = r(2364),
        S = r(2071);
      let T = n.forwardRef((e, t) => {
        let r,
          { glui: l, items: i } = e,
          o = (0, n.useRef)(),
          c = (0, n.useRef)([]),
          [u, f] = (0, n.useState)([]),
          _ = (0, n.useRef)(),
          d = (0, n.useRef)(0),
          p = (0, n.useRef)(0),
          m = (0, n.useRef)({ x: 0, y: 0 }),
          h = (0, n.useRef)({ x: 0, y: 0 }),
          x = (0, n.useRef)(!0),
          g = (0, M.rE)(),
          { setSize: v } = (0, M.g3)();
        (0, n.useImperativeHandle)(t, () => o.current);
        let y = (0, n.useCallback)(async () => {
            x.current ||
              r ||
              c.current[d.current]._animating ||
              (w(c.current[d.current], d.current, Mouse.x, Mouse.y, h.current),
              (r = !0),
              setTimeout((e) => {
                r = !1;
              }, 100));
          }, []),
          b = (0, n.useCallback)(() => {
            let e = Device.mobile ? 0.1 : 1;
            (h.current.x = Mouse.x < m.current.x ? -1 : 1),
              (h.current.y = Mouse.y < m.current.y ? -1 : 1),
              (e *= Math.random(0.5, 1, 3)),
              (h.current.x *= e),
              (h.current.y *= e),
              (m.current.x = Mouse.x),
              (m.current.y = Mouse.y);
          }, []);
        (0, s.y2)(b);
        let w = (0, n.useCallback)(async (e, t, r, a, l) => {
            if (!e.glui()) return;
            (e._animating = !0),
              (a += (0, s.TN)("scrollY") || 0),
              (a -= p.current),
              N.ZP.set(e.glui().wrapper, { x: r, y: a }),
              e.glui().element.shader.set("uTrail", 0),
              e
                .glui()
                .element.shader.tween("uTrail", 1, 650, "easeOutCubic", 50),
              N.ZP.killTweensOf(e.glui().element),
              N.ZP.killTweensOf(e.glui().wrapper),
              N.ZP.fromTo(
                e.glui().element,
                { scale: 0 },
                {
                  scale: 1,
                  duration: 0.65,
                  ease: "Cubic.easeOut",
                  onStart: async () => {
                    e.glui().element.setZ(t + 99),
                      Z(() => {
                        (e.glui().element.alpha = 1),
                          d.current++,
                          (d.current %= c.current.length);
                      }, 45);
                  },
                  onComplete: () => {
                    N.ZP.to(e.glui().element, {
                      alpha: 0,
                      duration: 0.7,
                      delay: 0.5,
                      ease: "Cubic.easeOut",
                    });
                  },
                }
              );
            let n = Device.mobile ? 50 : Math.random(25, 75, 1),
              i = Device.mobile ? 25 : Math.random(25, 75, 1),
              o = Math.clamp(
                (180 * Math.atan2(a - a + i * l.y, r - r + n * l.x)) / Math.PI,
                0,
                60
              );
            N.ZP.fromTo(
              e.glui().wrapper,
              { x: r, y: a, rotation: 0 },
              {
                x: r + n * l.x,
                y: a + i * l.y,
                rotation: 0.15 * o,
                duration: 1.35,
                ease: "Cubic.easeOut",
                onComplete: () => {
                  e._animating = !1;
                },
              }
            );
          }, []),
          { resize: R } = (0, s.d_)();
        (0, n.useEffect)(() => {
          p.current =
            _.current.getBoundingClientRect().top + ((0, s.TN)("scrollY") || 0);
        }, [R]);
        let E = (0, n.useCallback)((e) => {
            let t = e.length,
              r,
              a = Device.mobile ? 10 : 35;
            for (; 0 != t; )
              (r = Math.floor(Math.random() * t)),
                t--,
                ([e[t], e[r]] = [e[r], e[t]]);
            return e.slice(0, a);
          }, []),
          T = (0, n.useCallback)(() => {
            v && v(3);
          }, [v]),
          k = (0, n.useCallback)(() => {
            v && v(0);
          }, [v]);
        (0, n.useEffect)(() => {
          f(
            E(
              i ||
                Array(46)
                  .fill(!1)
                  .map((e, t) => "/images/profile/trail/".concat(t + 1, ".jpg"))
            )
          );
        }, []);
        let { wait: C, delayedCall: Z } = (0, s.mI)();
        return (
          (0, n.useEffect)(() => {
            if (!c.current || 0 === c.current.length) return;
            let e = async () => {
              let e = [];
              c.current.forEach(async (t, r) => {
                await C(() => void 0 !== t.glui()),
                  (t.glui().element.alpha = 0),
                  e.push(t.glui().shader.uniforms.tMap.value.promise),
                  (t.glui().shader.uniforms.tDraw.value = g);
              }),
                await Promise.all(e),
                (p.current =
                  _.current.getBoundingClientRect().top +
                  ((0, s.TN)("scrollY") || 0)),
                (x.current = !1);
            };
            e();
          }, [u, c]),
          (0, a.jsx)("div", {
            className: j().root,
            onMouseMove: y,
            onTouchMove: y,
            ref: _,
            onPointerEnter: T,
            onPointerLeave: k,
            children: u.map((e, t) =>
              (0, a.jsx)(
                S.Z,
                {
                  className: j().root__img,
                  src: e,
                  glui: {
                    shaderName: "GLUITrailMediaShader",
                    uniforms: {
                      uTrail: { value: 0 },
                      uMouseMove: RootScene.MOUSE_MOVE,
                      unique: "trail-".concat(t),
                    },
                  },
                  ref: (e) => (c.current[t] = e),
                },
                "img-".concat(t)
              )
            ),
          })
        );
      });
      function k(e) {
        let { className: t, members: r } = e;
        (0, n.useRef)(null);
        let [l, i] = (0, b.Rg)(null),
          o = (0, n.useRef)(null),
          c = [
            [
              { letter: "B", z: 1 },
              { letter: "U", z: 1 },
            ],
            [{ letter: "T", z: 1 }],
            [
              { letter: "T", z: 1 },
              { letter: "E", z: 1 },
            ],
            [{ letter: "R", z: 2 }],
            [
              { letter: "H", z: 1 },
              { letter: "E", z: 1 },
            ],
            [
              { letter: "A", z: 2 },
              { letter: "D", z: 2 },
            ],
            [{ letter: "S", z: 1 }],
          ],
          s = (e) => {
            let t = Stage.width < 1024 ? 70 : Stage.width < 1200 ? 150 : 200;
            if (!Device.mobile) {
              let r = 6 + c[e][0].z;
              return "".concat(
                t *
                  ((2 * r * Math.tan(15 * (Math.PI / 180))) /
                    (2 * (r - 1) * Math.tan(15 * (Math.PI / 180)))),
                "px"
              );
            }
            return "".concat(t, "px");
          },
          u = (0, n.useCallback)(() => {
            !l.current ||
              Device.mobile ||
              l.current.map(async (e, t) => {
                let r = await e.gluiEl();
                if (r) {
                  let e = c.flat()[t] ? c.flat()[t].z : 0;
                  r.setZ(e);
                }
              });
          }, []);
        return (
          (0, v.Vu)(u),
          (0, a.jsxs)("div", {
            className: "".concat(t, " ").concat(R().teamsblock),
            ref: o,
            children: [
              (0, a.jsx)(T, {}),
              c.map((e, t) =>
                (0, a.jsx)(
                  "div",
                  {
                    className: R().line,
                    style: { fontSize: s(t) },
                    children: e.map((e, t) =>
                      (0, a.jsx)(
                        _.Z,
                        {
                          ref: i,
                          text: e.letter,
                          update: !1,
                          className: R()["line--p"],
                          glui: !0,
                        },
                        t
                      )
                    ),
                  },
                  "line-".concat(t)
                )
              ),
            ],
          })
        );
      }
      T.displayName = "ImageTrail";
      var C = r(4211),
        Z = r(7735),
        I = r(7121),
        D = r(192);
      r(1002);
      var z = r(9726);
      let B = (e, t) => {
        let { data: r, mobileTitle: i } = e,
          x = (0, l.useRouter)(),
          g = (0, n.useRef)(null),
          b = (0, n.useRef)(null),
          w = (0, n.useRef)(),
          R = (0, n.useRef)(),
          N = (0, n.useRef)(null),
          E = (0, n.useRef)(null),
          j = (0, n.useRef)(null);
        (0, n.useRef)([]);
        let M = (0, v.uZ)(BaseScene, { clearColor: "#101010" });
        var S = new Vector3();
        new VelocityTracker(S),
          (0, n.useRef)(0),
          (0, n.useImperativeHandle)(
            t,
            () => (0, c.Z)({ $element: g, scene: M }),
            []
          );
        let T = (0, n.useRef)(!1),
          B = (0, n.useCallback)(() => {
            var e;
            T.current ||
              0 === (getBusState("scrollY") || 0) ||
              ((T.current = !0),
              null === (e = R.current) || void 0 === e || e.animateOut());
          }, []);
        (0, v.y2)(B);
        let { wait: P } = (0, s.mI)();
        (0, n.useEffect)(() => {}, [P]);
        let O = (0, n.useCallback)(() => {
          var e;
          let t = (0, u.B)(VideoTexture, {
            path: r.bodyImage.url,
            firstFrame:
              null === (e = r.poster) || void 0 === e ? void 0 : e.url,
            preload: !0,
          });
          return (
            t.start(),
            (Global.video = t),
            (Global.videoDimensions = { width: 900, height: 900 }),
            t
          );
        }, []);
        return (0, a.jsx)(Z.YR, {
          scene: M,
          children: (0, a.jsx)(I.Z, {
            ref: w,
            children: (0, a.jsxs)("div", {
              className: "page ".concat(o().profile),
              ref: g,
              children: [
                (0, a.jsx)(D.Z, {
                  active: "/profile" === x.pathname,
                  className: o().profile__bg,
                }),
                (0, a.jsxs)(z.Zs, {
                  className: o().profile__header,
                  children: [
                    (0, a.jsx)(h.Z, {
                      className: o()["profile__header--lines"],
                      copyLines:
                        Device.mobile && i ? i : r.profileHeading.profileTitle,
                      offsets: [
                        { x: -0.5, z: 0 },
                        { x: 0.5, z: -1 },
                        { x: -0.4, z: -1 },
                        { x: 0.5, z: 0 },
                      ],
                    }),
                    (0, a.jsx)(d.Z, {
                      className: o()["profile__header--img"],
                      map: O,
                      alt: r.bodyImage.altText,
                      ref: j,
                      glui: !0,
                      fixed: !1,
                    }),
                    (0, a.jsx)(C.Z, {
                      className: o()["profile__header--copy"],
                      copy: r.profileHeading.profileSubtitle,
                      rotation: 90,
                    }),
                    (0, a.jsx)(m.Z, {
                      className: o()["profile__header--arrow"],
                      icon: "arrow",
                      ref: R,
                      glui: { noFluids: !0 },
                      manual: !0,
                      update: !1,
                    }),
                    (0, a.jsx)("div", {
                      className: o()["profile__header--body"],
                      ref: E,
                      children: (0, a.jsx)(_.Z, {
                        text: r.bodyCopy,
                        ref: N,
                        by: "words",
                        glui: !0,
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: o().profile__body,
                  children: (0, a.jsx)("div", {
                    className: o()["profile__body--facts"],
                    children: r.facts.map((e, t) => {
                      let {
                        tag: r,
                        count: l,
                        copy: n,
                        subcopy: i,
                        icon: c,
                      } = e;
                      return (0, a.jsx)(
                        y,
                        {
                          index: t,
                          tag: r,
                          count: l,
                          copy: n,
                          subcopy: i,
                          icon: c,
                          className: o()["profile__body--factblock"],
                        },
                        t
                      );
                    }),
                  }),
                }),
                (0, a.jsxs)(z.Zs, {
                  className: o().profile__team,
                  children: [
                    (0, a.jsx)(f.Z, {
                      className: o()["profile__team--header"],
                      title: r.teamTitle,
                      subtitle: r.teamSubtitle,
                    }),
                    (0, a.jsx)(k, {
                      members: r.teamMembers,
                      className: o()["profile__team--members"],
                    }),
                  ],
                }),
                (0, a.jsx)(p.Z, {
                  next: "mailto:hello@buttermax.net",
                  device: "glove",
                  title: "Reach Out",
                  scroll: scroll,
                  pageController: w,
                  element: g,
                  colors: { primary: "#FFD600", secondary: "#101010" },
                  ref: b,
                }),
              ],
            }),
          }),
        });
      };
      B.displayName = "Profile";
      var P = !0,
        O = (0, n.forwardRef)(B);
    },
    2853: function () {},
    2797: function (e) {
      e.exports = { root: "Background_root__AbScr" };
    },
    4138: function (e) {
      e.exports = {
        fact: "FactBlock_fact__Qztc3",
        "fact--inner": "FactBlock_fact--inner__FY8cG",
        "fact--mask": "FactBlock_fact--mask__ihPti",
        "fact--countproxy": "FactBlock_fact--countproxy__8ikUj",
        "fact--proxywrapper": "FactBlock_fact--proxywrapper__6xGsv",
        "fact--tag": "FactBlock_fact--tag__XoAnR",
        "fact--count": "FactBlock_fact--count__AG1TF",
        "fact--copy": "FactBlock_fact--copy__0Zq2i",
        "fact--footer": "FactBlock_fact--footer__aAqx7",
        "fact--footer__copy": "FactBlock_fact--footer__copy__tvN_o",
        "fact--footer__icon": "FactBlock_fact--footer__icon__EZyZs",
      };
    },
    3821: function (e) {
      e.exports = {
        headertext: "HeaderText_headertext__09r9w",
        "headertext--subtitle": "HeaderText_headertext--subtitle__rLiSK",
        "headertext--title": "HeaderText_headertext--title__EIz0H",
      };
    },
    3491: function (e) {
      e.exports = {
        root: "ImageTrail_root__1UMwh",
        root__img: "ImageTrail_root__img__v2PAY",
        portrait: "ImageTrail_portrait__90vDW",
      };
    },
    1304: function (e) {
      e.exports = {
        teamsblock: "TeamsBlock_teamsblock__bEWXw",
        line: "TeamsBlock_line__zOjxm",
        "line--p": "TeamsBlock_line--p__tgp8w",
      };
    },
    5410: function (e) {
      e.exports = {
        profile: "profile_profile__6n4Im",
        profile__bg: "profile_profile__bg__Y_ilh",
        profile__header: "profile_profile__header__8NFws",
        "profile__header--lines": "profile_profile__header--lines__11b5Y",
        "profile__header--copy": "profile_profile__header--copy__69n7P",
        "profile__header--bar": "profile_profile__header--bar__2x5vy",
        "profile__header--arrow": "profile_profile__header--arrow__ZAHXV",
        "profile__header--body": "profile_profile__header--body__Ekr0Q",
        "profile__header--img": "profile_profile__header--img__EOrIT",
        profile__body: "profile_profile__body__ZUbZx",
        "profile__body--facts": "profile_profile__body--facts__bM_bt",
        profile__team: "profile_profile__team__hElEn",
        "profile__team--header": "profile_profile__team--header__yVWdm",
        profile__footer: "profile_profile__footer__TWi7u",
        "profile__footer--cta": "profile_profile__footer--cta__oUUM_",
      };
    },
  },
  function (e) {
    e.O(0, [671, 934, 862, 774, 888, 179], function () {
      return e((e.s = 3235));
    }),
      (_N_E = e.O());
  },
]);
