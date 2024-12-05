"use client";
import ProductItem from "@/components/derived/ProductItem";
import { ProductApiResponse } from "@/types/Products";
import { useEffect, useState } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeGrid as Grid } from "react-window";

const ProductList = ({ data }: { data: ProductApiResponse }) => {
  const [columnCount, setColumnCount] = useState(5);

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
    <div className="h-[100vh] w-full">
      <AutoSizer>
        {({ height, width }) => {
          const columnWidth = Math.floor(width / columnCount);

          return (
            <Grid
              itemData={data}
              columnCount={columnCount}
              columnWidth={columnWidth}
              rowCount={Math.ceil(data.products.length / columnCount)}
              rowHeight={380}
              height={height}
              width={width}
            >
              {({ data, columnIndex, rowIndex, style }) => {
                const index = rowIndex * columnCount + columnIndex;
                const product = data.products[index];
                return (
                  <div style={style} key={product.id}>
                    <ProductItem {...product} />
                  </div>
                );
              }}
            </Grid>
          );
        }}
      </AutoSizer>
    </div>
  );
};

export default ProductList;
