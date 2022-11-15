import Nav from './Nav.svelte';
import Main from './Main.svelte';
import MenuFaded from './MenuFaded.svelte';

var app = {};

app.nav = function(html,datos) {
	return new Nav({
		target: html,
	    props: {datos},
	})
	
}

app.main = function(html,datos) {
	return new Main({
		target: html,
		props: {datos},
	})
}

app.MenuFaded = function(html,datos) {
	return new MenuFaded({
		target: html,
		props: {datos},
	})
}

export default app;

