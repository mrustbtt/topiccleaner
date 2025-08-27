// ==UserScript==
// @name         TopicCleaner
// @namespace    http://tampermonkey.net/
// @version      2024-08-10
// @description  try to take over the world!
// @author       mindrust
// @match        https://bitcointalk.org/index.php?board*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bitcointalk.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Add rats below...
    const rats = [
"rat1",
"rat2"
]

const URL1 = 'a[title="View the profile of '
const URL2 = '"]'

for (let i = 0; i < rats.length; i++){
    const ele = document.querySelectorAll(URL1 + rats[i] + URL2);
    for (let k = 0; k < ele.length; k++) {
        ele[k].parentElement.parentElement.innerHTML = "";
    }

}
})();
