import React from "react";
import { LeftWrapper } from "./style";
import IconLogo from "@/assets/svg/icon_logo";
import { useNavigate } from "react-router-dom";

const HeaderLeft = () => {
  const navigate = useNavigate();
  const logoClickHandler = () => {
    navigate("/home");
  };

  return (
    <LeftWrapper>
      <div className="logo" onClick={logoClickHandler}>
        <IconLogo />
      </div>
    </LeftWrapper>
  );
};

export default HeaderLeft;
