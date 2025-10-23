type TextareaProps = {
  name: string;
  label: string;
  rows?: number;
  required?: boolean;
  placeholder?: string;
}

export default function Textarea({ name, label, rows = 4, required = false, placeholder }: TextareaProps) {
  return (
    <div className="flex flex-col">
      <label 
        htmlFor={name}
        className="text-sm mb-2 text-gray-600 dark:text-gray-400"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      <textarea 
        id={name} 
        name={name} 
        rows={rows}
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