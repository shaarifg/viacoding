import { useState } from "react";
import { Drawer, IconButton, Box, Typography, Button } from "@mui/material";
import { Settings as SettingsIcon } from "@mui/icons-material";
import { useLayout } from "@/context/LayoutContext";

export default function Settings() {
  const [open, setOpen] = useState(false);
  const { layout, setLayout } = useLayout();

  return (
    <>
      {/* ⚙️ Floating Settings Button */}
      <IconButton
        onClick={() => setOpen(true)}
        color="primary"
        className="!fixed right-6 top-1/2 -translate-y-1/2 z-50 bg-primary text-white hover:bg-primary/90 animate-spin-slow"
        sx={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          animation: "spin 8s linear infinite",
          "@keyframes spin": {
            "0%": { transform: "translateY(-50%) rotate(0deg)" },
            "100%": { transform: "translateY(-50%) rotate(360deg)" },
          },
        }}
      >
        <SettingsIcon />
      </IconButton>

      {/* 🧭 Settings Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          className: "w-72 p-6 bg-white border-l border-gray-200",
        }}
      >
        <Box>
          <Typography variant="h6" className="font-semibold mb-4">
            ⚙️ App Settings
          </Typography>

          <Typography
            variant="subtitle2"
            className="text-gray-600 uppercase tracking-wider mb-2"
          >
            Layout
          </Typography>

          <Box className="flex flex-col gap-2">
            {["default", "compact", "modern"].map((l) => (
              <Button
                key={l}
                variant={layout === l ? "contained" : "outlined"}
                color="primary"
                className={`normal-case rounded-none ${
                  layout === l
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "border-gray-300 text-gray-700"
                }`}
                onClick={() => setLayout(l)}
              >
                {l.charAt(0).toUpperCase() + l.slice(1)} Layout
              </Button>
            ))}
          </Box>

          <Box className="mt-6 text-sm text-gray-500">
            <p>More customization options coming soon...</p>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
