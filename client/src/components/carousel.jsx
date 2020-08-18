import React from 'react';
import Cards from './Card.jsx';
import styled from 'styled-components';


class Carousel extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      currentSet: 0
    }

    this.handleForward = this.handleForward.bind(this)
    this.handleBackward = this.handleBackward.bind(this)

  }

  // Below is a function for forward button
  handleForward () {
    if (this.state.currentSet < 2) {
      let newcurrentSet = this.state.currentSet + 1;
      this.setState({
        currentSet: newcurrentSet
      }, () => {
        this.CardContainer.style.transitionDuration = "0.5s";
        this.CardContainer.style.transform = `translate(-${1140 * this.state.currentSet}px)`
      })
    } else if (this.state.currentSet === 2) {
      this.CardContainer.style.transitionDuration = "0.5s";
      this.CardContainer.style.transform = `translate(0px)`;
      let newcurrentSet = 0;
      this.setState({
        currentSet: newcurrentSet
      })
    }
  }

  // Below is a function for backward button
  handleBackward () {
    if (this.state.currentSet > 0) {
      let newcurrentSet = this.state.currentSet - 1;
      this.setState({
        currentSet: newcurrentSet
      }, () => {
        this.CardContainer.style.transitionDuration = "0.5s";
        this.CardContainer.style.transform = `translate(-${1140 * this.state.currentSet}px)`
      })
    } else if (this.state.currentSet === 0) {
      this.CardContainer.style.transitionDuration = "0.5s";
      this.CardContainer.style.transform = `translate(-2280px)`;
      let newcurrentSet = 2;
      this.setState({
        currentSet: newcurrentSet
      })
    }
  }

  render() {
    let page = this.state.currentSet + 1;
    return(
      <div>
        <ViewPort>
          <TitleHolder>
            <Title>
              <Header>More places to stay</Header>
            </Title>
            <ArrowHolder>
              <Page>{page} / 3</Page>
              <ButtonHolder>
                <Button onClick={this.handleBackward}>
                  <span>
                    <Icon viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" >
                      <path d="m 13.7 16.29 a 1 1 0 1 1 -1.42 1.41 l -8 -8 a 1 1 0 0 1 0 -1.41 l 8 -8 a 1 1 0 1 1 1.42 1.41 l -7.29 7.29 Z" fillRule="evenodd">
                        </path>
                    </Icon>
                  </span>
                </Button>
              </ButtonHolder>
              <ButtonHolder>
                <Button onClick={this.handleForward}>
                <span>
                    <Icon viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" >
                      <path d="m 4.29 1.71 a 1 1 0 1 1 1.42 -1.41 l 8 8 a 1 1 0 0 1 0 1.41 l -8 8 a 1 1 0 1 1 -1.42 -1.41 l 7.29 -7.29 Z" fillRule="evenodd">
                        </path>
                    </Icon>
                  </span>
                </Button>
              </ButtonHolder>
            </ArrowHolder>
          </TitleHolder>
          <CardContainer ref={refId => this.CardContainer = refId}>
            <Cards room={this.props.rooms? this.props.rooms[0] : null} lists={this.props.lists} onClickLike={this.props.onClickLike} onClickUnlike={this.props.onClickUnlike} onClickUnlikeRM={this.props.onClickUnlikeRM}/>
            <Cards room={this.props.rooms? this.props.rooms[1] : null} lists={this.props.lists} onClickLike={this.props.onClickLike} onClickUnlike={this.props.onClickUnlike} onClickUnlikeRM={this.props.onClickUnlikeRM}/>
            <Cards room={this.props.rooms? this.props.rooms[2] : null} lists={this.props.lists} onClickLike={this.props.onClickLike} onClickUnlike={this.props.onClickUnlike} onClickUnlikeRM={this.props.onClickUnlikeRM}/>
            <Cards room={this.props.rooms? this.props.rooms[3] : null} lists={this.props.lists} onClickLike={this.props.onClickLike} onClickUnlike={this.props.onClickUnlike} onClickUnlikeRM={this.props.onClickUnlikeRM}/>
            <Cards room={this.props.rooms? this.props.rooms[4] : null} lists={this.props.lists} onClickLike={this.props.onClickLike} onClickUnlike={this.props.onClickUnlike} onClickUnlikeRM={this.props.onClickUnlikeRM}/>
            <Cards room={this.props.rooms? this.props.rooms[5] : null} lists={this.props.lists} onClickLike={this.props.onClickLike} onClickUnlike={this.props.onClickUnlike} onClickUnlikeRM={this.props.onClickUnlikeRM}/>
            <Cards room={this.props.rooms? this.props.rooms[6] : null} lists={this.props.lists} onClickLike={this.props.onClickLike} onClickUnlike={this.props.onClickUnlike} onClickUnlikeRM={this.props.onClickUnlikeRM}/>
            <Cards room={this.props.rooms? this.props.rooms[7] : null} lists={this.props.lists} onClickLike={this.props.onClickLike} onClickUnlike={this.props.onClickUnlike} onClickUnlikeRM={this.props.onClickUnlikeRM}/>
            <Cards room={this.props.rooms? this.props.rooms[8] : null} lists={this.props.lists} onClickLike={this.props.onClickLike} onClickUnlike={this.props.onClickUnlike} onClickUnlikeRM={this.props.onClickUnlikeRM}/>
            <Cards room={this.props.rooms? this.props.rooms[9] : null} lists={this.props.lists} onClickLike={this.props.onClickLike} onClickUnlike={this.props.onClickUnlike} onClickUnlikeRM={this.props.onClickUnlikeRM}/>
            <Cards room={this.props.rooms? this.props.rooms[10] : null} lists={this.props.lists} onClickLike={this.props.onClickLike} onClickUnlike={this.props.onClickUnlike} onClickUnlikeRM={this.props.onClickUnlikeRM}/>
            <Cards room={this.props.rooms? this.props.rooms[11] : null} lists={this.props.lists} onClickLike={this.props.onClickLike} onClickUnlike={this.props.onClickUnlike} onClickUnlikeRM={this.props.onClickUnlikeRM}/>
          </CardContainer>
        </ViewPort>
      </div>
    )
  }

}

