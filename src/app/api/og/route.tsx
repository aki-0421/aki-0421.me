import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

async function fetchGoogleFont(url: string): Promise<ArrayBuffer | null> {
  const css = await (
    await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1',
      },
    })
  ).text();

  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/,
  );

  if (!resource) return null;
  const res = await fetch(resource[1]);
  return res.arrayBuffer();
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const origin = url.origin;

  const fontNotoSansJP = await fetchGoogleFont(
    'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400&display=swap',
  );

  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        padding: '32px',
        display: 'flex',
        backgroundColor: 'hsl(360, 100%, 85%)',
      }}
    >
      <div
        style={{
          height: '100%',
          width: '100%',
          padding: '48px',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#fff',
          borderRadius: '32px',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            marginTop: '-32px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h1
            style={{
              fontFamily: 'Noto Sans JP',
              fontSize: '96px',
              color: 'hsl(0 0% 25%)',
              lineHeight: 1.1,
            }}
          >
            {req.nextUrl.searchParams.get('title')}
          </h1>
          {req.nextUrl.searchParams.get('subtitle') && (
            <h2
              style={{
                fontFamily: 'Noto Sans JP',
                fontSize: '32px',
                color: 'hsl(0 0% 55%)',
              }}
            >
              {req.nextUrl.searchParams.get('subtitle')}
            </h2>
          )}
        </div>
        <div
          style={{
            display: 'flex',
            alignSelf: 'flex-end',
            gap: '16px',
          }}
        >
          <img
            alt="profile"
            src={`${origin}/profile.png`}
            style={{
              height: '96px',
              border: '2px',
              borderRadius: '50%',
              borderColor: 'hsl(0 0% 92%)',
            }}
          />
          <h2
            style={{
              fontFamily: 'Noto Sans JP',
              fontSize: '36px',
              color: 'hsl(0 0% 55%)',
              lineHeight: 1,
            }}
          >
            @aki__0421
          </h2>
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Noto Sans JP',
          // biome-ignore lint/style/noNonNullAssertion: <explanation>
          data: fontNotoSansJP!,
        },
      ],
    },
  );
}
