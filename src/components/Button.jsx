import './Button.css';

const Button = ({ children, onClick, variant = 'primary', size = 'medium', type = 'button', className = '' }) => {
    return (
        <button
            type={type}
            className={`btn btn-${variant} btn-${size} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
