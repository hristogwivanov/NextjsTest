import styled from "styled-components";

export const StyledBackgroundImageContainer = styled(({ ...props }) => (
    <div {...props} />
))`
background-image: url("/img/background.png");
background-size: cover;
background-repeat: no-repeat;
width: ${(props) => props.width}px;
height: ${(props) => props.height}px; 
max-width: 100%;
max-height: 100%; 
`;