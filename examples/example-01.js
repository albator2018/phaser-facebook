var game = new Phaser.Game(640, 480, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });
var sprite;

function  preload () {
  // This is equivalent to <https://examples.phaser.io/assets/>.
  this.load.image('dude', 'assets/sprites/phaser-dude.png');
}

function create() {
  sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'dude');
  sprite.inputEnabled = true;
  sprite.events.onInputDown.add(myHandler, this);
}

function myHandler() {
  sprite.x += 10;
}

function update() {

}
