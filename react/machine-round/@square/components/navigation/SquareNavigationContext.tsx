import React, {
  createContext,
  useContext,
  useRef,
  useCallback,
  useMemo,
  ReactNode,
} from "react";
import { SquareNavigationItem } from "./navigation.types";

type NavigationRegistry = Map<string, any>;
type NavigationStore = Map<string, SquareNavigationItem[]>;

interface ISquareNavigationContext {
  registerComponent: (name: string, ref: any) => void;
  deregisterComponent: (name: string) => void;
  getComponent: <T = any>(name: string) => T | undefined;
  storeNavigation: (key: string, nav: SquareNavigationItem[]) => void;
  getNavigation: (key: string) => SquareNavigationItem[];
  deleteNavigation: (key: string) => void;
  getFlatNavigation: (
    nav: SquareNavigationItem[],
    flat?: SquareNavigationItem[]
  ) => SquareNavigationItem[];
  getItem: (
    id: string,
    nav: SquareNavigationItem[]
  ) => SquareNavigationItem | null;
  getItemParent: (
    id: string,
    nav: SquareNavigationItem[],
    parent?: SquareNavigationItem[] | SquareNavigationItem
  ) => SquareNavigationItem[] | SquareNavigationItem | null;
}

const SquareNavigationContext = createContext<ISquareNavigationContext | null>(
  null
);

export const SquareNavigationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const componentRegistry = useRef<NavigationRegistry>(new Map());
  const navigationStore = useRef<NavigationStore>(new Map());

  // ─── Component registry ────────────────────────────────────────────
  const registerComponent = useCallback((name: string, ref: any) => {
    componentRegistry.current.set(name, ref);
  }, []);

  const deregisterComponent = useCallback((name: string) => {
    componentRegistry.current.delete(name);
  }, []);

  const getComponent = useCallback(
    <T,>(name: string): T | undefined =>
      componentRegistry.current.get(name) as T | undefined,
    []
  );

  // ─── Navigation store ──────────────────────────────────────────────
  const storeNavigation = useCallback(
    (key: string, nav: SquareNavigationItem[]) => {
      navigationStore.current.set(key, nav);
    },
    []
  );

  const getNavigation = useCallback(
    (key: string) => navigationStore.current.get(key) ?? [],
    []
  );

  const deleteNavigation = useCallback((key: string) => {
    navigationStore.current.delete(key);
  }, []);

  // ─── Helpers ──────────────────────────────────────────────────────
  const getFlatNavigation = useCallback(
    (
      navigation: SquareNavigationItem[],
      flat: SquareNavigationItem[] = []
    ): SquareNavigationItem[] => {
      for (const item of navigation) {
        if (item.type === "basic") {
          flat.push(item);
          continue;
        }
        if (
          item.type === "aside" ||
          item.type === "collapsable" ||
          item.type === "group"
        ) {
          if (item.children) getFlatNavigation(item.children, flat);
        }
      }
      return flat;
    },
    []
  );

  const getItem = useCallback(
    (id: string, nav: SquareNavigationItem[]): SquareNavigationItem | null => {
      for (const item of nav) {
        if (item.id === id) return item;
        if (item.children) {
          const found = getItem(id, item.children);
          if (found) return found;
        }
      }
      return null;
    },
    []
  );

  const getItemParent = useCallback(
    (
      id: string,
      nav: SquareNavigationItem[],
      parent?: SquareNavigationItem[] | SquareNavigationItem
    ): SquareNavigationItem[] | SquareNavigationItem | null => {
      for (const item of nav) {
        if (item.id === id) return parent ?? null;
        if (item.children) {
          const found = getItemParent(id, item.children, item);
          if (found) return found;
        }
      }
      return null;
    },
    []
  );

  const value = useMemo<ISquareNavigationContext>(
    () => ({
      registerComponent,
      deregisterComponent,
      getComponent,
      storeNavigation,
      getNavigation,
      deleteNavigation,
      getFlatNavigation,
      getItem,
      getItemParent,
    }),
    [
      registerComponent,
      deregisterComponent,
      getComponent,
      storeNavigation,
      getNavigation,
      deleteNavigation,
      getFlatNavigation,
      getItem,
      getItemParent,
    ]
  );

  return (
    <SquareNavigationContext.Provider value={value}>
      {children}
    </SquareNavigationContext.Provider>
  );
};

export const useSquareNavigation = () => {
  const ctx = useContext(SquareNavigationContext);
  if (!ctx) throw new Error("useSquareNavigation must be used within provider");
  return ctx;
};
