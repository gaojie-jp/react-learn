import React from "react";

/**
 * 下記の場合、分割代入のimport方法
 * import { ColorfullMessage } from "./components/ColorfullMessage";
 * 名称の間違いを防ぐのはこちらをおすすめ
 */
export const ColorfullMessage = (props) => {
  // console.log("カラフル");
  //propsの分割代入
  const { color, children } = props;
  const contentStyle = {
    //colorに対して、colorを代入するとき
    // color: color,
    //color,で省略できる
    color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

/**
 * 下記の場合、import方法
 * import ColorfullMessage from "./components/ColorfullMessage";
 */
//export default ColorfullMessage;
