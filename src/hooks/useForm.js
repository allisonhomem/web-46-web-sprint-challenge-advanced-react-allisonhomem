// write your custom hook here to control your checkout form
import {useState} from 'react';

const useLocalStorage = (key, initialValue) => {
    const [storedValue,setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);

        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = (value) => {
    setStoredValue(value);

    window.localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedValue, setValue];
}

const useForm = (initialValues) => {
    const [values, setValues] = useLocalStorage('form',initialValues);

    const handleChanges = (event) => {
        setValues({...values, [event.target.name]: event.target.value});
    };

    const clearForm = (event) => {
        event.target.preventDefault();
        setValues(initialValues);
    };

    return [values, handleChanges, clearForm];
}

export default useForm;