class MainGameScene2 extends Phaser.Scene {
    constructor() {
        super("MainGameScene2");
    }
    create() {
        let menuConfig = {
            fontFamily: 'Ruluko',
            fontSize: '30px',
            backgroundImage: 'background',
            color: 'white',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.add.text(20, 20, "this is MainGameScene2", menuConfig).setOrigin(0, 0);
        this.input.on("pointerdown", () => {
            this.scene.start("MainGameScene3");
        });
    };

}