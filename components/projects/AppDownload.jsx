import React from 'react'
import styled from '@emotion/styled'

const AppstoreBadges = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > span {
    font-weight: 500;
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
