import React from "react";
import PageHead from "@components/PageHead";
import ProfileInfo from "@components/ProfileInfo";

function InformationPage() {
  return (
    <>
      <div id="page-profile__information">
        <PageHead title="My Information" />
        <ProfileInfo />
      </div>
    </>
  );
}

export default InformationPage;
