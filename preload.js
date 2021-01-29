// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
let ElectronCookies = require('@exponent/electron-cookies');

window.addEventListener('DOMContentLoaded', () => {
  ElectronCookies.enable({ origin: 'https://example.com' });
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})
