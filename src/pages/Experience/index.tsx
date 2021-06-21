import React from "react";
import MyExperience from "@components/Experience";
import PageHead from "@components/PageHead";

function ExperiencePage() {
  return (
    <>
      <div id="page-profile__experience">
        <PageHead title="My Experience" />
        <MyExperience />
      </div>
    </>
  );
}

export default ExperiencePage;
