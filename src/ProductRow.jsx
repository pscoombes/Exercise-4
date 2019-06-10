import React from 'react';

class ProductRow extends React.Component {
    constructor(props) {
        super(props);

        console.log('ProductRow             constructor');
    }

    render() {
        console.log('ProductRow             render');
        return (
            <tr>
                <td>Nexus 7</td>
                <td>£199.99</td>
            </tr>
        )
    }
}

    export default ProductRow;