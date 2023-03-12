type InputProps = {
  name: string;
  label: string;
}

export default function Input({ name, label }: InputProps) {
  return (
    <div className="flex flex-col">
      <label 
        htmlFor={name}
        className="text-sm mb-2 text-gray-600 dark:text-gray-400"
      >{label}</label>
  
      <input 
        type="text" 
        id={name}
        name={name}
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