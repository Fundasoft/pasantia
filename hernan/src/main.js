//import Cards from './Cards.svelte';
import Aerial from './Aerial.svelte';

//Agrego comentario

var app = {};

/* app.cards = function(html,cardsDatos) {
	return new Cards({
		target: html,
	    props: {cardsDatos},
	})
	
}
*/

app.aerial = function(html,datos) {
	return new Aerial({
		target: html,
	    props: {datos},
	})
	
}
export default app; 
