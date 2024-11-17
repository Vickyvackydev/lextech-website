import React, { useEffect, useState } from "react";
import { DashboardLayout } from "../../Layout";
import UploadSegMent from "../../components/uploadsegment";
import { fakedata } from "../../constants";
import Preloader from "../../ui/preloader";

function AboutPage() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const loader = setTimeout(() => {
      setLoader(false);
    }, 2000);

    return () => clearTimeout(loader);
  }, []);
  return (
    <DashboardLayout>
      {loader ? (
        <Preloader />
      ) : (
        <div className="flex flex-col gap-y-7">
          <UploadSegMent
            setOpen={() => {}}
            title="Header section"
            data={fakedata.slice(0, 4)}
          />
          <UploadSegMent
            setOpen={() => {}}
            title="Our solution"
            data={fakedata.slice(0, 4)}
          />
          <UploadSegMent
            setOpen={() => {}}
            title="Minds behind Lextech"
            data={fakedata.slice(0, 4)}
          />
        </div>
      )}
    </DashboardLayout>
  );
}

export default AboutPage;
