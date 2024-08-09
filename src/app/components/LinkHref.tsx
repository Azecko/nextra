interface LinkHrefProps {
    href: string;
    text: string;
    target: "_blank" | "_parent" | "_self" | "_top";
}

export default function LinkHref({ href, text, target }: LinkHrefProps) {
    return (
        <a
            className="text-sky-400 relative after:bg-sky-400 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
            href={href}
            target={target}>
            {text}
        </a>
    )
}