class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        this.jumping = false;
        this.setGravityY(100);
    }
    update() {
        if (pointer.isDown && !this.jumping) {
            this.jumping = true;
            this.ball.setVelocityY(-100);
        }
    }
}