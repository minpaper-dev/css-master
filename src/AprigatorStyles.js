import styled from 'styled-components'
// import {size} from '../public/assets/styles/size'

export const Container = styled.div`
    background-color : #D6E4EF;
    width : 100vw;
    padding : 40px 0px;
`

export const MainTitle = styled.div`
    color : #2F3D4C;
    display : flex;
    align-items : center;
    justify-content : center;
    margin-bottom : 24px;
`

export const LogoImage = styled.img`
    width : 64px;
    height : 64px;
    margin-right : 16px;
`

export const TitleText = styled.span`
    font-weight : 700;
    font-size : 32px;
`

export const LoginContainer = styled.section`
    display : flex;
    flex-direction : column;
    justify-content : center;
    max-width : 502px;
    margin : 0 auto;
    padding : 24px 24px 40px 24px;
    border-radius : 16px;
    
    background : linear-gradient(to bottom, white, #D6E4EF);

    @media (min-width: 428px) {
    // 428px 보다 큰 화면
    box-shadow : 1px 5px 10px 1px gray;
}
`

export const LoginImage = styled.div`
    position : relative;
    width : 100%;
    height : 215px;
    border-radius : 8px;
    background-color : gray;
`

export const LoginProfile = styled.div`
    position : absolute;
    bottom : -50px;
    left : 24px;
    display : flex;
    align-items : flex-end;
    justify-content : flex-start;
`

export const ProfileImage = styled.div`
    border : 4px solid white;
    width : 104px;
    height : 104px;
    border-radius : 100%;
    background-color : gray;
    margin-right : 24px;
`

export const ProfileDesription = styled.span`
    color : ${props => props.color};
    font-weight : ${props => props.weight};
    font-size : 20px;
    padding-bottom : 10px;
`

export const LoginForm = styled.div`
    display : flex;
    flex-direction : column;
    margin : 86px 16px 20px;
`

export const LoginFormTitle = styled.span`
    font-weight : 800;
    margin-bottom : 8px;
`

export const LoginFormInput = styled.div`
    display : flex;
    align-items : center;
    justify-content : space-between;
    background-color : white;
    border : 1px solid #C6D1DC;
    border-radius : 8px;
    padding : 16px;
    margin-bottom : 24px;
`

export const LoginOption = styled.div`
    display : flex;
    align-items : center;
    justify-content : space-between;
    margin-bottom : 24px;
`

export const LoginRemeber = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
`

export const FindPasswordButton = styled.button`
    border : 0px;
    background-color : transparent;
    text-decoration : underline;
`

export const LoginButton = styled.button`
    background-color : red;
    padding : 16px;
    border-radius : 8px;
    color : white;
    font-size : 16px;
    border : 0px;
`

export const WrapButton = styled.div`
    display : flex;
    margin : 0px 16px;
`

export const NotRobert = styled.p`
    display : flex;
    align-items : center;
    justify-content : center;
    font-size : 18;
    font-weight : 800;
    margin-bottom : 24px;
`

export const AsNewButton = styled.button`
    width : 100%;
    border : 0px;
    color : #FFF;
    padding : 16px;
    border-radius : 8px;
    background-color : #2F3D4C;
    font-size : 16px;
    font-weight : 800;
    margin-right : 24px;
`

export const SignUpButton = styled.button`
    width : 100%;
    border : 1px solid #D90327;
    color : #D90327;
    padding : 16px;
    border-radius : 8px;
    background-color : transparent;
    font-size : 16px;
    font-weight : 800;
`