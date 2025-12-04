# JavaScript Coding Interview Questions (Grouped + FAANG-Level)

> **Pure coding interview questions. Grouped. Updated. Includes sample explanations where needed.**

---

## 🟦 1. Object & Data Structure Manipulation

### 1. Flatten a deeply nested object

**Sample explanation:** Convert `{ a: { b: { c: 1 } } }` → `{ 'a.b.c': 1 }`.

### 2. Unflatten an object

Convert flattened paths back into nested object.

### 3. Deep clone an object (without `JSON.parse`)

### 4. Detect circular references in objects

### 5. Deep equality check between two objects

### 6. Implement `Object.create` polyfill

### 7. Implement `Object.assign` polyfill

### 8. Implement lodash-like `get(object, path)`

### 9. Implement lodash-like `set(object, path, value)`

### 10. Implement lodash-like `merge` (deep merge)

### 11. Group array of objects by key

### 12. Chunk an array into smaller arrays

### 13. Convert flat array with parentId into a tree

**Explanation:** Convert:

```js
[{ id: 1 }, { id: 2, parentId: 1 }, { id: 3, parentId: 2 }];
```

into nested tree.

### 14. Flatten a tree into an array

### 15. Count occurrences of words in a string

### 16. Reverse words in a sentence

### 17. Find duplicates in an array

---

## 🟪 2. Functional Programming & Custom Polyfills

### 18. Implement custom `map` method

### 19. Implement custom `filter`

### 20. Implement custom `reduce`

### 21. Implement function currying

Example: `sum(1)(2)(3)() → 6`

### 22. Infinite currying

### 23. Partial application

### 24. Implement `compose`

### 25. Implement `pipe`

### 26. Lazy evaluation pipeline

### 27. Memoize a function

---

## 🟥 3. Promises, Async, Concurrency

### 28. Implement `Promise.all`

### 29. Implement `Promise.race`

### 30. Implement `Promise.any`

### 31. Convert callback-based function to Promise (promisify)

### 32. Retry mechanism for async function

### 33. Exponential backoff retry

### 34. Limit concurrency of async tasks

### 35. Sequential task executor

### 36. Parallel executor with max limit

### 37. Debounce (sync)

### 38. Debounce for async fetch

### 39. Throttle with leading/trailing behavior

### 40. `setInterval` using `setTimeout`

### 41. `setTimeout` using `setInterval`

### 42. Promise timeout wrapper

### 43. Time-based key-value store (TTL)

### 44. Implement microtask scheduler

### 45. Implement macrotask scheduler

---

## 🟧 4. Algorithms & Data Structures

### 46. Binary search

### 47. Merge sort

### 48. Quick sort

### 49. Generate all permutations of an array

### 50. Generate all combinations of an array

### 51. BFS on tree/graph

### 52. DFS on tree/graph

### 53. Inorder, preorder, postorder traversal

### 54. Implement min-heap

### 55. Implement max-heap

### 56. Priority queue

### 57. LRU Cache

### 58. Detect longest substring without repeating characters

**Explanation:** Classic sliding window problem.

### 59. Rotate array by k positions

### 60. Shuffle array (Fisher-Yates)

### 61. First non-repeating character

### 62. Balanced brackets checker

### 63. Palindrome substring finder

---

## 🟩 5. Event Systems & Architecture Patterns

### 64. Implement EventEmitter

### 65. Implement Publish/Subscribe pattern

### 66. Middleware chain executor (Redux-style)

### 67. Create simple Redux store clone

### 68. Build a basic reactive system (Vue-style reactivity)

### 69. Job queue implementation

### 70. Async lazy loader

---

## 🟨 6. Browser, DOM, Utilities

### 71. Simple router for SPA

### 72. DOM diff algorithm (virtual DOM style)

### 73. Event delegation utility

### 74. RGB ↔ HEX conversion

### 75. Generate random UUID

### 76. Rate limiter for API calls

### 77. Infinite scroll throttle (browser)

---

# 🔥 FAANG-Level Coding Questions (High Difficulty)

These are the ones FAANG repeatedly asks in interviews.

## 🟥 FAANG — Must-Solve

### 1. Implement `Promise.all` (from scratch)

### 2. Implement deep clone with circular reference detection

### 3. Longest substring without repeating characters (O(n))

### 4. Convert a flat array into a tree (high-frequency)

### 5. LRU Cache (Map + Doubly Linked List)

### 6. Implement currying with infinite arguments

### 7. Scheduler that runs tasks with concurrency limit

### 8. Implement debounce + throttle combined version

### 9. Implement a priority queue

### 10. Merge k sorted arrays

### 11. Implement memoization with cache invalidation TTL

### 12. Implement your own version of Redux store

### 13. Create a deep comparison function that handles edge cases

### 14. Design a Pub/Sub system with wildcard channels

### 15. Create async pipeline processor (`composeAsync`)

### 16. Implement virtual DOM diffing (simplified)

### 17. Implement a basic Reactivity system using Proxies

### 18. Implement `instanceof` operator logic

### 19. Write async retry with exponential backoff

### 20. Implement your own microtask queue

---

If you want:

- **Solutions for all**
- **FAANG-only set with full code**
- **Difficulty labels + expected time complexity**
- **A separate `solutions.md` file**

Tell me and I will generate it.
