import React, { useEffect, useState } from 'react';
import S from './style';
import like from './image/like.svg';
// import scrap from './image/scrap.svg';
import scrapBlack from './image/scrapBlack.svg';
import comment_one from './image/comment_one.svg';
import { useNavigate } from 'react-router-dom';
import LikeBt from './LikeBt';
import Follow from './Follow';
import ScrapBlack from './ScrapBlack';
import CheckboxButton from '../../components/checkbox/CheckboxButton';
import CheckboxBt from '../../componenet/checkbox/CheckboxBt';

const CommunityAll = () => {

    window.scrollTo(0,0);

    // const location = useLocation();

    // 토글 버튼 클릭시 글, 위치 변경
    const [isSlide, setIsSlide] = useState(true);
    const navigate = useNavigate();
    const slideToTag = () => {
        setIsSlide(!isSlide)
        navigate("/community/CommunityFollow")
    }

    
    // 태그버튼
    const [tagClick, setTagClick] = useState("like")
    useEffect(()=>{
        setTagClick("like")
    }, [setTagClick])

    // 글로 페이지 이동
    const toPostsOnClick = () => {
        navigate("/community/CommunityAllDt")
    }   
    
    // 좋아요 클릭 시 색상 변경
    // const [likeClick, setLikeClick] = useState("#fff")    
    // const likeColor = () => {
    //     setLikeClick(prevColor => (prevColor === '#fff' ? '#F27830' : '#fff'))
    // }

    // 스크랩 클릭 시 색상 변경
    // const [scrapClick, setScrapClick] = useState("#fff")
    // const scrapColor = () => {
    //     setScrapClick(prevColor => (prevColor === '#fff' ? '#F27830' : '#fff'))
    // }
    
    // 좋아요 버튼 컴포넌트에서 만들기
    const likeData = [
        {
            id : 1,
            likeBt : <img src={like} alt="likeBt"></img>,
            scrapBt : <img src={scrapBlack} alt="scrapBt"></img>,
            follow : 1,
        },
        {
            id : 2,
            likeBt : <img src={like} alt="likeBt"></img>,
            scrapBt : <img src={scrapBlack} alt="scrapBt"></img>,
            follow : 2,
        },
        {
            id : 3,
            likeBt : <img src={like} alt="likeBt"></img>,
            scrapBt : <img src={scrapBlack} alt="scrapBt"></img>,
            follow : 3,
        },
        {
            id : 4,
            likeBt : <img src={like} alt="likeBt"></img>,
            scrapBt : <img src={scrapBlack} alt="scrapBt"></img>,
            follow : 4,
        },
        {
            id : 5,
            likeBt : <img src={like} alt="likeBt"></img>,
            scrapBt : <img src={scrapBlack} alt="scrapBt"></img>,
            follow : 5,
        },
        {
            id : 6,
            likeBt : <img src={like} alt="likeBt"></img>,
            scrapBt : <img src={scrapBlack} alt="scrapBt"></img>,
            follow : 6,
        },
        {
            id : 7,
            likeBt : <img src={like} alt="likeBt"></img>,
            scrapBt : <img src={scrapBlack} alt="scrapBt"></img>,
            follow : 7,
        },
        {
            id : 8,
            likeBt : <img src={like} alt="likeBt"></img>,
            scrapBt : <img src={scrapBlack} alt="scrapBt"></img>,
            follow : 8,
        },
        {
            id : 9,
            likeBt : <img src={like} alt="likeBt"></img>,
            scrapBt : <img src={scrapBlack} alt="scrapBt"></img>,
            follow : 9,
        },
    ]

    return (
        <S.CommunityContainer data-aos="fade-in">
            <S.CommunityTitle>COMMUNITY</S.CommunityTitle>
            <S.CommunitySubTitle>지속 가능한 세상을 함께 만들어가는 공간</S.CommunitySubTitle>

            <S.CommunityToggle>
                
                <div className='toggleAll' onClick={slideToTag}>ALL</div>
                <div className='toggleFollow' onClick={slideToTag}>FOLLOW</div>
                <span className={`button ${isSlide ? "allActive" : "followActive"}`}>{isSlide ? "ALL" : "FOLLOW"}</span>
            </S.CommunityToggle>
            <CheckboxButton />

            <S.mainWrapper>
                <div className='top'>
                    <S.totalNum><p>전체 13,429</p></S.totalNum>                    
                    <S.tagButton>
                        <button className={tagClick === "like" ? "click" : "unClick"} onClick={()=>setTagClick("like")}><p>좋아요순</p></button>
                        <button className={tagClick === "new" ? "click" : "unClick"} onClick={()=>setTagClick("new")}><p>최신순</p></button>
                        <button className={tagClick === "coment" ? "click" : "unClick"} onClick={()=>setTagClick("coment")}><p>댓글많은순</p></button>
                        <button className={tagClick === "view" ? "click" : "unClick"} onClick={()=>setTagClick("view")}><p>조회수순</p></button>
                        <button className={tagClick === "scrap" ? "click" : "unClick"} onClick={()=>setTagClick("scrap")}><p>스크랩순</p></button>
                    </S.tagButton>
                </div>

                <S.FeedBox className='전체 박스'>

                <S.Feed1 className='게시물'>
                    <S.PostUser1 className='게시물1'>
                        <S.text>
                            <S.PostUserImage1></S.PostUserImage1>
                            <S.TextInfo>
                            <S.PostUserName>유저 이름</S.PostUserName>
                            <div>·</div>
                            <S.FollowUser>
                                {/* <p onClick={followColorChange} style={{color : isFollow}}>팔로우</p> */}
                                <Follow likeData={likeData}/>
                            </S.FollowUser>
                            <S.UserIntro>한 줄 소개</S.UserIntro>
                            </S.TextInfo>
                        </S.text>
                        <S.PostImage onClick={toPostsOnClick}><S.Views>조회수 6,841</S.Views></S.PostImage>
                        <S.PostTitleCenter onClick={toPostsOnClick}>게시물 제목</S.PostTitleCenter>
                        <S.FeedOption>
                            <LikeBt likeData={likeData}/>
                            <div>136</div>
                            <ScrapBlack likeData={likeData} />
                            <div>427</div>
                            <img src={comment_one} alt='commentBt'></img>
                            <div>63</div>
                        </S.FeedOption>
                    </S.PostUser1>
                    <S.PostUser1 className='게시물2'>
                        <S.text>
                            <S.PostUserImage1></S.PostUserImage1>
                            <S.TextInfo>
                            <S.PostUserName>유저 이름</S.PostUserName>
                            <div>·</div>
                            <S.FollowUser>
                                <Follow likeData={likeData}/>
                            </S.FollowUser>
                            <S.UserIntro>한 줄 소개</S.UserIntro>
                            </S.TextInfo>
                        </S.text>
                        <S.PostImage onClick={toPostsOnClick}><S.Views>조회수 6,841</S.Views></S.PostImage>
                        <S.PostTitleCenter onClick={toPostsOnClick}>게시물 제목</S.PostTitleCenter>
                        <S.FeedOption>
                            <LikeBt likeData={likeData}/>
                            <div>136</div>
                            <ScrapBlack likeData={likeData}/>
                            <div>427</div>
                            <img src={comment_one} alt='commentBt'></img>
                            <div>63</div>
                        </S.FeedOption>
                    </S.PostUser1>
                    <S.PostUser1 className='게시물3'>
                        <S.text>
                            <S.PostUserImage1></S.PostUserImage1>
                            <S.TextInfo>
                            <S.PostUserName>유저 이름</S.PostUserName>
                            <div>·</div>
                            <S.FollowUser>
                                <Follow likeData={likeData}/>
                            </S.FollowUser>                            
                            <S.UserIntro>한 줄 소개</S.UserIntro>
                            </S.TextInfo>
                        </S.text>
                        <S.PostImage onClick={toPostsOnClick}><S.Views>조회수 6,841</S.Views></S.PostImage>
                        <S.PostTitleCenter onClick={toPostsOnClick}>게시물 제목</S.PostTitleCenter>
                        <S.FeedOption>
                            <LikeBt likeData={likeData}/>
                            <div>136</div>
                            <ScrapBlack likeData={likeData}/>
                            <div>427</div>
                            <img src={comment_one} alt='commentBt'></img>
                            <div>63</div>
                        </S.FeedOption>
                    </S.PostUser1>

                </S.Feed1>
                <S.Feed1 className='게시물'>
                    <S.PostUser1 className='게시물1'>
                        <S.text>
                            <S.PostUserImage1></S.PostUserImage1>
                            <S.TextInfo>
                            <S.PostUserName>유저 이름</S.PostUserName>
                            <div>·</div>
                            <S.FollowUser>
                                <Follow likeData={likeData}/>
                            </S.FollowUser>                            
                            <S.UserIntro>한 줄 소개</S.UserIntro>
                            </S.TextInfo>
                        </S.text>
                        <S.PostImage onClick={toPostsOnClick}><S.Views>조회수 6,841</S.Views></S.PostImage>
                        <S.PostTitleCenter onClick={toPostsOnClick}>게시물 제목</S.PostTitleCenter>
                        <S.FeedOption>
                            <LikeBt likeData={likeData}/>
                            <div>136</div>
                            <ScrapBlack likeData={likeData}/>
                            <div>427</div>
                            <img src={comment_one} alt='commentBt'></img>
                            <div>63</div>
                        </S.FeedOption>
                    </S.PostUser1>
                    <S.PostUser1 className='게시물2'>
                        <S.text>
                            <S.PostUserImage1></S.PostUserImage1>
                            <S.TextInfo>
                            <S.PostUserName>유저 이름</S.PostUserName>
                            <div>·</div>
                            <S.FollowUser>
                                <Follow likeData={likeData}/>
                            </S.FollowUser>                            
                            <S.UserIntro>한 줄 소개</S.UserIntro>
                            </S.TextInfo>
                        </S.text>
                        <S.PostImage onClick={toPostsOnClick}><S.Views>조회수 6,841</S.Views></S.PostImage>
                        <S.PostTitleCenter onClick={toPostsOnClick}>게시물 제목</S.PostTitleCenter>
                        <S.FeedOption>
                            <LikeBt likeData={likeData}/>
                            <div>136</div>
                            <ScrapBlack likeData={likeData}/>
                            <div>427</div>
                            <img src={comment_one} alt='commentBt'></img>
                            <div>63</div>
                        </S.FeedOption>
                    </S.PostUser1>
                    <S.PostUser1 className='게시물3'>
                        <S.text>
                            <S.PostUserImage1></S.PostUserImage1>
                            <S.TextInfo>
                            <S.PostUserName>유저 이름</S.PostUserName>
                            <div>·</div>
                            <S.FollowUser>
                                <Follow likeData={likeData}/>
                            </S.FollowUser>                            
                            <S.UserIntro>한 줄 소개</S.UserIntro>
                            </S.TextInfo>
                        </S.text>
                        <S.PostImage onClick={toPostsOnClick}><S.Views>조회수 6,841</S.Views></S.PostImage>
                        <S.PostTitleCenter onClick={toPostsOnClick}>게시물 제목</S.PostTitleCenter>
                        <S.FeedOption>
                            <LikeBt likeData={likeData}/>
                            <div>136</div>
                            <ScrapBlack likeData={likeData}/>
                            <div>427</div>
                            <img src={comment_one} alt='commentBt'></img>
                            <div>63</div>
                        </S.FeedOption>
                    </S.PostUser1>

                </S.Feed1>
                <S.Feed1 className='게시물'>
                    <S.PostUser1 className='게시물1'>
                        <S.text>
                            <S.PostUserImage1></S.PostUserImage1>
                            <S.TextInfo>
                            <S.PostUserName>유저 이름</S.PostUserName>
                            <div>·</div>
                            <S.FollowUser>
                                <Follow likeData={likeData}/>
                            </S.FollowUser>                            
                            <S.UserIntro>한 줄 소개</S.UserIntro>
                            </S.TextInfo>
                        </S.text>
                        <S.PostImage onClick={toPostsOnClick}><S.Views>조회수 6,841</S.Views></S.PostImage>
                        <S.PostTitleCenter onClick={toPostsOnClick}>게시물 제목</S.PostTitleCenter>
                        <S.FeedOption>
                            <LikeBt likeData={likeData}/>
                            <div>136</div>
                            <ScrapBlack likeData={likeData}/>
                            <div>427</div>
                            <img src={comment_one} alt='commentBt'></img>
                            <div>63</div>
                        </S.FeedOption>
                    </S.PostUser1>
                    <S.PostUser1 className='게시물2'>
                        <S.text>
                            <S.PostUserImage1></S.PostUserImage1>
                            <S.TextInfo>
                            <S.PostUserName>유저 이름</S.PostUserName>
                            <div>·</div>
                            <S.FollowUser>
                                <Follow likeData={likeData}/>
                            </S.FollowUser>                            
                            <S.UserIntro>한 줄 소개</S.UserIntro>
                            </S.TextInfo>
                        </S.text>
                        <S.PostImage onClick={toPostsOnClick}><S.Views>조회수 6,841</S.Views></S.PostImage>
                        <S.PostTitleCenter onClick={toPostsOnClick}>게시물 제목</S.PostTitleCenter>
                        <S.FeedOption>
                            <LikeBt likeData={likeData}/>
                            <div>136</div>
                            <ScrapBlack likeData={likeData}/>
                            <div>427</div>
                            <img src={comment_one} alt='commentBt'></img>
                            <div>63</div>
                        </S.FeedOption>
                    </S.PostUser1>
                    <S.PostUser1 className='게시물3'>
                        <S.text>
                            <S.PostUserImage1></S.PostUserImage1>
                            <S.TextInfo>
                            <S.PostUserName>유저 이름</S.PostUserName>
                            <div>·</div>
                            <S.FollowUser>
                                <Follow likeData={likeData}/>
                            </S.FollowUser>                            
                            <S.UserIntro>한 줄 소개</S.UserIntro>
                            </S.TextInfo>
                        </S.text>
                        <S.PostImage onClick={toPostsOnClick}><S.Views>조회수 6,841</S.Views></S.PostImage>
                        <S.PostTitleCenter onClick={toPostsOnClick}>게시물 제목</S.PostTitleCenter>
                        <S.FeedOption>
                            <LikeBt likeData={likeData}/>
                            <div>136</div>
                            <ScrapBlack likeData={likeData}/>
                            <div>427</div>
                            <img src={comment_one} alt='commentBt'></img>
                            <div>63</div>
                        </S.FeedOption>
                    </S.PostUser1>

                </S.Feed1>

                </S.FeedBox>
            </S.mainWrapper>
        </S.CommunityContainer>
    );
};

export default CommunityAll;