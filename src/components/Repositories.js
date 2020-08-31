import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { ReactTinyLink } from 'react-tiny-link'
import { mobile } from '../utils/layout'

const api = axios.create({
  baseURL: 'https://api.github.com',
})

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  > h2 {
    font-size: 48px;
  }

  ${mobile()} {
    width: 100%;
    padding: 1em;
  }
`

const Grid = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  ${mobile()} {
    grid-template-columns: 1fr;
  }
`

const Repositories = () => {
  const [repos, setRepos] = useState([])
  useEffect(() => {
    const init = async () => {
      const res = await api.get(`/orgs/hci-gu/repos`)
      const repos = res.data
      setRepos(repos.filter((r) => r.name !== 'hci-gu.github.io'))
    }
    init()
  }, [])

  return (
    <Container>
      <h2>Projects</h2>
      <p>
        Here you can find some of the projects we've worked on or are currently
        working on:{' '}
      </p>
      <Grid>
        {repos.map((repo, i) => (
          <ReactTinyLink
            key={`Repo_${i}`}
            cardSize="large"
            showGraphic={true}
            header={repo.name}
            maxLine={1}
            url={repo.html_url}
          />
        ))}
      </Grid>
    </Container>
  )
}

export default Repositories
