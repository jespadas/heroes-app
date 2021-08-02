import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react-hooks';

import { useForm } from "../../hooks/useForm";

describe('Test in <useForm />', () => {

    const initialForm = {
        name: "Julio",
        email: "contact@julioespadas.com"
    };

    test('Should return a default form', () => {

        const { result } = renderHook(() => useForm(initialForm));
        const [formValues, handleInputChange, reset] = result.current;

        expect(formValues).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');

    })

    test('Should change form value', () => {

        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Efrain'
                }
            });
        });

        const [formValues] = result.current;

        expect(formValues).toEqual({ ...initialForm, name: 'Efrain' });

    })

    test('Should reset form values', () => {

        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange, reset] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Efrain'
                }
            });

            reset();
        });

        const [formValues] = result.current;

        expect(formValues).toEqual(initialForm);

    })




})