# Specification

## Summary
**Goal:** Provide a noticeable red “alarm” visual feedback when the user clicks the “No” button on the Valentine Question screen, without leaving the screen.

**Planned changes:**
- Enable the “No” button on the Question screen and handle clicks by triggering a temporary alarm-style red feedback (e.g., red glow/ring + shake and/or brief red screen flash overlay) while staying on the same screen.
- Add the necessary CSS/Tailwind-compatible animation styles (e.g., keyframes/classes) to support the alarm effect and ensure it resets automatically after a short duration and can be triggered repeatedly.

**User-visible outcome:** On the Question screen, the “No” button is clickable and, when pressed, it briefly shows a clear red alarm-like animation/flash and then returns to normal—without navigating away or refreshing.
