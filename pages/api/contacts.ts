import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  data: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const body = req.body
  console.log('body: ', body)

  // Both of these are required.
  if (!body.first) {
    return res.status(404).json({ data: 'Name not found' })
  }

  // Found the name.
  res.status(200).json({ data: `${body.first} ${body.title} ${body.mail} ${body.phone} ${body.company} ${body.website} ${body.subject} ${body.comments}` })
}
