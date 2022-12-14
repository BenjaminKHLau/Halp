import React, { useState } from 'react';
import { Modal } from '../../components/MODAL/modal'
// import LoginForm from './LoginForm';
import SignupForm from '../auth/SignUpForm';

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div onClick={() => setShowModal(true)}>Sign Up</div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupForm />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;