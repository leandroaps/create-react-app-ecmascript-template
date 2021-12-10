const FAKE_AUTH = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
};

export default FAKE_AUTH;
