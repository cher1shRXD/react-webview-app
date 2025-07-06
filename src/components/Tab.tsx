import { BookMarked, Home, Search, Settings, User2Icon } from "lucide-react";
import type { TabProps } from "../types/props/TabProps"
import TabItem from "./TabItem"

const Tab = ({ bottom }: TabProps) => {

  return (
    <div className="absolute border-t border-gray-200 bg-white w-full px-4 py-2 flex items-center justify-evenly bottom-0" style={{ paddingBottom: bottom || 8 }}>
      <TabItem href="bookmark" icon={<BookMarked size={20} />} name="북마크" />
      <TabItem href="search" icon={<Search size={20} />} name="검색" />
      <TabItem href="home" icon={<Home size={20} />} name="홈" />
      <TabItem href="setting" icon={<Settings size={20} />} name="설정" />
      <TabItem href="profile" icon={<User2Icon size={20} />} name="프로필" />
    </div>
  )
}

export default Tab