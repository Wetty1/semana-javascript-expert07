import factory from "./factory.js";
import handGestureFactory from "../../../lib/shared/handGesture/factories/handGestureFactory.js";

await handGestureFactory.initialize();
await factory.initialize();
