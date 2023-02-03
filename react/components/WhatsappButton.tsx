/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import PropTypes from 'prop-types'

type Props = {
  logo: string
  phone: string
  message: string
  width: number
  height: number
}

const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {
  const formattedMessage = message.replace(/ /g, '%20')

  return (
    <>
      <div className="fixed bottom-2 right-2 flex flexColumn">
        <a
          href={`https://wa.me/${phone}?text=${formattedMessage}`}
          target="_blank"
          rel="noreferrrer noopener"
        >
          <img src={logo} width={width} height={height} alt="Whatsapp" />
        </a>
      </div>
    </>
  )
}

WhatsappButton.propTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

WhatsappButton.defaultProps = {
  logo: 'logo.png',
  phone: '6547896511',
  message: 'prueba prueba',
  width: 120,
  height: 120,
}

WhatsappButton.schema = {
  title: 'Whatsapp Button',
  type: 'object',
  properties: {
    logo: {
      title: 'Logo Whatsapp',
      type: 'string',
      widget: {
        'iu:widget': 'image-uploader',
      },
    },
    phone: {
      title: 'Phone Whatsapp',
      description: 'Agrega el número de teléfono',
      type: 'string',
    },
    message: {
      title: 'Mensaje Whatsapp',
      description: 'Agrega el mensaje',
      type: 'string',
      widget: {
        'ui:widget': 'textarea',
      },
    },
    width: {
      title: 'Width',
      type: 'number',
      widget: {
        'ui:widget': 'input',
      },
    },
    height: {
      title: 'Width',
      type: 'number',
      widget: {
        'ui:widget': 'input',
      },
    },
  },
}

export default WhatsappButton
