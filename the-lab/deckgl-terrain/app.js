/* eslint-disable max-statements */
import React from 'react';
import {render} from 'react-dom';
import DeckGL from '@deck.gl/react';

import {TerrainLayer} from '@deck.gl/geo-layers';
import {AmbientLight, PointLight, DirectionalLight, LightingEffect} from '@deck.gl/core';

// create point light source
const pointLight = new PointLight({
  color: [255, 255, 255],
  intensity: 2.0,
  // use coordinate system as the same as view state
  position: [-120, 38.5, 5000]
});

const directionalLight= new DirectionalLight({
  color: [128, 128, 0],
  intensity: 0.3,
  direction: [0, -100, -100],
  _shadow: true
});

// create lighting effect with light sources
const lightingEffect = new LightingEffect({ pointLight, directionalLight});

// Set your mapbox token here
const MAPBOX_TOKEN = "pk.eyJ1IjoiamF2aWVyYWJpYSIsImEiOiJjang0dWJycXAwY2J2NDNydnhmbnhydDllIn0.WiUcDoHRjIsDPY9WJQWzSw "// eslint-disable-line

const INITIAL_VIEW_STATE = {
  latitude: 37.7493,
  longitude: -122.4233,
  zoom: 11.5,
  bearing: 140,
  pitch: 60,
  maxPitch: 89
};

const TERRAIN_IMAGE = `https://api.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}.png?access_token=${MAPBOX_TOKEN}`;
// const TERRAIN_IMAGE = `https://i.imgur.com/azWpfWK.png`;

const SURFACE_IMAGE = `https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}@2x.png?access_token=${MAPBOX_TOKEN}`;

// https://docs.mapbox.com/help/troubleshooting/access-elevation-data/#mapbox-terrain-rgb
// Note - the elevation rendered by this example is greatly exagerated!
const ELEVATION_DECODER = {
  rScaler: 6553.6,
  gScaler: 25.6,
  bScaler: 0.1,
  offset: -10000
};

const material = {
  // ambient: 0.35,
  // diffuse: 0.6,
  shininess: 12,
  // specularColor: [250, 30, 30]
}

export default function App({
  texture = null,
  wireframe = false,
  initialViewState = INITIAL_VIEW_STATE
}) {
  const layer = new TerrainLayer({
    id: 'terrain',
    minZoom: 0,
    maxZoom: 23,
    strategy: 'no-overlap',
    elevationDecoder: ELEVATION_DECODER,
    elevationData: TERRAIN_IMAGE,
    texture,
    wireframe,
    color: [120, 255, 255],
    bounds: [-122.5233, 37.6493, -122.3566, 37.8159],
    meshMaxError: 10.0,
    material
  });

  return <DeckGL initialViewState={initialViewState} controller={true} layers={[layer]} effects={[lightingEffect]} />;
}

export function renderToDOM(container) {
  render(<App />, container);
}