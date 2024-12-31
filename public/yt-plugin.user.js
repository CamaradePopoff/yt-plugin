// ==UserScript==
// @name          Youtube Plugin by Popoff
// @version       0.0.1
// @description   Additional features for Youtube
// @author        Camarade Popoff
// @match         https://www.youtube.com/*
// @updateURL     https://yt-plugin.vercel.app/yt-plugin.user.js
// @downloadURL   https://yt-plugin.vercel.app/yt-plugin.user.js
// @grant         GM_setValue
// @grant         GM_getValue
// @grant         GM_setClipboard
// @grant         unsafeWindow
// @grant         window.close
// @grant         window.focus
// @grant         window.onurlchange
// @run-at        document-body
// @noframes
// ==/UserScript==

(function() {
  'use strict';
  console.log('Popoff says: Loading Youtube Plugin...');
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://yt-plugin.vercel.app/userscript/index.js', true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      try {
        const sc = document.createElement('script');
        sc.text = xhr.responseText;
        document.head.appendChild(sc);
      } catch (e) {
        console.log('Popoff says: Could not load the Youtube Plugin main script :(');
      }
    }
  };
  xhr.send(null);
})();
