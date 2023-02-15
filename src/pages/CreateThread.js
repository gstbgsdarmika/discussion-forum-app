import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncAddTread } from '../states/threads/action';
import ThreadInput from '../components/thread/ThreadInput';

function CreateThread() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onThreadInput = (title, body, category) => {
    dispatch(asyncAddTread({ title, body, category }));
    navigate('/');
  };

  return (
    <div className="new-thread-page">
      <h2>Buat Diskusi Baru</h2>
      <ThreadInput threadInput={onThreadInput} />
    </div>
  );
}

export default CreateThread;
