"use client";
import React, { useState } from 'react';

const UploadPage = () => {
  const [loading, setLoading] = useState(false);

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append('video', file);

    try {
      const response = await fetch('/api/upload-video', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (response.ok) {
        console.log('Video uploaded:', data.uri);
      } else {
        console.error('Error uploading video:', data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input type="file" accept="video/*" onChange={handleUpload} disabled={loading} />
      {loading && <p>Uploading...</p>}
    </div>
  );
};

export default UploadPage;
