$(document).ready(function() {
  var playlist = [];
  var $player = $('[name=aerial-player]');

  function getPlaylist() {
    playlist = [];
    var hour = moment().format('HH');
    var timeOfDay = hour >= 7 && hour <= 19 ? "day" : "night";

    $.each(videos, function(idx, video) {
      $.each(video.assets, function(idx, asset) {
        if (asset.timeOfDay == timeOfDay) {
          playlist.push(asset.url);
        }
      })
    })
  }

  function nextVideo() {
    if (playlist.length == 0) {
      getPlaylist();
    }

    var video = playlist.shift();
    $player.attr('src', video);
    $player.get(0).play();
  }

  $player.on('ended', function() {
    nextVideo();
  })

  nextVideo();
})

var videos = [{
  "id": "b1",
  "assets": [{
    "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b1-1.mov",
    "accessibilityLabel": "Hawaii",
    "type": "video",
    "id": "b1-1",
    "timeOfDay": "day"
  }, {
    "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b1-2.mov",
    "accessibilityLabel": "London",
    "type": "video",
    "id": "b1-2",
    "timeOfDay": "night"
  }, {
    "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b1-3.mov",
    "accessibilityLabel": "New York City",
    "type": "video",
    "id": "b1-3",
    "timeOfDay": "day"
  }, {
    "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b1-4.mov",
    "accessibilityLabel": "San Francisco",
    "type": "video",
    "id": "b1-4",
    "timeOfDay": "night"
  }]
}, {
  "id": "b2",
  "assets": [{
    "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b2-1.mov",
    "accessibilityLabel": "China",
    "type": "video",
    "id": "b2-1",
    "timeOfDay": "day"
  }, {
    "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b2-2.mov",
    "accessibilityLabel": "Hawaii",
    "type": "video",
    "id": "b2-2",
    "timeOfDay": "day"
  }, {
    "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b2-3.mov",
    "accessibilityLabel": "New York City",
    "type": "video",
    "id": "b2-3",
    "timeOfDay": "night"
  }, {
    "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b2-4.mov",
    "accessibilityLabel": "San Francisco",
    "type": "video",
    "id": "b2-4",
    "timeOfDay": "night"
  }]
}, {
  "id": "b3",
  "assets": [{
    "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b3-1.mov",
    "accessibilityLabel": "London",
    "type": "video",
    "id": "b3-1",
    "timeOfDay": "night"
  }, {
    "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b3-2.mov",
    "accessibilityLabel": "New York City",
    "type": "video",
    "id": "b3-2",
    "timeOfDay": "day"
  }, {
    "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b3-3.mov",
    "accessibilityLabel": "San Francisco",
    "type": "video",
    "id": "b3-3",
    "timeOfDay": "day"
  }]
}, {
  "id": "b4",
  "assets": [{
    "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b4-1.mov",
    "accessibilityLabel": "Hawaii",
    "type": "video",
    "id": "b4-1",
    "timeOfDay": "day"
  }, {
    "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b4-2.mov",
    "accessibilityLabel": "New York City",
    "type": "video",
    "id": "b4-2",
    "timeOfDay": "night"
  }, {
    "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b4-3.mov",
    "accessibilityLabel": "San Francisco",
    "type": "video",
    "id": "b4-3",
    "timeOfDay": "day"
  }]
}, {
  "id": "b5",
  "assets": [{
    "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b5-1.mov",
    "accessibilityLabel": "China",
    "type": "video",
    "id": "b5-1",
    "timeOfDay": "day"
  }, {
    "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b5-2.mov",
    "accessibilityLabel": "London",
    "type": "video",
    "id": "b5-2",
    "timeOfDay": "day"
  }, {
    "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b5-3.mov",
    "accessibilityLabel": "San Francisco",
    "type": "video",
    "id": "b5-3",
    "timeOfDay": "night"
  }]
}, {
  "id": "b6",
  "assets": [{
    "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b6-1.mov",
    "accessibilityLabel": "China",
    "type": "video",
    "id": "b6-1",
    "timeOfDay": "day"
  }, {
    "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b6-2.mov",
    "accessibilityLabel": "Hawaii",
    "type": "video",
    "id": "b6-2",
    "timeOfDay": "night"
  }, {
    "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b6-3.mov",
    "accessibilityLabel": "London",
    "type": "video",
    "id": "b6-3",
    "timeOfDay": "day"
  }, {
    "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b6-4.mov",
    "accessibilityLabel": "San Francisco",
    "type": "video",
    "id": "b6-4",
    "timeOfDay": "night"
  }]
}, {
  "id": "b7",
  "assets": [{
    "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b7-1.mov",
    "accessibilityLabel": "Hawaii",
    "type": "video",
    "id": "b7-1",
    "timeOfDay": "day"
  }, {
    "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b7-2.mov",
    "accessibilityLabel": "New York City",
    "type": "video",
    "id": "b7-2",
    "timeOfDay": "day"
  }, {
    "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b7-3.mov",
    "accessibilityLabel": "San Francisco",
    "type": "video",
    "id": "b7-3",
    "timeOfDay": "night"
  }]
}, {
  "id": "b8",
  "assets": [{
    "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b10-4.mov",
    "accessibilityLabel": "San Francisco",
    "type": "video",
    "id": "b10-4",
    "timeOfDay": "night"
  }, {
    "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b8-2.mov",
    "accessibilityLabel": "San Francisco",
    "type": "video",
    "id": "b8-2",
    "timeOfDay": "day"
  }, {
    "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b8-3.mov",
    "accessibilityLabel": "San Francisco",
    "type": "video",
    "id": "b8-3",
    "timeOfDay": "day"
  }]
}, {
  "id": "b9",
  "assets": [{
    "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b9-1.mov",
    "accessibilityLabel": "Hawaii",
    "type": "video",
    "id": "b9-1",
    "timeOfDay": "day"
  }, {
    "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b9-2.mov",
    "accessibilityLabel": "London",
    "type": "video",
    "id": "b9-2",
    "timeOfDay": "night"
  }, {
    "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b9-3.mov",
    "accessibilityLabel": "San Francisco",
    "type": "video",
    "id": "b9-3",
    "timeOfDay": "day"
  }]
}, {
  "id": "b10",
  "assets": [{
    "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b10-1.mov",
    "accessibilityLabel": "Hawaii",
    "type": "video",
    "id": "b10-1",
    "timeOfDay": "day"
  }, {
    "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b10-2.mov",
    "accessibilityLabel": "New York City",
    "type": "video",
    "id": "b10-2",
    "timeOfDay": "night"
  }, {
    "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b10-3.mov",
    "accessibilityLabel": "San Francisco",
    "type": "video",
    "id": "b10-3",
    "timeOfDay": "day"
  }, {
    "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b8-1.mov",
    "accessibilityLabel": "Hawaii",
    "type": "video",
    "id": "b8-1",
    "timeOfDay": "night"
  }]
}]