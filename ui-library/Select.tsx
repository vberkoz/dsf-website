type SelectOption = {
  value: string;
  label: string;
}

type SelectProps = {
  name: string;
  label: string;
  options: SelectOption[];
  required?: boolean;
  placeholder?: string;
}

export default function Select({ name, label, options, required = false, placeholder = "Select option..." }: SelectProps) {
  return (
    <div className="flex flex-col">
      <label 
        htmlFor={name}
        className="text-sm mb-2 text-gray-600 dark:text-gray-400"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      <select 
        name={name} 
        id={name}
        required={required}
        className="
          py-3 px-4 appearance-none w-full
          bg-gray-200 dark:bg-gray-800 
          outline-none focus:ring-2 ring-inset ring-green-600 dark:ring-yellow-400 
          border-b focus:border-0 border-gray-500
        "
      >
        <option value="" disabled selected>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}