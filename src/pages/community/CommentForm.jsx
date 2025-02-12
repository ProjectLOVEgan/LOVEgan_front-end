import React, { useState } from 'react';
import S from './style';
import UserImg2 from './image/UserImg2.png';

// parentId=null, onReply
const CommentForm = ( {addList, author, addReply} ) => {
    const [value, setValue] = useState('');
    
    // const now = new Date();   

    const handleChange  = (e) => {
        setValue(e.target.value);   
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(value.trim()) {
            const newComment = {
                // author: author,
                content: value, // 입력한 댓글 내용
                // 대댓글 저장 배열
                // replies: [],
                // createAt: new Date().toISOString(),
            };

            // if(parentId) {
            //     addReply(parentId, newComment);
            // } else {
            //     addList(newComment);
            // }
            
            addList(newComment)
            setValue('');

            console.log('Parent ID:', author);
            console.log('addReply Function:', addReply);
            console.log('New Comment:', newComment);
        }
    }
    
    return (
        <S.typing>
            <img src={UserImg2} alt='유저프로필' />
            <form onSubmit={handleSubmit}>
                <span className='box'>
                    <input 
                        className='int'
                        type="text"
                        value={value}
                        onChange={handleChange}
                        placeholder={
                            // parentId 
                            // ? '대댓글 입력' 
                            // : 
                        '칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다 :)'}
                    />
                </span>
                <button type="submit" className='submitBt' disabled={!value.trim()}>
                    입력
                </button>
            </form>
        </S.typing>
    );
};

export default CommentForm;