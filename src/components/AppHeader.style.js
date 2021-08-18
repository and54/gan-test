import styled from "styled-components";
import colors from '../config/colors';

export const StyledHeader = styled.div`
    display: flex;
    .title {
        font-size: 40px;
        font-weight: 500;
    }
    .filters {
        display: flex;
        text-align: right;
        margin-left: auto;
    }
    .icon {
        width: 24px;
        height: 24px;
        border-radius: 20px;
        padding: 2px;
        margin: 2px;
        background-color: ${colors.primary};
        color: white;
    }
    .search-background {
        height: 36px;
        display: flex;
        box-shadow: 2px 2px 4px #00000033;
        padding: 2px 4px 2px 14px;
        align-items: center;
        border-radius: 20px;
        margin-left: 30px;
    }
`;

export const FilterButton = styled.div`
    width: 40px;
    font-size: 12px;
    text-align: center;
    :hover {
        color: black;
        cursor: pointer;
    }
`;