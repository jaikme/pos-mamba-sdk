import mock from './mock.js';
import addSharedTo from './shared.js';

const Keyboard = window.Keyboard || {};

/** For development environment */
if (process.env.NODE_ENV !== 'production') {
  mock(Keyboard);
  addSharedTo(Keyboard);
}

/** For production environment */
if (process.env.NODE_ENV === 'production') {
  addSharedTo(Keyboard);
}

/** Nullify the original exposed reference */
window.Keyboard = null;

export default Keyboard;
