import t from"../../web_modules/react.js";import{Global as a,css as o}from"../../web_modules/@emotion/core.js";import{theme as e}from".";export const FocusStyle=o`
	transition: box-shadow 0.2s ease-in-out;
	box-shadow: 0 0 6px 1px ${e.colors.primary};
	outline: none;
`,InvertFocusStyle=o`
	box-shadow: 0 0 6px 1px white;
	outline: none;
`;const s=()=>t.createElement(a,{styles:o`
			body {
				margin: 0;
				font-family: 'Drive', 'Roboto', -apple-system,
					BlinkMacSystemFont, 'Segoe UI', 'Oxygen', 'Ubuntu',
					'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
					sans-serif;
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
				color: ${e.colors.onLight};
			}

			* {
				font-family: 'Drive', 'Roboto', -apple-system,
					BlinkMacSystemFont, 'Segoe UI', 'Oxygen', 'Ubuntu',
					'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
					sans-serif;
			}

			*:focus {
				${FocusStyle}
			}

			p {
				padding: 0;
				margin: ${e.space[2]}px 0;
			}

			[data-reach-dialog-overlay] {
				z-index: 999;
			}

			[data-reach-dialog-content] {
				background-color: unset;

				:focus {
					box-shadow: none;
				}
			}
		`});export default s;
