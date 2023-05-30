// Actions methods
// GET "/user/login
const login = (req, res) => {
  res.render('user/loginView');
};

// GET "/user/login
const logout = (req, res) => {
  res.send('⚠ UNDER CONTRUCTION: GET /user/logout ⚠ ');
};

// GET "/user/login
const register = (req, res) => {
  res.render('user/inicioView');
};

// Controlador user
export default {
  // action methods
  login,
  logout,
  register,
};
