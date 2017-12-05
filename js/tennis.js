function tennisApi() {

  var api = {};
  var apikey = "pw9km4p5mx6nx8jdxzd45h73";
  function load(pos, callback) {
    var search = { "lat_lon": pos.lat + ',' + pos.lon, "current_page": "1", "query": "Green Dot", "start_date": "2017-12-05..2018-01-01" };

    var myJSON = JSON.stringify(search);
    var url = "http://localhost:3000/events/" + myJSON;

    $.getJSON(url, function (data) {
      var items = [];
      $.each(data.results, function (result) {
        var pos = {
          lat: result.place.geopoint.lat,
          lng: result.place.geopoint.lon
      };
        items.push({ name: result.assetName, pos: pos, url: result.homePageUrlAdr, logo: result.logoUrlAdr });
      });

      if (callback != undefined) {
        callback(items);
      }
    });
  }
  api.load = load;

  return api;

};
