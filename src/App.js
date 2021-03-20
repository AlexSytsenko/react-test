import React from 'react';
import Logo from './components/Logo';
import PaintingList from './components/PaintingList';
import Panel from './components/Panel';
import paintings from './paintings.json';

const App = () => {

  return (
    <div>
      <Panel title="Свежие новости">
        <p>lorem20asdffffffffffsdfasdfasdf dfsdafasdf asdf asdfadfadfadf dfdf    dfsf</p>
        <a href=""></a>
      </Panel>
      <Panel>
        <p>фівлдаофждвілаофд ловафдао вдфілао длфова</p></Panel>
      <Logo text="Главный компонент" />
      <PaintingList paintings={paintings123}/>
    </div>
  );
};

export default App;