import React, { Component } from 'react';

class SearchBar extends Component {
    
    /**
        @method - constructor()
        @params - {props}
        
        Whenever a new Instance of the `SearchBar` class created, the `constructor()` method will be called.
        `super()` is used to call the parent(`React.Component`) constructor by passing `props` args.
    
    */
    
    constructor(props) {
        super(props);
        
        this.state = { term: '' }; 
    }
    
    /**
        @method - render()
        @params - {}
        
        Whenever user enters something inside an input, we first update the state which causes the entire component to re-render. In re-render, the `render()` method will be called.
        We made the component input element here a `controlled component` by telling it to receive its value from state.
    
    */
    
    render() {
        return (
            <div className="search-bar">
                <input 
                    value={this.state.term}
                    onChange={ event => this.onInputChange(event.target.value)} />
            </div>
        );  
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
};

export default SearchBar;