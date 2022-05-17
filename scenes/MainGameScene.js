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
        this.game_speed = 15;

        this.pointer = this.input.activePointer;

        //add ground
        this.ground = this.physics.add.sprite(game.config.width/2, game.config.height*0.7 - 50, 'ground').setAlpha(0);
        this.ground.setOrigin(0.5, 0);
        this.groundVisuals = this.add.tileSprite(game.config.width/2, game.config.height*0.7 - 50, game.config.width, game.config.height/3, 'ground').setOrigin(0.5, 0);
        this.ground.displayWidth = game.config.width * 1.1;
        this.ground.displayHeight = game.config.height * 0.4;
        this.ground.setImmovable();

        //background and visuals
        this.groundVisuals.setScale(8, 3);
        this.grass1 = this.add.tileSprite(game.config.width/2, game.config.height/2, game.config.width, game.config.height/3, 'grass');
        this.grass2 = this.add.tileSprite(game.config.width/2, game.config.height/2-100, game.config.width, game.config.height/3, 'grass').setScale(1.2).setTint(0x989898).setDepth(-1);

        //player
        this.player = new Player(this, game.config.width * 0.3, game.config.height * 0.2, 'player', this.bugScale);
        this.player.setSize(250, 200).setOffset(300, 100);
        this.input.on('pointerdown', function () {
            this.scene.player.jump();
        });

        //obstacles and collisions
        this.obstacles = [];
        this.physics.add.collider(this.player, this.ground, function(player, ground){player.jumping = false});
        this.physics.add.overlap(this.player, this.obstacles, function(player, slug) {
            if (slug.active){
                player.lives -= 1;
                if (player.lives <= 0){
                    player.scene.scene.start('MainGameScene');
                }
                player.scene.cameras.main.shake(300, 0.005);
                player.scene.livesText.text = `LIVES: ${player.lives}`;
                slug.x = -50;
                slug.setActive(false);
                slug.setVisible(false);
            }
        })
        this.slugCountdown = 400;

        this.done = false;

        //UI
        this.livesText = this.add.text(game.config.width * 0.9 - 80, 30, 'LIVES: 3', {align: 'right', fontSize: '50px', color: '#000000'}).setOrigin(0);
    }

    update(time, delta) {
        if (this.done){
            this.scene.start("MainGameScene2");
        }
        
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