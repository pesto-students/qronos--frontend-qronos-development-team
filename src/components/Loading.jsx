import React from 'react'
import styled, { keyframes } from 'styled-components'

const Loading = () => {
    return (
        <Wrapper>
            <Ring></Ring>
            <LoadingSpan>Loading...</LoadingSpan>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    background-color: rgba(0,0,0, 0.9);
`
const RingAnimation = keyframes`
    0% {
        transform: rotate(0deg);
        box-shadow: 1px 5px 2px #e65c00;
    }
    50% {
        transform: rotate(180deg);
        box-shadow: 1px 5px 2px #18b201;
    }
    100% {
        transform: rotate(360deg);
        box-shadow: 1px 5px 2px #0456c8;
    }
`

const Ring = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    animation: ${RingAnimation} 2s linear infinite;

    &::before {
        position: absolute;
        content: '';
        left: 0;
        top: 0;
        border-radius: 50%;
        height: 100%;
        width: 100%;
        box-shadow: 0 0 5px rgba(255,255,255, 0.3);
    }
`

const LoadingAnimation = keyframes`
    50% {
        color: rgb(255,255,255);
    }
`

const LoadingSpan = styled.span`
    color: #737373;
    text-transform: uppercase;
    animation: ${LoadingAnimation} 3s ease-in-out infinite;
`

export default Loading