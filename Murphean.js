function Murphean(list) {
	var values = list;
	var value;
	var selectedIndex;
	
	this.shoot = this.flip = this.roll = this.spin = this.shake = this.draw = function() {
		selectedIndex = Math.floor(Math.random()*values.length);
		return values[selectedIndex];
	};
	
	this.set = function() {
		value = this.flip();
	};
	
	this.get = function() {
		if (value == undefined)
			this.set();
		return value;
	};
	
	this.getSelectedIndex = function() {
		if (selectedIndex == undefined)
			this.set();
		return selectedIndex;
	};
}

function Deck(list) {
	size = (list.length? list.length : 52);
	dealt = new Array(this.size);
	
	this.shuffle = function() {
		for (i=0;i<dealt.length;i++) {
			dealt[i] = false;
		}
	};
	
	this.deal = function(x) {
		dealt[x] = true;
	};
	
	this.check = function(x) {
		var y = false;
		for (i=0; i<dealt.length; i++) {
			if (dealt[i] == true)
				y = true;
		}
		return y;
	};
}

//Helper functions to simplify building the library arrays
function range(start, end, step) {
	if (step == null)
		step = 1;
	var array = [];
	if (step > 0) {
		for (var i = start; i <= end; i += step)
			array.push(i);
	}
	else {
		for (var i = start; i >= end; i += step)
			array.push(i);
	}
	return array;
}

function domino_maker(z) {
	var w = [];
	for (x = 0; x <= z; x++) {
		for (y = x; y <= z; y++) {
			w.push(x.toString() + ',' + y.toString());
		}
	}
	return w;
}

// --- Library of Pre-Built Murphean Objects Options Lists---

//Playing cards
var card = range(0, 51);
/*suit = n%4
face = (n%13)+1*/

//Dominos
var double_6 = domino_maker(6);
var double_9 = domino_maker(9);
/*domino_maker() is a function for building an entire domino deck,
double n set, where n is the argument passed to domino_maker().
Thi returns an array with elements in a pip,pip format, i.e. "2,3"*/

//BINGO!
var bingo = range(1, 75);
/*b 1-15
i 16-30
n 31-45
g 46-60
0 61-75*/

//Dice
var d4 = range(1, 4);
var d6 = range(1, 6);
var d8 = range(1, 8);
var d10 = range(0, 9);
var d12 = range(1, 12);
var d20 = range(1, 20);
//This version of the d10 uses string instead of int, to keep 00 for becoming 0
var d10v10 = [
	'00',
	'10',
	'20',
	'30',
	'40',
	'50',
	'60',
	'70',
	'80',
	'90'
];

//Roulette Wheel
var single_zero = range(0, 36);
//Double zero is a string version, as 00 will be 0 if left as integers.
var double_zero = [
	'0',
	'28',
	'9',
	'26',
	'30',
	'11',
	'7',
	'20',
	'32',
	'17',
	'5',
	'22',
	'34',
	'15',
	'3',
	'24',
	'36',
	'13',
	'1',
	'00',
	'27',
	'10',
	'25',
	'29',
	'12',
	'8',
	'19',
	'31',
	'18',
	'6',
	'21',
	'33',
	'16',
	'4',
	'23',
	'35',
	'14',
	'2'
];
/*The pockets of the roulette wheel are numbered from 1 to 36.
In number ranges from 1 to 10 and 19 to 28, odd numbers
are red and even are black. In ranges from 11 to 18 and
29 to 36, odd numbers are black and even are red.
There is a green pocket numbered 0 (zero). In American 
roulette, there is a second green pocket marked 00.*/

//Coin
var coin = [
	'heads',
	'tails'
];

//Roshambo
var roshambo = [
	'rock',
	'paper',
	'scissors'
];
//rock-paper-scissors-lizard-Spock variant
var rpsls = [
	'rock',
	'paper',
	'scissors',
	'lizard',
	'Spock'
];
/*Spock smashes scissors and vaporizes rock;
He is poisoned by lizard and disproven by paper.
Lizard poisons Spock and eats paper;
it is crushed by rock and decapitated by scissors.*/

