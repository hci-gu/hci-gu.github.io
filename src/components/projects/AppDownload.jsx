import React from 'react'
import styled from 'styled-components'

const AppstoreBadges = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > span {
    font-weight: 300;
    font-size: 20px;
  }

  > a > img {
    width: 200px;
  }
`

const AppDownload = ({ title, googlePlay, appstore }) => {
  return (
    <AppstoreBadges>
      <span>{title}</span>
      <a href={googlePlay} target="_blank" rel="noopener noreferrer">
        <img
          src="/img/assets/google-play-badge.png"
          alt="Google play button"
        ></img>
      </a>
      <a href={appstore} target="_blank" rel="noopener noreferrer">
        <img
          src="/img/assets/appstore-badge.png"
          alt="Appstore button"
          style={{ marginTop: 10 }}
        ></img>
      </a>
    </AppstoreBadges>
  )
}

export default AppDownload