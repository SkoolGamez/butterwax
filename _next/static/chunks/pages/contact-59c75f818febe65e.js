(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [335],
  {
    7803: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/contact",
        function () {
          return a(5729);
        },
      ]);
    },
    192: function (e, t, a) {
      "use strict";
      var n = a(5893),
        c = a(7294),
        o = a(2797),
        r = a.n(o),
        l = a(6010),
        i = a(6489),
        s = a(7735),
        u = a(9352),
        _ = a(2364);
      a(3890);
      var d = a(8440);
      a(9726);
      let f = (e) => {
        let { active: t, className: a } = e,
          o = (0, c.useRef)(),
          f = (0, s.v8)(
            o,
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
          h = (0, u.F)(),
          v = (0, _.rE)(),
          { container: m } = (0, s.pq)();
        (0, c.useEffect)(() => {
          f &&
            f.shader.uniforms.tDraw &&
            v &&
            (f.setStyle(), (f.shader.uniforms.tDraw.value = v));
        }, [f, v]),
          (0, c.useEffect)(() => {
            if (f && h) {
              let { secondary: e } = h;
              f.shader.set("uType", 1),
                t &&
                  f.shader.tween(
                    "uBorderColor",
                    new Color(e),
                    RootScene.TR_DURATION,
                    "easeOutCubic"
                  );
            }
          }, [f, h]),
          (0, c.useEffect)(() => {
            let e = (0, d.l2)("scrollY", (e) => {
              f && (f.scrollPos = e || 0);
            });
            return () => e();
          }, [f]);
        let { resize: g } = (0, d.d_)();
        (0, c.useEffect)(() => {
          g && f && f.handleResize();
        }, [g, f]);
        let { full: x } = (0, i.WZ)();
        return (0, n.jsx)("div", {
          ref: o,
          className: (0, l.Z)(r().root, x, a),
        });
      };
      (f.displayName = "Background"), (t.Z = f);
    },
    5281: function (e, t, a) {
      "use strict";
      var n = a(5893),
        c = a(6038),
        o = a(7294),
        r = a(1664),
        l = a.n(r),
        i = a(3680),
        s = a.n(i),
        u = a(7759),
        _ = a(4924),
        d = a(7117),
        f = a(2364),
        h = a(545),
        v = a(6010);
      let m = o.forwardRef((e, t) => {
        let {
            className: a,
            href: r,
            text: i,
            target: m = "self",
            analyticsEventName: g = "",
          } = e,
          x = (0, o.useRef)(null),
          p = (0, o.useRef)(null),
          b = (0, o.useRef)(null),
          { setSize: w } = (0, f.g3)(),
          [k] = (0, h.z$)(),
          y = { offset: 5 };
        (0, o.useImperativeHandle)(t, () => ({
          animateSet() {
            c.ZP.set(x.current, {
              x: "-".concat(y.offset, "%"),
              clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
            }),
              c.ZP.set(b.current, {
                x: "-".concat(y.offset, "%"),
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              });
          },
          onUpdate(e) {},
          animateIn() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0;
            c.ZP.to(x.current, {
              x: 0,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              duration: 0.75,
              ease: "Quart.easeInOut",
              delay: e / 1e3,
            }),
              c.ZP.to(b.current, {
                x: 0,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                duration: 0.75,
                ease: "Quart.easeInOut",
                delay: (e + 250) / 1e3,
              });
          },
          animateOut() {},
        }));
        let S = (0, o.useCallback)(() => {
            g && k(g);
          }, []),
          N = (0, o.useCallback)(() => {
            w && w(5.25);
          }, [w]),
          Z = (0, o.useCallback)(() => {
            w && w(0);
          }, [w]);
        return (0, n.jsxs)(l(), {
          ref: x,
          className: (0, v.Z)(s().link, a),
          href: r,
          target: m,
          onClick: () => {
            S();
          },
          onPointerEnter: N,
          onPointerLeave: Z,
          scroll: !1,
          children: [
            (0, n.jsx)("div", { className: s()["link--hit"] }),
            (0, n.jsx)(_.Z, { text: i, ref: p, glui: !0 }),
            (0, n.jsx)(u.Z, {
              icon: "arrow",
              className: s()["link--arrow"],
              glui: !0,
              rotation: 135,
            }),
            (0, n.jsx)(d.Z, {
              className: s()["link--underline"],
              glui: !0,
              inverse: !0,
            }),
            (0, n.jsx)(d.Z, { className: s()["link--background"], glui: !0 }),
          ],
        });
      });
      (m.displayName = "BaseLink"), (t.Z = m);
    },
    1770: function (e, t, a) {
      "use strict";
      var n = a(5893),
        c = a(7294),
        o = a(6010),
        r = a(4924),
        l = a(545),
        i = a(3890),
        s = a(8440);
      let u = c.forwardRef((e, t) => {
        let {
            className: a,
            copyLines: u,
            moveCharacters: _ = !1,
            enable3D: d = !0,
            offsets: f = [
              { x: -0.01, z: -2 },
              { x: 0.9, z: -1 },
              { x: -0.1, z: -1 },
              { x: 0.2, z: 2 },
            ],
          } = e,
          h = (0, c.useRef)([]),
          [v, m] = (0, l.Rg)(),
          g = (0, c.useRef)(new Vector2(0, 0));
        (0, c.useRef)(0),
          (0, c.useRef)({ x: 0, y: 0, value: 0 }),
          (0, c.useImperativeHandle)(
            t,
            () => ({
              async animateSet() {
                v.current.forEach((e) => {
                  e.animateSet();
                });
              },
              animateIn() {
                v.current.forEach((e) => {
                  e.animateIn();
                });
              },
              animateOut() {
                v.current.forEach((e) => {
                  e.animateOut();
                });
              },
              setCenterSize(e, t) {
                g.current.set(e, t);
              },
            }),
            []
          );
        let x = (0, c.useCallback)(() => {
          (!Device.mobile ||
            (Device.mobile.tablet && Stage.width > Stage.height)) &&
            b();
        }, []);
        (0, i.Vu)(x);
        let { wait: p } = (0, s.mI)(),
          b = async () => {
            await p(16),
              h.current.forEach(async (e, t) => {
                e.targets = e.querySelectorAll(".words p");
                let a = e.offsetWidth,
                  n =
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
                  c = 6 + f[t].z,
                  o = (Device.mobile, 0.5 * a),
                  r = Device.mobile
                    ? 0.35 * g.current.width
                    : 0.5 * g.current.width,
                  l = 0;
                if (f[t].z > 0) {
                  let e = Math.range(f[t].x, -1, 1, -o, o);
                  l = f[t].x < 0 ? e - r : e + r;
                } else l = Math.range(f[t].x, -1, 1, -o, o);
                (e.style.transform = "translateX(".concat(l, "px)")),
                  (e.style.fontSize = "".concat(
                    (1 -
                      (2 * c * Math.tan(15 * (Math.PI / 180))) /
                        (2 * (c - 1) * Math.tan(15 * (Math.PI / 180)))) *
                      n +
                      n,
                    "px"
                  )),
                  e.targets.forEach(async (e) => {
                    e.style.zIndex = f[t].z;
                  });
              });
          };
        return (0, n.jsx)("div", {
          className: (0, o.Z)(a),
          children: u.map((e, t) => {
            let { words: a, full: c } = e;
            return (0, n.jsxs)(
              "div",
              {
                ref: (e) => (h.current[t] = e),
                children: [
                  (0, n.jsx)("div", {
                    className: "proxy",
                    children: (0, n.jsx)(r.Z, { text: c }, t),
                  }),
                  (0, n.jsx)("div", {
                    className: "words",
                    children: a.map((e, t) =>
                      (0, n.jsx)(
                        r.Z,
                        {
                          ref: m,
                          text: e.word || e,
                          enable3D:
                            (!Device.mobile ||
                              (Device.mobile.tablet &&
                                Stage.width > Stage.height)) &&
                            d,
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
    1002: function (e, t, a) {
      "use strict";
      var n = a(7294);
      t.Z = (e) => {
        let {
            $element: t,
            height: a,
            keyboard: c = !0,
            limit: o = !0,
            overscroll: r = -(0.05 * Stage.height),
            ...l
          } = e,
          i = (0, n.useRef)();
        return (
          (0, n.useEffect)(
            () => (
              (i.current = Object.create(Scroll.prototype)),
              Scroll.apply(i.current, [
                {
                  height: t.current.offsetHeight - window.innerHeight,
                  keyboard: c,
                  limit: o,
                  touchScale: 1,
                  ...l,
                },
              ]),
              (i.current.enabled = !1),
              () => i.current.destroy()
            ),
            []
          ),
          i
        );
      };
    },
    5729: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          __N_SSG: function () {
            return k;
          },
        });
      var n = a(5893),
        c = a(1163),
        o = a(7294),
        r = a(8477),
        l = a(3196),
        i = a.n(l),
        s = a(5658),
        u = a(5281),
        _ = a(4924);
      a(8997);
      var d = a(1770),
        f = a(8440),
        h = a(7735),
        v = a(7121),
        m = a(192),
        g = a(2071),
        x = a(2364);
      a(1002);
      var p = a(9726),
        b = a(2182);
      let w = (e, t) => {
        let { data: a } = e,
          l = (0, c.useRouter)(),
          w = (0, o.useRef)(),
          k = (0, o.useRef)(null),
          y = (0, o.useRef)(null),
          S = (0, o.useRef)(),
          N = (0, f.uZ)(BaseScene, { clearColor: "#101010" });
        (0, o.useRef)(0),
          (0, o.useImperativeHandle)(
            t,
            () => (0, r.Z)({ $element: k, scene: N }),
            []
          );
        let Z = (0, x.rE)(),
          R = Global.mvs.glove;
        Global.activeMV = R;
        let j = (0, o.useCallback)(() => {
          if (!k.current || !(null == scroll ? void 0 : scroll.current)) return;
        }, []);
        return (
          (0, f.y2)(j),
          (0, o.useEffect)(() => {
            var e, t, a;
            R.highQuality || R.loadHighRes(),
              R.useVideo(),
              Device.mobile
                ? null === (e = w.current) || void 0 === e || e.animateSet(1)
                : (null === (t = w.current) || void 0 === t || t.animateSet(),
                  null === (a = w.current) ||
                    void 0 === a ||
                    a.animateIn(1450, "easeInOutCubic", 0, !0));
          }, []),
          (0, o.useEffect)(() => {
            let e;
            let t = async () => {
              var e, t, a, n, c, o;
              let r = (0, s.B)(VideoTexture, {
                path:
                  (null === (e = Device.mobile) || void 0 === e
                    ? void 0
                    : e.phone) ||
                  ((null === (t = Device.mobile) || void 0 === t
                    ? void 0
                    : t.tablet) &&
                    Stage.width < Stage.height)
                    ? "images/reel_mobile.mp4"
                    : "images/reel_desktop.mp4",
                preload: !0,
              });
              await r.texture.promise,
                r.start(),
                (Global.video = r),
                (Global.videoInView = !0),
                (Global.videoDimensions = {
                  width:
                    (null === (a = Device.mobile) || void 0 === a
                      ? void 0
                      : a.phone) ||
                    ((null === (n = Device.mobile) || void 0 === n
                      ? void 0
                      : n.tablet) &&
                      Stage.width < Stage.height)
                      ? 750
                      : 512,
                  height:
                    (null === (c = Device.mobile) || void 0 === c
                      ? void 0
                      : c.phone) ||
                    ((null === (o = Device.mobile) || void 0 === o
                      ? void 0
                      : o.tablet) &&
                      Stage.width < Stage.height)
                      ? 1268
                      : 288,
                }),
                setBusState("video", Utils.timestamp());
            };
            return (
              t(),
              () => {
                var t;
                return null == e
                  ? void 0
                  : null === (t = e.destroy) || void 0 === t
                  ? void 0
                  : t.call(e);
              }
            );
          }, []),
          (0, o.useEffect)(() => {
            Z && R && (R.draw = Z);
          }, [Z, R]),
          (0, n.jsx)(h.YR, {
            scene: N,
            children: (0, n.jsxs)(v.Z, {
              ref: S,
              children: [
                (0, n.jsx)(m.Z, {
                  active: "/contact" === l.current,
                  className: i()["contact--bg"],
                }),
                (0, n.jsxs)("div", {
                  className: "page ".concat(i().contact),
                  ref: k,
                  children: [
                    (0, n.jsxs)(p.Zs, {
                      className: i().contact__header,
                      children: [
                        (0, n.jsx)(d.Z, {
                          className: i()["contact__header--lines"],
                          enable3D: !0,
                          copyLines: a.contactHeading.contactTitle,
                          reversed: !0,
                          offsets: Device.mobile
                            ? [
                                { x: -0.5, z: 0 },
                                { x: 1, z: 1 },
                                { x: -0.3, z: -1 },
                                { x: 1, z: 0 },
                              ]
                            : [
                                { x: -0.5, z: 0 },
                                { x: 0.5, z: -1 },
                                { x: -0.4, z: -1 },
                                { x: 1, z: 0 },
                              ],
                        }),
                        (0, n.jsx)(g.Z, {
                          className: i()["contact__header--mv"],
                          external: R,
                          glui: { enable3D: !0 },
                          ref: w,
                          zIndex: 0,
                        }),
                      ],
                    }),
                    (0, n.jsxs)(p.Zs, {
                      className: i().contact__footer,
                      children: [
                        (0, n.jsx)(_.Z, {
                          className: i()["contact__footer--copy"],
                          text: a.footerText,
                          glui: !0,
                        }),
                        (0, n.jsx)(u.Z, {
                          className: i()["contact__footer--cta"],
                          text: a.footerCTA.footerCTALabel,
                          href: a.footerCTA.footerCTAURL,
                          analyticsEventName: "contact_reach_out_cta",
                          glui: !0,
                        }),
                      ],
                    }),
                    (0, n.jsx)(p.Zs, {
                      children: (0, n.jsx)(b.Z, { page: "contact", ref: y }),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
      w.displayName = "Contact";
      var k = !0;
      t.default = (0, o.forwardRef)(w);
    },
    2797: function (e) {
      e.exports = { root: "Background_root__AbScr" };
    },
    3680: function (e) {
      e.exports = {
        link: "BaseLink_link__TXhX4",
        "link--background": "BaseLink_link--background__tOyPk",
        "link--underline": "BaseLink_link--underline__WDaNl",
        "link--hit": "BaseLink_link--hit__rvM_k",
        "link--arrow": "BaseLink_link--arrow__wx84N",
      };
    },
    3196: function (e) {
      e.exports = {
        contact: "contact_contact__GLH2Q",
        "contact--bg": "contact_contact--bg__HysJK",
        contact__header: "contact_contact__header__sng_l",
        "contact__header--mv": "contact_contact__header--mv__s7YSi",
        "contact__header--lines": "contact_contact__header--lines__0Q2Er",
        "contact__header--copy": "contact_contact__header--copy__W9MdI",
        "contact__header--circle": "contact_contact__header--circle__Jx5lb",
        "contact__header--img": "contact_contact__header--img__I6Xov",
        contact__footer: "contact_contact__footer__bkSxN",
        "contact__footer--copy": "contact_contact__footer--copy__cTYXk",
        "contact__footer--cta": "contact_contact__footer--cta__VIHVF",
        "contact--footer": "contact_contact--footer__cY4s4",
      };
    },
  },
  function (e) {
    e.O(0, [671, 934, 774, 888, 179], function () {
      return e((e.s = 7803));
    }),
      (_N_E = e.O());
  },
]);
