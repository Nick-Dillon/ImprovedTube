/*--------------------------------------------------------------
>>> SHORTCUTS:
----------------------------------------------------------------
1.0 "Keydown" event
2.0 "Wheel" event
--------------------------------------------------------------*/

/*--------------------------------------------------------------
1.0 "Keydown" event
--------------------------------------------------------------*/

function keydown(event) {
  let player = document.querySelector('.html5-video-player'),
      target = event.target || event.srcElement,
      nodeName = target.nodeName,
      keycode = event.keyCode,
      play_pause = settings.hasOwnProperty('play_pause') ? JSON.parse(settings.play_pause) : null,
      stop = settings.hasOwnProperty('stop') ? JSON.parse(settings.stop) : null,
      next_video = settings.hasOwnProperty('next_video') ? JSON.parse(settings.next_video) : null,
      prev_video = settings.hasOwnProperty('prev_video') ? JSON.parse(settings.prev_video) : null,
      seek_backward = settings.hasOwnProperty('seek_backward') ? JSON.parse(settings.seek_backward) : null,
      seek_forward = settings.hasOwnProperty('seek_forward') ? JSON.parse(settings.seek_forward) : null,
      increase_volume = settings.hasOwnProperty('increase_volume') ? JSON.parse(settings.increase_volume) : null,
      decrease_volume = settings.hasOwnProperty('decrease_volume') ? JSON.parse(settings.decrease_volume) : null,
      go_to_search_box = settings.hasOwnProperty('go_to_search_box') ? JSON.parse(settings.go_to_search_box) : null,
      activate_fullscreen = settings.hasOwnProperty('activate_fullscreen') ? JSON.parse(settings.activate_fullscreen) : null,
      activate_captions = settings.hasOwnProperty('activate_captions') ? JSON.parse(settings.activate_captions) : null;

  if (document.activeElement && ['EMBED', 'INPUT', 'OBJECT', 'TEXTAREA', 'IFRAME'].indexOf(document.activeElement.tagName) !== -1 || event.target.isContentEditable)
    return;

  improvedtubeKeys = event;
  
  if (
    player &&
    play_pause &&
    play_pause.altKey == event.altKey &&
    play_pause.ctrlKey == event.ctrlKey &&
    play_pause.shiftKey == event.shiftKey &&
    play_pause.key == event.key &&
    !play_pause.hasOwnProperty('scroll')
    ) {
    event.preventDefault();
    event.stopPropagation();

    if (player.querySelector('video').paused)
      player.querySelector('video').play();
    else
      player.querySelector('video').pause();

    return false;
  }

  if (
    player &&
    stop &&
    stop.altKey == event.altKey &&
    stop.ctrlKey == event.ctrlKey &&
    stop.shiftKey == event.shiftKey &&
    stop.key == event.key &&
    !stop.hasOwnProperty('scroll')
    ) {
    event.preventDefault();
    event.stopPropagation();

    player.stopVideo();

    return false;
  }

  if (
    player &&
    next_video &&
    next_video.altKey == event.altKey &&
    next_video.ctrlKey == event.ctrlKey &&
    next_video.shiftKey == event.shiftKey &&
    next_video.key == event.key &&
    !next_video.hasOwnProperty('scroll')
    ) {
    event.preventDefault();
    event.stopPropagation();

    player.nextVideo();

    return false;
  }

  if (
    player &&
    prev_video &&
    prev_video.altKey == event.altKey &&
    prev_video.ctrlKey == event.ctrlKey &&
    prev_video.shiftKey == event.shiftKey &&
    prev_video.key == event.key &&
    !prev_video.hasOwnProperty('scroll')
    ) {
    event.preventDefault();
    event.stopPropagation();

    player.previousVideo();

    return false;
  }

  if (
    player &&
    seek_backward &&
    seek_backward.altKey == event.altKey &&
    seek_backward.ctrlKey == event.ctrlKey &&
    seek_backward.shiftKey == event.shiftKey &&
    seek_backward.key == event.key &&
    !seek_backward.hasOwnProperty('scroll')
    ) {
    event.preventDefault();
    event.stopPropagation();

    player.seekBy(-10);

    return false;
  }

  if (
    player &&
    increase_volume &&
    increase_volume.altKey == event.altKey &&
    increase_volume.ctrlKey == event.ctrlKey &&
    increase_volume.shiftKey == event.shiftKey &&
    increase_volume.key == event.key &&
    !increase_volume.hasOwnProperty('scroll')
    ) {
    event.preventDefault();
    event.stopPropagation();

    player.setVolume(player.getVolume() + 5);

    return false;
  }

  if (
    player &&
    decrease_volume &&
    decrease_volume.altKey == event.altKey &&
    decrease_volume.ctrlKey == event.ctrlKey &&
    decrease_volume.shiftKey == event.shiftKey &&
    decrease_volume.key == event.key &&
    !decrease_volume.hasOwnProperty('scroll')
    ) {
    event.preventDefault();
    event.stopPropagation();

    player.setVolume(player.getVolume() - 5);

    return false;
  }

  if (
    player &&
    go_to_search_box &&
    go_to_search_box.altKey == event.altKey &&
    go_to_search_box.ctrlKey == event.ctrlKey &&
    go_to_search_box.shiftKey == event.shiftKey &&
    go_to_search_box.key == event.key &&
    !go_to_search_box.hasOwnProperty('scroll')
    ) {
    event.preventDefault();
    event.stopPropagation();

    if (document.getElementById('masthead-search-term'))
      document.getElementById('masthead-search-term').focus();

    return false;
  }

  if (
    player &&
    activate_fullscreen &&
    activate_fullscreen.altKey == event.altKey &&
    activate_fullscreen.ctrlKey == event.ctrlKey &&
    activate_fullscreen.shiftKey == event.shiftKey &&
    activate_fullscreen.key == event.key &&
    !activate_fullscreen.hasOwnProperty('scroll')
    ) {
    event.preventDefault();
    event.stopPropagation();

    player.toggleFullscreen();

    return false;
  }

  if (
    player &&
    activate_captions &&
    activate_captions.altKey == event.altKey &&
    activate_captions.ctrlKey == event.ctrlKey &&
    activate_captions.shiftKey == event.shiftKey &&
    activate_captions.key == event.key &&
    !activate_captions.hasOwnProperty('scroll')
    ) {
    event.preventDefault();
    event.stopPropagation();

    if (player.querySelector('.ytp-subtitles-button'))
      player.querySelector('.ytp-subtitles-button').click();

    return false;
  }

  /*if ((event.which > 47 && event.which < 58 || event.which > 95 && event.which < 106 || [27, 32, 35, 36, 37, 38, 39, 40, 66, 67, 79, 87, 187, 189].indexOf(event.which) > -1) && settings.player_shurtcuts == 'false')
    event.preventDefault();

  if (document.querySelector('.html5-video-player video') && keycode == 75) {
    event.preventDefault();
    document.querySelector('.html5-video-player video').click();
    return;
  }

  if (settings.scroll_adjusts_playback_speed == 'ctrl_plus_minus' && player && (event.code == 'Equal' || event.code == 'Minus')) {
    event.preventDefault();

    let speed_step = 0,
        speed = 0;

    if (event.code == 'Minus')
      speed_step = -.25;
    else if (event.code == 'Equal')
      speed_step = .25;

    speed = player.getPlaybackRate() + speed_step;
    speed = (speed > 2 ? 2 : speed < 0.25 ? 0.25 : speed);

    player.setPlaybackRate(speed);

    if (!document.querySelector('.html5-video-container #speed-status')) {
      var status_e = document.createElement('div');

      status_e.id = 'speed-status';

      document.querySelector('.html5-video-container').appendChild(status_e);
    }

    document.querySelector('.html5-video-container #speed-status').innerHTML = speed;

    if (globalSpeedTimeout)
      clearTimeout(globalVolumeTimeout);

    globalSpeedTimeout = setTimeout(function () {
      if (document.querySelector('.html5-video-container #speed-status')) {
        document.querySelector('.html5-video-container #speed-status').remove();
      }
    }, 300);

    return;
  }

  if (settings.play_next_video == 'right' && player && event.code == 'ArrowRight' && event.ctrlKey) {
    event.preventDefault();
    player.nextVideo();
  }

  if (settings.play_prev_video == 'left' && player && event.code == 'ArrowLeft' && event.ctrlKey) {
    event.preventDefault();
    player.previousVideo();
  }

  if (player && keycode == 32)
    if (settings.play_pause_video == 'disabled') {
      event.preventDefault();
    }
    else {
      event.preventDefault();
      let video = document.querySelector('.html5-video-player video');

      if (video)
        if (video.paused) {
          document.querySelector('.html5-video-player video').play();
        } else {
          document.querySelector('.html5-video-player video').pause();
        }
    }*/
}


