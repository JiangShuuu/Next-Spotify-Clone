import { NextResponse } from 'next/server'

export async function POST(request: Request, { params }: { params: any }) {
  const body = await request.json()
  console.log('params', body)

  return NextResponse.json({
    data: true,
  })
}
