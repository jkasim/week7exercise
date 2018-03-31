//console.log("connected");


var horoscopes = [
	{
		zodiacName: 'Capricorn',
		zodiacImage: 'img/cap.jpg',
		zodiacSign: 'Ambitous, active minds, need to be in control.'
	},
	{
		zodiacName: 'Aquarius',
		zodiacImage: 'img/aquarius.jpg',
		zodiacSign: 'Opportunist, does not care what others think, work for new ideas.'
	},
	{
		zodiacName: 'Pisces',
		zodiacImage: 'img/pisces.jpg',
		zodiacSign: 'Sensitive, reserved, esacpe from reality, very good listener and friend.'
	},
	{
		zodiacName: 'Aries',
		zodiacImage: 'img/aries.jpg',
		zodiacSign: 'Independent, courageous, enjoy leading others.'
	},
	{
		zodiacName: 'Taurus',
		zodiacImage: 'img/taurus.jpg',
		zodiacSign: 'Fight for what they want, easy going but can be stubborn.'
	},
	{
		zodiacName: 'Gemini',
		zodiacImage: 'img/gemini.jpg',
		zodiacSign: 'Many sides to them, very talkative, always will go where they want to.'
	},
	{
		zodiacName: 'Cancer',
		zodiacImage: 'img/cancer.jpg',
		zodiacSign: 'Marked by inconsistency, enjoy security unpredictable.'
	},
	{
		zodiacName: 'Leo',
		zodiacImage: 'img/leo.jpg',
		zodiacSign: 'High self esteem, very devoted, kind and generous.'
	},
	{
		zodiacName: 'Virgo',
		zodiacImage: 'img/virgo.jpg',
		zodiacSign: 'Constantly analyzing and thinking, enjoy betterment of oneself.'
	},
	{
		zodiacName: 'Libra',
		zodiacImage: 'img/libra.jpg',
		zodiacSign: 'Diplomatic nature, get along with everyone, ambitous.'
	},
	{
		zodiacName: 'Scorpio',
		zodiacImage: 'img/scorpio.jpg',
		zodiacSign: 'Very intense, questions everything, treats others with kindness and loyalty.'
	},
	{
		zodiacName: 'Sagittarius',
		zodiacImage: 'img/sagittarius.jpg',
		zodiacSign: 'Positive outlook on life, vibrant personalities, enjoys meeting new people.'
	}

];

var input = document.getElementById("userData");
var myH1 = document.getElementById("name");
var myP = document.getElementById("sign");
var myImage = document.getElementById("icon");


function getInfo() {

	for(var i = 0; i <= horoscopes.length; i++) {
		
		if(input.value == horoscopes[i].zodiacName) {
			myH1.innerText = horoscopes[i].zodiacName;
			myP.innerText = horoscopes[i].zodiacSign;
			myImage.src = horoscopes[i].zodiacImage;
			console.log()
		}

	};

}