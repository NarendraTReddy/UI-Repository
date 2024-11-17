import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      add: "Add",
      update: "Update",
      delete: "Delete",
      name: "Name",
      email: "Email",
      actions: "Actions",
      search: "Search...",
      error: "An error has occurred!",
    },
  },
  es: {
    translation: {
      add: "Agregar",
      update: "Actualizar",
      delete: "Eliminar",
      name: "Nombre",
      email: "Correo",
      actions: "Acciones",
      search: "Buscar...",
      error: "¡Ocurrió un error!",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
