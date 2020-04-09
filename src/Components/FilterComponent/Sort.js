import React, { Component } from 'react'
import { handleSortPrice} from '../../Redux/actions'
import { connect } from 'react-redux';

class Sort extends Component {

    handleSort = (e) => {
        this.props.setSortPrice(e.target.value)
    }

    render() {
        
        return (
            <div>
                <span className="sort">Sort By</span>
                <select onChange={this.handleSort}> 
                    <option value="Highest">Highest to Lowest</option>
                    <option value="Lowest">Lowest to Highest</option>
                </select>
                
            </div>
        )
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        setSortPrice: (priceValue) => dispatch(handleSortPrice(priceValue))
    }
}


export default connect(null,mapDispatchToProps)(Sort);