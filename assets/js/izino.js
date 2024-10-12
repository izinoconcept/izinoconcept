ria.RestService.addProxy("/riaproxy/?url=");
            function search() {
                var fs = new ria.search.FeatureService(
                        "http://<server>:<port>/rest/Spatial/FeatureService");
                var d = fs.searchNearest({
                    table: "/Samples/NamedTables/WorldcapTable",
                    geometry: new OpenLayers.Geometry.Point(12.875977, 47.813155),
                    srs: "epsg:4326",
                    attributes: ["Capital"],
                    withinDistance: "2000 mi",
                    distanceAttributeName: "dist",
                    maxFeatures: 10
                });
                d.addCallback(function(result) {alert(result.features.length + " result(s)")});
            }