//Slots
var tumbler = [
	'Watermelon',
	'Banana',
	'Grape',
	'Watermelon',
	'Banana',
	'Watermelon',
	'Banana',
	'Strawberry',
	'Apple',
	'Grape',
	'Watermelon',
	'Banana',
	'Apple',
	'Grape',
	'Cherry',
	'Strawberry',
	'Apple',
	'Banana',
	'Grape',
	'Watermelon',
	'Banana'
];
/*The repeated options are to increase odds, thus
decrease the vlue of the repeated option
One Cherry = 1:21 odds, 6 Bananas = 6:21 odds*/

//Magic Eight Ball
var magic_8_ball = [
	'It is certain',
	'It is decidedly so',
	'Without a doubt',
	'Yes, definitely',
	'You may rely on it',
	'As I see it, yes',
	'Most likely',
	'Outlook good',
	'Yes',
	'Signs point to yes',
	'Reply hazy try again',
	'Ask again later',
	'Better not tell you now',
	'Cannot predict now',
	'Concentrate and ask again',
	'Do not count on it',
	'My reply is no',
	'My sources say no',
	'Outlook not so good',
	'Very doubtful'
];
/*Ask a yes or no question and let our 
mysterious oracle provide you the answer!*/

//Superfight decks
var sf_fighters = [
	'  (Blank)',
	'Dr. Horrible',
	'Iron Giant',
	'Keanu Reeves',
	'Sandy Cheeks',
	'Literal Teen Wolf',
	'Poltergeist',
	'Trapper',
	'King Arthur',
	'France',
	'Star Lord',
	'Animorph',
	'The Navy',
	'The Common Cold',
	'Kaiju',
	'Loch Ness Monster',
	'Stegosaurus',
	'Mothra',
	'Goliath',
	'Army of Skeletons',
	'Hercules',
	'Ash',
	'Swarm of Piranhas',
	'Hydra','Yeti',
	'Racoon',
	'Amazon Warrior',
	'Godzilla',
	'Grizzly Bear',
	'Carnivorous Plant',
	'Water Buffalo',
	'Sushi Chef',
	'Honey Badger',
	'Derby Girl',
	'The Player to Your Right',
	'Ocelot',
	'King Kong',
	'Prince Charming',
	'Two Tribbles'
];
var sf_powers = [
	'Armed with a Really Really Bright Laser Pointer',
	'In a Flying Saucer',
	'Can Summon Infinite Trampolines',
	'Stuck in One of Those Electric Cars for Toddlers',
	'Armed with a Gatling Gun',
	'Swinging a Two-Ton Tuna',
	'Covered in Gasoline',
	'Wearing a Bubble Wrap Suit',
	'Wearing a Scuba Suit',
	'Armed with a Limitless Loot Crate',
	'Thows Water Balloons Filled with Acid',
	'Flaming Hands',
	'Is Really Really Emotional',
	'Wrapped in Toilet Paper',
	'Literally a Gif',
	'Commands an Army of Disposable Minions',
	'Armed with a Machete',
	'Armed with a Surface-to-Air Missile Launcher',
	'Can Only be Killed by a Stake Through the Heart',
	'Using a ________ as a Club (Draw a Random Character Card)',
	'Shoots Lasers Out of Ears',
	'Regrows Body Parts at Will',
	'Has an Enormous Exposed Brain',
	'Can Call Orbital Bombardments',
	'Armed with a Railgun',
	'Leading a Team of Trained Velociraptors',
	'Can Only be Killed by a Shot to the Head',
	'Armed with a Lightsaber that has Two Smaller Lightsabers Sticking Out of the Hilt',
	'Can Fly ...at the Speed of Molasses',
	'Bitten by a Radioactive ________ (Draw a Random Character Card)',
	'Everything They Touch Turns Inside Out',
	'Is Faster Than a Speeding Bullet',
	'Can Leap Over Tall Buildings in a Single Bound',
	'Cannons Instead of Hands',
	'Riding a Nuclear Missile',
	'Machine Guns for Legs',
	'Chained to Their Evil Twin',
	'Armed with a Dubstep Gun',
	'Is Really Really Good at Parkour ...Really',
	'Armed with a Pirahna Launcher'
];
var sf_locations = [
	'Crashing Airplane with One Parachute',
	'Deep in the Amazon Rainforest',
	'Desert Island',
	'Dessert Island',
	'Godzilla\'s Stomach',
	'The Slope of an Erupting Volcano',
	'Mars Colony',
	'Old Rope Bridge Over Lava',
	'On a Roller Coaster',
	'Undersea Research Station'
];
var sf_specials = [
	'All Fighters Armed With Gasoline Squirt Guns',
	'Fighters Cannot See or Hear',
	'Fighters are Inside Giant Robotic ________s (Draw a Random Character Card)',
	'Fighters are Riding Giant ________s (Draw a Random Character Card)',
	'Gravity is Reversed',
	'All Fighters are in Helicopters',
	'Fighters are Jousting',
	'Fighting for Custody of ________ on Court TV (Draw a Random Character Card)',
	'Fighters are Bungee Jumping Next to Each Other',
	'All Fighters Armed with Chainsaws'
];
/*Superfight Rules: Each player draws three fighter cards,
chooses one, and discards the other two. Then they draw
three powers cards each, choose one, and discard the other
two. They must then reveal their chosen cards to their
oppenent and debate which would win. Winner stays, loser
goes home immediately. The locations and specials can be
drawn, once each per round to alter the fight.*/

