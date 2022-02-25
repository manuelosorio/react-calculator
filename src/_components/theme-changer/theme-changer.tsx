import { ComponentProps, CSSProperties, HTMLAttributes, useEffect, useState } from "react";
import { Slider } from "../slider/slider";
import { Theme } from "../../helper/theme";

export function ThemeChanger(props: ComponentProps<any>) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? Theme.DEFAULT)
  const handleChange = (e: any) => {
    return setTheme((): any => {
      const value: number = Number(e.target.value)
      switch (value) {
        case (2): return Theme.DARK;
        case (1): return Theme.LIGHT;
        case (0):
        default: return Theme.DEFAULT
      }
    })
  }
  let sliderValue = theme === Theme.DARK ? 2 : theme === Theme.LIGHT ? 1 : 0;
  useEffect(() => {
    document.body.className=`theme--${theme}`
    localStorage.setItem("theme", theme);
  }, [theme]);
  const fix: Partial<any | HTMLAttributes<CSSProperties>> = {
    display: "flex",
    justifyContent: "flex-end",
    width: "15%",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "flex-end",
}

  return (
    <div style={fix}>
      <span>Theme</span>
      <Slider
        min={0}
        max={2}
        step={1}
        value={1}
        defaultValue={sliderValue}
        handleChange={handleChange}
      />
    </div>
  )

}
