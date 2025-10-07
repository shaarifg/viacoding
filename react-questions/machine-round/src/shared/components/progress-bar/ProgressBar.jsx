import { useEffect, useState } from "react";

export default function ProgressBar({
  /** External value (controlled). If null → component manages itself */
  value: controlledValue = null,
  /** Step size (self-managed mode) */
  step = 10,
  /** Interval in ms (self-managed mode) */
  interval = 1000,
  /** Max value */
  max = 100,
  /** Callback when finished */
  onComplete,
  /** Promise or async task to track (optional) */
  taskPromise = null,
}) {
  const [internalValue, setInternalValue] = useState(0);
  const isControlled = controlledValue !== null;
  const value = isControlled ? controlledValue : internalValue;

  // ─────────────── Self-managed mode ───────────────
  useEffect(() => {
    if (isControlled || value >= max) return;

    const timer = setTimeout(() => {
      setInternalValue((prev) => {
        const next = Math.min(prev + step, max);
        if (next >= max && onComplete) onComplete();
        return next;
      });
    }, interval);

    return () => clearTimeout(timer);
  }, [value, isControlled, step, interval, max, onComplete]);

  // ─────────────── Promise-based tracking ───────────────
  useEffect(() => {
    if (!taskPromise) return;

    let active = true;
    // Simulate progress updates while task runs
    const tick = () => {
      setInternalValue((prev) => Math.min(prev + step, max - 1));
    };
    const timer = setInterval(tick, interval);

    taskPromise.finally(() => {
      if (!active) return;
      clearInterval(timer);
      setInternalValue(max); // jump to full
      if (onComplete) onComplete();
    });

    return () => {
      active = false;
      clearInterval(timer);
    };
  }, [taskPromise, step, interval, max, onComplete]);

  // ─────────────── Render ───────────────
  return (
    <div className="p-4 space-y-2">
      <span className="block text-sm font-medium text-primary-700">
        Progress: {value}%
      </span>
      <progress
        className="w-full text-primary-200 h-4"
        max={max}
        value={value}
      />
    </div>
  );
}
