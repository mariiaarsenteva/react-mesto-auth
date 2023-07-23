import { memo } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm.jsx";
import React from "react";

const DeletePopup = memo(({ isOpen, onClose, onSubmit }) => {

  function handleSubmit(evt) {
    evt.preventDefault()
    onSubmit()
  }

  return (
    <PopupWithForm
      name='delete-popup'
      title='Вы уверены ?'
      titleButton='Да'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  )
})

export default DeletePopup

