# Redux란?

데이터를 관리하는 것을 도와주기위해 만들어진 라이브러리

- ## Store
  데이터를 넣는 곳

```js
import { createStore } from "redux";
const reducer = () => {};
const store = createStore(reducer);
```

- ## Reducer

  reducer는 함수이고 데이터를 modify해줌. (modify = 찾고 수정해줌)  
  오직 reducer만이 데이터를 수정할 수 있음

- ## Action

  action을 modifier에 보내는 방법
  reducer에서는 switch case문을 씀.

  ```js
  import { createStore } from "redux";
  const reducer = (count = 0, action) => {
    if (action.type === "ADD") {
      return count + 1;
    }
    return count;
  };
  const store = createStore(reducer);
  store.dispath({ type: "ADD" });
  ```

  Action은 Object여야함.

절대 mutate state는 하면 안됨. 새로운 state를 만들어서 return 할 것!

- ## Connect

  2개의 argument를 가짐(state,dispatch)
