// Themes/theme.d.ts (create a .d.ts file to define types)

type Color = string | number; // You can use 'string' or 'number' depending on how your colors are represented

type Theme = {
  name: string;
  anchor: Color;
  anchorVisited: Color;
  borderDark: Color;
  borderDarkest: Color;
  borderLight: Color;
  borderLightest: Color;
  canvas: Color;
  canvasText: Color;
  canvasTextDisabled: Color;
  canvasTextDisabledShadow: Color;
  canvasTextInvert: Color;
  checkmark: Color;
  checkmarkDisabled: Color;
  desktopBackground: Color;
  flatDark: Color;
  flatLight: Color;
  focusSecondary: Color;
  headerBackground: Color;
  headerNotActiveBackground: Color;
  headerNotActiveText: Color;
  headerText: Color;
  hoverBackground: Color;
  material: Color;
  materialDark: Color;
  materialText: Color;
  materialTextDisabled: Color;
  materialTextDisabledShadow: Color;
  materialTextInvert: Color;
  progress: Color;
  tooltip: Color;
};

export default Theme;
