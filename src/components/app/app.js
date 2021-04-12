import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

const App = () => {
    //получаем данные с сервера
    const data = [
        {label: 'Going to learn React', important: true},
        {label: 'That is so good', important: false},
        {label: 'I need a break...', important: false},
    ];


    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            {/* //передаем полученные данные в компонент PostList */}
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    )
}

export default App;