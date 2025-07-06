import StackScreen from "../../components/StackScreen"
import { useNavigationStore } from "../../stores/useNavigationStore"

const DetailStack = () => {
  const { push } = useNavigationStore();

  return (
    <StackScreen>
      <div onClick={() => push("detaildetail")}>
        hihi
      </div>
    </StackScreen>
  )
}

export default DetailStack