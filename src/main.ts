import { printSnack } from './snacks';
import { printGuests } from "./invitation";
import { featureAnimation } from "./animation";


function main() {
    featureAnimation("Party! Party! Party! - Snacks Time");
    printSnack();
    featureAnimation("Here are the guests!");
    printGuests();
}

main();
