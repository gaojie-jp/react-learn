import React, { useEffect, useState } from "react";
//import ColorfullMessage from "./components/ColorfullMessage";
import { ColorfullMessage } from "./components/ColorfullMessage";

//React Component専用のファイルをjsxにする
const App = () => {
  console.log("最初");
  //Stateを学ぶ
  /**
   * 配列の分割代入：
   * num:Stateの変数
   * setNum：Stateを更新しに行く関数名
   * useState(0):初期値を0にする
   * num,showFaceFlgが変わるたびに、再レンダリングする
   */
  const [num, setNum] = useState(0);
  const [showFaceFlg, setShowFaceFlg] = useState(false);

  const onClickButton = () => {
    setNum(num + 1);
  };
  /** 再レンダリングによる
   * if文の処理と競合し、
   * onClickShowFlgが効かなくなる
   * それを対策するために、 useEffectを使用する
   */
  const onClickShowFlg = () => {
    setShowFaceFlg(!showFaceFlg);
  };
  /**
   * 処理の関心を分離したい時に利用
   * useEffectの
   * 第2引数に[]を設定すると
   * 最初の時だけ、中の処理が通る
   * 第2引数に[num]を設定すると
   * numが変わる度に処理が通る
   */
  useEffect(() => {
    // console.log("useEffect");
    if (num % 3 === 0 && num > 0) {
      //showFaceFlgがfalseの場合、後ろを実行
      showFaceFlg || setShowFaceFlg(true);
    } else {
      //showFaceFlgがtrueの場合、後ろを実行
      showFaceFlg && setShowFaceFlg(false);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);
  /**
   * num のみ関心したい。エラーを解除すうｒために、
   * eslintで全体を設定する場合、下記
   *eslint react-hooks/exhauslive-deps:off
   * or　ここのみ、警告を消したい場合
   * 45行目
   */

  /**return の中で、javascriptを使いたい場合
   * {}で記載する
   */
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfullMessage color="blue">お元気ですか？</ColorfullMessage>
      <ColorfullMessage color="pink">元気です!</ColorfullMessage>
      <button onClick={onClickButton}>カウントアップ</button>
      <br />
      <button onClick={onClickShowFlg}>on/off</button>
      <p>{num}</p>
      {showFaceFlg && <p>('ω')ノ</p>}
    </>
  );
};

//ほかのファイルにも使いたい場合、exportする
export default App;
