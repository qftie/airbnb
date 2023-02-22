import styled from "styled-components"


export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${props => props.theme.color.textColor};
  font-weight: 600;

  .btns {
    display: flex;
    align-items: center;

    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 22px;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }

  .profile {
    position: relative;
    display: flex;
    width: 77px;
    height: 42px;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    margin-right: 24px;
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow};

    .panel {
        position: absolute;
        right: 0;
        top: 60px;
        width: 240px;
        background-color: #fff;
        box-shadow: 0px 0px 6px 4px rgba(0,0,0,0.1);
        border-radius: 6px;
        color: #666;
        
        .top, .bottom {
            padding: 10px 0;

            .item {
                height: 40px;
                line-height: 40px;
                padding: 0 16px;

                &:hover {
                    background-color: #eee;
                }
            }
        }
        .top {
                border-bottom: 1px solid #ddd;
            }
    }

    /* transition: box-shadow 250ms ease; // 要过渡的属性 花费时间 运动曲线 何时开始
    &:hover {
        box-shadow: 0 2px 4px rgba(0,0,0,.18);
    } */

  }
`