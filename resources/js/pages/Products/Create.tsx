import { useForm } from '@inertiajs/react';

export default function Create() {
  const { data, setData, post, errors } = useForm({
    name: '',
    price: '',
    stock: '',
  });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    post('/products');
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Create Product</h1>

      <form onSubmit={submit} className="space-y-4">
        <input
          className="w-full border p-2 rounded"
          placeholder="Name"
          value={data.name}
          onChange={e => setData('name', e.target.value)}
        />

        <input
          className="w-full border p-2 rounded"
          placeholder="Price"
          value={data.price}
          onChange={e => setData('price', e.target.value)}
        />

        <input
          className="w-full border p-2 rounded"
          placeholder="Stock"
          value={data.stock}
          onChange={e => setData('stock', e.target.value)}
        />

        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
          Save
        </button>
      </form>
    </div>
  );
}
