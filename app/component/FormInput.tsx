import React from "react"

const FormInput = (
    { name, defaultValue, required, type }:
        { name: string, defaultValue?: string | undefined, required?: boolean, type?: string }
) => {
    return (
        <input
            className="bg-white rounded-lg w-60 text-black px-2"
            type={type || "text"}
            name={name}
            defaultValue={defaultValue}
            required={required}
        />
    )
}

export default FormInput