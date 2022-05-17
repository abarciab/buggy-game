class MenuScene extends Phaser.Scene {
    constructor() {
        super("MenuScene");
    }

    preload() {
        // load images
        this.load.image("bg", "./assets/buggy_titlet_bg.png");
        this.load.image("slug", "./assets/slug.png");
        this.load.image("roly", "./assets/roly poly final art.png");

        this.load.spritesheet('fairy', 'assets/Funky Fairy Sprite.png', {frameWidth: 100, frameHeight: 100, startFrame: 0, endFrame: 4});
        
        // load audio
        this.load.audio("bg_music", "./assets/Overworld.mp3");
    }

    create() {
        // add background
        this.bg = this.add.tileSprite(game.config.width / 2, game.config.height / 2, 2000, 1000, "bg");
        this.bg.setOrigin(0.5, 0.5);

        // add title
        this.title = this.add.text((game.config.width / 2), (game.config.height / 3), ["Roly Poly", "To the End"], {fontFamily: "Butter", fontSize: 32, color: "#ffffff", align: "center", stroke: "#ffab0f", strokeThickness: 20});
        this.title.setOrigin(0.5, 0.5);
        this.title.setFontSize(150);
        this.title.setShadow(5, 5, '#a46500', 0);
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
            duration: 1800,
            ease: "Bounce",
            yoyo: true,
            repeat: -1
        });

        // add instructions
        this.instructions = this.add.text((game.config.width / 2), (game.config.height / 2) + 200, ["Click to Start", "Press ESC to Quit"], {fontFamily: "Butter", fontSize: 32, color: "#ffffff", align: "center", stroke: "#a46500", strokeThickness: 10});
        this.instructions.setOrigin(0.5, 0.5);
        this.instructions.setFontSize(50);
        // this.instructions.addFontShadow({color: "#ffffff"});
        this.tweens.add({
            targets: this.instructions,
            scale: {
                from: 1,
                to: 1.1,
            },
            rotation: {
                from: -0.1,
                to: 0.1,
            },
            duration: 1800,
            ease: "Bounce",
            yoyo: true,
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
            duration: 1800,
            ease: "Bounce",
            yoyo: true,
            repeat: -1
        });
        this.tweens.add({
            targets: this.slug,
            x: {
                from: game.config.width + 200,
                to: -200,
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
            duration: 1800,
            ease: "Bounce",
            yoyo: true,
            repeat: -1
        });
        this.tweens.add({
            targets: this.roly,
            x: {
                from: -200,
                to: game.config.width + 200,
            },
            duration: 5000,
            repeat: -1
        });

        // fairy animation
        this.anims.create({
            key: 'fairy',
            frames: this.anims.generateFrameNumbers('fairy', { start: 0, end: 4, first: 0}),
            frameRate: 15,
            origin: 0.5,
            repeat: -1
        });
        this.fairy = this.add.sprite(game.config.width/2, game.config.height/2 + 100, 'fairy').setOrigin(0.5, 0.5);
        this.fairy.anims.play('fairy');

        // click to start
        this.input.on("pointerdown", () => {
            this.scene.start("MainGameScene");
        });

        // hey a fun jumping
        this.jumping = false;
        
        // add music
        this.bg_music = this.sound.add("bg_music");
        this.bg_music.setVolume(0.5);
        this.bg_music.play();

    }

    update(time, delta) {
        this.bg.tilePositionX -= 2 * delta / 16;

        let distance = this.slug.x - this.roly.x
        // check for slug position
        if (distance < 500 && distance > 300 && !this.jumping) {
            console.log("slug hit roly");
            this.jumping = true;

            this.tweens.add({
                targets: this.roly,
                y: {
                    from: this.roly.y,
                    to: this.roly.y - 300,
                },
                ease: "Sine.easeOut",
                duration: 600,
                yoyo: true,

                onComplete: () => {
                    this.jumping = false;
                }
            });
        }
    }

}