//Cards Against IT
var caIT_white = [
	'Rotating the Backup Tapes',
	'a PEBCAK',
	'rm -rf /*.*',
	'a faulty crossover cable',
	'a KVM with a broken M',
	'a one button mouse',
	'a laser pointer',
	'scanning a little too much with nmap',
	'a coffee stained mousepad',
	'a webcam pointed at the coffee maker',
	'a bastion host',
	'a salvaged motherboard with a parallel port',
	'a razorsharp punchdown tool',
	'my rooted phone',
	'a mouse connected serial -> ps/2 -> usb',
	'0118 999 881 999 119 725... 3',
	'my password',
	'a fingerprint scanner',
	'a scanning electron microscope',
	'a helpdesk ticket to "fix the cpu"',
	'a hard drive degaussing machine',
	'a multitool with a bottle opener',
	'a larger database connection pool',
	'a rainbow pack of 3.5" floppy disks',
	'a usb stick found in the parking lot',
	'an Arduino running NetBSD',
	'a shell script written in OCaml',
	'Edward Snowden',
	'CryptoLocker',
	'Stuxnet',
	'a serial port mouse',
	'5000 free AOL CDs',
	'Angelina Jolie in Hackers',
	'An RJ-45 crimping tool',
	'Clippy',
	'Two Factor Auth',
	'Have you tried turning it off and on again',
	'a flaky VPN connection',
	'script kiddies',
	'an IP Webcam with a default password',
	'rebuilding a RAID array',
	'manually fixing 100/1000 auto negotiation',
	'viewing web filter block logs',
	'the server is down',
	'pinging 127.0.0.1'
];
var caIT_black = [
	'The new IT Director has a sick tattoo of ________',
	'The last consultant was fired over ________',
	'In a pinch, ________ can be used to remotely reboot a server',
	'________ is Layer 8 of the OSI Networking Model',
	'Forgetting ________ in the datacenter is a firing offense',
	'Nothing tranfers data faster than ________',
	'We\'re going to use ________ instead of updating to IPv6',
	'________ is the last stage of our ________ rollout',
	'That red plunger switch on the wall launches ________',
	'I got this coffee mug from a conference about ________ back in 1997',
	'Had a user fall prey to a sophisticated ________ phishing attack',
	'Two factor auth with ________ and ________',
	'Forgot my badge this morning and had to use ________ to get in',
	'________ is now included for free with every OS Update',
	'________ is now required every time you restart ________',
	'The hot new videogame this year is ________ Simulator!',
	'A helpdesk call to fix ________ with ________',
	'I just got a new certification in ________'
];
/*Card Against IT Rules: Each player is dealt five white
cards. A black card is drawn, and the players must fill
in the blank(s) using white cards from their hand. The
player with the best sentence completion wins.*/