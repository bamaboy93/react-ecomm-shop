import { useParams } from "react-router-dom";
import Details from "../../components/Details/Details";
import Loader from "../../components/Loader/Loader";
import { useGetItemQuery } from "../../redux/items-slice";

export default function ItemDetails() {
  const { itemId } = useParams();
  const { data, isLoading } = useGetItemQuery(itemId);

  return (
    <>{isLoading ? <Loader /> : <>{data && <Details item={data.data} />}</>}</>
  );
}
