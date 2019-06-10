import React from "react";

class ProductCategoryRow extends React.Component {
    constructor(props) {
        super(props);

        console.log('ProductCategoryRow     constructor');
    }

    render() {
        console.log('ProductCategoryRow     render');
        return (
            <tr>
                <th colSpan="2">Electronics</th>
            </tr>
        )
    }
}

    export default ProductCategoryRow;