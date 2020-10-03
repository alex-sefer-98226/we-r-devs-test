import { connect } from "react-redux";
import { openModal, setDate } from "../../redux/actions/index";
import Calendar from "../calendar/Calendar";
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  openModal: () => dispatch(openModal()),
  setDate: (payload) => dispatch(setDate(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
