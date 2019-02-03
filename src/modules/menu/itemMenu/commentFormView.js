import React from 'react';

const CommentForm = ({ comments = [], addComment, handleChange, value }) => (
  <>
    {comments.length > 0 ? <h1>have comments</h1> : <p>Dont have commetns</p>}

    <form onSubmit={addComment}>
      <textarea name="commentArea" onChange={handleChange} value={value} />
      <button type="submit">Добавить комментарий</button>
    </form>
  </>
);

export default CommentForm;
