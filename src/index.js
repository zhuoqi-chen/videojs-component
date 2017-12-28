import 'video.js/dist/video-js.min.css';
import videojs from 'video.js';
import HistoryBar from './component/history-bar/index.es';

videojs.registerComponent('HistoryBar', HistoryBar);

const player = videojs('example-video');
player.currentTime(180);
player.addChild('HistoryBar', {text: '3分钟'});
player.play();