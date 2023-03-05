import cardsFactory from "./factories/cardsFactory.js";
import handGestureFactory from "../../../lib/shared/handGesture/factories/handGestureFactory.js";

await cardsFactory.initialize();
await handGestureFactory.initialize();
