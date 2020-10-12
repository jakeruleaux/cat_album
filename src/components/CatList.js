import React from 'react';
import { connect } from 'react-redux';
import { fetchCats, sendCats } from '../actions';
import { Button, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import CatDetail from './CatDetail';

const ButtonBox = styled.div `
    margin-left: 5px;
    margin-right: 5px;
`

class Catlist extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showCat: false,
            catArr: [],
            currentIndex: 0
        };
    } 

    componentDidMount() {
        this.props.fetchCats();
        setTimeout(() => this.setState({showCat: true}), 7000);
    }

    componentDidUpdate(prevState, prevProps){
        if (prevState.cats.length !== this.state.catArr.length) {
            this.setState({ catArr: this.state.catArr.concat(prevState.cats)}) 
        }
    }

    handleNextClick = () =>  {
        this.setState({currentIndex: this.state.currentIndex + 1})
    }

    handlePrevClick = () =>  {
        this.setState({currentIndex: this.state.currentIndex - 1})
    }

    renderCat() {
        let props = {
            catArr: this.state.catArr,
            fetchCats: this.props.fetchCats,
            sendeCats: this.props.sendCats
        }
        return this.props.cats.map((cat, index) => {
            return (
                <div key={cat.id}>
                    {this.state.showCat && this.state.currentIndex === index ? <CatDetail {...props} catUrl = {cat.url} index = {this.state.currentIndex} /> : ''}
                </div>
            )
        })
    };

    render(){
        return (
            <div>
                {this.renderCat()}
                <ButtonBox>
                    <Button 
                    icon 
                    labelPosition='left'
                    onClick={this.handlePrevClick}
                    >
                        Prev
                        <Icon name='left arrow' />
                    </Button> 
                    <Button icon  >
                        <Icon name='caret square up outline' />
                    </Button>   
                    <Button 
                    icon 
                    labelPosition='right'
                    onClick={this.handleNextClick}
                    >
                        Next
                        <Icon name='right arrow' />
                    </Button>
                </ButtonBox> 
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return { cats: state.cats };
}

export default connect(mapStateToProps, { fetchCats, sendCats })(Catlist);