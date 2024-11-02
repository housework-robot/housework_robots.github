! function (e) {
    "function" == typeof define && define.amd ? define(["crypto-js"], e) : e()
}((function () {
    "use strict";
    var e, t = (e = "undefined" == typeof document && "undefined" == typeof location ? new(require("url").URL)("file:" + __filename).href : "undefined" == typeof document ? location.href : document.currentScript && document.currentScript.src || new URL("EasyPlayer-lib.js", document.baseURI).href, async function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            var r, i, s;
            (s = t).ready = new Promise(((e, t) => {
                r = e, i = t
            })), (s = void 0 !== s ? s : {}).locateFile = function (e) {
                return "EasyPlayer-pro.wasm" == e && "undefined" != typeof EASY_PRO_WASM_URL && "" != EASY_PRO_WASM_URL ? EASY_PRO_WASM_URL : e
            };
            var n, a, o, d = Object.assign({}, s),
                l = "./this.program",
                u = "object" == typeof window,
                c = "function" == typeof importScripts,
                h = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node,
                f = "";
            if (h) {
                const {
                    createRequire: e
                } = await import("module");
                var p = e("undefined" == typeof document && "undefined" == typeof location ? new(require("url").URL)("file:" + __filename).href : "undefined" == typeof document ? location.href : document.currentScript && document.currentScript.src || new URL("EasyPlayer-lib.js", document.baseURI).href),
                    m = p("fs"),
                    _ = p("path");
                f = c ? _.dirname(f) + "/" : p("url").fileURLToPath(new URL("./", "undefined" == typeof document && "undefined" == typeof location ? new(require("url").URL)("file:" + __filename).href : "undefined" == typeof document ? location.href : document.currentScript && document.currentScript.src || new URL("EasyPlayer-lib.js", document.baseURI).href)), n = (e, t) => (e = H(e) ? new URL(e) : _.normalize(e), m.readFileSync(e, t ? void 0 : "utf8")), o = e => {
                    var t = n(e, !0);
                    return t.buffer || (t = new Uint8Array(t)), t
                }, a = function (e, t, r) {
                    let i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                    e = H(e) ? new URL(e) : _.normalize(e), m.readFile(e, i ? void 0 : "utf8", ((e, s) => {
                        e ? r(e) : t(i ? s.buffer : s)
                    }))
                }, !s.thisProgram && process.argv.length > 1 && (l = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2), s.inspect = () => "[Emscripten Module object]"
            } else(u || c) && (c ? f = self.location.href : "undefined" != typeof document && document.currentScript && (f = document.currentScript.src), e && (f = e), f = 0 !== f.indexOf("blob:") ? f.substr(0, f.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", n = e => {
                var t = new XMLHttpRequest;
                return t.open("GET", e, !1), t.send(null), t.responseText
            }, c && (o = e => {
                var t = new XMLHttpRequest;
                return t.open("GET", e, !1), t.responseType = "arraybuffer", t.send(null), new Uint8Array(t.response)
            }), a = (e, t, r) => {
                var i = new XMLHttpRequest;
                i.open("GET", e, !0), i.responseType = "arraybuffer", i.onload = () => {
                    200 == i.status || 0 == i.status && i.response ? t(i.response) : r()
                }, i.onerror = r, i.send(null)
            });
            var g, y, b = s.print || console.log.bind(console),
                v = s.printErr || console.error.bind(console);
            Object.assign(s, d), d = null, s.arguments && s.arguments, s.thisProgram && (l = s.thisProgram), s.quit && s.quit, s.wasmBinary && (g = s.wasmBinary), "object" != typeof WebAssembly && M("no native wasm support detected");
            var w, S, E, A, U, x, B, T, k = !1,
                C = [],
                D = [],
                P = [],
                I = 0,
                F = null;

            function L(e) {
                I++, s.monitorRunDependencies && s.monitorRunDependencies(I)
            }

            function R(e) {
                if (I--, s.monitorRunDependencies && s.monitorRunDependencies(I), 0 == I && F) {
                    var t = F;
                    F = null, t()
                }
            }

            function M(e) {
                s.onAbort && s.onAbort(e), v(e = "Aborted(" + e + ")"), k = !0, e += ". Build with -sASSERTIONS for more info.";
                var t = new WebAssembly.RuntimeError(e);
                throw i(t), t
            }
            var z, N, O, G, $ = e => e.startsWith("data:application/octet-stream;base64,"),
                H = e => e.startsWith("file://");

            function V(e) {
                if (e == z && g) return new Uint8Array(g);
                if (o) return o(e);
                throw "both async and sync fetching of the wasm failed"
            }

            function W(e, t, r) {
                return function (e) {
                    if (!g && (u || c)) {
                        if ("function" == typeof fetch && !H(e)) return fetch(e, {
                            credentials: "same-origin"
                        }).then((t => {
                            if (!t.ok) throw "failed to load wasm binary file at '" + e + "'";
                            return t.arrayBuffer()
                        })).catch((() => V(e)));
                        if (a) return new Promise(((t, r) => {
                            a(e, (e => t(new Uint8Array(e))), r)
                        }))
                    }
                    return Promise.resolve().then((() => V(e)))
                }(e).then((e => WebAssembly.instantiate(e, t))).then((e => e)).then(r, (e => {
                    v(`failed to asynchronously prepare wasm: ${e}`), M(e)
                }))
            }
            s.locateFile ? $(z = "EasyPlayer-pro.wasm") || (N = z, z = s.locateFile ? s.locateFile(N, f) : f + N) : z = new URL("EasyPlayer-pro.wasm", "undefined" == typeof document && "undefined" == typeof location ? new(require("url").URL)("file:" + __filename).href : "undefined" == typeof document ? location.href : document.currentScript && document.currentScript.src || new URL("EasyPlayer-lib.js", document.baseURI).href).href;
            var j = e => {
                for (; e.length > 0;) e.shift()(s)
            };

            function q(e) {
                this.excPtr = e, this.ptr = e - 24, this.set_type = function (e) {
                    x[this.ptr + 4 >> 2] = e
                }, this.get_type = function () {
                    return x[this.ptr + 4 >> 2]
                }, this.set_destructor = function (e) {
                    x[this.ptr + 8 >> 2] = e
                }, this.get_destructor = function () {
                    return x[this.ptr + 8 >> 2]
                }, this.set_caught = function (e) {
                    e = e ? 1 : 0, w[this.ptr + 12 >> 0] = e
                }, this.get_caught = function () {
                    return 0 != w[this.ptr + 12 >> 0]
                }, this.set_rethrown = function (e) {
                    e = e ? 1 : 0, w[this.ptr + 13 >> 0] = e
                }, this.get_rethrown = function () {
                    return 0 != w[this.ptr + 13 >> 0]
                }, this.init = function (e, t) {
                    this.set_adjusted_ptr(0), this.set_type(e), this.set_destructor(t)
                }, this.set_adjusted_ptr = function (e) {
                    x[this.ptr + 16 >> 2] = e
                }, this.get_adjusted_ptr = function () {
                    return x[this.ptr + 16 >> 2]
                }, this.get_exception_ptr = function () {
                    if (Wt(this.get_type())) return x[this.excPtr >> 2];
                    var e = this.get_adjusted_ptr();
                    return 0 !== e ? e : this.excPtr
                }
            }
            s.noExitRuntime;
            var Y = {
                    isAbs: e => "/" === e.charAt(0),
                    splitPath: e => /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1),
                    normalizeArray: (e, t) => {
                        for (var r = 0, i = e.length - 1; i >= 0; i--) {
                            var s = e[i];
                            "." === s ? e.splice(i, 1) : ".." === s ? (e.splice(i, 1), r++) : r && (e.splice(i, 1), r--)
                        }
                        if (t)
                            for (; r; r--) e.unshift("..");
                        return e
                    },
                    normalize: e => {
                        var t = Y.isAbs(e),
                            r = "/" === e.substr(-1);
                        return (e = Y.normalizeArray(e.split("/").filter((e => !!e)), !t).join("/")) || t || (e = "."), e && r && (e += "/"), (t ? "/" : "") + e
                    },
                    dirname: e => {
                        var t = Y.splitPath(e),
                            r = t[0],
                            i = t[1];
                        return r || i ? (i && (i = i.substr(0, i.length - 1)), r + i) : "."
                    },
                    basename: e => {
                        if ("/" === e) return "/";
                        var t = (e = (e = Y.normalize(e)).replace(/\/$/, "")).lastIndexOf("/");
                        return -1 === t ? e : e.substr(t + 1)
                    },
                    join: function () {
                        var e = Array.prototype.slice.call(arguments);
                        return Y.normalize(e.join("/"))
                    },
                    join2: (e, t) => Y.normalize(e + "/" + t)
                },
                K = e => (K = (() => {
                    if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) return e => crypto.getRandomValues(e);
                    if (h) try {
                        var e = p("crypto");
                        if (e.randomFillSync) return t => e.randomFillSync(t);
                        var t = e.randomBytes;
                        return e => (e.set(t(e.byteLength)), e)
                    } catch (e) {}
                    M("initRandomDevice")
                })())(e),
                X = {
                    resolve: function () {
                        for (var e = "", t = !1, r = arguments.length - 1; r >= -1 && !t; r--) {
                            var i = r >= 0 ? arguments[r] : he.cwd();
                            if ("string" != typeof i) throw new TypeError("Arguments to path.resolve must be strings");
                            if (!i) return "";
                            e = i + "/" + e, t = Y.isAbs(i)
                        }
                        return (t ? "/" : "") + (e = Y.normalizeArray(e.split("/").filter((e => !!e)), !t).join("/")) || "."
                    },
                    relative: (e, t) => {
                        function r(e) {
                            for (var t = 0; t < e.length && "" === e[t]; t++);
                            for (var r = e.length - 1; r >= 0 && "" === e[r]; r--);
                            return t > r ? [] : e.slice(t, r - t + 1)
                        }
                        e = X.resolve(e).substr(1), t = X.resolve(t).substr(1);
                        for (var i = r(e.split("/")), s = r(t.split("/")), n = Math.min(i.length, s.length), a = n, o = 0; o < n; o++)
                            if (i[o] !== s[o]) {
                                a = o;
                                break
                            } var d = [];
                        for (o = a; o < i.length; o++) d.push("..");
                        return (d = d.concat(s.slice(a))).join("/")
                    }
                },
                Z = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0,
                J = (e, t, r) => {
                    for (var i = t + r, s = t; e[s] && !(s >= i);) ++s;
                    if (s - t > 16 && e.buffer && Z) return Z.decode(e.subarray(t, s));
                    for (var n = ""; t < s;) {
                        var a = e[t++];
                        if (128 & a) {
                            var o = 63 & e[t++];
                            if (192 != (224 & a)) {
                                var d = 63 & e[t++];
                                if ((a = 224 == (240 & a) ? (15 & a) << 12 | o << 6 | d : (7 & a) << 18 | o << 12 | d << 6 | 63 & e[t++]) < 65536) n += String.fromCharCode(a);
                                else {
                                    var l = a - 65536;
                                    n += String.fromCharCode(55296 | l >> 10, 56320 | 1023 & l)
                                }
                            } else n += String.fromCharCode((31 & a) << 6 | o)
                        } else n += String.fromCharCode(a)
                    }
                    return n
                },
                Q = [],
                ee = e => {
                    for (var t = 0, r = 0; r < e.length; ++r) {
                        var i = e.charCodeAt(r);
                        i <= 127 ? t++ : i <= 2047 ? t += 2 : i >= 55296 && i <= 57343 ? (t += 4, ++r) : t += 3
                    }
                    return t
                },
                te = (e, t, r, i) => {
                    if (!(i > 0)) return 0;
                    for (var s = r, n = r + i - 1, a = 0; a < e.length; ++a) {
                        var o = e.charCodeAt(a);
                        if (o >= 55296 && o <= 57343 && (o = 65536 + ((1023 & o) << 10) | 1023 & e.charCodeAt(++a)), o <= 127) {
                            if (r >= n) break;
                            t[r++] = o
                        } else if (o <= 2047) {
                            if (r + 1 >= n) break;
                            t[r++] = 192 | o >> 6, t[r++] = 128 | 63 & o
                        } else if (o <= 65535) {
                            if (r + 2 >= n) break;
                            t[r++] = 224 | o >> 12, t[r++] = 128 | o >> 6 & 63, t[r++] = 128 | 63 & o
                        } else {
                            if (r + 3 >= n) break;
                            t[r++] = 240 | o >> 18, t[r++] = 128 | o >> 12 & 63, t[r++] = 128 | o >> 6 & 63, t[r++] = 128 | 63 & o
                        }
                    }
                    return t[r] = 0, r - s
                };

            function re(e, t, r) {
                var i = r > 0 ? r : ee(e) + 1,
                    s = new Array(i),
                    n = te(e, s, 0, s.length);
                return t && (s.length = n), s
            }
            var ie, se, ne, ae = {
                    ttys: [],
                    init() {},
                    shutdown() {},
                    register(e, t) {
                        ae.ttys[e] = {
                            input: [],
                            output: [],
                            ops: t
                        }, he.registerDevice(e, ae.stream_ops)
                    },
                    stream_ops: {
                        open(e) {
                            var t = ae.ttys[e.node.rdev];
                            if (!t) throw new he.ErrnoError(43);
                            e.tty = t, e.seekable = !1
                        },
                        close(e) {
                            e.tty.ops.fsync(e.tty)
                        },
                        fsync(e) {
                            e.tty.ops.fsync(e.tty)
                        },
                        read(e, t, r, i, s) {
                            if (!e.tty || !e.tty.ops.get_char) throw new he.ErrnoError(60);
                            for (var n = 0, a = 0; a < i; a++) {
                                var o;
                                try {
                                    o = e.tty.ops.get_char(e.tty)
                                } catch (e) {
                                    throw new he.ErrnoError(29)
                                }
                                if (void 0 === o && 0 === n) throw new he.ErrnoError(6);
                                if (null == o) break;
                                n++, t[r + a] = o
                            }
                            return n && (e.node.timestamp = Date.now()), n
                        },
                        write(e, t, r, i, s) {
                            if (!e.tty || !e.tty.ops.put_char) throw new he.ErrnoError(60);
                            try {
                                for (var n = 0; n < i; n++) e.tty.ops.put_char(e.tty, t[r + n])
                            } catch (e) {
                                throw new he.ErrnoError(29)
                            }
                            return i && (e.node.timestamp = Date.now()), n
                        }
                    },
                    default_tty_ops: {
                        get_char: e => (() => {
                            if (!Q.length) {
                                var e = null;
                                if (h) {
                                    var t = Buffer.alloc(256),
                                        r = 0,
                                        i = process.stdin.fd;
                                    try {
                                        r = m.readSync(i, t)
                                    } catch (e) {
                                        if (!e.toString().includes("EOF")) throw e;
                                        r = 0
                                    }
                                    e = r > 0 ? t.slice(0, r).toString("utf-8") : null
                                } else "undefined" != typeof window && "function" == typeof window.prompt ? null !== (e = window.prompt("Input: ")) && (e += "\n") : "function" == typeof readline && null !== (e = readline()) && (e += "\n");
                                if (!e) return null;
                                Q = re(e, !0)
                            }
                            return Q.shift()
                        })(),
                        put_char(e, t) {
                            null === t || 10 === t ? (b(J(e.output, 0)), e.output = []) : 0 != t && e.output.push(t)
                        },
                        fsync(e) {
                            e.output && e.output.length > 0 && (b(J(e.output, 0)), e.output = [])
                        },
                        ioctl_tcgets: e => ({
                            c_iflag: 25856,
                            c_oflag: 5,
                            c_cflag: 191,
                            c_lflag: 35387,
                            c_cc: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        }),
                        ioctl_tcsets: (e, t, r) => 0,
                        ioctl_tiocgwinsz: e => [24, 80]
                    },
                    default_tty1_ops: {
                        put_char(e, t) {
                            null === t || 10 === t ? (v(J(e.output, 0)), e.output = []) : 0 != t && e.output.push(t)
                        },
                        fsync(e) {
                            e.output && e.output.length > 0 && (v(J(e.output, 0)), e.output = [])
                        }
                    }
                },
                oe = e => {
                    M()
                },
                de = {
                    ops_table: null,
                    mount: e => de.createNode(null, "/", 16895, 0),
                    createNode(e, t, r, i) {
                        if (he.isBlkdev(r) || he.isFIFO(r)) throw new he.ErrnoError(63);
                        de.ops_table || (de.ops_table = {
                            dir: {
                                node: {
                                    getattr: de.node_ops.getattr,
                                    setattr: de.node_ops.setattr,
                                    lookup: de.node_ops.lookup,
                                    mknod: de.node_ops.mknod,
                                    rename: de.node_ops.rename,
                                    unlink: de.node_ops.unlink,
                                    rmdir: de.node_ops.rmdir,
                                    readdir: de.node_ops.readdir,
                                    symlink: de.node_ops.symlink
                                },
                                stream: {
                                    llseek: de.stream_ops.llseek
                                }
                            },
                            file: {
                                node: {
                                    getattr: de.node_ops.getattr,
                                    setattr: de.node_ops.setattr
                                },
                                stream: {
                                    llseek: de.stream_ops.llseek,
                                    read: de.stream_ops.read,
                                    write: de.stream_ops.write,
                                    allocate: de.stream_ops.allocate,
                                    mmap: de.stream_ops.mmap,
                                    msync: de.stream_ops.msync
                                }
                            },
                            link: {
                                node: {
                                    getattr: de.node_ops.getattr,
                                    setattr: de.node_ops.setattr,
                                    readlink: de.node_ops.readlink
                                },
                                stream: {}
                            },
                            chrdev: {
                                node: {
                                    getattr: de.node_ops.getattr,
                                    setattr: de.node_ops.setattr
                                },
                                stream: he.chrdev_stream_ops
                            }
                        });
                        var s = he.createNode(e, t, r, i);
                        return he.isDir(s.mode) ? (s.node_ops = de.ops_table.dir.node, s.stream_ops = de.ops_table.dir.stream, s.contents = {}) : he.isFile(s.mode) ? (s.node_ops = de.ops_table.file.node, s.stream_ops = de.ops_table.file.stream, s.usedBytes = 0, s.contents = null) : he.isLink(s.mode) ? (s.node_ops = de.ops_table.link.node, s.stream_ops = de.ops_table.link.stream) : he.isChrdev(s.mode) && (s.node_ops = de.ops_table.chrdev.node, s.stream_ops = de.ops_table.chrdev.stream), s.timestamp = Date.now(), e && (e.contents[t] = s, e.timestamp = s.timestamp), s
                    },
                    getFileDataAsTypedArray: e => e.contents ? e.contents.subarray ? e.contents.subarray(0, e.usedBytes) : new Uint8Array(e.contents) : new Uint8Array(0),
                    expandFileStorage(e, t) {
                        var r = e.contents ? e.contents.length : 0;
                        if (!(r >= t)) {
                            t = Math.max(t, r * (r < 1048576 ? 2 : 1.125) >>> 0), 0 != r && (t = Math.max(t, 256));
                            var i = e.contents;
                            e.contents = new Uint8Array(t), e.usedBytes > 0 && e.contents.set(i.subarray(0, e.usedBytes), 0)
                        }
                    },
                    resizeFileStorage(e, t) {
                        if (e.usedBytes != t)
                            if (0 == t) e.contents = null, e.usedBytes = 0;
                            else {
                                var r = e.contents;
                                e.contents = new Uint8Array(t), r && e.contents.set(r.subarray(0, Math.min(t, e.usedBytes))), e.usedBytes = t
                            }
                    },
                    node_ops: {
                        getattr(e) {
                            var t = {};
                            return t.dev = he.isChrdev(e.mode) ? e.id : 1, t.ino = e.id, t.mode = e.mode, t.nlink = 1, t.uid = 0, t.gid = 0, t.rdev = e.rdev, he.isDir(e.mode) ? t.size = 4096 : he.isFile(e.mode) ? t.size = e.usedBytes : he.isLink(e.mode) ? t.size = e.link.length : t.size = 0, t.atime = new Date(e.timestamp), t.mtime = new Date(e.timestamp), t.ctime = new Date(e.timestamp), t.blksize = 4096, t.blocks = Math.ceil(t.size / t.blksize), t
                        },
                        setattr(e, t) {
                            void 0 !== t.mode && (e.mode = t.mode), void 0 !== t.timestamp && (e.timestamp = t.timestamp), void 0 !== t.size && de.resizeFileStorage(e, t.size)
                        },
                        lookup(e, t) {
                            throw he.genericErrors[44]
                        },
                        mknod: (e, t, r, i) => de.createNode(e, t, r, i),
                        rename(e, t, r) {
                            if (he.isDir(e.mode)) {
                                var i;
                                try {
                                    i = he.lookupNode(t, r)
                                } catch (e) {}
                                if (i)
                                    for (var s in i.contents) throw new he.ErrnoError(55)
                            }
                            delete e.parent.contents[e.name], e.parent.timestamp = Date.now(), e.name = r, t.contents[r] = e, t.timestamp = e.parent.timestamp, e.parent = t
                        },
                        unlink(e, t) {
                            delete e.contents[t], e.timestamp = Date.now()
                        },
                        rmdir(e, t) {
                            var r = he.lookupNode(e, t);
                            for (var i in r.contents) throw new he.ErrnoError(55);
                            delete e.contents[t], e.timestamp = Date.now()
                        },
                        readdir(e) {
                            var t = [".", ".."];
                            for (var r in e.contents) e.contents.hasOwnProperty(r) && t.push(r);
                            return t
                        },
                        symlink(e, t, r) {
                            var i = de.createNode(e, t, 41471, 0);
                            return i.link = r, i
                        },
                        readlink(e) {
                            if (!he.isLink(e.mode)) throw new he.ErrnoError(28);
                            return e.link
                        }
                    },
                    stream_ops: {
                        read(e, t, r, i, s) {
                            var n = e.node.contents;
                            if (s >= e.node.usedBytes) return 0;
                            var a = Math.min(e.node.usedBytes - s, i);
                            if (a > 8 && n.subarray) t.set(n.subarray(s, s + a), r);
                            else
                                for (var o = 0; o < a; o++) t[r + o] = n[s + o];
                            return a
                        },
                        write(e, t, r, i, s, n) {
                            if (!i) return 0;
                            var a = e.node;
                            if (a.timestamp = Date.now(), t.subarray && (!a.contents || a.contents.subarray)) {
                                if (n) return a.contents = t.subarray(r, r + i), a.usedBytes = i, i;
                                if (0 === a.usedBytes && 0 === s) return a.contents = t.slice(r, r + i), a.usedBytes = i, i;
                                if (s + i <= a.usedBytes) return a.contents.set(t.subarray(r, r + i), s), i
                            }
                            if (de.expandFileStorage(a, s + i), a.contents.subarray && t.subarray) a.contents.set(t.subarray(r, r + i), s);
                            else
                                for (var o = 0; o < i; o++) a.contents[s + o] = t[r + o];
                            return a.usedBytes = Math.max(a.usedBytes, s + i), i
                        },
                        llseek(e, t, r) {
                            var i = t;
                            if (1 === r ? i += e.position : 2 === r && he.isFile(e.node.mode) && (i += e.node.usedBytes), i < 0) throw new he.ErrnoError(28);
                            return i
                        },
                        allocate(e, t, r) {
                            de.expandFileStorage(e.node, t + r), e.node.usedBytes = Math.max(e.node.usedBytes, t + r)
                        },
                        mmap(e, t, r, i, s) {
                            if (!he.isFile(e.node.mode)) throw new he.ErrnoError(43);
                            var n, a, o = e.node.contents;
                            if (2 & s || o.buffer !== w.buffer) {
                                if ((r > 0 || r + t < o.length) && (o = o.subarray ? o.subarray(r, r + t) : Array.prototype.slice.call(o, r, r + t)), a = !0, !(n = oe())) throw new he.ErrnoError(48);
                                w.set(o, n)
                            } else a = !1, n = o.byteOffset;
                            return {
                                ptr: n,
                                allocated: a
                            }
                        },
                        msync: (e, t, r, i, s) => (de.stream_ops.write(e, t, 0, i, r, !1), 0)
                    }
                },
                le = (e, t, r, i) => {
                    var s = i ? "" : `al ${e}`;
                    a(e, (r => {
                        var i;
                        i = `Loading data file "${e}" failed (no arrayBuffer).`, r || M(i), t(new Uint8Array(r)), s && R()
                    }), (t => {
                        if (!r) throw `Loading data file "${e}" failed.`;
                        r()
                    })), s && L()
                },
                ue = s.preloadPlugins || [],
                ce = (e, t) => {
                    var r = 0;
                    return e && (r |= 365), t && (r |= 146), r
                },
                he = {
                    root: null,
                    mounts: [],
                    devices: {},
                    streams: [],
                    nextInode: 1,
                    nameTable: null,
                    currentPath: "/",
                    initialized: !1,
                    ignorePermissions: !0,
                    ErrnoError: null,
                    genericErrors: {},
                    filesystems: null,
                    syncFSRequests: 0,
                    lookupPath(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (!(e = X.resolve(e))) return {
                            path: "",
                            node: null
                        };
                        if (t = Object.assign({
                                follow_mount: !0,
                                recurse_count: 0
                            }, t), t.recurse_count > 8) throw new he.ErrnoError(32);
                        for (var r = e.split("/").filter((e => !!e)), i = he.root, s = "/", n = 0; n < r.length; n++) {
                            var a = n === r.length - 1;
                            if (a && t.parent) break;
                            if (i = he.lookupNode(i, r[n]), s = Y.join2(s, r[n]), he.isMountpoint(i) && (!a || a && t.follow_mount) && (i = i.mounted.root), !a || t.follow)
                                for (var o = 0; he.isLink(i.mode);) {
                                    var d = he.readlink(s);
                                    if (s = X.resolve(Y.dirname(s), d), i = he.lookupPath(s, {
                                            recurse_count: t.recurse_count + 1
                                        }).node, o++ > 40) throw new he.ErrnoError(32)
                                }
                        }
                        return {
                            path: s,
                            node: i
                        }
                    },
                    getPath(e) {
                        for (var t;;) {
                            if (he.isRoot(e)) {
                                var r = e.mount.mountpoint;
                                return t ? "/" !== r[r.length - 1] ? `${r}/${t}` : r + t : r
                            }
                            t = t ? `${e.name}/${t}` : e.name, e = e.parent
                        }
                    },
                    hashName(e, t) {
                        for (var r = 0, i = 0; i < t.length; i++) r = (r << 5) - r + t.charCodeAt(i) | 0;
                        return (e + r >>> 0) % he.nameTable.length
                    },
                    hashAddNode(e) {
                        var t = he.hashName(e.parent.id, e.name);
                        e.name_next = he.nameTable[t], he.nameTable[t] = e
                    },
                    hashRemoveNode(e) {
                        var t = he.hashName(e.parent.id, e.name);
                        if (he.nameTable[t] === e) he.nameTable[t] = e.name_next;
                        else
                            for (var r = he.nameTable[t]; r;) {
                                if (r.name_next === e) {
                                    r.name_next = e.name_next;
                                    break
                                }
                                r = r.name_next
                            }
                    },
                    lookupNode(e, t) {
                        var r = he.mayLookup(e);
                        if (r) throw new he.ErrnoError(r, e);
                        for (var i = he.hashName(e.id, t), s = he.nameTable[i]; s; s = s.name_next) {
                            var n = s.name;
                            if (s.parent.id === e.id && n === t) return s
                        }
                        return he.lookup(e, t)
                    },
                    createNode(e, t, r, i) {
                        var s = new he.FSNode(e, t, r, i);
                        return he.hashAddNode(s), s
                    },
                    destroyNode(e) {
                        he.hashRemoveNode(e)
                    },
                    isRoot: e => e === e.parent,
                    isMountpoint: e => !!e.mounted,
                    isFile: e => 32768 == (61440 & e),
                    isDir: e => 16384 == (61440 & e),
                    isLink: e => 40960 == (61440 & e),
                    isChrdev: e => 8192 == (61440 & e),
                    isBlkdev: e => 24576 == (61440 & e),
                    isFIFO: e => 4096 == (61440 & e),
                    isSocket: e => 49152 == (49152 & e),
                    flagsToPermissionString(e) {
                        var t = ["r", "w", "rw"][3 & e];
                        return 512 & e && (t += "w"), t
                    },
                    nodePermissions: (e, t) => he.ignorePermissions || (!t.includes("r") || 292 & e.mode) && (!t.includes("w") || 146 & e.mode) && (!t.includes("x") || 73 & e.mode) ? 0 : 2,
                    mayLookup(e) {
                        var t = he.nodePermissions(e, "x");
                        return t || (e.node_ops.lookup ? 0 : 2)
                    },
                    mayCreate(e, t) {
                        try {
                            return he.lookupNode(e, t), 20
                        } catch (e) {}
                        return he.nodePermissions(e, "wx")
                    },
                    mayDelete(e, t, r) {
                        var i;
                        try {
                            i = he.lookupNode(e, t)
                        } catch (e) {
                            return e.errno
                        }
                        var s = he.nodePermissions(e, "wx");
                        if (s) return s;
                        if (r) {
                            if (!he.isDir(i.mode)) return 54;
                            if (he.isRoot(i) || he.getPath(i) === he.cwd()) return 10
                        } else if (he.isDir(i.mode)) return 31;
                        return 0
                    },
                    mayOpen: (e, t) => e ? he.isLink(e.mode) ? 32 : he.isDir(e.mode) && ("r" !== he.flagsToPermissionString(t) || 512 & t) ? 31 : he.nodePermissions(e, he.flagsToPermissionString(t)) : 44,
                    MAX_OPEN_FDS: 4096,
                    nextfd() {
                        for (var e = 0; e <= he.MAX_OPEN_FDS; e++)
                            if (!he.streams[e]) return e;
                        throw new he.ErrnoError(33)
                    },
                    getStreamChecked(e) {
                        var t = he.getStream(e);
                        if (!t) throw new he.ErrnoError(8);
                        return t
                    },
                    getStream: e => he.streams[e],
                    createStream(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                        return he.FSStream || (he.FSStream = function () {
                            this.shared = {}
                        }, he.FSStream.prototype = {}, Object.defineProperties(he.FSStream.prototype, {
                            object: {
                                get() {
                                    return this.node
                                },
                                set(e) {
                                    this.node = e
                                }
                            },
                            isRead: {
                                get() {
                                    return 1 != (2097155 & this.flags)
                                }
                            },
                            isWrite: {
                                get() {
                                    return 0 != (2097155 & this.flags)
                                }
                            },
                            isAppend: {
                                get() {
                                    return 1024 & this.flags
                                }
                            },
                            flags: {
                                get() {
                                    return this.shared.flags
                                },
                                set(e) {
                                    this.shared.flags = e
                                }
                            },
                            position: {
                                get() {
                                    return this.shared.position
                                },
                                set(e) {
                                    this.shared.position = e
                                }
                            }
                        })), e = Object.assign(new he.FSStream, e), -1 == t && (t = he.nextfd()), e.fd = t, he.streams[t] = e, e
                    },
                    closeStream(e) {
                        he.streams[e] = null
                    },
                    chrdev_stream_ops: {
                        open(e) {
                            var t = he.getDevice(e.node.rdev);
                            e.stream_ops = t.stream_ops, e.stream_ops.open && e.stream_ops.open(e)
                        },
                        llseek() {
                            throw new he.ErrnoError(70)
                        }
                    },
                    major: e => e >> 8,
                    minor: e => 255 & e,
                    makedev: (e, t) => e << 8 | t,
                    registerDevice(e, t) {
                        he.devices[e] = {
                            stream_ops: t
                        }
                    },
                    getDevice: e => he.devices[e],
                    getMounts(e) {
                        for (var t = [], r = [e]; r.length;) {
                            var i = r.pop();
                            t.push(i), r.push.apply(r, i.mounts)
                        }
                        return t
                    },
                    syncfs(e, t) {
                        "function" == typeof e && (t = e, e = !1), he.syncFSRequests++, he.syncFSRequests > 1 && v(`warning: ${he.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
                        var r = he.getMounts(he.root.mount),
                            i = 0;

                        function s(e) {
                            return he.syncFSRequests--, t(e)
                        }

                        function n(e) {
                            if (e) return n.errored ? void 0 : (n.errored = !0, s(e));
                            ++i >= r.length && s(null)
                        }
                        r.forEach((t => {
                            if (!t.type.syncfs) return n(null);
                            t.type.syncfs(t, e, n)
                        }))
                    },
                    mount(e, t, r) {
                        var i, s = "/" === r,
                            n = !r;
                        if (s && he.root) throw new he.ErrnoError(10);
                        if (!s && !n) {
                            var a = he.lookupPath(r, {
                                follow_mount: !1
                            });
                            if (r = a.path, i = a.node, he.isMountpoint(i)) throw new he.ErrnoError(10);
                            if (!he.isDir(i.mode)) throw new he.ErrnoError(54)
                        }
                        var o = {
                                type: e,
                                opts: t,
                                mountpoint: r,
                                mounts: []
                            },
                            d = e.mount(o);
                        return d.mount = o, o.root = d, s ? he.root = d : i && (i.mounted = o, i.mount && i.mount.mounts.push(o)), d
                    },
                    unmount(e) {
                        var t = he.lookupPath(e, {
                            follow_mount: !1
                        });
                        if (!he.isMountpoint(t.node)) throw new he.ErrnoError(28);
                        var r = t.node,
                            i = r.mounted,
                            s = he.getMounts(i);
                        Object.keys(he.nameTable).forEach((e => {
                            for (var t = he.nameTable[e]; t;) {
                                var r = t.name_next;
                                s.includes(t.mount) && he.destroyNode(t), t = r
                            }
                        })), r.mounted = null;
                        var n = r.mount.mounts.indexOf(i);
                        r.mount.mounts.splice(n, 1)
                    },
                    lookup: (e, t) => e.node_ops.lookup(e, t),
                    mknod(e, t, r) {
                        var i = he.lookupPath(e, {
                                parent: !0
                            }).node,
                            s = Y.basename(e);
                        if (!s || "." === s || ".." === s) throw new he.ErrnoError(28);
                        var n = he.mayCreate(i, s);
                        if (n) throw new he.ErrnoError(n);
                        if (!i.node_ops.mknod) throw new he.ErrnoError(63);
                        return i.node_ops.mknod(i, s, t, r)
                    },
                    create: (e, t) => (t = void 0 !== t ? t : 438, t &= 4095, t |= 32768, he.mknod(e, t, 0)),
                    mkdir: (e, t) => (t = void 0 !== t ? t : 511, t &= 1023, t |= 16384, he.mknod(e, t, 0)),
                    mkdirTree(e, t) {
                        for (var r = e.split("/"), i = "", s = 0; s < r.length; ++s)
                            if (r[s]) {
                                i += "/" + r[s];
                                try {
                                    he.mkdir(i, t)
                                } catch (e) {
                                    if (20 != e.errno) throw e
                                }
                            }
                    },
                    mkdev: (e, t, r) => (void 0 === r && (r = t, t = 438), t |= 8192, he.mknod(e, t, r)),
                    symlink(e, t) {
                        if (!X.resolve(e)) throw new he.ErrnoError(44);
                        var r = he.lookupPath(t, {
                            parent: !0
                        }).node;
                        if (!r) throw new he.ErrnoError(44);
                        var i = Y.basename(t),
                            s = he.mayCreate(r, i);
                        if (s) throw new he.ErrnoError(s);
                        if (!r.node_ops.symlink) throw new he.ErrnoError(63);
                        return r.node_ops.symlink(r, i, e)
                    },
                    rename(e, t) {
                        var r, i, s = Y.dirname(e),
                            n = Y.dirname(t),
                            a = Y.basename(e),
                            o = Y.basename(t);
                        if (r = he.lookupPath(e, {
                                parent: !0
                            }).node, i = he.lookupPath(t, {
                                parent: !0
                            }).node, !r || !i) throw new he.ErrnoError(44);
                        if (r.mount !== i.mount) throw new he.ErrnoError(75);
                        var d, l = he.lookupNode(r, a),
                            u = X.relative(e, n);
                        if ("." !== u.charAt(0)) throw new he.ErrnoError(28);
                        if ("." !== (u = X.relative(t, s)).charAt(0)) throw new he.ErrnoError(55);
                        try {
                            d = he.lookupNode(i, o)
                        } catch (e) {}
                        if (l !== d) {
                            var c = he.isDir(l.mode),
                                h = he.mayDelete(r, a, c);
                            if (h) throw new he.ErrnoError(h);
                            if (h = d ? he.mayDelete(i, o, c) : he.mayCreate(i, o)) throw new he.ErrnoError(h);
                            if (!r.node_ops.rename) throw new he.ErrnoError(63);
                            if (he.isMountpoint(l) || d && he.isMountpoint(d)) throw new he.ErrnoError(10);
                            if (i !== r && (h = he.nodePermissions(r, "w"))) throw new he.ErrnoError(h);
                            he.hashRemoveNode(l);
                            try {
                                r.node_ops.rename(l, i, o)
                            } catch (e) {
                                throw e
                            } finally {
                                he.hashAddNode(l)
                            }
                        }
                    },
                    rmdir(e) {
                        var t = he.lookupPath(e, {
                                parent: !0
                            }).node,
                            r = Y.basename(e),
                            i = he.lookupNode(t, r),
                            s = he.mayDelete(t, r, !0);
                        if (s) throw new he.ErrnoError(s);
                        if (!t.node_ops.rmdir) throw new he.ErrnoError(63);
                        if (he.isMountpoint(i)) throw new he.ErrnoError(10);
                        t.node_ops.rmdir(t, r), he.destroyNode(i)
                    },
                    readdir(e) {
                        var t = he.lookupPath(e, {
                            follow: !0
                        }).node;
                        if (!t.node_ops.readdir) throw new he.ErrnoError(54);
                        return t.node_ops.readdir(t)
                    },
                    unlink(e) {
                        var t = he.lookupPath(e, {
                            parent: !0
                        }).node;
                        if (!t) throw new he.ErrnoError(44);
                        var r = Y.basename(e),
                            i = he.lookupNode(t, r),
                            s = he.mayDelete(t, r, !1);
                        if (s) throw new he.ErrnoError(s);
                        if (!t.node_ops.unlink) throw new he.ErrnoError(63);
                        if (he.isMountpoint(i)) throw new he.ErrnoError(10);
                        t.node_ops.unlink(t, r), he.destroyNode(i)
                    },
                    readlink(e) {
                        var t = he.lookupPath(e).node;
                        if (!t) throw new he.ErrnoError(44);
                        if (!t.node_ops.readlink) throw new he.ErrnoError(28);
                        return X.resolve(he.getPath(t.parent), t.node_ops.readlink(t))
                    },
                    stat(e, t) {
                        var r = he.lookupPath(e, {
                            follow: !t
                        }).node;
                        if (!r) throw new he.ErrnoError(44);
                        if (!r.node_ops.getattr) throw new he.ErrnoError(63);
                        return r.node_ops.getattr(r)
                    },
                    lstat: e => he.stat(e, !0),
                    chmod(e, t, r) {
                        var i;
                        if (!(i = "string" == typeof e ? he.lookupPath(e, {
                                follow: !r
                            }).node : e).node_ops.setattr) throw new he.ErrnoError(63);
                        i.node_ops.setattr(i, {
                            mode: 4095 & t | -4096 & i.mode,
                            timestamp: Date.now()
                        })
                    },
                    lchmod(e, t) {
                        he.chmod(e, t, !0)
                    },
                    fchmod(e, t) {
                        var r = he.getStreamChecked(e);
                        he.chmod(r.node, t)
                    },
                    chown(e, t, r, i) {
                        var s;
                        if (!(s = "string" == typeof e ? he.lookupPath(e, {
                                follow: !i
                            }).node : e).node_ops.setattr) throw new he.ErrnoError(63);
                        s.node_ops.setattr(s, {
                            timestamp: Date.now()
                        })
                    },
                    lchown(e, t, r) {
                        he.chown(e, t, r, !0)
                    },
                    fchown(e, t, r) {
                        var i = he.getStreamChecked(e);
                        he.chown(i.node, t, r)
                    },
                    truncate(e, t) {
                        if (t < 0) throw new he.ErrnoError(28);
                        var r;
                        if (!(r = "string" == typeof e ? he.lookupPath(e, {
                                follow: !0
                            }).node : e).node_ops.setattr) throw new he.ErrnoError(63);
                        if (he.isDir(r.mode)) throw new he.ErrnoError(31);
                        if (!he.isFile(r.mode)) throw new he.ErrnoError(28);
                        var i = he.nodePermissions(r, "w");
                        if (i) throw new he.ErrnoError(i);
                        r.node_ops.setattr(r, {
                            size: t,
                            timestamp: Date.now()
                        })
                    },
                    ftruncate(e, t) {
                        var r = he.getStreamChecked(e);
                        if (0 == (2097155 & r.flags)) throw new he.ErrnoError(28);
                        he.truncate(r.node, t)
                    },
                    utime(e, t, r) {
                        var i = he.lookupPath(e, {
                            follow: !0
                        }).node;
                        i.node_ops.setattr(i, {
                            timestamp: Math.max(t, r)
                        })
                    },
                    open(e, t, r) {
                        if ("" === e) throw new he.ErrnoError(44);
                        var i;
                        if (r = void 0 === r ? 438 : r, r = 64 & (t = "string" == typeof t ? (e => {
                                var t = {
                                    r: 0,
                                    "r+": 2,
                                    w: 577,
                                    "w+": 578,
                                    a: 1089,
                                    "a+": 1090
                                } [e];
                                if (void 0 === t) throw new Error(`Unknown file open mode: ${e}`);
                                return t
                            })(t) : t) ? 4095 & r | 32768 : 0, "object" == typeof e) i = e;
                        else {
                            e = Y.normalize(e);
                            try {
                                i = he.lookupPath(e, {
                                    follow: !(131072 & t)
                                }).node
                            } catch (e) {}
                        }
                        var n = !1;
                        if (64 & t)
                            if (i) {
                                if (128 & t) throw new he.ErrnoError(20)
                            } else i = he.mknod(e, r, 0), n = !0;
                        if (!i) throw new he.ErrnoError(44);
                        if (he.isChrdev(i.mode) && (t &= -513), 65536 & t && !he.isDir(i.mode)) throw new he.ErrnoError(54);
                        if (!n) {
                            var a = he.mayOpen(i, t);
                            if (a) throw new he.ErrnoError(a)
                        }
                        512 & t && !n && he.truncate(i, 0), t &= -131713;
                        var o = he.createStream({
                            node: i,
                            path: he.getPath(i),
                            flags: t,
                            seekable: !0,
                            position: 0,
                            stream_ops: i.stream_ops,
                            ungotten: [],
                            error: !1
                        });
                        return o.stream_ops.open && o.stream_ops.open(o), !s.logReadFiles || 1 & t || (he.readFiles || (he.readFiles = {}), e in he.readFiles || (he.readFiles[e] = 1)), o
                    },
                    close(e) {
                        if (he.isClosed(e)) throw new he.ErrnoError(8);
                        e.getdents && (e.getdents = null);
                        try {
                            e.stream_ops.close && e.stream_ops.close(e)
                        } catch (e) {
                            throw e
                        } finally {
                            he.closeStream(e.fd)
                        }
                        e.fd = null
                    },
                    isClosed: e => null === e.fd,
                    llseek(e, t, r) {
                        if (he.isClosed(e)) throw new he.ErrnoError(8);
                        if (!e.seekable || !e.stream_ops.llseek) throw new he.ErrnoError(70);
                        if (0 != r && 1 != r && 2 != r) throw new he.ErrnoError(28);
                        return e.position = e.stream_ops.llseek(e, t, r), e.ungotten = [], e.position
                    },
                    read(e, t, r, i, s) {
                        if (i < 0 || s < 0) throw new he.ErrnoError(28);
                        if (he.isClosed(e)) throw new he.ErrnoError(8);
                        if (1 == (2097155 & e.flags)) throw new he.ErrnoError(8);
                        if (he.isDir(e.node.mode)) throw new he.ErrnoError(31);
                        if (!e.stream_ops.read) throw new he.ErrnoError(28);
                        var n = void 0 !== s;
                        if (n) {
                            if (!e.seekable) throw new he.ErrnoError(70)
                        } else s = e.position;
                        var a = e.stream_ops.read(e, t, r, i, s);
                        return n || (e.position += a), a
                    },
                    write(e, t, r, i, s, n) {
                        if (i < 0 || s < 0) throw new he.ErrnoError(28);
                        if (he.isClosed(e)) throw new he.ErrnoError(8);
                        if (0 == (2097155 & e.flags)) throw new he.ErrnoError(8);
                        if (he.isDir(e.node.mode)) throw new he.ErrnoError(31);
                        if (!e.stream_ops.write) throw new he.ErrnoError(28);
                        e.seekable && 1024 & e.flags && he.llseek(e, 0, 2);
                        var a = void 0 !== s;
                        if (a) {
                            if (!e.seekable) throw new he.ErrnoError(70)
                        } else s = e.position;
                        var o = e.stream_ops.write(e, t, r, i, s, n);
                        return a || (e.position += o), o
                    },
                    allocate(e, t, r) {
                        if (he.isClosed(e)) throw new he.ErrnoError(8);
                        if (t < 0 || r <= 0) throw new he.ErrnoError(28);
                        if (0 == (2097155 & e.flags)) throw new he.ErrnoError(8);
                        if (!he.isFile(e.node.mode) && !he.isDir(e.node.mode)) throw new he.ErrnoError(43);
                        if (!e.stream_ops.allocate) throw new he.ErrnoError(138);
                        e.stream_ops.allocate(e, t, r)
                    },
                    mmap(e, t, r, i, s) {
                        if (0 != (2 & i) && 0 == (2 & s) && 2 != (2097155 & e.flags)) throw new he.ErrnoError(2);
                        if (1 == (2097155 & e.flags)) throw new he.ErrnoError(2);
                        if (!e.stream_ops.mmap) throw new he.ErrnoError(43);
                        return e.stream_ops.mmap(e, t, r, i, s)
                    },
                    msync: (e, t, r, i, s) => e.stream_ops.msync ? e.stream_ops.msync(e, t, r, i, s) : 0,
                    munmap: e => 0,
                    ioctl(e, t, r) {
                        if (!e.stream_ops.ioctl) throw new he.ErrnoError(59);
                        return e.stream_ops.ioctl(e, t, r)
                    },
                    readFile(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (t.flags = t.flags || 0, t.encoding = t.encoding || "binary", "utf8" !== t.encoding && "binary" !== t.encoding) throw new Error(`Invalid encoding type "${t.encoding}"`);
                        var r, i = he.open(e, t.flags),
                            s = he.stat(e).size,
                            n = new Uint8Array(s);
                        return he.read(i, n, 0, s, 0), "utf8" === t.encoding ? r = J(n, 0) : "binary" === t.encoding && (r = n), he.close(i), r
                    },
                    writeFile(e, t) {
                        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        r.flags = r.flags || 577;
                        var i = he.open(e, r.flags, r.mode);
                        if ("string" == typeof t) {
                            var s = new Uint8Array(ee(t) + 1),
                                n = te(t, s, 0, s.length);
                            he.write(i, s, 0, n, void 0, r.canOwn)
                        } else {
                            if (!ArrayBuffer.isView(t)) throw new Error("Unsupported data type");
                            he.write(i, t, 0, t.byteLength, void 0, r.canOwn)
                        }
                        he.close(i)
                    },
                    cwd: () => he.currentPath,
                    chdir(e) {
                        var t = he.lookupPath(e, {
                            follow: !0
                        });
                        if (null === t.node) throw new he.ErrnoError(44);
                        if (!he.isDir(t.node.mode)) throw new he.ErrnoError(54);
                        var r = he.nodePermissions(t.node, "x");
                        if (r) throw new he.ErrnoError(r);
                        he.currentPath = t.path
                    },
                    createDefaultDirectories() {
                        he.mkdir("/tmp"), he.mkdir("/home"), he.mkdir("/home/web_user")
                    },
                    createDefaultDevices() {
                        he.mkdir("/dev"), he.registerDevice(he.makedev(1, 3), {
                            read: () => 0,
                            write: (e, t, r, i, s) => i
                        }), he.mkdev("/dev/null", he.makedev(1, 3)), ae.register(he.makedev(5, 0), ae.default_tty_ops), ae.register(he.makedev(6, 0), ae.default_tty1_ops), he.mkdev("/dev/tty", he.makedev(5, 0)), he.mkdev("/dev/tty1", he.makedev(6, 0));
                        var e = new Uint8Array(1024),
                            t = 0,
                            r = () => (0 === t && (t = K(e).byteLength), e[--t]);
                        he.createDevice("/dev", "random", r), he.createDevice("/dev", "urandom", r), he.mkdir("/dev/shm"), he.mkdir("/dev/shm/tmp")
                    },
                    createSpecialDirectories() {
                        he.mkdir("/proc");
                        var e = he.mkdir("/proc/self");
                        he.mkdir("/proc/self/fd"), he.mount({
                            mount() {
                                var t = he.createNode(e, "fd", 16895, 73);
                                return t.node_ops = {
                                    lookup(e, t) {
                                        var r = +t,
                                            i = he.getStreamChecked(r),
                                            s = {
                                                parent: null,
                                                mount: {
                                                    mountpoint: "fake"
                                                },
                                                node_ops: {
                                                    readlink: () => i.path
                                                }
                                            };
                                        return s.parent = s, s
                                    }
                                }, t
                            }
                        }, {}, "/proc/self/fd")
                    },
                    createStandardStreams() {
                        s.stdin ? he.createDevice("/dev", "stdin", s.stdin) : he.symlink("/dev/tty", "/dev/stdin"), s.stdout ? he.createDevice("/dev", "stdout", null, s.stdout) : he.symlink("/dev/tty", "/dev/stdout"), s.stderr ? he.createDevice("/dev", "stderr", null, s.stderr) : he.symlink("/dev/tty1", "/dev/stderr"), he.open("/dev/stdin", 0), he.open("/dev/stdout", 1), he.open("/dev/stderr", 1)
                    },
                    ensureErrnoError() {
                        he.ErrnoError || (he.ErrnoError = function (e, t) {
                            this.name = "ErrnoError", this.node = t, this.setErrno = function (e) {
                                this.errno = e
                            }, this.setErrno(e), this.message = "FS error"
                        }, he.ErrnoError.prototype = new Error, he.ErrnoError.prototype.constructor = he.ErrnoError, [44].forEach((e => {
                            he.genericErrors[e] = new he.ErrnoError(e), he.genericErrors[e].stack = "<generic error, no stack>"
                        })))
                    },
                    staticInit() {
                        he.ensureErrnoError(), he.nameTable = new Array(4096), he.mount(de, {}, "/"), he.createDefaultDirectories(), he.createDefaultDevices(), he.createSpecialDirectories(), he.filesystems = {
                            MEMFS: de
                        }
                    },
                    init(e, t, r) {
                        he.init.initialized = !0, he.ensureErrnoError(), s.stdin = e || s.stdin, s.stdout = t || s.stdout, s.stderr = r || s.stderr, he.createStandardStreams()
                    },
                    quit() {
                        he.init.initialized = !1;
                        for (var e = 0; e < he.streams.length; e++) {
                            var t = he.streams[e];
                            t && he.close(t)
                        }
                    },
                    findObject(e, t) {
                        var r = he.analyzePath(e, t);
                        return r.exists ? r.object : null
                    },
                    analyzePath(e, t) {
                        try {
                            e = (i = he.lookupPath(e, {
                                follow: !t
                            })).path
                        } catch (e) {}
                        var r = {
                            isRoot: !1,
                            exists: !1,
                            error: 0,
                            name: null,
                            path: null,
                            object: null,
                            parentExists: !1,
                            parentPath: null,
                            parentObject: null
                        };
                        try {
                            var i = he.lookupPath(e, {
                                parent: !0
                            });
                            r.parentExists = !0, r.parentPath = i.path, r.parentObject = i.node, r.name = Y.basename(e), i = he.lookupPath(e, {
                                follow: !t
                            }), r.exists = !0, r.path = i.path, r.object = i.node, r.name = i.node.name, r.isRoot = "/" === i.path
                        } catch (e) {
                            r.error = e.errno
                        }
                        return r
                    },
                    createPath(e, t, r, i) {
                        e = "string" == typeof e ? e : he.getPath(e);
                        for (var s = t.split("/").reverse(); s.length;) {
                            var n = s.pop();
                            if (n) {
                                var a = Y.join2(e, n);
                                try {
                                    he.mkdir(a)
                                } catch (e) {}
                                e = a
                            }
                        }
                        return a
                    },
                    createFile(e, t, r, i, s) {
                        var n = Y.join2("string" == typeof e ? e : he.getPath(e), t),
                            a = ce(i, s);
                        return he.create(n, a)
                    },
                    createDataFile(e, t, r, i, s, n) {
                        var a = t;
                        e && (e = "string" == typeof e ? e : he.getPath(e), a = t ? Y.join2(e, t) : e);
                        var o = ce(i, s),
                            d = he.create(a, o);
                        if (r) {
                            if ("string" == typeof r) {
                                for (var l = new Array(r.length), u = 0, c = r.length; u < c; ++u) l[u] = r.charCodeAt(u);
                                r = l
                            }
                            he.chmod(d, 146 | o);
                            var h = he.open(d, 577);
                            he.write(h, r, 0, r.length, 0, n), he.close(h), he.chmod(d, o)
                        }
                    },
                    createDevice(e, t, r, i) {
                        var s = Y.join2("string" == typeof e ? e : he.getPath(e), t),
                            n = ce(!!r, !!i);
                        he.createDevice.major || (he.createDevice.major = 64);
                        var a = he.makedev(he.createDevice.major++, 0);
                        return he.registerDevice(a, {
                            open(e) {
                                e.seekable = !1
                            },
                            close(e) {
                                i && i.buffer && i.buffer.length && i(10)
                            },
                            read(e, t, i, s, n) {
                                for (var a = 0, o = 0; o < s; o++) {
                                    var d;
                                    try {
                                        d = r()
                                    } catch (e) {
                                        throw new he.ErrnoError(29)
                                    }
                                    if (void 0 === d && 0 === a) throw new he.ErrnoError(6);
                                    if (null == d) break;
                                    a++, t[i + o] = d
                                }
                                return a && (e.node.timestamp = Date.now()), a
                            },
                            write(e, t, r, s, n) {
                                for (var a = 0; a < s; a++) try {
                                    i(t[r + a])
                                } catch (e) {
                                    throw new he.ErrnoError(29)
                                }
                                return s && (e.node.timestamp = Date.now()), a
                            }
                        }), he.mkdev(s, n, a)
                    },
                    forceLoadFile(e) {
                        if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
                        if ("undefined" != typeof XMLHttpRequest) throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
                        if (!n) throw new Error("Cannot load without read() or XMLHttpRequest.");
                        try {
                            e.contents = re(n(e.url), !0), e.usedBytes = e.contents.length
                        } catch (e) {
                            throw new he.ErrnoError(29)
                        }
                    },
                    createLazyFile(e, t, r, i, s) {
                        function n() {
                            this.lengthKnown = !1, this.chunks = []
                        }
                        if (n.prototype.get = function (e) {
                                if (!(e > this.length - 1 || e < 0)) {
                                    var t = e % this.chunkSize,
                                        r = e / this.chunkSize | 0;
                                    return this.getter(r)[t]
                                }
                            }, n.prototype.setDataGetter = function (e) {
                                this.getter = e
                            }, n.prototype.cacheLength = function () {
                                var e = new XMLHttpRequest;
                                if (e.open("HEAD", r, !1), e.send(null), !(e.status >= 200 && e.status < 300 || 304 === e.status)) throw new Error("Couldn't load " + r + ". Status: " + e.status);
                                var t, i = Number(e.getResponseHeader("Content-length")),
                                    s = (t = e.getResponseHeader("Accept-Ranges")) && "bytes" === t,
                                    n = (t = e.getResponseHeader("Content-Encoding")) && "gzip" === t,
                                    a = 1048576;
                                s || (a = i);
                                var o = this;
                                o.setDataGetter((e => {
                                    var t = e * a,
                                        s = (e + 1) * a - 1;
                                    if (s = Math.min(s, i - 1), void 0 === o.chunks[e] && (o.chunks[e] = ((e, t) => {
                                            if (e > t) throw new Error("invalid range (" + e + ", " + t + ") or no bytes requested!");
                                            if (t > i - 1) throw new Error("only " + i + " bytes available! programmer error!");
                                            var s = new XMLHttpRequest;
                                            if (s.open("GET", r, !1), i !== a && s.setRequestHeader("Range", "bytes=" + e + "-" + t), s.responseType = "arraybuffer", s.overrideMimeType && s.overrideMimeType("text/plain; charset=x-user-defined"), s.send(null), !(s.status >= 200 && s.status < 300 || 304 === s.status)) throw new Error("Couldn't load " + r + ". Status: " + s.status);
                                            return void 0 !== s.response ? new Uint8Array(s.response || []) : re(s.responseText || "", !0)
                                        })(t, s)), void 0 === o.chunks[e]) throw new Error("doXHR failed!");
                                    return o.chunks[e]
                                })), !n && i || (a = i = 1, i = this.getter(0).length, a = i, b("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = i, this._chunkSize = a, this.lengthKnown = !0
                            }, "undefined" != typeof XMLHttpRequest) {
                            if (!c) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                            var a = new n;
                            Object.defineProperties(a, {
                                length: {
                                    get: function () {
                                        return this.lengthKnown || this.cacheLength(), this._length
                                    }
                                },
                                chunkSize: {
                                    get: function () {
                                        return this.lengthKnown || this.cacheLength(), this._chunkSize
                                    }
                                }
                            });
                            var o = {
                                isDevice: !1,
                                contents: a
                            }
                        } else o = {
                            isDevice: !1,
                            url: r
                        };
                        var d = he.createFile(e, t, o, i, s);
                        o.contents ? d.contents = o.contents : o.url && (d.contents = null, d.url = o.url), Object.defineProperties(d, {
                            usedBytes: {
                                get: function () {
                                    return this.contents.length
                                }
                            }
                        });
                        var l = {};

                        function u(e, t, r, i, s) {
                            var n = e.node.contents;
                            if (s >= n.length) return 0;
                            var a = Math.min(n.length - s, i);
                            if (n.slice)
                                for (var o = 0; o < a; o++) t[r + o] = n[s + o];
                            else
                                for (o = 0; o < a; o++) t[r + o] = n.get(s + o);
                            return a
                        }
                        return Object.keys(d.stream_ops).forEach((e => {
                            var t = d.stream_ops[e];
                            l[e] = function () {
                                return he.forceLoadFile(d), t.apply(null, arguments)
                            }
                        })), l.read = (e, t, r, i, s) => (he.forceLoadFile(d), u(e, t, r, i, s)), l.mmap = (e, t, r, i, s) => {
                            he.forceLoadFile(d);
                            var n = oe();
                            if (!n) throw new he.ErrnoError(48);
                            return u(e, w, n, t, r), {
                                ptr: n,
                                allocated: !0
                            }
                        }, d.stream_ops = l, d
                    }
                },
                fe = (e, t) => e ? J(S, e, t) : "",
                pe = {
                    DEFAULT_POLLMASK: 5,
                    calculateAt(e, t, r) {
                        if (Y.isAbs(t)) return t;
                        var i;
                        if (i = -100 === e ? he.cwd() : pe.getStreamFromFD(e).path, 0 == t.length) {
                            if (!r) throw new he.ErrnoError(44);
                            return i
                        }
                        return Y.join2(i, t)
                    },
                    doStat(e, t, r) {
                        try {
                            var i = e(t)
                        } catch (e) {
                            if (e && e.node && Y.normalize(t) !== Y.normalize(he.getPath(e.node))) return -54;
                            throw e
                        }
                        U[r >> 2] = i.dev, U[r + 4 >> 2] = i.mode, x[r + 8 >> 2] = i.nlink, U[r + 12 >> 2] = i.uid, U[r + 16 >> 2] = i.gid, U[r + 20 >> 2] = i.rdev, G = [i.size >>> 0, (O = i.size, +Math.abs(O) >= 1 ? O > 0 ? +Math.floor(O / 4294967296) >>> 0 : ~~+Math.ceil((O - +(~~O >>> 0)) / 4294967296) >>> 0 : 0)], U[r + 24 >> 2] = G[0], U[r + 28 >> 2] = G[1], U[r + 32 >> 2] = 4096, U[r + 36 >> 2] = i.blocks;
                        var s = i.atime.getTime(),
                            n = i.mtime.getTime(),
                            a = i.ctime.getTime();
                        return G = [Math.floor(s / 1e3) >>> 0, (O = Math.floor(s / 1e3), +Math.abs(O) >= 1 ? O > 0 ? +Math.floor(O / 4294967296) >>> 0 : ~~+Math.ceil((O - +(~~O >>> 0)) / 4294967296) >>> 0 : 0)], U[r + 40 >> 2] = G[0], U[r + 44 >> 2] = G[1], x[r + 48 >> 2] = s % 1e3 * 1e3, G = [Math.floor(n / 1e3) >>> 0, (O = Math.floor(n / 1e3), +Math.abs(O) >= 1 ? O > 0 ? +Math.floor(O / 4294967296) >>> 0 : ~~+Math.ceil((O - +(~~O >>> 0)) / 4294967296) >>> 0 : 0)], U[r + 56 >> 2] = G[0], U[r + 60 >> 2] = G[1], x[r + 64 >> 2] = n % 1e3 * 1e3, G = [Math.floor(a / 1e3) >>> 0, (O = Math.floor(a / 1e3), +Math.abs(O) >= 1 ? O > 0 ? +Math.floor(O / 4294967296) >>> 0 : ~~+Math.ceil((O - +(~~O >>> 0)) / 4294967296) >>> 0 : 0)], U[r + 72 >> 2] = G[0], U[r + 76 >> 2] = G[1], x[r + 80 >> 2] = a % 1e3 * 1e3, G = [i.ino >>> 0, (O = i.ino, +Math.abs(O) >= 1 ? O > 0 ? +Math.floor(O / 4294967296) >>> 0 : ~~+Math.ceil((O - +(~~O >>> 0)) / 4294967296) >>> 0 : 0)], U[r + 88 >> 2] = G[0], U[r + 92 >> 2] = G[1], 0
                    },
                    doMsync(e, t, r, i, s) {
                        if (!he.isFile(t.node.mode)) throw new he.ErrnoError(43);
                        if (2 & i) return 0;
                        var n = S.slice(e, e + r);
                        he.msync(t, n, s, r, i)
                    },
                    varargs: void 0,
                    get() {
                        var e = U[+pe.varargs >> 2];
                        return pe.varargs += 4, e
                    },
                    getp: () => pe.get(),
                    getStr: e => fe(e),
                    getStreamFromFD: e => he.getStreamChecked(e)
                },
                me = e => {
                    for (var t = "", r = e; S[r];) t += ie[S[r++]];
                    return t
                },
                _e = {},
                ge = {},
                ye = {},
                be = e => {
                    throw new se(e)
                },
                ve = e => {
                    throw new ne(e)
                },
                we = (e, t, r) => {
                    function i(t) {
                        var i = r(t);
                        i.length !== e.length && ve("Mismatched type converter count");
                        for (var s = 0; s < e.length; ++s) Se(e[s], i[s])
                    }
                    e.forEach((function (e) {
                        ye[e] = t
                    }));
                    var s = new Array(t.length),
                        n = [],
                        a = 0;
                    t.forEach(((e, t) => {
                        ge.hasOwnProperty(e) ? s[t] = ge[e] : (n.push(e), _e.hasOwnProperty(e) || (_e[e] = []), _e[e].push((() => {
                            s[t] = ge[e], ++a === n.length && i(s)
                        })))
                    })), 0 === n.length && i(s)
                };

            function Se(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (!("argPackAdvance" in t)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
                return function (e, t) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    var i = t.name;
                    if (e || be(`type "${i}" must have a positive integer typeid pointer`), ge.hasOwnProperty(e)) {
                        if (r.ignoreDuplicateRegistrations) return;
                        be(`Cannot register type '${i}' twice`)
                    }
                    if (ge[e] = t, delete ye[e], _e.hasOwnProperty(e)) {
                        var s = _e[e];
                        delete _e[e], s.forEach((e => e()))
                    }
                }(e, t, r)
            }
            var Ee, Ae = e => {
                    be(e.$$.ptrType.registeredClass.name + " instance already deleted")
                },
                Ue = !1,
                xe = e => {},
                Be = e => {
                    e.count.value -= 1, 0 === e.count.value && (e => {
                        e.smartPtr ? e.smartPtrType.rawDestructor(e.smartPtr) : e.ptrType.registeredClass.rawDestructor(e.ptr)
                    })(e)
                },
                Te = (e, t, r) => {
                    if (t === r) return e;
                    if (void 0 === r.baseClass) return null;
                    var i = Te(e, t, r.baseClass);
                    return null === i ? null : r.downcast(i)
                },
                ke = {},
                Ce = () => Object.keys(Le).length,
                De = () => {
                    var e = [];
                    for (var t in Le) Le.hasOwnProperty(t) && e.push(Le[t]);
                    return e
                },
                Pe = [],
                Ie = () => {
                    for (; Pe.length;) {
                        var e = Pe.pop();
                        e.$$.deleteScheduled = !1, e.delete()
                    }
                },
                Fe = e => {
                    Ee = e, Pe.length && Ee && Ee(Ie)
                },
                Le = {},
                Re = (e, t) => (t = ((e, t) => {
                    for (void 0 === t && be("ptr should not be undefined"); e.baseClass;) t = e.upcast(t), e = e.baseClass;
                    return t
                })(e, t), Le[t]),
                Me = (e, t) => (t.ptrType && t.ptr || ve("makeClassHandle requires ptr and ptrType"), !!t.smartPtrType != !!t.smartPtr && ve("Both smartPtrType and smartPtr must be specified"), t.count = {
                    value: 1
                }, Ne(Object.create(e, {
                    $$: {
                        value: t
                    }
                })));

            function ze(e) {
                var t = this.getPointee(e);
                if (!t) return this.destructor(e), null;
                var r = Re(this.registeredClass, t);
                if (void 0 !== r) {
                    if (0 === r.$$.count.value) return r.$$.ptr = t, r.$$.smartPtr = e, r.clone();
                    var i = r.clone();
                    return this.destructor(e), i
                }

                function s() {
                    return this.isSmartPointer ? Me(this.registeredClass.instancePrototype, {
                        ptrType: this.pointeeType,
                        ptr: t,
                        smartPtrType: this,
                        smartPtr: e
                    }) : Me(this.registeredClass.instancePrototype, {
                        ptrType: this,
                        ptr: e
                    })
                }
                var n, a = this.registeredClass.getActualType(t),
                    o = ke[a];
                if (!o) return s.call(this);
                n = this.isConst ? o.constPointerType : o.pointerType;
                var d = Te(t, this.registeredClass, n.registeredClass);
                return null === d ? s.call(this) : this.isSmartPointer ? Me(n.registeredClass.instancePrototype, {
                    ptrType: n,
                    ptr: d,
                    smartPtrType: this,
                    smartPtr: e
                }) : Me(n.registeredClass.instancePrototype, {
                    ptrType: n,
                    ptr: d
                })
            }
            var Ne = e => "undefined" == typeof FinalizationRegistry ? (Ne = e => e, e) : (Ue = new FinalizationRegistry((e => {
                Be(e.$$)
            })), Ne = e => {
                var t = e.$$;
                if (t.smartPtr) {
                    var r = {
                        $$: t
                    };
                    Ue.register(e, r, e)
                }
                return e
            }, xe = e => Ue.unregister(e), Ne(e));

            function Oe() {}
            var Ge = (e, t) => Object.defineProperty(t, "name", {
                    value: e
                }),
                $e = (e, t, r) => {
                    if (void 0 === e[t].overloadTable) {
                        var i = e[t];
                        e[t] = function () {
                            return e[t].overloadTable.hasOwnProperty(arguments.length) || be(`Function '${r}' called with an invalid number of arguments (${arguments.length}) - expects one of (${e[t].overloadTable})!`), e[t].overloadTable[arguments.length].apply(this, arguments)
                        }, e[t].overloadTable = [], e[t].overloadTable[i.argCount] = i
                    }
                };

            function He(e, t, r, i, s, n, a, o) {
                this.name = e, this.constructor = t, this.instancePrototype = r, this.rawDestructor = i, this.baseClass = s, this.getActualType = n, this.upcast = a, this.downcast = o, this.pureVirtualFunctions = []
            }
            var Ve = (e, t, r) => {
                for (; t !== r;) t.upcast || be(`Expected null or instance of ${r.name}, got an instance of ${t.name}`), e = t.upcast(e), t = t.baseClass;
                return e
            };

            function We(e, t) {
                if (null === t) return this.isReference && be(`null is not a valid ${this.name}`), 0;
                t.$$ || be(`Cannot pass "${mt(t)}" as a ${this.name}`), t.$$.ptr || be(`Cannot pass deleted object as a pointer of type ${this.name}`);
                var r = t.$$.ptrType.registeredClass;
                return Ve(t.$$.ptr, r, this.registeredClass)
            }

            function je(e, t) {
                var r;
                if (null === t) return this.isReference && be(`null is not a valid ${this.name}`), this.isSmartPointer ? (r = this.rawConstructor(), null !== e && e.push(this.rawDestructor, r), r) : 0;
                t.$$ || be(`Cannot pass "${mt(t)}" as a ${this.name}`), t.$$.ptr || be(`Cannot pass deleted object as a pointer of type ${this.name}`), !this.isConst && t.$$.ptrType.isConst && be(`Cannot convert argument of type ${t.$$.smartPtrType?t.$$.smartPtrType.name:t.$$.ptrType.name} to parameter type ${this.name}`);
                var i = t.$$.ptrType.registeredClass;
                if (r = Ve(t.$$.ptr, i, this.registeredClass), this.isSmartPointer) switch (void 0 === t.$$.smartPtr && be("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
                    case 0:
                        t.$$.smartPtrType === this ? r = t.$$.smartPtr : be(`Cannot convert argument of type ${t.$$.smartPtrType?t.$$.smartPtrType.name:t.$$.ptrType.name} to parameter type ${this.name}`);
                        break;
                    case 1:
                        r = t.$$.smartPtr;
                        break;
                    case 2:
                        if (t.$$.smartPtrType === this) r = t.$$.smartPtr;
                        else {
                            var s = t.clone();
                            r = this.rawShare(r, ht.toHandle((() => s.delete()))), null !== e && e.push(this.rawDestructor, r)
                        }
                        break;
                    default:
                        be("Unsupporting sharing policy")
                }
                return r
            }

            function qe(e, t) {
                if (null === t) return this.isReference && be(`null is not a valid ${this.name}`), 0;
                t.$$ || be(`Cannot pass "${mt(t)}" as a ${this.name}`), t.$$.ptr || be(`Cannot pass deleted object as a pointer of type ${this.name}`), t.$$.ptrType.isConst && be(`Cannot convert argument of type ${t.$$.ptrType.name} to parameter type ${this.name}`);
                var r = t.$$.ptrType.registeredClass;
                return Ve(t.$$.ptr, r, this.registeredClass)
            }

            function Ye(e) {
                return this.fromWireType(x[e >> 2])
            }

            function Ke(e, t, r, i, s, n, a, o, d, l, u) {
                this.name = e, this.registeredClass = t, this.isReference = r, this.isConst = i, this.isSmartPointer = s, this.pointeeType = n, this.sharingPolicy = a, this.rawGetPointee = o, this.rawConstructor = d, this.rawShare = l, this.rawDestructor = u, s || void 0 !== t.baseClass ? this.toWireType = je : i ? (this.toWireType = We, this.destructorFunction = null) : (this.toWireType = qe, this.destructorFunction = null)
            }
            var Xe, Ze, Je = [],
                Qe = e => {
                    var t = Je[e];
                    return t || (e >= Je.length && (Je.length = e + 1), Je[e] = t = Xe.get(e)), t
                },
                et = (e, t, r) => e.includes("j") ? ((e, t, r) => {
                    var i = s["dynCall_" + e];
                    return r && r.length ? i.apply(null, [t].concat(r)) : i.call(null, t)
                })(e, t, r) : Qe(t).apply(null, r),
                tt = (e, t) => {
                    var r, i, s, n = (e = me(e)).includes("j") ? (r = e, i = t, s = [], function () {
                        return s.length = 0, Object.assign(s, arguments), et(r, i, s)
                    }) : Qe(t);
                    return "function" != typeof n && be(`unknown function pointer with signature ${e}: ${t}`), n
                },
                rt = e => {
                    var t = Vt(e),
                        r = me(t);
                    return Gt(t), r
                },
                it = (e, t) => {
                    var r = [],
                        i = {};
                    throw t.forEach((function e(t) {
                        i[t] || ge[t] || (ye[t] ? ye[t].forEach(e) : (r.push(t), i[t] = !0))
                    })), new Ze(`${e}: ` + r.map(rt).join([", "]))
                },
                st = (e, t) => {
                    for (var r = [], i = 0; i < e; i++) r.push(x[t + 4 * i >> 2]);
                    return r
                },
                nt = e => {
                    for (; e.length;) {
                        var t = e.pop();
                        e.pop()(t)
                    }
                };

            function at(e, t) {
                if (!(e instanceof Function)) throw new TypeError(`new_ called with constructor type ${typeof e} which is not a function`);
                var r = Ge(e.name || "unknownFunctionName", (function () {}));
                r.prototype = e.prototype;
                var i = new r,
                    s = e.apply(i, t);
                return s instanceof Object ? s : i
            }

            function ot(e, t, r, i, s, n) {
                var a = t.length;
                a < 2 && be("argTypes array size mismatch! Must at least get return value and 'this' types!");
                for (var o = null !== t[1] && null !== r, d = !1, l = 1; l < t.length; ++l)
                    if (null !== t[l] && void 0 === t[l].destructorFunction) {
                        d = !0;
                        break
                    } var u = "void" !== t[0].name,
                    c = "",
                    h = "";
                for (l = 0; l < a - 2; ++l) c += (0 !== l ? ", " : "") + "arg" + l, h += (0 !== l ? ", " : "") + "arg" + l + "Wired";
                var f = `\n        return function (${c}) {\n        if (arguments.length !== ${a-2}) {\n          throwBindingError('function ${e} called with ' + arguments.length + ' arguments, expected ${a-2}');\n        }`;
                d && (f += "var destructors = [];\n");
                var p = d ? "destructors" : "null",
                    m = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"],
                    _ = [be, i, s, nt, t[0], t[1]];
                for (o && (f += "var thisWired = classParam.toWireType(" + p + ", this);\n"), l = 0; l < a - 2; ++l) f += "var arg" + l + "Wired = argType" + l + ".toWireType(" + p + ", arg" + l + "); // " + t[l + 2].name + "\n", m.push("argType" + l), _.push(t[l + 2]);
                if (o && (h = "thisWired" + (h.length > 0 ? ", " : "") + h), f += (u || n ? "var rv = " : "") + "invoker(fn" + (h.length > 0 ? ", " : "") + h + ");\n", d) f += "runDestructors(destructors);\n";
                else
                    for (l = o ? 1 : 2; l < t.length; ++l) {
                        var g = 1 === l ? "thisWired" : "arg" + (l - 2) + "Wired";
                        null !== t[l].destructorFunction && (f += g + "_dtor(" + g + "); // " + t[l].name + "\n", m.push(g + "_dtor"), _.push(t[l].destructorFunction))
                    }
                u && (f += "var ret = retType.fromWireType(rv);\nreturn ret;\n"), f += "}\n", m.push(f);
                var y = at(Function, m).apply(null, _);
                return Ge(e, y)
            }

            function dt() {
                this.allocated = [void 0], this.freelist = []
            }
            var lt = new dt,
                ut = e => {
                    e >= lt.reserved && 0 == --lt.get(e).refcount && lt.free(e)
                },
                ct = () => {
                    for (var e = 0, t = lt.reserved; t < lt.allocated.length; ++t) void 0 !== lt.allocated[t] && ++e;
                    return e
                },
                ht = {
                    toValue: e => (e || be("Cannot use deleted val. handle = " + e), lt.get(e).value),
                    toHandle: e => {
                        switch (e) {
                            case void 0:
                                return 1;
                            case null:
                                return 2;
                            case !0:
                                return 3;
                            case !1:
                                return 4;
                            default:
                                return lt.allocate({
                                    refcount: 1,
                                    value: e
                                })
                        }
                    }
                };

            function ft(e) {
                return this.fromWireType(U[e >> 2])
            }
            var pt, mt = e => {
                    if (null === e) return "null";
                    var t = typeof e;
                    return "object" === t || "array" === t || "function" === t ? e.toString() : "" + e
                },
                _t = (e, t) => {
                    switch (t) {
                        case 4:
                            return function (e) {
                                return this.fromWireType(B[e >> 2])
                            };
                        case 8:
                            return function (e) {
                                return this.fromWireType(T[e >> 3])
                            };
                        default:
                            throw new TypeError(`invalid float width (${t}): ${e}`)
                    }
                },
                gt = (e, t, r) => {
                    switch (t) {
                        case 1:
                            return r ? e => w[e >> 0] : e => S[e >> 0];
                        case 2:
                            return r ? e => E[e >> 1] : e => A[e >> 1];
                        case 4:
                            return r ? e => U[e >> 2] : e => x[e >> 2];
                        default:
                            throw new TypeError(`invalid integer width (${t}): ${e}`)
                    }
                },
                yt = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0,
                bt = (e, t) => {
                    for (var r = e, i = r >> 1, s = i + t / 2; !(i >= s) && A[i];) ++i;
                    if ((r = i << 1) - e > 32 && yt) return yt.decode(S.subarray(e, r));
                    for (var n = "", a = 0; !(a >= t / 2); ++a) {
                        var o = E[e + 2 * a >> 1];
                        if (0 == o) break;
                        n += String.fromCharCode(o)
                    }
                    return n
                },
                vt = (e, t, r) => {
                    if (void 0 === r && (r = 2147483647), r < 2) return 0;
                    for (var i = t, s = (r -= 2) < 2 * e.length ? r / 2 : e.length, n = 0; n < s; ++n) {
                        var a = e.charCodeAt(n);
                        E[t >> 1] = a, t += 2
                    }
                    return E[t >> 1] = 0, t - i
                },
                wt = e => 2 * e.length,
                St = (e, t) => {
                    for (var r = 0, i = ""; !(r >= t / 4);) {
                        var s = U[e + 4 * r >> 2];
                        if (0 == s) break;
                        if (++r, s >= 65536) {
                            var n = s - 65536;
                            i += String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
                        } else i += String.fromCharCode(s)
                    }
                    return i
                },
                Et = (e, t, r) => {
                    if (void 0 === r && (r = 2147483647), r < 4) return 0;
                    for (var i = t, s = i + r - 4, n = 0; n < e.length; ++n) {
                        var a = e.charCodeAt(n);
                        if (a >= 55296 && a <= 57343 && (a = 65536 + ((1023 & a) << 10) | 1023 & e.charCodeAt(++n)), U[t >> 2] = a, (t += 4) + 4 > s) break
                    }
                    return U[t >> 2] = 0, t - i
                },
                At = e => {
                    for (var t = 0, r = 0; r < e.length; ++r) {
                        var i = e.charCodeAt(r);
                        i >= 55296 && i <= 57343 && ++r, t += 4
                    }
                    return t
                },
                Ut = {},
                xt = e => {
                    var t = Ut[e];
                    return void 0 === t ? me(e) : t
                },
                Bt = [],
                Tt = (e, t) => {
                    var r = ge[e];
                    return void 0 === r && be(t + " has unknown type " + rt(e)), r
                },
                kt = (e, t, r) => {
                    var i = [],
                        s = e.toWireType(i, r);
                    return i.length && (x[t >> 2] = ht.toHandle(i)), s
                };
            pt = () => performance.now();
            var Ct, Dt, Pt, It = {},
                Ft = () => {
                    if (!Ft.strings) {
                        var e = {
                            USER: "web_user",
                            LOGNAME: "web_user",
                            PATH: "/",
                            PWD: "/",
                            HOME: "/home/web_user",
                            LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                            _: l || "./this.program"
                        };
                        for (var t in It) void 0 === It[t] ? delete e[t] : e[t] = It[t];
                        var r = [];
                        for (var t in e) r.push(`${t}=${e[t]}`);
                        Ft.strings = r
                    }
                    return Ft.strings
                },
                Lt = function (e, t, r, i) {
                    e || (e = this), this.parent = e, this.mount = e.mount, this.mounted = null, this.id = he.nextInode++, this.name = t, this.mode = r, this.node_ops = {}, this.stream_ops = {}, this.rdev = i
                },
                Rt = 365,
                Mt = 146;
            Object.defineProperties(Lt.prototype, {
                read: {
                    get: function () {
                        return (this.mode & Rt) === Rt
                    },
                    set: function (e) {
                        e ? this.mode |= Rt : this.mode &= -366
                    }
                },
                write: {
                    get: function () {
                        return (this.mode & Mt) === Mt
                    },
                    set: function (e) {
                        e ? this.mode |= Mt : this.mode &= -147
                    }
                },
                isFolder: {
                    get: function () {
                        return he.isDir(this.mode)
                    }
                },
                isDevice: {
                    get: function () {
                        return he.isChrdev(this.mode)
                    }
                }
            }), he.FSNode = Lt, he.createPreloadedFile = (e, t, r, i, s, n, a, o, d, l) => {
                var u = t ? X.resolve(Y.join2(e, t)) : e;

                function c(r) {
                    function c(r) {
                        l && l(), o || ((e, t, r, i, s, n) => {
                            he.createDataFile(e, t, r, i, s, n)
                        })(e, t, r, i, s, d), n && n(), R()
                    }((e, t, r, i) => {
                        "undefined" != typeof Browser && Browser.init();
                        var s = !1;
                        return ue.forEach((n => {
                            s || n.canHandle(t) && (n.handle(e, t, r, i), s = !0)
                        })), s
                    })(r, u, c, (() => {
                        a && a(), R()
                    })) || c(r)
                }
                L(), "string" == typeof r ? le(r, (e => c(e)), a) : c(r)
            }, he.staticInit(), (() => {
                for (var e = new Array(256), t = 0; t < 256; ++t) e[t] = String.fromCharCode(t);
                ie = e
            })(), se = s.BindingError = class extends Error {
                constructor(e) {
                    super(e), this.name = "BindingError"
                }
            }, ne = s.InternalError = class extends Error {
                constructor(e) {
                    super(e), this.name = "InternalError"
                }
            }, Object.assign(Oe.prototype, {
                isAliasOf(e) {
                    if (!(this instanceof Oe)) return !1;
                    if (!(e instanceof Oe)) return !1;
                    var t = this.$$.ptrType.registeredClass,
                        r = this.$$.ptr;
                    e.$$ = e.$$;
                    for (var i = e.$$.ptrType.registeredClass, s = e.$$.ptr; t.baseClass;) r = t.upcast(r), t = t.baseClass;
                    for (; i.baseClass;) s = i.upcast(s), i = i.baseClass;
                    return t === i && r === s
                },
                clone() {
                    if (this.$$.ptr || Ae(this), this.$$.preservePointerOnDelete) return this.$$.count.value += 1, this;
                    var e, t = Ne(Object.create(Object.getPrototypeOf(this), {
                        $$: {
                            value: (e = this.$$, {
                                count: e.count,
                                deleteScheduled: e.deleteScheduled,
                                preservePointerOnDelete: e.preservePointerOnDelete,
                                ptr: e.ptr,
                                ptrType: e.ptrType,
                                smartPtr: e.smartPtr,
                                smartPtrType: e.smartPtrType
                            })
                        }
                    }));
                    return t.$$.count.value += 1, t.$$.deleteScheduled = !1, t
                },
                delete() {
                    this.$$.ptr || Ae(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && be("Object already scheduled for deletion"), xe(this), Be(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0)
                },
                isDeleted() {
                    return !this.$$.ptr
                },
                deleteLater() {
                    return this.$$.ptr || Ae(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && be("Object already scheduled for deletion"), Pe.push(this), 1 === Pe.length && Ee && Ee(Ie), this.$$.deleteScheduled = !0, this
                }
            }), s.getInheritedInstanceCount = Ce, s.getLiveInheritedInstances = De, s.flushPendingDeletes = Ie, s.setDelayFunction = Fe, Object.assign(Ke.prototype, {
                getPointee(e) {
                    return this.rawGetPointee && (e = this.rawGetPointee(e)), e
                },
                destructor(e) {
                    this.rawDestructor && this.rawDestructor(e)
                },
                argPackAdvance: 8,
                readValueFromPointer: Ye,
                deleteObject(e) {
                    null !== e && e.delete()
                },
                fromWireType: ze
            }), Ze = s.UnboundTypeError = (Ct = Error, (Pt = Ge(Dt = "UnboundTypeError", (function (e) {
                this.name = Dt, this.message = e;
                var t = new Error(e).stack;
                void 0 !== t && (this.stack = this.toString() + "\n" + t.replace(/^Error(:[^\n]*)?\n/, ""))
            }))).prototype = Object.create(Ct.prototype), Pt.prototype.constructor = Pt, Pt.prototype.toString = function () {
                return void 0 === this.message ? this.name : `${this.name}: ${this.message}`
            }, Pt), Object.assign(dt.prototype, {
                get(e) {
                    return this.allocated[e]
                },
                has(e) {
                    return void 0 !== this.allocated[e]
                },
                allocate(e) {
                    var t = this.freelist.pop() || this.allocated.length;
                    return this.allocated[t] = e, t
                },
                free(e) {
                    this.allocated[e] = void 0, this.freelist.push(e)
                }
            }), lt.allocated.push({
                value: void 0
            }, {
                value: null
            }, {
                value: !0
            }, {
                value: !1
            }), lt.reserved = lt.allocated.length, s.count_emval_handles = ct;
            var zt, Nt = {
                    K: (e, t, r) => {
                        throw new q(e).init(t, r), e
                    },
                    G: function (e, t, r) {
                        pe.varargs = r;
                        try {
                            var i = pe.getStreamFromFD(e);
                            switch (t) {
                                case 0:
                                    if ((s = pe.get()) < 0) return -28;
                                    for (; he.streams[s];) s++;
                                    return he.createStream(i, s).fd;
                                case 1:
                                case 2:
                                case 6:
                                case 7:
                                    return 0;
                                case 3:
                                    return i.flags;
                                case 4:
                                    var s = pe.get();
                                    return i.flags |= s, 0;
                                case 5:
                                    return s = pe.getp(), E[s + 0 >> 1] = 2, 0;
                                case 16:
                                case 8:
                                default:
                                    return -28;
                                case 9:
                                    return n = 28, U[Ht() >> 2] = n, -1
                            }
                        } catch (e) {
                            if (void 0 === he || "ErrnoError" !== e.name) throw e;
                            return -e.errno
                        }
                        var n
                    },
                    A: function (e, t, r, i) {
                        pe.varargs = i;
                        try {
                            t = pe.getStr(t), t = pe.calculateAt(e, t);
                            var s = i ? pe.get() : 0;
                            return he.open(t, r, s).fd
                        } catch (e) {
                            if (void 0 === he || "ErrnoError" !== e.name) throw e;
                            return -e.errno
                        }
                    },
                    y: (e, t, r, i, s) => {},
                    I: (e, t, r, i) => {
                        Se(e, {
                            name: t = me(t),
                            fromWireType: function (e) {
                                return !!e
                            },
                            toWireType: function (e, t) {
                                return t ? r : i
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: function (e) {
                                return this.fromWireType(S[e])
                            },
                            destructorFunction: null
                        })
                    },
                    m: (e, t, r, i, n, a, o, d, l, u, c, h, f) => {
                        c = me(c), a = tt(n, a), d && (d = tt(o, d)), u && (u = tt(l, u)), f = tt(h, f);
                        var p = (e => {
                            if (void 0 === e) return "_unknown";
                            var t = (e = e.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
                            return t >= 48 && t <= 57 ? `_${e}` : e
                        })(c);
                        ((e, t, r) => {
                            s.hasOwnProperty(e) ? ((void 0 === r || void 0 !== s[e].overloadTable && void 0 !== s[e].overloadTable[r]) && be(`Cannot register public name '${e}' twice`), $e(s, e, e), s.hasOwnProperty(r) && be(`Cannot register multiple overloads of a function with the same number of arguments (${r})!`), s[e].overloadTable[r] = t) : (s[e] = t, void 0 !== r && (s[e].numArguments = r))
                        })(p, (function () {
                            it(`Cannot construct ${c} due to unbound types`, [i])
                        })), we([e, t, r], i ? [i] : [], (function (t) {
                            var r, n;
                            t = t[0], n = i ? (r = t.registeredClass).instancePrototype : Oe.prototype;
                            var o = Ge(c, (function () {
                                    if (Object.getPrototypeOf(this) !== l) throw new se("Use 'new' to construct " + c);
                                    if (void 0 === h.constructor_body) throw new se(c + " has no accessible constructor");
                                    var e = h.constructor_body[arguments.length];
                                    if (void 0 === e) throw new se(`Tried to invoke ctor of ${c} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(h.constructor_body).toString()}) parameters instead!`);
                                    return e.apply(this, arguments)
                                })),
                                l = Object.create(n, {
                                    constructor: {
                                        value: o
                                    }
                                });
                            o.prototype = l;
                            var h = new He(c, o, l, f, r, a, d, u);
                            h.baseClass && (void 0 === h.baseClass.__derivedClasses && (h.baseClass.__derivedClasses = []), h.baseClass.__derivedClasses.push(h));
                            var m = new Ke(c, h, !0, !1, !1),
                                _ = new Ke(c + "*", h, !1, !1, !1),
                                g = new Ke(c + " const*", h, !1, !0, !1);
                            return ke[e] = {
                                pointerType: _,
                                constPointerType: g
                            }, ((e, t, r) => {
                                s.hasOwnProperty(e) || ve("Replacing nonexistant public symbol"), void 0 !== s[e].overloadTable && void 0 !== r ? s[e].overloadTable[r] = t : (s[e] = t, s[e].argCount = r)
                            })(p, o), [m, _, g]
                        }))
                    },
                    l: (e, t, r, i, s, n) => {
                        var a = st(t, r);
                        s = tt(i, s), we([], [e], (function (e) {
                            var r = `constructor ${(e=e[0]).name}`;
                            if (void 0 === e.registeredClass.constructor_body && (e.registeredClass.constructor_body = []), void 0 !== e.registeredClass.constructor_body[t - 1]) throw new se(`Cannot register multiple constructors with identical number of parameters (${t-1}) for class '${e.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
                            return e.registeredClass.constructor_body[t - 1] = () => {
                                it(`Cannot construct ${e.name} due to unbound types`, a)
                            }, we([], a, (i => (i.splice(1, 0, null), e.registeredClass.constructor_body[t - 1] = ot(r, i, null, s, n), []))), []
                        }))
                    },
                    e: (e, t, r, i, s, n, a, o, d) => {
                        var l = st(r, i);
                        t = (e => {
                            const t = (e = e.trim()).indexOf("(");
                            return -1 !== t ? e.substr(0, t) : e
                        })(t = me(t)), n = tt(s, n), we([], [e], (function (e) {
                            var i = `${(e=e[0]).name}.${t}`;

                            function s() {
                                it(`Cannot call ${i} due to unbound types`, l)
                            }
                            t.startsWith("@@") && (t = Symbol[t.substring(2)]), o && e.registeredClass.pureVirtualFunctions.push(t);
                            var u = e.registeredClass.instancePrototype,
                                c = u[t];
                            return void 0 === c || void 0 === c.overloadTable && c.className !== e.name && c.argCount === r - 2 ? (s.argCount = r - 2, s.className = e.name, u[t] = s) : ($e(u, t, i), u[t].overloadTable[r - 2] = s), we([], l, (function (s) {
                                var o = ot(i, s, e, n, a, d);
                                return void 0 === u[t].overloadTable ? (o.argCount = r - 2, u[t] = o) : u[t].overloadTable[r - 2] = o, []
                            })), []
                        }))
                    },
                    H: (e, t) => {
                        Se(e, {
                            name: t = me(t),
                            fromWireType: e => {
                                var t = ht.toValue(e);
                                return ut(e), t
                            },
                            toWireType: (e, t) => ht.toHandle(t),
                            argPackAdvance: 8,
                            readValueFromPointer: ft,
                            destructorFunction: null
                        })
                    },
                    s: (e, t, r) => {
                        Se(e, {
                            name: t = me(t),
                            fromWireType: e => e,
                            toWireType: (e, t) => t,
                            argPackAdvance: 8,
                            readValueFromPointer: _t(t, r),
                            destructorFunction: null
                        })
                    },
                    d: (e, t, r, i, s) => {
                        t = me(t);
                        var n = e => e;
                        if (0 === i) {
                            var a = 32 - 8 * r;
                            n = e => e << a >>> a
                        }
                        var o = t.includes("unsigned");
                        Se(e, {
                            name: t,
                            fromWireType: n,
                            toWireType: o ? function (e, t) {
                                return this.name, t >>> 0
                            } : function (e, t) {
                                return this.name, t
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: gt(t, r, 0 !== i),
                            destructorFunction: null
                        })
                    },
                    b: (e, t, r) => {
                        var i = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][t];

                        function s(e) {
                            var t = x[e >> 2],
                                r = x[e + 4 >> 2];
                            return new i(w.buffer, r, t)
                        }
                        Se(e, {
                            name: r = me(r),
                            fromWireType: s,
                            argPackAdvance: 8,
                            readValueFromPointer: s
                        }, {
                            ignoreDuplicateRegistrations: !0
                        })
                    },
                    r: (e, t) => {
                        var r = "std::string" === (t = me(t));
                        Se(e, {
                            name: t,
                            fromWireType(e) {
                                var t, i = x[e >> 2],
                                    s = e + 4;
                                if (r)
                                    for (var n = s, a = 0; a <= i; ++a) {
                                        var o = s + a;
                                        if (a == i || 0 == S[o]) {
                                            var d = fe(n, o - n);
                                            void 0 === t ? t = d : (t += String.fromCharCode(0), t += d), n = o + 1
                                        }
                                    } else {
                                        var l = new Array(i);
                                        for (a = 0; a < i; ++a) l[a] = String.fromCharCode(S[s + a]);
                                        t = l.join("")
                                    }
                                return Gt(e), t
                            },
                            toWireType(e, t) {
                                var i;
                                t instanceof ArrayBuffer && (t = new Uint8Array(t));
                                var s = "string" == typeof t;
                                s || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int8Array || be("Cannot pass non-string to std::string"), i = r && s ? ee(t) : t.length;
                                var n = $t(4 + i + 1),
                                    a = n + 4;
                                if (x[n >> 2] = i, r && s) te(t, S, a, i + 1);
                                else if (s)
                                    for (var o = 0; o < i; ++o) {
                                        var d = t.charCodeAt(o);
                                        d > 255 && (Gt(a), be("String has UTF-16 code units that do not fit in 8 bits")), S[a + o] = d
                                    } else
                                        for (o = 0; o < i; ++o) S[a + o] = t[o];
                                return null !== e && e.push(Gt, n), n
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: Ye,
                            destructorFunction(e) {
                                Gt(e)
                            }
                        })
                    },
                    k: (e, t, r) => {
                        var i, s, n, a, o;
                        r = me(r), 2 === t ? (i = bt, s = vt, a = wt, n = () => A, o = 1) : 4 === t && (i = St, s = Et, a = At, n = () => x, o = 2), Se(e, {
                            name: r,
                            fromWireType: e => {
                                for (var r, s = x[e >> 2], a = n(), d = e + 4, l = 0; l <= s; ++l) {
                                    var u = e + 4 + l * t;
                                    if (l == s || 0 == a[u >> o]) {
                                        var c = i(d, u - d);
                                        void 0 === r ? r = c : (r += String.fromCharCode(0), r += c), d = u + t
                                    }
                                }
                                return Gt(e), r
                            },
                            toWireType: (e, i) => {
                                "string" != typeof i && be(`Cannot pass non-string to C++ string type ${r}`);
                                var n = a(i),
                                    d = $t(4 + n + t);
                                return x[d >> 2] = n >> o, s(i, d + 4, n + t), null !== e && e.push(Gt, d), d
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: ft,
                            destructorFunction(e) {
                                Gt(e)
                            }
                        })
                    },
                    J: (e, t) => {
                        Se(e, {
                            isVoid: !0,
                            name: t = me(t),
                            argPackAdvance: 0,
                            fromWireType: () => {},
                            toWireType: (e, t) => {}
                        })
                    },
                    g: (e, t, r, i, s) => (e = Bt[e])(t = ht.toValue(t), t[r = xt(r)], i, s),
                    c: ut,
                    h: (e, t, r) => {
                        var i = ((e, t) => {
                                for (var r = new Array(e), i = 0; i < e; ++i) r[i] = Tt(x[t + 4 * i >> 2], "parameter " + i);
                                return r
                            })(e, t),
                            s = i.shift();
                        e--;
                        var n = "return function (obj, func, destructorsRef, args) {\n",
                            a = 0,
                            o = [];
                        0 === r && o.push("obj");
                        for (var d = ["retType"], l = [s], u = 0; u < e; ++u) o.push("arg" + u), d.push("argType" + u), l.push(i[u]), n += `  var arg${u} = argType${u}.readValueFromPointer(args${a?"+"+a:""});\n`, a += i[u].argPackAdvance;
                        for (n += `  var rv = ${1===r?"new func":"func.call"}(${o.join(", ")});\n`, u = 0; u < e; ++u) i[u].deleteObject && (n += `  argType${u}.deleteObject(arg${u});\n`);
                        s.isVoid || (d.push("emval_returnValue"), l.push(kt), n += "  return emval_returnValue(retType, destructorsRef, rv);\n"), n += "};\n", d.push(n);
                        var c, h, f = at(Function, d).apply(null, l),
                            p = `methodCaller<(${i.map((e=>e.name)).join(", ")}) => ${s.name}>`;
                        return c = Ge(p, f), h = Bt.length, Bt.push(c), h
                    },
                    t: e => {
                        e > 4 && (lt.get(e).refcount += 1)
                    },
                    o: e => ht.toHandle(xt(e)),
                    w: () => ht.toHandle({}),
                    u: e => ht.toHandle(fe(e)),
                    f: e => {
                        var t = ht.toValue(e);
                        nt(t), ut(e)
                    },
                    n: (e, t, r) => {
                        e = ht.toValue(e), t = ht.toValue(t), r = ht.toValue(r), e[t] = r
                    },
                    v: (e, t) => {
                        var r = (e = Tt(e, "_emval_take_value")).readValueFromPointer(t);
                        return ht.toHandle(r)
                    },
                    a: () => {
                        M("")
                    },
                    j: () => Date.now(),
                    i: pt,
                    E: (e, t, r) => S.copyWithin(e, t, t + r),
                    z: e => {
                        S.length, M("OOM")
                    },
                    C: (e, t) => {
                        var r = 0;
                        return Ft().forEach(((i, s) => {
                            var n = t + r;
                            x[e + 4 * s >> 2] = n, ((e, t) => {
                                for (var r = 0; r < e.length; ++r) w[t++ >> 0] = e.charCodeAt(r);
                                w[t >> 0] = 0
                            })(i, n), r += i.length + 1
                        })), 0
                    },
                    D: (e, t) => {
                        var r = Ft();
                        x[e >> 2] = r.length;
                        var i = 0;
                        return r.forEach((e => i += e.length + 1)), x[t >> 2] = i, 0
                    },
                    q: function (e) {
                        try {
                            var t = pe.getStreamFromFD(e);
                            return he.close(t), 0
                        } catch (e) {
                            if (void 0 === he || "ErrnoError" !== e.name) throw e;
                            return e.errno
                        }
                    },
                    B: function (e, t) {
                        try {
                            var r = pe.getStreamFromFD(e),
                                i = r.tty ? 2 : he.isDir(r.mode) ? 3 : he.isLink(r.mode) ? 7 : 4;
                            return w[t >> 0] = i, E[t + 2 >> 1] = 0, G = [0, (O = 0, +Math.abs(O) >= 1 ? O > 0 ? +Math.floor(O / 4294967296) >>> 0 : ~~+Math.ceil((O - +(~~O >>> 0)) / 4294967296) >>> 0 : 0)], U[t + 8 >> 2] = G[0], U[t + 12 >> 2] = G[1], G = [0, (O = 0, +Math.abs(O) >= 1 ? O > 0 ? +Math.floor(O / 4294967296) >>> 0 : ~~+Math.ceil((O - +(~~O >>> 0)) / 4294967296) >>> 0 : 0)], U[t + 16 >> 2] = G[0], U[t + 20 >> 2] = G[1], 0
                        } catch (e) {
                            if (void 0 === he || "ErrnoError" !== e.name) throw e;
                            return e.errno
                        }
                    },
                    F: function (e, t, r, i) {
                        try {
                            var s = ((e, t, r, i) => {
                                for (var s = 0, n = 0; n < r; n++) {
                                    var a = x[t >> 2],
                                        o = x[t + 4 >> 2];
                                    t += 8;
                                    var d = he.read(e, w, a, o, i);
                                    if (d < 0) return -1;
                                    if (s += d, d < o) break;
                                    void 0 !== i && (i += d)
                                }
                                return s
                            })(pe.getStreamFromFD(e), t, r);
                            return x[i >> 2] = s, 0
                        } catch (e) {
                            if (void 0 === he || "ErrnoError" !== e.name) throw e;
                            return e.errno
                        }
                    },
                    x: function (e, t, r, i, s) {
                        var n, a, o = (a = r) + 2097152 >>> 0 < 4194305 - !!(n = t) ? (n >>> 0) + 4294967296 * a : NaN;
                        try {
                            if (isNaN(o)) return 61;
                            var d = pe.getStreamFromFD(e);
                            return he.llseek(d, o, i), G = [d.position >>> 0, (O = d.position, +Math.abs(O) >= 1 ? O > 0 ? +Math.floor(O / 4294967296) >>> 0 : ~~+Math.ceil((O - +(~~O >>> 0)) / 4294967296) >>> 0 : 0)], U[s >> 2] = G[0], U[s + 4 >> 2] = G[1], d.getdents && 0 === o && 0 === i && (d.getdents = null), 0
                        } catch (e) {
                            if (void 0 === he || "ErrnoError" !== e.name) throw e;
                            return e.errno
                        }
                    },
                    p: function (e, t, r, i) {
                        try {
                            var s = ((e, t, r, i) => {
                                for (var s = 0, n = 0; n < r; n++) {
                                    var a = x[t >> 2],
                                        o = x[t + 4 >> 2];
                                    t += 8;
                                    var d = he.write(e, w, a, o, i);
                                    if (d < 0) return -1;
                                    s += d, void 0 !== i && (i += d)
                                }
                                return s
                            })(pe.getStreamFromFD(e), t, r);
                            return x[i >> 2] = s, 0
                        } catch (e) {
                            if (void 0 === he || "ErrnoError" !== e.name) throw e;
                            return e.errno
                        }
                    }
                },
                Ot = function () {
                    var e, t, r, n, a = {
                        a: Nt
                    };

                    function o(e, t) {
                        var r, i;
                        return Ot = e.exports, y = Ot.L, r = y.buffer, s.HEAP8 = w = new Int8Array(r), s.HEAP16 = E = new Int16Array(r), s.HEAPU8 = S = new Uint8Array(r), s.HEAPU16 = A = new Uint16Array(r), s.HEAP32 = U = new Int32Array(r), s.HEAPU32 = x = new Uint32Array(r), s.HEAPF32 = B = new Float32Array(r), s.HEAPF64 = T = new Float64Array(r), Xe = Ot.P, i = Ot.M, D.unshift(i), R(), Ot
                    }
                    if (L(), s.instantiateWasm) try {
                        return s.instantiateWasm(a, o)
                    } catch (e) {
                        v(`Module.instantiateWasm callback failed with error: ${e}`), i(e)
                    }
                    return (e = g, t = z, r = a, n = function (e) {
                        o(e.instance)
                    }, e || "function" != typeof WebAssembly.instantiateStreaming || $(t) || H(t) || h || "function" != typeof fetch ? W(t, r, n) : fetch(t, {
                        credentials: "same-origin"
                    }).then((e => WebAssembly.instantiateStreaming(e, r).then(n, (function (e) {
                        return v(`wasm streaming compile failed: ${e}`), v("falling back to ArrayBuffer instantiation"), W(t, r, n)
                    }))))).catch(i), {}
                }(),
                Gt = e => (Gt = Ot.N)(e),
                $t = e => ($t = Ot.O)(e),
                Ht = () => (Ht = Ot.Q)(),
                Vt = e => (Vt = Ot.R)(e),
                Wt = e => (Wt = Ot.T)(e);

            function jt() {
                function e() {
                    zt || (zt = !0, s.calledRun = !0, k || (s.noFSInit || he.init.initialized || he.init(), he.ignorePermissions = !1, j(D), r(s), s.onRuntimeInitialized && s.onRuntimeInitialized(), function () {
                        if (s.postRun)
                            for ("function" == typeof s.postRun && (s.postRun = [s.postRun]); s.postRun.length;) e = s.postRun.shift(), P.unshift(e);
                        var e;
                        j(P)
                    }()))
                }
                I > 0 || (function () {
                    if (s.preRun)
                        for ("function" == typeof s.preRun && (s.preRun = [s.preRun]); s.preRun.length;) e = s.preRun.shift(), C.unshift(e);
                    var e;
                    j(C)
                }(), I > 0 || (s.setStatus ? (s.setStatus("Running..."), setTimeout((function () {
                    setTimeout((function () {
                        s.setStatus("")
                    }), 1), e()
                }), 1)) : e()))
            }
            if (s.dynCall_viiijj = (e, t, r, i, n, a, o, d) => (s.dynCall_viiijj = Ot.U)(e, t, r, i, n, a, o, d), s.dynCall_jij = (e, t, r, i) => (s.dynCall_jij = Ot.V)(e, t, r, i), s.dynCall_jii = (e, t, r) => (s.dynCall_jii = Ot.W)(e, t, r), s.dynCall_jiji = (e, t, r, i, n) => (s.dynCall_jiji = Ot.X)(e, t, r, i, n), s._ff_h264_cabac_tables = 226716, s.___start_em_js = 384976, s.___stop_em_js = 385033, F = function e() {
                    zt || jt(), zt || (F = e)
                }, s.preInit)
                for ("function" == typeof s.preInit && (s.preInit = [s.preInit]); s.preInit.length > 0;) s.preInit.pop()();
            return jt(), t.ready
        }),
        r = 1e-6,
        s = "undefined" != typeof Float32Array ? Float32Array : Array;

    function n() {
        var e = new s(16);
        return s != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0), e[0] = 1, e[5] = 1, e[10] = 1, e[15] = 1, e
    }

    function a(e) {
        return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
    }
    Math.hypot || (Math.hypot = function () {
        for (var e = 0, t = arguments.length; t--;) e += arguments[t] * arguments[t];
        return Math.sqrt(e)
    });
    var o, d = function (e, t, r, i, s, n, a) {
        var o = 1 / (t - r),
            d = 1 / (i - s),
            l = 1 / (n - a);
        return e[0] = -2 * o, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = -2 * d, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 2 * l, e[11] = 0, e[12] = (t + r) * o, e[13] = (s + i) * d, e[14] = (a + n) * l, e[15] = 1, e
    };

    function l(e, t, r) {
        var i = new s(3);
        return i[0] = e, i[1] = t, i[2] = r, i
    }
    o = new s(3), s != Float32Array && (o[0] = 0, o[1] = 0, o[2] = 0);
    var u = (e, t) => {
        t && e.pixelStorei(e.UNPACK_ALIGNMENT, 1);
        const i = function () {
            const t = m(e.VERTEX_SHADER, "\n            attribute vec4 aVertexPosition;\n            attribute vec2 aTexturePosition;\n            uniform mat4 uModelMatrix;\n            uniform mat4 uViewMatrix;\n            uniform mat4 uProjectionMatrix;\n            varying lowp vec2 vTexturePosition;\n            void main(void) {\n              gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * aVertexPosition;\n              vTexturePosition = aTexturePosition;\n            }\n        "),
                r = m(e.FRAGMENT_SHADER, "\n            precision highp float;\n            varying highp vec2 vTexturePosition;\n            uniform int isyuv;\n            uniform sampler2D rgbaTexture;\n            uniform sampler2D yTexture;\n            uniform sampler2D uTexture;\n            uniform sampler2D vTexture;\n\n            const mat4 YUV2RGB = mat4( 1.1643828125, 0, 1.59602734375, -.87078515625,\n                                       1.1643828125, -.39176171875, -.81296875, .52959375,\n                                       1.1643828125, 2.017234375, 0, -1.081390625,\n                                       0, 0, 0, 1);\n\n\n            void main(void) {\n\n                if (isyuv>0) {\n\n                    highp float y = texture2D(yTexture,  vTexturePosition).r;\n                    highp float u = texture2D(uTexture,  vTexturePosition).r;\n                    highp float v = texture2D(vTexture,  vTexturePosition).r;\n                    gl_FragColor = vec4(y, u, v, 1) * YUV2RGB;\n\n                } else {\n                    gl_FragColor =  texture2D(rgbaTexture, vTexturePosition);\n                }\n            }\n        "),
                i = e.createProgram();
            if (e.attachShader(i, t), e.attachShader(i, r), e.linkProgram(i), !e.getProgramParameter(i, e.LINK_STATUS)) return console.log("Unable to initialize the shader program: " + e.getProgramInfoLog(i)), null;
            return i
        }();
        let s = {
                program: i,
                attribLocations: {
                    vertexPosition: e.getAttribLocation(i, "aVertexPosition"),
                    texturePosition: e.getAttribLocation(i, "aTexturePosition")
                },
                uniformLocations: {
                    projectionMatrix: e.getUniformLocation(i, "uProjectionMatrix"),
                    modelMatrix: e.getUniformLocation(i, "uModelMatrix"),
                    viewMatrix: e.getUniformLocation(i, "uViewMatrix"),
                    rgbatexture: e.getUniformLocation(i, "rgbaTexture"),
                    ytexture: e.getUniformLocation(i, "yTexture"),
                    utexture: e.getUniformLocation(i, "uTexture"),
                    vtexture: e.getUniformLocation(i, "vTexture"),
                    isyuv: e.getUniformLocation(i, "isyuv")
                }
            },
            o = function () {
                const t = e.createBuffer();
                e.bindBuffer(e.ARRAY_BUFFER, t);
                e.bufferData(e.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1]), e.STATIC_DRAW);
                var r = [];
                r = r.concat([0, 1], [1, 1], [1, 0], [0, 0]);
                const i = e.createBuffer();
                e.bindBuffer(e.ARRAY_BUFFER, i), e.bufferData(e.ARRAY_BUFFER, new Float32Array(r), e.STATIC_DRAW);
                const s = e.createBuffer();
                e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, s);
                return e.bufferData(e.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), e.STATIC_DRAW), {
                    position: t,
                    texPosition: i,
                    indices: s
                }
            }(),
            u = p(),
            c = p(),
            h = p(),
            f = p();

        function p() {
            let t = e.createTexture();
            return e.bindTexture(e.TEXTURE_2D, t), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), t
        }

        function m(t, r) {
            const i = e.createShader(t);
            return e.shaderSource(i, r), e.compileShader(i), e.getShaderParameter(i, e.COMPILE_STATUS) ? i : (console.log("An error occurred compiling the shaders: " + e.getShaderInfoLog(i)), e.deleteShader(i), null)
        }

        function _(t, i) {
            e.viewport(0, 0, t, i), e.clearColor(0, 0, 0, 0), e.clearDepth(1), e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT);
            const u = n();
            d(u, -1, 1, -1, 1, .1, 100);
            const p = n();
            a(p);
            const m = n();
            ! function (e, t, i, s) {
                var n, o, d, l, u, c, h, f, p, m, _ = t[0],
                    g = t[1],
                    y = t[2],
                    b = s[0],
                    v = s[1],
                    w = s[2],
                    S = i[0],
                    E = i[1],
                    A = i[2];
                Math.abs(_ - S) < r && Math.abs(g - E) < r && Math.abs(y - A) < r ? a(e) : (h = _ - S, f = g - E, p = y - A, n = v * (p *= m = 1 / Math.hypot(h, f, p)) - w * (f *= m), o = w * (h *= m) - b * p, d = b * f - v * h, (m = Math.hypot(n, o, d)) ? (n *= m = 1 / m, o *= m, d *= m) : (n = 0, o = 0, d = 0), l = f * d - p * o, u = p * n - h * d, c = h * o - f * n, (m = Math.hypot(l, u, c)) ? (l *= m = 1 / m, u *= m, c *= m) : (l = 0, u = 0, c = 0), e[0] = n, e[1] = l, e[2] = h, e[3] = 0, e[4] = o, e[5] = u, e[6] = f, e[7] = 0, e[8] = d, e[9] = c, e[10] = p, e[11] = 0, e[12] = -(n * _ + o * g + d * y), e[13] = -(l * _ + u * g + c * y), e[14] = -(h * _ + f * g + p * y), e[15] = 1)
            }(m, l(0, 0, 0), l(0, 0, -1), l(0, 1, 0)); {
                const t = 3,
                    r = e.FLOAT,
                    i = !1,
                    n = 0,
                    a = 0;
                e.bindBuffer(e.ARRAY_BUFFER, o.position), e.vertexAttribPointer(s.attribLocations.vertexPosition, t, r, i, n, a), e.enableVertexAttribArray(s.attribLocations.vertexPosition)
            } {
                const t = 2,
                    r = e.FLOAT,
                    i = !1,
                    n = 0,
                    a = 0;
                e.bindBuffer(e.ARRAY_BUFFER, o.texPosition), e.vertexAttribPointer(s.attribLocations.texturePosition, t, r, i, n, a), e.enableVertexAttribArray(s.attribLocations.texturePosition)
            }
            e.activeTexture(e.TEXTURE0 + 3), e.bindTexture(e.TEXTURE_2D, c), e.activeTexture(e.TEXTURE0 + 4), e.bindTexture(e.TEXTURE_2D, h), e.activeTexture(e.TEXTURE0 + 5), e.bindTexture(e.TEXTURE_2D, f), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, o.indices), e.useProgram(s.program), e.uniformMatrix4fv(s.uniformLocations.projectionMatrix, !1, u), e.uniformMatrix4fv(s.uniformLocations.modelMatrix, !1, p), e.uniformMatrix4fv(s.uniformLocations.viewMatrix, !1, m), e.uniform1i(s.uniformLocations.rgbatexture, 2), e.uniform1i(s.uniformLocations.ytexture, 3), e.uniform1i(s.uniformLocations.utexture, 4), e.uniform1i(s.uniformLocations.vtexture, 5), e.uniform1i(s.uniformLocations.isyuv, 1); {
                const t = 6,
                    r = e.UNSIGNED_SHORT,
                    i = 0;
                e.drawElements(e.TRIANGLES, t, r, i)
            }
        }
        return {
            render: function (t, r, i, s, n) {
                e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, c), e.texImage2D(e.TEXTURE_2D, 0, e.LUMINANCE, t, r, 0, e.LUMINANCE, e.UNSIGNED_BYTE, i), e.activeTexture(e.TEXTURE1), e.bindTexture(e.TEXTURE_2D, h), e.texImage2D(e.TEXTURE_2D, 0, e.LUMINANCE, t / 2, r / 2, 0, e.LUMINANCE, e.UNSIGNED_BYTE, s), e.activeTexture(e.TEXTURE2), e.bindTexture(e.TEXTURE_2D, f), e.texImage2D(e.TEXTURE_2D, 0, e.LUMINANCE, t / 2, r / 2, 0, e.LUMINANCE, e.UNSIGNED_BYTE, n), _(t, r)
            },
            renderYUV: function (t, r, i) {
                let s = i.slice(0, t * r),
                    n = i.slice(t * r, t * r * 5 / 4),
                    a = i.slice(t * r * 5 / 4, t * r * 3 / 2);
                e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, c), e.texImage2D(e.TEXTURE_2D, 0, e.LUMINANCE, t, r, 0, e.LUMINANCE, e.UNSIGNED_BYTE, s), e.activeTexture(e.TEXTURE1), e.bindTexture(e.TEXTURE_2D, h), e.texImage2D(e.TEXTURE_2D, 0, e.LUMINANCE, t / 2, r / 2, 0, e.LUMINANCE, e.UNSIGNED_BYTE, n), e.activeTexture(e.TEXTURE2), e.bindTexture(e.TEXTURE_2D, f), e.texImage2D(e.TEXTURE_2D, 0, e.LUMINANCE, t / 2, r / 2, 0, e.LUMINANCE, e.UNSIGNED_BYTE, a), _(t, r)
            },
            destroy: function () {
                e.deleteProgram(s.program), e.deleteBuffer(o.position), e.deleteBuffer(o.texPosition), e.deleteBuffer(o.indices), e.deleteTexture(u), e.deleteTexture(c), e.deleteTexture(h), e.deleteTexture(f), s = null, o = null, u = null, c = null, h = null, f = null
            }
        }
    };
    const c = 1,
        h = 2,
        f = "fetch",
        p = "websocket",
        m = "player",
        _ = "playbackTF",
        g = "mp4",
        y = 36e5,
        b = {
            playType: m,
            container: "",
            videoBuffer: 400,
            videoBufferDelay: 1e3,
            networkDelay: 1e4,
            messageTime: 5,
            isResize: !0,
            isFullResize: !1,
            isFlv: !1,
            isHls: !1,
            isFmp4: !1,
            isFmp4Private: !1,
            isWebrtc: !1,
            isWebrtcForZLM: !1,
            isWebrtcForSRS: !1,
            isWebrtcForOthers: !1,
            isNakedFlow: !1,
            isMpeg4: !1,
            isAliyunRtc: !1,
            isTs: !1,
            debug: !1,
            debugLevel: "warn",
            debugUuid: "",
            isMulti: !0,
            multiIndex: -1,
            hotKey: !1,
            loadingTimeout: 10,
            heartTimeout: 10,
            timeout: 10,
            pageVisibilityHiddenTimeout: 300,
            loadingTimeoutReplay: !0,
            heartTimeoutReplay: !0,
            loadingTimeoutReplayTimes: 3,
            heartTimeoutReplayTimes: 3,
            heartTimeoutReplayUseLastFrameShow: !0,
            replayUseLastFrameShow: !0,
            replayShowLoadingIcon: !1,
            supportDblclickFullscreen: !1,
            showBandwidth: !1,
            showPerformance: !1,
            mseCorrectTimeDuration: 20,
            mseCorrectAudioTimeDuration: 20,
            keepScreenOn: !0,
            isNotMute: !1,
            muted: !0,
            hasAudio: !0,
            hasVideo: !0,
            operateBtns: {
                fullscreen: !1,
                screenshot: !1,
                stretch: !1,
                play: !1,
                audio: !1,
                record: !1,
                ptz: !1,
                quality: !1,
                zoom: !1,
                close: !1,
                scale: !1,
                logSave: !1,
                fullscreenFn: null,
                fullscreenExitFn: null,
                screenshotFn: null,
                playFn: null,
                pauseFn: null,
                recordFn: null,
                recordStopFn: null
            },
            extendOperateBtns: [],
            contextmenuBtns: [],
            watermarkConfig: {},
            iceServers: [],
            channelId: "",
            controlAutoHide: !1,
            isLogo: !0,
            hasControl: !1,
            loadingIcon: !0,
            loadingIconStyle: {},
            loadingText: "",
            background: "",
            poster: "",
            backgroundLoadingShow: !0,
            loadingBackground: "",
            loadingBackgroundWidth: 0,
            loadingBackgroundHeight: 0,
            decoder: "decoder-pro.js",
            decoderAudio: "decoder-pro-audio.js",
            decoderHard: "decoder-pro-hard.js",
            decoderHardNotWasm: "decoder-pro-hard-not-wasm.js",
            wasmMp4RecorderDecoder: "easyplayer-mp4-recorder-decoder.js",
            decoderWASM: "",
            isDecoderUseCDN: !1,
            url: "",
            rotate: 0,
            mirrorRotate: "none",
            aspectRatio: "default",
            playbackConfig: {
                playList: [],
                fps: "",
                showControl: !0,
                controlType: "simple",
                duration: 0,
                startTime: "",
                showRateBtn: !0,
                rateConfig: [{
                    label: "正常",
                    value: 1
                }, {
                    label: "2.0",
                    value: 2
                }, {
                    label: "4.0",
                    value: 4
                }, {
                    label: "8.0",
                    value: 8
                }, {
                    label: "16.0",
                    value: 16
                }],
                showPrecision: "",
                showPrecisionBtn: !0,
                isCacheBeforeDecodeForFpsRender: !1,
                uiUsePlaybackPause: !0,
                isPlaybackPauseClearCache: !0,
                isUseFpsRender: !1,
                isUseLocalCalculateTime: !1,
                localOneFrameTimestamp: 40,
                supportWheel: !1,
                useWCS: !1,
                useMSE: !1
            },
            qualityConfig: [],
            defaultStreamQuality: "",
            scaleConfig: ["拉伸", "缩放", "正常"],
            forceNoOffscreen: !0,
            hiddenAutoPause: !1,
            protocol: h,
            demuxType: "flv",
            useWasm: !1,
            useMSE: !1,
            useWCS: !1,
            useSIMD: !1,
            useMThreading: !1,
            wcsUseVideoRender: !0,
            wcsUseWebgl2Render: !0,
            wasmUseVideoRender: !0,
            mseUseCanvasRender: !1,
            hlsUseCanvasRender: !1,
            webrtcUseCanvasRender: !1,
            useOffscreen: !1,
            useWebGPU: !1,
            mseDecodeErrorReplay: !0,
            wcsDecodeErrorReplay: !0,
            wasmDecodeErrorReplay: !0,
            simdDecodeErrorReplay: !0,
            simdDecodeErrorReplayType: "wasm",
            autoWasm: !0,
            decoderErrorAutoWasm: !0,
            hardDecodingNotSupportAutoWasm: !0,
            webglAlignmentErrorReplay: !0,
            webglContextLostErrorReplay: !0,
            openWebglAlignment: !1,
            syncAudioAndVideo: !1,
            syncAudioAndVideoDiff: 500,
            playbackDelayTime: 1e3,
            playbackFps: 25,
            playbackForwardMaxRateDecodeIFrame: 4,
            playbackCurrentTimeMove: !0,
            useVideoRender: !0,
            useCanvasRender: !1,
            networkDelayTimeoutReplay: !1,
            recordType: g,
            checkFirstIFrame: !0,
            nakedFlowFps: 25,
            audioEngine: null,
            isShowRecordingUI: !0,
            isShowZoomingUI: !0,
            useFaceDetector: !1,
            useObjectDetector: !1,
            useImageDetector: !1,
            useOcclusionDetector: !1,
            ptzPositionConfig: {},
            ptzShowType: "vertical",
            ptzClickType: "click",
            ptzStopEmitDelay: .3,
            ptzZoomShow: !1,
            ptzApertureShow: !1,
            ptzFocusShow: !1,
            ptzMoreArrowShow: !1,
            ptzCruiseShow: !1,
            ptzFogShow: !1,
            ptzWiperShow: !1,
            ptzSupportDraggable: !1,
            weiXinInAndroidAudioBufferSize: 4800,
            isM7sCrypto: !1,
            m7sCryptoAudio: !1,
            isSm4Crypto: !1,
            isXorCrypto: !1,
            sm4CryptoKey: "",
            m7sCryptoKey: "",
            xorCryptoKey: "",
            cryptoKey: "",
            cryptoIV: "",
            cryptoKeyUrl: "",
            autoResize: !1,
            useWebFullScreen: !1,
            ptsMaxDiff: 3600,
            aiFaceDetectLevel: 2,
            aiFaceDetectWidth: 240,
            aiFaceDetectShowRect: !0,
            aiFaceDetectInterval: 1e3,
            aiFaceDetectRectConfig: {},
            aiObjectDetectLevel: 2,
            aiObjectDetectWidth: 240,
            aiObjectDetectShowRect: !0,
            aiObjectDetectInterval: 1e3,
            aiObjectDetectRectConfig: {},
            aiOcclusionDetectInterval: 1e3,
            aiImageDetectDrop: !1,
            aiImageDetectActive: !1,
            videoRenderSupportScale: !0,
            mediaSourceTsIsMaxDiffReplay: !0,
            controlHtml: "",
            isH265: !1,
            isWebrtcH265: !1,
            supportLockScreenPlayAudio: !0,
            supportHls265: !1,
            isEmitSEI: !1,
            pauseAndNextPlayUseLastFrameShow: !1,
            demuxUseWorker: !0,
            playFailedAndReplay: !0,
            showMessageConfig: {
                webglAlignmentError: "Webgl 渲染失败",
                webglContextLostError: "webgl 上下文丢失",
                mediaSourceH265NotSupport: "不支持硬解码H265",
                mediaSourceFull: "缓冲区已满",
                mediaSourceAppendBufferError: "初始化解码器失败",
                mseSourceBufferError: "解码失败",
                mseAddSourceBufferError: "初始化解码器失败",
                mediaSourceDecoderConfigurationError: "初始化解码器失败",
                mediaSourceTsIsMaxDiff: "流异常",
                mseWidthOrHeightChange: "流异常",
                mediaSourceAudioG711NotSupport: "硬解码不支持G711a/u音频格式",
                mediaSourceUseCanvasRenderPlayFailed: "MediaSource解码使用canvas渲染失败",
                webcodecsH265NotSupport: "不支持硬解码H265",
                webcodecsUnsupportedConfigurationError: "初始化解码器失败",
                webcodecsDecodeConfigureError: "初始化解码器失败",
                webcodecsDecodeError: "解码失败",
                wcsWidthOrHeightChange: "解码失败",
                wasmDecodeError: "解码失败",
                simdDecodeError: "解码失败",
                wasmWidthOrHeightChange: "流异常",
                wasmUseVideoRenderError: "video自动渲染失败",
                videoElementPlayingFailed: "video自动渲染失败",
                simdH264DecodeVideoWidthIsTooLarge: "不支持该分辨率的视频",
                networkDelayTimeout: "网络超时重播失败",
                fetchError: "请求失败",
                streamEnd: "请求结束",
                websocketError: "请求失败",
                webrtcError: "请求失败",
                hlsError: "请求失败",
                decoderWorkerInitError: "初始化worker失败",
                videoElementPlayingFailedForWebrtc: "video自动渲染失败",
                videoInfoError: "解析视频分辨率失败",
                webrtcStreamH265: "webrtc不支持H265",
                delayTimeout: "播放超时重播失败",
                loadingTimeout: "加载超时重播失败",
                loadingTimeoutRetryEnd: "加载超时重播失败",
                delayTimeoutRetryEnd: "播放超时重播失败"
            },
            videoElementPlayingFailedReplay: !0,
            mp4RecordUseWasm: !0,
            mseAutoCleanupSourceBuffer: !0,
            mseAutoCleanupMaxBackwardDuration: 30,
            mseAutoCleanupMinBackwardDuration: 10,
            widthOrHeightChangeReplay: !0,
            simdH264DecodeVideoWidthIsTooLargeReplay: !0,
            mediaSourceAudioG711NotSupportReplay: !0,
            mediaSourceAudioInitTimeoutReplay: !0,
            mediaSourceUseCanvasRenderPlayFailedReplay: !0,
            mediaSourceUseCanvasRenderPlayFailedReplayType: "video",
            widthOrHeightChangeReplayDelayTime: 0,
            ghostWatermarkConfig: {
                on: 5,
                off: 5,
                content: "",
                fontSize: 12,
                color: "white",
                opacity: .15,
                speed: .2
            },
            dynamicWatermarkConfig: {
                content: "",
                speed: .2,
                fontSize: 12,
                color: "white",
                opacity: .15
            },
            isDropSameTimestampGop: !1,
            mseDecodeAudio: !1,
            nakedFlowH265DemuxUseNew: !0,
            extendDomConfig: {
                html: "",
                showBeforePlay: !1,
                showAfterLoading: !0
            },
            disableContextmenu: !1,
            websocket1006ErrorReplay: !1,
            websocket1006ErrorReplayDelayTime: 0,
            streamErrorReplay: !1,
            streamErrorReplayDelayTime: 0,
            streamEndReplay: !1,
            streamEndReplayDelayTime: 0,
            mseDecoderUseWorker: !1,
            openMemoryLog: !1,
            mainThreadFetchUseWorker: !0,
            playFailedAndPausedShowPlayBtn: !0,
            mseCorrectionTimestamp: !0,
            flvDemuxBufferSizeTooLargeReplay: !1,
            flvDemuxBufferSizeMaxLarge: 1048576,
            isCheckInView: !1
        },
        v = "init",
        w = "initVideo",
        S = "render",
        E = "playAudio",
        A = "initAudio",
        U = "audioCode",
        x = "audioNalu",
        B = "audioAACSequenceHeader",
        T = "videoCode",
        k = "videoCodec",
        C = "videoNalu",
        D = "videoPayload",
        P = "audioPayload",
        I = "workerFetch",
        F = "iframeIntervalTs",
        L = "isDropping",
        R = "playbackStreamVideoFps",
        M = "wasmWidthOrHeightChange",
        z = "simdDecodeError",
        N = "simdH264DecodeVideoWidthIsTooLarge",
        O = "closeEnd",
        G = "tempStream",
        $ = "videoSEI",
        H = "flvScriptData",
        V = "aacSequenceHeader",
        W = "videoSequenceHeader",
        j = "flvBufferData",
        q = "checkFirstIFrame",
        Y = "mseHandle",
        K = "mseFirstRenderTime",
        X = "mseError",
        Z = 1,
        J = 2,
        Q = 8,
        ee = 9,
        te = 18,
        re = "init",
        ie = "decode",
        se = "audioDecode",
        ne = "videoDecode",
        ae = "close",
        oe = "updateConfig",
        de = "clearBuffer",
        le = "fetchStream",
        ue = "sendWsMessage",
        ce = "mseUpdateVideoTimestamp",
        he = "streamEnd",
        fe = "streamRate",
        pe = "streamAbps",
        me = "streamVbps",
        _e = "streamDts",
        ge = "streamSuccess",
        ye = "streamStats",
        be = "networkDelayTimeout",
        ve = "websocketOpen",
        we = {
            playError: "playIsNotPauseOrUrlIsNull",
            fetchError: "fetchError",
            websocketError: "websocketError",
            webcodecsH265NotSupport: "webcodecsH265NotSupport",
            webcodecsDecodeError: "webcodecsDecodeError",
            webcodecsUnsupportedConfigurationError: "webcodecsUnsupportedConfigurationError",
            webcodecsDecodeConfigureError: "webcodecsDecodeConfigureError",
            mediaSourceH265NotSupport: "mediaSourceH265NotSupport",
            mediaSourceAudioG711NotSupport: "mediaSourceAudioG711NotSupport",
            mediaSourceAudioInitTimeout: "mediaSourceAudioInitTimeout",
            mediaSourceAudioNoDataTimeout: "mediaSourceAudioNoDataTimeout",
            mediaSourceDecoderConfigurationError: "mediaSourceDecoderConfigurationError",
            mediaSourceFull: "mseSourceBufferFull",
            mseSourceBufferError: "mseSourceBufferError",
            mseAddSourceBufferError: "mseAddSourceBufferError",
            mediaSourceAppendBufferError: "mediaSourceAppendBufferError",
            mediaSourceTsIsMaxDiff: "mediaSourceTsIsMaxDiff",
            mediaSourceUseCanvasRenderPlayFailed: "mediaSourceUseCanvasRenderPlayFailed",
            mediaSourceBufferedIsZeroError: "mediaSourceBufferedIsZeroError",
            wasmDecodeError: "wasmDecodeError",
            wasmUseVideoRenderError: "wasmUseVideoRenderError",
            hlsError: "hlsError",
            webrtcError: "webrtcError",
            webrtcClosed: "webrtcClosed",
            webrtcIceCandidateError: "webrtcIceCandidateError",
            webglAlignmentError: "webglAlignmentError",
            wasmWidthOrHeightChange: "wasmWidthOrHeightChange",
            mseWidthOrHeightChange: "mseWidthOrHeightChange",
            wcsWidthOrHeightChange: "wcsWidthOrHeightChange",
            widthOrHeightChange: "widthOrHeightChange",
            tallWebsocketClosedByError: "tallWebsocketClosedByError",
            flvDemuxBufferSizeTooLarge: "flvDemuxBufferSizeTooLarge",
            wasmDecodeVideoNoResponseError: "wasmDecodeVideoNoResponseError",
            audioChannelError: "audioChannelError",
            simdH264DecodeVideoWidthIsTooLarge: "simdH264DecodeVideoWidthIsTooLarge",
            simdDecodeError: "simdDecodeError",
            webglContextLostError: "webglContextLostError",
            videoElementPlayingFailed: "videoElementPlayingFailed",
            videoElementPlayingFailedForWebrtc: "videoElementPlayingFailedForWebrtc",
            decoderWorkerInitError: "decoderWorkerInitError",
            videoInfoError: "videoInfoError",
            videoCodecIdError: "videoCodecIdError",
            streamEnd: he,
            delayTimeout: "delayTimeout",
            loadingTimeout: "loadingTimeout",
            networkDelayTimeout: be,
            aliyunRtcError: "aliyunRtcError",
            ...{
                talkStreamError: "talkStreamError",
                talkStreamClose: "talkStreamClose"
            }
        },
        Se = 1,
        Ee = 7,
        Ae = 12,
        Ue = 99,
        xe = {
            h264: "H264(AVC)",
            h265: "H265(HEVC)"
        },
        Be = {
            AAC: 10,
            ALAW: 7,
            MULAW: 8,
            MP3: 2
        },
        Te = {
            sps: 7,
            pps: 8,
            iFrame: 5,
            kUnspecified: 0,
            kSliceNonIDR: 1,
            kSliceDPA: 2,
            kSliceDPB: 3,
            kSliceDPC: 4,
            kSliceIDR: 5,
            kSliceSEI: 6,
            kSliceSPS: 7,
            kSlicePPS: 8,
            kSliceAUD: 9,
            kEndOfSequence: 10,
            kEndOfStream: 11,
            kFiller: 12,
            kSPSExt: 13,
            kReserved0: 14
        },
        ke = {
            pFrame: 1,
            iFrame: 19,
            kSliceIDR_W_RADL: 19,
            nLp: 20,
            kSliceIDR_N_LP: 20,
            craNut: 21,
            kSliceCRA_NUT: 21,
            vps: 32,
            kSliceVPS: 32,
            sps: 33,
            kSliceSPS: 33,
            pps: 34,
            kSlicePPS: 34,
            kSliceAUD: 35,
            sei: 39,
            prefixSei: 39,
            suffixSei: 40
        },
        Ce = "key",
        De = "delta",
        Pe = {
            avc: 'video/mp4; codecs="avc1.64002A"',
            hev: 'video/mp4; codecs="hev1.1.6.L123.b0"',
            hev2: 'video/mp4;codecs="hev1.1.6.L120.90"',
            hev3: 'video/mp4;codecs="hev1.2.4.L120.90"',
            hev4: 'video/mp4;codecs="hev1.3.E.L120.90"',
            hev5: 'video/mp4;codecs="hev1.4.10.L120.90"'
        },
        Ie = "ended",
        Fe = "open",
        Le = "closed",
        Re = "sourceclose",
        Me = "sourceopen",
        ze = "sourceended",
        Ne = {
            h264: "avc",
            h265: "hevc"
        },
        Oe = "AbortError",
        Ge = {
            sequenceHeader: 0,
            nalu: 1
        },
        $e = {
            keyFrame: 1,
            interFrame: 2
        },
        He = 1,
        Ve = "idle",
        We = "buffering",
        je = "complete",
        qe = 1,
        Ye = 2,
        Ke = 0,
        Xe = 1,
        Ze = 3,
        Je = 16;

    function Qe(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports
    }
    Qe((function (e) {
        ! function () {
            var t = "undefined" != typeof window && void 0 !== window.document ? window.document : {},
                r = e.exports,
                i = function () {
                    for (var e, r = [
                            ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                            ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                            ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                            ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                            ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                        ], i = 0, s = r.length, n = {}; i < s; i++)
                        if ((e = r[i]) && e[1] in t) {
                            for (i = 0; i < e.length; i++) n[r[0][i]] = e[i];
                            return n
                        } return !1
                }(),
                s = {
                    change: i.fullscreenchange,
                    error: i.fullscreenerror
                },
                n = {
                    request: function (e, r) {
                        return new Promise(function (s, n) {
                            var a = function () {
                                this.off("change", a), s()
                            }.bind(this);
                            this.on("change", a);
                            var o = (e = e || t.documentElement)[i.requestFullscreen](r);
                            o instanceof Promise && o.then(a).catch(n)
                        }.bind(this))
                    },
                    exit: function () {
                        return new Promise(function (e, r) {
                            if (this.isFullscreen) {
                                var s = function () {
                                    this.off("change", s), e()
                                }.bind(this);
                                this.on("change", s);
                                var n = t[i.exitFullscreen]();
                                n instanceof Promise && n.then(s).catch(r)
                            } else e()
                        }.bind(this))
                    },
                    toggle: function (e, t) {
                        return this.isFullscreen ? this.exit() : this.request(e, t)
                    },
                    onchange: function (e) {
                        this.on("change", e)
                    },
                    onerror: function (e) {
                        this.on("error", e)
                    },
                    on: function (e, r) {
                        var i = s[e];
                        i && t.addEventListener(i, r, !1)
                    },
                    off: function (e, r) {
                        var i = s[e];
                        i && t.removeEventListener(i, r, !1)
                    },
                    raw: i
                };
            i ? (Object.defineProperties(n, {
                isFullscreen: {
                    get: function () {
                        return Boolean(t[i.fullscreenElement])
                    }
                },
                element: {
                    enumerable: !0,
                    get: function () {
                        return t[i.fullscreenElement]
                    }
                },
                isEnabled: {
                    enumerable: !0,
                    get: function () {
                        return Boolean(t[i.fullscreenEnabled])
                    }
                }
            }), r ? e.exports = n : window.screenfull = n) : r ? e.exports = {
                isEnabled: !1
            } : window.screenfull = {
                isEnabled: !1
            }
        }()
    })).isEnabled;
    class et {
        constructor(e) {
            this._buffer = e, this._buffer_index = 0, this._total_bytes = e.byteLength, this._total_bits = 8 * e.byteLength, this._current_word = 0, this._current_word_bits_left = 0
        }
        destroy() {
            this._buffer = null
        }
        _fillCurrentWord() {
            let e = this._total_bytes - this._buffer_index;
            if (e <= 0) return void console.error("ExpGolomb: _fillCurrentWord() but no bytes available", this._total_bytes, this._buffer_index);
            let t = Math.min(4, e),
                r = new Uint8Array(4);
            r.set(this._buffer.subarray(this._buffer_index, this._buffer_index + t)), this._current_word = new DataView(r.buffer).getUint32(0, !1), this._buffer_index += t, this._current_word_bits_left = 8 * t
        }
        readBits(e) {
            if (e > 32 && console.error("ExpGolomb: readBits() bits exceeded max 32bits!"), e <= this._current_word_bits_left) {
                let t = this._current_word >>> 32 - e;
                return this._current_word <<= e, this._current_word_bits_left -= e, t
            }
            let t = this._current_word_bits_left ? this._current_word : 0;
            t >>>= 32 - this._current_word_bits_left;
            let r = e - this._current_word_bits_left;
            this._fillCurrentWord();
            let i = Math.min(r, this._current_word_bits_left),
                s = this._current_word >>> 32 - i;
            return this._current_word <<= i, this._current_word_bits_left -= i, t = t << i | s, t
        }
        readBool() {
            return 1 === this.readBits(1)
        }
        readByte() {
            return this.readBits(8)
        }
        _skipLeadingZero() {
            let e;
            for (e = 0; e < this._current_word_bits_left; e++)
                if (0 != (this._current_word & 2147483648 >>> e)) return this._current_word <<= e, this._current_word_bits_left -= e, e;
            return this._fillCurrentWord(), e + this._skipLeadingZero()
        }
        readUEG() {
            let e = this._skipLeadingZero();
            return this.readBits(e + 1) - 1
        }
        readSEG() {
            let e = this.readUEG();
            return 1 & e ? e + 1 >>> 1 : -1 * (e >>> 1)
        }
    }

    function tt(e) {
        let {
            profile: t,
            sampleRate: r,
            channel: i
        } = e;
        return new Uint8Array([175, 0, t << 3 | (14 & r) >> 1, (1 & r) << 7 | i << 3])
    }

    function rt(e) {
        return it(e) && e[1] === Ge.sequenceHeader
    }

    function it(e) {
        return e[0] >> 4 === Be.AAC
    }
    const st = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350],
        nt = st,
        at = st,
        ot = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
    class dt {
        constructor(e) {
            this.data_ = e, this.eof_flag_ = !1, this.current_syncword_offset_ = this.findNextSyncwordOffset(0), this.eof_flag_ && console.error("Could not found ADTS syncword until payload end")
        }
        findNextSyncwordOffset(e) {
            let t = e,
                r = this.data_;
            for (;;) {
                if (t + 7 >= r.byteLength) return this.eof_flag_ = !0, r.byteLength;
                if (4095 === (r[t + 0] << 8 | r[t + 1]) >>> 4) return t;
                t++
            }
        }
        readNextAACFrame() {
            let e = this.data_,
                t = null;
            for (; null == t && !this.eof_flag_;) {
                let r = this.current_syncword_offset_,
                    i = (8 & e[r + 1]) >>> 3,
                    s = (6 & e[r + 1]) >>> 1,
                    n = 1 & e[r + 1],
                    a = (192 & e[r + 2]) >>> 6,
                    o = (60 & e[r + 2]) >>> 2,
                    d = (1 & e[r + 2]) << 2 | (192 & e[r + 3]) >>> 6,
                    l = (3 & e[r + 3]) << 11 | e[r + 4] << 3 | (224 & e[r + 5]) >>> 5;
                if (e[r + 6], r + l > this.data_.byteLength) {
                    this.eof_flag_ = !0, this.has_last_incomplete_data = !0;
                    break
                }
                let u = 1 === n ? 7 : 9,
                    c = l - u;
                r += u;
                let h = this.findNextSyncwordOffset(r + c);
                if (this.current_syncword_offset_ = h, 0 !== i && 1 !== i || 0 !== s) continue;
                let f = e.subarray(r, r + c);
                t = {}, t.audio_object_type = a + 1, t.sampling_freq_index = o, t.sampling_frequency = nt[o], t.channel_config = d, t.data = f
            }
            return t
        }
        hasIncompleteData() {
            return this.has_last_incomplete_data
        }
        getIncompleteData() {
            return this.has_last_incomplete_data ? this.data_.subarray(this.current_syncword_offset_) : null
        }
    }
    class lt {
        constructor(e) {
            this.data_ = e, this.eof_flag_ = !1, this.current_syncword_offset_ = this.findNextSyncwordOffset(0), this.eof_flag_ && console.error("Could not found ADTS syncword until payload end")
        }
        findNextSyncwordOffset(e) {
            let t = e,
                r = this.data_;
            for (;;) {
                if (t + 1 >= r.byteLength) return this.eof_flag_ = !0, r.byteLength;
                if (695 === (r[t + 0] << 3 | r[t + 1] >>> 5)) return t;
                t++
            }
        }
        getLATMValue(e) {
            let t = e.readBits(2),
                r = 0;
            for (let i = 0; i <= t; i++) r <<= 8, r |= e.readByte();
            return r
        }
        readNextAACFrame(e) {
            let t = this.data_,
                r = null;
            for (; null == r && !this.eof_flag_;) {
                let i = this.current_syncword_offset_,
                    s = (31 & t[i + 1]) << 8 | t[i + 2];
                if (i + 3 + s >= this.data_.byteLength) {
                    this.eof_flag_ = !0, this.has_last_incomplete_data = !0;
                    break
                }
                let n = new et(t.subarray(i + 3, i + 3 + s)),
                    a = null;
                if (n.readBool()) {
                    if (null == e) {
                        console.warn("StreamMuxConfig Missing"), this.current_syncword_offset_ = this.findNextSyncwordOffset(i + 3 + s), n.destroy();
                        continue
                    }
                    a = e
                } else {
                    let e = n.readBool();
                    if (e && n.readBool()) {
                        console.error("audioMuxVersionA is Not Supported"), n.destroy();
                        break
                    }
                    if (e && this.getLATMValue(n), !n.readBool()) {
                        console.error("allStreamsSameTimeFraming zero is Not Supported"), n.destroy();
                        break
                    }
                    if (0 !== n.readBits(6)) {
                        console.error("more than 2 numSubFrames Not Supported"), n.destroy();
                        break
                    }
                    if (0 !== n.readBits(4)) {
                        console.error("more than 2 numProgram Not Supported"), n.destroy();
                        break
                    }
                    if (0 !== n.readBits(3)) {
                        console.error("more than 2 numLayer Not Supported"), n.destroy();
                        break
                    }
                    let t = e ? this.getLATMValue(n) : 0,
                        r = n.readBits(5);
                    t -= 5;
                    let i = n.readBits(4);
                    t -= 4;
                    let s = n.readBits(4);
                    t -= 4, n.readBits(3), t -= 3, t > 0 && n.readBits(t);
                    let o = n.readBits(3);
                    if (0 !== o) {
                        console.error(`frameLengthType = ${o}. Only frameLengthType = 0 Supported`), n.destroy();
                        break
                    }
                    n.readByte();
                    let d = n.readBool();
                    if (d)
                        if (e) this.getLATMValue(n);
                        else {
                            let e = 0;
                            for (;;) {
                                e <<= 8;
                                let t = n.readBool();
                                if (e += n.readByte(), !t) break
                            }
                            console.log(e)
                        } n.readBool() && n.readByte(), a = {}, a.audio_object_type = r, a.sampling_freq_index = i, a.sampling_frequency = nt[a.sampling_freq_index], a.channel_config = s, a.other_data_present = d
                }
                let o = 0;
                for (;;) {
                    let e = n.readByte();
                    if (o += e, 255 !== e) break
                }
                let d = new Uint8Array(o);
                for (let e = 0; e < o; e++) d[e] = n.readByte();
                r = {}, r.audio_object_type = a.audio_object_type, r.sampling_freq_index = a.sampling_freq_index, r.sampling_frequency = nt[a.sampling_freq_index], r.channel_config = a.channel_config, r.other_data_present = a.other_data_present, r.data = d, this.current_syncword_offset_ = this.findNextSyncwordOffset(i + 3 + s)
            }
            return r
        }
        hasIncompleteData() {
            return this.has_last_incomplete_data
        }
        getIncompleteData() {
            return this.has_last_incomplete_data ? this.data_.subarray(this.current_syncword_offset_) : null
        }
    }

    function ut(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (e[t] << 24 >>> 0) + (e[t + 1] << 16) + (e[t + 2] << 8) + (e[t + 3] || 0)
    }

    function ct(e) {
        const t = e.byteLength,
            r = new Uint8Array(4);
        r[0] = t >>> 24 & 255, r[1] = t >>> 16 & 255, r[2] = t >>> 8 & 255, r[3] = 255 & t;
        const i = new Uint8Array(t + 4);
        return i.set(r, 0), i.set(e, 4), i
    }

    function ht(e, t) {
        let r = null;
        return t ? e.length >= 28 && (r = 1 + (3 & e[26])) : e.length >= 12 && (r = 1 + (3 & e[9])), r
    }

    function ft() {
        return (new Date).getTime()
    }

    function pt() {
        return performance && "function" == typeof performance.now ? performance.now() : Date.now()
    }

    function mt(e) {
        let t = 0,
            r = pt();
        return i => {
            if (s = i, "[object Number]" !== Object.prototype.toString.call(s)) return;
            var s;
            t += i;
            const n = pt(),
                a = n - r;
            a >= 1e3 && (e(t / a * 1e3), r = n, t = 0)
        }
    }

    function _t(e) {
        return null == e
    }

    function gt(e) {
        return "function" == typeof e
    }

    function yt(e) {
        e.close()
    }

    function bt(e, t) {
        t && (e = e.filter((e => e.type && e.type === t)));
        let r = e[0],
            i = null,
            s = 1;
        if (e.length > 0) {
            let t = e[1];
            t && t.ts - r.ts > 1e5 && (r = t, s = 2)
        }
        if (r)
            for (let n = s; n < e.length; n++) {
                let s = e[n];
                if (t && s.type && s.type !== t && (s = null), s) {
                    if (s.ts - r.ts >= 1e3) {
                        e[n - 1].ts - r.ts < 1e3 && (i = n + 1)
                    }
                }
            }
        return i
    }

    function vt() {
        return function (e) {
            let t = "";
            if ("object" == typeof e) try {
                t = JSON.stringify(e), t = JSON.parse(t)
            } catch (r) {
                t = e
            } else t = e;
            return t
        }(b)
    }

    function wt(e) {
        return e[0] >> 4 === $e.keyFrame && e[1] === Ge.sequenceHeader
    }

    function St(e) {
        return !0 === e || "true" === e
    }

    function Et(e) {
        return !0 !== e && "true" !== e
    }

    function At(e, t) {
        const r = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
        for (var i = arguments.length, s = new Array(i > 2 ? i - 2 : 0), n = 2; n < i; n++) s[n - 2] = arguments[n];
        r ? console.log(...s) : "log" == t || "warn" == t ? console.log(`%c ${e} %c ${Ut(new Date,"hh:mm:ss")} %c`, "background:#2d8cf0; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;margin:5px 0", "background:#67C23A; padding: 1px; border-radius: 0 3px 3px 0; color: #fff;margin-right: 10px", "background:transparent", ...s) : "error" == t && console.log(`%c ${e} %c ${Ut(new Date,"hh:mm:ss")} %c`, "background:#2d8cf0; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;margin:5px 0", "background:#F56C6C; padding: 1px; border-radius: 0 3px 3px 0; color: #fff;margin-right: 10px", "background:transparent", ...s)
    }

    function Ut(e, t) {
        let r;
        const i = {
            "Y+": e.getFullYear().toString(),
            "M+": (e.getMonth() + 1).toString(),
            "D+": e.getDate().toString(),
            "h+": e.getHours().toString(),
            "m+": e.getMinutes().toString(),
            "s+": e.getSeconds().toString()
        };
        for (const e in i) r = new RegExp("(" + e + ")").exec(t), r && (t = t.replace(r[1], 1 === r[1].length ? i[e] : i[e].padStart(r[1].length, "0")));
        return t
    }(() => {
        try {
            if ("object" == typeof WebAssembly && "function" == typeof WebAssembly.instantiate) {
                const e = new WebAssembly.Module(Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0));
                if (e instanceof WebAssembly.Module) return new WebAssembly.Instance(e) instanceof WebAssembly.Instance
            }
        } catch (e) {}
    })();
    var xt = function (e, t, r, i) {
        return new(r || (r = Promise))((function (s, n) {
            function a(e) {
                try {
                    d(i.next(e))
                } catch (e) {
                    n(e)
                }
            }

            function o(e) {
                try {
                    d(i.throw(e))
                } catch (e) {
                    n(e)
                }
            }

            function d(e) {
                var t;
                e.done ? s(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) {
                    e(t)
                }))).then(a, o)
            }
            d((i = i.apply(e, t || [])).next())
        }))
    };
    const Bt = Symbol(32),
        Tt = Symbol(16),
        kt = Symbol(8);
    class Ct {
        constructor(e) {
            this.g = e, this.consumed = 0, e && (this.need = e.next().value)
        }
        setG(e) {
            this.g = e, this.demand(e.next().value, !0)
        }
        consume() {
            this.buffer && this.consumed && (this.buffer.copyWithin(0, this.consumed), this.buffer = this.buffer.subarray(0, this.buffer.length - this.consumed), this.consumed = 0)
        }
        demand(e, t) {
            return t && this.consume(), this.need = e, this.flush()
        }
        read(e) {
            return xt(this, void 0, void 0, (function* () {
                return this.lastReadPromise && (yield this.lastReadPromise), this.lastReadPromise = new Promise(((t, r) => {
                    var i;
                    this.reject = r, this.resolve = e => {
                        delete this.lastReadPromise, delete this.resolve, delete this.need, t(e)
                    };
                    this.demand(e, !0) || null === (i = this.pull) || void 0 === i || i.call(this, e)
                }))
            }))
        }
        readU32() {
            return this.read(Bt)
        }
        readU16() {
            return this.read(Tt)
        }
        readU8() {
            return this.read(kt)
        }
        close() {
            var e;
            this.g && this.g.return(), this.buffer && this.buffer.subarray(0, 0), null === (e = this.reject) || void 0 === e || e.call(this, new Error("EOF")), delete this.lastReadPromise
        }
        flush() {
            if (!this.buffer || !this.need) return;
            let e = null;
            const t = this.buffer.subarray(this.consumed);
            let r = 0;
            const i = e => t.length < (r = e);
            if ("number" == typeof this.need) {
                if (i(this.need)) return;
                e = t.subarray(0, r)
            } else if (this.need === Bt) {
                if (i(4)) return;
                e = t[0] << 24 | t[1] << 16 | t[2] << 8 | t[3]
            } else if (this.need === Tt) {
                if (i(2)) return;
                e = t[0] << 8 | t[1]
            } else if (this.need === kt) {
                if (i(1)) return;
                e = t[0]
            } else if ("buffer" in this.need) {
                if ("byteOffset" in this.need) {
                    if (i(this.need.byteLength - this.need.byteOffset)) return;
                    new Uint8Array(this.need.buffer, this.need.byteOffset).set(t.subarray(0, r)), e = this.need
                } else if (this.g) return void this.g.throw(new Error("Unsupported type"))
            } else {
                if (i(this.need.byteLength)) return;
                new Uint8Array(this.need).set(t.subarray(0, r)), e = this.need
            }
            return this.consumed += r, this.g ? this.demand(this.g.next(e).value, !0) : this.resolve && this.resolve(e), e
        }
        write(e) {
            if (e instanceof Uint8Array ? this.malloc(e.length).set(e) : "buffer" in e ? this.malloc(e.byteLength).set(new Uint8Array(e.buffer, e.byteOffset, e.byteLength)) : this.malloc(e.byteLength).set(new Uint8Array(e)), !this.g && !this.resolve) return new Promise((e => this.pull = e));
            this.flush()
        }
        writeU32(e) {
            this.malloc(4).set([e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e]), this.flush()
        }
        writeU16(e) {
            this.malloc(2).set([e >> 8 & 255, 255 & e]), this.flush()
        }
        writeU8(e) {
            this.malloc(1)[0] = e, this.flush()
        }
        malloc(e) {
            if (this.buffer) {
                const t = this.buffer.length,
                    r = t + e;
                if (r <= this.buffer.buffer.byteLength - this.buffer.byteOffset) this.buffer = new Uint8Array(this.buffer.buffer, this.buffer.byteOffset, r);
                else {
                    const e = new Uint8Array(r);
                    e.set(this.buffer), this.buffer = e
                }
                return this.buffer.subarray(t, r)
            }
            return this.buffer = new Uint8Array(e), this.buffer
        }
    }
    Ct.U32 = Bt, Ct.U16 = Tt, Ct.U8 = kt;
    class Dt {
        constructor(e) {
            this.log = function (t) {
                if (e._opt.debug) {
                    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) i[s - 1] = arguments[s];
                    At(`EasyPlayerPro[${t}]`, "log", ...i)
                }
            }, this.warn = function (t) {
                if (e._opt.debug) {
                    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) i[s - 1] = arguments[s];
                    At(`EasyPlayerPro[${t}]`, "warn", ...i)
                }
            }, this.error = function (e) {
                for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
                At(`EasyPlayerPro[${e}]`, "error", ...r)
            }
        }
    }
    class Pt {
        static _ebsp2rbsp(e) {
            let t = e,
                r = t.byteLength,
                i = new Uint8Array(r),
                s = 0;
            for (let e = 0; e < r; e++) e >= 2 && 3 === t[e] && 0 === t[e - 1] && 0 === t[e - 2] || (i[s] = t[e], s++);
            return new Uint8Array(i.buffer, 0, s)
        }
        static parseSPS(e) {
            let t = Pt._ebsp2rbsp(e),
                r = new et(t);
            r.readByte();
            let i = r.readByte();
            r.readByte();
            let s = r.readByte();
            r.readUEG();
            let n = Pt.getProfileString(i),
                a = Pt.getLevelString(s),
                o = 1,
                d = 420,
                l = [0, 420, 422, 444],
                u = 8;
            if ((100 === i || 110 === i || 122 === i || 244 === i || 44 === i || 83 === i || 86 === i || 118 === i || 128 === i || 138 === i || 144 === i) && (o = r.readUEG(), 3 === o && r.readBits(1), o <= 3 && (d = l[o]), u = r.readUEG() + 8, r.readUEG(), r.readBits(1), r.readBool())) {
                let e = 3 !== o ? 8 : 12;
                for (let t = 0; t < e; t++) r.readBool() && (t < 6 ? Pt._skipScalingList(r, 16) : Pt._skipScalingList(r, 64))
            }
            r.readUEG();
            let c = r.readUEG();
            if (0 === c) r.readUEG();
            else if (1 === c) {
                r.readBits(1), r.readSEG(), r.readSEG();
                let e = r.readUEG();
                for (let t = 0; t < e; t++) r.readSEG()
            }
            let h = r.readUEG();
            r.readBits(1);
            let f = r.readUEG(),
                p = r.readUEG(),
                m = r.readBits(1);
            0 === m && r.readBits(1), r.readBits(1);
            let _ = 0,
                g = 0,
                y = 0,
                b = 0;
            r.readBool() && (_ = r.readUEG(), g = r.readUEG(), y = r.readUEG(), b = r.readUEG());
            let v = 1,
                w = 1,
                S = 0,
                E = !0,
                A = 0,
                U = 0;
            if (r.readBool()) {
                if (r.readBool()) {
                    let e = r.readByte();
                    e > 0 && e < 16 ? (v = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2][e - 1], w = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1][e - 1]) : 255 === e && (v = r.readByte() << 8 | r.readByte(), w = r.readByte() << 8 | r.readByte())
                }
                if (r.readBool() && r.readBool(), r.readBool() && (r.readBits(4), r.readBool() && r.readBits(24)), r.readBool() && (r.readUEG(), r.readUEG()), r.readBool()) {
                    let e = r.readBits(32),
                        t = r.readBits(32);
                    E = r.readBool(), A = t, U = 2 * e, S = A / U
                }
            }
            let x = 1;
            1 === v && 1 === w || (x = v / w);
            let B = 0,
                T = 0;
            if (0 === o) B = 1, T = 2 - m;
            else {
                B = 3 === o ? 1 : 2, T = (1 === o ? 2 : 1) * (2 - m)
            }
            let k = 16 * (f + 1),
                C = 16 * (p + 1) * (2 - m);
            k -= (_ + g) * B, C -= (y + b) * T;
            let D = Math.ceil(k * x);
            return r.destroy(), r = null, {
                profile_string: n,
                level_string: a,
                bit_depth: u,
                ref_frames: h,
                chroma_format: d,
                chroma_format_string: Pt.getChromaFormatString(d),
                frame_rate: {
                    fixed: E,
                    fps: S,
                    fps_den: U,
                    fps_num: A
                },
                sar_ratio: {
                    width: v,
                    height: w
                },
                codec_size: {
                    width: k,
                    height: C
                },
                present_size: {
                    width: D,
                    height: C
                }
            }
        }
        static parseSPS$2(e) {
            let t = e.subarray(1, 4),
                r = "avc1.";
            for (let e = 0; e < 3; e++) {
                let i = t[e].toString(16);
                i.length < 2 && (i = "0" + i), r += i
            }
            let i = Pt._ebsp2rbsp(e),
                s = new et(i);
            s.readByte();
            let n = s.readByte();
            s.readByte();
            let a = s.readByte();
            s.readUEG();
            let o = Pt.getProfileString(n),
                d = Pt.getLevelString(a),
                l = 1,
                u = 420,
                c = [0, 420, 422, 444],
                h = 8,
                f = 8;
            if ((100 === n || 110 === n || 122 === n || 244 === n || 44 === n || 83 === n || 86 === n || 118 === n || 128 === n || 138 === n || 144 === n) && (l = s.readUEG(), 3 === l && s.readBits(1), l <= 3 && (u = c[l]), h = s.readUEG() + 8, f = s.readUEG() + 8, s.readBits(1), s.readBool())) {
                let e = 3 !== l ? 8 : 12;
                for (let t = 0; t < e; t++) s.readBool() && (t < 6 ? Pt._skipScalingList(s, 16) : Pt._skipScalingList(s, 64))
            }
            s.readUEG();
            let p = s.readUEG();
            if (0 === p) s.readUEG();
            else if (1 === p) {
                s.readBits(1), s.readSEG(), s.readSEG();
                let e = s.readUEG();
                for (let t = 0; t < e; t++) s.readSEG()
            }
            let m = s.readUEG();
            s.readBits(1);
            let _ = s.readUEG(),
                g = s.readUEG(),
                y = s.readBits(1);
            0 === y && s.readBits(1), s.readBits(1);
            let b = 0,
                v = 0,
                w = 0,
                S = 0;
            s.readBool() && (b = s.readUEG(), v = s.readUEG(), w = s.readUEG(), S = s.readUEG());
            let E = 1,
                A = 1,
                U = 0,
                x = !0,
                B = 0,
                T = 0;
            if (s.readBool()) {
                if (s.readBool()) {
                    let e = s.readByte();
                    e > 0 && e < 16 ? (E = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2][e - 1], A = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1][e - 1]) : 255 === e && (E = s.readByte() << 8 | s.readByte(), A = s.readByte() << 8 | s.readByte())
                }
                if (s.readBool() && s.readBool(), s.readBool() && (s.readBits(4), s.readBool() && s.readBits(24)), s.readBool() && (s.readUEG(), s.readUEG()), s.readBool()) {
                    let e = s.readBits(32),
                        t = s.readBits(32);
                    x = s.readBool(), B = t, T = 2 * e, U = B / T
                }
            }
            let k = 1;
            1 === E && 1 === A || (k = E / A);
            let C = 0,
                D = 0;
            if (0 === l) C = 1, D = 2 - y;
            else {
                C = 3 === l ? 1 : 2, D = (1 === l ? 2 : 1) * (2 - y)
            }
            let P = 16 * (_ + 1),
                I = 16 * (g + 1) * (2 - y);
            P -= (b + v) * C, I -= (w + S) * D;
            let F = Math.ceil(P * k);
            return s.destroy(), s = null, {
                codec_mimetype: r,
                profile_idc: n,
                level_idc: a,
                profile_string: o,
                level_string: d,
                chroma_format_idc: l,
                bit_depth: h,
                bit_depth_luma: h,
                bit_depth_chroma: f,
                ref_frames: m,
                chroma_format: u,
                chroma_format_string: Pt.getChromaFormatString(u),
                frame_rate: {
                    fixed: x,
                    fps: U,
                    fps_den: T,
                    fps_num: B
                },
                sar_ratio: {
                    width: E,
                    height: A
                },
                codec_size: {
                    width: P,
                    height: I
                },
                present_size: {
                    width: F,
                    height: I
                }
            }
        }
        static _skipScalingList(e, t) {
            let r = 8,
                i = 8,
                s = 0;
            for (let n = 0; n < t; n++) 0 !== i && (s = e.readSEG(), i = (r + s + 256) % 256), r = 0 === i ? r : i
        }
        static getProfileString(e) {
            switch (e) {
                case 66:
                    return "Baseline";
                case 77:
                    return "Main";
                case 88:
                    return "Extended";
                case 100:
                    return "High";
                case 110:
                    return "High10";
                case 122:
                    return "High422";
                case 244:
                    return "High444";
                default:
                    return "Unknown"
            }
        }
        static getLevelString(e) {
            return (e / 10).toFixed(1)
        }
        static getChromaFormatString(e) {
            switch (e) {
                case 420:
                    return "4:2:0";
                case 422:
                    return "4:2:2";
                case 444:
                    return "4:4:4";
                default:
                    return "Unknown"
            }
        }
    }
    class It {
        constructor(e) {
            this.buffer = e, this.buflen = e.length, this.bufpos = 0, this.bufoff = 0, this.iserro = !1
        }
        read(e) {
            let t = 0,
                r = 0;
            for (; e;) {
                if (e < 0 || this.bufpos >= this.buflen) return this.iserro = !0, 0;
                this.iserro = !1, r = this.bufoff + e > 8 ? 8 - this.bufoff : e, t <<= r, t += this.buffer[this.bufpos] >> 8 - this.bufoff - r & 255 >> 8 - r, this.bufoff += r, e -= r, 8 == this.bufoff && (this.bufpos++, this.bufoff = 0)
            }
            return t
        }
        look(e) {
            let t = this.bufpos,
                r = this.bufoff,
                i = this.read(e);
            return this.bufpos = t, this.bufoff = r, i
        }
        read_golomb() {
            let e;
            for (e = 0; 0 === this.read(1) && !this.iserro; e++);
            return (1 << e) + this.read(e) - 1
        }
    }

    function Ft(e) {
        const t = {};
        let r = function () {
            let e = new ArrayBuffer(2);
            return new DataView(e).setInt16(0, 256, !0), 256 === new Int16Array(e)[0]
        }();
        const i = new DataView(e.buffer);
        let s = i.getUint8(0),
            n = i.getUint8(1);
        if (i.getUint8(2), i.getUint8(3), 1 !== s || 0 === n) return {};
        const a = 1 + (3 & i.getUint8(4));
        if (3 !== a && 4 !== a) return {};
        let o = 31 & i.getUint8(5);
        if (0 === o) return {};
        let d = 6;
        for (let s = 0; s < o; s++) {
            let n = i.getUint16(d, !r);
            if (d += 2, 0 === n) continue;
            let a = new Uint8Array(e.buffer, d, n);
            d += n;
            let o = Pt.parseSPS(a);
            if (0 !== s) continue;
            t.sps = a, t.timescale = 1e3, t.codecWidth = o.codec_size.width, t.codecHeight = o.codec_size.height, t.presentWidth = o.present_size.width, t.presentHeight = o.present_size.height, t.profile = o.profile_string, t.level = o.level_string, t.bitDepth = o.bit_depth, t.chromaFormat = o.chroma_format, t.sarRatio = o.sar_ratio, t.frameRate = o.frame_rate, !1 !== o.frame_rate.fixed && 0 !== o.frame_rate.fps_num && 0 !== o.frame_rate.fps_den || (t.frameRate = {
                fixed: !0,
                fps: 25,
                fps_num: 25e3,
                fps_den: 1e3
            });
            let l = t.frameRate.fps_den,
                u = t.frameRate.fps_num;
            t.refSampleDuration = t.timescale * (l / u);
            let c = a.subarray(1, 4),
                h = "avc1.";
            for (let e = 0; e < 3; e++) {
                let t = c[e].toString(16);
                t.length < 2 && (t = "0" + t), h += t
            }
            t.codec = h
        }
        let l = i.getUint8(d);
        if (0 === l) return {};
        d++;
        for (let s = 0; s < l; s++) {
            let s = i.getUint16(d, !r);
            if (d += 2, 0 === s) continue;
            let n = new Uint8Array(e.buffer, d, s);
            d += s, t.pps = n
        }
        if (t.videoType = Ne.h264, t.sps) {
            const e = t.sps.byteLength,
                r = new Uint8Array([e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e]),
                i = new Uint8Array(e + 4);
            i.set(r, 0), i.set(t.sps, 4), t.sps = i
        }
        if (t.pps) {
            const e = t.pps.byteLength,
                r = new Uint8Array([e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e]),
                i = new Uint8Array(e + 4);
            i.set(r, 0), i.set(t.pps, 4), t.pps = i
        }
        return t
    }

    function Lt(e) {
        let {
            sps: t,
            pps: r
        } = e;
        const i = [23, 0, 0, 0, 0, 1, 66, 0, 30, 255];
        i[0] = 23, i[6] = t[1], i[7] = t[2], i[8] = t[3], i[10] = 225, i[11] = t.byteLength >> 8 & 255, i[12] = 255 & t.byteLength, i.push(...t, 1, r.byteLength >> 8 & 255, 255 & r.byteLength, ...r);
        return new Uint8Array(i)
    }

    function Rt(e, t) {
        let r = [];
        r[0] = t ? 23 : 39, r[1] = 1, r[2] = 0, r[3] = 0, r[4] = 0;
        const i = new Uint8Array(r.length + e.byteLength);
        return i.set(r, 0), i.set(e, r.length), i
    }

    function Mt(e) {
        return 31 & e[0]
    }

    function zt(e) {
        return e === Te.kSliceSEI
    }

    function Nt(e) {
        return ! function (e) {
            return e === Te.sps || e === Te.pps
        }(e) && !zt(e)
    }

    function Ot(e) {
        return e === Te.iFrame
    }
    class Gt {
        constructor(e) {
            this.data = e, this.eofFlag = !1, this.currentStartcodeOffset = this.findNextStartCodeOffset(0), this.eofFlag && console.error("Could not find H264 startcode until payload end!")
        }
        findNextStartCodeOffset(e) {
            let t = e,
                r = this.data;
            for (;;) {
                if (t + 3 >= r.byteLength) return this.eofFlag = !0, r.byteLength;
                let e = r[t + 0] << 24 | r[t + 1] << 16 | r[t + 2] << 8 | r[t + 3],
                    i = r[t + 0] << 16 | r[t + 1] << 8 | r[t + 2];
                if (1 === e || 1 === i) return t;
                t++
            }
        }
        readNextNaluPayload() {
            let e = this.data,
                t = null;
            for (; null == t && !this.eofFlag;) {
                let r = this.currentStartcodeOffset;
                r += 1 === (e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3]) ? 4 : 3;
                let i = 31 & e[r],
                    s = (128 & e[r]) >>> 7,
                    n = this.findNextStartCodeOffset(r);
                this.currentStartcodeOffset = n, i >= Te.kReserved0 || 0 === s && (t = {
                    type: i,
                    data: e.subarray(r, n)
                })
            }
            return t
        }
    }
    class $t {
        constructor(e) {
            let t = e.data.byteLength;
            this.type = e.type, this.data = new Uint8Array(4 + t), new DataView(this.data.buffer).setUint32(0, t), this.data.set(e.data, 4)
        }
    }
    const Ht = e => {
            let t = e,
                r = t.byteLength,
                i = new Uint8Array(r),
                s = 0;
            for (let e = 0; e < r; e++) e >= 2 && 3 === t[e] && 0 === t[e - 1] && 0 === t[e - 2] || (i[s] = t[e], s++);
            return new Uint8Array(i.buffer, 0, s)
        },
        Vt = e => {
            switch (e) {
                case 0:
                    return "4:0:0";
                case 1:
                    return "4:2:0";
                case 2:
                    return "4:2:2";
                case 3:
                    return "4:4:4";
                default:
                    return "Unknown"
            }
        },
        Wt = e => {
            let t = Ht(e),
                r = new et(t);
            r.readByte(), r.readByte();
            let i = 0,
                s = 0,
                n = 0,
                a = 0;
            r.readBits(4);
            let o = r.readBits(3);
            r.readBool();
            let d = r.readBits(2),
                l = r.readBool(),
                u = r.readBits(5),
                c = r.readByte(),
                h = r.readByte(),
                f = r.readByte(),
                p = r.readByte(),
                m = r.readByte(),
                _ = r.readByte(),
                g = r.readByte(),
                y = r.readByte(),
                b = r.readByte(),
                v = r.readByte(),
                w = r.readByte(),
                S = [],
                E = [];
            for (let e = 0; e < o; e++) S.push(r.readBool()), E.push(r.readBool());
            if (o > 0)
                for (let e = o; e < 8; e++) r.readBits(2);
            for (let e = 0; e < o; e++) S[e] && (r.readByte(), r.readByte(), r.readByte(), r.readByte(), r.readByte(), r.readByte(), r.readByte(), r.readByte(), r.readByte(), r.readByte(), r.readByte()), S[e] && r.readByte();
            r.readUEG();
            let A = r.readUEG();
            3 == A && r.readBits(1);
            let U = r.readUEG(),
                x = r.readUEG();
            r.readBool() && (i += r.readUEG(), s += r.readUEG(), n += r.readUEG(), a += r.readUEG());
            let B = r.readUEG(),
                T = r.readUEG(),
                k = r.readUEG();
            for (let e = r.readBool() ? 0 : o; e <= o; e++) r.readUEG(), r.readUEG(), r.readUEG();
            if (r.readUEG(), r.readUEG(), r.readUEG(), r.readUEG(), r.readUEG(), r.readUEG(), r.readBool()) {
                if (r.readBool())
                    for (let e = 0; e < 4; e++)
                        for (let t = 0; t < (3 === e ? 2 : 6); t++) {
                            if (r.readBool()) {
                                let t = Math.min(64, 1 << 4 + (e << 1));
                                e > 1 && r.readSEG();
                                for (let e = 0; e < t; e++) r.readSEG()
                            } else r.readUEG()
                        }
            }
            r.readBool(), r.readBool(), r.readBool() && (r.readByte(), r.readUEG(), r.readUEG(), r.readBool());
            let C = r.readUEG(),
                D = 0;
            for (let e = 0; e < C; e++) {
                let t = !1;
                if (0 !== e && (t = r.readBool()), t) {
                    e === C && r.readUEG(), r.readBool(), r.readUEG();
                    let t = 0;
                    for (let e = 0; e <= D; e++) {
                        let e = r.readBool(),
                            i = !1;
                        e || (i = r.readBool()), (e || i) && t++
                    }
                    D = t
                } else {
                    let e = r.readUEG(),
                        t = r.readUEG();
                    D = e + t;
                    for (let t = 0; t < e; t++) r.readUEG(), r.readBool();
                    for (let e = 0; e < t; e++) r.readUEG(), r.readBool()
                }
            }
            if (r.readBool()) {
                let e = r.readUEG();
                for (let t = 0; t < e; t++) {
                    for (let e = 0; e < k + 4; e++) r.readBits(1);
                    r.readBits(1)
                }
            }
            let P = !1,
                I = 0,
                F = 1,
                L = 1,
                R = !1,
                M = 1,
                z = 1;
            if (r.readBool(), r.readBool(), r.readBool()) {
                if (r.readBool()) {
                    let e = r.readByte();
                    e > 0 && e < 16 ? (F = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2][e - 1], L = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1][e - 1]) : 255 === e && (F = r.readBits(16), L = r.readBits(16))
                }
                if (r.readBool() && r.readBool(), r.readBool()) {
                    r.readBits(3), r.readBool(), r.readBool() && (r.readByte(), r.readByte(), r.readByte())
                }
                if (r.readBool() && (r.readUEG(), r.readUEG()), r.readBool(), r.readBool(), r.readBool(), P = r.readBool(), P && (i += r.readUEG(), s += r.readUEG(), n += r.readUEG(), a += r.readUEG()), r.readBool()) {
                    if (M = r.readBits(32), z = r.readBits(32), r.readBool()) {
                        if (r.readUEG(), r.readBool()) {
                            let e = !1,
                                t = !1,
                                i = !1;
                            e = r.readBool(), t = r.readBool(), (e || t) && (i = r.readBool(), i && (r.readByte(), r.readBits(5), r.readBool(), r.readBits(5)), r.readBits(4), r.readBits(4), i && r.readBits(4), r.readBits(5), r.readBits(5), r.readBits(5));
                            for (let s = 0; s <= o; s++) {
                                let s = r.readBool();
                                R = s;
                                let n = !1,
                                    a = 1;
                                s || (n = r.readBool());
                                let o = !1;
                                if (n ? r.readSEG() : o = r.readBool(), o || (cpbcnt = r.readUEG() + 1), e)
                                    for (let e = 0; e < a; e++) r.readUEG(), r.readUEG(), i && (r.readUEG(), r.readUEG());
                                if (t)
                                    for (let e = 0; e < a; e++) r.readUEG(), r.readUEG(), i && (r.readUEG(), r.readUEG())
                            }
                        }
                    }
                }
                r.readBool() && (r.readBool(), r.readBool(), r.readBool(), I = r.readUEG(), r.readUEG(), r.readUEG(), r.readUEG(), r.readUEG())
            }
            r.readBool();
            let N = `hvc1.${u}.1.L${w}.B0`,
                O = U,
                G = x,
                $ = 1;
            return 1 !== F && 1 !== L && ($ = F / L), r.destroy(), r = null, {
                codec_mimetype: N,
                level_string: (H = w, (H / 30).toFixed(1)),
                profile_idc: u,
                bit_depth: B + 8,
                ref_frames: 1,
                chroma_format: A,
                chroma_format_string: Vt(A),
                general_level_idc: w,
                general_profile_space: d,
                general_tier_flag: l,
                general_profile_idc: u,
                general_profile_compatibility_flags_1: c,
                general_profile_compatibility_flags_2: h,
                general_profile_compatibility_flags_3: f,
                general_profile_compatibility_flags_4: p,
                general_constraint_indicator_flags_1: m,
                general_constraint_indicator_flags_2: _,
                general_constraint_indicator_flags_3: g,
                general_constraint_indicator_flags_4: y,
                general_constraint_indicator_flags_5: b,
                general_constraint_indicator_flags_6: v,
                min_spatial_segmentation_idc: I,
                constant_frame_rate: 0,
                chroma_format_idc: A,
                bit_depth_luma_minus8: B,
                bit_depth_chroma_minus8: T,
                frame_rate: {
                    fixed: R,
                    fps: z / M,
                    fps_den: M,
                    fps_num: z
                },
                sar_ratio: {
                    width: F,
                    height: L
                },
                codec_size: {
                    width: O,
                    height: G
                },
                present_size: {
                    width: O * $,
                    height: G
                }
            };
            var H
        },
        jt = e => {
            let t = Ht(e),
                r = new et(t);
            return r.readByte(), r.readByte(), r.readBits(4), r.readBits(2), r.readBits(6), {
                num_temporal_layers: r.readBits(3) + 1,
                temporal_id_nested: r.readBool()
            }
        },
        qt = e => {
            let t = Ht(e),
                r = new et(t);
            r.readByte(), r.readByte(), r.readUEG(), r.readUEG(), r.readBool(), r.readBool(), r.readBits(3), r.readBool(), r.readBool(), r.readUEG(), r.readUEG(), r.readSEG(), r.readBool(), r.readBool(), r.readBool() && r.readUEG(), r.readSEG(), r.readSEG(), r.readBool(), r.readBool(), r.readBool(), r.readBool();
            let i = r.readBool(),
                s = r.readBool(),
                n = 1;
            return s && i ? n = 0 : s ? n = 3 : i && (n = 2), {
                parallelismType: n
            }
        };
    class Yt {
        static _ebsp2rbsp(e) {
            let t = e,
                r = t.byteLength,
                i = new Uint8Array(r),
                s = 0;
            for (let e = 0; e < r; e++) e >= 2 && 3 === t[e] && 0 === t[e - 1] && 0 === t[e - 2] || (i[s] = t[e], s++);
            return new Uint8Array(i.buffer, 0, s)
        }
        static parseVPS(e) {
            let t = Yt._ebsp2rbsp(e),
                r = new et(t);
            return r.readByte(), r.readByte(), r.readBits(4), r.readBits(2), r.readBits(6), {
                num_temporal_layers: r.readBits(3) + 1,
                temporal_id_nested: r.readBool()
            }
        }
        static parseSPS(e) {
            let t = Yt._ebsp2rbsp(e),
                r = new et(t);
            r.readByte(), r.readByte();
            let i = 0,
                s = 0,
                n = 0,
                a = 0;
            r.readBits(4);
            let o = r.readBits(3);
            r.readBool();
            let d = r.readBits(2),
                l = r.readBool(),
                u = r.readBits(5),
                c = r.readByte(),
                h = r.readByte(),
                f = r.readByte(),
                p = r.readByte(),
                m = r.readByte(),
                _ = r.readByte(),
                g = r.readByte(),
                y = r.readByte(),
                b = r.readByte(),
                v = r.readByte(),
                w = r.readByte(),
                S = [],
                E = [];
            for (let e = 0; e < o; e++) S.push(r.readBool()), E.push(r.readBool());
            if (o > 0)
                for (let e = o; e < 8; e++) r.readBits(2);
            for (let e = 0; e < o; e++) S[e] && (r.readByte(), r.readByte(), r.readByte(), r.readByte(), r.readByte(), r.readByte(), r.readByte(), r.readByte(), r.readByte(), r.readByte(), r.readByte()), E[e] && r.readByte();
            r.readUEG();
            let A = r.readUEG();
            3 == A && r.readBits(1);
            let U = r.readUEG(),
                x = r.readUEG();
            r.readBool() && (i += r.readUEG(), s += r.readUEG(), n += r.readUEG(), a += r.readUEG());
            let B = r.readUEG(),
                T = r.readUEG(),
                k = r.readUEG();
            for (let e = r.readBool() ? 0 : o; e <= o; e++) r.readUEG(), r.readUEG(), r.readUEG();
            if (r.readUEG(), r.readUEG(), r.readUEG(), r.readUEG(), r.readUEG(), r.readUEG(), r.readBool()) {
                if (r.readBool())
                    for (let e = 0; e < 4; e++)
                        for (let t = 0; t < (3 === e ? 2 : 6); t++) {
                            if (r.readBool()) {
                                let t = Math.min(64, 1 << 4 + (e << 1));
                                e > 1 && r.readSEG();
                                for (let e = 0; e < t; e++) r.readSEG()
                            } else r.readUEG()
                        }
            }
            r.readBool(), r.readBool(), r.readBool() && (r.readByte(), r.readUEG(), r.readUEG(), r.readBool());
            let C = r.readUEG(),
                D = 0;
            for (let e = 0; e < C; e++) {
                let t = !1;
                if (0 !== e && (t = r.readBool()), t) {
                    e === C && r.readUEG(), r.readBool(), r.readUEG();
                    let t = 0;
                    for (let e = 0; e <= D; e++) {
                        let e = r.readBool(),
                            i = !1;
                        e || (i = r.readBool()), (e || i) && t++
                    }
                    D = t
                } else {
                    let e = r.readUEG(),
                        t = r.readUEG();
                    D = e + t;
                    for (let t = 0; t < e; t++) r.readUEG(), r.readBool();
                    for (let e = 0; e < t; e++) r.readUEG(), r.readBool()
                }
            }
            if (r.readBool()) {
                let e = r.readUEG();
                for (let t = 0; t < e; t++) {
                    for (let e = 0; e < k + 4; e++) r.readBits(1);
                    r.readBits(1)
                }
            }
            let P = !1,
                I = 0,
                F = 1,
                L = 1,
                R = !1,
                M = 1,
                z = 1;
            if (r.readBool(), r.readBool(), r.readBool()) {
                if (r.readBool()) {
                    let e = r.readByte();
                    e > 0 && e <= 16 ? (F = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2][e - 1], L = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1][e - 1]) : 255 === e && (F = r.readBits(16), L = r.readBits(16))
                }
                if (r.readBool() && r.readBool(), r.readBool()) {
                    r.readBits(3), r.readBool(), r.readBool() && (r.readByte(), r.readByte(), r.readByte())
                }
                if (r.readBool() && (r.readUEG(), r.readUEG()), r.readBool(), r.readBool(), r.readBool(), P = r.readBool(), P && (r.readUEG(), r.readUEG(), r.readUEG(), r.readUEG()), r.readBool()) {
                    if (M = r.readBits(32), z = r.readBits(32), r.readBool() && r.readUEG(), r.readBool()) {
                        let e = !1,
                            t = !1,
                            i = !1;
                        e = r.readBool(), t = r.readBool(), (e || t) && (i = r.readBool(), i && (r.readByte(), r.readBits(5), r.readBool(), r.readBits(5)), r.readBits(4), r.readBits(4), i && r.readBits(4), r.readBits(5), r.readBits(5), r.readBits(5));
                        for (let s = 0; s <= o; s++) {
                            let s = r.readBool();
                            R = s;
                            let n = !0,
                                a = 1;
                            s || (n = r.readBool());
                            let o = !1;
                            if (n ? r.readUEG() : o = r.readBool(), o || (a = r.readUEG() + 1), e) {
                                for (let e = 0; e < a; e++) r.readUEG(), r.readUEG(), i && (r.readUEG(), r.readUEG());
                                r.readBool()
                            }
                            if (t) {
                                for (let e = 0; e < a; e++) r.readUEG(), r.readUEG(), i && (r.readUEG(), r.readUEG());
                                r.readBool()
                            }
                        }
                    }
                }
                r.readBool() && (r.readBool(), r.readBool(), r.readBool(), I = r.readUEG(), r.readUEG(), r.readUEG(), r.readUEG(), r.readUEG())
            }
            r.readBool();
            let N = `hvc1.${u}.1.L${w}.B0`,
                O = U - (i + s) * (1 === A || 2 === A ? 2 : 1),
                G = x - (n + a) * (1 === A ? 2 : 1),
                $ = 1;
            return 1 !== F && 1 !== L && ($ = F / L), r.destroy(), r = null, {
                codec_mimetype: N,
                profile_string: Yt.getProfileString(u),
                level_string: Yt.getLevelString(w),
                profile_idc: u,
                bit_depth: B + 8,
                ref_frames: 1,
                chroma_format: A,
                chroma_format_string: Yt.getChromaFormatString(A),
                general_level_idc: w,
                general_profile_space: d,
                general_tier_flag: l,
                general_profile_idc: u,
                general_profile_compatibility_flags_1: c,
                general_profile_compatibility_flags_2: h,
                general_profile_compatibility_flags_3: f,
                general_profile_compatibility_flags_4: p,
                general_constraint_indicator_flags_1: m,
                general_constraint_indicator_flags_2: _,
                general_constraint_indicator_flags_3: g,
                general_constraint_indicator_flags_4: y,
                general_constraint_indicator_flags_5: b,
                general_constraint_indicator_flags_6: v,
                min_spatial_segmentation_idc: I,
                constant_frame_rate: 0,
                chroma_format_idc: A,
                bit_depth_luma_minus8: B,
                bit_depth_chroma_minus8: T,
                frame_rate: {
                    fixed: R,
                    fps: z / M,
                    fps_den: M,
                    fps_num: z
                },
                sar_ratio: {
                    width: F,
                    height: L
                },
                codec_size: {
                    width: O,
                    height: G
                },
                present_size: {
                    width: O * $,
                    height: G
                }
            }
        }
        static parsePPS(e) {
            let t = Yt._ebsp2rbsp(e),
                r = new et(t);
            r.readByte(), r.readByte(), r.readUEG(), r.readUEG(), r.readBool(), r.readBool(), r.readBits(3), r.readBool(), r.readBool(), r.readUEG(), r.readUEG(), r.readSEG(), r.readBool(), r.readBool(), r.readBool() && r.readUEG(), r.readSEG(), r.readSEG(), r.readBool(), r.readBool(), r.readBool(), r.readBool();
            let i = r.readBool(),
                s = r.readBool(),
                n = 1;
            return s && i ? n = 0 : s ? n = 3 : i && (n = 2), {
                parallelismType: n
            }
        }
        static getChromaFormatString(e) {
            switch (e) {
                case 0:
                    return "4:0:0";
                case 1:
                    return "4:2:0";
                case 2:
                    return "4:2:2";
                case 3:
                    return "4:4:4";
                default:
                    return "Unknown"
            }
        }
        static getProfileString(e) {
            switch (e) {
                case 1:
                    return "Main";
                case 2:
                    return "Main10";
                case 3:
                    return "MainSP";
                case 4:
                    return "Rext";
                case 9:
                    return "SCC";
                default:
                    return "Unknown"
            }
        }
        static getLevelString(e) {
            return (e / 30).toFixed(1)
        }
    }

    function Kt(e) {
        let t = {
            codecWidth: 0,
            codecHeight: 0,
            videoType: Ne.h265,
            width: 0,
            height: 0,
            profile: 0,
            level: 0
        };
        e = e.slice(5);
        do {
            let r = {};
            if (e.length < 23) {
                console.warn("parseHEVCDecoderConfigurationRecord$2", `arrayBuffer.length ${e.length} < 23`);
                break
            }
            if (r.configurationVersion = e[0], 1 != r.configurationVersion) break;
            r.general_profile_space = e[1] >> 6 & 3, r.general_tier_flag = e[1] >> 5 & 1, r.general_profile_idc = 31 & e[1], r.general_profile_compatibility_flags = e[2] << 24 | e[3] << 16 | e[4] << 8 | e[5], r.general_constraint_indicator_flags = e[6] << 24 | e[7] << 16 | e[8] << 8 | e[9], r.general_constraint_indicator_flags = r.general_constraint_indicator_flags << 16 | e[10] << 8 | e[11], r.general_level_idc = e[12], r.min_spatial_segmentation_idc = (15 & e[13]) << 8 | e[14], r.parallelismType = 3 & e[15], r.chromaFormat = 3 & e[16], r.bitDepthLumaMinus8 = 7 & e[17], r.bitDepthChromaMinus8 = 7 & e[18], r.avgFrameRate = e[19] << 8 | e[20], r.constantFrameRate = e[21] >> 6 & 3, r.numTemporalLayers = e[21] >> 3 & 7, r.temporalIdNested = e[21] >> 2 & 1, r.lengthSizeMinusOne = 3 & e[21];
            let i = e[22],
                s = e.slice(23);
            for (let e = 0; e < i && !(s.length < 3); e++) {
                let e = 63 & s[0],
                    i = s[1] << 8 | s[2];
                s = s.slice(3);
                for (let n = 0; n < i && !(s.length < 2); n++) {
                    let i = s[0] << 8 | s[1];
                    if (s.length < 2 + i) break;
                    if (s = s.slice(2), 33 == e) {
                        let e = new Uint8Array(i);
                        e.set(s.slice(0, i), 0), r.psps = Zt(e, r), t.profile = r.general_profile_idc, t.level = r.general_level_idc / 30, t.width = r.psps.pic_width_in_luma_samples - (r.psps.conf_win_left_offset + r.psps.conf_win_right_offset), t.height = r.psps.pic_height_in_luma_samples - (r.psps.conf_win_top_offset + r.psps.conf_win_bottom_offset)
                    }
                    s = s.slice(i)
                }
            }
        } while (0);
        return t.codecWidth = t.width || 1920, t.codecHeight = t.height || 1080, t.presentHeight = t.codecHeight, t.presentWidth = t.codecWidth, t.timescale = 1e3, t.refSampleDuration = 1e3 / 23976 * 1e3, t
    }

    function Xt(e) {
        const t = e;
        if (t.length < 22) return console.error(`Invalid HEVCDecoderConfigurationRecord, lack of data! ${t.length} < 22`), {};
        let r = {
                codecWidth: 0,
                codecHeight: 0,
                videoType: Ne.h265
            },
            i = function () {
                let e = new ArrayBuffer(2);
                return new DataView(e).setInt16(0, 256, !0), 256 === new Int16Array(e)[0]
            }(),
            s = new DataView(t.buffer),
            n = s.getUint8(0),
            a = 31 & s.getUint8(1);
        if (1 !== n || 0 === a) return console.error(`Invalid HEVCDecoderConfigurationRecord,version is ${n}, hevcProfile is ${a}`), {};
        let o = 1 + (3 & s.getUint8(21));
        if (3 !== o && 4 !== o) return console.error("Invalid HEVCDecoderConfigurationRecord, Strange NaluLengthSizeMinusOne: " + (o - 1)), {};
        let d = s.getUint8(22);
        for (let e = 0, n = 23; e < d; e++) {
            let e = 63 & s.getUint8(n + 0),
                a = s.getUint16(n + 1, !i);
            n += 3;
            for (let o = 0; o < a; o++) {
                let a = s.getUint16(n + 0, !i);
                if (0 === o)
                    if (33 === e) {
                        n += 2;
                        let e = new Uint8Array(t.buffer, n, a),
                            i = Yt.parseSPS(e);
                        r.codecWidth = i.codec_size.width, r.codecHeight = i.codec_size.height, r.presentWidth = i.present_size.width, r.presentHeight = i.present_size.height, r.profile = i.profile_string, r.level = i.level_string, r.bitDepth = i.bit_depth, r.chromaFormat = i.chroma_format, r.sarRatio = i.sar_ratio, r.frameRate = i.frame_rate, !1 !== i.frame_rate.fixed && 0 !== i.frame_rate.fps_num && 0 !== i.frame_rate.fps_den || (r.frameRate = {
                            fixed: !0,
                            fps: 23.976,
                            fps_num: 23976,
                            fps_den: 1e3
                        }), r.frameRate.fps_den, r.frameRate.fps_num, r.codec = i.codec_mimetype, n += a
                    } else n += 2 + a;
                else n += 2 + a
            }
        }
        return r.hvcc = new Uint8Array(t), r
    }

    function Zt(e, t) {
        let r = {},
            i = e.length,
            s = [],
            n = new It(e);
        n.read(1), n.read(6), n.read(6), n.read(3);
        for (let e = 2; e < i; e++) e + 2 < i && 3 == n.look(24) ? (s.push(n.read(8)), s.push(n.read(8)), e += 2, n.read(8)) : s.push(n.read(8));
        let a = new Uint8Array(s),
            o = new It(a);
        if (r.sps_video_parameter_set_id = o.read(4), r.sps_max_sub_layers_minus1 = o.read(3), r.sps_temporal_id_nesting_flag = o.read(1), r.profile_tier_level = function (e, t, r) {
                let i = {};
                i.profile_space = e.read(2), i.tier_flag = e.read(1), i.profile_idc = e.read(5), i.profile_compatibility_flags = e.read(32), i.general_progressive_source_flag = e.read(1), i.general_interlaced_source_flag = e.read(1), i.general_non_packed_constraint_flag = e.read(1), i.general_frame_only_constraint_flag = e.read(1), e.read(32), e.read(12), i.level_idc = e.read(8), i.sub_layer_profile_present_flag = [], i.sub_layer_level_present_flag = [];
                for (let t = 0; t < r; t++) i.sub_layer_profile_present_flag[t] = e.read(1), i.sub_layer_level_present_flag[t] = e.read(1);
                if (r > 0)
                    for (let t = r; t < 8; t++) e.read(2);
                i.sub_layer_profile_space = [], i.sub_layer_tier_flag = [], i.sub_layer_profile_idc = [], i.sub_layer_profile_compatibility_flag = [], i.sub_layer_progressive_source_flag = [], i.sub_layer_interlaced_source_flag = [], i.sub_layer_non_packed_constraint_flag = [], i.sub_layer_frame_only_constraint_flag = [], i.sub_layer_level_idc = [];
                for (let t = 0; t < r; t++) i.sub_layer_profile_present_flag[t] && (i.sub_layer_profile_space[t] = e.read(2), i.sub_layer_tier_flag[t] = e.read(1), i.sub_layer_profile_idc[t] = e.read(5), i.sub_layer_profile_compatibility_flag[t] = e.read(32), i.sub_layer_progressive_source_flag[t] = e.read(1), i.sub_layer_interlaced_source_flag[t] = e.read(1), i.sub_layer_non_packed_constraint_flag[t] = e.read(1), i.sub_layer_frame_only_constraint_flag[t] = e.read(1), e.read(32), e.read(12)), i.sub_layer_level_present_flag[t] ? i.sub_layer_level_idc[t] = e.read(8) : i.sub_layer_level_idc[t] = 1;
                return i
            }(o, 0, r.sps_max_sub_layers_minus1), r.sps_seq_parameter_set_id = o.read_golomb(), r.chroma_format_idc = o.read_golomb(), 3 == r.chroma_format_idc ? r.separate_colour_plane_flag = o.read(1) : r.separate_colour_plane_flag = 0, r.pic_width_in_luma_samples = o.read_golomb(), r.pic_height_in_luma_samples = o.read_golomb(), r.conformance_window_flag = o.read(1), r.conformance_window_flag) {
            let e = 1 + (r.chroma_format_idc < 2),
                t = 1 + (r.chroma_format_idc < 3);
            r.conf_win_left_offset = o.read_golomb() * t, r.conf_win_right_offset = o.read_golomb() * t, r.conf_win_top_offset = o.read_golomb() * e, r.conf_win_bottom_offset = o.read_golomb() * e
        } else r.conf_win_left_offset = 0, r.conf_win_right_offset = 0, r.conf_win_top_offset = 0, r.conf_win_bottom_offset = 0;
        return r
    }

    function Jt(e) {
        let {
            vps: t,
            pps: r,
            sps: i
        } = e, s = {
            configurationVersion: 1
        };
        const n = jt(t),
            a = Wt(i),
            o = qt(r);
        s = Object.assign(s, n, a, o);
        let d = 23 + (5 + t.byteLength) + (5 + i.byteLength) + (5 + r.byteLength),
            l = new Uint8Array(d);
        l[0] = 1, l[1] = (3 & s.general_profile_space) << 6 | (s.general_tier_flag ? 1 : 0) << 5 | 31 & s.general_profile_idc, l[2] = s.general_profile_compatibility_flags_1 || 0, l[3] = s.general_profile_compatibility_flags_2 || 0, l[4] = s.general_profile_compatibility_flags_3 || 0, l[5] = s.general_profile_compatibility_flags_4 || 0, l[6] = s.general_constraint_indicator_flags_1 || 0, l[7] = s.general_constraint_indicator_flags_2 || 0, l[8] = s.general_constraint_indicator_flags_3 || 0, l[9] = s.general_constraint_indicator_flags_4 || 0, l[10] = s.general_constraint_indicator_flags_5 || 0, l[11] = s.general_constraint_indicator_flags_6 || 0, l[12] = 60, l[13] = 240 | (3840 & s.min_spatial_segmentation_idc) >> 8, l[14] = 255 & s.min_spatial_segmentation_idc, l[15] = 252 | 3 & s.parallelismType, l[16] = 252 | 3 & s.chroma_format_idc, l[17] = 248 | 7 & s.bit_depth_luma_minus8, l[18] = 248 | 7 & s.bit_depth_chroma_minus8, l[19] = 0, l[20] = 0, l[21] = (3 & s.constant_frame_rate) << 6 | (7 & s.num_temporal_layers) << 3 | (s.temporal_id_nested ? 1 : 0) << 2 | 3, l[22] = 3, l[23] = 128 | ke.vps, l[24] = 0, l[25] = 1, l[26] = (65280 & t.byteLength) >> 8, l[27] = (255 & t.byteLength) >> 0, l.set(t, 28), l[23 + (5 + t.byteLength) + 0] = 128 | ke.sps, l[23 + (5 + t.byteLength) + 1] = 0, l[23 + (5 + t.byteLength) + 2] = 1, l[23 + (5 + t.byteLength) + 3] = (65280 & i.byteLength) >> 8, l[23 + (5 + t.byteLength) + 4] = (255 & i.byteLength) >> 0, l.set(i, 23 + (5 + t.byteLength) + 5), l[23 + (5 + t.byteLength + 5 + i.byteLength) + 0] = 128 | ke.pps, l[23 + (5 + t.byteLength + 5 + i.byteLength) + 1] = 0, l[23 + (5 + t.byteLength + 5 + i.byteLength) + 2] = 1, l[23 + (5 + t.byteLength + 5 + i.byteLength) + 3] = (65280 & r.byteLength) >> 8, l[23 + (5 + t.byteLength + 5 + i.byteLength) + 4] = (255 & r.byteLength) >> 0, l.set(r, 23 + (5 + t.byteLength + 5 + i.byteLength) + 5);
        const u = [28, 0, 0, 0, 0],
            c = new Uint8Array(u.length + l.byteLength);
        return c.set(u, 0), c.set(l, u.length), c
    }

    function Qt(e, t) {
        let r = [];
        r[0] = t ? 28 : 44, r[1] = 1, r[2] = 0, r[3] = 0, r[4] = 0;
        const i = new Uint8Array(r.length + e.byteLength);
        return i.set(r, 0), i.set(e, r.length), i
    }

    function er(e) {
        return (126 & e[0]) >> 1
    }

    function tr(e) {
        return ! function (e) {
            return e >= 32 && e <= 40
        }(e)
    }

    function rr(e) {
        return e >= 16 && e <= 21
    }
    class ir {
        constructor(e) {
            this.data = e, this.eofFlag = !1, this.currentStartcodeOffset = this.findNextStartCodeOffset(0), this.eofFlag && console.error("Could not find H265 startcode until payload end!")
        }
        findNextStartCodeOffset(e) {
            let t = e,
                r = this.data;
            for (;;) {
                if (t + 3 >= r.byteLength) return this.eofFlag = !0, r.byteLength;
                let e = r[t + 0] << 24 | r[t + 1] << 16 | r[t + 2] << 8 | r[t + 3],
                    i = r[t + 0] << 16 | r[t + 1] << 8 | r[t + 2];
                if (1 === e || 1 === i) return t;
                t++
            }
        }
        readNextNaluPayload() {
            let e = this.data,
                t = null;
            for (; null == t && !this.eofFlag;) {
                let r = this.currentStartcodeOffset;
                r += 1 === (e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3]) ? 4 : 3;
                let i = e[r] >> 1 & 63,
                    s = (128 & e[r]) >>> 7,
                    n = this.findNextStartCodeOffset(r);
                this.currentStartcodeOffset = n, 0 === s && (t = {
                    type: i,
                    data: e.subarray(r, n)
                })
            }
            return t
        }
    }
    class sr {
        constructor(e) {
            let t = e.data.byteLength;
            this.type = e.type, this.data = new Uint8Array(4 + t), new DataView(this.data.buffer).setUint32(0, t), this.data.set(e.data, 4)
        }
    }

    function nr(e) {
        return parseInt(e) === e
    }

    function ar(e) {
        if (!nr(e.length)) return !1;
        for (var t = 0; t < e.length; t++)
            if (!nr(e[t]) || e[t] < 0 || e[t] > 255) return !1;
        return !0
    }

    function or(e, t) {
        if (e.buffer && "Uint8Array" === e.name) return t && (e = e.slice ? e.slice() : Array.prototype.slice.call(e)), e;
        if (Array.isArray(e)) {
            if (!ar(e)) throw new Error("Array contains invalid value: " + e);
            return new Uint8Array(e)
        }
        if (nr(e.length) && ar(e)) return new Uint8Array(e);
        throw new Error("unsupported array-like object")
    }

    function dr(e) {
        return new Uint8Array(e)
    }

    function lr(e, t, r, i, s) {
        null == i && null == s || (e = e.slice ? e.slice(i, s) : Array.prototype.slice.call(e, i, s)), t.set(e, r)
    }
    var ur, cr = {
            toBytes: function (e) {
                var t = [],
                    r = 0;
                for (e = encodeURI(e); r < e.length;) {
                    var i = e.charCodeAt(r++);
                    37 === i ? (t.push(parseInt(e.substr(r, 2), 16)), r += 2) : t.push(i)
                }
                return or(t)
            },
            fromBytes: function (e) {
                for (var t = [], r = 0; r < e.length;) {
                    var i = e[r];
                    i < 128 ? (t.push(String.fromCharCode(i)), r++) : i > 191 && i < 224 ? (t.push(String.fromCharCode((31 & i) << 6 | 63 & e[r + 1])), r += 2) : (t.push(String.fromCharCode((15 & i) << 12 | (63 & e[r + 1]) << 6 | 63 & e[r + 2])), r += 3)
                }
                return t.join("")
            }
        },
        hr = (ur = "0123456789abcdef", {
            toBytes: function (e) {
                for (var t = [], r = 0; r < e.length; r += 2) t.push(parseInt(e.substr(r, 2), 16));
                return t
            },
            fromBytes: function (e) {
                for (var t = [], r = 0; r < e.length; r++) {
                    var i = e[r];
                    t.push(ur[(240 & i) >> 4] + ur[15 & i])
                }
                return t.join("")
            }
        }),
        fr = {
            16: 10,
            24: 12,
            32: 14
        },
        pr = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145],
        mr = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
        _r = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125],
        gr = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986],
        yr = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766],
        br = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126],
        vr = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436],
        wr = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890],
        Sr = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935],
        Er = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600],
        Ar = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480],
        Ur = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795],
        xr = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855],
        Br = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150],
        Tr = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];

    function kr(e) {
        for (var t = [], r = 0; r < e.length; r += 4) t.push(e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3]);
        return t
    }
    var Cr = function (e) {
        if (!(this instanceof Cr)) throw Error("AES must be instanitated with `new`");
        Object.defineProperty(this, "key", {
            value: or(e, !0)
        }), this._prepare()
    };
    Cr.prototype._prepare = function () {
        var e = fr[this.key.length];
        if (null == e) throw new Error("invalid key size (must be 16, 24 or 32 bytes)");
        this._Ke = [], this._Kd = [];
        for (var t = 0; t <= e; t++) this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
        var r, i = 4 * (e + 1),
            s = this.key.length / 4,
            n = kr(this.key);
        for (t = 0; t < s; t++) r = t >> 2, this._Ke[r][t % 4] = n[t], this._Kd[e - r][t % 4] = n[t];
        for (var a, o = 0, d = s; d < i;) {
            if (a = n[s - 1], n[0] ^= mr[a >> 16 & 255] << 24 ^ mr[a >> 8 & 255] << 16 ^ mr[255 & a] << 8 ^ mr[a >> 24 & 255] ^ pr[o] << 24, o += 1, 8 != s)
                for (t = 1; t < s; t++) n[t] ^= n[t - 1];
            else {
                for (t = 1; t < s / 2; t++) n[t] ^= n[t - 1];
                a = n[s / 2 - 1], n[s / 2] ^= mr[255 & a] ^ mr[a >> 8 & 255] << 8 ^ mr[a >> 16 & 255] << 16 ^ mr[a >> 24 & 255] << 24;
                for (t = s / 2 + 1; t < s; t++) n[t] ^= n[t - 1]
            }
            for (t = 0; t < s && d < i;) l = d >> 2, u = d % 4, this._Ke[l][u] = n[t], this._Kd[e - l][u] = n[t++], d++
        }
        for (var l = 1; l < e; l++)
            for (var u = 0; u < 4; u++) a = this._Kd[l][u], this._Kd[l][u] = Ur[a >> 24 & 255] ^ xr[a >> 16 & 255] ^ Br[a >> 8 & 255] ^ Tr[255 & a]
    }, Cr.prototype.encrypt = function (e) {
        if (16 != e.length) throw new Error("invalid plaintext size (must be 16 bytes)");
        for (var t = this._Ke.length - 1, r = [0, 0, 0, 0], i = kr(e), s = 0; s < 4; s++) i[s] ^= this._Ke[0][s];
        for (var n = 1; n < t; n++) {
            for (s = 0; s < 4; s++) r[s] = gr[i[s] >> 24 & 255] ^ yr[i[(s + 1) % 4] >> 16 & 255] ^ br[i[(s + 2) % 4] >> 8 & 255] ^ vr[255 & i[(s + 3) % 4]] ^ this._Ke[n][s];
            i = r.slice()
        }
        var a, o = dr(16);
        for (s = 0; s < 4; s++) a = this._Ke[t][s], o[4 * s] = 255 & (mr[i[s] >> 24 & 255] ^ a >> 24), o[4 * s + 1] = 255 & (mr[i[(s + 1) % 4] >> 16 & 255] ^ a >> 16), o[4 * s + 2] = 255 & (mr[i[(s + 2) % 4] >> 8 & 255] ^ a >> 8), o[4 * s + 3] = 255 & (mr[255 & i[(s + 3) % 4]] ^ a);
        return o
    }, Cr.prototype.decrypt = function (e) {
        if (16 != e.length) throw new Error("invalid ciphertext size (must be 16 bytes)");
        for (var t = this._Kd.length - 1, r = [0, 0, 0, 0], i = kr(e), s = 0; s < 4; s++) i[s] ^= this._Kd[0][s];
        for (var n = 1; n < t; n++) {
            for (s = 0; s < 4; s++) r[s] = wr[i[s] >> 24 & 255] ^ Sr[i[(s + 3) % 4] >> 16 & 255] ^ Er[i[(s + 2) % 4] >> 8 & 255] ^ Ar[255 & i[(s + 1) % 4]] ^ this._Kd[n][s];
            i = r.slice()
        }
        var a, o = dr(16);
        for (s = 0; s < 4; s++) a = this._Kd[t][s], o[4 * s] = 255 & (_r[i[s] >> 24 & 255] ^ a >> 24), o[4 * s + 1] = 255 & (_r[i[(s + 3) % 4] >> 16 & 255] ^ a >> 16), o[4 * s + 2] = 255 & (_r[i[(s + 2) % 4] >> 8 & 255] ^ a >> 8), o[4 * s + 3] = 255 & (_r[255 & i[(s + 1) % 4]] ^ a);
        return o
    };
    var Dr = function (e) {
        if (!(this instanceof Dr)) throw Error("AES must be instanitated with `new`");
        this.description = "Electronic Code Block", this.name = "ecb", this._aes = new Cr(e)
    };
    Dr.prototype.encrypt = function (e) {
        if ((e = or(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
        for (var t = dr(e.length), r = dr(16), i = 0; i < e.length; i += 16) lr(e, r, 0, i, i + 16), lr(r = this._aes.encrypt(r), t, i);
        return t
    }, Dr.prototype.decrypt = function (e) {
        if ((e = or(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
        for (var t = dr(e.length), r = dr(16), i = 0; i < e.length; i += 16) lr(e, r, 0, i, i + 16), lr(r = this._aes.decrypt(r), t, i);
        return t
    };
    var Pr = function (e, t) {
        if (!(this instanceof Pr)) throw Error("AES must be instanitated with `new`");
        if (this.description = "Cipher Block Chaining", this.name = "cbc", t) {
            if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)")
        } else t = dr(16);
        this._lastCipherblock = or(t, !0), this._aes = new Cr(e)
    };
    Pr.prototype.encrypt = function (e) {
        if ((e = or(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
        for (var t = dr(e.length), r = dr(16), i = 0; i < e.length; i += 16) {
            lr(e, r, 0, i, i + 16);
            for (var s = 0; s < 16; s++) r[s] ^= this._lastCipherblock[s];
            this._lastCipherblock = this._aes.encrypt(r), lr(this._lastCipherblock, t, i)
        }
        return t
    }, Pr.prototype.decrypt = function (e) {
        if ((e = or(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
        for (var t = dr(e.length), r = dr(16), i = 0; i < e.length; i += 16) {
            lr(e, r, 0, i, i + 16), r = this._aes.decrypt(r);
            for (var s = 0; s < 16; s++) t[i + s] = r[s] ^ this._lastCipherblock[s];
            lr(e, this._lastCipherblock, 0, i, i + 16)
        }
        return t
    };
    var Ir = function (e, t, r) {
        if (!(this instanceof Ir)) throw Error("AES must be instanitated with `new`");
        if (this.description = "Cipher Feedback", this.name = "cfb", t) {
            if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 size)")
        } else t = dr(16);
        r || (r = 1), this.segmentSize = r, this._shiftRegister = or(t, !0), this._aes = new Cr(e)
    };
    Ir.prototype.encrypt = function (e) {
        if (e.length % this.segmentSize != 0) throw new Error("invalid plaintext size (must be segmentSize bytes)");
        for (var t, r = or(e, !0), i = 0; i < r.length; i += this.segmentSize) {
            t = this._aes.encrypt(this._shiftRegister);
            for (var s = 0; s < this.segmentSize; s++) r[i + s] ^= t[s];
            lr(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), lr(r, this._shiftRegister, 16 - this.segmentSize, i, i + this.segmentSize)
        }
        return r
    }, Ir.prototype.decrypt = function (e) {
        if (e.length % this.segmentSize != 0) throw new Error("invalid ciphertext size (must be segmentSize bytes)");
        for (var t, r = or(e, !0), i = 0; i < r.length; i += this.segmentSize) {
            t = this._aes.encrypt(this._shiftRegister);
            for (var s = 0; s < this.segmentSize; s++) r[i + s] ^= t[s];
            lr(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), lr(e, this._shiftRegister, 16 - this.segmentSize, i, i + this.segmentSize)
        }
        return r
    };
    var Fr = function (e, t) {
        if (!(this instanceof Fr)) throw Error("AES must be instanitated with `new`");
        if (this.description = "Output Feedback", this.name = "ofb", t) {
            if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)")
        } else t = dr(16);
        this._lastPrecipher = or(t, !0), this._lastPrecipherIndex = 16, this._aes = new Cr(e)
    };
    Fr.prototype.encrypt = function (e) {
        for (var t = or(e, !0), r = 0; r < t.length; r++) 16 === this._lastPrecipherIndex && (this._lastPrecipher = this._aes.encrypt(this._lastPrecipher), this._lastPrecipherIndex = 0), t[r] ^= this._lastPrecipher[this._lastPrecipherIndex++];
        return t
    }, Fr.prototype.decrypt = Fr.prototype.encrypt;
    var Lr = function (e) {
        if (!(this instanceof Lr)) throw Error("Counter must be instanitated with `new`");
        0 === e || e || (e = 1), "number" == typeof e ? (this._counter = dr(16), this.setValue(e)) : this.setBytes(e)
    };
    Lr.prototype.setValue = function (e) {
        if ("number" != typeof e || parseInt(e) != e) throw new Error("invalid counter value (must be an integer)");
        if (e > Number.MAX_SAFE_INTEGER) throw new Error("integer value out of safe range");
        for (var t = 15; t >= 0; --t) this._counter[t] = e % 256, e = parseInt(e / 256)
    }, Lr.prototype.setBytes = function (e) {
        if (16 != (e = or(e, !0)).length) throw new Error("invalid counter bytes size (must be 16 bytes)");
        this._counter = e
    }, Lr.prototype.increment = function () {
        for (var e = 15; e >= 0; e--) {
            if (255 !== this._counter[e]) {
                this._counter[e]++;
                break
            }
            this._counter[e] = 0
        }
    };
    var Rr = function (e, t) {
        if (!(this instanceof Rr)) throw Error("AES must be instanitated with `new`");
        this.description = "Counter", this.name = "ctr", t instanceof Lr || (t = new Lr(t)), this._counter = t, this._remainingCounter = null, this._remainingCounterIndex = 16, this._aes = new Cr(e)
    };
    Rr.prototype.encrypt = function (e) {
        for (var t = or(e, !0), r = 0; r < t.length; r++) 16 === this._remainingCounterIndex && (this._remainingCounter = this._aes.encrypt(this._counter._counter), this._remainingCounterIndex = 0, this._counter.increment()), t[r] ^= this._remainingCounter[this._remainingCounterIndex++];
        return t
    }, Rr.prototype.decrypt = Rr.prototype.encrypt;
    const Mr = {
        AES: Cr,
        Counter: Lr,
        ModeOfOperation: {
            ecb: Dr,
            cbc: Pr,
            cfb: Ir,
            ofb: Fr,
            ctr: Rr
        },
        utils: {
            hex: hr,
            utf8: cr
        },
        padding: {
            pkcs7: {
                pad: function (e) {
                    var t = 16 - (e = or(e, !0)).length % 16,
                        r = dr(e.length + t);
                    lr(e, r);
                    for (var i = e.length; i < r.length; i++) r[i] = t;
                    return r
                },
                strip: function (e) {
                    if ((e = or(e, !0)).length < 16) throw new Error("PKCS#7 invalid length");
                    var t = e[e.length - 1];
                    if (t > 16) throw new Error("PKCS#7 padding byte out of range");
                    for (var r = e.length - t, i = 0; i < t; i++)
                        if (e[r + i] !== t) throw new Error("PKCS#7 invalid padding byte");
                    var s = dr(r);
                    return lr(e, s, 0, 0, r), s
                }
            }
        },
        _arrayTest: {
            coerceArray: or,
            createArray: dr,
            copyArray: lr
        }
    };
    var zr = Qe((function (e, t) {
        var r, s, n, a = (r = new Date, s = 4, n = {
            setLogLevel: function (e) {
                s = e == this.debug ? 1 : e == this.info ? 2 : e == this.warn ? 3 : (this.error, 4)
            },
            debug: function (e, t) {
                void 0 === console.debug && (console.debug = console.log), 1 >= s && console.debug("[" + a.getDurationString(new Date - r, 1e3) + "]", "[" + e + "]", t)
            },
            log: function (e, t) {
                this.debug(e.msg)
            },
            info: function (e, t) {
                2 >= s && console.info("[" + a.getDurationString(new Date - r, 1e3) + "]", "[" + e + "]", t)
            },
            warn: function (e, t) {
                3 >= s && console.warn("[" + a.getDurationString(new Date - r, 1e3) + "]", "[" + e + "]", t)
            },
            error: function (e, t) {
                4 >= s && console.error("[" + a.getDurationString(new Date - r, 1e3) + "]", "[" + e + "]", t)
            }
        }, n);
        a.getDurationString = function (e, t) {
            var r;

            function i(e, t) {
                for (var r = ("" + e).split("."); r[0].length < t;) r[0] = "0" + r[0];
                return r.join(".")
            }
            e < 0 ? (r = !0, e = -e) : r = !1;
            var s = e / (t || 1),
                n = Math.floor(s / 3600);
            s -= 3600 * n;
            var a = Math.floor(s / 60),
                o = 1e3 * (s -= 60 * a);
            return o -= 1e3 * (s = Math.floor(s)), o = Math.floor(o), (r ? "-" : "") + n + ":" + i(a, 2) + ":" + i(s, 2) + "." + i(o, 3)
        }, a.printRanges = function (e) {
            var t = e.length;
            if (t > 0) {
                for (var r = "", i = 0; i < t; i++) i > 0 && (r += ","), r += "[" + a.getDurationString(e.start(i)) + "," + a.getDurationString(e.end(i)) + "]";
                return r
            }
            return "(empty)"
        }, t.Log = a;
        var o = function (e) {
            if (!(e instanceof ArrayBuffer)) throw "Needs an array buffer";
            this.buffer = e, this.dataview = new DataView(e), this.position = 0
        };
        o.prototype.getPosition = function () {
            return this.position
        }, o.prototype.getEndPosition = function () {
            return this.buffer.byteLength
        }, o.prototype.getLength = function () {
            return this.buffer.byteLength
        }, o.prototype.seek = function (e) {
            var t = Math.max(0, Math.min(this.buffer.byteLength, e));
            return this.position = isNaN(t) || !isFinite(t) ? 0 : t, !0
        }, o.prototype.isEos = function () {
            return this.getPosition() >= this.getEndPosition()
        }, o.prototype.readAnyInt = function (e, t) {
            var r = 0;
            if (this.position + e <= this.buffer.byteLength) {
                switch (e) {
                    case 1:
                        r = t ? this.dataview.getInt8(this.position) : this.dataview.getUint8(this.position);
                        break;
                    case 2:
                        r = t ? this.dataview.getInt16(this.position) : this.dataview.getUint16(this.position);
                        break;
                    case 3:
                        if (t) throw "No method for reading signed 24 bits values";
                        r = this.dataview.getUint8(this.position) << 16, r |= this.dataview.getUint8(this.position + 1) << 8, r |= this.dataview.getUint8(this.position + 2);
                        break;
                    case 4:
                        r = t ? this.dataview.getInt32(this.position) : this.dataview.getUint32(this.position);
                        break;
                    case 8:
                        if (t) throw "No method for reading signed 64 bits values";
                        r = this.dataview.getUint32(this.position) << 32, r |= this.dataview.getUint32(this.position + 4);
                        break;
                    default:
                        throw "readInt method not implemented for size: " + e
                }
                return this.position += e, r
            }
            throw "Not enough bytes in buffer"
        }, o.prototype.readUint8 = function () {
            return this.readAnyInt(1, !1)
        }, o.prototype.readUint16 = function () {
            return this.readAnyInt(2, !1)
        }, o.prototype.readUint24 = function () {
            return this.readAnyInt(3, !1)
        }, o.prototype.readUint32 = function () {
            return this.readAnyInt(4, !1)
        }, o.prototype.readUint64 = function () {
            return this.readAnyInt(8, !1)
        }, o.prototype.readString = function (e) {
            if (this.position + e <= this.buffer.byteLength) {
                for (var t = "", r = 0; r < e; r++) t += String.fromCharCode(this.readUint8());
                return t
            }
            throw "Not enough bytes in buffer"
        }, o.prototype.readCString = function () {
            for (var e = [];;) {
                var t = this.readUint8();
                if (0 === t) break;
                e.push(t)
            }
            return String.fromCharCode.apply(null, e)
        }, o.prototype.readInt8 = function () {
            return this.readAnyInt(1, !0)
        }, o.prototype.readInt16 = function () {
            return this.readAnyInt(2, !0)
        }, o.prototype.readInt32 = function () {
            return this.readAnyInt(4, !0)
        }, o.prototype.readInt64 = function () {
            return this.readAnyInt(8, !1)
        }, o.prototype.readUint8Array = function (e) {
            for (var t = new Uint8Array(e), r = 0; r < e; r++) t[r] = this.readUint8();
            return t
        }, o.prototype.readInt16Array = function (e) {
            for (var t = new Int16Array(e), r = 0; r < e; r++) t[r] = this.readInt16();
            return t
        }, o.prototype.readUint16Array = function (e) {
            for (var t = new Int16Array(e), r = 0; r < e; r++) t[r] = this.readUint16();
            return t
        }, o.prototype.readUint32Array = function (e) {
            for (var t = new Uint32Array(e), r = 0; r < e; r++) t[r] = this.readUint32();
            return t
        }, o.prototype.readInt32Array = function (e) {
            for (var t = new Int32Array(e), r = 0; r < e; r++) t[r] = this.readInt32();
            return t
        }, t.MP4BoxStream = o;
        var d = function (e, t, r) {
            this._byteOffset = t || 0, e instanceof ArrayBuffer ? this.buffer = e : "object" == typeof e ? (this.dataView = e, t && (this._byteOffset += t)) : this.buffer = new ArrayBuffer(e || 0), this.position = 0, this.endianness = null == r ? d.LITTLE_ENDIAN : r
        };
        d.prototype = {}, d.prototype.getPosition = function () {
            return this.position
        }, d.prototype._realloc = function (e) {
            if (this._dynamicSize) {
                var t = this._byteOffset + this.position + e,
                    r = this._buffer.byteLength;
                if (t <= r) t > this._byteLength && (this._byteLength = t);
                else {
                    for (r < 1 && (r = 1); t > r;) r *= 2;
                    var i = new ArrayBuffer(r),
                        s = new Uint8Array(this._buffer);
                    new Uint8Array(i, 0, s.length).set(s), this.buffer = i, this._byteLength = t
                }
            }
        }, d.prototype._trimAlloc = function () {
            if (this._byteLength != this._buffer.byteLength) {
                var e = new ArrayBuffer(this._byteLength),
                    t = new Uint8Array(e),
                    r = new Uint8Array(this._buffer, 0, t.length);
                t.set(r), this.buffer = e
            }
        }, d.BIG_ENDIAN = !1, d.LITTLE_ENDIAN = !0, d.prototype._byteLength = 0, Object.defineProperty(d.prototype, "byteLength", {
            get: function () {
                return this._byteLength - this._byteOffset
            }
        }), Object.defineProperty(d.prototype, "buffer", {
            get: function () {
                return this._trimAlloc(), this._buffer
            },
            set: function (e) {
                this._buffer = e, this._dataView = new DataView(this._buffer, this._byteOffset), this._byteLength = this._buffer.byteLength
            }
        }), Object.defineProperty(d.prototype, "byteOffset", {
            get: function () {
                return this._byteOffset
            },
            set: function (e) {
                this._byteOffset = e, this._dataView = new DataView(this._buffer, this._byteOffset), this._byteLength = this._buffer.byteLength
            }
        }), Object.defineProperty(d.prototype, "dataView", {
            get: function () {
                return this._dataView
            },
            set: function (e) {
                this._byteOffset = e.byteOffset, this._buffer = e.buffer, this._dataView = new DataView(this._buffer, this._byteOffset), this._byteLength = this._byteOffset + e.byteLength
            }
        }), d.prototype.seek = function (e) {
            var t = Math.max(0, Math.min(this.byteLength, e));
            this.position = isNaN(t) || !isFinite(t) ? 0 : t
        }, d.prototype.isEof = function () {
            return this.position >= this._byteLength
        }, d.prototype.mapUint8Array = function (e) {
            this._realloc(1 * e);
            var t = new Uint8Array(this._buffer, this.byteOffset + this.position, e);
            return this.position += 1 * e, t
        }, d.prototype.readInt32Array = function (e, t) {
            e = null == e ? this.byteLength - this.position / 4 : e;
            var r = new Int32Array(e);
            return d.memcpy(r.buffer, 0, this.buffer, this.byteOffset + this.position, e * r.BYTES_PER_ELEMENT), d.arrayToNative(r, null == t ? this.endianness : t), this.position += r.byteLength, r
        }, d.prototype.readInt16Array = function (e, t) {
            e = null == e ? this.byteLength - this.position / 2 : e;
            var r = new Int16Array(e);
            return d.memcpy(r.buffer, 0, this.buffer, this.byteOffset + this.position, e * r.BYTES_PER_ELEMENT), d.arrayToNative(r, null == t ? this.endianness : t), this.position += r.byteLength, r
        }, d.prototype.readInt8Array = function (e) {
            e = null == e ? this.byteLength - this.position : e;
            var t = new Int8Array(e);
            return d.memcpy(t.buffer, 0, this.buffer, this.byteOffset + this.position, e * t.BYTES_PER_ELEMENT), this.position += t.byteLength, t
        }, d.prototype.readUint32Array = function (e, t) {
            e = null == e ? this.byteLength - this.position / 4 : e;
            var r = new Uint32Array(e);
            return d.memcpy(r.buffer, 0, this.buffer, this.byteOffset + this.position, e * r.BYTES_PER_ELEMENT), d.arrayToNative(r, null == t ? this.endianness : t), this.position += r.byteLength, r
        }, d.prototype.readUint16Array = function (e, t) {
            e = null == e ? this.byteLength - this.position / 2 : e;
            var r = new Uint16Array(e);
            return d.memcpy(r.buffer, 0, this.buffer, this.byteOffset + this.position, e * r.BYTES_PER_ELEMENT), d.arrayToNative(r, null == t ? this.endianness : t), this.position += r.byteLength, r
        }, d.prototype.readUint8Array = function (e) {
            e = null == e ? this.byteLength - this.position : e;
            var t = new Uint8Array(e);
            return d.memcpy(t.buffer, 0, this.buffer, this.byteOffset + this.position, e * t.BYTES_PER_ELEMENT), this.position += t.byteLength, t
        }, d.prototype.readFloat64Array = function (e, t) {
            e = null == e ? this.byteLength - this.position / 8 : e;
            var r = new Float64Array(e);
            return d.memcpy(r.buffer, 0, this.buffer, this.byteOffset + this.position, e * r.BYTES_PER_ELEMENT), d.arrayToNative(r, null == t ? this.endianness : t), this.position += r.byteLength, r
        }, d.prototype.readFloat32Array = function (e, t) {
            e = null == e ? this.byteLength - this.position / 4 : e;
            var r = new Float32Array(e);
            return d.memcpy(r.buffer, 0, this.buffer, this.byteOffset + this.position, e * r.BYTES_PER_ELEMENT), d.arrayToNative(r, null == t ? this.endianness : t), this.position += r.byteLength, r
        }, d.prototype.readInt32 = function (e) {
            var t = this._dataView.getInt32(this.position, null == e ? this.endianness : e);
            return this.position += 4, t
        }, d.prototype.readInt16 = function (e) {
            var t = this._dataView.getInt16(this.position, null == e ? this.endianness : e);
            return this.position += 2, t
        }, d.prototype.readInt8 = function () {
            var e = this._dataView.getInt8(this.position);
            return this.position += 1, e
        }, d.prototype.readUint32 = function (e) {
            var t = this._dataView.getUint32(this.position, null == e ? this.endianness : e);
            return this.position += 4, t
        }, d.prototype.readUint16 = function (e) {
            var t = this._dataView.getUint16(this.position, null == e ? this.endianness : e);
            return this.position += 2, t
        }, d.prototype.readUint8 = function () {
            var e = this._dataView.getUint8(this.position);
            return this.position += 1, e
        }, d.prototype.readFloat32 = function (e) {
            var t = this._dataView.getFloat32(this.position, null == e ? this.endianness : e);
            return this.position += 4, t
        }, d.prototype.readFloat64 = function (e) {
            var t = this._dataView.getFloat64(this.position, null == e ? this.endianness : e);
            return this.position += 8, t
        }, d.endianness = new Int8Array(new Int16Array([1]).buffer)[0] > 0, d.memcpy = function (e, t, r, i, s) {
            var n = new Uint8Array(e, t, s),
                a = new Uint8Array(r, i, s);
            n.set(a)
        }, d.arrayToNative = function (e, t) {
            return t == this.endianness ? e : this.flipArrayEndianness(e)
        }, d.nativeToEndian = function (e, t) {
            return this.endianness == t ? e : this.flipArrayEndianness(e)
        }, d.flipArrayEndianness = function (e) {
            for (var t = new Uint8Array(e.buffer, e.byteOffset, e.byteLength), r = 0; r < e.byteLength; r += e.BYTES_PER_ELEMENT)
                for (var i = r + e.BYTES_PER_ELEMENT - 1, s = r; i > s; i--, s++) {
                    var n = t[s];
                    t[s] = t[i], t[i] = n
                }
            return e
        }, d.prototype.failurePosition = 0, String.fromCharCodeUint8 = function (e) {
            for (var t = [], r = 0; r < e.length; r++) t[r] = e[r];
            return String.fromCharCode.apply(null, t)
        }, d.prototype.readString = function (e, t) {
            return null == t || "ASCII" == t ? String.fromCharCodeUint8.apply(null, [this.mapUint8Array(null == e ? this.byteLength - this.position : e)]) : new TextDecoder(t).decode(this.mapUint8Array(e))
        }, d.prototype.readCString = function (e) {
            var t = this.byteLength - this.position,
                r = new Uint8Array(this._buffer, this._byteOffset + this.position),
                i = t;
            null != e && (i = Math.min(e, t));
            for (var s = 0; s < i && 0 !== r[s]; s++);
            var n = String.fromCharCodeUint8.apply(null, [this.mapUint8Array(s)]);
            return null != e ? this.position += i - s : s != t && (this.position += 1), n
        };
        var l = Math.pow(2, 32);
        d.prototype.readInt64 = function () {
            return this.readInt32() * l + this.readUint32()
        }, d.prototype.readUint64 = function () {
            return this.readUint32() * l + this.readUint32()
        }, d.prototype.readInt64 = function () {
            return this.readUint32() * l + this.readUint32()
        }, d.prototype.readUint24 = function () {
            return (this.readUint8() << 16) + (this.readUint8() << 8) + this.readUint8()
        }, t.DataStream = d, d.prototype.save = function (e) {
            var t = new Blob([this.buffer]);
            if (!window.URL || !URL.createObjectURL) throw "DataStream.save: Can't create object URL.";
            var r = window.URL.createObjectURL(t),
                i = document.createElement("a");
            document.body.appendChild(i), i.setAttribute("href", r), i.setAttribute("download", e), i.setAttribute("target", "_self"), i.click(), window.URL.revokeObjectURL(r)
        }, d.prototype._dynamicSize = !0, Object.defineProperty(d.prototype, "dynamicSize", {
            get: function () {
                return this._dynamicSize
            },
            set: function (e) {
                e || this._trimAlloc(), this._dynamicSize = e
            }
        }), d.prototype.shift = function (e) {
            var t = new ArrayBuffer(this._byteLength - e),
                r = new Uint8Array(t),
                i = new Uint8Array(this._buffer, e, r.length);
            r.set(i), this.buffer = t, this.position -= e
        }, d.prototype.writeInt32Array = function (e, t) {
            if (this._realloc(4 * e.length), e instanceof Int32Array && this.byteOffset + this.position % e.BYTES_PER_ELEMENT === 0) d.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapInt32Array(e.length, t);
            else
                for (var r = 0; r < e.length; r++) this.writeInt32(e[r], t)
        }, d.prototype.writeInt16Array = function (e, t) {
            if (this._realloc(2 * e.length), e instanceof Int16Array && this.byteOffset + this.position % e.BYTES_PER_ELEMENT === 0) d.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapInt16Array(e.length, t);
            else
                for (var r = 0; r < e.length; r++) this.writeInt16(e[r], t)
        }, d.prototype.writeInt8Array = function (e) {
            if (this._realloc(1 * e.length), e instanceof Int8Array && this.byteOffset + this.position % e.BYTES_PER_ELEMENT === 0) d.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapInt8Array(e.length);
            else
                for (var t = 0; t < e.length; t++) this.writeInt8(e[t])
        }, d.prototype.writeUint32Array = function (e, t) {
            if (this._realloc(4 * e.length), e instanceof Uint32Array && this.byteOffset + this.position % e.BYTES_PER_ELEMENT === 0) d.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapUint32Array(e.length, t);
            else
                for (var r = 0; r < e.length; r++) this.writeUint32(e[r], t)
        }, d.prototype.writeUint16Array = function (e, t) {
            if (this._realloc(2 * e.length), e instanceof Uint16Array && this.byteOffset + this.position % e.BYTES_PER_ELEMENT === 0) d.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapUint16Array(e.length, t);
            else
                for (var r = 0; r < e.length; r++) this.writeUint16(e[r], t)
        }, d.prototype.writeUint8Array = function (e) {
            if (this._realloc(1 * e.length), e instanceof Uint8Array && this.byteOffset + this.position % e.BYTES_PER_ELEMENT === 0) d.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapUint8Array(e.length);
            else
                for (var t = 0; t < e.length; t++) this.writeUint8(e[t])
        }, d.prototype.writeFloat64Array = function (e, t) {
            if (this._realloc(8 * e.length), e instanceof Float64Array && this.byteOffset + this.position % e.BYTES_PER_ELEMENT === 0) d.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapFloat64Array(e.length, t);
            else
                for (var r = 0; r < e.length; r++) this.writeFloat64(e[r], t)
        }, d.prototype.writeFloat32Array = function (e, t) {
            if (this._realloc(4 * e.length), e instanceof Float32Array && this.byteOffset + this.position % e.BYTES_PER_ELEMENT === 0) d.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapFloat32Array(e.length, t);
            else
                for (var r = 0; r < e.length; r++) this.writeFloat32(e[r], t)
        }, d.prototype.writeInt32 = function (e, t) {
            this._realloc(4), this._dataView.setInt32(this.position, e, null == t ? this.endianness : t), this.position += 4
        }, d.prototype.writeInt16 = function (e, t) {
            this._realloc(2), this._dataView.setInt16(this.position, e, null == t ? this.endianness : t), this.position += 2
        }, d.prototype.writeInt8 = function (e) {
            this._realloc(1), this._dataView.setInt8(this.position, e), this.position += 1
        }, d.prototype.writeUint32 = function (e, t) {
            this._realloc(4), this._dataView.setUint32(this.position, e, null == t ? this.endianness : t), this.position += 4
        }, d.prototype.writeUint16 = function (e, t) {
            this._realloc(2), this._dataView.setUint16(this.position, e, null == t ? this.endianness : t), this.position += 2
        }, d.prototype.writeUint8 = function (e) {
            this._realloc(1), this._dataView.setUint8(this.position, e), this.position += 1
        }, d.prototype.writeFloat32 = function (e, t) {
            this._realloc(4), this._dataView.setFloat32(this.position, e, null == t ? this.endianness : t), this.position += 4
        }, d.prototype.writeFloat64 = function (e, t) {
            this._realloc(8), this._dataView.setFloat64(this.position, e, null == t ? this.endianness : t), this.position += 8
        }, d.prototype.writeUCS2String = function (e, t, r) {
            null == r && (r = e.length);
            for (var i = 0; i < e.length && i < r; i++) this.writeUint16(e.charCodeAt(i), t);
            for (; i < r; i++) this.writeUint16(0)
        }, d.prototype.writeString = function (e, t, r) {
            var i = 0;
            if (null == t || "ASCII" == t)
                if (null != r) {
                    var s = Math.min(e.length, r);
                    for (i = 0; i < s; i++) this.writeUint8(e.charCodeAt(i));
                    for (; i < r; i++) this.writeUint8(0)
                } else
                    for (i = 0; i < e.length; i++) this.writeUint8(e.charCodeAt(i));
            else this.writeUint8Array(new TextEncoder(t).encode(e.substring(0, r)))
        }, d.prototype.writeCString = function (e, t) {
            var r = 0;
            if (null != t) {
                var i = Math.min(e.length, t);
                for (r = 0; r < i; r++) this.writeUint8(e.charCodeAt(r));
                for (; r < t; r++) this.writeUint8(0)
            } else {
                for (r = 0; r < e.length; r++) this.writeUint8(e.charCodeAt(r));
                this.writeUint8(0)
            }
        }, d.prototype.writeStruct = function (e, t) {
            for (var r = 0; r < e.length; r += 2) {
                var i = e[r + 1];
                this.writeType(i, t[e[r]], t)
            }
        }, d.prototype.writeType = function (e, t, r) {
            var i;
            if ("function" == typeof e) return e(this, t);
            if ("object" == typeof e && !(e instanceof Array)) return e.set(this, t, r);
            var s = null,
                n = "ASCII",
                a = this.position;
            switch ("string" == typeof e && /:/.test(e) && (i = e.split(":"), e = i[0], s = parseInt(i[1])), "string" == typeof e && /,/.test(e) && (i = e.split(","), e = i[0], n = parseInt(i[1])), e) {
                case "uint8":
                    this.writeUint8(t);
                    break;
                case "int8":
                    this.writeInt8(t);
                    break;
                case "uint16":
                    this.writeUint16(t, this.endianness);
                    break;
                case "int16":
                    this.writeInt16(t, this.endianness);
                    break;
                case "uint32":
                    this.writeUint32(t, this.endianness);
                    break;
                case "int32":
                    this.writeInt32(t, this.endianness);
                    break;
                case "float32":
                    this.writeFloat32(t, this.endianness);
                    break;
                case "float64":
                    this.writeFloat64(t, this.endianness);
                    break;
                case "uint16be":
                    this.writeUint16(t, d.BIG_ENDIAN);
                    break;
                case "int16be":
                    this.writeInt16(t, d.BIG_ENDIAN);
                    break;
                case "uint32be":
                    this.writeUint32(t, d.BIG_ENDIAN);
                    break;
                case "int32be":
                    this.writeInt32(t, d.BIG_ENDIAN);
                    break;
                case "float32be":
                    this.writeFloat32(t, d.BIG_ENDIAN);
                    break;
                case "float64be":
                    this.writeFloat64(t, d.BIG_ENDIAN);
                    break;
                case "uint16le":
                    this.writeUint16(t, d.LITTLE_ENDIAN);
                    break;
                case "int16le":
                    this.writeInt16(t, d.LITTLE_ENDIAN);
                    break;
                case "uint32le":
                    this.writeUint32(t, d.LITTLE_ENDIAN);
                    break;
                case "int32le":
                    this.writeInt32(t, d.LITTLE_ENDIAN);
                    break;
                case "float32le":
                    this.writeFloat32(t, d.LITTLE_ENDIAN);
                    break;
                case "float64le":
                    this.writeFloat64(t, d.LITTLE_ENDIAN);
                    break;
                case "cstring":
                    this.writeCString(t, s);
                    break;
                case "string":
                    this.writeString(t, n, s);
                    break;
                case "u16string":
                    this.writeUCS2String(t, this.endianness, s);
                    break;
                case "u16stringle":
                    this.writeUCS2String(t, d.LITTLE_ENDIAN, s);
                    break;
                case "u16stringbe":
                    this.writeUCS2String(t, d.BIG_ENDIAN, s);
                    break;
                default:
                    if (3 == e.length) {
                        for (var o = e[1], l = 0; l < t.length; l++) this.writeType(o, t[l]);
                        break
                    }
                    this.writeStruct(e, t)
            }
            null != s && (this.position = a, this._realloc(s), this.position = a + s)
        }, d.prototype.writeUint64 = function (e) {
            var t = Math.floor(e / l);
            this.writeUint32(t), this.writeUint32(4294967295 & e)
        }, d.prototype.writeUint24 = function (e) {
            this.writeUint8((16711680 & e) >> 16), this.writeUint8((65280 & e) >> 8), this.writeUint8(255 & e)
        }, d.prototype.adjustUint32 = function (e, t) {
            var r = this.position;
            this.seek(e), this.writeUint32(t), this.seek(r)
        }, d.prototype.mapInt32Array = function (e, t) {
            this._realloc(4 * e);
            var r = new Int32Array(this._buffer, this.byteOffset + this.position, e);
            return d.arrayToNative(r, null == t ? this.endianness : t), this.position += 4 * e, r
        }, d.prototype.mapInt16Array = function (e, t) {
            this._realloc(2 * e);
            var r = new Int16Array(this._buffer, this.byteOffset + this.position, e);
            return d.arrayToNative(r, null == t ? this.endianness : t), this.position += 2 * e, r
        }, d.prototype.mapInt8Array = function (e) {
            this._realloc(1 * e);
            var t = new Int8Array(this._buffer, this.byteOffset + this.position, e);
            return this.position += 1 * e, t
        }, d.prototype.mapUint32Array = function (e, t) {
            this._realloc(4 * e);
            var r = new Uint32Array(this._buffer, this.byteOffset + this.position, e);
            return d.arrayToNative(r, null == t ? this.endianness : t), this.position += 4 * e, r
        }, d.prototype.mapUint16Array = function (e, t) {
            this._realloc(2 * e);
            var r = new Uint16Array(this._buffer, this.byteOffset + this.position, e);
            return d.arrayToNative(r, null == t ? this.endianness : t), this.position += 2 * e, r
        }, d.prototype.mapFloat64Array = function (e, t) {
            this._realloc(8 * e);
            var r = new Float64Array(this._buffer, this.byteOffset + this.position, e);
            return d.arrayToNative(r, null == t ? this.endianness : t), this.position += 8 * e, r
        }, d.prototype.mapFloat32Array = function (e, t) {
            this._realloc(4 * e);
            var r = new Float32Array(this._buffer, this.byteOffset + this.position, e);
            return d.arrayToNative(r, null == t ? this.endianness : t), this.position += 4 * e, r
        };
        var u = function (e) {
            this.buffers = [], this.bufferIndex = -1, e && (this.insertBuffer(e), this.bufferIndex = 0)
        };
        (u.prototype = new d(new ArrayBuffer, 0, d.BIG_ENDIAN)).initialized = function () {
            var e;
            return this.bufferIndex > -1 || (this.buffers.length > 0 ? 0 === (e = this.buffers[0]).fileStart ? (this.buffer = e, this.bufferIndex = 0, a.debug("MultiBufferStream", "Stream ready for parsing"), !0) : (a.warn("MultiBufferStream", "The first buffer should have a fileStart of 0"), this.logBufferLevel(), !1) : (a.warn("MultiBufferStream", "No buffer to start parsing from"), this.logBufferLevel(), !1))
        }, ArrayBuffer.concat = function (e, t) {
            a.debug("ArrayBuffer", "Trying to create a new buffer of size: " + (e.byteLength + t.byteLength));
            var r = new Uint8Array(e.byteLength + t.byteLength);
            return r.set(new Uint8Array(e), 0), r.set(new Uint8Array(t), e.byteLength), r.buffer
        }, u.prototype.reduceBuffer = function (e, t, r) {
            var i;
            return (i = new Uint8Array(r)).set(new Uint8Array(e, t, r)), i.buffer.fileStart = e.fileStart + t, i.buffer.usedBytes = 0, i.buffer
        }, u.prototype.insertBuffer = function (e) {
            for (var t = !0, r = 0; r < this.buffers.length; r++) {
                var i = this.buffers[r];
                if (e.fileStart <= i.fileStart) {
                    if (e.fileStart === i.fileStart) {
                        if (e.byteLength > i.byteLength) {
                            this.buffers.splice(r, 1), r--;
                            continue
                        }
                        a.warn("MultiBufferStream", "Buffer (fileStart: " + e.fileStart + " - Length: " + e.byteLength + ") already appended, ignoring")
                    } else e.fileStart + e.byteLength <= i.fileStart || (e = this.reduceBuffer(e, 0, i.fileStart - e.fileStart)), a.debug("MultiBufferStream", "Appending new buffer (fileStart: " + e.fileStart + " - Length: " + e.byteLength + ")"), this.buffers.splice(r, 0, e), 0 === r && (this.buffer = e);
                    t = !1;
                    break
                }
                if (e.fileStart < i.fileStart + i.byteLength) {
                    var s = i.fileStart + i.byteLength - e.fileStart,
                        n = e.byteLength - s;
                    if (!(n > 0)) {
                        t = !1;
                        break
                    }
                    e = this.reduceBuffer(e, s, n)
                }
            }
            t && (a.debug("MultiBufferStream", "Appending new buffer (fileStart: " + e.fileStart + " - Length: " + e.byteLength + ")"), this.buffers.push(e), 0 === r && (this.buffer = e))
        }, u.prototype.logBufferLevel = function (e) {
            var t, r, i, s, n, o = [],
                d = "";
            for (i = 0, s = 0, t = 0; t < this.buffers.length; t++) r = this.buffers[t], 0 === t ? (n = {}, o.push(n), n.start = r.fileStart, n.end = r.fileStart + r.byteLength, d += "[" + n.start + "-") : n.end === r.fileStart ? n.end = r.fileStart + r.byteLength : ((n = {}).start = r.fileStart, d += o[o.length - 1].end - 1 + "], [" + n.start + "-", n.end = r.fileStart + r.byteLength, o.push(n)), i += r.usedBytes, s += r.byteLength;
            o.length > 0 && (d += n.end - 1 + "]");
            var l = e ? a.info : a.debug;
            0 === this.buffers.length ? l("MultiBufferStream", "No more buffer in memory") : l("MultiBufferStream", this.buffers.length + " stored buffer(s) (" + i + "/" + s + " bytes), continuous ranges: " + d)
        }, u.prototype.cleanBuffers = function () {
            var e, t;
            for (e = 0; e < this.buffers.length; e++)(t = this.buffers[e]).usedBytes === t.byteLength && (a.debug("MultiBufferStream", "Removing buffer #" + e), this.buffers.splice(e, 1), e--)
        }, u.prototype.mergeNextBuffer = function () {
            var e;
            if (this.bufferIndex + 1 < this.buffers.length) {
                if ((e = this.buffers[this.bufferIndex + 1]).fileStart === this.buffer.fileStart + this.buffer.byteLength) {
                    var t = this.buffer.byteLength,
                        r = this.buffer.usedBytes,
                        i = this.buffer.fileStart;
                    return this.buffers[this.bufferIndex] = ArrayBuffer.concat(this.buffer, e), this.buffer = this.buffers[this.bufferIndex], this.buffers.splice(this.bufferIndex + 1, 1), this.buffer.usedBytes = r, this.buffer.fileStart = i, a.debug("ISOFile", "Concatenating buffer for box parsing (length: " + t + "->" + this.buffer.byteLength + ")"), !0
                }
                return !1
            }
            return !1
        }, u.prototype.findPosition = function (e, t, r) {
            var i, s = null,
                n = -1;
            for (i = !0 === e ? 0 : this.bufferIndex; i < this.buffers.length && (s = this.buffers[i]).fileStart <= t;) n = i, r && (s.fileStart + s.byteLength <= t ? s.usedBytes = s.byteLength : s.usedBytes = t - s.fileStart, this.logBufferLevel()), i++;
            return -1 !== n && (s = this.buffers[n]).fileStart + s.byteLength >= t ? (a.debug("MultiBufferStream", "Found position in existing buffer #" + n), n) : -1
        }, u.prototype.findEndContiguousBuf = function (e) {
            var t, r, i, s = void 0 !== e ? e : this.bufferIndex;
            if (r = this.buffers[s], this.buffers.length > s + 1)
                for (t = s + 1; t < this.buffers.length && (i = this.buffers[t]).fileStart === r.fileStart + r.byteLength; t++) r = i;
            return r.fileStart + r.byteLength
        }, u.prototype.getEndFilePositionAfter = function (e) {
            var t = this.findPosition(!0, e, !1);
            return -1 !== t ? this.findEndContiguousBuf(t) : e
        }, u.prototype.addUsedBytes = function (e) {
            this.buffer.usedBytes += e, this.logBufferLevel()
        }, u.prototype.setAllUsedBytes = function () {
            this.buffer.usedBytes = this.buffer.byteLength, this.logBufferLevel()
        }, u.prototype.seek = function (e, t, r) {
            var i;
            return -1 !== (i = this.findPosition(t, e, r)) ? (this.buffer = this.buffers[i], this.bufferIndex = i, this.position = e - this.buffer.fileStart, a.debug("MultiBufferStream", "Repositioning parser at buffer position: " + this.position), !0) : (a.debug("MultiBufferStream", "Position " + e + " not found in buffered data"), !1)
        }, u.prototype.getPosition = function () {
            if (-1 === this.bufferIndex || null === this.buffers[this.bufferIndex]) throw "Error accessing position in the MultiBufferStream";
            return this.buffers[this.bufferIndex].fileStart + this.position
        }, u.prototype.getLength = function () {
            return this.byteLength
        }, u.prototype.getEndPosition = function () {
            if (-1 === this.bufferIndex || null === this.buffers[this.bufferIndex]) throw "Error accessing position in the MultiBufferStream";
            return this.buffers[this.bufferIndex].fileStart + this.byteLength
        }, t.MultiBufferStream = u;
        var c = function () {
            var e = [];
            e[3] = "ES_Descriptor", e[4] = "DecoderConfigDescriptor", e[5] = "DecoderSpecificInfo", e[6] = "SLConfigDescriptor", this.getDescriptorName = function (t) {
                return e[t]
            };
            var t = this,
                r = {};
            return this.parseOneDescriptor = function (t) {
                var i, s, n, o = 0;
                for (i = t.readUint8(), n = t.readUint8(); 128 & n;) o = (127 & n) << 7, n = t.readUint8();
                return o += 127 & n, a.debug("MPEG4DescriptorParser", "Found " + (e[i] || "Descriptor " + i) + ", size " + o + " at position " + t.getPosition()), (s = e[i] ? new r[e[i]](o) : new r.Descriptor(o)).parse(t), s
            }, r.Descriptor = function (e, t) {
                this.tag = e, this.size = t, this.descs = []
            }, r.Descriptor.prototype.parse = function (e) {
                this.data = e.readUint8Array(this.size)
            }, r.Descriptor.prototype.findDescriptor = function (e) {
                for (var t = 0; t < this.descs.length; t++)
                    if (this.descs[t].tag == e) return this.descs[t];
                return null
            }, r.Descriptor.prototype.parseRemainingDescriptors = function (e) {
                for (var r = e.position; e.position < r + this.size;) {
                    var i = t.parseOneDescriptor(e);
                    this.descs.push(i)
                }
            }, r.ES_Descriptor = function (e) {
                r.Descriptor.call(this, 3, e)
            }, r.ES_Descriptor.prototype = new r.Descriptor, r.ES_Descriptor.prototype.parse = function (e) {
                if (this.ES_ID = e.readUint16(), this.flags = e.readUint8(), this.size -= 3, 128 & this.flags ? (this.dependsOn_ES_ID = e.readUint16(), this.size -= 2) : this.dependsOn_ES_ID = 0, 64 & this.flags) {
                    var t = e.readUint8();
                    this.URL = e.readString(t), this.size -= t + 1
                } else this.URL = "";
                32 & this.flags ? (this.OCR_ES_ID = e.readUint16(), this.size -= 2) : this.OCR_ES_ID = 0, this.parseRemainingDescriptors(e)
            }, r.ES_Descriptor.prototype.getOTI = function (e) {
                var t = this.findDescriptor(4);
                return t ? t.oti : 0
            }, r.ES_Descriptor.prototype.getAudioConfig = function (e) {
                var t = this.findDescriptor(4);
                if (!t) return null;
                var r = t.findDescriptor(5);
                if (r && r.data) {
                    var i = (248 & r.data[0]) >> 3;
                    return 31 === i && r.data.length >= 2 && (i = 32 + ((7 & r.data[0]) << 3) + ((224 & r.data[1]) >> 5)), i
                }
                return null
            }, r.DecoderConfigDescriptor = function (e) {
                r.Descriptor.call(this, 4, e)
            }, r.DecoderConfigDescriptor.prototype = new r.Descriptor, r.DecoderConfigDescriptor.prototype.parse = function (e) {
                this.oti = e.readUint8(), this.streamType = e.readUint8(), this.upStream = 0 != (this.streamType >> 1 & 1), this.streamType = this.streamType >>> 2, this.bufferSize = e.readUint24(), this.maxBitrate = e.readUint32(), this.avgBitrate = e.readUint32(), this.size -= 13, this.parseRemainingDescriptors(e)
            }, r.DecoderSpecificInfo = function (e) {
                r.Descriptor.call(this, 5, e)
            }, r.DecoderSpecificInfo.prototype = new r.Descriptor, r.SLConfigDescriptor = function (e) {
                r.Descriptor.call(this, 6, e)
            }, r.SLConfigDescriptor.prototype = new r.Descriptor, this
        };
        t.MPEG4DescriptorParser = c;
        var h = {
            ERR_INVALID_DATA: -1,
            ERR_NOT_ENOUGH_DATA: 0,
            OK: 1,
            BASIC_BOXES: ["mdat", "idat", "free", "skip", "meco", "strk"],
            FULL_BOXES: ["hmhd", "nmhd", "iods", "xml ", "bxml", "ipro", "mere"],
            CONTAINER_BOXES: [
                ["moov", ["trak", "pssh"]],
                ["trak"],
                ["edts"],
                ["mdia"],
                ["minf"],
                ["dinf"],
                ["stbl", ["sgpd", "sbgp"]],
                ["mvex", ["trex"]],
                ["moof", ["traf"]],
                ["traf", ["trun", "sgpd", "sbgp"]],
                ["vttc"],
                ["tref"],
                ["iref"],
                ["mfra", ["tfra"]],
                ["meco"],
                ["hnti"],
                ["hinf"],
                ["strk"],
                ["strd"],
                ["sinf"],
                ["rinf"],
                ["schi"],
                ["trgr"],
                ["udta", ["kind"]],
                ["iprp", ["ipma"]],
                ["ipco"],
                ["grpl"],
                ["j2kH"],
                ["etyp", ["tyco"]]
            ],
            boxCodes: [],
            fullBoxCodes: [],
            containerBoxCodes: [],
            sampleEntryCodes: {},
            sampleGroupEntryCodes: [],
            trackGroupTypes: [],
            UUIDBoxes: {},
            UUIDs: [],
            initialize: function () {
                h.FullBox.prototype = new h.Box, h.ContainerBox.prototype = new h.Box, h.SampleEntry.prototype = new h.Box, h.TrackGroupTypeBox.prototype = new h.FullBox, h.BASIC_BOXES.forEach((function (e) {
                    h.createBoxCtor(e)
                })), h.FULL_BOXES.forEach((function (e) {
                    h.createFullBoxCtor(e)
                })), h.CONTAINER_BOXES.forEach((function (e) {
                    h.createContainerBoxCtor(e[0], null, e[1])
                }))
            },
            Box: function (e, t, r) {
                this.type = e, this.size = t, this.uuid = r
            },
            FullBox: function (e, t, r) {
                h.Box.call(this, e, t, r), this.flags = 0, this.version = 0
            },
            ContainerBox: function (e, t, r) {
                h.Box.call(this, e, t, r), this.boxes = []
            },
            SampleEntry: function (e, t, r, i) {
                h.ContainerBox.call(this, e, t), this.hdr_size = r, this.start = i
            },
            SampleGroupEntry: function (e) {
                this.grouping_type = e
            },
            TrackGroupTypeBox: function (e, t) {
                h.FullBox.call(this, e, t)
            },
            createBoxCtor: function (e, t) {
                h.boxCodes.push(e), h[e + "Box"] = function (t) {
                    h.Box.call(this, e, t)
                }, h[e + "Box"].prototype = new h.Box, t && (h[e + "Box"].prototype.parse = t)
            },
            createFullBoxCtor: function (e, t) {
                h[e + "Box"] = function (t) {
                    h.FullBox.call(this, e, t)
                }, h[e + "Box"].prototype = new h.FullBox, h[e + "Box"].prototype.parse = function (e) {
                    this.parseFullHeader(e), t && t.call(this, e)
                }
            },
            addSubBoxArrays: function (e) {
                if (e) {
                    this.subBoxNames = e;
                    for (var t = e.length, r = 0; r < t; r++) this[e[r] + "s"] = []
                }
            },
            createContainerBoxCtor: function (e, t, r) {
                h[e + "Box"] = function (t) {
                    h.ContainerBox.call(this, e, t), h.addSubBoxArrays.call(this, r)
                }, h[e + "Box"].prototype = new h.ContainerBox, t && (h[e + "Box"].prototype.parse = t)
            },
            createMediaSampleEntryCtor: function (e, t, r) {
                h.sampleEntryCodes[e] = [], h[e + "SampleEntry"] = function (e, t) {
                    h.SampleEntry.call(this, e, t), h.addSubBoxArrays.call(this, r)
                }, h[e + "SampleEntry"].prototype = new h.SampleEntry, t && (h[e + "SampleEntry"].prototype.parse = t)
            },
            createSampleEntryCtor: function (e, t, r, i) {
                h.sampleEntryCodes[e].push(t), h[t + "SampleEntry"] = function (r) {
                    h[e + "SampleEntry"].call(this, t, r), h.addSubBoxArrays.call(this, i)
                }, h[t + "SampleEntry"].prototype = new h[e + "SampleEntry"], r && (h[t + "SampleEntry"].prototype.parse = r)
            },
            createEncryptedSampleEntryCtor: function (e, t, r) {
                h.createSampleEntryCtor.call(this, e, t, r, ["sinf"])
            },
            createSampleGroupCtor: function (e, t) {
                h[e + "SampleGroupEntry"] = function (t) {
                    h.SampleGroupEntry.call(this, e, t)
                }, h[e + "SampleGroupEntry"].prototype = new h.SampleGroupEntry, t && (h[e + "SampleGroupEntry"].prototype.parse = t)
            },
            createTrackGroupCtor: function (e, t) {
                h[e + "TrackGroupTypeBox"] = function (t) {
                    h.TrackGroupTypeBox.call(this, e, t)
                }, h[e + "TrackGroupTypeBox"].prototype = new h.TrackGroupTypeBox, t && (h[e + "TrackGroupTypeBox"].prototype.parse = t)
            },
            createUUIDBox: function (e, t, r, i) {
                h.UUIDs.push(e), h.UUIDBoxes[e] = function (i) {
                    t ? h.FullBox.call(this, "uuid", i, e) : r ? h.ContainerBox.call(this, "uuid", i, e) : h.Box.call(this, "uuid", i, e)
                }, h.UUIDBoxes[e].prototype = t ? new h.FullBox : r ? new h.ContainerBox : new h.Box, i && (h.UUIDBoxes[e].prototype.parse = t ? function (e) {
                    this.parseFullHeader(e), i && i.call(this, e)
                } : i)
            }
        };

        function f(e, t) {
            this.x = e, this.y = t
        }

        function p(e, t) {
            this.bad_pixel_row = e, this.bad_pixel_column = t
        }
        h.initialize(), h.TKHD_FLAG_ENABLED = 1, h.TKHD_FLAG_IN_MOVIE = 2, h.TKHD_FLAG_IN_PREVIEW = 4, h.TFHD_FLAG_BASE_DATA_OFFSET = 1, h.TFHD_FLAG_SAMPLE_DESC = 2, h.TFHD_FLAG_SAMPLE_DUR = 8, h.TFHD_FLAG_SAMPLE_SIZE = 16, h.TFHD_FLAG_SAMPLE_FLAGS = 32, h.TFHD_FLAG_DUR_EMPTY = 65536, h.TFHD_FLAG_DEFAULT_BASE_IS_MOOF = 131072, h.TRUN_FLAGS_DATA_OFFSET = 1, h.TRUN_FLAGS_FIRST_FLAG = 4, h.TRUN_FLAGS_DURATION = 256, h.TRUN_FLAGS_SIZE = 512, h.TRUN_FLAGS_FLAGS = 1024, h.TRUN_FLAGS_CTS_OFFSET = 2048, h.Box.prototype.add = function (e) {
            return this.addBox(new h[e + "Box"])
        }, h.Box.prototype.addBox = function (e) {
            return this.boxes.push(e), this[e.type + "s"] ? this[e.type + "s"].push(e) : this[e.type] = e, e
        }, h.Box.prototype.set = function (e, t) {
            return this[e] = t, this
        }, h.Box.prototype.addEntry = function (e, t) {
            var r = t || "entries";
            return this[r] || (this[r] = []), this[r].push(e), this
        }, t.BoxParser = h, h.parseUUID = function (e) {
            return h.parseHex16(e)
        }, h.parseHex16 = function (e) {
            for (var t = "", r = 0; r < 16; r++) {
                var i = e.readUint8().toString(16);
                t += 1 === i.length ? "0" + i : i
            }
            return t
        }, h.parseOneBox = function (e, t, r) {
            var i, s, n, o = e.getPosition(),
                d = 0;
            if (e.getEndPosition() - o < 8) return a.debug("BoxParser", "Not enough data in stream to parse the type and size of the box"), {
                code: h.ERR_NOT_ENOUGH_DATA
            };
            if (r && r < 8) return a.debug("BoxParser", "Not enough bytes left in the parent box to parse a new box"), {
                code: h.ERR_NOT_ENOUGH_DATA
            };
            var l = e.readUint32(),
                u = e.readString(4),
                c = u;
            if (a.debug("BoxParser", "Found box of type '" + u + "' and size " + l + " at position " + o), d = 8, "uuid" == u) {
                if (e.getEndPosition() - e.getPosition() < 16 || r - d < 16) return e.seek(o), a.debug("BoxParser", "Not enough bytes left in the parent box to parse a UUID box"), {
                    code: h.ERR_NOT_ENOUGH_DATA
                };
                d += 16, c = n = h.parseUUID(e)
            }
            if (1 == l) {
                if (e.getEndPosition() - e.getPosition() < 8 || r && r - d < 8) return e.seek(o), a.warn("BoxParser", 'Not enough data in stream to parse the extended size of the "' + u + '" box'), {
                    code: h.ERR_NOT_ENOUGH_DATA
                };
                l = e.readUint64(), d += 8
            } else if (0 === l)
                if (r) l = r;
                else if ("mdat" !== u) return a.error("BoxParser", "Unlimited box size not supported for type: '" + u + "'"), i = new h.Box(u, l), {
                code: h.OK,
                box: i,
                size: i.size
            };
            return 0 !== l && l < d ? (a.error("BoxParser", "Box of type " + u + " has an invalid size " + l + " (too small to be a box)"), {
                code: h.ERR_NOT_ENOUGH_DATA,
                type: u,
                size: l,
                hdr_size: d,
                start: o
            }) : 0 !== l && r && l > r ? (a.error("BoxParser", "Box of type '" + u + "' has a size " + l + " greater than its container size " + r), {
                code: h.ERR_NOT_ENOUGH_DATA,
                type: u,
                size: l,
                hdr_size: d,
                start: o
            }) : 0 !== l && o + l > e.getEndPosition() ? (e.seek(o), a.info("BoxParser", "Not enough data in stream to parse the entire '" + u + "' box"), {
                code: h.ERR_NOT_ENOUGH_DATA,
                type: u,
                size: l,
                hdr_size: d,
                start: o
            }) : t ? {
                code: h.OK,
                type: u,
                size: l,
                hdr_size: d,
                start: o
            } : (h[u + "Box"] ? i = new h[u + "Box"](l) : "uuid" !== u ? (a.warn("BoxParser", "Unknown box type: '" + u + "'"), (i = new h.Box(u, l)).has_unparsed_data = !0) : h.UUIDBoxes[n] ? i = new h.UUIDBoxes[n](l) : (a.warn("BoxParser", "Unknown uuid type: '" + n + "'"), (i = new h.Box(u, l)).uuid = n, i.has_unparsed_data = !0), i.hdr_size = d, i.start = o, i.write === h.Box.prototype.write && "mdat" !== i.type && (a.info("BoxParser", "'" + c + "' box writing not yet implemented, keeping unparsed data in memory for later write"), i.parseDataAndRewind(e)), i.parse(e), (s = e.getPosition() - (i.start + i.size)) < 0 ? (a.warn("BoxParser", "Parsing of box '" + c + "' did not read the entire indicated box data size (missing " + -s + " bytes), seeking forward"), e.seek(i.start + i.size)) : s > 0 && (a.error("BoxParser", "Parsing of box '" + c + "' read " + s + " more bytes than the indicated box data size, seeking backwards"), 0 !== i.size && e.seek(i.start + i.size)), {
                code: h.OK,
                box: i,
                size: i.size
            })
        }, h.Box.prototype.parse = function (e) {
            "mdat" != this.type ? this.data = e.readUint8Array(this.size - this.hdr_size) : 0 === this.size ? e.seek(e.getEndPosition()) : e.seek(this.start + this.size)
        }, h.Box.prototype.parseDataAndRewind = function (e) {
            this.data = e.readUint8Array(this.size - this.hdr_size), e.position -= this.size - this.hdr_size
        }, h.FullBox.prototype.parseDataAndRewind = function (e) {
            this.parseFullHeader(e), this.data = e.readUint8Array(this.size - this.hdr_size), this.hdr_size -= 4, e.position -= this.size - this.hdr_size
        }, h.FullBox.prototype.parseFullHeader = function (e) {
            this.version = e.readUint8(), this.flags = e.readUint24(), this.hdr_size += 4
        }, h.FullBox.prototype.parse = function (e) {
            this.parseFullHeader(e), this.data = e.readUint8Array(this.size - this.hdr_size)
        }, h.ContainerBox.prototype.parse = function (e) {
            for (var t, r; e.getPosition() < this.start + this.size;) {
                if ((t = h.parseOneBox(e, !1, this.size - (e.getPosition() - this.start))).code !== h.OK) return;
                if (r = t.box, this.boxes.push(r), this.subBoxNames && -1 != this.subBoxNames.indexOf(r.type)) this[this.subBoxNames[this.subBoxNames.indexOf(r.type)] + "s"].push(r);
                else {
                    var i = "uuid" !== r.type ? r.type : r.uuid;
                    this[i] ? a.warn("Box of type " + i + " already stored in field of this type") : this[i] = r
                }
            }
        }, h.Box.prototype.parseLanguage = function (e) {
            this.language = e.readUint16();
            var t = [];
            t[0] = this.language >> 10 & 31, t[1] = this.language >> 5 & 31, t[2] = 31 & this.language, this.languageString = String.fromCharCode(t[0] + 96, t[1] + 96, t[2] + 96)
        }, h.SAMPLE_ENTRY_TYPE_VISUAL = "Visual", h.SAMPLE_ENTRY_TYPE_AUDIO = "Audio", h.SAMPLE_ENTRY_TYPE_HINT = "Hint", h.SAMPLE_ENTRY_TYPE_METADATA = "Metadata", h.SAMPLE_ENTRY_TYPE_SUBTITLE = "Subtitle", h.SAMPLE_ENTRY_TYPE_SYSTEM = "System", h.SAMPLE_ENTRY_TYPE_TEXT = "Text", h.SampleEntry.prototype.parseHeader = function (e) {
            e.readUint8Array(6), this.data_reference_index = e.readUint16(), this.hdr_size += 8
        }, h.SampleEntry.prototype.parse = function (e) {
            this.parseHeader(e), this.data = e.readUint8Array(this.size - this.hdr_size)
        }, h.SampleEntry.prototype.parseDataAndRewind = function (e) {
            this.parseHeader(e), this.data = e.readUint8Array(this.size - this.hdr_size), this.hdr_size -= 8, e.position -= this.size - this.hdr_size
        }, h.SampleEntry.prototype.parseFooter = function (e) {
            h.ContainerBox.prototype.parse.call(this, e)
        }, h.createMediaSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_HINT), h.createMediaSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_METADATA), h.createMediaSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_SUBTITLE), h.createMediaSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_SYSTEM), h.createMediaSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_TEXT), h.createMediaSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_VISUAL, (function (e) {
            var t;
            this.parseHeader(e), e.readUint16(), e.readUint16(), e.readUint32Array(3), this.width = e.readUint16(), this.height = e.readUint16(), this.horizresolution = e.readUint32(), this.vertresolution = e.readUint32(), e.readUint32(), this.frame_count = e.readUint16(), t = Math.min(31, e.readUint8()), this.compressorname = e.readString(t), t < 31 && e.readString(31 - t), this.depth = e.readUint16(), e.readUint16(), this.parseFooter(e)
        })), h.createMediaSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_AUDIO, (function (e) {
            this.parseHeader(e), e.readUint32Array(2), this.channel_count = e.readUint16(), this.samplesize = e.readUint16(), e.readUint16(), e.readUint16(), this.samplerate = e.readUint32() / 65536, this.parseFooter(e)
        })), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_VISUAL, "avc1"), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_VISUAL, "avc2"), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_VISUAL, "avc3"), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_VISUAL, "avc4"), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_VISUAL, "av01"), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_VISUAL, "dav1"), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_VISUAL, "hvc1"), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_VISUAL, "hev1"), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_VISUAL, "hvt1"), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_VISUAL, "lhe1"), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_VISUAL, "dvh1"), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_VISUAL, "dvhe"), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_VISUAL, "vvc1"), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_VISUAL, "vvi1"), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_VISUAL, "vvs1"), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_VISUAL, "vvcN"), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_VISUAL, "vp08"), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_VISUAL, "vp09"), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_VISUAL, "avs3"), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_VISUAL, "j2ki"), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_VISUAL, "mjp2"), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_VISUAL, "mjpg"), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_VISUAL, "uncv"), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_AUDIO, "mp4a"), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_AUDIO, "ac-3"), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_AUDIO, "ac-4"), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_AUDIO, "ec-3"), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_AUDIO, "Opus"), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_AUDIO, "mha1"), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_AUDIO, "mha2"), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_AUDIO, "mhm1"), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_AUDIO, "mhm2"), h.createEncryptedSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_VISUAL, "encv"), h.createEncryptedSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_AUDIO, "enca"), h.createEncryptedSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_SUBTITLE, "encu"), h.createEncryptedSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_SYSTEM, "encs"), h.createEncryptedSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_TEXT, "enct"), h.createEncryptedSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_METADATA, "encm"), h.createBoxCtor("a1lx", (function (e) {
            var t = 16 * (1 + (1 & (1 & e.readUint8())));
            this.layer_size = [];
            for (var r = 0; r < 3; r++) this.layer_size[r] = 16 == t ? e.readUint16() : e.readUint32()
        })), h.createBoxCtor("a1op", (function (e) {
            this.op_index = e.readUint8()
        })), h.createFullBoxCtor("auxC", (function (e) {
            this.aux_type = e.readCString();
            var t = this.size - this.hdr_size - (this.aux_type.length + 1);
            this.aux_subtype = e.readUint8Array(t)
        })), h.createBoxCtor("av1C", (function (e) {
            var t = e.readUint8();
            if (t >> 7 & !1) a.error("av1C marker problem");
            else if (this.version = 127 & t, 1 === this.version)
                if (t = e.readUint8(), this.seq_profile = t >> 5 & 7, this.seq_level_idx_0 = 31 & t, t = e.readUint8(), this.seq_tier_0 = t >> 7 & 1, this.high_bitdepth = t >> 6 & 1, this.twelve_bit = t >> 5 & 1, this.monochrome = t >> 4 & 1, this.chroma_subsampling_x = t >> 3 & 1, this.chroma_subsampling_y = t >> 2 & 1, this.chroma_sample_position = 3 & t, t = e.readUint8(), this.reserved_1 = t >> 5 & 7, 0 === this.reserved_1) {
                    if (this.initial_presentation_delay_present = t >> 4 & 1, 1 === this.initial_presentation_delay_present) this.initial_presentation_delay_minus_one = 15 & t;
                    else if (this.reserved_2 = 15 & t, 0 !== this.reserved_2) return void a.error("av1C reserved_2 parsing problem");
                    var r = this.size - this.hdr_size - 4;
                    this.configOBUs = e.readUint8Array(r)
                } else a.error("av1C reserved_1 parsing problem");
            else a.error("av1C version " + this.version + " not supported")
        })), h.createBoxCtor("avcC", (function (e) {
            var t, r;
            for (this.configurationVersion = e.readUint8(), this.AVCProfileIndication = e.readUint8(), this.profile_compatibility = e.readUint8(), this.AVCLevelIndication = e.readUint8(), this.lengthSizeMinusOne = 3 & e.readUint8(), this.nb_SPS_nalus = 31 & e.readUint8(), r = this.size - this.hdr_size - 6, this.SPS = [], t = 0; t < this.nb_SPS_nalus; t++) this.SPS[t] = {}, this.SPS[t].length = e.readUint16(), this.SPS[t].nalu = e.readUint8Array(this.SPS[t].length), r -= 2 + this.SPS[t].length;
            for (this.nb_PPS_nalus = e.readUint8(), r--, this.PPS = [], t = 0; t < this.nb_PPS_nalus; t++) this.PPS[t] = {}, this.PPS[t].length = e.readUint16(), this.PPS[t].nalu = e.readUint8Array(this.PPS[t].length), r -= 2 + this.PPS[t].length;
            r > 0 && (this.ext = e.readUint8Array(r))
        })), h.createBoxCtor("btrt", (function (e) {
            this.bufferSizeDB = e.readUint32(), this.maxBitrate = e.readUint32(), this.avgBitrate = e.readUint32()
        })), h.createFullBoxCtor("ccst", (function (e) {
            var t = e.readUint8();
            this.all_ref_pics_intra = 128 == (128 & t), this.intra_pred_used = 64 == (64 & t), this.max_ref_per_pic = (63 & t) >> 2, e.readUint24()
        })), h.createBoxCtor("cdef", (function (e) {
            var t;
            for (this.channel_count = e.readUint16(), this.channel_indexes = [], this.channel_types = [], this.channel_associations = [], t = 0; t < this.channel_count; t++) this.channel_indexes.push(e.readUint16()), this.channel_types.push(e.readUint16()), this.channel_associations.push(e.readUint16())
        })), h.createBoxCtor("clap", (function (e) {
            this.cleanApertureWidthN = e.readUint32(), this.cleanApertureWidthD = e.readUint32(), this.cleanApertureHeightN = e.readUint32(), this.cleanApertureHeightD = e.readUint32(), this.horizOffN = e.readUint32(), this.horizOffD = e.readUint32(), this.vertOffN = e.readUint32(), this.vertOffD = e.readUint32()
        })), h.createBoxCtor("clli", (function (e) {
            this.max_content_light_level = e.readUint16(), this.max_pic_average_light_level = e.readUint16()
        })), h.createFullBoxCtor("cmex", (function (e) {
            1 & this.flags && (this.pos_x = e.readInt32()), 2 & this.flags && (this.pos_y = e.readInt32()), 4 & this.flags && (this.pos_z = e.readInt32()), 8 & this.flags && (0 == this.version ? 16 & this.flags ? (this.quat_x = e.readInt32(), this.quat_y = e.readInt32(), this.quat_z = e.readInt32()) : (this.quat_x = e.readInt16(), this.quat_y = e.readInt16(), this.quat_z = e.readInt16()) : this.version), 32 & this.flags && (this.id = e.readUint32())
        })), h.createFullBoxCtor("cmin", (function (e) {
            this.focal_length_x = e.readInt32(), this.principal_point_x = e.readInt32(), this.principal_point_y = e.readInt32(), 1 & this.flags && (this.focal_length_y = e.readInt32(), this.skew_factor = e.readInt32())
        })), h.createBoxCtor("cmpd", (function (e) {
            for (this.component_count = e.readUint32(), this.component_types = [], this.component_type_urls = [], i = 0; i < this.component_count; i++) {
                var t = e.readUint16();
                this.component_types.push(t), t >= 32768 && this.component_type_urls.push(e.readCString())
            }
        })), h.createFullBoxCtor("co64", (function (e) {
            var t, r;
            if (t = e.readUint32(), this.chunk_offsets = [], 0 === this.version)
                for (r = 0; r < t; r++) this.chunk_offsets.push(e.readUint64())
        })), h.createFullBoxCtor("CoLL", (function (e) {
            this.maxCLL = e.readUint16(), this.maxFALL = e.readUint16()
        })), h.createBoxCtor("colr", (function (e) {
            if (this.colour_type = e.readString(4), "nclx" === this.colour_type) {
                this.colour_primaries = e.readUint16(), this.transfer_characteristics = e.readUint16(), this.matrix_coefficients = e.readUint16();
                var t = e.readUint8();
                this.full_range_flag = t >> 7
            } else("rICC" === this.colour_type || "prof" === this.colour_type) && (this.ICC_profile = e.readUint8Array(this.size - 4))
        })), h.createFullBoxCtor("cprt", (function (e) {
            this.parseLanguage(e), this.notice = e.readCString()
        })), h.createFullBoxCtor("cslg", (function (e) {
            0 === this.version && (this.compositionToDTSShift = e.readInt32(), this.leastDecodeToDisplayDelta = e.readInt32(), this.greatestDecodeToDisplayDelta = e.readInt32(), this.compositionStartTime = e.readInt32(), this.compositionEndTime = e.readInt32())
        })), h.createFullBoxCtor("ctts", (function (e) {
            var t, r;
            if (t = e.readUint32(), this.sample_counts = [], this.sample_offsets = [], 0 === this.version)
                for (r = 0; r < t; r++) {
                    this.sample_counts.push(e.readUint32());
                    var i = e.readInt32();
                    i < 0 && a.warn("BoxParser", "ctts box uses negative values without using version 1"), this.sample_offsets.push(i)
                } else if (1 == this.version)
                    for (r = 0; r < t; r++) this.sample_counts.push(e.readUint32()), this.sample_offsets.push(e.readInt32())
        })), h.createBoxCtor("dac3", (function (e) {
            var t = e.readUint8(),
                r = e.readUint8(),
                i = e.readUint8();
            this.fscod = t >> 6, this.bsid = t >> 1 & 31, this.bsmod = (1 & t) << 2 | r >> 6 & 3, this.acmod = r >> 3 & 7, this.lfeon = r >> 2 & 1, this.bit_rate_code = 3 & r | i >> 5 & 7
        })), h.createBoxCtor("dec3", (function (e) {
            var t = e.readUint16();
            this.data_rate = t >> 3, this.num_ind_sub = 7 & t, this.ind_subs = [];
            for (var r = 0; r < this.num_ind_sub + 1; r++) {
                var i = {};
                this.ind_subs.push(i);
                var s = e.readUint8(),
                    n = e.readUint8(),
                    a = e.readUint8();
                i.fscod = s >> 6, i.bsid = s >> 1 & 31, i.bsmod = (1 & s) << 4 | n >> 4 & 15, i.acmod = n >> 1 & 7, i.lfeon = 1 & n, i.num_dep_sub = a >> 1 & 15, i.num_dep_sub > 0 && (i.chan_loc = (1 & a) << 8 | e.readUint8())
            }
        })), h.createFullBoxCtor("dfLa", (function (e) {
            var t = [],
                r = ["STREAMINFO", "PADDING", "APPLICATION", "SEEKTABLE", "VORBIS_COMMENT", "CUESHEET", "PICTURE", "RESERVED"];
            for (this.parseFullHeader(e);;) {
                var i = e.readUint8(),
                    s = Math.min(127 & i, r.length - 1);
                if (s ? e.readUint8Array(e.readUint24()) : (e.readUint8Array(13), this.samplerate = e.readUint32() >> 12, e.readUint8Array(20)), t.push(r[s]), 128 & i) break
            }
            this.numMetadataBlocks = t.length + " (" + t.join(", ") + ")"
        })), h.createBoxCtor("dimm", (function (e) {
            this.bytessent = e.readUint64()
        })), h.createBoxCtor("dmax", (function (e) {
            this.time = e.readUint32()
        })), h.createBoxCtor("dmed", (function (e) {
            this.bytessent = e.readUint64()
        })), h.createBoxCtor("dOps", (function (e) {
            if (this.Version = e.readUint8(), this.OutputChannelCount = e.readUint8(), this.PreSkip = e.readUint16(), this.InputSampleRate = e.readUint32(), this.OutputGain = e.readInt16(), this.ChannelMappingFamily = e.readUint8(), 0 !== this.ChannelMappingFamily) {
                this.StreamCount = e.readUint8(), this.CoupledCount = e.readUint8(), this.ChannelMapping = [];
                for (var t = 0; t < this.OutputChannelCount; t++) this.ChannelMapping[t] = e.readUint8()
            }
        })), h.createFullBoxCtor("dref", (function (e) {
            var t, r;
            this.entries = [];
            for (var i = e.readUint32(), s = 0; s < i; s++) {
                if ((t = h.parseOneBox(e, !1, this.size - (e.getPosition() - this.start))).code !== h.OK) return;
                r = t.box, this.entries.push(r)
            }
        })), h.createBoxCtor("drep", (function (e) {
            this.bytessent = e.readUint64()
        })), h.createFullBoxCtor("elng", (function (e) {
            this.extended_language = e.readString(this.size - this.hdr_size)
        })), h.createFullBoxCtor("elst", (function (e) {
            this.entries = [];
            for (var t = e.readUint32(), r = 0; r < t; r++) {
                var i = {};
                this.entries.push(i), 1 === this.version ? (i.segment_duration = e.readUint64(), i.media_time = e.readInt64()) : (i.segment_duration = e.readUint32(), i.media_time = e.readInt32()), i.media_rate_integer = e.readInt16(), i.media_rate_fraction = e.readInt16()
            }
        })), h.createFullBoxCtor("emsg", (function (e) {
            1 == this.version ? (this.timescale = e.readUint32(), this.presentation_time = e.readUint64(), this.event_duration = e.readUint32(), this.id = e.readUint32(), this.scheme_id_uri = e.readCString(), this.value = e.readCString()) : (this.scheme_id_uri = e.readCString(), this.value = e.readCString(), this.timescale = e.readUint32(), this.presentation_time_delta = e.readUint32(), this.event_duration = e.readUint32(), this.id = e.readUint32());
            var t = this.size - this.hdr_size - (16 + (this.scheme_id_uri.length + 1) + (this.value.length + 1));
            1 == this.version && (t -= 4), this.message_data = e.readUint8Array(t)
        })), h.createEntityToGroupCtor = function (e, t) {
            h[e + "Box"] = function (t) {
                h.FullBox.call(this, e, t)
            }, h[e + "Box"].prototype = new h.FullBox, h[e + "Box"].prototype.parse = function (e) {
                if (this.parseFullHeader(e), t) t.call(this, e);
                else
                    for (this.group_id = e.readUint32(), this.num_entities_in_group = e.readUint32(), this.entity_ids = [], i = 0; i < this.num_entities_in_group; i++) {
                        var r = e.readUint32();
                        this.entity_ids.push(r)
                    }
            }
        }, h.createEntityToGroupCtor("aebr"), h.createEntityToGroupCtor("afbr"), h.createEntityToGroupCtor("albc"), h.createEntityToGroupCtor("altr"), h.createEntityToGroupCtor("brst"), h.createEntityToGroupCtor("dobr"), h.createEntityToGroupCtor("eqiv"), h.createEntityToGroupCtor("favc"), h.createEntityToGroupCtor("fobr"), h.createEntityToGroupCtor("iaug"), h.createEntityToGroupCtor("pano"), h.createEntityToGroupCtor("slid"), h.createEntityToGroupCtor("ster"), h.createEntityToGroupCtor("tsyn"), h.createEntityToGroupCtor("wbbr"), h.createEntityToGroupCtor("prgr"), h.createFullBoxCtor("esds", (function (e) {
            var t = e.readUint8Array(this.size - this.hdr_size);
            if (void 0 !== c) {
                var r = new c;
                this.esd = r.parseOneDescriptor(new d(t.buffer, 0, d.BIG_ENDIAN))
            }
        })), h.createBoxCtor("fiel", (function (e) {
            this.fieldCount = e.readUint8(), this.fieldOrdering = e.readUint8()
        })), h.createBoxCtor("frma", (function (e) {
            this.data_format = e.readString(4)
        })), h.createBoxCtor("ftyp", (function (e) {
            var t = this.size - this.hdr_size;
            this.major_brand = e.readString(4), this.minor_version = e.readUint32(), t -= 8, this.compatible_brands = [];
            for (var r = 0; t >= 4;) this.compatible_brands[r] = e.readString(4), t -= 4, r++
        })), h.createFullBoxCtor("hdlr", (function (e) {
            0 === this.version && (e.readUint32(), this.handler = e.readString(4), e.readUint32Array(3), this.name = e.readString(this.size - this.hdr_size - 20), "\0" === this.name[this.name.length - 1] && (this.name = this.name.slice(0, -1)))
        })), h.createBoxCtor("hvcC", (function (e) {
            var t, r, i, s;
            this.configurationVersion = e.readUint8(), s = e.readUint8(), this.general_profile_space = s >> 6, this.general_tier_flag = (32 & s) >> 5, this.general_profile_idc = 31 & s, this.general_profile_compatibility = e.readUint32(), this.general_constraint_indicator = e.readUint8Array(6), this.general_level_idc = e.readUint8(), this.min_spatial_segmentation_idc = 4095 & e.readUint16(), this.parallelismType = 3 & e.readUint8(), this.chroma_format_idc = 3 & e.readUint8(), this.bit_depth_luma_minus8 = 7 & e.readUint8(), this.bit_depth_chroma_minus8 = 7 & e.readUint8(), this.avgFrameRate = e.readUint16(), s = e.readUint8(), this.constantFrameRate = s >> 6, this.numTemporalLayers = (13 & s) >> 3, this.temporalIdNested = (4 & s) >> 2, this.lengthSizeMinusOne = 3 & s, this.nalu_arrays = [];
            var n = e.readUint8();
            for (t = 0; t < n; t++) {
                var a = [];
                this.nalu_arrays.push(a), s = e.readUint8(), a.completeness = (128 & s) >> 7, a.nalu_type = 63 & s;
                var o = e.readUint16();
                for (r = 0; r < o; r++) {
                    var d = {};
                    a.push(d), i = e.readUint16(), d.data = e.readUint8Array(i)
                }
            }
        })), h.createFullBoxCtor("iinf", (function (e) {
            var t;
            0 === this.version ? this.entry_count = e.readUint16() : this.entry_count = e.readUint32(), this.item_infos = [];
            for (var r = 0; r < this.entry_count; r++) {
                if ((t = h.parseOneBox(e, !1, this.size - (e.getPosition() - this.start))).code !== h.OK) return;
                "infe" !== t.box.type && a.error("BoxParser", "Expected 'infe' box, got " + t.box.type), this.item_infos[r] = t.box
            }
        })), h.createFullBoxCtor("iloc", (function (e) {
            var t;
            t = e.readUint8(), this.offset_size = t >> 4 & 15, this.length_size = 15 & t, t = e.readUint8(), this.base_offset_size = t >> 4 & 15, 1 === this.version || 2 === this.version ? this.index_size = 15 & t : this.index_size = 0, this.items = [];
            var r = 0;
            if (this.version < 2) r = e.readUint16();
            else {
                if (2 !== this.version) throw "version of iloc box not supported";
                r = e.readUint32()
            }
            for (var i = 0; i < r; i++) {
                var s = {};
                if (this.items.push(s), this.version < 2) s.item_ID = e.readUint16();
                else {
                    if (2 !== this.version) throw "version of iloc box not supported";
                    s.item_ID = e.readUint32()
                }
                switch (1 === this.version || 2 === this.version ? s.construction_method = 15 & e.readUint16() : s.construction_method = 0, s.data_reference_index = e.readUint16(), this.base_offset_size) {
                    case 0:
                        s.base_offset = 0;
                        break;
                    case 4:
                        s.base_offset = e.readUint32();
                        break;
                    case 8:
                        s.base_offset = e.readUint64();
                        break;
                    default:
                        throw "Error reading base offset size"
                }
                var n = e.readUint16();
                s.extents = [];
                for (var a = 0; a < n; a++) {
                    var o = {};
                    if (s.extents.push(o), 1 === this.version || 2 === this.version) switch (this.index_size) {
                        case 0:
                            o.extent_index = 0;
                            break;
                        case 4:
                            o.extent_index = e.readUint32();
                            break;
                        case 8:
                            o.extent_index = e.readUint64();
                            break;
                        default:
                            throw "Error reading extent index"
                    }
                    switch (this.offset_size) {
                        case 0:
                            o.extent_offset = 0;
                            break;
                        case 4:
                            o.extent_offset = e.readUint32();
                            break;
                        case 8:
                            o.extent_offset = e.readUint64();
                            break;
                        default:
                            throw "Error reading extent index"
                    }
                    switch (this.length_size) {
                        case 0:
                            o.extent_length = 0;
                            break;
                        case 4:
                            o.extent_length = e.readUint32();
                            break;
                        case 8:
                            o.extent_length = e.readUint64();
                            break;
                        default:
                            throw "Error reading extent index"
                    }
                }
            }
        })), h.createBoxCtor("imir", (function (e) {
            var t = e.readUint8();
            this.reserved = t >> 7, this.axis = 1 & t
        })), h.createFullBoxCtor("infe", (function (e) {
            if (0 !== this.version && 1 !== this.version || (this.item_ID = e.readUint16(), this.item_protection_index = e.readUint16(), this.item_name = e.readCString(), this.content_type = e.readCString(), this.content_encoding = e.readCString()), 1 === this.version) return this.extension_type = e.readString(4), a.warn("BoxParser", "Cannot parse extension type"), void e.seek(this.start + this.size);
            this.version >= 2 && (2 === this.version ? this.item_ID = e.readUint16() : 3 === this.version && (this.item_ID = e.readUint32()), this.item_protection_index = e.readUint16(), this.item_type = e.readString(4), this.item_name = e.readCString(), "mime" === this.item_type ? (this.content_type = e.readCString(), this.content_encoding = e.readCString()) : "uri " === this.item_type && (this.item_uri_type = e.readCString()))
        })), h.createFullBoxCtor("ipma", (function (e) {
            var t, r;
            for (entry_count = e.readUint32(), this.associations = [], t = 0; t < entry_count; t++) {
                var i = {};
                this.associations.push(i), this.version < 1 ? i.id = e.readUint16() : i.id = e.readUint32();
                var s = e.readUint8();
                for (i.props = [], r = 0; r < s; r++) {
                    var n = e.readUint8(),
                        a = {};
                    i.props.push(a), a.essential = (128 & n) >> 7 == 1, 1 & this.flags ? a.property_index = (127 & n) << 8 | e.readUint8() : a.property_index = 127 & n
                }
            }
        })), h.createFullBoxCtor("iref", (function (e) {
            var t, r;
            for (this.references = []; e.getPosition() < this.start + this.size;) {
                if ((t = h.parseOneBox(e, !0, this.size - (e.getPosition() - this.start))).code !== h.OK) return;
                (r = 0 === this.version ? new h.SingleItemTypeReferenceBox(t.type, t.size, t.hdr_size, t.start) : new h.SingleItemTypeReferenceBoxLarge(t.type, t.size, t.hdr_size, t.start)).write === h.Box.prototype.write && "mdat" !== r.type && (a.warn("BoxParser", r.type + " box writing not yet implemented, keeping unparsed data in memory for later write"), r.parseDataAndRewind(e)), r.parse(e), this.references.push(r)
            }
        })), h.createBoxCtor("irot", (function (e) {
            this.angle = 3 & e.readUint8()
        })), h.createFullBoxCtor("ispe", (function (e) {
            this.image_width = e.readUint32(), this.image_height = e.readUint32()
        })), h.createFullBoxCtor("kind", (function (e) {
            this.schemeURI = e.readCString(), this.value = e.readCString()
        })), h.createFullBoxCtor("leva", (function (e) {
            var t = e.readUint8();
            this.levels = [];
            for (var r = 0; r < t; r++) {
                var i = {};
                this.levels[r] = i, i.track_ID = e.readUint32();
                var s = e.readUint8();
                switch (i.padding_flag = s >> 7, i.assignment_type = 127 & s, i.assignment_type) {
                    case 0:
                        i.grouping_type = e.readString(4);
                        break;
                    case 1:
                        i.grouping_type = e.readString(4), i.grouping_type_parameter = e.readUint32();
                        break;
                    case 2:
                    case 3:
                        break;
                    case 4:
                        i.sub_track_id = e.readUint32();
                        break;
                    default:
                        a.warn("BoxParser", "Unknown leva assignement type")
                }
            }
        })), h.createBoxCtor("lsel", (function (e) {
            this.layer_id = e.readUint16()
        })), h.createBoxCtor("maxr", (function (e) {
            this.period = e.readUint32(), this.bytes = e.readUint32()
        })), f.prototype.toString = function () {
            return "(" + this.x + "," + this.y + ")"
        }, h.createBoxCtor("mdcv", (function (e) {
            this.display_primaries = [], this.display_primaries[0] = new f(e.readUint16(), e.readUint16()), this.display_primaries[1] = new f(e.readUint16(), e.readUint16()), this.display_primaries[2] = new f(e.readUint16(), e.readUint16()), this.white_point = new f(e.readUint16(), e.readUint16()), this.max_display_mastering_luminance = e.readUint32(), this.min_display_mastering_luminance = e.readUint32()
        })), h.createFullBoxCtor("mdhd", (function (e) {
            1 == this.version ? (this.creation_time = e.readUint64(), this.modification_time = e.readUint64(), this.timescale = e.readUint32(), this.duration = e.readUint64()) : (this.creation_time = e.readUint32(), this.modification_time = e.readUint32(), this.timescale = e.readUint32(), this.duration = e.readUint32()), this.parseLanguage(e), e.readUint16()
        })), h.createFullBoxCtor("mehd", (function (e) {
            1 & this.flags && (a.warn("BoxParser", "mehd box incorrectly uses flags set to 1, converting version to 1"), this.version = 1), 1 == this.version ? this.fragment_duration = e.readUint64() : this.fragment_duration = e.readUint32()
        })), h.createFullBoxCtor("meta", (function (e) {
            this.boxes = [], h.ContainerBox.prototype.parse.call(this, e)
        })), h.createFullBoxCtor("mfhd", (function (e) {
            this.sequence_number = e.readUint32()
        })), h.createFullBoxCtor("mfro", (function (e) {
            this._size = e.readUint32()
        })), h.createFullBoxCtor("mskC", (function (e) {
            this.bits_per_pixel = e.readUint8()
        })), h.createFullBoxCtor("mvhd", (function (e) {
            1 == this.version ? (this.creation_time = e.readUint64(), this.modification_time = e.readUint64(), this.timescale = e.readUint32(), this.duration = e.readUint64()) : (this.creation_time = e.readUint32(), this.modification_time = e.readUint32(), this.timescale = e.readUint32(), this.duration = e.readUint32()), this.rate = e.readUint32(), this.volume = e.readUint16() >> 8, e.readUint16(), e.readUint32Array(2), this.matrix = e.readUint32Array(9), e.readUint32Array(6), this.next_track_id = e.readUint32()
        })), h.createBoxCtor("npck", (function (e) {
            this.packetssent = e.readUint32()
        })), h.createBoxCtor("nump", (function (e) {
            this.packetssent = e.readUint64()
        })), h.createFullBoxCtor("padb", (function (e) {
            var t = e.readUint32();
            this.padbits = [];
            for (var r = 0; r < Math.floor((t + 1) / 2); r++) this.padbits = e.readUint8()
        })), h.createBoxCtor("pasp", (function (e) {
            this.hSpacing = e.readUint32(), this.vSpacing = e.readUint32()
        })), h.createBoxCtor("payl", (function (e) {
            this.text = e.readString(this.size - this.hdr_size)
        })), h.createBoxCtor("payt", (function (e) {
            this.payloadID = e.readUint32();
            var t = e.readUint8();
            this.rtpmap_string = e.readString(t)
        })), h.createFullBoxCtor("pdin", (function (e) {
            var t = (this.size - this.hdr_size) / 8;
            this.rate = [], this.initial_delay = [];
            for (var r = 0; r < t; r++) this.rate[r] = e.readUint32(), this.initial_delay[r] = e.readUint32()
        })), h.createFullBoxCtor("pitm", (function (e) {
            0 === this.version ? this.item_id = e.readUint16() : this.item_id = e.readUint32()
        })), h.createFullBoxCtor("pixi", (function (e) {
            var t;
            for (this.num_channels = e.readUint8(), this.bits_per_channels = [], t = 0; t < this.num_channels; t++) this.bits_per_channels[t] = e.readUint8()
        })), h.createBoxCtor("pmax", (function (e) {
            this.bytes = e.readUint32()
        })), h.createFullBoxCtor("prdi", (function (e) {
            if (this.step_count = e.readUint16(), this.item_count = [], 2 & this.flags)
                for (var t = 0; t < this.step_count; t++) this.item_count[t] = e.readUint16()
        })), h.createFullBoxCtor("prft", (function (e) {
            this.ref_track_id = e.readUint32(), this.ntp_timestamp = e.readUint64(), 0 === this.version ? this.media_time = e.readUint32() : this.media_time = e.readUint64()
        })), h.createFullBoxCtor("pssh", (function (e) {
            if (this.system_id = h.parseHex16(e), this.version > 0) {
                var t = e.readUint32();
                this.kid = [];
                for (var r = 0; r < t; r++) this.kid[r] = h.parseHex16(e)
            }
            var i = e.readUint32();
            i > 0 && (this.data = e.readUint8Array(i))
        })), h.createFullBoxCtor("clef", (function (e) {
            this.width = e.readUint32(), this.height = e.readUint32()
        })), h.createFullBoxCtor("enof", (function (e) {
            this.width = e.readUint32(), this.height = e.readUint32()
        })), h.createFullBoxCtor("prof", (function (e) {
            this.width = e.readUint32(), this.height = e.readUint32()
        })), h.createContainerBoxCtor("tapt", null, ["clef", "prof", "enof"]), h.createBoxCtor("rtp ", (function (e) {
            this.descriptionformat = e.readString(4), this.sdptext = e.readString(this.size - this.hdr_size - 4)
        })), h.createFullBoxCtor("saio", (function (e) {
            1 & this.flags && (this.aux_info_type = e.readUint32(), this.aux_info_type_parameter = e.readUint32());
            var t = e.readUint32();
            this.offset = [];
            for (var r = 0; r < t; r++) 0 === this.version ? this.offset[r] = e.readUint32() : this.offset[r] = e.readUint64()
        })), h.createFullBoxCtor("saiz", (function (e) {
            1 & this.flags && (this.aux_info_type = e.readUint32(), this.aux_info_type_parameter = e.readUint32()), this.default_sample_info_size = e.readUint8();
            var t = e.readUint32();
            if (this.sample_info_size = [], 0 === this.default_sample_info_size)
                for (var r = 0; r < t; r++) this.sample_info_size[r] = e.readUint8()
        })), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_METADATA, "mett", (function (e) {
            this.parseHeader(e), this.content_encoding = e.readCString(), this.mime_format = e.readCString(), this.parseFooter(e)
        })), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_METADATA, "metx", (function (e) {
            this.parseHeader(e), this.content_encoding = e.readCString(), this.namespace = e.readCString(), this.schema_location = e.readCString(), this.parseFooter(e)
        })), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_SUBTITLE, "sbtt", (function (e) {
            this.parseHeader(e), this.content_encoding = e.readCString(), this.mime_format = e.readCString(), this.parseFooter(e)
        })), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_SUBTITLE, "stpp", (function (e) {
            this.parseHeader(e), this.namespace = e.readCString(), this.schema_location = e.readCString(), this.auxiliary_mime_types = e.readCString(), this.parseFooter(e)
        })), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_SUBTITLE, "stxt", (function (e) {
            this.parseHeader(e), this.content_encoding = e.readCString(), this.mime_format = e.readCString(), this.parseFooter(e)
        })), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_SUBTITLE, "tx3g", (function (e) {
            this.parseHeader(e), this.displayFlags = e.readUint32(), this.horizontal_justification = e.readInt8(), this.vertical_justification = e.readInt8(), this.bg_color_rgba = e.readUint8Array(4), this.box_record = e.readInt16Array(4), this.style_record = e.readUint8Array(12), this.parseFooter(e)
        })), h.createSampleEntryCtor(h.SAMPLE_ENTRY_TYPE_METADATA, "wvtt", (function (e) {
            this.parseHeader(e), this.parseFooter(e)
        })), h.createSampleGroupCtor("alst", (function (e) {
            var t, r = e.readUint16();
            for (this.first_output_sample = e.readUint16(), this.sample_offset = [], t = 0; t < r; t++) this.sample_offset[t] = e.readUint32();
            var i = this.description_length - 4 - 4 * r;
            for (this.num_output_samples = [], this.num_total_samples = [], t = 0; t < i / 4; t++) this.num_output_samples[t] = e.readUint16(), this.num_total_samples[t] = e.readUint16()
        })), h.createSampleGroupCtor("avll", (function (e) {
            this.layerNumber = e.readUint8(), this.accurateStatisticsFlag = e.readUint8(), this.avgBitRate = e.readUint16(), this.avgFrameRate = e.readUint16()
        })), h.createSampleGroupCtor("avss", (function (e) {
            this.subSequenceIdentifier = e.readUint16(), this.layerNumber = e.readUint8();
            var t = e.readUint8();
            this.durationFlag = t >> 7, this.avgRateFlag = t >> 6 & 1, this.durationFlag && (this.duration = e.readUint32()), this.avgRateFlag && (this.accurateStatisticsFlag = e.readUint8(), this.avgBitRate = e.readUint16(), this.avgFrameRate = e.readUint16()), this.dependency = [];
            for (var r = e.readUint8(), i = 0; i < r; i++) {
                var s = {};
                this.dependency.push(s), s.subSeqDirectionFlag = e.readUint8(), s.layerNumber = e.readUint8(), s.subSequenceIdentifier = e.readUint16()
            }
        })), h.createSampleGroupCtor("dtrt", (function (e) {
            a.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
        })), h.createSampleGroupCtor("mvif", (function (e) {
            a.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
        })), h.createSampleGroupCtor("prol", (function (e) {
            this.roll_distance = e.readInt16()
        })), h.createSampleGroupCtor("rap ", (function (e) {
            var t = e.readUint8();
            this.num_leading_samples_known = t >> 7, this.num_leading_samples = 127 & t
        })), h.createSampleGroupCtor("rash", (function (e) {
            if (this.operation_point_count = e.readUint16(), this.description_length !== 2 + (1 === this.operation_point_count ? 2 : 6 * this.operation_point_count) + 9) a.warn("BoxParser", "Mismatch in " + this.grouping_type + " sample group length"), this.data = e.readUint8Array(this.description_length - 2);
            else {
                if (1 === this.operation_point_count) this.target_rate_share = e.readUint16();
                else {
                    this.target_rate_share = [], this.available_bitrate = [];
                    for (var t = 0; t < this.operation_point_count; t++) this.available_bitrate[t] = e.readUint32(), this.target_rate_share[t] = e.readUint16()
                }
                this.maximum_bitrate = e.readUint32(), this.minimum_bitrate = e.readUint32(), this.discard_priority = e.readUint8()
            }
        })), h.createSampleGroupCtor("roll", (function (e) {
            this.roll_distance = e.readInt16()
        })), h.SampleGroupEntry.prototype.parse = function (e) {
            a.warn("BoxParser", "Unknown Sample Group type: " + this.grouping_type), this.data = e.readUint8Array(this.description_length)
        }, h.createSampleGroupCtor("scif", (function (e) {
            a.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
        })), h.createSampleGroupCtor("scnm", (function (e) {
            a.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
        })), h.createSampleGroupCtor("seig", (function (e) {
            this.reserved = e.readUint8();
            var t = e.readUint8();
            this.crypt_byte_block = t >> 4, this.skip_byte_block = 15 & t, this.isProtected = e.readUint8(), this.Per_Sample_IV_Size = e.readUint8(), this.KID = h.parseHex16(e), this.constant_IV_size = 0, this.constant_IV = 0, 1 === this.isProtected && 0 === this.Per_Sample_IV_Size && (this.constant_IV_size = e.readUint8(), this.constant_IV = e.readUint8Array(this.constant_IV_size))
        })), h.createSampleGroupCtor("stsa", (function (e) {
            a.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
        })), h.createSampleGroupCtor("sync", (function (e) {
            var t = e.readUint8();
            this.NAL_unit_type = 63 & t
        })), h.createSampleGroupCtor("tele", (function (e) {
            var t = e.readUint8();
            this.level_independently_decodable = t >> 7
        })), h.createSampleGroupCtor("tsas", (function (e) {
            a.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
        })), h.createSampleGroupCtor("tscl", (function (e) {
            a.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
        })), h.createSampleGroupCtor("vipr", (function (e) {
            a.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
        })), h.createFullBoxCtor("sbgp", (function (e) {
            this.grouping_type = e.readString(4), 1 === this.version ? this.grouping_type_parameter = e.readUint32() : this.grouping_type_parameter = 0, this.entries = [];
            for (var t = e.readUint32(), r = 0; r < t; r++) {
                var i = {};
                this.entries.push(i), i.sample_count = e.readInt32(), i.group_description_index = e.readInt32()
            }
        })), p.prototype.toString = function () {
            return "[row: " + this.bad_pixel_row + ", column: " + this.bad_pixel_column + "]"
        }, h.createFullBoxCtor("sbpm", (function (e) {
            var t;
            for (this.component_count = e.readUint16(), this.component_index = [], t = 0; t < this.component_count; t++) this.component_index.push(e.readUint16());
            var r = e.readUint8();
            for (this.correction_applied = 128 == (128 & r), this.num_bad_rows = e.readUint32(), this.num_bad_cols = e.readUint32(), this.num_bad_pixels = e.readUint32(), this.bad_rows = [], this.bad_columns = [], this.bad_pixels = [], t = 0; t < this.num_bad_rows; t++) this.bad_rows.push(e.readUint32());
            for (t = 0; t < this.num_bad_cols; t++) this.bad_columns.push(e.readUint32());
            for (t = 0; t < this.num_bad_pixels; t++) {
                var i = e.readUint32(),
                    s = e.readUint32();
                this.bad_pixels.push(new p(i, s))
            }
        })), h.createFullBoxCtor("schm", (function (e) {
            this.scheme_type = e.readString(4), this.scheme_version = e.readUint32(), 1 & this.flags && (this.scheme_uri = e.readString(this.size - this.hdr_size - 8))
        })), h.createBoxCtor("sdp ", (function (e) {
            this.sdptext = e.readString(this.size - this.hdr_size)
        })), h.createFullBoxCtor("sdtp", (function (e) {
            var t, r = this.size - this.hdr_size;
            this.is_leading = [], this.sample_depends_on = [], this.sample_is_depended_on = [], this.sample_has_redundancy = [];
            for (var i = 0; i < r; i++) t = e.readUint8(), this.is_leading[i] = t >> 6, this.sample_depends_on[i] = t >> 4 & 3, this.sample_is_depended_on[i] = t >> 2 & 3, this.sample_has_redundancy[i] = 3 & t
        })), h.createFullBoxCtor("senc"), h.createFullBoxCtor("sgpd", (function (e) {
            this.grouping_type = e.readString(4), a.debug("BoxParser", "Found Sample Groups of type " + this.grouping_type), 1 === this.version ? this.default_length = e.readUint32() : this.default_length = 0, this.version >= 2 && (this.default_group_description_index = e.readUint32()), this.entries = [];
            for (var t = e.readUint32(), r = 0; r < t; r++) {
                var i;
                i = h[this.grouping_type + "SampleGroupEntry"] ? new h[this.grouping_type + "SampleGroupEntry"](this.grouping_type) : new h.SampleGroupEntry(this.grouping_type), this.entries.push(i), 1 === this.version && 0 === this.default_length ? i.description_length = e.readUint32() : i.description_length = this.default_length, i.write === h.SampleGroupEntry.prototype.write && (a.info("BoxParser", "SampleGroup for type " + this.grouping_type + " writing not yet implemented, keeping unparsed data in memory for later write"), i.data = e.readUint8Array(i.description_length), e.position -= i.description_length), i.parse(e)
            }
        })), h.createFullBoxCtor("sidx", (function (e) {
            this.reference_ID = e.readUint32(), this.timescale = e.readUint32(), 0 === this.version ? (this.earliest_presentation_time = e.readUint32(), this.first_offset = e.readUint32()) : (this.earliest_presentation_time = e.readUint64(), this.first_offset = e.readUint64()), e.readUint16(), this.references = [];
            for (var t = e.readUint16(), r = 0; r < t; r++) {
                var i = {};
                this.references.push(i);
                var s = e.readUint32();
                i.reference_type = s >> 31 & 1, i.referenced_size = 2147483647 & s, i.subsegment_duration = e.readUint32(), s = e.readUint32(), i.starts_with_SAP = s >> 31 & 1, i.SAP_type = s >> 28 & 7, i.SAP_delta_time = 268435455 & s
            }
        })), h.SingleItemTypeReferenceBox = function (e, t, r, i) {
            h.Box.call(this, e, t), this.hdr_size = r, this.start = i
        }, h.SingleItemTypeReferenceBox.prototype = new h.Box, h.SingleItemTypeReferenceBox.prototype.parse = function (e) {
            this.from_item_ID = e.readUint16();
            var t = e.readUint16();
            this.references = [];
            for (var r = 0; r < t; r++) this.references[r] = {}, this.references[r].to_item_ID = e.readUint16()
        }, h.SingleItemTypeReferenceBoxLarge = function (e, t, r, i) {
            h.Box.call(this, e, t), this.hdr_size = r, this.start = i
        }, h.SingleItemTypeReferenceBoxLarge.prototype = new h.Box, h.SingleItemTypeReferenceBoxLarge.prototype.parse = function (e) {
            this.from_item_ID = e.readUint32();
            var t = e.readUint16();
            this.references = [];
            for (var r = 0; r < t; r++) this.references[r] = {}, this.references[r].to_item_ID = e.readUint32()
        }, h.createFullBoxCtor("SmDm", (function (e) {
            this.primaryRChromaticity_x = e.readUint16(), this.primaryRChromaticity_y = e.readUint16(), this.primaryGChromaticity_x = e.readUint16(), this.primaryGChromaticity_y = e.readUint16(), this.primaryBChromaticity_x = e.readUint16(), this.primaryBChromaticity_y = e.readUint16(), this.whitePointChromaticity_x = e.readUint16(), this.whitePointChromaticity_y = e.readUint16(), this.luminanceMax = e.readUint32(), this.luminanceMin = e.readUint32()
        })), h.createFullBoxCtor("smhd", (function (e) {
            this.balance = e.readUint16(), e.readUint16()
        })), h.createFullBoxCtor("ssix", (function (e) {
            this.subsegments = [];
            for (var t = e.readUint32(), r = 0; r < t; r++) {
                var i = {};
                this.subsegments.push(i), i.ranges = [];
                for (var s = e.readUint32(), n = 0; n < s; n++) {
                    var a = {};
                    i.ranges.push(a), a.level = e.readUint8(), a.range_size = e.readUint24()
                }
            }
        })), h.createFullBoxCtor("stco", (function (e) {
            var t;
            if (t = e.readUint32(), this.chunk_offsets = [], 0 === this.version)
                for (var r = 0; r < t; r++) this.chunk_offsets.push(e.readUint32())
        })), h.createFullBoxCtor("stdp", (function (e) {
            var t = (this.size - this.hdr_size) / 2;
            this.priority = [];
            for (var r = 0; r < t; r++) this.priority[r] = e.readUint16()
        })), h.createFullBoxCtor("sthd"), h.createFullBoxCtor("stri", (function (e) {
            this.switch_group = e.readUint16(), this.alternate_group = e.readUint16(), this.sub_track_id = e.readUint32();
            var t = (this.size - this.hdr_size - 8) / 4;
            this.attribute_list = [];
            for (var r = 0; r < t; r++) this.attribute_list[r] = e.readUint32()
        })), h.createFullBoxCtor("stsc", (function (e) {
            var t, r;
            if (t = e.readUint32(), this.first_chunk = [], this.samples_per_chunk = [], this.sample_description_index = [], 0 === this.version)
                for (r = 0; r < t; r++) this.first_chunk.push(e.readUint32()), this.samples_per_chunk.push(e.readUint32()), this.sample_description_index.push(e.readUint32())
        })), h.createFullBoxCtor("stsd", (function (e) {
            var t, r, i, s;
            for (this.entries = [], i = e.readUint32(), t = 1; t <= i; t++) {
                if ((r = h.parseOneBox(e, !0, this.size - (e.getPosition() - this.start))).code !== h.OK) return;
                h[r.type + "SampleEntry"] ? ((s = new h[r.type + "SampleEntry"](r.size)).hdr_size = r.hdr_size, s.start = r.start) : (a.warn("BoxParser", "Unknown sample entry type: " + r.type), s = new h.SampleEntry(r.type, r.size, r.hdr_size, r.start)), s.write === h.SampleEntry.prototype.write && (a.info("BoxParser", "SampleEntry " + s.type + " box writing not yet implemented, keeping unparsed data in memory for later write"), s.parseDataAndRewind(e)), s.parse(e), this.entries.push(s)
            }
        })), h.createFullBoxCtor("stsg", (function (e) {
            this.grouping_type = e.readUint32();
            var t = e.readUint16();
            this.group_description_index = [];
            for (var r = 0; r < t; r++) this.group_description_index[r] = e.readUint32()
        })), h.createFullBoxCtor("stsh", (function (e) {
            var t, r;
            if (t = e.readUint32(), this.shadowed_sample_numbers = [], this.sync_sample_numbers = [], 0 === this.version)
                for (r = 0; r < t; r++) this.shadowed_sample_numbers.push(e.readUint32()), this.sync_sample_numbers.push(e.readUint32())
        })), h.createFullBoxCtor("stss", (function (e) {
            var t, r;
            if (r = e.readUint32(), 0 === this.version)
                for (this.sample_numbers = [], t = 0; t < r; t++) this.sample_numbers.push(e.readUint32())
        })), h.createFullBoxCtor("stsz", (function (e) {
            var t;
            if (this.sample_sizes = [], 0 === this.version)
                for (this.sample_size = e.readUint32(), this.sample_count = e.readUint32(), t = 0; t < this.sample_count; t++) 0 === this.sample_size ? this.sample_sizes.push(e.readUint32()) : this.sample_sizes[t] = this.sample_size
        })), h.createFullBoxCtor("stts", (function (e) {
            var t, r, i;
            if (t = e.readUint32(), this.sample_counts = [], this.sample_deltas = [], 0 === this.version)
                for (r = 0; r < t; r++) this.sample_counts.push(e.readUint32()), (i = e.readInt32()) < 0 && (a.warn("BoxParser", "File uses negative stts sample delta, using value 1 instead, sync may be lost!"), i = 1), this.sample_deltas.push(i)
        })), h.createFullBoxCtor("stvi", (function (e) {
            var t = e.readUint32();
            this.single_view_allowed = 3 & t, this.stereo_scheme = e.readUint32();
            var r, i, s = e.readUint32();
            for (this.stereo_indication_type = e.readString(s), this.boxes = []; e.getPosition() < this.start + this.size;) {
                if ((r = h.parseOneBox(e, !1, this.size - (e.getPosition() - this.start))).code !== h.OK) return;
                i = r.box, this.boxes.push(i), this[i.type] = i
            }
        })), h.createBoxCtor("styp", (function (e) {
            h.ftypBox.prototype.parse.call(this, e)
        })), h.createFullBoxCtor("stz2", (function (e) {
            var t, r;
            if (this.sample_sizes = [], 0 === this.version)
                if (this.reserved = e.readUint24(), this.field_size = e.readUint8(), r = e.readUint32(), 4 === this.field_size)
                    for (t = 0; t < r; t += 2) {
                        var i = e.readUint8();
                        this.sample_sizes[t] = i >> 4 & 15, this.sample_sizes[t + 1] = 15 & i
                    } else if (8 === this.field_size)
                        for (t = 0; t < r; t++) this.sample_sizes[t] = e.readUint8();
                    else if (16 === this.field_size)
                for (t = 0; t < r; t++) this.sample_sizes[t] = e.readUint16();
            else a.error("BoxParser", "Error in length field in stz2 box")
        })), h.createFullBoxCtor("subs", (function (e) {
            var t, r, i, s;
            for (i = e.readUint32(), this.entries = [], t = 0; t < i; t++) {
                var n = {};
                if (this.entries[t] = n, n.sample_delta = e.readUint32(), n.subsamples = [], (s = e.readUint16()) > 0)
                    for (r = 0; r < s; r++) {
                        var a = {};
                        n.subsamples.push(a), 1 == this.version ? a.size = e.readUint32() : a.size = e.readUint16(), a.priority = e.readUint8(), a.discardable = e.readUint8(), a.codec_specific_parameters = e.readUint32()
                    }
            }
        })), h.createFullBoxCtor("tenc", (function (e) {
            if (e.readUint8(), 0 === this.version) e.readUint8();
            else {
                var t = e.readUint8();
                this.default_crypt_byte_block = t >> 4 & 15, this.default_skip_byte_block = 15 & t
            }
            this.default_isProtected = e.readUint8(), this.default_Per_Sample_IV_Size = e.readUint8(), this.default_KID = h.parseHex16(e), 1 === this.default_isProtected && 0 === this.default_Per_Sample_IV_Size && (this.default_constant_IV_size = e.readUint8(), this.default_constant_IV = e.readUint8Array(this.default_constant_IV_size))
        })), h.createFullBoxCtor("tfdt", (function (e) {
            1 == this.version ? this.baseMediaDecodeTime = e.readUint64() : this.baseMediaDecodeTime = e.readUint32()
        })), h.createFullBoxCtor("tfhd", (function (e) {
            var t = 0;
            this.track_id = e.readUint32(), this.size - this.hdr_size > t && this.flags & h.TFHD_FLAG_BASE_DATA_OFFSET ? (this.base_data_offset = e.readUint64(), t += 8) : this.base_data_offset = 0, this.size - this.hdr_size > t && this.flags & h.TFHD_FLAG_SAMPLE_DESC ? (this.default_sample_description_index = e.readUint32(), t += 4) : this.default_sample_description_index = 0, this.size - this.hdr_size > t && this.flags & h.TFHD_FLAG_SAMPLE_DUR ? (this.default_sample_duration = e.readUint32(), t += 4) : this.default_sample_duration = 0, this.size - this.hdr_size > t && this.flags & h.TFHD_FLAG_SAMPLE_SIZE ? (this.default_sample_size = e.readUint32(), t += 4) : this.default_sample_size = 0, this.size - this.hdr_size > t && this.flags & h.TFHD_FLAG_SAMPLE_FLAGS ? (this.default_sample_flags = e.readUint32(), t += 4) : this.default_sample_flags = 0
        })), h.createFullBoxCtor("tfra", (function (e) {
            this.track_ID = e.readUint32(), e.readUint24();
            var t = e.readUint8();
            this.length_size_of_traf_num = t >> 4 & 3, this.length_size_of_trun_num = t >> 2 & 3, this.length_size_of_sample_num = 3 & t, this.entries = [];
            for (var r = e.readUint32(), i = 0; i < r; i++) 1 === this.version ? (this.time = e.readUint64(), this.moof_offset = e.readUint64()) : (this.time = e.readUint32(), this.moof_offset = e.readUint32()), this.traf_number = e["readUint" + 8 * (this.length_size_of_traf_num + 1)](), this.trun_number = e["readUint" + 8 * (this.length_size_of_trun_num + 1)](), this.sample_number = e["readUint" + 8 * (this.length_size_of_sample_num + 1)]()
        })), h.createFullBoxCtor("tkhd", (function (e) {
            1 == this.version ? (this.creation_time = e.readUint64(), this.modification_time = e.readUint64(), this.track_id = e.readUint32(), e.readUint32(), this.duration = e.readUint64()) : (this.creation_time = e.readUint32(), this.modification_time = e.readUint32(), this.track_id = e.readUint32(), e.readUint32(), this.duration = e.readUint32()), e.readUint32Array(2), this.layer = e.readInt16(), this.alternate_group = e.readInt16(), this.volume = e.readInt16() >> 8, e.readUint16(), this.matrix = e.readInt32Array(9), this.width = e.readUint32(), this.height = e.readUint32()
        })), h.createBoxCtor("tmax", (function (e) {
            this.time = e.readUint32()
        })), h.createBoxCtor("tmin", (function (e) {
            this.time = e.readUint32()
        })), h.createBoxCtor("totl", (function (e) {
            this.bytessent = e.readUint32()
        })), h.createBoxCtor("tpay", (function (e) {
            this.bytessent = e.readUint32()
        })), h.createBoxCtor("tpyl", (function (e) {
            this.bytessent = e.readUint64()
        })), h.TrackGroupTypeBox.prototype.parse = function (e) {
            this.parseFullHeader(e), this.track_group_id = e.readUint32()
        }, h.createTrackGroupCtor("msrc"), h.TrackReferenceTypeBox = function (e, t, r, i) {
            h.Box.call(this, e, t), this.hdr_size = r, this.start = i
        }, h.TrackReferenceTypeBox.prototype = new h.Box, h.TrackReferenceTypeBox.prototype.parse = function (e) {
            this.track_ids = e.readUint32Array((this.size - this.hdr_size) / 4)
        }, h.trefBox.prototype.parse = function (e) {
            for (var t, r; e.getPosition() < this.start + this.size;) {
                if ((t = h.parseOneBox(e, !0, this.size - (e.getPosition() - this.start))).code !== h.OK) return;
                (r = new h.TrackReferenceTypeBox(t.type, t.size, t.hdr_size, t.start)).write === h.Box.prototype.write && "mdat" !== r.type && (a.info("BoxParser", "TrackReference " + r.type + " box writing not yet implemented, keeping unparsed data in memory for later write"), r.parseDataAndRewind(e)), r.parse(e), this.boxes.push(r)
            }
        }, h.createFullBoxCtor("trep", (function (e) {
            for (this.track_ID = e.readUint32(), this.boxes = []; e.getPosition() < this.start + this.size;) {
                if (ret = h.parseOneBox(e, !1, this.size - (e.getPosition() - this.start)), ret.code !== h.OK) return;
                box = ret.box, this.boxes.push(box)
            }
        })), h.createFullBoxCtor("trex", (function (e) {
            this.track_id = e.readUint32(), this.default_sample_description_index = e.readUint32(), this.default_sample_duration = e.readUint32(), this.default_sample_size = e.readUint32(), this.default_sample_flags = e.readUint32()
        })), h.createBoxCtor("trpy", (function (e) {
            this.bytessent = e.readUint64()
        })), h.createFullBoxCtor("trun", (function (e) {
            var t = 0;
            if (this.sample_count = e.readUint32(), t += 4, this.size - this.hdr_size > t && this.flags & h.TRUN_FLAGS_DATA_OFFSET ? (this.data_offset = e.readInt32(), t += 4) : this.data_offset = 0, this.size - this.hdr_size > t && this.flags & h.TRUN_FLAGS_FIRST_FLAG ? (this.first_sample_flags = e.readUint32(), t += 4) : this.first_sample_flags = 0, this.sample_duration = [], this.sample_size = [], this.sample_flags = [], this.sample_composition_time_offset = [], this.size - this.hdr_size > t)
                for (var r = 0; r < this.sample_count; r++) this.flags & h.TRUN_FLAGS_DURATION && (this.sample_duration[r] = e.readUint32()), this.flags & h.TRUN_FLAGS_SIZE && (this.sample_size[r] = e.readUint32()), this.flags & h.TRUN_FLAGS_FLAGS && (this.sample_flags[r] = e.readUint32()), this.flags & h.TRUN_FLAGS_CTS_OFFSET && (0 === this.version ? this.sample_composition_time_offset[r] = e.readUint32() : this.sample_composition_time_offset[r] = e.readInt32())
        })), h.createFullBoxCtor("tsel", (function (e) {
            this.switch_group = e.readUint32();
            var t = (this.size - this.hdr_size - 4) / 4;
            this.attribute_list = [];
            for (var r = 0; r < t; r++) this.attribute_list[r] = e.readUint32()
        })), h.createFullBoxCtor("txtC", (function (e) {
            this.config = e.readCString()
        })), h.createBoxCtor("tyco", (function (e) {
            var t = (this.size - this.hdr_size) / 4;
            this.compatible_brands = [];
            for (var r = 0; r < t; r++) this.compatible_brands[r] = e.readString(4)
        })), h.createFullBoxCtor("udes", (function (e) {
            this.lang = e.readCString(), this.name = e.readCString(), this.description = e.readCString(), this.tags = e.readCString()
        })), h.createFullBoxCtor("uncC", (function (e) {
            var t;
            if (this.profile = e.readUint32(), 1 == this.version);
            else if (0 == this.version) {
                for (this.component_count = e.readUint32(), this.component_index = [], this.component_bit_depth_minus_one = [], this.component_format = [], this.component_align_size = [], t = 0; t < this.component_count; t++) this.component_index.push(e.readUint16()), this.component_bit_depth_minus_one.push(e.readUint8()), this.component_format.push(e.readUint8()), this.component_align_size.push(e.readUint8());
                this.sampling_type = e.readUint8(), this.interleave_type = e.readUint8(), this.block_size = e.readUint8();
                var r = e.readUint8();
                this.component_little_endian = r >> 7 & 1, this.block_pad_lsb = r >> 6 & 1, this.block_little_endian = r >> 5 & 1, this.block_reversed = r >> 4 & 1, this.pad_unknown = r >> 3 & 1, this.pixel_size = e.readUint32(), this.row_align_size = e.readUint32(), this.tile_align_size = e.readUint32(), this.num_tile_cols_minus_one = e.readUint32(), this.num_tile_rows_minus_one = e.readUint32()
            }
        })), h.createFullBoxCtor("url ", (function (e) {
            1 !== this.flags && (this.location = e.readCString())
        })), h.createFullBoxCtor("urn ", (function (e) {
            this.name = e.readCString(), this.size - this.hdr_size - this.name.length - 1 > 0 && (this.location = e.readCString())
        })), h.createUUIDBox("a5d40b30e81411ddba2f0800200c9a66", !0, !1, (function (e) {
            this.LiveServerManifest = e.readString(this.size - this.hdr_size).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
        })), h.createUUIDBox("d08a4f1810f34a82b6c832d8aba183d3", !0, !1, (function (e) {
            this.system_id = h.parseHex16(e);
            var t = e.readUint32();
            t > 0 && (this.data = e.readUint8Array(t))
        })), h.createUUIDBox("a2394f525a9b4f14a2446c427c648df4", !0, !1), h.createUUIDBox("8974dbce7be74c5184f97148f9882554", !0, !1, (function (e) {
            this.default_AlgorithmID = e.readUint24(), this.default_IV_size = e.readUint8(), this.default_KID = h.parseHex16(e)
        })), h.createUUIDBox("d4807ef2ca3946958e5426cb9e46a79f", !0, !1, (function (e) {
            this.fragment_count = e.readUint8(), this.entries = [];
            for (var t = 0; t < this.fragment_count; t++) {
                var r = {},
                    i = 0,
                    s = 0;
                1 === this.version ? (i = e.readUint64(), s = e.readUint64()) : (i = e.readUint32(), s = e.readUint32()), r.absolute_time = i, r.absolute_duration = s, this.entries.push(r)
            }
        })), h.createUUIDBox("6d1d9b0542d544e680e2141daff757b2", !0, !1, (function (e) {
            1 === this.version ? (this.absolute_time = e.readUint64(), this.duration = e.readUint64()) : (this.absolute_time = e.readUint32(), this.duration = e.readUint32())
        })), h.createFullBoxCtor("vmhd", (function (e) {
            this.graphicsmode = e.readUint16(), this.opcolor = e.readUint16Array(3)
        })), h.createFullBoxCtor("vpcC", (function (e) {
            var t;
            1 === this.version ? (this.profile = e.readUint8(), this.level = e.readUint8(), t = e.readUint8(), this.bitDepth = t >> 4, this.chromaSubsampling = t >> 1 & 7, this.videoFullRangeFlag = 1 & t, this.colourPrimaries = e.readUint8(), this.transferCharacteristics = e.readUint8(), this.matrixCoefficients = e.readUint8(), this.codecIntializationDataSize = e.readUint16(), this.codecIntializationData = e.readUint8Array(this.codecIntializationDataSize)) : (this.profile = e.readUint8(), this.level = e.readUint8(), t = e.readUint8(), this.bitDepth = t >> 4 & 15, this.colorSpace = 15 & t, t = e.readUint8(), this.chromaSubsampling = t >> 4 & 15, this.transferFunction = t >> 1 & 7, this.videoFullRangeFlag = 1 & t, this.codecIntializationDataSize = e.readUint16(), this.codecIntializationData = e.readUint8Array(this.codecIntializationDataSize))
        })), h.createBoxCtor("vttC", (function (e) {
            this.text = e.readString(this.size - this.hdr_size)
        })), h.createFullBoxCtor("vvcC", (function (e) {
            var t, r, i = {
                held_bits: void 0,
                num_held_bits: 0,
                stream_read_1_bytes: function (e) {
                    this.held_bits = e.readUint8(), this.num_held_bits = 8
                },
                stream_read_2_bytes: function (e) {
                    this.held_bits = e.readUint16(), this.num_held_bits = 16
                },
                extract_bits: function (e) {
                    var t = this.held_bits >> this.num_held_bits - e & (1 << e) - 1;
                    return this.num_held_bits -= e, t
                }
            };
            if (i.stream_read_1_bytes(e), i.extract_bits(5), this.lengthSizeMinusOne = i.extract_bits(2), this.ptl_present_flag = i.extract_bits(1), this.ptl_present_flag) {
                if (i.stream_read_2_bytes(e), this.ols_idx = i.extract_bits(9), this.num_sublayers = i.extract_bits(3), this.constant_frame_rate = i.extract_bits(2), this.chroma_format_idc = i.extract_bits(2), i.stream_read_1_bytes(e), this.bit_depth_minus8 = i.extract_bits(3), i.extract_bits(5), i.stream_read_2_bytes(e), i.extract_bits(2), this.num_bytes_constraint_info = i.extract_bits(6), this.general_profile_idc = i.extract_bits(7), this.general_tier_flag = i.extract_bits(1), this.general_level_idc = e.readUint8(), i.stream_read_1_bytes(e), this.ptl_frame_only_constraint_flag = i.extract_bits(1), this.ptl_multilayer_enabled_flag = i.extract_bits(1), this.general_constraint_info = new Uint8Array(this.num_bytes_constraint_info), this.num_bytes_constraint_info) {
                    for (t = 0; t < this.num_bytes_constraint_info - 1; t++) {
                        var s = i.extract_bits(6);
                        i.stream_read_1_bytes(e);
                        var n = i.extract_bits(2);
                        this.general_constraint_info[t] = s << 2 | n
                    }
                    this.general_constraint_info[this.num_bytes_constraint_info - 1] = i.extract_bits(6)
                } else i.extract_bits(6);
                if (this.num_sublayers > 1) {
                    for (i.stream_read_1_bytes(e), this.ptl_sublayer_present_mask = 0, r = this.num_sublayers - 2; r >= 0; --r) {
                        var a = i.extract_bits(1);
                        this.ptl_sublayer_present_mask |= a << r
                    }
                    for (r = this.num_sublayers; r <= 8 && this.num_sublayers > 1; ++r) i.extract_bits(1);
                    for (this.sublayer_level_idc = [], r = this.num_sublayers - 2; r >= 0; --r) this.ptl_sublayer_present_mask & 1 << r && (this.sublayer_level_idc[r] = e.readUint8())
                }
                if (this.ptl_num_sub_profiles = e.readUint8(), this.general_sub_profile_idc = [], this.ptl_num_sub_profiles)
                    for (t = 0; t < this.ptl_num_sub_profiles; t++) this.general_sub_profile_idc.push(e.readUint32());
                this.max_picture_width = e.readUint16(), this.max_picture_height = e.readUint16(), this.avg_frame_rate = e.readUint16()
            }
            this.nalu_arrays = [];
            var o = e.readUint8();
            for (t = 0; t < o; t++) {
                var d = [];
                this.nalu_arrays.push(d), i.stream_read_1_bytes(e), d.completeness = i.extract_bits(1), i.extract_bits(2), d.nalu_type = i.extract_bits(5);
                var l = 1;
                for (13 != d.nalu_type && 12 != d.nalu_type && (l = e.readUint16()), r = 0; r < l; r++) {
                    var u = e.readUint16();
                    d.push({
                        data: e.readUint8Array(u),
                        length: u
                    })
                }
            }
        })), h.createFullBoxCtor("vvnC", (function (e) {
            var t = strm.readUint8();
            this.lengthSizeMinusOne = 3 & t
        })), h.SampleEntry.prototype.isVideo = function () {
            return !1
        }, h.SampleEntry.prototype.isAudio = function () {
            return !1
        }, h.SampleEntry.prototype.isSubtitle = function () {
            return !1
        }, h.SampleEntry.prototype.isMetadata = function () {
            return !1
        }, h.SampleEntry.prototype.isHint = function () {
            return !1
        }, h.SampleEntry.prototype.getCodec = function () {
            return this.type.replace(".", "")
        }, h.SampleEntry.prototype.getWidth = function () {
            return ""
        }, h.SampleEntry.prototype.getHeight = function () {
            return ""
        }, h.SampleEntry.prototype.getChannelCount = function () {
            return ""
        }, h.SampleEntry.prototype.getSampleRate = function () {
            return ""
        }, h.SampleEntry.prototype.getSampleSize = function () {
            return ""
        }, h.VisualSampleEntry.prototype.isVideo = function () {
            return !0
        }, h.VisualSampleEntry.prototype.getWidth = function () {
            return this.width
        }, h.VisualSampleEntry.prototype.getHeight = function () {
            return this.height
        }, h.AudioSampleEntry.prototype.isAudio = function () {
            return !0
        }, h.AudioSampleEntry.prototype.getChannelCount = function () {
            return this.channel_count
        }, h.AudioSampleEntry.prototype.getSampleRate = function () {
            return this.samplerate
        }, h.AudioSampleEntry.prototype.getSampleSize = function () {
            return this.samplesize
        }, h.SubtitleSampleEntry.prototype.isSubtitle = function () {
            return !0
        }, h.MetadataSampleEntry.prototype.isMetadata = function () {
            return !0
        }, h.decimalToHex = function (e, t) {
            var r = Number(e).toString(16);
            for (t = null == t ? t = 2 : t; r.length < t;) r = "0" + r;
            return r
        }, h.avc1SampleEntry.prototype.getCodec = h.avc2SampleEntry.prototype.getCodec = h.avc3SampleEntry.prototype.getCodec = h.avc4SampleEntry.prototype.getCodec = function () {
            var e = h.SampleEntry.prototype.getCodec.call(this);
            return this.avcC ? e + "." + h.decimalToHex(this.avcC.AVCProfileIndication) + h.decimalToHex(this.avcC.profile_compatibility) + h.decimalToHex(this.avcC.AVCLevelIndication) : e
        }, h.hev1SampleEntry.prototype.getCodec = h.hvc1SampleEntry.prototype.getCodec = function () {
            var e, t = h.SampleEntry.prototype.getCodec.call(this);
            if (this.hvcC) {
                switch (t += ".", this.hvcC.general_profile_space) {
                    case 0:
                        t += "";
                        break;
                    case 1:
                        t += "A";
                        break;
                    case 2:
                        t += "B";
                        break;
                    case 3:
                        t += "C"
                }
                t += this.hvcC.general_profile_idc, t += ".";
                var r = this.hvcC.general_profile_compatibility,
                    i = 0;
                for (e = 0; e < 32 && (i |= 1 & r, 31 != e); e++) i <<= 1, r >>= 1;
                t += h.decimalToHex(i, 0), t += ".", 0 === this.hvcC.general_tier_flag ? t += "L" : t += "H", t += this.hvcC.general_level_idc;
                var s = !1,
                    n = "";
                for (e = 5; e >= 0; e--)(this.hvcC.general_constraint_indicator[e] || s) && (n = "." + h.decimalToHex(this.hvcC.general_constraint_indicator[e], 0) + n, s = !0);
                t += n
            }
            return t
        }, h.vvc1SampleEntry.prototype.getCodec = h.vvi1SampleEntry.prototype.getCodec = function () {
            var e, t = h.SampleEntry.prototype.getCodec.call(this);
            if (this.vvcC) {
                t += "." + this.vvcC.general_profile_idc, this.vvcC.general_tier_flag ? t += ".H" : t += ".L", t += this.vvcC.general_level_idc;
                var r = "";
                if (this.vvcC.general_constraint_info) {
                    var i, s = [],
                        n = 0;
                    for (n |= this.vvcC.ptl_frame_only_constraint << 7, n |= this.vvcC.ptl_multilayer_enabled << 6, e = 0; e < this.vvcC.general_constraint_info.length; ++e) n |= this.vvcC.general_constraint_info[e] >> 2 & 63, s.push(n), n && (i = e), n = this.vvcC.general_constraint_info[e] >> 2 & 3;
                    if (void 0 === i) r = ".CA";
                    else {
                        r = ".C";
                        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                            o = 0,
                            d = 0;
                        for (e = 0; e <= i; ++e)
                            for (o = o << 8 | s[e], d += 8; d >= 5;) {
                                r += a[o >> d - 5 & 31], o &= (1 << (d -= 5)) - 1
                            }
                        d && (r += a[31 & (o <<= 5 - d)])
                    }
                }
                t += r
            }
            return t
        }, h.mp4aSampleEntry.prototype.getCodec = function () {
            var e = h.SampleEntry.prototype.getCodec.call(this);
            if (this.esds && this.esds.esd) {
                var t = this.esds.esd.getOTI(),
                    r = this.esds.esd.getAudioConfig();
                return e + "." + h.decimalToHex(t) + (r ? "." + r : "")
            }
            return e
        }, h.stxtSampleEntry.prototype.getCodec = function () {
            var e = h.SampleEntry.prototype.getCodec.call(this);
            return this.mime_format ? e + "." + this.mime_format : e
        }, h.vp08SampleEntry.prototype.getCodec = h.vp09SampleEntry.prototype.getCodec = function () {
            var e = h.SampleEntry.prototype.getCodec.call(this),
                t = this.vpcC.level;
            0 == t && (t = "00");
            var r = this.vpcC.bitDepth;
            return 8 == r && (r = "08"), e + ".0" + this.vpcC.profile + "." + t + "." + r
        }, h.av01SampleEntry.prototype.getCodec = function () {
            var e, t = h.SampleEntry.prototype.getCodec.call(this),
                r = this.av1C.seq_level_idx_0;
            return r < 10 && (r = "0" + r), 2 === this.av1C.seq_profile && 1 === this.av1C.high_bitdepth ? e = 1 === this.av1C.twelve_bit ? "12" : "10" : this.av1C.seq_profile <= 2 && (e = 1 === this.av1C.high_bitdepth ? "10" : "08"), t + "." + this.av1C.seq_profile + "." + r + (this.av1C.seq_tier_0 ? "H" : "M") + "." + e
        }, h.Box.prototype.writeHeader = function (e, t) {
            this.size += 8, this.size > l && (this.size += 8), "uuid" === this.type && (this.size += 16), a.debug("BoxWriter", "Writing box " + this.type + " of size: " + this.size + " at position " + e.getPosition() + (t || "")), this.size > l ? e.writeUint32(1) : (this.sizePosition = e.getPosition(), e.writeUint32(this.size)), e.writeString(this.type, null, 4), "uuid" === this.type && e.writeUint8Array(this.uuid), this.size > l && e.writeUint64(this.size)
        }, h.FullBox.prototype.writeHeader = function (e) {
            this.size += 4, h.Box.prototype.writeHeader.call(this, e, " v=" + this.version + " f=" + this.flags), e.writeUint8(this.version), e.writeUint24(this.flags)
        }, h.Box.prototype.write = function (e) {
            "mdat" === this.type ? this.data && (this.size = this.data.length, this.writeHeader(e), e.writeUint8Array(this.data)) : (this.size = this.data ? this.data.length : 0, this.writeHeader(e), this.data && e.writeUint8Array(this.data))
        }, h.ContainerBox.prototype.write = function (e) {
            this.size = 0, this.writeHeader(e);
            for (var t = 0; t < this.boxes.length; t++) this.boxes[t] && (this.boxes[t].write(e), this.size += this.boxes[t].size);
            a.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), e.adjustUint32(this.sizePosition, this.size)
        }, h.TrackReferenceTypeBox.prototype.write = function (e) {
            this.size = 4 * this.track_ids.length, this.writeHeader(e), e.writeUint32Array(this.track_ids)
        }, h.avcCBox.prototype.write = function (e) {
            var t;
            for (this.size = 7, t = 0; t < this.SPS.length; t++) this.size += 2 + this.SPS[t].length;
            for (t = 0; t < this.PPS.length; t++) this.size += 2 + this.PPS[t].length;
            for (this.ext && (this.size += this.ext.length), this.writeHeader(e), e.writeUint8(this.configurationVersion), e.writeUint8(this.AVCProfileIndication), e.writeUint8(this.profile_compatibility), e.writeUint8(this.AVCLevelIndication), e.writeUint8(this.lengthSizeMinusOne + 252), e.writeUint8(this.SPS.length + 224), t = 0; t < this.SPS.length; t++) e.writeUint16(this.SPS[t].length), e.writeUint8Array(this.SPS[t].nalu);
            for (e.writeUint8(this.PPS.length), t = 0; t < this.PPS.length; t++) e.writeUint16(this.PPS[t].length), e.writeUint8Array(this.PPS[t].nalu);
            this.ext && e.writeUint8Array(this.ext)
        }, h.co64Box.prototype.write = function (e) {
            var t;
            for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.chunk_offsets.length, this.writeHeader(e), e.writeUint32(this.chunk_offsets.length), t = 0; t < this.chunk_offsets.length; t++) e.writeUint64(this.chunk_offsets[t])
        }, h.cslgBox.prototype.write = function (e) {
            this.version = 0, this.flags = 0, this.size = 20, this.writeHeader(e), e.writeInt32(this.compositionToDTSShift), e.writeInt32(this.leastDecodeToDisplayDelta), e.writeInt32(this.greatestDecodeToDisplayDelta), e.writeInt32(this.compositionStartTime), e.writeInt32(this.compositionEndTime)
        }, h.cttsBox.prototype.write = function (e) {
            var t;
            for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.sample_counts.length, this.writeHeader(e), e.writeUint32(this.sample_counts.length), t = 0; t < this.sample_counts.length; t++) e.writeUint32(this.sample_counts[t]), 1 === this.version ? e.writeInt32(this.sample_offsets[t]) : e.writeUint32(this.sample_offsets[t])
        }, h.drefBox.prototype.write = function (e) {
            this.version = 0, this.flags = 0, this.size = 4, this.writeHeader(e), e.writeUint32(this.entries.length);
            for (var t = 0; t < this.entries.length; t++) this.entries[t].write(e), this.size += this.entries[t].size;
            a.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), e.adjustUint32(this.sizePosition, this.size)
        }, h.elngBox.prototype.write = function (e) {
            this.version = 0, this.flags = 0, this.size = this.extended_language.length, this.writeHeader(e), e.writeString(this.extended_language)
        }, h.elstBox.prototype.write = function (e) {
            this.version = 0, this.flags = 0, this.size = 4 + 12 * this.entries.length, this.writeHeader(e), e.writeUint32(this.entries.length);
            for (var t = 0; t < this.entries.length; t++) {
                var r = this.entries[t];
                e.writeUint32(r.segment_duration), e.writeInt32(r.media_time), e.writeInt16(r.media_rate_integer), e.writeInt16(r.media_rate_fraction)
            }
        }, h.emsgBox.prototype.write = function (e) {
            this.version = 0, this.flags = 0, this.size = 16 + this.message_data.length + (this.scheme_id_uri.length + 1) + (this.value.length + 1), this.writeHeader(e), e.writeCString(this.scheme_id_uri), e.writeCString(this.value), e.writeUint32(this.timescale), e.writeUint32(this.presentation_time_delta), e.writeUint32(this.event_duration), e.writeUint32(this.id), e.writeUint8Array(this.message_data)
        }, h.ftypBox.prototype.write = function (e) {
            this.size = 8 + 4 * this.compatible_brands.length, this.writeHeader(e), e.writeString(this.major_brand, null, 4), e.writeUint32(this.minor_version);
            for (var t = 0; t < this.compatible_brands.length; t++) e.writeString(this.compatible_brands[t], null, 4)
        }, h.hdlrBox.prototype.write = function (e) {
            this.size = 20 + this.name.length + 1, this.version = 0, this.flags = 0, this.writeHeader(e), e.writeUint32(0), e.writeString(this.handler, null, 4), e.writeUint32(0), e.writeUint32(0), e.writeUint32(0), e.writeCString(this.name)
        }, h.hvcCBox.prototype.write = function (e) {
            var t, r;
            for (this.size = 23, t = 0; t < this.nalu_arrays.length; t++)
                for (this.size += 3, r = 0; r < this.nalu_arrays[t].length; r++) this.size += 2 + this.nalu_arrays[t][r].data.length;
            for (this.writeHeader(e), e.writeUint8(this.configurationVersion), e.writeUint8(this.general_profile_space << 6 + this.general_tier_flag << 5 + this.general_profile_idc), e.writeUint32(this.general_profile_compatibility), e.writeUint8Array(this.general_constraint_indicator), e.writeUint8(this.general_level_idc), e.writeUint16(this.min_spatial_segmentation_idc + (15 << 24)), e.writeUint8(this.parallelismType + 252), e.writeUint8(this.chroma_format_idc + 252), e.writeUint8(this.bit_depth_luma_minus8 + 248), e.writeUint8(this.bit_depth_chroma_minus8 + 248), e.writeUint16(this.avgFrameRate), e.writeUint8((this.constantFrameRate << 6) + (this.numTemporalLayers << 3) + (this.temporalIdNested << 2) + this.lengthSizeMinusOne), e.writeUint8(this.nalu_arrays.length), t = 0; t < this.nalu_arrays.length; t++)
                for (e.writeUint8((this.nalu_arrays[t].completeness << 7) + this.nalu_arrays[t].nalu_type), e.writeUint16(this.nalu_arrays[t].length), r = 0; r < this.nalu_arrays[t].length; r++) e.writeUint16(this.nalu_arrays[t][r].data.length), e.writeUint8Array(this.nalu_arrays[t][r].data)
        }, h.kindBox.prototype.write = function (e) {
            this.version = 0, this.flags = 0, this.size = this.schemeURI.length + 1 + (this.value.length + 1), this.writeHeader(e), e.writeCString(this.schemeURI), e.writeCString(this.value)
        }, h.mdhdBox.prototype.write = function (e) {
            this.size = 20, this.flags = 0, this.version = 0, this.writeHeader(e), e.writeUint32(this.creation_time), e.writeUint32(this.modification_time), e.writeUint32(this.timescale), e.writeUint32(this.duration), e.writeUint16(this.language), e.writeUint16(0)
        }, h.mehdBox.prototype.write = function (e) {
            this.version = 0, this.flags = 0, this.size = 4, this.writeHeader(e), e.writeUint32(this.fragment_duration)
        }, h.mfhdBox.prototype.write = function (e) {
            this.version = 0, this.flags = 0, this.size = 4, this.writeHeader(e), e.writeUint32(this.sequence_number)
        }, h.mvhdBox.prototype.write = function (e) {
            this.version = 0, this.flags = 0, this.size = 96, this.writeHeader(e), e.writeUint32(this.creation_time), e.writeUint32(this.modification_time), e.writeUint32(this.timescale), e.writeUint32(this.duration), e.writeUint32(this.rate), e.writeUint16(this.volume << 8), e.writeUint16(0), e.writeUint32(0), e.writeUint32(0), e.writeUint32Array(this.matrix), e.writeUint32(0), e.writeUint32(0), e.writeUint32(0), e.writeUint32(0), e.writeUint32(0), e.writeUint32(0), e.writeUint32(this.next_track_id)
        }, h.SampleEntry.prototype.writeHeader = function (e) {
            this.size = 8, h.Box.prototype.writeHeader.call(this, e), e.writeUint8(0), e.writeUint8(0), e.writeUint8(0), e.writeUint8(0), e.writeUint8(0), e.writeUint8(0), e.writeUint16(this.data_reference_index)
        }, h.SampleEntry.prototype.writeFooter = function (e) {
            for (var t = 0; t < this.boxes.length; t++) this.boxes[t].write(e), this.size += this.boxes[t].size;
            a.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), e.adjustUint32(this.sizePosition, this.size)
        }, h.SampleEntry.prototype.write = function (e) {
            this.writeHeader(e), e.writeUint8Array(this.data), this.size += this.data.length, a.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), e.adjustUint32(this.sizePosition, this.size)
        }, h.VisualSampleEntry.prototype.write = function (e) {
            this.writeHeader(e), this.size += 70, e.writeUint16(0), e.writeUint16(0), e.writeUint32(0), e.writeUint32(0), e.writeUint32(0), e.writeUint16(this.width), e.writeUint16(this.height), e.writeUint32(this.horizresolution), e.writeUint32(this.vertresolution), e.writeUint32(0), e.writeUint16(this.frame_count), e.writeUint8(Math.min(31, this.compressorname.length)), e.writeString(this.compressorname, null, 31), e.writeUint16(this.depth), e.writeInt16(-1), this.writeFooter(e)
        }, h.AudioSampleEntry.prototype.write = function (e) {
            this.writeHeader(e), this.size += 20, e.writeUint32(0), e.writeUint32(0), e.writeUint16(this.channel_count), e.writeUint16(this.samplesize), e.writeUint16(0), e.writeUint16(0), e.writeUint32(this.samplerate << 16), this.writeFooter(e)
        }, h.stppSampleEntry.prototype.write = function (e) {
            this.writeHeader(e), this.size += this.namespace.length + 1 + this.schema_location.length + 1 + this.auxiliary_mime_types.length + 1, e.writeCString(this.namespace), e.writeCString(this.schema_location), e.writeCString(this.auxiliary_mime_types), this.writeFooter(e)
        }, h.SampleGroupEntry.prototype.write = function (e) {
            e.writeUint8Array(this.data)
        }, h.sbgpBox.prototype.write = function (e) {
            this.version = 1, this.flags = 0, this.size = 12 + 8 * this.entries.length, this.writeHeader(e), e.writeString(this.grouping_type, null, 4), e.writeUint32(this.grouping_type_parameter), e.writeUint32(this.entries.length);
            for (var t = 0; t < this.entries.length; t++) {
                var r = this.entries[t];
                e.writeInt32(r.sample_count), e.writeInt32(r.group_description_index)
            }
        }, h.sgpdBox.prototype.write = function (e) {
            var t, r;
            for (this.flags = 0, this.size = 12, t = 0; t < this.entries.length; t++) r = this.entries[t], 1 === this.version && (0 === this.default_length && (this.size += 4), this.size += r.data.length);
            for (this.writeHeader(e), e.writeString(this.grouping_type, null, 4), 1 === this.version && e.writeUint32(this.default_length), this.version >= 2 && e.writeUint32(this.default_sample_description_index), e.writeUint32(this.entries.length), t = 0; t < this.entries.length; t++) r = this.entries[t], 1 === this.version && 0 === this.default_length && e.writeUint32(r.description_length), r.write(e)
        }, h.sidxBox.prototype.write = function (e) {
            this.version = 0, this.flags = 0, this.size = 20 + 12 * this.references.length, this.writeHeader(e), e.writeUint32(this.reference_ID), e.writeUint32(this.timescale), e.writeUint32(this.earliest_presentation_time), e.writeUint32(this.first_offset), e.writeUint16(0), e.writeUint16(this.references.length);
            for (var t = 0; t < this.references.length; t++) {
                var r = this.references[t];
                e.writeUint32(r.reference_type << 31 | r.referenced_size), e.writeUint32(r.subsegment_duration), e.writeUint32(r.starts_with_SAP << 31 | r.SAP_type << 28 | r.SAP_delta_time)
            }
        }, h.smhdBox.prototype.write = function (e) {
            this.version = 0, this.flags = 1, this.size = 4, this.writeHeader(e), e.writeUint16(this.balance), e.writeUint16(0)
        }, h.stcoBox.prototype.write = function (e) {
            this.version = 0, this.flags = 0, this.size = 4 + 4 * this.chunk_offsets.length, this.writeHeader(e), e.writeUint32(this.chunk_offsets.length), e.writeUint32Array(this.chunk_offsets)
        }, h.stscBox.prototype.write = function (e) {
            var t;
            for (this.version = 0, this.flags = 0, this.size = 4 + 12 * this.first_chunk.length, this.writeHeader(e), e.writeUint32(this.first_chunk.length), t = 0; t < this.first_chunk.length; t++) e.writeUint32(this.first_chunk[t]), e.writeUint32(this.samples_per_chunk[t]), e.writeUint32(this.sample_description_index[t])
        }, h.stsdBox.prototype.write = function (e) {
            var t;
            for (this.version = 0, this.flags = 0, this.size = 0, this.writeHeader(e), e.writeUint32(this.entries.length), this.size += 4, t = 0; t < this.entries.length; t++) this.entries[t].write(e), this.size += this.entries[t].size;
            a.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), e.adjustUint32(this.sizePosition, this.size)
        }, h.stshBox.prototype.write = function (e) {
            var t;
            for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.shadowed_sample_numbers.length, this.writeHeader(e), e.writeUint32(this.shadowed_sample_numbers.length), t = 0; t < this.shadowed_sample_numbers.length; t++) e.writeUint32(this.shadowed_sample_numbers[t]), e.writeUint32(this.sync_sample_numbers[t])
        }, h.stssBox.prototype.write = function (e) {
            this.version = 0, this.flags = 0, this.size = 4 + 4 * this.sample_numbers.length, this.writeHeader(e), e.writeUint32(this.sample_numbers.length), e.writeUint32Array(this.sample_numbers)
        }, h.stszBox.prototype.write = function (e) {
            var t, r = !0;
            if (this.version = 0, this.flags = 0, this.sample_sizes.length > 0)
                for (t = 0; t + 1 < this.sample_sizes.length;) {
                    if (this.sample_sizes[t + 1] !== this.sample_sizes[0]) {
                        r = !1;
                        break
                    }
                    t++
                } else r = !1;
            this.size = 8, r || (this.size += 4 * this.sample_sizes.length), this.writeHeader(e), r ? e.writeUint32(this.sample_sizes[0]) : e.writeUint32(0), e.writeUint32(this.sample_sizes.length), r || e.writeUint32Array(this.sample_sizes)
        }, h.sttsBox.prototype.write = function (e) {
            var t;
            for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.sample_counts.length, this.writeHeader(e), e.writeUint32(this.sample_counts.length), t = 0; t < this.sample_counts.length; t++) e.writeUint32(this.sample_counts[t]), e.writeUint32(this.sample_deltas[t])
        }, h.tfdtBox.prototype.write = function (e) {
            var t = Math.pow(2, 32) - 1;
            this.version = this.baseMediaDecodeTime > t ? 1 : 0, this.flags = 0, this.size = 4, 1 === this.version && (this.size += 4), this.writeHeader(e), 1 === this.version ? e.writeUint64(this.baseMediaDecodeTime) : e.writeUint32(this.baseMediaDecodeTime)
        }, h.tfhdBox.prototype.write = function (e) {
            this.version = 0, this.size = 4, this.flags & h.TFHD_FLAG_BASE_DATA_OFFSET && (this.size += 8), this.flags & h.TFHD_FLAG_SAMPLE_DESC && (this.size += 4), this.flags & h.TFHD_FLAG_SAMPLE_DUR && (this.size += 4), this.flags & h.TFHD_FLAG_SAMPLE_SIZE && (this.size += 4), this.flags & h.TFHD_FLAG_SAMPLE_FLAGS && (this.size += 4), this.writeHeader(e), e.writeUint32(this.track_id), this.flags & h.TFHD_FLAG_BASE_DATA_OFFSET && e.writeUint64(this.base_data_offset), this.flags & h.TFHD_FLAG_SAMPLE_DESC && e.writeUint32(this.default_sample_description_index), this.flags & h.TFHD_FLAG_SAMPLE_DUR && e.writeUint32(this.default_sample_duration), this.flags & h.TFHD_FLAG_SAMPLE_SIZE && e.writeUint32(this.default_sample_size), this.flags & h.TFHD_FLAG_SAMPLE_FLAGS && e.writeUint32(this.default_sample_flags)
        }, h.tkhdBox.prototype.write = function (e) {
            this.version = 0, this.size = 80, this.writeHeader(e), e.writeUint32(this.creation_time), e.writeUint32(this.modification_time), e.writeUint32(this.track_id), e.writeUint32(0), e.writeUint32(this.duration), e.writeUint32(0), e.writeUint32(0), e.writeInt16(this.layer), e.writeInt16(this.alternate_group), e.writeInt16(this.volume << 8), e.writeUint16(0), e.writeInt32Array(this.matrix), e.writeUint32(this.width), e.writeUint32(this.height)
        }, h.trexBox.prototype.write = function (e) {
            this.version = 0, this.flags = 0, this.size = 20, this.writeHeader(e), e.writeUint32(this.track_id), e.writeUint32(this.default_sample_description_index), e.writeUint32(this.default_sample_duration), e.writeUint32(this.default_sample_size), e.writeUint32(this.default_sample_flags)
        }, h.trunBox.prototype.write = function (e) {
            this.version = 0, this.size = 4, this.flags & h.TRUN_FLAGS_DATA_OFFSET && (this.size += 4), this.flags & h.TRUN_FLAGS_FIRST_FLAG && (this.size += 4), this.flags & h.TRUN_FLAGS_DURATION && (this.size += 4 * this.sample_duration.length), this.flags & h.TRUN_FLAGS_SIZE && (this.size += 4 * this.sample_size.length), this.flags & h.TRUN_FLAGS_FLAGS && (this.size += 4 * this.sample_flags.length), this.flags & h.TRUN_FLAGS_CTS_OFFSET && (this.size += 4 * this.sample_composition_time_offset.length), this.writeHeader(e), e.writeUint32(this.sample_count), this.flags & h.TRUN_FLAGS_DATA_OFFSET && (this.data_offset_position = e.getPosition(), e.writeInt32(this.data_offset)), this.flags & h.TRUN_FLAGS_FIRST_FLAG && e.writeUint32(this.first_sample_flags);
            for (var t = 0; t < this.sample_count; t++) this.flags & h.TRUN_FLAGS_DURATION && e.writeUint32(this.sample_duration[t]), this.flags & h.TRUN_FLAGS_SIZE && e.writeUint32(this.sample_size[t]), this.flags & h.TRUN_FLAGS_FLAGS && e.writeUint32(this.sample_flags[t]), this.flags & h.TRUN_FLAGS_CTS_OFFSET && (0 === this.version ? e.writeUint32(this.sample_composition_time_offset[t]) : e.writeInt32(this.sample_composition_time_offset[t]))
        }, h["url Box"].prototype.write = function (e) {
            this.version = 0, this.location ? (this.flags = 0, this.size = this.location.length + 1) : (this.flags = 1, this.size = 0), this.writeHeader(e), this.location && e.writeCString(this.location)
        }, h["urn Box"].prototype.write = function (e) {
            this.version = 0, this.flags = 0, this.size = this.name.length + 1 + (this.location ? this.location.length + 1 : 0), this.writeHeader(e), e.writeCString(this.name), this.location && e.writeCString(this.location)
        }, h.vmhdBox.prototype.write = function (e) {
            this.version = 0, this.flags = 1, this.size = 8, this.writeHeader(e), e.writeUint16(this.graphicsmode), e.writeUint16Array(this.opcolor)
        }, h.cttsBox.prototype.unpack = function (e) {
            var t, r, i;
            for (i = 0, t = 0; t < this.sample_counts.length; t++)
                for (r = 0; r < this.sample_counts[t]; r++) e[i].pts = e[i].dts + this.sample_offsets[t], i++
        }, h.sttsBox.prototype.unpack = function (e) {
            var t, r, i;
            for (i = 0, t = 0; t < this.sample_counts.length; t++)
                for (r = 0; r < this.sample_counts[t]; r++) e[i].dts = 0 === i ? 0 : e[i - 1].dts + this.sample_deltas[t], i++
        }, h.stcoBox.prototype.unpack = function (e) {
            var t;
            for (t = 0; t < this.chunk_offsets.length; t++) e[t].offset = this.chunk_offsets[t]
        }, h.stscBox.prototype.unpack = function (e) {
            var t, r, i, s, n;
            for (s = 0, n = 0, t = 0; t < this.first_chunk.length; t++)
                for (r = 0; r < (t + 1 < this.first_chunk.length ? this.first_chunk[t + 1] : 1 / 0); r++)
                    for (n++, i = 0; i < this.samples_per_chunk[t]; i++) {
                        if (!e[s]) return;
                        e[s].description_index = this.sample_description_index[t], e[s].chunk_index = n, s++
                    }
        }, h.stszBox.prototype.unpack = function (e) {
            var t;
            for (t = 0; t < this.sample_sizes.length; t++) e[t].size = this.sample_sizes[t]
        }, h.DIFF_BOXES_PROP_NAMES = ["boxes", "entries", "references", "subsamples", "items", "item_infos", "extents", "associations", "subsegments", "ranges", "seekLists", "seekPoints", "esd", "levels"], h.DIFF_PRIMITIVE_ARRAY_PROP_NAMES = ["compatible_brands", "matrix", "opcolor", "sample_counts", "sample_counts", "sample_deltas", "first_chunk", "samples_per_chunk", "sample_sizes", "chunk_offsets", "sample_offsets", "sample_description_index", "sample_duration"], h.boxEqualFields = function (e, t) {
            if (e && !t) return !1;
            var r;
            for (r in e)
                if (!(h.DIFF_BOXES_PROP_NAMES.indexOf(r) > -1 || e[r] instanceof h.Box || t[r] instanceof h.Box || void 0 === e[r] || void 0 === t[r] || "function" == typeof e[r] || "function" == typeof t[r] || e.subBoxNames && e.subBoxNames.indexOf(r.slice(0, 4)) > -1 || t.subBoxNames && t.subBoxNames.indexOf(r.slice(0, 4)) > -1 || "data" === r || "start" === r || "size" === r || "creation_time" === r || "modification_time" === r || h.DIFF_PRIMITIVE_ARRAY_PROP_NAMES.indexOf(r) > -1 || e[r] === t[r])) return !1;
            return !0
        }, h.boxEqual = function (e, t) {
            if (!h.boxEqualFields(e, t)) return !1;
            for (var r = 0; r < h.DIFF_BOXES_PROP_NAMES.length; r++) {
                var i = h.DIFF_BOXES_PROP_NAMES[r];
                if (e[i] && t[i] && !h.boxEqual(e[i], t[i])) return !1
            }
            return !0
        };
        var m = function () {};
        m.prototype.parseSample = function (e) {
            var t, r = {};
            r.resources = [];
            var i = new o(e.data.buffer);
            if (e.subsamples && 0 !== e.subsamples.length) {
                if (r.documentString = i.readString(e.subsamples[0].size), e.subsamples.length > 1)
                    for (t = 1; t < e.subsamples.length; t++) r.resources[t] = i.readUint8Array(e.subsamples[t].size)
            } else r.documentString = i.readString(e.data.length);
            return "undefined" != typeof DOMParser && (r.document = (new DOMParser).parseFromString(r.documentString, "application/xml")), r
        };
        var _ = function () {};
        _.prototype.parseSample = function (e) {
            return new o(e.data.buffer).readString(e.data.length)
        }, _.prototype.parseConfig = function (e) {
            var t = new o(e.buffer);
            return t.readUint32(), t.readCString()
        }, t.XMLSubtitlein4Parser = m, t.Textin4Parser = _;
        var g = function (e) {
            this.stream = e || new u, this.boxes = [], this.mdats = [], this.moofs = [], this.isProgressive = !1, this.moovStartFound = !1, this.onMoovStart = null, this.moovStartSent = !1, this.onReady = null, this.readySent = !1, this.onSegment = null, this.onSamples = null, this.onError = null, this.sampleListBuilt = !1, this.fragmentedTracks = [], this.extractedTracks = [], this.isFragmentationInitialized = !1, this.sampleProcessingStarted = !1, this.nextMoofNumber = 0, this.itemListBuilt = !1, this.onSidx = null, this.sidxSent = !1
        };
        g.prototype.setSegmentOptions = function (e, t, r) {
            var i = this.getTrackById(e);
            if (i) {
                var s = {};
                this.fragmentedTracks.push(s), s.id = e, s.user = t, s.trak = i, i.nextSample = 0, s.segmentStream = null, s.nb_samples = 1e3, s.rapAlignement = !0, r && (r.nbSamples && (s.nb_samples = r.nbSamples), r.rapAlignement && (s.rapAlignement = r.rapAlignement))
            }
        }, g.prototype.unsetSegmentOptions = function (e) {
            for (var t = -1, r = 0; r < this.fragmentedTracks.length; r++) {
                this.fragmentedTracks[r].id == e && (t = r)
            }
            t > -1 && this.fragmentedTracks.splice(t, 1)
        }, g.prototype.setExtractionOptions = function (e, t, r) {
            var i = this.getTrackById(e);
            if (i) {
                var s = {};
                this.extractedTracks.push(s), s.id = e, s.user = t, s.trak = i, i.nextSample = 0, s.nb_samples = 1e3, s.samples = [], r && r.nbSamples && (s.nb_samples = r.nbSamples)
            }
        }, g.prototype.unsetExtractionOptions = function (e) {
            for (var t = -1, r = 0; r < this.extractedTracks.length; r++) {
                this.extractedTracks[r].id == e && (t = r)
            }
            t > -1 && this.extractedTracks.splice(t, 1)
        }, g.prototype.parse = function () {
            var e, t;
            if (!this.restoreParsePosition || this.restoreParsePosition())
                for (;;) {
                    if (this.hasIncompleteMdat && this.hasIncompleteMdat()) {
                        if (this.processIncompleteMdat()) continue;
                        return
                    }
                    if (this.saveParsePosition && this.saveParsePosition(), (e = h.parseOneBox(this.stream, false)).code === h.ERR_NOT_ENOUGH_DATA) {
                        if (this.processIncompleteBox) {
                            if (this.processIncompleteBox(e)) continue;
                            return
                        }
                        return
                    }
                    var r;
                    switch (r = "uuid" !== (t = e.box).type ? t.type : t.uuid, this.boxes.push(t), r) {
                        case "mdat":
                            this.mdats.push(t);
                            break;
                        case "moof":
                            this.moofs.push(t);
                            break;
                        case "moov":
                            this.moovStartFound = !0, 0 === this.mdats.length && (this.isProgressive = !0);
                        default:
                            void 0 !== this[r] && a.warn("ISOFile", "Duplicate Box of type: " + r + ", overriding previous occurrence"), this[r] = t
                    }
                    this.updateUsedBytes && this.updateUsedBytes(t, e)
                }
        }, g.prototype.checkBuffer = function (e) {
            if (null == e) throw "Buffer must be defined and non empty";
            if (void 0 === e.fileStart) throw "Buffer must have a fileStart property";
            return 0 === e.byteLength ? (a.warn("ISOFile", "Ignoring empty buffer (fileStart: " + e.fileStart + ")"), this.stream.logBufferLevel(), !1) : (a.info("ISOFile", "Processing buffer (fileStart: " + e.fileStart + ")"), e.usedBytes = 0, this.stream.insertBuffer(e), this.stream.logBufferLevel(), !!this.stream.initialized() || (a.warn("ISOFile", "Not ready to start parsing"), !1))
        }, g.prototype.appendBuffer = function (e, t) {
            var r;
            if (this.checkBuffer(e)) return this.parse(), this.moovStartFound && !this.moovStartSent && (this.moovStartSent = !0, this.onMoovStart && this.onMoovStart()), this.moov ? (this.sampleListBuilt || (this.buildSampleLists(), this.sampleListBuilt = !0), this.updateSampleLists(), this.onReady && !this.readySent && (this.readySent = !0, this.onReady(this.getInfo())), this.processSamples(t), this.nextSeekPosition ? (r = this.nextSeekPosition, this.nextSeekPosition = void 0) : r = this.nextParsePosition, this.stream.getEndFilePositionAfter && (r = this.stream.getEndFilePositionAfter(r))) : r = this.nextParsePosition ? this.nextParsePosition : 0, this.sidx && this.onSidx && !this.sidxSent && (this.onSidx(this.sidx), this.sidxSent = !0), this.meta && (this.flattenItemInfo && !this.itemListBuilt && (this.flattenItemInfo(), this.itemListBuilt = !0), this.processItems && this.processItems(this.onItem)), this.stream.cleanBuffers && (a.info("ISOFile", "Done processing buffer (fileStart: " + e.fileStart + ") - next buffer to fetch should have a fileStart position of " + r), this.stream.logBufferLevel(), this.stream.cleanBuffers(), this.stream.logBufferLevel(!0), a.info("ISOFile", "Sample data size in memory: " + this.getAllocatedSampleDataSize())), r
        }, g.prototype.getInfo = function () {
            var e, t, r, i, s, n, a = {},
                o = new Date("1904-01-01T00:00:00Z").getTime();
            if (this.moov)
                for (a.hasMoov = !0, a.duration = this.moov.mvhd.duration, a.timescale = this.moov.mvhd.timescale, a.isFragmented = null != this.moov.mvex, a.isFragmented && this.moov.mvex.mehd && (a.fragment_duration = this.moov.mvex.mehd.fragment_duration), a.isProgressive = this.isProgressive, a.hasIOD = null != this.moov.iods, a.brands = [], a.brands.push(this.ftyp.major_brand), a.brands = a.brands.concat(this.ftyp.compatible_brands), a.created = new Date(o + 1e3 * this.moov.mvhd.creation_time), a.modified = new Date(o + 1e3 * this.moov.mvhd.modification_time), a.tracks = [], a.audioTracks = [], a.videoTracks = [], a.subtitleTracks = [], a.metadataTracks = [], a.hintTracks = [], a.otherTracks = [], e = 0; e < this.moov.traks.length; e++) {
                    if (n = (r = this.moov.traks[e]).mdia.minf.stbl.stsd.entries[0], i = {}, a.tracks.push(i), i.id = r.tkhd.track_id, i.name = r.mdia.hdlr.name, i.references = [], r.tref)
                        for (t = 0; t < r.tref.boxes.length; t++) s = {}, i.references.push(s), s.type = r.tref.boxes[t].type, s.track_ids = r.tref.boxes[t].track_ids;
                    r.edts && (i.edits = r.edts.elst.entries), i.created = new Date(o + 1e3 * r.tkhd.creation_time), i.modified = new Date(o + 1e3 * r.tkhd.modification_time), i.movie_duration = r.tkhd.duration, i.movie_timescale = a.timescale, i.layer = r.tkhd.layer, i.alternate_group = r.tkhd.alternate_group, i.volume = r.tkhd.volume, i.matrix = r.tkhd.matrix, i.track_width = r.tkhd.width / 65536, i.track_height = r.tkhd.height / 65536, i.timescale = r.mdia.mdhd.timescale, i.cts_shift = r.mdia.minf.stbl.cslg, i.duration = r.mdia.mdhd.duration, i.samples_duration = r.samples_duration, i.codec = n.getCodec(), i.kind = r.udta && r.udta.kinds.length ? r.udta.kinds[0] : {
                        schemeURI: "",
                        value: ""
                    }, i.language = r.mdia.elng ? r.mdia.elng.extended_language : r.mdia.mdhd.languageString, i.nb_samples = r.samples.length, i.size = r.samples_size, i.bitrate = 8 * i.size * i.timescale / i.samples_duration, n.isAudio() ? (i.type = "audio", a.audioTracks.push(i), i.audio = {}, i.audio.sample_rate = n.getSampleRate(), i.audio.channel_count = n.getChannelCount(), i.audio.sample_size = n.getSampleSize()) : n.isVideo() ? (i.type = "video", a.videoTracks.push(i), i.video = {}, i.video.width = n.getWidth(), i.video.height = n.getHeight()) : n.isSubtitle() ? (i.type = "subtitles", a.subtitleTracks.push(i)) : n.isHint() ? (i.type = "metadata", a.hintTracks.push(i)) : n.isMetadata() ? (i.type = "metadata", a.metadataTracks.push(i)) : (i.type = "metadata", a.otherTracks.push(i))
                } else a.hasMoov = !1;
            if (a.mime = "", a.hasMoov && a.tracks) {
                for (a.videoTracks && a.videoTracks.length > 0 ? a.mime += 'video/mp4; codecs="' : a.audioTracks && a.audioTracks.length > 0 ? a.mime += 'audio/mp4; codecs="' : a.mime += 'application/mp4; codecs="', e = 0; e < a.tracks.length; e++) 0 !== e && (a.mime += ","), a.mime += a.tracks[e].codec;
                a.mime += '"; profiles="', a.mime += this.ftyp.compatible_brands.join(), a.mime += '"'
            }
            return a
        }, g.prototype.setNextSeekPositionFromSample = function (e) {
            e && (this.nextSeekPosition ? this.nextSeekPosition = Math.min(e.offset + e.alreadyRead, this.nextSeekPosition) : this.nextSeekPosition = e.offset + e.alreadyRead)
        }, g.prototype.processSamples = function (e) {
            var t, r;
            if (this.sampleProcessingStarted) {
                if (this.isFragmentationInitialized && null !== this.onSegment)
                    for (t = 0; t < this.fragmentedTracks.length; t++) {
                        var i = this.fragmentedTracks[t];
                        for (r = i.trak; r.nextSample < r.samples.length && this.sampleProcessingStarted;) {
                            a.debug("ISOFile", "Creating media fragment on track #" + i.id + " for sample " + r.nextSample);
                            var s = this.createFragment(i.id, r.nextSample, i.segmentStream);
                            if (!s) break;
                            if (i.segmentStream = s, r.nextSample++, (r.nextSample % i.nb_samples == 0 || e || r.nextSample >= r.samples.length) && (a.info("ISOFile", "Sending fragmented data on track #" + i.id + " for samples [" + Math.max(0, r.nextSample - i.nb_samples) + "," + (r.nextSample - 1) + "]"), a.info("ISOFile", "Sample data size in memory: " + this.getAllocatedSampleDataSize()), this.onSegment && this.onSegment(i.id, i.user, i.segmentStream.buffer, r.nextSample, e || r.nextSample >= r.samples.length), i.segmentStream = null, i !== this.fragmentedTracks[t])) break
                        }
                    }
                if (null !== this.onSamples)
                    for (t = 0; t < this.extractedTracks.length; t++) {
                        var n = this.extractedTracks[t];
                        for (r = n.trak; r.nextSample < r.samples.length && this.sampleProcessingStarted;) {
                            a.debug("ISOFile", "Exporting on track #" + n.id + " sample #" + r.nextSample);
                            var o = this.getSample(r, r.nextSample);
                            if (!o) {
                                this.setNextSeekPositionFromSample(r.samples[r.nextSample]);
                                break
                            }
                            if (r.nextSample++, n.samples.push(o), (r.nextSample % n.nb_samples == 0 || r.nextSample >= r.samples.length) && (a.debug("ISOFile", "Sending samples on track #" + n.id + " for sample " + r.nextSample), this.onSamples && this.onSamples(n.id, n.user, n.samples), n.samples = [], n !== this.extractedTracks[t])) break
                        }
                    }
            }
        }, g.prototype.getBox = function (e) {
            var t = this.getBoxes(e, !0);
            return t.length ? t[0] : null
        }, g.prototype.getBoxes = function (e, t) {
            var r = [];
            return g._sweep.call(this, e, r, t), r
        }, g._sweep = function (e, t, r) {
            for (var i in this.type && this.type == e && t.push(this), this.boxes) {
                if (t.length && r) return;
                g._sweep.call(this.boxes[i], e, t, r)
            }
        }, g.prototype.getTrackSamplesInfo = function (e) {
            var t = this.getTrackById(e);
            return t ? t.samples : void 0
        }, g.prototype.getTrackSample = function (e, t) {
            var r = this.getTrackById(e);
            return this.getSample(r, t)
        }, g.prototype.releaseUsedSamples = function (e, t) {
            var r = 0,
                i = this.getTrackById(e);
            i.lastValidSample || (i.lastValidSample = 0);
            for (var s = i.lastValidSample; s < t; s++) r += this.releaseSample(i, s);
            a.info("ISOFile", "Track #" + e + " released samples up to " + t + " (released size: " + r + ", remaining: " + this.samplesDataSize + ")"), i.lastValidSample = t
        }, g.prototype.start = function () {
            this.sampleProcessingStarted = !0, this.processSamples(!1)
        }, g.prototype.stop = function () {
            this.sampleProcessingStarted = !1
        }, g.prototype.flush = function () {
            a.info("ISOFile", "Flushing remaining samples"), this.updateSampleLists(), this.processSamples(!0), this.stream.cleanBuffers(), this.stream.logBufferLevel(!0)
        }, g.prototype.seekTrack = function (e, t, r) {
            var i, s, n, o, d = 0,
                l = 0;
            if (0 === r.samples.length) return a.info("ISOFile", "No sample in track, cannot seek! Using time " + a.getDurationString(0, 1) + " and offset: 0"), {
                offset: 0,
                time: 0
            };
            for (i = 0; i < r.samples.length; i++) {
                if (s = r.samples[i], 0 === i) l = 0, o = s.timescale;
                else if (s.cts > e * s.timescale) {
                    l = i - 1;
                    break
                }
                t && s.is_sync && (d = i)
            }
            for (t && (l = d), e = r.samples[l].cts, r.nextSample = l; r.samples[l].alreadyRead === r.samples[l].size && r.samples[l + 1];) l++;
            return n = r.samples[l].offset + r.samples[l].alreadyRead, a.info("ISOFile", "Seeking to " + (t ? "RAP" : "") + " sample #" + r.nextSample + " on track " + r.tkhd.track_id + ", time " + a.getDurationString(e, o) + " and offset: " + n), {
                offset: n,
                time: e / o
            }
        }, g.prototype.getTrackDuration = function (e) {
            var t;
            return e.samples ? ((t = e.samples[e.samples.length - 1]).cts + t.duration) / t.timescale : 1 / 0
        }, g.prototype.seek = function (e, t) {
            var r, i, s, n = this.moov,
                o = {
                    offset: 1 / 0,
                    time: 1 / 0
                };
            if (this.moov) {
                for (s = 0; s < n.traks.length; s++) r = n.traks[s], e > this.getTrackDuration(r) || ((i = this.seekTrack(e, t, r)).offset < o.offset && (o.offset = i.offset), i.time < o.time && (o.time = i.time));
                return a.info("ISOFile", "Seeking at time " + a.getDurationString(o.time, 1) + " needs a buffer with a fileStart position of " + o.offset), o.offset === 1 / 0 ? o = {
                    offset: this.nextParsePosition,
                    time: 0
                } : o.offset = this.stream.getEndFilePositionAfter(o.offset), a.info("ISOFile", "Adjusted seek position (after checking data already in buffer): " + o.offset), o
            }
            throw "Cannot seek: moov not received!"
        }, g.prototype.equal = function (e) {
            for (var t = 0; t < this.boxes.length && t < e.boxes.length;) {
                var r = this.boxes[t],
                    i = e.boxes[t];
                if (!h.boxEqual(r, i)) return !1;
                t++
            }
            return !0
        }, t.ISOFile = g, g.prototype.lastBoxStartPosition = 0, g.prototype.parsingMdat = null, g.prototype.nextParsePosition = 0, g.prototype.discardMdatData = !1, g.prototype.processIncompleteBox = function (e) {
            var t;
            return "mdat" === e.type ? (t = new h[e.type + "Box"](e.size), this.parsingMdat = t, this.boxes.push(t), this.mdats.push(t), t.start = e.start, t.hdr_size = e.hdr_size, this.stream.addUsedBytes(t.hdr_size), this.lastBoxStartPosition = t.start + t.size, this.stream.seek(t.start + t.size, !1, this.discardMdatData) ? (this.parsingMdat = null, !0) : (this.moovStartFound ? this.nextParsePosition = this.stream.findEndContiguousBuf() : this.nextParsePosition = t.start + t.size, !1)) : ("moov" === e.type && (this.moovStartFound = !0, 0 === this.mdats.length && (this.isProgressive = !0)), !!this.stream.mergeNextBuffer && this.stream.mergeNextBuffer() ? (this.nextParsePosition = this.stream.getEndPosition(), !0) : (e.type ? this.moovStartFound ? this.nextParsePosition = this.stream.getEndPosition() : this.nextParsePosition = this.stream.getPosition() + e.size : this.nextParsePosition = this.stream.getEndPosition(), !1))
        }, g.prototype.hasIncompleteMdat = function () {
            return null !== this.parsingMdat
        }, g.prototype.processIncompleteMdat = function () {
            var e;
            return e = this.parsingMdat, this.stream.seek(e.start + e.size, !1, this.discardMdatData) ? (a.debug("ISOFile", "Found 'mdat' end in buffered data"), this.parsingMdat = null, !0) : (this.nextParsePosition = this.stream.findEndContiguousBuf(), !1)
        }, g.prototype.restoreParsePosition = function () {
            return this.stream.seek(this.lastBoxStartPosition, !0, this.discardMdatData)
        }, g.prototype.saveParsePosition = function () {
            this.lastBoxStartPosition = this.stream.getPosition()
        }, g.prototype.updateUsedBytes = function (e, t) {
            this.stream.addUsedBytes && ("mdat" === e.type ? (this.stream.addUsedBytes(e.hdr_size), this.discardMdatData && this.stream.addUsedBytes(e.size - e.hdr_size)) : this.stream.addUsedBytes(e.size))
        }, g.prototype.add = h.Box.prototype.add, g.prototype.addBox = h.Box.prototype.addBox, g.prototype.init = function (e) {
            var t = e || {};
            this.add("ftyp").set("major_brand", t.brands && t.brands[0] || "iso4").set("minor_version", 0).set("compatible_brands", t.brands || ["iso4"]);
            var r = this.add("moov");
            return r.add("mvhd").set("timescale", t.timescale || 600).set("rate", t.rate || 65536).set("creation_time", 0).set("modification_time", 0).set("duration", t.duration || 0).set("volume", t.width ? 0 : 256).set("matrix", [65536, 0, 0, 0, 65536, 0, 0, 0, 1073741824]).set("next_track_id", 1), r.add("mvex"), this
        }, g.prototype.addTrack = function (e) {
            this.moov || this.init(e);
            var t = e || {};
            t.width = t.width || 320, t.height = t.height || 320, t.id = t.id || this.moov.mvhd.next_track_id, t.type = t.type || "avc1";
            var r = this.moov.add("trak");
            this.moov.mvhd.next_track_id = t.id + 1, r.add("tkhd").set("flags", h.TKHD_FLAG_ENABLED | h.TKHD_FLAG_IN_MOVIE | h.TKHD_FLAG_IN_PREVIEW).set("creation_time", 0).set("modification_time", 0).set("track_id", t.id).set("duration", t.duration || 0).set("layer", t.layer || 0).set("alternate_group", 0).set("volume", 1).set("matrix", [0, 0, 0, 0, 0, 0, 0, 0, 0]).set("width", t.width << 16).set("height", t.height << 16);
            var i = r.add("mdia");
            i.add("mdhd").set("creation_time", 0).set("modification_time", 0).set("timescale", t.timescale || 1).set("duration", t.media_duration || 0).set("language", t.language || "und"), i.add("hdlr").set("handler", t.hdlr || "vide").set("name", t.name || "Track created with MP4Box.js"), i.add("elng").set("extended_language", t.language || "fr-FR");
            var s = i.add("minf");
            if (void 0 !== h[t.type + "SampleEntry"]) {
                var n = new h[t.type + "SampleEntry"];
                n.data_reference_index = 1;
                var a = "";
                for (var d in h.sampleEntryCodes)
                    for (var l = h.sampleEntryCodes[d], u = 0; u < l.length; u++)
                        if (l.indexOf(t.type) > -1) {
                            a = d;
                            break
                        } switch (a) {
                    case "Visual":
                        if (s.add("vmhd").set("graphicsmode", 0).set("opcolor", [0, 0, 0]), n.set("width", t.width).set("height", t.height).set("horizresolution", 72 << 16).set("vertresolution", 72 << 16).set("frame_count", 1).set("compressorname", t.type + " Compressor").set("depth", 24), t.avcDecoderConfigRecord) {
                            var c = new h.avcCBox;
                            c.parse(new o(t.avcDecoderConfigRecord)), n.addBox(c)
                        } else if (t.hevcDecoderConfigRecord) {
                            var f = new h.hvcCBox;
                            f.parse(new o(t.hevcDecoderConfigRecord)), n.addBox(f)
                        }
                        break;
                    case "Audio":
                        s.add("smhd").set("balance", t.balance || 0), n.set("channel_count", t.channel_count || 2).set("samplesize", t.samplesize || 16).set("samplerate", t.samplerate || 65536);
                        break;
                    case "Hint":
                        s.add("hmhd");
                        break;
                    case "Subtitle":
                        if (s.add("sthd"), "stpp" === t.type) n.set("namespace", t.namespace || "nonamespace").set("schema_location", t.schema_location || "").set("auxiliary_mime_types", t.auxiliary_mime_types || "");
                        break;
                    default:
                        s.add("nmhd")
                }
                t.description && n.addBox(t.description), t.description_boxes && t.description_boxes.forEach((function (e) {
                    n.addBox(e)
                })), s.add("dinf").add("dref").addEntry((new h["url Box"]).set("flags", 1));
                var p = s.add("stbl");
                return p.add("stsd").addEntry(n), p.add("stts").set("sample_counts", []).set("sample_deltas", []), p.add("stsc").set("first_chunk", []).set("samples_per_chunk", []).set("sample_description_index", []), p.add("stco").set("chunk_offsets", []), p.add("stsz").set("sample_sizes", []), this.moov.mvex.add("trex").set("track_id", t.id).set("default_sample_description_index", t.default_sample_description_index || 1).set("default_sample_duration", t.default_sample_duration || 0).set("default_sample_size", t.default_sample_size || 0).set("default_sample_flags", t.default_sample_flags || 0), this.buildTrakSampleLists(r), t.id
            }
        }, h.Box.prototype.computeSize = function (e) {
            var t = e || new d;
            t.endianness = d.BIG_ENDIAN, this.write(t)
        }, g.prototype.addSample = function (e, t, r) {
            var i = r || {},
                s = {},
                n = this.getTrackById(e);
            if (null !== n) {
                s.number = n.samples.length, s.track_id = n.tkhd.track_id, s.timescale = n.mdia.mdhd.timescale, s.description_index = i.sample_description_index ? i.sample_description_index - 1 : 0, s.description = n.mdia.minf.stbl.stsd.entries[s.description_index], s.data = t, s.size = t.byteLength, s.alreadyRead = s.size, s.duration = i.duration || 1, s.cts = i.cts || 0, s.dts = i.dts || 0, s.is_sync = i.is_sync || !1, s.is_leading = i.is_leading || 0, s.depends_on = i.depends_on || 0, s.is_depended_on = i.is_depended_on || 0, s.has_redundancy = i.has_redundancy || 0, s.degradation_priority = i.degradation_priority || 0, s.offset = 0, s.subsamples = i.subsamples, n.samples.push(s), n.samples_size += s.size, n.samples_duration += s.duration, void 0 === n.first_dts && (n.first_dts = i.dts), this.processSamples();
                var a = this.createSingleSampleMoof(s);
                return this.addBox(a), a.computeSize(), a.trafs[0].truns[0].data_offset = a.size + 8, this.add("mdat").data = new Uint8Array(t), s
            }
        }, g.prototype.createSingleSampleMoof = function (e) {
            var t = 0;
            t = e.is_sync ? 1 << 25 : 65536;
            var r = new h.moofBox;
            r.add("mfhd").set("sequence_number", this.nextMoofNumber), this.nextMoofNumber++;
            var i = r.add("traf"),
                s = this.getTrackById(e.track_id);
            return i.add("tfhd").set("track_id", e.track_id).set("flags", h.TFHD_FLAG_DEFAULT_BASE_IS_MOOF), i.add("tfdt").set("baseMediaDecodeTime", e.dts - (s.first_dts || 0)), i.add("trun").set("flags", h.TRUN_FLAGS_DATA_OFFSET | h.TRUN_FLAGS_DURATION | h.TRUN_FLAGS_SIZE | h.TRUN_FLAGS_FLAGS | h.TRUN_FLAGS_CTS_OFFSET).set("data_offset", 0).set("first_sample_flags", 0).set("sample_count", 1).set("sample_duration", [e.duration]).set("sample_size", [e.size]).set("sample_flags", [t]).set("sample_composition_time_offset", [e.cts - e.dts]), r
        }, g.prototype.lastMoofIndex = 0, g.prototype.samplesDataSize = 0, g.prototype.resetTables = function () {
            var e, t, r, i, s, n;
            for (this.initial_duration = this.moov.mvhd.duration, this.moov.mvhd.duration = 0, e = 0; e < this.moov.traks.length; e++) {
                (t = this.moov.traks[e]).tkhd.duration = 0, t.mdia.mdhd.duration = 0, (t.mdia.minf.stbl.stco || t.mdia.minf.stbl.co64).chunk_offsets = [], (r = t.mdia.minf.stbl.stsc).first_chunk = [], r.samples_per_chunk = [], r.sample_description_index = [], (t.mdia.minf.stbl.stsz || t.mdia.minf.stbl.stz2).sample_sizes = [], (i = t.mdia.minf.stbl.stts).sample_counts = [], i.sample_deltas = [], (s = t.mdia.minf.stbl.ctts) && (s.sample_counts = [], s.sample_offsets = []), n = t.mdia.minf.stbl.stss;
                var a = t.mdia.minf.stbl.boxes.indexOf(n); - 1 != a && (t.mdia.minf.stbl.boxes[a] = null)
            }
        }, g.initSampleGroups = function (e, t, r, i, s) {
            var n, a, o, d;

            function l(e, t, r) {
                this.grouping_type = e, this.grouping_type_parameter = t, this.sbgp = r, this.last_sample_in_run = -1, this.entry_index = -1
            }
            for (t && (t.sample_groups_info = []), e.sample_groups_info || (e.sample_groups_info = []), a = 0; a < r.length; a++) {
                for (d = r[a].grouping_type + "/" + r[a].grouping_type_parameter, o = new l(r[a].grouping_type, r[a].grouping_type_parameter, r[a]), t && (t.sample_groups_info[d] = o), e.sample_groups_info[d] || (e.sample_groups_info[d] = o), n = 0; n < i.length; n++) i[n].grouping_type === r[a].grouping_type && (o.description = i[n], o.description.used = !0);
                if (s)
                    for (n = 0; n < s.length; n++) s[n].grouping_type === r[a].grouping_type && (o.fragment_description = s[n], o.fragment_description.used = !0, o.is_fragment = !0)
            }
            if (t) {
                if (s)
                    for (a = 0; a < s.length; a++) !s[a].used && s[a].version >= 2 && (d = s[a].grouping_type + "/0", (o = new l(s[a].grouping_type, 0)).is_fragment = !0, t.sample_groups_info[d] || (t.sample_groups_info[d] = o))
            } else
                for (a = 0; a < i.length; a++) !i[a].used && i[a].version >= 2 && (d = i[a].grouping_type + "/0", o = new l(i[a].grouping_type, 0), e.sample_groups_info[d] || (e.sample_groups_info[d] = o))
        }, g.setSampleGroupProperties = function (e, t, r, i) {
            var s, n;
            for (s in t.sample_groups = [], i) {
                var a;
                if (t.sample_groups[s] = {}, t.sample_groups[s].grouping_type = i[s].grouping_type, t.sample_groups[s].grouping_type_parameter = i[s].grouping_type_parameter, r >= i[s].last_sample_in_run && (i[s].last_sample_in_run < 0 && (i[s].last_sample_in_run = 0), i[s].entry_index++, i[s].entry_index <= i[s].sbgp.entries.length - 1 && (i[s].last_sample_in_run += i[s].sbgp.entries[i[s].entry_index].sample_count)), i[s].entry_index <= i[s].sbgp.entries.length - 1 ? t.sample_groups[s].group_description_index = i[s].sbgp.entries[i[s].entry_index].group_description_index : t.sample_groups[s].group_description_index = -1, 0 !== t.sample_groups[s].group_description_index) a = i[s].fragment_description ? i[s].fragment_description : i[s].description, t.sample_groups[s].group_description_index > 0 ? (n = t.sample_groups[s].group_description_index > 65535 ? (t.sample_groups[s].group_description_index >> 16) - 1 : t.sample_groups[s].group_description_index - 1, a && n >= 0 && (t.sample_groups[s].description = a.entries[n])) : a && a.version >= 2 && a.default_group_description_index > 0 && (t.sample_groups[s].description = a.entries[a.default_group_description_index - 1])
            }
        }, g.process_sdtp = function (e, t, r) {
            t && (e ? (t.is_leading = e.is_leading[r], t.depends_on = e.sample_depends_on[r], t.is_depended_on = e.sample_is_depended_on[r], t.has_redundancy = e.sample_has_redundancy[r]) : (t.is_leading = 0, t.depends_on = 0, t.is_depended_on = 0, t.has_redundancy = 0))
        }, g.prototype.buildSampleLists = function () {
            var e, t;
            for (e = 0; e < this.moov.traks.length; e++) t = this.moov.traks[e], this.buildTrakSampleLists(t)
        }, g.prototype.buildTrakSampleLists = function (e) {
            var t, r, i, s, n, a, o, d, l, u, c, h, f, p, m, _, y, b, v, w, S, E, A, U;
            if (e.samples = [], e.samples_duration = 0, e.samples_size = 0, r = e.mdia.minf.stbl.stco || e.mdia.minf.stbl.co64, i = e.mdia.minf.stbl.stsc, s = e.mdia.minf.stbl.stsz || e.mdia.minf.stbl.stz2, n = e.mdia.minf.stbl.stts, a = e.mdia.minf.stbl.ctts, o = e.mdia.minf.stbl.stss, d = e.mdia.minf.stbl.stsd, l = e.mdia.minf.stbl.subs, h = e.mdia.minf.stbl.stdp, u = e.mdia.minf.stbl.sbgps, c = e.mdia.minf.stbl.sgpds, b = -1, v = -1, w = -1, S = -1, E = 0, A = 0, U = 0, g.initSampleGroups(e, null, u, c), void 0 !== s) {
                for (t = 0; t < s.sample_sizes.length; t++) {
                    var x = {};
                    x.number = t, x.track_id = e.tkhd.track_id, x.timescale = e.mdia.mdhd.timescale, x.alreadyRead = 0, e.samples[t] = x, x.size = s.sample_sizes[t], e.samples_size += x.size, 0 === t ? (p = 1, f = 0, x.chunk_index = p, x.chunk_run_index = f, y = i.samples_per_chunk[f], _ = 0, m = f + 1 < i.first_chunk.length ? i.first_chunk[f + 1] - 1 : 1 / 0) : t < y ? (x.chunk_index = p, x.chunk_run_index = f) : (p++, x.chunk_index = p, _ = 0, p <= m || (m = ++f + 1 < i.first_chunk.length ? i.first_chunk[f + 1] - 1 : 1 / 0), x.chunk_run_index = f, y += i.samples_per_chunk[f]), x.description_index = i.sample_description_index[x.chunk_run_index] - 1, x.description = d.entries[x.description_index], x.offset = r.chunk_offsets[x.chunk_index - 1] + _, _ += x.size, t > b && (v++, b < 0 && (b = 0), b += n.sample_counts[v]), t > 0 ? (e.samples[t - 1].duration = n.sample_deltas[v], e.samples_duration += e.samples[t - 1].duration, x.dts = e.samples[t - 1].dts + e.samples[t - 1].duration) : x.dts = 0, a ? (t >= w && (S++, w < 0 && (w = 0), w += a.sample_counts[S]), x.cts = e.samples[t].dts + a.sample_offsets[S]) : x.cts = x.dts, o ? (t == o.sample_numbers[E] - 1 ? (x.is_sync = !0, E++) : (x.is_sync = !1, x.degradation_priority = 0), l && l.entries[A].sample_delta + U == t + 1 && (x.subsamples = l.entries[A].subsamples, U += l.entries[A].sample_delta, A++)) : x.is_sync = !0, g.process_sdtp(e.mdia.minf.stbl.sdtp, x, x.number), x.degradation_priority = h ? h.priority[t] : 0, l && l.entries[A].sample_delta + U == t && (x.subsamples = l.entries[A].subsamples, U += l.entries[A].sample_delta), (u.length > 0 || c.length > 0) && g.setSampleGroupProperties(e, x, t, e.sample_groups_info)
                }
                t > 0 && (e.samples[t - 1].duration = Math.max(e.mdia.mdhd.duration - e.samples[t - 1].dts, 0), e.samples_duration += e.samples[t - 1].duration)
            }
        }, g.prototype.updateSampleLists = function () {
            var e, t, r, i, s, n, a, o, d, l, u, c, f, p, m;
            if (void 0 !== this.moov)
                for (; this.lastMoofIndex < this.moofs.length;)
                    if (d = this.moofs[this.lastMoofIndex], this.lastMoofIndex++, "moof" == d.type)
                        for (l = d, e = 0; e < l.trafs.length; e++) {
                            for (u = l.trafs[e], c = this.getTrackById(u.tfhd.track_id), f = this.getTrexById(u.tfhd.track_id), i = u.tfhd.flags & h.TFHD_FLAG_SAMPLE_DESC ? u.tfhd.default_sample_description_index : f ? f.default_sample_description_index : 1, s = u.tfhd.flags & h.TFHD_FLAG_SAMPLE_DUR ? u.tfhd.default_sample_duration : f ? f.default_sample_duration : 0, n = u.tfhd.flags & h.TFHD_FLAG_SAMPLE_SIZE ? u.tfhd.default_sample_size : f ? f.default_sample_size : 0, a = u.tfhd.flags & h.TFHD_FLAG_SAMPLE_FLAGS ? u.tfhd.default_sample_flags : f ? f.default_sample_flags : 0, u.sample_number = 0, u.sbgps.length > 0 && g.initSampleGroups(c, u, u.sbgps, c.mdia.minf.stbl.sgpds, u.sgpds), t = 0; t < u.truns.length; t++) {
                                var _ = u.truns[t];
                                for (r = 0; r < _.sample_count; r++)
                                    if ((p = {}).moof_number = this.lastMoofIndex, p.number_in_traf = u.sample_number, u.sample_number++, c.samples) {
                                        p.number = c.samples.length, u.first_sample_index = c.samples.length, c.samples.push(p), p.track_id = c.tkhd.track_id, p.timescale = c.mdia.mdhd.timescale, p.description_index = i - 1, p.description = c.mdia.minf.stbl.stsd.entries[p.description_index], p.size = n, _.flags & h.TRUN_FLAGS_SIZE && (p.size = _.sample_size[r]), c.samples_size += p.size, p.duration = s, _.flags & h.TRUN_FLAGS_DURATION && (p.duration = _.sample_duration[r]), c.samples_duration += p.duration, c.first_traf_merged || r > 0 ? p.dts = c.samples[c.samples.length - 2].dts + c.samples[c.samples.length - 2].duration : (u.tfdt ? p.dts = u.tfdt.baseMediaDecodeTime : p.dts = 0, c.first_traf_merged = !0), p.cts = p.dts, _.flags & h.TRUN_FLAGS_CTS_OFFSET && (p.cts = p.dts + _.sample_composition_time_offset[r]), m = a, _.flags & h.TRUN_FLAGS_FLAGS ? m = _.sample_flags[r] : 0 === r && _.flags & h.TRUN_FLAGS_FIRST_FLAG && (m = _.first_sample_flags), p.is_sync = !(m >> 16 & 1), p.is_leading = m >> 26 & 3, p.depends_on = m >> 24 & 3, p.is_depended_on = m >> 22 & 3, p.has_redundancy = m >> 20 & 3, p.degradation_priority = 65535 & m;
                                        var y = !!(u.tfhd.flags & h.TFHD_FLAG_BASE_DATA_OFFSET),
                                            b = !!(u.tfhd.flags & h.TFHD_FLAG_DEFAULT_BASE_IS_MOOF),
                                            v = !!(_.flags & h.TRUN_FLAGS_DATA_OFFSET),
                                            w = 0;
                                        w = y ? u.tfhd.base_data_offset : b || 0 === t ? l.start : o, p.offset = 0 === t && 0 === r ? v ? w + _.data_offset : w : o, o = p.offset + p.size, (u.sbgps.length > 0 || u.sgpds.length > 0 || c.mdia.minf.stbl.sbgps.length > 0 || c.mdia.minf.stbl.sgpds.length > 0) && g.setSampleGroupProperties(c, p, p.number_in_traf, u.sample_groups_info)
                                    }
                            }
                            if (u.subs) {
                                c.has_fragment_subsamples = !0;
                                var S = u.first_sample_index;
                                for (t = 0; t < u.subs.entries.length; t++) S += u.subs.entries[t].sample_delta, (p = c.samples[S - 1]).subsamples = u.subs.entries[t].subsamples
                            }
                        }
        }, g.prototype.getSample = function (e, t) {
            var r, i = e.samples[t];
            if (!this.moov) return null;
            if (i.data) {
                if (i.alreadyRead == i.size) return i
            } else i.data = new Uint8Array(i.size), i.alreadyRead = 0, this.samplesDataSize += i.size, a.debug("ISOFile", "Allocating sample #" + t + " on track #" + e.tkhd.track_id + " of size " + i.size + " (total: " + this.samplesDataSize + ")");
            for (;;) {
                var s = this.stream.findPosition(!0, i.offset + i.alreadyRead, !1);
                if (!(s > -1)) return null;
                var n = (r = this.stream.buffers[s]).byteLength - (i.offset + i.alreadyRead - r.fileStart);
                if (i.size - i.alreadyRead <= n) return a.debug("ISOFile", "Getting sample #" + t + " data (alreadyRead: " + i.alreadyRead + " offset: " + (i.offset + i.alreadyRead - r.fileStart) + " read size: " + (i.size - i.alreadyRead) + " full size: " + i.size + ")"), d.memcpy(i.data.buffer, i.alreadyRead, r, i.offset + i.alreadyRead - r.fileStart, i.size - i.alreadyRead), r.usedBytes += i.size - i.alreadyRead, this.stream.logBufferLevel(), i.alreadyRead = i.size, i;
                if (0 === n) return null;
                a.debug("ISOFile", "Getting sample #" + t + " partial data (alreadyRead: " + i.alreadyRead + " offset: " + (i.offset + i.alreadyRead - r.fileStart) + " read size: " + n + " full size: " + i.size + ")"), d.memcpy(i.data.buffer, i.alreadyRead, r, i.offset + i.alreadyRead - r.fileStart, n), i.alreadyRead += n, r.usedBytes += n, this.stream.logBufferLevel()
            }
        }, g.prototype.releaseSample = function (e, t) {
            var r = e.samples[t];
            return r.data ? (this.samplesDataSize -= r.size, r.data = null, r.alreadyRead = 0, r.size) : 0
        }, g.prototype.getAllocatedSampleDataSize = function () {
            return this.samplesDataSize
        }, g.prototype.getCodecs = function () {
            var e, t = "";
            for (e = 0; e < this.moov.traks.length; e++) {
                e > 0 && (t += ","), t += this.moov.traks[e].mdia.minf.stbl.stsd.entries[0].getCodec()
            }
            return t
        }, g.prototype.getTrexById = function (e) {
            var t;
            if (!this.moov || !this.moov.mvex) return null;
            for (t = 0; t < this.moov.mvex.trexs.length; t++) {
                var r = this.moov.mvex.trexs[t];
                if (r.track_id == e) return r
            }
            return null
        }, g.prototype.getTrackById = function (e) {
            if (void 0 === this.moov) return null;
            for (var t = 0; t < this.moov.traks.length; t++) {
                var r = this.moov.traks[t];
                if (r.tkhd.track_id == e) return r
            }
            return null
        }, g.prototype.items = [], g.prototype.entity_groups = [], g.prototype.itemsDataSize = 0, g.prototype.flattenItemInfo = function () {
            var e, t, r, i = this.items,
                s = this.entity_groups,
                n = this.meta;
            if (null != n && void 0 !== n.hdlr && void 0 !== n.iinf) {
                for (e = 0; e < n.iinf.item_infos.length; e++)(r = {}).id = n.iinf.item_infos[e].item_ID, i[r.id] = r, r.ref_to = [], r.name = n.iinf.item_infos[e].item_name, n.iinf.item_infos[e].protection_index > 0 && (r.protection = n.ipro.protections[n.iinf.item_infos[e].protection_index - 1]), n.iinf.item_infos[e].item_type ? r.type = n.iinf.item_infos[e].item_type : r.type = "mime", r.content_type = n.iinf.item_infos[e].content_type, r.content_encoding = n.iinf.item_infos[e].content_encoding;
                if (n.grpl)
                    for (e = 0; e < n.grpl.boxes.length; e++) entity_group = {}, entity_group.id = n.grpl.boxes[e].group_id, entity_group.entity_ids = n.grpl.boxes[e].entity_ids, entity_group.type = n.grpl.boxes[e].type, s[entity_group.id] = entity_group;
                if (n.iloc)
                    for (e = 0; e < n.iloc.items.length; e++) {
                        var o = n.iloc.items[e];
                        switch (r = i[o.item_ID], 0 !== o.data_reference_index && (a.warn("Item storage with reference to other files: not supported"), r.source = n.dinf.boxes[o.data_reference_index - 1]), o.construction_method) {
                            case 0:
                                break;
                            case 1:
                            case 2:
                                a.warn("Item storage with construction_method : not supported")
                        }
                        for (r.extents = [], r.size = 0, t = 0; t < o.extents.length; t++) r.extents[t] = {}, r.extents[t].offset = o.extents[t].extent_offset + o.base_offset, r.extents[t].length = o.extents[t].extent_length, r.extents[t].alreadyRead = 0, r.size += r.extents[t].length
                    }
                if (n.pitm && (i[n.pitm.item_id].primary = !0), n.iref)
                    for (e = 0; e < n.iref.references.length; e++) {
                        var d = n.iref.references[e];
                        for (t = 0; t < d.references.length; t++) i[d.from_item_ID].ref_to.push({
                            type: d.type,
                            id: d.references[t]
                        })
                    }
                if (n.iprp)
                    for (var l = 0; l < n.iprp.ipmas.length; l++) {
                        var u = n.iprp.ipmas[l];
                        for (e = 0; e < u.associations.length; e++) {
                            var c = u.associations[e];
                            if ((r = i[c.id]) || (r = s[c.id]), r)
                                for (void 0 === r.properties && (r.properties = {}, r.properties.boxes = []), t = 0; t < c.props.length; t++) {
                                    var h = c.props[t];
                                    if (h.property_index > 0 && h.property_index - 1 < n.iprp.ipco.boxes.length) {
                                        var f = n.iprp.ipco.boxes[h.property_index - 1];
                                        r.properties[f.type] = f, r.properties.boxes.push(f)
                                    }
                                }
                        }
                    }
            }
        }, g.prototype.getItem = function (e) {
            var t, r;
            if (!this.meta) return null;
            if (!(r = this.items[e]).data && r.size) r.data = new Uint8Array(r.size), r.alreadyRead = 0, this.itemsDataSize += r.size, a.debug("ISOFile", "Allocating item #" + e + " of size " + r.size + " (total: " + this.itemsDataSize + ")");
            else if (r.alreadyRead === r.size) return r;
            for (var i = 0; i < r.extents.length; i++) {
                var s = r.extents[i];
                if (s.alreadyRead !== s.length) {
                    var n = this.stream.findPosition(!0, s.offset + s.alreadyRead, !1);
                    if (!(n > -1)) return null;
                    var o = (t = this.stream.buffers[n]).byteLength - (s.offset + s.alreadyRead - t.fileStart);
                    if (!(s.length - s.alreadyRead <= o)) return a.debug("ISOFile", "Getting item #" + e + " extent #" + i + " partial data (alreadyRead: " + s.alreadyRead + " offset: " + (s.offset + s.alreadyRead - t.fileStart) + " read size: " + o + " full extent size: " + s.length + " full item size: " + r.size + ")"), d.memcpy(r.data.buffer, r.alreadyRead, t, s.offset + s.alreadyRead - t.fileStart, o), s.alreadyRead += o, r.alreadyRead += o, t.usedBytes += o, this.stream.logBufferLevel(), null;
                    a.debug("ISOFile", "Getting item #" + e + " extent #" + i + " data (alreadyRead: " + s.alreadyRead + " offset: " + (s.offset + s.alreadyRead - t.fileStart) + " read size: " + (s.length - s.alreadyRead) + " full extent size: " + s.length + " full item size: " + r.size + ")"), d.memcpy(r.data.buffer, r.alreadyRead, t, s.offset + s.alreadyRead - t.fileStart, s.length - s.alreadyRead), t.usedBytes += s.length - s.alreadyRead, this.stream.logBufferLevel(), r.alreadyRead += s.length - s.alreadyRead, s.alreadyRead = s.length
                }
            }
            return r.alreadyRead === r.size ? r : null
        }, g.prototype.releaseItem = function (e) {
            var t = this.items[e];
            if (t.data) {
                this.itemsDataSize -= t.size, t.data = null, t.alreadyRead = 0;
                for (var r = 0; r < t.extents.length; r++) {
                    t.extents[r].alreadyRead = 0
                }
                return t.size
            }
            return 0
        }, g.prototype.processItems = function (e) {
            for (var t in this.items) {
                var r = this.items[t];
                this.getItem(r.id), e && !r.sent && (e(r), r.sent = !0, r.data = null)
            }
        }, g.prototype.hasItem = function (e) {
            for (var t in this.items) {
                var r = this.items[t];
                if (r.name === e) return r.id
            }
            return -1
        }, g.prototype.getMetaHandler = function () {
            return this.meta ? this.meta.hdlr.handler : null
        }, g.prototype.getPrimaryItem = function () {
            return this.meta && this.meta.pitm ? this.getItem(this.meta.pitm.item_id) : null
        }, g.prototype.itemToFragmentedTrackFile = function (e) {
            var t = e || {},
                r = null;
            if (null == (r = t.itemId ? this.getItem(t.itemId) : this.getPrimaryItem())) return null;
            var i = new g;
            i.discardMdatData = !1;
            var s = {
                type: r.type,
                description_boxes: r.properties.boxes
            };
            r.properties.ispe && (s.width = r.properties.ispe.image_width, s.height = r.properties.ispe.image_height);
            var n = i.addTrack(s);
            return n ? (i.addSample(n, r.data), i) : null
        }, g.prototype.write = function (e) {
            for (var t = 0; t < this.boxes.length; t++) this.boxes[t].write(e)
        }, g.prototype.createFragment = function (e, t, r) {
            var i = this.getTrackById(e),
                s = this.getSample(i, t);
            if (null == s) return this.setNextSeekPositionFromSample(i.samples[t]), null;
            var n = r || new d;
            n.endianness = d.BIG_ENDIAN;
            var o = this.createSingleSampleMoof(s);
            o.write(n), o.trafs[0].truns[0].data_offset = o.size + 8, a.debug("MP4Box", "Adjusting data_offset with new value " + o.trafs[0].truns[0].data_offset), n.adjustUint32(o.trafs[0].truns[0].data_offset_position, o.trafs[0].truns[0].data_offset);
            var l = new h.mdatBox;
            return l.data = s.data, l.write(n), n
        }, g.writeInitializationSegment = function (e, t, r, i) {
            var s;
            a.debug("ISOFile", "Generating initialization segment");
            var n = new d;
            n.endianness = d.BIG_ENDIAN, e.write(n);
            var o = t.add("mvex");
            for (r && o.add("mehd").set("fragment_duration", r), s = 0; s < t.traks.length; s++) o.add("trex").set("track_id", t.traks[s].tkhd.track_id).set("default_sample_description_index", 1).set("default_sample_duration", i).set("default_sample_size", 0).set("default_sample_flags", 65536);
            return t.write(n), n.buffer
        }, g.prototype.save = function (e) {
            var t = new d;
            t.endianness = d.BIG_ENDIAN, this.write(t), t.save(e)
        }, g.prototype.getBuffer = function () {
            var e = new d;
            return e.endianness = d.BIG_ENDIAN, this.write(e), e.buffer
        }, g.prototype.initializeSegmentation = function () {
            var e, t, r, i;
            for (null === this.onSegment && a.warn("MP4Box", "No segmentation callback set!"), this.isFragmentationInitialized || (this.isFragmentationInitialized = !0, this.nextMoofNumber = 0, this.resetTables()), t = [], e = 0; e < this.fragmentedTracks.length; e++) {
                var s = new h.moovBox;
                s.mvhd = this.moov.mvhd, s.boxes.push(s.mvhd), r = this.getTrackById(this.fragmentedTracks[e].id), s.boxes.push(r), s.traks.push(r), (i = {}).id = r.tkhd.track_id, i.user = this.fragmentedTracks[e].user, i.buffer = g.writeInitializationSegment(this.ftyp, s, this.moov.mvex && this.moov.mvex.mehd ? this.moov.mvex.mehd.fragment_duration : void 0, this.moov.traks[e].samples.length > 0 ? this.moov.traks[e].samples[0].duration : 0), t.push(i)
            }
            return t
        }, h.Box.prototype.printHeader = function (e) {
            this.size += 8, this.size > l && (this.size += 8), "uuid" === this.type && (this.size += 16), e.log(e.indent + "size:" + this.size), e.log(e.indent + "type:" + this.type)
        }, h.FullBox.prototype.printHeader = function (e) {
            this.size += 4, h.Box.prototype.printHeader.call(this, e), e.log(e.indent + "version:" + this.version), e.log(e.indent + "flags:" + this.flags)
        }, h.Box.prototype.print = function (e) {
            this.printHeader(e)
        }, h.ContainerBox.prototype.print = function (e) {
            this.printHeader(e);
            for (var t = 0; t < this.boxes.length; t++)
                if (this.boxes[t]) {
                    var r = e.indent;
                    e.indent += " ", this.boxes[t].print(e), e.indent = r
                }
        }, g.prototype.print = function (e) {
            e.indent = "";
            for (var t = 0; t < this.boxes.length; t++) this.boxes[t] && this.boxes[t].print(e)
        }, h.mvhdBox.prototype.print = function (e) {
            h.FullBox.prototype.printHeader.call(this, e), e.log(e.indent + "creation_time: " + this.creation_time), e.log(e.indent + "modification_time: " + this.modification_time), e.log(e.indent + "timescale: " + this.timescale), e.log(e.indent + "duration: " + this.duration), e.log(e.indent + "rate: " + this.rate), e.log(e.indent + "volume: " + (this.volume >> 8)), e.log(e.indent + "matrix: " + this.matrix.join(", ")), e.log(e.indent + "next_track_id: " + this.next_track_id)
        }, h.tkhdBox.prototype.print = function (e) {
            h.FullBox.prototype.printHeader.call(this, e), e.log(e.indent + "creation_time: " + this.creation_time), e.log(e.indent + "modification_time: " + this.modification_time), e.log(e.indent + "track_id: " + this.track_id), e.log(e.indent + "duration: " + this.duration), e.log(e.indent + "volume: " + (this.volume >> 8)), e.log(e.indent + "matrix: " + this.matrix.join(", ")), e.log(e.indent + "layer: " + this.layer), e.log(e.indent + "alternate_group: " + this.alternate_group), e.log(e.indent + "width: " + this.width), e.log(e.indent + "height: " + this.height)
        };
        var y = {
            createFile: function (e, t) {
                var r = void 0 === e || e,
                    i = new g(t);
                return i.discardMdatData = !r, i
            }
        };
        t.createFile = y.createFile
    }));

    function Nr(e) {
        return e.reduce(((e, t) => 256 * e + t))
    }

    function Or(e) {
        const t = [101, 103, 119, 99],
            r = e.length - 28,
            i = e.slice(r, r + t.length);
        return t.every(((e, t) => e === i[t]))
    }
    zr.Log, zr.MP4BoxStream, zr.DataStream, zr.MultiBufferStream, zr.MPEG4DescriptorParser, zr.BoxParser, zr.XMLSubtitlein4Parser, zr.Textin4Parser, zr.ISOFile, zr.createFile;
    class Gr {
        constructor() {
            this.s = null, this.a = null, this.l = 0, this.c = 0, this.u = 1 / 0, this.A = !1, this.d = !1, this.r = 4194304, this.n = new Uint8Array([30, 158, 90, 33, 244, 57, 83, 165, 2, 70, 35, 87, 215, 231, 226, 108]), this.t = this.n.slice().reverse()
        }
        destroy() {
            this.s = null, this.a = null, this.l = 0, this.c = 0, this.u = 1 / 0, this.A = !1, this.d = !1, this.r = 4194304, this.n = null, this.t = null
        }
        transport(e) {
            if (!this.s && this.l > 50) return e;
            if (this.l++, this.d) return e;
            const t = new Uint8Array(e);
            if (this.A) {
                if (!(this.c < this.u)) return this.a && this.s ? (this.a.set(t, this.r), this.s.parse(null, this.r, t.byteLength), this.a.slice(this.r, this.r + t.byteLength)) : (console.error("video_error_2"), this.d = !0, e);
                Or(t) && this.c++
            } else {
                const r = function (e, t) {
                    const r = function (e, t) {
                        for (let r = 0; r < e.byteLength - t.length; r++)
                            for (let i = 0; i < t.length && e[r + i] === t[i]; i++)
                                if (i === t.length - 1) return r;
                        return null
                    }(e, t);
                    if (r) {
                        const t = Nr(e.slice(r + 16, r + 16 + 8));
                        return [t, Nr(e.slice(r + 24, r + 24 + 8)), function (e) {
                            return e.map((e => ~e))
                        }(e.slice(r + 32, r + 32 + t))]
                    }
                    return null
                }(t, this.t);
                if (!r) return e;
                const i = function (e) {
                    try {
                        if ("object" != typeof WebAssembly || "function" != typeof WebAssembly.instantiate) throw null; {
                            const e = new WebAssembly.Module(Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0));
                            if (!(e instanceof WebAssembly.Module && new WebAssembly.Instance(e) instanceof WebAssembly.Instance)) throw null
                        }
                    } catch (e) {
                        return new Error("video_error_4")
                    }
                    let t;
                    try {
                        t = {
                            env: {
                                __handle_stack_overflow: () => e(new Error("video_error_1")),
                                memory: new WebAssembly.Memory({
                                    initial: 256,
                                    maximum: 256
                                })
                            }
                        }
                    } catch (e) {
                        return new Error("video_error_5")
                    }
                    return t
                }(e);
                if (i instanceof Error) return console.error(i.message), this.d = !0, e;
                this.A = !0, this.u = r[1], Or(t) && this.c++, WebAssembly.instantiate(r[2], i).then((e => {
                    if ("function" != typeof (t = e.instance.exports).parse || "object" != typeof t.memory) return this.d = !0, void console.error("video_error_3");
                    var t;
                    this.s = e.instance.exports, this.a = new Uint8Array(this.s.memory.buffer)
                })).catch((e => {
                    this.d = !0, console.error("video_error_6")
                }))
            }
            return e
        }
    }
    const $r = 0,
        Hr = 32,
        Vr = 16,
        Wr = [214, 144, 233, 254, 204, 225, 61, 183, 22, 182, 20, 194, 40, 251, 44, 5, 43, 103, 154, 118, 42, 190, 4, 195, 170, 68, 19, 38, 73, 134, 6, 153, 156, 66, 80, 244, 145, 239, 152, 122, 51, 84, 11, 67, 237, 207, 172, 98, 228, 179, 28, 169, 201, 8, 232, 149, 128, 223, 148, 250, 117, 143, 63, 166, 71, 7, 167, 252, 243, 115, 23, 186, 131, 89, 60, 25, 230, 133, 79, 168, 104, 107, 129, 178, 113, 100, 218, 139, 248, 235, 15, 75, 112, 86, 157, 53, 30, 36, 14, 94, 99, 88, 209, 162, 37, 34, 124, 59, 1, 33, 120, 135, 212, 0, 70, 87, 159, 211, 39, 82, 76, 54, 2, 231, 160, 196, 200, 158, 234, 191, 138, 210, 64, 199, 56, 181, 163, 247, 242, 206, 249, 97, 21, 161, 224, 174, 93, 164, 155, 52, 26, 85, 173, 147, 50, 48, 245, 140, 177, 227, 29, 246, 226, 46, 130, 102, 202, 96, 192, 41, 35, 171, 13, 83, 78, 111, 213, 219, 55, 69, 222, 253, 142, 47, 3, 255, 106, 114, 109, 108, 91, 81, 141, 27, 175, 146, 187, 221, 188, 127, 17, 217, 92, 65, 31, 16, 90, 216, 10, 193, 49, 136, 165, 205, 123, 189, 45, 116, 208, 18, 184, 229, 180, 176, 137, 105, 151, 74, 12, 150, 119, 126, 101, 185, 241, 9, 197, 110, 198, 132, 24, 240, 125, 236, 58, 220, 77, 32, 121, 238, 95, 62, 215, 203, 57, 72],
        jr = [462357, 472066609, 943670861, 1415275113, 1886879365, 2358483617, 2830087869, 3301692121, 3773296373, 4228057617, 404694573, 876298825, 1347903077, 1819507329, 2291111581, 2762715833, 3234320085, 3705924337, 4177462797, 337322537, 808926789, 1280531041, 1752135293, 2223739545, 2695343797, 3166948049, 3638552301, 4110090761, 269950501, 741554753, 1213159005, 1684763257];

    function qr(e) {
        const t = [];
        for (let r = 0, i = e.length; r < i; r += 2) t.push(parseInt(e.substr(r, 2), 16));
        return t
    }

    function Yr(e, t) {
        const r = 31 & t;
        return e << r | e >>> 32 - r
    }

    function Kr(e) {
        return (255 & Wr[e >>> 24 & 255]) << 24 | (255 & Wr[e >>> 16 & 255]) << 16 | (255 & Wr[e >>> 8 & 255]) << 8 | 255 & Wr[255 & e]
    }

    function Xr(e) {
        return e ^ Yr(e, 2) ^ Yr(e, 10) ^ Yr(e, 18) ^ Yr(e, 24)
    }

    function Zr(e) {
        return e ^ Yr(e, 13) ^ Yr(e, 23)
    }

    function Jr(e, t, r) {
        const i = new Array(4),
            s = new Array(4);
        for (let t = 0; t < 4; t++) s[0] = 255 & e[4 * t], s[1] = 255 & e[4 * t + 1], s[2] = 255 & e[4 * t + 2], s[3] = 255 & e[4 * t + 3], i[t] = s[0] << 24 | s[1] << 16 | s[2] << 8 | s[3];
        for (let e, t = 0; t < 32; t += 4) e = i[1] ^ i[2] ^ i[3] ^ r[t + 0], i[0] ^= Xr(Kr(e)), e = i[2] ^ i[3] ^ i[0] ^ r[t + 1], i[1] ^= Xr(Kr(e)), e = i[3] ^ i[0] ^ i[1] ^ r[t + 2], i[2] ^= Xr(Kr(e)), e = i[0] ^ i[1] ^ i[2] ^ r[t + 3], i[3] ^= Xr(Kr(e));
        for (let e = 0; e < 16; e += 4) t[e] = i[3 - e / 4] >>> 24 & 255, t[e + 1] = i[3 - e / 4] >>> 16 & 255, t[e + 2] = i[3 - e / 4] >>> 8 & 255, t[e + 3] = 255 & i[3 - e / 4]
    }

    function Qr(e, t, r) {
        let {
            padding: i = "pkcs#7",
            mode: s,
            iv: n = [],
            output: a = "string"
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if ("cbc" === s && ("string" == typeof n && (n = qr(n)), 16 !== n.length)) throw new Error("iv is invalid");
        if ("string" == typeof t && (t = qr(t)), 16 !== t.length) throw new Error("key is invalid");
        if (e = "string" == typeof e ? r !== $r ? function (e) {
                const t = [];
                for (let r = 0, i = e.length; r < i; r++) {
                    const i = e.codePointAt(r);
                    if (i <= 127) t.push(i);
                    else if (i <= 2047) t.push(192 | i >>> 6), t.push(128 | 63 & i);
                    else if (i <= 55295 || i >= 57344 && i <= 65535) t.push(224 | i >>> 12), t.push(128 | i >>> 6 & 63), t.push(128 | 63 & i);
                    else {
                        if (!(i >= 65536 && i <= 1114111)) throw t.push(i), new Error("input is not supported");
                        r++, t.push(240 | i >>> 18 & 28), t.push(128 | i >>> 12 & 63), t.push(128 | i >>> 6 & 63), t.push(128 | 63 & i)
                    }
                }
                return t
            }(e) : qr(e) : [...e], ("pkcs#5" === i || "pkcs#7" === i) && r !== $r) {
            const t = Vr - e.length % Vr;
            for (let r = 0; r < t; r++) e.push(t)
        }
        const o = new Array(Hr);
        ! function (e, t, r) {
            const i = new Array(4),
                s = new Array(4);
            for (let t = 0; t < 4; t++) s[0] = 255 & e[0 + 4 * t], s[1] = 255 & e[1 + 4 * t], s[2] = 255 & e[2 + 4 * t], s[3] = 255 & e[3 + 4 * t], i[t] = s[0] << 24 | s[1] << 16 | s[2] << 8 | s[3];
            i[0] ^= 2746333894, i[1] ^= 1453994832, i[2] ^= 1736282519, i[3] ^= 2993693404;
            for (let e, r = 0; r < 32; r += 4) e = i[1] ^ i[2] ^ i[3] ^ jr[r + 0], t[r + 0] = i[0] ^= Zr(Kr(e)), e = i[2] ^ i[3] ^ i[0] ^ jr[r + 1], t[r + 1] = i[1] ^= Zr(Kr(e)), e = i[3] ^ i[0] ^ i[1] ^ jr[r + 2], t[r + 2] = i[2] ^= Zr(Kr(e)), e = i[0] ^ i[1] ^ i[2] ^ jr[r + 3], t[r + 3] = i[3] ^= Zr(Kr(e));
            if (r === $r)
                for (let e, r = 0; r < 16; r++) e = t[r], t[r] = t[31 - r], t[31 - r] = e
        }(t, o, r);
        const d = [];
        let l = n,
            u = e.length,
            c = 0;
        for (; u >= Vr;) {
            const t = e.slice(c, c + 16),
                i = new Array(16);
            if ("cbc" === s)
                for (let e = 0; e < Vr; e++) r !== $r && (t[e] ^= l[e]);
            Jr(t, i, o);
            for (let e = 0; e < Vr; e++) "cbc" === s && r === $r && (i[e] ^= l[e]), d[c + e] = i[e];
            "cbc" === s && (l = r !== $r ? i : t), u -= Vr, c += Vr
        }
        if (("pkcs#5" === i || "pkcs#7" === i) && r === $r) {
            const e = d.length,
                t = d[e - 1];
            for (let r = 1; r <= t; r++)
                if (d[e - r] !== t) throw new Error("padding is invalid");
            d.splice(e - t, t)
        }
        return "array" !== a ? r !== $r ? d.map((e => 1 === (e = e.toString(16)).length ? "0" + e : e)).join("") : function (e) {
            const t = [];
            for (let r = 0, i = e.length; r < i; r++) e[r] >= 240 && e[r] <= 247 ? (t.push(String.fromCodePoint(((7 & e[r]) << 18) + ((63 & e[r + 1]) << 12) + ((63 & e[r + 2]) << 6) + (63 & e[r + 3]))), r += 3) : e[r] >= 224 && e[r] <= 239 ? (t.push(String.fromCodePoint(((15 & e[r]) << 12) + ((63 & e[r + 1]) << 6) + (63 & e[r + 2]))), r += 2) : e[r] >= 192 && e[r] <= 223 ? (t.push(String.fromCodePoint(((31 & e[r]) << 6) + (63 & e[r + 1]))), r++) : t.push(String.fromCodePoint(e[r]));
            return t.join("")
        }(d) : d
    }
    class ei {
        on(e, t, r) {
            const i = this.e || (this.e = {});
            return (i[e] || (i[e] = [])).push({
                fn: t,
                ctx: r
            }), this
        }
        once(e, t, r) {
            const i = this;

            function s() {
                i.off(e, s);
                for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
                t.apply(r, a)
            }
            return s._ = t, this.on(e, s, r)
        }
        emit(e) {
            const t = ((this.e || (this.e = {}))[e] || []).slice();
            for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) i[s - 1] = arguments[s];
            for (let e = 0; e < t.length; e += 1) t[e].fn.apply(t[e].ctx, i);
            return this
        }
        off(e, t) {
            const r = this.e || (this.e = {});
            if (!e) return Object.keys(r).forEach((e => {
                delete r[e]
            })), void delete this.e;
            const i = r[e],
                s = [];
            if (i && t)
                for (let e = 0, r = i.length; e < r; e += 1) i[e].fn !== t && i[e].fn._ !== t && s.push(i[e]);
            return s.length ? r[e] = s : delete r[e], this
        }
    }
    const ti = {
        init: 0,
        findFirstStartCode: 1,
        findSecondStartCode: 2
    };
    class ri extends ei {
        constructor(e) {
            super(), this.player = e, this.isDestroyed = !1, this.reset()
        }
        destroy() {
            this.isDestroyed = !1, this.off(), this.reset()
        }
        reset() {
            this.stats = ti.init, this.tempBuffer = new Uint8Array(0), this.parsedOffset = 0, this.versionLayer = 0
        }
        dispatch(e, t) {
            let r = new Uint8Array(this.tempBuffer.length + e.length);
            for (r.set(this.tempBuffer, 0), r.set(e, this.tempBuffer.length), this.tempBuffer = r; !this.isDestroyed;) {
                if (this.state == ti.Init) {
                    let e = !1;
                    for (; this.tempBuffer.length - this.parsedOffset >= 2 && !this.isDestroyed;)
                        if (255 == this.tempBuffer[this.parsedOffset]) {
                            if (!(!1 & this.tempBuffer[this.parsedOffset + 1])) {
                                this.versionLayer = this.tempBuffer[this.parsedOffset + 1], this.state = ti.findFirstStartCode, this.fisrtStartCodeOffset = this.parsedOffset, this.parsedOffset += 2, e = !0;
                                break
                            }
                            this.parsedOffset++
                        } else this.parsedOffset++;
                    if (e) continue;
                    break
                }
                if (this.state == ti.findFirstStartCode) {
                    let e = !1;
                    for (; this.tempBuffer.length - this.parsedOffset >= 2 && !this.isDestroyed;)
                        if (255 == this.tempBuffer[this.parsedOffset]) {
                            if (this.tempBuffer[this.parsedOffset + 1] == this.versionLayer) {
                                this.state = ti.findSecondStartCode, this.secondStartCodeOffset = this.parsedOffset, this.parsedOffset += 2, e = !0;
                                break
                            }
                            this.parsedOffset++
                        } else this.parsedOffset++;
                    if (e) continue;
                    break
                }
                if (this.state == ti.findSecondStartCode) {
                    let e = this.tempBuffer.slice(this.fisrtStartCodeOffset, this.secondStartCodeOffset);
                    this.emit("data", e, t), this.tempBuffer = this.tempBuffer.slice(this.secondStartCodeOffset), this.fisrtStartCodeOffset = 0, this.parsedOffset = 2, this.state = ti.findFirstStartCode
                }
            }
        }
    }

    function ii(e, t, r) {
        for (let i = 2; i < e.length; ++i) {
            const s = i - 2,
                n = t[s % t.length],
                a = r[s % r.length];
            e[i] = e[i] ^ n ^ a
        }
        return e
    }
    class si {
        constructor(e) {
            this.destroys = [], this.proxy = this.proxy.bind(this), this.master = e
        }
        proxy(e, t, r) {
            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            if (!e) return;
            if (Array.isArray(t)) return t.map((t => this.proxy(e, t, r, i)));
            e.addEventListener(t, r, i);
            const s = () => {
                gt(e.removeEventListener) && e.removeEventListener(t, r, i)
            };
            return this.destroys.push(s), s
        }
        destroy() {
            this.master.debug && this.master.debug.log("Events", "destroy"), this.destroys.forEach((e => e())), this.destroys = []
        }
    }
    class ni {
        static init() {
            ni.types = {
                avc1: [],
                avcC: [],
                hvc1: [],
                hvcC: [],
                av01: [],
                av1C: [],
                btrt: [],
                dinf: [],
                dref: [],
                esds: [],
                ftyp: [],
                hdlr: [],
                mdat: [],
                mdhd: [],
                mdia: [],
                mfhd: [],
                minf: [],
                moof: [],
                moov: [],
                mp4a: [],
                mvex: [],
                mvhd: [],
                sdtp: [],
                stbl: [],
                stco: [],
                stsc: [],
                stsd: [],
                stsz: [],
                stts: [],
                tfdt: [],
                tfhd: [],
                traf: [],
                trak: [],
                trun: [],
                trex: [],
                tkhd: [],
                vmhd: [],
                smhd: [],
                ".mp3": [],
                Opus: [],
                dOps: [],
                "ac-3": [],
                dac3: [],
                "ec-3": [],
                dec3: []
            };
            for (let e in ni.types) ni.types.hasOwnProperty(e) && (ni.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
            let e = ni.constants = {};
            e.FTYP = new Uint8Array([105, 115, 111, 109, 0, 0, 0, 1, 105, 115, 111, 109, 97, 118, 99, 49]), e.STSD_PREFIX = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), e.STTS = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), e.STSC = e.STCO = e.STTS, e.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), e.HDLR_VIDEO = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), e.HDLR_AUDIO = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]), e.DREF = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), e.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), e.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])
        }
        static box(e) {
            let t = 8,
                r = null,
                i = Array.prototype.slice.call(arguments, 1),
                s = i.length;
            for (let e = 0; e < s; e++) t += i[e].byteLength;
            r = new Uint8Array(t), r[0] = t >>> 24 & 255, r[1] = t >>> 16 & 255, r[2] = t >>> 8 & 255, r[3] = 255 & t, r.set(e, 4);
            let n = 8;
            for (let e = 0; e < s; e++) r.set(i[e], n), n += i[e].byteLength;
            return r
        }
        static generateInitSegment(e) {
            let t = ni.box(ni.types.ftyp, ni.constants.FTYP),
                r = ni.moov(e),
                i = new Uint8Array(t.byteLength + r.byteLength);
            return i.set(t, 0), i.set(r, t.byteLength), i
        }
        static moov(e) {
            let t = ni.mvhd(e.timescale, e.duration),
                r = ni.trak(e),
                i = ni.mvex(e);
            return ni.box(ni.types.moov, t, r, i)
        }
        static mvhd(e, t) {
            return ni.box(ni.types.mvhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]))
        }
        static trak(e) {
            return ni.box(ni.types.trak, ni.tkhd(e), ni.mdia(e))
        }
        static tkhd(e) {
            let t = e.id,
                r = e.duration,
                i = e.presentWidth,
                s = e.presentHeight;
            return ni.box(ni.types.tkhd, new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, 0, 0, 0, 0, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, i >>> 8 & 255, 255 & i, 0, 0, s >>> 8 & 255, 255 & s, 0, 0]))
        }
        static mdia(e) {
            return ni.box(ni.types.mdia, ni.mdhd(e), ni.hdlr(e), ni.minf(e))
        }
        static mdhd(e) {
            let t = e.timescale,
                r = e.duration;
            return ni.box(ni.types.mdhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r, 85, 196, 0, 0]))
        }
        static hdlr(e) {
            let t = null;
            return t = "audio" === e.type ? ni.constants.HDLR_AUDIO : ni.constants.HDLR_VIDEO, ni.box(ni.types.hdlr, t)
        }
        static minf(e) {
            let t = null;
            return t = "audio" === e.type ? ni.box(ni.types.smhd, ni.constants.SMHD) : ni.box(ni.types.vmhd, ni.constants.VMHD), ni.box(ni.types.minf, t, ni.dinf(), ni.stbl(e))
        }
        static dinf() {
            return ni.box(ni.types.dinf, ni.box(ni.types.dref, ni.constants.DREF))
        }
        static stbl(e) {
            return ni.box(ni.types.stbl, ni.stsd(e), ni.box(ni.types.stts, ni.constants.STTS), ni.box(ni.types.stsc, ni.constants.STSC), ni.box(ni.types.stsz, ni.constants.STSZ), ni.box(ni.types.stco, ni.constants.STCO))
        }
        static stsd(e) {
            return "audio" === e.type ? "mp3" === e.audioType ? ni.box(ni.types.stsd, ni.constants.STSD_PREFIX, ni.mp3(e)) : ni.box(ni.types.stsd, ni.constants.STSD_PREFIX, ni.mp4a(e)) : "avc" === e.videoType ? ni.box(ni.types.stsd, ni.constants.STSD_PREFIX, ni.avc1(e)) : ni.box(ni.types.stsd, ni.constants.STSD_PREFIX, ni.hvc1(e))
        }
        static mp3(e) {
            let t = e.channelCount,
                r = e.audioSampleRate,
                i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t, 0, 16, 0, 0, 0, 0, r >>> 8 & 255, 255 & r, 0, 0]);
            return ni.box(ni.types[".mp3"], i)
        }
        static mp4a(e) {
            let t = e.channelCount,
                r = e.audioSampleRate,
                i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t, 0, 16, 0, 0, 0, 0, r >>> 8 & 255, 255 & r, 0, 0]);
            return ni.box(ni.types.mp4a, i, ni.esds(e))
        }
        static esds(e) {
            let t = e.config || [],
                r = t.length,
                i = new Uint8Array([0, 0, 0, 0, 3, 23 + r, 0, 1, 0, 4, 15 + r, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([r]).concat(t).concat([6, 1, 2]));
            return ni.box(ni.types.esds, i)
        }
        static avc1(e) {
            let t = e.avcc;
            const r = e.codecWidth,
                i = e.codecHeight;
            let s = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, r >>> 8 & 255, 255 & r, i >>> 8 & 255, 255 & i, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 255, 255]);
            return ni.box(ni.types.avc1, s, ni.box(ni.types.avcC, t))
        }
        static hvc1(e) {
            let t = e.avcc;
            const r = e.codecWidth,
                i = e.codecHeight;
            let s = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, r >>> 8 & 255, 255 & r, i >>> 8 & 255, 255 & i, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 255, 255]);
            return ni.box(ni.types.hvc1, s, ni.box(ni.types.hvcC, t))
        }
        static mvex(e) {
            return ni.box(ni.types.mvex, ni.trex(e))
        }
        static trex(e) {
            let t = e.id,
                r = new Uint8Array([0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
            return ni.box(ni.types.trex, r)
        }
        static moof(e, t) {
            return ni.box(ni.types.moof, ni.mfhd(e.sequenceNumber), ni.traf(e, t))
        }
        static mfhd(e) {
            let t = new Uint8Array([0, 0, 0, 0, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e]);
            return ni.box(ni.types.mfhd, t)
        }
        static traf(e, t) {
            let r = e.id,
                i = ni.box(ni.types.tfhd, new Uint8Array([0, 0, 0, 0, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r])),
                s = ni.box(ni.types.tfdt, new Uint8Array([0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t])),
                n = ni.sdtp(e),
                a = ni.trun(e, n.byteLength + 16 + 16 + 8 + 16 + 8 + 8);
            return ni.box(ni.types.traf, i, s, a, n)
        }
        static sdtp(e) {
            let t = new Uint8Array(5),
                r = e.flags;
            return t[4] = r.isLeading << 6 | r.dependsOn << 4 | r.isDependedOn << 2 | r.hasRedundancy, ni.box(ni.types.sdtp, t)
        }
        static trun(e, t) {
            let r = new Uint8Array(28);
            t += 36, r.set([0, 0, 15, 1, 0, 0, 0, 1, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t], 0);
            let i = e.duration,
                s = e.size,
                n = e.flags,
                a = e.cts;
            return r.set([i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, n.isLeading << 2 | n.dependsOn, n.isDependedOn << 6 | n.hasRedundancy << 4 | n.isNonSync, 0, 0, a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a], 12), ni.box(ni.types.trun, r)
        }
        static mdat(e) {
            return ni.box(ni.types.mdat, e)
        }
    }
    ni.init();
    const ai = [44100, 48e3, 32e3, 0],
        oi = [22050, 24e3, 16e3, 0],
        di = [11025, 12e3, 8e3, 0],
        li = [0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, -1],
        ui = [0, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, -1],
        ci = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, -1];
    const hi = 3,
        fi = 4,
        pi = 6,
        mi = 15,
        _i = 17,
        gi = 129,
        yi = 135,
        bi = 21,
        vi = 134,
        wi = 27,
        Si = 36;
    class Ei {
        constructor() {
            this.slices = [], this.total_length = 0, this.expected_length = 0, this.random_access_indicator = 0
        }
    }
    class Ai {
        constructor() {
            this.pid = null, this.data = null, this.stream_type = null, this.random_access_indicator = null
        }
    }
    class Ui {
        constructor() {
            this.pid = null, this.stream_id = null, this.len = null, this.data = null, this.pts = null, this.nearest_pts = null, this.dts = null
        }
    }
    const xi = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
    class Bi {
        constructor() {
            this.mimeType = null, this.duration = null, this.hasAudio = null, this.hasVideo = null, this.audioCodec = null, this.videoCodec = null, this.audioDataRate = null, this.videoDataRate = null, this.audioSampleRate = null, this.audioChannelCount = null, this.width = null, this.height = null, this.fps = null, this.profile = null, this.level = null, this.refFrames = null, this.chromaFormat = null, this.sarNum = null, this.sarDen = null, this.metadata = null, this.segments = null, this.segmentCount = null, this.hasKeyframesIndex = null, this.keyframesIndex = null
        }
        isComplete() {
            let e = !1 === this.hasAudio || !0 === this.hasAudio && null != this.audioCodec && null != this.audioSampleRate && null != this.audioChannelCount,
                t = !1 === this.hasVideo || !0 === this.hasVideo && null != this.videoCodec && null != this.width && null != this.height && null != this.fps && null != this.profile && null != this.level && null != this.refFrames && null != this.chromaFormat && null != this.sarNum && null != this.sarDen;
            return null != this.mimeType && e && t
        }
        isSeekable() {
            return !0 === this.hasKeyframesIndex
        }
        getNearestKeyframe(e) {
            if (null == this.keyframesIndex) return null;
            let t = this.keyframesIndex,
                r = this._search(t.times, e);
            return {
                index: r,
                milliseconds: t.times[r],
                fileposition: t.filepositions[r]
            }
        }
        _search(e, t) {
            let r = 0,
                i = e.length - 1,
                s = 0,
                n = 0,
                a = i;
            for (t < e[0] && (r = 0, n = a + 1); n <= a;) {
                if (s = n + Math.floor((a - n) / 2), s === i || t >= e[s] && t < e[s + 1]) {
                    r = s;
                    break
                }
                e[s] < t ? n = s + 1 : a = s - 1
            }
            return r
        }
    }
    class Ti {
        constructor(e) {
            let t = null,
                r = e.audio_object_type,
                i = e.audio_object_type,
                s = e.sampling_freq_index,
                n = e.channel_config,
                a = 0,
                o = navigator.userAgent.toLowerCase(); - 1 !== o.indexOf("firefox") ? s >= 6 ? (i = 5, t = new Array(4), a = s - 3) : (i = 2, t = new Array(2), a = s) : -1 !== o.indexOf("android") ? (i = 2, t = new Array(2), a = s) : (i = 5, a = s, t = new Array(4), s >= 6 ? a = s - 3 : 1 === n && (i = 2, t = new Array(2), a = s)), t[0] = i << 3, t[0] |= (15 & s) >>> 1, t[1] = (15 & s) << 7, t[1] |= (15 & n) << 3, 5 === i && (t[1] |= (15 & a) >>> 1, t[2] = (1 & a) << 7, t[2] |= 8, t[3] = 0), this.config = t, this.sampling_rate = xi[s], this.sampling_index = s, this.channel_count = n, this.object_type = i, this.original_object_type = r, this.codec_mimetype = "mp4a.40." + i, this.original_codec_mimetype = "mp4a.40." + r
        }
    }

    function ki() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = [],
            i = [],
            s = {},
            n = new AbortController,
            a = null,
            o = null,
            d = null,
            l = null,
            b = null,
            Ne = null,
            $e = !1,
            Qe = !1,
            et = !!St(t),
            st = !1,
            nt = null,
            pt = null,
            At = null,
            Ut = [],
            xt = null,
            Bt = null,
            Tt = 0,
            kt = 0,
            It = null,
            Ht = null,
            Vt = 0,
            Wt = 0,
            jt = !1,
            qt = !1,
            Zt = !1,
            nr = null,
            ar = null,
            or = null,
            dr = !1,
            lr = () => {
                const e = vt();
                return {
                    debug: e.debug,
                    debugLevel: e.debugLevel,
                    debugUuid: e.debugUuid,
                    useOffscreen: e.useOffscreen,
                    useWCS: e.useWCS,
                    useMSE: e.useMSE,
                    videoBuffer: e.videoBuffer,
                    videoBufferDelay: e.videoBufferDelay,
                    openWebglAlignment: e.openWebglAlignment,
                    playType: e.playType,
                    hasAudio: e.hasAudio,
                    hasVideo: e.hasVideo,
                    playbackRate: 1,
                    playbackForwardMaxRateDecodeIFrame: e.playbackForwardMaxRateDecodeIFrame,
                    playbackIsCacheBeforeDecodeForFpsRender: e.playbackConfig.isCacheBeforeDecodeForFpsRender,
                    sampleRate: 0,
                    networkDelay: e.networkDelay,
                    visibility: !0,
                    useSIMD: e.useSIMD,
                    isRecording: !1,
                    recordType: e.recordType,
                    isNakedFlow: e.isNakedFlow,
                    checkFirstIFrame: e.checkFirstIFrame,
                    audioBufferSize: 1024,
                    isM7sCrypto: e.isM7sCrypto,
                    m7sCryptoAudio: e.m7sCryptoAudio,
                    cryptoKey: e.cryptoKey,
                    cryptoIV: e.cryptoIV,
                    isSm4Crypto: e.isSm4Crypto,
                    sm4CryptoKey: e.sm4CryptoKey,
                    isXorCrypto: e.isXorCrypto,
                    isHls265: !1,
                    isFlv: e.isFlv,
                    isFmp4: e.isFmp4,
                    isMpeg4: e.isMpeg4,
                    isTs: e.isTs,
                    isFmp4Private: e.isFmp4Private,
                    isEmitSEI: e.isEmitSEI,
                    isRecordTypeFlv: !1,
                    isWasmMp4: !1,
                    isChrome: !1,
                    isDropSameTimestampGop: e.isDropSameTimestampGop,
                    mseDecodeAudio: e.mseDecodeAudio,
                    nakedFlowH265DemuxUseNew: e.nakedFlowH265DemuxUseNew,
                    mseDecoderUseWorker: e.mseDecoderUseWorker,
                    mseAutoCleanupSourceBuffer: e.mseAutoCleanupSourceBuffer,
                    mseAutoCleanupMaxBackwardDuration: e.mseAutoCleanupMaxBackwardDuration,
                    mseAutoCleanupMinBackwardDuration: e.mseAutoCleanupMinBackwardDuration,
                    mseCorrectTimeDuration: e.mseCorrectTimeDuration,
                    mseCorrectAudioTimeDuration: e.mseCorrectAudioTimeDuration
                }
            };
        "VideoEncoder" in self && (s = {
            hasInit: !1,
            isEmitInfo: !1,
            offscreenCanvas: null,
            offscreenCanvasCtx: null,
            decoder: new VideoDecoder({
                output: function (e) {
                    if (s.isEmitInfo || (_r.debug.log("worker", "Webcodecs Video Decoder initSize"), postMessage({
                            cmd: w,
                            w: e.codedWidth,
                            h: e.codedHeight
                        }), s.isEmitInfo = !0, s.offscreenCanvas = new OffscreenCanvas(e.codedWidth, e.codedHeight), s.offscreenCanvasCtx = s.offscreenCanvas.getContext("2d")), gt(e.createImageBitmap)) e.createImageBitmap().then((t => {
                        s.offscreenCanvasCtx.drawImage(t, 0, 0, e.codedWidth, e.codedHeight);
                        let r = s.offscreenCanvas.transferToImageBitmap();
                        postMessage({
                            cmd: S,
                            buffer: r,
                            delay: _r.delay,
                            ts: 0
                        }, [r]), yt(e)
                    }));
                    else {
                        s.offscreenCanvasCtx.drawImage(e, 0, 0, e.codedWidth, e.codedHeight);
                        let t = s.offscreenCanvas.transferToImageBitmap();
                        postMessage({
                            cmd: S,
                            buffer: t,
                            delay: _r.delay,
                            ts: 0
                        }, [t]), yt(e)
                    }
                },
                error: function (e) {
                    _r.debug.error("worker", "VideoDecoder error", e)
                }
            }),
            decode: function (e, t, r) {
                const i = e[0] >> 4 == 1;
                if (s.hasInit) {
                    const r = new EncodedVideoChunk({
                        data: e.slice(5),
                        timestamp: t,
                        type: i ? Ce : De
                    });
                    s.decoder.decode(r)
                } else if (i && 0 === e[1]) {
                    const t = 15 & e[0];
                    postMessage({
                        cmd: T,
                        code: t
                    });
                    const r = new Uint8Array(e);
                    postMessage({
                        cmd: k,
                        buffer: r,
                        codecId: t
                    }, [r.buffer]);
                    let i = null,
                        n = null;
                    const a = e.slice(5);
                    t === Ee ? (n = Ft(a), i = {
                        codec: n.codec,
                        description: a
                    }) : t === Ae && (n = Xt(a), i = {
                        codec: n.codec,
                        description: a
                    }), n && n.codecWidth && n.codecHeight && (i.codedHeight = n.codecHeight, i.codedWidth = n.codecWidth);
                    try {
                        s.decoder.configure(i), s.hasInit = !0
                    } catch (e) {
                        _r.debug.log("worker", "VideoDecoder configure error", e.code, e)
                    }
                }
            },
            reset() {
                s.hasInit = !1, s.isEmitInfo = !1, s.offscreenCanvas = null, s.offscreenCanvasCtx = null
            }
        });
        let ur = function () {
                if (dr = !0, _r.fetchStatus !== We || Et(_r._opt.isChrome)) {
                    if (n) try {
                        n.abort(), n = null
                    } catch (e) {
                        _r.debug.log("worker", "abort catch", e)
                    }
                } else n = null, _r.debug.log("worker", `abort() and not abortController.abort() _status is ${_r.fetchStatus} and _isChrome is ${_r._opt.isChrome}`)
            },
            cr = {
                init() {
                    cr.lastBuf = null, cr.vps = null, cr.sps = null, cr.pps = null, cr.streamType = null, cr.localDts = 0, cr.isSendSeqHeader = !1
                },
                destroy() {
                    cr.lastBuf = null, cr.vps = null, cr.sps = null, cr.pps = null, cr.streamType = null, cr.localDts = 0, cr.isSendSeqHeader = !1
                },
                dispatch(e) {
                    const t = new Uint8Array(e);
                    cr.extractNALu$2(t)
                },
                getNaluDts() {
                    let e = cr.localDts;
                    return cr.localDts = cr.localDts + 40, e
                },
                getNaluAudioDts() {
                    const e = _r._opt.sampleRate,
                        t = _r._opt.audioBufferSize;
                    return cr.localDts + parseInt(t / e * 1e3)
                },
                extractNALu(e) {
                    let t, r, i = 0,
                        s = e.byteLength,
                        n = 0,
                        a = [];
                    for (; i < s;) switch (t = e[i++], n) {
                        case 0:
                            0 === t && (n = 1);
                            break;
                        case 1:
                            n = 0 === t ? 2 : 0;
                            break;
                        case 2:
                        case 3:
                            0 === t ? n = 3 : 1 === t && i < s ? (r && a.push(e.subarray(r, i - n - 1)), r = i, n = 0) : n = 0
                    }
                    return r && a.push(e.subarray(r, s)), a
                },
                extractNALu$2(e) {
                    let t = null;
                    if (!e || e.byteLength < 1) return;
                    cr.lastBuf ? (t = new Uint8Array(e.byteLength + cr.lastBuf.length), t.set(cr.lastBuf), t.set(new Uint8Array(e), cr.lastBuf.length)) : t = new Uint8Array(e);
                    let r = 0,
                        i = -1,
                        s = -2;
                    const n = new Array;
                    for (let e = 0; e < t.length; e += 2) {
                        const r = t[e],
                            a = t[e + 1];
                        0 == i && 0 == r && 0 == a ? n.push(e - 1) : 1 == a && 0 == r && 0 == i && 0 == s && n.push(e - 2), s = r, i = a
                    }
                    if (n.length > 1)
                        for (let e = 0; e < n.length - 1; ++e) {
                            const i = t.subarray(n[e], n[e + 1] + 1);
                            cr.handleNALu(i), r = n[e + 1]
                        } else r = n[0];
                    if (0 != r && r < t.length) cr.lastBuf = t.subarray(r);
                    else {
                        cr.lastBuf || (cr.lastBuf = t);
                        const r = new Uint8Array(cr.lastBuf.length + e.byteLength);
                        r.set(cr.lastBuf), r.set(new Uint8Array(e), cr.lastBuf.length), cr.lastBuf = r
                    }
                },
                handleNALu(e) {
                    e.byteLength <= 4 ? _r.debug.warn("worker", `handleNALu nalu byteLength is ${e.byteLength} <= 4`) : (e = e.slice(4), cr.handleVideoNalu(e))
                },
                handleVideoNalu(e) {
                    if (cr.streamType || (cr.streamType = function (e) {
                            let t = null,
                                r = 31 & e[0];
                            return r !== Te.sps && r !== Te.pps || (t = xe.h264), t || (r = (126 & e[0]) >> 1, r !== ke.vps && r !== ke.sps && r !== ke.pps || (t = xe.h265)), t
                        }(e), nr = cr.streamType === xe.h265), cr.streamType === xe.h264) {
                        const t = cr.handleAddNaluStartCode(e),
                            r = cr.extractNALu(t);
                        if (0 === r.length) return void _r.debug.warn("worker", "handleVideoNalu", "h264 naluList.length === 0");
                        const i = [];
                        if (r.forEach((e => {
                                const t = Mt(e);
                                t === Te.pps || t === Te.sps ? cr.handleVideoH264Nalu(e) : Nt(t) && i.push(e)
                            })), 1 === i.length) cr.handleVideoH264Nalu(i[0]);
                        else {
                            const e = function (e) {
                                if (0 === e.length) return !1;
                                const t = Mt(e[0]);
                                for (let r = 1; r < e.length; r++)
                                    if (t !== Mt(e[r])) return !1;
                                return !0
                            }(i);
                            if (e) {
                                const e = Mt(i[0]),
                                    t = Ot(e);
                                cr.handleVideoH264NaluList(i, t, e)
                            } else i.forEach((e => {
                                cr.handleVideoH264Nalu(e)
                            }))
                        }
                    } else if (cr.streamType === xe.h265)
                        if (_r._opt.nakedFlowH265DemuxUseNew) {
                            const t = cr.handleAddNaluStartCode(e),
                                r = cr.extractNALu(t);
                            if (0 === r.length) return void _r.debug.warn("worker", "handleVideoNalu", "h265 naluList.length === 0");
                            const i = [];
                            if (r.forEach((e => {
                                    const t = er(e);
                                    t === ke.pps || t === ke.sps || t === ke.vps ? cr.handleVideoH265Nalu(e) : tr(t) && i.push(e)
                                })), 1 === i.length) cr.handleVideoH265Nalu(i[0]);
                            else {
                                const e = function (e) {
                                    if (0 === e.length) return !1;
                                    const t = er(e[0]);
                                    for (let r = 1; r < e.length; r++)
                                        if (t !== er(e[r])) return !1;
                                    return !0
                                }(i);
                                if (e) {
                                    const e = er(i[0]),
                                        t = rr(e);
                                    cr.handleVideoH265NaluList(i, t, e)
                                } else i.forEach((e => {
                                    cr.handleVideoH265Nalu(e)
                                }))
                            }
                        } else {
                            er(e) === ke.pps ? cr.extractH265PPS(e) : cr.handleVideoH265Nalu(e)
                        }
                },
                extractH264PPS(e) {
                    const t = cr.handleAddNaluStartCode(e);
                    cr.extractNALu(t).forEach((e => {
                        zt(Mt(e)) ? cr.extractH264SEI(e) : cr.handleVideoH264Nalu(e)
                    }))
                },
                extractH265PPS(e) {
                    const t = cr.handleAddNaluStartCode(e);
                    cr.extractNALu(t).forEach((e => {
                        const t = er(e);
                        t === ke.sei ? cr.extractH265SEI(e) : cr.handleVideoH265Nalu(e)
                    }))
                },
                extractH264SEI(e) {
                    const t = cr.handleAddNaluStartCode(e);
                    cr.extractNALu(t).forEach((e => {
                        cr.handleVideoH264Nalu(e)
                    }))
                },
                extractH265SEI(e) {
                    const t = cr.handleAddNaluStartCode(e);
                    cr.extractNALu(t).forEach((e => {
                        cr.handleVideoH265Nalu(e)
                    }))
                },
                handleAddNaluStartCode(e) {
                    const t = [0, 0, 0, 1],
                        r = new Uint8Array(e.length + t.length);
                    return r.set(t), r.set(e, t.length), r
                },
                handleVideoH264Nalu(e) {
                    const t = Mt(e);
                    switch (t) {
                        case Te.sps:
                            cr.sps = e;
                            break;
                        case Te.pps:
                            cr.pps = e
                    }
                    if (cr.isSendSeqHeader) {
                        if (cr.sps && cr.pps) {
                            const e = Lt({
                                    sps: cr.sps,
                                    pps: cr.pps
                                }),
                                t = cr.getNaluDts();
                            _r.decode(e, {
                                type: J,
                                ts: t,
                                isIFrame: !0,
                                cts: 0
                            }), cr.sps = null, cr.pps = null
                        }
                        if (Nt(t)) {
                            const r = Ot(t),
                                i = cr.getNaluDts(),
                                s = function (e, t) {
                                    let r = [];
                                    r[0] = t ? 23 : 39, r[1] = 1, r[2] = 0, r[3] = 0, r[4] = 0, r[5] = e.byteLength >> 24 & 255, r[6] = e.byteLength >> 16 & 255, r[7] = e.byteLength >> 8 & 255, r[8] = 255 & e.byteLength;
                                    const i = new Uint8Array(r.length + e.byteLength);
                                    return i.set(r, 0), i.set(e, r.length), i
                                }(e, r);
                            cr.doDecode(s, {
                                type: J,
                                ts: i,
                                isIFrame: r,
                                cts: 0
                            })
                        } else _r.debug.warn("work", `handleVideoH264Nalu Avc Seq Head is ${t}`)
                    } else if (cr.sps && cr.pps) {
                        cr.isSendSeqHeader = !0;
                        const e = Lt({
                            sps: cr.sps,
                            pps: cr.pps
                        });
                        _r.decode(e, {
                            type: J,
                            ts: 0,
                            isIFrame: !0,
                            cts: 0
                        }), cr.sps = null, cr.pps = null
                    }
                },
                handleVideoH264NaluList(e, t, r) {
                    if (cr.isSendSeqHeader) {
                        const i = cr.getNaluDts(),
                            s = Rt(e.reduce(((e, t) => {
                                const r = ct(e),
                                    i = ct(t),
                                    s = new Uint8Array(r.byteLength + i.byteLength);
                                return s.set(r, 0), s.set(i, r.byteLength), s
                            })), t);
                        cr.doDecode(s, {
                            type: J,
                            ts: i,
                            isIFrame: t,
                            cts: 0
                        }), _r.debug.log("worker", `handleVideoH264NaluList list size is ${e.length} package length is ${s.byteLength} isIFrame is ${t},nalu type is ${r}, dts is ${i}`)
                    } else _r.debug.warn("worker", "handleVideoH264NaluList isSendSeqHeader is false")
                },
                handleVideoH265Nalu(e) {
                    const t = er(e);
                    switch (t) {
                        case ke.vps:
                            cr.vps = e;
                            break;
                        case ke.sps:
                            cr.sps = e;
                            break;
                        case ke.pps:
                            cr.pps = e
                    }
                    if (cr.isSendSeqHeader) {
                        if (cr.vps && cr.sps && cr.pps) {
                            const e = Jt({
                                    vps: cr.vps,
                                    sps: cr.sps,
                                    pps: cr.pps
                                }),
                                t = cr.getNaluDts();
                            _r.decode(e, {
                                type: J,
                                ts: t,
                                isIFrame: !0,
                                cts: 0
                            }), cr.vps = null, cr.sps = null, cr.pps = null
                        }
                        if (tr(t)) {
                            const r = rr(t),
                                i = cr.getNaluDts(),
                                s = function (e, t) {
                                    let r = [];
                                    r[0] = t ? 28 : 44, r[1] = 1, r[2] = 0, r[3] = 0, r[4] = 0, r[5] = e.byteLength >> 24 & 255, r[6] = e.byteLength >> 16 & 255, r[7] = e.byteLength >> 8 & 255, r[8] = 255 & e.byteLength;
                                    const i = new Uint8Array(r.length + e.byteLength);
                                    return i.set(r, 0), i.set(e, r.length), i
                                }(e, r);
                            cr.doDecode(s, {
                                type: J,
                                ts: i,
                                isIFrame: r,
                                cts: 0
                            })
                        } else _r.debug.warn("work", `handleVideoH265Nalu HevcSeqHead is ${t}`)
                    } else if (cr.vps && cr.sps && cr.pps) {
                        cr.isSendSeqHeader = !0;
                        const e = Jt({
                            vps: cr.vps,
                            sps: cr.sps,
                            pps: cr.pps
                        });
                        _r.decode(e, {
                            type: J,
                            ts: 0,
                            isIFrame: !0,
                            cts: 0
                        }), cr.vps = null, cr.sps = null, cr.pps = null
                    }
                },
                handleVideoH265NaluList(e, t, r) {
                    if (cr.isSendSeqHeader) {
                        const i = cr.getNaluDts(),
                            s = Qt(e.reduce(((e, t) => {
                                const r = ct(e),
                                    i = ct(t),
                                    s = new Uint8Array(r.byteLength + i.byteLength);
                                return s.set(r, 0), s.set(i, r.byteLength), s
                            })), t);
                        cr.doDecode(s, {
                            type: J,
                            ts: i,
                            isIFrame: t,
                            cts: 0
                        }), _r.debug.log("worker", `handleVideoH265NaluList list size is ${e.length} package length is ${s.byteLength} isIFrame is ${t},nalu type is ${r}, dts is ${i}`)
                    } else _r.debug.warn("worker", "handleVideoH265NaluList isSendSeqHeader is false")
                },
                doDecode(e, t) {
                    _r.calcNetworkDelay(t.ts), t.isIFrame && _r.calcIframeIntervalTimestamp(t.ts), _r.decode(e, t)
                }
            },
            hr = {
                LOG_NAME: "worker fmp4Demuxer",
                mp4Box: zr.createFile(),
                offset: 0,
                videoTrackId: null,
                audioTrackId: null,
                isHevc: !1,
                listenMp4Box() {
                    hr.mp4Box.onReady = hr.onReady, hr.mp4Box.onError = hr.onError, hr.mp4Box.onSamples = hr.onSamples
                },
                initTransportDescarmber() {
                    hr.transportDescarmber = new Gr
                },
                _getSeqHeader(e) {
                    const t = hr.mp4Box.getTrackById(e.id);
                    for (const e of t.mdia.minf.stbl.stsd.entries)
                        if (e.avcC || e.hvcC) {
                            const t = new zr.DataStream(void 0, 0, zr.DataStream.BIG_ENDIAN);
                            let r = [];
                            e.avcC ? (e.avcC.write(t), r = [23, 0, 0, 0, 0]) : (hr.isHevc = !0, nr = !0, e.hvcC.write(t), r = [28, 0, 0, 0, 0]);
                            const i = new Uint8Array(t.buffer, 8),
                                s = new Uint8Array(r.length + i.length);
                            return s.set(r, 0), s.set(i, r.length), s
                        } return null
                },
                onReady(e) {
                    _r.debug.log(hr.LOG_NAME, "onReady()");
                    const t = e.videoTracks[0],
                        r = e.audioTracks[0];
                    if (t) {
                        hr.videoTrackId = t.id;
                        const e = hr._getSeqHeader(t);
                        e && (_r.debug.log(hr.LOG_NAME, "seqHeader"), _r.decodeVideo(e, 0, !0, 0)), hr.mp4Box.setExtractionOptions(t.id)
                    }
                    if (r && _r._opt.hasAudio) {
                        hr.audioTrackId = r.id;
                        const e = r.audio || {},
                            t = at.indexOf(e.sample_rate),
                            i = r.codec.replace("mp4a.40.", "");
                        hr.mp4Box.setExtractionOptions(r.id);
                        const s = tt({
                            profile: parseInt(i, 10),
                            sampleRate: t,
                            channel: e.channel_count
                        });
                        _r.debug.log(hr.LOG_NAME, "aacADTSHeader"), _r.decodeAudio(s, 0)
                    }
                    hr.mp4Box.start()
                },
                onError(e) {
                    _r.debug.error(hr.LOG_NAME, "mp4Box onError", e)
                },
                onSamples(e, t, r) {
                    if (e === hr.videoTrackId)
                        for (const t of r) {
                            const r = t.data,
                                i = t.is_sync,
                                s = 1e3 * t.cts / t.timescale;
                            t.duration, t.timescale, i && _r.calcIframeIntervalTimestamp(s);
                            let n = null;
                            n = hr.isHevc ? Qt(r, i) : Rt(r, i), _r.decode(n, {
                                type: J,
                                ts: s,
                                isIFrame: i,
                                cts: 0
                            }), hr.mp4Box.releaseUsedSamples(e, t.number)
                        } else if (e === hr.audioTrackId) {
                            if (_r._opt.hasAudio)
                                for (const t of r) {
                                    const r = t.data,
                                        i = 1e3 * t.cts / t.timescale;
                                    t.duration, t.timescale;
                                    const s = new Uint8Array(r.byteLength + 2);
                                    s.set([175, 1], 0), s.set(r, 2), _r.decode(s, {
                                        type: Z,
                                        ts: i,
                                        isIFrame: !1,
                                        cts: 0
                                    }), hr.mp4Box.releaseUsedSamples(e, t.number)
                                }
                        } else _r.debug.warn(hr.LOG_NAME, "onSamples() trackId error", e)
                },
                dispatch(e) {
                    let t = e;
                    "string" != typeof e ? "object" == typeof e ? (hr.transportDescarmber && (t = hr.transportDescarmber.transport(t)), t.buffer.fileStart = hr.offset, hr.offset += t.byteLength, hr.mp4Box.appendBuffer(t.buffer)) : _r.debug.warn(hr.LOG_NAME, "dispatch()", "data is not object", e) : _r.debug.warn(hr.LOG_NAME, "dispatch()", "data is string", e)
                },
                destroy() {
                    hr.mp4Box && (hr.mp4Box.flush(), hr.mp4Box = null), hr.transportDescarmber && (hr.transportDescarmber.destroy(), hr.transportDescarmber = null), hr.offset = 0, hr.videoTrackId = null, hr.audioTrackId = null, hr.isHevc = !1
                }
            },
            fr = {
                LOG_NAME: "worker mpeg4Demuxer",
                lastBuffer: new Uint8Array(0),
                parsedOffset: 0,
                firstStartCodeOffset: 0,
                secondStartCodeOffset: 0,
                state: "init",
                hasInitVideoCodec: !1,
                localDts: 0,
                dispatch(e) {
                    const t = new Uint8Array(e);
                    fr.extractNALu(t)
                },
                destroy() {
                    fr.lastBuffer = new Uint8Array(0), fr.parsedOffset = 0, fr.firstStartCodeOffset = 0, fr.secondStartCodeOffset = 0, fr.state = "init", fr.hasInitVideoCodec = !1, fr.localDts = 0
                },
                extractNALu(e) {
                    if (!e || e.byteLength < 1) return void _r.debug.warn(fr.LOG_NAME, "extractNALu() buffer error", e);
                    const t = new Uint8Array(fr.lastBuffer.length + e.length);
                    for (t.set(fr.lastBuffer, 0), t.set(new Uint8Array(e), fr.lastBuffer.length), fr.lastBuffer = t;;) {
                        if ("init" === fr.state) {
                            let e = !1;
                            for (; fr.lastBuffer.length - fr.parsedOffset >= 4;)
                                if (0 === fr.lastBuffer[fr.parsedOffset])
                                    if (0 === fr.lastBuffer[fr.parsedOffset + 1])
                                        if (1 === fr.lastBuffer[fr.parsedOffset + 2]) {
                                            if (182 === fr.lastBuffer[fr.parsedOffset + 3]) {
                                                fr.state = "findFirstStartCode", fr.firstStartCodeOffset = fr.parsedOffset, fr.parsedOffset += 4, e = !0;
                                                break
                                            }
                                            fr.parsedOffset++
                                        } else fr.parsedOffset++;
                            else fr.parsedOffset++;
                            else fr.parsedOffset++;
                            if (e) continue;
                            break
                        }
                        if ("findFirstStartCode" === fr.state) {
                            let e = !1;
                            for (; fr.lastBuffer.length - fr.parsedOffset >= 4;)
                                if (0 === fr.lastBuffer[fr.parsedOffset])
                                    if (0 === fr.lastBuffer[fr.parsedOffset + 1])
                                        if (1 === fr.lastBuffer[fr.parsedOffset + 2]) {
                                            if (182 === fr.lastBuffer[fr.parsedOffset + 3]) {
                                                fr.state = "findSecondStartCode", fr.secondStartCodeOffset = fr.parsedOffset, fr.parsedOffset += 4, e = !0;
                                                break
                                            }
                                            fr.parsedOffset++
                                        } else fr.parsedOffset++;
                            else fr.parsedOffset++;
                            else fr.parsedOffset++;
                            if (e) continue;
                            break
                        }
                        if ("findSecondStartCode" === fr.state) {
                            if (!(fr.lastBuffer.length - fr.parsedOffset > 0)) break; {
                                let e, t, r = 192 & fr.lastBuffer[fr.parsedOffset];
                                e = 0 == r ? fr.secondStartCodeOffset - 14 : fr.secondStartCodeOffset;
                                let i = 0 == (192 & fr.lastBuffer[fr.firstStartCodeOffset + 4]);
                                if (i) {
                                    if (fr.firstStartCodeOffset - 14 < 0) return void _r.debug.warn(fr.LOG_NAME, "firstStartCodeOffset -14 is", fr.firstStartCodeOffset - 14);
                                    fr.hasInitVideoCodec || (fr.hasInitVideoCodec = !0, _r.debug.log(fr.LOG_NAME, "setCodec"), yr.setCodec(Ue, "")), t = fr.lastBuffer.subarray(fr.firstStartCodeOffset - 14, e)
                                } else t = fr.lastBuffer.subarray(fr.firstStartCodeOffset, e);
                                let s = fr.getNaluDts();
                                fr.hasInitVideoCodec ? (postMessage({
                                    cmd: I,
                                    type: me,
                                    value: t.byteLength
                                }), postMessage({
                                    cmd: I,
                                    type: _e,
                                    value: s
                                }), yr.decode(t, i ? 1 : 0, s)) : _r.debug.warn(fr.LOG_NAME, "has not init video codec"), fr.lastBuffer = fr.lastBuffer.subarray(e), fr.firstStartCodeOffset = 0 == r ? 14 : 0, fr.parsedOffset = fr.firstStartCodeOffset + 4, fr.state = "findFirstStartCode"
                            }
                        }
                    }
                },
                getNaluDts() {
                    let e = fr.localDts;
                    return fr.localDts = fr.localDts + 40, e
                }
            },
            pr = {
                TAG: "worker TsLoader",
                first_parse_: !0,
                tsPacketSize: 0,
                syncOffset: 0,
                pmt_: null,
                config_: null,
                media_info_: new Bi,
                timescale_: 90,
                duration_: 0,
                pat_: {
                    version_number: 0,
                    network_pid: 0,
                    program_map_pid: {}
                },
                current_program_: null,
                current_pmt_pid_: -1,
                program_pmt_map_: {},
                pes_slice_queues_: {},
                section_slice_queues_: {},
                video_metadata_: {
                    vps: null,
                    sps: null,
                    pps: null,
                    details: null
                },
                audio_metadata_: {
                    codec: null,
                    audio_object_type: null,
                    sampling_freq_index: null,
                    sampling_frequency: null,
                    channel_config: null
                },
                last_pcr_: null,
                audio_last_sample_pts_: void 0,
                aac_last_incomplete_data_: null,
                has_video_: !1,
                has_audio_: !1,
                video_init_segment_dispatched_: !1,
                audio_init_segment_dispatched_: !1,
                video_metadata_changed_: !1,
                audio_metadata_changed_: !1,
                loas_previous_frame: null,
                video_track_: {
                    type: "video",
                    id: 1,
                    sequenceNumber: 0,
                    samples: [],
                    length: 0
                },
                audio_track_: {
                    type: "audio",
                    id: 2,
                    sequenceNumber: 0,
                    samples: [],
                    length: 0
                },
                _remainingPacketData: null,
                init() {},
                destroy() {
                    pr.media_info_ = null, pr.pes_slice_queues_ = null, pr.section_slice_queues_ = null, pr.video_metadata_ = null, pr.audio_metadata_ = null, pr.aac_last_incomplete_data_ = null, pr.video_track_ = null, pr.audio_track_ = null, pr._remainingPacketData = null
                },
                probe(e) {
                    let t = new Uint8Array(e),
                        r = -1,
                        i = 188;
                    if (t.byteLength <= 3 * i) return {
                        needMoreData: !0
                    };
                    for (; - 1 === r;) {
                        let e = Math.min(1e3, t.byteLength - 3 * i);
                        for (let s = 0; s < e;) {
                            if (71 === t[s] && 71 === t[s + i] && 71 === t[s + 2 * i]) {
                                r = s;
                                break
                            }
                            s++
                        }
                        if (-1 === r)
                            if (188 === i) i = 192;
                            else {
                                if (192 !== i) break;
                                i = 204
                            }
                    }
                    return -1 === r ? {
                        match: !1
                    } : (192 === i && r >= 4 && (r -= 4), {
                        match: !0,
                        consumed: 0,
                        ts_packet_size: i,
                        sync_offset: r
                    })
                },
                _initPmt: () => ({
                    program_number: 0,
                    version_number: 0,
                    pcr_pid: 0,
                    pid_stream_type: {},
                    common_pids: {
                        h264: void 0,
                        h265: void 0,
                        adts_aac: void 0,
                        loas_aac: void 0,
                        opus: void 0,
                        ac3: void 0,
                        eac3: void 0,
                        mp3: void 0
                    },
                    pes_private_data_pids: {},
                    timed_id3_pids: {},
                    synchronous_klv_pids: {},
                    asynchronous_klv_pids: {},
                    scte_35_pids: {},
                    smpte2038_pids: {}
                }),
                dispatch(e) {
                    pr._remainingPacketData && (e = function () {
                        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        if ((t = t.filter(Boolean)).length < 2) return t[0];
                        const i = new Uint8Array(t.reduce(((e, t) => e + t.byteLength), 0));
                        let s = 0;
                        return t.forEach((e => {
                            i.set(e, s), s += e.byteLength
                        })), i
                    }(pr._remainingPacketData, e), pr._remainingPacketData = null);
                    let t = e.buffer;
                    const r = pr.parseChunks(t);
                    r ? pr._remainingPacketData = e.subarray(r) : e.length < this.tsPacketSize && (pr._remainingPacketData = e)
                },
                parseChunks(e) {
                    let t = 0;
                    if (pr.first_parse_) {
                        pr.first_parse_ = !1;
                        const r = pr.probe(e);
                        r.match && (pr.tsPacketSize = r.ts_packet_size, pr.syncOffset = r.sync_offset), t = pr.syncOffset, _r.debug.log(pr.TAG, `isFirstDispatch and tsPacketSize = ${pr.tsPacketSize}, syncOffset = ${pr.syncOffset}`)
                    }
                    for (; t + pr.tsPacketSize <= e.byteLength;) {
                        192 === pr.tsPacketSize && (t += 4);
                        const r = new Uint8Array(e, t, 188);
                        let i = r[0];
                        if (71 !== i) {
                            _r.debug.warn(pr.TAG, `sync_byte = ${i}, not 0x47`);
                            break
                        }
                        let s = (64 & r[1]) >>> 6;
                        r[1];
                        let n = (31 & r[1]) << 8 | r[2],
                            a = (48 & r[3]) >>> 4,
                            o = 15 & r[3],
                            d = !(!pr.pmt_ || pr.pmt_.pcr_pid !== n),
                            l = {},
                            u = 4;
                        if (2 == a || 3 == a) {
                            let e = r[4];
                            if (e > 0 && (d || 3 == a)) {
                                if (l.discontinuity_indicator = (128 & r[5]) >>> 7, l.random_access_indicator = (64 & r[5]) >>> 6, l.elementary_stream_priority_indicator = (32 & r[5]) >>> 5, (16 & r[5]) >>> 4) {
                                    let e = 300 * (r[6] << 25 | r[7] << 17 | r[8] << 9 | r[9] << 1 | r[10] >>> 7) + ((1 & r[10]) << 8 | r[11]);
                                    pr.last_pcr_ = e
                                }
                            }
                            if (2 == a || 5 + e === 188) {
                                t += 188, 204 === pr.tsPacketSize && (t += 16);
                                continue
                            }
                            u = 5 + e
                        }
                        if (1 == a || 3 == a)
                            if (0 === n || n === pr.current_pmt_pid_ || null != pr.pmt_ && pr.pmt_.pid_stream_type[n] === vi) {
                                let r = 188 - u;
                                pr.handleSectionSlice(e, t + u, r, {
                                    pid: n,
                                    payload_unit_start_indicator: s,
                                    continuity_conunter: o,
                                    random_access_indicator: l.random_access_indicator
                                })
                            } else if (null != pr.pmt_ && null != pr.pmt_.pid_stream_type[n]) {
                            let r = 188 - u,
                                i = pr.pmt_.pid_stream_type[n];
                            n !== pr.pmt_.common_pids.h264 && n !== pr.pmt_.common_pids.h265 && n !== pr.pmt_.common_pids.adts_aac && n !== pr.pmt_.common_pids.loas_aac && n !== pr.pmt_.common_pids.ac3 && n !== pr.pmt_.common_pids.eac3 && n !== pr.pmt_.common_pids.opus && n !== pr.pmt_.common_pids.mp3 && !0 !== pr.pmt_.pes_private_data_pids[n] && !0 !== pr.pmt_.timed_id3_pids[n] && !0 !== pr.pmt_.synchronous_klv_pids[n] && !0 !== pr.pmt_.asynchronous_klv_pids[n] || pr.handlePESSlice(e, t + u, r, {
                                pid: n,
                                stream_type: i,
                                payload_unit_start_indicator: s,
                                continuity_conunter: o,
                                random_access_indicator: l.random_access_indicator
                            })
                        }
                        t += 188, 204 === pr.tsPacketSize && (t += 16)
                    }
                    return pr.dispatchAudioVideoMediaSegment(), t
                },
                handleSectionSlice(e, t, r, i) {
                    let s = new Uint8Array(e, t, r),
                        n = pr.section_slice_queues_[i.pid];
                    if (i.payload_unit_start_indicator) {
                        let a = s[0];
                        if (null != n && 0 !== n.total_length) {
                            let s = new Uint8Array(e, t + 1, Math.min(r, a));
                            n.slices.push(s), n.total_length += s.byteLength, n.total_length === n.expected_length ? pr.emitSectionSlices(n, i) : pr.clearSlices(n, i)
                        }
                        for (let o = 1 + a; o < s.byteLength;) {
                            if (255 === s[o + 0]) break;
                            let a = (15 & s[o + 1]) << 8 | s[o + 2];
                            pr.section_slice_queues_[i.pid] = new Ei, n = pr.section_slice_queues_[i.pid], n.expected_length = a + 3, n.random_access_indicator = i.random_access_indicator;
                            let d = new Uint8Array(e, t + o, Math.min(r - o, n.expected_length - n.total_length));
                            n.slices.push(d), n.total_length += d.byteLength, n.total_length === n.expected_length ? pr.emitSectionSlices(n, i) : n.total_length >= n.expected_length && pr.clearSlices(n, i), o += d.byteLength
                        }
                    } else if (null != n && 0 !== n.total_length) {
                        let s = new Uint8Array(e, t, Math.min(r, n.expected_length - n.total_length));
                        n.slices.push(s), n.total_length += s.byteLength, n.total_length === n.expected_length ? pr.emitSectionSlices(n, i) : n.total_length >= n.expected_length && pr.clearSlices(n, i)
                    }
                },
                handlePESSlice(e, t, r, i) {
                    let s = new Uint8Array(e, t, r),
                        n = s[0] << 16 | s[1] << 8 | s[2];
                    s[3];
                    let a = s[4] << 8 | s[5];
                    if (i.payload_unit_start_indicator) {
                        if (1 !== n) return void _r.debug.warn(pr.TAG, `handlePESSlice: packet_start_code_prefix should be 1 but with value ${n}`);
                        let e = pr.pes_slice_queues_[i.pid];
                        e && (0 === e.expected_length || e.expected_length === e.total_length ? pr.emitPESSlices(e, i) : pr.clearSlices(e, i)), pr.pes_slice_queues_[i.pid] = new Ei, pr.pes_slice_queues_[i.pid].random_access_indicator = i.random_access_indicator
                    }
                    if (null == pr.pes_slice_queues_[i.pid]) return;
                    let o = pr.pes_slice_queues_[i.pid];
                    o.slices.push(s), i.payload_unit_start_indicator && (o.expected_length = 0 === a ? 0 : a + 6), o.total_length += s.byteLength, o.expected_length > 0 && o.expected_length === o.total_length ? pr.emitPESSlices(o, i) : o.expected_length > 0 && o.expected_length < o.total_length && pr.clearSlices(o, i)
                },
                emitSectionSlices(e, t) {
                    let r = new Uint8Array(e.total_length);
                    for (let t = 0, i = 0; t < e.slices.length; t++) {
                        let s = e.slices[t];
                        r.set(s, i), i += s.byteLength
                    }
                    e.slices = [], e.expected_length = -1, e.total_length = 0;
                    let i = {};
                    i.pid = t.pid, i.data = r, i.file_position = e.file_position, i.random_access_indicator = e.random_access_indicator, pr.parseSection(i)
                },
                emitPESSlices(e, t) {
                    let r = new Uint8Array(e.total_length);
                    for (let t = 0, i = 0; t < e.slices.length; t++) {
                        let s = e.slices[t];
                        r.set(s, i), i += s.byteLength
                    }
                    e.slices = [], e.expected_length = -1, e.total_length = 0;
                    let i = new Ai;
                    i.pid = t.pid, i.data = r, i.stream_type = t.stream_type, i.random_access_indicator = e.random_access_indicator, pr.parsePES(i)
                },
                clearSlices(e) {
                    e.slices = [], e.expected_length = -1, e.total_length = 0
                },
                parseSection(e) {
                    let t = e.data,
                        r = e.pid;
                    0 === r ? pr.parsePAT(t) : r === pr.current_pmt_pid_ ? pr.parsePMT(t) : null != pr.pmt_ && pr.pmt_.scte_35_pids[r]
                },
                parsePES(e) {
                    let t = e.data,
                        r = t[0] << 16 | t[1] << 8 | t[2],
                        i = t[3],
                        s = t[4] << 8 | t[5];
                    if (1 === r) {
                        if (188 !== i && 190 !== i && 191 !== i && 240 !== i && 241 !== i && 255 !== i && 242 !== i && 248 !== i) {
                            t[6];
                            let r, n, a = (192 & t[7]) >>> 6,
                                o = t[8];
                            2 !== a && 3 !== a || (r = 536870912 * (14 & t[9]) + 4194304 * (255 & t[10]) + 16384 * (254 & t[11]) + 128 * (255 & t[12]) + (254 & t[13]) / 2, n = 3 === a ? 536870912 * (14 & t[14]) + 4194304 * (255 & t[15]) + 16384 * (254 & t[16]) + 128 * (255 & t[17]) + (254 & t[18]) / 2 : r);
                            let d, l = 9 + o;
                            if (0 !== s) {
                                if (s < 3 + o) return void _r.debug.warn(pr.TAG, "Malformed PES: PES_packet_length < 3 + PES_header_data_length");
                                d = s - 3 - o
                            } else d = t.byteLength - l;
                            let u = t.subarray(l, l + d);
                            switch (e.stream_type) {
                                case hi:
                                case fi:
                                    pr.parseMP3Payload(u, r);
                                    break;
                                case pi:
                                    pr.pmt_.common_pids.opus === e.pid || pr.pmt_.common_pids.ac3 === e.pid || pr.pmt_.common_pids.eac3 === e.pid || (pr.pmt_.asynchronous_klv_pids[e.pid] ? pr.parseAsynchronousKLVMetadataPayload(u, e.pid, i) : pr.pmt_.smpte2038_pids[e.pid] ? pr.parseSMPTE2038MetadataPayload(u, r, n, e.pid, i) : pr.parsePESPrivateDataPayload(u, r, n, e.pid, i));
                                    break;
                                case mi:
                                    pr.parseADTSAACPayload(u, r);
                                    break;
                                case _i:
                                    pr.parseLOASAACPayload(u, r);
                                    break;
                                case gi:
                                case yi:
                                    break;
                                case bi:
                                    pr.pmt_.timed_id3_pids[e.pid] ? pr.parseTimedID3MetadataPayload(u, r, n, e.pid, i) : pr.pmt_.synchronous_klv_pids[e.pid] && pr.parseSynchronousKLVMetadataPayload(u, r, n, e.pid, i);
                                    break;
                                case wi:
                                    pr.parseH264Payload(u, r, n, e.random_access_indicator);
                                    break;
                                case Si:
                                    pr.parseH265Payload(u, r, n, e.random_access_indicator)
                            }
                        } else if ((188 === i || 191 === i || 240 === i || 241 === i || 255 === i || 242 === i || 248 === i) && e.stream_type === pi) {
                            let r, n = 6;
                            r = 0 !== s ? s : t.byteLength - n;
                            let a = t.subarray(n, n + r);
                            pr.parsePESPrivateDataPayload(a, void 0, void 0, e.pid, i)
                        }
                    } else _r.debug.error(pr.TAG, `parsePES: packet_start_code_prefix should be 1 but with value ${r}`)
                },
                parsePAT(e) {
                    let t = e[0];
                    if (0 !== t) return void Log.e(pr.TAG, `parsePAT: table_id ${t} is not corresponded to PAT!`);
                    let r = (15 & e[1]) << 8 | e[2];
                    e[3], e[4];
                    let i = (62 & e[5]) >>> 1,
                        s = 1 & e[5],
                        n = e[6];
                    e[7];
                    let a = null;
                    if (1 === s && 0 === n) a = {
                        version_number: 0,
                        network_pid: 0,
                        program_pmt_pid: {}
                    }, a.version_number = i;
                    else if (a = pr.pat_, null == a) return;
                    let o = r - 5 - 4,
                        d = -1,
                        l = -1;
                    for (let t = 8; t < 8 + o; t += 4) {
                        let r = e[t] << 8 | e[t + 1],
                            i = (31 & e[t + 2]) << 8 | e[t + 3];
                        0 === r ? a.network_pid = i : (a.program_pmt_pid[r] = i, -1 === d && (d = r), -1 === l && (l = i))
                    }
                    1 === s && 0 === n && (null == pr.pat_ && _r.debug.log(pr.TAG, `Parsed first PAT: ${JSON.stringify(a)}`), pr.pat_ = a, pr.current_program_ = d, pr.current_pmt_pid_ = l)
                },
                parsePMT(e) {
                    let t = e[0];
                    if (2 !== t) return void _r.debug.error(pr.TAG, `parsePMT: table_id ${t} is not corresponded to PMT!`);
                    let r, i = (15 & e[1]) << 8 | e[2],
                        s = e[3] << 8 | e[4],
                        n = (62 & e[5]) >>> 1,
                        a = 1 & e[5],
                        o = e[6];
                    if (e[7], 1 === a && 0 === o) r = pr._initPmt(), r.program_number = s, r.version_number = n, pr.program_pmt_map_[s] = r;
                    else if (r = pr.program_pmt_map_[s], null == r) return;
                    r.pcr_pid = (31 & e[8]) << 8 | e[9];
                    let d = (15 & e[10]) << 8 | e[11],
                        l = 12 + d,
                        u = i - 9 - d - 4;
                    for (let t = l; t < l + u;) {
                        let i = e[t],
                            s = (31 & e[t + 1]) << 8 | e[t + 2],
                            n = (15 & e[t + 3]) << 8 | e[t + 4];
                        r.pid_stream_type[s] = i;
                        let a = r.common_pids.h264 || r.common_pids.h265,
                            o = r.common_pids.adts_aac || r.common_pids.loas_aac || r.common_pids.ac3 || r.common_pids.eac3 || r.common_pids.opus || r.common_pids.mp3;
                        if (i !== wi || a)
                            if (i !== Si || a)
                                if (i !== mi || o)
                                    if (i !== _i || o)
                                        if (i !== gi || o)
                                            if (i !== yi || o)
                                                if (i !== hi && i !== fi || o)
                                                    if (i === pi) {
                                                        if (r.pes_private_data_pids[s] = !0, n > 0) {
                                                            for (let i = t + 5; i < t + 5 + n;) {
                                                                let t = e[i + 0],
                                                                    n = e[i + 1];
                                                                if (5 === t) {
                                                                    let t = String.fromCharCode(...Array.from(e.subarray(i + 2, i + 2 + n)));
                                                                    "VANC" === t ? r.smpte2038_pids[s] = !0 : "Opus" === t ? r.common_pids.opus = s : "KLVA" === t && (r.asynchronous_klv_pids[s] = !0)
                                                                } else if (127 === t && s === r.common_pids.opus) {
                                                                    let t = null;
                                                                    if (128 === e[i + 2] && (t = e[i + 3]), null == t) {
                                                                        Log.e(pr.TAG, "Not Supported Opus channel count.");
                                                                        continue
                                                                    }
                                                                    const r = {
                                                                            codec: "opus",
                                                                            channel_count: 0 == (15 & t) ? 2 : 15 & t,
                                                                            channel_config_code: t,
                                                                            sample_rate: 48e3
                                                                        },
                                                                        s = {
                                                                            codec: "opus",
                                                                            meta: r
                                                                        };
                                                                    0 == pr.audio_init_segment_dispatched_ ? (pr.audio_metadata_ = r, pr.dispatchAudioInitSegment(s)) : pr.detectAudioMetadataChange(s) && (pr.dispatchAudioMediaSegment(), pr.dispatchAudioInitSegment(s))
                                                                }
                                                                i += 2 + n
                                                            }
                                                            e.subarray(t + 5, t + 5 + n)
                                                        }
                                                    } else if (i === bi) {
                            if (n > 0)
                                for (let i = t + 5; i < t + 5 + n;) {
                                    let t = e[i + 0],
                                        n = e[i + 1];
                                    if (38 === t) {
                                        let t = e[i + 2] << 8 | e[i + 3] << 0,
                                            n = null;
                                        65535 === t && (n = String.fromCharCode(...Array.from(e.subarray(i + 4, i + 4 + 4))));
                                        let a = null;
                                        if (255 === e[i + 4 + (65535 === t ? 4 : 0)]) {
                                            let r = 4 + (65535 === t ? 4 : 0) + 1;
                                            a = String.fromCharCode(...Array.from(e.subarray(i + r, i + r + 4)))
                                        }
                                        "ID3 " === n && "ID3 " === a ? r.timed_id3_pids[s] = !0 : "KLVA" === a && (r.synchronous_klv_pids[s] = !0)
                                    }
                                    i += 2 + n
                                }
                        } else i === vi && (r.scte_35_pids[s] = !0);
                        else r.common_pids.mp3 = s;
                        else r.common_pids.eac3 = s;
                        else r.common_pids.ac3 = s;
                        else r.common_pids.loas_aac = s;
                        else r.common_pids.adts_aac = s;
                        else r.common_pids.h265 = s;
                        else r.common_pids.h264 = s;
                        t += 5 + n
                    }
                    s === pr.current_program_ && (null == pr.pmt_ && _r.debug.log(pr.TAG, `Parsed first PMT: ${JSON.stringify(r)}`), pr.pmt_ = r, (r.common_pids.h264 || r.common_pids.h265) && (pr.has_video_ = !0), (r.common_pids.adts_aac || r.common_pids.loas_aac || r.common_pids.ac3 || r.common_pids.opus || r.common_pids.mp3) && (pr.has_audio_ = !0))
                },
                parseSCTE35(e) {},
                parseH264Payload(e, t, r, i) {
                    let s = new Gt(e),
                        n = null,
                        a = null,
                        o = [],
                        d = 0,
                        l = !1;
                    for (; null != (n = s.readNextNaluPayload());) {
                        let e = new $t(n);
                        if (e.type === Te.kSliceSPS) {
                            let t = Pt.parseSPS$2(n.data);
                            pr.video_init_segment_dispatched_ ? !0 === pr.detectVideoMetadataChange(e, t) && (_r.debug.log(pr.TAG, "H264: Critical h264 metadata has been changed, attempt to re-generate InitSegment"), pr.video_metadata_changed_ = !0, pr.video_metadata_ = {
                                vps: void 0,
                                sps: e,
                                pps: void 0,
                                details: t
                            }) : (pr.video_metadata_.sps = e, pr.video_metadata_.details = t)
                        } else e.type === Te.kSlicePPS ? pr.video_init_segment_dispatched_ && !pr.video_metadata_changed_ || (pr.video_metadata_.pps = e, pr.video_metadata_.sps && pr.video_metadata_.pps && (pr.video_metadata_changed_ && pr.dispatchVideoMediaSegment(), pr.dispatchVideoInitSegment())) : (e.type === Te.kSliceIDR || e.type === Te.kSliceNonIDR && 1 === i) && (l = !0);
                        pr.video_init_segment_dispatched_ && (o.push(e), d += e.data.byteLength)
                    }
                    let u = Math.floor(t / pr.timescale_),
                        c = Math.floor(r / pr.timescale_);
                    if (o.length) {
                        let e = pr.video_track_;
                        for (let e = 0; e < o.length; e++) {
                            let t = o[e];
                            if (null == a) a = t.data;
                            else {
                                let e = new Uint8Array(a.byteLength + t.data.byteLength);
                                e.set(a, 0), e.set(t.data, a.byteLength), a = e
                            }
                        }
                        let t = {
                            length: d,
                            isIFrame: l,
                            dts: c,
                            pts: u,
                            cts: u - c,
                            payload: a,
                            type: J,
                            isHevc: !1
                        };
                        e.samples.push(t), e.length = a.byteLength
                    }
                },
                parseH265Payload(e, t, r, i) {
                    let s = new ir(e),
                        n = null,
                        a = null,
                        o = [],
                        d = 0,
                        l = !1;
                    for (; null != (n = s.readNextNaluPayload());) {
                        let e = new sr(n);
                        if (e.type === ke.kSliceVPS) {
                            if (!pr.video_init_segment_dispatched_) {
                                let t = Yt.parseVPS(n.data);
                                pr.video_metadata_.vps = e, pr.video_metadata_.details = {
                                    ...pr.video_metadata_.details,
                                    ...t
                                }
                            }
                        } else if (e.type === ke.kSliceSPS) {
                            let t = Yt.parseSPS(n.data);
                            pr.video_init_segment_dispatched_ ? !0 === pr.detectVideoMetadataChange(e, t) && (_r.debug.log(pr.TAG, "H265: Critical h265 metadata has been changed, attempt to re-generate InitSegment"), pr.video_metadata_changed_ = !0, pr.video_metadata_ = {
                                vps: void 0,
                                sps: e,
                                pps: void 0,
                                details: t
                            }) : (pr.video_metadata_.sps = e, pr.video_metadata_.details = {
                                ...pr.video_metadata_.details,
                                ...t
                            })
                        } else if (e.type === ke.kSlicePPS) {
                            if (!pr.video_init_segment_dispatched_ || pr.video_metadata_changed_) {
                                let t = Yt.parsePPS(n.data);
                                pr.video_metadata_.pps = e, pr.video_metadata_.details = {
                                    ...pr.video_metadata_.details,
                                    ...t
                                }, pr.video_metadata_.vps && pr.video_metadata_.sps && pr.video_metadata_.pps && (pr.video_metadata_changed_ && pr.dispatchVideoMediaSegment(), pr.dispatchVideoInitSegment())
                            }
                        } else e.type !== ke.kSliceIDR_W_RADL && e.type !== ke.kSliceIDR_N_LP && e.type !== ke.kSliceCRA_NUT || (l = !0);
                        pr.video_init_segment_dispatched_ && (o.push(e), d += e.data.byteLength)
                    }
                    let u = Math.floor(t / pr.timescale_),
                        c = Math.floor(r / pr.timescale_);
                    if (o.length) {
                        let e = pr.video_track_;
                        for (let e = 0; e < o.length; e++) {
                            let t = o[e];
                            if (null == a) a = t.data;
                            else {
                                let e = new Uint8Array(a.byteLength + t.data.byteLength);
                                e.set(a, 0), e.set(t.data, a.byteLength), a = e
                            }
                        }
                        let t = {
                            type: J,
                            length: d,
                            isIFrame: l,
                            dts: c,
                            pts: u,
                            cts: u - c,
                            payload: a,
                            isHevc: !0
                        };
                        e.samples.push(t), e.length = a.byteLength
                    }
                },
                detectVideoMetadataChange(e, t) {
                    if (t.codec_mimetype !== pr.video_metadata_.details.codec_mimetype) return _r.debug.log(pr.TAG, `Video: Codec mimeType changed from ${pr.video_metadata_.details.codec_mimetype} to ${t.codec_mimetype}`), !0;
                    if (t.codec_size.width !== pr.video_metadata_.details.codec_size.width || t.codec_size.height !== pr.video_metadata_.details.codec_size.height) {
                        let e = pr.video_metadata_.details.codec_size,
                            r = t.codec_size;
                        return _r.debug.log(pr.TAG, `Video: Coded Resolution changed from ${e.width}x${e.height} to ${r.width}x${r.height}`), !0
                    }
                    return t.present_size.width !== pr.video_metadata_.details.present_size.width && (_r.debug.log(pr.TAG, `Video: Present resolution width changed from ${pr.video_metadata_.details.present_size.width} to ${t.present_size.width}`), !0)
                },
                isInitSegmentDispatched: () => pr.has_video_ && pr.has_audio_ ? pr.video_init_segment_dispatched_ && pr.audio_init_segment_dispatched_ : pr.has_video_ && !pr.has_audio_ ? pr.video_init_segment_dispatched_ : !(pr.has_video_ || !pr.has_audio_) && pr.audio_init_segment_dispatched_,
                dispatchVideoInitSegment() {
                    let e = pr.video_metadata_.details,
                        t = {
                            type: "video"
                        };
                    t.id = pr.video_track_.id, t.timescale = 1e3, t.duration = pr.duration_, t.codecWidth = e.codec_size.width, t.codecHeight = e.codec_size.height, t.presentWidth = e.present_size.width, t.presentHeight = e.present_size.height, t.profile = e.profile_string, t.level = e.level_string, t.bitDepth = e.bit_depth, t.chromaFormat = e.chroma_format, t.sarRatio = e.sar_ratio, t.frameRate = e.frame_rate;
                    let r = t.frameRate.fps_den,
                        i = t.frameRate.fps_num;
                    if (t.refSampleDuration = r / i * 1e3, t.codec = e.codec_mimetype, pr.video_metadata_.vps) {
                        let e = pr.video_metadata_.vps.data.subarray(4),
                            r = pr.video_metadata_.sps.data.subarray(4),
                            i = pr.video_metadata_.pps.data.subarray(4);
                        t.hvcc = Jt({
                            vps: e,
                            sps: r,
                            pps: i
                        }), 0 == pr.video_init_segment_dispatched_ && _r.debug.log(pr.TAG, `Generated first HEVCDecoderConfigurationRecord for mimeType: ${t.codec}`), t.hvcc && _r.decodeVideo(t.hvcc, 0, !0, 0)
                    } else {
                        let e = pr.video_metadata_.sps.data.subarray(4),
                            r = pr.video_metadata_.pps.data.subarray(4);
                        t.avcc = function (e) {
                            let {
                                sps: t,
                                pps: r
                            } = e, i = 8 + t.byteLength + 1 + 2 + r.byteLength, s = !1;
                            const n = Pt.parseSPS$2(t);
                            66 !== t[3] && 77 !== t[3] && 88 !== t[3] && (s = !0, i += 4);
                            let a = new Uint8Array(i);
                            a[0] = 1, a[1] = t[1], a[2] = t[2], a[3] = t[3], a[4] = 255, a[5] = 225;
                            let o = t.byteLength;
                            a[6] = o >>> 8, a[7] = 255 & o;
                            let d = 8;
                            a.set(t, 8), d += o, a[d] = 1;
                            let l = r.byteLength;
                            a[d + 1] = l >>> 8, a[d + 2] = 255 & l, a.set(r, d + 3), d += 3 + l, s && (a[d] = 252 | n.chroma_format_idc, a[d + 1] = 248 | n.bit_depth_luma - 8, a[d + 2] = 248 | n.bit_depth_chroma - 8, a[d + 3] = 0, d += 4);
                            const u = [23, 0, 0, 0, 0],
                                c = new Uint8Array(u.length + a.byteLength);
                            return c.set(u, 0), c.set(a, u.length), c
                        }({
                            sps: e,
                            pps: r
                        }), 0 == pr.video_init_segment_dispatched_ && _r.debug.log(pr.TAG, `Generated first AVCDecoderConfigurationRecord for mimeType: ${t.codec}`), t.avcc && _r.decodeVideo(t.avcc, 0, !0, 0)
                    }
                    pr.video_init_segment_dispatched_ = !0, pr.video_metadata_changed_ = !1;
                    let s = pr.media_info_;
                    s.hasVideo = !0, s.width = t.codecWidth, s.height = t.codecHeight, s.fps = t.frameRate.fps, s.profile = t.profile, s.level = t.level, s.refFrames = e.ref_frames, s.chromaFormat = e.chroma_format_string, s.sarNum = t.sarRatio.width, s.sarDen = t.sarRatio.height, s.videoCodec = t.codec, s.hasAudio && s.audioCodec ? s.mimeType = `video/mp2t; codecs="${s.videoCodec},${s.audioCodec}"` : s.mimeType = `video/mp2t; codecs="${s.videoCodec}"`
                },
                dispatchVideoMediaSegment() {
                    pr.isInitSegmentDispatched() && pr.video_track_.length && pr._preDoDecode()
                },
                dispatchAudioMediaSegment() {
                    pr.isInitSegmentDispatched() && pr.audio_track_.length && pr._preDoDecode()
                },
                dispatchAudioVideoMediaSegment() {
                    pr.isInitSegmentDispatched() && (pr.audio_track_.length || pr.video_track_.length) && pr._preDoDecode()
                },
                parseADTSAACPayload(e, t) {
                    if (pr.has_video_ && !pr.video_init_segment_dispatched_) return;
                    if (pr.aac_last_incomplete_data_) {
                        let t = new Uint8Array(e.byteLength + pr.aac_last_incomplete_data_.byteLength);
                        t.set(pr.aac_last_incomplete_data_, 0), t.set(e, pr.aac_last_incomplete_data_.byteLength), e = t
                    }
                    let r, i;
                    if (null != t && (i = t / pr.timescale_), "aac" === pr.audio_metadata_.codec) {
                        if (null == t && null != pr.audio_last_sample_pts_) r = 1024 / pr.audio_metadata_.sampling_frequency * 1e3, i = pr.audio_last_sample_pts_ + r;
                        else if (null == t) return void _r.debug.warn(pr.TAG, "AAC: Unknown pts");
                        if (pr.aac_last_incomplete_data_ && pr.audio_last_sample_pts_) {
                            r = 1024 / pr.audio_metadata_.sampling_frequency * 1e3;
                            let e = pr.audio_last_sample_pts_ + r;
                            Math.abs(e - i) > 1 && (_r.debug.warn(pr.TAG, `AAC: Detected pts overlapped, expected: ${e}ms, PES pts: ${i}ms`), i = e)
                        }
                    }
                    let s, n = new dt(e),
                        a = null,
                        o = i;
                    for (; null != (a = n.readNextAACFrame());) {
                        r = 1024 / a.sampling_frequency * 1e3;
                        const e = {
                            codec: "aac",
                            data: a
                        };
                        0 == pr.audio_init_segment_dispatched_ ? (pr.audio_metadata_ = {
                            codec: "aac",
                            audio_object_type: a.audio_object_type,
                            sampling_freq_index: a.sampling_freq_index,
                            sampling_frequency: a.sampling_frequency,
                            channel_config: a.channel_config
                        }, pr.dispatchAudioInitSegment(e)) : pr.detectAudioMetadataChange(e) && (pr.dispatchAudioMediaSegment(), pr.dispatchAudioInitSegment(e)), s = o;
                        let t = Math.floor(o);
                        const i = new Uint8Array(a.data.length + 2);
                        i.set([175, 1], 0), i.set(a.data, 2);
                        let n = {
                            payload: i,
                            length: i.byteLength,
                            pts: t,
                            dts: t,
                            type: Z
                        };
                        pr.audio_track_.samples.push(n), pr.audio_track_.length += i.byteLength, o += r
                    }
                    n.hasIncompleteData() && (pr.aac_last_incomplete_data_ = n.getIncompleteData()), s && (pr.audio_last_sample_pts_ = s)
                },
                parseLOASAACPayload(e, t) {
                    if (pr.has_video_ && !pr.video_init_segment_dispatched_) return;
                    if (pr.aac_last_incomplete_data_) {
                        let t = new Uint8Array(e.byteLength + pr.aac_last_incomplete_data_.byteLength);
                        t.set(pr.aac_last_incomplete_data_, 0), t.set(e, pr.aac_last_incomplete_data_.byteLength), e = t
                    }
                    let r, i;
                    if (null != t && (i = t / pr.timescale_), "aac" === pr.audio_metadata_.codec) {
                        if (null == t && null != pr.audio_last_sample_pts_) r = 1024 / pr.audio_metadata_.sampling_frequency * 1e3, i = pr.audio_last_sample_pts_ + r;
                        else if (null == t) return void _r.debug.warn(pr.TAG, "AAC: Unknown pts");
                        if (pr.aac_last_incomplete_data_ && pr.audio_last_sample_pts_) {
                            r = 1024 / pr.audio_metadata_.sampling_frequency * 1e3;
                            let e = pr.audio_last_sample_pts_ + r;
                            Math.abs(e - i) > 1 && (_r.debug.warn(pr.TAG, `AAC: Detected pts overlapped, expected: ${e}ms, PES pts: ${i}ms`), i = e)
                        }
                    }
                    let s, n = new lt(e),
                        a = null,
                        o = i;
                    for (; null != (a = n.readNextAACFrame(pr.loas_previous_frame ? ? void 0));) {
                        pr.loas_previous_frame = a, r = 1024 / a.sampling_frequency * 1e3;
                        const e = {
                            codec: "aac",
                            data: a
                        };
                        0 == pr.audio_init_segment_dispatched_ ? (pr.audio_metadata_ = {
                            codec: "aac",
                            audio_object_type: a.audio_object_type,
                            sampling_freq_index: a.sampling_freq_index,
                            sampling_frequency: a.sampling_frequency,
                            channel_config: a.channel_config
                        }, pr.dispatchAudioInitSegment(e)) : pr.detectAudioMetadataChange(e) && (pr.dispatchAudioMediaSegment(), pr.dispatchAudioInitSegment(e)), s = o;
                        let t = Math.floor(o);
                        const i = new Uint8Array(a.data.length + 2);
                        i.set([175, 1], 0), i.set(a.data, 2);
                        let n = {
                            payload: i,
                            length: i.byteLength,
                            pts: t,
                            dts: t,
                            type: Z
                        };
                        pr.audio_track_.samples.push(n), pr.audio_track_.length += i.byteLength, o += r
                    }
                    n.hasIncompleteData() && (pr.aac_last_incomplete_data_ = n.getIncompleteData()), s && (pr.audio_last_sample_pts_ = s)
                },
                parseAC3Payload(e, t) {},
                parseEAC3Payload(e, t) {},
                parseOpusPayload(e, t) {},
                parseMP3Payload(e, t) {
                    if (pr.has_video_ && !pr.video_init_segment_dispatched_) return;
                    let r = [44100, 48e3, 32e3, 0],
                        i = [22050, 24e3, 16e3, 0],
                        s = [11025, 12e3, 8e3, 0],
                        n = e[1] >>> 3 & 3,
                        a = (6 & e[1]) >> 1;
                    e[2];
                    let o = (12 & e[2]) >>> 2,
                        d = 3 !== (e[3] >>> 6 & 3) ? 2 : 1,
                        l = 0,
                        u = 34;
                    switch (n) {
                        case 0:
                            l = s[o];
                            break;
                        case 2:
                            l = i[o];
                            break;
                        case 3:
                            l = r[o]
                    }
                    switch (a) {
                        case 1:
                            u = 34;
                            break;
                        case 2:
                            u = 33;
                            break;
                        case 3:
                            u = 32
                    }
                    const c = {};
                    c.object_type = u, c.sample_rate = l, c.channel_count = d, c.data = e;
                    const h = {
                        codec: "mp3",
                        data: c
                    };
                    0 == pr.audio_init_segment_dispatched_ ? (pr.audio_metadata_ = {
                        codec: "mp3",
                        object_type: u,
                        sample_rate: l,
                        channel_count: d
                    }, pr.dispatchAudioInitSegment(h)) : pr.detectAudioMetadataChange(h) && (pr.dispatchAudioMediaSegment(), pr.dispatchAudioInitSegment(h));
                    let f = {
                        payload: e,
                        length: e.byteLength,
                        pts: t / pr.timescale_,
                        dts: t / pr.timescale_,
                        type: Z
                    };
                    pr.audio_track_.samples.push(f), pr.audio_track_.length += e.byteLength
                },
                detectAudioMetadataChange(e) {
                    if (e.codec !== pr.audio_metadata_.codec) return _r.debug.log(pr.TAG, `Audio: Audio Codecs changed from ${pr.audio_metadata_.codec} to ${e.codec}`), !0;
                    if ("aac" === e.codec && "aac" === pr.audio_metadata_.codec) {
                        const t = e.data;
                        if (t.audio_object_type !== pr.audio_metadata_.audio_object_type) return _r.debug.log(pr.TAG, `AAC: AudioObjectType changed from ${pr.audio_metadata_.audio_object_type} to ${t.audio_object_type}`), !0;
                        if (t.sampling_freq_index !== pr.audio_metadata_.sampling_freq_index) return _r.debug.log(pr.TAG, `AAC: SamplingFrequencyIndex changed from ${pr.audio_metadata_.sampling_freq_index} to ${t.sampling_freq_index}`), !0;
                        if (t.channel_config !== pr.audio_metadata_.channel_config) return _r.debug.log(pr.TAG, `AAC: Channel configuration changed from ${pr.audio_metadata_.channel_config} to ${t.channel_config}`), !0
                    } else if ("ac-3" === e.codec && "ac-3" === pr.audio_metadata_.codec) {
                        const t = e.data;
                        if (t.sampling_frequency !== pr.audio_metadata_.sampling_frequency) return _r.debug.log(pr.TAG, `AC3: Sampling Frequency changed from ${pr.audio_metadata_.sampling_frequency} to ${t.sampling_frequency}`), !0;
                        if (t.bit_stream_identification !== pr.audio_metadata_.bit_stream_identification) return _r.debug.log(pr.TAG, `AC3: Bit Stream Identification changed from ${pr.audio_metadata_.bit_stream_identification} to ${t.bit_stream_identification}`), !0;
                        if (t.bit_stream_mode !== pr.audio_metadata_.bit_stream_mode) return _r.debug.log(pr.TAG, `AC3: BitStream Mode changed from ${pr.audio_metadata_.bit_stream_mode} to ${t.bit_stream_mode}`), !0;
                        if (t.channel_mode !== pr.audio_metadata_.channel_mode) return _r.debug.log(pr.TAG, `AC3: Channel Mode changed from ${pr.audio_metadata_.channel_mode} to ${t.channel_mode}`), !0;
                        if (t.low_frequency_effects_channel_on !== pr.audio_metadata_.low_frequency_effects_channel_on) return _r.debug.log(pr.TAG, `AC3: Low Frequency Effects Channel On changed from ${pr.audio_metadata_.low_frequency_effects_channel_on} to ${t.low_frequency_effects_channel_on}`), !0
                    } else if ("opus" === e.codec && "opus" === pr.audio_metadata_.codec) {
                        const t = e.meta;
                        if (t.sample_rate !== pr.audio_metadata_.sample_rate) return _r.debug.log(pr.TAG, `Opus: SamplingFrequencyIndex changed from ${pr.audio_metadata_.sample_rate} to ${t.sample_rate}`), !0;
                        if (t.channel_count !== pr.audio_metadata_.channel_count) return _r.debug.log(pr.TAG, `Opus: Channel count changed from ${pr.audio_metadata_.channel_count} to ${t.channel_count}`), !0
                    } else if ("mp3" === e.codec && "mp3" === pr.audio_metadata_.codec) {
                        const t = e.data;
                        if (t.object_type !== pr.audio_metadata_.object_type) return _r.debug.log(pr.TAG, `MP3: AudioObjectType changed from ${pr.audio_metadata_.object_type} to ${t.object_type}`), !0;
                        if (t.sample_rate !== pr.audio_metadata_.sample_rate) return _r.debug.log(pr.TAG, `MP3: SamplingFrequencyIndex changed from ${pr.audio_metadata_.sample_rate} to ${t.sample_rate}`), !0;
                        if (t.channel_count !== pr.audio_metadata_.channel_count) return _r.debug.log(pr.TAG, `MP3: Channel count changed from ${pr.audio_metadata_.channel_count} to ${t.channel_count}`), !0
                    }
                    return !1
                },
                dispatchAudioInitSegment(e) {
                    let t = {
                        type: "audio"
                    };
                    if (t.id = pr.audio_track_.id, t.timescale = 1e3, t.duration = pr.duration_, "aac" === pr.audio_metadata_.codec) {
                        let r = "aac" === e.codec ? e.data : null,
                            i = new Ti(r);
                        t.audioSampleRate = i.sampling_rate, t.audioSampleRateIndex = i.sampling_index, t.channelCount = i.channel_count, t.codec = i.codec_mimetype, t.originalCodec = i.original_codec_mimetype, t.config = i.config, t.refSampleDuration = 1024 / t.audioSampleRate * t.timescale;
                        const s = tt({
                            profile: _r._opt.mseDecodeAudio ? i.object_type : i.original_object_type,
                            sampleRate: t.audioSampleRateIndex,
                            channel: t.channelCount
                        });
                        _r.decodeAudio(s, 0)
                    } else "ac-3" === pr.audio_metadata_.codec || "ec-3" === pr.audio_metadata_.codec || "opus" === pr.audio_metadata_.codec || "mp3" === pr.audio_metadata_.codec && (t.audioSampleRate = pr.audio_metadata_.sample_rate, t.channelCount = pr.audio_metadata_.channel_count, t.codec = "mp3", t.originalCodec = "mp3", t.config = void 0);
                    0 == pr.audio_init_segment_dispatched_ && _r.debug.log(pr.TAG, `Generated first AudioSpecificConfig for mimeType: ${t.codec}`), pr.audio_init_segment_dispatched_ = !0, pr.video_metadata_changed_ = !1;
                    let r = pr.media_info_;
                    r.hasAudio = !0, r.audioCodec = t.originalCodec, r.audioSampleRate = t.audioSampleRate, r.audioChannelCount = t.channelCount, r.hasVideo && r.videoCodec ? r.mimeType = `video/mp2t; codecs="${r.videoCodec},${r.audioCodec}"` : r.mimeType = `video/mp2t; codecs="${r.audioCodec}"`
                },
                dispatchPESPrivateDataDescriptor(e, t, r) {},
                parsePESPrivateDataPayload(e, t, r, i, s) {
                    let n = new Ui;
                    if (n.pid = i, n.stream_id = s, n.len = e.byteLength, n.data = e, null != t) {
                        let e = Math.floor(t / pr.timescale_);
                        n.pts = e
                    } else n.nearest_pts = pr.getNearestTimestampMilliseconds();
                    if (null != r) {
                        let e = Math.floor(r / pr.timescale_);
                        n.dts = e
                    }
                },
                parseTimedID3MetadataPayload(e, t, r, i, s) {
                    _r.debug.log(pr.TAG, `Timed ID3 Metadata: pid=${i}, pts=${t}, dts=${r}, stream_id=${s}`)
                },
                parseSynchronousKLVMetadataPayload(e, t, r, i, s) {
                    _r.debug.log(pr.TAG, `Synchronous KLV Metadata: pid=${i}, pts=${t}, dts=${r}, stream_id=${s}`)
                },
                parseAsynchronousKLVMetadataPayload(e, t, r) {
                    _r.debug.log(pr.TAG, `Asynchronous KLV Metadata: pid=${t}, stream_id=${r}`)
                },
                parseSMPTE2038MetadataPayload(e, t, r, i, s) {
                    _r.debug.log(pr.TAG, `SMPTE 2038 Metadata: pid=${i}, pts=${t}, dts=${r}, stream_id=${s}`)
                },
                getNearestTimestampMilliseconds() {
                    if (null != pr.audio_last_sample_pts_) return Math.floor(pr.audio_last_sample_pts_);
                    if (null != pr.last_pcr_) {
                        return Math.floor(pr.last_pcr_ / 300 / pr.timescale_)
                    }
                },
                _preDoDecode() {
                    const e = pr.video_track_,
                        t = pr.audio_track_;
                    let r = e.samples;
                    t.samples.length > 0 && (r = e.samples.concat(t.samples), r = r.sort(((e, t) => e.dts - t.dts))), r.forEach((e => {
                        const t = new Uint8Array(e.payload);
                        delete e.payload, e.type === J ? pr._doDecodeVideo({
                            ...e,
                            payload: t
                        }) : e.type === Z && pr._doDecodeAudio({
                            ...e,
                            payload: t
                        })
                    })), e.samples = [], e.length = 0, t.samples = [], t.length = 0
                },
                _doDecodeVideo(e) {
                    const t = new Uint8Array(e.payload);
                    let r = null;
                    r = e.isHevc ? Qt(t, e.isIFrame) : Rt(t, e.isIFrame), e.isIFrame && _r.calcIframeIntervalTimestamp(e.dts);
                    let i = _r.cryptoPayload(r, e.isIFrame);
                    _r.decode(i, {
                        type: J,
                        ts: e.dts,
                        isIFrame: e.isIFrame,
                        cts: e.cts
                    })
                },
                _doDecodeAudio(e) {
                    const t = new Uint8Array(e.payload);
                    let r = t;
                    St(_r._opt.m7sCryptoAudio) && (r = _r.cryptoPayloadAudio(t)), _r.decode(r, {
                        type: Z,
                        ts: e.dts,
                        isIFrame: !1,
                        cts: 0
                    })
                }
            },
            mr = null;
        self.Worker && self.MediaSource && "canConstructInDedicatedWorker" in self.MediaSource && !0 === self.MediaSource.canConstructInDedicatedWorker && (mr = {
            TAG: "worker MediaSource",
            _resetInIt() {
                mr.isAvc = null, mr.isAAC = null, mr.videoInfo = {}, mr.videoMeta = {}, mr.audioMeta = {}, mr.sourceBuffer = null, mr.audioSourceBuffer = null, mr.hasInit = !1, mr.hasAudioInit = !1, mr.isAudioInitInfo = !1, mr.videoMimeType = "", mr.audioMimeType = "", mr.cacheTrack = {}, mr.cacheAudioTrack = {}, mr.timeInit = !1, mr.sequenceNumber = 0, mr.audioSequenceNumber = 0, mr.firstRenderTime = null, mr.firstAudioTime = null, mr.mediaSourceAppendBufferFull = !1, mr.mediaSourceAppendBufferError = !1, mr.mediaSourceAddSourceBufferError = !1, mr.mediaSourceBufferError = !1, mr.mediaSourceError = !1, mr.prevTimestamp = null, mr.decodeDiffTimestamp = null, mr.prevDts = null, mr.prevAudioDts = null, mr.prevPayloadBufferSize = 0, mr.isWidthOrHeightChanged = !1, mr.prevTs = null, mr.prevAudioTs = null, mr.eventListenList = [], mr.pendingRemoveRanges = [], mr.pendingSegments = [], mr.pendingAudioRemoveRanges = [], mr.pendingAudioSegments = [], mr.supportVideoFrameCallbackHandle = null, mr.audioSourceBufferCheckTimeout = null, mr.audioSourceNoDataCheckTimeout = null, mr.hasPendingEos = !1, mr.$video = {
                    currentTime: 0,
                    readyState: 0
                }
            },
            init() {
                mr.events = new si, mr._resetInIt(), mr.mediaSource = new self.MediaSource, mr.isDecodeFirstIIframe = !!Et(_r._opt.checkFirstIFrame), mr._bindMediaSourceEvents()
            },
            destroy() {
                mr.stop(), mr._clearAudioSourceBufferCheckTimeout(), mr.eventListenList && mr.eventListenList.length && (mr.eventListenList.forEach((e => e())), mr.eventListenList = []), mr._resetInIt()
            },
            getState: () => mr.mediaSource && mr.mediaSource.readyState,
            isStateOpen: () => mr.getState() === Fe,
            isStateClosed: () => mr.getState() === Le,
            isStateEnded: () => mr.getState() === Ie,
            _bindMediaSourceEvents() {
                const {
                    proxy: e
                } = mr.events, t = e(mr.mediaSource, Me, (() => {
                    _r.debug.log(mr.TAG, "sourceOpen"), mr._onMediaSourceSourceOpen()
                })), r = e(mr.mediaSource, Re, (() => {
                    _r.debug.log(mr.TAG, "sourceClose")
                })), i = e(mr.mediaSource, ze, (() => {
                    _r.debug.log(mr.TAG, "sourceended")
                }));
                mr.eventListenList.push(t, r, i)
            },
            _onMediaSourceSourceOpen() {
                mr.sourceBuffer || (_r.debug.log(mr.TAG, "onMediaSourceSourceOpen() sourceBuffer is null and next init"), mr._initSourceBuffer()), mr.audioSourceBuffer || (_r.debug.log(mr.TAG, "onMediaSourceSourceOpen() audioSourceBuffer is null and next init"), mr._initAudioSourceBuffer()), mr._hasPendingSegments() && mr._doAppendSegments()
            },
            decodeVideo(e, t, r, i) {
                if (_r.isDestroyed) _r.debug.warn(mr.TAG, "decodeVideo() and decoder is destroyed");
                else if (Et(mr.hasInit))
                    if (r && e[1] === Ge.sequenceHeader) {
                        const i = 15 & e[0];
                        if (i === Ae && Et(function () {
                                let e = !1;
                                return "MediaSource" in self && (self.MediaSource.isTypeSupported(Pe.hev) || self.MediaSource.isTypeSupported(Pe.hev2) || self.MediaSource.isTypeSupported(Pe.hev3) || self.MediaSource.isTypeSupported(Pe.hev4) || self.MediaSource.isTypeSupported(Pe.hev5)) && (e = !0), e
                            }())) return void mr.emitError(we.mediaSourceH265NotSupport);
                        mr.videoInfo.codec = i, postMessage({
                            cmd: T,
                            code: i
                        });
                        const s = new Uint8Array(e);
                        postMessage({
                            cmd: k,
                            buffer: s,
                            codecId: i
                        }, [s.buffer]), mr.hasInit = mr._decodeConfigurationRecord(e, t, r, i)
                    } else _r.debug.warn(mr.TAG, `decodeVideo has not init , isIframe is ${r} , payload is ${e[1]}`);
                else if (!mr.isDecodeFirstIIframe && r && (mr.isDecodeFirstIIframe = !0), mr.isDecodeFirstIIframe) {
                    if (r && 0 === e[1]) {
                        const t = 15 & e[0];
                        let r = {};
                        if (t === Ee) {
                            r = Ft(e.slice(5))
                        } else t === Ae && (r = Kt(e));
                        const i = mr.videoInfo;
                        i && i.codecWidth && i.codecWidth && r && r.codecWidth && r.codecHeight && (r.codecWidth !== i.codecWidth || r.codecHeight !== i.codecWidth) && (_r.debug.warn(mr.TAG, `\n                                decodeVideo: video width or height is changed,\n                                old width is ${i.codecWidth}, old height is ${i.codecWidth},\n                                new width is ${r.codecWidth}, new height is ${r.codecHeight},\n                                and emit change event`), mr.isWidthOrHeightChanged = !0, mr.emitError(we.mseWidthOrHeightChange))
                    }
                    if (mr.isWidthOrHeightChanged) return void _r.debug.warn(mr.TAG, "decodeVideo: video width or height is changed, and return");
                    if (wt(e)) return void _r.debug.warn(mr.TAG, "decodeVideo and payload is video sequence header so drop this frame");
                    if (e.byteLength < 12) return void _r.debug.warn(mr.TAG, `decodeVideo and payload is too small , payload length is ${e.byteLength}`);
                    let s = t;
                    if (_r.isPlayer) {
                        if (null === mr.firstRenderTime && (mr.firstRenderTime = t, postMessage({
                                cmd: K,
                                value: mr.firstRenderTime
                            })), s = t - mr.firstRenderTime, s < 0 && (_r.debug.warn(mr.TAG, `decodeVideo\n                                 local dts is < 0 , ts is ${t} and prevTs is ${mr.prevTs},\n                                 firstRenderTime is ${mr.firstRenderTime} and mseCorrectTimeDuration is ${_r._opt.mseCorrectTimeDuration}`), s = null === mr.prevDts ? 0 : mr.prevDts + _r._opt.mseCorrectTimeDuration, mr._checkTsIsMaxDiff(t))) return _r.debug.warn(mr.TAG, `decodeVideo is max diff , ts is ${t} and prevTs is ${mr.prevTs}, diff is ${mr.prevTs-t}`), void mr.emitError(we.mediaSourceTsIsMaxDiff);
                        if (null !== mr.prevDts && s <= mr.prevDts) {
                            if (_r.debug.warn(mr.TAG, `\n                                decodeVideo dts is less than(or equal) prev dts ,\n                                dts is ${s} and prev dts is ${mr.prevDts} ，\n                                and now ts is ${t} and prev ts is ${mr.prevTs} ，\n                                and diff is ${t-mr.prevTs} and firstRenderTime is ${mr.firstRenderTime} and isIframe is ${r}，\n                                and mseCorrectTimeDuration is ${_r._opt.mseCorrectTimeDuration},\n                                and prevPayloadBufferSize is ${mr.prevPayloadBufferSize} and payload size is ${e.byteLength}`), s === mr.prevDts && mr.prevPayloadBufferSize === e.byteLength) return void _r.debug.warn(mr.TAG, "decodeVideo dts is equal to prev dts and payload size is equal to prev payload size so drop this frame");
                            if (s = mr.prevDts + _r._opt.mseCorrectTimeDuration, mr._checkTsIsMaxDiff(t)) return _r.debug.warn(mr.TAG, `decodeVideo is max diff , ts is ${t} and prevTs is ${mr.prevTs}, diff is ${mr.prevTs-t} and emit replay`), void mr.emitError(we.mediaSourceTsIsMaxDiff)
                        }
                    }
                    _r.isPlayer ? mr._decodeVideo(e, s, r, i, t) : _r.isPlayback, mr.prevDts = s, mr.prevPayloadBufferSize = e.byteLength, mr.prevTs = t
                } else _r.debug.log(mr.TAG, "decodeVideo first frame is not iFrame")
            },
            decodeAudio(e, t) {
                if (_r.isDestroyed) _r.debug.warn(mr.TAG, "decodeAudio() and decoder is destroyed");
                else if (Et(mr.hasAudioInit)) mr.hasAudioInit = mr._decodeAudioConfigurationRecord(e, t);
                else {
                    let r = t;
                    if (rt(e)) return void _r.debug.log(mr.TAG, "decodeAudio and has already initialized and payload is aac codec packet so drop this frame");
                    if (mr._clearAudioNoDataCheckTimeout(), _r.isPlayer) {
                        if (null === mr.firstAudioTime && (mr.firstAudioTime = t, null !== mr.firstRenderTime && null !== mr.prevTs)) {
                            const e = Math.abs(mr.firstRenderTime - mr.prevTs);
                            e > 300 && (mr.firstAudioTime -= e, _r.debug.warn(mr.TAG, `video\n                                    firstAudioTime is ${mr.firstRenderTime} and current time is ${mr.prevTs}\n                                    play time is ${e} and firstAudioTime ${t} - ${e} = ${mr.firstAudioTime}`))
                        }
                        r = t - mr.firstAudioTime, r < 0 && (_r.debug.warn(mr.TAG, `decodeAudio\n                             local dts is < 0 , ts is ${t} and prevTs is ${mr.prevAudioTs},\n                             firstAudioTime is ${mr.firstAudioTime}`), r = null === mr.prevAudioDts ? 0 : mr.prevAudioDts + _r._opt.mseCorrectAudioTimeDuration), null !== mr.prevAudioTs && r <= mr.prevAudioDts && (_r.debug.warn(mr.TAG, `\n                            decodeAudio dts is less than(or equal) prev dts ,\n                            dts is ${r} and prev dts is ${mr.prevAudioDts} ，\n                            and now ts is ${t} and prev ts is ${mr.prevAudioTs} ，\n                            and diff is ${t-mr.prevAudioTs}`), r = mr.prevAudioDts + _r._opt.mseCorrectAudioTimeDuration)
                    }
                    _r.isPlayer ? mr._decodeAudio(e, r, t) : _r.isPlayback, mr.prevAudioTs = t, mr.prevAudioDts = r
                }
            },
            _checkTsIsMaxDiff: e => mr.prevTs > 0 && e < mr.prevTs && mr.prevTs - e > y,
            _decodeConfigurationRecord(e, t, r, i) {
                let s = e.slice(5),
                    n = {};
                if (i === Ee ? n = Ft(s) : i === Ae && (n = Xt(s)), mr.videoInfo.width = n.codecWidth, mr.videoInfo.height = n.codecHeight, 0 === n.codecWidth && 0 === n.codecHeight) return _r.debug.warn(mr.TAG, "_decodeConfigurationRecord error", JSON.stringify(n)), mr.emitError(we.mediaSourceDecoderConfigurationError), !1;
                const a = {
                        id: qe,
                        type: "video",
                        timescale: 1e3,
                        duration: 0,
                        avcc: s,
                        codecWidth: n.codecWidth,
                        codecHeight: n.codecHeight,
                        videoType: n.videoType
                    },
                    o = ni.generateInitSegment(a);
                mr.isAvc = i === Ee;
                let d = n.codec;
                return mr.videoMimeType = d ? `video/mp4; codecs="${n.codec}"` : mr.isAvc ? Pe.avc : Pe.hev, postMessage({
                    cmd: w,
                    w: n.codecWidth,
                    h: n.codecHeight
                }), mr._initSourceBuffer(), mr.appendBuffer(o.buffer), mr.sequenceNumber = 0, mr.cacheTrack = {}, mr.timeInit = !1, !0
            },
            _decodeAudioConfigurationRecord(e, t) {
                const r = e[0] >> 4,
                    i = e[0] >> 1 & 1,
                    s = r === Be.MP3,
                    n = r === Be.AAC;
                if (Et(n || s)) return _r.debug.warn(mr.TAG, `_decodeAudioConfigurationRecord audio codec is not support , codecId is ${r} ant auto wasm decode`), mr.emitError(we.mediaSourceAudioG711NotSupport), !1;
                const a = {
                    id: Ye,
                    type: "audio",
                    timescale: 1e3
                };
                let o = {};
                if (rt(e)) {
                    if (o = function (e) {
                            let t = new Uint8Array(e),
                                r = null,
                                i = 0,
                                s = 0,
                                n = 0,
                                a = null;
                            if (i = s = t[0] >>> 3, n = (7 & t[0]) << 1 | t[1] >>> 7, n < 0 || n >= ot.length) return void console.error("Flv: AAC invalid sampling frequency index!");
                            let o = ot[n],
                                d = (120 & t[1]) >>> 3;
                            if (d < 0 || d >= 8) return void console.log("Flv: AAC invalid channel configuration");
                            5 === i && (a = (7 & t[1]) << 1 | t[2] >>> 7, t[2]);
                            let l = self.navigator.userAgent.toLowerCase();
                            return -1 !== l.indexOf("firefox") ? n >= 6 ? (i = 5, r = new Array(4), a = n - 3) : (i = 2, r = new Array(2), a = n) : -1 !== l.indexOf("android") ? (i = 2, r = new Array(2), a = n) : (i = 5, a = n, r = new Array(4), n >= 6 ? a = n - 3 : 1 === d && (i = 2, r = new Array(2), a = n)), r[0] = i << 3, r[0] |= (15 & n) >>> 1, r[1] = (15 & n) << 7, r[1] |= (15 & d) << 3, 5 === i && (r[1] |= (15 & a) >>> 1, r[2] = (1 & a) << 7, r[2] |= 8, r[3] = 0), {
                                audioType: "aac",
                                config: r,
                                sampleRate: o,
                                channelCount: d,
                                objectType: i,
                                codec: "mp4a.40." + i,
                                originalCodec: "mp4a.40." + s
                            }
                        }(e.slice(2)), !o) return !1;
                    a.audioSampleRate = o.sampleRate, a.channelCount = o.channelCount, a.config = o.config, a.refSampleDuration = 1024 / a.audioSampleRate * a.timescale
                } else {
                    if (!s) return !1;
                    if (o = function (e) {
                            if (e.length < 4) return void console.error("Invalid MP3 packet, header missing!");
                            let t = new Uint8Array(e.buffer),
                                r = null;
                            if (255 !== t[0]) return void console.error("Invalid MP3 packet, first byte != 0xFF ");
                            let i = t[1] >>> 3 & 3,
                                s = (6 & t[1]) >> 1,
                                n = (240 & t[2]) >>> 4,
                                a = (12 & t[2]) >>> 2,
                                o = 3 != (t[3] >>> 6 & 3) ? 2 : 1,
                                d = 0,
                                l = 0;
                            switch (i) {
                                case 0:
                                    d = di[a];
                                    break;
                                case 2:
                                    d = oi[a];
                                    break;
                                case 3:
                                    d = ai[a]
                            }
                            switch (s) {
                                case 1:
                                    n < ci.length && (l = ci[n]);
                                    break;
                                case 2:
                                    n < ui.length && (l = ui[n]);
                                    break;
                                case 3:
                                    n < li.length && (l = li[n])
                            }
                            return r = {
                                bitRate: l,
                                samplingRate: d,
                                channelCount: o,
                                codec: "mp3",
                                originalCodec: "mp3",
                                audioType: "mp3"
                            }, r
                        }(e), !o) return !1;
                    a.audioSampleRate = o.samplingRate, a.channelCount = o.channelCount, a.refSampleDuration = 1152 / a.audioSampleRate * a.timescale
                }
                a.codec = o.codec, a.duration = 0;
                let d = "mp4",
                    l = o.codec,
                    u = null;
                s && Et(function () {
                    const e = window.navigator.userAgent.toLowerCase();
                    return /firefox/i.test(e)
                }()) ? (d = "mpeg", l = "", u = new Uint8Array) : u = ni.generateInitSegment(a);
                let c = `${a.type}/${d}`;
                return l && l.length > 0 && (c += `;codecs=${l}`), Et(mr.isAudioInitInfo) && (or = r === Be.AAC ? i ? 16 : 8 : 0 === i ? 8 : 16, postMessage({
                    cmd: U,
                    code: r
                }), postMessage({
                    cmd: A,
                    sampleRate: a.audioSampleRate,
                    channels: a.channelCount,
                    depth: or
                }), mr.isAudioInitInfo = !0), mr.audioMimeType = c, mr.isAAC = n, mr._initAudioSourceBuffer(), mr.appendAudioBuffer(u.buffer), !0
            },
            _initSourceBuffer() {
                const {
                    proxy: e
                } = mr.events;
                if (null === mr.sourceBuffer && null !== mr.mediaSource && mr.isStateOpen() && mr.videoMimeType) {
                    try {
                        mr.sourceBuffer = mr.mediaSource.addSourceBuffer(mr.videoMimeType), _r.debug.log(mr.TAG, "_initSourceBuffer() mseDecoder.mediaSource.addSourceBuffer()", mr.videoMimeType)
                    } catch (e) {
                        return _r.debug.error(mr.TAG, "appendBuffer() mseDecoder.mediaSource.addSourceBuffer()", e.code, e), mr.emitError(we.mseAddSourceBufferError, e.code), void(mr.mediaSourceAddSourceBufferError = !0)
                    }
                    if (mr.sourceBuffer) {
                        const t = e(mr.sourceBuffer, "error", (e => {
                                mr.mediaSourceBufferError = !0, _r.debug.error(mr.TAG, "mseSourceBufferError mseDecoder.sourceBuffer", e), mr.emitError(we.mseSourceBufferError, e.code)
                            })),
                            r = e(mr.sourceBuffer, "updateend", (() => {
                                mr._hasPendingRemoveRanges() ? mr._doRemoveRanges() : mr._hasPendingSegments() ? mr._doAppendSegments() : mr.hasPendingEos && (_r.debug.log(mr.TAG, "videoSourceBuffer updateend and hasPendingEos is true, next endOfStream()"), mr.endOfStream())
                            }));
                        mr.eventListenList.push(t, r)
                    }
                } else _r.debug.log(mr.TAG, `_initSourceBuffer and mseDecoder.isStateOpen is ${mr.isStateOpen()} and mseDecoder.isAvc === null is ${null===mr.isAvc}`)
            },
            _initAudioSourceBuffer() {
                const {
                    proxy: e
                } = mr.events;
                if (null === mr.audioSourceBuffer && null !== mr.mediaSource && mr.isStateOpen() && mr.audioMimeType) {
                    try {
                        mr.audioSourceBuffer = mr.mediaSource.addSourceBuffer(mr.audioMimeType), mr._clearAudioSourceBufferCheckTimeout(), _r.debug.log(mr.TAG, "_initAudioSourceBuffer() mseDecoder.mediaSource.addSourceBuffer()", mr.audioMimeType)
                    } catch (e) {
                        return _r.debug.error(mr.TAG, "appendAudioBuffer() mseDecoder.mediaSource.addSourceBuffer()", e.code, e), mr.emitError(we.mseAddSourceBufferError, e.code), void(mr.mediaSourceAddSourceBufferError = !0)
                    }
                    if (mr.audioSourceBuffer) {
                        const t = e(mr.audioSourceBuffer, "error", (e => {
                                mr.mediaSourceBufferError = !0, _r.debug.error(mr.TAG, "mseSourceBufferError mseDecoder.audioSourceBuffer", e), mr.emitError(we.mseSourceBufferError, e.code)
                            })),
                            r = e(mr.audioSourceBuffer, "updateend", (() => {
                                mr._hasPendingRemoveRanges() ? mr._doRemoveRanges() : mr._hasPendingSegments() ? mr._doAppendSegments() : mr.hasPendingEos && (_r.debug.log(mr.TAG, "audioSourceBuffer updateend and hasPendingEos is true, next endOfStream()"), mr.endOfStream())
                            }));
                        mr.eventListenList.push(t, r), null === mr.audioSourceNoDataCheckTimeout && (mr.audioSourceNoDataCheckTimeout = setTimeout((() => {
                            mr._clearAudioNoDataCheckTimeout(), mr.emitError(we.mediaSourceAudioNoDataTimeout)
                        }), 1e3))
                    }
                } else _r.debug.log(mr.TAG, `_initAudioSourceBuffer and mseDecoder.isStateOpen is ${mr.isStateOpen()} and mseDecoder.audioMimeType is ${mr.audioMimeType}`)
            },
            _decodeVideo(e, t, r, i, s) {
                let n = e.slice(5),
                    a = n.byteLength;
                if (0 === a) return void _r.debug.warn(mr.TAG, "_decodeVideo payload bytes is 0 and return");
                let o = (new Date).getTime(),
                    d = !1;
                mr.prevTimestamp || (mr.prevTimestamp = o, d = !0);
                const l = o - mr.prevTimestamp;
                if (mr.decodeDiffTimestamp = l, l > 500 && !d && _r.isPlayer && _r.debug.warn(mr.TAG, `_decodeVideo now time is ${o} and prev time is ${mr.prevTimestamp}, diff time is ${l} ms`), mr.cacheTrack.id && t >= mr.cacheTrack.dts) {
                    let e = 8 + mr.cacheTrack.size,
                        r = new Uint8Array(e);
                    r[0] = e >>> 24 & 255, r[1] = e >>> 16 & 255, r[2] = e >>> 8 & 255, r[3] = 255 & e, r.set(ni.types.mdat, 4), r.set(mr.cacheTrack.data, 8), mr.cacheTrack.duration = t - mr.cacheTrack.dts;
                    let i = ni.moof(mr.cacheTrack, mr.cacheTrack.dts);
                    mr.cacheTrack = {};
                    let s = new Uint8Array(i.byteLength + r.byteLength);
                    s.set(i, 0), s.set(r, i.byteLength), mr.appendBuffer(s.buffer)
                } else _r.debug.log(mr.TAG, `timeInit set false , cacheTrack = {} now dts is ${t}, and ts is ${s} cacheTrack dts is ${mr.cacheTrack&&mr.cacheTrack.dts}`), mr.timeInit = !1, mr.cacheTrack = {};
                mr.cacheTrack || (mr.cacheTrack = {}), mr.cacheTrack.id = qe, mr.cacheTrack.sequenceNumber = ++mr.sequenceNumber, mr.cacheTrack.size = a, mr.cacheTrack.dts = t, mr.cacheTrack.cts = i, mr.cacheTrack.isKeyframe = r, mr.cacheTrack.data = n, mr.cacheTrack.flags = {
                    isLeading: 0,
                    dependsOn: r ? 2 : 1,
                    isDependedOn: r ? 1 : 0,
                    hasRedundancy: 0,
                    isNonSync: r ? 0 : 1
                }, mr.prevTimestamp = (new Date).getTime()
            },
            _decodeAudio(e, t, r) {
                let i = mr.isAAC ? e.slice(2) : e.slice(1),
                    s = i.byteLength;
                if (mr.cacheAudioTrack.id && t >= mr.cacheAudioTrack.dts) {
                    let e = 8 + mr.cacheAudioTrack.size,
                        r = new Uint8Array(e);
                    r[0] = e >>> 24 & 255, r[1] = e >>> 16 & 255, r[2] = e >>> 8 & 255, r[3] = 255 & e, r.set(ni.types.mdat, 4), r.set(mr.cacheAudioTrack.data, 8), mr.cacheAudioTrack.duration = t - mr.cacheAudioTrack.dts;
                    let i = ni.moof(mr.cacheAudioTrack, mr.cacheAudioTrack.dts);
                    mr.cacheAudioTrack = {};
                    let s = new Uint8Array(i.byteLength + r.byteLength);
                    s.set(i, 0), s.set(r, i.byteLength), mr.appendAudioBuffer(s.buffer)
                } else mr.cacheAudioTrack = {};
                mr.cacheAudioTrack || (mr.cacheAudioTrack = {}), mr.cacheAudioTrack.id = Ye, mr.cacheAudioTrack.sequenceNumber = ++mr.audioSequenceNumber, mr.cacheAudioTrack.size = s, mr.cacheAudioTrack.dts = t, mr.cacheAudioTrack.cts = 0, mr.cacheAudioTrack.data = i, mr.cacheAudioTrack.flags = {
                    isLeading: 0,
                    dependsOn: 1,
                    isDependedOn: 0,
                    hasRedundancy: 0
                }
            },
            appendBuffer(e) {
                _r.isDestroyed ? _r.debug.warn(mr.TAG, "appendBuffer() player is destroyed") : mr.mediaSourceAddSourceBufferError ? _r.debug.warn(mr.TAG, "mseDecoder.mediaSourceAddSourceBufferError is true") : mr.mediaSourceAppendBufferFull ? _r.debug.warn(mr.TAG, "mseDecoder.mediaSourceAppendBufferFull is true") : mr.mediaSourceAppendBufferError ? _r.debug.warn(mr.TAG, "mseDecoder.mediaSourceAppendBufferError is true") : mr.mediaSourceBufferError ? _r.debug.warn(mr.TAG, "mseDecoder.mediaSourceBufferError is true") : (mr.pendingSegments.push(e), mr.sourceBuffer && (_r._opt.mseAutoCleanupSourceBuffer && mr._needCleanupSourceBuffer() && mr._doCleanUpSourceBuffer(), Et(mr.getSourceBufferUpdating()) && mr.isStateOpen() && Et(mr._hasPendingRemoveRanges())) ? mr._doAppendSegments() : mr.isStateClosed() ? (mr.mediaSourceBufferError = !0, mr.emitError(we.mseSourceBufferError, "mediaSource is not attached to video or mediaSource is closed")) : mr.isStateEnded() ? (mr.mediaSourceBufferError = !0, mr.emitError(we.mseSourceBufferError, "mediaSource is end")) : mr._hasPendingRemoveRanges() && _r.debug.log(mr.TAG, `video has pending remove ranges and video length is ${mr.pendingRemoveRanges.length}, audio length is ${mr.pendingAudioRemoveRanges.length}`))
            },
            appendAudioBuffer(e) {
                _r.isDestroyed ? _r.debug.warn(mr.TAG, "appendAudioBuffer() player is destroyed") : mr.mediaSourceAddSourceBufferError ? _r.debug.warn(mr.TAG, "mseDecoder.mediaSourceAddSourceBufferError is true") : mr.mediaSourceAppendBufferFull ? _r.debug.warn(mr.TAG, "mseDecoder.mediaSourceAppendBufferFull is true") : mr.mediaSourceAppendBufferError ? _r.debug.warn(mr.TAG, "mseDecoder.mediaSourceAppendBufferError is true") : mr.mediaSourceBufferError ? _r.debug.warn(mr.TAG, "mseDecoder.mediaSourceBufferError is true") : (mr.pendingAudioSegments.push(e), mr.audioSourceBuffer && (_r._opt.mseAutoCleanupSourceBuffer && mr._needCleanupSourceBuffer() && mr._doCleanUpSourceBuffer(), Et(mr.getAudioSourceBufferUpdating()) && mr.isStateOpen() && Et(mr._hasPendingRemoveRanges())) ? mr._doAppendSegments() : mr.isStateClosed() ? (mr.mediaSourceBufferError = !0, mr.emitError(we.mseSourceBufferError, "mediaSource is not attached to video or mediaSource is closed")) : mr.isStateEnded() ? (mr.mediaSourceBufferError = !0, mr.emitError(we.mseSourceBufferError, "mediaSource is end")) : mr._hasPendingRemoveRanges() && _r.debug.log(mr.TAG, `audio has pending remove ranges and video length is ${mr.pendingRemoveRanges.length}, audio length is ${mr.pendingAudioRemoveRanges.length}`))
            },
            getSourceBufferUpdating: () => mr.sourceBuffer && mr.sourceBuffer.updating,
            getAudioSourceBufferUpdating: () => mr.audioSourceBuffer && mr.audioSourceBuffer.updating,
            stop() {
                mr.abortSourceBuffer(), mr.removeSourceBuffer()
            },
            clearUpAllSourceBuffer() {
                if (mr.sourceBuffer) {
                    const e = mr.sourceBuffer.buffered;
                    for (let t = 0; t < e.length; t++) {
                        let r = e.start(t),
                            i = e.end(t);
                        mr.pendingRemoveRanges.push({
                            start: r,
                            end: i
                        })
                    }
                    Et(mr.getSourceBufferUpdating()) && mr._doRemoveRanges()
                }
                if (mr.audioSourceBuffer) {
                    const e = mr.audioSourceBuffer.buffered;
                    for (let t = 0; t < e.length; t++) {
                        let r = e.start(t),
                            i = e.end(t);
                        mr.pendingAudioRemoveRanges.push({
                            start: r,
                            end: i
                        })
                    }
                    Et(mr.getAudioSourceBufferUpdating()) && mr._doRemoveRanges()
                }
            },
            endOfStream() {
                if (mr.isStateOpen())
                    if (mr.getSourceBufferUpdating() || mr.getAudioSourceBufferUpdating()) _r.debug.log(mr.TAG, "endOfStream() has pending eos"), mr.hasPendingEos = !0;
                    else {
                        mr.hasPendingEos = !1;
                        try {
                            _r.debug.log(mr.TAG, "endOfStream()"), mr.mediaSource.endOfStream()
                        } catch (e) {
                            _r.debug.warn(mr.TAG, "endOfStream() error", e)
                        }
                    }
            },
            abortSourceBuffer() {
                if (mr.isStateOpen) {
                    if (mr.sourceBuffer) try {
                        _r.debug.log(mr.TAG, "abortSourceBuffer() abort sourceBuffer"), mr.sourceBuffer.abort()
                    } catch (e) {}
                    if (mr.audioSourceBuffer) try {
                        _r.debug.log(mr.TAG, "abortSourceBuffer() abort audioSourceBuffer"), mr.audioSourceBuffer.abort()
                    } catch (e) {}
                }
                mr.sourceBuffer = null, mr.audioSourceBuffer = null
            },
            removeSourceBuffer() {
                if (!mr.isStateClosed() && mr.mediaSource) {
                    if (mr.sourceBuffer) try {
                        _r.debug.log(mr.TAG, "removeSourceBuffer() sourceBuffer"), mr.mediaSource.removeSourceBuffer(mr.sourceBuffer)
                    } catch (e) {
                        _r.debug.warn(mr.TAG, "removeSourceBuffer() sourceBuffer error", e)
                    }
                    if (mr.audioSourceBuffer) try {
                        _r.debug.log(mr.TAG, "removeSourceBuffer() audioSourceBuffer"), mr.mediaSource.removeSourceBuffer(mr.audioSourceBuffer)
                    } catch (e) {
                        _r.debug.warn(mr.TAG, "removeSourceBuffer() audioSourceBuffer error", e)
                    }
                }
            },
            _hasPendingSegments: () => mr.pendingSegments.length > 0 || mr.pendingAudioSegments.length > 0,
            getPendingSegmentsLength: () => mr.pendingSegments.length,
            _handleUpdatePlaybackRate() {},
            _doAppendSegments() {
                if (mr.isStateClosed() || mr.isStateEnded()) _r.debug.log(mr.TAG, "_doAppendSegments() mediaSource is closed or ended and return");
                else if (null !== mr.sourceBuffer) {
                    if (mr.needInitAudio() && null === mr.audioSourceBuffer) return _r.debug.log(mr.TAG, "_doAppendSegments() audioSourceBuffer is null and need init audio source buffer"), void(null === mr.audioSourceBufferCheckTimeout && (mr.audioSourceBufferCheckTimeout = setTimeout((() => {
                        mr._clearAudioSourceBufferCheckTimeout(), mr.emitError(we.mediaSourceAudioInitTimeout)
                    }), 1e3)));
                    if (Et(mr.getSourceBufferUpdating()) && mr.pendingSegments.length > 0) {
                        const e = mr.pendingSegments.shift();
                        try {
                            mr.sourceBuffer.appendBuffer(e)
                        } catch (e) {
                            _r.debug.error(mr.TAG, "mseDecoder.sourceBuffer.appendBuffer()", e.code, e), 22 === e.code ? (mr.stop(), mr.mediaSourceAppendBufferFull = !0, mr.emitError(we.mediaSourceFull)) : 11 === e.code ? (mr.stop(), mr.mediaSourceAppendBufferError = !0, mr.emitError(we.mediaSourceAppendBufferError)) : (mr.stop(), mr.mediaSourceBufferError = !0, mr.emitError(we.mseSourceBufferError, e.code))
                        }
                    }
                    if (Et(mr.getAudioSourceBufferUpdating()) && mr.pendingAudioSegments.length > 0) {
                        const e = mr.pendingAudioSegments.shift();
                        try {
                            mr.audioSourceBuffer.appendBuffer(e)
                        } catch (e) {
                            _r.debug.error(mr.TAG, "mseDecoder.audioSourceBuffer.appendBuffer()", e.code, e), 22 === e.code ? (mr.stop(), mr.mediaSourceAppendBufferFull = !0, mr.emitError(we.mediaSourceFull)) : 11 === e.code ? (mr.stop(), mr.mediaSourceAppendBufferError = !0, mr.emitError(we.mediaSourceAppendBufferError)) : (mr.stop(), mr.mediaSourceBufferError = !0, mr.emitError(we.mseSourceBufferError, e.code))
                        }
                    }
                } else _r.debug.log(mr.TAG, "_doAppendSegments() sourceBuffer is null and wait init and return")
            },
            _doCleanUpSourceBuffer() {
                const e = mr.$video.currentTime;
                if (mr.sourceBuffer) {
                    const t = mr.sourceBuffer.buffered;
                    let r = !1;
                    for (let i = 0; i < t.length; i++) {
                        let s = t.start(i),
                            n = t.end(i);
                        if (s <= e && e < n + 3) {
                            if (e - s >= _r._opt.mseAutoCleanupMaxBackwardDuration) {
                                r = !0;
                                let t = e - _r._opt.mseAutoCleanupMinBackwardDuration;
                                mr.pendingRemoveRanges.push({
                                    start: s,
                                    end: t
                                })
                            }
                        } else n < e && (r = !0, mr.pendingRemoveRanges.push({
                            start: s,
                            end: n
                        }))
                    }
                    r && Et(mr.getSourceBufferUpdating()) && mr._doRemoveRanges()
                }
                if (mr.audioSourceBuffer) {
                    const t = mr.audioSourceBuffer.buffered;
                    let r = !1;
                    for (let i = 0; i < t.length; i++) {
                        let s = t.start(i),
                            n = t.end(i);
                        if (s <= e && e < n + 3) {
                            if (e - s >= _r._opt.mseAutoCleanupMaxBackwardDuration) {
                                r = !0;
                                let t = e - _r._opt.mseAutoCleanupMinBackwardDuration;
                                mr.pendingAudioRemoveRanges.push({
                                    start: s,
                                    end: t
                                })
                            }
                        } else n < e && (r = !0, mr.pendingAudioRemoveRanges.push({
                            start: s,
                            end: n
                        }))
                    }
                    r && Et(mr.getAudioSourceBufferUpdating()) && mr._doRemoveRanges()
                }
            },
            _hasPendingRemoveRanges: () => mr.pendingRemoveRanges.length > 0 || mr.pendingAudioRemoveRanges.length > 0,
            needInitAudio: () => _r._opt.hasAudio && _r._opt.mseDecodeAudio,
            _doRemoveRanges() {
                if (mr.sourceBuffer && Et(mr.getSourceBufferUpdating())) {
                    let e = mr.pendingRemoveRanges;
                    for (; e.length && Et(mr.getSourceBufferUpdating());) {
                        let t = e.shift();
                        try {
                            mr.sourceBuffer.remove(t.start, t.end)
                        } catch (e) {
                            _r.debug.warn(mr.TAG, "_doRemoveRanges() sourceBuffer error", e)
                        }
                    }
                }
                if (mr.audioSourceBuffer && Et(mr.getAudioSourceBufferUpdating())) {
                    let e = mr.pendingAudioRemoveRanges;
                    for (; e.length && Et(mr.getAudioSourceBufferUpdating());) {
                        let t = e.shift();
                        try {
                            mr.audioSourceBuffer.remove(t.start, t.end)
                        } catch (e) {
                            _r.debug.warn(mr.TAG, "_doRemoveRanges() audioSourceBuffer error", e)
                        }
                    }
                }
            },
            _getPlaybackRate() {},
            _needCleanupSourceBuffer() {
                if (Et(_r._opt.mseAutoCleanupSourceBuffer)) return !1;
                const e = mr.$video.currentTime;
                if (mr.sourceBuffer) {
                    let t = mr.sourceBuffer.buffered;
                    if (t.length >= 1 && e - t.start(0) >= _r._opt.mseAutoCleanupMaxBackwardDuration) return !0
                }
                if (mr.audioSourceBuffer) {
                    let t = mr.audioSourceBuffer.buffered;
                    if (t.length >= 1 && e - t.start(0) >= _r._opt.mseAutoCleanupMaxBackwardDuration) return !0
                }
                return !1
            },
            _clearAudioSourceBufferCheckTimeout() {
                mr.audioSourceBufferCheckTimeout && (clearTimeout(mr.audioSourceBufferCheckTimeout), mr.audioSourceBufferCheckTimeout = null)
            },
            _clearAudioNoDataCheckTimeout() {
                mr.audioSourceNoDataCheckTimeout && (clearTimeout(mr.audioSourceNoDataCheckTimeout), mr.audioSourceNoDataCheckTimeout = null)
            },
            getHandle: () => mr.mediaSource.handle,
            emitError(e) {
                postMessage({
                    cmd: X,
                    value: e,
                    msg: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                })
            }
        });
        let _r = {
            isPlayer: !0,
            isPlayback: !1,
            dropping: !1,
            isPushDropping: !1,
            isWorkerFetch: !1,
            isDestroyed: !1,
            isTimeWait: !1,
            fetchStatus: Ve,
            _opt: lr(),
            mp3Demuxer: null,
            delay: -1,
            pushLatestDelay: -1,
            firstTimestamp: null,
            startTimestamp: null,
            preDelayTimestamp: null,
            stopId: null,
            streamFps: null,
            streamAudioFps: null,
            streamVideoFps: null,
            writableStream: null,
            networkDelay: 0,
            webglObj: null,
            startStreamRateAndStatsInterval: function () {
                _r.stopStreamRateAndStatsInterval(), d = setInterval((() => {
                    o && o(0);
                    const e = JSON.stringify({
                        demuxBufferDelay: _r.getVideoBufferLength(),
                        audioDemuxBufferDelay: _r.getAudioBufferLength(),
                        streamBufferByteLength: _r.getStreamBufferLength(),
                        netBuf: _r.networkDelay || 0,
                        pushLatestDelay: _r.pushLatestDelay || 0,
                        latestDelay: _r.delay,
                        isStreamTsMoreThanLocal: st
                    });
                    postMessage({
                        cmd: I,
                        type: ye,
                        value: e
                    })
                }), 1e3)
            },
            stopStreamRateAndStatsInterval: function () {
                d && (clearInterval(d), d = null)
            },
            useOffscreen: function () {
                return _r._opt.useOffscreen && "undefined" != typeof OffscreenCanvas
            },
            getDelay: function (e, t) {
                if (!e || _r._opt.hasVideo && !et) return -1;
                if (t === Z) return _r.delay;
                if (_r.preDelayTimestamp && _r.preDelayTimestamp > e) return _r.preDelayTimestamp - e > 1e3 && _r.debug.warn("worker", `getDelay() and preDelayTimestamp is ${_r.preDelayTimestamp} > timestamp is ${e} more than ${_r.preDelayTimestamp-e}ms and return ${_r.delay}`), _r.preDelayTimestamp = e, _r.delay;
                if (_r.firstTimestamp) {
                    if (e) {
                        const t = Date.now() - _r.startTimestamp,
                            r = e - _r.firstTimestamp;
                        t >= r ? (st = !1, _r.delay = t - r) : (st = !0, _r.delay = r - t)
                    }
                } else _r.firstTimestamp = e, _r.startTimestamp = Date.now(), _r.delay = -1;
                return _r.preDelayTimestamp = e, _r.delay
            },
            getDelayNotUpdateDelay: function (e, t) {
                if (!e || _r._opt.hasVideo && !et) return -1;
                if (t === Z) return _r.pushLatestDelay;
                if (_r.preDelayTimestamp && _r.preDelayTimestamp - e > 1e3) return _r.debug.warn("worker", `getDelayNotUpdateDelay() and preDelayTimestamp is ${_r.preDelayTimestamp} > timestamp is ${e} more than ${_r.preDelayTimestamp-e}ms and return -1`), -1;
                if (_r.firstTimestamp) {
                    let t = -1;
                    if (e) {
                        const r = Date.now() - _r.startTimestamp,
                            i = e - _r.firstTimestamp;
                        r >= i ? (st = !1, t = r - i) : (st = !0, t = i - r)
                    }
                    return t
                }
                return -1
            },
            resetDelay: function () {
                _r.firstTimestamp = null, _r.startTimestamp = null, _r.delay = -1, _r.dropping = !1
            },
            resetAllDelay: function () {
                _r.resetDelay(), _r.preDelayTimestamp = null
            },
            doDecode: function (e) {
                _r._opt.isEmitSEI && e.type === J && _r.isWorkerFetch && _r.findSei(e.payload, e.ts), _r.isPlayUseMSEAndDecoderInWorker() ? e.type === Z ? _r._opt.mseDecodeAudio ? mr.decodeAudio(e.payload, e.ts) : e.decoder.decode(e.payload, e.ts) : e.type === J && mr.decodeVideo(e.payload, e.ts, e.isIFrame, e.cts) : _r._opt.useWCS && _r.useOffscreen() && e.type === J && s.decode ? s.decode(e.payload, e.ts, e.cts) : e.decoder.decode(e.payload, e.ts, e.isIFrame, e.cts)
            },
            decodeNext(e) {
                if (0 === r.length) return;
                const i = e.ts,
                    s = r[0],
                    n = e.type === J && wt(e.payload);
                if (Et(t)) n && (_r.debug.log("worker", `decode data type is ${e.type} and\n                ts is ${i} next data type is ${s.type} ts is ${s.ts}\n                isVideoSqeHeader is ${n}`), r.shift(), _r.doDecode(s));
                else {
                    const t = s.ts - i,
                        a = s.type === Z && e.type === J;
                    (t <= 20 || a || n) && (_r.debug.log("worker", `decode data type is ${e.type} and\n                ts is ${i} next data type is ${s.type} ts is ${s.ts}\n                diff is ${t} and isVideoAndNextAudio is ${a} and isVideoSqeHeader is ${n}`), r.shift(), _r.doDecode(s))
                }
            },
            init: function () {
                _r.debug.log("worker", "init and opt is", JSON.stringify(_r._opt));
                const e = _r._opt.playType === m,
                    t = _r._opt.playType === _;
                if (cr.init(), _r.isPlayer = e, _r.isPlayback = t, _r.isPlayUseMSEAndDecoderInWorker() && mr && mr.init(), _r.isPlaybackCacheBeforeDecodeForFpsRender()) _r.debug.log("worker", "playback and playbackIsCacheBeforeDecodeForFpsRender is true");
                else {
                    _r.debug.log("worker", "setInterval()");
                    const t = _r._opt.videoBuffer + _r._opt.videoBufferDelay,
                        i = () => {
                            let i = null;
                            if (r.length) {
                                if (_r.isPushDropping) return void _r.debug.warn("worker", `loop() isPushDropping is true and bufferList length is ${r.length}`);
                                if (_r.dropping) {
                                    for (i = r.shift(), _r.debug.warn("worker", `loop() dropBuffer is dropping and isIFrame ${i.isIFrame} and delay is ${_r.delay} and bufferlist is ${r.length}`); !i.isIFrame && r.length;) i = r.shift();
                                    const e = _r.getDelayNotUpdateDelay(i.ts, i.type);
                                    i.isIFrame && e <= _r.getNotDroppingDelayTs() && (_r.debug.log("worker", "loop() is dropping = false, is iFrame"), _r.dropping = !1, _r.doDecode(i), _r.decodeNext(i))
                                } else if (_r.isPlayback || _r.isPlayUseMSE() || 0 === _r._opt.videoBuffer)
                                    for (; r.length;) i = r.shift(), _r.doDecode(i);
                                else if (i = r[0], -1 === _r.getDelay(i.ts, i.type)) _r.debug.log("worker", "loop() common dumex delay is -1 ,data.ts is", i.ts), r.shift(), _r.doDecode(i), _r.decodeNext(i);
                                else if (_r.delay > t && e) _r.hasIframeInBufferList() ? (_r.debug.log("worker", `delay is ${_r.delay} > maxDelay ${t}, set dropping is true`), _r.resetAllDelay(), _r.dropping = !0, postMessage({
                                    cmd: L
                                })) : (r.shift(), _r.doDecode(i), _r.decodeNext(i));
                                else
                                    for (; r.length;) {
                                        if (i = r[0], !(_r.getDelay(i.ts, i.type) > _r._opt.videoBuffer)) {
                                            _r.delay < 0 && _r.debug.warn("worker", `loop() do not decode and delay is ${_r.delay}, bufferList is ${r.length}`);
                                            break
                                        }
                                        r.shift(), _r.doDecode(i)
                                    }
                            } else -1 !== _r.delay && _r.debug.log("worker", "loop() bufferList is empty and reset delay"), _r.resetAllDelay()
                        };
                    _r.stopId = setInterval((() => {
                        let e = (new Date).getTime();
                        nt || (nt = e);
                        const t = e - nt;
                        t > 100 && _r.debug.warn("worker", `loop demux diff time is ${t}`), i(), nt = (new Date).getTime()
                    }), 20)
                }
                if (Et(_r._opt.checkFirstIFrame) && (et = !0), _r.isPlayUseMSEAndDecoderInWorker() && mr) {
                    const e = mr.getHandle();
                    e && postMessage({
                        cmd: Y,
                        mseHandle: e
                    }, [e])
                }
            },
            playbackCacheLoop: function () {
                _r.stopId && (clearInterval(_r.stopId), _r.stopId = null);
                const e = () => {
                    let e = null;
                    r.length && (e = r.shift(), _r.doDecode(e))
                };
                e();
                const t = Math.ceil(1e3 / (_r.streamFps * _r._opt.playbackRate));
                _r.debug.log("worker", `playbackCacheLoop fragDuration is ${t}, streamFps is ${_r.streamFps}, streamAudioFps is ${_r.streamAudioFps} ,streamVideoFps is ${_r.streamVideoFps} playbackRate is ${_r._opt.playbackRate}`), _r.stopId = setInterval(e, t)
            },
            close: function () {
                if (_r.debug.log("worker", "close"), _r.isDestroyed = !0, ur(), !a || 1 !== a.readyState && 2 !== a.readyState ? a && _r.debug.log("worker", `close() and socket.readyState is ${a.readyState}`) : (dr = !0, a.close(1e3, "Client disconnecting")), a = null, _r.stopStreamRateAndStatsInterval(), _r.stopId && (clearInterval(_r.stopId), _r.stopId = null), _r.mp3Demuxer && (_r.mp3Demuxer.destroy(), _r.mp3Demuxer = null), _r.writableStream && Et(_r.writableStream.locked) && _r.writableStream.close().catch((e => {
                        _r.debug.log("worker", "close() and writableStream.close() error", e)
                    })), _r.writableStream = null, gr) try {
                    gr.clearAudio && gr.clearAudio(), gr = null
                } catch (e) {
                    _r.debug.warn("worker", "close() and audioDecoder.clear error", e)
                }
                if (yr) try {
                    yr.clear && yr.clear(), yr = null
                } catch (e) {
                    _r.debug.warn("worker", "close() and videoDecoder.clear error", e)
                }
                o = null, nt = null, st = !1, s && (s.reset && s.reset(), s = null), mr && (mr.destroy(), mr = null), _r.firstTimestamp = null, _r.startTimestamp = null, _r.networkDelay = 0, _r.streamFps = null, _r.streamAudioFps = null, _r.streamVideoFps = null, _r.delay = -1, _r.pushLatestDelay = -1, _r.preDelayTimestamp = null, _r.dropping = !1, _r.isPushDropping = !1, _r.isPlayer = !0, _r.isPlayback = !1, _r.isWorkerFetch = !1, _r._opt = lr(), _r.webglObj && (_r.webglObj.destroy(), _r.offscreenCanvas.removeEventListener("webglcontextlost", _r.onOffscreenCanvasWebglContextLost), _r.offscreenCanvas.removeEventListener("webglcontextrestored", _r.onOffscreenCanvasWebglContextRestored), _r.offscreenCanvas = null, _r.offscreenCanvasGL = null, _r.offscreenCanvasCtx = null), r = [], i = [], l = null, b = null, Ne = null, $e = !1, Qe = !1, et = !1, jt = !1, qt = !1, Zt = !1, nr = null, ar = null, Ut = [], Tt = 0, kt = 0, pt = null, At = null, It = null, Ht = null, or = null, Vt = 0, Wt = 0, xt = null, Bt = null, _r.fetchStatus = Ve, cr.destroy(), hr.destroy(), fr.destroy(), pr.destroy(), postMessage({
                    cmd: O
                })
            },
            pushBuffer: function (e, i) {
                if (i.type === Z && rt(e)) {
                    if (_r.debug.log("worker", `pushBuffer audio ts is ${i.ts}, isAacCodecPacket is true`), _r._opt.isRecordTypeFlv) {
                        const t = new Uint8Array(e);
                        postMessage({
                            cmd: V,
                            buffer: t
                        }, [t.buffer])
                    }
                    _r.decodeAudio(e, i.ts)
                } else if (i.type === J && i.isIFrame && wt(e)) {
                    if (_r.debug.log("worker", `pushBuffer video ts is ${i.ts}, isVideoSequenceHeader is true`), _r._opt.isRecordTypeFlv) {
                        const t = new Uint8Array(e);
                        postMessage({
                            cmd: W,
                            buffer: t
                        }, [t.buffer])
                    }
                    _r.decodeVideo(e, i.ts, i.isIFrame, i.cts)
                } else {
                    if (_r._opt.isRecording)
                        if (_r._opt.isRecordTypeFlv) {
                            const t = new Uint8Array(e);
                            postMessage({
                                cmd: j,
                                type: i.type,
                                buffer: t,
                                ts: i.ts
                            }, [t.buffer])
                        } else if (_r._opt.recordType === g)
                        if (i.type === J) {
                            const t = new Uint8Array(e).slice(5);
                            postMessage({
                                cmd: C,
                                buffer: t,
                                isIFrame: i.isIFrame,
                                ts: i.ts,
                                cts: i.cts
                            }, [t.buffer])
                        } else if (i.type === Z && _r._opt.isWasmMp4) {
                        const t = new Uint8Array(e),
                            r = it(t) ? t.slice(2) : t.slice(1);
                        postMessage({
                            cmd: x,
                            buffer: r,
                            ts: i.ts
                        }, [r.buffer])
                    }
                    if (_r.isPlayer && Vt > 0 && Ht > 0 && i.type === J) {
                        const e = i.ts - Ht,
                            t = Vt + Vt / 2;
                        e > t && _r.debug.log("worker", `pushBuffer video\n                    ts is ${i.ts}, preTimestamp is ${Ht},\n                    diff is ${e} and preTimestampDuration is ${Vt} and maxDiff is ${t}\n                    maybe trigger black screen or flower screen\n                    `)
                    }
                    if (_r.isPlayer && Ht > 0 && i.type === J && i.ts < Ht && Ht - i.ts > y && (_r.debug.warn("worker", `pushBuffer,\n                preTimestamp is ${Ht}, options.ts is ${i.ts},\n                diff is ${Ht-i.ts} more than 3600000,\n                and resetAllDelay`), _r.resetAllDelay(), Ht = null, Vt = 0), _r.isPlayer && Ht > 0 && i.ts <= Ht && i.type === J && (_r.debug.warn("worker", `pushBuffer() and isIFrame is ${i.isIFrame} and,\n                options.ts is ${i.ts} less than (or equal) preTimestamp is ${Ht} and\n                payloadBufferSize is ${e.byteLength} and prevPayloadBufferSize is ${Wt}`), _r._opt.isDropSameTimestampGop && Et(i.isIFrame) && et)) {
                        const e = _r.hasIframeInBufferList(),
                            r = Et(_r.isPushDropping);
                        return _r.debug.log("worker", `pushBuffer, isDropSameTimestampGop is true and\n                    hasIframe is ${e} and isNotPushDropping is ${r} and next dropBuffer`), void(e && r ? _r.dropBuffer$2() : (_r.clearBuffer(!0), St(_r._opt.checkFirstIFrame) && St(t) && (_r.isPlayUseMSEAndDecoderInWorker() ? mr.isDecodeFirstIIframe = !1 : postMessage({
                            cmd: q
                        }))))
                    }
                    if (_r.isPlayer && et) {
                        const e = _r._opt.videoBuffer + _r._opt.videoBufferDelay,
                            t = _r.getDelayNotUpdateDelay(i.ts, i.type);
                        _r.pushLatestDelay = t, t > e && _r.delay < e && _r.delay > 0 && _r.hasIframeInBufferList() && !1 === _r.isPushDropping && (_r.debug.log("worker", `pushBuffer(), pushLatestDelay is ${t} more than ${e} and decoder.delay is ${_r.delay} and has iIframe and next decoder.dropBuffer$2()`), _r.dropBuffer$2())
                    }
                    if (_r.isPlayer && i.type === J && (Ht > 0 && (Vt = i.ts - Ht), Wt = e.byteLength, Ht = i.ts), i.type === Z ? r.push({
                            ts: i.ts,
                            payload: e,
                            decoder: {
                                decode: _r.decodeAudio
                            },
                            type: Z,
                            isIFrame: !1
                        }) : i.type === J && r.push({
                            ts: i.ts,
                            cts: i.cts,
                            payload: e,
                            decoder: {
                                decode: _r.decodeVideo
                            },
                            type: J,
                            isIFrame: i.isIFrame
                        }), _r.isPlaybackCacheBeforeDecodeForFpsRender() && (_t(_r.streamVideoFps) || _t(_r.streamAudioFps))) {
                        let e = _r.streamVideoFps,
                            t = _r.streamAudioFps;
                        if (_t(_r.streamVideoFps) && (e = bt(r, J), e && (_r.streamVideoFps = e, postMessage({
                                cmd: R,
                                value: _r.streamVideoFps
                            }), _r.streamFps = t ? e + t : e, Et(_r._opt.hasAudio) && (_r.debug.log("worker", "playbackCacheBeforeDecodeForFpsRender, _opt.hasAudio is false and set streamAudioFps is 0"), _r.streamAudioFps = 0), _r.playbackCacheLoop())), _t(_r.streamAudioFps) && (t = bt(r, Z), t && (_r.streamAudioFps = t, _r.streamFps = e ? e + t : t, _r.playbackCacheLoop())), _t(_r.streamVideoFps) && _t(_r.streamAudioFps)) {
                            const i = r.map((e => ({
                                type: e.type,
                                ts: e.ts
                            })));
                            _r.debug.log("worker", `playbackCacheBeforeDecodeForFpsRender, calc streamAudioFps is ${t}, streamVideoFps is ${e}, bufferListLength  is ${r.length}, and ts list is ${JSON.stringify(i)}`)
                        }
                        const i = _r.getAudioBufferLength() > 0,
                            s = i ? 60 : 40;
                        r.length >= s && (_r.debug.warn("worker", `playbackCacheBeforeDecodeForFpsRender, bufferListLength  is ${r.length} more than ${s}, and hasAudio is ${i} an set streamFps is 25`), _r.streamVideoFps = 25, postMessage({
                            cmd: R,
                            value: _r.streamVideoFps
                        }), i ? (_r.streamAudioFps = 25, _r.streamFps = _r.streamVideoFps + _r.streamAudioFps) : _r.streamFps = _r.streamVideoFps, _r.playbackCacheLoop())
                    }
                }
            },
            getVideoBufferLength() {
                let e = 0;
                return r.forEach((t => {
                    t.type === J && (e += 1)
                })), e
            },
            hasIframeInBufferList: () => r.some((e => e.type === J && e.isIFrame)),
            isAllIframeInBufferList() {
                const e = _r.getVideoBufferLength();
                let t = 0;
                return r.forEach((e => {
                    e.type === J && e.isIFrame && (t += 1)
                })), e === t
            },
            getNotDroppingDelayTs: () => _r._opt.videoBuffer + _r._opt.videoBufferDelay / 2,
            getAudioBufferLength() {
                let e = 0;
                return r.forEach((t => {
                    t.type === Z && (e += 1)
                })), e
            },
            getStreamBufferLength() {
                let e = 0;
                return l && l.buffer && (e = l.buffer.byteLength), _r._opt.isNakedFlow ? cr.lastBuf && (e = cr.lastBuf.byteLength) : _r._opt.isTs ? pr._remainingPacketData && (e = pr._remainingPacketData.byteLength) : _r._opt.isFmp4 && hr.mp4Box && (e = hr.mp4Box.getAllocatedSampleDataSize()), e
            },
            fetchStream: function (e, t) {
                t.useMSE = !0, _r.debug.log("worker", "fetchStream, url is " + e, "options:", JSON.stringify(t)), _r.isWorkerFetch = !0, t.isFlv ? _r._opt.isFlv = !0 : t.isFmp4 ? _r._opt.isFmp4 = !0 : t.isMpeg4 ? _r._opt.isMpeg4 = !0 : t.isNakedFlow ? _r._opt.isNakedFlow = !0 : t.isTs && (_r._opt.isTs = !0), o = mt((e => {
                    postMessage({
                        cmd: I,
                        type: fe,
                        value: e
                    })
                })), _r.startStreamRateAndStatsInterval(), t.isFmp4 && (hr.listenMp4Box(), _r._opt.isFmp4Private && hr.initTransportDescarmber()), t.protocol === h ? (l = new Ct(_r.demuxFlv()), fetch(e).then((e => {
                    if (St(dr)) return _r.debug.log("worker", "request abort and run res.body.cancel()"), _r.fetchStatus = Ve, void e.body.cancel();
                    if (! function (e) {
                            return e.ok && e.status >= 200 && e.status <= 299
                        }(e)) return _r.debug.warn("worker", `fetch response status is ${e.status} and ok is ${e.ok} and emit error and next abort()`), ur(), void postMessage({
                        cmd: I,
                        type: we.fetchError,
                        value: `fetch response status is ${e.status} and ok is ${e.ok}`
                    });
                    if (postMessage({
                            cmd: I,
                            type: ge
                        }), "undefined" != typeof WritableStream) _r.writableStream = new WritableStream({
                        write: e => n && n.signal && n.signal.aborted ? (_r.debug.log("worker", "writableStream write() and abortController.signal.aborted is true so return"), void(_r.fetchStatus = je)) : St(dr) ? (_r.debug.log("worker", "writableStream write() and requestAbort is true so return"), void(_r.fetchStatus = je)) : (_r.fetchStatus = We, o(e.byteLength), void(t.isFlv ? l.write(e) : t.isFmp4 ? _r.demuxFmp4(e) : t.isMpeg4 ? _r.demuxMpeg4(e) : t.isTs && _r.demuxTs(e))),
                        close: () => {
                            _r.debug.log("worker", "writableStream close()"), _r.fetchStatus = je, l = null, ur(), postMessage({
                                cmd: I,
                                type: he,
                                value: f,
                                msg: "fetch done"
                            })
                        },
                        abort: e => {
                            if (n && n.signal && n.signal.aborted) return _r.debug.log("worker", "writableStream abort() and abortController.signal.aborted is true so return"), void(_r.fetchStatus = je);
                            l = null, e.name !== Oe ? (_r.debug.log("worker", `writableStream abort() and e is ${e.toString()}`), ur(), postMessage({
                                cmd: I,
                                type: we.fetchError,
                                value: e.toString()
                            })) : _r.debug.log("worker", "writableStream abort() and e.name is AbortError so return")
                        }
                    }), e.body.pipeTo(_r.writableStream);
                    else {
                        const r = e.body.getReader(),
                            i = () => {
                                r.read().then((e => {
                                    let {
                                        done: r,
                                        value: s
                                    } = e;
                                    return r ? (_r.debug.log("worker", "fetchNext().then() and done is true"), _r.fetchStatus = je, l = null, ur(), void postMessage({
                                        cmd: I,
                                        type: he,
                                        value: f,
                                        msg: "fetch done"
                                    })) : n && n.signal && n.signal.aborted ? (_r.debug.log("worker", "fetchNext().then() and abortController.signal.aborted is true so return"), void(_r.fetchStatus = je)) : St(dr) ? (_r.debug.log("worker", "fetchNext().then() and requestAbort is true so return"), void(_r.fetchStatus = je)) : (_r.fetchStatus = We, o(s.byteLength), t.isFlv ? l.write(s) : t.isFmp4 ? _r.demuxFmp4(s) : t.isMpeg4 && _r.demuxMpeg4(s), void i())
                                })).catch((e => {
                                    if (n && n.signal && n.signal.aborted) return _r.debug.log("worker", "fetchNext().catch() and abortController.signal.aborted is true so return"), void(_r.fetchStatus = je);
                                    l = null, e.name !== Oe ? (_r.debug.log("worker", `fetchNext().catch() and e is ${e.toString()}`), ur(), postMessage({
                                        cmd: I,
                                        type: we.fetchError,
                                        value: e.toString()
                                    })) : _r.debug.log("worker", "fetchNext().catch() and e.name is AbortError so return")
                                }))
                            };
                        i()
                    }
                })).catch((e => {
                    n && n.signal && n.signal.aborted ? _r.debug.log("worker", "fetch().catch() and abortController.signal.aborted is true so return") : e.name !== Oe ? (_r.debug.log("worker", `fetch().catch() and e is ${e.toString()}`), ur(), postMessage({
                        cmd: I,
                        type: we.fetchError,
                        value: e.toString()
                    }), l = null) : _r.debug.log("worker", "fetch().catch() and e.name is AbortError so return")
                }))) : t.protocol === c && (t.isFlv && (l = new Ct(_r.demuxFlv())), a = new WebSocket(e), a.binaryType = "arraybuffer", a.onopen = () => {
                    _r.debug.log("worker", "fetchStream, WebsocketStream  socket open"), postMessage({
                        cmd: I,
                        type: ge
                    }), postMessage({
                        cmd: I,
                        type: ve
                    })
                }, a.onclose = e => {
                    _r.debug.log("worker", `fetchStream, WebsocketStream socket close and code is ${e.code}`), 1006 === e.code && _r.debug.error("worker", `fetchStream, WebsocketStream socket close abnormally and code is ${e.code}`), St(dr) ? _r.debug.log("worker", "fetchStream, WebsocketStream socket close and requestAbort is true so return") : (l = null, postMessage({
                        cmd: I,
                        type: he,
                        value: p,
                        msg: e.code
                    }))
                }, a.onerror = e => {
                    _r.debug.error("worker", "fetchStream, WebsocketStream socket error", e), l = null, postMessage({
                        cmd: I,
                        type: we.websocketError,
                        value: e.isTrusted ? "websocket user aborted" : "websocket error"
                    })
                }, a.onmessage = e => {
                    o(e.data.byteLength), t.isFlv ? l.write(e.data) : t.isFmp4 ? _r.demuxFmp4(e.data) : t.isMpeg4 ? _r.demuxMpeg4(e.data) : _r._opt.isNakedFlow ? _r.demuxNakedFlow(e.data) : _r.demuxM7s(e.data)
                })
            },
            demuxFlv: function* () {
                yield 9;
                const e = new ArrayBuffer(4),
                    t = new Uint8Array(e),
                    r = new Uint32Array(e);
                for (;;) {
                    t[3] = 0;
                    const e = yield 15, i = e[4];
                    t[0] = e[7], t[1] = e[6], t[2] = e[5];
                    const s = r[0];
                    t[0] = e[10], t[1] = e[9], t[2] = e[8], t[3] = e[11];
                    let n = r[0];
                    const a = (yield s).slice();
                    switch (i) {
                        case Q:
                            if (a.byteLength > 0) {
                                let e = a;
                                St(_r._opt.m7sCryptoAudio) && (e = _r.cryptoPayloadAudio(a)), _r.decode(e, {
                                    type: Z,
                                    ts: n
                                })
                            } else _r.debug.warn("worker", `demuxFlv() type is audio and payload.byteLength is ${a.byteLength} and return`);
                            break;
                        case ee:
                            if (a.byteLength >= 6) {
                                const e = a[0];
                                if (_r._isEnhancedH265Header(e)) _r._decodeEnhancedH265Video(a, n);
                                else {
                                    a[0];
                                    let e = a[0] >> 4 === He;
                                    if (e && wt(a) && null === nr) {
                                        const e = 15 & a[0];
                                        nr = e === Ae, ar = ht(a, nr), _r.debug.log("worker", `demuxFlv() isVideoSequenceHeader is true and isHevc is ${nr} and nalUnitSize is ${ar}`)
                                    }
                                    e && _r.calcIframeIntervalTimestamp(n), _r.isPlayer && _r.calcNetworkDelay(n), r[0] = a[4], r[1] = a[3], r[2] = a[2], r[3] = 0;
                                    let t = r[0],
                                        i = _r.cryptoPayload(a, e);
                                    _r.decode(i, {
                                        type: J,
                                        ts: n,
                                        isIFrame: e,
                                        cts: t
                                    })
                                }
                            } else _r.debug.warn("worker", `demuxFlv() type is video and payload.byteLength is ${a.byteLength} and return`);
                            break;
                        case te:
                            postMessage({
                                cmd: H,
                                buffer: a
                            }, [a.buffer]);
                            break;
                        default:
                            _r.debug.log("worker", `demuxFlv() type is ${i}`)
                    }
                }
            },
            decode: function (e, t) {
                t.type === Z ? _r._opt.hasAudio && (postMessage({
                    cmd: I,
                    type: pe,
                    value: e.byteLength
                }), _r.isPlayer ? _r.pushBuffer(e, {
                    type: t.type,
                    ts: t.ts,
                    cts: t.cts
                }) : _r.isPlayback && (_r.isPlaybackOnlyDecodeIFrame() || (_r.isPlaybackCacheBeforeDecodeForFpsRender(), _r.pushBuffer(e, {
                    type: t.type,
                    ts: t.ts,
                    cts: t.cts
                })))) : t.type === J && _r._opt.hasVideo && (postMessage({
                    cmd: I,
                    type: me,
                    value: e.byteLength
                }), postMessage({
                    cmd: I,
                    type: _e,
                    value: t.ts
                }), _r.isPlayer ? _r.pushBuffer(e, {
                    type: t.type,
                    ts: t.ts,
                    isIFrame: t.isIFrame,
                    cts: t.cts
                }) : _r.isPlayback && (_r.isPlaybackOnlyDecodeIFrame() ? t.isIFrame && _r.pushBuffer(e, {
                    type: t.type,
                    ts: t.ts,
                    cts: t.cts,
                    isIFrame: t.isIFrame
                }) : (_r.isPlaybackCacheBeforeDecodeForFpsRender(), _r.pushBuffer(e, {
                    type: t.type,
                    ts: t.ts,
                    cts: t.cts,
                    isIFrame: t.isIFrame
                }))))
            },
            cryptoPayload: function (e, t) {
                let r = e;
                return _r._opt.isM7sCrypto ? _r._opt.cryptoIV && _r._opt.cryptoIV.byteLength > 0 && _r._opt.cryptoKey && _r._opt.cryptoKey.byteLength > 0 ? r = function (e, t, r) {
                    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    t = new Uint8Array(t), r = new Uint8Array(r);
                    const s = e.byteLength;
                    let n = 5;
                    for (; n < s;) {
                        let o = (a = e.slice(n, n + 4))[3] | a[2] << 8 | a[1] << 16 | a[0] << 24;
                        if (o > s) break;
                        let d = e[n + 4],
                            l = !1;
                        if (i ? (d = d >>> 1 & 63, l = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 17, 18, 19, 20, 21].includes(d)) : (d &= 31, l = 1 === d || 5 === d), l) {
                            const i = e.slice(n + 4 + 2, n + 4 + o);
                            let s = new Mr.ModeOfOperation.ctr(t, new Mr.Counter(r));
                            const a = s.decrypt(i);
                            s = null, e.set(a, n + 4 + 2)
                        }
                        n = n + 4 + o
                    }
                    var a;
                    return e
                }(e, _r._opt.cryptoKey, _r._opt.cryptoIV, nr) : _r.debug.error("worker", `isM7sCrypto cryptoKey.length is ${_r._opt.cryptoKey&&_r._opt.cryptoKey.byteLength} or cryptoIV.length is ${_r._opt.cryptoIV&&_r._opt.cryptoIV.byteLength} null`) : _r._opt.isSm4Crypto ? _r._opt.sm4CryptoKey && t ? r = function (e, t) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    const i = e.byteLength;
                    let s = 5;
                    for (; s < i;) {
                        let a = (n = e.slice(s, s + 4))[3] | n[2] << 8 | n[1] << 16 | n[0] << 24;
                        if (a > i) break;
                        let o = e[s + 4],
                            d = !1;
                        if (r ? (o = o >>> 1 & 63, d = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 17, 18, 19, 20, 21].includes(o)) : (o &= 31, d = 1 === o || 5 === o), d) {
                            const r = Qr(e.slice(s + 4 + 2, s + 4 + a), t, 0, {
                                padding: "none",
                                output: "array"
                            });
                            e.set(r, s + 4 + 2)
                        }
                        s = s + 4 + a
                    }
                    var n;
                    return e
                }(e, _r._opt.sm4CryptoKey) : _r._opt.sm4CryptoKey || _r.debug.error("worker", "isSm4Crypto opt.sm4CryptoKey is null") : _r._opt.isXorCrypto && (_r._opt.cryptoIV && _r._opt.cryptoIV.byteLength > 0 && _r._opt.cryptoKey && _r._opt.cryptoKey.byteLength > 0 ? r = function (e, t, r) {
                    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    const s = e.byteLength;
                    let n = 5;
                    for (; n < s;) {
                        let o = (a = e.slice(n, n + 4))[3] | a[2] << 8 | a[1] << 16 | a[0] << 24;
                        if (o > s) break;
                        let d = e[n + 4],
                            l = !1;
                        if (i ? (d = d >>> 1 & 63, l = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 17, 18, 19, 20, 21].includes(d)) : (d &= 31, l = 1 === d || 5 === d), l) {
                            const i = ii(e.slice(n + 4, n + 4 + o), t, r);
                            e.set(i, n + 4)
                        }
                        n = n + 4 + o
                    }
                    var a;
                    return e
                }(e, _r._opt.cryptoKey, _r._opt.cryptoIV, nr) : _r.debug.error("worker", `isXorCrypto cryptoKey.length is ${_r._opt.cryptoKey&&_r._opt.cryptoKey.byteLength} or cryptoIV.length is ${_r._opt.cryptoIV&&_r._opt.cryptoIV.byteLength} null`)), r
            },
            cryptoPayloadAudio: function (e) {
                let t = e;
                if (_r._opt.isM7sCrypto)
                    if (_r._opt.cryptoIV && _r._opt.cryptoIV.byteLength > 0 && _r._opt.cryptoKey && _r._opt.cryptoKey.byteLength > 0) {
                        e[0] >> 4 === Be.AAC && (t = function (e, t, r) {
                            if (e.byteLength <= 30) return e;
                            const i = e.slice(32);
                            let s = new Mr.ModeOfOperation.ctr(t, new Mr.Counter(r));
                            const n = s.decrypt(i);
                            return s = null, e.set(n, 32), e
                        }(e, _r._opt.cryptoKey, _r._opt.cryptoIV))
                    } else _r.debug.error("worker", `isM7sCrypto cryptoKey.length is ${_r._opt.cryptoKey&&_r._opt.cryptoKey.byteLength} or cryptoIV.length is ${_r._opt.cryptoIV&&_r._opt.cryptoIV.byteLength} null`);
                return t
            },
            setCodecAudio: function (e, t) {
                const r = e[0] >> 4,
                    i = e[0] >> 1 & 1;
                if (or = r === Be.AAC ? i ? 16 : 8 : 0 === i ? 8 : 16, gr && gr.setCodecAudio)
                    if (rt(e) || r === Be.ALAW || r === Be.MULAW || r === Be.MP3) {
                        _r.debug.log("worker", `setCodecAudio: init audio codec, codeId is ${r}`);
                        const i = r === Be.AAC ? e.slice(2) : new Uint8Array(0);
                        gr.setCodecAudio(r, _r._opt.sampleRate, i), r === Be.AAC && postMessage({
                            cmd: B,
                            buffer: i
                        }, [i.buffer]), Qe = !0, r !== Be.AAC && (r === Be.MP3 ? (_r.mp3Demuxer || (_r.mp3Demuxer = new ri(_r), _r.mp3Demuxer.on("data", ((e, t) => {
                            gr.decodeAudio(e, t)
                        }))), _r.mp3Demuxer.dispatch(e.slice(1), t)) : gr.decodeAudio(e.slice(1), t))
                    } else _r.debug.warn("worker", "setCodecAudio: hasInitAudioCodec is false, codecId is ", r);
                else _r.debug.error("worker", "setCodecAudio: audioDecoder or audioDecoder.setCodec is null")
            },
            decodeAudio: function (e, r) {
                if (_r.isDestroyed) _r.debug.log("worker", "decodeAudio, decoder is destroyed and return");
                else if (_r.isPlayUseMSEAndDecoderInWorkerAndMseDecodeAudio()) mr.decodeAudio(e, r);
                else if (St(t) && St(_r._opt.mseDecodeAudio)) postMessage({
                    cmd: P,
                    payload: e,
                    ts: r,
                    cts: r
                }, [e.buffer]);
                else {
                    const t = e[0] >> 4;
                    if (Qe) {
                        if (rt(e)) return void _r.debug.log("worker", "decodeAudio and has already initialized and payload is aac codec packet so drop this frame");
                        t === Be.MP3 ? _r.mp3Demuxer.dispatch(e.slice(1), r) : gr.decodeAudio(t === Be.AAC ? e.slice(2) : e.slice(1), r)
                    } else _r.setCodecAudio(e, r)
                }
            },
            setCodecVideo: function (e) {
                const t = 15 & e[0];
                if (yr && yr.setCodec)
                    if (wt(e))
                        if (t === Ee || t === Ae) {
                            _r.debug.log("worker", `setCodecVideo: init video codec , codecId is ${t}`);
                            const r = e.slice(5);
                            if (t === Ee && _r._opt.useSIMD) {
                                const e = Ft(r);
                                if (e.codecWidth > 4080 || e.codecHeight > 4080) return postMessage({
                                    cmd: N
                                }), void _r.debug.warn("worker", `setCodecVideo: SIMD H264 decode video width is too large, width is ${e.codecWidth}, height is ${e.codecHeight}`)
                            }
                            const i = new Uint8Array(e);
                            $e = !0, yr.setCodec(t, r), postMessage({
                                cmd: T,
                                code: t
                            }), postMessage({
                                cmd: k,
                                buffer: i,
                                codecId: t
                            }, [i.buffer])
                        } else _r.debug.warn("worker", `setCodecVideo: hasInitVideoCodec is false, codecId is ${t} is not H264 or H265`);
                else _r.debug.warn("worker", `decodeVideo: hasInitVideoCodec is false, codecId is ${t} and frameType is ${e[0]>>4} and packetType is ${e[1]}`);
                else _r.debug.error("worker", "setCodecVideo: videoDecoder or videoDecoder.setCodec is null")
            },
            decodeVideo: function (e, r, i) {
                let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                if (_r.isDestroyed) _r.debug.log("worker", "decodeVideo, decoder is destroyed and return");
                else if (_r.isPlayUseMSEAndDecoderInWorker()) mr.decodeVideo(e, r, i, s);
                else if (St(t)) postMessage({
                    cmd: D,
                    payload: e,
                    isIFrame: i,
                    ts: r,
                    cts: s,
                    delay: _r.delay
                }, [e.buffer]);
                else if ($e)
                    if (!et && i && (et = !0), et) {
                        if (i && wt(e)) {
                            const t = 15 & e[0];
                            let r = {};
                            if (t === Ee) {
                                r = Ft(e.slice(5))
                            } else t === Ae && (r = Kt(e));
                            r.codecWidth && r.codecHeight && b && Ne && (r.codecWidth !== b || r.codecHeight !== Ne) && (_r.debug.warn("worker", `\n                            decodeVideo: video width or height is changed,\n                            old width is ${b}, old height is ${Ne},\n                            new width is ${r.codecWidth}, new height is ${r.codecHeight},\n                            and emit change event`), qt = !0, postMessage({
                                cmd: M
                            }))
                        }
                        if (qt) return void _r.debug.warn("worker", "decodeVideo: video width or height is changed, and return");
                        if (Zt) return void _r.debug.warn("worker", "decodeVideo: simd decode error, and return");
                        if (wt(e)) return void _r.debug.warn("worker", "decodeVideo and payload is video sequence header so drop this frame");
                        if (e.byteLength < 12) return void _r.debug.warn("worker", `decodeVideo and payload is too small , payload length is ${e.byteLength}`);
                        const t = e.slice(5);
                        yr.decode(t, i ? 1 : 0, r)
                    } else _r.debug.log("worker", "decodeVideo first frame is not iFrame");
                else _r.setCodecVideo(e)
            },
            clearBuffer: function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                _r.debug.log("worker", `clearBuffer,bufferList length is ${r.length}, need clear is ${e}`), e && (r = []), _r.isPlayer && (_r.resetAllDelay(), St(_r._opt.checkFirstIFrame) && (_r.dropping = !0, postMessage({
                    cmd: L
                }))), St(_r._opt.checkFirstIFrame) && Et(t) && (et = !1)
            },
            dropBuffer$2: function () {
                if (r.length > 0) {
                    let e = r.findIndex((e => St(e.isIFrame) && e.type === J));
                    if (_r.isAllIframeInBufferList())
                        for (let t = 0; t < r.length; t++) {
                            const i = r[t],
                                s = _r.getDelayNotUpdateDelay(i.ts, i.type);
                            if (s >= _r.getNotDroppingDelayTs()) {
                                _r.debug.log("worker", `dropBuffer$2() isAllIframeInBufferList() is true, and index is ${t} and tempDelay is ${s} and notDroppingDelayTs is ${_r.getNotDroppingDelayTs()}`), e = t;
                                break
                            }
                        }
                    if (e >= 0) {
                        _r.isPushDropping = !0, postMessage({
                            cmd: L
                        });
                        const t = r.length;
                        r = r.slice(e);
                        const i = r.shift();
                        _r.resetAllDelay(), _r.getDelay(i.ts, i.type), _r.doDecode(i), _r.isPushDropping = !1, _r.debug.log("worker", `dropBuffer$2() iFrameIndex is ${e},and old bufferList length is ${t} ,new bufferList is ${r.length} and new delay is ${_r.delay} `)
                    } else _r.isPushDropping = !1
                }
                0 === r.length && (_r.isPushDropping = !1)
            },
            demuxM7s: function (e) {
                const t = new DataView(e),
                    r = t.getUint32(1, !1),
                    i = t.getUint8(0),
                    s = new ArrayBuffer(4),
                    n = new Uint32Array(s);
                switch (i) {
                    case Z:
                        _r.decode(new Uint8Array(e, 5), {
                            type: Z,
                            ts: r
                        });
                        break;
                    case J:
                        if (t.byteLength >= 11) {
                            const i = new Uint8Array(e, 5),
                                s = i[0];
                            if (_r._isEnhancedH265Header(s)) _r._decodeEnhancedH265Video(i, r);
                            else {
                                const e = t.getUint8(5) >> 4 == 1;
                                if (e && (_r.calcIframeIntervalTimestamp(r), wt(i) && null === nr)) {
                                    const e = 15 & i[0];
                                    nr = e === Ae
                                }
                                _r.isPlayer && _r.calcNetworkDelay(r), n[0] = i[4], n[1] = i[3], n[2] = i[2], n[3] = 0;
                                let s = n[0],
                                    a = _r.cryptoPayload(i, e);
                                _r.decode(a, {
                                    type: J,
                                    ts: r,
                                    isIFrame: e,
                                    cts: s
                                })
                            }
                        } else _r.debug.warn("worker", `demuxM7s() type is video and arrayBuffer length is ${e.byteLength} and return`)
                }
            },
            demuxNakedFlow: function (e) {
                cr.dispatch(e)
            },
            demuxFmp4: function (e) {
                const t = new Uint8Array(e);
                hr.dispatch(t)
            },
            demuxMpeg4: function (e) {
                fr.dispatch(e)
            },
            demuxTs: function (e) {
                pr.dispatch(e)
            },
            _decodeEnhancedH265Video: function (e, t) {
                const r = e[0],
                    i = 48 & r,
                    s = 15 & r,
                    n = e.slice(1, 5),
                    a = new ArrayBuffer(4),
                    o = new Uint32Array(a),
                    d = "a" == String.fromCharCode(n[0]);
                if (nr = Et(d), s === Ke) {
                    if (i === Je) {
                        const r = e.slice(5);
                        if (d);
                        else {
                            const i = new Uint8Array(5 + r.length);
                            i.set([28, 0, 0, 0, 0], 0), i.set(r, 5), ar = ht(e, nr), _r.debug.log("worker", `demuxFlv() isVideoSequenceHeader(enhancedH265) is true and isHevc is ${nr} and nalUnitSize is ${ar}`), _r.decode(i, {
                                type: J,
                                ts: t,
                                isIFrame: !0,
                                cts: 0
                            })
                        }
                    }
                } else if (s === Xe) {
                    let r = e,
                        s = 0;
                    const n = i === Je;
                    if (n && _r.calcIframeIntervalTimestamp(t), d);
                    else {
                        o[0] = e[4], o[1] = e[3], o[2] = e[2], o[3] = 0, s = o[0];
                        r = Qt(e.slice(8), n), r = _r.cryptoPayload(r, n), _r.decode(r, {
                            type: J,
                            ts: t,
                            isIFrame: n,
                            cts: s
                        })
                    }
                } else if (s === Ze) {
                    const r = i === Je;
                    r && _r.calcIframeIntervalTimestamp(t);
                    let s = Qt(e.slice(5), r);
                    s = _r.cryptoPayload(s, r), _r.decode(s, {
                        type: J,
                        ts: t,
                        isIFrame: r,
                        cts: 0
                    })
                }
            },
            _isEnhancedH265Header: function (e) {
                return 128 == (128 & e)
            },
            findSei: function (e, t) {
                let r = 4;
                _t(ar) || (r = ar);
                const i = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4;
                    if (e.length < 4) return;
                    const r = e.length,
                        i = [];
                    let s, n = 0;
                    for (; n + t < r;)
                        if (s = ut(e, n), 3 === t && (s >>>= 8), n += t, s) {
                            if (n + s > r) break;
                            i.push(e.subarray(n, n + s)), n += s
                        } return i
                }(e.slice(5), r);
                i.forEach((e => {
                    const r = nr ? e[0] >>> 1 & 63 : 31 & e[0];
                    (nr && (r === ke.suffixSei || r === ke.prefixSei) || Et(nr) && r === Te.kSliceSEI) && postMessage({
                        cmd: $,
                        buffer: e,
                        ts: t
                    }, [e.buffer])
                }))
            },
            calcNetworkDelay: function (e) {
                if (!(et && e > 0)) return;
                null === pt ? (pt = e, At = ft()) : e < pt && (_r.debug.warn("worker", `calcNetworkDelay, dts is ${e} less than bufferStartDts is ${pt}`), pt = e, At = ft());
                const t = e - pt,
                    r = ft() - At,
                    i = r > t ? r - t : 0;
                _r.networkDelay = i, i > _r._opt.networkDelay && _r._opt.playType === m && (_r.debug.warn("worker", `calcNetworkDelay now dts:${e}, start dts is ${pt} vs start is ${t},local diff is ${r} ,delay is ${i}`), postMessage({
                    cmd: I,
                    type: be,
                    value: i
                }))
            },
            calcIframeIntervalTimestamp: function (e) {
                null === It ? It = e : It < e && (Bt = e - It, postMessage({
                    cmd: F,
                    value: Bt
                }), It = e)
            },
            canVisibilityDecodeNotDrop: function () {
                return _r._opt.visibility && b * Ne <= 2073600
            },
            isPlaybackCacheBeforeDecodeForFpsRender: function () {
                return _r.isPlayback && _r._opt.playbackIsCacheBeforeDecodeForFpsRender
            },
            isPlaybackOnlyDecodeIFrame: function () {
                return _r._opt.playbackRate >= _r._opt.playbackForwardMaxRateDecodeIFrame
            },
            isPlayUseMSE: function () {
                return _r.isPlayer && _r._opt.useMSE && St(t)
            },
            isPlayUseMSEAndDecoderInWorker: function () {
                return _r.isPlayUseMSE() && _r._opt.mseDecoderUseWorker
            },
            isPlayUseMSEAndDecoderInWorkerAndMseDecodeAudio: function () {
                return _r.isPlayUseMSEAndDecoderInWorker() && _r._opt.mseDecodeAudio
            },
            playbackUpdatePlaybackRate: function () {
                _r.clearBuffer(!0)
            },
            onOffscreenCanvasWebglContextLost: function (e) {
                _r.debug.error("worker", "handleOffscreenCanvasWebglContextLost and next try to create webgl"), e.preventDefault(), jt = !0, _r.webglObj.destroy(), _r.webglObj = null, _r.offscreenCanvasGL = null, setTimeout((() => {
                    _r.offscreenCanvasGL = _r.offscreenCanvas.getContext("webgl"), _r.offscreenCanvasGL && _r.offscreenCanvasGL.getContextAttributes().stencil ? (_r.webglObj = u(_r.offscreenCanvasGL, _r._opt.openWebglAlignment), jt = !1) : _r.debug.error("worker", "handleOffscreenCanvasWebglContextLost, stencil is false")
                }), 500)
            },
            onOffscreenCanvasWebglContextRestored: function (e) {
                _r.debug.log("worker", "handleOffscreenCanvasWebglContextRestored"), e.preventDefault()
            },
            videoInfo: function (e, t, r) {
                postMessage({
                    cmd: T,
                    code: e
                }), postMessage({
                    cmd: w,
                    w: t,
                    h: r
                }), b = t, Ne = r, _r.useOffscreen() && (_r.offscreenCanvas = new OffscreenCanvas(t, r), _r.offscreenCanvasGL = _r.offscreenCanvas.getContext("webgl"), _r.webglObj = u(_r.offscreenCanvasGL, _r._opt.openWebglAlignment), _r.offscreenCanvas.addEventListener("webglcontextlost", _r.onOffscreenCanvasWebglContextLost, !1), _r.offscreenCanvas.addEventListener("webglcontextrestored", _r.onOffscreenCanvasWebglContextRestored, !1))
            },
            audioInfo: function (e, t, r) {
                postMessage({
                    cmd: U,
                    code: e
                }), postMessage({
                    cmd: A,
                    sampleRate: t,
                    channels: r,
                    depth: or
                }), kt = r
            },
            yuvData: function (t, r) {
                if (_r.isDestroyed) return void _r.debug.log("worker", "yuvData, decoder is destroyed and return");
                const i = b * Ne * 3 / 2;
                let s = e.HEAPU8.subarray(t, t + i),
                    n = new Uint8Array(s);
                if (xt = null, _r.useOffscreen()) try {
                    if (jt) return;
                    _r.webglObj.renderYUV(b, Ne, n);
                    let e = _r.offscreenCanvas.transferToImageBitmap();
                    postMessage({
                        cmd: S,
                        buffer: e,
                        delay: _r.delay,
                        ts: r
                    }, [e])
                } catch (e) {
                    _r.debug.error("worker", "yuvData, transferToImageBitmap error is", e)
                } else postMessage({
                    cmd: S,
                    output: n,
                    delay: _r.delay,
                    ts: r
                }, [n.buffer])
            },
            pcmData: function (t, r, s) {
                if (_r.isDestroyed) return void _r.debug.log("worker", "pcmData, decoder is destroyed and return");
                let n = r,
                    a = [],
                    o = 0,
                    d = _r._opt.audioBufferSize;
                for (let r = 0; r < 2; r++) {
                    let i = e.HEAPU32[(t >> 2) + r] >> 2;
                    a[r] = e.HEAPF32.subarray(i, i + n)
                }
                if (Tt) {
                    if (!(n >= (r = d - Tt))) return Tt += n, i[0] = Float32Array.of(...i[0], ...a[0]), void(2 == kt && (i[1] = Float32Array.of(...i[1], ...a[1])));
                    Ut[0] = Float32Array.of(...i[0], ...a[0].subarray(0, r)), 2 == kt && (Ut[1] = Float32Array.of(...i[1], ...a[1].subarray(0, r))), postMessage({
                        cmd: E,
                        buffer: Ut,
                        ts: s
                    }, Ut.map((e => e.buffer))), o = r, n -= r
                }
                for (Tt = n; Tt >= d; Tt -= d) Ut[0] = a[0].slice(o, o += d), 2 == kt && (Ut[1] = a[1].slice(o - d, o)), postMessage({
                    cmd: E,
                    buffer: Ut,
                    ts: s
                }, Ut.map((e => e.buffer)));
                Tt && (i[0] = a[0].slice(o), 2 == kt && (i[1] = a[1].slice(o)))
            },
            errorInfo: function (e) {
                null === xt && (xt = ft());
                const t = ft(),
                    r = (i = Bt > 0 ? 2 * Bt : 5e3, s = 1e3, n = 5e3, Math.max(Math.min(i, Math.max(s, n)), Math.min(s, n)));
                var i, s, n;
                const a = t - xt;
                a > r && (_r.debug.warn("worker", `errorInfo() emit simdDecodeError and\n                iframeIntervalTimestamp is ${Bt} and diff is ${a} and maxDiff is ${r}\n                and replay`), Zt = !0, postMessage({
                    cmd: z
                }))
            },
            sendWebsocketMessage: function (e) {
                a ? a.readyState === Se ? a.send(e) : _r.debug.error("worker", "socket is not open") : _r.debug.error("worker", "socket is null")
            },
            timeEnd: function () {},
            postStreamToMain(e, t) {
                postMessage({
                    cmd: G,
                    type: t,
                    buffer: e
                }, [e.buffer])
            }
        };
        _r.debug = new Dt(_r);
        let gr = null;
        e.AudioDecoder && (gr = new e.AudioDecoder(_r));
        let yr = null;
        e.VideoDecoder && (yr = _r._opt.useSIMD ? new e.VideoDecoderSimd(_r) : new e.VideoDecoder(_r)), postMessage({
            cmd: v
        }), self.onmessage = function (e) {
            let t = e.data;
            if (!_r.isTimeWait) switch (t.cmd) {
                case re:
                    try {
                        _r._opt = Object.assign(_r._opt, JSON.parse(t.opt))
                    } catch (e) {}
                    _r.init();
                    break;
                case ie:
                    _r.pushBuffer(t.buffer, t.options);
                    break;
                case se:
                    _r.decodeAudio(t.buffer, t.ts);
                    break;
                case ne:
                    _r.decodeVideo(t.buffer, t.ts, t.isIFrame);
                    break;
                case de:
                    _r.clearBuffer(t.needClear), _r.isTimeWait = !0, setTimeout((() => {
                        _r.isTimeWait = !1
                    }), 1e3);
                    break;
                case le:
                    _r.fetchStream(t.url, JSON.parse(t.opt));
                    break;
                case ae:
                    _r.close();
                    break;
                case oe:
                    _r.debug.log("worker", "updateConfig", t.key, t.value), _r._opt[t.key] = t.value, "playbackRate" === t.key && (_r.playbackUpdatePlaybackRate(), _r.isPlaybackCacheBeforeDecodeForFpsRender() && _r.playbackCacheLoop());
                    break;
                case ue:
                    _r.sendWebsocketMessage(t.message);
                    break;
                case ce:
                    mr.$video.currentTime = Number(t.message)
            }
        }
    }
    Date.now || (Date.now = function () {
        return (new Date).getTime()
    });
    const Ci = [];
    Ci.push(t({
        printErr: function (e) {
            console.warn("EasyPlayerPro[❌❌❌][worker]", e)
        }
    })), Promise.all(Ci).then((e => {
        ki(e[0])
    }))
}));