import { NextApiRequest, NextApiResponse } from 'next'

import getCategoriesHomePage from 'utils/getCategoriesHomePage'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await getCategoriesHomePage.execute()
    return res.json(data)
  } catch (err) {
    return res.status(404).json({ err })
  }
}
