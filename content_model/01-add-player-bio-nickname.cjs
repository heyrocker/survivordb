module.exports = function(migration) {
  const players = migration.editContentType('survivorPlayer')

  // Create nickname field and set the help text
  players.createField('nickname')
    .type('Symbol')
    .name('Nickname')
    .required(false)

  players.changeFieldControl(
    'nickname',
    'builtin',
    'singleLine',
    { helpText: "The player's nickname, if different than their given name." }
  )

  // Create bio field and set the help text
  players.createField('bio') 
    .type('RichText')
    .name('Bio')
    .required(false)

  players.changeFieldControl(
    'bio',
    'builtin',
    'markdown',
    { helpText: "The player's nickname, if different than their given name." }
  )
}

