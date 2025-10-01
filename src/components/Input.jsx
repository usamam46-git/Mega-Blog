import React, { useId } from 'react'

const Input = React.forwardRef(function Input({ label, type = "text", name, placeholder, className = '', value, onChange, error, ...props }, ref) {
    const id = useId()
    return (
        <div className={`flex flex-col mb-4 ${className}`}>
            <label htmlFor={id} className="mb-2 font-medium">{label}</label>
            <input
                ref={ref}
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`border border-gray-300 p-2 rounded-md ${error ? 'border-red-500' : `${className}`}`}
                {...props}
            />
            {error && <span className="text-red-500 text-sm">{error}</span>}
        </div>
    )
})

export default Input
