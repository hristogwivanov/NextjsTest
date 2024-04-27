import styled from "styled-components";

export const StyledCard = styled(({ ...props }) => <div {...props} />)`
    width: ${(props) => props.size}rem;
    height: 10rem;
    background-color: ${(props) => props.bgColor};
    padding: 3px;
    border-radius: 10px;
    border: solid 3px transparent;
    display: flex;
    box-sizing: border-box;
    & label {
        padding: 3px;
    }

    &:hover {
        border: solid ${({ theme }) => theme.main} 3px;
        cursor: pointer;

        & label {
            color: ${({ theme }) => theme.main};
            cursor: pointer;
            text-decoration: underline;
        }
    }
`;
