import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import './components/header-bar';
import './components/discussion-form';
import './components/discussion-list';
import './components/discussion-item';
import './components/footer';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('.nav-menu'),
  content: document.querySelector('#main-content'),
});

function updateNavbarLoginState() {
  const headerBar = document.querySelector('header-bar');
  if (headerBar) {
    headerBar.updateLoginState();
  }
}

window.addEventListener('hashchange', () => {
  app.renderPage();
  updateNavbarLoginState();
});

window.addEventListener('load', () => {
  app.renderPage();
  updateNavbarLoginState();
  swRegister();
});
