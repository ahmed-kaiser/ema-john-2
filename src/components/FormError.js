const FormError = ({ message }) => {
    return (
        <div className="py-.5 pl-2 text-red-500">
           <small>*{ message }</small> 
        </div>
    );
};

export default FormError;