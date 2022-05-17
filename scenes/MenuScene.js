class MenuScene extends Phaser.Scene {
    constructor() {
        super("MenuScene");
    }

    preload() {
        // load images
        this.load.image("bg", "./assets/buggy_titlet_bg.png");
        this.load.image("slug", "./assets/slug.png");
        this.load.image("roly", "./assets/roly poly final art.png");
        this.load.spritesheet("fairy", "./assets/Funky Fairy Sprite.png", {frameWidth: 102, frameHeight: 72, startFrame: 0, endFrame: 4});
    
    }

    create() {
        // add background
        this.bg = this.add.tileSprite(game.config.width / 2, game.config.height / 2, 2000, 1000, "bg");
        this.bg.setOrigin(0.5, 0.5);

        // add title
        this.title = this.add.text((game.config.width / 2), (game.config.height / 3), ["Roly Poly", "To the End"], {fontFamily: "Butter", fontSize: 32, color: "#000000"});
        this.title.setOrigin(0.5, 0.5);
        this.title.setFontSize(150);
        // this.title.addFontShadow({color: "#ffffff"});
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
            ease: "Bounce",
            yoyo: true,
            repeat: -1
        });
        //add fairy
        this.anims.create({
            key: 'Fairy',
            frames: this.anims.generateFrameNumbers('fairy', {start: 0, end: 4, first: 0 }),
            frameRate: 15,
            repeat: -1
        });

        this.fairy = this.add.sprite(game.config.width/2, game.config.height - 300, "fairy");
        this.fairy.setOrigin(0.5, 0.5);
        //this.fairy.setScale();
        this.tweens.add({
            targets: this.fairy,
            scale: {
                from: 2,
                to: 1,
            },
            rotation: {
                from: -0.1,
                to: 0.1,
            },
            duration: 2000,
            ease: "Bounce",
            yoyo: true,
            repeat: -1
        });
        this.tweens.add({
            targets: this.fairy,
            x: {
                from: game.config.width,
                to: 0,
            },
            duration: 8000,
            repeat: -1
        });


        // add slug
        this.slug = this.add.image(game.config.width / 2, game.config.height - 100, "slug");
        this.slug.setOrigin(0.5, 0.5);
        this.slug.setScale(0.5);
        this.tweens.add({
            targets: this.slug,
            scale: {
                from: 0.5,
                to: 0.6,
            },
            rotation: {
                from: -0.1,
                to: 0.1,
            },
            duration: 2000,
            ease: "Bounce",
            yoyo: true,
            repeat: -1
        });
        this.tweens.add({
            targets: this.slug,
            x: {
                from: game.config.width,
                to: 0,
            },
            duration: 7000,
            repeat: -1
        });


        // add roly poly
        this.roly = this.add.image(game.config.width, game.config.height - 100, "roly");
        this.roly.setOrigin(0.5, 0.5);
        this.roly.setScale(0.5);
        this.tweens.add({
            targets: this.roly,
            scale: {
                from: 0.5,
                to: 0.6,
            },
            rotation: {
                from: -0.1,
                to: 0.1,
            },
            duration: 2000,
            ease: "Bounce",
            yoyo: true,
            repeat: -1
        });
        this.tweens.add({
            targets: this.roly,
            x: {
                from: game.config.width,
                to: 0,
            },
            duration: 5000,
            repeat: -1
        });

        // click to start
        this.input.on("pointerdown", () => {
            this.scene.start("MainGameScene");
        });

    }

    update(time, delta) {
        this.bg.tilePositionX -= 2 * delta / 16;
    }

}