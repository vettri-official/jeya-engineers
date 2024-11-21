export default function swictchColor(selector: string = '#hero') {
  let data = document.querySelector(selector);
  document.addEventListener('scroll', () => {
    let nav = data?.getBoundingClientRect().y;
    let element = document.querySelector('.nav-bar') as HTMLElement;
    if (nav && nav + (data?.scrollHeight || 0) <= 10) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
}
