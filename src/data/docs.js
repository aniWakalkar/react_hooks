export const docs = {

  useState: {
    title: "useState – State Hook",
    definition: `
useState is a Hook that lets you add local state to a functional component.
It returns a stateful value, and a function to update it.

🟢 Basic Usage:
You can use it for simple primitive values like numbers, strings, booleans, etc.

🟡 Complex State:
You can also store objects and arrays — useful for form handling, lists, etc.
Make sure to create new objects/arrays (don't mutate state directly).
    `,
    examples: [
      {
        label: "✅ Example 1: Simple Counter",
        code: `
const [count, setCount] = useState(0);

<p>Clicked {count} times</p>
<button onClick={() => setCount((prev) => prev + 1)}>Click</button>
        `
      },
      {
        label: "✅ Example 2: useState with Arrays",
        code: `
const [items, setItems] = useState([]);

const addItem = (item) => {
  setItems((prevItems) => [...prevItems, item]);
};
        `
      },
      {
        label: "✅ Example 3: useState with Booleans (Toggles)",
        code: `
const [isOpen, setIsOpen] = useState(false);

<button onClick={() => setIsOpen((prev) => !prev)}>
  {isOpen ? 'Close' : 'Open'}
</button>
        `
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
        `
      }
    ]
  },

  useEffect: {
    title: "useEffect – Side Effect Hook",
    definition: `
useEffect runs side effects in functional components (e.g., fetching data, timers, subscriptions).
It runs after the DOM updates.

🟢 Basic Usage:
Call useEffect with a function to run after every render.

🟡 Dependency Array:
Pass an array of dependencies as a second argument to control when the effect runs.

🔴 Cleanup:
Return a function inside useEffect to perform cleanup (e.g., unsubscribe, clear timers).
    `,
    examples: [
      {
        label: "✅ Example 1: useEffect without dependencies (runs after every render)",
        code: `
useEffect(() => {
  console.log('Component re‑rendered');
});
        `
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
        `
      },
      {
        label: "✅ Example 3: useEffect with specific dependencies",
        code: `
const [count, setCount] = useState(0);

useEffect(() => {
  console.log('Count changed:', count);
}, [count]);
        `
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
        `
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
        `
      }
    ]
  },

  useContext: {
    title: "useContext – Context Hook",
    definition: `
  **useContext** lets you access the nearest value from a context created by **React.createContext** (from the 'react' package) and provided via a **Context.Provider**.

  ✅ It avoids "prop drilling" by making global data (like theme, auth, locale, etc.) directly accessible in deeply nested components.

  ⚠️ **Default values:** When you create a context with \`createContext(defaultValue)\`, that \`defaultValue\` is used only if a component consuming the context is NOT wrapped in a matching Provider.
    `,
    examples: [
      {
        label: "✅ Example 1: ThemeProvider.js (Basic Theme Context with Default Value)",
        code: `
  import React, { createContext, useContext } from 'react';

  const ThemeContext = createContext('light'); // 'light' is the default value

  // 👨‍👩‍👧 Parent component providing the context
  function App() {
    return (
      <ThemeContext.Provider value="dark"> {/* ✅ Provider overrides default value */}
        <ThemedComponent />
      </ThemeContext.Provider>
    );
  }
 
   import { ThemeContext } from './Parent_file_name';

  // 👶 Child component consuming the context
  function ThemedComponent() {
    const theme = useContext(ThemeContext); // ✅ Gets 'dark' from Provider, otherwise 'light'
    return <div>Current theme: {theme}</div>;
  }
        `
      },
    ],
  },

  useReducer: {
    title: "useReducer – Reducer Hook",
    definition: `
useReducer is an alternative to useState for managing complex state logic (multiple sub‑values, conditions, actions).
It takes a reducer function and an initial state, returns [state, dispatch].
    `,
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
      <button onClick={() => dispatch({ type: 'decrement' })}>‑</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}
        `
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
        `
      }
    ]
  },

  useRef: {
    title: "useRef – Ref Hook",
    definition: `
  useRef returns a mutable ref object whose \`.current\` property persists for the full lifetime of the component.
  It can be used to access DOM nodes, store mutable values without causing re‑renders, or keep previous values.
    `,
    usage: `
  ### When and Why to Use useRef:

  - **Accessing DOM Elements:**  
    Use \`useRef\` to get a direct reference to a DOM node to perform imperative actions (e.g., focusing an input).

  - **Storing Mutable Values Without Re-rendering:**  
    Unlike state, updating a \`ref\` does not trigger re-rendering. Use it to keep track of mutable values that don’t affect UI directly, like timers or previous values.

  - **Keeping Previous Values:**  
    Useful for comparing previous and current values across renders, such as previous props or state.

  - **Avoid Unnecessary Renders:**  
    When you need to hold a value that changes but you don’t want the component to re-render every time it updates.
    `,
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
        `
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
        `
      }
    ]
  },

  useMemo: {
    title: "useMemo – Memoize Value Hook",
    definition: `
useMemo returns a memoized value — i.e., it recomputes the value only when one of its dependencies changes.
Useful for expensive calculations to avoid wasteful recomputation on every render.
    `,
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
        `
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
        `
      }
    ]
  },

  useCallback: {
    title: "useCallback – Memoize Function Hook",
    definition: `
useCallback returns a memoized version of a callback function that only changes if one of its dependencies has changed.
This is useful when passing callbacks to optimized child components to prevent unnecessary re‑creations.
    `,
    examples: [
      {
        label: "✅ Example 1: Basic useCallback",
        code: `
const [count, setCount] = useState(0);

const increment = useCallback(() => {
  setCount((c) => c + 1);
}, []);

return <button onClick={increment}>Count: {count}</button>;
        `
      },
      {
        label: "✅ Example 2: useCallback to optimize child component render",
        code: `
const [count, setCount] = useState(0);

const handleClick = useCallback(() => {
  console.log('Clicked: ', count);
}, [count]);

<MyChildComponent onClick={handleClick} />
        `
      }
    ]
  },

  useDebugValue: {
    title: "useDebugValue – Debugging Hook",
    definition: `
useDebugValue helps label custom hooks for debugging in React DevTools.
It doesn’t affect runtime behavior — it is only for developer tooling and inspection.
    `,
    examples: [
      {
        label: "✅ Example: Labeling a custom hook with useDebugValue",
        code: `
import { useDebugValue, useState, useEffect } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    // Simulated subscription to friend's online status
    setIsOnline(true);
  }, [friendID]);

  useDebugValue(isOnline ? 'Online' : 'Offline');

  return isOnline;
}
        `
      }
    ]
  }
};