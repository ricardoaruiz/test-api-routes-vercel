import { NextRequest, NextResponse } from 'next/server'

export function middleware(req) {
  // Intercept API request and verify token
  if (
    req.page.name?.includes('/api') &&
    !req.page.name?.includes('/hello')
  ) {
    const authorization = req.headers.get('authorization')
    const userId = req.page.name?.includes('[userId]')
      ? Number(req.page.params?.userId)
      : undefined

    if (!authorization) {
      return new Response(undefined, {
        status: 401
      })
    }

    return
  }

}
