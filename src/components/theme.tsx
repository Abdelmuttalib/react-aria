import { useTheme } from "next-themes";

import { MoonIcon, SunIcon } from "lucide-react";

import { type ThemeColorType, useThemeColor } from "@/hooks/use-theme-color";
import { cn } from "@/lib/utils";
import { useMounted } from "@/hooks/use-mounted";
import { PRIMARY_THEME_COLORS } from "@/lib/theme-colors";

export function UICustomizer({ className }: { className?: string }) {
  if (process.env.NEXT_PUBLIC_NODE_ENV === "production") return null;

  return (
    <div
      className={cn(
        "fixed right-1 bottom-1 z-50 mx-auto flex flex-col gap-y-2 w-fit items-center justify-center rounded-lg border px-1 py-1.5 text-sm",
        className
      )}
    >
      <ThemeColorSelect />
      <ThemeSwitcher />
    </div>
  );
}

export default function ThemeSwitcher({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  const mounted = useMounted();

  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={cn("text-foreground-light sm:inline-flex rounded", className)}
    >
      {theme === "light" ? (
        <SunIcon className="w-5" />
      ) : (
        <MoonIcon className="w-5" />
      )}
    </button>
  );
}

export function ThemeColorSelect() {
  const [themeColor, setThemeColor] = useThemeColor();

  return (
    <div className="flex flex-col gap-2">
      {PRIMARY_THEME_COLORS?.map(
        ({ name, color }: { name: ThemeColorType; color: string }) => (
          <button
            key={`${name}`}
            onClick={() => {
              setThemeColor({
                colorName: name,
              });
            }}
            className={cn(
              //  px-3 py-2.5
              "flex w-full items-center rounded-sm font-medium capitalize text-foreground",
              {
                "ring-2 ring-primary ring-offset-2":
                  name === themeColor.colorName,
              }
              // {
              //   "bg-primary-100 text-foreground":
              //     name === themeColor.colorName,
              //   "hover:bg-accent-hover": name !== themeColor.colorName,
              // }
            )}
          >
            <span
              style={{
                backgroundColor: color,
              }}
              className={cn("h-3 w-3 rounded-sm")}
            ></span>
            {/* {name == themeColor.colorName && (
              <CheckIcon className="absolute right-2 h-4 w-4 text-current" />
            )} */}
          </button>
        )
      )}
    </div>
  );
}

export function ThemeColorSelect2() {
  const [themeColor, setThemeColor] = useThemeColor();

  return (
    <div className="relative flex flex-wrap gap-x-1">
      {PRIMARY_THEME_COLORS?.map(
        ({ name, color }: { name: ThemeColorType; color: string }) => (
          <button
            key={`${name}`}
            onClick={() => {
              setThemeColor({
                colorName: name,
              });
            }}
            className={cn(
              "flex rounded-lg text-sm border-2 items-center p-1.5 font-medium capitalize text-foreground ring-2 ring-offset-1 ring-offset-transparent ring-transparent",
              {
                "border-primary": name === themeColor.colorName,
                "hover:bg-accent-hover": name !== themeColor.colorName,
              }
            )}
          >
            <span
              style={{
                backgroundColor: color,
              }}
              className={cn("h-4 w-4 rounded")}
            ></span>
          </button>
        )
      )}
    </div>
  );
}
