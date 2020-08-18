import React, { useState } from 'react';
import ListModal from './listmodal.jsx';
import styled from 'styled-components';

function LikeButton(props) {
  return(
    <ButtonCSS onClick={props.onClick}>
      <LikeIcon aria-hidden="true" role="presentation" focusable="false" viewBox="0 0 32 32">
        <path d="m 16 28 c 7 -4.733 14 -10 14 -17 c 0 -1.792 -0.683 -3.583 -2.05 -4.95 c -1.367 -1.366 -3.158 -2.05 -4.95 -2.05 c -1.791 0 -3.583 0.684 -4.949 2.05 l -2.051 2.051 l -2.05 -2.051 c -1.367 -1.366 -3.158 -2.05 -4.95 -2.05 c -1.791 0 -3.583 0.684 -4.949 2.05 c -1.367 1.367 -2.051 3.158 -2.051 4.95 c 0 7 7 12.267 14 17 Z">
        </path>
      </LikeIcon>
    </ButtonCSS>
  )
}

function UnlikeButton(props) {
  return (
    <ButtonCSS onClick={props.onClick}>
      <UnlikeIcon aria-hidden="true" role="presentation" focusable="false" viewBox="0 0 32 32">
        <path d="m 16 28 c 7 -4.733 14 -10 14 -17 c 0 -1.792 -0.683 -3.583 -2.05 -4.95 c -1.367 -1.366 -3.158 -2.05 -4.95 -2.05 c -1.791 0 -3.583 0.684 -4.949 2.05 l -2.051 2.051 l -2.05 -2.051 c -1.367 -1.366 -3.158 -2.05 -4.95 -2.05 c -1.791 0 -3.583 0.684 -4.949 2.05 c -1.367 1.367 -2.051 3.158 -2.051 4.95 c 0 7 7 12.267 14 17 Z">
        </path>
      </UnlikeIcon>
    </ButtonCSS>
  )
}

function Review(props) {
  return (
    <ReviewHolder>
      <ReviewStar>
        <StarIcon viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false">
          <path d="M 972 380 c 9 28 2 50 -20 67 L 725 619 l 87 280 c 11 39 -18 75 -54 75 c -12 0 -23 -4 -33 -12 L 499 790 L 273 962 a 58 58 0 0 1 -78 -12 a 50 50 0 0 1 -8 -51 l 86 -278 L 46 447 c -21 -17 -28 -39 -19 -67 c 8 -24 29 -40 52 -40 h 280 l 87 -279 c 7 -23 28 -39 52 -39 c 25 0 47 17 54 41 l 87 277 h 280 c 24 0 45 16 53 40 Z">
          </path>
        </StarIcon>
      </ReviewStar>
      <span>2 reviews</span>
    </ReviewHolder>
  )
}

function NoReview() {
  return(
    <div>
      <NoReviewHolder>No reviews yet</NoReviewHolder>
    </div>
  )
}

class Cards extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      list: ''
    };
    this.handleLikeButton = this.handleLikeButton.bind(this);
    this.handleUnlikeButton = this.handleUnlikeButton.bind(this)
  }

  handleLikeButton () {
    var roomName = this.props.room? this.props.room.roomName : ''
    var listName = this.props.room? this.props.room.savedList : ''
    this.props.onClickLike(roomName, listName);
  }

  handleUnlikeButton () {
    var roomName = this.props.room? this.props.room.roomName : ''
    var listName = this.props.room? this.props.room.savedList : ''
    this.props.onClickUnlike(roomName, listName)
  }

  render () {
    let list = this.props.room? this.props.room.savedList : '';
    let button;
    if (list === '') {
      button = <LikeButton onClick={this.handleLikeButton}/>
    } else {
      button = <UnlikeButton onClick={this.handleUnlikeButton}/>
    }
    let numberOfReview = 0;
    let review
    if (numberOfReview !== 0) {
      review = <Review />
    } else {
      review = <NoReview />
    }
    return (
      <div>
        <Card>
          <MediaHolder>
            <MediaObject src={this.props.room? this.props.room.imageUrl : null}/>
            <ButtonHolder>{button}</ButtonHolder>
          </MediaHolder>
          <ReviewHolder>
            {review}
          </ReviewHolder>
          <InfoHolder>
            <span>{this.props.room? this.props.room.type : null} · </span>
            <span>{this.props.room? this.props.room.numberOfBeds : null} beds</span>
          </InfoHolder>
          <RoomNameHolder>{this.props.room? this.props.room.roomName : null}</RoomNameHolder>
          <PriceHolder>
            <Night>
              <Price>${this.props.room? this.props.room.roomPrice : null}</Price>/ night"
              </Night>
          </PriceHolder>
        </Card>
    </div>
    )
  }

}

