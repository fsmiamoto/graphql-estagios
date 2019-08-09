import { gql } from "apollo-server";

export default gql`
  type Offer {
    code: String
    description: String
    jobType: String
    date: String
    courses: [String]
  }

  type Query {
    getOffers: [Offer]!
      findOffers(code: String, description: String, jobType: String, date: String, course: String): [Offer]!
  }

  type Mutation {
    addOffer(
      code: String
      description: String
      jobType: String
      date: String
      courses: [String]
    ): Offer
  }
`;
