import { useField } from "formik";

interface formType {
  id: string;
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

const MyTextInput: React.FC<formType> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-3 pt-5">
      <label htmlFor={props.id || props.name} className="text-sm font-light">
        {label}
      </label>
      <input className="px-5 py-3" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default MyTextInput;
