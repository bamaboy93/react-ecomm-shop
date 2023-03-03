import { useParams } from "react-router-dom";
import Details from "../../components/Details/Details";
import Loader from "../../components/Loader/Loader";
import { useGetItemQuery, useGetItemsQuery } from "../../redux/items-slice";

export default function ItemDetails() {
  const { itemId } = useParams();
  const { data: item, isLoading } = useGetItemQuery(itemId);
  const { data: items } = useGetItemsQuery(1);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>{item && <Details item={item.data} items={items} />}</>
      )}
    </>
  );
}
