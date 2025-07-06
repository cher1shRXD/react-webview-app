import { useNavigationStore } from "../../stores/useNavigationStore"

const Home = () => {
  const { push } = useNavigationStore();
  return (
    <div>
      홈
      <p onClick={() => push({ href: "detail", params: ["1", "2", "3"] })}>스택 열기</p>
    </div>
  )
}

export default Home