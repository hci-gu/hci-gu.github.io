import styled from '@emotion/styled'
import { middleContent, mobile } from '../../lib/utils/layout'

const Container = styled.div`
  font-family: 'Manrope';
  ${mobile()} {
    padding-top: 0;
  }
`

const Content = styled.div`
  ${middleContent()}
`

const ReadMore = styled.div`
  display: flex;
  justify-content: center;

  > a {
    text-decoration: underline;
    color: black;
  }
`

const Publicationlist = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const PublicationContainer = styled.a`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 8px 16px;
  border-radius: 8px;

  > h2 {
    font-size: 18px;
    font-weight: 700;

    margin: 0;
  }

  > h3 {
    font-size: 16px;
    font-weight: 400;
    margin: 0;
  }

  > div {
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    > div {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 4px;
    }
  }
`

const mdiAuthorIds = [83530, 85192, 899627, 1159229, 1092337]

const Publication = ({ publication }) => {
  return (
    <PublicationContainer
      href={`https://gup.ub.gu.se/publication/${publication.id}`}
    >
      <h2>{publication.title}</h2>
      <h3>{publication.sourcetitle}</h3>

      <div>
        <div>
          {publication.authors.map((author, i) => (
            <span
              key={author.id}
              style={{
                color: mdiAuthorIds.includes(author.id) ? '#004B8A' : 'black',
                fontWeight: mdiAuthorIds.includes(author.id) ? 800 : 400,
              }}
            >{`${author.first_name} ${author.last_name}${
              i < publication.authors.length - 1 ? ', ' : ''
            }`}</span>
          ))}
        </div>
        <span>{publication.pubyear}</span>
      </div>

      {/* <p>{publication.abstract}</p> */}
    </PublicationContainer>
  )
}

export default function ({ publications }) {
  return (
    <Container>
      <Content>
        <h1>Publications</h1>
        <Publicationlist>
          {publications.map((publication) => (
            <Publication key={publication.id} publication={publication} />
          ))}
        </Publicationlist>
        <ReadMore>
          <a href="https://gup.ub.gu.se/publications/list?department_id=&person_id=83530%3B85192%3B899627%3B1159229%3B1092337">
            <h3>See all</h3>
          </a>
        </ReadMore>
      </Content>
    </Container>
  )
}

export async function getServerSideProps(context) {
  const response = await fetch(
    'https://gup-server.ub.gu.se/v1/public_publication_lists?locale=sv&page=1&sort_by=pubyear&publication_id=&person_id=83530%3B85192%3B899627%3B1159229%3B1092337&department_id=&faculty_id=&serie_id=&project_id=&publication_type=&ref_value=&start_year=&end_year=&only_artistic=false',
    {
      headers: {
        Accept: 'application/json',
      },
    }
  )
  const data = await response.json()

  return {
    props: {
      publications: data.publications,
    },
  }
}
