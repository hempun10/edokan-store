import { Product } from "@/types/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async ({
  categoryId,
  colorId,
  sizeId,
  isFeatured,
}: Query): Promise<Product[]> => {
  // Create an array to hold the query parameters
  const queryParams = [];

  // Add each query parameter to the array if it exists
  if (categoryId) queryParams.push(`categoryId=${categoryId}`);
  if (colorId) queryParams.push(`colorId=${colorId}`);
  if (sizeId) queryParams.push(`sizeId=${sizeId}`);
  if (isFeatured !== undefined) queryParams.push(`isFeatured=${isFeatured}`);

  // If there are any query parameters, join them with "&" and append to the URL
  const urlWithQuery =
    queryParams.length > 0 ? `${URL}?${queryParams.join("&")}` : URL;

  // Make the fetch request with the constructed URL
  const res = await fetch(urlWithQuery);
  return res.json();
};

export default getProducts;
