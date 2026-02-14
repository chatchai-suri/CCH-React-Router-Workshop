import Card from "../components/Card";

function NotFound() {
  return (
    <Card>
      <div className="text-center pt-6">
        <h1 className="text-[36px] font-light border border-dotted border-[#DCDCDC] p-3">404 PAGE NOT FOUND</h1>
        <p className="p-12 pb-1">The requested page could not be found or it is currently unavailable. Please click here to go back to our home page or use the search form below.</p>
      </div>
    </Card>
  );
}

export default NotFound;
