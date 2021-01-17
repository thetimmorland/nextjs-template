import type { NextApiRequest, NextApiResponse } from "next";
import { Person } from "types";

export default (_: NextApiRequest, res: NextApiResponse<Person>) => {
  res.status(200).json({ name: "Tim" });
};
