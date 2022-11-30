import { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { ReactTinyLink } from 'react-tiny-link'
import { mobile } from '../utils/layout'

const api = axios.create({
  baseURL: 'https://api.github.com',
})

const Grid = styled.div`
  margin-bottom: 50px;
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  ${mobile()} {
    grid-template-columns: 1fr;
  }
`

const showRepos = [
  'corona-movement',
  'auto-transcriber',
  'facebook-for-digital-seniors',
  'smart-floorball-club',
]

const Repositories = () => {
  const [repos, setRepos] = useState([])
  useEffect(() => {
    const init = async () => {
      const res = await api.get(`/orgs/hci-gu/repos`)
      const repos = res.data
      setRepos(repos.filter((r) => showRepos.includes(r.name)))
    }
    init()
  }, [])

  return (
    <Grid>
      {repos.map((repo, i) => (
        <ReactTinyLink
          key={`Repo_${i}`}
          cardSize="large"
          showGraphic={true}
          defaultMedia={`/img/projects/${repo.name}.png`}
          header={repo.name}
          maxLine={1}
          url={repo.html_url}
        />
      ))}
    </Grid>
  )
}

export default Repositories
