class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        this.jumping = false;
    }
    update() {
        if (pointer.isDown && !this.jumping) {
            this.jumping = true;
            
        }
    }
}