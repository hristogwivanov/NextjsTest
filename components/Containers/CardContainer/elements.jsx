import styled from "styled-components";

export const StyledCardContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
  gap: 3rem;
`;
