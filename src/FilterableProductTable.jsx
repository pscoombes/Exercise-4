import React from "react";
import SearchBarContainer from './SearchBarContainer';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
    constructor(props) {
		super(props);

        console.log('FilterableProductTable constructor');
    }
    render () {
        console.log('FilterableProductTable render');
        return (
            <div> 
                <SearchBarContainer />
                <ProductTable />
            </div>
        )
    }
}

export default FilterableProductTable;
