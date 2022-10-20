import React, { useEffect, useState } from 'react';
import { Modal } from '../MODAL/modal';
import { useSelector } from 'react-redux';
import ReviewFormComponent from "./reviewForm"


function UpdateReviewFormModal({review}) {
  const [showModal, setShowModal] = useState(false);
    console.log('review of update', review)
  const allRevs = useSelector(state => state.reviews)


  useEffect(()=> {
    setShowModal(false)
  }, [allRevs])

  return (
    <>
      <div className='edit-review-button' onClick={() => setShowModal(true)}></div>
      {/* {showModal && ( */}
        <Modal onClose={() => setShowModal(false)}>
              <ReviewFormComponent review={review} formType="UPDATE"/>
        </Modal>
      {/* )} */}
    </>
  );
}

export default UpdateReviewFormModal;
