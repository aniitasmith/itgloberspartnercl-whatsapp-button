import React from 'react'
import PropTypes from 'prop-types'

type Props = {
  logo: string
  phone: string
  message: string
}

const WhatsappButton = ({ logo, phone, message }: Props) => {
  return (
    <>
      <p>{logo}</p>
      <p>{phone}</p>
      <p>{message}</p>
    </>
  )
}

WhatsappButton.propTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
}

WhatsappButton.defaultProps = {
  logo: 'logo.png',
  phone: '6547896511',
  message: 'prueba prueba',
}

export default WhatsappButton
