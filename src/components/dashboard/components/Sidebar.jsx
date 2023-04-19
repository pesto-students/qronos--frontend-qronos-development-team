import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Logo from '../../../images/mobile_logo.png'
import * as Sentry from '@sentry/react'
import Dashboard_logo from '../../../images/dashboard.png'
import Media_library_logo from '../../../images/media-library.png'
import Content_logo from '../../../images/content.png'
import Api_view_logo from '../../../images/api-view.png'
import cog from '../../../images/icon.png'

import { useAuth0 } from "@auth0/auth0-react";
import { LocalStorage } from '../../../utils/LocalStorage'

const Sidebar = () => {
    const [opensidebar, setopensidebar] = useState(false)
    // const [loginConsoleOpen, setLoginConsoleOpen] = useState(false)

    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    const logoutFun = () => {
        logout({ logoutParams: { returnTo: window.location.origin } })
            .then(() => {
                LocalStorage.clear()
            })
    }

    useEffect(() => {
        Sentry.addBreadcrumb({
            category: 'navigation',
            message: 'Link loaded',
            data: {
                link: window.location.pathname,
            },
        });
    }, []);

    return (
        <Wrapper>
            <Container>
                <Link to="/">
                    <DashboardLogo src={Logo} alt="" />
                </Link>
                <IconsContainer>
                    <Link to="/dashboard">
                        <Icon src={Dashboard_logo} alt="" />
                    </Link>
                    <Link to="/medialibrary">
                        <Icon src={Media_library_logo} alt="" />
                    </Link>
                    <Link to="/content">
                        <Icon src={Content_logo} alt="" />
                    </Link>
                    <Link to="/api">
                        <Icon src={cog} alt="" />
                    </Link>
                </IconsContainer>
                <Empty>&nbsp;</Empty>
                <ProfileContainer>

                    <Profile
                        src="dashy-assets/images/avatar2.png"
                        alt=""
                        onClick={() => setopensidebar(!opensidebar)}
                    />
                    {
                        opensidebar
                        && <ProfileModal onClick={() => logoutFun()}>
                            <div>Logout</div>
                        </ProfileModal>
                    }
                </ProfileContainer>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: fixed;
    left:0;
    top: 0;
    height: 100%;
    width: fit-content;
    background-color: white;
    padding: 26px 16px;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(226,223,236,.541);
    z-index:10;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
`

const Empty = styled.div`
    flex-grow: 1;
`

const ProfileContainer = styled.div`
    position: relative;
`

const Profile = styled.img`
`

const ProfileModal = styled.div`
    position: absolute;
    left: 100%;
    width: fit-content;
    height: fit-content;
    background-color: white;
    bottom: 0;
    border-radius: 10px;
    padding: 20px 10px;
    box-shadow: 0 5px 15px rgba(226,223,236,.541);
    div {
        cursor: pointer;
    }
`

const DashboardLogo = styled.img`
    padding-bottom: 24px;
`

const IconsContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 15px;
`

const Icon = styled.img`
padding:10px;
margin:auto;
`


export default Sidebar