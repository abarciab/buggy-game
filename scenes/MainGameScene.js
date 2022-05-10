class MainGameScene extends Phaser.Scene {
    constructor() {
        super("MainGameScene");
    }
    
    preload(){
        this.load.image('player', 'assets/roly poly final art.png');
        this.load.image('slug', 'assets/slug.png');
        this.load.image('ground', 'assets/ground.png');
        this.load.image('grass', 'assets/grass background.png');
    }

    create() {
        this.cameras.main.setBackgroundColor(0x9edffa);
        this.bugScale = 0.5;
        this.slug_spawn_interval = 3000;
        this.game_speed = 10;

        this.pointer = this.input.activePointer;

        //this.player = this.add.sprite(200, game.config.height/2, 'player').setScale(this.bugScale);
        this.ground = this.physics.add.sprite(game.config.width/2, game.config.height*0.8, 'ground');

        this.grass1 = this.add.tileSprite(game.config.width/2, game.config.height/2, game.config.width, game.config.height/3, 'grass');
        this.grass2 = this.add.tileSprite(game.config.width/2, game.config.height/2-100, game.config.width, game.config.height/3, 'grass').setScale(1.2).setTint(0x989898).setDepth(-1);
        this.ground.displayWidth = game.config.width * 1.1;
        this.ground.displayHeight = game.config.height * 1.3;
        this.ground.setImmovable();

        this.player = new Player(this, game.config.width*0.3, game.config.height*0.8, 'player', this.bugScale);
        this.slug1 = this.add.sprite(game.config.width/2, game.config.height*0.8, 'slug').setScale(this.bugScale);

        this.physics.add.collider(this.player, this.ground);
        this.slugCountdown = 400;
        this.obstacles = [];
    }

    update(time, delta){
        this.player.update();
        this.slugCountdown -= delta;
        if (this.slugCountdown <= 0){
            this.spawnSlug();
            this.slugCountdown = this.slug_spawn_interval;
        }

        this.grass1.tilePositionX += this.game_speed/8;
        this.grass2.tilePositionX += this.game_speed/20;

        this.obstacles.forEach(obstacle => {
                obstacle.x -= this.game_speed/2;
        });
    }

    spawnSlug(){
        let new_obstacle = null;
        this.obstacles.forEach(obstacle => {
            if (obstacle.x <= -50){
                new_obstacle = obstacle;
                new_obstacle.setPosition(game.config.width+50, game.config.height/2);
            }
        });
        if (new_obstacle == null){
            new_obstacle = this.add.sprite(game.config.width+50, game.config.height/2, 'slug').setScale(this.bugScale);
            this.obstacles.push(new_obstacle);
        } 
        
    }
}