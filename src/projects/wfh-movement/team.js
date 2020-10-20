import React from 'react'
import styled from 'styled-components'
import Link from '../../components/Link'

import teamList from './data/team'

const Container = styled.div`
  margin-top: 25px;

  font-style: italic;
  font-weight: 300;
`

const textForTeamMember = ({ name, twitter, link }, i) => {
  return (
    <span key={`Team_${name}`}>
      {i > 0 && `, `}
      {i === 3 && ` and `}
      {!twitter && <Link href={link}>{name}</Link>}
      {twitter && (
        <>
          {name} (
          <Link href={link} twitter>
            @{twitter}
          </Link>
          )
        </>
      )}
    </span>
  )
}

const Team = () => {
  return (
    <Container>
      <div>
        The researchers are:{' '}
        {teamList.map((member, i) => textForTeamMember(member, i))}
      </div>
    </Container>
  )
}

export default Team
