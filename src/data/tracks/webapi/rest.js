import { flow, st } from "../visualHelpers";

export const rest = {
  whatIsApi: {
    visual: flow([
      st("🖥️", ["Client (React)", "Client (React)"], ["The frontend needs data, so it sends a request to the API.", "Frontend को data चाहिए, इसलिए वो API को request भेजता है।"]),
      st("🍽️", ["API (waiter)", "API (waiter)"], ["The API carries the request to the server, like a waiter carries your order to the kitchen.", "API request को server तक ले जाती है, जैसे waiter आपका order kitchen तक ले जाता है।"]),
      st("🗄️", ["Server + DB", "Server + DB"], ["The server prepares the data (the kitchen cooks the food).", "Server data तैयार करता है (kitchen खाना बनाती है)।"]),
      st("📦", ["JSON response", "JSON response"], ["The data travels back through the API to the client.", "Data API से होकर client को वापस आता है।"], "ok"),
    ]),
    title: { en: "What is an API?", hi: "API क्या है?" },
    definition: {
      en: `
API stands for Application Programming Interface.

It is a set of rules that lets one piece of software talk to another. For example, a React frontend calls a backend API to get or save data.

Real-life example: In a restaurant, you (client) don't go into the kitchen. You give your order to the waiter (API), the waiter takes it to the kitchen (server), and brings the food back to you.

Types of APIs (by style/protocol):

- REST: uses HTTP methods and URLs. The most common style. Usually returns JSON.
- SOAP: older, XML-based, strict rules.
- GraphQL: the client asks for exactly the fields it needs, using a single endpoint.
- gRPC: fast, binary protocol, often used between microservices.
- WebSocket: keeps a two-way connection open, used for real-time features like chat.
      `,
      hi: `
API का मतलब है Application Programming Interface।

ये rules का एक set है जिससे एक software दूसरे software से बात करता है। जैसे, React frontend data लाने या save करने के लिए backend API को call करता है।

Real-life example: Restaurant में आप (client) सीधे kitchen में नहीं जाते। आप waiter (API) को order देते हो, waiter उसे kitchen (server) तक ले जाता है और खाना वापस लाकर देता है।

API के types (style/protocol के हिसाब से):

- REST: HTTP methods और URLs use करती है। सबसे common style। ज़्यादातर JSON return करती है।
- SOAP: पुरानी, XML-based, सख्त rules वाली।
- GraphQL: client सिर्फ वही fields मांगता है जो चाहिए, और endpoint एक ही होता है।
- gRPC: तेज़, binary protocol, अक्सर microservices के बीच use होती है।
- WebSocket: दो-तरफा connection खुला रखती है, chat जैसे real-time features के लिए।
      `,
    },
    examples: [
      {
        label: "REST API call from React",
        code: `
fetch("https://api.example.com/users/10")
  .then((res) => res.json())
  .then((user) => console.log(user));

// Response (JSON)
// { "id": 10, "name": "Aniket", "city": "Pune" }
        `,
      },
      {
        label: "GraphQL – ask only for the fields you need",
        code: `
POST /graphql

query {
  user(id: 10) {
    name
    city
  }
}
        `,
      },
    ],
  },
  whatIsRest: {
    title: { en: "What is REST? What does REST stand for?", hi: "REST क्या है? REST का full form क्या है?" },
    definition: {
      en: `
REST stands for Representational State Transfer.

REST is an architectural style consisting of a set of principles for designing web APIs.

Some important REST principles include:

- Using standard HTTP methods
- Using standard HTTP status codes
- Identifying resources through URLs
- Keeping requests stateless
- Providing a consistent/uniform interface
      `,
      hi: `
REST का मतलब है Representational State Transfer।

REST एक architectural style है, यानी web APIs design करने के principles का set।

कुछ ज़रूरी REST principles:

- Standard HTTP methods use करना
- Standard HTTP status codes use करना
- URLs से resources की पहचान करना
- Requests को stateless रखना
- Consistent/uniform interface देना
      `,
    },
    examples: [
      {
        label: "Resource-based URLs",
        code: `
✅ REST style
GET    /users
GET    /users/10

❌ Not REST style
GET    /getAllUsers
POST   /deleteUser?id=10
        `,
      },
    ],
  },
  whatIsRestApi: {
    title: { en: "What is REST API?", hi: "REST API क्या है?" },
    definition: {
      en: `
A REST API is an API designed using the principles of REST.

It generally uses:

- HTTP methods such as GET, POST, PUT, PATCH, DELETE
- Resource-based URLs
- Stateless requests
- Standard HTTP status codes
      `,
      hi: `
REST API वो API है जो REST के principles पर design की गई हो।

ये आमतौर पर use करती है:

- HTTP methods जैसे GET, POST, PUT, PATCH, DELETE
- Resource-based URLs
- Stateless requests
- Standard HTTP status codes
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
GET /users
POST /users
GET /users/10
DELETE /users/10
        `,
      },
      {
        label: "Sample request and response",
        code: `
GET /users/10

→ 200 OK
{ "id": 10, "name": "Aniket" }
        `,
      },
    ],
  },
  restVsRestApi: {
    title: { en: "What is the difference between REST and REST API?", hi: "REST और REST API में क्या फर्क है?" },
    definition: {
      en: `
REST is the architectural style/principles.

A REST API is an actual API that is designed using those REST principles.

Simple way to remember:
REST = rules/principles
REST API = API built using those principles
      `,
      hi: `
REST architectural style/principles है।

REST API एक असली API है जो उन REST principles से बनाई गई है।

आसानी से याद रखने के लिए:
REST = rules/principles
REST API = उन principles से बनी API
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
REST      → the rules ("use HTTP methods, use URLs for resources, stay stateless")
REST API  → GET /users, POST /users ... (a real API following those rules)
        `,
      },
    ],
  },
  restfulVsRestApi: {
    title: { en: "Are RESTful API and REST API the same?", hi: "क्या RESTful API और REST API एक ही हैं?" },
    definition: {
      en: `
In practical usage, they're generally used to mean the same thing.

RESTful is an adjective meaning that something follows REST principles.

So: REST API ≈ RESTful API

REST is the architectural style, while RESTful means something that follows those REST principles.
      `,
      hi: `
Practical use में इन्हें आमतौर पर एक ही मतलब में use किया जाता है।

RESTful एक adjective है, यानी कोई चीज़ REST principles को follow करती है।

तो: REST API ≈ RESTful API

REST architectural style है, जबकि RESTful का मतलब है कि कोई चीज़ उन REST principles को follow करती है।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
RESTful:      POST /users          → create a user
Not RESTful:  POST /createNewUser  → action name in the URL
        `,
      },
    ],
  },
  statelessness: {
    title: { en: "What does Statelessness mean in REST?", hi: "REST में Statelessness का क्या मतलब है?" },
    definition: {
      en: `
Statelessness means that each request is independent and the server does not rely on stored session state from a previous request.

Each request should contain the information necessary for the server to process it.
      `,
      hi: `
Statelessness का मतलब है कि हर request independent होती है और server पिछली request के stored session state पर निर्भर नहीं करता।

हर request में वो सारी जानकारी होनी चाहिए जो server को उसे process करने के लिए चाहिए।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
Every request carries its own credentials:

GET /orders
Authorization: Bearer <token>

The server does not remember "this user logged in earlier".
        `,
      },
    ],
  },
  statelessImportance: {
    visual: flow([
      st("📨", ["Request 1", "Request 1"], ["The client sends a request with its token.", "Client अपने token के साथ request भेजता है।"]),
      st("🖥️", ["Server A", "Server A"], ["Server A answers using only what is in the request.", "Server A सिर्फ request में मौजूद info से जवाब देता है।"], "ok"),
      st("📨", ["Request 2", "Request 2"], ["The next request may go to a different server.", "अगली request किसी दूसरे server पर जा सकती है।"]),
      st("🖥️", ["Server B", "Server B"], ["Server B answers just as well. No shared session memory needed.", "Server B भी उतना ही अच्छा जवाब देता है। Shared session memory नहीं चाहिए।"], "ok"),
    ]),
    title: { en: "What is a stateless request and why is it important in REST?", hi: "Stateless request क्या है और REST में ये क्यों ज़रूरी है?" },
    definition: {
      en: `
A stateless request doesn't depend on server-side session state from previous requests. Each request is independent.

This makes systems easier to scale because requests can generally be handled by different servers without depending on a particular server's session memory.
      `,
      hi: `
Stateless request पिछली requests के server-side session state पर निर्भर नहीं करती। हर request independent होती है।

इससे system को scale करना आसान होता है, क्योंकि requests अलग-अलग servers handle कर सकते हैं, किसी एक server की session memory पर निर्भर हुए बिना।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
Request 1 → Server A
Request 2 → Server B
Request 3 → Server C

Every server can answer correctly, because each request has all the info it needs.
        `,
      },
    ],
  },
  putVsPatch: {
    title: { en: "What is the difference between PUT and PATCH?", hi: "PUT और PATCH में क्या फर्क है?" },
    definition: {
      en: `
PUT replaces the whole resource with the data you send.

PATCH updates only the fields you send and leaves the rest unchanged.
      `,
      hi: `
PUT पूरे resource को आपके भेजे data से replace कर देता है।

PATCH सिर्फ वही fields update करता है जो आप भेजते हो, बाकी जैसे थे वैसे रहते हैं।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
Existing user: { "name": "Aniket", "city": "Pune", "age": 24 }

PUT /users/10    body: { "name": "Aniket", "city": "Mumbai", "age": 24 }   (full object)
PATCH /users/10  body: { "city": "Mumbai" }                                (only changed field)
        `,
      },
    ],
  },
  idempotency: {
    title: { en: "What does idempotent mean in HTTP?", hi: "HTTP में idempotent का क्या मतलब है?" },
    definition: {
      en: `
An operation is idempotent if making the same request multiple times gives the same result on the server as making it once.

GET, PUT and DELETE are idempotent.
POST is generally not idempotent, because calling it twice can create two resources.
      `,
      hi: `
कोई operation idempotent तब होता है जब एक ही request को कई बार करने पर server पर वही result आए जो एक बार करने पर आता।

GET, PUT और DELETE idempotent हैं।
POST आमतौर पर idempotent नहीं होता, क्योंकि उसे दो बार call करने पर दो resources बन सकते हैं।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
DELETE /users/10  (called 3 times) → user 10 is gone, same final state
POST   /users     (called 3 times) → 3 new users are created
        `,
      },
    ],
  },
};
