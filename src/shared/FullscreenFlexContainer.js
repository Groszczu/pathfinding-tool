import styled, { css } from 'styled-components';

const FullscreenFlexContainer = styled.div`
    display: flex;
    font-size: 1.2rem;
    padding: .4em;
    color: var(--light-txt-clr);
    border-radius: 10px;
    background-color: #5c5045;
    border: 3px solid black;

    justify-content: center;
    align-items: center;
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