import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const defaultLocale = 'fr';
const locales = ['fr', 'en'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Vérifie si un locale est déjà présent
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirige vers la locale par défaut
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Match toutes les routes sauf les fichiers statics et API
    '/((?!_next|api|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)',
  ],
};
