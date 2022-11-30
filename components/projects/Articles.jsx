import styled from '@emotion/styled'
import { mobile, tablet } from '../../lib/utils/layout'

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
        <img
          src={article.publisherLogo.url}
          alt={`${article.publisher} logo`}
        />
      </div>
      <span>{article.publisher}</span>
      <a href={article.link} target="_blank" rel="noopener noreferrer">
        {article.title}
      </a>
    </ArticleContainer>
  )
}

const Articles = ({ articles, title }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <div>
        {articles.map((article, i) => (
          <Article article={article} key={`Article_${i}`} />
        ))}
      </div>
    </Container>
  )
}

export default Articles
