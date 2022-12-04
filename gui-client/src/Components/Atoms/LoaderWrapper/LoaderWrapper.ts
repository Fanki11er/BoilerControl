import styled from "styled-components";

export const LoaderWrapper = styled.div`
	opacity: 0;
	display: flex;
	flex-direction: column;
	width: 150px;
	height: 150px;
	background-color: transparent;
	justify-content: space-between;
	align-items: center;
	animation-name: show;
	animation-duration: 1s;
	animation-delay: 0.3s;
	animation-fill-mode: forwards;

	@keyframes show {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}
`;

export const LoaderImg = styled.img`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
