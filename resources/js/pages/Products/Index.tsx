import { Link, usePage } from '@inertiajs/react';

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

export default function Index() {
  const { products } = usePage<{ products: Product[] }>().props;
  

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>

        <Link
          href="/products/create"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Create
        </Link>
      </div>

      <table className="w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow rounded-lg table-auto">
        <thead>
          <tr className="border-b bg-gray-100 dark:bg-gray-700">
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-right">Price</th>
            <th className="p-3 text-right">Stock</th>
            <th className="p-3 text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map(product => (
            <tr key={product.id} className="border-b">
              <td className="p-3">{product.name}</td>
              <td className="p-3 text-right">{product.price}</td>
              <td className="p-3 text-right">{product.stock}</td>

              <td className="p-3 flex gap-3">
                <Link
                  href={`/products/${product.id}/edit`}
                  className="text-blue-600 text-right"
                >
                  Edit
                </Link>

                <Link
                  href={`/products/${product.id}`}
                  method="delete"
                  as="button"
                  className="text-red-600 text-right"
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    
  );
}
