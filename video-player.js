
var player = videojs('videoPlayer',{

    // autoplay:'muted',
    autoplay:true,
    // muted:true,
    // preload:"metadata",
    controls: true,
    poster:"images/nptel-thumbnail.jpg",
    loop:false,
    fluid: true,
    aspectRatio:'4:3',
    playbackRates: [.25,0.5,1,1.5,2],
    // userActions:{
    //     hotkeys: true
    // }
    Plugins:{
        hotkeys:{
            enableModifiersForNumber : false,
            seekStep:30
        }
    }

});

// var player = videojs('my-video');
 
//   player.rotatePlayerPlugin();

  
// player.zoomrotate({
//     rotate:180,
//     zoom:3
// });

// player.playlist([
//     {
//         sources:[
//             {src:'http://media.w3.org/2010/05/bunny/movie.mp4',type:"video/mp4"}
//         ],
//         poster:'http://media.w3.org/2010/05/video/poster.png'
//     },
//     {
//         sources:[
//             {src:'http://vjs.zencdn.net/v/oceans.mp4',type:"video/mp4"}
//         ],
//         poster:'http://media.w3.org/2010/05/video/poster.png'
//     }
// ]);

// player.playlist.autoadvance(0);


var player = videojs('videoPlayer');

player.playlist([{
  sources: [{
    src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
    type: 'video/mp4'
  }],
  poster: 'http://media.w3.org/2010/05/sintel/poster.png'
}, {
  sources: [{
    src: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
    type: 'video/mp4'
  }],
  poster: 'http://media.w3.org/2010/05/bunny/poster.png'
}, {
  sources: [{
    src: 'http://vjs.zencdn.net/v/oceans.mp4',
    type: 'video/mp4'
  }],
  poster: 'http://www.videojs.com/img/poster.jpg'
}, {
  sources: [{
    src: 'http://media.w3.org/2010/05/bunny/movie.mp4',
    type: 'video/mp4'
  }],
  poster: 'http://media.w3.org/2010/05/bunny/poster.png'
}, {
  sources: [{
    src: 'http://media.w3.org/2010/05/video/movie_300.mp4',
    type: 'video/mp4'
  }],
  poster: 'http://media.w3.org/2010/05/video/poster.png'
}]);

// Play through the playlist automatically.
player.playlist.autoadvance(0);