import { Vimeo } from 'vimeo';
import path from 'path';

export async function GET() {
  const client_id = '390348edbf59801edcdfc2334cf5b33ead46f3ab';
  const client_secret = 'rKb5gtReUhq4yw8DHEgNr2oXoK06joK+kMv8sTD76lSKSoUAtVXRaAS9qQsVY9HwKyK2BS5UiviUJBCgJW65FzwPpIohNETqRrUW/GARUthyfpoDcpQ2N20+66PlqZJh';
  const access_token = '`eb370555293e205e858097154c284fc3`';

  let client = new Vimeo(client_id, client_secret, access_token);

  return new Promise((resolve) => {
    client.request(
        {
            method: 'GET',
            path: '/videos/1002228949',
        },
      function (error) {
        console.error('Video path:', videoPath);
        console.error('Upload failed:', error);
        resolve(
          new Response(JSON.stringify({ error: 'Upload failed: ' + error }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
          })
        );
      }
    );
  });
}
