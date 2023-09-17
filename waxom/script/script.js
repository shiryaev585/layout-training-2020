$(".video-play-btn").click(function() {
  $('#video').get(0).play()
  $(".video-wrp").addClass('video-play-btn--hide')
  $(".video-play-btn").addClass('video-play-btn--hide');
  })