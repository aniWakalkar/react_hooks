export const core = {
  eventEmitter: {
    title: { en: "What is EventEmitter?", hi: "EventEmitter क्या है?" },
    definition: {
      en: `
EventEmitter is a Node.js class (from the events module) that lets objects emit named events and lets other code listen for them. It is the base of many core modules (streams, http server, etc.).

Main methods:
- on(event, listener): listen for an event
- once(event, listener): listen only the first time
- emit(event, ...args): trigger the event
- off / removeListener: stop listening

Listeners run synchronously, in the order they were added.
      `,
      hi: `
EventEmitter Node.js की एक class है (events module से) जिससे objects नाम वाले events emit कर सकते हैं और दूसरा code उन्हें सुन सकता है। ये कई core modules (streams, http server, आदि) का base है।

मुख्य methods:
- on(event, listener): event सुनना
- once(event, listener): सिर्फ पहली बार सुनना
- emit(event, ...args): event trigger करना
- off / removeListener: सुनना बंद करना

Listeners synchronously चलते हैं, उसी order में जिसमें add हुए थे।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("order", (id) => console.log("Order received:", id));
emitter.once("order", () => console.log("Send confirmation email"));

emitter.emit("order", 101);
        `,
      },
    ],
  },
  streams: {
    title: { en: "What are Streams in Node.js and why are they used?", hi: "Node.js में Streams क्या हैं और इन्हें क्यों use करते हैं?" },
    definition: {
      en: `
A stream lets you process data piece by piece (in chunks), instead of loading everything into memory first.

Why use streams:
- Memory efficient: a 2 GB file can be handled with very little memory.
- Faster to start: processing begins as soon as the first chunk arrives.

Four types:
- Readable: data comes out (fs.createReadStream, HTTP request)
- Writable: data goes in (fs.createWriteStream, HTTP response)
- Duplex: both readable and writable (a TCP socket)
- Transform: a duplex that changes data on the way (zlib compression)

pipe() connects a readable stream to a writable stream and handles backpressure (slowing the source when the target is slow).
      `,
      hi: `
Stream से आप data को टुकड़ों (chunks) में process कर सकते हो, सब कुछ पहले memory में load किए बिना।

Streams क्यों use करें:
- Memory efficient: 2 GB की file बहुत कम memory में संभाली जा सकती है।
- शुरू जल्दी होता है: पहला chunk आते ही processing शुरू हो जाती है।

चार types:
- Readable: data बाहर आता है (fs.createReadStream, HTTP request)
- Writable: data अंदर जाता है (fs.createWriteStream, HTTP response)
- Duplex: readable और writable दोनों (TCP socket)
- Transform: duplex जो रास्ते में data बदलता है (zlib compression)

pipe() readable stream को writable stream से जोड़ता है और backpressure संभालता है (target धीमा हो तो source को धीमा करना)।
      `,
    },
    examples: [
      {
        label: "Copy a large file and serve it with streams",
        code: `
const fs = require("fs");

// copy without loading the whole file in memory
fs.createReadStream("big.mp4").pipe(fs.createWriteStream("copy.mp4"));

// send a file as an HTTP response
app.get("/video", (req, res) => {
  fs.createReadStream("big.mp4").pipe(res);
});
        `,
      },
    ],
  },
  envVariables: {
    title: { en: "What are environment variables and how are they used in Node.js?", hi: "Environment variables क्या हैं और Node.js में कैसे use होते हैं?" },
    definition: {
      en: `
Environment variables are values set outside the code, for things that change between environments (development, testing, production) or that must stay secret: port numbers, database URLs, API keys, JWT secrets.

In Node.js they are read from process.env.

The dotenv package loads variables from a .env file into process.env.

Rules:
- Never hardcode secrets in the code.
- Never commit the .env file to git (add it to .gitignore).
- Commit a .env.example with the variable names only.
- Environment variables are always strings.
      `,
      hi: `
Environment variables वो values हैं जो code के बाहर set होती हैं, उन चीज़ों के लिए जो environments (development, testing, production) के बीच बदलती हैं या secret रहनी चाहिए: port numbers, database URLs, API keys, JWT secrets।

Node.js में इन्हें process.env से पढ़ते हैं।

dotenv package .env file के variables को process.env में load करता है।

Rules:
- Secrets को code में कभी hardcode मत करो।
- .env file को git में कभी commit मत करो (.gitignore में डालो)।
- सिर्फ variable names वाली .env.example commit करो।
- Environment variables हमेशा strings होते हैं।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
// .env
PORT=5000
MONGO_URI=mongodb://localhost:27017/myapp
JWT_SECRET=my-secret

// index.js
require("dotenv").config();

const port = process.env.PORT || 3000;
const secret = process.env.JWT_SECRET;
        `,
      },
    ],
  },
  clusterWorker: {
    title: { en: "How do you use multiple CPU cores in Node.js? (Cluster and Worker Threads)", hi: "Node.js में कई CPU cores कैसे use करते हैं? (Cluster और Worker Threads)" },
    definition: {
      en: `
A single Node.js process uses only one CPU core for JavaScript. To use more cores:

Cluster module
- Forks multiple copies (worker processes) of your app, one per CPU core.
- They share the same port, and incoming connections are distributed among them.
- Good for scaling a web server on one machine.
- In production, PM2 does this for you (pm2 start app.js -i max).

Worker Threads
- Run JavaScript on separate threads inside one process.
- Good for CPU-heavy tasks (image processing, big calculations), so the main thread is not blocked.

Simple rule:
Cluster = scale the server across cores. Worker threads = offload heavy calculations.
      `,
      hi: `
एक Node.js process JavaScript के लिए सिर्फ एक CPU core use करता है। ज़्यादा cores use करने के लिए:

Cluster module
- आपकी app की कई copies (worker processes) fork करता है, हर CPU core के लिए एक।
- सब एक ही port share करते हैं, और आने वाले connections उनमें बंट जाते हैं।
- एक machine पर web server scale करने के लिए अच्छा।
- Production में PM2 ये आपके लिए कर देता है (pm2 start app.js -i max)।

Worker Threads
- एक ही process के अंदर अलग threads पर JavaScript चलाते हैं।
- CPU-heavy tasks (image processing, बड़ी calculations) के लिए अच्छा, ताकि main thread block न हो।

Simple rule:
Cluster = server को cores में scale करना। Worker threads = भारी calculations को अलग करना।
      `,
    },
    examples: [
      {
        label: "Cluster example",
        code: `
const cluster = require("cluster");
const os = require("os");

if (cluster.isPrimary) {
  os.cpus().forEach(() => cluster.fork());   // one worker per core
} else {
  require("./server");                        // each worker runs the server
}
        `,
      },
    ],
  },
};
