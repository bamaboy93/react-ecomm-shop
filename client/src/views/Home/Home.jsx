import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetItemsQuery } from "../../redux/items-slice";
import ItemsList from "../../components/ItemsList/ItemsList";
import MainCarousel from "../../components/MainCarousel/MainCrousel";
import Loader from "../../components/Loader/Loader";
import ButtonUp from "../../components/ButtonUp/ButtonUp";
import MainPagination from "../../components/MainPagination/MainPagination";
import Subscribe from "../../components/Subscribe/Subscribe";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page");
  const [page, setPage] = useState(
    Number(currentPage) > 1 ? Number(currentPage) : 1
  );
  const { data, isLoading, isFetching } = useGetItemsQuery(page);

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

      {data && (
        <>
          {isLoading ? (
            <Loader />
          ) : (
            <ItemsList items={data.data} isLoading={isFetching} />
          )}
        </>
      )}
      {data && (
        <MainPagination
          handleChangePage={handleChangePage}
          page={page}
          totalPages={data.meta.pagination.pageCount}
        />
      )}
      <Subscribe />

      <ButtonUp />
    </>
  );
}
