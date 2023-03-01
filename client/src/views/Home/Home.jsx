import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetItemsQuery } from "../../redux/items-slice";
import ItemsList from "../../components/ItemsList/ItemsList";
import MainCarousel from "../../components/MainCarousel/MainCrousel";
import Loader from "../../components/Loader/Loader";
import ButtonUp from "../../components/ButtonUp/ButtonUp";
import MainPagination from "../../components/MainPagination/MainPagination";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page");
  const [page, setPage] = useState(Number(currentPage));
  const { data, isLoading } = useGetItemsQuery(page);

  useEffect(() => {
    searchParams.set("page", page);
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams, page]);

  const handleChangePage = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 700, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <MainCarousel />

      {data && <>{isLoading ? <Loader /> : <ItemsList items={data.data} />}</>}
      {data && (
        <MainPagination
          handleChangePage={handleChangePage}
          page={page}
          totalPages={data.meta.pagination.pageCount}
        />
      )}

      <ButtonUp />
    </>
  );
}
