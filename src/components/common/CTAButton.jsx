import { Link } from 'react-router-dom';

/**
 * Reusable CTA Button component with papaya orange accent styling
 */
export default function CTAButton({
    children,
    to,
    href,
    onClick,
    variant = 'primary',
    className = '',
    ...props
}) {
    const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

    const variants = {
        primary: 'bg-accent text-white hover:bg-accent-dark focus-visible:ring-accent px-6 py-3 text-base',
        secondary: 'bg-white text-accent border-2 border-accent hover:bg-accent-light focus-visible:ring-accent px-6 py-3 text-base',
        small: 'bg-accent text-white hover:bg-accent-dark focus-visible:ring-accent px-4 py-2 text-sm',
    };

    const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

    // If it's an internal route, use Link
    if (to) {
        return (
            <Link to={to} className={combinedStyles} {...props}>
                {children}
                <ArrowIcon />
            </Link>
        );
    }

    // If it's an external href, use anchor
    if (href) {
        return (
            <a href={href} className={combinedStyles} {...props}>
                {children}
                <ArrowIcon />
            </a>
        );
    }

    // Otherwise render as button
    return (
        <button onClick={onClick} className={combinedStyles} {...props}>
            {children}
            <ArrowIcon />
        </button>
    );
}

function ArrowIcon() {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
    );
}
