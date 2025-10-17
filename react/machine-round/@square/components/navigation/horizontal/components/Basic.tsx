import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";
import { SquareNavigationItem } from "../../navigation.types";
import { useSquareNavigation } from "../../SquareNavigationContext";
import "./HorizontalBasicItem.scss";

interface Props {
  item: SquareNavigationItem;
  name?: string;
}

export default function HorizontalBasicItem({ item, name }: Props) {
  const nav = useSquareNavigation();

  const handleClick = () => {
    if (item.function) item.function(item);
  };

  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    // Disabled
    if (item.disabled)
      return (
        <div
          className={`square-horizontal-item disabled ${
            item.classes?.wrapper || ""
          }`}
        >
          {children}
        </div>
      );

    // External link
    if (item.link && item.externalLink)
      return (
        <a
          href={item.link.toString()}
          target={item.target || "_self"}
          rel="noopener noreferrer"
          className={`square-horizontal-item ${item.classes?.wrapper || ""}`}
          onClick={handleClick}
        >
          {children}
        </a>
      );

    // Internal link
    if (item.link)
      return (
        <Link
          to={item.link}
          className={`square-horizontal-item ${item.classes?.wrapper || ""}`}
          onClick={handleClick}
        >
          {children}
        </Link>
      );

    // No link (function only)
    return (
      <div
        className={`square-horizontal-item ${item.classes?.wrapper || ""}`}
        onClick={handleClick}
      >
        {children}
      </div>
    );
  };

  return (
    <Tooltip title={item.tooltip || ""} placement="bottom" arrow>
      <div className="square-horizontal-navigation-item-wrapper">
        <Wrapper>
          {/* Icon */}
          {item.icon && (
            <i
              className={`square-horizontal-item-icon ${
                item.classes?.icon || ""
              } ${item.icon}`}
            />
          )}

          {/* Title + Subtitle */}
          <div className="square-horizontal-item-title-wrapper">
            <div className="square-horizontal-item-title">
              <span className={item.classes?.title}>{item.title}</span>
            </div>
            {item.subtitle && (
              <div className="square-horizontal-item-subtitle">
                <span className={item.classes?.subtitle}>{item.subtitle}</span>
              </div>
            )}
          </div>

          {/* Badge */}
          {item.badge && (
            <div className="square-horizontal-item-badge">
              <div
                className={`square-horizontal-item-badge-content ${
                  item.badge.classes || ""
                }`}
              >
                {item.badge.title}
              </div>
            </div>
          )}
        </Wrapper>
      </div>
    </Tooltip>
  );
}
