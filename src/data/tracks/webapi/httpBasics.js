import { flow, st } from "../visualHelpers";

export const httpBasics = {
  httpVsHttps: {
    visual: [
      flow(
        [
          st("🌐", ["Browser", "Browser"], ["The user sends password=1234.", "User password=1234 भेजता है।"]),
          st("👀", ["Attacker", "Attacker"], ["On plain HTTP, anyone on the network can read: password=1234", "Plain HTTP पर network का कोई भी पढ़ सकता है: password=1234"], "danger"),
          st("🖥️", ["Server", "Server"], ["The server gets the data, but it could have been read or changed on the way.", "Server को data मिल जाता है, लेकिन रास्ते में पढ़ा या बदला जा सकता था।"]),
        ],
        ["HTTP (not secure)", "HTTP (secure नहीं)"]
      ),
      flow(
        [
          st("🌐", ["Browser", "Browser"], ["The user sends password=1234.", "User password=1234 भेजता है।"]),
          st("🔒", ["Encrypted", "Encrypted"], ["The attacker only sees random text: x9$#@k2...", "Attacker को सिर्फ random text दिखता है: x9$#@k2..."], "ok"),
          st("🖥️", ["Server", "Server"], ["Only the server can decrypt the data.", "सिर्फ server data को decrypt कर सकता है।"], "ok"),
        ],
        ["HTTPS (secure)", "HTTPS (secure)"]
      ),
    ],
    title: { en: "What is the difference between HTTP and HTTPS?", hi: "HTTP और HTTPS में क्या फर्क है?" },
    definition: {
      en: `
HTTP is a protocol used for communication between a client and a server. It allows clients to send requests and servers to send responses over a network.

HTTPS is HTTP with TLS encryption, which protects data while it is being transmitted between the client and server.

Important point:
HTTP itself is not data. HTTP is the set of rules (the protocol) according to which the data is exchanged.

Memory trick:
HTTPS = HTTP + Secure
      `,
      hi: `
HTTP एक protocol है जो client और server के बीच communication के लिए use होता है। इसके ज़रिए client request भेजता है और server network पर response भेजता है।

HTTPS मतलब TLS encryption के साथ HTTP, जो client और server के बीच data के transmit होते समय उसे सुरक्षित रखता है।

ज़रूरी बात:
HTTP खुद data नहीं है। HTTP rules/protocol है, जिसके according data exchange होता है।

याद रखने की trick:
HTTPS = HTTP + Secure
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
http://example.com/login    → data travels as plain text (not secure)
https://example.com/login   → data is encrypted (padlock icon in browser)
        `,
      },
    ],
  },
  httpStateless: {
    visual: flow([
      st("📨", ["Request 1", "Request 1"], ["The user logs in. The server checks the password and replies OK.", "User login करता है। Server password check करके OK बोलता है।"]),
      st("🧠", ["Server forgets", "Server भूल जाता है"], ["HTTP is stateless: after the response, the server keeps no memory of this request.", "HTTP stateless है: response देने के बाद server को इस request की कोई याद नहीं रहती।"], "danger"),
      st("📨", ["Request 2", "Request 2"], ["The user asks for GET /profile with nothing attached. The server asks: who are you?", "User कुछ भी attach किए बिना GET /profile मांगता है। Server पूछता है: तुम कौन हो?"], "danger"),
      st("🎟️", ["Token / cookie", "Token / cookie"], ["Fix: the client attaches a cookie or token with every request.", "Solution: client हर request के साथ cookie या token भेजता है।"]),
      st("✅", ["Server knows you", "Server पहचान लेता है"], ["The request now carries the needed info, so the server can answer.", "अब request में ज़रूरी info है, इसलिए server जवाब दे पाता है।"], "ok"),
    ]),
    title: { en: "Why is HTTP stateless and how does it work?", hi: "HTTP stateless क्यों है और ये कैसे काम करता है?" },
    definition: {
      en: `
HTTP is stateless. The server treats every request as new and does not remember the previous one.

So each request must carry what the server needs, like a cookie or a token.

Why: it is simple, and easy to scale, because any server can handle any request.

But apps need to remember users (login, cart). The application does this, not HTTP:
- Session: the server stores the data, the client sends a session ID (cookie).
- JWT: the client sends a token with every request.
- Database: the app's real data (users, orders, cart) is saved here.

HTTP is always stateless. An application can be stateful (session) or stateless (JWT).

Memory trick:
HTTP has no memory. The application adds it.
      `,
      hi: `
HTTP stateless है। Server हर request को नई मानता है और पिछली request को याद नहीं रखता।

इसलिए हर request में वो चीज़ होनी चाहिए जो server को चाहिए, जैसे cookie या token।

क्यों: ये simple है, और scale करना आसान है, क्योंकि कोई भी server कोई भी request संभाल सकता है।

लेकिन apps को users याद रखने पड़ते हैं (login, cart)। ये काम application करती है, HTTP नहीं:
- Session: server data store करता है, client session ID (cookie) भेजता है।
- JWT: client हर request के साथ token भेजता है।
- Database: app का असली data (users, orders, cart) यहां save होता है।

HTTP हमेशा stateless है। Application stateful (session) या stateless (JWT) हो सकती है।

याद रखने की trick:
HTTP की memory नहीं है। Application उसे जोड़ती है।
      `,
    },
    examples: [
      {
        label: "Same request, with and without identity",
        code: `
Without identity:
GET /profile
→ 401 Unauthorized   (server doesn't know who you are)

With a cookie (session, stateful):
GET /profile
Cookie: sessionId=abc123
→ 200 OK             (server looks up abc123)

With a token (JWT, stateless):
GET /profile
Authorization: Bearer <token>
→ 200 OK             (server verifies the token)
        `,
      },
    ],
  },
  httpMethods: {
    title: { en: "What are the common HTTP methods and what are they used for?", hi: "Common HTTP methods कौन-से हैं और किसलिए use होते हैं?" },
    definition: {
      en: `
GET → read/fetch data
POST → create a new resource
PUT → replace an existing resource completely
PATCH → update part of an existing resource
DELETE → remove a resource
      `,
      hi: `
GET → data पढ़ना/लाना
POST → नया resource बनाना
PUT → मौजूदा resource को पूरा replace करना
PATCH → मौजूदा resource का कुछ हिस्सा update करना
DELETE → resource हटाना
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
GET    /users      → list users
POST   /users      → create a user
PUT    /users/10   → replace user 10
PATCH  /users/10   → update some fields of user 10
DELETE /users/10   → delete user 10
        `,
      },
    ],
  },
  requestData: {
    visual: flow([
      st("🛣️", ["Path parameter", "Path parameter"], ["/users/10 → which specific resource (user 10).", "/users/10 → कौन-सा specific resource (user 10)।"]),
      st("🔎", ["Query parameter", "Query parameter"], ["?page=2&role=admin → filter, sort, search, paginate.", "?page=2&role=admin → filter, sort, search, paginate।"]),
      st("📦", ["Request body", "Request body"], ["{ name, email } → the data to create or update.", "{ name, email } → create या update करने का data।"]),
      st("🏷️", ["Headers", "Headers"], ["Authorization, Content-Type → extra info about the request.", "Authorization, Content-Type → request के बारे में extra info।"], "ok"),
    ]),
    title: { en: "How can data be sent to an endpoint (route)? What are these called?", hi: "Endpoint (route) को data कैसे भेजा जा सकता है? इन्हें क्या कहते हैं?" },
    definition: {
      en: `
The data sent with a request is called request data (request parameters and the request payload/body). It can be sent in 4 main ways:

1. Path parameters (route params)
- Part of the URL path. Used to identify one specific resource.
- Example: /users/10 → 10 is the path parameter.
- Express: req.params.id

2. Query parameters (query string)
- Written after ? as key=value pairs joined with &. Usually optional.
- Used for filtering, sorting, searching and pagination.
- Example: /users?role=admin&page=2&limit=10
- Express: req.query.page

3. Request body (payload)
- The data is sent inside the body of the request, usually as JSON. Used with POST, PUT and PATCH.
- Used to create or update data. Best for large data or sensitive data (like a password).
- Example: { "name": "Aniket", "email": "a@x.com" }
- Express: req.body (needs express.json() middleware)

4. Headers
- Extra information (metadata) about the request, not the main data.
- Example: Authorization: Bearer <token>, Content-Type: application/json
- Express: req.headers

Also:
- Cookies are sent automatically in the Cookie header.
- Form data (multipart/form-data) is used for file uploads.

Which one to use?
- Which resource? → path parameter
- Filter / sort / search / page? → query parameter
- Create / update data? → request body
- Token, content type, language? → headers

Important: never put passwords or tokens in the URL (path or query). URLs are saved in browser history and server logs. Use the body or headers.

Memory trick:
Path = which one. Query = how to filter it. Body = what data to save. Header = who is asking.
      `,
      hi: `
Request के साथ भेजे जाने वाले data को request data कहते हैं (request parameters और request payload/body)। इसे मुख्य रूप से 4 तरीकों से भेजा जा सकता है:

1. Path parameters (route params)
- URL path का हिस्सा। किसी एक specific resource की पहचान के लिए।
- Example: /users/10 → 10 path parameter है।
- Express: req.params.id

2. Query parameters (query string)
- ? के बाद key=value जोड़ों में, & से जुड़े हुए। आमतौर पर optional।
- Filtering, sorting, searching और pagination के लिए।
- Example: /users?role=admin&page=2&limit=10
- Express: req.query.page

3. Request body (payload)
- Data request की body के अंदर भेजा जाता है, आमतौर पर JSON में। POST, PUT और PATCH के साथ use होता है।
- Data create या update करने के लिए। बड़े या sensitive data (जैसे password) के लिए best।
- Example: { "name": "Aniket", "email": "a@x.com" }
- Express: req.body (इसके लिए express.json() middleware चाहिए)

4. Headers
- Request के बारे में extra जानकारी (metadata), मुख्य data नहीं।
- Example: Authorization: Bearer <token>, Content-Type: application/json
- Express: req.headers

इसके अलावा:
- Cookies, Cookie header में अपने आप भेजी जाती हैं।
- Form data (multipart/form-data) file upload के लिए use होता है।

कौन-सा कब use करें?
- कौन-सा resource? → path parameter
- Filter / sort / search / page? → query parameter
- Data create / update करना? → request body
- Token, content type, language? → headers

ज़रूरी: password या token कभी URL (path या query) में मत डालो। URLs browser history और server logs में save होते हैं। Body या headers use करो।

याद रखने की trick:
Path = कौन-सा। Query = कैसे filter करना। Body = कौन-सा data save करना। Header = कौन पूछ रहा है।
      `,
    },
    examples: [
      {
        label: "One request using all of them",
        code: `
PATCH /users/10?notify=true          ← path param (10) + query param (notify)
Authorization: Bearer eyJ...         ← header
Content-Type: application/json       ← header

{ "city": "Mumbai" }                 ← request body
        `,
      },
      {
        label: "Reading them in Express",
        code: `
app.use(express.json());

app.patch("/users/:id", (req, res) => {
  const id = req.params.id;          // path parameter → "10"
  const notify = req.query.notify;   // query parameter → "true"
  const data = req.body;             // body → { city: "Mumbai" }
  const token = req.headers.authorization;   // header

  res.json({ id, notify, data });
});
        `,
      },
      {
        label: "Sending them from React (fetch)",
        code: `
fetch("/api/users/10?notify=true", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  },
  body: JSON.stringify({ city: "Mumbai" }),
});
        `,
      },
    ],
  },
  httpStatusCodes: {
    title: { en: "What are HTTP Status Codes and why do we use them?", hi: "HTTP Status Codes क्या हैं और हम इन्हें क्यों use करते हैं?" },
    definition: {
      en: `
HTTP status codes are three-digit numbers sent by the server in the HTTP response to indicate the result of a request.

They help the client understand what happened with the request. Every status code has its own meaning.

The first digit tells the group:

1xx → Informational
2xx → Success
3xx → Redirection
4xx → Client error (the request has a problem)
5xx → Server error (the server has a problem)

Most used status codes:

2xx – Success
200 OK → The request was successful. Common for GET, and also for other successful responses.
201 Created → The request successfully created a new resource. Common for POST.
204 No Content → Success, but there is nothing to send back. Common for DELETE.

3xx – Redirection
301 Moved Permanently → The resource has moved to a new URL permanently.
302 Found → The resource is temporarily at another URL.
304 Not Modified → The cached copy is still valid, so use it.

4xx – Client errors
400 Bad Request → The request is invalid (wrong or missing data).
401 Unauthorized → The client is not authenticated (not logged in, or the token is missing/invalid).
403 Forbidden → The client is authenticated, but is not allowed to access this resource.
404 Not Found → The requested resource could not be found.
405 Method Not Allowed → That HTTP method is not supported for this URL.
409 Conflict → The request conflicts with the current state, for example a duplicate email.
422 Unprocessable Entity → The data is well-formed, but it fails validation.
429 Too Many Requests → The client crossed the rate limit.

5xx – Server errors
500 Internal Server Error → Something went wrong on the server.
502 Bad Gateway → A gateway/proxy got an invalid response from the server behind it.
503 Service Unavailable → The server is down or overloaded right now.
504 Gateway Timeout → A gateway/proxy did not get a response from the server in time.

200 vs 201:
200 OK → The request was successfully processed.
201 Created → The request successfully created a new resource.

401 vs 403:
401 = Who are you?
403 = I know who you are, but you can't do this.

Small correction: 200 isn't specifically for GET requests. A successful GET commonly returns 200, but 200 can also be returned for successful responses to other HTTP methods.

Interview answer:
HTTP status codes are three-digit numbers sent back as a response from the server to the client. Every status code has its own meaning. 200 means the request was successful, 201 means the resource was created, and 404 means something was not found.
      `,
      hi: `
HTTP status codes तीन अंकों के number होते हैं जो server, HTTP response में भेजता है, ताकि request का result पता चले।

इनसे client को समझ आता है कि request के साथ क्या हुआ। हर status code का अपना मतलब होता है।

पहला अंक group बताता है:

1xx → Informational
2xx → Success (सफल)
3xx → Redirection
4xx → Client error (request में गलती है)
5xx → Server error (server में गलती है)

सबसे ज़्यादा use होने वाले status codes:

2xx – Success
200 OK → Request सफल रही। GET में आम है, और दूसरे सफल responses में भी आता है।
201 Created → Request से सफलतापूर्वक नया resource बन गया। POST में आम है।
204 No Content → सफल, लेकिन वापस भेजने के लिए कुछ नहीं है। DELETE में आम है।

3xx – Redirection
301 Moved Permanently → Resource हमेशा के लिए नए URL पर चला गया है।
302 Found → Resource अभी कुछ समय के लिए दूसरे URL पर है।
304 Not Modified → Cache वाली copy अभी भी सही है, उसी को use करो।

4xx – Client errors
400 Bad Request → Request गलत है (data गलत या गायब है)।
401 Unauthorized → Client authenticated नहीं है (login नहीं है, या token नहीं है/गलत है)।
403 Forbidden → Client authenticated है, लेकिन उसे इस resource को access करने की permission नहीं है।
404 Not Found → मांगा गया resource नहीं मिला।
405 Method Not Allowed → इस URL पर वो HTTP method supported नहीं है।
409 Conflict → Request मौजूदा state से टकरा रही है, जैसे duplicate email।
422 Unprocessable Entity → Data का format सही है, लेकिन validation में fail हो गया।
429 Too Many Requests → Client ने rate limit पार कर दी।

5xx – Server errors
500 Internal Server Error → Server पर कुछ गड़बड़ हो गई।
502 Bad Gateway → Gateway/proxy को अपने पीछे वाले server से गलत response मिला।
503 Service Unavailable → Server अभी down है या overloaded है।
504 Gateway Timeout → Gateway/proxy को server से समय पर response नहीं मिला।

200 vs 201:
200 OK → Request सफलतापूर्वक process हो गई।
201 Created → Request से सफलतापूर्वक नया resource बन गया।

401 vs 403:
401 = तुम कौन हो?
403 = मैं तुम्हें जानता हूँ, लेकिन ये तुम नहीं कर सकते।

छोटा सुधार: 200 सिर्फ GET requests के लिए नहीं है। सफल GET में आमतौर पर 200 आता है, लेकिन दूसरे HTTP methods के सफल response में भी 200 आ सकता है।

Interview answer:
HTTP status codes तीन अंकों के number होते हैं जो server, client को response में वापस भेजता है। हर status code का अपना मतलब होता है। 200 का मतलब request सफल रही, 201 का मतलब resource बन गया, और 404 का मतलब कुछ मिला नहीं।
      `,
    },
    examples: [
      {
        label: "Status codes in real requests",
        code: `
GET    /users/10      → 200 OK
POST   /users         → 201 Created
DELETE /users/10      → 204 No Content
GET    /users/9999    → 404 Not Found
GET    /orders  (no token)              → 401 Unauthorized
DELETE /users/5 (logged in, not admin)  → 403 Forbidden
POST   /users  (email already exists)   → 409 Conflict
        `,
      },
      {
        label: "Handling status in React",
        code: `
const res = await fetch("/api/users/10");

if (res.status === 200) {
  const user = await res.json();
} else if (res.status === 401) {
  console.log("Please log in");
} else if (res.status === 404) {
  console.log("User not found");
} else if (res.status >= 500) {
  console.log("Server problem, try again later");
}
        `,
      },
    ],
  },
};
