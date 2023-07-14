import { render, screen } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";
import userEvent from '@testing-library/user-event';

const handleInputChanged = (value) => {
    onEventNumberChange(value);
};

describe("<NumberOfEvents /> component", () => {
    test("contains text box", () => {
        render(<NumberOfEvents eventNumber={32} handleInputChanged={handleInputChanged} />);
        const numberInput = screen.queryByRole("textbox");
        expect(numberInput).toBeInTheDocument();
        expect(numberInput).toHaveClass("textbox");
    });
    test("input field default value is 32", () => {
        render(<NumberOfEvents eventNumber={32} handleInputChanged={handleInputChanged} />);
        const numberInput = screen.queryByRole("textbox");
        expect(numberInput).toHaveValue("32");
    });
    test('changes number of events shown when changed', async () => {
        const handleEventNumberChange = jest.fn();
        render(
            <NumberOfEvents
                eventNumber={32}
                onEventNumberChange={handleEventNumberChange}
            />
        );
        const numberInput = screen.queryByRole("textbox");
        await userEvent.type(numberInput, "10");
        expect(handleEventNumberChange).toHaveBeenCalled();
    })
});