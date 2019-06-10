import React from "react";
import SearchBar from './SearchBar';
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
                <SearchBar />
                <ProductTable />
            </div>
        )
    }
}

export default FilterableProductTable;
