export const functions = {
  closure: {
    title: { en: "What is a Closure?", hi: "Closure क्या है?" },
    definition: {
      en: `
A closure is a function that remembers the variables of the place where it was created (its outer scope), even after that outer function has finished running.

Uses:
- Data privacy (private variables)
- Counters and function factories
- Callbacks and event handlers
- Memoization

Interview version:
A closure is a function bundled with its lexical environment, so it can still access the outer variables later.
      `,
      hi: `
Closure वो function है जो उस जगह के variables को याद रखता है जहां वो बना था (उसका outer scope), भले ही वो outer function चलकर खत्म हो चुका हो।

Uses:
- Data privacy (private variables)
- Counters और function factories
- Callbacks और event handlers
- Memoization

Interview version:
Closure एक function है जो अपने lexical environment के साथ bundle होता है, इसलिए वो बाद में भी outer variables access कर सकता है।
      `,
    },
    examples: [
      {
        label: "Counter with a private variable",
        code: `
function makeCounter() {
  let count = 0;            // private, cannot be touched from outside
  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2  (still remembers count)
        `,
      },
    ],
  },
  thisKeyword: {
    title: { en: "How does the this keyword work?", hi: "this keyword कैसे काम करता है?" },
    definition: {
      en: `
The value of this depends on how a function is called, not where it is written.

- Regular function call: this is the global object (undefined in strict mode).
- Method call obj.method(): this is obj.
- Constructor call new Fn(): this is the new object.
- call / apply / bind: this is what you pass.
- Arrow function: has no this of its own. It uses the this of the surrounding scope (lexical this).

A common bug: passing a method as a callback loses its this.
      `,
      hi: `
this की value इस पर depend करती है कि function कैसे call हुआ, इस पर नहीं कि कहां लिखा है।

- Regular function call: this global object होता है (strict mode में undefined)।
- Method call obj.method(): this obj होता है।
- Constructor call new Fn(): this नया object होता है।
- call / apply / bind: this वो होता है जो आप पास करते हो।
- Arrow function: इसका अपना this नहीं होता। ये आसपास के scope का this use करता है (lexical this)।

Common bug: method को callback के रूप में पास करने पर उसका this खो जाता है।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
const user = {
  name: "Aniket",
  regular() { return this.name; },
  arrow: () => this.name,
};

console.log(user.regular()); // "Aniket"  (this = user)
console.log(user.arrow());   // undefined (arrow has no own this)

const fn = user.regular;
console.log(fn());           // undefined (this is lost)
        `,
      },
    ],
  },
  arrowVsRegular: {
    title: { en: "What is the difference between an arrow function and a regular function?", hi: "Arrow function और regular function में क्या फर्क है?" },
    definition: {
      en: `
Arrow function:
- Shorter syntax, with an implicit return for one expression.
- No own this (uses the surrounding this).
- No own arguments object.
- Cannot be used as a constructor (no new).

Regular function:
- Has its own this, decided by how it is called.
- Has the arguments object.
- Can be used as a constructor.
- Function declarations are hoisted.

Use arrow functions for callbacks and small functions. Use regular functions for object methods and constructors.
      `,
      hi: `
Arrow function:
- छोटा syntax, एक expression के लिए implicit return।
- अपना this नहीं (आसपास का this use करता है)।
- अपना arguments object नहीं।
- Constructor की तरह use नहीं हो सकता (new नहीं)।

Regular function:
- अपना this होता है, जो call करने के तरीके से तय होता है।
- arguments object होता है।
- Constructor की तरह use हो सकता है।
- Function declarations hoist होते हैं।

Callbacks और छोटे functions के लिए arrow functions use करो। Object methods और constructors के लिए regular functions।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
const add = (a, b) => a + b;       // implicit return

function Person(name) { this.name = name; }
const p = new Person("Aniket");    // works

const Person2 = (name) => {};
new Person2("x");                  // TypeError, arrow is not a constructor
        `,
      },
    ],
  },
  callApplyBind: {
    title: { en: "What is the difference between call, apply and bind?", hi: "call, apply और bind में क्या फर्क है?" },
    definition: {
      en: `
All three let you set the value of this for a function.

- call(thisArg, a, b): calls the function immediately, arguments passed one by one.
- apply(thisArg, [a, b]): calls the function immediately, arguments passed as an array.
- bind(thisArg, a, b): does not call it. It returns a new function with this fixed, to call later.

Memory trick:
Call = Comma separated. Apply = Array. Bind = returns a new function.
      `,
      hi: `
तीनों से function का this set किया जा सकता है।

- call(thisArg, a, b): function को तुरंत call करता है, arguments एक-एक करके।
- apply(thisArg, [a, b]): function को तुरंत call करता है, arguments array में।
- bind(thisArg, a, b): call नहीं करता। this fix किया हुआ नया function return करता है, जिसे बाद में call करते हैं।

याद रखने की trick:
Call = Comma से अलग। Apply = Array। Bind = नया function return करता है।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
function intro(city, country) {
  return this.name + " from " + city + ", " + country;
}
const user = { name: "Aniket" };

intro.call(user, "Pune", "India");      // "Aniket from Pune, India"
intro.apply(user, ["Pune", "India"]);   // same result

const later = intro.bind(user, "Pune");
later("India");                          // called later
        `,
      },
    ],
  },
  higherOrder: {
    title: { en: "What are higher-order functions? Explain map, filter and reduce.", hi: "Higher-order functions क्या हैं? map, filter और reduce समझाओ।" },
    definition: {
      en: `
A higher-order function is a function that takes another function as an argument, or returns a function.

- map: transforms every item and returns a new array of the same length.
- filter: keeps only the items that pass a condition and returns a new array.
- reduce: combines all items into a single value (sum, object, etc.).
- forEach: runs a function for each item and returns nothing.

map, filter and reduce do not change the original array.
      `,
      hi: `
Higher-order function वो function है जो दूसरे function को argument में लेता है, या function return करता है।

- map: हर item को transform करके उतनी ही length का नया array देता है।
- filter: सिर्फ वही items रखता है जो condition पास करें और नया array देता है।
- reduce: सारे items को एक single value में जोड़ता है (sum, object, आदि)।
- forEach: हर item के लिए function चलाता है और कुछ return नहीं करता।

map, filter और reduce original array को नहीं बदलते।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
const nums = [1, 2, 3, 4, 5];

nums.map((n) => n * 2);              // [2, 4, 6, 8, 10]
nums.filter((n) => n % 2 === 0);     // [2, 4]
nums.reduce((sum, n) => sum + n, 0); // 15
        `,
      },
    ],
  },
};
