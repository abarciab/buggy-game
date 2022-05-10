class MainGameScene extends Phaser.Scene {
    constructor() {
        super("MainGameScene");
    }
    
    preload(){
        this.add.image('player', './roly poly final art.png');
    }

    create() {
        this.pointer = current_scene.input.activePointer;
        // this.ground = this.physics.add.sprite(this.game.config.width/2, this.game.config.height * 0.8);
        this.player = new Player(this, 200, game.config.width*0.3, game.config.height*0.8, 'player');
    }
    update() {

    }
}