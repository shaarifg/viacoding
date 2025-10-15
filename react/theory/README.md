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

---

## **Practical Implementation and Custom Hooks**

22. **Invoke API, display data in pagination, has Next and Previous buttons, and Includes a dropdown to choose how many records to show per page.**
    [View Example](YOUR_URL_HERE)
23. **Create a custom hook to resize the window size and show the height an width of window.**
    [View Hook](YOUR_URL_HERE)
24. **Write a custom debounce function. Create a function with console and call that in debounce function.**
    [View Implementation](YOUR_URL_HERE)
25. **Create a Timer and update it from 10 to 0? Can you create a custom countdown timer?**
    [View Timer Component](YOUR_URL_HERE)
26. **Create a custom hook for API call, which will accept the base url.**
    [View Hook](YOUR_URL_HERE)
27. **Implement "Load More" functionality and caching in React.**
    [View Implementation](YOUR_URL_HERE)

---

## **Scenario-Based Coding Challenges**

28. **Invoke API, Display first 10 album titles in a list with checkboxes, Upon selection of atleast 5 items, enable submit button, Capitalize second letter of every word in the title.**
    [View Solution](YOUR_URL_HERE)
29. **Create a Comments Analytics – Chart by Post Instructions:** Build a React + TypeScript application that visualizes comment distribution.
    - The app must fetch posts and their comments.
    - Display a chart (bar or pie) showing the number of comments per post.
    - Use `useMemo` to compute counts efficiently when data changes.
    - Desktop: chart + table side by side. Mobile: chart stacked above table.
      [View Solution](YOUR_URL_HERE)
30. **You are given a nested tree data structure. Each node has an optional id, an array of `classList`, and `children`. Write recursive functions to search nodes by id and by className.**
    [View Solution](YOUR_URL_HERE)
31. **Create a Todo List app where: You can add data. A Complete button is available for each task. On clicking the Complete button, the task is marked complete and the button becomes disabled.**
    [View Solution](YOUR_URL_HERE)
32. **Design a component with 3 tabs and implement pagination to handle large data in a tab.**
    [View Solution](YOUR_URL_HERE)
33. **Implement the Error boundaries in class component and show a error for a component.**
    [View Implementation](YOUR_URL_HERE)
