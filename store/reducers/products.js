import PRODUCT from '../../data/dummy-data'

const intialState = {
    availableProducts: PRODUCT,
    userProducts: PRODUCT.filter(prod => prod.ownerID === 'u1')
};

export default (state = intialState, action) => {
    return state;
};