<script>
	export let label;
	export let onChange;
	export let value;
</script>

<label class="pure-material-textfield-outlined">
	<input placeholder=" " on:input={onChange} bind:value />
	<span>{label}</span>
</label>

<style>
	label {
		width: 100%;
	}
	span {
		color: var(--pure-material-primary-rgb);
	}
	.pure-material-textfield-outlined {
		--pure-material-safari-helper1: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
		position: relative;
		display: inline-block;
		padding-top: 6px;
		font-family: var(
			--pure-material-font,
			'Roboto',
			'Segoe UI',
			BlinkMacSystemFont,
			system-ui,
			-apple-system
		);
		font-size: 16px;
		line-height: 1.5;
		overflow: hidden;
	}

	/* Input, Textarea */
	.pure-material-textfield-outlined > input {
		box-sizing: border-box;
		margin: 0;
		border: solid 1px; /* Safari */
		border-color: var(--pure-material-onsurface-rgb);
		border-top-color: transparent;
		border-radius: 10px;
		padding: 15px 13px 15px;
		width: 100%;
		height: inherit;
		background-color: transparent;
		box-shadow: none; /* Firefox */
		font-family: inherit;
		font-size: inherit;
		line-height: inherit;
		caret-color: var(--pure-material-primary-rgb);
		transition: border 0.2s, box-shadow 0.2s;
		background-color: #fafafa;
	}

	/* Span */
	.pure-material-textfield-outlined > input + span {
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		border-color: var(--pure-material-onsurface-rgb);
		width: 100%;
		max-height: 100%;
		color: var(--pure-material-onsurface-rgb);
		font-size: 75%;
		line-height: 15px;
		cursor: text;
		transition: color 0.2s, font-size 0.2s, line-height 0.2s;
	}

	/* Corners */
	.pure-material-textfield-outlined > input + span::before,
	.pure-material-textfield-outlined > input + span::after {
		content: '';
		display: block;
		box-sizing: border-box;
		margin-top: 6px;
		border-top: solid 1px;
		border-top-color: var(--pure-material-onsurface-rgb);
		min-width: 10px;
		height: 8px;
		pointer-events: none;
		box-shadow: inset 0 1px transparent;
		transition: border-color 0.2s, box-shadow 0.2s;
	}

	.pure-material-textfield-outlined > input + span::before {
		margin-right: 4px;
		border-left: solid 1px transparent;
		border-radius: 10px 0;
	}

	.pure-material-textfield-outlined > input + span::after {
		flex-grow: 1;
		margin-left: 4px;
		border-right: solid 1px transparent;
		border-radius: 0 10px;
	}

	/* Hover */
	.pure-material-textfield-outlined:hover > input {
		border-color: var(--pure-material-onsurface-rgb);
		border-top-color: transparent;
	}

	.pure-material-textfield-outlined:hover > input + span::before,
	.pure-material-textfield-outlined:hover > input + span::after {
		border-top-color: var(--pure-material-onsurface-rgb);
	}

	.pure-material-textfield-outlined:hover > input:not(:focus):placeholder-shown {
		border-color: var(--pure-material-onsurface-rgb);
	}

	/* Placeholder-shown */
	.pure-material-textfield-outlined > input:not(:focus):placeholder-shown {
		border-top-color: var(--pure-material-onsurface-rgb);
	}

	.pure-material-textfield-outlined > input:not(:focus):placeholder-shown + span {
		font-size: inherit;
		line-height: 68px;
	}

	.pure-material-textfield-outlined > input:not(:focus):placeholder-shown + span::before,
	.pure-material-textfield-outlined > input:not(:focus):placeholder-shown + span::after {
		border-top-color: transparent;
	}

	/* Focus */
	.pure-material-textfield-outlined > input:focus {
		border-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
		border-top-color: transparent;
		box-shadow: inset 1px 0 var(--color-primary), inset -1px 0 var(--color-primary),
			inset 0 -1px var(--color-primary);
		outline: none;
	}

	.pure-material-textfield-outlined > input:focus + span {
		color: var(--pure-material-primary-rgb);
	}

	.pure-material-textfield-outlined > input:focus + span::before,
	.pure-material-textfield-outlined > input:focus + span::after {
		border-top-color: var(--color-primary) !important;
		box-shadow: inset 0 1px var(--color-primary);
	}

	/* Disabled */
	.pure-material-textfield-outlined > input:disabled,
	.pure-material-textfield-outlined > input:disabled + span {
		border-color: var(--pure-material-onsurface-rgb) !important;
		border-top-color: transparent !important;
		color: var(--pure-material-onsurface-rgb);
		pointer-events: none;
	}

	.pure-material-textfield-outlined > input:disabled + span::before,
	.pure-material-textfield-outlined > input:disabled + span::after {
		border-top-color: var(--pure-material-onsurface-rgb) !important;
	}

	.pure-material-textfield-outlined > input:disabled:placeholder-shown,
	.pure-material-textfield-outlined > input:disabled:placeholder-shown + span {
		border-top-color: var(--pure-material-onsurface-rgb) !important;
	}

	.pure-material-textfield-outlined > input:disabled:placeholder-shown + span::before,
	.pure-material-textfield-outlined > input:disabled:placeholder-shown + span::after {
		border-top-color: transparent !important;
	}

	/* Faster transition in Safari for less noticable fractional font-size issue */
	@media not all and (min-resolution: 0.001dpcm) {
		@supports (-webkit-appearance: none) {
			.pure-material-textfield-outlined > input,
			.pure-material-textfield-outlined > input + span,
			.pure-material-textfield-outlined > textarea,
			.pure-material-textfield-outlined > textarea + span,
			.pure-material-textfield-outlined > input + span::before,
			.pure-material-textfield-outlined > input + span::after,
			.pure-material-textfield-outlined > textarea + span::before,
			.pure-material-textfield-outlined > textarea + span::after {
				transition-duration: 0.1s;
			}
		}
	}
</style>
