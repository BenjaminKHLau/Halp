import React, { useEffect, useState } from 'react';
import { Modal } from '../MODAL/modal';
import { useSelector } from 'react-redux';
import EditReviewFormComponent from "./editForm"


function UpdateReviewFormModal({review, setReviewModal}) {
  const [showModal, setShowModal] = useState(false);
  console.log('review of update', review)
  const whichRevs = useSelector(state => state.review)
  console.log("show me this rev", whichRevs)


  useEffect(()=> {
    setShowModal(false)
  }, [whichRevs])

  return (
    <>
      <div className='edit-review-button' onClick={() => setShowModal(true)}></div>
      {/* {showModal && ( */}
        <Modal onClose={() => setReviewModal(false)}>
        <EditReviewFormComponent setReviewModal={setReviewModal} review={review} formType="UPDATE"/>
        </Modal>
      {/* )} */}
    </>
  );
}

export default UpdateReviewFormModal;
