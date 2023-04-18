import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from '../static/loader.json'
import styled from 'styled-components'

const LoadingAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <Container>
            <Lottie options={defaultOptions}
                height={150}
                width={150}
            />
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    width: 100%;
    overflow:hidden;
    height: 100%;
    display: flex;
    align-items: center;
    z-index: 1000000;
    background-color: rgba(0,0,0,0.5);
`

export default LoadingAnimation