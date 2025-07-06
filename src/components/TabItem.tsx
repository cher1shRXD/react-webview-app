import { useNavigationStore } from "../stores/useNavigationStore"
import type { TabItemProps } from "../types/props/TabItemProps"

const TabItem = ({ href, icon, name }: TabItemProps) => {
  const { tab, navigate } = useNavigationStore();

  return (
    <div className={`w-[54px] flex flex-col items-center gap-0.5 p-2 rounded-xl transition-colors ${tab === href ? "text-black" : "bg-white text-gray-400"}`} onClick={() => navigate(href)}>
      {icon}
      <p className="text-xs">{name}</p>
    </div>
  )
}

export default TabItem