import React from 'react'

import './notification.style.css'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className={message.success ? 'success' : 'fail'}>{message.text}</div>
  )
}

export default Notification
