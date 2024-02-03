function lookupWord(info) {
  const word = info.selectionText;
  chrome.tabs.create({ url: `https://ordnet.dk/ddo/ordbog?query=${word}` });
}

chrome.contextMenus.create({
  title: 'Søg ordnet',
  contexts: ['selection'],
  onclick: lookupWord,
});
