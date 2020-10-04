import { connect } from "react-redux";
import { openModal, setDate } from "../redux/actions";
import Calendar from "../components/Calendar/Calendar";

const mapDispatchToProps = (dispatch) => ({
  openModal: () => dispatch(openModal()),
  setDate: (payload) => dispatch(setDate(payload)),
});

export default connect(null, mapDispatchToProps)(Calendar);
