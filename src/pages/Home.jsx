import Card from "../components/Card";

function Home() {
  return (
    <Card>
      <img
        src="https://feelman.info/html/anri/img/img1.jpg"
        alt="coffee_Late"
        className="w-full"
      />
      <p className="text-2xl font-light text-center">Cup of Late-Coffee beside the window</p>
      <p className="text-sm font-thin text-center pt-2">from Home</p>
    </Card>
  );
}

export default Home;
