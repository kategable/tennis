function tennisApi() {

  var api = {};
  var apikey = "pw9km4p5mx6nx8jdxzd45h73";
  function load(pos) {
    var url = "https://api.amp.active.com/v2/search/?lat_lon=42.34%2C-88.04&radius=50&current_page=1&per_page=10&sort=distance&topic=tennis&exclude_children=false&api_key=pw9km4p5mx6nx8jdxzd45h73";
    //            http://api.amp.active.com/v2/search
    // $.ajax({
    //   url: url,
    //   type: 'GET',
    //   dataType: 'json',
    //   success: function () {
    //     var items = [];
    //     $.each(data, function (key, val) {
    //       items.push("<li id='" + key + "'>" + val + "</li>");
    //     });

    //     $("<ul/>", {
    //       "class": "my-new-list",
    //       html: items.join("")
    //     }).appendTo("body");
    //   },
    //   error: function () { alert('boo!'); },
    //   beforeSend: setHeader
    // });

    // function setHeader(xhr) {
    //   xhr.setRequestHeader('X-Originating-Ip', '98.220.98.123');
    // };
    $.getJSON(url, function (data) {
      var items = [];
      $.each(data, function (key, val) {
        items.push("<li id='" + key + "'>" + val + "</li>");
      });

      $("<ul/>", {
        "class": "my-new-list",
        html: items.join("")
      }).appendTo("body");
    });
  }
  api.load = load;

  return api;

};
