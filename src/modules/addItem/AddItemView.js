/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const AddItemView = ({
  handleChange,
  handlePostItem,
  options,
  name,
  description,
  category,
  image,
  price,
}) => (
  <>
    <form onSubmit={handlePostItem}>
      <label>Имя</label>
      <input
        onChange={handleChange}
        value={name}
        type="text"
        name="name"
        placeholder="Name"
        required
      />
      <label>Описание</label>
      <textarea
        onChange={handleChange}
        value={description}
        name="description"
        placeholder="Description"
        required
      />
      <label>Категория</label>
      <select onChange={handleChange} value={category} name="category">
        {options.map(o => (
          <option key={o.id} value={o.name}>
            {o.name}
          </option>
        ))}
      </select>
      <label>Ссылку изображения</label>
      <input
        onChange={handleChange}
        value={image}
        type="text"
        name="image"
        placeholder="img link"
        required
      />
      <label>Цена</label>
      <input
        onChange={handleChange}
        value={price}
        type="number"
        name="price"
        placeholder="Price"
        required
      />
      <button type="submit">Добавить</button>
    </form>
  </>
);

export default AddItemView;
