import BlogCard from "@/components/BlogCard";

const Home = () => {
  return (
    <div>
      <BlogCard
        thumbnail={
          "https://cdns.klimg.com/newshub.id/news/2017/02/03/118092/663x442-5-tips-traveling-seru-yang-wajib-dilakukan-saat-musim-hujan-170203z.jpg"
        }
        title={"Around The World"}
        desc={"Card Description"}
      />
      <BlogCard
        thumbnail={
          "https://cdns.klimg.com/newshub.id/news/2017/02/03/118092/663x442-5-tips-traveling-seru-yang-wajib-dilakukan-saat-musim-hujan-170203z.jpg"
        }
        title={"Around The World"}
        desc={"Card Description"}
      />
      <BlogCard
        thumbnail={
          "https://cdns.klimg.com/newshub.id/news/2017/02/03/118092/663x442-5-tips-traveling-seru-yang-wajib-dilakukan-saat-musim-hujan-170203z.jpg"
        }
        title={"Around The World"}
        desc={"Card Description"}
      />
    </div>
  );
};

export default Home;
