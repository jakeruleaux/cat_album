import React from 'react';
import { connect } from 'react-redux';
import ImageUploader from 'react-images-upload';
import { fetchCats, sendCats } from '../actions';
// import { Button, Icon } from 'semantic-ui-react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowCircleRight, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
import CatDetail from './CatDetail';

library.add( faArrowCircleRight, faArrowCircleLeft )

const MainContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
`

const ButtonBox = styled.div `
    margin-left: 5px;
    margin-right: 5px;
`

const hideStyles = {
    hieght: '20px',
    width: '30px',
    color: 'inherit'
}

const Button = styled.button `
    height: 30px;
    width: 70px; 
    padding: 2px;
    margin: 4px;
`

class Catlist extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showCat: false,
            catArr: this.props.cats,
            currentIndex: 0,
            pictures: []
        };
    } 

    componentDidMount() {
        this.props.fetchCats();
        setTimeout(() => this.setState({showCat: true}), 7000);
    }

    componentDidUpdate(prevState, prevProps){
        if (prevState.cats.length !== this.state.catArr.length) {
            this.setState({ 
                catArr: this.state.catArr.concat(prevState.cats)
            }) 
        }
    }

    handleNextClick = () =>  {
        this.setState({currentIndex: this.state.currentIndex + 1})
    }

    handlePrevClick = () =>  {
        this.setState({currentIndex: this.state.currentIndex - 1})
    }

    handleAddCats = (picture) => {
        this.setState({
            pictures: this.state.catArr.concat(picture),
        });
    }

    renderCat() {
        return this.props.cats.map((cat, index) => {
            return (
                <div key={cat.id}>
                    {this.state.showCat && this.state.currentIndex === index ? <CatDetail catUrl = {cat.url} index = {this.state.currentIndex} /> : ''}
                </div>
            )
        })
    };

    render(){
        return (
            <MainContainer>
                {this.renderCat()}
                {this.state.showCat ? 
                    <ButtonBox>
                        <Button 
                        icon 
                        labelPosition='left'
                        onClick={this.handlePrevClick}
                        >
                            Prev
                            {/* <Icon name='left arrow' /> */}
                        </Button> 
                        <Button 
                        icon 
                        labelPosition='right'
                        onClick={this.handleNextClick}
                        >
                            Next
                            {/* <Icon name='right arrow' /> */}
                        </Button>
                        <ImageUploader
                            withIcon={true}
                            buttonText='add Cat'
                            onClick={this.handleAddCats}
                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                            maxFileSize={5242880}
                        />
                    </ButtonBox> 
                :
                ''
                }
            </MainContainer>
        )
    }
};

const mapStateToProps = (state) => {
    return { cats: state.cats };
}

export default connect(mapStateToProps, { fetchCats })(Catlist);