import { printSnack } from './snacks';
import { printGuests } from "./invitation";
import { featureAnimation } from "./animation";


function main() {
    featureAnimation("Part! Part! Part! - Snacks Time");
    printSnack();
    featureAnimation("Here are the Gust!");
    printGuests();
}

main();