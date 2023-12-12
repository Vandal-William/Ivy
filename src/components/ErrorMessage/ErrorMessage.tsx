import './styles.scss'
interface ErrorMessageProps {
    error: { message: string }[];
  }
  
  function ErrorMessage({ error }: ErrorMessageProps) {

    return (
      <div className="error">
        {error.map((err, index) => (
            <p className="error-messages" key={index}>{err.message}</p>
        ))}
      </div>
    );
  }
  
  export default ErrorMessage;