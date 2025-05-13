# 🛠️ React Counter App using Context

This project implements a **Counter** using React's **Context API**. It allows users to **increment, decrement, and reset** the counter while maintaining a global state that can be accessed across components.

## 🚀 Features
- 📦 Global state management with `createContext`
- 🔢 Counter with increment, decrement, and reset functionality
- ⚡ Optimized component rendering with Context API
- 🏗️ Minimal **prop drilling** by sharing state via Context

---

## 🏗 Project Breakdown

### 1️⃣ **Creating the Counter Component**
We created a `Counter` component that allows:
- ➕ Incrementing the counter
- ➖ Decrementing the counter
- 🔄 Resetting the counter

### 2️⃣ **Setting Up CounterContext**
We use `createContext` to store the **state value** globally.

```jsx
import { createContext } from "react";

export const CounterContext = createContext(null);
```

This enables components to subscribe to the counter state without passing props manually.

### 3️⃣ **Creating CounterProvider**
The `CounterProvider` wraps child components and shares the **count state** globally.

```jsx
import React, { useState } from "react";

export const CounterProvider = (props) => {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount, name: "Amruth" }}>
      {props.children}
    </CounterContext.Provider>
  );
};
```

### 🔗 **Understanding the Provider’s `value` Prop**
- **count** → Tracks the counter value.
- **setCount** → Updates the counter.
- **name** → A sample static variable.

All child components inside `<CounterProvider>` will have access to these values.

### 🏗 **Using Context in Components**
Instead of passing props, child components can directly access the counter state.

```jsx
import { useContext } from "react";
import { CounterContext } from "./CounterProvider";

const CounterDisplay = () => {
  const { count, setCount, name } = useContext(CounterContext);

  return (
    <div>
      <h2>{name}'s Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};
```

---

## 📦 Mental Model

### 🏠 **The Workshop (App Component)**
Imagine a **shared toolbox** that artisans (components) use instead of bringing their own tools.

### 📦 **The Toolbox (CounterContext)**
Stores globally shared tools:
- 🔢 `count`: Counter value.
- 🔄 `setCount`: Function to modify counter.
- 🏷️ `name`: Sample label.

### 👷 **The Supervisor (CounterProvider)**
- **Tracks `count` using `useState`**.
- **Provides state via `<CounterContext.Provider>`**.
- **Ensures child components can access the state** via `props.children`.

### 🛠 **The Artisans (Child Components)**
Components fetch data from the shared toolbox instead of managing their own state.

```jsx
const { count, setCount } = useContext(CounterContext);
```

---

## 🏗 Wrapping CounterProvider in `App.jsx`
In `App.jsx`, wrap the app inside `<CounterProvider>` to provide global access.

```jsx
import { CounterProvider } from "./CounterProvider";
import CounterDisplay from "./CounterDisplay";

function App() {
  return (
    <CounterProvider>
      <CounterDisplay />
    </CounterProvider>
  );
}

export default App;
```

Now, all components inside `App.jsx` can access the counter state.

---

## 🚀 Get Started
### 🛠 Installation
Run the following commands to set up the project:

```sh
git clone <repo-url>
cd my-app
npm install
npm run dev
```

---

## 🛠 License
This project is licensed under the **MIT License**.

---

This README is structured with clear sections, headers, and enhanced formatting! Does this look good to you? 🚀
