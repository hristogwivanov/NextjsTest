import styled from "styled-components";

export const StyledVideoContainer = styled(({ ...props }) => (
    <div {...props} />
))`
max-width: 25 rem;
max-height: 65 rem;
width: 100%;
height: 100%;
`;