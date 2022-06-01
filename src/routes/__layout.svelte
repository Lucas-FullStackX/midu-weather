<div>
	<slot />
</div>

<style>
	:root {
		--pure-material-onsurface-rgb: rgb(53, 43, 216);
		--pure-material-primary-rgb: rgb(53, 43, 216);
		--color-primary: rgb(53, 43, 216);
		--text-color: #000;
		--text-color-dark: #000;
		--bg-color: #fafafa;
		--body-color: #ece8f4;
		--text-color-light: #fafafa;
		--grey-color: #9699a9;
	}
	:global(body) {
		font-family: Euclid, sans-serif, Arial, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
			Cantarell, Fira Sans, Droid Sans, Helvetica Neue;
		place-content: center;
		margin: 0;
		min-height: 100vh;
		background: var(--body-color);
		transition: all 0.5s;
	}
	:global(body.dark-mode) {
		--text-color: #fafafa;
		--text-color-dark: #fafafa;
		--bg-color: #29292b;
		--body-color: #1f1f1f;
	}
	:global(html, body) {
		height: 100%;
		width: 100%;
		margin: 0;
		padding: 0;
	}

	:global(*, *::after, *::before) {
		box-sizing: border-box;
	}
	:global(img) {
		user-select: none;
		-moz-user-select: none;
		-webkit-user-drag: none;
		-webkit-user-select: none;
		-ms-user-select: none;
	}
	:global(h1, h2, h3, h4, h5, span, p) {
		margin: 0;
		color: var(--text-color);
	}
	:global(a) {
		margin: 0;
		color: var(--text-color);
		font: bold;
		text-decoration: none;
	}
	:global(a):hover {
		margin: 0;
		text-decoration: none;
		color: var(--grey-color);
	}

	div {
		width: 100%;
		max-width: 400px;
		margin: 0 auto;
		display: block;
		backdrop-filter: blur(7px);
		-webkit-backdrop-filter: blur(7px);
		border-radius: 8px;
		position: relative;
	}
</style>
