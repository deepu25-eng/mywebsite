/*
 * Fragment Block
 * Include content on a page as a fragment.
 * https://www.aem.live/developer/block-collection/fragment
 */

import {
  decorateMain,
} from '../../scripts/scripts.js';

import {
  loadBlocks,
} from '../../scripts/aem.js';

/**
 * Loads a fragment.
 * @param {string} path The path to the fragment
 * @returns {HTMLElement} The root element of the fragment
 */
const video = document.createElement('video');

video.muted = true; // exactly this way, otherwise it won't play in chrome. Thanks, @msagolj for the tip!

video.toggleAttribute('autoplay', true);
video.toggleAttribute('loop', true);
video.toggleAttribute('playsinline', true);
const source = document.createElement('source');
source.setAttribute('src', entry[2]);
source.setAttribute('type', 'video/mp4');
video.append(source);
slide.append(video);
