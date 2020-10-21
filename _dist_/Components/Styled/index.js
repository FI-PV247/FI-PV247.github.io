import o from"@emotion/styled/macro";import{color as i,compose as e,flexbox as s,grid as r,layout as t,space as l,position as d,typography as p,shadow as a,flex as m,flexGrow as n,flexShrink as f,flexBasis as x,justifySelf as y,alignSelf as g,order as u,gridColumn as c,gridRow as j,gridArea as w,justifyItems as h,alignItems as b,justifyContent as C,alignContent as P}from"../../../web_modules/styled-system.js";import S from"../../../web_modules/@emotion/is-prop-valid.js";export const Box=o("div",{shouldForwardProp:S})`
	${e(l,i,t,m,n,f,x,y,g,u,c,j,w,d,p,a)}
`;Box.defaultProps={minWidth:0};export const Flex=o(Box)`
	${e(s)}
	display: flex;
`,Grid=o(Box)`
	${e(r,h,b,C,P)}
	display: grid;
`;
