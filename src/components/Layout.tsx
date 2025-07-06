import StackView from "./StackView";
import Tab from "./Tab";
import TabView from "./TabView";

const Layout = () => {
  const top = parseInt(new URLSearchParams(window.location.search).get("top")?.toString() || "0");
  const bottom = parseInt(new URLSearchParams(window.location.search).get("bottom")?.toString() || "0");

  return (
    <div style={{ paddingTop: top, paddingBottom: bottom }} className="w-full h-screen relative bg-gray-50">
      <div className="w-full h-full">
        <TabView />
      </div>
      <Tab bottom={bottom} />
      <StackView />
    </div>
  )
}

export default Layout