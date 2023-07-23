import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('When the user clicks the details button on an event, the event will show/hide its details', ({ given, when, then }) => {
        let AppComponent;
        let AppDOM;
        let EventListDOM;
        given('the app is rendered', () => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;
            EventListDOM = AppDOM.querySelector('#event-list');
        });

        let EventListItems;
        when('the user clicks on the show details button', async () => {
            const user = userEvent.setup();

            await waitFor(() => {
                EventListItems = within(EventListDOM).queryAllByRole('listitem')
                expect(EventListItems.length).toBe(32)
            })

            const showDetailsButton = within(EventListItems[0]).queryByText('show details')
            await user.click(showDetailsButton);
        });

        then('the details of the clicked event should be seen', () => {
            const showDetailsButton = within(EventListItems[0]).queryByText('show details')
            expect(showDetailsButton).toBeNull();
        });
    });
})