import { NextApiRequest, NextApiResponse } from 'next'

import { spotify } from 'service/spotify'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const params = req.query
    const response = await spotify.get('me/playlists', { params })

    return res.json(response.data)
  } catch (err) {
    return res.status(404).json({ err })
  }
}
