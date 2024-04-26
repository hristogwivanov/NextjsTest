import styled from "styled-components";

export const StyledContentContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  display: flex;
  flex-direction: column;
  margin: auto;
  height: fit-content;
  width: fit-content;
`;