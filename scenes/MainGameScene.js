class MainGameScene extends Phaser.Scene {
    constructor() {
        super("MainGameScene");
    }

    preload() {
        //load images
        this.load.image('player', 'assets/roly poly final art.png');
        this.load.image('slug', 'assets/slug.png');
        this.load.image('ground', 'assets/ground.png');
        this.load.image('grass', 'assets/grass background.png');
    }

    create() {
        //create basics
        this.cameras.main.setBackgroundColor(0x9edffa);
        this.bugScale = 0.5;
        this.slug_spawn_interval = 3000;
<<<<<<< HEAD
        this.game_speed = 15;

=======
        this.game_speed = 10;
        //add pointer
>>>>>>> f1eab9354df4a21f9d5a68b39c0844dfeefb1c67
        this.pointer = this.input.activePointer;

        //add ground
        //this.player = this.add.sprite(200, game.config.height/2, 'player').setScale(this.bugScale);
        this.ground = this.physics.add.sprite(game.config.width/2, game.config.height*0.7 - 50, 'ground').setAlpha(0);
        this.ground.setOrigin(0.5, 0);
<<<<<<< HEAD
        this.groundVisuals = this.add.tileSprite(game.config.width/2, game.config.height*0.7 - 50, game.config.width, game.config.height/3, 'ground').setOrigin(0.5, 0);
        this.groundVisuals.setScale(8, 3);

=======
        //add grass
>>>>>>> f1eab9354df4a21f9d5a68b39c0844dfeefb1c67
        this.grass1 = this.add.tileSprite(game.config.width/2, game.config.height/2, game.config.width, game.config.height/3, 'grass');
        this.grass2 = this.add.tileSprite(game.config.width/2, game.config.height/2-100, game.config.width, game.config.height/3, 'grass').setScale(1.2).setTint(0x989898).setDepth(-1);
        this.ground.displayWidth = game.config.width * 1.1;
        this.ground.displayHeight = game.config.height * 0.4;
        //add ground to not move
        this.ground.setImmovable();
<<<<<<< HEAD

        this.player = new Player(this, game.config.width * 0.3, game.config.height * 0.2, 'player', this.bugScale);
        this.player.setSize(250, 200).setOffset(300, 100);
        this.input.on('pointerdown', function () {
            this.scene.player.jump();
        });

        this.obstacles = [];

        this.physics.add.collider(this.player, this.ground, function(player, ground){player.jumping = false});
=======
        //add player
        this.player = new Player(this, game.config.width * 0.3, game.config.height * 0.8, 'player', this.bugScale);
        this.obstacles = [];
        //add gravity
        this.physics.add.collider(this.player, this.ground);
>>>>>>> f1eab9354df4a21f9d5a68b39c0844dfeefb1c67
        this.physics.add.overlap(this.player, this.obstacles, function(player, slug) {
            if (slug.active){
                player.scene.cameras.main.shake(300, 0.005);
                console.log("OUCH!");
                slug.setActive(false);
                slug.setVisible(false);
            }
        })

        this.slugCountdown = 400;

        this.done = false;
        this.input.on("pointerdown", () =>{
            if (this.done){
                this.scene.start("MainGameScene2");
            }
        });
    }

    update(time, delta) {
        this.player.update();
        this.slugCountdown -= delta;
        if (this.slugCountdown <= 0) {
            this.spawnSlug();
            this.slugCountdown = this.slug_spawn_interval;
        }

        this.groundVisuals.tilePositionX += this.game_speed/40;
        this.grass1.tilePositionX += this.game_speed/8;
        this.grass2.tilePositionX += this.game_speed/20;

        this.obstacles.forEach(obstacle => {
            obstacle.x -= this.game_speed / 2;
        });
    }

    spawnSlug(){
        let slugHeight = game.config.height/2 + 75;

        let new_obstacle = null;
        this.obstacles.forEach(obstacle => {
            if (obstacle.x <= -50){
                new_obstacle = obstacle;
                new_obstacle.setPosition(game.config.width + 50, slugHeight);
            }
        });
        if (new_obstacle == null) {
            console.log("spawning a new onne");
            new_obstacle = this.physics.add.sprite(game.config.width + 50, slugHeight, 'slug').setScale(this.bugScale);
            new_obstacle.setSize(400, 200).setOffset(100, 200);
            this.obstacles.push(new_obstacle);
        }

    }
}