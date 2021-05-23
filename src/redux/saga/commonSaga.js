import {call, put, select, takeEvery} from '@redux-saga/core/effects';
import axios from 'axios';

function* fecthNewsFeed() {
  const uri = 'https://kakalot-json-server.herokuapp.com/api/newsFeed';
  // const uri = 'http://10.0.2.2:3000/api/newsFeed';

  const getNewsFeed = async () => {
    const response = await axios.get(uri);
    return response.data;
  };

  try {
    const newsFeed = yield call(getNewsFeed);
    yield put({type: 'NEWSFEED_FETCH_SUCCESSED', newsFeed: newsFeed});
  } catch (error) {
    console.log({error});
  }
}

function* getComment(action) {
  try {
    const newsFeed = yield select(state => state.common.newsFeed);
    const getCommentById = newsFeed.find(x => x.id === action.payload);
    yield put({type: 'GET_COMMENT_SUCCESSED', payload: getCommentById});
  } catch (error) {
    console.log({error});
  }
}

function* updateComment(action) {
  try {
    yield put({type: 'UPDATE_COMMENT', comment: action.payload});
  } catch (error) {
    console.log({error});
  }
}

function* toggleLikeClick(action) {
  try {
    yield put({type: 'HANDLE_TOGGLE_LIKE_CLICK', payload: action.payload});
  } catch (error) {
    console.log({error});
  }
}

function* fetchDataProfile() {
  const data = [
    {
      id: 80584,
      avatar: 'https://cdn.fakercloud.com/avatars/imsoper_128.jpg',
      name: 'Mrs. Thanh Bình Nguyễn',
      time: '2021-06-20T12:18:17.545Z',
      status: 'common',
      content:
        'Hết mướn yêu máy leo ghế cửa. Tôi được máy. Khoan bảy máy ừ. Mua đã quần. Cái khâu nón bốn thuyền máy.\n \rÁ nha hai ác anh một xe tủ trăng ừ. Ba lầu sáu nón vàng trời. Ruộng đang kim đá áo phá khoảng.\n \rĐạp may mười đạp đâu tám. Cửa việc thì. Chỉ giày bảy.',
      content_image_show: false,
      content_image: 'http://placeimg.com/640/480/nature',
      liked: true,
      liked_number: 536,
      comment_number: 126,
      shared: 259,
    },
  ];
  try {
    yield put({type: 'PROFILE_FETCH_SUCCESSED', payload: data});
  } catch (error) {
    console.log({error});
  }
}

function* sharePostProfile(action) {
  try {
    yield put({type: 'SHARE_POST_PROFILE_SUCCESSED', payload: action.payload});
  } catch (error) {
    console.log({error});
  }
}

function* toggleLikeSubCommentClick(action) {
  try {
    yield put({
      type: 'HANDLE_TOGGLE_LIKE_SUB_COMMENT_CLICK',
      payload: action.payload,
    });
  } catch (error) {
    console.log({error});
  }
}

function* replyComment(action) {
  try {
    yield put({type: 'UPDATE_REPLY_COMMENT', payload: action.payload});
  } catch (error) {
    console.log({error});
  }
}

export default function* watchCommon() {
  // Home
  yield takeEvery('FETCH_NEWSFEED', fecthNewsFeed);
  yield takeEvery('TOGGLE_LIKE_CLICK', toggleLikeClick);
  yield takeEvery('TOGGLE_LIKE_SUB_COMMENT_CLICK', toggleLikeSubCommentClick);

  // Comment
  yield takeEvery('GET_COMMENT', getComment);
  yield takeEvery('NEW_COMMENT', updateComment);
  yield takeEvery('NEW_REPLY_COMMENT', replyComment);

  // Profile
  yield takeEvery('FETCH_DATA_SHARED', fetchDataProfile);
  yield takeEvery('SHARE_POST_TO_PROFILE', sharePostProfile);
}
