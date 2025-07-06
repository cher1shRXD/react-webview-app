import DetailDetailStack from "../screens/stacks/DetailDetailStack";
import DetailStack from "../screens/stacks/DetailStack";
import { useNavigationStore } from "../stores/useNavigationStore"

const StackView = () => {
  const { stack } = useNavigationStore();

  if(stack.length === 0) null;

  return(
    <>
      {
        stack.map(stack => {
          switch(stack) {
            case "detail": return <DetailStack />
            case "detaildetail": return <DetailDetailStack />
          }
        })
      }
    </>
  )
}

export default StackView