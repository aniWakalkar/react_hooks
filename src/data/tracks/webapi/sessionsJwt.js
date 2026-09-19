import { flow, st } from "../visualHelpers";

export const sessionsJwt = {
  whatIsSession: {
    visual: flow([
      st("🔑", ["Login", "Login"], ["The user sends email and password.", "User email और password भेजता है।"]),
      st("🗄️", ["Server creates session", "Server session बनाता है"], ["The server stores session data (like userId = 10) under a random session ID.", "Server एक random session ID के नीचे session data (जैसे userId = 10) store करता है।"]),
      st("🍪", ["Set-Cookie", "Set-Cookie"], ["The server sends the session ID to the browser in a cookie.", "Server session ID को cookie में browser को भेजता है।"]),
      st("📨", ["Next request", "अगली request"], ["The browser automatically sends the cookie with every request.", "Browser हर request के साथ cookie अपने आप भेजता है।"]),
      st("🔍", ["Server looks up", "Server ढूंढता है"], ["The server finds the session by its ID and knows who you are.", "Server ID से session ढूंढकर पहचान लेता है कि आप कौन हो।"], "ok"),
    ]),
    title: { en: "What is a Session and how does it work?", hi: "Session क्या है और ये कैसे काम करता है?" },
    definition: {
      en: `
A session is a way for the server to remember a user across multiple requests, even though HTTP itself is stateless.

How it works:
1. The user logs in with email and password.
2. The server verifies them and creates a session. It stores the user's data on the server, for example userId = 10, role = admin.
3. The server generates a random, unique session ID and sends it to the browser, usually inside a cookie.
4. On every next request, the browser automatically sends that cookie.
5. The server uses the session ID to look up the session and knows who the user is.
6. On logout or after expiry, the server deletes the session, and the session ID stops working.

Important: the real data stays on the server. The browser only holds the session ID.

Session = server-side memory about a user, found using a session ID.
      `,
      hi: `
Session एक तरीका है जिससे server कई requests में एक user को याद रखता है, भले ही HTTP खुद stateless है।

ये कैसे काम करता है:
1. User email और password से login करता है।
2. Server उन्हें verify करके session बनाता है। User का data server पर store होता है, जैसे userId = 10, role = admin।
3. Server एक random, unique session ID बनाकर browser को भेजता है, आमतौर पर cookie में।
4. अगली हर request पर browser वो cookie अपने आप भेजता है।
5. Server session ID से session ढूंढता है और जान लेता है कि user कौन है।
6. Logout पर या expire होने पर server session delete कर देता है, और वो session ID काम करना बंद कर देती है।

ज़रूरी: असली data server पर रहता है। Browser के पास सिर्फ session ID होती है।

Session = user के बारे में server-side memory, जो session ID से मिलती है।
      `,
    },
    examples: [
      {
        label: "Session flow in HTTP",
        code: `
POST /login  { email, password }
→ 200 OK
   Set-Cookie: sessionId=abc123; HttpOnly

GET /profile
Cookie: sessionId=abc123
→ server looks up abc123 → { userId: 10, role: "admin" }
→ 200 OK  { "name": "Aniket" }
        `,
      },
      {
        label: "Session with Express (express-session)",
        code: `
app.use(session({ secret: "my-secret", resave: false, saveUninitialized: false }));

app.post("/login", (req, res) => {
  // after verifying the password
  req.session.userId = 10;   // stored on the server
  res.send("Logged in");
});

app.get("/profile", (req, res) => {
  if (!req.session.userId) return res.status(401).send("Login first");
  res.send("Hello user " + req.session.userId);
});
        `,
      },
    ],
  },
  whatIsCookie: {
    visual: flow([
      st("🗄️", ["Server responds", "Server response देता है"], ["The server sends a header: Set-Cookie: sessionId=abc123", "Server header भेजता है: Set-Cookie: sessionId=abc123"]),
      st("🍪", ["Browser stores it", "Browser store करता है"], ["The browser saves the cookie in its cookie storage, for that website.", "Browser cookie को उस website के लिए अपने cookie storage में save कर लेता है।"]),
      st("📨", ["Next request", "अगली request"], ["The browser automatically adds: Cookie: sessionId=abc123", "Browser अपने आप जोड़ देता है: Cookie: sessionId=abc123"]),
      st("✅", ["Server reads it", "Server पढ़ता है"], ["The server reads the cookie and recognizes the user.", "Server cookie पढ़कर user को पहचान लेता है।"], "ok"),
    ]),
    title: { en: "What is a Cookie, how does it work and where is it stored?", hi: "Cookie क्या है, ये कैसे काम करती है और कहां store होती है?" },
    definition: {
      en: `
A cookie is a small piece of data (name=value) that the server asks the browser to store. The browser then sends it back to the same server with every request.

How it works:
1. The server sends a Set-Cookie header in the response.
2. The browser stores the cookie for that website (domain).
3. On every next request to that domain, the browser automatically adds a Cookie header.
4. The server reads it. This is how the server can recognize you.

Where is it stored?
In the browser, on the user's device (the browser's cookie storage). You can see it in DevTools → Application → Cookies. It is not stored on the server, but the server can set and read it.

Limits: about 4 KB per cookie, so only small data (like a session ID) should be put in it.

Important cookie attributes (for security and control):
- HttpOnly → JavaScript cannot read the cookie. Protects from XSS attacks.
- Secure → the cookie is sent only over HTTPS.
- SameSite → controls whether the cookie is sent on cross-site requests. Helps against CSRF attacks.
- Expires / Max-Age → when the cookie should be deleted. Without it, it is a session cookie and is removed when the browser closes.
- Domain / Path → for which website and URL paths the cookie is sent.

Cookies are commonly used for: login sessions, remembering preferences (like theme or language), and tracking.
      `,
      hi: `
Cookie एक छोटा data (name=value) है जिसे server browser से store करने को कहता है। फिर browser उसे उसी server को हर request के साथ वापस भेजता है।

ये कैसे काम करती है:
1. Server response में Set-Cookie header भेजता है।
2. Browser उस website (domain) के लिए cookie store कर लेता है।
3. उस domain पर अगली हर request में browser अपने आप Cookie header जोड़ देता है।
4. Server उसे पढ़ता है। इसी से server आपको पहचान पाता है।

कहां store होती है?
Browser में, user के device पर (browser का cookie storage)। आप इसे DevTools → Application → Cookies में देख सकते हो। ये server पर store नहीं होती, लेकिन server इसे set और read कर सकता है।

Limit: हर cookie लगभग 4 KB, इसलिए इसमें सिर्फ छोटा data (जैसे session ID) रखना चाहिए।

ज़रूरी cookie attributes (security और control के लिए):
- HttpOnly → JavaScript cookie को पढ़ नहीं सकता। XSS attacks से बचाता है।
- Secure → cookie सिर्फ HTTPS पर भेजी जाती है।
- SameSite → तय करता है कि cookie cross-site requests पर भेजी जाए या नहीं। CSRF attacks से बचाने में मदद करता है।
- Expires / Max-Age → cookie कब delete होनी चाहिए। इनके बिना ये session cookie होती है, जो browser बंद होने पर हट जाती है।
- Domain / Path → किस website और URL paths के लिए cookie भेजी जाए।

Cookies आमतौर पर इनके लिए use होती हैं: login sessions, preferences याद रखना (जैसे theme या language), और tracking।
      `,
    },
    examples: [
      {
        label: "Cookie headers",
        code: `
Response from server:
Set-Cookie: sessionId=abc123; HttpOnly; Secure; SameSite=Strict; Max-Age=3600

Next request from browser (automatic):
Cookie: sessionId=abc123
        `,
      },
      {
        label: "Cookies in JavaScript (only non-HttpOnly cookies)",
        code: `
document.cookie = "theme=dark; max-age=86400";   // set a cookie
console.log(document.cookie);                     // "theme=dark"

// A cookie marked HttpOnly will NOT show up in document.cookie
        `,
      },
    ],
  },
  serverSessionManagement: {
    title: { en: "What is Session Management (server-side and cookie/client-side)?", hi: "Session Management क्या है (server-side और cookie/client-side)?" },
    definition: {
      en: `
Session management means creating, storing, validating, renewing and destroying user sessions in a safe way.

Server-side session management (done on the server):
- Create: after a successful login, generate a random, unpredictable session ID.
- Store: keep the session data on the server. Options:
   - Server memory: fast, but lost on restart and doesn't work across multiple servers.
   - Database: persistent, but slower.
   - Redis (in-memory store): fast and shared by all servers. Most common in production.
- Validate: on every request, look up the session ID and check that it exists and has not expired.
- Expire: set a timeout, for example 30 minutes of inactivity.
- Destroy: on logout, delete the session from the store.

Cookie / client-side session management (done in the browser):
- The browser stores the session ID in a cookie and sends it automatically.
- Use cookie attributes to protect it: HttpOnly, Secure, SameSite, and Max-Age/Expires.
- On logout the server tells the browser to delete the cookie, and the server also destroys the session.

Security practices:
- Generate a new session ID after login, to prevent session fixation.
- Use HTTPS only.
- Set a reasonable expiry and destroy the session on logout.
- Never put sensitive data (like passwords) in the cookie itself.

Problem with multiple servers: if sessions are stored in one server's memory, another server won't know about them. Solution: a shared store like Redis (or sticky sessions on the load balancer).
      `,
      hi: `
Session management का मतलब है user sessions को सुरक्षित तरीके से बनाना, store करना, validate करना, renew करना और destroy करना।

Server-side session management (server पर होता है):
- Create: सफल login के बाद एक random, unpredictable session ID बनाना।
- Store: session data server पर रखना। Options:
   - Server memory: तेज़ है, लेकिन restart पर चला जाता है और कई servers में काम नहीं करता।
   - Database: persistent है, लेकिन धीमा।
   - Redis (in-memory store): तेज़ और सभी servers में shared। Production में सबसे common।
- Validate: हर request पर session ID ढूंढना और check करना कि वो मौजूद है और expire नहीं हुई।
- Expire: timeout set करना, जैसे 30 minute inactivity के बाद।
- Destroy: logout पर session को store से delete करना।

Cookie / client-side session management (browser में होता है):
- Browser session ID को cookie में रखता है और अपने आप भेजता है।
- Cookie को बचाने के लिए attributes use करो: HttpOnly, Secure, SameSite, और Max-Age/Expires।
- Logout पर server browser को cookie delete करने को कहता है, और server session भी destroy करता है।

Security practices:
- Login के बाद नई session ID बनाओ, ताकि session fixation न हो।
- सिर्फ HTTPS use करो।
- सही expiry रखो और logout पर session destroy करो।
- Cookie में कभी sensitive data (जैसे password) मत रखो।

कई servers की problem: अगर sessions एक server की memory में हैं, तो दूसरे server को उनका पता नहीं होगा। Solution: Redis जैसा shared store (या load balancer पर sticky sessions)।
      `,
    },
    examples: [
      {
        label: "Session lifecycle",
        code: `
Login          → create session (id = abc123), store it in Redis, Set-Cookie
Each request   → read cookie → look up abc123 in Redis → valid? continue : 401
Inactive 30min → session expires, Redis deletes it
Logout         → delete abc123 from Redis + clear the cookie
        `,
      },
      {
        label: "Logout (Express)",
        code: `
app.post("/logout", (req, res) => {
  req.session.destroy(() => {           // delete on the server
    res.clearCookie("connect.sid");     // delete in the browser
    res.send("Logged out");
  });
});
        `,
      },
    ],
  },
  whatIsToken: {
    title: { en: "What is a Token? (Access token and Refresh token)", hi: "Token क्या है? (Access token और Refresh token)" },
    definition: {
      en: `
A token is a string that the server gives to the client after login, as proof of identity. The client sends this token with every request, so the user doesn't have to send the password again.

Think of it like a movie ticket: you show the ticket, not your bank details, to enter.

Two kinds of tokens are commonly used:
- Access token: short-lived (for example 15 minutes). Sent with every API request to prove who you are.
- Refresh token: long-lived (for example 7 days). Used only to get a new access token when the old one expires, so the user doesn't have to log in again.

Why two tokens? If an access token is stolen, it stops working soon. The refresh token is kept safer and used rarely.

Token formats:
- Opaque token: just a random string. The server must look it up (like a session ID).
- Self-contained token (JWT): the token itself holds the user data and a signature, so the server can verify it without looking anything up.

Where the client sends it:
Authorization: Bearer <token>
      `,
      hi: `
Token एक string है जो login के बाद server, client को पहचान के सबूत के रूप में देता है। Client ये token हर request के साथ भेजता है, ताकि user को बार-बार password न भेजना पड़े।

इसे movie ticket की तरह समझो: अंदर जाने के लिए आप ticket दिखाते हो, अपने bank details नहीं।

दो तरह के tokens आमतौर पर use होते हैं:
- Access token: कम समय का (जैसे 15 minute)। हर API request के साथ भेजा जाता है ताकि पहचान साबित हो।
- Refresh token: लंबे समय का (जैसे 7 दिन)। सिर्फ पुराना access token expire होने पर नया access token लेने के लिए use होता है, ताकि user को दोबारा login न करना पड़े।

दो tokens क्यों? अगर access token चोरी हो जाए तो वो जल्दी बेकार हो जाता है। Refresh token ज़्यादा सुरक्षित रखा जाता है और कम use होता है।

Token के formats:
- Opaque token: बस एक random string। Server को उसे ढूंढना पड़ता है (session ID की तरह)।
- Self-contained token (JWT): token खुद user data और signature रखता है, इसलिए server बिना कुछ ढूंढे उसे verify कर सकता है।

Client इसे कैसे भेजता है:
Authorization: Bearer <token>
      `,
    },
    examples: [
      {
        label: "Token flow",
        code: `
POST /login  { email, password }
→ { "accessToken": "eyJ...", "refreshToken": "9f8a..." }

GET /orders
Authorization: Bearer eyJ...            → 200 OK

(access token expired)
GET /orders                             → 401 Unauthorized
POST /refresh  { refreshToken }         → new accessToken
        `,
      },
    ],
  },
  whatIsJwt: {
    visual: flow([
      st("🔑", ["Login", "Login"], ["The user sends email and password.", "User email और password भेजता है।"]),
      st("✍️", ["Server signs JWT", "Server JWT sign करता है"], ["The server creates a token with the user data and signs it with a secret key. Nothing is stored on the server.", "Server user data के साथ token बनाकर secret key से sign करता है। Server पर कुछ store नहीं होता।"]),
      st("💾", ["Client stores it", "Client store करता है"], ["The client keeps the token (cookie or browser storage).", "Client token को रखता है (cookie या browser storage में)।"]),
      st("📨", ["Sends every request", "हर request में भेजता है"], ["Authorization: Bearer <token>", "Authorization: Bearer <token>"]),
      st("🔏", ["Server verifies", "Server verify करता है"], ["The server checks the signature. Valid → trusted, with no database or session lookup.", "Server signature check करता है। Valid → भरोसा, बिना database या session lookup के।"], "ok"),
    ]),
    title: { en: "What is JWT and how does it work?", hi: "JWT क्या है और ये कैसे काम करता है?" },
    definition: {
      en: `
JWT stands for JSON Web Token. It is a self-contained token that carries the user's information and is digitally signed by the server.

A JWT has 3 parts separated by dots:

header.payload.signature

- Header: the token type and the signing algorithm. Example: { "alg": "HS256", "typ": "JWT" }
- Payload: the data (called claims). Example: { "sub": "10", "role": "admin", "exp": 1735689600 }
   - sub = user id, iat = issued at, exp = expiry time
- Signature: created using the header + payload + a secret key. It proves the token was not changed.

How it works:
1. The user logs in.
2. The server creates a JWT with the user's info and signs it with a secret key.
3. The client stores the JWT and sends it with every request: Authorization: Bearer <token>
4. The server recalculates/verifies the signature. If it matches and the token has not expired, the request is trusted. No session is stored on the server.

Important points:
- A JWT is signed, not encrypted. Anyone can decode and read the payload (it is only Base64 encoded). So never put passwords or secrets in it.
- If someone changes the payload, the signature no longer matches, so the server rejects it.
- Always set an expiry (exp).
- A JWT is hard to cancel before it expires (for example on logout), because the server doesn't store it. Solutions: short expiry + refresh tokens, or a blacklist.

Where to store it on the client:
- localStorage: easy, but JavaScript can read it, so it is exposed to XSS.
- HttpOnly cookie: JavaScript cannot read it, so it is safer from XSS (use SameSite to handle CSRF).
      `,
      hi: `
JWT का मतलब है JSON Web Token। ये एक self-contained token है जो user की जानकारी रखता है और server द्वारा digitally signed होता है।

JWT के 3 हिस्से होते हैं, dot से अलग:

header.payload.signature

- Header: token का type और signing algorithm। Example: { "alg": "HS256", "typ": "JWT" }
- Payload: data (जिसे claims कहते हैं)। Example: { "sub": "10", "role": "admin", "exp": 1735689600 }
   - sub = user id, iat = कब जारी हुआ, exp = expiry time
- Signature: header + payload + secret key से बनता है। ये साबित करता है कि token बदला नहीं गया।

ये कैसे काम करता है:
1. User login करता है।
2. Server user की info के साथ JWT बनाकर secret key से sign करता है।
3. Client JWT को store करता है और हर request के साथ भेजता है: Authorization: Bearer <token>
4. Server signature दोबारा calculate/verify करता है। Match हो और token expire न हुआ हो तो request पर भरोसा किया जाता है। Server पर कोई session store नहीं होता।

ज़रूरी बातें:
- JWT signed होता है, encrypted नहीं। कोई भी payload को decode करके पढ़ सकता है (वो सिर्फ Base64 encoded है)। इसलिए इसमें कभी password या secrets मत रखो।
- अगर कोई payload बदले, तो signature match नहीं होगा और server उसे reject कर देगा।
- हमेशा expiry (exp) set करो।
- Expire होने से पहले JWT को cancel करना मुश्किल है (जैसे logout पर), क्योंकि server उसे store नहीं करता। Solutions: छोटी expiry + refresh tokens, या blacklist।

Client पर कहां store करें:
- localStorage: आसान है, लेकिन JavaScript उसे पढ़ सकता है, इसलिए XSS का खतरा रहता है।
- HttpOnly cookie: JavaScript पढ़ नहीं सकता, इसलिए XSS से ज़्यादा safe है (CSRF के लिए SameSite use करो)।
      `,
    },
    examples: [
      {
        label: "A JWT looks like this",
        code: `
eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMCIsInJvbGUiOiJhZG1pbiJ9.Xk3f9sA1b2C

header    → { "alg": "HS256" }
payload   → { "sub": "10", "role": "admin" }
signature → proves the token was not changed
        `,
      },
      {
        label: "Create and verify a JWT (Node.js, jsonwebtoken)",
        code: `
const jwt = require("jsonwebtoken");

// Login: create the token
const token = jwt.sign({ sub: 10, role: "admin" }, "my-secret", { expiresIn: "15m" });

// Protected route: verify the token
function auth(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  try {
    req.user = jwt.verify(token, "my-secret");   // checks signature + expiry
    next();
  } catch {
    res.status(401).json({ message: "Invalid or expired token" });
  }
}
        `,
      },
    ],
  },
  statefulVsStateless: {
    title: { en: "What is Stateful and Stateless authentication?", hi: "Stateful और Stateless authentication क्या हैं?" },
    definition: {
      en: `
Stateful: the server remembers the client's state between requests. It stores the login information (the session) itself, and on each request it looks it up.
Example: session-based authentication.

Stateless: the server remembers nothing about the client between requests. Every request carries all the proof needed (like a signed token), and the server only verifies it.
Example: JWT-based authentication.

Real-life example:
- Stateful = a hotel reception that remembers you. You say "room 204" and they look you up in their register.
- Stateless = an event pass with your details printed and stamped. Any guard can check the pass without any register.

Why it matters:
- Stateful needs storage on the server (memory/Redis/database), and all servers must share it to scale.
- Stateless needs no storage for sessions, so any server can handle any request. It scales easily.

Memory trick:
Stateful = server keeps the state.
Stateless = client carries the state.
      `,
      hi: `
Stateful: server requests के बीच client की state याद रखता है। वो login की जानकारी (session) खुद store करता है, और हर request पर उसे ढूंढता है।
Example: session-based authentication।

Stateless: server requests के बीच client के बारे में कुछ याद नहीं रखता। हर request में पूरा सबूत होता है (जैसे signed token), और server सिर्फ उसे verify करता है।
Example: JWT-based authentication।

Real-life example:
- Stateful = होटल का reception जो आपको याद रखता है। आप बोलते हो "room 204" और वो अपने register में आपको ढूंढते हैं।
- Stateless = event pass जिस पर आपकी details छपी और stamp लगी है। कोई भी guard बिना register के pass check कर सकता है।

ये क्यों मायने रखता है:
- Stateful को server पर storage (memory/Redis/database) चाहिए, और scale करने के लिए सभी servers को उसे share करना पड़ता है।
- Stateless को sessions के लिए कोई storage नहीं चाहिए, इसलिए कोई भी server कोई भी request handle कर सकता है। Scale करना आसान है।

याद रखने की trick:
Stateful = server state रखता है।
Stateless = client state साथ लेकर चलता है।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
Stateful (session):
  Cookie: sessionId=abc123
  server: look up abc123 in Redis → { userId: 10 }

Stateless (JWT):
  Authorization: Bearer eyJ...
  server: verify signature → { sub: 10 }   (no lookup)
        `,
      },
    ],
  },
  sessionVsJwt: {
    visual: [
      flow(
        [
          st("📨", ["Request + session ID", "Request + session ID"], ["The client sends only an ID: sessionId=abc123", "Client सिर्फ एक ID भेजता है: sessionId=abc123"]),
          st("🗄️", ["Session store", "Session store"], ["The server looks up the ID in Redis/database (extra lookup).", "Server ID को Redis/database में ढूंढता है (extra lookup)।"]),
          st("✅", ["Allowed", "Allowed"], ["The user data comes from the server's store.", "User data server के store से आता है।"], "ok"),
        ],
        ["Session (stateful)", "Session (stateful)"]
      ),
      flow(
        [
          st("📨", ["Request + JWT", "Request + JWT"], ["The client sends the token that holds the data.", "Client वो token भेजता है जिसमें data है।"]),
          st("🔏", ["Verify signature", "Signature verify"], ["The server only checks the signature and expiry (no lookup).", "Server सिर्फ signature और expiry check करता है (कोई lookup नहीं)।"]),
          st("✅", ["Allowed", "Allowed"], ["The user data comes from the token itself.", "User data token से ही आता है।"], "ok"),
        ],
        ["JWT (stateless)", "JWT (stateless)"]
      ),
    ],
    title: { en: "What is the difference between Session and JWT?", hi: "Session और JWT में क्या फर्क है?" },
    definition: {
      en: `
Session-based (stateful): the server stores the session and gives the client a session ID (usually in a cookie). On every request, the server looks up that session.

Token-based (JWT, stateless): the server gives the client a signed token. The client sends it with every request and the server verifies the signature, without storing session state.

Token-based auth fits well with stateless REST APIs.

Comparison:

Where the data lives
- Session: on the server (memory / Redis / database). The client holds only the ID.
- JWT: inside the token, held by the client. The server stores nothing.

State
- Session: stateful.
- JWT: stateless.

Stored on the client in
- Session: cookie (session ID).
- JWT: cookie or localStorage (the token).

Each request
- Session: server looks up the session (extra storage read).
- JWT: server only verifies the signature.

Scaling
- Session: harder. All servers need a shared session store (like Redis).
- JWT: easier. Any server can verify the token with the secret key.

Logout / revoke
- Session: easy. Delete the session on the server and it stops working immediately.
- JWT: hard. The token stays valid until it expires (needs a blacklist or short expiry).

Size
- Session: tiny ID in the cookie.
- JWT: larger, because it carries the data.

Security
- Session: the data is hidden on the server. The risk is session ID theft and CSRF.
- JWT: the payload is readable by anyone (signed, not encrypted). The risk is token theft (XSS if in localStorage) and no easy revoke.

Best for
- Session: traditional web apps with a server-rendered UI, when you need instant logout/control.
- JWT: REST APIs, mobile apps, microservices and single-page apps that need to scale.

Memory trick:
Session = server remembers you (ID → data).
JWT = you carry your proof (token is the data).
      `,
      hi: `
Session-based (stateful): server session को store करता है और client को एक session ID देता है (आमतौर पर cookie में)। हर request पर server उस session को ढूंढता है।

Token-based (JWT, stateless): server client को एक signed token देता है। Client उसे हर request के साथ भेजता है और server signature verify करता है, session state store किए बिना।

Token-based auth stateless REST APIs के साथ अच्छा fit बैठता है।

Comparison:

Data कहां रहता है
- Session: server पर (memory / Redis / database)। Client के पास सिर्फ ID होती है।
- JWT: token के अंदर, जो client के पास रहता है। Server कुछ store नहीं करता।

State
- Session: stateful।
- JWT: stateless।

Client पर कहां store होता है
- Session: cookie (session ID)।
- JWT: cookie या localStorage (token)।

हर request पर
- Session: server session ढूंढता है (extra storage read)।
- JWT: server सिर्फ signature verify करता है।

Scaling
- Session: मुश्किल। सभी servers को shared session store (जैसे Redis) चाहिए।
- JWT: आसान। कोई भी server secret key से token verify कर सकता है।

Logout / revoke
- Session: आसान। Server पर session delete करो और वो तुरंत काम करना बंद कर देता है।
- JWT: मुश्किल। Token expire होने तक valid रहता है (blacklist या छोटी expiry चाहिए)।

Size
- Session: cookie में छोटी सी ID।
- JWT: बड़ा, क्योंकि उसमें data होता है।

Security
- Session: data server पर छिपा रहता है। खतरा है session ID चोरी और CSRF।
- JWT: payload कोई भी पढ़ सकता है (signed है, encrypted नहीं)। खतरा है token चोरी (localStorage में हो तो XSS) और आसान revoke न होना।

किसके लिए best
- Session: traditional web apps जिनका UI server-rendered हो, जब instant logout/control चाहिए।
- JWT: REST APIs, mobile apps, microservices और single-page apps जिन्हें scale करना है।

याद रखने की trick:
Session = server आपको याद रखता है (ID → data)।
JWT = आप अपना सबूत साथ लेकर चलते हो (token ही data है)।
      `,
    },
    examples: [
      {
        label: "Side by side",
        code: `
Session:  Cookie: sessionId=abc123             (server looks up abc123 in its store)
JWT:      Authorization: Bearer eyJhbGciOi...  (server verifies the signature)
        `,
      },
    ],
  },
  cookieVsStorage: {
    title: { en: "What is the difference between Cookies, localStorage and sessionStorage?", hi: "Cookies, localStorage और sessionStorage में क्या फर्क है?" },
    definition: {
      en: `
All three store data in the browser, but they behave differently.

Cookie
- Size: about 4 KB.
- Sent to the server automatically with every request.
- Has an expiry (Max-Age/Expires). Can be HttpOnly (JavaScript can't read it).
- Best for: session IDs and auth.

localStorage
- Size: about 5–10 MB.
- Never sent to the server automatically. Only JavaScript can read/write it.
- Stays until you delete it (even after the browser is closed).
- Best for: preferences like theme. Not safe for sensitive tokens, because any script on the page (XSS) can read it.

sessionStorage
- Size: about 5 MB.
- Not sent to the server automatically.
- Cleared when the tab is closed. Separate for every tab.
- Best for: temporary data of one tab, like a form step.

Summary:
Cookie = small, goes to the server automatically.
localStorage = big, stays forever, only in the browser.
sessionStorage = big, lasts only for the tab.
      `,
      hi: `
तीनों browser में data store करते हैं, लेकिन इनका behavior अलग है।

Cookie
- Size: लगभग 4 KB।
- हर request के साथ server को अपने आप भेजी जाती है।
- Expiry होती है (Max-Age/Expires)। HttpOnly हो सकती है (JavaScript पढ़ नहीं सकता)।
- Best: session IDs और auth के लिए।

localStorage
- Size: लगभग 5–10 MB।
- Server को अपने आप कभी नहीं भेजा जाता। सिर्फ JavaScript इसे पढ़/लिख सकता है।
- जब तक आप delete न करो तब तक रहता है (browser बंद होने पर भी)।
- Best: theme जैसी preferences के लिए। Sensitive tokens के लिए safe नहीं, क्योंकि page पर कोई भी script (XSS) इसे पढ़ सकती है।

sessionStorage
- Size: लगभग 5 MB।
- Server को अपने आप नहीं भेजा जाता।
- Tab बंद होने पर clear हो जाता है। हर tab का अलग होता है।
- Best: एक tab के temporary data के लिए, जैसे form का step।

Summary:
Cookie = छोटी, server को अपने आप जाती है।
localStorage = बड़ा, हमेशा रहता है, सिर्फ browser में।
sessionStorage = बड़ा, सिर्फ tab तक रहता है।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
localStorage.setItem("theme", "dark");        // stays after browser restart
sessionStorage.setItem("step", "2");          // gone when the tab is closed
document.cookie = "lang=hi; max-age=86400";   // also sent to the server
        `,
      },
    ],
  },
};
