// cookies
// setInterval

const cookieTime = 24 * 3600;
const checkCookieTime = 60;

window.onload = function () {
  checkBanner();
  setInterval(checkBanner, checkCookieTime * 1000);

  const closeBtn = document.querySelector('.close');
  closeBtn.addEventListener('click', function () {
    hideBanner();
    markBannerPresented();
  });
};

function getContainer() {
  return document.querySelector('.container');
}

function showBanner() {
  const container = getContainer();
  container.style.display = 'block';
}

function hideBanner() {
  const container = getContainer();
  container.style.display = 'none';
}

function markBannerPresented() {
  const date = new Date();
  date.setTime(date.getTime() + cookieTime * 1000);
  document.cookie = `banner=presented; expires=${date.toUTCString()}; path=/;`;
}

function checkBanner() {
  if (!document.cookie.includes('banner=presented')) {
    showBanner();
  }
}
