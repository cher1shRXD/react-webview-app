import StackScreen from "../../components/StackScreen"
import { useNavigationStore } from "../../stores/useNavigationStore"
import type { StackProps } from "../../types/props/StackProps";

const DetailStack = ({ params }: StackProps) => {
  const { push } = useNavigationStore();

  return (
    <StackScreen>
      <div onClick={() => push({ href: "detaildetail" })}>
        hihi
        { 
          params?.map((item, idx)=>(
            <p key={idx}>{item}</p>
          ))
        }
      </div>
    </StackScreen>
  )
}

export default DetailStack