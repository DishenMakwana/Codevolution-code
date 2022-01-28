import { combineReducers } from 'redux';

import postsReducer from './posts';
import commentsReducer from './comments';
import postReducer from './post';

const rootReducer = combineReducers({
    posts: postsReducer,
    comments: commentsReducer,
    post: postReducer,
});

export default rootReducer;
