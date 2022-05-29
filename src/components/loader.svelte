<div class="content">
	<div class="lds-dual-ring" />
</div>

<style>
	.content {
		width: 100%;
		height: 100vh;
		display: grid;
		place-items: center;
	}
	.lds-dual-ring {
		display: inline-block;
		width: 80px;
		height: 80px;
		margin: auto;
	}
	.lds-dual-ring:after {
		content: ' ';
		display: block;
		width: 64px;
		height: 64px;
		margin: 8px;
		border-radius: 50%;
		border: 6px solid #352bd8;
		border-color: #352bd8 transparent #352bd8 transparent;
		animation: lds-dual-ring 1.2s linear infinite;
	}
	@keyframes lds-dual-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
