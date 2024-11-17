import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, updateItem } from './../../Redux/itemSlice';

const Form = ({ editingItem, setEditingItem }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(editingItem || { name: '', email: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingItem) {
      dispatch(updateItem(formData));
      setEditingItem(null);
    } else {
      dispatch(addItem(formData));
    }
    setFormData({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <button type="submit">{editingItem ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default Form;
