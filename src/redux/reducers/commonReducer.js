const defaultState = {
  loading: false,
  isLoading: true,
  newsFeed: [],
  postId: null,
  commentList: [],
  comment: [],
  profile: [],
};

export const commonReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'NEWSFEED_FETCH_SUCCESSED':
      return {
        loading: true,
        isLoading: false,
        newsFeed: action.newsFeed,
      };
      break;

    case 'NEW_COMMENT':
      const newComment = {
        id: Math.trunc(Math.random() * 2000),
        name: 'Kakalot',
        avatar: "require('../../media/icons/iori_yagami.jpg')",
        liked: false,
        liked_number: 0,
        comment: action.payload,
        sub_comment: [],
        isShowSubComment: true,
      };
      state.commentList.push(newComment);
      return {
        ...state,
      };
      break;

    case 'GET_COMMENT_SUCCESSED':
      const postId = action.payload.id;
      const postCommentList = action.payload.comment;
      return {
        ...state,
        postId: postId,
        commentList: postCommentList,
        comment: action.payload,
      };
      break;

    case 'HANDLE_TOGGLE_LIKE_CLICK':
      const id = action.payload.id;
      const isLike = action.payload.liked;

      let liked_count = action.payload.liked_number;
      liked_count = isLike ? liked_count - 1 : liked_count + 1;

      const newPayload = [
        {
          ...action.payload,
          liked: !isLike,
          liked_number: liked_count,
        },
      ];

      const newsFeedFindId = state.newsFeed.find(x => x.id === id);
      if (newsFeedFindId) {
        const mergeNewsFeedArr = state.newsFeed.map(
          obj => newPayload.find(x => x.id === obj.id) || obj,
        );

        return {
          ...state,
          loading: true,
          isLoading: false,
          newsFeed: mergeNewsFeedArr,
        };
      }
      if (state.commentList) {
        // add obj to comment list of post
        const mergeCommentListArr = state.commentList.map(
          obj => newPayload.find(x => x.id === obj.id) || obj,
        );

        // add comment list to post
        const mergeCommentListToPost = state.newsFeed.find(
          x => x.id === state.postId,
        );
        mergeCommentListToPost.comment = mergeCommentListArr;

        // add post to news feed list
        const mergePostToNewsFeed = Object.assign(
          state.newsFeed,
          mergeCommentListToPost,
        );

        return {
          ...state,
          newsFeed: mergePostToNewsFeed,
          commentList: mergeCommentListArr,
        };
      }
      break;

    case 'PROFILE_FETCH_SUCCESSED':
      return {
        ...state,
        profile: action.payload,
      };
      break;

    case 'SHARE_POST_PROFILE_SUCCESSED':
      state.profile.push(action.payload);
      const loading = state.loading;
      return {
        ...state,
        loading: !loading,
      };

      break;

    case 'HANDLE_TOGGLE_LIKE_SUB_COMMENT_CLICK':
      const parent_id = action.payload.parent_id;

      const child_item_id = action.payload.child_item.id;
      const child_item_isLike = action.payload.child_item.liked;

      let child_item_liked_count = action.payload.child_item.liked_number;
      child_item_liked_count = child_item_isLike
        ? child_item_liked_count - 1
        : child_item_liked_count + 1;

      const child_item_newPayload = [
        {
          ...action.payload.child_item,
          liked: !child_item_isLike,
          liked_number: child_item_liked_count,
        },
      ];

      const findItemById = state.commentList.find(x => x.id === parent_id);
      const mergeChildNewPayload = findItemById.sub_comment.map(
        obj => child_item_newPayload.find(x => x.id === obj.id) || obj,
      );
      findItemById.sub_comment = mergeChildNewPayload;

      const newCommentList = Object.assign(state.commentList, findItemById);
      return {
        ...state,
        commentList: newCommentList,
      };

      break;

    case 'UPDATE_REPLY_COMMENT':
      const newReplyComment = {
        id: Math.trunc(Math.random() * 2000),
        name: 'Kakalot',
        avatar: "require('../../media/icons/iori_yagami.jpg')",
        liked: false,
        liked_number: 0,
        comment: action.payload.value,
      };

      const commentId = action.payload.cid;
      const commentOfPost = state.commentList.find(x => x.id === commentId);
      const mergeReplyToComment =
        commentOfPost.sub_comment.push(newReplyComment);
      const newsCommentList = Object.assign(state.commentList, commentOfPost);

      return {
        ...state,
        commentList: newsCommentList,
      };

      break;

    default:
      return state;
  }

  return state;
};
