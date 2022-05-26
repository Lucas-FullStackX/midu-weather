<div>
	<slot />
</div>

<style>
	:global(body) {
		font-family: Euclid, sans-serif, Arial, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
			Cantarell, Fira Sans, Droid Sans, Helvetica Neue;
		place-content: center;
		margin: 0;
		min-height: 100vh;
		background: #ece8f4;
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

	:global(h1, h2, h3, h4, h5, span) {
		margin: 0;
		color: #fafafa;
	}
	:global(a) {
		margin: 0;
		color: #fafafa;
		font: bold;
		text-decoration: none;
	}
	:global(a):hover {
		margin: 0;
		color: #faf;
		text-decoration: none;
	}

	div {
		aspect-ratio: 9 / 16;
		width: 90%;
		max-width: 400px;
		margin: 5% auto;
		display: block;
		backdrop-filter: blur(7px);
		-webkit-backdrop-filter: blur(7px);
		border-radius: 8px;
		position: relative;
	}
</style>
