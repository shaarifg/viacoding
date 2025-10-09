import React, { useEffect, useState } from "react";

type ProgressBarProps = {
  /** External value (controlled). If null → component manages itself */
  value?: number | null;
  /** Step size (self-managed mode) */
  step?: number;
  /** Interval in ms (self-managed mode) */
  interval?: number;
  /** Max value */
  max?: number;
  /** Callback when finished */
  onComplete?: () => void;
  /** Promise or async task to track (optional) */
  taskPromise?: Promise<unknown> | null;
};

 const ProgressBar:React.FC =({
  value: controlledValue = null,
  step = 10,
  interval = 1000,
  max = 100,
  onComplete,
  taskPromise = null,
}: ProgressBarProps)=> {
  const [internalValue, setInternalValue] = useState<number>(0);
  const isControlled = controlledValue !== null;
  const value = isControlled ? controlledValue! : internalValue;

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
    const tick = () => {
      setInternalValue((prev) => Math.min(prev + step, max - 1));
    };
    const timer = setInterval(tick, interval);

    taskPromise.finally(() => {
      if (!active) return;
      clearInterval(timer);
      setInternalValue(max);
      onComplete?.();
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

export default ProgressBar
