import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );



ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);


const painting = {
    "id": "id-1",
    "url": "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
    "title": "Feathers. Art abstract",
    "price": 500,
    "author": {
        "tag": "ractapopulous",
        "url": "https://pixabay.com/users/ractapopulous-24766/"
    },
    "quantity": 10
};



