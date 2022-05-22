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
		background: rgb(53, 43, 216);
		background: linear-gradient(311deg, rgba(53, 43, 216, 1) 0%, rgba(153, 68, 209, 1) 100%);
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
		margin: 5% auto;
		display: block;
		background: rgba(255, 255, 255, 0.25);
		box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
		backdrop-filter: blur(7px);
		-webkit-backdrop-filter: blur(7px);
		border-radius: 10px;
		border: 1px solid rgba(255, 255, 255, 0.18);
		border-radius: 8px;
		position: relative;
	}
</style>
