export let guests: string[] = ["Mary", "April"]

export function printGuests() {
    for (const guest of guests) {
        console.log(guest);
    }
}
