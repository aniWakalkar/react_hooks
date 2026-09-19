import { flow, st } from "../visualHelpers";

export const asyncAndMore = {
  eventLoop: {
    visual: flow([
      st("📚", ["Call stack", "Call stack"], ["Synchronous code runs here, one line at a time.", "Synchronous code यहां एक-एक line करके चलता है।"]),
      st("🌐", ["Web APIs", "Web APIs"], ["setTimeout, fetch and DOM events are handled outside the stack, by the browser.", "setTimeout, fetch और DOM events stack के बाहर, browser द्वारा handle होते हैं।"]),
      st("⚡", ["Microtask queue", "Microtask queue"], ["Promise callbacks (then, await) wait here. They run first.", "Promise callbacks (then, await) यहां इंतज़ार करते हैं। ये पहले चलते हैं।"], "ok"),
      st("⏳", ["Task queue", "Task queue"], ["Callbacks like setTimeout wait here.", "setTimeout जैसे callbacks यहां इंतज़ार करते हैं।"]),
      st("🔁", ["Event loop", "Event loop"], ["When the stack is empty, it moves microtasks first, then one task, onto the stack.", "Stack खाली होने पर ये पहले microtasks, फिर एक task को stack पर भेजता है।"]),
    ]),
    title: { en: "What is the Event Loop?", hi: "Event Loop क्या है?" },
    definition: {
      en: `
JavaScript is single-threaded: it has one call stack and runs one thing at a time. The event loop is what lets it handle asynchronous work without blocking.

How it works:
1. Synchronous code runs on the call stack.
2. Async work (setTimeout, fetch, events) is handed to the browser (Web APIs).
3. When it finishes, its callback goes into a queue.
4. The event loop checks: is the call stack empty? If yes, it pushes the next callback onto the stack.

Two queues:
- Microtask queue: Promise .then / async-await, queueMicrotask. Higher priority.
- Task (macrotask) queue: setTimeout, setInterval, events.

All microtasks run before the next task.
      `,
      hi: `
JavaScript single-threaded है: इसमें एक call stack है और ये एक समय में एक ही काम करता है। Event loop की वजह से ये asynchronous काम बिना block हुए संभाल पाता है।

ये कैसे काम करता है:
1. Synchronous code call stack पर चलता है।
2. Async काम (setTimeout, fetch, events) browser (Web APIs) को दे दिया जाता है।
3. पूरा होने पर उसका callback एक queue में जाता है।
4. Event loop check करता है: call stack खाली है? हां तो अगला callback stack पर भेज देता है।

दो queues:
- Microtask queue: Promise .then / async-await, queueMicrotask। ज़्यादा priority।
- Task (macrotask) queue: setTimeout, setInterval, events।

अगले task से पहले सारे microtasks चलते हैं।
      `,
    },
    examples: [
      {
        label: "Order of output (a popular interview question)",
        code: `
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");

// Output: 1, 4, 3, 2
// sync first, then microtask (promise), then task (setTimeout)
        `,
      },
    ],
  },
  promises: {
    title: { en: "What is a Promise? What is callback hell?", hi: "Promise क्या है? Callback hell क्या है?" },
    definition: {
      en: `
A Promise is an object that represents the result of an asynchronous operation that will finish in the future.

States:
- pending: still running
- fulfilled: finished successfully (resolve)
- rejected: failed (reject)

Methods: .then() for success, .catch() for errors, .finally() runs either way.

Useful helpers:
- Promise.all: waits for all, fails if any fails.
- Promise.allSettled: waits for all, gives every result.
- Promise.race: the first one to finish wins.
- Promise.any: the first one to succeed wins.

Callback hell: nesting many callbacks inside each other, making code hard to read and maintain. Promises (and async/await) flatten this.
      `,
      hi: `
Promise एक object है जो ऐसे asynchronous operation के result को represent करता है जो future में पूरा होगा।

States:
- pending: अभी चल रहा है
- fulfilled: सफलतापूर्वक पूरा हुआ (resolve)
- rejected: fail हुआ (reject)

Methods: success के लिए .then(), errors के लिए .catch(), और .finally() दोनों हालत में चलता है।

काम के helpers:
- Promise.all: सबका इंतज़ार करता है, कोई एक fail हो तो fail।
- Promise.allSettled: सबका इंतज़ार करता है, हर एक का result देता है।
- Promise.race: जो सबसे पहले खत्म हो वही जीतता है।
- Promise.any: जो सबसे पहले सफल हो वही जीतता है।

Callback hell: कई callbacks को एक-दूसरे के अंदर nest करना, जिससे code पढ़ना और maintain करना मुश्किल हो जाता है। Promises (और async/await) इसे flat बना देते हैं।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
fetch("/api/users/10")
  .then((res) => res.json())
  .then((user) => console.log(user))
  .catch((err) => console.error(err))
  .finally(() => console.log("done"));

Promise.all([fetch("/api/a"), fetch("/api/b")]).then(([a, b]) => {
  // both finished
});
        `,
      },
    ],
  },
  asyncAwait: {
    title: { en: "What is async/await?", hi: "async/await क्या है?" },
    definition: {
      en: `
async/await is a cleaner way to write Promise-based code, so it reads like normal synchronous code.

- An async function always returns a Promise.
- await pauses that function until the Promise settles, without blocking the rest of the program.
- Use try/catch to handle errors.
- For independent tasks, run them together with Promise.all instead of awaiting one after another.
      `,
      hi: `
async/await, Promise वाले code को ज़्यादा साफ़ तरीके से लिखने का तरीका है, जो normal synchronous code जैसा पढ़ा जाता है।

- async function हमेशा Promise return करता है।
- await उस function को तब तक रोकता है जब तक Promise पूरा न हो, बाकी program को block किए बिना।
- Errors के लिए try/catch use करो।
- Independent tasks को एक-एक करके await करने की जगह Promise.all से साथ में चलाओ।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
async function getUser(id) {
  try {
    const res = await fetch("/api/users/" + id);
    if (!res.ok) throw new Error("Request failed");
    return await res.json();
  } catch (err) {
    console.error(err.message);
  }
}

// run in parallel
const [users, orders] = await Promise.all([getUsers(), getOrders()]);
        `,
      },
    ],
  },
  prototype: {
    title: { en: "What is the Prototype and Prototypal Inheritance?", hi: "Prototype और Prototypal Inheritance क्या है?" },
    definition: {
      en: `
Every JavaScript object has a hidden link to another object called its prototype. When you access a property, JavaScript looks at the object first, then its prototype, then the prototype's prototype, and so on. This is the prototype chain. It ends at null.

Prototypal inheritance means objects can inherit properties and methods from other objects through this chain.

The class keyword is just cleaner syntax on top of prototypes.

Methods put on the prototype are shared by all instances, which saves memory.
      `,
      hi: `
हर JavaScript object का एक hidden link दूसरे object से होता है, जिसे उसका prototype कहते हैं। जब आप कोई property access करते हो, JavaScript पहले object में देखता है, फिर उसके prototype में, फिर prototype के prototype में, और आगे भी। इसे prototype chain कहते हैं। ये null पर खत्म होती है।

Prototypal inheritance का मतलब है कि objects इस chain के ज़रिए दूसरे objects से properties और methods inherit कर सकते हैं।

class keyword बस prototypes के ऊपर का साफ़ syntax है।

Prototype पर रखे methods सभी instances में shared होते हैं, जिससे memory बचती है।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
function Person(name) { this.name = name; }
Person.prototype.greet = function () { return "Hi " + this.name; };

const a = new Person("Aniket");
console.log(a.greet());                          // found on the prototype
console.log(a.__proto__ === Person.prototype);   // true
console.log(a.hasOwnProperty("greet"));          // false
        `,
      },
    ],
  },
  shallowDeepCopy: {
    title: { en: "What is the difference between shallow copy and deep copy?", hi: "Shallow copy और deep copy में क्या फर्क है?" },
    definition: {
      en: `
Shallow copy copies only the first level. Nested objects and arrays are still shared by reference with the original.
Ways: spread { ...obj } / [...arr], Object.assign, arr.slice().

Deep copy copies everything, including nested levels, so the copy is fully independent.
Ways: structuredClone(obj) (modern and recommended), JSON.parse(JSON.stringify(obj)) (loses functions, undefined and Dates), or a library like lodash cloneDeep.
      `,
      hi: `
Shallow copy सिर्फ पहला level copy करती है। Nested objects और arrays अब भी original के साथ reference से shared रहते हैं।
तरीके: spread { ...obj } / [...arr], Object.assign, arr.slice()।

Deep copy nested levels समेत सब कुछ copy करती है, इसलिए copy पूरी तरह independent होती है।
तरीके: structuredClone(obj) (modern और recommended), JSON.parse(JSON.stringify(obj)) (functions, undefined और Dates खो देता है), या lodash cloneDeep जैसी library।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
const original = { name: "Aniket", address: { city: "Pune" } };

const shallow = { ...original };
shallow.address.city = "Mumbai";
console.log(original.address.city);  // "Mumbai"  (nested object is shared)

const deep = structuredClone(original);
deep.address.city = "Delhi";
console.log(original.address.city);  // still "Mumbai"
        `,
      },
    ],
  },
  destructuringSpread: {
    title: { en: "What are destructuring, spread and rest?", hi: "Destructuring, spread और rest क्या हैं?" },
    definition: {
      en: `
Destructuring: unpack values from arrays or properties from objects into variables.

Spread (...): expands an array or object into individual items. Used to copy or merge.

Rest (...): collects the remaining items into an array/object. Used in function parameters and destructuring.

Same symbol (...), different job:
Spread expands, rest collects.
      `,
      hi: `
Destructuring: arrays से values या objects से properties को variables में निकालना।

Spread (...): array या object को अलग-अलग items में फैला देता है। Copy या merge करने के लिए।

Rest (...): बचे हुए items को एक array/object में इकट्ठा करता है। Function parameters और destructuring में use होता है।

Symbol एक (...), काम अलग:
Spread फैलाता है, rest इकट्ठा करता है।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
const [first, second] = [10, 20, 30];          // 10, 20
const { name, city = "Pune" } = { name: "Aniket" };

const merged = [...[1, 2], ...[3, 4]];         // [1, 2, 3, 4]
const updated = { ...user, city: "Mumbai" };   // copy with a change

function sum(...nums) {                         // rest: collects arguments
  return nums.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3); // 6
        `,
      },
    ],
  },
};
