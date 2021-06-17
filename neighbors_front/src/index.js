import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthService from "./service/auth_service";
import ImageUploader from "./service/image_uploader";
import BackEndAPI from "./service/back_end_api";

const authService = new AuthService();
const imageUploader = new ImageUploader();
const backEndAPI = new BackEndAPI();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} imageUploader={imageUploader} backEndAPI={backEndAPI}/>
  </React.StrictMode>,
  document.getElementById('root')
);
