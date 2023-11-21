export function cn(...inputs: classValue[]){
    return twMerge(clsx(inputs))
}