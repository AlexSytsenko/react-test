import React from 'react';
import PropTypes from 'prop-types';
import Painting from './Painting';

const PaintingList = ({paintings}) => (
    <ul>
        {paintings.map(({id, url, author, price,quantity}) => (
            <li key={id}>
                <Painting
                url={url}
                title={author.tag}
                price={price}
                profileUrl={author.url}
                tag={author.tag}
                quantity={quantity}
                />
            </li>
        ))}
    </ul>
)


PaintingList.propTypes = {
    paintings: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        // url: PropTypes.string,
        // title: PropTypes.string.isRequired,
        // price: PropTypes.number.isRequired,
        // profileUrl: PropTypes.string.isRequired,
        // tag: PropTypes.string.isRequired,
        // quantity: PropTypes.number.isRequired,
    }
    )).isRequired,
}

export default PaintingList; 