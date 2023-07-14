import { screen, render } from '@testing-library/react';
import Event from '../components/Event';
import userEvent from '@testing-library/user-event';

const mockEvent = {   
    id: "EVENT ID",
    summary: "EVENT TITLE",
    created: "EVENT DATE",
    location: "EVENT LOCATION",
    description: "EVENT INFO"
};

describe('<Event/> component', () => {
    test('renders event title', () => {
        render(<Event event={mockEvent} />);
        expect(screen.getByText(mockEvent.summary)).toBeInTheDocument();
    })
    test('renders event date', () => {
        render(<Event event={mockEvent} />);
        expect(screen.getByText(mockEvent.created)).toBeInTheDocument();
    })
    test('renders event location', () => {
        render(<Event event={mockEvent} />);
        expect(screen.getByText(mockEvent.location)).toBeInTheDocument();
    })
    test('renders show details button', () => {
        render(<Event event={mockEvent} />);
        expect(screen.getByText('show details')).toBeInTheDocument();
    })
    test('toggles details button on click', async () => {
        // show details is shown (unclicked)
        const user = userEvent.setup();
        render(<Event event={mockEvent} />);
        const showDetailsButton = screen.getByText("show details");
        await user.click(showDetailsButton);

        // button clicked
        expect(screen.queryByText('show details')).toBeNull();
        expect(screen.getByText(mockEvent.description)).toBeInTheDocument();
    })
    
});
