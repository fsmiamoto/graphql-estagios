import Offers from "./models/Offer";
import lodash from "lodash";

export default {
  Query: {
    getOffers: () => Offers.find(),
    findOffers: (_, args) => {
      const query = {
        code: args.code,
        description: args.description,
        courses: args.course,
        date: args.date,
        jobType: args.jobType
      };

      return Offers.find(lodash.pickBy(query, lodash.identity));
    }
  }
};
