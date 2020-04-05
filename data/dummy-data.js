import Product from '../models/product';

const PRODUCT = [
    new Product(
        'p1',
        'u1',
        'Red Shirt',
        'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_960_720.jpg',
        "A red t-shirt, perfect for days with non-red weather",
        29.99
    ),
    new Product(
        'p2',
        'u2',
        'Blue Carpet',
        'https://cdn.pixabay.com/photo/2017/08/30/15/56/texture-2697606_960_720.jpg',
        "Fits to your red t-shirt, not to wear, to stand",
        39.99
    ),
    new Product(
        'p3',
        'u1',
        'Pen & Paper',
        'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_960_720.jpg',
        "To write or draw",
        5.49
    ),

];
export default PRODUCT;