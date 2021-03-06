import { NowRequest, NowResponse } from "@vercel/node";
import { verify } from "../crypto";

export default async function (req: NowRequest, res: NowResponse) {
  const { publicModulus, data, signature } = req.body;
  res.send(
    {
      result: await verify(
        publicModulus,
        Buffer.from(JSON.stringify(data)),
        Buffer.from(JSON.stringify(signature)),
      ),
    },
  );
}
