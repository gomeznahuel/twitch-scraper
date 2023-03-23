const getRecommended = async () => {
const items = document.querySelectorAll('[data-test-selector="side-nav-card"]');
  const arr = [];

  for (let item of items) {
    const channel = {};
    channel.name = item.querySelector('[data-a-target="side-nav-title"]').innerText;
    channel.image = item.querySelector('figure > img').src;
    channel.category = item.querySelector('[data-a-target="side-nav-game-title"] > p').innerText;
    channel.viewers = item.querySelector('[data-a-target="side-nav-live-status"] span').innerText;
    channel.url = item.querySelector('[data-test-selector="recommended-channel"]').href;
    arr.push(channel);
  }

  return arr;
}

module.exports = getRecommended;