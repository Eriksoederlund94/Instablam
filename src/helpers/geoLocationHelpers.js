export async function getLocationFromGeolocation(latitude, longitude, showMessage) {
  const url = `https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=15752455676636e15981152x56010`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const city = data.city;
    const country = data.country;

    if (latitude !== null) {
      sessionStorage.setItem('city', city);
      sessionStorage.setItem('country', country);
    }
  } catch (error) {
    console.log(error);
    showMessage('This device does not have access to the Geolocation API.');
  }
}
