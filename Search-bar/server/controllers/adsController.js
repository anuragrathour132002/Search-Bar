import adscollectionsModel from "../model/ads.js";
import { adsCompanyModel } from "../model/ads.js";
export default class AdsControllers {
  static getAllDoc = async (req, res) => {
    try {
      // const result = await adscollectionsModel.find();
      // const resultcompany = await adsCompanyModel.find();

      const matched = await adscollectionsModel.aggregate([
        {
          $lookup: {
            from: "companycollections",
            localField: "companyId",
            foreignField: "compId",
            as: "matched",
          },
        },
        {
          $match: { matched: { $ne: [] } },
        },
      ]);
      res.send(matched);

      // res.send(result);
      // res.send(resultcompany);
      //  console.log(resultcompany);
    } catch (error) {}
  };
}