const styles = {

  openModal: {
    cursor: "pointer"
  },

  words: {
    fondSize: "0.5em"
  }
}

const Card = styled.div`
  width: 265px,
  height: 392.656px,
  scroll-snap-align: start !important;
  scroll-snap-stop: always !important;
  border-style: solid !important;
  border-color: transparent !important;
  border-width: 0px 10px;
  max-width: 25%;
  flex: 0 0 25%;
  margin-bottom: 16px;
  display: block;
`;

const MediaHolder = styled.div`
  position: relative !important;;
  display: block;
  width: 265px;
  height: 176.656;
  left: 0px;
  boder: 1px solid grey;
  border-Radius: 8px;
`;

const MediaObject = styled.img`
  position: static !important;
  display: block;
  width: 100%;
  height: 100%;
  left: 0px;
  boder: 1px solid grey;
  border-Radius: 8px;
`

const ButtonHolder = styled.div`
  padding: 8px;
  position: absolute !important;
  bottom: 75%;
  right: 0.05%;
`

const ButtonCSS = styled.div`
    -webkit-box-pack: center !important;
    -webkit-box-align: center !important;
    cursor: pointer !important;
    position: relative !important;
    text-align: center !important;
    touch-action: manipulation !important;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
    font-size: 16px !important;
    line-height: 20px !important;
    font-weight: 600 !important;
    padding-top: 2px !important;
    padding-bottom: 0px !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    color: rgb(34, 34, 34) !important;
    width: 32px !important;
    height: 32px !important;
    text-decoration: none !important;
    background: transparent !important;
    border-radius: 50% !important;
    outline: none !important;
    transition: -ms-transform 0.25s ease 0s, -webkit-transform 0.25s ease 0s, transform 0.25s ease 0s !important;
    border-width: initial !important;
    border-style: none !important;
    border-color: initial !important;
    border-image: initial !important;
    margin: 0px !important;
`;

const LikeIcon = styled.svg`
  display: block;
  fill: rgba(0, 0, 0, 0.5);
  height: 24px;
  width: 24px;
  stroke: rgb(255, 255, 255);
  stroke-width: 2;
  overflow: visible
`;

const UnlikeIcon = styled.svg`
  display: block;
  fill: rgb(255, 56, 92);
  height: 24px;
  width: 24px;
  stroke: rgb(255, 255, 255);
  stroke-width: 2;
  overflow: visible
`;

const ReviewHolder = styled.div`
  padding-top: 8px !important;
  margin-bottom: 6px;
  -webkit-box-align: center !important;
  font-size: 14px !important;
  line-height: 18px !important;
  align-items: center !important;
  display: flex !important;
  width: 265px;
`;

const ReviewStar = styled.span`
  -webkit-box-align: center !important;
  align-items: center !important;
  display: flex !important;
  margin-right: 4px !important;
  color: rgb(255, 56, 92) !important;
`;

const StarIcon = styled.svg`
  height: 14px;
  width: 14px;
  fill: currentcolor
`;

const NoReviewHolder = styled.div`
  color: rgb(113, 113, 113) !important
`

const InfoHolder = styled.div`
  margin-bottom: 2px;
  color: rgb(34, 34, 34) !important;
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 20px !important;
  max-height: 20px !important;
  text-overflow: ellipsis !important;
  display: -webkit-box !important;
  -webkit-line-clamp: 1 !important;
  -webkit-box-orient: vertical !important;
  overflow: hidden !important;
  width: 265px;
`;

const RoomNameHolder = styled.div`
  max-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  font-weight: 400 !important;
  color: rgb(34, 34, 34) !important;
  font-size: 16px !important;
  line-height: 20px !important;
  width: 265px
`;

const PriceHolder = styled.div`
  margin-top: 4px;
  position: relative !important；
  display: block;
  width: 265px
`;

const Price = styled.span`
  font-weight: 800 !important
`;

const Night = styled.span`
  -webkit-box-align: center !important;
  align-items: center !important;
  color: rgb(34, 34, 34) !important;
  display: flex !important;
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 20px !important;
`

export default Cards