import React from 'react'
import styled from 'styled-components'
import { mobile, tablet } from '../../utils/layout'
import Link from '../Link'

const Container = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    width: 100%;
    display: grid;
    justify-content: center;
    align-items: start;
    grid-template-columns: repeat(3, 225px);
    grid-gap: 75px;

    ${tablet()} {
      grid-template-columns: repeat(2, 225px);
    }

    ${mobile()} {
      grid-template-columns: repeat(2, 150px);
    }
  }
`

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 225px;
  padding: 10px;

  text-align: center;

  > div {
    width: 225px;
    height: 225px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  > div > img {
    padding: 10px;
    width: 100%;
  }

  ${mobile()} {
    width: 150px;

    > div {
      width: 150px;
      height: 150px;
    }
  }
`

const Article = ({ article }) => {
  return (
    <ArticleContainer>
      <div>
        <img src={article.publisherLogo.url} />
      </div>
      <span>{article.publisher}</span>
      <a href={article.link} target="_blank">
        {article.title}
      </a>
    </ArticleContainer>
  )
}

const Articles = ({ articles }) => {
  return (
    <Container>
      <h2>WFH Movement in the media</h2>
      <div>
        {articles.map((article, i) => (
          <Article article={article} key={`Article_${i}`} />
        ))}
      </div>
    </Container>
  )
}

export default Articles
