import React from 'react';
import { connect } from 'react-redux';
import ImageUploader from 'react-images-upload';
import { fetchCats, sendCats } from '../actions';
// import { Button, Icon } from 'semantic-ui-react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import CatDetail from './CatDetail';

library.add( faArrowCircleRight, faArrowCircleLeft );

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
const PlayButtons = styled.div `
    display: flex;
    justify-content: center;
`

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
            pictures: [],
            arrLength: 0
        };
    } 

    componentDidMount() {
        this.props.fetchCats();
        setTimeout(() => this.setState({showCat: true}), 7000);
    }

    componentDidUpdate(prevState, prevProps){
        if (prevState.cats.length !== this.state.catArr.length) {
            this.setState({ 
                catArr: this.state.catArr.concat(prevState.cats),
                arrLength: prevState.cats.length
            }) 
        }
    }

    handleNextClick = () =>  {
        if (this.state.currentIndex === this.state.arrLength -1){
            this.setState({currentIndex: 0})
        } else {
            this.setState({currentIndex: this.state.currentIndex + 1})
        }
    }

    handlePrevClick = () =>  {
        if (this.state.currentIndex === 0){
            this.setState({currentIndex: this.state.arrLength -1})
        } else {
            this.setState({currentIndex: this.state.currentIndex - 1})
        }
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
                        <PlayButtons>
                            <Button 
                            icon 
                            labelPosition='left'
                            onClick={this.handlePrevClick}
                            >
                                Prev
                                <FontAwesomeIcon 
                                    icon="arrow-circle-left"
                                    style={{marginLeft: '8px', fontSize: '16px'}}
                                />
                            </Button> 
                            <Button 
                            icon 
                            labelPosition='right'
                            onClick={this.handleNextClick}
                            >
                                Next
                                <FontAwesomeIcon 
                                    icon="arrow-circle-right"
                                    style={{marginLeft: '8px', fontSize: '16px'}}
                                />
                            </Button>
                        </PlayButtons>
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