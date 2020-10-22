const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];


// Helper function to set attributes on DOM Elements.
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Create elements for Links and Photos, add to the DOM.

function displayPhotos() {
  // Run function for each object in Array.
  photosArray.forEach((photo) => {
    // Create an anchor element to link to unsplash.
    const item = document.createElement('a');
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank'
    });

    // Create an image for photo
    const img = document.createElement('img');
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description
    });

    // Put <img> inside <a> then put both inside our image container element.
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}


// Unsplash API
const count = 10;
const apiKey = 'xxxxxxx';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // Catch error.
    console.log(error);
  }
}

// On Load

getPhotos();