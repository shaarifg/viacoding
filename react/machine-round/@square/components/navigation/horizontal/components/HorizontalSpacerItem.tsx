import { SquareNavigationItem } from "../../navigation.types";
interface Props {
  item: SquareNavigationItem;
  name?: string;
}
export default function HorizontalSpacerItem({ item }: Props) {
  return <div className="square-horizontal-spacer-item">{item.title}</div>;
}
