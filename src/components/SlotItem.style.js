import styled from 'styled-components';
import colors from '../config/colors';

export const StyledSlot = styled.div`
    height: 100%;
    .image-container {
        margin: 4px;
        background-image: url(${props => props.image});
        background-size: cover;
        height: calc(100% - 8px);
        background-position: center;
    }
    .icon {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 24px;
        color: ${colors.primary};
        cursor: pointer;
        background-color: white;
        border-radius: 20px;
        padding: 2px;
        :hover {
            color: white;
            background-color: ${colors.primary};
        }
    }
`;