export const pythonInterview = {
  whatIsPython: {
    title: { en: "What is Python? Why is it popular?", hi: "पायथन क्या है? लोकप्रिय क्यों है?" },
    definition: {
      en: `
In simple words: Python is a high-level, interpreted language with simple syntax.

Why popular:
- Easy to read (beginners and teams)
- Huge libraries (web, data, AI)
- Fast to write, even if it is not the fastest to run
- Strong community and jobs
      `,
      hi: `
सरल भाषा: पायथन उच्च-स्तरीय, interpreted भाषा है, सिंटैक्स सरल है।

लोकप्रिय क्यों:
- पढ़ना आसान (शुरुआती और टीम)
- बड़ी लाइब्रेरी (वेब, डेटा, एआई)
- लिखना तेज़, भले चलना सबसे तेज़ न हो
- मज़बूत कम्युनिटी और नौकरियाँ
      `,
    },
    words: [
      { term: "High-level", en: "You think in words and data, not CPU registers.", hi: "शब्दों और डेटा में सोचो, CPU रजिस्टर में नहीं।" },
      { term: "Syntax", en: "The spelling/rules of the language.", hi: "भाषा के लिखने के नियम।" },
    ],
    examples: [
      {
        label: "✅ Simple Python",
        code: `
print("hello")
x = 2 + 3
print(x)
        `,
      },
    ],
  },

  mutableImmutable: {
    title: { en: "Mutable vs immutable", hi: "म्यूटेबल बनाम इम्यूटेबल" },
    definition: {
      en: `
In simple words:

Immutable: cannot change in place. int, float, str, tuple, bool, None.
If you “change” a string, Python makes a new string.

Mutable: can change in place. list, dict, set.

This matters when you pass a list into a function: the function can change the original list.
      `,
      hi: `
सरल भाषा:

इम्यूटेबल: जगह पर नहीं बदलते। int, float, str, tuple, bool, None।
स्ट्रिंग “बदलोगे” तो पायथन नई स्ट्रिंग बनाता है।

म्यूटेबल: जगह पर बदल सकते हो। list, dict, set।

फंक्शन में list दोगे तो वह मूल list बदल सकता है।
      `,
    },
    words: [
      { term: "In place", en: "Edit the same object in memory, no new object.", hi: "मेमोरी में वही ऑब्जेक्ट एडिट, नया नहीं।" },
    ],
    examples: [
      {
        label: "✅ Mutable list vs immutable string",
        code: `
a = [1, 2]
a.append(3)      # same list, now [1, 2, 3]

s = "hi"
s = s + "!"      # new string; old "hi" is not edited in place

def add_item(box):
    box.append("x")

nums = []
add_item(nums)
print(nums)      # ["x"] — original list changed
        `,
      },
    ],
  },

  isVsEqual: {
    title: { en: "== vs is", hi: "== बनाम is" },
    definition: {
      en: `
In simple words:

== asks: are the values equal? [1,2] == [1,2] is True.

is asks: is it the exact same object in memory? Two lists with the same numbers can be == but not is.

Use == for numbers and text. Use is for None: if x is None.
      `,
      hi: `
सरल भाषा:

== पूछता है: values बराबर हैं? [1,2] == [1,2] True है।

is पूछता है: मेमोरी में वही ऑब्जेक्ट है? दो list की संख्याएँ वही हों तो == हो सकता है, is नहीं।

संख्या और टेक्स्ट के लिए ==। None के लिए is: if x is None।
      `,
    },
    words: [
      { term: "Identity", en: "Same object (is).", hi: "वही ऑब्जेक्ट (is)।" },
      { term: "Equality", en: "Same value (==).", hi: "वही value (==)।" },
    ],
    examples: [
      {
        label: "✅ == vs is",
        code: `
print([1, 2] == [1, 2])   # True  (same values)
print([1, 2] is [1, 2])   # False (two lists in memory)

x = None
print(x is None)          # True  — preferred
print(x == None)          # works, but "is" is the style
        `,
      },
    ],
  },

  argsKwargs: {
    title: { en: "*args and **kwargs", hi: "*args और **kwargs" },
    definition: {
      en: `
In simple words:

*args collects extra positional arguments into a tuple.
**kwargs collects extra named arguments into a dict.

Useful when you wrap another function and want to pass everything through.
      `,
      hi: `
सरल भाषा:

*args अतिरिक्त positional arguments को tuple में इकट्ठा करता है।
**kwargs अतिरिक्त नाम वाले arguments को dict में इकट्ठा करता है।

जब दूसरे फंक्शन को सब कुछ आगे भेजना हो।
      `,
    },
    words: [
      { term: "Positional", en: "Passed by order: f(1, 2).", hi: "क्रम से: f(1, 2)।" },
      { term: "Keyword argument", en: "Passed by name: f(x=1).", hi: "नाम से: f(x=1)।" },
    ],
    examples: [
      {
        label: "✅ *args **kwargs",
        code: `
def show(*args, **kwargs):
    print("args", args)
    print("kwargs", kwargs)

show(1, 2, name="Ana", age=21)
# args (1, 2)
# kwargs {"name": "Ana", "age": 21}
        `,
      },
    ],
  },

  listComp: {
    title: { en: "List comprehension", hi: "लिस्ट कॉम्प्रिहेंशन" },
    definition: {
      en: `
In simple words: a short way to build a list from another list.

squares = [n * n for n in nums if n > 0]

Same idea exists for dict and set. Keep them readable. If it is too long, use a normal for loop.
      `,
      hi: `
सरल भाषा: दूसरी list से नई list बनाने का छोटा तरीका।

squares = [n * n for n in nums if n > 0]

dict और set के लिए भी। पढ़ने लायक रखो। बहुत लंबी हो तो साधारण for loop।
      `,
    },
    words: [
      { term: "Comprehension", en: "A compact loop that builds a collection.", hi: "छोटा लूप जो कलेक्शन बनाए।" },
    ],
    examples: [
      {
        label: "✅ List / dict / set comprehension (eager)",
        code: `
nums = [1, 2, 3, -1]
squares = [n * n for n in nums if n > 0]     # [1, 4, 9]
names = {n: n.upper() for n in ["a", "b"]}  # dict
uniq = {n % 2 for n in nums}                # set
        `,
      },
    ],
  },

  generators: {
    title: { en: "Iterator vs generator vs lazy", hi: "इटरेटर बनाम जनरेटर बनाम लेज़ी" },
    definition: {
      en: `
In simple words:

Iterator — object with next(). for-loops use this.
Lazy — do not compute the next value until someone asks (next / for).
Generator — a lazy iterator you write with yield or (x for x in ...).

A list comprehension [ ] is eager (full list now).
A generator expression ( ) is lazy.

Every generator is an iterator. A custom class with __next__ is an iterator but not a generator.
      `,
      hi: `
सरल भाषा:

इटरेटर — next() वाला ऑब्जेक्ट। for-loop इसे चलाता है।
लेज़ी — अगली value तब तक न निकालो जब कोई माँगे (next / for)।
जनरेटर — लेज़ी इटरेटर जिसे yield या (x for x in ...) से लिखते हो।

लिस्ट कॉम्प्रिहेंशन [ ] एगर है (अभी पूरी list)।
जनरेटर एक्सप्रेशन ( ) लेज़ी है।

हर जनरेटर इटरेटर है। __next__ वाली कस्टम क्लास इटरेटर है, जनरेटर नहीं।
      `,
    },
    words: [
      { term: "yield", en: "Return one value and pause the function.", hi: "एक value दो और फंक्शन रोक दो।" },
      { term: "Lazy", en: "Compute the next item only when asked.", hi: "अगली चीज़ तभी निकालो जब माँगी जाए।" },
      { term: "Eager", en: "Build everything immediately.", hi: "सब कुछ तुरंत बनाओ।" },
    ],
    examples: [
      {
        label: "✅ Eager vs lazy",
        code: `
nums = [1, 2, 3]
print([n * n for n in nums])     # [1, 4, 9] eager list
g = (n * n for n in nums)        # lazy generator
print(next(g), next(g), next(g)) # 1 4 9
        `,
      },
      {
        label: "✅ yield generator",
        code: `
def ones():
    yield 1
    yield 1

for x in ones():
    print(x)
        `,
      },
    ],
  },

  decorators: {
    title: { en: "What is a decorator?", hi: "डेकोरेटर क्या है?" },
    definition: {
      en: `
In simple words: a decorator is a wrapper around a function. You write @name above def.

It can add logging, timing, login checks, without copying that code into every function.

Under the hood: greet = decorator(greet).
      `,
      hi: `
सरल भाषा: डेकोरेटर फंक्शन के चारों ओर रैपर है। def के ऊपर @name लिखते हो।

लॉग, समय, लॉगिन जाँच जोड़ सकता है, बिना हर फंक्शन में कॉपी किए।

अंदर: greet = decorator(greet)।
      `,
    },
    words: [
      { term: "@", en: "Syntax sugar for wrapping a function.", hi: "फंक्शन रैप करने की छोटी लिखावट।" },
    ],
    examples: [
      {
        label: "✅ Function decorator",
        code: `
def bold(fn):
    def wrapper():
        return "<b>" + fn() + "</b>"
    return wrapper

@bold
def title():
    return "Docs"

print(title())  # <b>Docs</b>
        `,
      },
    ],
  },

  gil: {
    title: { en: "What is the GIL?", hi: "GIL क्या है?" },
    definition: {
      en: `
In simple words: GIL (Global Interpreter Lock) means one thread at a time runs Python bytecode in CPython.

So CPU-heavy threads do not speed up on many cores. Use multiprocessing, or C libraries (NumPy), or async for waiting on the network.

I/O (download, disk) can still overlap because threads release the GIL while waiting.
      `,
      hi: `
सरल भाषा: GIL (ग्लोबल इंटरप्रेटर लॉक) मतलब CPython में एक समय एक थ्रेड पायथन bytecode चलाती है।

इसलिए CPU-भारी थ्रेड कई कोर पर तेज़ नहीं होते। multiprocessing, या C लाइब्रेरी (NumPy), या नेटवर्क इंतज़ार के लिए async।

I/O (डाउनलोड, डिस्क) फिर भी ओवरलैप हो सकता है, क्योंकि इंतज़ार में GIL छूटती है।
      `,
    },
    words: [
      { term: "Thread", en: "A worker inside one process.", hi: "एक प्रोसेस के अंदर मज़दूर।" },
      { term: "CPython", en: "The normal Python you download from python.org.", hi: "python.org से मिलने वाला सामान्य पायथन।" },
      { term: "Bytecode", en: "The middle form Python runs, not your .py text.", hi: "पायथन जो बीच का रूप चलाता है, .py टेक्स्ट नहीं।" },
    ],
    examples: [
      {
        label: "✅ Threads still serialize Python bytecode",
        code: `
# Two threads incrementing without a lock can lose updates (race).
# CPU loops in pure Python rarely get 2x speed from threads (GIL).
# Use multiprocessing or NumPy for CPU; threads for I/O.
        `,
      },
    ],
  },

  withStatement: {
    title: { en: "Why use `with`?", hi: "`with` क्यों इस्तेमाल करें?" },
    definition: {
      en: `
In simple words: with opens something and always closes it, even if an error happens.

with open("a.txt") as f:
    data = f.read()

The file closes after the block. Same idea for database connections and locks.
      `,
      hi: `
सरल भाषा: with कुछ खोलता है और हमेशा बंद करता है, एरर हो तो भी।

with open("a.txt") as f:
    data = f.read()

ब्लॉक के बाद फाइल बंद। डेटाबेस कनेक्शन और लॉक के लिए भी यही बात।
      `,
    },
    words: [
      { term: "Context manager", en: "An object with enter/exit, used by with.", hi: "enter/exit वाला ऑब्जेक्ट, with जिसे चलाता है।" },
    ],
    examples: [
      {
        label: "✅ with open",
        code: `
with open("a.txt", "w", encoding="utf-8") as f:
    f.write("hello")
# file is closed here even if write failed
        `,
      },
    ],
  },

  passBy: {
    title: { en: "How are arguments passed?", hi: "आर्ग्युमेंट कैसे जाते हैं?" },
    definition: {
      en: `
In simple words: Python passes object references (names pointing to objects).

If the object is mutable and you change it in place, the caller sees the change.
If you assign a new object to the name inside the function, the caller’s name is unchanged.

It is not “always copy” and not “always C-style pass by reference”.
      `,
      hi: `
सरल भाषा: पायथन ऑब्जेक्ट रेफरेंस भेजता है (नाम जो ऑब्जेक्ट की ओर इशारा करें)।

म्यूटेबल हो और जगह पर बदलो तो बुलाने वाला देखेगा।
फंक्शन के अंदर नाम को नया ऑब्जेक्ट दो तो बाहर का नाम नहीं बदलता।

न हमेशा कॉपी, न हमेशा C जैसा pass by reference।
      `,
    },
    words: [
      { term: "Reference", en: "An arrow to an object, not a second full copy.", hi: "ऑब्जेक्ट की ओर तीर, पूरी दूसरी कॉपी नहीं।" },
    ],
    examples: [
      {
        label: "✅ In-place vs rebind",
        code: `
def add(box):
    box.append(1)   # caller sees this

def rebind(box):
    box = [9]       # only local name; caller unchanged

a = []
add(a)
print(a)            # [1]
rebind(a)
print(a)            # [1]
        `,
      },
    ],
  },

  listTupleDictSet: {
    title: { en: "List vs tuple vs dict vs set", hi: "लिस्ट बनाम टपल बनाम डिक्ट बनाम सेट" },
    definition: {
      en: `
In simple words (interview short):

List — ordered, mutable, index. Use when items can grow or change.
Tuple — ordered, immutable. Use for fixed records; can be a dict key.
Dict — key to value, unique keys, fast lookup. Use for labeled data.
Set — unique, unordered, fast “in”. Use to drop duplicates and test membership.

Do not use a list when you only need “is this id already seen?” — use a set.
Do not use a dict when you only need a row of numbers in order — use a list.
      `,
      hi: `
सरल भाषा (इंटरव्यू छोटा):

लिस्ट — क्रम, म्यूटेबल, इंडेक्स। आइटम बढ़ें/बदलें तब।
टपल — क्रम, इम्यूटेबल। तय रिकॉर्ड; dict की key बन सकती है।
डिक्ट — कुंजी से value, अनोखी कुंजी, तेज़ खोज। लेबल वाला डेटा।
सेट — अनोखा, बिना क्रम, तेज़ “in”। डुप्लिकेट हटाना, सदस्यता जाँचना।

सिर्फ “id पहले देखी?” के लिए list मत लो — set लो।
सिर्फ क्रम वाली संख्याओं के लिए dict मत लो — list लो।
      `,
    },
    words: [
      { term: "Membership", en: "The test: x in collection.", hi: "जाँच: x in कलेक्शन।" },
    ],
    examples: [
      {
        label: "✅ Pick the type",
        code: `
todo = ["milk", "eggs"]          # list
point = (10, 20)                 # tuple
user = {"id": 1, "name": "Ana"}  # dict
seen = {1, 2, 2}                 # set → {1, 2}
print(2 in seen)
        `,
      },
    ],
  },

  threadVsProcessVsAsync: {
    title: { en: "Thread vs process vs async", hi: "थ्रेड बनाम प्रोसेस बनाम async" },
    definition: {
      en: `
In simple words:

Threading / multi-threading — many workers, one process, shared memory. Best for I/O wait. GIL limits CPU.
Multi-processing — many processes, many GILs. Best for CPU. More memory, data copied.
Async — one thread, event loop, await. Best for huge numbers of network waits. CPU work still blocks unless you offload.

Do not mix them blindly. One style per job is easier to debug.
      `,
      hi: `
सरल भाषा:

थ्रेडिंग / मल्टी-थ्रेडिंग — कई मज़दूर, एक प्रोसेस, साझा मेमोरी। I/O इंतज़ार के लिए। GIL CPU रोकती है।
मल्टी-प्रोसेसिंग — कई प्रोसेस, कई GIL। CPU के लिए। ज़्यादा मेमोरी, डेटा कॉपी।
Async — एक थ्रेड, इवेंट लूप, await। बहुत सारे नेटवर्क इंतज़ार। CPU काम लूप रोकता है जब तक बाहर न भेजो।

अंधा मिश्रण मत करो। एक काम एक स्टाइल, डिबग आसान।
      `,
    },
    words: [
      { term: "I/O", en: "Input/output: network, disk, waiting — not math.", hi: "इनपुट/आउटपुट: नेटवर्क, डिस्क, इंतज़ार — गणित नहीं।" },
      { term: "CPU-bound", en: "Work that burns the processor (loops, image encode).", hi: "प्रोसेसर खाने वाला काम (लूप, इमेज एनकोड)।" },
    ],
    examples: [
      {
        label: "✅ Tiny taste of each",
        code: `
import threading, asyncio
from multiprocessing import Process

def io_job():
    print("thread")

threading.Thread(target=io_job).start()

async def api():
    await asyncio.sleep(0.01)

# CPU: Process(target=heavy_fn).start()
        `,
      },
    ],
  },

  pydanticInterview: {
    title: { en: "What is Pydantic in FastAPI?", hi: "फास्टएपीआई में पिडैंटिक क्या है?" },
    definition: {
      en: `
In simple words: Pydantic is FastAPI’s validation layer.

It parses JSON into Python types and checks those types (and extra Field rules). Invalid body → 422.

You write class User(BaseModel): age: int. FastAPI injects a valid User into the path function.
      `,
      hi: `
सरल भाषा: पिडैंटिक फास्टएपीआई की वैलिडेशन परत है।

JSON को पायथन टाइप में पार्स करता है और टाइप (और Field नियम) जाँचता है। गलत बॉडी → 422।

class User(BaseModel): age: int लिखो। फास्टएपीआई वैध User फंक्शन में देता है।
      `,
    },
    words: [
      { term: "Parse", en: "Convert input into typed objects.", hi: "इनपुट को टाइप वाले ऑब्जेक्ट बनाना।" },
    ],
    examples: [
      {
        label: "✅ Parse + validate",
        code: `
from pydantic import BaseModel, ValidationError

class User(BaseModel):
    age: int

print(User(age="21"))   # parsing: "21" → 21
try:
    User(age="hello")
except ValidationError as e:
    print(e)
        `,
      },
    ],
  },

  decoratorHowInterview: {
    title: { en: "How do decorators work internally?", hi: "डेकोरेटर अंदर से कैसे चलते हैं?" },
    definition: {
      en: `
In simple words: @f above def g is g = f(g).

f returns a wrapper. Calling g runs wrapper, which calls the original function.

That is why @app.get("/x") can register a route: the decorator runs at import time and stores your function on the app.
      `,
      hi: `
सरल भाषा: def g के ऊपर @f मतलब g = f(g)।

f एक wrapper लौटाता है। g बुलाने पर wrapper चलता है, जो मूल फंक्शन बुलाता है।

इसीलिए @app.get("/x") रूट दर्ज कर सकता है: डेकोरेटर इम्पोर्ट पर चलकर तुम्हारा फंक्शन ऐप पर सेव करता है।
      `,
    },
    words: [
      { term: "Import time", en: "When Python first loads the file, decorators already run.", hi: "जब पायथन फाइल पहली बार लोड करे, डेकोरेटर तब ही चल चुके।" },
    ],
    examples: [
      {
        label: "✅ @ is just assignment",
        code: `
def deco(fn):
    def wrapper():
        return fn() + "!"
    return wrapper

@deco
def hi():
    return "hi"

print(hi())  # hi!
        `,
      },
      {
        label: "✅ Factory @times(2)",
        code: `
def times(n):
    def deco(fn):
        def wrapper():
            return fn() * n
        return wrapper
    return deco

@times(2)
def star():
    return "*"

print(star())  # **
        `,
      },
    ],
  },
};
