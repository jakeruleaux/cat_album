import React from 'react';
import { connect } from 'react-redux';
import { fetchCats } from '../actions';
import CatDetail from './CatDetail';

class Catlist extends React.Component {
    constructor(props){
        super(props)
        this.state = {showCat: false};
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
                    {this.state.showCat ? <CatDetail catUrl={cat.url} /> : ''}
                    </div>
                </div>
            )
        })
    };

    render(){
        console.log(this.state, 'state in render', this.props.cats)
        return (
            <div>
                {this.renderCat()}
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps) => {
    return { cats: state.cats };
}

export default connect(mapStateToProps,{ fetchCats })(Catlist);