require("preact/debug");
const render = require('preact-render-to-string');
const { h } = require('preact');
const { useState } = require('preact/hooks');
const html = require('htm');

const htm = html.bind(h);

function App() {
	const [state, setState] = useState(0);
	return htm`<div class="foo">${state}</div>`
}

console.log(render(h(App)));