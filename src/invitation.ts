export let guests: string[] = ["john", "Mary", "April"]

export function printGuests() {
    for (const guest of guests) {
        console.log(guest);
    }
}
