class MenuScene extends Phaser.Scene {
    constructor() {
        super("MenuScene");
    }

    preload() {
        // load images
        this.load.image("bg", "./assets/bg.jpg");
    
    }

    create() {
        // add floor
        this.add.rectangle(0, 0, 2000, 1000, 0x000000);

        // add background
        this.bg = this.add.image(game.config.width / 2, game.config.height / 2, "bg");
        this.bg.setOrigin(0.5, 0.5);
        this.bg.setScale(2);

        // add title
        this.title = this.add.text((game.config.width / 2), (game.config.height / 4) - 50, ["Roly Poly", "To the End"], {fontFamily: "Arial", fontSize: 32, color: "#000000"});
        this.title.setOrigin(0.5, 0.5);
        this.title.setFontSize(94);
        this.tweens.add({
            targets: this.title,
            scale: {
                from: 1,
                to: 1.1,
            },
            rotation: {
                from: -0.1,
                to: 0.1,
            },
            duration: 2000,
            ease: "Sine.easeInOut",
            yoyo: true,
            repeat: -1
        });
        
        // click to start
        this.input.on("pointerdown", () => {
            this.scene.start("MainGameScene");
        });

    }

    update() {
        
    }

}