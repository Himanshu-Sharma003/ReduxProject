import React ,{Component} from 'react'


class SearchBar extends Component {

    constructor(props){
        super(props)
        this.state = {term : ''}
    }
    
    onChange (term) {
        console.log('onchanged is called')
        this.setState({
            term: term
        })
        this.props.onSearch(term)
    }
    render () {
        return (
            <div> 
                Search : 
                <input value = {this.state.term}
                    onChange={({target}) =>this.onChange(target.value)}
                /> 
            </div>
            )
    }

}


export default SearchBar