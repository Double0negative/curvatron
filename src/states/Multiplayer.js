var multiplayer = function (game) {
	this.ui = {};
	this.maxPlayers = 7;
	this.nPlayers = 1;
};
  
multiplayer.prototype = {
	create: function () {
		if(mobile){
			this.maxPlayers = 1;
		}
	  	if (numberPlayers == 0) {
	  		numberPlayers = 1;
	  	}

	  	var ui = this.ui;

		ui.title = this.game.add.text(0,0, "multiplayer", {
		    font: "150px dosis",
		    fill: "#ffffff",
		    align: "center"});
	  	ui.title.anchor.setTo(0.5,0.5);

	    //Number of players
		ui.playersAuxButton = this.game.add.sprite(0,0,"number_players");
		ui.playersAuxButton.anchor.setTo(0.5,0.5);

		ui.textPlayers = this.game.add.text(0,0, (numberPlayers+1), {
		    font: "120px dosis",
		    fill: colorHex,
		    align: "center"});
	    ui.textPlayers.anchor.setTo(0.5,0.5);

	    ui.leftArrow = this.game.add.button(0,0,"set_players",this.DecNumberOfPlayers,this);
		ui.leftArrow.anchor.setTo(0.5,0.5);
		ui.leftArrow.alpha = 0.7;
		if(mobile){
			ui.leftArrow.alpha = 0.2;	
		}
		ui.leftArrow.scale.x = -1;
		ui.leftArrow.input.useHandCursor = true;

		ui.rightArrow = this.game.add.button(0,0,"set_players",this.IncNumberOfPlayers,this);
		ui.rightArrow.anchor.setTo(0.5,0.5);
		ui.rightArrow.alpha = 0.7;
		if(mobile){
			ui.rightArrow.alpha = 0.2;	
		}
		ui.rightArrow.input.useHandCursor = true;

		//Play Button
		ui.playButton = this.game.add.button(0,0,"resume_button",this.playTheGame,this);
		ui.playButton.anchor.setTo(0.5,0.5);
		ui.playButton.input.useHandCursor = true;


	   	//Go back Button
		ui.backButton = this.game.add.button(0,0,"back_button",this.backPressed,this);
		ui.backButton.anchor.setTo(0.5,0.5);
		ui.backButton.input.useHandCursor = true;

		//Place the menu buttons and labels on their correct positions
    	this.setPositions();

		this.game.input.keyboard.addKey(Phaser.Keyboard.ESC).onDown.add(this.backPressed, this);
	},

	playTheGame: function () {
		var mode = new MPNormal(numberPlayers, this.game);
		this.game.state.start("PreloadGame", true, false, mode);
	},

	backPressed:function () {
		this.game.state.start("Menu");
	},

	DecNumberOfPlayers: function () {
		if (numberPlayers == 1) {
			numberPlayers = this.maxPlayers;
		} else {
			numberPlayers--;
		}
		this.ui.textPlayers.setText("" + (numberPlayers+1));
	},

	IncNumberOfPlayers: function () {
		if (numberPlayers == this.maxPlayers) {
		    numberPlayers = 1;
	    } else {
			numberPlayers++;
	    }
	    this.ui.textPlayers.setText("" + (numberPlayers+1));
	},

	setPositions: function () {
		var ui = this.ui;

	  	ui.title.position.set(w2,h2*0.3);
	  	ui.playersAuxButton.position.set(w2,h2);
	  	ui.textPlayers.position.set(w2+100,h2+10);
		ui.leftArrow.position.set(w2-150,h2);
		ui.rightArrow.position.set(w2+150,h2);
		ui.playButton.position.set(w2+w2/2,h2*1.6);
		ui.backButton.position.set(w2/2,h2*1.6);
	}
	
};