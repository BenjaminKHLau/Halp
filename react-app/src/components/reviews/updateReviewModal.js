import React, { useEffect, useState } from 'react';
import { Modal } from '../MODAL/modal';
import { useSelector } from 'react-redux';
import EditReviewFormComponent from "./reviewForm"


function UpdateReviewFormModal({review}) {
  const [showModal, setShowModal] = useState(false);
  console.log('review of update', review)
  const whichRevs = useSelector(state => state.reviews)
  console.log("show me this rev", whichRevs)


  useEffect(()=> {
    setShowModal(false)
  }, [whichRevs])

  return (
    <>
      <div className='edit-review-button' onClick={() => setShowModal(true)}></div>
      {/* {showModal && ( */}
        <Modal onClose={() => setShowModal(false)}>
          <EditReviewFormComponent />
        </Modal>
      {/* )} */}
    </>
  );
}

export default UpdateReviewFormModal;
