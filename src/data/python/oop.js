export const pythonOop = {
  whatIsOop: {
    title: { en: "What is OOP?", hi: "OOP क्या है?" },
    definition: {
      en: `
In simple words: OOP (Object-Oriented Programming) means you model the program as objects.

An object is a thing that has:
- data (name, age) — often called attributes
- actions (walk, login) — methods

A class is the cookie cutter. An object is one cookie.

Four famous ideas (we cover each with examples):
1. Encapsulation — keep data + code together; hide inner details
2. Inheritance — a child class reuses a parent class
3. Polymorphism — same method name, different behaviour
4. Abstraction — show only what the user needs

Python is not “only OOP”. You can mix functions and classes. Use a class when many things share the same shape (many users, many products).
      `,
      hi: `
सरल भाषा: OOP (ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग) मतलब प्रोग्राम को ऑब्जेक्ट की तरह सोचना।

ऑब्जेक्ट के पास:
- डेटा (नाम, उम्र) — अक्सर attributes
- काम (चलना, लॉगिन) — methods

क्लास कुकी का साँचा है। ऑब्जेक्ट एक कुकी है।

चार मशहूर विचार (हर एक पर example):
1. एनकैप्सुलेशन — डेटा + कोड साथ; अंदर छुपाओ
2. इनहेरिटेंस — बच्ची क्लास माँ क्लास दोहराए
3. पॉलीमॉर्फ़िज़्म — एक नाम, अलग व्यवहार
4. एब्स्ट्रैक्शन — यूज़र को सिर्फ ज़रूरी चीज़ दिखाओ

पायथन सिर्फ OOP नहीं। फंक्शन और क्लास मिला सकते हो। जब बहुत चीज़ें एक जैसी हों (कई यूज़र) तब क्लास।
      `,
    },
    words: [
      { term: "OOP", en: "Style of code built around objects.", hi: "ऑब्जेक्ट के इर्द-गिर्द कोड लिखने का तरीका।" },
      { term: "Attribute", en: "A value stored on the object, like user.name.", hi: "ऑब्जेक्ट पर रखी value, जैसे user.name।" },
      { term: "Method", en: "A function that belongs to the class/object.", hi: "क्लास/ऑब्जेक्ट का फंक्शन।" },
    ],
    examples: [
      {
        label: "✅ Object in one picture",
        code: `
# class  = idea of a "Dog"
# object = this dog: Bruno

class Dog:
    def __init__(self, name):
        self.name = name          # data

    def bark(self):               # action
        return self.name + " says woof"

bruno = Dog("Bruno")              # one object
print(bruno.bark())
        `,
      },
    ],
  },

  classAndObject: {
    title: { en: "Class and object", hi: "क्लास और ऑब्जेक्ट" },
    definition: {
      en: `
In simple words:

class Name:  → you are teaching Python a new type.
Then you call it like a function: u = User("Ana")
That call creates an object (also called an instance).

Many objects can come from one class. Each has its own data.
      `,
      hi: `
सरल भाषा:

class Name:  → पायथन को नया टाइप सिखा रहे हो।
फिर फंक्शन की तरह बुलाओ: u = User("Ana")
यह कॉल एक ऑब्जेक्ट बनाती है (instance भी कहते हैं)।

एक क्लास से कई ऑब्जेक्ट। हर एक का अपना डेटा।
      `,
    },
    words: [
      { term: "Class", en: "The blueprint.", hi: "ब्लूप्रिंट / साँचा।" },
      { term: "Object / instance", en: "One real value made from the class.", hi: "क्लास से बनी एक असली चीज़।" },
    ],
    examples: [
      {
        label: "✅ Two objects, one class",
        code: `
class User:
    def __init__(self, name):
        self.name = name

a = User("Ana")
b = User("Bob")
print(a.name, b.name)   # Ana Bob
print(a is b)           # False — two objects
        `,
      },
    ],
  },

  initAndSelf: {
    title: { en: "__init__ and self", hi: "__init__ और self" },
    definition: {
      en: `
In simple words:

__init__ runs automatically when you create the object. It is not a magic “constructor return”. It sets up the new object. It should return None (do not return self).

self is the current object. Python passes it for you as the first argument of instance methods.

You write self.name = name to stick the name onto this object.
      `,
      hi: `
सरल भाषा:

__init__ ऑब्जेक्ट बनते ही अपने आप चलता है। यह “constructor return” नहीं। नया ऑब्जेक्ट सेट करता है। None लौटाओ (self return मत करो)।

self मौजूदा ऑब्जेक्ट है। इंस्टेंस मेथड में पायथन इसे पहला argument खुद देता है।

self.name = name से नाम इस ऑब्जेक्ट पर चिपकता है।
      `,
    },
    words: [
      { term: "__init__", en: "Setup method. Double underscore = dunder.", hi: "सेटअप मेथड। डबल अंडरस्कोर = dunder।" },
      { term: "self", en: "This object. First parameter of instance methods.", hi: "यह ऑब्जेक्ट। इंस्टेंस मेथड का पहला पैरामीटर।" },
    ],
    examples: [
      {
        label: "✅ __init__ + self",
        code: `
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def move(self, dx):
        self.x += dx

p = Point(1, 2)
p.move(5)
print(p.x, p.y)   # 6 2
        `,
      },
    ],
  },

  instanceVsClassAttr: {
    title: { en: "Instance vs class attributes", hi: "इंस्टेंस बनाम क्लास एट्रिब्यूट" },
    definition: {
      en: `
In simple words:

Instance attribute — lives on one object (self.name). Each user has a different name.
Class attribute — lives on the class (User.kind = "person"). Shared by all, unless an object overrides it.

If you do self.kind = "robot" on one object, only that object changes. The class value stays for the others.
      `,
      hi: `
सरल भाषा:

इंस्टेंस एट्रिब्यूट — एक ऑब्जेक्ट पर (self.name)। हर यूज़र का नाम अलग।
क्लास एट्रिब्यूट — क्लास पर (User.kind = "person")। सब बाँटते हैं, जब तक कोई ऑब्जेक्ट ओवरराइड न करे।

एक ऑब्जेक्ट पर self.kind = "robot" करो तो सिर्फ वही बदले। बाकी के लिए क्लास वाली value रहे।
      `,
    },
    words: [
      { term: "Shared", en: "All instances see the same class attribute.", hi: "सभी इंस्टेंस एक ही क्लास एट्रिब्यूट देखें।" },
    ],
    examples: [
      {
        label: "✅ Shared vs own data",
        code: `
class User:
    kind = "person"          # class attribute

    def __init__(self, name):
        self.name = name     # instance attribute

a = User("Ana")
b = User("Bob")
print(a.kind, b.kind)        # person person
a.kind = "admin"             # only a
print(a.kind, b.kind)        # admin person
print(User.kind)             # person
        `,
      },
    ],
  },

  methodTypes: {
    title: { en: "Instance, class, static methods", hi: "इंस्टेंस, क्लास, स्टैटिक मेथड" },
    definition: {
      en: `
In simple words, three kinds of methods:

1. Instance method (normal)
   First arg is self. Needs an object: u.hello()

2. Class method (@classmethod)
   First arg is cls (the class). Good for alternative constructors: User.from_email("a@b.com")

3. Static method (@staticmethod)
   No self, no cls. Just a function parked on the class: User.is_valid_email("a@b.com")
      `,
      hi: `
सरल भाषा, तीन मेथड:

1. इंस्टेंस मेथड (सामान्य)
   पहला arg self। ऑब्जेक्ट चाहिए: u.hello()

2. क्लास मेथड (@classmethod)
   पहला arg cls (क्लास)। वैकल्पिक constructor: User.from_email("a@b.com")

3. स्टैटिक मेथड (@staticmethod)
   न self, न cls। क्लास पर बैठा फंक्शन: User.is_valid_email("a@b.com")
      `,
    },
    words: [
      { term: "cls", en: "The class itself, like User.", hi: "क्लास खुद, जैसे User।" },
      { term: "Constructor", en: "A way to create an object.", hi: "ऑब्जेक्ट बनाने का तरीका।" },
    ],
    examples: [
      {
        label: "✅ All three",
        code: `
class User:
    def __init__(self, name):
        self.name = name

    def hello(self):
        return "hi " + self.name

    @classmethod
    def guest(cls):
        return cls("Guest")

    @staticmethod
    def is_email(text):
        return "@" in text

u = User.guest()
print(u.hello())
print(User.is_email("a@b.com"))
        `,
      },
    ],
  },

  encapsulation: {
    title: { en: "Encapsulation", hi: "एनकैप्सुलेशन" },
    definition: {
      en: `
In simple words: put data and the code that uses it in one class. Outside code should not poke inner details.

Python does not have strict private like some languages.
By style:
- name      → public
- _name     → internal, please do not touch
- __name    → name mangling (_Class__name), not true security

A common pattern: keep _balance inside, give deposit() and a read-only property.
      `,
      hi: `
सरल भाषा: डेटा और उसे इस्तेमाल करने वाला कोड एक क्लास में रखो। बाहर वाला अंदर न घुसे।

पायथन में कुछ भाषाओं जैसा सख्त private नहीं।
स्टाइल:
- name      → पब्लिक
- _name     → अंदरूनी, मत छुओ
- __name    → नेम मैंगलिंग (_Class__name), असली ताला नहीं

आम पैटर्न: _balance अंदर, deposit() और read-only property बाहर।
      `,
    },
    words: [
      { term: "Encapsulation", en: "Bundle data + methods; hide internals.", hi: "डेटा + मेथड बाँधो; अंदर छुपाओ।" },
      { term: "Name mangling", en: "__x becomes _ClassName__x to avoid clashes.", hi: "__x बन जाता है _ClassName__x, टक्कर बचाने को।" },
    ],
    examples: [
      {
        label: "✅ Hide balance, use methods",
        code: `
class Account:
    def __init__(self, money):
        self._balance = money

    def deposit(self, n):
        if n > 0:
            self._balance += n

    @property
    def balance(self):
        return self._balance

acc = Account(100)
acc.deposit(40)
print(acc.balance)     # 140
# acc.balance = 0      # error if only @property getter
        `,
      },
    ],
  },

  inheritance: {
    title: { en: "Inheritance", hi: "इनहेरिटेंस" },
    definition: {
      en: `
In simple words: a child class gets the parent’s methods and attributes, and can add more.

class Dog(Animal): means Dog is a kind of Animal.

Use it when the child really “is a” parent (Dog is an Animal).
Do not inherit just to reuse a random helper — use a function or composition (has-a) instead.
      `,
      hi: `
सरल भाषा: बच्ची क्लास को माँ की मेथड और एट्रिब्यूट मिलते हैं, और नई चीज़ें जोड़ सकती है।

class Dog(Animal): मतलब Dog एक तरह का Animal है।

जब बच्ची सच में “है एक” माँ (Dog एक Animal है)।
सिर्फ हेल्पर दोहराने को inherit मत करो — फंक्शन या composition (के पास है) लो।
      `,
    },
    words: [
      { term: "Parent / base", en: "The class you inherit from.", hi: "जिससे inherit करते हो।" },
      { term: "Child / subclass", en: "The new class that extends the parent.", hi: "माँ को बढ़ाती नई क्लास।" },
      { term: "Composition", en: "Store another object inside, instead of inheriting.", hi: "inherit की जगह अंदर दूसरा ऑब्जेक्ट रखना।" },
    ],
    examples: [
      {
        label: "✅ Child reuses parent",
        code: `
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "..."

class Dog(Animal):
    def speak(self):
        return self.name + " woof"

d = Dog("Bruno")
print(d.speak())
        `,
      },
    ],
  },

  superCall: {
    title: { en: "super() and override", hi: "super() और ओवरराइड" },
    definition: {
      en: `
In simple words: the child can replace a parent method (override).

If the child still needs the parent’s work, call super().method().
In __init__, call super().__init__(...) so parent attributes are set.

Override = same method name on the child, new body.
      `,
      hi: `
सरल भाषा: बच्ची माँ की मेथड बदल सकती है (override)।

अगर माँ का काम भी चाहिए तो super().method()।
__init__ में super().__init__(...) ताकि माँ के एट्रिब्यूट सेट हों।

Override = बच्ची पर वही मेथड नाम, नया बॉडी।
      `,
    },
    words: [
      { term: "Override", en: "Child method replaces parent method of the same name.", hi: "बच्ची की मेथड माँ की उसी नाम वाली को बदल दे।" },
      { term: "super()", en: "Reach the parent implementation.", hi: "माँ वाला इम्प्लीमेंटेशन चलाना।" },
    ],
    examples: [
      {
        label: "✅ super().__init__",
        code: `
class Animal:
    def __init__(self, name):
        self.name = name

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)
        self.breed = breed

d = Dog("Bruno", "Indie")
print(d.name, d.breed)
        `,
      },
    ],
  },

  polymorphism: {
    title: { en: "Polymorphism", hi: "पॉलीमॉर्फ़िज़्म" },
    definition: {
      en: `
In simple words: one name, many forms.

You call .speak() on different objects. Dog and Cat each have speak(). The for-loop does not care which class — as long as the method exists (duck typing).

Python does this without extra interfaces. If it has speak(), you can call speak().
      `,
      hi: `
सरल भाषा: एक नाम, कई रूप।

अलग ऑब्जेक्ट पर .speak()। Dog और Cat दोनों के पास speak()। for-लूप को क्लास की परवाह नहीं — मेथड हो (duck typing)।

पायथन को अलग interface की ज़रूरत नहीं। speak() हो तो speak() बुलाओ।
      `,
    },
    words: [
      { term: "Polymorphism", en: "Same operation, different types, different results.", hi: "एक ऑपरेशन, अलग टाइप, अलग नतीजा।" },
      { term: "Duck typing", en: "If it quacks (has the method), treat it as a duck.", hi: "अगर विधि है तो उसी तरह चलो — टाइप चेक कम।" },
    ],
    examples: [
      {
        label: "✅ One loop, many speak()",
        code: `
class Dog:
    def speak(self):
        return "woof"

class Cat:
    def speak(self):
        return "meow"

for animal in (Dog(), Cat()):
    print(animal.speak())
        `,
      },
    ],
  },

  abstraction: {
    title: { en: "Abstraction", hi: "एब्स्ट्रैक्शन" },
    definition: {
      en: `
In simple words: hide the messy how; show a simple what.

A car’s driver uses steer() and brake(). They do not wire the engine.

In Python you can use abc (Abstract Base Class): mark a method @abstractmethod so children must write it. The abstract class itself is not meant to be created.
      `,
      hi: `
सरल भाषा: उलझा “कैसे” छुपाओ; सरल “क्या” दिखाओ।

गाड़ी वाला steer() और brake() चलाए। इंजन की तारें न जोड़े।

पायथन में abc: @abstractmethod ताकि बच्चे उसे लिखें। एब्स्ट्रैक्ट क्लास खुद नहीं बनानी।
      `,
    },
    words: [
      { term: "Abstract", en: "Incomplete on purpose; child must fill it.", hi: "जानबूझकर अधूरी; बच्ची भरे।" },
      { term: "abc", en: "Module: Abstract Base Classes.", hi: "मॉड्यूल: Abstract Base Classes।" },
    ],
    examples: [
      {
        label: "✅ Abstract method",
        code: `
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Square(Shape):
    def __init__(self, side):
        self.side = side

    def area(self):
        return self.side * self.side

print(Square(4).area())
# Shape()  # TypeError — abstract
        `,
      },
    ],
  },
};
