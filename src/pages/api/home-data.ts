import { NextApiRequest, NextApiResponse } from 'next'

import getDataHomePage from 'utils/getDataHomePage'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await getDataHomePage.execute()
    return res.json(data)
  } catch (err) {
    return res.status(404).json({ err })
  }
}
