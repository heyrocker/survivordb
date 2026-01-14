module.exports = function (migration) {
  const appearances = migration
    .createContentType('appearances')
    .name('Appearances')
    .description('Information related to a specific appearance of one player on one season of Survivor.')

  // Create reference field back to season
  appearances.createField('season')
    .type('Link')
    .name('Season')
    .required(true)
    .linkType('Entry')
    .validations([{
      linkContentType: ['survivorSeason']
    }])

  appearances.changeFieldControl(
    'season',
    'builtin',
    'entryLinkEditor',
    { helpText: "The season a player appeared on. The combination of this field and player must be unique." }
  )

  // Create reference field back to player
  appearances.createField('player')
    .type('Link')
    .name('Player')
    .required(true)
    .linkType('Entry')
    .validations([{
      linkContentType: ['survivorPlayer']
    }])

  appearances.changeFieldControl(
    'player',
    'builtin',
    'entryLinkEditor',
    { helpText: "The player who appeared on a season. The combination of this field and season must be unique." }
  )

  // How were they booted (voted out, medically evacuated, quit, ejected, left edge of extinction, lost duel on redemption island)
  appearances.createField('bootMethod')
    .type('Symbol')
    .name('Boot Method')
    .required(true)
    .defaultValue({"en-US": 'Voted Out'})
    .validations([{
      in: ['Voted Out', 'Medically Evacuated', 'Quit', 'Ejected', 'Raised Flag on Edge of Extinction', 'Lost Duel on Redemption Island']
    }])

  appearances.changeFieldControl(
    'bootMethod',
    'builtin',
    'dropdown',
    { helpText: "How did this player finally leave the game on this season?" }
  )
  
  // Individual immunity wins
  appearances.createField('individualImmunityWins')
    .type('Number')
    .name('Individual Immunity Wins')
    .required(true)
    .defaultValue({ "en-US": 0 })

  appearances.changeFieldControl(
    'individualImmunityWins',
    'builtin',
    'numberEditor',
    { helpText: "How many individual immunity wins did this player have on this season?" }
  )

  // days played
  appearances.createField('daysPlayed')
    .type('Number')
    .name('Days Played')
    .required(true)
    .defaultValue({ "en-US": 0 })

  appearances.changeFieldControl(
    'daysPlayed',
    'builtin',
    'numberEditor',
    { helpText: "How many days did this player play on this season?" }
  )

  // finish position
  appearances.createField('finishPosition')
    .type('Number')
    .name('Finish Position')
    .required(true)
    .defaultValue({ "en-US": 0 })

  appearances.changeFieldControl(
    'finishPosition',
    'builtin',
    'numberEditor',
    { helpText: "What position did this player finish on this season?" }
  )
}

