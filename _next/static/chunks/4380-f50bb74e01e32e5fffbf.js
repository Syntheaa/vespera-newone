"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4380], {
        4941: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return l
                }
            });
            var a = t(5893);

            function l(e) {
                e.preview;
                var n = e.children,
                    t = e.className;
                return (0, a.jsx)("div", {
                    className: "flex-1 flex py-28 md:py-32 relative z-20 layout ".concat(t && t),
                    children: n
                })
            }
        },
        4380: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return F
                }
            });
            t(4941), t(2743);
            var a = t(9008),
                l = t(8098),
                r = t(1163),
                s = t(5893),
                c = function() {
                    return (0, s.jsx)("svg", {
                        version: "",
                        x: "",
                        y: "",
                        viewBox: "",
                        children: (0, s.jsxs)("g", {
                            children: [(0, s.jsx)("path", {
                                fill: "#FFF",
                                d: ""
                            }), (0, s.jsx)("rect", {
                                x: "",
                                y: "",
                                fill: "#FFF",
                                width: "4.4",
                                height: "99.6"
                            }), (0, s.jsxs)("g", {
                                children: [(0, s.jsx)("path", {
                                    fill: "#FFF",
                                    d: ""
                                }), (0, s.jsx)("path", {
                                    fill: "#FFF",
                                    d: ""
                                })]
                            })]
                        })
                    })
                },
                i = t(7294),
                o = t(5697),
                d = t.n(o),
                h = function() {
                    function e(e, n) {
                        for (var t = 0; t < n.length; t++) {
                            var a = n[t];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                        }
                    }
                    return function(n, t, a) {
                        return t && e(n.prototype, t), a && e(n, a), n
                    }
                }(),
                x = Object.assign || function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                    }
                    return e
                },
                p = {
                    opacity: "1"
                },
                u = function(e) {
                    function n(e) {
                        ! function(e, n) {
                            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                        }(this, n);
                        var t = function(e, n) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !n || "object" !== typeof n && "function" !== typeof n ? e : n
                        }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
                        return t.onImageLoad = function() {
                            t.componentMounted && t.setState({
                                loaded: !0
                            })
                        }, t.state = {
                            loaded: !1
                        }, t.componentMounted = !1, t
                    }
                    return function(e, n) {
                        if ("function" !== typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
                        e.prototype = Object.create(n && n.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n)
                    }(n, e), h(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props.src;
                            if (e) {
                                var n = new window.Image;
                                n.src = e, n.onload = this.onImageLoad, this.componentMounted = !0
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.componentMounted = !1
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                n = e.src,
                                t = e.loadAsBackgroundImage,
                                a = e.opacityTransition,
                                l = e.style,
                                r = function(e, n) {
                                    var t = {};
                                    for (var a in e) n.indexOf(a) >= 0 || Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
                                    return t
                                }(e, ["src", "loadAsBackgroundImage", "opacityTransition", "style"]),
                                s = {
                                    opacity: "0"
                                };
                            return s.transition = "opacity " + a + "s ease 0s", i.createElement(i.Fragment, null, !t && i.createElement("img", x({
                                src: n
                            }, r, {
                                style: this.state.loaded ? x({}, l, s, p) : s
                            })), t && i.createElement("div", x({}, r, {
                                style: this.state.loaded ? x({
                                    backgroundImage: "url('" + n + "')"
                                }, l, s, p) : s
                            }), this.props.children))
                        }
                    }]), n
                }(i.PureComponent);
            u.propTypes = {
                src: d().string.isRequired,
                loadAsBackgroundImage: d().bool,
                opacityTransition: d().number,
                onClick: d().func
            }, u.defaultProps = {
                loadAsBackgroundImage: !1,
                opacityTransition: .5
            };
            var m = u,
                f = ["Hellblade_Senuas_Sacrifice_2021-08-03-13-36-40", "Hellblade_Senuas_Sacrifice_2021-08-03-14-18-13", "Hellblade_Senuas_Sacrifice_2021-08-03-14-19-03", "Hellblade_Senuas_Sacrifice_2021-08-03-14-22-21", "Hellblade_Senuas_Sacrifice_2021-08-04-01-00-58", "Hellblade_Senuas_Sacrifice_2021-08-04-02-14-27", "Hellblade_Senuas_Sacrifice_2021-08-04-02-17-02", "Hellblade_Senuas_Sacrifice_2021-08-04-02-18-50", "Hellblade_Senuas_Sacrifice_2021-08-04-02-21-41"],
                j = [{
                    q: "How much will this update cost?",
                    a: "This is a free update for existing vespera owners."
                }, {
                    q: "Will this update come to any other platforms?",
                    a: "There are no plans to bring this update to any other platforms at this time."
                }, {
                    q: "Will this update delay game\u2023s secret: vespera?",
                    a: "For this  we partnered the company who helped us bring vespera on crypto tranding. They have been hard at work on this  so we have been able to focus on our future projects, including game\u2023s secret: Vespera"
                }],
                b = function() {
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("p", {
                            children: "Performance"
                        }), (0, s.jsx)("p", {
                            children: "Resolution"
                        }), (0, s.jsx)("p", {
                            children: "Enriched"
                        })]
                    })
                },
                g = function() {
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("p", {
                            children: "No"
                        }), " ", (0, s.jsx)("p", {
                            children: "No"
                        }), " ", (0, s.jsx)("p", {
                            children: "Yes"
                        })]
                    })
                },
                v = function() {
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("p", {
                            children: "Dynamic Up to 360p "
                        }), (0, s.jsx)("p", {
                            children: "Dynamic Up to 4K"
                        }), (0, s.jsx)("p", {
                            children: "Dynamic Up to 4K"
                        })]
                    })
                },
                y = function() {
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("p", {
                            children: "60Hz"
                        }), (0, s.jsx)("p", {
                            children: "60FPS"
                        }), (0, s.jsx)("p", {
                            children: "30FPS"
                        })]
                    })
                },
                w = function() {
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("p", {
                            children: "Performance"
                        }), (0, s.jsx)("p", {
                            children: "Resolution"
                        }), (0, s.jsx)("p", {
                            children: "Enriched"
                        })]
                    })
                },
                S = function() {
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("p", {
                            children: "No"
                        }), " ", (0, s.jsx)("p", {
                            children: "No"
                        }), " ", (0, s.jsx)("p", {
                            children: "Yes"
                        })]
                    })
                },
                N = function() {
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("p", {
                            children: "FULL HD"
                        }), (0, s.jsx)("p", {
                            children: "Dynamic up to 720p"
                        }), (0, s.jsx)("p", {
                            children: "Full HD"
                        })]
                    })
                },
                _ = function() {
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("p", {
                            children: "60FPS"
                        }), (0, s.jsx)("p", {
                            children: "30FPS"
                        }), (0, s.jsx)("p", {
                            children: "30FPS"
                        })]
                    })
                },
                F = function(e) {
                    e.preview, (0, r.useRouter)().route;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(a.default, {
                            children: (0, s.jsxs)("title", {
                                children: ["Now Enhanced For the game | ", l.yf]
                            })
                        }), (0, s.jsxs)("div", {
                            className: "bg-black bg-opacity-70 md:bg-opacity-0 w-full  py-28 md:py-32  relative z-20 ",
                            children: [(0, s.jsxs)("div", {
                                className: "bg-purple-400- mx-auto max-w-3xl px-10 lg:px-0",
                                children: [(0, s.jsx)(m, {
                                    src: "/optimized/logo.png",
                                    className: " block w-full max-w-600-px mx-auto pb-10 "
                                }), (0, s.jsx)("h2", {
                                    className: " max-w-md mx-auto uppercase font-trajan font-light text-2xl lg:text-4xl text-center",
                                    children: "Now Enhanced For the game"
                                }), (0, s.jsx)("div", {
                                    className: " w-20 lgw-32 mx-auto pt-6 pb-10",
                                    children: (0, s.jsx)(c, {})
                                }), (0, s.jsx)("p", {
                                    className: " mx-auto  max-w-600-px text-center pb-10 ",
                                    children: "Vespera Games Awards , relive \u2023s journey in vespera: game\u2023s experience the world through new eyes."
                                }), (0, s.jsx)("div", {
                                    className: "click-here-to-buy mx-auto py-2 max-w-sm mb-10",
                                    children: (0, s.jsx)("a", {
                                        className: "font-trajan block uppercase text-2xl font-light text-center hover:opacity-60 transition-opacity duration-200",
                                        href: "https://t.me/VESPERABSC",
                                        target: "_blank",
                                        children: "Join Now"
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "video-container bg-red-400 ",
                                    children: (0, s.jsxs)("a", {
                                        className: "absolute inset-0 block",
                                        href: "https://youtu.be/rnEs7HJ3bc0",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: [(0, s.jsx)("img", {
                                            src: "https://i.ibb.co/QpQK6DM/Whats-App-Image-2023-04-01-at-9-22-08-AM.jpg",
                                            alt: "Face of Senua",
                                            className: " absolute inset-0 object-cover"
                                        }), (0, s.jsx)("svg", {
                                            xmlns: "",
                                            viewBox: "0 0 24 24",
                                            className: "absolute center-center w-10 md:w-28",
                                            children: (0, s.jsx)("path", {
                                                fill: "#fff",
                                                d: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                                            })
                                        })]
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "fade-gradient h-px opacity-20"
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "wrapper pt-20 ",
                                children: [(0, s.jsx)("h3", {
                                    className: "font-proxima-nova-extra-condensed leading-none uppercase text-hellblade-orange pb-5 text-3xl md:text-3xl font-bold",
                                    children: "Vespera: game's secret"
                                }), (0, s.jsx)("p", {
                                    className: " max-w-2xl pb-10",
                                    children: "We\u2023re proud to present for Vespera: game\u2023s Secret."
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "relative ",
                                children: [(0, s.jsx)("div", {
                                    className: "bg-gradient-to-l from-black w-32 h-full absolute right-0 z-20 md:hidden"
                                }), (0, s.jsx)("div", {
                                    className: "bg-gradient-to-r from-black w-4 h-full absolute left-0 z-20 md:hidden"
                                }), (0, s.jsx)("div", {
                                    className: " overflow-x-auto pl-5  ",
                                    children: (0, s.jsxs)("table", {
                                        className: "table-auto optimized-table  lg:block  pr-10",
                                        children: [(0, s.jsx)("thead", {
                                            children: (0, s.jsxs)("tr", {
                                                children: [(0, s.jsx)("th", {
                                                    children: "Platform"
                                                }), (0, s.jsx)("th", {
                                                    children: "Mode"
                                                }), (0, s.jsx)("th", {
                                                    children: "Ray Tracing"
                                                }), (0, s.jsx)("th", {
                                                    children: "Resolution"
                                                }), (0, s.jsx)("th", {
                                                    children: "Frame Rate"
                                                })]
                                            })
                                        }), (0, s.jsxs)("tbody", {
                                            children: [(0, s.jsxs)("tr", {
                                                children: [(0, s.jsxs)("td", {
                                                    children: [(0, s.jsx)("span", {
                                                        className: "block",
                                                        children: "game"
                                                    }), " secret\xa0X"]
                                                }), (0, s.jsx)("td", {
                                                    children: (0, s.jsx)(b, {})
                                                }), (0, s.jsx)("td", {
                                                    children: (0, s.jsx)(g, {})
                                                }), (0, s.jsx)("td", {
                                                    children: (0, s.jsx)(v, {})
                                                }), (0, s.jsx)("td", {
                                                    children: (0, s.jsx)(y, {})
                                                })]
                                            }), (0, s.jsxs)("tr", {
                                                children: [(0, s.jsxs)("td", {
                                                    children: [(0, s.jsx)("span", {
                                                        className: "block",
                                                        children: "game"
                                                    }), "Secret\xa0S"]
                                                }), (0, s.jsx)("td", {
                                                    children: (0, s.jsx)(w, {})
                                                }), (0, s.jsx)("td", {
                                                    children: (0, s.jsx)(S, {})
                                                }), (0, s.jsx)("td", {
                                                    children: (0, s.jsx)(N, {})
                                                }), (0, s.jsx)("td", {
                                                    children: (0, s.jsx)(_, {})
                                                })]
                                            })]
                                        })]
                                    })
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "wrapper pt-20",
                                children: [(0, s.jsx)("h3", {
                                    className: "font-proxima-nova-extra-condensed leading-none uppercase text-hellblade-orange pb-5 text-3xl md:text-3xl font-bold",
                                    children: "Enhanced On PC"
                                }), (0, s.jsx)("p", {
                                    className: " max-w-2xl pb-10",
                                    children: "This graphics is also available for PC players, make sure you get the best performance possible on your machine."
                                }), (0, s.jsx)("h3", {
                                    className: "font-proxima-nova-extra-condensed leading-none uppercase text-hellblade-orange pb-5 text-3xl md:text-3xl font-bold",
                                    children: "Accessibility"
                                }), (0, s.jsx)("p", {
                                    className: " max-w-2xl pb-5",
                                    children: "Accessibility are available. These include:"
                                }), (0, s.jsxs)("ul", {
                                    className: "list-disc list-inside space-y-3",
                                    children: [(0, s.jsx)("li", {
                                        children: "Full controller remapping"
                                    }), (0, s.jsx)("li", {
                                        children: "Subtitle customisation"
                                    }), (0, s.jsx)("li", {
                                        children: "Mono sound option"
                                    }), (0, s.jsx)("li", {
                                        children: "Colour blindness settings"
                                    })]
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "wrapper pt-20 ",
                                children: [(0, s.jsx)("div", {
                                    className: "grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl",
                                    children: f.map((function(e, n) {
                                        return (0, s.jsx)("div", {
                                            className: "bg-black-400 aspect-w-16 aspect-h-9",
                                            children: (0, s.jsx)("a", {
                                                className: "hover:opacity-75 transition-opacity duration-200",
                                                target: "_blank",
                                                href: "".concat(e, ".png"),
                                                children: (0, s.jsx)(m, {
                                                    src: "".concat(e, ".jpg"),
                                                    alt: "",
                                                    className: "block w-full"
                                                })
                                            })
                                        }, n)
                                    }))
                                }), (0, s.jsxs)("div", {
                                    className: " max-w-2xl pb-10 pt-16",
                                    children: [(0, s.jsx)("h3", {
                                        className: "font-proxima-nova-extra-condensed leading-none uppercase text-hellblade-orange text-3xl md:text-3xl font-bold pb-5",
                                        children: "FAQ"
                                    }), j.map((function(e, n) {
                                        return (0, s.jsxs)("div", {
                                            className: "pb-8",
                                            children: [(0, s.jsx)("p", {
                                                className: "font-bold",
                                                children: e.q
                                            }), (0, s.jsx)("p", {
                                                children: e.a
                                            })]
                                        }, n)
                                    }))]
                                })]
                            })]
                        }), " "]
                    })
                }
        },
        2743: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return l
                }
            });
            var a = t(5893);

            function l(e) {
                var n = e.size,
                    t = e.children.replace(/ /g, "&nbsp;"),
                    l = {
                        large: "text-5xl md:text-6xl 2xl:text-9xl 2xl:leading-snug 2xl:-mt-5 -mt-1 leading-snug",
                        regular: " leading-none text-lg md:text-xl 2xl:text-3xl"
                    },
                    r = void 0 !== l[n] ? l[n] : n;
                return (0, a.jsx)("div", {
                    className: " ".concat(r, " tracking-tight\t text-gradient block bg-gradient-to-b from-white to-gray-600 uppercase font-trajan font-light"),
                    dangerouslySetInnerHTML: {
                        __html: t
                    }
                })
            }
        }
    }
]);