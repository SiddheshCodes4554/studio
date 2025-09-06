export function Logo({ className }: { className?: string }) {
    return (
        <div className={`inline-block ${className}`}>
            <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="animate-sway origin-bottom"
            >
                <path
                    d="M18 33V15M18 15C18 11.6863 15.3137 9 12 9C8.68629 9 6 11.6863 6 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M18 21C18 17.6863 20.6863 15 24 15C27.3137 15 30 17.6863 30 21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M18 15C18 11.6863 20.6863 9 24 9C27.3137 9 30 11.6863 30 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M12 2.99991C10.5958 4.2144 9.51939 5.82136 9 7.49991"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                 <path
                    d="M24 2.99991C25.4042 4.2144 26.4806 5.82136 27 7.49991"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
}
