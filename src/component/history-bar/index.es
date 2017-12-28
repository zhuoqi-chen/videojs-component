import './index.css';
import videojs from 'video.js';
var Component = videojs.getComponent('Component');

export default videojs.extend(Component, {

    constructor: function(player, options) {
        this.myPlayer = player;
        Component.apply(this, arguments);
        if (options.text) {
            this.updateTextContent(options.text);
        }
    },

    createEl: function() {
        return videojs.dom.createEl('div', {
            className: 'vjs-history-bar'
        });
    },

    updateTextContent: function(text) {
        if (typeof text !== 'string') {
            text = 'Title Unknown';
        }
        videojs.dom.emptyEl(this.el());
        var html = videojs.dom.createEl('div', {
            innerHTML: '您上次观看至<span class="view-time">' + text + '</span>处，已为您自动续播!<div class="replay" id="replayfromhead">重新播放</div> <i class="ico-close" id="close-history"></i>'
        });
        html.querySelector(`#replayfromhead`).onclick = () => {
            this.myPlayer.currentTime(0);
            this.myPlayer.play();
        };
        html.querySelector(`#close-history`).onclick = () => {
            videojs.dom.emptyEl(this.el());
        };
        videojs.dom.appendContent(this.el(), html);
        const setTimeoutID = setTimeout(() => {
            videojs.dom.emptyEl(this.el());
            clearTimeout(setTimeoutID)
        }, 5000);
    }
});
