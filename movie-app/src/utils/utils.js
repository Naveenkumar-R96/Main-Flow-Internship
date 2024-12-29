export function conMin(minutes){
    const hours=Math.floor(minutes/60);
    const remainingMinutes=minutes%60;
    return `${hours}h ${remainingMinutes}`
}