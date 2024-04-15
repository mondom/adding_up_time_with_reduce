const timeNodes = [...document.querySelectorAll('[data-time]')]
// ↑ zamiana NodeList na tablicę
// console.log(timeNodes)
// ↑ timeNodes to wszystkie li

const seconds = timeNodes
	.map(node => node.dataset.time)
	.map(timeCode => {
		const [mins, secs] = timeCode.split(':').map(parseFloat)
		return mins * 60 + secs
		// ↑ za pierwszym map dostajemy się do samych wartościu atrybutów data-time czyli czasu zapisanego jako string np: "5:43"
		// .dataset daje nam dostęp do customowego atrybutu, ale musimy podać po kropce jeszcze jego drugi człon nazwy czyli w tym wypadku .time
	})
	.reduce((prevValue, currentValue) => prevValue + currentValue)


//  ↑ za drugim razem map bierzemy każdy z tych stringów, rodzielamy go w miejscu : oraz przypisujemy wartość pierwszą do zmienne mins a drugą do secs.

let secondsLeft = seconds
const hours = Math.floor(secondsLeft / 3600)
secondsLeft = secondsLeft = secondsLeft % 3600
const mins = Math.floor(secondsLeft / 60)
secondsLeft = secondsLeft % 60


console.log(hours,mins,secondsLeft);