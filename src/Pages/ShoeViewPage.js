import React, { Component } from 'react'
import { connect } from 'react-redux'
class ShoeViewPage extends Component {
    render() {
        
        return (
            <div>
                
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        showProduct: state.productStore.showProduct
    }
}
export default connect(mapStateToProps)(ShoeViewPage)

