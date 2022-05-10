class MainGameScene extends Phaser.Scene {
    constructor() {
        super("MainGameScene");
    }
    
    preload(){
        this.load.image('player', 'assets/roly poly final art.png');
        this.load.image('slug', 'assets/slug.png');
    }

    create() {
        this.bugScale = 0.5;
        this.slug_spawn_interval = 3000;

        this.pointer = this.input.activePointer;

        this.player = this.add.sprite(200, game.config.height/2, 'player').setScale(this.bugScale);
        
        this.slug1 = this.add.sprite(game.config.width/2, game.config.height/2, 'slug').setScale(this.bugScale);

        this.slugCountdown = 400;
        this.obstacles = [];
    }

    update(time, delta){
        this.slugCountdown -= delta;
        if (this.slugCountdown <= 0){
            this.spawnSlug();
            this.slugCountdown = this.slug_spawn_interval;
        }


    }

    spawnSlug(){
        console.log("spawned a new slug");
        let new_obstacle = null;
        this.obstacles.forEach(obstacle => {
            if (obstacle.x <= -50){
                new_obstacle = obstacle;
            }
        });
        if (new_obstacle == null){
            new_obstacle = this.add.sprite(game.config.width+50, game.config.height/2, 'slug').setScale(this.bugScale);
        }
        this.obstacles.push(new_obstacle);
    }
    update() {

    }
}