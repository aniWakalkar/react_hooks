export const basics = {
  varLetConst: {
    title: { en: "What is the difference between var, let and const?", hi: "var, let और const में क्या फर्क है?" },
    definition: {
      en: `
var
- Function-scoped (not block-scoped).
- Hoisted and initialized as undefined.
- Can be redeclared and reassigned.

let
- Block-scoped.
- Hoisted but not usable before its declaration (Temporal Dead Zone).
- Cannot be redeclared in the same scope, but can be reassigned.

const
- Block-scoped, same hoisting behaviour as let.
- Must be initialized when declared and cannot be reassigned.
- For objects and arrays, the reference is fixed, but the contents can still be changed.

Best practice: use const by default, let when you need to reassign, avoid var.
      `,
      hi: `
var
- Function-scoped (block-scoped नहीं)।
- Hoist होता है और undefined से initialize होता है।
- दोबारा declare और reassign हो सकता है।

let
- Block-scoped।
- Hoist होता है लेकिन declaration से पहले use नहीं कर सकते (Temporal Dead Zone)।
- उसी scope में दोबारा declare नहीं हो सकता, लेकिन reassign हो सकता है।

const
- Block-scoped, hoisting let जैसी ही।
- Declare करते समय ही value देनी पड़ती है और reassign नहीं हो सकता।
- Object और array में reference fixed रहता है, लेकिन अंदर की contents बदल सकती हैं।

Best practice: default में const use करो, reassign चाहिए तो let, और var से बचो।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
if (true) {
  var a = 1;
  let b = 2;
}
console.log(a); // 1  (var ignores the block)
console.log(b); // ReferenceError (let stays inside the block)

const user = { name: "Aniket" };
user.name = "Rahul";   // allowed, contents changed
user = {};             // TypeError, reassigning is not allowed
        `,
      },
    ],
  },
  dataTypes: {
    title: { en: "What are the data types in JavaScript? (Primitive vs Reference)", hi: "JavaScript में data types कौन-से हैं? (Primitive vs Reference)" },
    definition: {
      en: `
Primitive types (stored by value, immutable):
string, number, boolean, null, undefined, symbol, bigint

Reference types (stored by reference):
object, array, function (all are objects)

Difference:
- Primitives are copied by value. Changing the copy does not change the original.
- Reference types are copied by reference. Both variables point to the same object in memory, so a change through one is visible through the other.

Note: typeof null returns "object". This is a long-standing bug in JavaScript.
      `,
      hi: `
Primitive types (value से store होते हैं, immutable):
string, number, boolean, null, undefined, symbol, bigint

Reference types (reference से store होते हैं):
object, array, function (सब objects हैं)

फर्क:
- Primitives value से copy होते हैं। Copy बदलने से original नहीं बदलता।
- Reference types reference से copy होते हैं। दोनों variables memory में एक ही object की तरफ point करते हैं, इसलिए एक से किया बदलाव दूसरे से भी दिखता है।

ध्यान दो: typeof null "object" return करता है। ये JavaScript का पुराना bug है।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
let a = 10;
let b = a;
b = 20;
console.log(a); // 10  (copied by value)

const obj1 = { x: 1 };
const obj2 = obj1;
obj2.x = 99;
console.log(obj1.x); // 99  (same object)
        `,
      },
    ],
  },
  equality: {
    title: { en: "What is the difference between == and ===?", hi: "== और === में क्या फर्क है?" },
    definition: {
      en: `
== (loose equality) compares values after converting the types (type coercion).

=== (strict equality) compares both the value and the type, with no conversion.

Best practice: always use === to avoid surprising results.
      `,
      hi: `
== (loose equality) types को convert करने (type coercion) के बाद values compare करता है।

=== (strict equality) value और type दोनों compare करता है, कोई conversion नहीं करता।

Best practice: अनपेक्षित results से बचने के लिए हमेशा === use करो।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
5 == "5"      // true   (string converted to number)
5 === "5"     // false  (different types)
0 == false    // true
0 === false   // false
null == undefined   // true
null === undefined  // false
        `,
      },
    ],
  },
  hoisting: {
    title: { en: "What is Hoisting?", hi: "Hoisting क्या है?" },
    definition: {
      en: `
Hoisting means JavaScript moves declarations to the top of their scope before running the code.

- var: hoisted and set to undefined.
- Function declarations: fully hoisted, so you can call them before they are written.
- let and const: hoisted but kept in the Temporal Dead Zone, so using them before the declaration throws a ReferenceError.
- Function expressions and arrow functions follow the rule of the variable they are stored in.

Only declarations are hoisted, not the assigned values.
      `,
      hi: `
Hoisting का मतलब है कि code चलने से पहले JavaScript declarations को उनके scope के top पर ले जाता है।

- var: hoist होता है और undefined set होता है।
- Function declarations: पूरे hoist होते हैं, इसलिए लिखने से पहले भी call कर सकते हो।
- let और const: hoist होते हैं लेकिन Temporal Dead Zone में रहते हैं, इसलिए declaration से पहले use करने पर ReferenceError आता है।
- Function expressions और arrow functions उस variable का rule follow करते हैं जिसमें वो store हैं।

सिर्फ declarations hoist होते हैं, assign की गई values नहीं।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
console.log(x);   // undefined (var is hoisted)
var x = 5;

sayHi();          // works, function declaration is fully hoisted
function sayHi() { console.log("Hi"); }

console.log(y);   // ReferenceError (Temporal Dead Zone)
let y = 5;
        `,
      },
    ],
  },
  truthyFalsy: {
    title: { en: "What are truthy and falsy values? What is the difference between || and ???", hi: "Truthy और falsy values क्या हैं? || और ?? में क्या फर्क है?" },
    definition: {
      en: `
Falsy values (treated as false in a condition):
false, 0, "" (empty string), null, undefined, NaN, 0n

Everything else is truthy, including "0", "false", [] and {}.

|| returns the right side if the left side is any falsy value.
?? (nullish coalescing) returns the right side only if the left side is null or undefined.

So use ?? when 0 or an empty string is a valid value.
      `,
      hi: `
Falsy values (condition में false माने जाते हैं):
false, 0, "" (खाली string), null, undefined, NaN, 0n

बाकी सब truthy हैं, जैसे "0", "false", [] और {}।

|| तब right side देता है जब left side कोई भी falsy value हो।
?? (nullish coalescing) तब right side देता है जब left side सिर्फ null या undefined हो।

इसलिए जहां 0 या खाली string valid value है, वहां ?? use करो।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
const count = 0;
console.log(count || 10);   // 10  (0 is falsy)
console.log(count ?? 10);   // 0   (0 is not null/undefined)

if ([]) console.log("empty array is truthy");
        `,
      },
    ],
  },
};
