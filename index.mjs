import "preact/debug";
import render from 'preact-render-to-string';
import { h } from 'preact';
import { useState } from 'preact/hooks';
import html from 'htm';

const htm = html.bind(h);

function App() {
	const [state, setState] = useState(0);
	return htm`<div class="foo">${state}</div>`
}

console.log(render(h(App)));