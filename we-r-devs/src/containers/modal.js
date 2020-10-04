import { connect } from "react-redux";
import { Modal } from "../components/Modal/Modal";
import { closeModal } from "../redux/actions";
import { isOpen } from "../redux/selectors/modal.js";
import { getDate } from "../redux/selectors/date";

const mapStateToProps = (state) => ({
  isOpen: isOpen(state),
  selectedDate: getDate(state),
});
const mapDispatchToProps = (dispatch) => ({
  closeUp: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
