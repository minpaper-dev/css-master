import React from "react";
import {Container, MainTitle, LogoImage, TitleText, LoginContainer, LoginImage, LoginProfile, ProfileImage, ProfileDesription, LoginForm, LoginFormTitle, LoginFormInput, LoginOption, LoginRemeber, FindPasswordButton, LoginButton, SignUpButton, AsNewButton, WrapButton, NotRobert} from './AprigatorStyles'
import Logo from './assets/Logo.png'

const Aprigator = () => {
    return(
        <Container>
            <MainTitle>
                <LogoImage src={Logo} alt="Logo" />
                <TitleText>
                Apprigator
                </TitleText>
            </MainTitle>
            <LoginContainer>
                <LoginImage>
                    <LoginProfile>
                        <ProfileImage />
                        <ProfileDesription color={'black'} weight={300}>Welcome back, {' '}</ProfileDesription>
                        <ProfileDesription color={'#D90327'} weight={700}> Rovert </ProfileDesription>
                    </LoginProfile>
                </LoginImage>
                <LoginForm>
                    <LoginFormTitle>
                        Email
                    </LoginFormTitle>
                    <LoginFormInput>
                    robert.langster@gmail.com
                    </LoginFormInput>
                    <LoginFormTitle>
                        Password
                    </LoginFormTitle>
                    <LoginFormInput>
                        ⦁⦁⦁⦁⦁⦁⦁⦁
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.8455 9.36842L14.7273 12.1958V12.0526C14.7273 11.3407 14.4399 10.658 13.9285 10.1546C13.417 9.65122 12.7233 9.36842 12 9.36842H11.8455ZM7.93636 10.0842L9.34545 11.4711C9.3 11.6589 9.27273 11.8468 9.27273 12.0526C9.27273 12.7645 9.56006 13.4473 10.0715 13.9507C10.583 14.454 11.2767 14.7368 12 14.7368C12.2 14.7368 12.4 14.71 12.5909 14.6653L14 16.0521C13.3909 16.3474 12.7182 16.5263 12 16.5263C10.7945 16.5263 9.63832 16.055 8.78588 15.216C7.93344 14.377 7.45455 13.2391 7.45455 12.0526C7.45455 11.3458 7.63636 10.6837 7.93636 10.0842ZM2.90909 5.13632L4.98182 7.17632L5.39091 7.57895C3.89091 8.74211 2.70909 10.2632 2 12.0526C3.57273 15.9805 7.45455 18.7632 12 18.7632C13.4091 18.7632 14.7545 18.4947 15.9818 18.0116L16.3727 18.3874L19.0273 21L20.1818 19.8637L4.06364 4M12 7.57895C13.2055 7.57895 14.3617 8.05028 15.2141 8.88926C16.0666 9.72824 16.5455 10.8661 16.5455 12.0526C16.5455 12.6253 16.4273 13.18 16.2182 13.6811L18.8818 16.3026C20.2455 15.1842 21.3364 13.7168 22 12.0526C20.4273 8.12474 16.5455 5.34211 12 5.34211C10.7273 5.34211 9.50909 5.56579 8.36364 5.96842L10.3364 7.89211C10.8545 7.69526 11.4091 7.57895 12 7.57895Z" fill="#8EA2B9"/>
                        </svg>

                    </LoginFormInput>
                    <LoginOption>
                        <LoginRemeber>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.81479 14.6666C2.40739 14.6666 2.0585 14.5217 1.76813 14.2318C1.47825 13.9415 1.33331 13.5926 1.33331 13.1852V2.81479C1.33331 2.40739 1.47825 2.0585 1.76813 1.76813C2.0585 1.47825 2.40739 1.33331 2.81479 1.33331H13.1852C13.5926 1.33331 13.9415 1.47825 14.2318 1.76813C14.5217 2.0585 14.6666 2.40739 14.6666 2.81479V13.1852C14.6666 13.5926 14.5217 13.9415 14.2318 14.2318C13.9415 14.5217 13.5926 14.6666 13.1852 14.6666H2.81479ZM6.96294 10.7963C7.06171 10.7963 7.1543 10.781 7.24072 10.7503C7.32714 10.7192 7.40739 10.6666 7.48146 10.5926L11.6852 6.38887C11.821 6.25307 11.8889 6.0864 11.8889 5.88887C11.8889 5.69134 11.8148 5.5185 11.6666 5.37035C11.5308 5.23455 11.358 5.16665 11.1481 5.16665C10.9383 5.16665 10.7654 5.23455 10.6296 5.37035L6.96294 9.03702L5.35183 7.42591C5.21603 7.2901 5.04936 7.2222 4.85183 7.2222C4.6543 7.2222 4.48146 7.29628 4.33331 7.44442C4.19751 7.58023 4.12961 7.75307 4.12961 7.96294C4.12961 8.17282 4.19751 8.34566 4.33331 8.48146L6.44442 10.5926C6.5185 10.6666 6.59875 10.7192 6.68516 10.7503C6.77158 10.781 6.86418 10.7963 6.96294 10.7963Z" fill="#D90327"/>
                            </svg>
                        Remember me
                        </LoginRemeber>
                        <FindPasswordButton>
                        Forgot password?
                        </FindPasswordButton>
                    </LoginOption>
                    <LoginButton>
                        Login
                    </LoginButton>
                </LoginForm>
                <NotRobert>
                I’m not Robert
                </NotRobert>
                <WrapButton>
                    <AsNewButton>
                    Login as new user
                    </AsNewButton>
                    <SignUpButton>
                    Sign Up
                    </SignUpButton>
                </WrapButton>
            </LoginContainer>
        </Container>
    )
}

export default Aprigator