import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest): Promise<NextResponse> {
  const secret = request.nextUrl.searchParams.get('secret');

  if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  try {
    const body = await request.json();

    // Revalidate the blog listing page
    revalidatePath('/[locale]/blog', 'page');

    // If a specific slug is provided (from Contentful webhook payload), revalidate that page too
    const slug: string | undefined = body?.fields?.slug?.['en-US'] ?? body?.fields?.slug?.['en'];
    if (slug) {
      revalidatePath(`/[locale]/${slug}`, 'page');
    }

    return NextResponse.json({ revalidated: true, slug: slug ?? null });
  } catch {
    return NextResponse.json({ message: 'Failed to revalidate' }, { status: 500 });
  }
}
