# ⚛️ React & Web Development Interview Questions

As an expert document contributor, this file organizes key technical questions for documentation and learning, with links for deeper exploration.

---

## **React Hooks, Concepts, and Optimization**

1.  **Difference between `useMemo` and `useCallback`.**
    [Read More](YOUR_URL_HERE)
2.  **What is a key in React? Why do we use it, and what happens if we don’t?**
    [Read More](YOUR_URL_HERE)
3.  **What is difference between `useLayoutEffect` and `useEffect`?**
    [Read More](YOUR_URL_HERE)
4.  **How do you manage state if your state is dependent on previous state?**
    [Read More](YOUR_URL_HERE)
5.  **How do you optimize a React application? How lazy loading works? Where exactly is lazy loading beneficial?**
    [Read More](YOUR_URL_HERE)
6.  **How can I debug and stop a React component from re-rendering multiple times due to changes in another component?**
    [Read More](YOUR_URL_HERE)
7.  **What is Error Boundaries?**
    [Read More](YOUR_URL_HERE)
8.  **What is the difference between `createElement` and using a component tag in React?**
    [Read More](YOUR_URL_HERE)
9.  **Output of below code, what is the value of c?**
    ```javascript
    const [c, setC] = useState(0);
    useEffect(() => {
      console.log("hello");
      setC(c + 1);
      setC(c + 1);
      setC(c + 1);
    });
    ```
    [View Answer](YOUR_URL_HERE)

---

## **Core Web & Browser Fundamentals**

10. **How browser reads TypeScript?**
    [Read More](YOUR_URL_HERE)
11. **How event loop works? Which has more priority macro task queue or, micro task queue? If I have 100 tasks in macro and 1 in micro, which will be executed first?**
    [Read More](YOUR_URL_HERE)
12. **What is the difference between Real DOM and Virtual DOM and How this works in deep?**
    [Read More](YOUR_URL_HERE)
13. **Scenario based questions on event bubbling and `stopPropagation`.**
    [Read More](YOUR_URL_HERE)
14. **Overloading and overriding in JavaScript.**
    [Read More](YOUR_URL_HERE)
15. **What is debouncing and throttling? Give examples.**
    [Read More](YOUR_URL_HERE)

---

## **Performance, Tooling, and Debugging**

16. **What techniques would you use to prevent layout shifts (CLS) and improve perceived performance in a React application?**
    [Read More](YOUR_URL_HERE)
17. **How will you debug any prod issue without writing logs?**
    [Read More](YOUR_URL_HERE)
18. **What is Webpack? Benefit of using it?**
    [Read More](YOUR_URL_HERE)
19. **How to measure the webapp performance?**
    [Read More](YOUR_URL_HERE)
20. **If the browser cache becomes full due to your application storing too much data, how would you prevent the application from crashing or breaking?**
    [Read More](YOUR_URL_HERE)

---

## **Design and Implementation**

21. **Create a parent box, then display 3 boxes diagonally inside it.**
    _(This is a CSS/layout implementation question)_
    [View Solution](YOUR_URL_HERE)
