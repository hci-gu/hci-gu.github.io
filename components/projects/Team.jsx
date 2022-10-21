import styled from '@emotion/styled'
import { mobile, tablet } from '../../lib/utils/layout'

const Container = styled.div`
  margin-top: 50px;

  font-style: italic;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${tablet()} {
    margin: 50px auto;
    width: 75%;
  }
  ${mobile()} {
    width: 100%;
  }
`

const textForTeamMember = ({ name, twitter, website }, i, length) => {
  return (
    <span key={`Team_${name}`}>
      {i > 0 && `, `}
      {i === length - 1 && ` and `}
      {!twitter && <a href={website}>{name}</a>}
      {twitter && (
        <>
          {name} (
          <a
            href={`https://twitter.com/${twitter}`}
            style={{ color: '#1DA1F2' }}
          >
            {twitter}
          </a>
          )
        </>
      )}
    </span>
  )
}

const Team = ({ team, introduction }) => {
  return (
    <Container>
      <div>
        {introduction}{' '}
        {team.map((member, i) => textForTeamMember(member, i, team.length))}
      </div>
    </Container>
  )
}

export default Team
