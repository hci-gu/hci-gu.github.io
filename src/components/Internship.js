import React from 'react'
import styled from 'styled-components'
import { mobile } from '../utils/layout'

const Container = styled.div`
  padding-bottom: 100px;
  margin: 0 auto;
  width: 60%;
  max-width: 900px;

  ${mobile()} {
    width: 100%;
    padding: 1em;
  }

  > p {
    text-align: justify;
  }
`

const Internship = () => {
  return (
    <Container>
      <p>
        <h2>HCI Digital internship </h2>
        The division of HCI at University of Gothenburg is opening up
        applications for digital internships!
        <br></br>
        <br></br>
        The purpose of the division is to contribute to a sustainable and serene
        way of living with technology. In a world where IT is constantly
        present, it is important to understand this presence and how it affects
        us. Human-Computer Interaction (HCI) has often focused on developing new
        artefacts to visualize and design a future world of information
        technology. Now we already live with technology around us, so our role
        as researchers and developers is instead to enhance and embellish our
        ways of living with technology. Because even though we are in the middle
        of digitalization and have almost endless possibilities of doing things
        with the help of IT, there is still a lot that does not work as we wish,
        and some that even makes it more difficult and causes stress. We want to
        understand and influence this development. The division started in the
        summer of 2019 and is currently expanding, focusing on becoming an
        important player within research, education, and collaboration at the
        University of Gothenburg. A big focus area for the division is health
        and well-being, an example of a project here is ”Digital seniors” which
        focuses on the growing group of older people who have been actively
        using computers for a long time – digital seniors.
        <br></br>
        <h2>The internship</h2>
        We are currently looking for interns for Autumn 2020 for a duration of{' '}
        <strong>_WEEKS_</strong> weeks with start date on{' '}
        <strong>_DATE_</strong>. The internship will revolve around the theme
        exploring technology, where you will pick an area to focus on and
        together with our division explore it through experimenting and
        developing applications within that space.
        <br></br>
        <br></br>
        The internship will provide opportunities to work together with our
        division on a daily basis and get practical experience working on
        research projects. The tasks themselves might vary depending on the
        project but will include things such as:
        <br></br>
        <br></br>
        <ul>
          <li>Programming research prototypes and tools for research. </li>
          <li>
            Work closely and take part in daily meetings and work discussions
            with the division.
          </li>
          <li>
            Participate in seminars and other events organized by division of
            HCI and the University.
          </li>
          <li>Conduct research, collect and analyze data </li>
        </ul>
        For the division, the internship is a way to both further explore
        different technologies, as well as dive deeper into our focus areas. Our
        main focus area is health and well-being. We want to explore ways of
        understanding how technology affects our well-being. This includes
        mindfulness, physical health, etc. One area we want to explore connected
        to this is hydroponics and gardening, and how it connects to how we live
        with technology. Gardening is associated both to health in terms of
        therapeutics, but also as a way of living a healthy life. To this we are
        interested both in how technology (sensors and automation) alter this
        experience, as well as how we may take inspiration from gardening
        practices and experiences into the design of digital technology. As for
        technologies we are interested in:
        <br></br>
        <ul>
          <li>
            <strong>Mixed reality </strong>
            <br></br>
            For this area we want to focus on possibilities of exploring ways of
            developing augmented reality applications using virtual reality.
          </li>
          <li>
            <strong>Applied AI </strong>
            <br></br>
            Exploring ways of using preexisting AI solutions in real world
            applications. All big cloud services today offer AI solutions that
            are ready to use, in what ways can they be utilized.
          </li>
        </ul>
        If any of these focus areas sound interesting please state in your
        application why and what you would want to focus on in any of these
        areasthem.
        <br></br>
        <h2>Requirements</h2>
        We are looking for self-driven interns who are interested in exploring
        technology and learning along the way. Programming knowledge is required
        and some prior experience developing applications is a bonus. You must
        be fluent in spoken and written English.
        <br></br>
        <h2>Digital internship </h2>
        The division of HCI is currently working remote due to the Covid 19
        situation, and we have an established online work environment. The
        entire internship will be done remotely with weekly Zoom meetings and
        close communication via Slack. We expect to recruit 3-5 interns, which
        means that there will be a small group that could have some internal
        collaboration as well, depending on interest and topics. Our working
        language is English. This is an unpaid internship. Having finished the
        agreed project, you will receive a certificate and you will be invited
        as a co-author for any papers that stem from your work.
        <br></br>
        <h2>Application</h2>
        To apply, please send your CV as well as a text of 1-2 pages describing
        why you want to work within one of our specified areas and an example of
        something you would like to explore within it by <strong>
          _DATE_
        </strong>{' '}
        to{' '}
        <a href="mailto:sebastian.andreasson@ait.gu.se">
          sebastian.andreasson@ait.gu.se
        </a>
        .<br></br>
        <br></br>
        If you have any questions, please contact us via the same email.
      </p>
    </Container>
  )
}

export default Internship
