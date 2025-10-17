import { To } from "react-router-dom";

export interface SquareNavigationItem {
  id?: string;
  title?: string;
  subtitle?: string;
  type: "aside" | "basic" | "collapsable" | "divider" | "group" | "spacer";
  hidden?: (item: SquareNavigationItem) => boolean;
  active?: boolean;
  disabled?: boolean;
  tooltip?: string;
  link?: To;
  fragment?: string;
  preserveFragment?: boolean;
  queryParams?: Record<string, any> | null;
  queryParamsHandling?: "merge" | "preserve" | null;
  externalLink?: boolean;
  target?: "_blank" | "_self" | "_parent" | "_top" | string;
  exactMatch?: boolean;
  isActiveMatchOptions?: { end?: boolean; caseSensitive?: boolean };
  function?: (item: SquareNavigationItem) => void;
  classes?: {
    title?: string;
    subtitle?: string;
    icon?: string;
    wrapper?: string;
  };
  icon?: string;
  badge?: {
    title?: string;
    classes?: string;
  };
  children?: SquareNavigationItem[];
  meta?: any;
}
