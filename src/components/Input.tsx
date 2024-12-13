
export default function Input({onChange, placeholder} : {placeholder: string, onChange: () => void})
{
    return <div>
        <input placeholder={placeholder} 
        type="text" 
        className="px-4 py-2 border rounded"
        onChange={onChange}
        />
        </div>
}