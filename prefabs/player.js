class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, scale) {
        super(scene, x, y, texture);
        scene.physics.world.enableBody(this);
        scene.add.existing(this);
        this.pointer = scene.input.activePointer;

        this.jumping = true;
        this.setGravityY(1500);
        this.scaleX = scale;
        this.scaleY = scale;
        this.lives = 3;
    }

    jump(){
        if (!this.jumping) {
            console.log("jump");
            this.jumping = true;
            this.setVelocityY(-1000);
        }
    }
}