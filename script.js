require([
        "esri/WebScene",
        "esri/views/SceneView",
        "esri/layers/Layer"
      ], function (Map, SceneView, Layer) {
        const map = new Map({
          basemap: "dark-gray",
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
            id: "001215337f694fb4a44264582520d507"
          }
        })
          .then(addLayer)
          .catch(rejection);
        
         var layer = Layer.fromPortalItem({
          portalItem: {
            id: "29148795c78c4591a43902f90680fe82"
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
