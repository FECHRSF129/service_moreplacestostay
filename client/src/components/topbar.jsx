import React from 'react';
import styled from 'styled-components';

function Topbar () {

  return (

    <div>
      <TopbarHolder>
        <ContentHolder>
          <LeftContentHolder>
            <IconHolder>
              <AirIcon viewBox="0 0 1025 456" role="img" aria-label="Airbnb Plus" focusable="false" height="32">
                <path d="m 297.43 299.83 c -1.318 -4.117 -3.213 -8.028 -4.82 -11.816 c -2.431 -5.64 -5.109 -11.28 -7.539 -16.468 l -0.248 -0.535 c -22.576 -48.785 -46.512 -98.188 -71.766 -146.81 l -1.071 -1.935 c -2.678 -5.105 -5.109 -10.21 -7.787 -15.027 c -3.271 -6.355 -7.148 -12.379 -11.576 -17.99 c -5.084 -6.097 -11.455 -10.994 -18.656 -14.339 s -15.054 -5.0564 -22.995 -5.0101 c -7.931 0.0184 -15.763 1.7582 -22.954 5.0991 c -7.192 3.3409 -13.571 8.2032 -18.697 14.25 c -4.513 5.5505 -8.396 11.584 -11.577 17.99 l -8.0336 15.027 l -1.0711 2.141 c -25.007 48.703 -49.19 97.818 -71.52 146.69 l -0.2471 0.823 c -2.4307 5.393 -5.1086 11.033 -7.5392 16.468 c -1.6067 3.746 -3.2134 7.533 -4.8202 11.815 c -6.4103 16.902 -5.9825 35.634 1.1928 52.227 c 7.1752 16.592 20.534 29.74 37.245 36.657 c 8.4515 3.405 17.503 5.071 26.614 4.899 c 2.925 0 5.6029 -0.247 8.5691 -0.535 c 11.483 -1.419 22.556 -5.159 32.546 -10.992 c 15.104 -9.093 28.698 -20.482 40.292 -33.759 c 11.587 13.306 25.181 24.724 40.291 33.841 c 12.469 7.421 26.686 11.399 41.198 11.528 c 16.66 0.121 32.8 -5.793 45.433 -16.646 c 12.634 -10.854 20.905 -25.913 23.285 -42.391 c 1.71 -11.862 0.421 -23.963 -3.749 -35.199 Z m -146.46 18.032 c -17.757 -22.314 -28.839 -43.269 -32.959 -60.725 c -1.677 -6.477 -2.041 -13.224 -1.071 -19.843 c 0.76 -4.907 2.588 -9.587 5.356 -13.71 c 3.368 -4.459 7.725 -8.076 12.729 -10.567 c 5.005 -2.491 10.519 -3.787 16.109 -3.787 c 5.591 0 11.105 1.296 16.109 3.787 c 5.005 2.491 9.362 6.108 12.73 10.567 c 2.768 4.123 4.596 8.803 5.356 13.71 c 0.845 6.625 0.482 13.348 -1.072 19.843 c -4.243 17.456 -15.819 38.411 -33.287 60.725 Z m 130.35 15.273 c -1.205 8.375 -4.596 16.285 -9.833 22.934 c -5.236 6.649 -12.132 11.803 -19.995 14.942 c -7.917 3.212 -16.533 4.319 -25.007 3.211 c -8.816 -1.191 -17.312 -4.101 -25.007 -8.563 c -14.01 -8.471 -26.535 -19.179 -37.078 -31.7 c 21.258 -26.307 34.689 -50.474 39.509 -72.252 c 2.14 -9.062 2.601 -18.438 1.359 -27.666 c -1.245 -7.953 -4.181 -15.548 -8.61 -22.272 c -5.211 -7.291 -12.12 -13.205 -20.131 -17.229 c -8.01 -4.024 -16.881 -6.038 -25.846 -5.867 c -8.957 -0.164 -17.82 1.853 -25.823 5.877 s -14.906 9.933 -20.112 17.219 c -4.55 6.662 -7.4966 14.284 -8.6107 22.272 c -1.2522 9.227 -0.7913 18.606 1.3595 27.666 c 4.8202 21.778 18.25 45.945 39.509 72.252 c -10.611 12.453 -23.125 23.152 -37.078 31.7 c -7.6946 4.462 -16.191 7.372 -25.007 8.563 c -8.4733 1.108 -17.089 0.001 -25.007 -3.211 c -7.8372 -3.178 -14.71 -8.343 -19.94 -14.985 c -5.2306 -6.642 -8.6382 -14.531 -9.8867 -22.891 c -1.1099 -8.528 -0.0908 -17.197 2.9662 -25.236 c 1.1423 -3.492 2.5187 -6.903 4.1198 -10.21 c 2.4307 -5.352 4.8614 -10.992 7.2508 -16.097 l 0.2884 -0.824 c 22.906 -48.868 47.213 -98.023 72.344 -146.6 l 1.071 -1.894 c 2.719 -4.817 5.108 -10.21 7.786 -15.027 c 2.585 -5.12 5.647 -9.986 9.146 -14.532 c 3.154 -3.848 7.138 -6.9321 11.654 -9.0213 c 4.517 -2.0891 9.448 -3.1289 14.424 -3.0415 c 4.941 0.0226 9.818 1.1123 14.298 3.1943 s 8.456 5.1072 11.657 8.8685 c 3.647 4.441 6.72 9.324 9.146 14.532 c 2.678 4.817 5.356 9.922 7.786 14.739 l 1.072 2.182 c 24.965 48.58 48.901 97.735 71.478 146.6 l 0.288 0.535 c 2.39 5.394 5.067 11.034 7.498 16.468 l 4.326 10.21 c 2.803 8.071 3.705 16.679 2.637 25.154 Z"></path>
                <path d="m 479.18 182.29 c -41.198 107.82 -55.452 197.61 -67.811 264.76 c -1.484 8.481 -7.251 9.222 -10.218 8.893 c -2.966 -0.329 -7.415 -3.458 -6.22 -11.651 c 18.291 -125.24 41.197 -212.68 61.796 -271.72 c 4.12 -12.351 10.835 -20.173 19.775 -16.88 c 8.94 3.294 6.51 15.974 2.678 26.596 Z"></path>
                <path d="m 500.89 116.54 c 90.224 -2.224 103.49 61.012 103.49 78.715 c 0 68.505 -54.422 127.62 -139.08 138.95 c -9.846 1.276 -37.572 6.34 -55.534 -3.623 c -11.082 -5.97 -12.607 -14.821 -9.846 -18.938 c 2.76 -4.117 7.333 -1.976 9.846 -0.741 c 9.558 5.476 20.187 10.992 50.426 7.534 c 68.553 -7.74 124.87 -55.496 123.59 -122.97 c -0.494 -27.131 -19.157 -60.519 -82.148 -59.778 c -10.093 0 -79.141 0.741 -135.34 70.729 c -0.989 1.695 -2.536 2.994 -4.376 3.677 s -3.861 0.708 -5.717 0.069 c -4.12 -1.482 -3.749 -5.969 -1.483 -11.198 c 8.816 -22.396 68.017 -80.403 146.17 -82.42 Z"></path>
                <path d="m 890.88 330.35 c -6.427 -6.71 -5.809 -14.286 -6.551 -25.525 c -0.741 -11.239 -0.824 -26.76 14.79 -94.689 c 0.381 -1.194 0.514 -2.454 0.389 -3.701 s -0.504 -2.456 -1.113 -3.551 c -0.61 -1.096 -1.438 -2.055 -2.433 -2.818 c -0.995 -0.764 -2.136 -1.316 -3.352 -1.622 c -6.551 -1.399 -11.082 2.841 -13.06 10.251 c -8.528 28.489 -42.269 115.27 -69.789 112.84 c -36.584 -2.841 -10.794 -85.467 -4.12 -109.14 c 1.689 -6.258 0.577 -13.957 -5.685 -15.356 c -7.374 -1.73 -11.618 4.528 -14.46 11.939 c -2.843 7.41 -35.183 113.42 -72.921 113.71 c -17.838 0 -29.786 -27.954 -33.452 -69.988 c 32.052 -34.458 96.444 -128.78 96.444 -197.61 c 0 -51.297 -26.655 -55.867 -37.737 -55.002 c -63.239 5.7225 -92.448 136.19 -78.565 247.59 c -38.849 43.886 -68.924 61.753 -91.912 74.927 c -5.933 3.459 -7.086 7.411 -5.685 10.581 c 1.4 3.17 5.397 4.817 10.793 3.129 c 27.521 -8.852 67.235 -39.893 90.636 -65.253 c 10.217 61.424 33.205 69.987 48.819 69.987 c 36.295 0 55.288 -45.574 61.261 -56.978 c -1.153 10.828 -4.82 57.266 37.985 56.978 c 33.494 0 54.216 -49.815 54.71 -50.638 c -0.682 4.371 -0.985 8.792 -0.906 13.215 c 1.236 16.468 4.12 27.748 10.3 33.965 c 8.445 8.728 24.471 1.976 15.614 -7.246 Z m -214.23 -103.29 c -6.262 -90.325 18.415 -203.42 60.684 -204.86 c 38.108 -1.6879 18.828 110.25 -60.602 204.86 h -0.082 Z"></path>
                <path d="m 1003.6 282.1 c 4.81 10.7 -0.58 23.83 -6.109 30.944 c -10.294 13.216 -27.149 13.219 -32.266 13.506 c -17.455 0.977 -32.541 -9.026 -36.388 -23.697 c -3.017 -11.522 3.768 -23.667 -1.595 -26.845 c -0.616 -0.343 -1.301 -0.543 -2.005 -0.584 c -5.972 -0.145 -10.024 9.761 -11.549 14.871 c -1.994 7.136 -2.068 14.671 -0.217 21.846 c 1.852 7.174 5.565 13.733 10.764 19.015 c 24.907 23.09 73.159 16.436 91.085 -9.031 c 5.56 -8.364 8.65 -18.121 8.93 -28.158 c 0.18 -8.507 -2.23 -16.868 -6.92 -23.97 c -17.483 -25.133 -62.141 -17.24 -62.257 -39.604 c -0.08 -10.297 10.364 -17.827 19.714 -21.018 c 19.612 -6.649 34.783 -3.274 29.963 6.493 c -0.83 1.68 -1.52 3.426 -2.06 5.221 c -2.842 8.455 10.28 16.351 18.68 -0.618 c 1.79 -3.43 2.51 -7.311 2.09 -11.154 c -0.42 -3.842 -1.97 -7.475 -4.45 -10.441 c -5.28 -6.47 -19.783 -11.681 -39.886 -8.586 c -23.246 3.553 -43.437 17.065 -42.265 43.449 c 0.168 3.828 1.085 7.586 2.699 11.061 c 12.091 24.797 54.265 15.607 64.042 37.3 Z"></path>
              </AirIcon>
            </IconHolder>
            <WordsHolder>
              <ButtonHolder>
                <WordButtons>Photos</WordButtons>
              </ButtonHolder>
              <ButtonHolder>
                <WordButtons>Amenities</WordButtons>
              </ButtonHolder>
              <ButtonHolder>
                <WordButtons>Reviews</WordButtons>
              </ButtonHolder>
              <ButtonHolder>
                <WordButtons>Location</WordButtons>
              </ButtonHolder>
            </WordsHolder>
          </LeftContentHolder>
          <RightContentHolder>
            <NumberHolder>
              <Price>$4,736</Price>
              <Night> / night</Night>
              <ReviewHolder>
                <ReviewStar>
                  <StarIcon viewBox="0 0 1400 1400" role="presentation" aria-hidden="true" focusable="false">
                    <path d="M 972 380 c 9 28 2 50 -20 67 L 725 619 l 87 280 c 11 39 -18 75 -54 75 c -12 0 -23 -4 -33 -12 L 499 790 L 273 962 a 58 58 0 0 1 -78 -12 a 50 50 0 0 1 -8 -51 l 86 -278 L 46 447 c -21 -17 -28 -39 -19 -67 c 8 -24 29 -40 52 -40 h 280 l 87 -279 c 7 -23 28 -39 52 -39 c 25 0 47 17 54 41 l 87 277 h 280 c 24 0 45 16 53 40 Z">
                    </path>
                  </StarIcon>
                </ReviewStar>
                <span>4.89</span>
                <span>(63)</span>
              </ReviewHolder>
            </NumberHolder>
            <CheckBtnHolder>
              <CheckBtn>Check availability</CheckBtn>
            </CheckBtnHolder>
          </RightContentHolder>
        </ContentHolder>
      </TopbarHolder>
    </div>

  )

}

