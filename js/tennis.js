function tennisApi() {

  var api = {};
  var apikey = "pw9km4p5mx6nx8jdxzd45h73";
  function load(pos) {
    var search ={"lat_lon":pos.lat+','+pos.lon,"current_page":"1","query":"Green Dot","start_date":"2017-12-05..2018-01-01"};

    var myJSON = JSON.stringify(search);
    var url = "http://localhost:3000/events/" + myJSON;
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
