import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const STORAGE_KEY = "videoplayer-current-time";
const iframeEl = document.querySelector('iframe');
const player = new Player(iframeEl);

// Фиксирует время с интервалом ~ 1000ms
player.on('timeupdate', throttle(data => localStorage.setItem(STORAGE_KEY, data.seconds), 1000));
// Задает плееру сохраненное время
player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
