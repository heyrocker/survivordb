module.exports = function (migration) {
  const players = migration.editContentType('appearances')
    .displayField('title')

  // Create nickname field and set the help text
  players.createField('title')
    .type('Symbol')
    .name('Title')
    .required(true)

  players.changeFieldControl(
    'title',
    'builtin',
    'singleLine',
    { helpText: "The player's name, a hyphen, and the name of the season." }
  )


}

