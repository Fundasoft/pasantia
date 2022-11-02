import Cards from './Cards.svelte';
import Intro from './Intro.svelte'

var app = {};

app.cards = function (html, cardsDatos) {
	return new Cards({
		target: html,
		props: { cardsDatos },
	})

}

app.intro = function (html, datos) {
	return new Intro({
		target: html,
		props: { datos }
	})
}

export default app;
