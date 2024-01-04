(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [934],
  {
    7121: function (e, r, t) {
      "use strict";
      var o = t(5893),
        l = t(7294),
        i = t(7671),
        u = t(7735),
        a = t(3890),
        n = t(1163);
      let s = l.forwardRef((e, r) => {
        let { children: t, data: s } = e,
          { container: c, container3d: p } = (0, u.pq)(),
          { query: d, pathname: g } = (0, n.useRouter)(),
          [f, v] = (0, l.useState)(),
          _ = (0, l.useRef)(),
          m = (0, l.useRef)(!0),
          h = (0, l.useRef)();
        (0, l.useEffect)(() => {}, [f]);
        let w = (0, l.useCallback)(
          (e) => {
            if (
              !_.current ||
              (m.current && (v(_.current), (m.current = !1)),
              _.current.raf(e),
              (0, a.TN)("transitioning"))
            )
              return;
            let r = _.current.scroll;
            (0, a.ic)("scrollY", r || 0),
              p &&
                (null == GLUIBaseBridge
                  ? void 0
                  : GLUIBaseBridge.get3dMultiplier) &&
                (p.group.position.y = GLUIBaseBridge.get3dMultiplier(r)),
              c && (c.group.position.y = r);
          },
          [c, p]
        );
        (0, a.y2)(w, "RenderManager_before_render");
        let y = (0, l.useCallback)(() => {
          _.current && _.current.resize();
        }, []);
        return (
          (0, a.Vu)(y),
          (0, l.useEffect)(() => {
            let e = "default",
              r = "black";
            if (
              (g &&
                ("/" === g || "/contact" === g
                  ? (e = "black")
                  : g.includes("/projects/")
                  ? ((e = "detail"), (r = "detail"))
                  : "/projects" === g || "/profile" === g
                  ? (console.log("pathname: ", g),
                    (e = "detail"),
                    (r = "brand"))
                  : "/workshop" === g
                  ? ((e = "workshop"), (r = "brand"))
                  : ((e = "custom404"), (r = "custom404"))),
              (null == s ? void 0 : s.colors) && (null == d ? void 0 : d.slug))
            ) {
              let r = (0, a.TN)("themes", "theme");
              (r[d.slug] && r[d.slug].colors === s.colors) ||
                (0, a.ic)(
                  "themes",
                  { ...r, [d.slug]: { ...r[e], ...s.colors } },
                  "theme"
                ),
                (0, a.ic)("active", d.slug, "theme");
            } else (0, a.ic)("active", e, "theme");
            (0, a.ic)("headerTheme", r, "theme"),
              (0, a.ic)(
                "icon",
                (null == s ? void 0 : s.icon) ? s.icon : "earth",
                "theme"
              );
          }, [s, d.slug, g]),
          (0, o.jsx)("div", {
            className: "page-container",
            ref: h,
            children: (0, o.jsx)(i.pi, {
              autoRaf: !1,
              ref: _,
              options: { smoothTouch: !0, touchMultiplier: 1 },
              children: t,
            }),
          })
        );
      });
      (s.displayName = "PageController"), (r.Z = s);
    },
    8997: function (e, r, t) {
      "use strict";
      var o = t(5893),
        l = t(7294),
        i = t(1664),
        u = t.n(i),
        a = t(6010),
        n = t(9830),
        s = t.n(n),
        c = t(8440),
        p = t(4924),
        d = t(7117),
        g = t(2071);
      t(2364);
      var f = t(9726),
        v = t(7671);
      let _ = l.forwardRef((e, r) => {
        let {
          next: t,
          device: i,
          maps: n,
          title: _,
          scroll: m,
          pageController: h,
          element: w,
          colors: y,
          fullHeight: x,
          zIndex: k,
        } = e;
        (0, l.useRef)();
        let b = (0, l.useRef)(),
          R = (0, l.useRef)(),
          N = (0, l.useRef)(),
          C = (0, l.useRef)({ y: 0, height: 0, total: 0, offset: 0 }),
          j = (0, l.useRef)(!1),
          E = (0, l.useRef)(),
          Z = (0, l.useRef)(),
          P = (0, l.useRef)(),
          T = (0, l.useRef)(),
          I = (0, l.useRef)(),
          F = (0, l.useRef)(),
          S = (0, l.useRef)(),
          B = (0, l.useRef)(),
          G = (0, l.useRef)(),
          L = (0, l.useRef)(),
          U = (0, l.useRef)(),
          Y = (0, l.useRef)(),
          M = (0, l.useRef)(),
          A = (0, l.useRef)(),
          D = (0, l.useRef)(),
          O = (0, l.useRef)(),
          V = (0, l.useRef)({}),
          { wait: q } = (0, c.mI)();
        (0, v.LZ)((e) => {
          var r,
            t,
            o,
            l,
            i,
            u,
            a,
            n,
            s,
            p,
            d,
            g,
            f,
            v,
            _,
            m,
            h,
            w,
            y,
            x,
            k,
            R,
            j,
            O,
            V,
            q,
            z,
            $,
            H,
            J,
            K,
            W,
            Q,
            ee,
            er,
            et,
            eo,
            el,
            ei,
            eu,
            ea,
            en,
            es,
            ec;
          let { scroll: ep } = e;
          if ((0, c.TN)("transitioning")) return;
          C.current.offset = ep;
          let { y: ed, height: eg } = N.current.getBoundingClientRect();
          ((ed += ep) !== C.current.y || eg !== C.current.height) &&
            ((C.current.y = ed),
            (C.current.height = eg),
            (C.current.total = C.current.y + (C.current.offset || 0)));
          let ef =
            1 -
            Math.range(
              Math.max(
                0,
                ep +
                  window.innerHeight -
                  ((null === (r = C.current) || void 0 === r ? void 0 : r.y) ||
                    0)
              ),
              0,
              (null === (t = C.current) || void 0 === t ? void 0 : t.height) ||
                0,
              0,
              1,
              !0
            );
          X[ef < 1 ? "useImageMask" : "useVideo"](),
            0 !== ef &&
              !Device.mobile &&
              ((ef *= C.current.height),
              (null ===
                (o =
                  null === (l = b.current) || void 0 === l
                    ? void 0
                    : l.glui()) || void 0 === o
                ? void 0
                : null === (i = o.wrapper) || void 0 === i
                ? void 0
                : i.group) && (b.current.glui().wrapper.group.position.y = ef),
              (null ===
                (u =
                  null === (a = A.current) || void 0 === a
                    ? void 0
                    : a.glui()) || void 0 === u
                ? void 0
                : null === (n = u.wrapper) || void 0 === n
                ? void 0
                : n.group) && (A.current.glui().wrapper.group.position.y = ef),
              (null ===
                (s =
                  null === (p = G.current) || void 0 === p
                    ? void 0
                    : p.glui()) || void 0 === s
                ? void 0
                : null === (d = s.wrapper) || void 0 === d
                ? void 0
                : d.group) && (G.current.glui().wrapper.group.position.y = ef),
              (null ===
                (g =
                  null === (f = E.current) || void 0 === f
                    ? void 0
                    : f.glui()) || void 0 === g
                ? void 0
                : null === (v = g.wrapper) || void 0 === v
                ? void 0
                : v.group) && (E.current.glui().wrapper.group.position.y = ef),
              (null ===
                (_ =
                  null === (m = I.current) || void 0 === m
                    ? void 0
                    : m.glui()) || void 0 === _
                ? void 0
                : null === (h = _.wrapper) || void 0 === h
                ? void 0
                : h.group) && (I.current.glui().wrapper.group.position.y = ef),
              L.current &&
                (L.current.style.transform = "translateY(".concat(-ef, "px)")),
              Z.current &&
                (Z.current.style.transform = "translateY(".concat(-ef, "px)")),
              F.current &&
                (F.current.style.transform = "translateY(".concat(-ef, "px)")),
              (null ===
                (w =
                  null === (y = U.current) || void 0 === y
                    ? void 0
                    : y.glui()) || void 0 === w
                ? void 0
                : null === (x = w.current) || void 0 === x
                ? void 0
                : null === (k = x.wrapper) || void 0 === k
                ? void 0
                : k.group) &&
                (U.current.glui().current.wrapper.group.position.y = ef),
              (null ===
                (R =
                  null === (j = P.current) || void 0 === j
                    ? void 0
                    : j.glui()) || void 0 === R
                ? void 0
                : null === (O = R.current) || void 0 === O
                ? void 0
                : null === (V = O.wrapper) || void 0 === V
                ? void 0
                : V.group) &&
                (P.current.glui().current.wrapper.group.position.y = ef),
              (null ===
                (q =
                  null === (z = S.current) || void 0 === z
                    ? void 0
                    : z.glui()) || void 0 === q
                ? void 0
                : null === ($ = q.current) || void 0 === $
                ? void 0
                : null === (H = $.wrapper) || void 0 === H
                ? void 0
                : H.group) &&
                (S.current.glui().current.wrapper.group.position.y = ef),
              (null ===
                (J =
                  null === (K = T.current) || void 0 === K
                    ? void 0
                    : K.glui()) || void 0 === J
                ? void 0
                : null === (W = J.wrapper) || void 0 === W
                ? void 0
                : W.group) && (T.current.glui().wrapper.group.position.y = ef),
              (null ===
                (Q =
                  null === (ee = B.current) || void 0 === ee
                    ? void 0
                    : ee.glui()) || void 0 === Q
                ? void 0
                : null === (er = Q.wrapper) || void 0 === er
                ? void 0
                : er.group) && (B.current.glui().wrapper.group.position.y = ef),
              (null ===
                (et =
                  null === (eo = Y.current) || void 0 === eo
                    ? void 0
                    : eo.glui()) || void 0 === et
                ? void 0
                : null === (el = et.wrapper) || void 0 === el
                ? void 0
                : el.group) && (Y.current.glui().wrapper.group.position.y = ef),
              (null ===
                (ei =
                  null === (eu = M.current) || void 0 === eu
                    ? void 0
                    : eu.glui()) || void 0 === ei
                ? void 0
                : null === (ea = ei.wrapper) || void 0 === ea
                ? void 0
                : ea.group) && (M.current.glui().wrapper.group.position.y = ef),
              (null ===
                (en =
                  null == D
                    ? void 0
                    : null === (es = D.current) || void 0 === es
                    ? void 0
                    : es.glui()) || void 0 === en
                ? void 0
                : null === (ec = en.wrapper) || void 0 === ec
                ? void 0
                : ec.group) &&
                (D.current.glui().wrapper.group.position.y = ef));
        }, []);
        let { resize: z } = (0, c.d_)();
        (0, l.useEffect)(() => {
          if (!z || !N.current) return;
          let { y: e, height: r } = N.current.getBoundingClientRect();
          (C.current.y = e),
            (C.current.height = r),
            (C.current.total = C.current.y + (C.current.offset || 0)),
            L.current && (L.current.style.transform = "translateY(0px)"),
            Z.current && (Z.current.style.transform = "translateY(0px)"),
            F.current && (F.current.style.transform = "translateY(0px)"),
            j.current && clearTimeout(j.current),
            (j.current = setTimeout(() => {
              j.current = !1;
            }, 250));
        }, [z, N]),
          (0, l.useEffect)(() => {
            R &&
              A &&
              G &&
              E &&
              I &&
              U &&
              P &&
              S &&
              Y &&
              T &&
              B &&
              M &&
              D &&
              (async () => {
                var e, r, t, o, l;
                await q(100), await q(() => !(0, c.TN)("transitioning"));
                let i = await R.current.gluiElement(),
                  u = new Color(y.primary),
                  a = new Color(y.secondary);
                (V.current = { primary: u, secondary: a }),
                  i.shader.set("uColor2", a);
                let n = await A.current.gluiEl();
                null == n ||
                  null === (e = n.shader) ||
                  void 0 === e ||
                  e.set("uColor", a),
                  null == n ||
                    null === (r = n.shader) ||
                    void 0 === r ||
                    r.set("uColor2", u),
                  [G, E, I].forEach(async (e) => {
                    let r = await e.current.gluiEl();
                    null == r || r.shader.set("uColor2", a);
                  }),
                  [U, P, S].forEach(async (e) => {
                    let r = await e.current.gluiElement();
                    null == r || r.shader.set("uColor2", u);
                  });
                let s = await Y.current.gluiEl(),
                  p = await T.current.gluiEl(),
                  d = await B.current.gluiEl();
                Y.current.setDraw(),
                  T.current.setDraw(),
                  B.current.setDraw(),
                  s.shader.set("uColor", u),
                  p.shader.set("uColor", u),
                  d.shader.set("uColor", u),
                  s.shader.set("uColor2", a),
                  p.shader.set("uColor2", a),
                  d.shader.set("uColor2", a);
                let g = await M.current.gluiEl();
                null == g || g.shader.set("uColor2", u);
                let f = await (null === (t = D.current) || void 0 === t
                  ? void 0
                  : t.gluiEl());
                null == f ||
                  null === (o = f.shader) ||
                  void 0 === o ||
                  o.set("uColor", a),
                  null == f ||
                    null === (l = f.shader) ||
                    void 0 === l ||
                    l.set("uColor2", u);
              })();
          }, [R, A, G, E, I, U, P, S, Y, T, B, M, D]);
        let X = Global.mvs[i],
          $ = async () => {
            let e = (Stage.width / A.current.el().offsetWidth) * 0.95,
              r =
                Stage.width < 768
                  ? 48
                  : Stage.width > 1024
                  ? 80
                  : Stage.width < 1200
                  ? 79.5
                  : 150;
            e > 1 || (A.current.el().style.fontSize = "".concat(r * e, "px"));
          };
        (0, l.useEffect)(() => {
          $();
        }, []);
        let H = (0, l.useCallback)(() => {
          t.includes("mailto") ||
            ((Global.useScrollShader = !0), b.current.keepAlive(!0));
        }, []);
        return (0, o.jsx)(f.Zs, {
          className: s().pagefooter,
          children: (0, o.jsxs)("div", {
            className: s().pagefooter__link,
            style: { color: y.secondary },
            ref: N,
            children: [
              (0, o.jsx)(g.Z, {
                className: (0, a.Z)(
                  s().pagefooter__mv,
                  "glove" === i && s().portrait
                ),
                external: X,
                ref: b,
                glui: !0,
                zIndex: -20,
                useReel: !1,
              }),
              t.includes("mailto")
                ? (0, o.jsx)(d.Z, {
                    className: s().pagefooter__bg,
                    glui: !0,
                    ref: R,
                    style: { background: y.primary },
                  })
                : (0, o.jsx)(u(), {
                    href: t,
                    target: "".concat(
                      t.includes("mailto") ? "_blank" : "_self"
                    ),
                    scroll: !1,
                    className: s().pagefooter__bg,
                    style: { color: y.secondary },
                    onClick: H,
                    ref: O,
                    children: (0, o.jsx)(d.Z, {
                      className: s().pagefooter__bgInner,
                      glui: !0,
                      ref: R,
                      style: { background: y.primary },
                    }),
                  }),
              (0, o.jsxs)("div", {
                className: s().pagefooter__titlewrapper,
                children: [
                  (0, o.jsx)(p.Z, {
                    className: s().pagefooter__title,
                    ref: A,
                    text: _,
                    update: !1,
                    glui: !0,
                  }),
                  t.includes("mailto") &&
                    (0, o.jsx)(u(), {
                      href: t,
                      target: "".concat(
                        t.includes("mailto") ? "_blank" : "_self"
                      ),
                      scroll: !1,
                      className: s()["pagefooter__email--link"],
                      style: { color: y.secondary },
                      onClick: H,
                      ref: O,
                      children: (0, o.jsx)(p.Z, {
                        className: s().pagefooter__email,
                        ref: D,
                        text: "hello@buttermax.net",
                        update: !1,
                        glui: !0,
                      }),
                    }),
                ],
              }),
              (0, o.jsxs)("div", {
                className: s().pagefooter__footer,
                style: { color: y.secondary },
                children: [
                  (0, o.jsx)(p.Z, {
                    className: s()["pagefooter__footer--copyright"],
                    text: "BUTTERMAX.</br> ALL RIGHTS RESERVED.",
                    update: !1,
                    glui: !0,
                    ref: M,
                  }),
                  (0, o.jsxs)("div", {
                    className: s()["pagefooter__footer--links"],
                    children: [
                      (0, o.jsxs)(u(), {
                        href: "https://www.instagram.com/buttermax_studio/",
                        target: "_blank",
                        className: s()["pagefooter__footer--link"],
                        style: { color: y.primary },
                        ref: F,
                        children: [
                          (0, o.jsx)(d.Z, {
                            className: s()["link--bg"],
                            glui: !0,
                            style: { background: y.secondary },
                            ref: S,
                          }),
                          (0, o.jsx)(p.Z, {
                            className: s()["link--text"],
                            text: "IG.",
                            update: !1,
                            glui: !0,
                            ref: I,
                          }),
                          (0, o.jsx)("div", {
                            className: "".concat(s()["link--icon"]),
                            children: (0, o.jsx)(g.Z, {
                              src: "images/arrowUp.png",
                              width: "18",
                              height: "18",
                              icon: "arrowUp",
                              ref: B,
                              glui: {
                                textureParams: { forceNewTexture: !0 },
                                keepAlive: !0,
                                uniforms: { uType: { value: 2 } },
                                uColor2: { value: null },
                              },
                            }),
                          }),
                        ],
                      }),
                      (0, o.jsxs)(u(), {
                        href: "https://twitter.com/buttermaxstudio",
                        target: "_blank",
                        className: s()["pagefooter__footer--link"],
                        style: { color: y.primary },
                        ref: Z,
                        children: [
                          (0, o.jsx)(d.Z, {
                            className: s()["link--bg"],
                            glui: !0,
                            style: { background: y.secondary },
                            ref: P,
                          }),
                          (0, o.jsx)(p.Z, {
                            className: s()["link--text"],
                            text: "X.",
                            update: !1,
                            glui: !0,
                            ref: E,
                          }),
                          (0, o.jsx)("div", {
                            className: "".concat(s()["link--icon"]),
                            children: (0, o.jsx)(g.Z, {
                              src: "images/arrowUp.png",
                              width: "18",
                              height: "18",
                              icon: "arrowUp",
                              ref: T,
                              glui: {
                                textureParams: { forceNewTexture: !0 },
                                keepAlive: !0,
                                uniforms: { uType: { value: 2 } },
                                uColor2: { value: null },
                              },
                            }),
                          }),
                        ],
                      }),
                      (0, o.jsxs)(u(), {
                        href: "https://www.linkedin.com/company/buttermax/",
                        target: "_blank",
                        className: s()["pagefooter__footer--link"],
                        style: { color: y.primary },
                        ref: L,
                        children: [
                          (0, o.jsx)(d.Z, {
                            className: s()["link--bg"],
                            glui: !0,
                            style: { background: y.secondary },
                            ref: U,
                          }),
                          (0, o.jsx)(p.Z, {
                            className: s()["link--text"],
                            text: "LI.",
                            update: !1,
                            glui: !0,
                            ref: G,
                          }),
                          (0, o.jsx)("div", {
                            className: "".concat(s()["link--icon"]),
                            children: (0, o.jsx)(g.Z, {
                              src: "images/arrowUp.png",
                              width: "18",
                              height: "18",
                              icon: "arrowUp",
                              ref: Y,
                              glui: {
                                textureParams: { forceNewTexture: !0 },
                                keepAlive: !0,
                                uniforms: { uType: { value: 2 } },
                                uColor2: { value: null },
                              },
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      });
      (_.displayName = "PageFooter"), (r.Z = _);
    },
    8477: function (e, r, t) {
      "use strict";
      var o = t(6038);
      r.Z = (e) => () => ({
        entryTransition: async (r) => {
          var t, l, i;
          let { rootScene: u, delay: a = 0, first: n } = r;
          o.p8.set(e.$element.current, { opacity: 0 }),
            null === (t = e.animateSet) || void 0 === t || t.call(e, n);
          let s =
            null == e
              ? void 0
              : null === (l = e.scene) || void 0 === l
              ? void 0
              : l.current;
          if (s && u) {
            let e = await s;
            (Global.scene = e), u.setTo(e.rt), u.navigate(n);
          }
          return (
            null === (i = e.animateIn) || void 0 === i || i.call(e, n),
            o.p8.to(e.$element.current, {
              opacity: 1,
              duration: 1.15,
              ease: "Cubic.easeInOut",
              delay: a,
              onComplete: () => {
                var r;
                null === (r = e.onAnimateInComplete) ||
                  void 0 === r ||
                  r.call(e, n);
              },
            })
          );
        },
        exitTransition: (r) => {
          var t;
          let { to: l, delay: i } = r;
          return (
            null === (t = e.animateOut) || void 0 === t || t.call(e),
            o.p8.to(e.$element.current, {
              opacity: 0,
              duration: 1.15,
              ease: "Cubic.easeInOut",
              delay: i,
            })
          );
        },
      });
    },
    9830: function (e) {
      e.exports = {
        pagefooter: "PageFooter_pagefooter__rtpe3",
        pagefooter__bg: "PageFooter_pagefooter__bg__35QbZ",
        pagefooter__bgInner: "PageFooter_pagefooter__bgInner__krVB_",
        pagefooter__mv: "PageFooter_pagefooter__mv__xKLS7",
        portrait: "PageFooter_portrait__fa_Jk",
        pagefooter__link: "PageFooter_pagefooter__link__dq9_L",
        pagefooter__titlewrapper: "PageFooter_pagefooter__titlewrapper__Sqga9",
        pagefooter__email: "PageFooter_pagefooter__email__8O3iP",
        pagefooter__title: "PageFooter_pagefooter__title__pfw5Y",
        pagefooter__footer: "PageFooter_pagefooter__footer__BmGTY",
        "pagefooter__footer--links":
          "PageFooter_pagefooter__footer--links__Sh2KS",
        "pagefooter__footer--link":
          "PageFooter_pagefooter__footer--link__GIR1J",
        "link--text": "PageFooter_link--text__ucOWe",
        "link--bg": "PageFooter_link--bg__21XS_",
        "link--icon": "PageFooter_link--icon__4_pLp",
      };
    },
  },
]);
