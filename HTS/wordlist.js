// Hack this site programming #1
// really messy code, will refactor next week

var fs = require('fs');

var text = fs.readFileSync('./wordlist.txt').toString('utf-8');

var js_array = text.split("\n");

var new_arr = []

js_array.forEach(n => {
	new_val = n.replace("\r", "")
	new_arr.push(new_val)
})

var availword_map = []

for (word of new_arr) {
	var new_obj = {
		word: word,
		map: {}
	}

	for (letter of word) {
		if (new_obj.map[letter]){
			new_obj.map[letter] += 1
		}
		else {
			new_obj.map[letter] = 1
		}
	}

	availword_map.push(new_obj)
}

var scrambled_words = [	
"sktiir",
"srdeans",
"mntaba",
"omiinll",
"tmiarx",
"elanie",
"oivail",
"lawicdt",
"tyetwe",
"nenur4r",
]

var unscrambled = []

var letter_dict = []

for (word of scrambled_words) {
	var new_obj = {}
	for (letter of word) {
		if (new_obj[letter]){
			new_obj[letter] += 1
		}
		else {
			new_obj[letter] = 1
		}
	}
	letter_dict.push(new_obj)
}

for (map of letter_dict){
	let keys = Object.keys(map)
	for (word of availword_map){
		console.log
		if (Object.keys(word.map).length !== keys.length){
			continue
		}
		else {
			let isWord = true
			for (key of keys) {
				if (word.map[key] !== map[key]) {
					isWord = false
					break
				}
			}
			if (isWord){
				unscrambled.push(word.word)
			} else {
				continue
			}
		}
	}
}

console.log(unscrambled.join(','))