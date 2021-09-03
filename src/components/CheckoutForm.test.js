import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, userEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const address = screen.getByLabelText(/address/i);
    const city = screen.getByLabelText(/city/i);
    const state = screen.getByLabelText(/state/i);
    const zip = screen.getByLabelText(/zip/i);
    const checkoutButton = screen.getByRole('button');

    userEvent.type(firstName, "Allison");
    userEvent.type(lastName, "Homem");
    userEvent.type(address, "1234 Camino Real");
    userEvent.type(city, "San Diego");
    userEvent.type(state, "California");
    userEvent.type(zip, "90212");
    userEvent.click(checkoutButton);

    const success = screen.getByTestId('successMessage');

    expect(success).toBeVisible();
});
