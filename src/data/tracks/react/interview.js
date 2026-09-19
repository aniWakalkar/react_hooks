export const interview = {
  whatIsReact: {
    title: { en: "What is React?", hi: "रिएक्ट क्या है?" },
    definition: {
      en: `
In simple words: React is a tool (library) to build websites and app screens using JavaScript.

You break the page into small pieces called components (button, header, card). Each piece can remember its own data (state).

When data changes, React updates only the parts that need to change. It does this with a Virtual DOM (a plan of the page in memory), then it patches the real page.
      `,
      hi: `
सरल भाषा: React एक औज़ार (library) है जिससे JavaScript से वेबसाइट और ऐप स्क्रीन बनती है।

पेज को छोटे टुकड़ों में बाँटते हो, जिन्हें components कहते हैं (बटन, हेडर, कार्ड)। हर टुकड़ा अपना data (state) याद रख सकता है।

Data बदले तो React सिर्फ वही हिस्सा बदलता है जिसे बदलना है। पहले Virtual DOM (याददाश्त में पेज की योजना) बनती है, फिर असली पेज पर छोटे पैच लगते हैं।
      `,
    },
    words: [
      { term: "Library", en: "Ready-made code you import. Smaller than a full framework. React focuses on UI.", hi: "तैयार code जो import करते हो। पूरे framework से छोटा। React UI पर ध्यान देता है।" },
      { term: "User interface (UI)", en: "What the user sees and clicks: buttons, text, forms.", hi: "यूज़र जो देखता और क्लिक करता है: बटन, टेक्स्ट, फॉर्म।" },
      { term: "Single-page app", en: "The site mostly stays on one HTML page and React changes the content without full reload.", hi: "साइट ज्यादातर एक HTML पेज पर रहती है, पूरा reload बिना React content बदलता है।" },
      { term: "Component", en: "A reusable UI piece written as a function.", hi: "दोबारा इस्तेमाल होने वाला UI टुकड़ा, function की तरह।" },
      { term: "State", en: "Changing data that belongs to a component.", hi: "बदलने वाला data जो component का अपना है।" },
      { term: "Virtual DOM", en: "A copy of the page in memory. React compares copies, then updates the real page a little.", hi: "पेज की कॉपी memory में। React कॉपियाँ मिलाता है, फिर असली पेज थोड़ा अपडेट करता है।" },
    ],
  },

  virtualDom: {
    title: { en: "What is the Virtual DOM?", hi: "वर्चुअल डॉम क्या है?" },
    definition: {
      en: `
In simple words: the real DOM is the actual page in the browser. Changing it a lot is slow.

The Virtual DOM is a lightweight copy in memory. When state changes, React makes a new copy, compares it with the old copy (this compare step is called reconciliation), and then updates only the real pieces that changed.

Like editing a draft, then copying only the changed lines into the final document.
      `,
      hi: `
सरल भाषा: Real DOM browser का असली पेज है। उसे बहुत बार बदलना धीमा हो सकता है।

Virtual DOM memory में हल्की कॉपी है। State बदले तो React नई कॉपी बनाता है, पुरानी से मिलाता है (इस मिलान को reconciliation कहते हैं), फिर असली पेज में सिर्फ बदले हिस्से अपडेट करता है।

जैसे ड्राफ्ट एडिट करो, फिर फाइनल दस्तावेज़ में सिर्फ बदली लाइनें कॉपी करो।
      `,
    },
    words: [
      { term: "DOM", en: "Document Object Model: the tree of HTML elements in the browser.", hi: "Document Object Model: browser में HTML elements का पेड़।" },
      { term: "In-memory", en: "Stored in RAM, not painted as pixels yet.", hi: "RAM में रखा, अभी स्क्रीन के पिक्सल नहीं।" },
      { term: "Lightweight", en: "Cheaper/faster than touching the real page for every small change.", hi: "हर छोटे बदलाव पर असली पेज छूने से सस्ता/तेज़।" },
      { term: "Diff / compare", en: "Find what is different between old tree and new tree.", hi: "पुराने और नए पेड़ में क्या अलग है, ढूँढना।" },
      { term: "Reconciliation", en: "React’s process of matching trees and updating the real DOM.", hi: "पेड़ मिलान कर असली DOM अपडेट करने की React प्रक्रिया।" },
      { term: "Node", en: "One item in the tree, like a div or a piece of text.", hi: "पेड़ का एक हिस्सा, जैसे div या टेक्स्ट।" },
    ],
  },

  jsx: {
    title: { en: "What is JSX?", hi: "जेएसएक्स क्या है?" },
    definition: {
      en: `
In simple words: JSX is a way to write HTML-looking code inside JavaScript.

It is not real HTML. A tool (usually Babel) turns it into React.createElement(...) calls.

Inside { } you can put JavaScript: a variable, a sum, a function call.

Example idea: <h1>Hello {name}</h1> shows the name from JavaScript.
      `,
      hi: `
सरल भाषा: JSX JavaScript के अंदर HTML जैसा code लिखने का तरीका है।

यह असली HTML नहीं। एक औज़ार (अक्सर Babel) इसे React.createElement(...) में बदलता है।

{ } के अंदर JavaScript लिख सकते हो: variable, जोड़, function।

उदाहरण: <h1>Hello {name}</h1> JavaScript वाले name को दिखाता है।
      `,
    },
    words: [
      { term: "Syntax extension", en: "Extra writing rules on top of JavaScript. Browsers do not run JSX directly.", hi: "JavaScript के ऊपर अतिरिक्त लिखने का नियम। Browser JSX सीधे नहीं चलाता।" },
      { term: "Compile", en: "Turn JSX into normal JavaScript before the browser runs it.", hi: "Browser चलाने से पहले JSX को साधारण JavaScript बनाना।" },
      { term: "Babel", en: "A popular tool that compiles JSX and new JS for older browsers.", hi: "JSX और नया JS पुराने browsers के लिए बदलने वाला आम औज़ार।" },
      { term: "Expression", en: "A piece of JS that becomes a value, like name or count + 1.", hi: "JS का टुकड़ा जो value बनता है, जैसे name या count + 1।" },
      { term: "Curly braces { }", en: "In JSX, they mean: insert a JS value here.", hi: "JSX में मतलब: यहाँ JS की value डालो।" },
    ],
  },

  propsVsState: {
    title: { en: "Difference between props and state", hi: "प्रॉप्स और स्टेट में अंतर" },
    definition: {
      en: `
In simple words:

Props = gifts from the parent. The child should not change them. Read only.

State = the component’s own notebook. It can change it. When it changes, that component draws again.

If the parent must control the value (like a form the parent submits), use props.
If only this component cares (like “is this menu open?”), use state.
      `,
      hi: `
सरल भाषा:

Props = parent का तोहफा। Child इसे बदले नहीं। सिर्फ पढ़े।

State = component की अपनी कॉपी। इसे बदल सकता है। बदलने पर वही component दोबारा बनता है।

Parent को value कंट्रोल करनी हो (जैसे फॉर्म parent भेजे) तो props।
सिर्फ इसी component को पड़ी हो (मेनू खुला है?) तो state।
      `,
    },
    words: [
      { term: "Props", en: "Short for properties. Inputs from parent to child.", hi: "Properties का छोटा रूप। Parent से child को दिए inputs।" },
      { term: "Parent / child", en: "Parent renders the child inside it. <Parent><Child /></Parent>.", hi: "Parent अपने अंदर child बनाता है।" },
      { term: "Read-only", en: "You may look at it, you should not overwrite it.", hi: "देख सकते हो, ऊपर से मिटाकर मत लिखो।" },
      { term: "Re-render", en: "Draw the UI again.", hi: "UI दोबारा बनाना।" },
      { term: "Thumb rule", en: "A simple guide, not a law.", hi: "सरल सलाह, कड़ा कानून नहीं।" },
    ],
  },

  controlledUncontrolled: {
    title: { en: "Controlled vs Uncontrolled components", hi: "नियंत्रित बनाम अनियंत्रित कंपोनेंट" },
    definition: {
      en: `
In simple words, for an input box:

Controlled: React state is the boss. value={text} and onChange updates text. One truth.

Uncontrolled: the browser (DOM) keeps the letters. You read them later with a ref, like inputRef.current.value.

Beginners should start with controlled inputs. Then checks like “is the button disabled?” stay in sync with the text.
      `,
      hi: `
सरल भाषा, एक इनपुट बॉक्स के लिए:

Controlled: React state बॉस है। value={text} और onChange से text बदलती है। एक ही सच।

Uncontrolled: अक्षर browser (DOM) रखता है। बाद में ref से पढ़ते हो, जैसे inputRef.current.value।

शुरुआत controlled से करो। फिर “बटन बंद है?” जैसा चेक टेक्स्ट के साथ मेल खाता रहेगा।
      `,
    },
    words: [
      { term: "Controlled", en: "React state drives the input value.", hi: "इनपुट की value React state चलाती है।" },
      { term: "Uncontrolled", en: "The DOM keeps the value; React does not store every keypress.", hi: "Value DOM रखता है; React हर अक्षर store नहीं करता।" },
      { term: "onChange", en: "Event when the user types or changes the field.", hi: "जब यूज़र टाइप करे या फील्ड बदले।" },
      { term: "Source of truth", en: "The one place that has the real current value.", hi: "असली मौजूदा value जहाँ रखी है, वह एक जगह।" },
      { term: "Ref", en: "A pointer to the real input element.", hi: "असली input element की ओर इशारा।" },
      { term: "Validation", en: "Checking if the input is allowed (email format, empty, etc.).", hi: "इनपुट सही है या नहीं जाँचना (email, खाली, आदि)।" },
    ],
  },

  whatAreHooks: {
    title: { en: "What are React Hooks?", hi: "रिएक्ट हुक्स क्या हैं?" },
    definition: {
      en: `
In simple words: Hooks are functions that add superpowers to function components.

Without hooks, a function component was mostly “draw this HTML”. With hooks it can remember data (useState), do extra work (useEffect), share data (useContext), and more.

Names start with use. You can write your own custom hook to reuse logic.

Before hooks, people used class components with this.state. New code uses functions + hooks.
      `,
      hi: `
सरल भाषा: Hooks ऐसे functions हैं जो function components को अतिरिक्त ताकत देते हैं।

Hooks बिना function component ज्यादातर “यह HTML बनाओ” था। Hooks से data याद (useState), extra काम (useEffect), data बाँटना (useContext) आदि हो जाता है।

नाम use से शुरू। अपना custom hook भी लिख सकते हो, logic दोहराने के लिए।

पहले class components और this.state चलते थे। नया code functions + hooks है।
      `,
    },
    words: [
      { term: "Hook", en: "A use... function from React (or your own) called inside a component.", hi: "Component के अंदर बुलाया गया use... function।" },
      { term: "Side effect", en: "Work besides drawing, like fetch.", hi: "बनाने के अलावा काम, जैसे data लाना।" },
      { term: "Custom hook", en: "Your function named useSomething that calls other hooks.", hi: "useSomething नाम का आपका function जो दूसरे hooks चलाए।" },
      { term: "Class component", en: "Old style: class X extends React.Component.", hi: "पुराना तरीका: class X extends React.Component।" },
      { term: "Lifecycle", en: "Moments like appear, update, disappear. Hooks cover these with useEffect.", hi: "दिखना, अपडेट, हटना। Hooks इन्हें useEffect से कवर करते हैं।" },
    ],
  },

  rulesOfHooks: {
    title: { en: "What are the Rules of Hooks?", hi: "हुक्स के नियम क्या हैं?" },
    definition: {
      en: `
In simple words, two rules:

1. Call hooks at the top of the component, in the same order every time. Not inside if, for, or a nested function.

2. Call them only from React function components or from custom hooks. Not from a normal helper like calculateTax().

Why: React matches hook #1, #2, #3 to the same memory each draw. If the order changes, the wrong data can stick to the wrong hook.
      `,
      hi: `
सरल भाषा, दो नियम:

1. Hooks component के ऊपर, हर बार उसी क्रम में। if, for, या अंदर के function में नहीं।

2. सिर्फ React function components या custom hooks से। साधारण helper जैसे calculateTax() से नहीं।

क्यों: React हर draw पर hook #1, #2, #3 को उसी memory से जोड़ता है। क्रम बदला तो गलत data गलत hook से चिपक सकता है।
      `,
    },
    words: [
      { term: "Top level", en: "Directly in the component body, not nested in if/loops.", hi: "सीधे component के अंदर, if/loop के अंदर नहीं।" },
      { term: "Condition", en: "if / else. Do not wrap hook calls in if.", hi: "if / else। Hook को if में मत लपेटो।" },
      { term: "Loop", en: "for / while / map that might skip a hook call.", hi: "for / while / map जिससे hook छूट सकता है।" },
      { term: "Call order", en: "The sequence: first useState, then useEffect, and so on.", hi: "क्रम: पहले useState, फिर useEffect, वैसे ही।" },
    ],
  },

  useEffectVsLayout: {
    title: { en: "useEffect vs useLayoutEffect", hi: "useEffect और useLayoutEffect में अंतर" },
    definition: {
      en: `
In simple words:

The browser paints when it shows pixels to the user.

useEffect runs after paint. Good for fetch, timers, logs. The user can already see the page.

useLayoutEffect runs after React updates the DOM but before paint. Use it if you must measure or move something so the user never sees a jump (tooltip position).

Start with useEffect. Use useLayoutEffect only if you see a flicker.
      `,
      hi: `
सरल भाषा:

Paint मतलब यूज़र को पिक्सल दिखाना।

useEffect paint के बाद चलता है। Fetch, timer, log के लिए ठीक। पेज पहले दिख चुका होता है।

useLayoutEffect DOM अपडेट के बाद, paint से पहले। जब नापना या सरकाना हो ताकि यूज़र उछाल न देखे (tooltip जगह)।

शुरू useEffect से। Flicker दिखे तभी useLayoutEffect।
      `,
    },
    words: [
      { term: "Paint", en: "The browser drawing pixels on the screen.", hi: "Browser का स्क्रीन पर पिक्सल बनाना।" },
      { term: "Flicker", en: "A quick wrong position, then it jumps to the right place.", hi: "गलत जगह एक झलक, फिर सही जगह कूदना।" },
      { term: "Measure", en: "Read size/position from the DOM (getBoundingClientRect).", hi: "DOM से नाप/जगह पढ़ना।" },
      { term: "Subscription", en: "Keep listening until you unsubscribe.", hi: "सुनते रहना जब तक बंद न करो।" },
      { term: "Default", en: "The first choice unless you have a special problem.", hi: "पहली पसंद, जब तक खास समस्या न हो।" },
    ],
  },

  memoVsCallbackVsMemo: {
    title: { en: "React.memo vs useMemo vs useCallback", hi: "React.memo, useMemo और useCallback" },
    definition: {
      en: `
In simple words, three different “remember” tools:

React.memo → remembers a whole component. If props look the same, skip drawing the child.

useMemo → remembers a calculated value (a number, a filtered list).

useCallback → remembers a function.

They are not the same. Do not wrap everything. First make it work, then speed up only the slow parts.
      `,
      hi: `
सरल भाषा, तीन अलग “याद रखने” के औज़ार:

React.memo → पूरा component याद। Props वही दिखें तो बच्चे को दोबारा मत बनाओ।

useMemo → हिसाब की value याद (संख्या, छनी list)।

useCallback → function याद।

एक जैसे नहीं। हर चीज़ मत लपेटो। पहले काम चलाओ, फिर सिर्फ धीमे हिस्से तेज़ करो।
      `,
    },
    words: [
      { term: "Shallow-equal", en: "Compare top level only: same number/string, same object reference. Not a deep look inside objects.", hi: "ऊपरी तुलना: वही संख्या/टेक्स्ट, वही object। अंदर गहराई से नहीं।" },
      { term: "Wrap", en: "Put around something: memo(MyComponent).", hi: "चारों ओर लगाना: memo(MyComponent)।" },
      { term: "Profile", en: "Measure what is actually slow, do not guess.", hi: "मापकर देखो क्या धीमा है, अनुमान मत लगाओ।" },
      { term: "Hot path", en: "Code that runs very often.", hi: "वो code जो बहुत बार चलता है।" },
    ],
  },

  contextApi: {
    title: { en: "What is the Context API?", hi: "कॉन्टेक्स्ट एपीआई क्या है?" },
    definition: {
      en: `
In simple words: Context is React’s built-in way to share data down the tree without handing props at every step.

createContext makes the channel. Provider puts the value. useContext reads it.

Good for theme, language, current user — things that do not change every second.

If the value changes often, every component that uses that context may redraw. Then split context or use Redux.
      `,
      hi: `
सरल भाषा: Context React का अपना तरीका है पेड़ में नीचे data बाँटने का, बिना हर कदम पर props दिए।

createContext चैनल बनाता है। Provider value रखता है। useContext पढ़ता है।

Theme, भाषा, यूज़र — जो हर सेकंड न बदले, उनके लिए अच्छा।

Value बार-बार बदले तो जितने components इसे पढ़ें, सब बन सकते हैं। तब context बाँटो या Redux सोचो।
      `,
    },
    words: [
      { term: "API", en: "A set of functions you can call (createContext, useContext).", hi: "Functions का सेट जिन्हें चला सकते हो।" },
      { term: "Tree", en: "Components nested inside components.", hi: "Components के अंदर components।" },
      { term: "Consumer", en: "A component that reads context.", hi: "जो component context पढ़े।" },
      { term: "State library", en: "Redux, Zustand, etc. Extra tools for lots of changing data.", hi: "Redux, Zustand आदि। बहुत बदलते data के औज़ार।" },
    ],
  },

  keys: {
    title: { en: "Why do lists need keys?", hi: "लिस्ट में कीज़ क्यों चाहिए?" },
    definition: {
      en: `
In simple words: when you map a list to <li> items, React needs a name tag on each item: key.

The key tells React which item is which after add/remove/reorder. Then it can reuse the right component and its state (like an open input).

Use a stable id from your data (user.id). Do not use the array index if the list can shuffle — React may mix up items.

Keys must be unique among brothers/sisters in the same list, not unique in the whole world.
      `,
      hi: `
सरल भाषा: list को <li> बनाने पर हर item पर नाम की पट्टी चाहिए: key।

Key से React जानता है जोड़/हटा/फेरने के बाद कौन सा item कौन सा है। सही component और उसकी state (खुला इनपुट) दोबारा जुड़ सकती है।

Data की स्थिर id लो (user.id)। List फेर-बदल हो तो array का नंबर (index) मत दो — item मिल सकते हैं।

Key एक list के भाई-बहनों में अलग हो। पूरी दुनिया में एक जैसी होना ज़रूरी नहीं।
      `,
    },
    words: [
      { term: "key", en: "A string/number prop React uses to track list items.", hi: "List items ट्रैक करने वाली string/number prop।" },
      { term: "Stable id", en: "An id that does not change for that item, like a database id.", hi: "उस item की id जो न बदले, जैसे database id।" },
      { term: "Index", en: "0, 1, 2 position in the array. Bad key if order changes.", hi: "Array में 0, 1, 2। क्रम बदले तो खराब key।" },
      { term: "Siblings", en: "Items next to each other under the same parent.", hi: "एक parent के नीचे पास-पास items।" },
    ],
  },

  liftingState: {
    title: { en: "What is lifting state up?", hi: "स्टेट ऊपर उठाना क्या है?" },
    definition: {
      en: `
In simple words: two children need the same data. Put that data in the closest parent they share.

The parent keeps state. It sends the value down as props. It can also send a function so a child can ask for a change.

Then both children see the same truth. Example: a temperature converter with Celsius and Fahrenheit boxes.
      `,
      hi: `
सरल भाषा: दो बच्चों को एक ही data चाहिए। उसे उनके सबसे करीबी साझे parent में रखो।

Parent state रखता है। Value props से नीचे भेजता है। एक function भी भेज सकता है ताकि बच्चा बदलाव माँगे।

तब दोनों बच्चों को एक ही सच दिखे। उदाहरण: Celsius और Fahrenheit वाले तापमान बॉक्स।
      `,
    },
    words: [
      { term: "Lift up", en: "Move state to a parent higher in the tree.", hi: "State को पेड़ में ऊपर वाले parent के पास ले जाना।" },
      { term: "Common parent", en: "The nearest component that contains both children.", hi: "सबसे नज़दीकी component जिसमें दोनों बच्चे हों।" },
      { term: "Setter", en: "A function like setValue that changes state.", hi: "setValue जैसा function जो state बदले।" },
      { term: "Sibling", en: "Two children of the same parent.", hi: "एक parent के दो बच्चे।" },
      { term: "Sync", en: "They show matching values at the same time.", hi: "एक ही समय मेल खाती values दिखाना।" },
    ],
  },

  errorBoundaries: {
    title: { en: "What are Error Boundaries?", hi: "एरर बाउंड्री क्या हैं?" },
    definition: {
      en: `
In simple words: if a child crashes while drawing, the whole app should not go white.

An error boundary is a special component that catches that crash, can log it, and shows a backup screen (“Something went wrong”).

It catches errors in render and in class lifecycle. It does NOT catch: click handlers, setTimeout, fetch, or errors inside the boundary itself.

In practice people still use a small class component (or a library) for this, even in hook apps.
      `,
      hi: `
सरल भाषा: बच्चा बनाते समय क्रैश हो तो पूरा ऐप सफेद न हो जाए।

Error boundary एक खास component है जो वह क्रैश पकड़ता है, log कर सकता है, और backup स्क्रीन दिखाता है (“कुछ गलत हो गया”)।

Render और class lifecycle की गलतियाँ पकड़ता है। नहीं पकड़ता: क्लिक, setTimeout, fetch, या खुद boundary की गलती।

Hooks वाले ऐप में भी इसके लिए छोटी class (या library) चलती है।
      `,
    },
    words: [
      { term: "Catch", en: "Stop the error from bubbling up and crashing everything.", hi: "Error को ऊपर जाकर सब तोड़ने से रोकना।" },
      { term: "Log", en: "Write the error to the console or a tracking service.", hi: "Error को console या tracking में लिखना।" },
      { term: "Fallback UI", en: "Backup screen instead of a crash.", hi: "क्रैश की जगह backup स्क्रीन।" },
      { term: "Event handler", en: "onClick etc. Errors there need try/catch, not error boundaries.", hi: "onClick आदि। वहाँ try/catch चाहिए, error boundary नहीं।" },
      { term: "Async", en: "Later work: promises, fetch. Not caught by error boundaries.", hi: "बाद वाला काम: promises, fetch। Error boundary नहीं पकड़ती।" },
    ],
  },

  classVsFunction: {
    title: { en: "Class vs function components", hi: "क्लास और फंक्शन कंपोनेंट" },
    definition: {
      en: `
In simple words:

Class component: an ES6 class with render(), this.state, this.props, and methods like componentDidMount.

Function component: a function that returns JSX. Hooks give it state and extra work.

Today, write new UI as functions + hooks. Learn classes to read old code and to write error boundaries.
      `,
      hi: `
सरल भाषा:

Class component: ES6 class, render(), this.state, this.props, और componentDidMount जैसे methods।

Function component: function जो JSX लौटाए। Hooks से state और extra काम।

आज नया UI functions + hooks में लिखो। पुराना code पढ़ने और error boundaries के लिए classes सीखो।
      `,
    },
    words: [
      { term: "this", en: "Inside a class, this is the current instance. Easy to get wrong in callbacks.", hi: "Class में this मौजूदा instance है। Callbacks में गलती आसान है।" },
      { term: "Boilerplate", en: "Extra ceremony code that does not add meaning.", hi: "अतिरिक्त रस्मी code जिसका मतलब कम हो।" },
      { term: "Concurrent features", en: "Newer React abilities like startTransition, Suspense.", hi: "नए React फीचर जैसे startTransition, Suspense।" },
      { term: "Recommended", en: "What the React team suggests for new code.", hi: "नए code के लिए React टीम की सलाह।" },
    ],
  },

  reactFiber: {
    title: { en: "What is React Fiber?", hi: "रिएक्ट फाइबर क्या है?" },
    definition: {
      en: `
In simple words: Fiber is the engine inside React (since version 16). You do not import it.

Old React tried to finish the whole tree in one go. Fiber splits work into small units. React can pause, continue, or throw work away if something more important happens (a click).

That is why React can stay smooth and later support Concurrent rendering. You still just write components. Fiber is the inner worker.
      `,
      hi: `
सरल भाषा: Fiber React के अंदर का इंजन है (वर्जन 16 से)। इसे import नहीं करते।

पुराना React पूरा पेड़ एक साँस में खत्म करने की कोशिश करता। Fiber काम छोटे टुकड़ों में बाँटता है। ज़रूरी काम (क्लिक) आए तो रुक/जारी/फेंक सकता है।

इससे स्क्रीन चिकनी रह सकती है और Concurrent rendering संभव है। तुम components लिखते रहो। Fiber अंदर का मज़दूर है।
      `,
    },
    words: [
      { term: "Engine", en: "The inner system that decides how to update the UI.", hi: "अंदरूनी सिस्टम जो UI अपडेट तय करे।" },
      { term: "Pause / reuse / prioritize", en: "Stop work, reuse old work, do important work first.", hi: "काम रोकना, पुराना काम फिर इस्तेमाल, ज़रूरी काम पहले।" },
      { term: "Incremental rendering", en: "Update the UI in small steps, not one giant freeze.", hi: "UI छोटे कदमों में अपडेट, एक बड़ी फ्रीज नहीं।" },
      { term: "Concurrent rendering", en: "React may prepare a new screen in the background.", hi: "React नई स्क्रीन पीछे तैयार कर सकता है।" },
      { term: "Suspense", en: "Show a fallback while waiting for code or data.", hi: "कोड/data का इंतज़ार करते fallback दिखाना।" },
      { term: "Implementation detail", en: "Inner how, not something you call in your app code.", hi: "अंदर कैसे, ऐप code में नहीं बुलाते।" },
    ],
  },

  whatIsRedux: {
    title: { en: "What is Redux and why use it?", hi: "रिडक्स क्या है और क्यों इस्तेमाल करें?" },
    definition: {
      en: `
In simple words: Redux is a big shared notebook for the whole app.

Any screen can read it. To change it, you send a small message (action). A reducer (rule function) writes the next notebook page. Then screens that care redraw.

Use it when many pages share data that changes often, or you want DevTools to see every change.

Today we use Redux Toolkit so we write less boring setup code.
      `,
      hi: `
सरल भाषा: Redux पूरे ऐप की बड़ी साझी कॉपी है।

कोई भी स्क्रीन पढ़ सकती है। बदलने के लिए छोटा संदेश (action) भेजो। Reducer (नियम वाला function) अगला पन्ना लिखता है। जिन्हें फर्क पड़े वे स्क्रीन फिर बनती हैं।

जब कई पेज अक्सर बदलता साझा data रखें, या हर बदलाव DevTools में देखना हो।

आज Redux Toolkit, ताकि उबाऊ setup कम लिखना पड़े।
      `,
    },
    words: [
      { term: "Predictable", en: "Same action + same old data = same new data. Easy to test.", hi: "वही action + वही पुराना data = वही नया data। टेस्ट आसान।" },
      { term: "Global store", en: "One place that holds app-wide data.", hi: "पूरे ऐप का data एक जगह।" },
      { term: "Dispatch", en: "Send an action into the store.", hi: "Store में action भेजना।" },
      { term: "Boilerplate", en: "Long repeated setup. Toolkit cuts this.", hi: "लंबा दोहरा setup। Toolkit काटता है।" },
      { term: "DevTools", en: "A browser extension that shows Redux actions and state.", hi: "Browser एक्सटेंशन जो Redux actions और state दिखाए।" },
    ],
  },

  reduxFlow: {
    title: { en: "Explain the Redux data flow", hi: "रिडक्स का डेटा फ्लो समझाएँ" },
    definition: {
      en: `
In simple words, one circle:

1. User clicks a button.
2. Component calls dispatch(action).
3. Optional middleware runs (log, or async fetch).
4. Reducer(s) take old state + action and return new state. They should not edit the old object.
5. Store saves the new state.
6. Components using useSelector redraw if their chosen piece changed.

RTK Immer lets you write state.count += 1, but underneath it still makes a new copy.
      `,
      hi: `
सरल भाषा, एक घेरा:

1. यूज़र बटन दबाता है।
2. Component dispatch(action) चलाता है।
3. चाहो तो middleware (log, या async fetch)।
4. Reducer पुरानी state + action से नई state देते हैं। पुराना object मत संपादित करो।
5. Store नई state सहेजता है।
6. useSelector वाले components, अगर उनका टुकड़ा बदला, दोबारा बनते हैं।

RTK Immer में state.count += 1 लिख सकते हो, पर अंदर नई कॉपी ही बनती है।
      `,
    },
    words: [
      { term: "Flow", en: "The path data takes, step by step.", hi: "Data का रास्ता, कदम-दर-कदम।" },
      { term: "Middleware", en: "Extra functions between dispatch and reducer.", hi: "dispatch और reducer के बीच के extra functions।" },
      { term: "Slice", en: "One chapter of the notebook, like counter or todos.", hi: "कॉपी का एक अध्याय, जैसे counter या todos।" },
      { term: "Mutate", en: "Change the old object. Reducers must not (except Immer’s fake mutate).", hi: "पुराना object बदलना। Reducer न करें (Immer का नकली mutate छोड़कर)।" },
      { term: "Immutable", en: "New object instead of editing the old one.", hi: "पुराना एडिट नहीं, नया object।" },
    ],
  },

  reduxThunkInterview: {
    title: { en: "How does Redux handle async (thunk)?", hi: "रिडक्स असिंक (थंक) कैसे संभालता है?" },
    definition: {
      en: `
In simple words: a reducer must be quick and pure. It cannot wait for the internet.

A thunk is a function you dispatch. Middleware runs it and gives it dispatch and getState. Inside, you fetch, then dispatch a normal action with the result.

createAsyncThunk makes three stages for you:
- pending = loading
- fulfilled = success, save data
- rejected = error

You handle those stages in extraReducers.
      `,
      hi: `
सरल भाषा: Reducer तेज़ और साफ़ होना चाहिए। Internet का इंतज़ार नहीं कर सकता।

Thunk एक function है जिसे dispatch करते हो। Middleware उसे चलाता है और dispatch व getState देता है। अंदर fetch करो, फिर नतीजे के साथ सामान्य action भेजो।

createAsyncThunk तीन चरण बनाता है:
- pending = लोड हो रहा
- fulfilled = सफलता, data सेव
- rejected = गलती

इन्हें extraReducers में संभालो।
      `,
    },
    words: [
      { term: "Async", en: "Takes time: network, wait. Not instant.", hi: "समय लगता है: नेटवर्क, इंतज़ार। तुरंत नहीं।" },
      { term: "Fetch", en: "Request data from a URL.", hi: "URL से data माँगना।" },
      { term: "Thunk", en: "A function acting as a delayed/smart action.", hi: "Function जो देर से/स्मार्ट action जैसा काम करे।" },
      { term: "getState", en: "Read the store right now inside the thunk.", hi: "Thunk के अंदर अभी का store पढ़ना।" },
      { term: "pending / fulfilled / rejected", en: "Started / success / failed.", hi: "शुरू / सफल / असफल।" },
      { term: "extraReducers", en: "Slice section for actions created outside the slice (like thunks).", hi: "Slice का हिस्सा बाहर बने actions के लिए (जैसे thunks)।" },
    ],
  },
};
