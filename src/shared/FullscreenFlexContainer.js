import styled, { css } from 'styled-components';

const FullscreenFlexContainer = styled.div`
    display: flex;
    justify-content: center;
    > * {
        width: 100%;
        margin: .4em;
    }
    ${
    props =>
        props.fullscreen && css`> * { margin-bottom: 0.4em }
                                flex-direction: column;
                                position: fixed;
                                top: ${props.top};
                                right: ${props.right};
                                left: ${props.left};
                                bottom: ${props.bottom};
                                z-index: 2;`
    }
`;

export default FullscreenFlexContainer;