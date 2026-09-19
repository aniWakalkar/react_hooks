export const basics = {
  whatIsExpress: {
    title: { en: "What is Express.js and why use it?", hi: "Express.js क्या है और इसे क्यों use करते हैं?" },
    definition: {
      en: `
Express.js is a minimal, fast and flexible web framework for Node.js, used to build web servers and REST APIs.

Node's built-in http module is low-level: you must parse URLs, methods and bodies by hand. Express adds:
- Easy routing (app.get, app.post, ...)
- A middleware system
- Helpers on the request and response objects (req.params, res.json, ...)
- Easy integration with templates, databases and many third-party packages

Express is unopinionated: it doesn't force a project structure, so you decide how to organise the code.
      `,
      hi: `
Express.js Node.js के लिए एक minimal, तेज़ और flexible web framework है, जिससे web servers और REST APIs बनाते हैं।

Node का built-in http module low-level है: URLs, methods और bodies को हाथ से parse करना पड़ता है। Express ये देता है:
- आसान routing (app.get, app.post, ...)
- Middleware system
- Request और response objects पर helpers (req.params, res.json, ...)
- Templates, databases और कई third-party packages के साथ आसान integration

Express unopinionated है: ये project structure थोपता नहीं, आप खुद तय करते हो कि code कैसे organise करना है।
      `,
    },
    examples: [
      {
        label: "A basic Express server",
        code: `
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Express");
});

app.listen(3000, () => console.log("Server running on port 3000"));
        `,
      },
    ],
  },
  expressRouting: {
    title: { en: "What is routing in Express? What is express.Router()?", hi: "Express में routing क्या है? express.Router() क्या है?" },
    definition: {
      en: `
Routing decides which code runs for a given HTTP method and URL path.

Syntax: app.METHOD(path, handler)
Methods: app.get, app.post, app.put, app.patch, app.delete, app.all

Route parameters: /users/:id gives req.params.id.

express.Router() creates a mini, modular router. Instead of putting all routes in one file, you group related routes (users, products, orders) in separate files and mount them on a path with app.use("/api/users", userRouter).

You can also chain handlers on the same path with app.route("/users").get(...).post(...).
      `,
      hi: `
Routing तय करती है कि दिए गए HTTP method और URL path के लिए कौन-सा code चले।

Syntax: app.METHOD(path, handler)
Methods: app.get, app.post, app.put, app.patch, app.delete, app.all

Route parameters: /users/:id से req.params.id मिलता है।

express.Router() एक छोटा, modular router बनाता है। सारे routes एक file में रखने की जगह आप related routes (users, products, orders) को अलग files में group करते हो और app.use("/api/users", userRouter) से path पर mount करते हो।

एक ही path पर handlers को chain भी कर सकते हो: app.route("/users").get(...).post(...)।
      `,
    },
    examples: [
      {
        label: "routes/users.js",
        code: `
const router = require("express").Router();

router.get("/", (req, res) => res.json([]));            // GET /api/users
router.get("/:id", (req, res) => res.json({ id: req.params.id }));
router.post("/", (req, res) => res.status(201).json(req.body));

module.exports = router;
        `,
      },
      {
        label: "app.js",
        code: `
const userRoutes = require("./routes/users");

app.use("/api/users", userRoutes);   // mount the router
        `,
      },
    ],
  },
  reqRes: {
    title: { en: "What are the req and res objects in Express?", hi: "Express में req और res objects क्या हैं?" },
    definition: {
      en: `
Every route handler receives (req, res).

req (request) - the data the client sent:
- req.params: path parameters (/users/:id)
- req.query: query string (?page=2)
- req.body: request body (needs express.json())
- req.headers: headers
- req.cookies: cookies (needs cookie-parser)
- req.method, req.url, req.ip

res (response) - what you send back:
- res.send(data): send text/HTML/data
- res.json(obj): send JSON
- res.status(code): set the status code (chainable)
- res.redirect(url): redirect
- res.cookie(name, value): set a cookie
- res.sendFile(path): send a file

A handler must end the request by sending a response (or calling next). If it doesn't, the client keeps waiting.
      `,
      hi: `
हर route handler को (req, res) मिलते हैं।

req (request) - client ने जो data भेजा:
- req.params: path parameters (/users/:id)
- req.query: query string (?page=2)
- req.body: request body (express.json() चाहिए)
- req.headers: headers
- req.cookies: cookies (cookie-parser चाहिए)
- req.method, req.url, req.ip

res (response) - जो आप वापस भेजते हो:
- res.send(data): text/HTML/data भेजना
- res.json(obj): JSON भेजना
- res.status(code): status code set करना (chain हो सकता है)
- res.redirect(url): redirect करना
- res.cookie(name, value): cookie set करना
- res.sendFile(path): file भेजना

Handler को response भेजकर (या next call करके) request खत्म करनी चाहिए। नहीं करे तो client इंतज़ार करता रहता है।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
app.post("/api/users/:id/notes", (req, res) => {
  const { id } = req.params;          // path
  const { draft } = req.query;        // query
  const { text } = req.body;          // body
  const token = req.headers.authorization;

  res.status(201).json({ id, text, draft });
});
        `,
      },
    ],
  },
  builtInMiddleware: {
    title: { en: "What are the built-in and common middleware in Express?", hi: "Express के built-in और common middleware कौन-से हैं?" },
    definition: {
      en: `
Built-in middleware (no install needed):
- express.json(): parses a JSON request body into req.body
- express.urlencoded({ extended: true }): parses HTML form data
- express.static("public"): serves static files (images, CSS, JS)

Commonly used third-party middleware:
- cors: enables CORS
- helmet: sets secure HTTP headers
- morgan: logs every request
- cookie-parser: parses cookies into req.cookies
- compression: gzips responses
- express-rate-limit: limits requests per client
- multer: handles file uploads (multipart/form-data)

Register them with app.use(). The order matters: express.json() must come before the routes that read req.body.
      `,
      hi: `
Built-in middleware (install की ज़रूरत नहीं):
- express.json(): JSON request body को parse करके req.body में डालता है
- express.urlencoded({ extended: true }): HTML form data parse करता है
- express.static("public"): static files (images, CSS, JS) serve करता है

Commonly use होने वाले third-party middleware:
- cors: CORS enable करता है
- helmet: secure HTTP headers set करता है
- morgan: हर request log करता है
- cookie-parser: cookies को req.cookies में parse करता है
- compression: responses को gzip करता है
- express-rate-limit: हर client की requests limit करता है
- multer: file uploads (multipart/form-data) handle करता है

इन्हें app.use() से register करो। Order मायने रखता है: express.json() उन routes से पहले आना चाहिए जो req.body पढ़ते हैं।
      `,
    },
    examples: [
      {
        label: "Typical setup",
        code: `
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

app.use(helmet());
app.use(cors({ origin: "http://localhost:3000" }));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));
        `,
      },
    ],
  },
  errorHandling: {
    title: { en: "How do you handle errors in Express?", hi: "Express में errors कैसे handle करते हैं?" },
    definition: {
      en: `
Express has a special error-handling middleware with 4 parameters: (err, req, res, next). It must be registered after all the routes.

How errors reach it:
- A synchronous error thrown inside a handler is caught by Express automatically.
- For async code, pass the error with next(err). In Express 4, a rejected promise inside an async handler is NOT caught automatically, so wrap the handler in try/catch (or use a small asyncHandler wrapper). Express 5 handles rejected promises automatically.

Good practice:
- Create one central error handler.
- Use a custom error class with a statusCode.
- Return a consistent JSON shape, and don't leak stack traces in production.
- Add a 404 handler before the error handler, for unknown routes.
      `,
      hi: `
Express में एक खास error-handling middleware होता है जिसमें 4 parameters होते हैं: (err, req, res, next)। इसे सारे routes के बाद register करना पड़ता है।

Errors वहां कैसे पहुंचते हैं:
- Handler के अंदर throw हुआ synchronous error Express अपने आप पकड़ लेता है।
- Async code के लिए error को next(err) से पास करो। Express 4 में async handler के अंदर की rejected promise अपने आप नहीं पकड़ी जाती, इसलिए handler को try/catch में लपेटो (या छोटा asyncHandler wrapper use करो)। Express 5 rejected promises खुद handle करता है।

Good practice:
- एक central error handler बनाओ।
- statusCode वाली custom error class use करो।
- एक जैसा JSON shape return करो, और production में stack trace leak मत करो।
- अनजान routes के लिए error handler से पहले 404 handler लगाओ।
      `,
    },
    examples: [
      {
        label: "asyncHandler wrapper and central error handler",
        code: `
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

app.get("/users/:id", asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    const err = new Error("User not found");
    err.statusCode = 404;
    throw err;
  }
  res.json(user);
}));

// 404 for unknown routes
app.use((req, res) => res.status(404).json({ message: "Route not found" }));

// central error handler (last, 4 parameters)
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({ message: err.message });
});
        `,
      },
    ],
  },
};
