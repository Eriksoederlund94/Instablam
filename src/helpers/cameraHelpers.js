export async function cameraOff(videoElement, whenDone) {
  const stream = videoElement.srcObject;
  const tracks = stream.getTracks();

  tracks.forEach(function (track) {
    track.stop();
  });

  videoElement.srcObject = null;
  whenDone();
}

export async function takePhoto(videoRef, photoRef) {
  try {
    const width = 360;
    const height = 400;

    let photo = photoRef.current;
    let video = videoRef.current;

    photo.width = width;
    photo.height = height;

    let ctx = photoRef.current.getContext('2d');

    ctx.drawImage(video, 0, 0, width, height);

    let userPhoto = photoRef.current.toDataURL('image/jpeg', 1);
    return userPhoto;
  } catch (err) {
    console.log('There was an error!!');
    console.log(err.message);
    return null;
  }
}
