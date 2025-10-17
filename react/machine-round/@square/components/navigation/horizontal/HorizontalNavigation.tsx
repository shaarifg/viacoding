// src/core/navigation/horizontal/HorizontalNavigation.tsx
import { SquareNavigationItem } from "../navigation.types";
import HorizontalBasicItem from "./components/Basic";
import HorizontalBranchItem from "./components/HorizontalBranchItem";
import HorizontalSpacerItem from "./components/HorizontalSpacerItem";
import "./HorizontalNavigation.scss";

interface Props {
  navigation: SquareNavigationItem[];
  name?: string;
}

export const HorizontalNavigation = ({ navigation, name }: Props) => {
  return (
    <div className="square-horizontal-navigation-wrapper">
      {navigation.map((item, idx) => {
        // Skip hidden
        if (item.hidden && item.hidden(item)) return null;

        switch (item.type) {
          case "basic":
            return (
              <HorizontalBasicItem
                key={item.id || idx}
                item={item}
                name={name}
              />
            );
          case "aside":
          case "collapsable":
          case "group":
            return (
              <HorizontalBranchItem
                key={item.id || idx}
                item={item}
                name={name}
              />
            );
          case "spacer":
          case "divider":
            return (
              <HorizontalSpacerItem
                key={item.id || idx}
                item={item}
                name={name}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};
