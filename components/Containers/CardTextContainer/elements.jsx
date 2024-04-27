import styled from "styled-components";

export const StyledCardTextContainer = styled(({ ...props }) => (
    <div {...props} />
))`
    display: flex;
    flex-direction: column;
`;
