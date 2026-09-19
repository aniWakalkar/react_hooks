import { flow, st } from "../visualHelpers";

export const basics = {
  whatIsNode: {
    title: { en: "What is Node.js?", hi: "Node.js क्या है?" },
    definition: {
      en: `
Node.js is an open-source JavaScript runtime built on Chrome's V8 engine. It lets you run JavaScript outside the browser, for example on a server.

Key points:
- It is not a language and not a framework. It is a runtime environment.
- Event-driven and non-blocking I/O, so it handles many connections efficiently.
- Single-threaded event loop, with heavy I/O work handled in the background.
- Comes with npm, the largest package ecosystem.

Common uses: REST APIs, real-time apps (chat, live updates), microservices, CLI tools, and server-side rendering.
      `,
      hi: `
Node.js एक open-source JavaScript runtime है जो Chrome के V8 engine पर बना है। इससे आप JavaScript को browser के बाहर, जैसे server पर, चला सकते हो।

मुख्य बातें:
- ये language नहीं है और framework भी नहीं है। ये एक runtime environment है।
- Event-driven और non-blocking I/O, इसलिए कई connections को कुशलता से संभालता है।
- Single-threaded event loop, और भारी I/O काम background में होता है।
- npm के साथ आता है, जो सबसे बड़ा package ecosystem है।

Common uses: REST APIs, real-time apps (chat, live updates), microservices, CLI tools, और server-side rendering।
      `,
    },
    examples: [
      {
        label: "A minimal HTTP server (no framework)",
        code: `
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Node.js");
});

server.listen(3000, () => console.log("Running on port 3000"));
        `,
      },
    ],
  },
  nodeEventLoop: {
    visual: flow([
      st("📨", ["Requests arrive", "Requests आती हैं"], ["Many requests come in. Node handles them on one main thread.", "कई requests आती हैं। Node उन्हें एक main thread पर संभालता है।"]),
      st("🔁", ["Event loop", "Event loop"], ["It picks a task and runs its JavaScript. It never waits for slow I/O.", "ये एक task उठाकर उसका JavaScript चलाता है। Slow I/O का इंतज़ार कभी नहीं करता।"]),
      st("🧵", ["Thread pool / OS", "Thread pool / OS"], ["File, network and DB work is handed to libuv (thread pool and the OS).", "File, network और DB का काम libuv (thread pool और OS) को दे दिया जाता है।"]),
      st("📬", ["Callback queue", "Callback queue"], ["When the work is done, its callback is queued.", "काम पूरा होने पर उसका callback queue में जाता है।"]),
      st("✅", ["Callback runs", "Callback चलता है"], ["The event loop runs the callback and sends the response.", "Event loop callback चलाकर response भेज देता है।"], "ok"),
    ]),
    title: { en: "How does Node.js handle many requests with a single thread? (Event loop)", hi: "Node.js एक thread से कई requests कैसे संभालता है? (Event loop)" },
    definition: {
      en: `
Node.js runs your JavaScript on a single main thread, but it does not wait for slow operations.

How it works:
1. A request comes in and its JavaScript code runs on the main thread.
2. For slow work (file read, database query, network call), Node hands it to libuv, which uses the operating system or a thread pool.
3. The main thread is free immediately and continues with the next request.
4. When the slow work finishes, its callback is placed in a queue.
5. The event loop picks up the callback when the main thread is free and runs it.

Event loop phases (simplified): timers (setTimeout) → pending callbacks → poll (I/O) → check (setImmediate) → close callbacks.
process.nextTick and Promise microtasks run between phases, before the next phase.

Good for: I/O-heavy work (APIs, databases, file handling).
Bad for: CPU-heavy work (big calculations), because it blocks the single thread.
      `,
      hi: `
Node.js आपका JavaScript एक single main thread पर चलाता है, लेकिन slow operations का इंतज़ार नहीं करता।

ये कैसे काम करता है:
1. Request आती है और उसका JavaScript code main thread पर चलता है।
2. Slow काम (file read, database query, network call) के लिए Node उसे libuv को दे देता है, जो operating system या thread pool use करता है।
3. Main thread तुरंत खाली हो जाता है और अगली request पर चला जाता है।
4. Slow काम खत्म होने पर उसका callback एक queue में जाता है।
5. Main thread खाली होने पर event loop callback उठाकर चला देता है।

Event loop phases (simplified): timers (setTimeout) → pending callbacks → poll (I/O) → check (setImmediate) → close callbacks।
process.nextTick और Promise microtasks phases के बीच, अगले phase से पहले चलते हैं।

इनके लिए अच्छा: I/O-heavy काम (APIs, databases, file handling)।
इनके लिए बुरा: CPU-heavy काम (बड़ी calculations), क्योंकि ये single thread को block कर देते हैं।
      `,
    },
    examples: [
      {
        label: "Order of execution",
        code: `
console.log("1 start");

setTimeout(() => console.log("4 timeout"), 0);
setImmediate(() => console.log("5 immediate"));
Promise.resolve().then(() => console.log("3 promise"));
process.nextTick(() => console.log("2 nextTick"));

console.log("1 end");

// start, end, nextTick, promise, then timeout / immediate
        `,
      },
    ],
  },
  blockingVsNonBlocking: {
    title: { en: "What is the difference between blocking and non-blocking code?", hi: "Blocking और non-blocking code में क्या फर्क है?" },
    definition: {
      en: `
Blocking: the code waits for the operation to finish, and nothing else can run in the meantime. Example: fs.readFileSync.

Non-blocking: the operation is started and the program continues. The result comes later through a callback, a Promise or async/await. Example: fs.readFile, fs.promises.readFile.

In Node.js, blocking the single thread means every other request has to wait. So use non-blocking APIs on the server, and avoid the Sync methods (except while starting up the app).
      `,
      hi: `
Blocking: code operation के खत्म होने का इंतज़ार करता है, और तब तक कुछ और नहीं चल सकता। Example: fs.readFileSync।

Non-blocking: operation शुरू हो जाता है और program आगे बढ़ता है। Result बाद में callback, Promise या async/await से मिलता है। Example: fs.readFile, fs.promises.readFile।

Node.js में single thread को block करने का मतलब है कि बाकी हर request को इंतज़ार करना पड़ेगा। इसलिए server पर non-blocking APIs use करो, और Sync methods से बचो (app शुरू होते समय के अलावा)।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
const fs = require("fs");

// Blocking
const data = fs.readFileSync("big.txt", "utf8");
console.log("after read");        // runs only after the file is read

// Non-blocking
fs.readFile("big.txt", "utf8", (err, data) => {
  console.log("file read");
});
console.log("after read");        // runs first
        `,
      },
    ],
  },
  commonjsVsEsm: {
    title: { en: "What is the difference between CommonJS and ES Modules?", hi: "CommonJS और ES Modules में क्या फर्क है?" },
    definition: {
      en: `
Both are ways to split code into files (modules).

CommonJS (CJS) - the original Node.js system
- require() to import, module.exports to export.
- Loaded synchronously, at runtime.
- Default in Node.js for .js files.

ES Modules (ESM) - the JavaScript standard
- import / export.
- Statically analysed, so tree-shaking is possible. Supports top-level await.
- Use it by setting "type": "module" in package.json, or by using the .mjs extension.

ESM is the modern choice. Note: in ESM, __dirname and __filename are not available by default.
      `,
      hi: `
दोनों code को files (modules) में बांटने के तरीके हैं।

CommonJS (CJS) - Node.js का original system
- import के लिए require(), export के लिए module.exports।
- Synchronously, runtime पर load होता है।
- .js files के लिए Node.js में default।

ES Modules (ESM) - JavaScript का standard
- import / export।
- Statically analyse होता है, इसलिए tree-shaking possible है। Top-level await support करता है।
- package.json में "type": "module" set करके, या .mjs extension से use करो।

ESM modern choice है। ध्यान दो: ESM में __dirname और __filename default में नहीं मिलते।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
// CommonJS
const express = require("express");
module.exports = { add };

// ES Modules
import express from "express";
export const add = (a, b) => a + b;
export default express;
        `,
      },
    ],
  },
  npmPackageJson: {
    title: { en: "What are npm and package.json?", hi: "npm और package.json क्या हैं?" },
    definition: {
      en: `
npm (Node Package Manager) installs and manages the packages (libraries) your project uses.

package.json is the project's manifest file. It stores:
- name, version, description
- scripts (commands like start, test, dev)
- dependencies: needed to run the app in production
- devDependencies: needed only during development (nodemon, jest)

package-lock.json locks the exact installed versions, so everyone gets the same install.
node_modules is the folder where packages are installed. It should not be committed to git.

Version symbols: ^1.2.3 allows minor and patch updates, ~1.2.3 allows only patch updates.

Commands: npm init, npm install, npm install pkg, npm install -D pkg, npm run script.
      `,
      hi: `
npm (Node Package Manager) आपके project में use होने वाले packages (libraries) install और manage करता है।

package.json project की manifest file है। इसमें store होता है:
- name, version, description
- scripts (start, test, dev जैसी commands)
- dependencies: production में app चलाने के लिए ज़रूरी
- devDependencies: सिर्फ development में चाहिए (nodemon, jest)

package-lock.json install हुए exact versions को lock करती है, ताकि सबको वही install मिले।
node_modules वो folder है जहां packages install होते हैं। इसे git में commit नहीं करना चाहिए।

Version symbols: ^1.2.3 minor और patch updates allow करता है, ~1.2.3 सिर्फ patch updates।

Commands: npm init, npm install, npm install pkg, npm install -D pkg, npm run script।
      `,
    },
    examples: [
      {
        label: "package.json",
        code: `
{
  "name": "my-api",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "dependencies": { "express": "^4.19.2" },
  "devDependencies": { "nodemon": "^3.1.0" }
}
        `,
      },
    ],
  },
};
