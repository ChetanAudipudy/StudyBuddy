import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
// import "./LoginModal.css";

const LoginModal = props => {
  return (
    <Modal
      isOpen={props.signedIn}
      contentLabel="Confirm Login"
      onRequestClose={props.handleClearModal}
      className="modalpanel"
      ariaHideApp={false}
    >
      <div className="modalbox">
        <h1>Sorry, Username or Password does not match!</h1>
        <button
          onClick={props.handleClearModal}
          className="gradient-button modalbutton"
        >
          Oh no!
        </button>
      </div>
    </Modal>
  );
};

export default LoginModal;
