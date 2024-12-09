import React, { useState, ChangeEvent, FormEvent, FC } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { DashboardLayout } from "../../Layout";
import { BlogTypes } from "../../types";
import { AddBlogApi } from "../../services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";

interface BlogFormProps {}

export const categories = [
  {
    id: 1,
    value: "Latest article",
  },
  {
    id: 2,
    value: "Industry news",
  },
];
const alltags = [
  "Featured",
  "Best Practices",
  "Product News",
  "Announcements",
  "Founders",
  "Data",
  "Case Studies",
];
const AddBlog: FC<BlogFormProps> = () => {
  const navigate = useNavigate();
  const [tagList, setTagList] = useState(alltags);
  const [previewImg, setPreviewImg] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [featuredImage, setFeaturedImage] = useState<File | null>(null);
  const [urlSlug, setUrlSlug] = useState<string>("graphic-design-trends");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState<string>("");
  const [dateCreated, setDateCreated] = useState<string>("2015-04-06");
  const [status, setStatus] = useState<string>("Unpublished");
  const [author, setAuthor] = useState<string>("");
  const [excerpt, setExcerpt] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [categoryId, setCategoryId] = useState<any>("");
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setPreviewImg(imageURL);
      setFeaturedImage(file);
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const valueId = categories.find(
      (category) => category.value === selectedValue
    )?.id;
    if (valueId) {
      setCategoryId(valueId);
    }
  };

  const handleAddTag = (tag: string): void => {
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag]);
      const filteredOutTag = tagList.filter((_tag) => _tag !== tag);
      setTagList(filteredOutTag);
    }
  };

  const handleRemoveTag = (tag: string): void => {
    setTags(tags.filter((t) => t !== tag));
    setTagList([...tagList, tag]);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    if (featuredImage) {
      formData.append("featured_image", featuredImage);
    }
    formData.append("post_content", content);
    tags.forEach((tag) => {
      formData.append("tags[]", tag);
    });
    formData.append("date_created", dateCreated);
    formData.append("blog_excerpt", excerpt);

    formData.append("category_id", categoryId);

    try {
      const response = await AddBlogApi(formData);
      if (response) {
        toast.success("Blog added successfully");
        navigate("/blog");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const isValid =
    title !== "" &&
    featuredImage &&
    content !== "" &&
    tags.length > 0 &&
    excerpt !== "";

  return (
    <DashboardLayout>
      <form onSubmit={handleSubmit}>
        <div className="shadow-xl p-3 bg-white h-[400px]">
          <div>
            {/* Blog Title */}
            <label className="block text-gray-600 text-sm font-medium mb-2 my-8">
              BLOG TITLE
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
              className="w-full bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 text-black placeholder-gray-400"
            />
          </div>

          {/* Blog Post Content */}
          <div className="mt-4">
            <label className="block text-gray-600 text-sm font-medium mb-2 my-8">
              BLOG POST CONTENT
            </label>
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              className="border-[#E1E1E1] h-40"
            />
          </div>
        </div>

        <div className="shadow-xl p-3 bg-white mt-8">
          {/* Featured Image */}
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2 my-5">
              BLOG FEATURED IMAGE
            </label>
            {previewImg && (
              <img
                src={previewImg}
                alt="Featured"
                className="w-40 h-40 object-cover mb-4 border-b-4 border-blue-500"
              />
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="text-sm text-gray-500 border-b-2 border-gray-400 focus:border-gray-600 focus:ring-0 outline-none placeholder-transparent max-w-full pb-5"
            />
          </div>

          {/* Blog URL Slug
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2 my-10">
              BLOG URL SLUG
            </label>
            <input
              type="text"
              value={urlSlug}
              onChange={(e) => setUrlSlug(e.target.value)}
              className="w-1/2 bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 text-black placeholder-gray-400"
            />
          </div> */}

          {/* Tags */}
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2 my-10">
              TAGS
            </label>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {tags.length > 0 ? (
                tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-500 text-white rounded-full flex items-center gap-2"
                  >
                    {tag}
                    <button
                      onClick={() => handleRemoveTag(tag)}
                      type="button"
                      className="text-sm text-white hover:text-gray-200"
                    >
                      &times;
                    </button>
                  </span>
                ))
              ) : (
                <span className="text-gray-400">Select a tag below</span>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1/2 bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 text-black placeholder-gray-400" />
              {/* <button
                onClick={handleAddTag}
                type="button"
                className="px-3 py-1 bg-blue-500 text-white rounded-md"
              >
                Add
              </button> */}
            </div>
            <div className="flex flex-wrap basis-10 w-[300px] gap-5 mt-7">
              {tagList.map((tag) => (
                <div
                  className="px-3 py-1 cursor-pointer border border-gray-300 hover:bg-blue-500 hover:text-white text-gray-500 rounded-full "
                  onClick={() => handleAddTag(tag)}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* Date Created */}
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2 my-10">
              DATE CREATED
            </label>
            <input
              type="date"
              value={dateCreated}
              onChange={(e) => setDateCreated(e.target.value)}
              className="w-1/2 bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 text-black placeholder-gray-400"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2 my-10">
              STATUS
            </label>
            <input
              type="text"
              value={status}
              readOnly
              onChange={(e) => setStatus(e.target.value)}
              className="w-1/2 bg-transparent border-b-2 text-gray-300  border-gray-400 focus:outline-none focus:border-blue-500  placeholder-gray-400"
            />
          </div>

          {/* Author */}
          {/* <div>
            <label className="block text-gray-600 text-sm font-medium mb-2 my-10">
              AUTHOR
            </label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-1/2 bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 text-black placeholder-gray-400"
            />
          </div> */}
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2 my-10">
              Category
            </label>
            <select
              name=""
              id=""
              onChange={handleSelectChange}
              className="w-1/2 bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 text-black placeholder-gray-400"
            >
              {categories.map((item) => (
                <option value={item?.value}>{item.value}</option>
              ))}
            </select>
            {/* <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-1/2 bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 text-black placeholder-gray-400"
            /> */}
          </div>

          {/* Blog Excerpt */}
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2 my-10">
              BLOG EXCERPT
            </label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="e.g. Enter any size of text description here"
              className="w-1/2 bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 text-black placeholder-gray-400"
            />
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="action-btns flex flex-row gap-2 mt-4">
          <button
            type="submit"
            disabled={!isValid}
            className={`py-2 px-4 ${
              !isValid ? "opacity-50" : "opacity-100"
            } bg-[#5D7BF7] border border-white text-white text-[14px]`}
          >
            {loading ? <PulseLoader size={8} color="white" /> : "Save"}
          </button>
          <button
            type="button"
            className="py-2 px-4 bg-[#E0E0E0] border border-white text-black text-[14px]"
          >
            Cancel
          </button>
        </div>
      </form>
    </DashboardLayout>
  );
};

export default AddBlog;
