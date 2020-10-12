import React , { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from '../actions';
import CatDetail from './CatDetail';

class Catlist extends React.Component {
    constructor(props) {
        super(props);
        // this.state = [];
      }

    componentDidMount() {
        this.props.fetchCats();
        console.log('here mount', this.props.cats)
    }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log(this.props.cats, this.props, this.state, 'update', prevProps, prevState,)
    // }
    renderCat() {
        return this.props.cats.map(cat => {
            return (
                <div key={cat.id}>
                    <div>
                        <h2>{cat.url}</h2>
                        <p>{cat.breed}</p>
                    </div>
                </div>
            )
        })
    };

    render(){
        console.log(this.state, 'state in render', this.props.cats)
        return (
            <div>
                <CatDetail />
                {this.renderCat()}
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps) => {
    return { cats: state.cats };
}

export default connect(mapStateToProps,{ fetchCats })(Catlist);