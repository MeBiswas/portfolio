// Apollo
import { gql } from "@apollo/client";

// Introduction Query
export const getIntroductionQuery = gql`
  {
    intro {
      name
      specialization
    }
  }
`;

// About Query
export const getAboutDataQuery = gql`
  {
    about {
      title
      profileTitle
      skillsTitle
      profile {
        dob
        name
        email
        website
        job
      }
      skills {
        skill
        proficiency
      }
    }
  }
`;
