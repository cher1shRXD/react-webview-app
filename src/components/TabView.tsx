import Home from "../screens/tabs/Home";
import { useNavigationStore } from "../stores/useNavigationStore"

const TabView = () => {
  const { tab } = useNavigationStore();

  switch(tab){
    case "home": return <Home />;
    case "bookmark": return <>북마크</>;
    case "setting": return <>설정</>;
    case "profile": return <>프로필</>;
    case "search": return <>검색</>;
  }
}

export default TabView