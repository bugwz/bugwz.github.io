(() => {
  var r = {
      1103: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.resetByEmail =
            t.resetByPhone =
            t.signInByPhone =
            t.signInByPassword =
            t.signUpByPhone =
            t.getEmailCode =
            t.getSmsCaptcha =
            t.getCaptchaJsUrl =
            t.signInBythirdParty =
            t.getWxLoginState =
            t.getWxQrCodeUrl =
              void 0);
        const a = r(1804);
        (t.getWxQrCodeUrl = function () {
          return a.default({
            url: "/login/getWxLoginQrCodeUrl",
            method: "POST",
            options: { _api: !0 },
          });
        }),
          (t.getWxLoginState = function () {
            return a.default({
              url: "/login/wxLoginAuthorized",
              method: "POST",
              options: { _api: !0 },
            });
          }),
          (t.signInBythirdParty = function (e) {
            return a.default({
              url: "/accountcenter/login/getSocialAccountAuthUrl",
              method: "POST",
              data: e,
            });
          }),
          (t.getCaptchaJsUrl = function () {
            return a.default({
              url: "/hatchery/captcha/getCaptchaJsUrl",
              method: "POST",
              data: { account_type: 4 },
            });
          }),
          (t.getSmsCaptcha = function (e, t, r) {
            return a.default({
              url: "/accountcenter/tools/sendSmsCaptcha",
              method: "POST",
              data: { use_type: e, phone: t, captcha_ticket: r },
            });
          }),
          (t.getEmailCode = function (e, t) {
            return a.default({
              url: "/accountcenter/tools/sendResetPwdEmail",
              method: "POST",
              data: { email: e, captcha_ticket: t },
            });
          }),
          (t.signUpByPhone = function (e) {
            return a.default({
              url: "/accountcenter/login/phoneRegisterAccount",
              method: "POST",
              data: e,
            });
          }),
          (t.signInByPassword = function (e) {
            return a.default({
              url: "/accountcenter/login/accountPasswordLogin",
              method: "POST",
              data: e,
            });
          }),
          (t.signInByPhone = function (e, t, r = 0) {
            return a.default({
              url: "/accountcenter/login/phoneCodeLogin",
              method: "POST",
              data: { phone: e, code: t, login_source: r },
            });
          }),
          (t.resetByPhone = function (e) {
            return a.default({
              url: "/accountcenter/tools/resetPasswordByPhone",
              method: "POST",
              data: e,
            });
          }),
          (t.resetByEmail = function (e) {
            return a.default({
              url: "/accountcenter/tools/resetPasswordByEmail",
              method: "POST",
              data: e,
            });
          });
      },
      9056: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e) {
            return `
  <div class="ckt-login-advert-wrap ${e.img ? "" : "hidden"}">
    <img src=${e.img} alt="" />
  </div>
  `;
          });
      },
      8004: (e, t) => {
        "use strict";
        t.Z = function (e) {
          return `
    <div class="footer-remark">
      <div class="left">
        <span>${e ? "注册" : "登录"}即同意</span>
        <a href="https://www.chuangkit.com/help/useragreement" target="_blank">用户协议</a>
        和
        <a href="https://www.chuangkit.com/help/privacypolicy" target="_blank">隐私政策</a>
      </div>
      <div class="right">
        <a class="${e ? "signUp" : "login"}-footer-right">${
            e ? "去登录" : "手机号注册"
          }</a>
      </div>
    </div>
  `;
        };
      },
      9067: (e, t) => {
        "use strict";
        t.Z = function (e) {
          return `
    <div class="form-wrap">
      <!-- 错误提示 -->
      <p class="${e}-error-msg error-msg"></p>
      <!-- 表单信息 -->
      <input class="form-item input ${e}-phone" placeholder="输入手机号" data-type="phone">
      ${
        "retrieve" === e
          ? `<input class="form-item input hidden ${e}-email" placeholder="输入邮箱" data-type="email">`
          : ""
      }
      <div class="sms-code-wrap">
        <input class="form-item input" placeholder="输入短信验证码" maxlength="6" data-type="sms">
        <button class="sms-code-button ${e}-code-button" data-type="phone">获取短信验证码</button>
      </div>
      <input class="form-item input" type="password" maxlength="18" placeholder="输入6-18位密码" data-type="password1">
      <input class="form-item input" type="password" maxlength="18" placeholder="确认密码" data-type="password2">
      <button class="form-item button ${e}-submit-button" ${
            "retrieve" === e && "data-exclude=" + JSON.stringify(["email"])
          }>
        ${"retrieve" === e ? "找回密码" : "立即注册"}
      </button>
    </div>
    <!-- 滑块验证 -->
    <div id="TCaptcha"></div>
  `;
        };
      },
      1785: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const a = r(7103),
          o = r(9056),
          n = r(1265);
        t.default = function (e) {
          return `
    <!-- 广告运营位 -->
    ${o.default(e)}
    <!-- 登录主体 -->
    ${a.default}
    <!-- 提示模块 -->
    ${n.default}
  `;
        };
      },
      9488: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(4617);
        t.default = function (t, e, r) {
          if ("account-toggle-login" === r) {
            const o = ["phone", "password"];
            var a = o.find((e) => e !== t._data.curStatus);
            return (
              t.changeData("curStatus", a),
              (t.getEle(".password-title").innerText = `${
                "password" === a ? "账号密码" : "手机验证码"
              }登录`),
              void (t.getEle(".account-toggle-login").innerText = `${
                "password" === a ? "手机验证码" : "账号密码"
              }登录`)
            );
          }
          r.includes("phone-code-button") &&
            ((r = t.getEle(".phone-code-button").getAttribute("data-type")),
            n.sendCaptcha(t, r, !0));
        };
      },
      8976: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(4617);
        t.default = function (e, t, r) {
          if (r.includes("toggle-button")) {
            var a = e._data.curStatus,
              o = e._data.prevStatus;
            return (
              r.includes("password")
                ? (e.changeData("prevStatus", a),
                  e.changeData("curStatus", "wx"))
                : e.changeData("curStatus", o),
              void t.classList.toggle("password")
            );
          }
          r.includes("way-item")
            ? ((t = Number(t.getAttribute("data-key"))), n.otherWayLogin(e, t))
            : "solve-error" === r && n.otherWayLogin(e, 3);
        };
      },
      7985: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(4617);
        t.default = function (t, e, r) {
          if ("forget-password" === r)
            return (
              t.changeData("prevStatus", t._data.curStatus),
              void t.changeData("curStatus", "retrieve")
            );
          if (r.includes("retrieve-go-back"))
            t.changeData("curStatus", t._data.prevStatus);
          else {
            if ("tab-item" === r) {
              const o = ["email", "phone"];
              var a = t.getEle(".retrieve-tab");
              Array.from(a.children).forEach((e) =>
                e.classList.remove("active")
              ),
                e.classList.add("active");
              const n = e.getAttribute("data-type"),
                s = o.filter((e) => e !== n);
              i.eleHiddenHandler(t, `.retrieve-${n}`, "remove"),
                s.forEach((e) =>
                  i.eleHiddenHandler(t, `.retrieve-${e}`, "add")
                );
              e = e.getAttribute("data-text");
              return (
                (t.getEle(
                  ".retrieve-code-button"
                ).innerText = `获取${e}验证码`),
                (t.getEle(".retrieve-error-msg").innerText = ""),
                t.getEle(".retrieve-code-button").setAttribute("data-type", n),
                void t
                  .getEle(".retrieve-submit-button")
                  .setAttribute("data-exclude", JSON.stringify(s))
              );
            }
            r.includes("retrieve-code-button") &&
              ((r = t
                .getEle(".retrieve-code-button")
                .getAttribute("data-type")),
              i.sendCaptcha(t, r, !0));
          }
        };
      },
      568: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const o = r(4617);
        t.default = function (e, t, r) {
          var a;
          "login-footer-right" === r &&
            ((a = e._data.curStatus),
            clearInterval(e._data.wxTimer),
            e.changeData("statusBeforeSignUp", a),
            e.changeData("curStatus", "signUp")),
            ("signUp-footer-right" !== r && !r.includes("signUp-go-back")) ||
              ((a = e._data.statusBeforeSignUp), e.changeData("curStatus", a)),
            r.includes("signUp-code-button") &&
              ((t = t.getAttribute("data-type")), o.sendCaptcha(e, t, !0));
        };
      },
      7919: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const d = r(2966),
          p = r(4617);
        t.default = function (r, e, a) {
          if (a.includes("form-item button")) {
            const { curStatus: i, isOverCheckOnBlur: t } = r._data;
            if (t) {
              const c = JSON.parse(e.getAttribute("data-exclude"));
              var o,
                n = `${i}FormData`,
                a = r._data[n];
              const l = d.deepClone(a);
              c &&
                c.length &&
                c.forEach((e) => {
                  delete l[e];
                });
              let t = !0;
              for (o in l) {
                if (!t) return;
                p.validateField(o, l[o], (e) => {
                  e && ((r.getEle(`.${i}-error-msg`).innerText = e), (t = !1));
                });
              }
              if (l.hasOwnProperty("password2")) {
                var { password1: e, password2: a } = l;
                if (e !== a)
                  return void (r.getEle(`.${i}-error-msg`).innerText =
                    "密码不一致");
              }
              switch (i) {
                case "password":
                  p.signInByPassword(r, n);
                  break;
                case "phone":
                  p.signInByPhone(r, n);
                  break;
                case "signUp":
                  p.signUpByPhone(r, n);
                  break;
                case "retrieve":
                  var s = r
                    .getEle(".retrieve-code-button")
                    .getAttribute("data-type");
                  "phone" === s
                    ? p.resetByPhone(r, n)
                    : "email" === s && p.resetByEmail(r, n);
                  break;
                default:
                  r.$message("无效的提交按钮");
              }
            }
          }
        };
      },
      9065: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e, t, r) {
            (!r.includes("success-go-back") && "success-button" !== r) ||
              ((r = e._data.prevStatus),
              console.log(r),
              e.changeData("curStatus", r));
          });
      },
      1688: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createStyle =
            t.createDOM =
            t.dispatchBlurEvents =
            t.dispatchClickEvents =
              void 0);
        const a = r(883),
          o = r(1785),
          n = r(4617),
          s = r(7919),
          i = r(8976),
          c = r(9488),
          l = r(7985),
          d = r(568),
          p = r(9065);
        (t.dispatchClickEvents = function (e, t) {
          var r = t.target,
            { className: t } = r;
          document.querySelector("#tcaptcha_transform") ||
            (s.default(e, r, t),
            i.default(e, r, t),
            c.default(e, r, t),
            l.default(e, r, t),
            d.default(e, r, t),
            p.default(e, r, t));
        }),
          (t.dispatchBlurEvents = function (a, e) {
            (e = e.querySelectorAll(".form-item.input")),
              Array.from(e).forEach((r) => {
                r.addEventListener("blur", () => {
                  const t = a._data.curStatus;
                  var e = r.getAttribute("data-type");
                  a.changeData([`${t}FormData`, e], r.value),
                    n.validateField(e, a._data[`${t}FormData`][e], (e) => {
                      e && (a.getEle(`.${t}-error-msg`).innerText = e);
                    });
                });
              });
          }),
          (t.createDOM = function (e) {
            const t = document.createElement("div");
            (t.className = "ckt-sdk-loginwrapper"),
              (t.innerHTML = o.default(e)),
              e.el.appendChild(t);
          }),
          (t.createStyle = function () {
            const e = document.head;
            if (!e.querySelector(".ckt-sdk-login-style")) {
              const r = document.createElement("style");
              var t = document.createTextNode(a.default);
              (r.className = "ckt-sdk-login-style"),
                r.appendChild(t),
                e.appendChild(r);
            }
          });
      },
      4722: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.sendCaptcha = void 0);
        const n = r(1103),
          s = r(9532),
          i = r(8318),
          c = r(3306),
          l = (e) =>
            new Promise((t) => {
              try {
                window.capDestroy(),
                  window.capInit(e.getEle("#TCaptcha"), {
                    type: "popup",
                    callback: (e) => {
                      0 === e.ret ? t(e.ticket) : t(0);
                    },
                  });
              } catch (e) {
                t(0), console.log(e);
              }
            });
        t.sendCaptcha = async (e, t, r) => {
          var { curStatus: a } = e._data,
            a = e._data[`${a}Countdown`]?.[t] || 0;
          if (
            !(0 < a) &&
            (!r ||
              ((t, e) => {
                let r = !0;
                const { curStatus: a } = t._data;
                var o = t._data[`${a}FormData`];
                return (
                  s.validateField(e, o[e], (e) => {
                    e &&
                      ((r = !1), (t.getEle(`.${a}-error-msg`).innerText = e));
                  }),
                  r
                );
              })(e, t))
          ) {
            const o = await (async () => {
              const e = document.getElementById("TCaptchaScript");
              e && e.parentNode.removeChild(e);
              try {
                var {
                  data: { data: t },
                } = await n.getCaptchaJsUrl();
                let e = document.createElement("script");
                return (
                  (e.type = "text/javascript"),
                  (e.src = t),
                  (e.id = "TCaptchaScript"),
                  document.body.append(e),
                  e
                );
              } catch (e) {
                return console.log(e), !1;
              }
            })();
            o &&
              (o.onload = () =>
                (async (e, t) => {
                  var r = await l(e);
                  r &&
                    (e.changeData("captchaTicket", r),
                    "phone" === t
                      ? i.getSMSCode(e)
                      : "email" === t
                      ? i.getEmailCode(e)
                      : "password" === t &&
                        (({ curStatus: t } = e._data),
                        (t = `${t}FormData`),
                        c.signInByPassword(e, t)));
                })(e, t));
          }
        };
      },
      8318: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getEmailCode = t.getSMSCode = void 0);
        const i = r(1103),
          c = (t, r) => {
            const { curStatus: a } = t._data;
            var e = `${a}-${r}-timer`;
            const o = t.getEle(".ckt-sdk-loginwrapper");
            console.log(`${a}-code-button[data-type=${r}]`);
            const n = o.querySelector(`.${a}-code-button[data-type=${r}]`);
            let s = t._data[`${a}Countdown`][r];
            n.classList.add("wait"),
              (n.innerText = String(s)),
              t.changeData(
                e,
                setInterval(() => {
                  if (((n.innerText = String(--s)), s <= 0)) {
                    t.changeData([`${a}Countdown`, r], 0),
                      n.classList.remove("wait"),
                      t.clearTimer(`${a}-${r}`);
                    let e =
                      "email" === r
                        ? "获取邮箱验证码"
                        : "phone" === r
                        ? "获取短信验证码"
                        : "";
                    n.innerText = e;
                  }
                }, 1e3)
              );
          };
        t.getSMSCode = async (t) => {
          try {
            var { curStatus: r, captchaTicket: a } = t._data;
            let e;
            var o = t._data[`${r}FormData`];
            switch (r) {
              case "retrieve":
                e = 20;
                break;
              case "signUp":
                e = 2;
                break;
              default:
                e = 10;
            }
            var {
              data: { code: n, msg: s },
            } = await i.getSmsCaptcha(e, o.phone, a);
            switch (n) {
              case 200:
                t.$message("验证码已发送");
                t.changeData([`${r}Countdown`, "phone"], 59), c(t, "phone");
                break;
              case -201:
                t.$message("滑块验证ticket有误");
                break;
              case -202:
                t.$message("该手机号已注册");
                break;
              case -203:
                t.$message("手机号未注册");
                break;
              case -225:
                t.$message("请求次数达到上限");
                break;
              default:
                t.$message(`短信发送失败，错误原因：${s || n}`);
            }
          } catch (e) {
            console.log(e);
          }
        };
        t.getEmailCode = async (e) => {
          try {
            var { curStatus: t, captchaTicket: r } = e._data,
              a = e._data[`${t}FormData`],
              {
                data: { code: o, msg: n },
              } = await i.getEmailCode(a.email, r);
            switch (o) {
              case 200:
                e.$message("邮件已发送");
                e.changeData([`${t}Countdown`, "email"], 59), c(e, "email");
                break;
              case -201:
                e.$message("滑块验证ticket有误");
                break;
              case -202:
                e.$message("用户不存在");
                break;
              default:
                e.$message(`邮件发送失败，错误原因：${n || o}`);
            }
          } catch (e) {
            console.log(e);
          }
        };
      },
      3306: (e, o, t) => {
        "use strict";
        Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.signInByPhone =
            o.signInByPassword =
            o.otherWayLogin =
            o.updateQRCode =
            o.getWxQrCodeUrl =
              void 0);
        const d = t(7883),
          c = t(4722),
          l = t(1103);
        o.getWxQrCodeUrl = async (e) => {
          try {
            var {
              data: { code: t, url: r, msg: a },
            } = await l.getWxQrCodeUrl();
            1 === t
              ? (s(e, r),
                sessionStorage.setItem("wxAuth", "true"),
                n(),
                e.clearTimer("wx"),
                e.changeData(
                  "wx-timer",
                  setInterval(async () => {
                    (await n()) && (e.clearTimer("wx"), e.loginSuccessCb());
                  }, 3e3)
                ))
              : -1 === t
              ? (e._data.postMaxCount < 1 && o.getWxQrCodeUrl(e),
                e.changeData("postMaxCount", ++e._data.postMaxCount))
              : e.$message(`获取微信登录的二维码地址出错，错误原因：${a || t}`);
          } catch (e) {
            console.log("获取微信登录的二维码地址出错", e);
          }
        };
        const n = () => {
          if (sessionStorage.getItem("wxAuth"))
            return new Promise(async (e) => {
              var {
                data: { code: t },
              } = await l.getWxLoginState();
              e(1 === t);
            });
        };
        function s(e, t) {
          const [r, o, n, a] = [160, "#fff", "#000", t],
            { modules: s } = d.default(a),
            i = r / s.length,
            c = e.getEle(".qrcode-canvas"),
            l = c.getContext("2d");
          s.forEach((e, a) => {
            e.forEach((e, t) => {
              l.fillStyle = e ? n : o;
              var r = Math.ceil((t + 1) * i) - Math.floor(t * i),
                e = Math.ceil((a + 1) * i) - Math.floor(a * i);
              l.fillRect(Math.round(t * i), Math.round(a * i), r, e);
            });
          });
        }
        o.updateQRCode = s;
        o.otherWayLogin = async function (e, t) {
          var r = location.host.includes("enterprise");
          let a = "";
          [
            "dev-enterprise.",
            "local-enterprise",
            "local.",
            "beta-enterprise.",
            "moni-enterprise.",
          ].forEach((e) => {
            location.host.includes(e) && (a = e);
          });
          let o = "";
          ["dev-www.", "local-www.", "local.", "beta.", "moniwww."].forEach(
            (e) => {
              location.host.includes(e) && (o = e);
            }
          );
          let n = r
            ? `https://${a || "enterprise."}chuangkit.com/`
            : `https://${o}chuangkit.com/designtools/designindex`;
          n = n.replace(/^http(s)?:\/\//, "");
          const s = { social_account_source: t, redirect_url: n };
          [3, 5].includes(t) && (s.biz_type = 1);
          try {
            const {
              data: { url: n },
            } = await l.signInBythirdParty(s);
            n && (window.location.href = n);
          } catch (e) {
            console.log(e);
          }
        };
        o.signInByPassword = async (e, t) => {
          try {
            var { account: r, password: a } = e._data[t],
              { captchaTicket: o } = e._data;
            const i = { username: r, password: a };
            o && (i.captcha_ticket = o);
            var {
              data: { code: n, msg: s },
            } = await l.signInByPassword(i);
            switch (n) {
              case 1:
                e.$message("登录成功"), e.loginSuccessCb(), e.clearTimer("wx");
                break;
              case -1:
              case -2:
                e.$message("用户名或密码错误");
                break;
              case -3:
              case -4:
                c.sendCaptcha(e, "password", !1);
                break;
              default:
                e.$message(`登录失败，错误原因：${s || n}`);
            }
          } catch (e) {
            console.log(e);
          }
        };
        o.signInByPhone = async (e, t) => {
          try {
            var { phone: r, sms: a } = e._data[t],
              {
                data: { code: o, msg: n },
              } = await l.signInByPhone(r, a);
            switch (o) {
              case 200:
                e.$message("登录成功"), e.clearTimer("wx"), e.loginSuccessCb();
                break;
              case -201:
                e.$message("短信验证码错误");
                break;
              default:
                e.$message(`登录失败，错误原因：${n || o}`);
            }
          } catch (e) {
            console.log(e);
          }
        };
      },
      3682: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.resetByEmail = t.resetByPhone = void 0);
        const i = r(1103),
          c = r(7316);
        t.resetByPhone = async (e, t) => {
          var { phone: r, password1: a, sms: t } = e._data[t];
          try {
            var o = { phone: r, password: a, sms_code: t, use_type: "20" },
              {
                data: { code: n, msg: s },
              } = await i.resetByPhone(o);
            200 === n
              ? (e.$message("密码重置成功"), c.turnToSuccess(e, "retrieve"))
              : e.$message(`密码重置失败，错误原因：${s || n}`);
          } catch (e) {
            console.log(e);
          }
        };
        t.resetByEmail = async (e, t) => {
          var { email: r, password1: a, sms: t } = e._data[t];
          try {
            var o = { email: r, password: a, email_code: t, use_type: "25" },
              {
                data: { code: n, msg: s },
              } = await i.resetByEmail(o);
            200 === n
              ? (e.$message("密码重置成功"), c.turnToSuccess(e, "retrieve"))
              : e.$message(`密码重置失败，错误原因：${s || n}`);
          } catch (e) {
            console.log(e);
          }
        };
      },
      9532: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.validateField = void 0);
        const n = r(7489);
        t.validateField = (e, r, t) => {
          const a = n.SIGN_UP[e];
          let o = "";
          a.some((e, t) =>
            (e.required && !r) || (e.pattern && !e.pattern.test(r))
              ? ((o = a[t].message), !0)
              : void 0
          ),
            o && t(o);
        };
      },
      9843: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.signUpByPhone = void 0);
        const i = r(1103),
          c = r(7316);
        t.signUpByPhone = async (e, t) => {
          var { phone: r, password1: a, sms: t } = e._data[t];
          try {
            var o = { phone: r, password: a, sms_captcha: t },
              {
                data: { code: n, msg: s },
              } = await i.signUpByPhone(o);
            switch (n) {
              case 1:
                e.$message("注册成功"),
                  e.signUpSuccessCb(),
                  c.turnToSuccess(e, "signUp");
                break;
              case -2:
                e.$message("短信验证码错误");
                break;
              default:
                e.$message(`注册失败，错误原因：${s || n}`);
            }
          } catch (e) {
            console.log(e);
          }
        };
      },
      7316: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.turnToSuccess = void 0);
        t.turnToSuccess = (e, t) => {
          let r = "";
          "retrieve" === t
            ? (r = "重置密码")
            : "signUp" === t && (r = "注册账号");
          const a = e.getEle(".success-title-content"),
            o = e.getEle(".success-text");
          (a.innerText = r),
            (o.innerText = r + "成功"),
            e.changeData("curStatus", "success");
        };
      },
      6719: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.eleHiddenHandler = void 0),
          (t.eleHiddenHandler = function (e, t, r) {
            e.getEle(t).classList.contains("hidden") ===
              { add: !1, remove: !0 }[r] && e.getEle(t).classList[r]("hidden");
          });
      },
      4617: function (e, t, r) {
        "use strict";
        var a =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, a) {
                  void 0 === a && (a = r),
                    Object.defineProperty(e, a, {
                      enumerable: !0,
                      get: function () {
                        return t[r];
                      },
                    });
                }
              : function (e, t, r, a) {
                  e[(a = void 0 === a ? r : a)] = t[r];
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var r in e)
                "default" === r ||
                  Object.prototype.hasOwnProperty.call(t, r) ||
                  a(t, e, r);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          o(r(3306), t),
          o(r(4722), t),
          o(r(8318), t),
          o(r(9843), t),
          o(r(3682), t),
          o(r(9532), t),
          o(r(6719), t);
      },
      9812: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.update = t.mounted = t.created = void 0);
        const a = r(1688),
          o = r(4617);
        (t.created = function (e) {
          const t = e.el.querySelector(".ckt-sdk-loginwrapper");
          t && t.remove(), a.createStyle(), a.createDOM(e);
        }),
          (t.mounted = function (e) {
            const t = e.getEle(".ckt-sdk-loginwrapper");
            t.addEventListener("click", a.dispatchClickEvents.bind(null, e)),
              a.dispatchBlurEvents(e, t),
              o.getWxQrCodeUrl(e);
          }),
          (t.update = function (e) {
            var {
              data: { curStatus: t },
            } = e;
            if ("wx" !== t) {
              const r = e.getEle(`.${t}-error-msg`);
              r && (r.innerText = ""),
                e.changeData("isOverCheckOnBlur", !0),
                e.clearTimer("wx");
            }
            return "wx" === t
              ? (o.getWxQrCodeUrl(e),
                o.eleHiddenHandler(e, ".sign-up-wrap", "add"),
                o.eleHiddenHandler(e, ".account-login", "add"),
                o.eleHiddenHandler(e, ".sign-in-wrap", "remove"),
                void o.eleHiddenHandler(e, ".wx-login", "remove"))
              : "password" === t
              ? (o.eleHiddenHandler(e, ".sign-up-wrap", "add"),
                o.eleHiddenHandler(e, ".retrieve-wrap", "add"),
                o.eleHiddenHandler(e, ".wx-login", "add"),
                o.eleHiddenHandler(e, ".phone-login-wrapper", "add"),
                o.eleHiddenHandler(e, ".success-wrap", "add"),
                o.eleHiddenHandler(e, ".sign-in-wrap", "remove"),
                o.eleHiddenHandler(e, ".password-login-wrapper", "remove"),
                void o.eleHiddenHandler(e, ".account-login", "remove"))
              : "phone" === t
              ? (o.eleHiddenHandler(e, ".sign-up-wrap", "add"),
                o.eleHiddenHandler(e, ".retrieve-wrap", "add"),
                o.eleHiddenHandler(e, ".wx-login", "add"),
                o.eleHiddenHandler(e, ".password-login-wrapper", "add"),
                o.eleHiddenHandler(e, ".success-wrap", "add"),
                o.eleHiddenHandler(e, ".sign-in-wrap", "remove"),
                o.eleHiddenHandler(e, ".phone-login-wrapper", "remove"),
                void o.eleHiddenHandler(e, ".account-login", "remove"))
              : ("retrieve" === t &&
                  (o.eleHiddenHandler(e, ".sign-in-wrap", "add"),
                  o.eleHiddenHandler(e, ".retrieve-wrap", "remove")),
                "signUp" === t &&
                  (o.eleHiddenHandler(e, ".sign-in-wrap", "add"),
                  o.eleHiddenHandler(e, ".retrieve-wrap", "add"),
                  o.eleHiddenHandler(e, ".sign-up-wrap", "remove")),
                void (
                  "success" === t &&
                  (o.eleHiddenHandler(e, ".sign-in-wrap", "add"),
                  o.eleHiddenHandler(e, ".sign-up-wrap", "add"),
                  o.eleHiddenHandler(e, ".retrieve-wrap", "add"),
                  o.eleHiddenHandler(e, ".success-wrap", "remove"))
                ));
          });
      },
      7489: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SIGN_UP = void 0),
          (t.SIGN_UP = {
            phone: [
              { required: !0, message: "请输入手机号" },
              { pattern: /^1\d{10}$/, message: "请输入正确的手机号" },
            ],
            sms: [{ required: !0, message: "请输入验证码" }],
            password1: [
              { required: !0, message: "请输入密码" },
              { pattern: /^[a-zA-Z0-9!@#\\*_]{6,18}$/, message: "密码错误" },
            ],
            password2: [
              { required: !0, message: "请确认密码" },
              { pattern: /^[a-zA-Z0-9!@#\\*_]{6,18}$/, message: "密码错误" },
            ],
            account: [
              { required: !0, message: "请输入用户名" },
              {
                pattern:
                  /(^1\d{10}$)|(^\w[-\w.+]*@([A-Za-z0-9][-_A-Za-z0-9]+\.)+[A-Za-z]{2,14}$)/,
                message: "请输入符合要求的用户名",
              },
            ],
            password: [
              { required: !0, message: "请输入密码" },
              { pattern: /^[a-zA-Z0-9!@#\\*_]{6,18}$/, message: "密码错误" },
            ],
            email: [
              { required: !0, message: "请输入邮箱" },
              {
                message: "请输入正确的邮箱地址",
                pattern:
                  /^\w[-\w.+]*@([A-Za-z0-9][-_A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/,
              },
            ],
          });
      },
      4498: (e, t, r) => {
        "use strict";
        r.d(t, { Z: () => a });
        const a = {
          baseUrl: "https://www.chuangkit.com/accountcenter/v2/assets",
          domainConf: {
            API: "https://local-api.chuangkit.com",
            APIV2: "https://local-api-v2.chuangkit.com",
            APIGW: "https://local-gw.chuangkit.com",
          },
        };
      },
      883: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => n });
        var a = r(4498),
          { baseUrl: o } = a.Z,
          t = `
  .ckt-sdk-loginwrapper .toggle-sign-way {
    position: absolute;
    top: 0;
    right: 0;
  }
  .ckt-sdk-loginwrapper .toggle-button {
    width: 70px;
    height: 64px;
    background: url(${o}/login-sprite.ba948fa9.svg) -478px 0;
    cursor: pointer;
  }
  .ckt-sdk-loginwrapper .toggle-button:hover {
    background-position: -630px 0;
  }
  .ckt-sdk-loginwrapper .toggle-button.password {
    background-position: -554px 0;
  }
  .ckt-sdk-loginwrapper .toggle-button.password:hover {
    background-position: -706px 0;
  }
  .ckt-sdk-loginwrapper .toggle-tips {
    position: absolute;
    right: 64px;
    top: 16px;
    width: 111px;
    height: 24px;
    font-size: 12px;
    color: #077efc;
    line-height: 24px;
    background: url(${o}/login-tip-border.faf618c9.svg);
  }
`,
          { baseUrl: r } = a.Z,
          o = `
  .ckt-sdk-loginwrapper .wx-login {
    padding-top: 64px;
    margin: 0 auto;
  }
  .ckt-sdk-loginwrapper .wx-title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    font-size: 20px;
    font-weight: 700;
    color: rgba(0, 0, 0, .8);
  }
  .ckt-sdk-loginwrapper .wx-title i {
    width: 26px;
    height: 26px;
    background: url(${r}/login-sprite.ba948fa9.svg) 0 0;
    margin-right: 10px;
  }
  .ckt-sdk-loginwrapper .qrcode-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 184px;
    height: 184px;
    background: #fff;
    border: 1px solid #eee;
    border-radius: 6px;
    margin: 24px auto;
    padding: 12px;
    box-sizing: border-box;
  }
  .ckt-sdk-loginwrapper .wx-error {
    margin-top: 8px;
    font-size: 12px;
    color: #8693ab;
  }
  .ckt-sdk-loginwrapper .wx-error .solve-error {
    color: #0773fc;
  }
  .ckt-sdk-loginwrapper .wx-error .solve-error:hover {
    color: #00a2ed;
    cursor: pointer;
  }
`,
          { baseUrl: r } = a.Z,
          r = `
  .ckt-sdk-loginwrapper .other-login {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 32px 0 24px;
  }
  .ckt-sdk-loginwrapper .way-item:not(:last-child) {
    margin-right: 42px;
  }
  .ckt-sdk-loginwrapper .way-item {
    width: 48px;
    height: 48px;
    background: url(${r}/login-sprite.ba948fa9.svg);
    cursor: pointer;
  }
  ${Object.entries({ qq: -94, weibo: -142, wx: -190, dingtalk: -238 }).reduce(
    (e, [t, r]) =>
      (e += `
      .ckt-sdk-loginwrapper .way-item-${t} {
        background-position-x: ${r}px;
      }
      .ckt-sdk-loginwrapper .way-item-${t}:hover {
        background-position-x: ${r + -192}px;
      }
    `),
    ""
  )}
`;
        var { baseUrl: a } = a.Z;
        const n = `
  .ckt-sdk-loginwrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-align: center;
  } 
  .ckt-sdk-loginwrapper p, .ckt-sdk-loginwrapper ul, .ckt-sdk-loginwrapper li  {
    margin: 0;
    line-height: 1;
    list-style: none;
  }
  .ckt-sdk-loginwrapper button:focus, .ckt-sdk-loginwrapper input:focus {
    outline: 0;
    border: none;
    box-shadow: none;
  }
  .ckt-sdk-loginwrapper .hidden {
    display: none!important;
  }
  .ckt-sdk-loginwrapper .wait {
    cursor: wait!important;
  }

  
  .ckt-sdk-loginwrapper .ckt-login-advert-wrap {
    width: 320px;
    height: 500px;

  }
  .ckt-sdk-loginwrapper .ckt-login-advert-wrap img {
    width: 100%;
    height: 100%;
  }
  


  ${`
  .ckt-sdk-loginwrapper .sign-in-wrap,
  .ckt-sdk-loginwrapper .retrieve-wrap,
  .ckt-sdk-loginwrapper .sign-up-wrap,
  .ckt-sdk-loginwrapper .success-wrap {
    position: relative;
    width: 430px;
    height: 500px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 0 2px 0 rgb(0 0 0 / 12%);
    box-sizing: border-box;
    overflow: hidden;
  }
  ${t}

  ${o}

  ${r}

  
  .ckt-sdk-loginwrapper .footer-remark {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    position: absolute;
    bottom: 0;
    width: 430px;
    padding: 14px 16px;
    font-size: 12px;
    line-height: 12px;
    color: #8693ab;
    background: #f8f8fb;
    box-sizing: border-box
  }
  .ckt-sdk-loginwrapper .footer-remark .left {
    font-size: 12px;
    color: #8693ab;
  }
  .ckt-sdk-loginwrapper .footer-remark .left a {
    color: #505a71;
    text-decoration: underline;
    margin: 0 4px;
    display: inline-block;
    cursor: pointer;
  }
  .ckt-sdk-loginwrapper .footer-remark .left a:hover {
    color: #1b2337;
  }
  .ckt-sdk-loginwrapper .footer-remark .right a {
    font-size: 12px;
  }
  .ckt-sdk-loginwrapper .footer-remark .right a:hover {
    cursor: pointer;
    color: #0667e2;
  }


  
  .ckt-sdk-loginwrapper .account-login {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 56px;
    box-sizing: border-box;
  }
  .ckt-sdk-loginwrapper .password-title {
    width: 100%;
    font-size: 20px;
    color: rgba(0,0,0,.8);
    font-weight: 700;
    margin: 42px 0 0;
    text-align: left;
  }
  .ckt-sdk-loginwrapper .error-msg {
    width: 100%;
    height: 40px;
    font-size: 14px;
    color: #fa2323;
    text-align: left;
    padding: 14px 0 12px;
    box-sizing: border-box;
  }
  .ckt-sdk-loginwrapper .form-item {
    width: 100%;
    height: 42px;
    border: 1px solid #ebeef5;
    color: #1b2337;
    font-size: 14px;
    border-radius: 4px;
    padding: 0 16px;
    margin-bottom: 24px;
    box-sizing: border-box;
  }
  .ckt-sdk-loginwrapper .form-item:focus {
    border: 1px solid #0773fc;
    box-shadow: 0 0 0 2px rgb(7 174 252 / 10%);
    outline: 0;
  }
  
  .ckt-sdk-loginwrapper .sms-code-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-bottom: 24px;
  }
  .ckt-sdk-loginwrapper .sms-code-wrap .form-item {
    margin: 0;
  }
  .ckt-sdk-loginwrapper .sms-code-button {
    width: 130px;
    height: 42px;
    background: #f7f8f9;
    border: 1px solid #ebeef5;
    border-radius: 4px;
    font-size: 14px;
    color: #1b2337;
    margin-left: 8px;
    flex-shrink: 0;
    cursor: pointer;
  }

  .ckt-sdk-loginwrapper .toggle-login {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
    margin: 0 0 24px 0;
    font-size: 14px;
  }
  .ckt-sdk-loginwrapper .toggle-login span {
    color: #0773fc;
    cursor: pointer;
  }
  .ckt-sdk-loginwrapper .toggle-login .forget-password {
    color: rgba(0,0,0,.8);
  }
  .ckt-sdk-loginwrapper .form-item.button {
    color: #fff;
    background: #0773fc;
    cursor: pointer;
  }
  .ckt-sdk-loginwrapper .split-lines {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    font-size: 12px;
    padding-top: 8px;
    box-sizing: border-box;
  }
  .ckt-sdk-loginwrapper .centerline {
    width: 124px;
    height: 1px;
    background-color: #eee;
  }
  .ckt-sdk-loginwrapper .text{
    font-size: 12px;
    color: rgba(0,0,0,.4);
  }



  
  .ckt-sdk-loginwrapper .retrieve-wrap {
    padding: 42px 56px 0;
  }
  .ckt-sdk-loginwrapper .retrieve-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
    font-size: 18px;
    font-weight: 700;
    color: rgba(0,0,0,.8);
    margin-bottom: 30px;
  }
  .ckt-sdk-loginwrapper .go-back {
    font-size: 14px;
    color: #0773fc;
    cursor: pointer;
  }
  .ckt-sdk-loginwrapper .retrieve-tab {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    width: 100%;
    border-bottom: 1px solid #ebeef5;
  }
  .ckt-sdk-loginwrapper .tab-item {
    font-size: 14px;
    color: #505a71;
    padding-bottom: 8px;
    position: relative;
    cursor: pointer;
  }
  .ckt-sdk-loginwrapper .tab-item:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 3px;
    background: #0773fc;
    border-radius: 2px;
    box-shadow: 0 4px 6px 0 rgb(7 174 252 / 20%);
    transition: all .1s;
  }
  .ckt-sdk-loginwrapper .tab-item.active {
    color: #1b2337;
    font-weight: 700;
  }
  .ckt-sdk-loginwrapper .tab-item.active:after {
    width: 100%;
    transition: all .3s;
  }
  .ckt-sdk-loginwrapper form-wrap {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }


  
  .ckt-sdk-loginwrapper .sign-up-wrap {
    padding: 42px 56px 0;
  }
  .ckt-sdk-loginwrapper .sign-up-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
    font-size: 18px;
    font-weight: 700;
    color: rgba(0,0,0,.8);
  }


  ${`
  .ckt-sdk-loginwrapper .success-wrap {
    padding: 42px 56px 0;
  }
  .ckt-sdk-loginwrapper .success-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
    font-size: 18px;
    font-weight: 700;
    color: rgba(0,0,0,.8);
  }
  .ckt-sdk-loginwrapper .success-img {
    width: 68px;
    height: 68px;
    background: url(${a}/login-sprite.ba948fa9.svg) -26px 0;
    margin-top: 90px;
  }
  .ckt-sdk-loginwrapper .success-text {
    font-size: 16px;
    color: #1b2337;
    font-weight: 700;
    margin: 24px 0 32px;
  }
  .ckt-sdk-loginwrapper .success-button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 42px;
    font-size: 14px;
    color: #fff;
    font-weight: 700;
    background: #0773fc;
    border-radius: 4px;
    cursor: pointer;
  }
`}
`}

  
  .ckt-sdk-loginwrapper .ckt-sdk-toast-wrap {
    position: fixed;
    top: 65px;
    left: 50%;
    transform: translate(-50%);
    background: #fff;
    box-shadow: 0 6px 14px 4px rgb(27 35 55 / 8%);
    border-radius: 4px;
    padding: 12px 24px;
    font-size: 14px;
    box-sizing: border-box;
    overflow: hidden;
    z-index: 100;
  }

`;
      },
      7103: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => o });
        var a = `
  <ul class="other-login">
    ${[
      { key: 2, value: "qq" },
      { key: 1, value: "weibo" },
      { key: 5, value: "wx" },
      { key: 6, value: "dingtalk" },
    ].reduce(
      (e, { key: t, value: r }) =>
        (e += `<li class="way-item way-item-${r}" data-key=${t}></li>`),
      ""
    )}
  </ul>
`,
          t = r(8004),
          a = `
  <div class="sign-in-wrap">
    
  <div class="toggle-sign-way">
    <div class="toggle-button"></div>
    <div class="toggle-tips">密码登录在这里</div>
  </div>


    
  <div class="wx-login">
    <p class="wx-title"><i></i>微信安全登录</p>
    <div class="qrcode-wrap">
      <div class="qrcode-container">
        <canvas class="qrcode-canvas" qrcodeurl="" height="160" width="160"></canvas>
      </div>
    </div>
    <p class="wx-tips">微信扫描二维码登录</p>
    <div class="wx-error"> 扫码登录遇到问题？ <span class="solve-error">点击这里</span></div>
  </div>


    
  <div class="account-login hidden">
    <p class="password-title">账号密码登录</p>
    <!-- 账号密码 -->
    
  <div class="password-login-wrapper">
    <!-- 错误提示 -->
    <p class="error-msg password-error-msg"></p>
    <input class="form-item input" placeholder="邮箱/手机号" data-type="account">
    <input class="form-item input" type="password" maxlength="18" placeholder="密码" data-type="password">
  </div>

    <!-- 验证码登录 -->
    
  <div class="phone-login-wrapper hidden">
    <!-- 错误提示 -->
    <p class="error-msg phone-error-msg"></p>
    <input class="form-item input" placeholder="手机号"  data-type="phone">
    <div class="sms-code-wrap">
      <input class="form-item input" placeholder="输入短信验证码" maxlength="6"  data-type="sms">
      <button class="sms-code-button phone-code-button" data-type="phone">获取短信验证码</button></div>
  </div>

    <p class="toggle-login"><span class="account-toggle-login">手机验证码登录</span><span class="forget-password">忘记密码</span></p>
    <button class="form-item button" data-type="phone">登录</button>
    <!-- 分隔线 -->
    <div class="split-lines">
      <span class="centerline"></span><span class="text">第三方登录</span><span class="centerline"></span>
    </div>
  </div>


    ${a}

    ${(0, t.Z)(!1)}
  </div>
`,
          r = r(9067);
        const o = `
  <div class="ckt-login-content-wrap">
    ${a}
    
    ${`
  <div class="sign-up-wrap hidden">
    ${`
    <p class="sign-up-title"><span>注册账号</span><a class="go-back signUp-go-back">返回登录</a></p>
    ${(0, r.Z)("signUp")}
    <!-- 用户协议 -->
    ${(0, t.Z)(!0)}
`}
  </div>
