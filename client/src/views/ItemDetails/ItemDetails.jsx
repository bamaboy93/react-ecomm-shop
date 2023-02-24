import { useParams } from "react-router-dom";
import Details from "../../components/Details/Details";
import { useGetItemQuery } from "../../redux/items-slice";

export default function ItemDetails() {
  const { itemId } = useParams();
  const { data } = useGetItemQuery(itemId);

  return <>{data && <Details item={data.data} />}</>;
}
