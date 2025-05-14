import { defineFontProvider } from "unifont"

// รายชื่อฟอนต์ที่สามารถใช้ได้
const resolvableFonts = new Set<string>([
  "THSarabunPSK",
  "Kanit",
])

export default defineFontProvider("custom", () => {
  return {
    async resolveFont(fontFamily) {
      if (!resolvableFonts.has(fontFamily)) {
        return
      }

      return {
        fonts: [
          {
            src: [
              {
                url: `/fonts/${fontFamily}-Regular.woff2`,
                format: "woff2",
              },
            ],
            weight: "400",
            style: "normal",
          },
          {
            src: [
              {
                url: `/fonts/${fontFamily}-Bold.woff2`,
                format: "woff2",
              },
            ],
            weight: "700",
            style: "normal",
          },
          {
            src: [
              {
                url: `/fonts/${fontFamily}-Italic.woff2`,
                format: "woff2",
              },
            ],
            weight: "400",
            style: "italic",
          },
          {
            src: [
              {
                url: `/fonts/${fontFamily}-BoldItalic.woff2`,
                format: "woff2",
              },
            ],
            weight: "700",
            style: "italic",
          },
        ],
      }
    },
  }
})