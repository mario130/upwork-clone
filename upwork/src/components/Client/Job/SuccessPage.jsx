import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "../../shared/footer";
import Nav from "../../shared/navbar";

const SuccessPage = (props) => {
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setRedirect(true), 2000)

    return () => {
      clearTimeout(id)
    }
  }, [])
  return (

    redirect ?
      <Redirect to="/job-list" /> :
      <>
        <Nav />
        <div className="bg-bodyGray py-20">
          <div className="container  mx-auto max-w-5xl">
            <div className="text-5xl py-8 font-extrabold text-center bg-white pt-6 pb-20 border-hair border rounded">
              <p>Congratulation! Your job is now Live</p>
            </div>
          </div>
        </div>
        <Footer />
      </>

  );
};

export default SuccessPage;
