import React, { useEffect } from "react";
import { useState } from "react";
import { RightWrapper } from "./style";
import IconProfileAvatar from "@/assets/svg/icon-profile-avatar";
import IconGlobal from "@/assets/svg/icon-global";
import IconProfileMenu from "@/assets/svg/icon-profile-menu";

const HeaderRight = () => {
  const [showPanel, setShowPanel] = useState(false);

  /* 定义副作用代码 */
  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false);
    }
    // 给 window 对象添加一个点击事件监听器，当发生点击事件时调用 windowHandleClick 函数，第三个参数为 true 表示捕获阶段调用，防止点击profile时事件冒泡引起的问题
    window.addEventListener("click", windowHandleClick, true);
    // 在该 useEffect 函数返回一个函数，用于在组件卸载时移除点击事件监听器,防止内存泄漏等问题
    return () => {
      window.removeEventListener("click", windowHandleClick, true);
    };
  }, []);
  const profileClickHandler = () => {
    setShowPanel(true);
  };
  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>

      <div className="profile" onClick={profileClickHandler}>
        <IconProfileMenu />
        <IconProfileAvatar />

        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
              <div className="item rent">出租房源</div>
              <div className="item experience">体验</div>
              <div className="item help">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
};

export default HeaderRight;
