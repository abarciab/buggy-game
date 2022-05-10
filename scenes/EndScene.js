class EndScene extends Phaser.Scene {
    constructor() {
        super("EndScene");
    }

    create() {
        // add floor
        this.add.rectangle(0, 0, 2000, 1000, 0x000000);

        // add title
        this.title = this.add.text((game.config.width / 2), (game.config.height / 4) - 50, ["Roly Poly", "To the End"]);
        this.title.setOrigin(0.5, 0.5);
        this.title.setFontSize(32);
    }

    update() {

    }

}