// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import {cleanup, render} from '@testing-library/react';
import React from 'react';
// import App from './App';
import NewComponent from './components/NewComponent'

afterEach(cleanup);

it('should be equal to zero', ()=>{
  const {getByTestId} = render(<NewComponent/>)
  expect(getByTestId('counter')).toHaveTextContent(0);
})