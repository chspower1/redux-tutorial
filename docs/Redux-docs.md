# Redux 문서 정리

## Redux Terminology (기본용어)

- ## **Actions**

  ```js
  const addTodoAction = {
    type: "todos/todoAdded",
    payload: "Buy milk",
  };
  ```

  - type field를 가진 object.
  - application에서 무엇이 일어났는지 설명하는 이벤트.

- ## **Reducers**

  ```js
  const initialState = { value: 0 };

  function counterReducer(state = initialState, action) {
    // Check to see if the reducer cares about this action
    if (action.type === "counter/incremented") {
      // If so, make a copy of `state`
      return {
        ...state,
        // and update the copy with the new value
        value: state.value + 1,
      };
    }
    // otherwise return the existing state unchanged
    return state;
  }
  ```

  - current state와 action을 전달하는 함수.
  - new state를 return 해줌.
  - event listner의 개념이랑 비슷.

- ## **Store**

  ```js
  import { configureStore } from "@reduxjs/toolkit";

  const store = configureStore({ reducer: counterReducer });

  console.log(store.getState());
  // {value: 0}
  ```

  - state를 저장하는 object.

- ## **Dispatch**

  ```js
  store.dispatch({ type: "counter/incremented" });

  console.log(store.getState());
  // {value: 1}
  ```

- store가 가진 method.
- state를 update하는 유일한 방법.

- ## **Selector**

  ```js
  const selectCounterValue = (state) => state.value;

  const currentValue = selectCounterValue(store.getState());
  console.log(currentValue);
  // 2
  ```

  - store에 저장된 state를 추출하는 함수.

## Core Concepts and Principles (중요 개념)

- **Single Source of Truth**(중앙화)
- **State is Read-Only**(읽기전용)
- **Changes are Made with Pure Reducer Functions**()
