import React from "react";
import SearchBar from './SearchBar';

class SearchBarcontainer extends React.Component {
    constructor(props) {
		super(props);

        console.log('SearchBarcontainer     constructor');
    }
    render () {
        console.log('SearchBarcontainer     render');
        return (
            <div> 
                <SearchBar />
                <p>Bottom of Search Bar</p>
            </div>
        )
    }
}

export default SearchBarcontainer;