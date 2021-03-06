/*eslint-disable*/
/* global Phaser, maxPlayers:true, keys:true, menuMusic:true, setScreenFixed,
baseH, changeColor:true, chosenColor:true, colorHex:true, bgColors,
colorHexDark:true, bgColorsDark, bgColor:true, muteMusic, w2, ButtonList,
localStorage, checkGamepads, defaultKeys:true */
/*eslint-enable*/
var menu = function (game) {
  maxPlayers = 7
  defaultKeys = [
    Phaser.Keyboard.W + '',
    Phaser.Keyboard.P + '',
    Phaser.Keyboard.B + '',
    Phaser.Keyboard.Z + '',
    Phaser.Keyboard.M + '',
    Phaser.Keyboard.C + '',
    Phaser.Keyboard.R + '',
    Phaser.Keyboard.U + '']
  keys = []
  menuMusic = null
  this.ui = {}
  this.buttons = null
}

menu.prototype = {
  create: function () {
    pressSound = this.add.audio('sfx_press')
    setScreenFixed(baseH * 1.5, baseH * 1.1, this.game)
    savedCheckpoint = {}

    this.world.pivot.set(0, 0)
    this.world.angle = 0

    if (localStorage.getItem('keys') != null) {
      keys = JSON.parse(localStorage['keys'])
    } else {
      keys = defaultKeys
    }

    if (changeColor) changeBGColor(this.game)

    bgColor = Phaser.Color.hexToColor(colorHex)
    this.stage.backgroundColor = colorHex
    document.body.style.background = colorHex

    if (menuMusic === null) {
      menuMusic = this.add.audio('dream')
    }
    if (!menuMusic.isPlaying && !muteMusic) {
      menuMusic.loop = true
      menuMusic.play()
      menuMusic.volume = 1
    }
    var ui = this.ui

    var titleSize = 175
    var titleH = 100

    //warning when greenworks doesn't work, like when it is blocked by antivirus software
    if (noGreenworks) {
      var warning = this.add.text(w2, 150, 'Warning: could not load Steam integration (Greenworks), it may have been blocked by your antivirus software.\nSome features, like community levels, uploading to Workshop, and achievements, will not work.', {
        font: '35px dosis',
        fill: '#ffffff',
        align: 'center'
      })
      warning.alpha = 0.8
      warning.anchor.setTo(0.5, 0.5)
      titleSize = 100
      titleH = 50
    }

    // Game Title
    ui.title = this.add.text(w2, titleH, 'curvatron', {
      font: titleSize + 'px dosis',
      fill: '#ffffff',
      align: 'center'
    })
    ui.title.anchor.setTo(0.5, 0.5)
    this.buttons = new ButtonList(this, this.game)

    this.buttons.add('singleplayer_button', 'single player', this.singlePlayer)
    this.buttons.add('multiplayer_button', 'multiplayer', this.multiplayer)
    this.buttons.add('editor_button', 'custom levels', this.customLevels)
    this.buttons.add('stats_button', 'statistics', this.stats)
    this.buttons.add('settings_button', 'settings', this.settings)
    this.buttons.add('credits_button', 'credits', this.credits)
    this.buttons.add('exit_button', 'exit', this.exit)

    this.buttons.create()
    this.buttons.select(0)

  },

  update: function () {
    this.buttons.update()
    checkGamepads(this.game)
  },

  customLevels: function () {
    this.state.start('CustomLevels')
  },

  singlePlayer: function () {
    this.state.start('SinglePlayer', true, false)
  },

  settings: function () {
    this.state.start('Settings', true, false)
  },

  credits: function () {
    this.state.start('Credits', true, false)
  },

  multiplayer: function () {
    this.state.start('Multiplayer')
  },

  leaderboard: function () {
    this.state.start('Leaderboards')
  },

  stats: function () {
    this.state.start('Stats')
  },

  up: function () {
    this.buttons.selectUp()
  },

  down: function () {
    this.buttons.selectDown()
  },

  selectPress: function () {
    this.buttons.selectPress()
  },

  selectRelease: function () {
    this.buttons.selectRelease()
  },

  exit: function () {
    window.close()
  }

}
