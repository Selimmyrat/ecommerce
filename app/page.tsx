import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <Container className="bg-shop-light-pink">
      <h2 className="text-2xl font-bold">Home</h2>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
        reprehenderit illo delectus, deserunt odit nesciunt! Excepturi
        dignissimos natus sapiente culpa? Ratione veritatis nam corporis rerum
        suscipit aut nostrum nobis ipsam?
      </p>
      <Button>Check out</Button>
    </Container>
  );
};
export default Home;
