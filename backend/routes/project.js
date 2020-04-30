const router = require('express').Router();
let Project = require('../models/project.model');

/* Route Get (Everything) Request */
router.route('/').get((req, res) => {
    Project.find()
    .then(projects => res.json(projects))
    .catch(err => res.status(400).json('Error: ' + err));
});

/* Route Add Request */
router.route('/add').post((req, res) => {
  const title = req.body.title;
  const post = req.body.post;

  const newProject = new Project({title, post});

  newProject.save()
    .then(() => res.json('Project added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

/* Route Get by ID Request */
router.route('/:id').get((req, res) => {
    Project.findById(req.params.id)
      .then(projects => res.json(projects))
      .catch(err => res.status(400).json('Error: ' + err));
  });

/* Route Delete by ID Request */
router.route('/:id').delete((req, res) => {
Project.findByIdAndDelete(req.params.id)
    .then(() => res.json('Project deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

/* Route Update by ID Request */
router.route('/update/:id').post((req, res) => {
Project.findById(req.params.id)
    .then(project => {
    project.title = req.body.title;
    project.post = req.body.post;

    project.save()
        .then(() => res.json('Project updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
  

module.exports = router;
