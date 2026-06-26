import useDirectory from './useDirectory.js'
import useIsMobile from './useIsMobile.js'
import Header from './components/Header.jsx'
import Toolbar from './components/Toolbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Directory from './components/Directory.jsx'
import DetailDrawer from './components/DetailDrawer.jsx'
import CompareTray from './components/CompareTray.jsx'
import CompareModal from './components/CompareModal.jsx'

// `props` mirror the original DC component props ($preview/accent/density/showRowDesc).
export default function App(props) {
  const isMobile = useIsMobile()
  const vm = useDirectory({ ...props, isMobile })

  return (
    <div style={vm.rootStyle}>
      <Header totalCount={vm.totalCount} isMobile={isMobile} />

      <Toolbar
        search={vm.search}
        onSearch={vm.onSearch}
        priceOpts={vm.priceOpts}
        hasFilters={vm.hasFilters}
        onClearFilters={vm.onClearFilters}
        shownCount={vm.shownCount}
        totalCount={vm.totalCount}
      />

      <div style={{ maxWidth: 1140, margin: '0 auto', padding: isMobile ? '4px 14px 120px' : '6px 28px 160px', display: 'flex', gap: isMobile ? 12 : 34, alignItems: 'flex-start' }}>
        <Sidebar navOpen={vm.navOpen} tree={vm.tree} onToggleNav={vm.onToggleNav} isMobile={isMobile} />
        <Directory groups={vm.groups} isEmpty={vm.isEmpty} isMobile={isMobile} />
      </div>

      <DetailDrawer tool={vm.detailTool} onClose={vm.onCloseDetail} />

      <CompareTray
        compareCount={vm.compareCount}
        compareChips={vm.compareChips}
        canCompare={vm.canCompare}
        onClearCompare={vm.onClearCompare}
        onOpenCompare={vm.onOpenCompare}
      />

      <CompareModal
        open={vm.compareOpen}
        compareCount={vm.compareCount}
        compareTools={vm.compareTools}
        onClose={vm.onCloseCompare}
      />
    </div>
  )
}
