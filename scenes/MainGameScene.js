class MainGameScene extends Phaser.Scene {
    constructor() {
        super("MainGameScene");
    }
    
    preload(){
        this.load.image('player', 'assets/roly poly final art.png');
        this.load.image('slug', 'assets/slug.png');
        this.load.image('grass', 'assets/grass background.png')
    }

    create() {
        this.bugScale = 0.5;
        this.slug_spawn_interval = 3000;
        this.game_speed = 10;

        this.pointer = this.input.activePointer;

        this.player = this.add.sprite(200, game.config.height/2, 'player').setScale(this.bugScale);
        
        this.slug1 = this.add.sprite(game.config.width/2, game.config.height/2, 'slug').setScale(this.bugScale);

        //this.grass1 = this.add.tileSprite(game.config.width/2, game.config.height/2, 'grass');

        this.slugCountdown = 400;
        this.obstacles = [];
    }

    update(time, delta){
        this.slugCountdown -= delta;
        if (this.slugCountdown <= 0){
            this.spawnSlug();
            this.slugCountdown = this.slug_spawn_interval;
        }

        //this.grass1.tilePositionX -= this.game_speed;

        this.obstacles.forEach(obstacle => {
            obstacle.x -= this.game_speed/5;
        });
    }

    spawnSlug(){
        console.log("spawned a new slug");
        let new_obstacle = null;
        this.obstacles.forEach(obstacle => {
            if (obstacle.x <= -50){
                console.log("recyling!");
                new_obstacle = obstacle;
                new_obstacle.setPosition(game.config.width+50, game.config.height/2);
            }
        });
        if (new_obstacle == null){
            console.log("spawning a new onne");
            new_obstacle = this.add.sprite(game.config.width+50, game.config.height/2, 'slug').setScale(this.bugScale);
            this.obstacles.push(new_obstacle);
        } 
        
    }
}