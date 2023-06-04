import { primary } from "./color"

export default {
  colorScheme: "light",
  colors: primary,
  primaryColor: "green",
  cursorType: "pointer",
  fontFamily: 'Nunito Sans',
  headings: {
    fontFamily: 'Roboto Condensed Bold',
    sizes: {
      h1: {
        fontSize: "5.875rem",
        fontWeight: "normal",
        lineHeight: "1.15",
      },
      h2: {
        fontSize: "3.75rem",
        fontWeight: "bold",
        lineHeight: "1.15",
      },
      h3: {
        fontSize: "2.95rem",
        fontWeight: "normal",
        lineHeight: "1.15",
      },
      h4: {
        fontSize: "1.95rem",
        fontWeight: "normal",
        lineHeight: "1.25",
      },
      h5: {
        fontSize: "1.375rem",
        fontWeight: "normal",
        lineHeight: "1.5",
      },
      h6: {
        fontSize: "1.15rem",
        fontWeight: "normal",
        lineHeight: "1.25",
      },
    },
  },
  fontSizes: {
    xs: '0.875rem',
    sm: '1rem',
    md: '1.25rem',
    lg: '1.5rem',
    xl: '1.75rem',
  },
  spacing: { xs: 8, sm: 16, md: 24, lg: 32, xl: 40 },
  breakpoints: { xl: 1320 },
  components: {
    Container: {
      styles: {
        root: {
          boxSizing: "content-box",
        },
      },
    },
    // Title: {
    //   styles: {
    //     root: {
    //       textTransform: "uppercase",
    //     },
    //   },
    // },
    NavLink: {
      styles(theme: any) {
        return {
          root: {
            color: theme.colors.dark[9],
          },
          label: {
            fontSize: 13,
          },
        }
      },
    },
    Button: {
      defaultProps: {
        color: "green.9",
      },
      styles: {
        label: {
          fontFamily: 'Roboto',
        },
      },
    },
    Switch: {
      defaultProps: {
        color: "green.9",
      },
      styles: {
        body: {
          display: "flex",
        },
        track: {
          borderWidth: 0,
          backgroundColor: "rgba(41, 59, 42, 0.1);",
          width: 38,
        },
        thumb: {
          borderWidth: 0,
        },
        label: {
          paddingLeft: 12,
        },
      },
    },
  },
  other: {
    body: {
      backgroundColor: "#F4F1EF",
    },
  },
}