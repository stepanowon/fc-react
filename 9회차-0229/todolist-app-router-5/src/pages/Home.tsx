import { useDispatch, useSelector } from "react-redux";
import MyTime from "./MyTime";
import { AppDispatch, RootStatesType } from "../redux/AppStore";
import TimeActionCreator from "../redux/TimeActionCreator";

type PropsType = {  currentTime: Date;  changeTime: (currentTime: Date) => void; };

const Home = ({ currentTime, changeTime }: PropsType) => {
  return (
    <div className="card card-body">
      <h2>Home</h2>
      <MyTime currentTime={currentTime} changeTime={changeTime} />
    </div>
  );
};

const HomeContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentTime = useSelector((state: RootStatesType)=> state.home.currentTime);
  const changeTime = (currentTime: Date)=>dispatch(TimeActionCreator.changeTime({currentTime}));
  return <Home currentTime={currentTime} changeTime={changeTime} />
}
export default HomeContainer;
export { Home };
