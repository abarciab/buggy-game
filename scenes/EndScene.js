class EndScene extends Phaser.Scene {
    constructor() {
        super("EndScene");
    }

    preload() {
        this.load.image("Happy Poly", "assets/victory_poly.png");
        this.load.image("Sand Castle", "assets/ending_castle.png");
    }

    create() {
        // add floor
        //this.add.rectangle(0, 0, 2000, 1000, 0x000000);
        this.vbg = this.add.image(game.config.width, game.config.height, "Sand Castle");
        this.vbg.setOrigin(1, 1);
        this.vbg.setScale(1.5);

        // add title
        this.title = this.add.text((game.config.width / 2), (game.config.height / 4) - 50, ["Roly Poly", "To the End"]);
        this.title.setOrigin(0.5, 0.5);
        this.title.setFontSize(32);

        //add roly poly
        this.vicroly = this.add.image(game.config.width/2, game.config.height - 200, "Happy Poly");
        this.vicroly.setOrigin(0.5, 0.5);
        this.vicroly.setScale(0.75);
    }

    update() {

    }

}