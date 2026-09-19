export const redux = {
  whatIsRedux: {
    title: { en: "What is Redux?", hi: "रिडक्स क्या है?" },
    definition: {
      en: `
In simple words: Redux is one shared box of data for the whole React app.

Many screens can read the same box. Nobody edits the box directly. You send a message (action). A rule function (reducer) builds a new box. Then React redraws the screens that use that data.

This avoids passing the same props through many parents (prop drilling).

Today we write Redux with Redux Toolkit (RTK). It is the official, shorter way.
      `,
      hi: `
सरल भाषा: Redux पूरे React ऐप का एक साझा data डिब्बा है।

कई स्क्रीन एक ही डिब्बा पढ़ सकती हैं। कोई सीधे एडिट नहीं करता। संदेश (action) भेजो। नियम वाला function (reducer) नया डिब्बा बनाता है। जो स्क्रीन वह data इस्तेमाल करें, वे फिर बनती हैं।

कई parents से वही props घुमाने (prop drilling) से बचाव।

आज Redux Toolkit (RTK) से लिखते हैं। आधिकारिक, छोटा तरीका।
      `,
    },
    words: [
      { term: "Predictable", en: "You can guess the next data if you know the old data and the action.", hi: "पुराना data और action पता हो तो अगला data अनुमान लग सकता है।" },
      { term: "State container", en: "A box that holds app data (the store).", hi: "ऐप data रखने वाला डिब्बा (store)।" },
      { term: "Global", en: "Available to many components, not just one.", hi: "कई components के लिए, सिर्फ एक के लिए नहीं।" },
      { term: "Prop drilling", en: "Handing the same prop through layers that do not need it.", hi: "वही prop उन layers से भेजना जिन्हें ज़रूरत नहीं।" },
      { term: "Subscriber", en: "A component that listens and updates when store data changes.", hi: "Store बदलने पर अपडेट होने वाला component।" },
      { term: "Boilerplate", en: "Long setup you copy every time. RTK reduces it.", hi: "हर बार दोहरा लंबा setup। RTK घटाता है।" },
    ],
    examples: [
      {
        label: "✅ Mental model",
        code: `
UI  →  dispatch(action)
         ↓
      reducer(state, action)  →  newState
         ↓
      store  →  useSelector  →  UI updates
        `,
      },
    ],
  },

  threePrinciples: {
    title: { en: "Three principles of Redux", hi: "रिडक्स के तीन सिद्धांत" },
    definition: {
      en: `
In simple words, three rules:

1. One notebook (single source of truth)
   All important app data lives in one store. Easier to find, save, and debug.

2. Do not scribble on the old page (state is read-only)
   You never do state.count = 1 on the store yourself. You dispatch an action that describes what happened.

3. Use a pure function to write the next page (reducer)
   Same inputs always give the same output. No fetch, no Date.now(), no random inside the reducer.

These rules make “undo” and DevTools possible.
      `,
      hi: `
सरल भाषा, तीन नियम:

1. एक कॉपी (single source of truth)
   ज़रूरी ऐप data एक store में। ढूँढना, सेव, debug आसान।

2. पुराने पन्ने पर लिखावट मत करो (state read-only)
   खुद store पर state.count = 1 मत करो। जो हुआ उसका action भेजो।

3. अगला पन्ना शुद्ध function से (reducer)
   वही इनपुट = वही आउटपुट। Reducer में fetch, Date.now(), रैंडम नहीं।

इनसे “undo” और DevTools संभव होते हैं।
      `,
    },
    words: [
      { term: "Single source of truth", en: "One official copy of the data, not copies in 10 components.", hi: "Data की एक आधिकारिक कॉपी, 10 components में बिखरी नहीं।" },
      { term: "Read-only", en: "Look, don’t overwrite the current object.", hi: "देखो, मौजूदा object पर लिखो मत।" },
      { term: "Plain object", en: "A simple { type, payload } — not a class instance.", hi: "सादा { type, payload } — class instance नहीं।" },
      { term: "Pure function", en: "No hidden extra work. Output depends only on inputs.", hi: "छिपा extra काम नहीं। आउटपुट सिर्फ इनपुट पर।" },
      { term: "Time-travel debugging", en: "Replay old actions in DevTools like a video scrubber.", hi: "DevTools में पुराने actions वीडियो की तरह दोहराना।" },
    ],
  },

  storeActionsReducers: {
    title: { en: "Store, actions, and reducers", hi: "स्टोर, एक्शन्स और रिड्यूसर्स" },
    definition: {
      en: `
In simple words, three friends:

Store = the box. Holds state. Has dispatch. In React you read it with useSelector.

Action = a small note: { type: 'todos/added', payload: 'Learn Redux' }.
type = what happened. payload = extra details.

Reducer = the worker: (oldState, action) => newState.
It must stay pure. If the type is unknown, return the old state.

In RTK, configureStore makes the store. createSlice writes reducer + actions together.
      `,
      hi: `
सरल भाषा, तीन साथी:

Store = डिब्बा। State रखता है। dispatch देता है। React में useSelector से पढ़ते हो।

Action = छोटा नोट: { type: 'todos/added', payload: 'Learn Redux' }।
type = क्या हुआ। payload = अतिरिक्त डिटेल।

Reducer = मज़दूर: (पुरानी state, action) => नई state।
शुद्ध रहे। अज्ञात type हो तो पुरानी state लौटाओ।

RTK में configureStore store बनाता है। createSlice reducer + actions एक साथ लिखता है।
      `,
    },
    words: [
      { term: "Store", en: "The object that holds state and dispatch.", hi: "वो object जिसमें state और dispatch हों।" },
      { term: "Subscribe", en: "Listen for changes. React-Redux does this for you.", hi: "बदलाव सुनना। React-Redux यह तुम्हारे लिए करता है।" },
      { term: "type", en: "Required string name of the event.", hi: "घटना का ज़रूरी string नाम।" },
      { term: "payload", en: "The data attached to the action.", hi: "Action के साथ लगा data।" },
      { term: "Action creator", en: "A function that returns an action object. RTK makes these for you.", hi: "Function जो action object लौटाए। RTK इन्हें बना देता है।" },
    ],
    examples: [
      {
        label: "✅ Classic reducer (concept)",
        code: `
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/increment':
      return { value: state.value + 1 };
    case 'counter/decrement':
      return { value: state.value - 1 };
    default:
      return state;
  }
}
        `,
      },
    ],
  },

  reduxToolkit: {
    title: { en: "Redux Toolkit (RTK) – modern Redux", hi: "रिडक्स टूलकिट (RTK) – आधुनिक रिडक्स" },
    definition: {
      en: `
In simple words: Redux Toolkit is the official starter kit. Use this for new apps.

It gives shortcuts:
- configureStore: makes the store, turns on DevTools, adds thunk (async helper)
- createSlice: write reducer and actions in one file
- Immer: you may write state.value += 1; it still saves a new copy
- createAsyncThunk: loading / success / error without three files
- createSelector: remember filtered lists

Do not start with old createStore + giant switch unless you maintain old code.
      `,
      hi: `
सरल भाषा: Redux Toolkit आधिकारिक स्टार्टर किट है। नए ऐप इसी से।

शॉर्टकट:
- configureStore: store, DevTools, thunk (async मददगार)
- createSlice: एक फाइल में reducer और actions
- Immer: state.value += 1 लिखो; फिर भी नई कॉपी सेव
- createAsyncThunk: loading / सफलता / गलती बिना तीन फाइलों के
- createSelector: छनी list याद रखना

पुराना createStore + बड़ा switch नए ऐप में मत शुरू करो।
      `,
    },
    words: [
      { term: "Official", en: "Made and suggested by the Redux team.", hi: "Redux टीम का बनाया और सुझाया।" },
      { term: "Thunk middleware", en: "Lets you dispatch a function for async work.", hi: "Async काम के लिए function dispatch करने देता है।" },
      { term: "Immer", en: "A library that turns “looks like mutate” into a safe copy.", hi: "“mutate जैसा दिखे” को सुरक्षित कॉपी में बदलने वाली library।" },
      { term: "Derived data", en: "Data you compute from state, like a filtered list.", hi: "State से निकाला data, जैसे छनी list।" },
    ],
    examples: [
      {
        label: "✅ Install",
        code: `
npm install @reduxjs/toolkit react-redux
        `,
      },
    ],
  },

  configureStore: {
    title: { en: "configureStore and Provider", hi: "configureStore और प्रोवाइडर" },
    definition: {
      en: `
In simple words:

configureStore({ reducer: { counter: counterReducer, todos: todosReducer } })
glues the chapters into one store.

Provider is a React wrapper. Put it around <App />. Then any child can use useSelector and useDispatch.

Without Provider, those hooks will error: no store found.
      `,
      hi: `
सरल भाषा:

configureStore({ reducer: { counter: ..., todos: ... } })
अध्यायों को एक store में चिपकाता है।

Provider React का रैपर है। <App /> के चारों ओर लगाओ। तब कोई भी बच्चा useSelector और useDispatch चला सकता है।

Provider बिना वे hooks error देंगे: store नहीं मिला।
      `,
    },
    words: [
      { term: "Root reducer", en: "The combined reducer for the whole store.", hi: "पूरे store का जुड़ा हुआ reducer।" },
      { term: "Provider", en: "Makes the store available through React context.", hi: "React context से store सबको उपलब्ध कराता है।" },
      { term: "Wrap", en: "Put a component around another: <Provider><App /></Provider>.", hi: "एक component दूसरे के चारों ओर।" },
    ],
    examples: [
      {
        label: "✅ store.js",
        code: `
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import todosReducer from './todosSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
});
        `,
      },
      {
        label: "✅ index.js / main.jsx",
        code: `
import { Provider } from 'react-redux';
import { store } from './store';

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
        `,
      },
    ],
  },

  createSlice: {
    title: { en: "createSlice", hi: "createSlice" },
    definition: {
      en: `
In simple words: a slice is one chapter of the store (counter, cart, user).

createSlice needs:
- name: 'counter'
- initialState: starting data
- reducers: functions that change that chapter

You may write state.value += 1. Immer makes a new copy for you.

You export:
- the reducer → give to configureStore
- the actions → call with dispatch(increment())
      `,
      hi: `
सरल भाषा: slice store का एक अध्याय है (counter, cart, user)।

createSlice को चाहिए:
- name: 'counter'
- initialState: शुरूआती data
- reducers: उस अध्याय को बदलने वाले functions

state.value += 1 लिख सकते हो। Immer नई कॉपी बना देता है।

Export:
- reducer → configureStore को दो
- actions → dispatch(increment()) से चलाओ
      `,
    },
    words: [
      { term: "Slice", en: "One feature’s state + its reducers.", hi: "एक फीचर की state + उसके reducers।" },
      { term: "initialState", en: "Value before any button is clicked.", hi: "कोई बटन दबने से पहले की value।" },
      { term: "Export", en: "Make something usable in another file.", hi: "दूसरी फाइल में इस्तेमाल योग्य बनाना।" },
    ],
    examples: [
      {
        label: "✅ counterSlice.js",
        code: `
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
        `,
      },
    ],
  },

  useSelectorDispatch: {
    title: { en: "useSelector and useDispatch", hi: "useSelector और useDispatch" },
    definition: {
      en: `
In simple words:

useSelector = read a piece from the store.
  const value = useSelector((state) => state.counter.value)

When that piece changes, this component redraws. Read a small piece. If you select the whole store, you redraw on every action.

useDispatch = get the send button.
  const dispatch = useDispatch()
  dispatch(increment())

Do not dispatch inside the useSelector function. That function should only read.
      `,
      hi: `
सरल भाषा:

useSelector = store से एक टुकड़ा पढ़ो।
  const value = useSelector((state) => state.counter.value)

वह टुकड़ा बदले तो यही component फिर बने। छोटा टुकड़ा पढ़ो। पूरा store लोगे तो हर action पर फिर बनेगा।

useDispatch = भेजने वाला बटन लो।
  const dispatch = useDispatch()
  dispatch(increment())

useSelector वाले function के अंदर dispatch मत करो। वहाँ सिर्फ पढ़ो।
      `,
    },
    words: [
      { term: "Selector", en: "A function that picks data from state.", hi: "State से data चुनने वाला function।" },
      { term: "Reference equality", en: "=== check. A new {} every time looks “changed” even if fields are same.", hi: "=== जाँच। हर बार नया {} “बदला” लगेगा, खेत वही हों तो भी।" },
      { term: "Specific", en: "Pick only what this component shows.", hi: "जो यह component दिखाए, सिर्फ वही चुनो।" },
    ],
    examples: [
      {
        label: "✅ Component",
        code: `
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

function Counter() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <p>{value}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
}
        `,
      },
    ],
  },

  asyncThunk: {
    title: { en: "Async logic: thunks and createAsyncThunk", hi: "असिंक लॉजिक: थंक और createAsyncThunk" },
    definition: {
      en: `
In simple words: reducers cannot wait for the network. Waiting happens in a thunk.

A thunk is a function. Middleware runs it with dispatch and getState. Inside you fetch, then dispatch a normal success/error action.

createAsyncThunk writes the three stages for you: pending, fulfilled, rejected.

In the slice, extraReducers says:
- pending → show loading
- fulfilled → save the list
- rejected → save the error message
      `,
      hi: `
सरल भाषा: Reducer नेटवर्क का इंतज़ार नहीं कर सकता। इंतज़ार thunk में होता है।

Thunk एक function है। Middleware उसे dispatch और getState देकर चलाता है। अंदर fetch, फिर सफलता/गलती वाला सामान्य action।

createAsyncThunk तीन चरण लिख देता है: pending, fulfilled, rejected।

Slice के extraReducers में:
- pending → loading दिखाओ
- fulfilled → list सेव
- rejected → गलती का संदेश सेव
      `,
    },
    words: [
      { term: "Pure", en: "No waiting, no random, same output for same input.", hi: "इंतज़ार नहीं, रैंडम नहीं, वही इनपुट वही आउटपुट।" },
      { term: "Middleware", en: "Code that runs in the middle of dispatch.", hi: "dispatch के बीच चलने वाला code।" },
      { term: "idle / loading / succeeded / failed", en: "Common status words for async UI.", hi: "Async UI के आम status शब्द।" },
      { term: "builder.addCase", en: "RTK helper to handle one action type in extraReducers.", hi: "extraReducers में एक action type संभालने का RTK मददगार।" },
    ],
    examples: [
      {
        label: "✅ createAsyncThunk + extraReducers",
        code: `
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const res = await fetch('/api/users');
  return res.json();
});

const usersSlice = createSlice({
  name: 'users',
  initialState: { list: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
        `,
      },
    ],
  },

  reduxVsContext: {
    title: { en: "Redux vs Context API", hi: "रिडक्स बनाम कॉन्टेक्स्ट एपीआई" },
    definition: {
      en: `
In simple words:

Context = pass a value down the tree. Great for theme, language, current user — things that barely change.

Redux = a store with rules, DevTools, and async helpers. Great when many screens change shared data often.

If Context value changes a lot, every reader may redraw. useSelector redraws only if the piece you picked changed.

Small/medium apps can use Context + useReducer. Big, busy data often fits Redux.
      `,
      hi: `
सरल भाषा:

Context = पेड़ में नीचे value देना। Theme, भाषा, यूज़र — जो लगभग न बदले।

Redux = नियमों वाला store, DevTools, async मदद। जब कई स्क्रीन अक्सर साझा data बदलें।

Context की value बहुत बदले तो हर पाठक फिर बन सकता है। useSelector तभी फिर बने जब चुना टुकड़ा बदले।

छोटे/मध्यम ऐप में Context + useReducer चल सकता है। बड़ा, व्यस्त data अक्सर Redux पर फिट बैठता है।
      `,
    },
    words: [
      { term: "Low-frequency", en: "Does not change many times per second.", hi: "सेकंड में कई बार नहीं बदलता।" },
      { term: "Time-travel / undo", en: "Go back to old state using saved actions.", hi: "सेव actions से पुरानी state पर जाना।" },
      { term: "Caching", en: "Keep fetched data so you do not fetch again immediately.", hi: "लाया data रखना ताकि तुरंत फिर न लाना पड़े।" },
    ],
  },

  selectorsMemo: {
    title: { en: "Selectors and createSelector", hi: "सिलेक्टर्स और createSelector" },
    definition: {
      en: `
In simple words: a selector is a picker function: (state) => the piece you need.

If you filter a huge list inside the component, you do that work on every draw.

createSelector remembers the last answer. It recalculates only when its inputs change.

It also avoids returning a brand-new array every time (which would look “changed” to useSelector even if items are the same).
      `,
      hi: `
सरल भाषा: selector चुनने वाला function है: (state) => जो टुकड़ा चाहिए।

अगर बड़ी list को component के अंदर छानोगे, हर draw पर वह काम होगा।

createSelector पिछला जवाब याद रखता है। इनपुट बदलें तभी फिर हिसाब।

हर बार नई array लौटाने से भी बचाता है (useSelector उसे “बदली” समझ लेता, items वही हों तो भी)।
      `,
    },
    words: [
      { term: "Derived value", en: "A value computed from state, not stored twice.", hi: "State से निकली value, दो बार store नहीं।" },
      { term: "Reselect", en: "The library behind createSelector, included in RTK.", hi: "createSelector के पीछे की library, RTK में शामिल।" },
      { term: "Input selectors", en: "The small pickers you pass in, like selectTodos.", hi: "जो छोटे picker देते हो, जैसे selectTodos।" },
    ],
    examples: [
      {
        label: "✅ createSelector",
        code: `
import { createSelector } from '@reduxjs/toolkit';

const selectTodos = (state) => state.todos.items;
const selectFilter = (state) => state.todos.filter;

export const selectVisibleTodos = createSelector(
  [selectTodos, selectFilter],
  (items, filter) => {
    if (filter === 'done') return items.filter((t) => t.done);
    if (filter === 'open') return items.filter((t) => !t.done);
    return items;
  }
);

// in component:
const visible = useSelector(selectVisibleTodos);
        `,
      },
    ],
  },

  interviewRedux: {
    title: { en: "Redux interview checklist", hi: "रिडक्स इंटरव्यू चेकलिस्ट" },
    definition: {
      en: `
In simple words, short answers you can say in an interview:

• Why Redux? One shared notebook, clear updates, DevTools.
• Flow? Button → dispatch(action) → reducer → new state → screens update.
• Can a reducer fetch? No. Use a thunk.
• Why Immer? Write simpler reducers; still a new copy underneath.
• What is an action? { type, payload }.
• connect vs hooks? Old class style vs useSelector/useDispatch (use hooks).
• Middleware? Extra functions between dispatch and reducer (log, async).
• Normalize? Save items by id, keep a list of ids, so one item updates cheaply.

Be ready to draw a slice and a button that dispatches.
      `,
      hi: `
सरल भाषा, इंटरव्यू में बोल सको:

• Redux क्यों? एक साझी कॉपी, साफ़ अपडेट, DevTools।
• Flow? बटन → dispatch(action) → reducer → नई state → स्क्रीन अपडेट।
• Reducer fetch कर सकता है? नहीं। Thunk इस्तेमाल करो।
• Immer क्यों? सरल reducer लिखो; अंदर नई कॉपी ही।
• Action क्या? { type, payload }।
• connect vs hooks? पुरानी class vs useSelector/useDispatch (hooks लो)।
• Middleware? dispatch और reducer के बीच extra functions (log, async)।
• Normalize? Items id से सेव, ids की list, एक item सस्ता अपडेट।

एक slice और dispatch वाला बटन बनाकर दिखाने को तैयार रहो।
      `,
    },
    words: [
      { term: "connect", en: "Old React-Redux helper for class components.", hi: "Class components के लिए पुराना React-Redux मददगार।" },
      { term: "Normalize", en: "Store as { byId: { '1': item }, allIds: ['1'] } instead of a messy nested list.", hi: "उलझी list की जगह { byId, allIds } जैसा साफ़ ढाँचा।" },
      { term: "Saga", en: "Another async library (more complex than thunk). Know the name.", hi: "दूसरी async library (thunk से जटिल)। नाम जानो।" },
      { term: "Sketch", en: "Draw or type a tiny example in the interview.", hi: "इंटरव्यू में छोटा उदाहरण लिखना/बनाना।" },
    ],
  },
};
