export default class Card {
	static numbers = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];
	static suits   = ['S','H','C','D'];
	static _rep_suits  = ['\u2660','\u2665','\u2663','\u2666'];

	constructor(number,suite) {
		let _tmpNumber = number.toUpperCase();
		if (!Card.numbers.includes(_tmpNumber))
			throw new Error('Number is not correct (must be in [\'2\',\'3\',\'4\',\'5\',\'6\',\'7\',\'8\',\'9\',\'T\',\'J\',\'Q\',\'K\',\'A\'])');
		let _tmpSuite = suite.toUpperCase();
		if (!Card.suits.includes(_tmpSuite))
			throw new Error('Suite must be \'S\' (Spades), \'H\' (Hearts), \'C\' (Corbles) or \'D\' (Diamonds)');
		this.suite = Card.suits.indexOf(_tmpSuite);
		this.number = Card.numbers.indexOf(_tmpNumber);
	}

	copy() {
		return new Card(Card.numbers[this.number],Card.suits[this.suite]);
	}

	static compare(c1, c2, asc = true) {
		const factor = asc ? 1 : -1;
		return (c1.number - c2.number) * factor; 
	}

	show() {
		console.log(Card.numbers[this.number] + Card._rep_suits[this.suite]);
	}

	toString() {
		return Card.numbers[this.number] + Card._rep_suits[this.suite];
	}
}