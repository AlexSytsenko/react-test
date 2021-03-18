import React from 'react';
import Painting from './components/Painting';
import paintings from './paintings.json';

// const painting = {
//   "id": "id-1",
//   "url": "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
//   "title": "Feathers. Art abstract",
//   "price": 500,
//   "author": {
//     "tag": "ractapopulous",
//     "url": "https://pixabay.com/users/ractapopulous-24766/"
//   },
//   "quantity": 10
// };


const App = () => {

  return (
    <div>
      <h1>Главный компонент</h1>
      <Painting
        // url={paintings[0].url}
        title={paintings[0].author.tag}
        price={paintings[0].price}
        profileUrl={paintings[0].author.url}
        tag={paintings[0].author.tag}
        quantity={paintings[0].quantity} />
    </div>
  );
};

export default App;