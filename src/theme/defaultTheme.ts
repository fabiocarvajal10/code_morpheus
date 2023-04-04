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
        fontSize: "3.75rem",
        fontWeight: "normal",
        lineHeight: "1.15",
      },
      h4: {
        fontSize: "2.5rem",
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
    Table: {
      styles(theme: any) {
        return {
          root: {
            backgroundColor: theme.white,
            borderRadius: 4,
            boxShadow: theme.shadows.xs,

            "&& th": {
              // fontFamily: 'Venice Serif',
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: 12,
              lineHeight: "20px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              height: "44px",
              padding: `${theme.spacing.xs + 2}px ${
                theme.spacing.xs + 4
              }px`,
            },

            "&& th:first-of-type": {
              paddingLeft: (theme.spacing.xs + 2) * 2,
            },

            "&& td:first-of-type": {
              paddingLeft: (theme.spacing.xs + 2) * 2,
            },

            "&& th:last-child": {
              paddingRight: (theme.spacing.xs + 2) * 2,
            },

            "&& td:last-child": {
              paddingRight: (theme.spacing.xs + 2) * 2,
            },

            "&& td": {
              padding: `${theme.spacing.xs + 2}px ${
                theme.spacing.xs + 4
              }px`,
            },

            "&& th[align='right']": {
              textAlign: "right",
            },
          },
        }
      },
    },
    Tabs: {
      styles(theme: any) {
        return {
          tabsList: {
            gap: "32px",
          },
          tab: {
            padding: 0,
            "&:hover": {
              backgroundColor: "transparent",
              color: theme.colors.dark[8],
            },
            "&[data-active] > div": {
              color: theme.primaryColor,
            },
          },
          tabLabel: {
            padding: "0px 4px 16px",
            color: theme.colors.dark[4],
            "&:hover": {
              color: theme.colors.dark[8],
            },
          },
        }
      },
    },
    RichTextEditor: {
      styles: {
        toolbar: {
          "& svg": {
            strokeWidth: 2,
          },
        },
        toolbarGroup: {
          margin: 0,
          paddingLeft: 10,
          paddingRight: 10,
          borderRight: "1px solid #E5E7EB",
          "&:first-of-type": {
            paddingLeft: 0,
          },
          "&:last-child": {
            borderRight: "none",
          },
        },
        toolbarControl: {
          border: "none",
        },
      },
    },
    NumberInput: {
      styles: {
        rightSection: {
          paddingRight: 8,
        },
      },
    },
    ActionIcon: {
      defaultProps: {
        size: "xl",
      },
      styles: {
        root: {
          height: "36px",
          width: "36px",
          minHeight: "36px",
          minWidth: "36px",
        },
      },
    },
    Accordion: {
      styles: {
        label: {
          color: "dark.8",
        },
        control: {
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    Skeleton: {
      styles(theme: any) {
        return {
          root: {
            "&::after": {
              background: `${theme.colors.dark[4]} !important`,
            },
          },
        }
      },
    },
    Select: {
      styles(theme: any) {
        return {
          disabled: {
            color: `${theme.colors.dark[9]} !important`,
          },
        }
      },
    },
  },
  black: "#25262B",
  // custom properties
  other: {
    body: {
      backgroundColor: "#F4F1EF",
    },
  },
}