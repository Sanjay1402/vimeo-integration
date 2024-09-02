import { Vimeo } from 'vimeo';
import path from 'path';

export async function POST(req) {
  const client_id = '390348edbf59801edcdfc2334cf5b33ead46f3ab';
  const client_secret = 'naTBTr/PE96B9MgvaeK9E7UHjZIhKIZHVxM5kOAunLmdkSwD/mk9bKYU2p3TDxIXevYbAUnh1UWzmJvbDsA8TxB5jJa/FL1WCA0CszLPJKERdJ/ZslA8eeR53t6U0h1v';
  const access_token = '62c83abb2aa4c495aa5c11ddfd7fadb5';

  let client = new Vimeo(client_id, client_secret, access_token);

  const videoPath = path.join(process.cwd(), 'Create Next App - Google Chrome 2024-08-27 15-01-05.mp4'); // Adjust the path

  return new Promise((resolve) => {
    client.upload(
      videoPath,
      {
        name: 'Untitled',
        description: 'The description goes here.',
      },
      function (uri) {
        resolve(
          new Response(JSON.stringify({ uri }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          })
        );
        const videoId = uri.split('/').pop();
        console.log('API Response:',  videoId);
      },
      function (bytes_uploaded, bytes_total) {
        const percentage = ((bytes_uploaded / bytes_total) * 100).toFixed(2);
        console.log(bytes_uploaded, bytes_total, percentage + '%');
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
