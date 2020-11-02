# 2020-01-24 Discussion about state of maps in Vizzuality and WebGL workshop

*****

* Do we want to use zeit/now as deploy option?
* We should prepare a webgl workshops. Javi(@weberjavi) will start a proposal.
* Why we use mapbox?
  * First motivation get vector tiles into the map (open sourced the vector tile spec seemed a good shot).
  * Performance: WebGL, vector tiles more performant (interaction, smooth scrolling...), eventually decoding vectors for animations...
  * Why through the Layer Manager?
    * Organized
    * Config driven
    * Most of the desired interactions are there already.
  * Dependes on the data (vector, geojason) but if are images, raster maybe is not the best solution (maybe the performance is not as good as with vectors maybe leaflet (David)
* Rodrigo estated that handling raster stuff on the GPU might be a good idea since idle time could me minor than handling rasters from the CPU
* David will do some presentation about infrastructure and the things that we can do depending on the service (carto, mapbox)
* Use trase hands off to identify what parts of the code needs to be shared before someone dies (David has a document)
* Ed asks for help on GFW it seems that want to build super cool and stuff 
