import{css as e}from"../../../web_modules/@emotion/core.js";import{Box as p}from"./index.js";import s from"../../../Theme.js";const r=s(p)`
	${o=>o.ellipsis&&e`
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		`}
`.withComponent("p");export default r;
