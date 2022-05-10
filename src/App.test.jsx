import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('CharacterDetails', () => {
  it('should render character details', async () => {
    render(
      <MemoryRouter initialEntries={['/', '/characters/2']} initialIndex={1}>
        <App />
      </MemoryRouter>
    );
    // screen.debug();

    // const loading = screen.getByText('Loading Characters...');
    // expect(loading).toBeInTheDocument();

    // const heading = await screen.findByText('Character List');
    // expect(heading).toBeInTheDocument();

    const characterList = await screen.findByText('Species: Human');
    expect(characterList).toBeInTheDocument();
    screen.debug();
  });
});

describe('App', () => {
  it('should render a list of characters', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const loading = screen.getByText('Loading Characters...');
    expect(loading).toBeInTheDocument();

    const heading = await screen.findByText('Character List');
    expect(heading).toBeInTheDocument();

    const characterList = await screen.findByText('Rick Sanchez');
    expect(characterList).toBeInTheDocument();
    // screen.debug();
  });
});
