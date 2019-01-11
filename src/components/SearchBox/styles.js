import styled from 'styled-components';

const Box = styled.div`
	position: relative;
	display: inline-block;
	border: 1px solid black;
`;

const Icon = styled.i`
	position: absolute;
	right: 6px;
	top: 6px;
	width: 20px;
	height: 20px;
	background-image: url(${(props) => props.icon});
	background-repeat: no-repeat;
	background-size: 20px;
	z-index: -1;
`;

const Input = styled.input`
	width: 220px;
	height: 32px;
	border: none;
	background-color: transparent;
`;

export { Box, Icon, Input };
