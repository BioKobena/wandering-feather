import { NextRequest, NextResponse } from 'next/server'
import { PostType } from '@prisma/client'
import prisma from '../../../../lib/prisma'


// POST - Créer un post
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { title, content, type } = body

    // Vérifie que le type est valide
    if (!Object.values(PostType).includes(type)) {
      return NextResponse.json({ error: 'Invalid post type' }, { status: 400 })
    }

    const newPost = await prisma.post.create({
      data: { title, content, type },
    })

    return NextResponse.json(newPost, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create post', details: error }, { status: 500 })
  }
}

// GET - Récupérer tous les posts
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const type = searchParams.get('type')

    let posts

    if (type && Object.values(PostType).includes(type as PostType)) {
      posts = await prisma.post.findMany({
        where: { type: type as PostType },
        orderBy: { createdAt: 'desc' },
      })
    } else {
      posts = await prisma.post.findMany({
        orderBy: { createdAt: 'desc' },
      })
    }

    return NextResponse.json(posts, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch posts', details: error }, { status: 500 })
  }
}
