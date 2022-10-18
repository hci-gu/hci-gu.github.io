import React from 'react'
import styled from '@emotion/styled'
import { mobile, renderRichText, smallLaptop } from '../lib/utils/layout'

const Container = styled.div`
  padding: 36px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  > h1 {
    font-weight: 800;
    font-size: 40px;
    line-height: 54px;

    color: #18191f;

    ${mobile()} {
      text-align: center;
      font-size: 36px;
      line-height: 50px;
    }
  }
  > p {
    font-size: 18px;
    line-height: 32px;

    color: #18191f;

    ${smallLaptop()} {
      font-size: 16px;
      line-height: 24px;
    }
    margin-bottom: 36px;
  }
`

const Courses = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    > h2 {
      font-size: 16px;
      font-weight: 300;
      width: 80%;
      > strong {
        margin: 0 auto;
        font-size: 24px;
      }
    }
    > p {
      font-size: 14px;

      ${mobile()} {
        max-width: 80%;
      }
    }

    > img {
      margin: 8px;
    }
  }

  ${mobile()} {
    grid-template-columns: 1fr;
  }
`

const Course = ({ name, description, points, icon }) => {
  return (
    <div>
      {icon && <img src={icon.url}></img>}
      <h2>
        <strong>{name}</strong> ({points}HP)
      </h2>
      {renderRichText(description)}
    </div>
  )
}

const Education = ({ title, description, courses }) => {
  return (
    <Container>
      <h1>{title}</h1>
      {renderRichText(description)}
      <Courses>
        {courses.map((course, i) => (
          <Course key={`Course_${i}`} {...course} />
        ))}
      </Courses>
    </Container>
  )
}

export default Education