const TopbarHolder = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 0px !important;
  background-color: rgb(255, 255, 255) !important;
  position: fixed !important;
  left: 0px !important;
  right: 0px !important;
  top: 0px !important;
  width: 100%;
  display: flex;
  height: 160;
  -webkit-box-align: stretch !important;
  align-items: stretch !important;
  flex-wrap: wrap !important;
  margin-bottom: 200px
`;

const ContentHolder = styled.div`
  padding-left: 80px !important;
  padding-right: 80px !important;
  -webkit-box-pack: start !important;
  -webkit-box-align: stretch !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  flex-wrap: wrap !important;
  width: 100% !important;
`

const LeftContentHolder = styled.div`
  height: 100%
  width: 500px;
  display: flex;
  height: 80px-webkit-box-pack: start !important;
  -webkit-box-align: stretch !important;
  flex-wrap: wrap !important;
`;

const IconHolder = styled.div`
  display: inline-block !important;
  margin-right: 24px !important;
  vertical-align: middle !important;
  height: 72;
  width: 37
`;

const AirIcon = styled.svg`
  fill: var(--dls19-brand-color) !important;
`;

const WordsHolder = styled.div`
  display: inline-block !important;
  white-space: nowrap !important;
  color: rgb(113, 113, 113) !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-weight: 400 !important;
  line-height: 20px !important;
