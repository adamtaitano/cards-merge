// <<<<<<< HEAD
// var Card = // receive Ctor with external name `Card`
// (function () { //begin IIFE...
// =======
var Card = (function () { //begin IIFE...
// >>>>>>> ctor-protos

	// The ctor itself:
	function Card(id) {  //Card is also IIFE's internal name
		if (!isValidID(id))
			return null;
// <<<<<<< HEAD

		// Personal methods:
		this.rank = function() { // --> 1..13
			return Math.floor(id/4)+1;
		};
		this.suit = function() { // --> 1..4
			return (id%4)+1;
		};

		// links to shared methods, defined below:
		this.color= color;
		this.name = name;
// 	};
//
// =======
		this.id=id;
		// return this.rank();  //personal property
	}
// >>>>>>> ctor-protos
//------------------
// Private resources (internal use only)
//------------------

// <<<<<<< HEAD
// 	var isValidID = function(num) { // Returns--> true, false
// =======
	function isValidID(num) { // Returns--> true, false
// >>>>>>> ctor-protos //correct type
		return (((typeof num)==="number") && (num%1 === 0) && num>=0 && num<=51);   //in range
	}

	var rankNames = ['','Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King'];
	var rankAbbrs = ['','A','2','3','4','5','6','7','8','9','10','J','Q','K'];

	var suitNames = ['','Hearts','Diamonds','Spades','Clubs'];
	var suitAbbrs = ['','H','D','S','C'];
// =======
// 	'Eight','Nine','Ten','Jack','Queen','King'];
//
// 	var suitNames = ['','Hearts','Diamonds','Spades','Clubs'];
// >>>>>>> ctor-protos

//-----------------------
// Class Methods
//-----------------------

	Card.isCard = function(card) { // Returns --> true, falsish
// <<<<<<< HEAD
		return card && (card instanceof Card); // check for null or primitive
	};

//-----------------------------
// Shared Instance Methods
//-----------------------------

	var color = function() { // -->"red,"black", NaN
		var suitVal=this.suit();
		return ((suitVal<3)? "red": "black");
	};

	var name = function() { //--> string, NaN
		var rankVal = this.rank();
		var suitVal = this.suit();
		return rankNames[rankVal]+' of '+suitNames[suitVal];
	};
	var shortName = function() { //--> string, NaN
		var rankVal = this.rank();
		var suitVal = this.suit();
		return rankAbbrs[rankVal]+suitAbbrs[suitVal];
    };
// =======
// 		return card && (typeof card === 'object') /* check for null or primitive */ && ('id' in card) && (card.hasOwnProperty('id')) && isValidID(card.id); //check id
// 	};
//
// //-----------------------------
// // Inherited Instance Methods
// //-----------------------------
	//
	// Card.prototype.rank = function() { // --> 1..13, NaN
	// 	return Math.floor(this.id/4)+1;
	// };
	//
	// Card.prototype.suit = function() { // --> 1..4, NaN
	// 	return (this.id%4)+1;
	// };
	//
	// Card.prototype.color = function() { // -->"red,"black", NaN
	// 	var suitVal=this.suit();
	// 	return suitVal && ((suitVal<3)? "red": "black");
	// };
// // >>>>>>> ctor-protos

	Card.prototype.name = function() { //--> string, NaN
		var rankVal = this.rank();
		var suitVal = this.suit();
		return rankVal && suitVal &&
			(rankNames[rankVal]+' of '+suitNames[suitVal]);
	};


// <<<<<<< HEAD
	// Use factory to create full set:
	Card.fullSet = [];
	for (var id=0; id<52; ++id) {
		Card.fullSet[id] = new Card(id);
	}

	return Card;  //return factory function, product of IIFE's work
// =======
//
// 	// Use factory to create full set:
// 	Card.fullSet = [];
// 	for (var id=0; id<52; ++id) {
// 		Card.fullSet[id] = new Card(id);
// 	}
//
// 	return Card;  //return Ctor
// })(); //end IIFE definition and do it now!
// >>>>>>> ctor-protos

})();

// Export as NPM-style module
if (typeof module !== "undefined") {
	module.exports = Card;
}
