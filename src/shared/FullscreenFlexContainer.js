import styled, { css } from 'styled-components';

const FullscreenFlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: 1.2rem;
    padding: .4em;
    margin: .8em 0;
    color: var(--light-text-clr);
    border-radius: 10px;
    background-color: var(--light-background-clr);
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
                                z-index: 2;
                                margin: .4rem;`
    }
`;

export default FullscreenFlexContainer;