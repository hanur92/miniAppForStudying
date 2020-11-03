const INCREMENT = "INCREMENT";
//버튼을 누르면 증가하는 행동을 원하기 때문에
//INCREMENT라는 액션을 정의

export const increment = () => ({
  type: INCREMENT,
}); //정의한 액션을 이용해서 액션 생성 함수 생성
