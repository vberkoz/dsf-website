type InputProps = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}

export default function Input({ name, label, type = "text", required = false, placeholder }: InputProps) {
  return (
    <div className="flex flex-col">
      <label 
        htmlFor={name}
        className="text-sm mb-2 text-gray-600 dark:text-gray-400"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
  
      <input 
        type={type} 
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        className="
          py-3 px-4 
          bg-gray-200 dark:bg-gray-800 
          outline-none focus:ring-2 ring-inset ring-green-600 dark:ring-yellow-400 
          border-b focus:border-0 border-gray-500
        " 
      />
    </div>
  )
}