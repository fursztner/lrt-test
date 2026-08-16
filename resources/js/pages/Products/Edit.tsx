import { useForm, usePage } from '@inertiajs/react';

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

export default function Edit() {
  const { product } = usePage<{ product: Product }>().props;

  const { data, setData, put, errors } = useForm({
    name: product.name,
    price: product.price,
    stock: product.stock,
  });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    put(`/products/${product.id}`);
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Edit Product</h1>

      <form onSubmit={submit} className="space-y-4">
        <input
          className="w-full border p-2 rounded"
          value={data.name}
          onChange={e => setData('name', e.target.value)}
        />

        <input
          className="w-full border p-2 rounded"
          value={data.price}
          onChange={e => setData('price', e.target.value)}
        />

        <input
          className="w-full border p-2 rounded"
          value={data.stock}
          onChange={e => setData('stock', e.target.value)}
        />

        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
          Update
        </button>
      </form>
    </div>
  );
}
