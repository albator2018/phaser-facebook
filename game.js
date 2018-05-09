var game = new Phaser.Game(640, 480, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

function preload () {

  game.load.image('logo', 'assets/phaser2.png');

}

function create () {

  // Initialize player
  player = game.add.sprite(20, 20, 'logo');

}

function update() {

}
