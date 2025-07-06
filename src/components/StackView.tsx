import DetailStack from "../screens/stacks/DetailStack";
import { useNavigationStore } from "../stores/useNavigationStore"

const StackView = () => {
  const { stack } = useNavigationStore();

  if(stack.length === 0) null;

  for(const s of stack) {
    switch(s) {
      case "detail": return <DetailStack />
    }
  }
}

export default StackView