// const styles = {
//   viewPort: {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: "1400px",
//     height: "350px",
//     backgroundColor: "white",
//     overflow: "hidden",
//   },
//   cardContainer: {
//     display: "flex",
//     flexDirection: "row",
//     width: "fit-content"
//   }
// }

const ViewPort = styled.div`
  overflow-x: hidden !important;
  margin-right: -24px !important;
  position: relative !important;
  width: 1140px;
  height: 348.66px;
  backgroundColor: white;
  color: #222222 !important;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
    font-weight: 400 !important;
    font-size: 16px !important;
    line-height: 20px !important;
`;

const CardContainer = styled.div`
  flexDirection: row;
  width: fit-content;
  font-weight: 400 !important;
  font-size: 16px !important;
  display: flex !important;
  height: 100% !important;
  overflow-x: auto !important;
  overflow-y: hidden !important;
  padding-left: 0px !important;
  margin-bottom: 0px !important;
  margin-top: 0px !important;
  min-width: 100% !important;
  scroll-snap-type: x mandatory !important;
  list-style: none !important;
`;

const TitleHolder = styled.div`
  -webkit-box-pack: justify !important;
  -webkit-box-align: center !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  padding-bottom: 16px !important;
`;

const Title = styled.div`
  color: rgb(34, 34, 34) !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-weight: 600 !important;
  font-size: 22px !important;
  line-height: 26px !important;
`;

const Header = styled.div`
  display: block;
  font-size: 1em !important;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const ArrowHolder = styled.div`
  -webkit-box-align: center !important;
  align-items: center !important;
  display: flex !important;
  white-space: nowrap !important;
`;

const Page = styled.div`
  color: rgb(34, 34, 34) !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-weight: 400 !important;
  font-size: 14px !important;
  line-height: 18px !important;
  margin-right: 16px !important;
`;

const ButtonHolder = styled.div`
  margin-right: 6px !important;
`;

const Button = styled.div`
  -webkit-box-pack: center !important;
  -webkit-box-align: center !important;
  appearance: none !important;
  display: inline-flex !important;
  color: rgb(34, 34, 34) !important;
  background-color: rgba(255, 255, 255, 0.9) !important;
  cursor: pointer !important;
  touch-action: manipulation !important;
  align-items: center !important;
  justify-content: center !important;
  background-clip: padding-box !important;
  box-shadow: transparent 0px 0px 0px 1px, transparent 0px 0px 0px 4px, rgba(0, 0, 0, 0.18) 0px 2px 4px !important;
  width: 32px !important;
  height: 32px !important;
  border-radius: 50% !important;
  border-image: initial !important;
  outline: 0px !important;
  margin: 0px !important;
  padding: 0px !important;
  border-style: solid !important;
  border-width: 1px !important;
  border-color: rgba(0, 0, 0, 0.08) !important;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.25s ease 0s, -webkit-transform 0.25s ease 0s, transform 0.25s ease 0s !important;
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  text-align: center;
`;

const Icon = styled.svg`
  height: 10px;
  width: 10px;
  display: block;
  fill: currentcolor;
`


export default Carousel;