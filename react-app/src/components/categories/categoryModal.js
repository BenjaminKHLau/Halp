import React, { useEffect, useState } from 'react';
import { Modal } from '../MODAL/modal';
import { useSelector } from 'react-redux';
import CategoryFormComponent from './categoryform';

function CategoryFormModal() {
  const [showModal, setShowModal] = useState(false);

  const allCategories = useSelector(state => state.categories)


  useEffect(()=> {
    setShowModal(false)
  }, [allCategories])

  return (
    <>
      <div className='create-category-button' onClick={() => setShowModal(true)}>+</div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CategoryFormComponent  />
        </Modal>
      )}
    </>
  );
}

export default CategoryFormModal;
