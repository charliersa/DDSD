# 繪圖軟體資訊整合 · Drawing & Design Software Directory (React)

由原本的單檔 DC 元件（`繪圖軟體導覽.dc.html`）改寫成 **Vite + React** 架構。

## 啟動

```bash
cd react-app
npm install
npm run dev      # 開發伺服器
npm run build    # 打包到 dist/
npm run preview  # 預覽打包結果
```

## 架構

```
react-app/
├─ index.html              入口 HTML（載入字型 + #root）
├─ public/icon/            軟體 Logo 圖示（由原 icon/ 複製而來）
└─ src/
   ├─ main.jsx             React 進入點
   ├─ App.jsx              組合各區塊
   ├─ useDirectory.js      狀態與衍生資料的核心 hook（原 renderVals / buildTree / decorate）
   ├─ styleHelpers.js      行內樣式產生器（原 dot / chipStyle / segStyle…）
   ├─ styles.css           全域樣式與 :hover / :focus（原 <style> + style-hover）
   ├─ data/
   │  └─ tools.js          TOOLS / CATS / PRICES / PLATS 與 Logo 對照表
   └─ components/
      ├─ Header.jsx        標題列
      ├─ Toolbar.jsx       搜尋 + 價格篩選 + 計數
      ├─ Sidebar.jsx       分類導覽樹（可收合）
      ├─ Directory.jsx     依平台/分類分組的工具列表
      ├─ ToolRow.jsx       單一工具列
      ├─ DetailDrawer.jsx  右側詳情側欄
      ├─ CompareTray.jsx   底部比較托盤
      ├─ CompareModal.jsx  比較彈窗
      └─ Logo.jsx          Logo 顯示（取代原 image-slot / x-import）
```

## 對應關係

| 原始 (DC)                         | React                                  |
| --------------------------------- | -------------------------------------- |
| `state` + `setState`              | `useState` (集中於 `useDirectory.js`)  |
| `renderVals()`                    | `useDirectory()` 回傳的 view-model     |
| `<sc-for>` / `<sc-if>`            | `.map()` / 條件渲染                    |
| `style="{{ ... }}"`               | `style={{ ... }}` 物件                 |
| `style-hover` 屬性                | `styles.css` 內的 `:hover` 類別        |
| `<x-import image-slot>`           | `Logo.jsx` + `LOGO_BY_ID` 對照表       |
| props（accent/density/showRowDesc）| `App` 的 props（可在 `main.jsx` 帶入） |

可調整的外觀參數仍由 props 控制：`accent`（主色）、`density`（`comfortable` / `compact`）、`showRowDesc`（是否顯示列描述）。在 `src/main.jsx` 內 `<App accent="#1B7A5A" density="compact" />` 即可覆寫。
