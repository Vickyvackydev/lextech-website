import React, { useState, ChangeEvent, FormEvent, FC } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { DashboardLayout } from "../../Layout";

interface BlogFormProps {}

const AddBlog: FC<BlogFormProps> = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [featuredImage, setFeaturedImage] = useState<string | null>(null);
  const [urlSlug, setUrlSlug] = useState<string>("graphic-design-trends");
  const [tags, setTags] = useState<string[]>(["Graphics", "Branding"]);
  const [tagInput, setTagInput] = useState<string>("");
  const [dateCreated, setDateCreated] = useState<string>("2015-04-06");
  const [status, setStatus] = useState<string>("Published");
  const [author, setAuthor] = useState<string>("John Doe");
  const [excerpt, setExcerpt] = useState<string>("");

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setFeaturedImage(imageURL);
    }
  };

  const handleAddTag = (): void => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tag: string): void => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = {
      title,
      content,
      featuredImage,
      urlSlug,
      tags,
      dateCreated,
      status,
      author,
      excerpt,
    };

    console.log("Form Submitted:", formData);
    // Add your API call or submission logic here
  };

  return (
    <DashboardLayout>
      <form onSubmit={handleSubmit}>
        <div className="shadow-xl p-3 bg-white">
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
              className="border-[#E1E1E1]"
            />
          </div>
        </div>

        <div className="shadow-xl p-3 bg-white mt-8">
          {/* Featured Image */}
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2 my-5">
              BLOG FEATURED IMAGE
            </label>
            {featuredImage && (
              <img
                src={featuredImage}
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

          {/* Blog URL Slug */}
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
          </div>

          {/* Tags */}
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2 my-10">
              TAGS
            </label>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {tags.map((tag) => (
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
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                placeholder="Add a tag"
                className="w-1/2 bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 text-black placeholder-gray-400"
              />
              <button
                onClick={handleAddTag}
                type="button"
                className="px-3 py-1 bg-blue-500 text-white rounded-md"
              >
                Add
              </button>
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
              onChange={(e) => setStatus(e.target.value)}
              className="w-1/2 bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 text-black placeholder-gray-400"
            />
          </div>

          {/* Author */}
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2 my-10">
              AUTHOR
            </label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-1/2 bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 text-black placeholder-gray-400"
            />
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
        <div className="action-btns flex flex-row-reverse gap-2 mt-4">
          <button
            type="submit"
            className="py-2 px-4 bg-[#5D7BF7] border border-white text-white text-[14px]"
          >
            Save
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
