import ContactUs from '@/components/contact-us';

const Home = () => {
  return (
    <div className="h-screen max-w-2xl mx-auto flex justify-center items-center">
      <div className="grid grid-cols-2 gap-4 p-4 bg-white shadow-md rounded-md border border-purple-100">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Please input your NUS Email</h1>
        </div>

        <ContactUs />
      </div>
    </div>
  );
};

export default Home;