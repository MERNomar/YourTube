import Downloader from "./components/Downloader";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="h-[100%] min-h-[100%] w-[100vw] flex flex-col justify-between box-border overflow-hidden items-center text-center">
        <main className="flex items-center justify-center font-sans appearance-none h-96 lg:w-[50%] lg:mt-12 w-[90%]">
          <Downloader />
        </main>
        <Footer />
      </div>
    </>
  );
}
export default App;
