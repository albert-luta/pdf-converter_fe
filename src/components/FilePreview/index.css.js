import styled from 'styled-components';

export const FilePreviewContainerCss = styled.div`
	width: 200px;
	height: 250px;
	background: ${({ theme }) => theme.colors.gray4};
	padding: 15px;
	display: flex;
	flex-direction: column;
`;

export const FilePreviewCss = styled.img`
	display: block;
	width: 100%;
	flex: 0 0 150px;
	background: ${({ theme }) => theme.colors.gray2};
`;

export const FileContentCss = styled.div`
	flex: 1;
	text-align: center;
	display: grid;
	place-items: center;
`;
