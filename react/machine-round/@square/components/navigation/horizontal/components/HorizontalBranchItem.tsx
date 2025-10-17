import { useState, MouseEvent } from "react";
import {
  Menu,
  MenuItem,
  Tooltip,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { ExpandMore, ChevronRight } from "@mui/icons-material";
import { SquareNavigationItem } from "../../navigation.types";
import HorizontalBasicItem from "./Basic";

interface Props {
  item: SquareNavigationItem;
  name?: string;
  child?: boolean;
}

/**
 * Recursively renders dropdown (branch) navigation items.
 * Supports nested groups, basic items, dividers.
 */
export default function HorizontalBranchItem({ item, name, child }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Skip hidden
  if (item.hidden && item.hidden(item)) return null;

  return (
    <>
      {/* ─────────── Trigger Button ─────────── */}
      <Tooltip title={item.tooltip || ""} placement="bottom" arrow>
        <div
          className={`square-horizontal-branch-trigger ${
            open ? "active" : ""
          } ${item.active ? "active-forced" : ""} ${
            item.classes?.wrapper || ""
          }`}
          onClick={handleOpen}
        >
          {/* Trigger Template */}
          <div className="square-horizontal-branch-content">
            {/* Icon */}
            {item.icon && (
              <ListItemIcon className={`icon ${item.classes?.icon || ""}`}>
                <i className={item.icon}></i>
              </ListItemIcon>
            )}

            {/* Title & Subtitle */}
            <ListItemText
              primary={
                <span className={item.classes?.title}>{item.title}</span>
              }
              secondary={
                item.subtitle ? (
                  <span className={`subtitle ${item.classes?.subtitle || ""}`}>
                    {item.subtitle}
                  </span>
                ) : null
              }
            />

            {/* Expand Indicator */}
            {child ? (
              <ChevronRight fontSize="small" />
            ) : (
              <ExpandMore fontSize="small" />
            )}
          </div>
        </div>
      </Tooltip>

      {/* ─────────── Dropdown Menu ─────────── */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        className="square-horizontal-menu"
      >
        {item.children?.map((childItem, idx) => {
          // skip hidden
          if (childItem.hidden && childItem.hidden(childItem)) return null;

          switch (childItem.type) {
            case "basic":
              return (
                <MenuItem
                  key={childItem.id || idx}
                  disabled={childItem.disabled}
                  onClick={handleClose}
                  className="square-horizontal-menu-item"
                >
                  <HorizontalBasicItem item={childItem} name={name} />
                </MenuItem>
              );

            case "aside":
            case "collapsable":
            case "group":
              return (
                <MenuItem
                  key={childItem.id || idx}
                  disabled={childItem.disabled}
                  className="square-horizontal-menu-item has-children"
                >
                  <HorizontalBranchItem
                    item={childItem}
                    name={name}
                    child={true}
                  />
                </MenuItem>
              );

            case "divider":
              return <Divider key={childItem.id || idx} />;

            default:
              return null;
          }
        })}
      </Menu>
    </>
  );
}
