import Buttons from "./Buttons";
import { increment } from "../redux/reducers";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  number: state.number,
});

const mapDispatchToProps = (dispatch) => ({
  handleClick: () => dispatch(increment()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
