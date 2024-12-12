import React from 'react';
import '../styles/AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <main className="main-content">
        <section className="about-section">
          <h1>About Us</h1>
          <h2>마음의 방향을 찾는 당신의 여정에 동행하는 마음나침반</h2>
          <p>
            마음나침반은 다이어리 기록 감정 분석을 통해 여러분의 마음을 이해하고,
            감정의 변화를 통찰할 수 있도록 돕는 인공지능 자연어처리 기술 기반의 다이어리 서비스입니다.
          </p>
        </section>

        <section className="features">
          <div className="feature">
            <h3>자연어처리 기술 기반</h3>
            <p>
              마음나침반은 자연어처리 기술을 기반으로 한국어에 최적화된 KOLECTRA 모델을 활용해 텍스트 속 감정과 패턴을 깊이 분석합니다.
            </p>
          </div>
          <div className="feature">
            <h3>간편한 인터페이스</h3>
            <p>
              마음나침반은 사용자 편의를 고려하여 매일의 감정을 기록할 수 있는 간소화된 과정을 제공해 누구나 부담 없이 사용할 수 있습니다.
            </p>
          </div>
          <div className="feature">
            <h3>한눈에 보는 분석 결과</h3>
            <p>
              시각화된 감정 분석 데이터를 통해 스스로의 감정과 패턴을 더욱
              보다 효과적으로 이해할 수 있습니다.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2024 RunningMachine. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default AboutUs;