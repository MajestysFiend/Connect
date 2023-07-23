import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When the user changes the input, that many events are rendered', ({ given, when, then }) => {
        let AppComponent;
        given('the user hasnt specified the number of events to view', () => {
            AppComponent = render(<App />)
        });

        when('the user enters "10" in the input', async () => {
            const user = userEvent.setup();
            AppComponent = render(<App />)
            const AppDOM = AppComponent.container.firstChild;
            const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
            const numberTextBox = within(NumberOfEventsDOM).queryByRole('textbox');
            await user.click(numberTextBox);
            await user.type(numberTextBox, "{backspace}{backspace}10");
        });

        then('the user will view 10 rendered events', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const eventCount = within(EventListDOM).queryAllByRole('listitem');
                expect(eventCount.length).toBe(10);
            })
        });
    });
})