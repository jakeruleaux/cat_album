import React , { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from '../actions';
import CatDetail from './CatDetail';

class Catlist extends React.Component {

    componentDidMount() {
        this.props.fetchCats();
        console.log('here')
    }
// const Catlist = () => {
//     const [cat, setCat] = useState();

    // useEffect(() => {
    //     fetchCats();
    //     console.log('here')
    // }); 

    // fetchCats();

    render(){
        return (
            <div>Catlist
                <CatDetail />
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return { cat: state.cat };
}

export default connect(mapStateToProps,{ fetchCats })(Catlist);