import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Card from '../../components/Card';

describe('<Card />', () => {
  describe('When the component is rendered', () => {
    const cardText = "This is the card text.";
    const cardType = "white";

    it('should show the card text passed in props', () => {
      render(<Card text={cardText} type={cardType}/>)

      const cardTextElement = screen.getByText(cardText);

      expect(cardTextElement).toBeInTheDocument();
    })
  })
})
