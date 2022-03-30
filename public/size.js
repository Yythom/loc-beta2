/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const scalc = 1440
const w = window.innerWidth;
const h = window.innerHeight;
const ret = w / 1440 * 10
const size = ret < 6.5 ? 6.5 : (ret > 10 ? 10 : ret)
document.documentElement.style.fontSize = size + 'px';
