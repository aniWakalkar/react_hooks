import { httpBasics } from "./httpBasics";
import { rest } from "./rest";
import { authSecurity } from "./authSecurity";
import { sessionsJwt } from "./sessionsJwt";
import { middlewareGateways } from "./middlewareGateways";
import { scalingFlow } from "./scalingFlow";

export const webApiTrack = {
  id: "webapi",
  label: { en: "Web & APIs", hi: "वेब और APIs" },
  sections: [
    { id: "httpBasics", label: { en: "HTTP Basics", hi: "HTTP बेसिक्स" }, bodyLabelKey: "answer", items: httpBasics },
    { id: "rest", label: { en: "REST", hi: "REST" }, bodyLabelKey: "answer", items: rest },
    { id: "authSecurity", label: { en: "Auth & Security", hi: "ऑथ और सिक्योरिटी" }, bodyLabelKey: "answer", items: authSecurity },
    { id: "sessionsJwt", label: { en: "Sessions, Cookies & JWT", hi: "Sessions, Cookies और JWT" }, bodyLabelKey: "answer", items: sessionsJwt },
    { id: "middlewareGateways", label: { en: "Middleware & Gateways", hi: "मिडलवेयर और गेटवे" }, bodyLabelKey: "answer", items: middlewareGateways },
    { id: "scalingFlow", label: { en: "Scaling & Request Flow", hi: "स्केलिंग और रिक्वेस्ट फ्लो" }, bodyLabelKey: "answer", items: scalingFlow },
  ],
};
