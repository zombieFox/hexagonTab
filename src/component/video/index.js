import { state } from '../state';
import { data } from '../data';

import { node } from '../../utility/node';
import { convertColor } from '../../utility/convertColor';
import { trimString } from '../../utility/trimString';
import { ifValidString } from '../../utility/ifValidString';

const Video = function({ url = false } = {}) {

  this.video = node('video|autoplay,loop,muted');

  this.source = node('source');

  this.video.appendChild(this.source);

  if (ifValidString(url)) {

    this.source.src = url;

    this.video.muted = true;

    this.video.loop = true;

    this.video.autoplay = true;

  };

  if (url.includes('mp4') || url.endsWith('mp4')) {

    this.source.type = 'video/mp4';

  } else if (url.includes('webm') || url.endsWith('webm')) {

    this.source.type = 'video/webm';

  };

  this.play = () => {
    this.video.play();
  };

  this.pause = () => {
    var playPromise = this.video.play();

    if (playPromise !== undefined) {
      playPromise.then(() => {
        this.video.pause();
      });
    };
  };
};

export { Video };
