export const TextLink = ({ children, href, className }) => {
    return (
        <a
            href={href}
            className={`font-medium text-blue-500 hover:text-blue-600 active:text-blue-700 hover:underline${
                className ? ` ${className}` : ""
            }`}
        >
            {children}
        </a>
    );
};
