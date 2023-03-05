const { GestureDescription, Finger, FingerCurl } = window.fp;

const RockGesture = new GestureDescription("scroll-down"); // ✊️
const PaperGesture = new GestureDescription("scroll-up"); // 🖐
const ClickGesture = new GestureDescription("click"); // 👌️
const RockRollGesture = new GestureDescription("rock-roll"); //

// Rock
// -----------------------------------------------------------------------------

// thumb: half curled
// accept no curl with a bit lower confidence
RockGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
RockGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);

// all other fingers: curled
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  RockGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  RockGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

// Paper
// -----------------------------------------------------------------------------

// no finger should be curled
for (let finger of Finger.all) {
  PaperGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}

// Click
//------------------------------------------------------------------------------

// index and middle finger: stretched out
ClickGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.8);
ClickGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 0.5);

ClickGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
ClickGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.4);

ClickGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);
ClickGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 0.9);

// ring: curled
ClickGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);
ClickGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 0.9);

// pinky: curled
ClickGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);
ClickGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.9);

// Click
//------------------------------------------------------------------------------

// index and middle finger: stretched out
RockRollGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.4);
RockRollGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);

RockRollGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
RockRollGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.6);

RockRollGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.4);
RockRollGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);

// ring: curled
RockRollGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.8);
RockRollGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);

// pinky: curled
RockRollGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
RockRollGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.8);

const knownGesture = [RockGesture, PaperGesture, ClickGesture, RockRollGesture];

const gestureStrings = {
  "scroll-up": "🖐",
  "scroll-down": "✊️",
  click: "👌️",
  "rock-roll": "🤘️",
};

export { knownGesture, gestureStrings };
