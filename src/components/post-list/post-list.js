import React from 'react';

import PostListItem from '../post-list-item';

const PostList = ({posts}) => {
    {/* //с помощью компонента формирует посты */}
    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li className='list-group-item'>
                <PostListItem {...itemProps}/>
            </li>
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;




for (var i = 0; i < 4; i++) {
    setTimeout(() => {
        console.log(i);
    },1000)
}


console.log(null === []);