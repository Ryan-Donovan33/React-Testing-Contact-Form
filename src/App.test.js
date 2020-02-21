import React from 'react';
import { render, getByText } from '@testing-library/react';
import App from './App';
import 'mutationobserver-shim';

test('app renders without crashing!', () => {
	render(<App />);
});

test('basic test to see if working', () => {
	const { getByText } = render(<App />);

	const header = getByText(/Testing/i);

	expect(header).toBeInTheDocument();
});
