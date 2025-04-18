import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../../../lib/prisma'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  if (typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid ID' })
  }

  switch (req.method) {
    case 'GET':
      const post = await prisma.post.findUnique({ where: { id } })
      if (!post) return res.status(404).json({ error: 'Not found' })
      return res.status(200).json(post)

    case 'PUT':
      const { title, content, type } = req.body
      const updated = await prisma.post.update({
        where: { id },
        data: { title, content, type },
      })
      return res.status(200).json(updated)

    case 'DELETE':
      await prisma.post.delete({ where: { id } })
      return res.status(204).end()

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
      return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
