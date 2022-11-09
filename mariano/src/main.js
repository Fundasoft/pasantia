// facu

import Cards from './Cards.svelte';

var app = {};

app.cards = function(html,cardsDatos) {
	return new Cards({
		target: html,
	    props: {cardsDatos},
	})
	
}

export default app;
