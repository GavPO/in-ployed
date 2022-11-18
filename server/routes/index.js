const router = require('express').Router();
const homeRoutes = require('./home/homeRoutes')
const apiRoutes = require('./api/apiRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports = router;
