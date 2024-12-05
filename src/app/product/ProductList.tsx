"use client";
import ProductItem from "@/components/derived/ProductItem";
import Pagination from "@/components/functional/Pagination";
import { ProductApiResponse, Products } from "@/types/Products";
import { useEffect, useState } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeGrid as Grid } from "react-window";

const ProductList = ({ data }: { data: ProductApiResponse }) => {
  const [columnCount, setColumnCount] = useState(5);
  const [products] = useState<Products[]>(data.products);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage] = useState<number>(10);

  const lastProductIndex = currentPage * productsPerPage;
  const firtsProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = products.slice(firtsProductIndex, lastProductIndex);

  useEffect(() => {
    const updateColumnCount = () => {
      const width = window.innerWidth;
      if (width >= 1200) {
        setColumnCount(5);
      } else if (width >= 768) {
        setColumnCount(3);
      } else {
        setColumnCount(1);
      }
    };
    updateColumnCount();
    window.addEventListener("resize", updateColumnCount);
  }, []);

  return (
    <div>
      <div className="flex items-center py-4 cursor-pointer">
        <h1 className="text-lg font-semibold   text-secondary pl-4 w-full">
          Men&apos;s Choices
        </h1>
        <Pagination
          totalProducts={data.products.length}
          productsPerPage={productsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
      <div className="h-[110vh] w-full overflow-visible relative ">
        <AutoSizer>
          {({ height, width }) => {
            const columnWidth = Math.floor(width / columnCount);
            return (
              <>
                <Grid
                  itemData={currentProducts}
                  columnCount={columnCount}
                  columnWidth={columnWidth}
                  rowCount={Math.ceil(currentProducts.length / columnCount)}
                  rowHeight={360}
                  height={height}
                  width={width}
                >
                  {({ data, columnIndex, rowIndex, style }) => {
                    const index = rowIndex * columnCount + columnIndex;
                    const product = data[index];

                    return (
                      product?.id && (
                        <div style={style} key={product.id}>
                          <ProductItem {...product} />
                        </div>
                      )
                    );
                  }}
                </Grid>
              </>
            );
          }}
        </AutoSizer>
      </div>
    </div>
  );
};

export default ProductList;
