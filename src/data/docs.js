import { interview } from "./interview";
import { redux } from "./redux";

export const hooks = {
  useState: {
    title: {
      en: "useState – State Hook",
      hi: "useState – स्टेट हुक",
    },
    definition: {
      en: `
In simple words: useState is how a function component remembers a value after the screen updates.

Think of it like a box. The first thing you get is what is inside the box (the value). The second thing is a function that puts a new thing in the box.

When you put something new in the box, React draws the screen again so the user sees the new value.

You can store a number, text, true/false, or even a list/object. If you store a list or object, make a new copy. Do not change the old one in place.
      `,
      hi: `
सरल भाषा: useState function component को एक value याद रखने देता है, स्क्रीन बदलने के बाद भी।

इसे एक डिब्बा समझो। पहला चीज़ डिब्बे के अंदर की value है। दूसरी चीज़ एक function है जो डिब्बे में नई value रखता है।

नई value रखने पर React स्क्रीन दोबारा बनाता है, ताकि यूज़र नई value देखे।

Number, text, true/false, या list/object रख सकते हो। List/object हो तो नई कॉपी बनाओ। पुरानी चीज़ को उसी जगह बदलना मत (mutate मत करो)।
      `,
    },
    words: [
      { term: "Hook", en: "A special React function whose name starts with use. Example: useState.", hi: "React का खास function जिसका नाम use से शुरू होता है। उदाहरण: useState।" },
      { term: "Component", en: "A small piece of UI, like a button screen or a card. You write it as a function.", hi: "UI का छोटा हिस्सा, जैसे बटन या कार्ड। इसे function की तरह लिखते हैं।" },
      { term: "Function component", en: "A component written as a JavaScript function (not a class).", hi: "Component जो JavaScript function है, class नहीं।" },
      { term: "State", en: "Data that belongs to this component and can change. When it changes, the screen updates.", hi: "इस component का अपना data जो बदल सकता है। बदलने पर स्क्रीन अपडेट होती है।" },
      { term: "Local state", en: "State that lives only in this one component, not in the whole app.", hi: "State जो सिर्फ इसी एक component में है, पूरे app में नहीं।" },
      { term: "Return", en: "What a function gives back to you.", hi: "Function आपको जो चीज़ वापस देता है।" },
      { term: "Update function (setState)", en: "The second value from useState. You call it to change state. Example: setCount(1).", hi: "useState से मिलने वाला दूसरा function। State बदलने के लिए इसे चलाते हैं। उदाहरण: setCount(1)।" },
      { term: "Re-render", en: "React draws the component again after state changes.", hi: "State बदलने के बाद React component को दोबारा स्क्रीन पर बनाता है।" },
      { term: "Mutate", en: "Change an object/array in place (bad for React state). Make a new copy instead.", hi: "पुराने object/array को उसी जगह बदलना (React state में गलत)। नई कॉपी बनाओ।" },
    ],
    examples: [
      {
        label: "✅ Example 1: Simple Counter",
        code: `
const [count, setCount] = useState(0);

<p>Clicked {count} times</p>
<button onClick={() => setCount((prev) => prev + 1)}>Click</button>
        `,
      },
      {
        label: "✅ Example 2: useState with Arrays",
        code: `
const [items, setItems] = useState([]);

const addItem = (item) => {
  setItems((prevItems) => [...prevItems, item]);
};
        `,
      },
      {
        label: "✅ Example 3: useState with Booleans (Toggles)",
        code: `
const [isOpen, setIsOpen] = useState(false);

<button onClick={() => setIsOpen((prev) => !prev)}>
  {isOpen ? 'Close' : 'Open'}
</button>
        `,
      },
      {
        label: "✅ Example 4: Form with Object State",
        code: `
const [form, setForm] = useState({ name: '', age: '', last_name: '' });

const handleChange = (e) => {
  const { name, value } = e.target;
  setForm((prevForm) => ({ ...prevForm, [name]: value }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form Submitted:', form);
};

<form onSubmit={handleSubmit}>
  <input name="name" value={form.name} onChange={handleChange}/>
  <input name="last_name" value={form.last_name} onChange={handleChange}/>
  <input name="age" value={form.age} onChange={handleChange}/>
  <button type="submit">Submit</button>
</form>
        `,
      },
    ],
  },

  useEffect: {
    title: {
      en: "useEffect – Side Effect Hook",
      hi: "useEffect – साइड इफेक्ट हुक",
    },
    definition: {
      en: `
In simple words: useEffect is for extra work that is not just drawing the screen.

Examples of extra work: load data from the internet, start a timer, or listen to something.

It runs after React has updated the page (the DOM).

The second argument is a list in [ ]. That list tells React when to run again:
- no list → run after every draw
- empty list [] → run only once when the component first appears
- [count] → run when count changes

If you start a timer or a listener, return a cleanup function to stop it when the component goes away.
      `,
      hi: `
सरल भाषा: useEffect उस extra काम के लिए है जो सिर्फ स्क्रीन बनाना नहीं है।

उदाहरण: internet से data लाना, timer चलाना, या किसी चीज़ को सुनना।

यह तब चलता है जब React पेज (DOM) अपडेट कर चुका हो।

दूसरा argument [ ] वाली list है। यह बताती है कब फिर चले:
- list न दो → हर बार स्क्रीन बनने के बाद
- खाली [] → component पहली बार दिखे तभी एक बार
- [count] → जब count बदले

Timer या listener शुरू किया हो तो एक cleanup function return करो, ताकि component हटने पर वह रुक जाए।
      `,
    },
    words: [
      { term: "Side effect", en: "Work besides drawing UI: fetch, timer, logging, event listener.", hi: "UI बनाने के अलावा काम: data लाना, timer, log, listener।" },
      { term: "DOM", en: "The real page in the browser. HTML elements you can see.", hi: "Browser में असली पेज। वो HTML elements जो दिखते हैं।" },
      { term: "Fetch / API", en: "Ask a server for data over the internet.", hi: "Internet पर server से data माँगना।" },
      { term: "Timer / interval", en: "Code that runs again and again after some time (like every 1 second).", hi: "कुछ समय बाद बार-बार चलने वाला code (जैसे हर 1 सेकंड)।" },
      { term: "Subscription / listener", en: "You start listening to something (websocket, scroll). Later you must stop listening.", hi: "किसी चीज़ को सुनना शुरू करना। बाद में सुनना बंद भी करना पड़ता है।" },
      { term: "Dependency array", en: "The [values] list. React re-runs the effect when those values change.", hi: "[values] वाली list। ये values बदलें तो effect फिर चलता है।" },
      { term: "Mount", en: "The component appears on the screen for the first time.", hi: "Component स्क्रीन पर पहली बार आता है।" },
      { term: "Unmount", en: "The component is removed from the screen.", hi: "Component स्क्रीन से हट जाता है।" },
      { term: "Cleanup", en: "The function you return from useEffect to stop timers/listeners.", hi: "useEffect से return किया function, जो timer/listener बंद करता है।" },
    ],
    examples: [
      {
        label: "✅ Example 1: useEffect without dependencies (runs after every render)",
        code: `
useEffect(() => {
  console.log('Component re‑rendered');
});
        `,
      },
      {
        label: "✅ Example 2: useEffect with empty dependency array (runs once on mount)",
        code: `
useEffect(() => {
  console.log('Component mounted');

  return () => {
    console.log('Component unmounted');
  };
}, []);
        `,
      },
      {
        label: "✅ Example 3: useEffect with specific dependencies",
        code: `
const [count, setCount] = useState(0);

useEffect(() => {
  console.log('Count changed:', count);
}, [count]);
        `,
      },
      {
        label: "✅ Example 4: useEffect with async data fetching",
        code: `
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('/api/data');
    const data = await response.json();
    console.log(data);
  };

  fetchData();
}, []);
        `,
      },
      {
        label: "✅ Example 5: useEffect for setting up and cleaning intervals",
        code: `
const [seconds, setSeconds] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setSeconds((s) => s + 1);
  }, 1000);

  return () => clearInterval(interval);
}, []);
        `,
      },
    ],
  },

  useContext: {
    title: {
      en: "useContext – Context Hook",
      hi: "useContext – कॉन्टेक्स्ट हुक",
    },
    definition: {
      en: `
In simple words: useContext lets a child read shared data without passing it through every parent.

How it works in 3 steps:
1. createContext() makes a "box" for shared data (theme, login user, language).
2. Provider wraps the app and puts a value in that box.
3. Any child calls useContext and reads the value.

This avoids prop drilling: you do not pass theme={theme} through 10 components that do not need it.

If there is no Provider above, React uses the default value you gave to createContext.
      `,
      hi: `
सरल भाषा: useContext से बच्चा (child) shared data पढ़ सकता है, बिना हर parent से props भेजे।

3 कदम:
1. createContext() shared data का "डिब्बा" बनाता है (theme, login user, भाषा)।
2. Provider app को wrap करके उस डिब्बे में value रखता है।
3. कोई भी child useContext से वह value पढ़ता है।

इससे prop drilling बचती है: 10 components से theme={theme} नहीं घुमाना पड़ता जिन्हें theme की ज़रूरत नहीं।

ऊपर Provider न हो तो createContext में दी default value मिलती है।
      `,
    },
    words: [
      { term: "Context", en: "A way to share data with many components without passing props at every level.", hi: "कई components के साथ data बाँटने का तरीका, बिना हर स्तर पर props दिए।" },
      { term: "createContext", en: "React function that creates the shared box.", hi: "React function जो shared डिब्बा बनाता है।" },
      { term: "Provider", en: "A wrapper component that puts the current value into context.", hi: "Wrapper जो context में मौजूदा value रखता है।" },
      { term: "Consumer / useContext", en: "The child that reads the context value.", hi: "वह child जो context की value पढ़ता है।" },
      { term: "Prop drilling", en: "Passing the same prop through many layers that do not use it.", hi: "एक ही prop को कई layers से भेजना, भले उन layers को उसकी ज़रूरत न हो।" },
      { term: "Nested", en: "Components inside other components, like boxes inside boxes.", hi: "Components के अंदर और components, डिब्बे के अंदर डिब्बे।" },
      { term: "Default value", en: "Backup value if no Provider is above the component.", hi: "ऊपर Provider न हो तो मिलने वाली backup value।" },
      { term: "Theme / auth / locale", en: "Common shared data: dark/light, logged-in user, language.", hi: "आम shared data: डार्क/लाइट, लॉगिन यूज़र, भाषा।" },
    ],
    examples: [
      {
        label: "✅ Example 1: ThemeProvider.js (Basic Theme Context with Default Value)",
        code: `
import React, { createContext, useContext } from 'react';

const ThemeContext = createContext('light'); // 'light' is the default value

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedComponent />
    </ThemeContext.Provider>
  );
}

import { ThemeContext } from './Parent_file_name';

function ThemedComponent() {
  const theme = useContext(ThemeContext);
  return <div>Current theme: {theme}</div>;
}
        `,
      },
    ],
  },

  useReducer: {
    title: {
      en: "useReducer – Reducer Hook",
      hi: "useReducer – रिड्यूसर हुक",
    },
    definition: {
      en: `
In simple words: useReducer is another way to keep state, useful when many updates follow rules.

You write a reducer: a function that gets the old state and a message (action), then returns the new state.

You get [state, dispatch].
- state = current data
- dispatch = send a message like { type: 'increment' }

The reducer looks at type and decides the next state. This is like a small machine with buttons (actions).
      `,
      hi: `
सरल भाषा: useReducer भी state रखने का तरीका है। जब कई updates के नियम हों, तब आसान लगता है।

आप एक reducer लिखते हो: function जो पुरानी state और एक संदेश (action) लेता है, फिर नई state देता है।

आपको मिलता है [state, dispatch]।
- state = अभी का data
- dispatch = संदेश भेजो जैसे { type: 'increment' }

Reducer type देखकर अगली state तय करता है। छोटे मशीन की तरह, जिसके बटन actions हैं।
      `,
    },
    words: [
      { term: "Reducer", en: "A function: (oldState, action) => newState. It must not change oldState in place.", hi: "Function: (पुरानी state, action) => नई state। पुरानी state को उसी जगह मत बदलो।" },
      { term: "Action", en: "A message object, usually { type: 'what happened', payload?: extra data }.", hi: "संदेश वाला object, अक्सर { type: 'क्या हुआ', payload?: extra data }।" },
      { term: "type", en: "A name for the action, like 'increment' or 'reset'.", hi: "Action का नाम, जैसे 'increment' या 'reset'।" },
      { term: "dispatch", en: "The function you call to send an action to the reducer.", hi: "वो function जिससे action reducer तक भेजते हो।" },
      { term: "Initial state", en: "The starting value before any action.", hi: "किसी action से पहले की शुरूआती value।" },
      { term: "Alternative", en: "Another choice instead of useState, not a replacement for everything.", hi: "useState की जगह दूसरा विकल्प, हर चीज़ का replacement नहीं।" },
    ],
    examples: [
      {
        label: "✅ Example 1: Simple Counter with useReducer",
        code: `
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}
        `,
      },
      {
        label: "✅ Example 2: useReducer for Form State",
        code: `
const initialForm = { name: '', age: '' };

function formReducer(state, action) {
  switch (action.type) {
    case 'change':
      return { ...state, [action.field]: action.value };
    case 'reset':
      return initialForm;
    default:
      return state;
  }
}

function MyForm() {
  const [formState, dispatch] = useReducer(formReducer, initialForm);

  const handleChange = (e) => {
    dispatch({ type: 'change', field: e.target.name, value: e.target.value });
  };

  const handleReset = () => dispatch({ type: 'reset' });

  return (
    <form>
      <input name="name" value={formState.name} onChange={handleChange}/>
      <input name="age" value={formState.age} onChange={handleChange}/>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
}
        `,
      },
    ],
  },

  useRef: {
    title: {
      en: "useRef – Ref Hook",
      hi: "useRef – रेफ हुक",
    },
    definition: {
      en: `
In simple words: useRef is a box that keeps a value, but changing it does NOT redraw the screen.

The box is an object: { current: something }. You read and write .current.

Common uses:
1. Point to a real HTML element (focus an input).
2. Remember a timer id or a previous number without extra re-renders.
      `,
      hi: `
सरल भाषा: useRef एक डिब्बा है जो value रखता है, पर उसे बदलने से स्क्रीन दोबारा नहीं बनती।

डिब्बा एक object है: { current: कुछ }. .current पढ़ो और लिखो।

आम इस्तेमाल:
1. असली HTML element पकड़ना (input पर focus)।
2. Timer id या पिछली संख्या याद रखना, बिना extra re-render के।
      `,
    },
    words: [
      { term: "Ref", en: "Short for reference: a pointer to a value or a DOM node.", hi: "Reference का छोटा रूप: value या DOM node की ओर इशारा।" },
      { term: ".current", en: "The real value inside the ref object. Change this; the screen will not update by itself.", hi: "Ref object के अंदर असली value। इसे बदलो; स्क्रीन खुद नहीं बदलेगी।" },
      { term: "Mutable", en: "You are allowed to change it. State should not be mutated; refs can be.", hi: "इसे बदल सकते हो। State mutate मत करो; ref बदल सकते हो।" },
      { term: "DOM node", en: "One real element on the page, like <input> or <button>.", hi: "पेज पर एक असली element, जैसे <input> या <button>।" },
      { term: "Imperative", en: "Tell the browser to do something now (focus, scroll), instead of only describing UI.", hi: "Browser से अभी कुछ करवाना (focus, scroll), सिर्फ UI बताने के बजाय।" },
      { term: "Lifetime", en: "From when the component appears until it is removed.", hi: "Component दिखने से हटने तक का समय।" },
    ],
    usage: {
      en: `
When to use useRef (simple):

- Focus / scroll / measure an HTML element.
- Store a timer id so you can stop the timer later.
- Remember the previous value of something.

Do NOT use useRef for values that should show on the screen. Use useState for that.
      `,
      hi: `
useRef कब इस्तेमाल करें (सरल):

- HTML element पर focus / scroll / नापना।
- Timer id रखना ताकि बाद में timer बंद कर सको।
- किसी चीज़ की पिछली value याद रखना।

जो value स्क्रीन पर दिखनी चाहिए, उसके लिए useRef मत लो। उसके लिए useState लो।
      `,
    },
    examples: [
      {
        label: "✅ Example 1: Access DOM node",
        code: `
function FocusInput() {
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text"/>
      <button onClick={handleFocus}>Focus the input</button>
    </>
  );
}
        `,
      },
      {
        label: "✅ Example 2: Persisting a value between renders",
        code: `
function Timer() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return <p>Now: {count}, before: {prevCountRef.current}</p>;
}
        `,
      },
    ],
  },

  useMemo: {
    title: {
      en: "useMemo – Memoize Value Hook",
      hi: "useMemo – वैल्यू याद रखने वाला हुक",
    },
    definition: {
      en: `
In simple words: useMemo remembers a calculated answer so React does not calculate it on every draw.

You pass a function that does the hard work, and a [list] of values it depends on.

Only if something in that list changes, React runs the function again. Otherwise it reuses the last answer.

Use it for slow work (big list filter). Do not wrap every small number — that can make code harder, not faster.
      `,
      hi: `
सरल भाषा: useMemo एक हिसाब का जवाब याद रखता है, ताकि हर स्क्रीन बनने पर दोबारा हिसाब न लगे।

आप एक function देते हो जो भारी काम करे, और [list] देते हो कि वह किन values पर निर्भर है।

List की कोई value बदले तभी function फिर चलता है। वरना पिछला जवाब दोबारा इस्तेमाल होता है।

धीमे काम के लिए (बड़ी list filter)। हर छोटी संख्या पर मत लपेटो — code कठिन हो सकता है, तेज़ नहीं।
      `,
    },
    words: [
      { term: "Memoize", en: "Remember the last result to skip extra work.", hi: "पिछला नतीजा याद रखना, ताकि extra काम न हो।" },
      { term: "Expensive calculation", en: "Slow work, like looping a huge list.", hi: "धीमा काम, जैसे बहुत बड़ी list घुमाना।" },
      { term: "Dependencies", en: "Values the calculation needs. If they change, calculate again.", hi: "हिसाब के लिए ज़रूरी values। बदलें तो फिर हिसाब।" },
      { term: "Recompute", en: "Calculate again from the start.", hi: "शुरू से फिर हिसाब लगाना।" },
    ],
    examples: [
      {
        label: "✅ Example 1: Memoizing a computation",
        code: `
const numbers = [1,2,3,4,5];
const sum = useMemo(() => {
  console.log('Computing sum …');
  return numbers.reduce((acc, num) => acc + num, 0);
}, [numbers]);

return <p>Sum: {sum}</p>;
        `,
      },
      {
        label: "✅ Example 2: useMemo with heavy filter",
        code: `
const [search, setSearch] = useState('');
const [items, setItems] = useState([...big list …]);

const filtered = useMemo(() => {
  return items.filter(item => item.includes(search));
}, [items, search]);

return (
  <>
    <input value={search} onChange={e => setSearch(e.target.value)} />
    <ul>{filtered.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
  </>
);
        `,
      },
    ],
  },

  useCallback: {
    title: {
      en: "useCallback – Memoize Function Hook",
      hi: "useCallback – फंक्शन याद रखने वाला हुक",
    },
    definition: {
      en: `
In simple words: useCallback remembers a function so it is the same function unless its [list] changes.

Every time a component draws, a new function is normally created. If you pass that function to a child that uses React.memo, the child may think props changed and draw again.

useCallback keeps the same function in memory when dependencies are the same.

Like useMemo, only use it when you really need the same function identity (often with memoized children).
      `,
      hi: `
सरल भाषा: useCallback एक function याद रखता है। [list] न बदले तो वही function रहता है।

हर बार component बनने पर आमतौर पर नया function बनता है। अगर वह function React.memo वाले बच्चे को दो, तो बच्चा समझ सकता है props बदलीं और दोबारा बने।

Dependencies वही हों तो useCallback वही function memory में रखता है।

useMemo की तरह तभी इस्तेमाल करो जब सच में वही function चाहिए (अक्सर memoized children के साथ)।
      `,
    },
    words: [
      { term: "Callback", en: "A function you pass to someone else to call later (onClick, onChange).", hi: "वो function जो किसी और को देते हो, बाद में चलाने के लिए (onClick, onChange)।" },
      { term: "Function identity", en: "Whether it is the exact same function in memory, not just similar code.", hi: "Memory में वही वाला function है या सिर्फ похоसा code।" },
      { term: "Memoized child", en: "A child wrapped in React.memo so it skips extra draws if props look the same.", hi: "React.memo में लिपटा बच्चा, props वही दिखें तो extra draw skip करता है।" },
      { term: "Optimized", en: "Made faster by skipping extra work.", hi: "Extra काम हटाकर तेज़ बनाना।" },
    ],
    examples: [
      {
        label: "✅ Example 1: Basic useCallback",
        code: `
const [count, setCount] = useState(0);

const increment = useCallback(() => {
  setCount((c) => c + 1);
}, []);

return <button onClick={increment}>Count: {count}</button>;
        `,
      },
      {
        label: "✅ Example 2: useCallback to optimize child component render",
        code: `
const [count, setCount] = useState(0);

const handleClick = useCallback(() => {
  console.log('Clicked: ', count);
}, [count]);

<MyChildComponent onClick={handleClick} />
        `,
      },
    ],
  },

  useDebugValue: {
    title: {
      en: "useDebugValue – Debugging Hook",
      hi: "useDebugValue – डिबग हुक",
    },
    definition: {
      en: `
In simple words: useDebugValue only helps you, the developer. It does not change what users see.

You put it inside a custom hook (your own hook like useFriendStatus). React DevTools then shows a small label, like Online or Offline.

The real app still works the same. It is a name tag for debugging.
      `,
      hi: `
सरल भाषा: useDebugValue सिर्फ developer की मदद करता है। यूज़र को स्क्रीन पर कोई फर्क नहीं पड़ता।

इसे अपने custom hook में रखो (जैसे useFriendStatus)। React DevTools में छोटा label दिखेगा, जैसे Online या Offline।

असली app वैसे ही चलता है। यह debugging के लिए नाम की पट्टी है।
      `,
    },
    words: [
      { term: "Custom hook", en: "Your own function starting with use that uses other hooks inside.", hi: "आपका अपना function जिसका नाम use से शुरू हो और अंदर दूसरे hooks हों।" },
      { term: "DevTools", en: "Browser tools for developers. React DevTools shows components and hooks.", hi: "Developers के browser tools। React DevTools components और hooks दिखाता है।" },
      { term: "Runtime", en: "When the app is actually running for the user.", hi: "जब app यूज़र के लिए सच में चल रहा हो।" },
      { term: "Label", en: "A short name shown in DevTools, not on the website.", hi: "DevTools में छोटा नाम, वेबसाइट पर नहीं।" },
    ],
    examples: [
      {
        label: "✅ Example: Labeling a custom hook with useDebugValue",
        code: `
import { useDebugValue, useState, useEffect } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    setIsOnline(true);
  }, [friendID]);

  useDebugValue(isOnline ? 'Online' : 'Offline');

  return isOnline;
}
        `,
      },
    ],
  },
};

export const docs = {
  interview,
  hooks,
  redux,
};
