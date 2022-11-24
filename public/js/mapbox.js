/* eslint-disable */
//const locations = JSON.parse(document.getElementById('map').dataset.locations);

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZ3JlZ2kiLCJhIjoiY2xhaml2c3RpMGRhcDN2cnFpbmxnaTB5dSJ9.s0RGfL_Z9xsgrwBCmkV3Xg';

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/gregi/clajp3ua7004m14mon4j9b626',
    scrollZoom: false,
    //   center: [-118.167549, 34.161147],
    //   zoom: 6,
    //   interactive: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    const el = document.createElement('div');
    el.className = 'marker';
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
