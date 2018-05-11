var game = new Phaser.Game(640, 480, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });
var upButton;

function preload () {

  game.load.image('logo', 'assets/phaser2.png');
  game.load.image("upArrow", "assets/up.png");

}

function create () {
  game.device.desktop || addMobileInputs();
  // Initialize player
  //player = game.add.sprite(20, 20, 'logo');

}

function addMobileInputs() {
  upButton = game.add.sprite(40, 40, "upArrow");
  upButton.inputEnabled = !0;
  upButton.events.onInputDown.add(myHandler, this);
}

function myHandler() {
  upButton.x += 10;
}

function update() {

}
