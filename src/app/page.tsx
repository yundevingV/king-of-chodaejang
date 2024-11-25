"use client";

import { useEffect, useState } from "react";
import Layout from "./layout";

const WarningPage = () => (
  <Layout>
    <h1 className="text-5xl font-bold text-red-600">⚠️ 警告!</h1>
    <p className="mt-4 text-xl text-red-800">您的个人信息已被泄露!</p>
    <p className="mt-2 text-lg">
      请立即采取措施。 <br />
      请检查以下信息。
    </p>
    <ul className="mt-4 list-disc list-inside">
      <li>我吃了一个蓝色的苹果在天空中跳舞。</li>
      <li>猫咪穿着西装去参加月球派对。</li>
      <li>今天的风是粉红色的，像棉花糖一样。</li>
      <li>海洋里游泳的鱼会唱歌给星星听。</li>
    </ul>
    <p className="mt-4 text-lg">请尽快加强安全!</p>
  </Layout>
);

interface MainPageProps {
  onFishing: () => void;
}
const MainPage = ({ onFishing }: MainPageProps) => (
  <Layout>
    <p>🌅 2024년아 가지마 ~~</p>
    <p>
      송년회 개최 모두들 치열하게 살아온 2024년을 보내주는 의미로 송년회를
      개최하고자 합니다.
    </p>
    <p>📍 장소 : 노량진 형제수산</p>
    <p> 🕚 시간 : 오후 6시 이후 (?)</p>
    <p> 📅 날짜 : 12월 첫째주 (요일은 투표)</p>
    <input type="date" />
    <button onClick={onFishing}>날짜선택하기</button>
    감사합니다.
  </Layout>
);

export default function Home() {
  const [showWarning, setShowWarning] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWarning(false);
    }, 7777);

    return () => clearTimeout(timer);
  }, []);
  const handleFishing = () => {
    alert(
      "미안합니다 날짜는 선택할 수 없습니다 ㅋ 백엔드 개발자가 되어주셔서 도와주세요"
    );
  };
  return showWarning ? <WarningPage /> : <MainPage onFishing={handleFishing} />;
}
