import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getItems } from "../../redux/operations";
import ItemsList from "../../components/ItemsList/ItemsList";
import MainCarousel from "../../components/MainCarousel/MainCrousel";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);
  return (
    <>
      <MainCarousel />
      <ItemsList />
    </>
  );
}
