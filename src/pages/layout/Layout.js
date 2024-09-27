import React from 'react';
import {ReactComponent as LogoWhite} from './images/logo-white.svg'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import S from './style';


const Layout = () => {

    // 검색 창에서 돋보기 버튼을 눌렀을 때 search 페이지로 이동
    const navigate = useNavigate();

    return (
        <S.Wrapper>
            <S.Header>
                {/* 메인로고 환경변수 {} */}
                <Link to={"/"}><img src={process.env.PUBLIC_URL + "/images/main/lovegan_logo_main.png"} alt="메인로고" /></Link>
                <S.NavContainer>
                <NavLink to={"/brand"}>BRAND</NavLink>
                <NavLink to={"/product"}>PRODUCT</NavLink>
                <NavLink to={"/restaurant"}>RESTAURANT</NavLink>
                <NavLink to={"/diary"}>DIARY</NavLink>
                <NavLink to={"/community"}>COMMUNITY</NavLink>
                </S.NavContainer>
                
                <form action=""><S.Input type='text' placeholder='  검색어를 입력하세요' onKeyDown={(e)=>{
                    // input에서 엔터키 눌렀을 때 search 페이지로 이동
                    if(e.key==="Enter"){
                        navigate('/search')
                    }
                }}></S.Input>
                   <S.InputButton onClick={()=>{ navigate("/search")}}></S.InputButton>
                </form>
           
                   
                <Link to={"/login"}> <S.Login>로그인</S.Login></Link>
                <NavLink to={"/signUp"}>
                    <S.SignupButton>회원가입</S.SignupButton>
                </NavLink>
            </S.Header>

            <S.Main>
                <Outlet/>
            </S.Main>
            
          
                <S.Footer>
                    {/* <Link to={"/customerService"}>고객센터</Link> */}
                    <S.logoWrapper><LogoWhite /></S.logoWrapper>
                    <S.textBox1><strong>이용약관 ㅣ 개인정보처리방침 ㅣ <Link to={"/customerService"}>고객센터</Link></strong></S.textBox1>
                    <textBoxWrapper>
                        <S.textBox2>법인명 : LOVEgan ㅣ 대표자 : 000 ㅣ 사업자 등록번호 : 000-00-00000  |  사업장 소재지 : 서울 강남구 테헤란로 146 </S.textBox2>
                        <S.textBox2>서울 사무소 : 서울 강남구 테헤란로 146 신한은행 건물 4층  |  통신판매등록번호 : 2024--0901 ㅣ 개인정보관리책임자 : 000</S.textBox2>
                        <S.textBox2>이메일 : customer@lovegan.co.kr ㅣ 팩스 : 02-538-0021</S.textBox2>
                        <S.textBox2>COPYRIGHT ⓒ LOVEgan. ALL RIGHTS RESERVED.</S.textBox2>
                    </textBoxWrapper>
                </S.Footer>
            
            
        </S.Wrapper>
    );
};

export default Layout;