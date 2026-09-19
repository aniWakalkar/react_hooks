import { flow, st } from "../visualHelpers";

export const middlewareGateways = {
  whatIsMiddleware: {
    visual: flow([
      st("📨", ["Request", "Request"], ["An HTTP request arrives at the server.", "Server पर HTTP request आती है।"]),
      st("📝", ["Logger", "Logger"], ["Middleware 1 logs the method and URL, then calls next().", "Middleware 1 method और URL log करता है, फिर next() call करता है।"]),
      st("🔐", ["Auth check", "Auth check"], ["Middleware 2 checks the token. If invalid, it can stop here and return 401.", "Middleware 2 token check करता है। Invalid हो तो यहीं रुककर 401 return कर सकता है।"]),
      st("⚙️", ["Route handler", "Route handler"], ["Only now does the request reach the business logic.", "अब जाकर request business logic तक पहुंचती है।"]),
      st("📦", ["Response", "Response"], ["The response goes back to the client.", "Response client को वापस जाता है।"], "ok"),
    ]),
    title: { en: "What is Middleware?", hi: "Middleware क्या है?" },
    definition: {
      en: `
Middleware sits between the incoming HTTP request and the application's route/business logic.

It can be used for cross-cutting tasks such as:

- Authentication
- Authorization
- Logging
- CORS
- Request processing
- Error handling

Interview version:
Middleware sits between the request and the route handler and can handle tasks such as authentication, logging, and CORS before the request reaches the business logic.
      `,
      hi: `
Middleware आने वाली HTTP request और application के route/business logic के बीच में बैठता है।

इसे cross-cutting कामों के लिए use किया जा सकता है, जैसे:

- Authentication
- Authorization
- Logging
- CORS
- Request processing
- Error handling

Interview version:
Middleware request और route handler के बीच बैठता है और request के business logic तक पहुंचने से पहले authentication, logging और CORS जैसे काम संभाल सकता है।
      `,
    },
    examples: [
      {
        label: "Logging middleware (Express)",
        code: `
function logger(req, res, next) {
  console.log(req.method, req.url);
  next(); // pass the request to the next step
}

app.use(logger);
app.get("/users", getUsers);
        `,
      },
    ],
  },
  middlewareUses: {
    title: { en: "What can middleware be used for?", hi: "Middleware किन कामों के लिए use हो सकता है?" },
    definition: {
      en: `
Common uses include:

- Authentication
- Authorization
- CORS
- Logging
- Request validation
- Error handling
- Request/response modification
      `,
      hi: `
Common uses:

- Authentication
- Authorization
- CORS
- Logging
- Request validation
- Error handling
- Request/response को modify करना
      `,
    },
    examples: [
      {
        label: "Multiple middlewares in a chain",
        code: `
app.use(cors());
app.use(express.json());   // parse JSON body
app.use(logger);
app.use(authMiddleware);   // check token
app.use("/users", userRoutes);
app.use(errorHandler);     // handle errors
        `,
      },
    ],
  },
  middlewareResponse: {
    title: { en: "Can middleware return a response directly?", hi: "क्या middleware सीधे response return कर सकता है?" },
    definition: {
      en: `
Yes. Middleware can sometimes handle a request and return a response without passing the request to the next middleware or route handler.

For example, authentication middleware could reject an unauthorized request immediately.
      `,
      hi: `
हाँ। Middleware कभी-कभी request को अगले middleware या route handler तक भेजे बिना खुद handle करके response return कर सकता है।

उदाहरण के लिए, authentication middleware unauthorized request को तुरंत reject कर सकता है।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
function authMiddleware(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "Unauthorized" }); // stops here
  }
  next();
}
        `,
      },
    ],
  },
  middlewareTypes: {
    visual: flow([
      st("📨", ["Request", "Request"], ["The request enters the first middleware.", "Request पहले middleware में आती है।"]),
      st("1️⃣", ["Middleware 1", "Middleware 1"], ["Does its job, then calls next() to pass the request on.", "अपना काम करके next() call करता है ताकि request आगे जाए।"]),
      st("2️⃣", ["Middleware 2", "Middleware 2"], ["If it does not call next() or send a response, the request hangs.", "अगर ये next() call नहीं करता या response नहीं भेजता, तो request अटक जाती है।"], "danger"),
      st("⚙️", ["Route handler", "Route handler"], ["The last step. It sends the response.", "आखिरी step। ये response भेजता है।"]),
      st("🚨", ["Error handler", "Error handler"], ["If any step throws an error, the error middleware (err, req, res, next) handles it.", "किसी step में error आए तो error middleware (err, req, res, next) उसे संभालता है।"], "ok"),
    ]),
    title: { en: "What are the types of middleware, what is next(), and why does the order matter?", hi: "Middleware के types कौन-से हैं, next() क्या है, और order क्यों मायने रखता है?" },
    definition: {
      en: `
Types of middleware (Express):
- Application-level: applies to the whole app. app.use(logger)
- Router-level: applies to a group of routes. router.use(authMiddleware)
- Built-in: comes with the framework. express.json(), express.static()
- Third-party: installed from npm. cors, helmet, morgan
- Error-handling: has 4 parameters (err, req, res, next). It catches errors from earlier steps.

What is next()?
next() passes control to the next middleware or route handler. A middleware must do one of two things:
1. call next() to continue, or
2. send a response (res.send / res.json) to end the request.
If it does neither, the request hangs and the client keeps waiting.

Why does the order matter?
Middleware runs in the order it is written, from top to bottom.
- express.json() must come before the routes, or req.body will be undefined.
- cors() should come early, so that even the preflight requests are handled.
- The auth middleware must come before the protected routes.
- The error handler must come last.

A middleware can also be applied to only one route:
app.get("/admin", authMiddleware, adminHandler)
      `,
      hi: `
Middleware के types (Express):
- Application-level: पूरी app पर लगता है। app.use(logger)
- Router-level: routes के एक group पर लगता है। router.use(authMiddleware)
- Built-in: framework के साथ आते हैं। express.json(), express.static()
- Third-party: npm से install होते हैं। cors, helmet, morgan
- Error-handling: इसमें 4 parameters होते हैं (err, req, res, next)। ये पिछले steps के errors पकड़ता है।

next() क्या है?
next() control को अगले middleware या route handler को देता है। Middleware को इन दो में से एक काम करना ज़रूरी है:
1. आगे बढ़ने के लिए next() call करना, या
2. Request खत्म करने के लिए response भेजना (res.send / res.json)।
दोनों में से कुछ न करे तो request अटक जाती है और client इंतज़ार करता रहता है।

Order क्यों मायने रखता है?
Middleware उसी order में चलते हैं जिसमें लिखे हैं, ऊपर से नीचे।
- express.json() routes से पहले आना चाहिए, वरना req.body undefined रहेगा।
- cors() जल्दी आना चाहिए, ताकि preflight requests भी handle हों।
- Auth middleware protected routes से पहले आना चाहिए।
- Error handler सबसे आखिर में आना चाहिए।

Middleware को सिर्फ एक route पर भी लगाया जा सकता है:
app.get("/admin", authMiddleware, adminHandler)
      `,
    },
    examples: [
      {
        label: "Order of middleware in a real app",
        code: `
app.use(cors());                 // 1. CORS (also handles preflight)
app.use(express.json());         // 2. parse the JSON body
app.use(logger);                 // 3. log every request
app.use("/api", authMiddleware); // 4. protect everything under /api
app.use("/api/users", userRoutes);   // 5. routes
app.use(errorHandler);           // 6. errors, always last
        `,
      },
      {
        label: "Error-handling middleware (4 parameters)",
        code: `
function errorHandler(err, req, res, next) {
  console.error(err.message);
  res.status(500).json({ message: "Something went wrong" });
}
        `,
      },
    ],
  },
  reverseProxy: {
    visual: flow([
      st("🌐", ["Client", "Client"], ["The client talks only to the proxy, never directly to the backend.", "Client सिर्फ proxy से बात करता है, backend से सीधे नहीं।"]),
      st("🔀", ["Reverse proxy (Nginx)", "Reverse proxy (Nginx)"], ["It receives the request and can handle HTTPS, caching and load balancing.", "ये request receive करता है और HTTPS, caching, load balancing संभाल सकता है।"]),
      st("🖥️", ["Backend server", "Backend server"], ["The proxy forwards the request to the right backend server.", "Proxy request को सही backend server तक forward करता है।"]),
      st("📦", ["Response", "Response"], ["The response returns through the proxy to the client.", "Response proxy से होकर client तक वापस आता है।"], "ok"),
    ]),
    title: { en: "What is a Reverse Proxy?", hi: "Reverse Proxy क्या है?" },
    definition: {
      en: `
A reverse proxy sits in front of backend servers and receives client requests on their behalf. It then forwards them to the right server and returns the response to the client.

It can also handle HTTPS, caching, compression and load balancing. Nginx is a common example.
      `,
      hi: `
Reverse proxy backend servers के आगे बैठता है और उनकी तरफ से client requests receive करता है। फिर उन्हें सही server तक forward करता है और response client को वापस देता है।

ये HTTPS, caching, compression और load balancing भी संभाल सकता है। Nginx इसका common example है।
      `,
    },
    examples: [
      {
        label: "Nginx config",
        code: `
server {
  listen 80;

  location /api/ {
    proxy_pass http://localhost:8000;   # forward to the backend
  }
}
        `,
      },
    ],
  },
  whatIsApiGateway: {
    visual: flow([
      st("🖥️", ["Client", "Client"], ["The client sends GET /orders/5 to one single address.", "Client एक ही address पर GET /orders/5 भेजता है।"]),
      st("🚪", ["API Gateway", "API Gateway"], ["The gateway checks authentication and rate limits.", "Gateway authentication और rate limits check करता है।"]),
      st("🧭", ["Routing", "Routing"], ["/orders goes to the Order Service. /users would go to the User Service.", "/orders, Order Service को जाता है। /users, User Service को जाएगा।"]),
      st("🛒", ["Order Service", "Order Service"], ["The right service handles the request.", "सही service request को handle करती है।"]),
      st("📦", ["Response", "Response"], ["The result returns through the gateway to the client.", "Result gateway से होकर client को वापस जाता है।"], "ok"),
    ]),
    title: { en: "What is an API Gateway?", hi: "API Gateway क्या है?" },
    definition: {
      en: `
An API Gateway acts as a single entry point for clients in a microservices architecture.

It receives client requests and routes them to the appropriate backend service.

It can also handle cross-cutting concerns such as:

- Authentication
- Rate limiting
- Logging
- Request routing
      `,
      hi: `
API Gateway microservices architecture में clients के लिए single entry point का काम करता है।

ये client requests receive करके उन्हें सही backend service तक route करता है।

ये cross-cutting concerns भी संभाल सकता है, जैसे:

- Authentication
- Rate limiting
- Logging
- Request routing
      `,
    },
    examples: [
      {
        label: "Routing example",
        code: `
Client → API Gateway
           /users    → User Service
           /orders   → Order Service
           /payments → Payment Service
        `,
      },
    ],
  },
  apiGatewayMicroservices: {
    title: { en: "Is an API Gateway commonly used with microservices?", hi: "क्या API Gateway microservices के साथ आमतौर पर use होता है?" },
    definition: {
      en: `
Yes. API gateways are commonly used in microservice architectures as a single entry point for clients and to route requests to the appropriate service.
      `,
      hi: `
हाँ। Microservice architectures में API gateways आमतौर पर clients के लिए single entry point के रूप में और requests को सही service तक route करने के लिए use होते हैं।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
Without gateway: the app must know every service's address
   App → user-service:3001, order-service:3002, payment-service:3003

With gateway: the app knows only one address
   App → api.example.com → (gateway routes to the right service)
        `,
      },
    ],
  },
  loadBalancerVsApiGateway: {
    title: { en: "What is the difference between a Load Balancer and an API Gateway?", hi: "Load Balancer और API Gateway में क्या फर्क है?" },
    definition: {
      en: `
A load balancer primarily distributes incoming traffic across multiple servers or instances to prevent one server from becoming overloaded.

An API gateway acts as an entry point to backend services and routes requests to the appropriate service. It can also handle concerns such as authentication and rate limiting.

Simple distinction:
Load Balancer → Which server should handle this request?
API Gateway → Which service should handle this request?

They can also be used together.
      `,
      hi: `
Load balancer मुख्य रूप से आने वाले traffic को कई servers या instances में बांटता है, ताकि कोई एक server overload न हो।

API gateway backend services का entry point है और requests को सही service तक route करता है। ये authentication और rate limiting जैसे काम भी संभाल सकता है।

आसान फर्क:
Load Balancer → ये request कौन-सा server handle करे?
API Gateway → ये request कौन-सी service handle करे?

इन्हें साथ में भी use किया जा सकता है।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
Load Balancer:
  /users → [User Server 1, User Server 2, User Server 3]   (picks one server)

API Gateway:
  /users → User Service,  /orders → Order Service          (picks the service)
        `,
      },
    ],
  },
  rateLimiting: {
    visual: flow([
      st("📨", ["Requests 1–100", "Requests 1–100"], ["The client sends requests within the limit of 100 per minute.", "Client 100 प्रति minute की limit के अंदर requests भेजता है।"]),
      st("🚦", ["Rate limiter", "Rate limiter"], ["It counts requests per client. Under the limit → allowed.", "ये हर client की requests गिनता है। Limit के अंदर → allowed।"], "ok"),
      st("📨", ["Request 101", "Request 101"], ["One more request arrives in the same minute.", "उसी minute में एक और request आती है।"]),
      st("🛑", ["429 Too Many Requests", "429 Too Many Requests"], ["The limit is crossed, so the server rejects the request.", "Limit पार हो गई, इसलिए server request reject कर देता है।"], "danger"),
    ]),
    title: { en: "What is Rate Limiting?", hi: "Rate Limiting क्या है?" },
    definition: {
      en: `
Rate limiting restricts how many requests a client can make in a given time, for example 100 requests per minute.

It protects the server from abuse and overload. When the limit is crossed, the server usually returns 429 Too Many Requests.
      `,
      hi: `
Rate limiting तय करती है कि एक client तय समय में कितनी requests कर सकता है, जैसे 100 requests प्रति minute।

ये server को abuse और overload से बचाती है। Limit पार होने पर server आमतौर पर 429 Too Many Requests return करता है।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
Limit: 100 requests / minute

Request #101 →
HTTP/1.1 429 Too Many Requests
Retry-After: 30
        `,
      },
    ],
  },
};
