import BlogCard from "@/components/BlogCard";

const Home = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return (
    <div>
      {data.map((item, index) => {
        return (
          <BlogCard
            key={index}
            thumbnail={item.image}
            title={item.title}
            desc={item.description}
            price={item.price}
          />
        );
      })}
    </div>
  );
};

export default Home;
