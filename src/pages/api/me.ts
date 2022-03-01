import { NextApiRequest, NextApiResponse } from 'next'

import { spotify } from 'service/spotify'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await spotify.get('me')

    return res.json(response.data)
  } catch (err) {
    return res.status(404).json({ err })
  }
}
