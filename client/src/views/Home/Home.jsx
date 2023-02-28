import { useGetItemsQuery } from "../../redux/items-slice";
import ItemsList from "../../components/ItemsList/ItemsList";
import MainCarousel from "../../components/MainCarousel/MainCrousel";
import Loader from "../../components/Loader/Loader";
import ButtonUp from "../../components/ButtonUp/ButtonUp";

export default function Home() {
  const { data, isLoading } = useGetItemsQuery();

  return (
    <>
      <MainCarousel />
      {data && <>{isLoading ? <Loader /> : <ItemsList items={data.data} />}</>}
      <ButtonUp />
    </>
  );
}
