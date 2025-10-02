import React from 'react'

const Select = ({
    options,
    label,
    className='',
    ...props
}, ref) => {
    const id = React.useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className="mb-2 font-medium">{label}</label>}
        <select
            ref={ref}
            id={id}
            className={`border border-gray-300 p-2 rounded-md ${className}`}
            {...props}
        >
            {options?.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)


