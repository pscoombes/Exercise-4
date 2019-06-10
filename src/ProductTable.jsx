import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
    constructor(props) {
        super(props);

        console.log('ProductTable           constructor');
    }

    render() {
        console.log('ProductTable           render');
        return (<table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <ProductCategoryRow />
                <ProductRow />
            </tbody>
        </table>)
    }
}

export default ProductTable;