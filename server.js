const app = require('./app')

const { postgrator } = require('./config/sitesDb')
const port = process.env.PORT || 8000;

postgrator
  .migrate()
  .then((result) => {
    console.log('Migrated db successfully.', result);
    app.listen(port, () =>
    console.log(`Listening on ${port}`));
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });