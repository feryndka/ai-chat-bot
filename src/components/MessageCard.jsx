import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MessageCard = ({ role, message }) => {
  return (
    <div
      className={`rounded-lg px-4 py-2 mb-2 max-w-md w-fit whitespace-pre-line ${
        role === "user"
          ? "bg-blue-500 text-white self-end"
          : "bg-gray-200 text-black dark:bg-gray-800 dark:text-white"
      }`}
    >
      <ReactMarkdown
        className="prose dark:prose-invert"
        remarkPlugins={[remarkGfm]}
      >
        {message}
      </ReactMarkdown>
    </div>
  );
};

export default MessageCard;
