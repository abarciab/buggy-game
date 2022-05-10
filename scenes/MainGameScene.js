class MainGameScene extends Phaser.Scene {
    constructor() {
        super("MainGameScene");
    }
    
    preload(){
        this.add.image('player', './roly poly final art.png');
    }

    create() {
        this.pointer = current_scene.input.activePointer;

        this.player = this.add.sprite(200, game.config.)
    }

}