let config = {
    type: Phaser.AUTO,
    width: 2000,
    height: 1000,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    physics: {
        default: "arcade",
        arcade: { fps: 60,
            //debug: true,
         },
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [MenuScene, MainGameScene, EndScene, Message, MainGameScene2, MainGameScene3],
}

//keys and setup
let key_left, key_right, key_up, key_down, key_next, key_prev, key_space, key_esc;
let game_settings;


let game = new Phaser.Game(config);