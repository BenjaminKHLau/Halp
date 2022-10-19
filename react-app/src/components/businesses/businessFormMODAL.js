import React, { useEffect, useState } from 'react';
import { Modal } from '../MODAL/modal';
import { useSelector } from 'react-redux';
import BusinessCardComponent from './businessCard';
import BusinessFormComponent from './businessform';

function BusinessFormModal() {
  const [showModal, setShowModal] = useState(false);

  const allBusinesses = useSelector(state => state.businesses)


  useEffect(()=> {
    setShowModal(false)
  }, [allBusinesses])

  return (
    <>
      <div className='create-spot-button' onClick={() => setShowModal(true)}>Create A Business</div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <BusinessFormComponent />
        </Modal>
      )}
    </>
  );
}

export default BusinessFormModal;
