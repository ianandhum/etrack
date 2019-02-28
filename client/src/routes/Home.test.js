import React from 'react';
import ReactDOM from 'react-dom';
import EtrackMain from './ETrackMain';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EtrackMain />, div);
  ReactDOM.unmountComponentAtNode(div);
});

