export const pythonBasics = {
  whatIsPython: {
    title: { en: "What is Python?", hi: "पायथन क्या है?" },
    definition: {
      en: `
In simple words: Python is a programming language that reads almost like English.

You write short, clear lines. Python itself runs them (it is interpreted). People use it for websites, data, AI, scripts, and testing.

It is beginner-friendly, but also used in big companies.
      `,
      hi: `
सरल भाषा: पायथन एक प्रोग्रामिंग भाषा है जो लगभग अंग्रेज़ी जैसी पढ़ी जाती है।

छोटी, साफ़ लाइनें लिखो। पायथन खुद उन्हें चलाता है (interpreted)। वेबसाइट, डेटा, एआई, स्क्रिप्ट, टेस्टिंग में इस्तेमाल होता है।

शुरुआत आसान है, बड़ी कंपनियाँ भी इसे चलाती हैं।
      `,
    },
    words: [
      { term: "Programming language", en: "A way to give instructions to a computer.", hi: "कंप्यूटर को हिदायत देने का तरीका।" },
      { term: "Interpreted", en: "Code runs line by line. You do not compile a .exe first.", hi: "कोड लाइन-दर-लाइन चलता है। पहले .exe बनाना ज़रूरी नहीं।" },
      { term: "Script", en: "A small program for a task, like renaming files.", hi: "एक काम के लिए छोटा प्रोग्राम, जैसे फाइलें नाम बदलना।" },
    ],
    examples: [
      {
        label: "✅ Hello",
        code: `
print("Hello, Python")
        `,
      },
    ],
  },

  variablesTypes: {
    title: { en: "Variables and data types", hi: "वेरिएबल और डेटा टाइप" },
    definition: {
      en: `
In simple words: a variable is a name for a value. You do not write the type first. Python guesses it.

Common types:
- int → whole number (5)
- float → decimal (3.14)
- str → text ("hi")
- bool → True or False
- None → empty / missing

Names should be clear: user_name, not x.
      `,
      hi: `
सरल भाषा: वेरिएबल value का नाम है। टाइप पहले नहीं लिखते। पायथन खुद समझता है।

आम टाइप:
- int → पूरी संख्या (5)
- float → दशमलव (3.14)
- str → टेक्स्ट ("hi")
- bool → True या False
- None → खाली / नहीं है

नाम साफ़ रखो: user_name, सिर्फ x नहीं।
      `,
    },
    words: [
      { term: "Variable", en: "A label stuck on a value in memory.", hi: "मेमोरी में value पर चिपका लेबल।" },
      { term: "Type", en: "What kind of value it is: number, text, etc.", hi: "value किस तरह की है: संख्या, टेक्स्ट आदि।" },
      { term: "None", en: "Python’s way to say “nothing here”.", hi: "पायथन में “यहाँ कुछ नहीं”।" },
    ],
    examples: [
      {
        label: "✅ Types",
        code: `
age = 21
price = 99.5
name = "Ana"
ok = True
print(type(age), type(name))
        `,
      },
    ],
  },

  listsTuplesDicts: {
    title: { en: "List, tuple, dictionary, set", hi: "लिस्ट, टपल, डिक्शनरी, सेट" },
    definition: {
      en: `
In simple words, Python has four main “many items” boxes. Learn them together.

1) List  [10, 20, 30]
- Ordered: first, second, third stay in that order.
- Mutable: you can append, pop, change nums[0] = 99.
- Index: nums[0] is the first item. Negative index nums[-1] is the last.
- Use: to-do list, a queue of names, JSON arrays.

2) Tuple  (3, 4)   or   ("Ana", 21)
- Ordered like a list.
- Immutable: you cannot append or change an item. Safer as a “fixed pair”.
- Use: (latitude, longitude), function returning two values, dict keys (if items are immutable).

3) Dictionary  {"name": "Ana", "age": 21}
- Key → value. Keys must be unique and immutable (str, int, tuple).
- Fast lookup: user["name"] does not scan the whole box.
- Mutable: add user["city"] = "Pune", delete with del or pop.
- Use: a user profile, JSON objects, counting with .get(key, 0).

4) Set  {"python", "web", "web"}
- Unordered (no index like set[0] in normal use).
- Unique only: the second "web" disappears.
- Mutable: add, remove. Fast “is x in the set?”
- Math-like: union |, intersection &, difference -
- Use: remove duplicates, tags, “already seen” ids.

Quick pick: changing ordered list → list. Fixed pair → tuple. Named fields → dict. Unique membership → set.
      `,
      hi: `
सरल भाषा: पायथन में “कई चीज़ें” रखने के चार मुख्य डिब्बे हैं। इन्हें साथ सीखो।

1) लिस्ट  [10, 20, 30]
- क्रम है: पहला, दूसरा, तीसरा वैसा ही रहता है।
- म्यूटेबल: append, pop, nums[0] = 99 कर सकते हो।
- इंडेक्स: nums[0] पहली चीज़। nums[-1] आखिरी।
- इस्तेमाल: टू-डू, नामों की कतार, JSON arrays।

2) टपल  (3, 4)   या   ("Ana", 21)
- लिस्ट जैसा क्रम।
- इम्यूटेबल: append या आइटम बदल नहीं सकते। “तय जोड़ा” सुरक्षित।
- इस्तेमाल: (latitude, longitude), दो values लौटाना, dict की key (अगर अंदर इम्यूटेबल हो)।

3) डिक्शनरी  {"name": "Ana", "age": 21}
- कुंजी → value। कुंजी अनोखी और इम्यूटेबल (str, int, tuple)।
- तेज़ खोज: user["name"] पूरा डिब्बा नहीं घूमता।
- म्यूटेबल: user["city"] = "Pune", del या pop से हटाना।
- इस्तेमाल: यूज़र प्रोफाइल, JSON ऑब्जेक्ट, .get(key, 0) से गिनती।

4) सेट  {"python", "web", "web"}
- क्रम तय नहीं (सामान्य रूप में set[0] नहीं)।
- सिर्फ अनोखी चीज़: दूसरा "web" गायब।
- म्यूटेबल: add, remove। “x अंदर है?” तेज़।
- गणित जैसा: union |, intersection &, difference -
- इस्तेमाल: डुप्लिकेट हटाना, टैग, “पहले देखी id”।

जल्दी चुनो: बदलती क्रम वाली सूची → list। तय जोड़ा → tuple। नाम वाले फ़ील्ड → dict। अनोखी सदस्यता → set।
      `,
    },
    words: [
      { term: "List", en: "Ordered, changeable sequence. Written with [ ].", hi: "क्रम वाली, बदलने योग्य श्रृंखला। [ ] से लिखते हैं।" },
      { term: "Tuple", en: "Ordered, unchangeable sequence. Written with ( ).", hi: "क्रम वाली, न बदलने योग्य श्रृंखला। ( ) से लिखते हैं।" },
      { term: "Dictionary / dict", en: "Map of unique keys to values. Written with { key: value }.", hi: "अनोखी कुंजी से value का नक्शा। { कुंजी: value }।" },
      { term: "Set", en: "Unordered unique items. Written with { a, b } (not key:value).", hi: "बिना क्रम की अनोखी चीज़ें। { a, b } (कुंजी:value नहीं)।" },
      { term: "Index", en: "Position number starting at 0.", hi: "पोज़िशन नंबर, 0 से शुरू।" },
      { term: "Key", en: "The lookup name in a dict.", hi: "dict में खोजने वाला नाम।" },
      { term: "Mutable", en: "You can change it after creating it (list, dict, set).", hi: "बनाने के बाद बदल सकते हो (list, dict, set)।" },
      { term: "Immutable", en: "You cannot change it (tuple, str, int).", hi: "नहीं बदल सकते (tuple, str, int)।" },
    ],
    examples: [
      {
        label: "✅ All four",
        code: `
nums = [10, 20]
nums.append(30)
nums[0] = 99

point = (3, 4)
# point[0] = 1  # TypeError — tuple cannot change

user = {"name": "Ana", "age": 21}
user["city"] = "Pune"
print(user.get("email", "none"))

tags = {"python", "web", "web"}
print(tags)          # {"python", "web"}
print("web" in tags) # True
        `,
      },
    ],
  },

  functions: {
    title: { en: "Functions", hi: "फंक्शन्स" },
    definition: {
      en: `
In simple words: a function is a named recipe. You call it, it does work, it can return a result.

def means “define”. Indentation (spaces) is required in Python. No { } for the body.

*args = extra unnamed values as a tuple.
**kwargs = extra named values as a dict.

Keep functions small: one job each.
      `,
      hi: `
सरल भाषा: फंक्शन एक नाम वाली रेसिपी है। बुलाओ, काम हो, नतीजा लौट सकता है।

def मतलब “परिभाषा दो”। पायथन में indent (स्पेस) ज़रूरी है। बॉडी के लिए { } नहीं।

*args = अतिरिक्त बिना-नाम values, tuple बनकर।
**kwargs = अतिरिक्त नाम वाली values, dict बनकर।

फंक्शन छोटा रखो: एक काम।
      `,
    },
    words: [
      { term: "def", en: "Keyword to create a function.", hi: "फंक्शन बनाने का शब्द।" },
      { term: "Return", en: "Send a value back to the caller.", hi: "बुलाने वाले को value वापस देना।" },
      { term: "Indentation", en: "Leading spaces that show which lines belong together.", hi: "आगे की स्पेस जो बताए कौन सी लाइनें एक साथ हैं।" },
    ],
    examples: [
      {
        label: "✅ Function",
        code: `
def greet(name, times=1):
    return ("Hello " + name + "! ") * times

print(greet("Ana", times=2))
        `,
      },
    ],
  },

  classesOop: {
    title: { en: "Classes and objects", hi: "क्लास और ऑब्जेक्ट" },
    definition: {
      en: `
In simple words: a class is a cookie cutter. An object is one cookie.

class User: describes what a user has (name) and can do (login).
__init__ runs when you make a new object.
self means “this object”.

Use a class when many things share the same shape (many users, many products).
      `,
      hi: `
सरल भाषा: क्लास कुकी कटने वाला साँचा है। ऑब्जेक्ट एक कुकी है।

class User: यूज़र के पास क्या है (name) और क्या कर सकता है (login)।
__init__ नया ऑब्जेक्ट बनते ही चलता है।
self मतलब “यह वाला ऑब्जेक्ट”।

जब बहुत चीज़ें एक जैसी हों (कई यूज़र, कई प्रोडक्ट) तब क्लास।
      `,
    },
    words: [
      { term: "Class", en: "The blueprint.", hi: "ब्लूप्रिंट / साँचा।" },
      { term: "Object / instance", en: "One real thing made from the class.", hi: "क्लास से बनी एक असली चीज़।" },
      { term: "self", en: "The current object, passed automatically as the first argument.", hi: "मौजूदा ऑब्जेक्ट, पहला argument अपने आप।" },
      { term: "OOP", en: "Object-oriented programming: model the world as objects.", hi: "ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग: दुनिया को ऑब्जेक्ट की तरह देखना।" },
    ],
    examples: [
      {
        label: "✅ Class",
        code: `
class User:
    def __init__(self, name):
        self.name = name

    def hello(self):
        return "Hi, I am " + self.name

u = User("Ana")
print(u.hello())
        `,
      },
    ],
  },

  modulesPip: {
    title: { en: "Modules, pip, virtual env", hi: "मॉड्यूल, pip, वर्चुअल एनव" },
    definition: {
      en: `
In simple words:

Module = a .py file you import (import math).
Package = a folder of modules.
pip = the tool that installs packages from the internet (PyPI).
Virtual environment = a private folder of packages for one project, so Project A and Project B do not fight over versions.

Always make a venv for real work: python -m venv .venv then install with pip.
      `,
      hi: `
सरल भाषा:

मॉड्यूल = .py फाइल जिसे import करते हो (import math)।
पैकेज = मॉड्यूलों का फोल्डर।
pip = internet (PyPI) से पैकेज लगाने का औज़ार।
वर्चुअल एनवायरनमेंट = एक प्रोजेक्ट का निजी पैकेज फोल्डर, ताकि A और B के वर्जन न लड़ें।

असली काम में venv बनाओ: python -m venv .venv फिर pip से इंस्टॉल।
      `,
    },
    words: [
      { term: "import", en: "Bring code from another file into this file.", hi: "दूसरी फाइल का कोड इस फाइल में लाना।" },
      { term: "PyPI", en: "The public warehouse of Python packages.", hi: "पायथन पैकेजों का सार्वजनिक गोदाम।" },
      { term: "venv", en: "Virtual environment command/folder.", hi: "वर्चुअल एनवायरनमेंट का कमांड/फोल्डर।" },
    ],
    examples: [
      {
        label: "✅ venv + pip",
        code: `
python -m venv .venv
# Windows: .venv\\Scripts\\activate
pip install requests
        `,
      },
    ],
  },

  exceptions: {
    title: { en: "Errors and try/except", hi: "एरर और try/except" },
    definition: {
      en: `
In simple words: when Python cannot continue, it raises an exception (an error object).

try: run risky code.
except: if that error happens, do this instead of crashing.
finally: always run (close a file).

Do not use a bare except: and hide all errors. Catch the type you expect, like ValueError.
      `,
      hi: `
सरल भाषा: पायथन आगे न चल सके तो exception उठाता है (एरर ऑब्जेक्ट)।

try: जोखिम वाला कोड चलाओ।
except: वही एरर आए तो क्रैश की जगह यह करो।
finally: हमेशा चलो (फाइल बंद करो)।

नंगे except: से सारी गलतियाँ मत छुपाओ। जो टाइप उम्मीद हो वही पकड़ो, जैसे ValueError।
      `,
    },
    words: [
      { term: "Exception", en: "An error that can be caught and handled.", hi: "एरर जिसे पकड़कर संभाला जा सकता है।" },
      { term: "Raise", en: "Create/throw an error on purpose.", hi: "जानबूझकर एरर उठाना।" },
      { term: "Traceback", en: "The printout of where the error happened.", hi: "प्रिंटआउट कि एरर कहाँ हुई।" },
    ],
    examples: [
      {
        label: "✅ try/except",
        code: `
try:
    n = int("abc")
except ValueError:
    print("Not a number")
        `,
      },
    ],
  },

  whatPythonUses: {
    title: { en: "Where Python is used", hi: "पायथन कहाँ इस्तेमाल होता है" },
    definition: {
      en: `
In simple words, common jobs:

Web APIs and sites → Django, Flask, FastAPI
Data analysis → pandas, NumPy
Charts → matplotlib, seaborn
Machine learning / AI → scikit-learn, PyTorch, TensorFlow
Automation / DevOps scripts → requests, pathlib
Testing → pytest
Desktop/data apps → Streamlit

Python is a glue language: it connects files, APIs, and libraries quickly.
      `,
      hi: `
सरल भाषा, आम काम:

वेब API और साइट → Django, Flask, FastAPI
डेटा विश्लेषण → pandas, NumPy
चार्ट → matplotlib, seaborn
मशीन लर्निंग / एआई → scikit-learn, PyTorch, TensorFlow
ऑटोमेशन / DevOps स्क्रिप्ट → requests, pathlib
टेस्टिंग → pytest
डेस्कटॉप/डेटा ऐप → Streamlit

पायथन गोंद जैसी भाषा है: फाइलें, API, लाइब्रेरी जल्दी जोड़ती है।
      `,
    },
    words: [
      { term: "API", en: "A way for programs to talk over HTTP.", hi: "प्रोग्रामों का HTTP पर बात करना।" },
      { term: "Library", en: "Ready-made code you install, like pandas.", hi: "तैयार कोड जो इंस्टॉल करते हो, जैसे pandas।" },
      { term: "Glue language", en: "Good at connecting other tools, not only one niche.", hi: "दूसरे औज़ार जोड़ने में अच्छी, सिर्फ एक काम नहीं।" },
    ],
    examples: [
      {
        label: "✅ Typical imports",
        code: `
# web
# FastAPI / Flask / Django

# data
import pandas as pd
import numpy as np

# http script
import requests
print(requests.get("https://httpbin.org/get").status_code)
        `,
      },
    ],
  },

  threading: {
    title: { en: "Threading", hi: "थ्रेडिंग" },
    definition: {
      en: `
In simple words: a thread is a worker inside one program (one process). Threading means you start extra workers so waiting work can overlap.

Example: download 10 files. One thread waits for file A; another can wait for file B. The program does not sit idle on one download.

In CPython, because of the GIL, two threads rarely run heavy Python math at the true same time. They are still useful when the work is waiting (network, disk).

Module: threading. Thread(target=fn).start() then .join() to wait.
      `,
      hi: `
सरल भाषा: थ्रेड एक प्रोग्राम (एक प्रोसेस) के अंदर मज़दूर है। थ्रेडिंग मतलब और मज़दूर शुरू करना, ताकि इंतज़ार वाला काम ओवरलैप हो।

उदाहरण: 10 फाइल डाउनलोड। एक थ्रेड A का इंतज़ार करे, दूसरी B का। प्रोग्राम एक डाउनलोड पर खाली न बैठे।

CPython में GIL की वजह से दो थ्रेड भारी पायथन गणित सच में एक साथ कम ही चलाती हैं। इंतज़ार (नेटवर्क, डिस्क) पर फिर भी फायदा।

मॉड्यूल: threading. Thread(target=fn).start() फिर इंतज़ार के लिए .join()।
      `,
    },
    words: [
      { term: "Thread", en: "A worker sharing the same memory inside one process.", hi: "एक प्रोसेस में एक ही मेमोरी बाँटने वाला मज़दूर।" },
      { term: "join", en: "Wait until that thread finishes.", hi: "उस थ्रेड के खत्म होने तक रुकना।" },
      { term: "GIL", en: "Lock so one thread runs Python bytecode at a time in CPython.", hi: "ताला जिससे CPython में एक समय एक थ्रेड bytecode चलाए।" },
    ],
    examples: [
      {
        label: "✅ threading",
        code: `
import threading

def work(name):
    print("hello", name)

t = threading.Thread(target=work, args=("Ana",))
t.start()
t.join()
        `,
      },
    ],
  },

  multithreading: {
    title: { en: "Multi-threading", hi: "मल्टी-थ्रेडिंग" },
    definition: {
      en: `
In simple words: multi-threading means many threads in the same process, sharing the same variables.

Why: many I/O waits at once (many HTTP calls, many files).

Danger: two threads changing the same list/dict can mix data (race condition). Use Lock: with lock: ... when you write shared data.

Compared with one thread: overlapping waits. Compared with multi-processing: cheaper to start, shared memory, but GIL limits CPU speed-up for pure Python.
      `,
      hi: `
सरल भाषा: मल्टी-थ्रेडिंग मतलब एक ही प्रोसेस में कई थ्रेड, वही वेरिएबल बाँटना।

क्यों: एक साथ कई I/O इंतज़ार (कई HTTP, कई फाइलें)।

खतरा: दो थ्रेड एक ही list/dict बदलें तो डेटा मिल सकता है (race condition)। लिखते समय Lock: with lock: ...

एक थ्रेड से तुलना: इंतज़ार ओवरलैप। मल्टी-प्रोसेसिंग से: शुरू सस्ता, मेमोरी साझा, पर GIL शुद्ध पायथन CPU को कम बढ़ाती है।
      `,
    },
    words: [
      { term: "Multi-threading", en: "Several threads inside one process.", hi: "एक प्रोसेस के अंदर कई थ्रेड।" },
      { term: "Shared memory", en: "Threads see the same objects. Easy, but need locks.", hi: "थ्रेड एक ही ऑब्जेक्ट देखती हैं। आसान, पर लॉक चाहिए।" },
      { term: "Race condition", en: "Result depends on which thread writes first — bugs that come and go.", hi: "नतीजा इस पर कि कौन पहले लिखे — आती-जाती गलती।" },
      { term: "Lock", en: "Only one thread enters a block at a time.", hi: "एक समय एक थ्रेड ही ब्लॉक में घुसे।" },
    ],
    examples: [
      {
        label: "✅ Lock",
        code: `
import threading
lock = threading.Lock()
count = 0

def bump():
    global count
    with lock:
        count += 1
        `,
      },
    ],
  },

  multiprocessing: {
    title: { en: "Multi-processing", hi: "मल्टी-प्रोसेसिंग" },
    definition: {
      en: `
In simple words: multi-processing starts extra OS processes. Each has its own Python and its own GIL.

Why: heavy CPU work (resize 1000 images, crunch numbers) can use many cores for real.

How: multiprocessing.Process or Pool.map. Data is copied/sent between processes (pickle), not shared like threads — unless you use Queue or Manager.

Cost: slower to start, more memory. Do not use it for tiny tasks.

Pick: waiting on network → threads or async. Heavy CPU → processes.
      `,
      hi: `
सरल भाषा: मल्टी-प्रोसेसिंग अतिरिक्त OS प्रोसेस शुरू करती है। हर एक का अपना पायथन और अपना GIL।

क्यों: भारी CPU काम (1000 इमेज, गणना) सच में कई कोर इस्तेमाल कर सकता है।

कैसे: multiprocessing.Process या Pool.map। डेटा प्रोसेस के बीच कॉपी/भेजा जाता है (pickle), थ्रेड जैसा साझा नहीं — जब तक Queue या Manager न लो।

कीमत: शुरू धीमा, मेमोरी ज़्यादा। छोटे काम पर मत लगाओ।

चुनो: नेटवर्क इंतज़ार → थ्रेड या async। भारी CPU → प्रोसेस।
      `,
    },
    words: [
      { term: "Process", en: "A whole program copy, own memory.", hi: "पूरे प्रोग्राम की कॉपी, अपनी मेमोरी।" },
      { term: "Pool", en: "A group of worker processes you send jobs to.", hi: "मज़दूर प्रोसेसों का समूह जिन्हें काम देते हो।" },
      { term: "pickle", en: "Python’s way to turn an object into bytes to send to another process.", hi: "ऑब्जेक्ट को बाइट बनाकर दूसरी प्रोसेस को भेजने का तरीका।" },
      { term: "Core", en: "A CPU unit that can run work in parallel.", hi: "CPU की इकाई जो समानांतर काम चलाए।" },
    ],
    examples: [
      {
        label: "✅ Pool",
        code: `
from multiprocessing import Pool

def square(n):
    return n * n

if __name__ == "__main__":
    with Pool(4) as p:
        print(p.map(square, [1, 2, 3, 4]))
        `,
      },
    ],
  },

  asyncProgramming: {
    title: { en: "Asynchronous programming", hi: "असिंक्रोनस प्रोग्रामिंग" },
    definition: {
      en: `
In simple words: async means “start waiting, let other work run, come back when ready” — in one thread.

You mark functions async def. Inside, await pause until a download or timer finishes. An event loop (asyncio.run) decides who runs next.

This is not the same as multi-threading. There is usually one thread. Switching happens at await, not in the middle of a normal line.

Why: thousands of API calls. Threads would be heavy. CPU-heavy math still blocks the loop — put that in processes or to_thread.

FastAPI uses this idea for many requests at once.
      `,
      hi: `
सरल भाषा: async मतलब “इंतज़ार शुरू करो, और काम चलने दो, तैयार हो तब लौटो” — एक थ्रेड में।

फंक्शन async def। अंदर await डाउनलोड या टाइमर तक रोकता है। इवेंट लूप (asyncio.run) तय करता है आगे कौन चले।

मल्टी-थ्रेडिंग नहीं। अक्सर एक थ्रेड। स्विच await पर होता है, साधारण लाइन के बीच नहीं।

क्यों: हज़ारों API कॉल। थ्रेड भारी पड़ें। CPU-भारी गणित लूप रोकती है — उसे प्रोसेस या to_thread में डालो।

फास्टएपीआई कई रिक्वेस्ट के लिए यही विचार इस्तेमाल करता है।
      `,
    },
    words: [
      { term: "async def", en: "Defines a coroutine: a pause-able function.", hi: "कोरूटीन: रुक सकने वाला फंक्शन।" },
      { term: "await", en: "Pause here until that async work finishes.", hi: "यहाँ रुको जब तक वह async काम खत्म न हो।" },
      { term: "Event loop", en: "The scheduler that runs coroutines.", hi: "कोरूटीन चलाने वाला शेड्यूलर।" },
      { term: "Coroutine", en: "An async function object the loop can pause and resume.", hi: "असिंक फंक्शन ऑब्जेक्ट जिसे लूप रोक/चला सके।" },
      { term: "Blocking", en: "A call that holds the whole thread, like time.sleep in the loop.", hi: "पूरी थ्रेड पकड़ने वाला कॉल, जैसे लूप में time.sleep।" },
    ],
    examples: [
      {
        label: "✅ asyncio",
        code: `
import asyncio

async def fetch(name):
    await asyncio.sleep(1)
    return name

async def main():
    a, b = await asyncio.gather(fetch("A"), fetch("B"))
    print(a, b)

asyncio.run(main())
        `,
      },
    ],
  },

  howDecoratorsWork: {
    title: { en: "How decorators work", hi: "डेकोरेटर कैसे काम करते हैं" },
    definition: {
      en: `
In simple words: a decorator is a function that takes a function and returns a new function.

Step by step:
1. You write def greet(): ...
2. @log above it means: greet = log(greet)
3. log defines an inner wrapper(*args, **kwargs)
4. wrapper may run extra code, then call the original fn, then extra code again
5. log returns wrapper. So when you call greet(), you actually call wrapper()

Why: add logging, timing, FastAPI routes (@app.get), login checks — without copying that into every function.

Ways you can create a decorator:
1. A function that returns a wrapper (@log)
2. The same wrap without @: greet = log(greet)
3. A factory with arguments (@repeat(3))
4. A class with __call__ (@Timer)
5. Stack several: @log then @repeat(2)

@decorator(arg) is a decorator factory: first call gets arg, returns the real decorator.

Keep wrappers with functools.wraps(fn) so the name and docstring stay correct.
      `,
      hi: `
सरल भाषा: डेकोरेटर एक फंक्शन है जो फंक्शन लेता है और नया फंक्शन लौटाता है।

कदम:
1. def greet(): ... लिखो
2. ऊपर @log मतलब: greet = log(greet)
3. log अंदर wrapper(*args, **kwargs) बनाता है
4. wrapper अतिरिक्त कोड चलाए, मूल fn बुलाए, फिर अतिरिक्त कोड
5. log wrapper लौटाए। greet() बुलाने पर असल में wrapper() चलता है

क्यों: लॉग, समय, फास्टएपीआई रूट (@app.get), लॉगिन जाँच — हर फंक्शन में कॉपी बिना।

बनाने के तरीके:
1. Wrapper लौटाने वाला फंक्शन (@log)
2. @ बिना: greet = log(greet)
3. आर्ग्युमेंट वाली फैक्टरी (@repeat(3))
4. __call__ वाली क्लास (@Timer)
5. कई परतें: @log फिर @repeat(2)

@decorator(arg) फैक्टरी है: पहले arg मिलता है, असली डेकोरेटर लौटता है।

wrapper पर functools.wraps(fn) रखो ताकि नाम और डॉकस्ट्रिंग सही रहें।
      `,
    },
    words: [
      { term: "Wrapper", en: "The inner function that replaces the original.", hi: "अंदर का फंक्शन जो मूल की जगह ले।" },
      { term: "@log", en: "Sugar for greet = log(greet).", hi: "greet = log(greet) की छोटी लिखावट।" },
      { term: "Factory", en: "A function that returns a decorator, used as @repeat(3).", hi: "डेकोरेटर लौटाने वाला फंक्शन, @repeat(3)।" },
      { term: "wraps", en: "Copies name/doc from the original function onto the wrapper.", hi: "मूल फंक्शन का नाम/डॉक रैपर पर कॉपी।" },
      { term: "Class decorator", en: "A class with __call__ used as @Timer.", hi: "क्लास जिसमें __call__ हो, @Timer की तरह।" },
    ],
    examples: [
      {
        label: "✅ Type 1: function decorator (no extra args)",
        code: `
from functools import wraps

def log(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        print("before", fn.__name__)
        result = fn(*args, **kwargs)
        print("after")
        return result
    return wrapper

@log
def greet(name):
    return "hi " + name

print(greet("Ana"))
# same as: greet = log(greet)
        `,
      },
      {
        label: "✅ Type 2: without @  (manual wrap)",
        code: `
def greet(name):
    return "hi " + name

greet = log(greet)   # same as putting @log above def
print(greet("Ana"))
        `,
      },
      {
        label: "✅ Type 3: decorator with arguments (factory)",
        code: `
from functools import wraps

def repeat(times):
    def decorator(fn):
        @wraps(fn)
        def wrapper(*args, **kwargs):
            for _ in range(times):
                result = fn(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(3)
def hello():
    print("hello")

hello()  # prints hello three times
# same as: hello = repeat(3)(hello)
        `,
      },
      {
        label: "✅ Type 4: class decorator (__call__)",
        code: `
class Timer:
    def __init__(self, fn):
        self.fn = fn

    def __call__(self, *args, **kwargs):
        print("start")
        result = self.fn(*args, **kwargs)
        print("end")
        return result

@Timer
def add(a, b):
    return a + b

print(add(2, 3))
# add is now a Timer instance; calling add() runs Timer.__call__
        `,
      },
      {
        label: "✅ Type 5: stacked decorators",
        code: `
@log
@repeat(2)
def ping():
    print("pong")

# bottom first: ping = log(repeat(2)(ping))
        `,
      },
    ],
  },

  iteratorsLazyGenerators: {
    title: { en: "Iterator vs lazy vs generator", hi: "इटरेटर बनाम लेज़ी बनाम जनरेटर" },
    definition: {
      en: `
In simple words, three related ideas — not the same word:

1) Iterable
   Something you can pass to for x in ...  Examples: list, str, dict, file, generator.
   Python calls iter(obj) and gets an iterator.

2) Iterator
   The object that actually hands out items one by one.
   It has __next__ (or next()). When finished, it raises StopIteration.
   Most iterators are lazy: they do not build the whole result first.
   A list is iterable, but the list itself is eager (all items already in memory).
   iter(list) gives an iterator over that list.

3) Lazy
   “Compute the next value only when asked.”
   A generator expression (n*n for n in nums) is lazy.
   A list comprehension [n*n for n in nums] is eager — it makes the full list now.

4) Generator
   One easy way to make a lazy iterator:
   - generator function: def f(): yield 1; yield 2
   - generator expression: (n*n for n in nums)
   Every generator is an iterator. Not every iterator is a generator (you can write a class with __iter__/__next__).

Difference in one line:
- Iterator = the protocol (next item, please).
- Lazy = the strategy (do not precompute).
- Generator = a convenient lazy iterator made with yield or (...).
      `,
      hi: `
सरल भाषा, तीन जुड़े विचार — एक ही शब्द नहीं:

1) इटरेबल
   जिस पर for x in ... चल सके। उदाहरण: list, str, dict, फाइल, जनरेटर।
   पायथन iter(obj) चलाकर इटरेटर लेता है।

2) इटरेटर
   जो चीज़ें एक-एक कर के देता है।
   __next__ (या next())। खत्म हो तो StopIteration।
   ज्यादातर इटरेटर लेज़ी होते हैं: पूरा नतीजा पहले नहीं बनाते।
   list इटरेबल है, पर खुद एगर है (सभी आइटम मेमोरी में)।
   iter(list) उस list पर इटरेटर देता है।

3) लेज़ी
   “अगली value तभी निकालो जब माँगी जाए।”
   जनरेटर एक्सप्रेशन (n*n for n in nums) लेज़ी है।
   लिस्ट कॉम्प्रिहेंशन [n*n for n in nums] एगर है — अभी पूरी list बनती है।

4) जनरेटर
   लेज़ी इटरेटर बनाने का आसान तरीका:
   - जनरेटर फंक्शन: def f(): yield 1; yield 2
   - जनरेटर एक्सप्रेशन: (n*n for n in nums)
   हर जनरेटर इटरेटर है। हर इटरेटर जनरेटर नहीं (क्लास में __iter__/__next__ भी लिख सकते हो)।

एक लाइन फर्क:
- इटरेटर = प्रोटोकॉल (अगली चीज़ दो)।
- लेज़ी = रणनीति (पहले से हिसाब मत लगाओ)।
- जनरेटर = yield या (...) से बना सुविधाजनक लेज़ी इटरेटर।
      `,
    },
    words: [
      { term: "Iterable", en: "Has __iter__; for-loop can use it.", hi: "__iter__ हो; for-loop चला सके।" },
      { term: "Iterator", en: "Has __next__; remembers where it is.", hi: "__next__ हो; जगह याद रखे।" },
      { term: "Lazy", en: "Work happens on demand, not all at once.", hi: "काम माँगने पर, एक साथ नहीं।" },
      { term: "Eager", en: "Build the full result immediately (a list).", hi: "पूरा नतीजा तुरंत बनाओ (list)।" },
      { term: "yield", en: "Pause the function and send one value out.", hi: "फंक्शन रोककर एक value बाहर भेजो।" },
      { term: "StopIteration", en: "Signal that the iterator is empty.", hi: "संकेत कि इटरेटर खाली हो गया।" },
    ],
    examples: [
      {
        label: "✅ Eager list vs lazy generator expression",
        code: `
nums = [1, 2, 3]

eager = [n * n for n in nums]      # list, all done now
lazy = (n * n for n in nums)       # generator, nothing squared yet

print(eager)          # [1, 4, 9]
print(next(lazy))     # 1  — first square now
print(next(lazy))     # 4
        `,
      },
      {
        label: "✅ Iterator protocol by hand (class)",
        code: `
class CountDown:
    def __init__(self, n):
        self.n = n

    def __iter__(self):
        return self

    def __next__(self):
        if self.n <= 0:
            raise StopIteration
        self.n -= 1
        return self.n + 1

for x in CountDown(3):
    print(x)   # 3 2 1
        `,
      },
      {
        label: "✅ Generator function (yield) — also an iterator",
        code: `
def count_down(n):
    while n > 0:
        yield n
        n -= 1

g = count_down(3)
print(next(g))   # 3
print(list(g))   # [2, 1]  — rest of the iterator
        `,
      },
      {
        label: "✅ iter() on a list",
        code: `
nums = [10, 20]
it = iter(nums)     # iterator over an eager list
print(next(it))     # 10
print(next(it))     # 20
# next(it) would raise StopIteration
        `,
      },
    ],
  },
};
