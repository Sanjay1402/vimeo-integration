"use client"
import React, { useEffect, useState } from 'react';

const VideoPlayer = () => {
  const [embedHtml, setEmbedHtml] = useState('');

  useEffect(() => {
    const fetchVimeoVideo = async () => {
      const response = await fetch('https://api.vimeo.com/videos/1003202011', {
        headers: {
          Authorization: 'Bearer eb370555293e205e858097154c284fc3',
        },
      });

      const data = await response.json();
      setEmbedHtml(data.embed.html);
    };

    fetchVimeoVideo();
  }, []);

  return (
    <div style={{ width: '640px', height: '360px' }}  dangerouslySetInnerHTML={{ __html: embedHtml }} />
  );
};

export default VideoPlayer;
