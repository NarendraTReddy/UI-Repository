import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Form from './Form';
import Table from './Table';
import ErrorBoundary from './../ErrorBoundary';
import withLoader from './../HOC/HigherOrderComponent';
import Modal from './../Modal';
import { useTranslation } from 'react-i18next';
import apiService from "./../../dataService/apiService";
import { setItems, setLoading } from './../../Redux/itemSlice';


const NewApp = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const { loading } = useSelector((state) => state.items);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(async () => { 
      dispatch(setLoading(true));
      try {
        const response = await apiService.get("https://jsonplaceholder.typicode.com/users");
        dispatch(setItems(response.data));
      } catch (error) {
        console.error(error);
      } finally {
        dispatch(setLoading(false));
      }
  },[]);

  const changeLanguage = (lang) => i18n.changeLanguage(lang);

  const TableComp = () => <Table setEditingItem={setEditingItem}  />

  return (
    <ErrorBoundary>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Español</button>
      <h1>{t('add')}</h1>
      <Form />
      <button onClick={() => setShowModal(true)}>{t('add')}</button>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Form editingItem={editingItem} setEditingItem={setEditingItem} />
      </Modal>
      {withLoader(TableComp)({ isLoading: loading })}
    </ErrorBoundary>
  );
};

export default NewApp;
