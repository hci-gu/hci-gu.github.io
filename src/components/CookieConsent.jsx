import React from 'react'
import ReactCookieConsentComponent from 'react-cookie-consent'

// @ts-ignore
const ReactCookieConsent = ReactCookieConsentComponent.default

const CookieConsent = () => {
  return (
    <ReactCookieConsent
      location="bottom"
      buttonText="Jag förstår"
      cookieName="cookie-consent"
      style={{
        background: '#FBFBFB',
        color: 'black',
        border: '1px solid rgba(0,0,0,0.25)',
        display: 'flex',
        justifyContent: 'center',
      }}
      buttonStyle={{
        background: '#1b4079',
        borderRadius: '4px',
        color: 'white',
        fontSize: '13px',
      }}
      contentStyle={{
        flex: '1 1 1',
      }}
      expires={150}
    >
      Den här hemsidan använder cookies för att förbättra din
      användarupplevelse.
    </ReactCookieConsent>
  )
}

export default CookieConsent
