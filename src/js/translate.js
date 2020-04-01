import Polyglot from "node-polyglot";

const polyglot = new Polyglot();

const languageSelect = document.querySelector(".lang-select");
const htmlTag = document.querySelector("html");
const bodyTag = document.querySelector("body");
const title = document.querySelector(".title");
const paragraph = document.querySelector(".paragraph");
const github = document.querySelector("#github-text");
const devto = document.querySelector("#devto-text");
const twitter = document.querySelector("#twitter-text");
const email = document.querySelector("#email-text");

polyglot.extend({
  ar: {
    NAME: "ماهر الكندي",
    paragraph: "مبرمج من مدينة مسقط في  سلطنة عمان. احب تطوير برامج على الويب.",
    github: "مشاريعي",
    devto: "كتاباتي",
    twitter: "تويتر",
    email: "ايميل"
  },
  en: {
    NAME: "MAHER ALKENDI",
    paragraph:
      "Software Developer from Muscat, Oman. Passionate about building web based applications.",
    github: "Portfolio",
    devto: "Blog",
    twitter: "Twitter",
    email: "Email"
  }
});

languageSelect.addEventListener("change", e => {
  htmlTag.lang = e.target.value;
  switch (e.target.value) {
    case "ar":
      bodyTag.dir = "rtl";
      // bodyTag.style.fontFamily = "Aref Ruqaa";
      title.innerHTML = polyglot.t("ar.NAME");
      paragraph.innerHTML = polyglot.t("ar.paragraph");
      github.innerHTML = polyglot.t("ar.github");
      devto.innerHTML = polyglot.t("ar.devto");
      twitter.innerHTML = polyglot.t("ar.twitter");
      email.innerHTML = polyglot.t("ar.email");
      break;
    case "en":
      bodyTag.dir = "ltr";
      title.innerHTML = polyglot.t("en.NAME");
      paragraph.innerHTML = polyglot.t("en.paragraph");
      github.innerHTML = polyglot.t("en.github");
      devto.innerHTML = polyglot.t("en.devto");
      twitter.innerHTML = polyglot.t("en.twitter");
      email.innerHTML = polyglot.t("en.email");
      break;
    default:
      return;
  }
});
