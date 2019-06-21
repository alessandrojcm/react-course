import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ header, content, children, onDismiss }) => {
  return ReactDOM.createPortal(
    <div className={'ui dimmer modals visible active'} onClick={onDismiss}>
      <section
        className={'ui standard modal visible active'}
        onClick={(event) => event.stopPropagation()}
      >
        <header className={'header'}>{header}</header>
        <main className={'content'}>{content}</main>
        <footer className={'actions'}>{children}</footer>
      </section>
    </div>,
    document.querySelector('#modal'),
  );
};

export default Modal;
