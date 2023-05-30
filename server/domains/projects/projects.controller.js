// Actions methods
// GET "/proyectos/projects
const projects = (req, res) => {
  res.send('⚠ UNDER CONTRUCTION: GET /projects/projects ⚠ ');
};
// GET "/projects/add
const add = (req, res) => {
  res.render('project/addView');
};

// Controlador user
export default {
  // action methods
  projects,
  add,
};
