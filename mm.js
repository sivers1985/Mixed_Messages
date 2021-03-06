// Array of inspirational quotes
const quotes = new Array(
    "To begin, begin. -William Wordsworth",
	"There is only one corner of the universe you can be certain of improving, and that’s your own self. -Aldous Huxley",
	"Set your goals high, and don’t stop till you get there. -Bo Jackson",
	"It always seems impossible until it’s done. -Nelson Mandela",
	"Only I can change my life. No one can do it for me. -Carol Burnett",
	"You will never win if you never begin. -Helen Rowland",
	"You just can’t beat the person who never gives up. -Babe Ruth",
	"If you’re going through hell, keep going. -Winston Churchill",
	"Either I will find a way, or I will make one. -Philip Sidney",
	"Never complain and never explain. -Benjamin Disraeli",
	"Be miserable. Or motivate yourself. Whatever has to be done, it’s always your choice. -Wayne Dyer",
	"Act as if what you do makes a difference. It does. -William James"
);

const generateMessage = () => {
    let randomNum1 = Math.floor(Math.random() * 12);
    let randomNum2 = Math.floor(Math.random() * 11);
    let message1 = quotes[randomNum1];
    quotes.splice(randomNum1, 1);
    let message2 = quotes[randomNum2];
    quotes.splice(randomNum2, 1);
    let message3 = quotes[Math.floor(Math.random() * 10)];

    console.log(message1 + '\n' + message2 + '\n' + message3);
};

generateMessage();