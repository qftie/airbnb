import styled from "styled-components";

export const LeftWrapper = styled.div`
    flex: 1;
    color: ${props => props.theme.color.primaryColor}; 
    // 可以改变svg颜色，在模板字符串中使用props传递theme.color
    cursor: pointer;
    margin-left: 25px;
`