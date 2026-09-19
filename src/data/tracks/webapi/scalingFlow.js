import { flow, scale, st } from "../visualHelpers";

export const scalingFlow = {
  scalability: {
    title: { en: "What does scalability mean for a web application?", hi: "Web application के लिए scalability का क्या मतलब है?" },
    definition: {
      en: `
Scalability means making an application capable of handling increasing traffic or workload without slowing down or breaking.

Load balancing is one technique used to achieve scalability, but scalability is a broader concept.
      `,
      hi: `
Scalability का मतलब है application को इस लायक बनाना कि बढ़ते traffic या workload को बिना धीमा हुए या टूटे संभाल सके।

Load balancing scalability पाने की एक technique है, लेकिन scalability उससे बड़ा concept है।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
Today:  100 users/day        → 1 server is enough
Later:  1,000,000 users/day  → the app must still respond fast

Scalable app = keeps the same speed as users grow.
        `,
      },
    ],
  },
  verticalVsHorizontal: {
    visual: scale(),
    title: { en: "What is the difference between Vertical and Horizontal Scaling?", hi: "Vertical और Horizontal Scaling में क्या फर्क है?" },
    definition: {
      en: `
Vertical scaling means making one server more powerful by adding resources like CPU or RAM.

Horizontal scaling means adding more servers and distributing the traffic between them.

Easy memory trick:
Vertical = bigger server
Horizontal = more servers
      `,
      hi: `
Vertical scaling का मतलब है एक server में CPU या RAM जैसे resources बढ़ाकर उसे ज़्यादा powerful बनाना।

Horizontal scaling का मतलब है और servers जोड़ना और traffic को उनके बीच बांटना।

आसान trick:
Vertical = बड़ा server
Horizontal = ज़्यादा servers
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
Vertical:    1 server  (4 GB RAM)  →  1 server  (32 GB RAM)
Horizontal:  1 server              →  5 servers behind a load balancer
        `,
      },
    ],
  },
  caching: {
    visual: flow([
      st("📨", ["Request", "Request"], ["The client asks for user 10.", "Client user 10 मांगता है।"]),
      st("⚡", ["Check cache", "Cache check"], ["Found (hit)? Return instantly. Not found (miss)? Continue.", "मिल गया (hit)? तुरंत return। नहीं मिला (miss)? आगे बढ़ो।"]),
      st("🗄️", ["Database", "Database"], ["On a miss, read from the slower database.", "Miss होने पर धीमे database से पढ़ते हैं।"]),
      st("💾", ["Save to cache", "Cache में save"], ["Store a copy so the next request is fast.", "Copy store कर लो ताकि अगली request तेज़ हो।"]),
      st("📦", ["Response", "Response"], ["Return the data to the client.", "Data client को return करो।"], "ok"),
    ]),
    title: { en: "What is Caching and why is it used?", hi: "Caching क्या है और इसे क्यों use करते हैं?" },
    definition: {
      en: `
Caching means storing a copy of frequently used data in a faster place, so it doesn't have to be fetched or computed again every time.

It reduces response time and load on the database or server, which helps scalability.
      `,
      hi: `
Caching का मतलब है बार-बार use होने वाले data की copy को किसी तेज़ जगह पर रखना, ताकि उसे हर बार दोबारा fetch या compute न करना पड़े।

इससे response time और database/server का load कम होता है, जो scalability में मदद करता है।
      `,
    },
    examples: [
      {
        label: "Cache-aside with Redis (pseudo-code)",
        code: `
let user = cache.get("user:10");

if (!user) {                       // cache miss
  user = db.findUser(10);          // slow
  cache.set("user:10", user, 60);  // keep for 60 seconds
}

return user;                       // next calls are fast
        `,
      },
    ],
  },
  monolithVsMicroservices: {
    title: { en: "What is the difference between Monolith and Microservices?", hi: "Monolith और Microservices में क्या फर्क है?" },
    definition: {
      en: `
Monolith: the whole application is built and deployed as a single unit.

Microservices: the application is split into small, independent services. Each service handles one responsibility and can be deployed and scaled separately.

An API gateway is commonly used in front of microservices.
      `,
      hi: `
Monolith: पूरी application एक ही unit के रूप में बनती और deploy होती है।

Microservices: application को छोटी, independent services में बांट दिया जाता है। हर service एक ही ज़िम्मेदारी संभालती है और उसे अलग से deploy और scale किया जा सकता है।

Microservices के आगे आमतौर पर API gateway use होता है।
      `,
    },
    examples: [
      {
        label: "Example (e-commerce app)",
        code: `
Monolith:       [ Users + Orders + Payments + Products ]  → one app, one deploy

Microservices:  [Users]  [Orders]  [Payments]  [Products] → separate apps, deployed separately
        `,
      },
    ],
  },
  requestFlow: {
    visual: flow([
      st("🌐", ["Browser", "Browser"], ["The browser sends an HTTP request.", "Browser HTTP request भेजता है।"]),
      st("🔀", ["Nginx", "Nginx"], ["An edge layer like Nginx receives it and forwards it (not mandatory).", "Nginx जैसी edge layer इसे receive करके forward करती है (ज़रूरी नहीं)।"]),
      st("🚪", ["API Gateway", "API Gateway"], ["The gateway routes it to the right backend service (not mandatory).", "Gateway इसे सही backend service तक route करता है (ज़रूरी नहीं)।"]),
      st("🎛️", ["Controller", "Controller"], ["The controller receives the request and calls the service layer.", "Controller request receive करके service layer को call करता है।"]),
      st("⚙️", ["Service", "Service"], ["Business logic runs here.", "यहां business logic चलता है।"]),
      st("🗄️", ["Database", "Database"], ["If needed, the service reads or writes data.", "ज़रूरत हो तो service data पढ़ती या लिखती है।"]),
      st("📦", ["HTTP Response", "HTTP Response"], ["The result goes back through the layers to the client with a status code.", "Result layers से होकर status code के साथ client को वापस जाता है।"], "ok"),
    ]),
    title: { en: "How does a request flow from the frontend to the backend?", hi: "Request frontend से backend तक कैसे जाती है?" },
    definition: {
      en: `
The browser sends an HTTP request. An edge layer such as Nginx may receive the request and forward it to an API gateway. The API gateway routes the request to the appropriate backend service. The request reaches the controller, which calls the service layer where the business logic is executed. If required, the service communicates with the database. The result is then returned through the appropriate layers and eventually sent back to the client as an HTTP response with a status code.

Important: Nginx and an API gateway are not mandatory in every application. This flow is one common architecture, especially in larger or microservice-based systems.
      `,
      hi: `
Browser एक HTTP request भेजता है। Nginx जैसी कोई edge layer request receive करके उसे API gateway को forward कर सकती है। API gateway request को सही backend service तक route करता है। Request controller तक पहुंचती है, जो service layer को call करता है जहां business logic चलता है। ज़रूरत हो तो service database से बात करती है। फिर result सही layers से वापस होकर आखिर में HTTP response के रूप में status code के साथ client को भेज दिया जाता है।

ज़रूरी: हर application में Nginx और API gateway होना ज़रूरी नहीं है। ये flow एक common architecture है, खासकर बड़े या microservice-based systems में।
      `,
    },
    examples: [
      {
        label: "Simplified flow",
        code: `
React / Browser
      ↓
HTTP Request
      ↓
Nginx / Reverse Proxy
      ↓
API Gateway
      ↓
Backend Service
      ↓
Controller
      ↓
Service / Business Logic
      ↓
Database
      ↓
Service
      ↓
Controller
      ↓
HTTP Response
      ↓
Client
        `,
      },
    ],
  },
  afterBackend: {
    visual: flow([
      st("🛣️", ["Router", "Router"], ["Matches the URL to the correct controller.", "URL को सही controller से match करता है।"]),
      st("🎛️", ["Controller", "Controller"], ["Handles the request and response.", "Request और response को handle करता है।"]),
      st("⚙️", ["Service", "Service"], ["Runs the business logic.", "Business logic चलाता है।"]),
      st("🗄️", ["Database", "Database"], ["Stores and returns data.", "Data store करता और return करता है।"]),
      st("📦", ["Response", "Response"], ["Goes back up the same chain to the client.", "उसी chain से वापस client तक जाता है।"], "ok"),
    ]),
    title: { en: "What happens after the request reaches the backend?", hi: "Request backend तक पहुंचने के बाद क्या होता है?" },
    definition: {
      en: `
A common flow is:

Request → Router → Controller → Service/Business Logic → Database → Response

The exact architecture can vary depending on the application.
      `,
      hi: `
एक common flow ये है:

Request → Router → Controller → Service/Business Logic → Database → Response

असली architecture application के हिसाब से अलग हो सकता है।
      `,
    },
    examples: [
      {
        label: "Example (Express)",
        code: `
// Router
router.get("/users/:id", userController.getUser);

// Controller
async function getUser(req, res) {
  const user = await userService.findUser(req.params.id);
  res.status(200).json(user);
}
        `,
      },
    ],
  },
  backendNeedsData: {
    title: { en: "What happens when the backend needs data from the database?", hi: "Backend को database से data चाहिए हो तो क्या होता है?" },
    definition: {
      en: `
The service/business-logic layer typically makes a database query, receives the required data, applies the necessary business logic, and then prepares the response.
      `,
      hi: `
Service/business-logic layer आमतौर पर database query करती है, ज़रूरी data receive करती है, ज़रूरी business logic लगाती है और फिर response तैयार करती है।
      `,
    },
    examples: [
      {
        label: "Example (service layer)",
        code: `
async function findUser(id) {
  const user = await db.query("SELECT * FROM users WHERE id = ?", [id]);

  if (!user) throw new Error("User not found");   // business logic

  return { id: user.id, name: user.name };        // prepare response
}
        `,
      },
    ],
  },
};
