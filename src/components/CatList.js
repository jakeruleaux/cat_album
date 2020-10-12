import React from 'react';
import { connect } from 'react-redux';
import { fetchCats, sendCats } from '../actions';
import CatDetail from './CatDetail';

class Catlist extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showCat: false,
            catArr: []
        };
    } 

    componentDidMount() {
        this.props.fetchCats();
        setTimeout(() => this.setState({showCat: true}), 7000);
    }

    renderCat() {
        return this.props.cats.map(cat => {
            return (
                <div key={cat.id}>
                    <div>
                    {this.state.showCat ? <CatDetail catUrl={cat.url} fetchCats={this.props.fetchCats} sendeCats={this.props.sendCats} /> : ''}
                    </div>
                </div>
            )
        })
    };

    render(){
        return (
            <div>
                {this.renderCat()}
            </div>
        )
    }
};

// const mapDispatchToProps = dispatch => ({
//     fetchCats: () => dispatch(fetchCats())
//   })

const mapStateToProps = (state) => {
    return { cats: state.cats };
}

export default connect(mapStateToProps, { fetchCats, sendCats })(Catlist);