import STRINGS from '../strings';

const INITIAL_STATE = {
  METER: 0,
  CONTENT: {
    ABOUT: STRINGS.ABOUT,
    COPYRIGHT: STRINGS.COPYRIGHT,
    HOME: STRINGS.HOME,
    LOREM: STRINGS.LOREM,
    NOT_FOUND: STRINGS.NOT_FOUND,
    TEMPLATE: STRINGS.TEMPLATE,
    SIGNIN: STRINGS.SIGNIN,
  },
  DRAWER: {
    URL: [
      'About',
      'Calories',
      'Counter',
      'Home',
      'Login',
      'LoremIpsum',
      'SignIn',
      'Tasks',
      'Template',
    ],
  },
};

export default INITIAL_STATE;
