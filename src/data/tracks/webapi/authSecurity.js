import { flow, st } from "../visualHelpers";

export const authSecurity = {
  authVsAuthz: {
    visual: flow([
      st("🔑", ["Login", "Login"], ["The user enters email and password.", "User email और password डालता है।"]),
      st("🪪", ["Authentication", "Authentication"], ["Who are you? The server verifies your identity.", "तुम कौन हो? Server आपकी पहचान verify करता है।"], "ok"),
      st("🛂", ["Authorization", "Authorization"], ["What can you do? The server checks your permissions.", "तुम क्या कर सकते हो? Server आपकी permissions check करता है।"]),
      st("✅", ["Access", "Access"], ["Allowed → resource returned. Not allowed → 403 Forbidden.", "Allowed → resource मिलता है। Allowed नहीं → 403 Forbidden।"], "ok"),
    ]),
    title: { en: "What is the difference between Authentication and Authorization?", hi: "Authentication और Authorization में क्या फर्क है?" },
    definition: {
      en: `
Authentication verifies who you are.

Authorization checks what you are allowed to access or do.

Example:
Logging in with email and password → Authentication.
Having permission to watch premium content on Hotstar → Authorization.

Memory trick:
Authentication = Who are you?
Authorization = What can you do?
      `,
      hi: `
Authentication verify करता है कि आप कौन हो।

Authorization check करता है कि आपको क्या access करने या करने की permission है।

Example:
Email और password से login करना → Authentication।
Hotstar पर premium content देखने की permission होना → Authorization।

याद रखने की trick:
Authentication = तुम कौन हो?
Authorization = तुम क्या कर सकते हो?
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
POST /login  { email, password }   → Authentication (identity checked)
DELETE /users/5                    → Authorization (is this user an admin?)
        `,
      },
    ],
  },
  whatIsCors: {
    visual: flow([
      st("🖥️", ["Frontend :3000", "Frontend :3000"], ["The React app on localhost:3000 wants data.", "localhost:3000 की React app को data चाहिए।"]),
      st("📨", ["Request", "Request"], ["It sends a request to the backend on localhost:8000, a different origin.", "वो localhost:8000 के backend को request भेजता है, जो अलग origin है।"]),
      st("🗄️", ["Backend :8000", "Backend :8000"], ["The backend replies, but without an Access-Control-Allow-Origin header.", "Backend reply देता है, लेकिन Access-Control-Allow-Origin header के बिना।"]),
      st("🛡️", ["Browser checks", "Browser check करता है"], ["The browser looks for the CORS header and does not find it.", "Browser CORS header ढूंढता है और उसे नहीं मिलता।"]),
      st("🚫", ["Blocked", "Blocked"], ["The browser stops the frontend JavaScript from reading the response.", "Browser frontend JavaScript को response पढ़ने से रोक देता है।"], "danger"),
    ]),
    title: { en: "What is CORS?", hi: "CORS क्या है?" },
    definition: {
      en: `
CORS stands for Cross-Origin Resource Sharing.

It is a browser security mechanism that controls whether a web page from one origin can access resources from another origin.

For example:

Frontend: http://localhost:3000
Backend: http://localhost:8000

These are different origins.

The server can specify which origins are allowed using CORS response headers, and the browser enforces those rules.

Simplified interview answer:
CORS stands for Cross-Origin Resource Sharing. When a request is made from a client to a server, if the server doesn't allow that origin, the browser blocks the frontend from accessing the response.
      `,
      hi: `
CORS का मतलब है Cross-Origin Resource Sharing।

ये browser की security mechanism है जो तय करती है कि एक origin की web page दूसरे origin के resources access कर सकती है या नहीं।

उदाहरण:

Frontend: http://localhost:3000
Backend: http://localhost:8000

ये अलग-अलग origins हैं।

Server CORS response headers से बता सकता है कि कौन-से origins allowed हैं, और browser उन rules को लागू करता है।

Simple interview answer:
CORS का मतलब Cross-Origin Resource Sharing है। जब client से server को request जाती है और server उस origin को allow नहीं करता, तो browser frontend को response access करने से रोक देता है।
      `,
    },
    examples: [
      {
        label: "Server allows an origin",
        code: `
Response header from the backend:

Access-Control-Allow-Origin: http://localhost:3000
        `,
      },
    ],
  },
  corsNotAllowed: {
    title: { en: "What happens when CORS doesn't allow a request?", hi: "जब CORS किसी request को allow नहीं करता तो क्या होता है?" },
    definition: {
      en: `
The server specifies which origins are allowed through CORS headers. The browser checks and enforces those rules. If the origin isn't allowed, the browser prevents the frontend JavaScript from accessing the response.
      `,
      hi: `
Server CORS headers से बताता है कि कौन-से origins allowed हैं। Browser उन rules को check और लागू करता है। अगर origin allowed नहीं है, तो browser frontend JavaScript को response access करने से रोक देता है।
      `,
    },
    examples: [
      {
        label: "Typical browser console error",
        code: `
Access to fetch at 'http://localhost:8000/users' from origin
'http://localhost:3000' has been blocked by CORS policy:
No 'Access-Control-Allow-Origin' header is present on the requested resource.
        `,
      },
    ],
  },
  corsBackendOrFrontend: {
    title: { en: "Is CORS handled by the backend or frontend?", hi: "CORS backend handle करता है या frontend?" },
    definition: {
      en: `
The server/backend is configured to specify which origins are allowed, but the browser enforces CORS.

That's an important distinction.
      `,
      hi: `
Server/backend में configure किया जाता है कि कौन-से origins allowed हैं, लेकिन CORS को browser लागू करता है।

ये एक ज़रूरी फर्क है।
      `,
    },
    examples: [
      {
        label: "Backend configuration (Express)",
        code: `
const cors = require("cors");

app.use(cors({ origin: "http://localhost:3000" }));
        `,
      },
    ],
  },
  preflight: {
    visual: flow([
      st("🖥️", ["Frontend wants to call", "Frontend call करना चाहता है"], ["The React app wants to send DELETE with an Authorization header to another origin.", "React app दूसरे origin पर Authorization header के साथ DELETE भेजना चाहती है।"]),
      st("❓", ["OPTIONS (preflight)", "OPTIONS (preflight)"], ["The browser first asks: is this method and header allowed from my origin?", "Browser पहले पूछता है: क्या मेरे origin से ये method और header allowed है?"]),
      st("🗄️", ["Server answers", "Server जवाब देता है"], ["Access-Control-Allow-Origin / -Methods / -Headers tell what is allowed.", "Access-Control-Allow-Origin / -Methods / -Headers बताते हैं कि क्या allowed है।"]),
      st("✅", ["Actual request", "असली request"], ["If allowed, the browser sends the real DELETE request.", "Allowed हो तो browser असली DELETE request भेजता है।"], "ok"),
    ]),
    title: { en: "What is a Preflight request in CORS?", hi: "CORS में Preflight request क्या है?" },
    definition: {
      en: `
A preflight request is an automatic OPTIONS request that the browser sends before the real request, to ask the server for permission.

The browser does this for requests that are not "simple", for example:
- Methods like PUT, PATCH or DELETE
- Custom headers, like Authorization
- Content-Type: application/json

Simple requests (like a basic GET, or a POST with a form content type) do not need a preflight.

How it works:
1. The browser sends OPTIONS with headers: Origin, Access-Control-Request-Method, Access-Control-Request-Headers.
2. The server replies with: Access-Control-Allow-Origin, Access-Control-Allow-Methods, Access-Control-Allow-Headers (and optionally Access-Control-Max-Age to cache the answer).
3. If the server allows it, the browser sends the actual request. If not, the browser blocks it and shows a CORS error.

Important: the preflight is sent by the browser, not by your code. The server must handle the OPTIONS request too.
      `,
      hi: `
Preflight request एक automatic OPTIONS request है जो browser असली request से पहले भेजता है, server से permission पूछने के लिए।

Browser ये उन requests के लिए करता है जो "simple" नहीं होतीं, जैसे:
- PUT, PATCH या DELETE जैसे methods
- Custom headers, जैसे Authorization
- Content-Type: application/json

Simple requests (जैसे basic GET, या form content type वाला POST) को preflight नहीं चाहिए।

ये कैसे काम करता है:
1. Browser OPTIONS भेजता है इन headers के साथ: Origin, Access-Control-Request-Method, Access-Control-Request-Headers।
2. Server जवाब देता है: Access-Control-Allow-Origin, Access-Control-Allow-Methods, Access-Control-Allow-Headers (और चाहें तो Access-Control-Max-Age, जवाब cache करने के लिए)।
3. Server allow करे तो browser असली request भेजता है। नहीं तो browser उसे block करके CORS error दिखाता है।

ज़रूरी: preflight browser भेजता है, आपका code नहीं। Server को OPTIONS request भी handle करनी पड़ती है।
      `,
    },
    examples: [
      {
        label: "Preflight request and response",
        code: `
OPTIONS /users/10
Origin: http://localhost:3000
Access-Control-Request-Method: DELETE
Access-Control-Request-Headers: authorization

→ 204 No Content
Access-Control-Allow-Origin: http://localhost:3000
Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE
Access-Control-Allow-Headers: Authorization, Content-Type
Access-Control-Max-Age: 600
        `,
      },
    ],
  },
  fixCors: {
    title: { en: "How do you fix a CORS error?", hi: "CORS error को कैसे fix करते हैं?" },
    definition: {
      en: `
A CORS error is fixed on the server (backend), not in the frontend, because the server decides which origins are allowed.

Steps:
1. Configure the backend to send the CORS headers, for example using the cors middleware.
2. Allow only the specific origins you trust, like your frontend URL.
3. Allow the needed methods and headers (so the preflight passes).
4. If you use cookies, set credentials: true on the server, and credentials: "include" in the frontend. In this case you cannot use "*" as the origin.

During development:
- Use a dev proxy, so the browser thinks the request is same-origin (for example the "proxy" field in a Create React App package.json, or the proxy setting in the Vite config).

Common mistakes:
- Trying to fix it in the React code. The frontend can't turn CORS off.
- Using Access-Control-Allow-Origin: * in production for private APIs.
- Not handling the OPTIONS (preflight) request.
- Testing in Postman. Postman doesn't enforce CORS, because CORS is a browser rule.
      `,
      hi: `
CORS error server (backend) पर fix होता है, frontend में नहीं, क्योंकि server तय करता है कि कौन-से origins allowed हैं।

Steps:
1. Backend को CORS headers भेजने के लिए configure करो, जैसे cors middleware से।
2. सिर्फ वही origins allow करो जिन पर भरोसा है, जैसे आपका frontend URL।
3. ज़रूरी methods और headers allow करो (ताकि preflight pass हो)।
4. अगर cookies use कर रहे हो, तो server पर credentials: true और frontend में credentials: "include" set करो। इस case में origin के लिए "*" use नहीं कर सकते।

Development में:
- Dev proxy use करो, ताकि browser को लगे कि request same-origin है (जैसे Create React App के package.json में "proxy" field, या Vite config में proxy setting)।

Common गलतियां:
- React code में fix करने की कोशिश करना। Frontend CORS बंद नहीं कर सकता।
- Private APIs के लिए production में Access-Control-Allow-Origin: * use करना।
- OPTIONS (preflight) request handle न करना।
- Postman में test करना। Postman CORS लागू नहीं करता, क्योंकि CORS browser का rule है।
      `,
    },
    examples: [
      {
        label: "Fix on the backend (Express)",
        code: `
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
        `,
      },
      {
        label: "Dev proxy in Create React App (package.json)",
        code: `
{
  "proxy": "http://localhost:8000"
}

// Now fetch("/api/users") from localhost:3000 is forwarded to localhost:8000
        `,
      },
    ],
  },
  whatIsCsrf: {
    visual: [
      flow(
        [
          st("🔑", ["Logged in", "Logged in"], ["The user is logged in to bank.com. The browser holds the session cookie.", "User bank.com पर logged in है। Browser के पास session cookie है।"]),
          st("😈", ["Evil website", "Evil website"], ["The user opens a malicious page. It has a hidden form that posts to bank.com/transfer.", "User एक malicious page खोलता है। उसमें hidden form है जो bank.com/transfer पर post करता है।"], "danger"),
          st("🍪", ["Cookie auto-attached", "Cookie अपने आप जुड़ती है"], ["The browser sends the request to bank.com and automatically adds the cookie.", "Browser bank.com को request भेजता है और cookie अपने आप जोड़ देता है।"], "danger"),
          st("💸", ["Money transferred", "पैसे transfer हो गए"], ["bank.com thinks it is the real user, so the action is done.", "bank.com को लगता है कि ये असली user है, इसलिए काम हो जाता है।"], "danger"),
        ],
        ["CSRF attack", "CSRF attack"]
      ),
      flow(
        [
          st("😈", ["Evil website", "Evil website"], ["The hidden form sends the request to bank.com.", "Hidden form bank.com को request भेजता है।"], "danger"),
          st("🛡️", ["SameSite / CSRF token", "SameSite / CSRF token"], ["The cookie is not sent (SameSite), or the CSRF token is missing or wrong.", "Cookie भेजी ही नहीं जाती (SameSite), या CSRF token गायब या गलत है।"]),
          st("🚫", ["Request rejected", "Request reject"], ["The server refuses it (403). The attack fails.", "Server मना कर देता है (403)। Attack fail हो जाता है।"], "ok"),
        ],
        ["With protection", "Protection के साथ"]
      ),
    ],
    title: { en: "What is CSRF and how do you prevent it?", hi: "CSRF क्या है और इसे कैसे रोकते हैं?" },
    definition: {
      en: `
CSRF stands for Cross-Site Request Forgery. It is an attack where a malicious website tricks a logged-in user's browser into sending an unwanted request to another site where the user is authenticated.

Why it works:
Browsers automatically attach cookies to every request for that site. So the server can't tell whether the request was really made by the user, or was triggered by a malicious page.

Example:
1. You are logged in to bank.com (the session cookie is in your browser).
2. You open a malicious website.
3. That page silently sends POST bank.com/transfer?to=attacker&amount=5000.
4. Your browser adds your bank.com cookie, and the bank processes it.

Note: the attacker can make the request happen, but can't read the response.

How to prevent CSRF:
- CSRF token: the server gives a random token with each form/session, and the client must send it back in the request (in a header or body). A malicious site can't know it.
- SameSite cookies: SameSite=Lax or Strict stops the browser from sending the cookie on cross-site requests.
- Check the Origin / Referer header on the server.
- Use Authorization: Bearer tokens (not cookies) for APIs. They are not attached automatically.
- Do state-changing actions only with POST/PUT/PATCH/DELETE, never with GET.
- Ask for re-authentication or a confirmation (like an OTP) for sensitive actions.

Simple answer:
CSRF is an attack that abuses the fact that browsers automatically send cookies, to make a user perform an action they didn't intend.
      `,
      hi: `
CSRF का मतलब है Cross-Site Request Forgery। ये एक attack है जिसमें कोई malicious website logged-in user के browser को धोखा देकर किसी दूसरी site पर unwanted request भिजवाती है, जहां user authenticated है।

ये क्यों काम करता है:
Browser उस site की हर request के साथ cookies अपने आप जोड़ देता है। इसलिए server ये नहीं पहचान पाता कि request असल में user ने की है या किसी malicious page ने करवाई है।

Example:
1. आप bank.com पर logged in हो (session cookie आपके browser में है)।
2. आप एक malicious website खोलते हो।
3. वो page चुपचाप POST bank.com/transfer?to=attacker&amount=5000 भेज देता है।
4. आपका browser आपकी bank.com cookie जोड़ देता है, और bank उसे process कर देता है।

ध्यान दो: attacker request करवा सकता है, लेकिन response पढ़ नहीं सकता।

CSRF को कैसे रोकें:
- CSRF token: server हर form/session के साथ एक random token देता है, और client को उसे request में वापस भेजना पड़ता है (header या body में)। Malicious site उसे नहीं जान सकती।
- SameSite cookies: SameSite=Lax या Strict, browser को cross-site requests पर cookie भेजने से रोकता है।
- Server पर Origin / Referer header check करो।
- APIs के लिए cookies की जगह Authorization: Bearer tokens use करो। वो अपने आप नहीं जुड़ते।
- Data बदलने वाले काम सिर्फ POST/PUT/PATCH/DELETE से करो, GET से कभी नहीं।
- Sensitive actions के लिए दोबारा authentication या confirmation (जैसे OTP) मांगो।

Simple answer:
CSRF एक attack है जो इस बात का फायदा उठाता है कि browser cookies अपने आप भेजता है, और user से ऐसा काम करवा देता है जो उसने करना नहीं चाहा था।
      `,
    },
    examples: [
      {
        label: "The malicious page (attacker's HTML)",
        code: `
<form action="https://bank.com/transfer" method="POST" id="f">
  <input type="hidden" name="to" value="attacker" />
  <input type="hidden" name="amount" value="5000" />
</form>
<script>document.getElementById("f").submit();</script>
        `,
      },
      {
        label: "Protection: SameSite cookie + CSRF token check (Express)",
        code: `
res.cookie("sessionId", id, { httpOnly: true, secure: true, sameSite: "strict" });

function csrfCheck(req, res, next) {
  if (req.headers["x-csrf-token"] !== req.session.csrfToken) {
    return res.status(403).json({ message: "Invalid CSRF token" });
  }
  next();
}
        `,
      },
    ],
  },
  corsVsCsrf: {
    title: { en: "What is the difference between CORS and CSRF?", hi: "CORS और CSRF में क्या फर्क है?" },
    definition: {
      en: `
CORS (Cross-Origin Resource Sharing):
- A browser security mechanism, not an attack.
- Controls whether JavaScript from one origin can read the response from another origin.
- Configured by the server using CORS headers, enforced by the browser.
- Protects users' data from being read by other sites.

CSRF (Cross-Site Request Forgery):
- An attack, not a feature.
- Tricks the user's browser into sending an unwanted authenticated request (using the cookies the browser attaches automatically).
- Prevented using CSRF tokens, SameSite cookies and Origin checks.
- Protects users from unwanted actions.

Key difference:
CORS decides who can READ the response.
CSRF is about who can TRIGGER an action.

Important: CORS does not stop CSRF. A simple cross-site form POST is still sent to the server (the browser just won't let the attacker read the response). So the action can still happen. You need CSRF protection separately.

Memory trick:
CORS = the rule (browser policy). CSRF = the attack.
      `,
      hi: `
CORS (Cross-Origin Resource Sharing):
- Browser की security mechanism है, attack नहीं।
- तय करती है कि एक origin की JavaScript दूसरे origin का response पढ़ सकती है या नहीं।
- Server CORS headers से configure करता है, browser लागू करता है।
- Users के data को दूसरी sites द्वारा पढ़े जाने से बचाती है।

CSRF (Cross-Site Request Forgery):
- ये attack है, feature नहीं।
- User के browser को धोखा देकर unwanted authenticated request भिजवाता है (उन cookies से जो browser अपने आप जोड़ता है)।
- CSRF tokens, SameSite cookies और Origin checks से रोका जाता है।
- Users को unwanted actions से बचाता है।

मुख्य फर्क:
CORS तय करता है कि response कौन PADH सकता है।
CSRF इस बारे में है कि कोई action कौन TRIGGER कर सकता है।

ज़रूरी: CORS, CSRF को नहीं रोकता। Simple cross-site form POST फिर भी server तक पहुंच जाता है (बस browser attacker को response पढ़ने नहीं देता)। इसलिए action फिर भी हो सकता है। CSRF protection अलग से चाहिए।

याद रखने की trick:
CORS = rule (browser policy)। CSRF = attack।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
CORS  : evil.com's JavaScript calls bank.com/balance  → browser blocks reading the response
CSRF  : evil.com's hidden form posts to bank.com/transfer → request is sent with your cookie
        `,
      },
    ],
  },
};
