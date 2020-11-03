import reducer from "../reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "../../App";
import ReactDOM from "react-dom";

const store = createStore(reducer);
//createStore를 통해서 스토어 생성 후 리듀서 전달

ReactDOM.render(
  <Provider store={store}>
    <App />\
  </Provider>,
  document.getElementById("root")
);

//react-redux 모듈처럼 연결을 도와주는 모듈이 필요.
//해당 모듈에서 Provider를 갖고와 가장 상위 컴포넌트인 App을 감싸고
// store를 전달해주면 리덕스와의 연결이 완료.
