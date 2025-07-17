# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Read this Blog

https://chatgpt.com/c/6867b1f4-00f4-8004-aa9a-6ed3817f3f04
instead of ts.config.json --> use jsconfig.json
then start installing and configuring the plugins
other wise see the video
(https://youtu.be/aMX_DYK5LAk?si=HxCzmoLhDbXwONpc)

# atom design pattern


<!--  -->

## Read ABOUT QUERYCLIENT

https://tanstack.com/query/v5/docs/reference/QueryClient

## Why we dont use localStorage?

localStorage does not provide any built-in encryption mechanisms, which means that the data stored in it is not protected against unauthorized access. This makes it unsuitable for storing sensitive data.

Using state management libraries like React Context API, Zustand, or Redux instead of directly relying on localStorage for application state offers significant advantages, primarily related to reactivity, performance, and the nature of the data being managed.

• Reactivity and Re-rendering:
• localStorage does not inherently trigger re-renders in your UI when its data changes. You would need to manually listen for changes and update your component state, leading to more complex and error-prone code.
• State management libraries are designed to integrate seamlessly with component lifecycles, automatically triggering re-renders of components that depend on the updated state, ensuring your UI remains synchronized with your application data.

• In-Memory State vs. Persistence:
• Context, Zustand, and Redux manage in-memory application state, which is crucial for dynamic data that changes frequently and doesn't need to persist across browser sessions (e.g., UI themes, user input in forms, temporary data). This data is lost when the user closes the tab or refreshes.
• localStorage provides persistence, meaning data stored there remains even after the browser is closed. It's suitable for data that needs to survive sessions, like user preferences, authentication tokens, or cached data.

• Performance:
• Directly reading from and writing to localStorage can be a synchronous and potentially blocking operation, especially with large amounts of data, which can negatively impact application performance.
• State management libraries optimize state updates and re-renders, often using techniques like memoization and selective re-rendering, leading to better performance in complex applications.

• Data Structure and Complexity:
• localStorage is a simple key-value store, making it less suitable for managing complex, interconnected data structures or handling relationships between different pieces of data.
• State management libraries offer structured ways to organize and manage state, including nested objects, arrays, and relationships, making it easier to scale and maintain applications with growing data complexity.

• Debugging and Development Tools:
• Libraries like Redux provide powerful developer tools (e.g., Redux DevTools) that offer features like time-travel debugging, state introspection, and action logging, significantly improving the debugging experience.
• localStorage offers no such built-in debugging capabilities.

When to use localStorage:

• For small, non-sensitive data that needs to persist across browser sessions (e.g., user preferences, theme settings).
• When the data does not require frequent updates or trigger complex UI re-renders.

In summary: While localStorage is useful for data persistence, state management libraries are essential for managing dynamic, reactive application state, offering superior performance, maintainability, and development experience for complex applications. They can also be combined with localStorage (e.g., using redux-persist) to achieve both in-memory reactivity and data persistence where needed.
Using state management libraries like React Context API, Zustand, or Redux instead of directly relying on localStorage for application state offers significant advantages, primarily related to reactivity, performance, and the nature of the data being managed.
Reactivity and Re-rendering:
localStorage does not inherently trigger re-renders in your UI when its data changes. You would need to manually listen for changes and update your component state, leading to more complex and error-prone code.
State management libraries are designed to integrate seamlessly with component lifecycles, automatically triggering re-renders of components that depend on the updated state, ensuring your UI remains synchronized with your application data.
In-Memory State vs. Persistence:
Context, Zustand, and Redux manage in-memory application state, which is crucial for dynamic data that changes frequently and doesn't need to persist across browser sessions (e.g., UI themes, user input in forms, temporary data). This data is lost when the user closes the tab or refreshes.
localStorage provides persistence, meaning data stored there remains even after the browser is closed. It's suitable for data that needs to survive sessions, like user preferences, authentication tokens, or cached data.

Performance:
Directly reading from and writing to localStorage can be a synchronous and potentially blocking operation, especially with large amounts of data, which can negatively impact application performance.
State management libraries optimize state updates and re-renders, often using techniques like memoization and selective re-rendering, leading to better performance in complex applications.
Data Structure and Complexity:
localStorage is a simple key-value store, making it less suitable for managing complex, interconnected data structures or handling relationships between different pieces of data.
State management libraries offer structured ways to organize and manage state, including nested objects, arrays, and relationships, making it easier to scale and maintain applications with growing data complexity.

Debugging and Development Tools:
Libraries like Redux provide powerful developer tools (e.g., Redux DevTools) that offer features like time-travel debugging, state introspection, and action logging, significantly improving the debugging experience.
localStorage offers no such built-in debugging capabilities.
When to use localStorage:
For small, non-sensitive data that needs to persist across browser sessions (e.g., user preferences, theme settings).
When the data does not require frequent updates or trigger complex UI re-renders.

# we use context api for state management

# what is the problem --> Read about context Hell in google

## quill Editor tool 
https://codepen.io/k3no/pen/amwpqZ