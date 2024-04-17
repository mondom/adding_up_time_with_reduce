// const timeNodes = [...document.querySelectorAll('[data-time]')]
// ↑ zamiana NodeList na tablicę
// console.log(timeNodes)
// ↑ timeNodes to wszystkie li

// const seconds = timeNodes
// 	.map(node => node.dataset.time)
// 	.map(timeCode => {
// 		const [mins, secs] = timeCode.split(':').map(parseFloat)
// 		return mins * 60 + secs
// 		// ↑ za pierwszym map dostajemy się do samych wartościu atrybutów data-time czyli czasu zapisanego jako string np: "5:43"
// 		// .dataset daje nam dostęp do customowego atrybutu, ale musimy podać po kropce jeszcze jego drugi człon nazwy czyli w tym wypadku .time
// 	})
// 	.reduce((prevValue, currentValue) => prevValue + currentValue)

// //  ↑ za drugim razem map bierzemy każdy z tych stringów, rodzielamy go w miejscu : oraz przypisujemy wartość pierwszą do zmienne mins a drugą do secs.

// let secondsLeft = seconds
// const hours = Math.floor(secondsLeft / 3600)
// secondsLeft = secondsLeft = secondsLeft % 3600
// const mins = Math.floor(secondsLeft / 60)
// secondsLeft = secondsLeft % 60

// console.log(hours,mins,secondsLeft);

const liList = [...document.querySelectorAll('[data-time]')]
// console.log(liList)

if (liList.length > 0) {
	const timesList = liList
		.map(li => li.dataset.time)
		.map(time => {
			const [mins, secs] = time.split(':').map(parseFloat)
			// console.log(mins, secs)
			return mins * 60 + secs
			// const sumSec = seconds.reduce(function (acc, cValue) {
			// 	return acc + cValue
			// })
		})
		.reduce(function (acc, cVal) {
			return acc + cVal
		}, 0)

	let seconds = timesList
	const hours = Math.floor(seconds / 3600)
	seconds = seconds % 3600
	const minutes = Math.floor(seconds / 60)
	seconds = seconds % 60
	console.log(hours, minutes, seconds)
}
