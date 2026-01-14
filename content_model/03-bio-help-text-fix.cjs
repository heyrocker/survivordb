module.exports = function (migration) {
  const players = migration.editContentType('survivorPlayer')

  // I did a copy/paste error in the original field creation for bio
  players.changeFieldControl(
    'bio',
    'builtin',
    'richTextEditor',
    { helpText: 'Biographical information for this player'}
  )
}