/*--------------------------------------------------------------
2.0 "Wheel" event
--------------------------------------------------------------*/

function wheel(event) {
  let player = document.querySelector('.html5-video-player'),
      target = event.target || event.srcElement,
      nodeName = target.nodeName,
      keycode = event.keyCode,
      play_pause = settings.hasOwnProperty('play_pause') ? JSON.parse(settings.play_pause) : null,
      stop = settings.hasOwnProperty('stop') ? JSON.parse(settings.stop) : null,
      next_video = settings.hasOwnProperty('next_video') ? JSON.parse(settings.next_video) : null,
      prev_video = settings.hasOwnProperty('prev_video') ? JSON.parse(settings.prev_video) : null,
      seek_backward = settings.hasOwnProperty('seek_backward') ? JSON.parse(settings.seek_backward) : null,
      seek_forward = settings.hasOwnProperty('seek_forward') ? JSON.parse(settings.seek_forward) : null,
      increase_volume = settings.hasOwnProperty('increase_volume') ? JSON.parse(settings.increase_volume) : null,
      decrease_volume = settings.hasOwnProperty('decrease_volume') ? JSON.parse(settings.decrease_volume) : null,
      go_to_search_box = settings.hasOwnProperty('go_to_search_box') ? JSON.parse(settings.go_to_search_box) : null,
      activate_fullscreen = settings.hasOwnProperty('activate_fullscreen') ? JSON.parse(settings.activate_fullscreen) : null,
      activate_captions = settings.hasOwnProperty('activate_captions') ? JSON.parse(settings.activate_captions) : null;

  if (document.activeElement && ['EMBED', 'INPUT', 'OBJECT', 'TEXTAREA', 'IFRAME'].indexOf(document.activeElement.tagName) !== -1 || event.target.isContentEditable)
    return;
  
  if (
    player &&
    play_pause &&
    play_pause.altKey == improvedtubeKeys.altKey &&
    play_pause.ctrlKey == improvedtubeKeys.ctrlKey &&
    play_pause.shiftKey == improvedtubeKeys.shiftKey &&
    play_pause.key == improvedtubeKeys.key &&
    (play_pause.scroll > 0 && event.deltaY > 0 || play_pause.scroll < 0 && event.deltaY < 0)
    ) {
    event.preventDefault();
    event.stopPropagation();

    if (player.querySelector('video').paused)
      player.querySelector('video').play();
    else
      player.querySelector('video').pause();

    return false;
  }

  if (
    player &&
    stop &&
    stop.altKey == improvedtubeKeys.altKey &&
    stop.ctrlKey == improvedtubeKeys.ctrlKey &&
    stop.shiftKey == improvedtubeKeys.shiftKey &&
    stop.key == improvedtubeKeys.key &&
    (stop.scroll > 0 && event.deltaY > 0 || stop.scroll < 0 && event.deltaY < 0)
    ) {
    event.preventDefault();
    event.stopPropagation();

    player.stopVideo();

    return false;
  }

  if (
    player &&
    next_video &&
    next_video.altKey == improvedtubeKeys.altKey &&
    next_video.ctrlKey == improvedtubeKeys.ctrlKey &&
    next_video.shiftKey == improvedtubeKeys.shiftKey &&
    next_video.key == improvedtubeKeys.key &&
    (next_video.scroll > 0 && event.deltaY > 0 || next_video.scroll < 0 && event.deltaY < 0)
    ) {
    event.preventDefault();
    event.stopPropagation();

    player.nextVideo();

    return false;
  }

  if (
    player &&
    prev_video &&
    prev_video.altKey == improvedtubeKeys.altKey &&
    prev_video.ctrlKey == improvedtubeKeys.ctrlKey &&
    prev_video.shiftKey == improvedtubeKeys.shiftKey &&
    prev_video.key == improvedtubeKeys.key &&
    (prev_video.scroll > 0 && event.deltaY > 0 || prev_video.scroll < 0 && event.deltaY < 0)
    ) {
    event.preventDefault();
    event.stopPropagation();

    player.previousVideo();

    return false;
  }

  if (
    player &&
    seek_backward &&
    seek_backward.altKey == improvedtubeKeys.altKey &&
    seek_backward.ctrlKey == improvedtubeKeys.ctrlKey &&
    seek_backward.shiftKey == improvedtubeKeys.shiftKey &&
    seek_backward.key == improvedtubeKeys.key &&
    (seek_backward.scroll > 0 && event.deltaY > 0 || seek_backward.scroll < 0 && event.deltaY < 0)
    ) {
    event.preventDefault();
    event.stopPropagation();

    player.seekBy(-10);

    return false;
  }

  if (
    player &&
    increase_volume &&
    increase_volume.altKey == improvedtubeKeys.altKey &&
    increase_volume.ctrlKey == improvedtubeKeys.ctrlKey &&
    increase_volume.shiftKey == improvedtubeKeys.shiftKey &&
    increase_volume.key == improvedtubeKeys.key &&
    (increase_volume.scroll > 0 && event.deltaY > 0 || increase_volume.scroll < 0 && event.deltaY < 0)
    ) {
    event.preventDefault();
    event.stopPropagation();

    player.setVolume(player.getVolume() + 5);

    return false;
  }

  if (
    player &&
    decrease_volume &&
    decrease_volume.altKey == improvedtubeKeys.altKey &&
    decrease_volume.ctrlKey == improvedtubeKeys.ctrlKey &&
    decrease_volume.shiftKey == improvedtubeKeys.shiftKey &&
    decrease_volume.key == improvedtubeKeys.key &&
    (decrease_volume.scroll > 0 && event.deltaY > 0 || decrease_volume.scroll < 0 && event.deltaY < 0)
    ) {
    event.preventDefault();
    event.stopPropagation();

    player.setVolume(player.getVolume() - 5);

    return false;
  }

  if (
    player &&
    go_to_search_box &&
    go_to_search_box.altKey == improvedtubeKeys.altKey &&
    go_to_search_box.ctrlKey == improvedtubeKeys.ctrlKey &&
    go_to_search_box.shiftKey == improvedtubeKeys.shiftKey &&
    go_to_search_box.key == improvedtubeKeys.key &&
    (go_to_search_box.scroll > 0 && event.deltaY > 0 || go_to_search_box.scroll < 0 && event.deltaY < 0)
    ) {
    event.preventDefault();
    event.stopPropagation();

    if (document.getElementById('masthead-search-term'))
      document.getElementById('masthead-search-term').focus();

    return false;
  }

  if (
    player &&
    activate_fullscreen &&
    activate_fullscreen.altKey == improvedtubeKeys.altKey &&
    activate_fullscreen.ctrlKey == improvedtubeKeys.ctrlKey &&
    activate_fullscreen.shiftKey == improvedtubeKeys.shiftKey &&
    activate_fullscreen.key == improvedtubeKeys.key &&
    (activate_fullscreen.scroll > 0 && event.deltaY > 0 || activate_fullscreen.scroll < 0 && event.deltaY < 0)
    ) {
    event.preventDefault();
    event.stopPropagation();

    player.toggleFullscreen();

    return false;
  }

  if (
    player &&
    activate_captions &&
    activate_captions.altKey == improvedtubeKeys.altKey &&
    activate_captions.ctrlKey == improvedtubeKeys.ctrlKey &&
    activate_captions.shiftKey == improvedtubeKeys.shiftKey &&
    activate_captions.key == improvedtubeKeys.key &&
    (activate_captions.scroll > 0 && event.deltaY > 0 || activate_captions.scroll < 0 && event.deltaY < 0)
    ) {
    event.preventDefault();
    event.stopPropagation();

    if (player.querySelector('.ytp-subtitles-button'))
      player.querySelector('.ytp-subtitles-button').click();

    return false;
  }

  /*if ((event.which > 47 && event.which < 58 || event.which > 95 && event.which < 106 || [27, 32, 35, 36, 37, 38, 39, 40, 66, 67, 79, 87, 187, 189].indexOf(event.which) > -1) && settings.player_shurtcuts == 'false')
    event.preventDefault();

  if (document.querySelector('.html5-video-player video') && keycode == 75) {
    event.preventDefault();
    document.querySelector('.html5-video-player video').click();
    return;
  }

  if (settings.scroll_adjusts_playback_speed == 'ctrl_plus_minus' && player && (event.code == 'Equal' || event.code == 'Minus')) {
    event.preventDefault();

    let speed_step = 0,
        speed = 0;

    if (event.code == 'Minus')
      speed_step = -.25;
    else if (event.code == 'Equal')
      speed_step = .25;

    speed = player.getPlaybackRate() + speed_step;
    speed = (speed > 2 ? 2 : speed < 0.25 ? 0.25 : speed);

    player.setPlaybackRate(speed);

    if (!document.querySelector('.html5-video-container #speed-status')) {
      var status_e = document.createElement('div');

      status_e.id = 'speed-status';

      document.querySelector('.html5-video-container').appendChild(status_e);
    }

    document.querySelector('.html5-video-container #speed-status').innerHTML = speed;

    if (globalSpeedTimeout)
      clearTimeout(globalVolumeTimeout);

    globalSpeedTimeout = setTimeout(function () {
      if (document.querySelector('.html5-video-container #speed-status')) {
        document.querySelector('.html5-video-container #speed-status').remove();
      }
    }, 300);

    return;
  }

  if (settings.play_next_video == 'right' && player && event.code == 'ArrowRight' && event.ctrlKey) {
    event.preventDefault();
    player.nextVideo();
  }

  if (settings.play_prev_video == 'left' && player && event.code == 'ArrowLeft' && event.ctrlKey) {
    event.preventDefault();
    player.previousVideo();
  }

  if (player && keycode == 32)
    if (settings.play_pause_video == 'disabled') {
      event.preventDefault();
    }
    else {
      event.preventDefault();
      let video = document.querySelector('.html5-video-player video');

      if (video)
        if (video.paused) {
          document.querySelector('.html5-video-player video').play();
        } else {
          document.querySelector('.html5-video-player video').pause();
        }
    }*/
}
