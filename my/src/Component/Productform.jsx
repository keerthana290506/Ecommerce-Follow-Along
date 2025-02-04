import axios from "axios";
import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

export const Productform = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [tag, setTag] = useState("");
  const [email, setEmail] = useState("");

  const [preview, setPreview] = useState([]);
  const [image, setImage] = useState([]);

  const handleImage = (e) => {
    const files = Array.from(e.target.files);
    setImage((prev) => [...prev, ...files]);

    const imgPreviews = files.map((file) => URL.createObjectURL(file));
    setPreview((prev) => [...prev, ...imgPreviews]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("stock", stock);
    formData.append("tag", tag);

    image.forEach((img) => formData.append("image", img, img.name));

    try {
      const res = await axios.post("http://localhost:5000/create-product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 200) {
        alert("Product Added Successfully");

        setEmail("");
        setName("");
        setPrice("");
        setDescription("");
        setCategory("");
        setStock("");
        setTag("");
        setImage([]);
        setPreview([]);
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">Email</label>
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter Your Email"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">Product Name</label>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Enter Product Name"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">Product Price</label>
          <input
            type="number"
            required
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            placeholder="Enter Product Price"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">Product Description</label>
          <input
            type="text"
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder="Enter Description"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">Product Category</label>
          <input
            type="text"
            required
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            placeholder="Enter Category"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">Product Stock</label>
          <input
            type="number"
            required
            onChange={(e) => setStock(e.target.value)}
            value={stock}
            placeholder="Enter Stock"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">Product Tag</label>
          <input
            type="text"
            required
            onChange={(e) => setTag(e.target.value)}
            value={tag}
            placeholder="Enter Tag"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">Product Image</label>
          <input
            type="file"
            multiple
            required
            onChange={handleImage}
            id="upload"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4 flex items-center space-x-4">
          <AiOutlinePlusCircle className="text-blue-500 text-2xl cursor-pointer hover:text-blue-700" />
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {preview.map((img, index) => (
            <img
              src={img}
              key={index}
              alt="preview"
              className="h-24 w-auto rounded-md border border-gray-200"
            />
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
