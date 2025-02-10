import { useCallback, useEffect, useMemo, useState } from "react";

export function useBroadcastChannel() {
  const [slide, setSlide] = useState(0);
  const channel = useMemo(() => new BroadcastChannel("comms"), []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    function handleMessage(evt: MessageEvent<number>) {
      setSlide(evt.data);
    }

    channel.addEventListener("message", handleMessage);

    return () => channel.removeEventListener("message", handleMessage);
  }, [channel]);

  const sendMessage = useCallback(
    (index: number) => {
      channel.postMessage(index);
    },
    [channel],
  );

  return {
    slide,
    setSlide: sendMessage,
  };
}
