import React from 'react'
import styled from 'styled-components'
import Link from '../../components/Link'

const teamList = [
  {
    name: 'Sebastian Andreasson',
    twitter: 'sebasti_andreas',
    link: 'https://twitter.com/Sebasti_Andreas',
  },
  {
    name: 'Vasiliki Mylonopoulou',
    link: 'https://www.vasilikimylo.com/',
  },
  {
    name: 'Mattias Rost',
    twitter: 'rrostt',
    link: 'https://twitter.com/rrostt',
  },
  {
    name: 'Alexandra Weilenmann',
    twitter: 'superalex',
    link: 'https://twitter.com/superalex',
  },
]

const Container = styled.div`
  margin-top: 25px;

  font-style: italic;
  font-weight: 300;
`

const textForTeamMember = ({ name, twitter, link }, i) => {
  return (
    <span key={`Team_${name}`}>
      {i > 0 && `, `}
      {i === teamList.length - 1 && ` and `}
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
