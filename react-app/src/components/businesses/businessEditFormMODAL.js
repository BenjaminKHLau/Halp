import React, { useState, useEffect } from 'react';
// import { Modal } from '../../context/Modal';
import { Modal } from '../MODAL/modal';
import BusinessEditFormComponent from './businessEditForm';
import { useSelector } from 'react-redux';

function EditBusinessFormModal({ businessId }) {
  const [showModal, setShowModal] = useState(false);

  const allBusinesses = useSelector(state => state.businesses)

  useEffect(()=> {
    setShowModal(false)
  }, [allBusinesses])

  return (
    <>
      <div className="edit-delete" onClick={() => setShowModal(true)}>Edit Spot</div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <BusinessEditFormComponent businessId={businessId}/>
        </Modal>
      )}
    </>
  );
}

export default EditBusinessFormModal;