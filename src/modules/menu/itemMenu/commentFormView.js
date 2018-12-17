import React from 'react';

const CommentForm = ({ addComment, handleChange, value }) => (
  <>
    <p>Dont have commetns</p>

    <form onSubmit={addComment}>
      <textarea name="commentArea" onChange={handleChange} value={value} />
      <button type="submit">Добавить комментарий</button>
    </form>
  </>
);

export default CommentForm;
