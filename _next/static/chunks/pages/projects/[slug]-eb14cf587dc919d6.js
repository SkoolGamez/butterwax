(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [445],
  {
    964: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/projects/[slug]",
        function () {
          return r(784);
        },
      ]);
    },
    5281: function (e, t, r) {
      "use strict";
      var a = r(5893),
        l = r(6038),
        i = r(7294),
        n = r(1664),
        s = r.n(n),
        o = r(3680),
        c = r.n(o),
        u = r(7759),
        d = r(4924),
        _ = r(7117),
        p = r(2364),
        h = r(545),
        m = r(6010);
      let v = i.forwardRef((e, t) => {
        let {
            className: r,
            href: n,
            text: o,
            target: v = "self",
            analyticsEventName: x = "",
          } = e,
          j = (0, i.useRef)(null),
          f = (0, i.useRef)(null),
          g = (0, i.useRef)(null),
          { setSize: b } = (0, p.g3)(),
          [y] = (0, h.z$)(),
          w = { offset: 5 };
        (0, i.useImperativeHandle)(t, () => ({
          animateSet() {
            l.ZP.set(j.current, {
              x: "-".concat(w.offset, "%"),
              clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
            }),
              l.ZP.set(g.current, {
                x: "-".concat(w.offset, "%"),
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              });
          },
          onUpdate(e) {},
          animateIn() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0;
            l.ZP.to(j.current, {
              x: 0,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              duration: 0.75,
              ease: "Quart.easeInOut",
              delay: e / 1e3,
            }),
              l.ZP.to(g.current, {
                x: 0,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                duration: 0.75,
                ease: "Quart.easeInOut",
                delay: (e + 250) / 1e3,
              });
          },
          animateOut() {},
        }));
        let N = (0, i.useCallback)(() => {
            x && y(x);
          }, []),
          k = (0, i.useCallback)(() => {
            b && b(5.25);
          }, [b]),
          R = (0, i.useCallback)(() => {
            b && b(0);
          }, [b]);
        return (0, a.jsxs)(s(), {
          ref: j,
          className: (0, m.Z)(c().link, r),
          href: n,
          target: v,
          onClick: () => {
            N();
          },
          onPointerEnter: k,
          onPointerLeave: R,
          scroll: !1,
          children: [
            (0, a.jsx)("div", { className: c()["link--hit"] }),
            (0, a.jsx)(d.Z, { text: o, ref: f, glui: !0 }),
            (0, a.jsx)(u.Z, {
              icon: "arrow",
              className: c()["link--arrow"],
              glui: !0,
              rotation: 135,
            }),
            (0, a.jsx)(_.Z, {
              className: c()["link--underline"],
              glui: !0,
              inverse: !0,
            }),
            (0, a.jsx)(_.Z, { className: c()["link--background"], glui: !0 }),
          ],
        });
      });
      (v.displayName = "BaseLink"), (t.Z = v);
    },
    8612: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return d;
        },
      });
      var a = r(5893),
        l = r(7294),
        i = r(2364),
        n = r(5658),
        s = r(7735),
        o = r(8440),
        c = r(9726);
      let u = (0, l.forwardRef)((e, t) => {
        let { asset: r, className: u, map: d, glui: _, fixed: p = !0 } = e,
          h = (0, l.useRef)(null),
          m = (0, l.useRef)(null),
          v = (0, l.useRef)(null),
          x = (0, l.useRef)(null),
          { setSize: j } = (0, i.g3)(),
          f = (0, i.rE)();
        (0, l.useImperativeHandle)(t, () => ({
          wrapper: () => m.current,
          el: () => elRef.current,
          elGlui: () => v.current,
        }));
        let g = (0, s.v8)(
          h,
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
              uFixed: { value: p },
            },
            map: async () => {
              if (d) return (d = await d()), (x.current = d), d;
              let e = (0, n.B)(VideoTexture, { path: r.url });
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
            g &&
            g.element.shader.set(
              "uMapResolution",
              new Vector2(
                Global.videoDimensions.width,
                Global.videoDimensions.height
              )
            );
        }, [Global.videoDimensions, g]),
          (0, l.useEffect)(() => {
            let e = (0, o.l2)("scrollY", (e) => {
              g &&
                ((g.scrollPos = e || 0),
                (g.shader.uniforms.uScroll.value = e),
                (g.element.scaleX = 1.03),
                (g.element.scaleY = 1.03),
                (e -= 10),
                p && (g.element.group.position.y = -e || 0));
            });
            return () => e();
          }, [g]);
        let { wait: b } = (0, o.mI)();
        (0, l.useEffect)(() => {
          let e = async () => {
            f &&
              b &&
              (await b(() => void 0 !== g),
              (g.shader.uniforms.tDraw.value = f));
          };
          e();
        }, [f, g, b]),
          (0, l.useEffect)(() => {
            g && (v.current = g);
          }, [g]);
        let y = (0, l.useCallback)(() => {
            j && j(3);
          }, [j]),
          w = (0, l.useCallback)(() => {
            j && j(0);
          }, [j]),
          N = (0, l.useCallback)(
            (e) => {
              if (!g) return;
              let t = window.getComputedStyle(m.current);
              ("none" === t.display || 0 === t.opacity) && (e = !1),
                x.current &&
                  (x.current[e ? "start" : "stop"](), (Global.videoInView = e)),
                g.wrapper[e ? "show" : "hide"](),
                (g.wrapper.alpha = e ? 1 : 0);
            },
            [g]
          );
        return (
          (0, c.YD)(N),
          (0, a.jsx)("div", {
            ref: m,
            onPointerEnter: y,
            onPointerLeave: w,
            style: {
              visibility: _ ? "hidden" : "visible",
              pointerEvents: _ ? "none" : "auto",
              height: "100%",
            },
            children: _
              ? (0, a.jsx)("div", { className: "".concat(u || ""), ref: h })
              : (0, a.jsx)("div", {
                  className: "".concat(u || ""),
                  ref: h,
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
      var d = u;
    },
    1770: function (e, t, r) {
      "use strict";
      var a = r(5893),
        l = r(7294),
        i = r(6010),
        n = r(4924),
        s = r(545),
        o = r(3890),
        c = r(8440);
      let u = l.forwardRef((e, t) => {
        let {
            className: r,
            copyLines: u,
            moveCharacters: d = !1,
            enable3D: _ = !0,
            offsets: p = [
              { x: -0.01, z: -2 },
              { x: 0.9, z: -1 },
              { x: -0.1, z: -1 },
              { x: 0.2, z: 2 },
            ],
          } = e,
          h = (0, l.useRef)([]),
          [m, v] = (0, s.Rg)(),
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
        let j = (0, l.useCallback)(() => {
          (!Device.mobile ||
            (Device.mobile.tablet && Stage.width > Stage.height)) &&
            g();
        }, []);
        (0, o.Vu)(j);
        let { wait: f } = (0, c.mI)(),
          g = async () => {
            await f(16),
              h.current.forEach(async (e, t) => {
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
                  l = 6 + p[t].z,
                  i = (Device.mobile, 0.5 * r),
                  n = Device.mobile
                    ? 0.35 * x.current.width
                    : 0.5 * x.current.width,
                  s = 0;
                if (p[t].z > 0) {
                  let e = Math.range(p[t].x, -1, 1, -i, i);
                  s = p[t].x < 0 ? e - n : e + n;
                } else s = Math.range(p[t].x, -1, 1, -i, i);
                (e.style.transform = "translateX(".concat(s, "px)")),
                  (e.style.fontSize = "".concat(
                    (1 -
                      (2 * l * Math.tan(15 * (Math.PI / 180))) /
                        (2 * (l - 1) * Math.tan(15 * (Math.PI / 180)))) *
                      a +
                      a,
                    "px"
                  )),
                  e.targets.forEach(async (e) => {
                    e.style.zIndex = p[t].z;
                  });
              });
          };
        return (0, a.jsx)("div", {
          className: (0, i.Z)(r),
          children: u.map((e, t) => {
            let { words: r, full: l } = e;
            return (0, a.jsxs)(
              "div",
              {
                ref: (e) => (h.current[t] = e),
                children: [
                  (0, a.jsx)("div", {
                    className: "proxy",
                    children: (0, a.jsx)(n.Z, { text: l }, t),
                  }),
                  (0, a.jsx)("div", {
                    className: "words",
                    children: r.map((e, t) =>
                      (0, a.jsx)(
                        n.Z,
                        {
                          ref: v,
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
        i = r(3821),
        n = r.n(i),
        s = r(4924),
        o = r(9726),
        c = r(6010);
      let u = l.forwardRef((e, t) => {
        let { className: r, title: i, subtitle: u } = e,
          d = (0, l.useRef)();
        i = i
          .replace(/\s+/g, " ")
          .replaceAll(" <br /> ", " ")
          .replaceAll("<br />", " ");
        let _ = i.split(" "),
          p = Device.mobile ? 2 : 3;
        return (
          (i = _.map((e, t) =>
            t === p
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
          (0, a.jsxs)(o.Zs, {
            className: (0, c.Z)(r, n().headertext),
            children: [
              (0, a.jsx)(s.Z, {
                className: n()["headertext--subtitle"],
                text: u,
                glui: !0,
                noRevert: !0,
              }),
              (0, a.jsx)(s.Z, {
                className: n()["headertext--title"],
                text: i,
                ref: d,
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
    784: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSG: function () {
            return M;
          },
          default: function () {
            return C;
          },
        });
      var a = r(5893),
        l = r(1163),
        i = r(7294);
      r(9008);
      var n = r(8477),
        s = r(6010),
        o = r(711),
        c = r.n(o),
        u = r(4924),
        d = r(4179),
        _ = r.n(d),
        p = r(2071),
        h = r(7117),
        m = r(2364),
        v = r(3890),
        x = r(9726);
      let j = (e) => {
        let {
            layoutType: t,
            image: r,
            position: l,
            customBG: n,
            useCustomBG: o = !1,
          } = e,
          c = (0, i.useRef)(),
          u = (0, i.useRef)(),
          d = (0, i.useRef)(),
          { setSize: j } = (0, m.g3)(),
          f = (0, m.rE)(),
          g = (0, i.useMemo)(
            () => ({
              shaderName: "GLUIDetailMediaShader",
              uniforms: {
                uParallax: { value: 0 },
                uScale: { value: 0.4 },
                uVelocity: RootScene.VELOCITY,
                uMouseMove: RootScene.MOUSE_MOVE,
              },
            }),
            []
          ),
          { wait: b } = (0, v.mI)();
        (0, i.useEffect)(() => {
          let e = async () => {
            f &&
              b &&
              (await b(() => void 0 !== u.current.glui()),
              (u.current.glui().shader.uniforms.tDraw.value = f));
          };
          e();
        }, [f, b]);
        let y = (0, i.useCallback)(() => {
            j && j(3);
          }, [j]),
          w = (0, i.useCallback)(() => {
            j && j(0);
          }, [j]),
          { resize: N } = (0, v.d_)();
        (0, i.useEffect)(() => {
          if (!N) return;
          c.current.__bounds = {};
          let { top: e } = c.current.getBoundingClientRect();
          c.current.__bounds.top = e + ((0, v.TN)("scrollY") || 0);
        }, [N]);
        let k = (0, i.useCallback)(() => {
          let e = u.current.glui();
          if (e && c.current.__bounds) {
            let t = (0, v.TN)("scrollY") || 0,
              r = Math.range(
                t,
                c.current.__bounds.top - Stage.height,
                c.current.__bounds.top + Stage.height,
                0,
                1,
                !0
              );
            e.shader.uniforms.uParallax.value = r;
          }
        }, []);
        return (
          (0, v.y2)(k),
          (0, a.jsx)(x.Zs, {
            ref: c,
            className: (0, s.Z)(_().wrapper, _()[t], _()[l]),
            style: { color: o ? n : "currentColor" },
            children: (0, a.jsx)("div", {
              className: _().outer,
              children: (0, a.jsxs)("div", {
                className: _().inner,
                onPointerEnter: y,
                onPointerLeave: w,
                children: [
                  (0, a.jsx)(h.Z, {
                    ref: d,
                    className: _().background,
                    update: !1,
                    glui: !0,
                  }),
                  (0, a.jsx)("div", {
                    className: _().imgWrapper,
                    children: (0, a.jsx)(p.Z, {
                      ref: u,
                      className: _().img,
                      src: r.sizes
                        ? r.sizes["i".concat(Tests.getMaxImgRes(), "px")].url
                        : r.url,
                      alt: "temp",
                      glui: g,
                    }),
                  }),
                ],
              }),
            }),
          })
        );
      };
      j.displayName = "DetailMedia";
      var f = r(8612),
        g = r(3983),
        b = r(1770),
        y = r(5281),
        w = r(7759),
        N = r(8997),
        k = r(5658),
        R = r(8440),
        Z = r(7735),
        S = r(7121);
      let D = (e) => {
          let { id: t, ...r } = e;
          return (0, a.jsx)(j, { ...r }, t);
        },
        E = i.forwardRef((e, t) => {
          let { data: r, nextProject: o } = e;
          (0, l.useRouter)(), (r.icon = "logo");
          let d = (0, i.useRef)(null),
            _ = (0, i.useRef)(null),
            m = (0, i.useRef)(null),
            v = (0, i.useRef)(null),
            j = (0, i.useRef)(),
            E = (0, i.useRef)(),
            M = (0, i.useRef)(null),
            C = (0, i.useRef)(null),
            P = (0, i.useRef)(),
            I = (0, R.uZ)(BaseScene, { clearColor: r.colors.primary });
          (0, i.useRef)(0), (0, i.useRef)(0), (0, i.useRef)();
          let { wait: z } = (0, R.mI)(),
            { device: O } = r.maps,
            L = Global.mvs[O];
          (Global.activeMV = L),
            (0, i.useImperativeHandle)(
              t,
              () => (0, n.Z)({ $element: _, scene: I }),
              []
            );
          let T = (0, i.useCallback)(() => {
            var e;
            v.current ||
              0 === ((0, R.TN)("scrollY") || 0) ||
              ((v.current = !0),
              null === (e = m.current) || void 0 === e || e.animateOut());
          }, []);
          (0, R.y2)(T);
          let { clientIcon: G } = (0, R.d_)("theme");
          (0, i.useEffect)(() => {
            var e, t, a, l, i, n, s;
            document.documentElement.style.setProperty(
              "--primary",
              r.colors.primary
            ),
              document.documentElement.style.setProperty(
                "--secondary",
                r.colors.secondary
              ),
              document.documentElement.style.setProperty(
                "--tertiary",
                r.colors.tertiary
              ),
              null === (e = C.current) ||
                void 0 === e ||
                e.setCenterSize(
                  null ===
                    (t =
                      null === (a = j.current) || void 0 === a
                        ? void 0
                        : a.el()) || void 0 === t
                    ? void 0
                    : t.offsetWidth,
                  null ===
                    (l =
                      null === (i = j.current) || void 0 === i
                        ? void 0
                        : i.el()) || void 0 === l
                    ? void 0
                    : l.offsetHeight
                ),
              null === (n = j.current) || void 0 === n || n.animateSet(1),
              L.highQuality || L.loadHighRes(),
              L.useVideo(),
              (L.isCurrentActive = !0);
            let o = async (e) => {
              await z(150),
                await z(() => !(0, R.TN)("transitioning")),
                console.log("set icon"),
                (d.current = e),
                (0, R.ic)("clientIcon", e, "theme");
            };
            return (
              o(
                null === (s = r.info) || void 0 === s
                  ? void 0
                  : s.clients[0].client.value.image.url
              ),
              () => {
                console.log(d.current, G),
                  d.current === G && (0, R.ic)("clientIcon", null, "theme");
              }
            );
          }, [G]);
          let H = (0, i.useCallback)(async () => {
            var e, t, a, l, i, n;
            let s = (0, k.B)(VideoTexture, {
              path:
                (null === (e = Device.mobile) || void 0 === e
                  ? void 0
                  : e.phone) ||
                ((null === (t = Device.mobile) || void 0 === t
                  ? void 0
                  : t.tablet) &&
                  Stage.width < Stage.height)
                  ? r.heading.casestudy.url
                  : r.heading.casestudydesktop.url,
              preload: !0,
            });
            return (
              await s.texture.promise,
              s.start(),
              (Global.video = s),
              (Global.videoDimensions = {
                width:
                  (null === (a = Device.mobile) || void 0 === a
                    ? void 0
                    : a.phone) ||
                  ((null === (l = Device.mobile) || void 0 === l
                    ? void 0
                    : l.tablet) &&
                    Stage.width < Stage.height)
                    ? 750
                    : 512,
                height:
                  (null === (i = Device.mobile) || void 0 === i
                    ? void 0
                    : i.phone) ||
                  ((null === (n = Device.mobile) || void 0 === n
                    ? void 0
                    : n.tablet) &&
                    Stage.width < Stage.height)
                    ? 1268
                    : 288,
              }),
              (0, R.ic)("video", Utils.timestamp()),
              s
            );
          }, []);
          return (0, a.jsx)(Z.YR, {
            scene: I,
            children: (0, a.jsx)(S.Z, {
              ref: P,
              data: r,
              children: (0, a.jsxs)("div", {
                className: "page ".concat(c().project),
                ref: _,
                children: [
                  (0, a.jsxs)(x.Zs, {
                    className: c().project__header,
                    children: [
                      (0, a.jsx)(b.Z, {
                        className: c()["project__header--lines"],
                        copyLines: Device.mobile
                          ? (() => {
                              let e = [],
                                { title: t } = r,
                                a = t.split(" ");
                              return (
                                a.map((t, r) => {
                                  e.push({
                                    full: t,
                                    words: [{ word: t, id: "word-".concat(r) }],
                                    id: "word-".concat(r),
                                  });
                                }),
                                e
                              );
                            })()
                          : r.heading.headingTitle || data.heading,
                        ref: C,
                        enable3D: !Device.mobile,
                        moveCharacters: !0,
                        offsets: Device.mobile
                          ? []
                          : [
                              { x: -0.8, z: 0 },
                              { x: 0.1, z: 1 },
                              { x: -0.4, z: -1 },
                              { x: 0.5, z: 0 },
                            ],
                      }),
                      (0, a.jsx)(p.Z, {
                        ref: j,
                        className: (0, s.Z)(
                          c()["project__header--img"],
                          c()[r.maps.orientation]
                        ),
                        external: L,
                        glui: { enable3D: !0 },
                        zIndex: 1,
                      }),
                      (0, a.jsx)("div", {
                        className: ""
                          .concat(c()["project__header--icon"], " ")
                          .concat(c()["header--icon__arrow"]),
                        children: (0, a.jsx)(w.Z, {
                          icon: "arrow",
                          className: c()["project__header--icon-arrow"],
                          glui: !0,
                          manual: !0,
                          ref: m,
                        }),
                      }),
                      (0, a.jsx)(h.Z, {
                        className: c()["project__header--mask"],
                        glui: !0,
                      }),
                    ],
                  }),
                  (0, a.jsx)(x.Zs, {
                    className: c().project__video,
                    children: (0, a.jsx)(f.Z, {
                      ref: M,
                      asset: r.heading.casestudy,
                      map: H,
                      className: c()["project__video--inner"],
                      glui: !0,
                      fixed: !0,
                    }),
                  }),
                  (0, a.jsxs)(x.Zs, {
                    className: c().project__inner,
                    children: [
                      (0, a.jsx)(h.Z, {
                        className: c()["project__inner--mask"],
                        glui: !0,
                      }),
                      (0, a.jsxs)("div", {
                        className: c()["project__inner--header"],
                        children: [
                          (0, a.jsx)(g.Z, {
                            className: c()["header--titlewrapper"],
                            title: r.info.title,
                            subtitle: "",
                          }),
                          (0, a.jsxs)("div", {
                            className: c().header__body,
                            children: [
                              (0, a.jsxs)("div", {
                                className: c().header__usps,
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: c().header__usp,
                                    children: [
                                      (0, a.jsx)("div", {
                                        children: (0, a.jsx)(u.Z, {
                                          className: c()["header__usp--label"],
                                          text: "Client",
                                          glui: !0,
                                          revert: !1,
                                        }),
                                      }),
                                      (0, a.jsx)("div", {
                                        children: (0, a.jsx)(u.Z, {
                                          className: c()["header__usp--value"],
                                          text: r.info.clients
                                            .map((e) => {
                                              let { client: t } = e;
                                              return t.value.name;
                                            })
                                            .join(", "),
                                          glui: !0,
                                          revert: !1,
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: c().header__usp,
                                    children: [
                                      (0, a.jsx)("div", {
                                        children: (0, a.jsx)(u.Z, {
                                          className: c()["header__usp--label"],
                                          text: "Year",
                                          glui: !0,
                                          revert: !1,
                                        }),
                                      }),
                                      (0, a.jsx)("div", {
                                        children: (0, a.jsx)(u.Z, {
                                          className: c()["header__usp--value"],
                                          text: r.info.year,
                                          glui: !0,
                                          revert: !1,
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: c().header__usp,
                                    children: [
                                      (0, a.jsx)("div", {
                                        children: (0, a.jsx)(u.Z, {
                                          className: c()["header__usp--label"],
                                          text: "Roles",
                                          glui: !0,
                                          revert: !1,
                                        }),
                                      }),
                                      (0, a.jsx)("div", {
                                        children: r.info.roles.map((e, t) => {
                                          let { role: r } = e;
                                          return (0, a.jsx)(
                                            u.Z,
                                            {
                                              className:
                                                c()["header__usp--value"],
                                              text: r.value.role,
                                              glui: !0,
                                              revert: !1,
                                            },
                                            ""
                                              .concat(r.value.role, "-")
                                              .concat(t)
                                          );
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: c().header__usp,
                                    children: [
                                      (0, a.jsx)("div", {
                                        children: (0, a.jsx)(u.Z, {
                                          className: c()["header__usp--label"],
                                          text: "Overview",
                                          glui: !0,
                                          revert: !1,
                                        }),
                                      }),
                                      (0, a.jsx)("div", {
                                        className: c().header__copy,
                                        children: (0, a.jsx)(u.Z, {
                                          className:
                                            c()["header__copy--primary"],
                                          text: r.info.copy,
                                          glui: !0,
                                          noRevert: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              r.info.url &&
                                (0, a.jsx)(y.Z, {
                                  className: c().cta,
                                  target: "_blank",
                                  href: r.info.url,
                                  text: "Visit Live Site",
                                  glui: !0,
                                }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: c()["project__inner--content"],
                        children: r.content.map(D),
                      }),
                    ],
                  }),
                  (0, a.jsx)(N.Z, {
                    next: "/projects/".concat(o.slug),
                    device: o.maps.device,
                    maps: { ...o.maps },
                    title: o.title,
                    pageController: P,
                    element: _,
                    colors: {
                      primary: o.colors.primary,
                      secondary: o.colors.secondary,
                    },
                    ref: E,
                    zIndex: 1,
                  }),
                ],
              }),
            }),
          });
        });
      E.displayName = "Project";
      var M = !0,
        C = E;
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
    4179: function (e) {
      e.exports = {
        wrapper: "DetailMedia_wrapper__3HUPE",
        right: "DetailMedia_right__WzTdg",
        center: "DetailMedia_center__6_QSA",
        inner: "DetailMedia_inner__PM2Mq",
        portrait: "DetailMedia_portrait__5KHhK",
        outer: "DetailMedia_outer__n6Avg",
        imgWrapper: "DetailMedia_imgWrapper__2OPcE",
        landscape: "DetailMedia_landscape__dggaq",
        background: "DetailMedia_background__4MFNa",
        img: "DetailMedia_img__QP_Sp",
      };
    },
    3821: function (e) {
      e.exports = {
        headertext: "HeaderText_headertext__09r9w",
        "headertext--subtitle": "HeaderText_headertext--subtitle__rLiSK",
        "headertext--title": "HeaderText_headertext--title__EIz0H",
      };
    },
    711: function (e) {
      e.exports = {
        project: "project_project__InxOL",
        cta: "project_cta__gPaue",
        "header--titlewrapper": "project_header--titlewrapper__N8CqL",
        project__header: "project_project__header__XLwCY",
        "project__header--mask": "project_project__header--mask__euMWE",
        "project__header--icon": "project_project__header--icon__8vyTJ",
        "project__header--icon-arrow":
          "project_project__header--icon-arrow__wFrrI",
        "project__header--lines": "project_project__header--lines___oRQs",
        "project__header--img": "project_project__header--img__GcMkO",
        "header--copy": "project_header--copy__44RSL",
        project__video: "project_project__video__d0VcX",
        "project__video--inner": "project_project__video--inner__OJeh2",
        project__inner: "project_project__inner__nxGjS",
        "project__inner--mask": "project_project__inner--mask__6XW6q",
        "project__inner--header": "project_project__inner--header__8HO_N",
        "header__copy--primary": "project_header__copy--primary__KSjK7",
        "header--title": "project_header--title__uJwyE",
        header__body: "project_header__body__ZhFCD",
        header__usps: "project_header__usps__93vxy",
        header__usp: "project_header__usp__Gs5tT",
        "header__usp--label": "project_header__usp--label__B3AqY",
        "header__usp--value": "project_header__usp--value__sacBu",
        header__copy: "project_header__copy__8UHUZ",
        "project__inner--content": "project_project__inner--content__GBNhb",
        "project__inner--next": "project_project__inner--next__NfXty",
        "next--bg": "project_next--bg__eo5AS",
        "next--title": "project_next--title__tsHUl",
        "next--img": "project_next--img___beXK",
      };
    },
  },
  function (e) {
    e.O(0, [671, 934, 774, 888, 179], function () {
      return e((e.s = 964));
    }),
      (_N_E = e.O());
  },
]);
