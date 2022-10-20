import React, { useEffect, useState } from 'react';
import { Modal } from '../MODAL/modal';
import { useSelector } from 'react-redux';
import ReviewFormComponent from "./reviewForm"


function ReviewFormModal() {
  const [showModal, setShowModal] = useState(false);

  const allRevs = useSelector(state => state.reviews)


  useEffect(()=> {
    setShowModal(false)
  }, [allRevs])

  return (
    <>
      <div className='create-review-button' onClick={() => setShowModal(true)}>Write your Review</div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ReviewFormComponent  />
        </Modal>
      )}
    </>
  );
}

export default ReviewFormModal;
