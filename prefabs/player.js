class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, scale) {
        super(scene, x, y, texture);
        scene.physics.world.enableBody(this);
        scene.add.existing(this);
        this.pointer = scene.input.activePointer;

        this.jumping = false;
        this.setGravityY(1000);
        this.scaleX = scale;
        this.scaleY = scale;
    }
    update() {
        if (this.pointer.isDown) {
            console.log("jump");
            this.jumping = true;
            this.setVelocityY(-700);
        }
    }
}