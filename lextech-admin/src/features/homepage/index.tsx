import React, { useEffect, useState } from "react";
import { DashboardLayout } from "../../Layout";
import UploadSegMent from "../../components/uploadsegment";
import { fakedata } from "../../constants";
import Preloader from "../../ui/preloader";
import ProjectUpload from "../../components/uploadsegment/components/ProjectUpload";
import AboutUpload from "../../components/uploadsegment/components/AboutUpload";
import PartnerUpload from "../../components/uploadsegment/components/PartnerUpload";



function HomePage() {
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
            title="Hero Section"
            data={fakedata.slice(0, 4)}
          />
          <ProjectUpload
            setOpen={() => {}}
            title="Project Section"
            data={fakedata.slice(0, 4)}
          />
          <PartnerUpload
            setOpen={() => {}}
            title="Partners Logo"
            data={fakedata.slice(0, 4)}
          />
          <AboutUpload
            setOpen={() => {}}
            title="About Section"
            data={fakedata.slice(0, 4)}
          />
        </div>
      )}
    </DashboardLayout>
  );
}

export default HomePage;
