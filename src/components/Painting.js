import React from 'react';
import defaultImage from './default.jpg';
import PropTypes from 'prop-types';

const Painting = ({ url, title, price, profileUrl, tag, quantity }) => 
(
        <div>
            <img src={url} alt={title} width="480" />
            <h2>{title}</h2>
            <p>Цена: {price} кредитов</p>
            <p>Доступность: {quantity < 10 ? "Заканчивается" : "Есть в наличии" }</p>
            <p>Автор: <a href={profileUrl}>{tag}</a></p>
            <button type="button">Добавить в корзину</button>
        </div>
);

Painting.defaultProps = {
    url: defaultImage,
}

Painting.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    profileUrl: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
}



export default Painting;