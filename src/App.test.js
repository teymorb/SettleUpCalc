import { render, screen } from '@testing-library/react';
import OldApp from './Old-App1';

test('renders learn react link', () => {
  render(<OldApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
