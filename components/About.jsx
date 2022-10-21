import styled from 'styled-components'

const Container = styled.div``

const Content = styled.div`
  margin-top: 100px;
`

const Title = styled.div`
  font-size: 56px;
  font-weight: 900;
  color: #22223b;

  > h1 {
    margin: 0;
    padding: 0;
  }
`

const Description = styled.div`
  width: 600px;
  color: rgb(25, 25, 25);
  text-align: justify;

  > p > h2 {
    margin: 0;
  }
`

const About = () => {
  return (
    <Container>
      <Content>
        <Description>
          <p>
            <h2>Division of Human-Computer Interaction</h2>
            The purpose of the division is to contribute to a sustainable and
            serene way of living with technology. In a world where IT is
            constantly present, it is important to understand this presence and
            how it affects us. Human-Computer Interaction (HCI) has often
            focused on developing new artefacts to visualize and design a future
            world of information technology. Now we already live with technology
            around us, so our role as researchers and developers is instead to
            enhance and embellish our ways of living with technology. Because
            even though we are in the middle of digitalization and have almost
            endless possibilities of doing things with the help of IT, there is
            still a lot that does not work as we wish, and some that even makes
            it more difficult and causes stress. We want to understand and
            influence this development.
            <br></br>
            <br></br>
            The division started in the summer of 2019 and is currently
            expanding, focusing on becoming an important player within research,
            education, and collaboration at the University of Gothenburg.
            <br></br>
            <br></br>
            <h2>Research</h2>
            The division's research includes a wide range of research objects,
            perspectives and methods. We carry out various types of design
            research and analytical studies of empirical conditions. We do this
            work by designing, building and studying technology in use. In order
            to carry out the research, we sometimes need to develop new tools in
            order to get close and capture the everyday situation. This is a way
            of studying existing practices, what use looks like today. To study
            alternative ways in which technology can be present in everyday
            life, we sometimes also need to design and build these alternatives
            to be able to test them.
            <br></br>
            <br></br>
            This work is done through multidisciplinary perspectives and
            involves people with backgrounds in computer science, applied IT,
            and interaction design. To be able to carry out these studies,
            collaborations with other disciplines are needed.
            <br></br>
            <br></br>
            Our research has in the last years attracted funding from The
            Swedish Research Council, The Kamprad Family Foundation, and
            VINNOVA, as well as from industry and other organizations.
            <br></br>
            <br></br>
            The project Digital Seniors (2019-2021) focus on the growing group
            of older people who have been actively using computers for a long
            time – digital seniors. We are going to develop, test, and
            disseminate the concept of gracefully adaptive user interfaces –
            systems that can adapt and become simpler according to the users’
            needs and abilities. We hope this will enable digital seniors
            continue to use IT to do the tasks they are used to, despite age
            related challenges. Read more about this project on the web site or
            on the Facebook page.
            <br></br>
            <br></br>
            <h2>Education</h2>
            There are currently no specific courses within Human-Computer
            Interaction, but we hope to offer this soon.
            <br></br>
            <br></br>
            <h2>Collaborations</h2>
            We are involved in multiple university, national, and international
            research collaborations and networks. We are also participating in
            two of the university’s priority research area - learning and
            language technology.
            <br></br>
            <br></br>
            Through the project Digital Seniors, we are members of the
            University of Gothenburg’s Center for Ageing and Health – AgeCap
            Members of the division regularly participate in popular science
            contexts through their own texts and are interviewed in the media,
            and participate in conferences and lectures for the public. Here are
            some examples of our research in the media (Swedish):
            <br></br>
            <br></br>
            ”Selfies handlar om gemenskap”.
            <br></br>
            <br></br>
            ”Prylen i våra liv". Alexandra Weilenmann om mobil teknik. Intervju
            GU-Journalen 2017.
          </p>
        </Description>
      </Content>
    </Container>
  )
}

export default About
