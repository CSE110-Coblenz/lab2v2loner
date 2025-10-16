export let guests: string[] = ["John", "Mary", "April"]

export function printGuests() {
    for (const guest of guests) {
        console.log(guest);
    }
}
