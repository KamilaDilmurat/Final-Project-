require([
        "esri/WebScene",
        "esri/views/SceneView",
        "esri/layers/Layer"
      ], function (Map, SceneView, Layer) {
        const map = new Map({
          basemap: "topo-vector",
          ground: "world-elevation" 
        });

       var view = new SceneView({
          map: map,
          container: "viewDiv",
         scale: 500000,
          center: [87.5, 43.8]
        });

        var layer = Layer.fromPortalItem({
          portalItem: {
            id: "6d6d3076dc0c444cacc4a413b7427920"
          }
        })
          .then(addLayer)
          .catch(rejection);
  
  var layer = Layer.fromPortalItem({
          portalItem: {
            id: "1930a11f49ae402bb725398c8a3c79e9"
          }
        })
          .then(addLayer)
          .catch(rejection);

        // Adds the layer to the map once it loads
        function addLayer(layer) {
          map.add(layer);
        }
        function rejection(error) {
          console.log("Layer failed to load: ", error);
        }
      })
