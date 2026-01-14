module.exports = function (migration) {
  const players = migration.editContentType('survivorPlayer')

  // I apparently got the widget ID wrong in the last migration
  players.changeFieldControl(
    'bio',
    'builtin',
    'richTextEditor'
  )
}

