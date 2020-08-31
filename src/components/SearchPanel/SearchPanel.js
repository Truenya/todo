import React from "react";
import './SearchPanel.css'

export default class SearchPanel extends React.Component {
    state={
        searchText:''
    };
    onSearchChange = (e) => {
        this.setState({
            searchText: e.target.value
        });
        const cb = this.props.onSearchChange || (() => {});
        cb( e.target.value );
    };


    render() {
        const searchText = 'Type here to search';
        return (<input className='SearchInput'
                       placeholder={searchText}
                       onChange={this.onSearchChange}/>);
    }
};