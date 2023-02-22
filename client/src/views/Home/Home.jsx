import { useGetItemsQuery } from "../../redux/items-slice";
import ItemsList from "../../components/ItemsList/ItemsList";
import MainCarousel from "../../components/MainCarousel/MainCrousel";
import { LinearProgress } from "@mui/material";

export default function Home() {
  const { data, isLoading } = useGetItemsQuery();

  return (
    <>
      <MainCarousel />
      {data && (
        <>
          {isLoading ? (
            <LinearProgress color="secondary" />
          ) : (
            <ItemsList items={data.data} />
          )}
        </>
      )}
    </>
  );
}
