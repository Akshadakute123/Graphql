import React from 'react'
import Modal from 'react-modal';

export default class ConfirmationModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => (
    <Modal isOpen={this.props.modalIsOpen}
      onRequestClose={this.props.onCancel}
      className="confirmation-modal"
      overlayClassName="confirmation-overlay">
      <section>
        <h3>{this.props.header}</h3>
        <p>{this.props.message}</p>
        <section>
          <button onClick={this.props.onConfirm}>{this.props.confirmLabel}</button>
          <button onClick={this.props.onCancel}>{this.props.cancelLabel}</button>
        </section>
      </section>
    </Modal>
  )
}