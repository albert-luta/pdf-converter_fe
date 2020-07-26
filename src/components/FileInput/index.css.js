import styled, { css } from 'styled-components';

const isHoveringOverWithFileCss = css`
	background: ${({ theme }) => theme.colors.blue}11;
	border-color: ${({ theme }) => theme.colors.blue};
	color: ${({ theme }) => theme.colors.blue};
`;

export const FileInputContainerCss = styled.section`
	width: 80%;
	height: 200px;
	border: 2px dashed ${({ theme }) => theme.colors.gray3};
	border-radius: 10px;
	margin: 0 auto;
	margin-top: 100px;
	color: ${({ theme }) => theme.colors.gray3};
	text-align: center;
	display: grid;
	place-items: center;
	cursor: pointer;
	transition: border ${({ theme }) => theme.transitionTimes.normal},
		color ${({ theme }) => theme.transitionTimes.normal},
		background ${({ theme }) => theme.transitionTimes.normal};

	&:hover {
		${isHoveringOverWithFileCss}
	}

	${({ isHoveringOverWithFile }) => isHoveringOverWithFile && isHoveringOverWithFileCss}
`;

export const InputHidden = styled.input`
	display: none;
`;
