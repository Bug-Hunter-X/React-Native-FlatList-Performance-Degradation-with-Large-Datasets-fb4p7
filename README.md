# React Native FlatList Performance Issue

This repository demonstrates a common performance issue in React Native's `FlatList` component when dealing with large datasets and complex item rendering. The example showcases slow scrolling, dropped frames, and potential crashes due to inefficient rendering.

## Problem

The `bug.js` file contains a `FlatList` component rendering a substantial number of items.  Each item involves complex calculations or nested components, resulting in performance bottlenecks.

## Solution

The `bugSolution.js` file offers several solutions to mitigate this performance issue:

* **`useMemo` and `React.memo`**: These hooks optimize rendering by memoizing expensive computations and preventing unnecessary re-renders.
* **`getItemLayout`**: This prop enables FlatList to optimize initial rendering and scrolling.
* **`windowSize`**: Adjusting this value can significantly impact rendering performance.
* **Virtualization Techniques**:  If the dataset is extremely large, explore further optimization techniques such as windowing or lazy loading.