`}
    
    ${`
  <div class="retrieve-wrap hidden">
    ${`
    <p class="retrieve-title"><span>找回密码</span><a class="go-back retrieve-go-back">返回登录</a></p>
    <!-- 找回方式 -->
    <ul class="retrieve-tab">
      <li class="active tab-item" data-type="phone" data-text="手机">手机号找回</li>
      <li class="tab-item" data-type="email" data-text="邮箱">邮箱找回</li>
    </ul>
    ${(0, r.Z)("retrieve")}
  `}
  </div>
`}
    
    
  <div class="success-wrap hidden">
    
  <p class="success-title"><span class="success-title-content">注册账号</span><a class="go-back success-go-back">返回登录</a></p>
  <div class="success-img"></div>
  <p class="success-text">注册账号成功</p>
  <div class="success-button">返回登录</div>

  </div>

  </div>
`;
      },
      1265: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => a });
        const a = `
  <div class="ckt-sdk-toast"></div>
`;
      },
      1804: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => o });
        var a = r(4498);
        const o = function ({
          url: e,
          method: t = "GET",
          params: n = {},
          data: s = {},
          options: i = {},
        }) {
          var { domainConf: r } = a.Z;
          return (
            (e = i
              ? i._api
                ? r.API + e
                : i._apiv2
                ? r.APIV2 + e
                : r.APIGW + e
              : r.APIGW + e),
            (e += ".do?_dataType=json&_dataClientType=0"),
            new Promise((r, a) => {
              if (((t = t.toUpperCase()), n)) {
                let t = "";
                Object.keys(n).forEach((e) => {
                  t += `&${encodeURIComponent(e)}=${encodeURIComponent(n[e])}`;
                }),
                  (e += t);
              }
              const o = new XMLHttpRequest();
              (o.withCredentials = !0),
                o.open(t, e),
                "GET" === t || "DELETE" === t
                  ? o.send()
                  : ("POST" !== t && "PUT" !== t) ||
                    (i._multipart
                      ? o.send(s)
                      : (o.setRequestHeader(
                          "Content-Type",
                          "application/x-www-form-urlencoded"
                        ),
                        o.send(new URLSearchParams(s)))),
                (o.onreadystatechange = () => {
                  var e, t;
                  4 === o.readyState &&
                    (({ status: e, statusText: t } = o),
                    200 <= e && e < 300
                      ? ((t = {
                          data: JSON.parse(o.response).body,
                          status: e,
                          statusText: t,
                        }),
                        r(t))
                      : a(new Error("request failed! response code = " + e)));
                });
            })
          );
        };
      },
      7883: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => n });
        var a = r(1184),
          o = r(1524),
          r = function (e, t) {
            t = new a(
              (t = t || {}).typeNumber || -1,
              t.errorCorrectLevel || o.H
            );
            return t.addData(e), t.make(), t;
          };
        r.ErrorCorrectLevel = o;
        const n = r;
      },
      7530: (e, t, r) => {
        var a = r(9223);
        function o(e) {
          (this.mode = a.MODE_8BIT_BYTE), (this.data = e);
        }
        (o.prototype = {
          getLength: function (e) {
            return this.data.length;
          },
          write: function (e) {
            for (var t = 0; t < this.data.length; t++)
              e.put(this.data.charCodeAt(t), 8);
          },
        }),
          (e.exports = o);
      },
      7678: (e) => {
        function t() {
          (this.buffer = new Array()), (this.length = 0);
        }
        (t.prototype = {
          get: function (e) {
            var t = Math.floor(e / 8);
            return 1 == ((this.buffer[t] >>> (7 - (e % 8))) & 1);
          },
          put: function (e, t) {
            for (var r = 0; r < t; r++)
              this.putBit(1 == ((e >>> (t - r - 1)) & 1));
          },
          getLengthInBits: function () {
            return this.length;
          },
          putBit: function (e) {
            var t = Math.floor(this.length / 8);
            this.buffer.length <= t && this.buffer.push(0),
              e && (this.buffer[t] |= 128 >>> this.length % 8),
              this.length++;
          },
        }),
          (e.exports = t);
      },
      1524: (e) => {
        e.exports = { L: 1, M: 0, Q: 3, H: 2 };
      },
      448: (e, t, r) => {
        var o = r(4054);
        function n(e, t) {
          if (null == e.length) throw new Error(e.length + "/" + t);
          for (var r = 0; r < e.length && 0 == e[r]; ) r++;
          this.num = new Array(e.length - r + t);
          for (var a = 0; a < e.length - r; a++) this.num[a] = e[a + r];
        }
        (n.prototype = {
          get: function (e) {
            return this.num[e];
          },
          getLength: function () {
            return this.num.length;
          },
          multiply: function (e) {
            for (
              var t = new Array(this.getLength() + e.getLength() - 1), r = 0;
              r < this.getLength();
              r++
            )
              for (var a = 0; a < e.getLength(); a++)
                t[r + a] ^= o.gexp(o.glog(this.get(r)) + o.glog(e.get(a)));
            return new n(t, 0);
          },
          mod: function (e) {
            if (this.getLength() - e.getLength() < 0) return this;
            for (
              var t = o.glog(this.get(0)) - o.glog(e.get(0)),
                r = new Array(this.getLength()),
                a = 0;
              a < this.getLength();
              a++
            )
              r[a] = this.get(a);
            for (a = 0; a < e.getLength(); a++)
              r[a] ^= o.gexp(o.glog(e.get(a)) + t);
            return new n(r, 0).mod(e);
          },
        }),
          (e.exports = n);
      },
      1184: (e, t, r) => {
        var a = r(7530),
          c = r(7296),
          l = r(7678),
          m = r(291),
          w = r(448);
        function d(e, t) {
          (this.typeNumber = e),
            (this.errorCorrectLevel = t),
            (this.modules = null),
            (this.moduleCount = 0),
            (this.dataCache = null),
            (this.dataList = []);
        }
        r = d.prototype;
        (r.addData = function (e) {
          e = new a(e);
          this.dataList.push(e), (this.dataCache = null);
        }),
          (r.isDark = function (e, t) {
            if (
              e < 0 ||
              this.moduleCount <= e ||
              t < 0 ||
              this.moduleCount <= t
            )
              throw new Error(e + "," + t);
            return this.modules[e][t];
          }),
          (r.getModuleCount = function () {
            return this.moduleCount;
          }),
          (r.make = function () {
            if (this.typeNumber < 1) {
              for (var e = 1, e = 1; e < 40; e++) {
                for (
                  var t = c.getRSBlocks(e, this.errorCorrectLevel),
                    r = new l(),
                    a = 0,
                    o = 0;
                  o < t.length;
                  o++
                )
                  a += t[o].dataCount;
                for (o = 0; o < this.dataList.length; o++) {
                  var n = this.dataList[o];
                  r.put(n.mode, 4),
                    r.put(n.getLength(), m.getLengthInBits(n.mode, e)),
                    n.write(r);
                }
                if (r.getLengthInBits() <= 8 * a) break;
              }
              this.typeNumber = e;
            }
            this.makeImpl(!1, this.getBestMaskPattern());
          }),
          (r.makeImpl = function (e, t) {
            (this.moduleCount = 4 * this.typeNumber + 17),
              (this.modules = new Array(this.moduleCount));
            for (var r = 0; r < this.moduleCount; r++) {
              this.modules[r] = new Array(this.moduleCount);
              for (var a = 0; a < this.moduleCount; a++)
                this.modules[r][a] = null;
            }
            this.setupPositionProbePattern(0, 0),
              this.setupPositionProbePattern(this.moduleCount - 7, 0),
              this.setupPositionProbePattern(0, this.moduleCount - 7),
              this.setupPositionAdjustPattern(),
              this.setupTimingPattern(),
              this.setupTypeInfo(e, t),
              7 <= this.typeNumber && this.setupTypeNumber(e),
              null == this.dataCache &&
                (this.dataCache = d.createData(
                  this.typeNumber,
                  this.errorCorrectLevel,
                  this.dataList
                )),
              this.mapData(this.dataCache, t);
          }),
          (r.setupPositionProbePattern = function (e, t) {
            for (var r = -1; r <= 7; r++)
              if (!(e + r <= -1 || this.moduleCount <= e + r))
                for (var a = -1; a <= 7; a++)
                  t + a <= -1 ||
                    this.moduleCount <= t + a ||
                    (this.modules[e + r][t + a] =
                      (0 <= r && r <= 6 && (0 == a || 6 == a)) ||
                      (0 <= a && a <= 6 && (0 == r || 6 == r)) ||
                      (2 <= r && r <= 4 && 2 <= a && a <= 4));
          }),
          (r.getBestMaskPattern = function () {
            for (var e = 0, t = 0, r = 0; r < 8; r++) {
              this.makeImpl(!0, r);
              var a = m.getLostPoint(this);
              (0 == r || a < e) && ((e = a), (t = r));
            }
            return t;
          }),
          (r.createMovieClip = function (e, t, r) {
            var a = e.createEmptyMovieClip(t, r);
            this.make();
            for (var o = 0; o < this.modules.length; o++)
              for (var n = +o, s = 0; s < this.modules[o].length; s++) {
                var i = +s;
                this.modules[o][s] &&
                  (a.beginFill(0, 100),
                  a.moveTo(i, n),
                  a.lineTo(1 + i, n),
                  a.lineTo(1 + i, 1 + n),
                  a.lineTo(i, 1 + n),
                  a.endFill());
              }
            return a;
          }),
          (r.setupTimingPattern = function () {
            for (var e = 8; e < this.moduleCount - 8; e++)
              null == this.modules[e][6] && (this.modules[e][6] = e % 2 == 0);
            for (var t = 8; t < this.moduleCount - 8; t++)
              null == this.modules[6][t] && (this.modules[6][t] = t % 2 == 0);
          }),
          (r.setupPositionAdjustPattern = function () {
            for (
              var e = m.getPatternPosition(this.typeNumber), t = 0;
              t < e.length;
              t++
            )
              for (var r = 0; r < e.length; r++) {
                var a = e[t],
                  o = e[r];
                if (null == this.modules[a][o])
                  for (var n = -2; n <= 2; n++)
                    for (var s = -2; s <= 2; s++)
                      this.modules[a + n][o + s] =
                        -2 == n ||
                        2 == n ||
                        -2 == s ||
                        2 == s ||
                        (0 == n && 0 == s);
              }
          }),
          (r.setupTypeNumber = function (e) {
            for (
              var t = m.getBCHTypeNumber(this.typeNumber), r = 0;
              r < 18;
              r++
            ) {
              var a = !e && 1 == ((t >> r) & 1);
              this.modules[Math.floor(r / 3)][
                (r % 3) + this.moduleCount - 8 - 3
              ] = a;
            }
            for (r = 0; r < 18; r++) {
              a = !e && 1 == ((t >> r) & 1);
              this.modules[(r % 3) + this.moduleCount - 8 - 3][
                Math.floor(r / 3)
              ] = a;
            }
          }),
          (r.setupTypeInfo = function (e, t) {
            for (
              var t = (this.errorCorrectLevel << 3) | t,
                r = m.getBCHTypeInfo(t),
                a = 0;
              a < 15;
              a++
            ) {
              var o = !e && 1 == ((r >> a) & 1);
              a < 6
                ? (this.modules[a][8] = o)
                : a < 8
                ? (this.modules[a + 1][8] = o)
                : (this.modules[this.moduleCount - 15 + a][8] = o);
            }
            for (a = 0; a < 15; a++) {
              o = !e && 1 == ((r >> a) & 1);
              a < 8
                ? (this.modules[8][this.moduleCount - a - 1] = o)
                : a < 9
                ? (this.modules[8][15 - a - 1 + 1] = o)
                : (this.modules[8][15 - a - 1] = o);
            }
            this.modules[this.moduleCount - 8][8] = !e;
          }),
          (r.mapData = function (e, t) {
            for (
              var r = -1,
                a = this.moduleCount - 1,
                o = 7,
                n = 0,
                s = this.moduleCount - 1;
              0 < s;
              s -= 2
            )
              for (6 == s && s--; ; ) {
                for (var i, c, l = 0; l < 2; l++)
                  null == this.modules[a][s - l] &&
                    ((i = !1),
                    n < e.length && (i = 1 == ((e[n] >>> o) & 1)),
                    (c = m.getMask(t, a, s - l)),
                    (this.modules[a][s - l] = i = c ? !i : i),
                    -1 == --o && (n++, (o = 7)));
                if ((a += r) < 0 || this.moduleCount <= a) {
                  (a -= r), (r = -r);
                  break;
                }
              }
          }),
          (d.PAD0 = 236),
          (d.PAD1 = 17),
          (d.createData = function (e, t, r) {
            for (
              var a = c.getRSBlocks(e, t), o = new l(), n = 0;
              n < r.length;
              n++
            ) {
              var s = r[n];
              o.put(s.mode, 4),
                o.put(s.getLength(), m.getLengthInBits(s.mode, e)),
                s.write(o);
            }
            for (var i = 0, n = 0; n < a.length; n++) i += a[n].dataCount;
            if (o.getLengthInBits() > 8 * i)
              throw new Error(
                "code length overflow. (" +
                  o.getLengthInBits() +
                  ">" +
                  8 * i +
                  ")"
              );
            for (
              o.getLengthInBits() + 4 <= 8 * i && o.put(0, 4);
              o.getLengthInBits() % 8 != 0;

            )
              o.putBit(!1);
            for (
              ;
              !(
                o.getLengthInBits() >= 8 * i ||
                (o.put(d.PAD0, 8), o.getLengthInBits() >= 8 * i)
              );

            )
              o.put(d.PAD1, 8);
            return d.createBytes(o, a);
          }),
          (d.createBytes = function (e, t) {
            for (
              var r = 0,
                a = 0,
                o = 0,
                n = new Array(t.length),
                s = new Array(t.length),
                i = 0;
              i < t.length;
              i++
            ) {
              var c = t[i].dataCount,
                l = t[i].totalCount - c,
                a = Math.max(a, c),
                o = Math.max(o, l);
              n[i] = new Array(c);
              for (var d = 0; d < n[i].length; d++)
                n[i][d] = 255 & e.buffer[d + r];
              r += c;
              var l = m.getErrorCorrectPolynomial(l),
                p = new w(n[i], l.getLength() - 1).mod(l);
              s[i] = new Array(l.getLength() - 1);
              for (d = 0; d < s[i].length; d++) {
                var u = d + p.getLength() - s[i].length;
                s[i][d] = 0 <= u ? p.get(u) : 0;
              }
            }
            for (var g = 0, d = 0; d < t.length; d++) g += t[d].totalCount;
            for (var h = new Array(g), f = 0, d = 0; d < a; d++)
              for (i = 0; i < t.length; i++)
                d < n[i].length && (h[f++] = n[i][d]);
            for (d = 0; d < o; d++)
              for (i = 0; i < t.length; i++)
                d < s[i].length && (h[f++] = s[i][d]);
            return h;
          }),
          (e.exports = d);
      },
      7296: (e, t, r) => {
        var a = r(1524);
        function d(e, t) {
          (this.totalCount = e), (this.dataCount = t);
        }
        (d.RS_BLOCK_TABLE = [
          [1, 26, 19],
          [1, 26, 16],
          [1, 26, 13],
          [1, 26, 9],
          [1, 44, 34],
          [1, 44, 28],
          [1, 44, 22],
          [1, 44, 16],
          [1, 70, 55],
          [1, 70, 44],
          [2, 35, 17],
          [2, 35, 13],
          [1, 100, 80],
          [2, 50, 32],
          [2, 50, 24],
          [4, 25, 9],
          [1, 134, 108],
          [2, 67, 43],
          [2, 33, 15, 2, 34, 16],
          [2, 33, 11, 2, 34, 12],
          [2, 86, 68],
          [4, 43, 27],
          [4, 43, 19],
          [4, 43, 15],
          [2, 98, 78],
          [4, 49, 31],
          [2, 32, 14, 4, 33, 15],
          [4, 39, 13, 1, 40, 14],
          [2, 121, 97],
          [2, 60, 38, 2, 61, 39],
          [4, 40, 18, 2, 41, 19],
          [4, 40, 14, 2, 41, 15],
          [2, 146, 116],
          [3, 58, 36, 2, 59, 37],
          [4, 36, 16, 4, 37, 17],
          [4, 36, 12, 4, 37, 13],
          [2, 86, 68, 2, 87, 69],
          [4, 69, 43, 1, 70, 44],
          [6, 43, 19, 2, 44, 20],
          [6, 43, 15, 2, 44, 16],
          [4, 101, 81],
          [1, 80, 50, 4, 81, 51],
          [4, 50, 22, 4, 51, 23],
          [3, 36, 12, 8, 37, 13],
          [2, 116, 92, 2, 117, 93],
          [6, 58, 36, 2, 59, 37],
          [4, 46, 20, 6, 47, 21],
          [7, 42, 14, 4, 43, 15],
          [4, 133, 107],
          [8, 59, 37, 1, 60, 38],
          [8, 44, 20, 4, 45, 21],
          [12, 33, 11, 4, 34, 12],
          [3, 145, 115, 1, 146, 116],
          [4, 64, 40, 5, 65, 41],
          [11, 36, 16, 5, 37, 17],
          [11, 36, 12, 5, 37, 13],
          [5, 109, 87, 1, 110, 88],
          [5, 65, 41, 5, 66, 42],
          [5, 54, 24, 7, 55, 25],
          [11, 36, 12],
          [5, 122, 98, 1, 123, 99],
          [7, 73, 45, 3, 74, 46],
          [15, 43, 19, 2, 44, 20],
          [3, 45, 15, 13, 46, 16],
          [1, 135, 107, 5, 136, 108],
          [10, 74, 46, 1, 75, 47],
          [1, 50, 22, 15, 51, 23],
          [2, 42, 14, 17, 43, 15],
          [5, 150, 120, 1, 151, 121],
          [9, 69, 43, 4, 70, 44],
          [17, 50, 22, 1, 51, 23],
          [2, 42, 14, 19, 43, 15],
          [3, 141, 113, 4, 142, 114],
          [3, 70, 44, 11, 71, 45],
          [17, 47, 21, 4, 48, 22],
          [9, 39, 13, 16, 40, 14],
          [3, 135, 107, 5, 136, 108],
          [3, 67, 41, 13, 68, 42],
          [15, 54, 24, 5, 55, 25],
          [15, 43, 15, 10, 44, 16],
          [4, 144, 116, 4, 145, 117],
          [17, 68, 42],
          [17, 50, 22, 6, 51, 23],
          [19, 46, 16, 6, 47, 17],
          [2, 139, 111, 7, 140, 112],
          [17, 74, 46],
          [7, 54, 24, 16, 55, 25],
          [34, 37, 13],
          [4, 151, 121, 5, 152, 122],
          [4, 75, 47, 14, 76, 48],
          [11, 54, 24, 14, 55, 25],
          [16, 45, 15, 14, 46, 16],
          [6, 147, 117, 4, 148, 118],
          [6, 73, 45, 14, 74, 46],
          [11, 54, 24, 16, 55, 25],
          [30, 46, 16, 2, 47, 17],
          [8, 132, 106, 4, 133, 107],
          [8, 75, 47, 13, 76, 48],
          [7, 54, 24, 22, 55, 25],
          [22, 45, 15, 13, 46, 16],
          [10, 142, 114, 2, 143, 115],
          [19, 74, 46, 4, 75, 47],
          [28, 50, 22, 6, 51, 23],
          [33, 46, 16, 4, 47, 17],
          [8, 152, 122, 4, 153, 123],
          [22, 73, 45, 3, 74, 46],
          [8, 53, 23, 26, 54, 24],
          [12, 45, 15, 28, 46, 16],
          [3, 147, 117, 10, 148, 118],
          [3, 73, 45, 23, 74, 46],
          [4, 54, 24, 31, 55, 25],
          [11, 45, 15, 31, 46, 16],
          [7, 146, 116, 7, 147, 117],
          [21, 73, 45, 7, 74, 46],
          [1, 53, 23, 37, 54, 24],
          [19, 45, 15, 26, 46, 16],
          [5, 145, 115, 10, 146, 116],
          [19, 75, 47, 10, 76, 48],
          [15, 54, 24, 25, 55, 25],
          [23, 45, 15, 25, 46, 16],
          [13, 145, 115, 3, 146, 116],
          [2, 74, 46, 29, 75, 47],
          [42, 54, 24, 1, 55, 25],
          [23, 45, 15, 28, 46, 16],
          [17, 145, 115],
          [10, 74, 46, 23, 75, 47],
          [10, 54, 24, 35, 55, 25],
          [19, 45, 15, 35, 46, 16],
          [17, 145, 115, 1, 146, 116],
          [14, 74, 46, 21, 75, 47],
          [29, 54, 24, 19, 55, 25],
          [11, 45, 15, 46, 46, 16],
          [13, 145, 115, 6, 146, 116],
          [14, 74, 46, 23, 75, 47],
          [44, 54, 24, 7, 55, 25],
          [59, 46, 16, 1, 47, 17],
          [12, 151, 121, 7, 152, 122],
          [12, 75, 47, 26, 76, 48],
          [39, 54, 24, 14, 55, 25],
          [22, 45, 15, 41, 46, 16],
          [6, 151, 121, 14, 152, 122],
          [6, 75, 47, 34, 76, 48],
          [46, 54, 24, 10, 55, 25],
          [2, 45, 15, 64, 46, 16],
          [17, 152, 122, 4, 153, 123],
          [29, 74, 46, 14, 75, 47],
          [49, 54, 24, 10, 55, 25],
          [24, 45, 15, 46, 46, 16],
          [4, 152, 122, 18, 153, 123],
          [13, 74, 46, 32, 75, 47],
          [48, 54, 24, 14, 55, 25],
          [42, 45, 15, 32, 46, 16],
          [20, 147, 117, 4, 148, 118],
          [40, 75, 47, 7, 76, 48],
          [43, 54, 24, 22, 55, 25],
          [10, 45, 15, 67, 46, 16],
          [19, 148, 118, 6, 149, 119],
          [18, 75, 47, 31, 76, 48],
          [34, 54, 24, 34, 55, 25],
          [20, 45, 15, 61, 46, 16],
        ]),
          (d.getRSBlocks = function (e, t) {
            var r = d.getRsBlockTable(e, t);
            if (null == r)
              throw new Error(
                "bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t
              );
            for (var a = r.length / 3, o = new Array(), n = 0; n < a; n++)
              for (
                var s = r[3 * n + 0], i = r[3 * n + 1], c = r[3 * n + 2], l = 0;
                l < s;
                l++
              )
                o.push(new d(i, c));
            return o;
          }),
          (d.getRsBlockTable = function (e, t) {
            switch (t) {
              case a.L:
                return d.RS_BLOCK_TABLE[4 * (e - 1) + 0];
              case a.M:
                return d.RS_BLOCK_TABLE[4 * (e - 1) + 1];
              case a.Q:
                return d.RS_BLOCK_TABLE[4 * (e - 1) + 2];
              case a.H:
                return d.RS_BLOCK_TABLE[4 * (e - 1) + 3];
              default:
                return;
            }
          }),
          (e.exports = d);
      },
      4054: (e) => {
        for (
          var t = {
              glog: function (e) {
                if (e < 1) throw new Error("glog(" + e + ")");
                return t.LOG_TABLE[e];
              },
              gexp: function (e) {
                for (; e < 0; ) e += 255;
                for (; 256 <= e; ) e -= 255;
                return t.EXP_TABLE[e];
              },
              EXP_TABLE: new Array(256),
              LOG_TABLE: new Array(256),
            },
            r = 0;
          r < 8;
          r++
        )
          t.EXP_TABLE[r] = 1 << r;
        for (r = 8; r < 256; r++)
          t.EXP_TABLE[r] =
            t.EXP_TABLE[r - 4] ^
            t.EXP_TABLE[r - 5] ^
            t.EXP_TABLE[r - 6] ^
            t.EXP_TABLE[r - 8];
        for (r = 0; r < 255; r++) t.LOG_TABLE[t.EXP_TABLE[r]] = r;
        e.exports = t;
      },
      9223: (e) => {
        e.exports = {
          MODE_NUMBER: 1,
          MODE_ALPHA_NUM: 2,
          MODE_8BIT_BYTE: 4,
          MODE_KANJI: 8,
        };
      },
      291: (e, t, r) => {
        var a = r(9223),
          o = r(448),
          n = r(4054),
          s = 0,
          i = 1,
          c = 2,
          l = 3,
          d = 4,
          p = 5,
          u = 6,
          g = 7,
          h = {
            PATTERN_POSITION_TABLE: [
              [],
              [6, 18],
              [6, 22],
              [6, 26],
              [6, 30],
              [6, 34],
              [6, 22, 38],
              [6, 24, 42],
              [6, 26, 46],
              [6, 28, 50],
              [6, 30, 54],
              [6, 32, 58],
              [6, 34, 62],
              [6, 26, 46, 66],
              [6, 26, 48, 70],
              [6, 26, 50, 74],
              [6, 30, 54, 78],
              [6, 30, 56, 82],
              [6, 30, 58, 86],
              [6, 34, 62, 90],
              [6, 28, 50, 72, 94],
              [6, 26, 50, 74, 98],
              [6, 30, 54, 78, 102],
              [6, 28, 54, 80, 106],
              [6, 32, 58, 84, 110],
              [6, 30, 58, 86, 114],
              [6, 34, 62, 90, 118],
              [6, 26, 50, 74, 98, 122],
              [6, 30, 54, 78, 102, 126],
              [6, 26, 52, 78, 104, 130],
              [6, 30, 56, 82, 108, 134],
              [6, 34, 60, 86, 112, 138],
              [6, 30, 58, 86, 114, 142],
              [6, 34, 62, 90, 118, 146],
              [6, 30, 54, 78, 102, 126, 150],
              [6, 24, 50, 76, 102, 128, 154],
              [6, 28, 54, 80, 106, 132, 158],
              [6, 32, 58, 84, 110, 136, 162],
              [6, 26, 54, 82, 110, 138, 166],
              [6, 30, 58, 86, 114, 142, 170],
            ],
            G15: 1335,
            G18: 7973,
            G15_MASK: 21522,
            getBCHTypeInfo: function (e) {
              for (
                var t = e << 10;
                0 <= h.getBCHDigit(t) - h.getBCHDigit(h.G15);

              )
                t ^= h.G15 << (h.getBCHDigit(t) - h.getBCHDigit(h.G15));
              return ((e << 10) | t) ^ h.G15_MASK;
            },
            getBCHTypeNumber: function (e) {
              for (
                var t = e << 12;
                0 <= h.getBCHDigit(t) - h.getBCHDigit(h.G18);

              )
                t ^= h.G18 << (h.getBCHDigit(t) - h.getBCHDigit(h.G18));
              return (e << 12) | t;
            },
            getBCHDigit: function (e) {
              for (var t = 0; 0 != e; ) t++, (e >>>= 1);
              return t;
            },
            getPatternPosition: function (e) {
              return h.PATTERN_POSITION_TABLE[e - 1];
            },
            getMask: function (e, t, r) {
              switch (e) {
                case s:
                  return (t + r) % 2 == 0;
                case i:
                  return t % 2 == 0;
                case c:
                  return r % 3 == 0;
                case l:
                  return (t + r) % 3 == 0;
                case d:
                  return (Math.floor(t / 2) + Math.floor(r / 3)) % 2 == 0;
                case p:
                  return ((t * r) % 2) + ((t * r) % 3) == 0;
                case u:
                  return (((t * r) % 2) + ((t * r) % 3)) % 2 == 0;
                case g:
                  return (((t * r) % 3) + ((t + r) % 2)) % 2 == 0;
                default:
                  throw new Error("bad maskPattern:" + e);
              }
            },
            getErrorCorrectPolynomial: function (e) {
              for (var t = new o([1], 0), r = 0; r < e; r++)
                t = t.multiply(new o([1, n.gexp(r)], 0));
              return t;
            },
            getLengthInBits: function (e, t) {
              if (1 <= t && t < 10)
                switch (e) {
                  case a.MODE_NUMBER:
                    return 10;
                  case a.MODE_ALPHA_NUM:
                    return 9;
                  case a.MODE_8BIT_BYTE:
                  case a.MODE_KANJI:
                    return 8;
                  default:
                    throw new Error("mode:" + e);
                }
              else if (t < 27)
                switch (e) {
                  case a.MODE_NUMBER:
                    return 12;
                  case a.MODE_ALPHA_NUM:
                    return 11;
                  case a.MODE_8BIT_BYTE:
                    return 16;
                  case a.MODE_KANJI:
                    return 10;
                  default:
                    throw new Error("mode:" + e);
                }
              else {
                if (!(t < 41)) throw new Error("type:" + t);
                switch (e) {
                  case a.MODE_NUMBER:
                    return 14;
                  case a.MODE_ALPHA_NUM:
                    return 13;
                  case a.MODE_8BIT_BYTE:
                    return 16;
                  case a.MODE_KANJI:
                    return 12;
                  default:
                    throw new Error("mode:" + e);
                }
              }
            },
            getLostPoint: function (e) {
              for (var t = e.getModuleCount(), r = 0, a = 0; a < t; a++)
                for (var o = 0; o < t; o++) {
                  for (var n = 0, s = e.isDark(a, o), i = -1; i <= 1; i++)
                    if (!(a + i < 0 || t <= a + i))
                      for (var c = -1; c <= 1; c++)
                        o + c < 0 ||
                          t <= o + c ||
                          (0 == i && 0 == c) ||
                          (s == e.isDark(a + i, o + c) && n++);
                  5 < n && (r += 3 + n - 5);
                }
              for (a = 0; a < t - 1; a++)
                for (o = 0; o < t - 1; o++) {
                  var l = 0;
                  e.isDark(a, o) && l++,
                    e.isDark(a + 1, o) && l++,
                    e.isDark(a, o + 1) && l++,
                    e.isDark(a + 1, o + 1) && l++,
                    (0 != l && 4 != l) || (r += 3);
                }
              for (a = 0; a < t; a++)
                for (o = 0; o < t - 6; o++)
                  e.isDark(a, o) &&
                    !e.isDark(a, o + 1) &&
                    e.isDark(a, o + 2) &&
                    e.isDark(a, o + 3) &&
                    e.isDark(a, o + 4) &&
                    !e.isDark(a, o + 5) &&
                    e.isDark(a, o + 6) &&
                    (r += 40);
              for (o = 0; o < t; o++)
                for (a = 0; a < t - 6; a++)
                  e.isDark(a, o) &&
                    !e.isDark(a + 1, o) &&
                    e.isDark(a + 2, o) &&
                    e.isDark(a + 3, o) &&
                    e.isDark(a + 4, o) &&
                    !e.isDark(a + 5, o) &&
                    e.isDark(a + 6, o) &&
                    (r += 40);
              for (var d = 0, o = 0; o < t; o++)
                for (a = 0; a < t; a++) e.isDark(a, o) && d++;
              return (r += 10 * (Math.abs((100 * d) / t / t - 50) / 5));
            },
          };
        e.exports = h;
      },
      2966: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            deepClone: () => i,
            proxyAll: () => c,
            shouldUpdateUserInfo: () => a,
          });
        const n = {
            "[object Map]": !0,
            "[object Set]": !0,
            "[object Array]": !0,
            "[object Object]": !0,
            "[object Arguments]": !0,
          },
          s = (e, t) => {
            const r = e.constructor;
            switch (t) {
              case "[object Boolean]":
                return new Object(Boolean.prototype.valueOf.call(e));
              case "[object Number]":
                return new Object(Number.prototype.valueOf.call(e));
              case "[object String]":
                return new Object(String.prototype.valueOf.call(e));
              case "[object Symbol]":
                return new Object(Symbol.prototype.valueOf.call(e));
              case "[object Error]":
              case "[object Date]":
                return new r(e);
              case "[object RegExp]":
                return ((e) => {
                  var { source: t, flags: r } = e;
                  return new e.constructor(t, r);
                })(e);
              case "[object Function]":
                return ((e) => {
                  if (!e.prototype) return e;
                  var t = e.toString();
                  const r = /(?<=\().+(?=\)\s+{)/.exec(t);
                  e = /(?<={)(.|\n)+(?=})/m.exec(t);
                  if (!e) return null;
                  if (r) {
                    t = r[0].split(",");
                    return new Function(...t, e[0]);
                  }
                  return new Function(e[0]);
                })(e);
              default:
                return new r(e);
            }
          },
          i = (t, r = new WeakMap()) => {
            if (
              ("object" != typeof (a = t) && "function" != typeof a) ||
              null === a
            )
              return t;
            var e,
              a = Object.prototype.toString.call(t);
            let o;
            if (!n[a]) return s(t, a);
            {
              let e = t.constructor;
              o = new e();
            }
            if (r.get(t)) return t;
            for (e in (r.set(t, !0),
            "[object Map]" === a &&
              t.forEach((e, t) => {
                o.set(i(t, r), i(e, r));
              }),
            "[object Set]" === a &&
              t.forEach((e) => {
                o.add(i(e, r));
              }),
            t))
              t.hasOwnProperty(e) && (o[e] = i(t[e], r));
            return o;
          },
          c = (e, a, r, t, o = []) =>
            new Proxy(e, {
              get: (e, t) => (
                o.push(t),
                "object" != typeof e[t]
                  ? (o.splice(0, o.length), e[t])
                  : c(e[t], a, r || t, t, o)
              ),
              set: (e, t, r) => (
                e[t] === r || ((e[t] = r), a([...o, t]), o.splice(0, o.length)),
                !0
              ),
            }),
          a = () => {
            const e = new BroadcastChannel("ckt");
            e.postMessage("getUserInfo");
          };
      },
    },
    a = {};
  function i(e) {
    var t = a[e];
    if (void 0 !== t) return t.exports;
    t = a[e] = { exports: {} };
    return r[e].call(t.exports, t, t.exports, i), t.exports;
  }
  (i.d = (e, t) => {
    for (var r in t)
      i.o(t, r) &&
        !i.o(e, r) &&
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
  }),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (i.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    });
  (() => {
    "use strict";
    const o = i(9812),
      n = i(2966),
      s = {
        curStatus: "wx",
        prevStatus: "password",
        statusBeforeSignUp: "",
        postMaxCount: 0,
        "wx-timer": "",
        "phone-phone-timer": "",
        "retrieve-phone-timer": "",
        "retrieve-email-timer": "",
        "signUp-phone-timer": "",
        wxQrUrl: "",
        phoneCountdown: { phone: 0 },
        retrieveCountdown: { phone: 0, email: 0 },
        signUpCountdown: { phone: 0 },
        isOverCheckOnBlur: !0,
        passwordFormData: { account: "", password: "" },
        phoneFormData: { phone: "", sms: "" },
        retrieveFormData: {
          phone: "",
          email: "",
          sms: "",
          password1: "",
          password2: "",
        },
        signUpFormData: { phone: "", sms: "", password1: "", password2: "" },
        captchaTicket: "",
      };
    window.$SDKVM = class {
      constructor(e) {
        (this.data = n.deepClone(s)),
          (this.doms = {}),
          (this._data = new Proxy(this.data, {
            get: (e, t) => e[t],
            set: (e, t, r) => (
              e[t] === r || ((e[t] = r), "curStatus" === t && o.update(this)),
              !0
            ),
          }));
        var {
          loginSuccessCb: t = () => {},
          signUpSuccessCb: r = () => {},
          el: a,
          img: e,
        } = e;
        if (!a) throw new Error("必须指定login的父组件");
        (this.loginSuccessCb = t),
          (this.signUpSuccessCb = r),
          (this.el = a),
          (this.img = e),
          o.created(this),
          o.mounted(this);
      }
      changeData(r, a) {
        if (Array.isArray(r)) {
          var o = r.slice(-1)[0];
          let e = this._data,
            t = 0;
          for (t; t < r.length - 1; t++) e = e[r[t]];
          e[o] = a;
        } else this._data[r] = a;
      }
      getEle(e) {
        const t = this.doms;
        return t[e] || (t[e] = this.el.querySelector(e)), t[e];
      }
      $message(e) {
        const t = this.getEle(".ckt-sdk-toast");
        let r = document.createElement("div");
        (r.className = "ckt-sdk-toast-wrap"),
          (r.innerText = e),
          t.appendChild(r),
          setTimeout(() => {
            r.remove(), (r = null);
          }, 1500);
      }
      clearTimer(e) {
        clearInterval(this._data[`${e}-timer`]);
      }
    };
  })();
})();
