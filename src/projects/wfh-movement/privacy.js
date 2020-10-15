import React from 'react'
import styled from 'styled-components'
import { mobile } from '../../utils/layout'

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

const Privacy = () => {
  return (
    <Container>
      <p>
        <h2>Privacy policy</h2>
        WFH movement (WFHM) is duty-bound to protect your integrity. This
        document describes what information WFHM collects via its app and how it
        uses the information collected. This privacy policy applies to WFHM's
        website and app.
        <br></br>
        <br></br>
        The WFH movement app is part of a research project conducted by
        researchers at the department of Applied IT at University of Gothenburg.
        <br></br>
        <h2>Personal data </h2>
        The term ‘personal data’ refers to any information relating to an
        identified or identifiable natural person. WFHM treats all personal data
        according to the General Data Protection Regulation (GDPR).
        <br></br>
        <br></br>
        Personal data that WFHM collects is demographic data collected through a
        form and activity data (tracked steps) gathered from a source selected
        by the user. WFHM collects personal data in the following scenarios:
        <br></br>
        <ul>
          <li>
            When you, as a user, through WFHM’s app choose to provide
            information about yourself.
          </li>
          <li>
            When you, as a user, choose to sync your steps data from a selected
            source with the app.
          </li>
        </ul>
        All data is stored securely on servers within the European Union (EU)
        and not shared with third parties.
        <br></br>
        <br></br>You can request to delete your data from within the app as long
        as it is installed on your device. You may also request a copy of your
        data by emailing sebastian.andreasson@ait.gu.se together with a unique
        identifier found on the settings screen of the app (24 characters). When
        you uninstall the app, this identifier is lost and we can no longer
        identify you in the dataset and it can therefore not be requested nor
        deleted.
        <br></br>
        <br></br>
        You are welcome to contact us about the personal data that WFHM holds
        about you (sebastian.andreasson@ait.gu.se).
      </p>
    </Container>
  )
}

export default Privacy
