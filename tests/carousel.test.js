import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import Carousel from '../client/src/components/carousel.jsx';
import Adapter from 'enzyme-adapter-react-16';
import Cards from '../client/src/components/card.jsx';

beforeEach(() => {
  configure({adapter: new Adapter()});
});


describe('<Carousel />', () => {
  it('there are 12 <Cards /> items', () => {
    const wrapper = shallow(<Carousel />);
    expect(wrapper.find(Cards)).to.have.lengthOf(12);
  });

  it('should show 4 <Cards /> items at a time', () => {

  });

  it('backward button should show the previous set of image', () => {

  });

  it('if current show is the very first set of images, clicking the backward button will show the very last set of images' () => {

  });

  it('forward button should show the next set of items', () => {

  });

  it('if current show is the very last set of images, clicking the forward button will show the very first set of images' () => {

  })
});

describe('<Card />', () => {
  it('information should include the image, type, number of bedrooms, room name, and price per night', () => {

  });

  it('there is a Like button if the room is not saved to any list', () => {

  });

  it('there is an Unlike button if the room is saved to a list', () => {

  });

  it('if a user clicks the Like button, a modal of lists will pop up', () => {

  });

  it('if a user clicks the Unlike button, the room will be removed from the list; number of items on the list will reduce by 1; a modal of removal confirmation will pop up', () => {

  })
});

describe('<ListModal />', () => {
  it('it should show all of the lists that a user has', () => {

  });

  it('if a user clicks on the Create a List button, a modal to create a new list pops up' () => {

  })
});

describe('<ListItem />', () => {
  it('information should include the name of the list and number of items in the list', () => {

  });

  it('if a user click on a list, the room is saved to a list; number of item in that list increases by 1; a modal of saved confirmation pops up', () => {

  })；
});

describe('<CreateListModal />', () => {
  it('it should have a field for a user to input the list name', () => {

  });

  it('if a user clicks the Create button, a new list is created; the room the user clicked the Like button from is added to the list; the modal to create a new list closes.' () => {

  })
});

describe('<SavedModal />', () => {
  it('it should show the list name', () => {

  });

  it('if a user clicks the Change button, the room is moved from the list; number of items in the list decreases by 1; and all of the lists show up.' () => {

  })

  it('the modal closes after 5 seconds', () => {

  })
});

describe('<RemovedModal />', () => {
  it('it should show the list name', () => {

  });

  it('if a user clicks the Undo button, the room is added back to the list; number of items in the list increases by 1.' () => {

  });

  it('the modal closes after 5 seconds', () => {

  });
})

