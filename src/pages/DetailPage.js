import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ThreadDetail from '../components/thread/ThreadDetail';
import ThreadDetailComment from '../components/thread/ThreadDetailComment';
import {
  asyncAddComment,
  asyncReceiveThreadDetail,
  asyncToggleUpVoteThreadDetail,
  asyncToggleDownVoteThreadDetail,
  asyncToggleUpVoteCommentDetail,
  asyncToggleDownVoteCommentDetail,
} from '../states/threadDetail/action';

function DetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { threadDetail = null, authUser } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const addCommentThread = (content) => {
    dispatch(asyncAddComment({ content, commentTo: id }));
  };

  const onLikeThreadDetail = () => {
    dispatch(asyncToggleUpVoteThreadDetail());
  };

  const onDislikeThreadDetail = () => {
    dispatch(asyncToggleDownVoteThreadDetail());
  };

  const onLikeComment = () => {
    dispatch(asyncToggleUpVoteCommentDetail());
  };

  const onDislikeComment = () => {
    dispatch(asyncToggleDownVoteCommentDetail());
  };

  if (!threadDetail) {
    return null;
  }

  return (
    <section className="detail-page">
      <ThreadDetail
        {...threadDetail}
        authUser={authUser}
        like={onLikeThreadDetail}
        dislike={onDislikeThreadDetail}
      />
      <ThreadDetailComment
        like={onLikeComment}
        dislike={onDislikeComment}
        authUser={authUser}
        detail={threadDetail}
        addCommentThread={addCommentThread}
      />
    </section>
  );
}

export default DetailPage;
