import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import 'mutationobserver-shim';

test('app renders without crashing!', () => {
	render(<App />);
});
