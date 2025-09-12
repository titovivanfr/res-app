interface GreetingProps {
    first_name: string;
    last_name: string;
    using_name: string;
}

export function Greeting({
    first_name,
    last_name,
    using_name,
}: GreetingProps): string {
    const fn: string =
        first_name.trim().charAt(0).toLocaleUpperCase() +
        first_name.trim().slice(1);
    const ln: string =
        last_name.trim() === using_name.trim()
            ? last_name.toLocaleUpperCase()
            : using_name.toLocaleUpperCase();
    return `${ln} ${fn}`;
}
