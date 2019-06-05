import { regex } from "../../utils/regex";

export const isRequired = text => !text

export const isEmail = email => email.match(regex.email)

export const minLength = (text, length) => {
    return (text && text.length < length);
}

export const maxLength = (text, length) => {
    return (text && text.length > length);
}

