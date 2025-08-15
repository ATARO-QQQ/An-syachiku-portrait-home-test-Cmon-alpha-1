// スクロール量に応じてヘッダーに .scrolled を付与して見た目を変える
const header = document.getElementById('siteHeader');
const spacer = document.querySelector('.header-spacer');

// 何pxスクロールしたら「縮小＋影」を付けるか
const THRESHOLD = 8;

function onScroll() {
  const shouldCompact = window.scrollY > THRESHOLD;
  header.classList.toggle('scrolled', shouldCompact);

  // ヘッダーの高さが変わるので、それに合わせて spacer の高さも追従させる
  const headerHeight = header.getBoundingClientRect().height;
  spacer.style.height = `${headerHeight}px`;
}

window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('load', onScroll);
window.addEventListener('resize', onScroll);
