import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export function useHasMounted(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true, // client
    () => false, // server
  );
}
