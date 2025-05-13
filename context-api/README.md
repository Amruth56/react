1. we created a component Counter where we will increment, decrement and reset the data 
2. created a context, CounterCoontext where we store the state value. 

 Let’s break it down:
1️⃣ CounterContext:
- createContext(null); initializes a context with null as its default value.
- This will allow components to subscribe to the global state without requiring direct prop drilling.
2️⃣ CounterProvider:
- This is a context provider component that wraps children components and provides them access to the shared state (count and setCount).
- useState(0); initializes count to 0, and setCount is the function used to update it.
- The <CounterContext.Provider> component makes count, setCount, and "Amruth" accessible to all its child components.
3️⃣ value Prop:
- The value prop of <CounterContext.Provider> is an object { count, setCount, name: "Amruth" }.
- Any component wrapped inside this provider will have access to this value when using useContext(CounterContext).
4️⃣ props.children:
- This represents whatever components are wrapped within <CounterProvider>.
- It ensures all child components have access to the context without needing explicit props.



## Mental Model

### 🏠 **The Workshop (App Component)**  
Imagine you have a big workshop where different artisans (components) work on projects. Instead of each artisan bringing their own tools, there’s a **central toolbox** available for everyone.

### 📦 **The Toolbox (CounterContext)**  
This toolbox contains shared tools that all artisans need. In your case, the toolbox includes:
- 🔢 `count`: A counter that tracks some value.
- 🔄 `setCount`: A way to update the counter.
- 🏷️ `name`: A label (`"Amruth"`).

The toolbox itself is created using `createContext(null)`, meaning it's initialized without any tools inside—until it gets filled.

### 👷 **The Supervisor (CounterProvider)**  
Now, a **supervisor** (CounterProvider) is responsible for maintaining the toolbox. They decide which tools go inside and allow artisans to access them. The supervisor:
1. **Keeps track of the counter (`count`)** using `useState(0)`.
2. **Lets artisans update the counter (`setCount`)**.
3. **Provides the toolbox (`<CounterContext.Provider value={...}>`)** to anyone working in the workshop.
4. **Ensures everyone inside the workshop (via `props.children`) can use the tools** without needing to ask explicitly.

### 🛠️ **The Artisans (Child Components)**  
Inside the workshop, artisans (child components) need tools from the toolbox. They don’t bring their own but instead **reach into the shared toolbox** using:

```js
const { count, setCount } = useContext(CounterContext);
```

This allows them to use the shared counter without directly managing it.

### 🏗 **Big Picture Mental Model**
- **Workshop** → Your React App.
- **Toolbox** → Context storing shared values.
- **Supervisor** → Provides and manages the shared state.
- **Artisans** → Components using the shared tools.

This eliminates **prop drilling** (passing values manually down multiple levels) and ensures all artisans have easy access to the toolbox.

Does this analogy help? 🚀

3. we wrap counterprovider around app.jsx so that all the components inside app.jsx can access the state.

4. in app.jsx import useContext and CounterContext, using useContext initialize the values of CounterContext into component local variable counterState, from which we will be able to access the data.

