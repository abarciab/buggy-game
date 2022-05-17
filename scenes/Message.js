class Message extends Phaser.Scene{

    constructor( message, scene ) {
        
        super("Message");
        
    }

    init (data) {
        console.log(data);
        this.textmessage = data.text;
        this.nextScene = data.nextScene;
    }

    create() {
        
        let textConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding:{
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        
        
        this.add.text(300, 300, this.textmessage, textConfig).setOrigin(0.5, 0.5);
    
        this.input.on("pointerdown", () => {
            //this.message = new message("test text"); 
            this.scene.start(this.nextScene);
        });
    }

    update() {

    }

}