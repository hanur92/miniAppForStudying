const INCREMENT = "INCREMENT";
//버튼을 누르면 증가하는 행동을 원하기 때문에
//INCREMENT라는 액션을 정의

export const increment = () => ({
  type: INCREMENT,
}); //정의한 액션을 이용해서 액션 생성 함수 생성

const initialState = {
  //initialState는 state의 값이 undefined, 즉 처음 상태일 때 값
  number: 0,
};

const reducer = (state = initialState, action) => {
  //리듀서는 2개의 매개변수(state와 action)
  switch (action.type) {
    case INCREMENT:
      return {
        number: state.number + 1,
      };
    default:
      return state;
  }
  //리듀서의 역할 : 이전 상태에 액션에 따라 새로운 상태를 리턴하는 것
};
export default reducer;

//index 파일에서 내보낸 것 리듀서,액션 생성 함수
//액션을 리듀서에 전달하는 것 = "디스패치"
//디스패치할 때에 사용하기 위해 액션 생성 함수도 내보낸다.
//버튼을 누르면 number가 증가하는 것(버튼누르면 액션이 생성되어 리듀서에 전달.)을 구현하기 위해서.
