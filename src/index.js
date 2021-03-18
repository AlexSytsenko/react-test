import React from 'react';
import ReactDOM from 'react-dom';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


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

const template = (
    <div>
        <img src="https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg" alt="Feathers. Art abstract" width="480"/>
        <h2>Feathers. Art abstract</h2>
        <p>Цена: 500 кредитов</p>
        <button type="button">Добавить в корзину</button>
    </div>
);

console.log(template);
