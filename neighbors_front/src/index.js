import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthService from "./service/auth_service";
import ImageUploader from "./service/image_uploader";
import UserBackEndAPI from "./service/user_back_end_api";
import BookBackEndAPI from "./service/book_back_end_api";

const authService = new AuthService();
const imageUploader = new ImageUploader();
const userBackEndAPI = new UserBackEndAPI();
const bookBackEndAPI = new BookBackEndAPI();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} imageUploader={imageUploader} 
    userBackEndAPI={userBackEndAPI} bookBackEndAPI={bookBackEndAPI}/>
  </React.StrictMode>,
  document.getElementById('root')
);