`;

const ButtonHolder = styled.div`
  display: inline-block !important;
  margin-right: 24px !important;
  white-space: nowrap !important;
`;

const WordButtons = styled.button`
  cursor: pointer !important;
  position: relative !important;
  touch-action: manipulation !important;
  display: block !important;
  height: 100% !important;
  width: 100% !important;
  border-radius: 8px !important;
  outline: none !important;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s !important;
  background: transparent !important;
  border-width: initial !important;
  border-style: none !important;
  border-color: initial !important;
  border-image: initial !important;
  margin: 0px !important;
  padding: 0px !important;
  text-decoration: none !important;
  font-size: 14px !important;
`;

const RightContentHolder = styled.div`
  width: 297px;
  float: right;
  padding-top: 16px !important;
  padding-bottom: 16px !important;
  display: flex !important;
  align-items: center !important;
  flex-direction: row !important;
  justify-content: space-between !important;
`;

const NumberHolder = styled.div`
 width: 118px;
 height: 45px;
 font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
`;

const Price = styled.span`
  font-size: 18px;
  font-weigth: 600;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
`;

const Night = styled.span`
  padding-left: 4px !important;
  color: rgb(34, 34, 34) !important;
  font-size: 14px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
`

const ReviewHolder = styled.div`
  align-items: center !important;
  display: flex !important;
  font-size: 12px;
  padding-top: 8px;
`

const CheckBtnHolder = styled.div`
  display: inline-block !important;
`

const ReviewStar = styled.span`
  -webkit-box-align: center !important;
  align-items: center !important;
  display: flex !important;
  margin-right: 4px !important;
  color: rgb(180, 56, 150) !important;
`;

const StarIcon = styled.svg`
  height: 14px;
  width: 14px;
  fill: currentcolor
`;

const CheckBtn = styled.button`
  cursor: pointer !important;
  display: inline-block !important;
  position: relative !important;
  text-align: center !important;
  width: 179.5 !important;
  touch-action: manipulation !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-size: 14px !important;
  line-height: 20px !important;
  font-weight: 600 !important;
  padding-top: 16px !important;
  padding-bottom: 15px !important;
  padding-left: 24px !important;
  padding-right: 24px !important;
  color: rgb(255, 255, 255) !important;
  margin: 0px !important;
  border-radius: 8px !important;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s !important;
  border-width: initial !important;
  border-style: none !important;
  border-color: initial !important;
  border-image: initial !important;
  background: linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%) !important;
`

export default Topbar