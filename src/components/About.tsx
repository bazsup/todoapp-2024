import reactClass from "../assets/react-class.png";
import nvmScreenshot from "../assets/nvm_result_screenshot.png";

function About() {
  return (
    <div className="max-w-screen-lg mx-auto flex flex-col gap-4">
      <h1 className="text-4xl font-bold">
        About the class{" "}
        <span className="text-blue-500 font-bold">
          React from unknown to novice 🤩
        </span>
      </h1>
      <p className="text-lg mt-4 indent-16">
        โดยในคลาสนี้จะมีเนื้อหาครอบคลุมตั้งแต่พื้นฐานของการพัฒนา web ด้วย HTML &
        CSS & JS และขยับมา ใช้ React เพื่อเพิ่มประสิทธิภาพในการเขียน
        รวมถึงประสิทธิภาพการทำงานของ web ที่เราพัฒนาด้วย และยังมี workshop
        ให้ทำเพื่อให้เห็นภาพชัดเจนมากขึ้นครับ
      </p>
      <div>
        <img src={reactClass} className="w-full md:w-2/3 mx-auto" />
      </div>
      <div className="flex flex-col gap-4 pb-12">
        <h2 className="text-2xl font-bold mt-2">📝 Objective:</h2>
        <ul className="list-disc list-inside">
          <li>As it was</li>
          <li>Basic HTML &amp; CSS&nbsp;</li>
          <li>Basic DOM</li>
          <li>Vanila JS&nbsp;</li>
          <li>Basic JS</li>
          <li>Basic TS</li>
          <li>
            Greeting React&nbsp;
            <ul className="list-disc list-inside">
              <li>JSX</li>
              <li>Conventional</li>
              <li>
                Function component
                <ul className="list-disc list-inside">
                  <li>props and state&nbsp;</li>
                  <li>event props</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>React routing dom</li>
          <li>Higher Order Component</li>
          <li>
            Hook
            <ul className="list-disc list-inside">
              <li>useState</li>
              <li>life cycle</li>
              <li>useEffect</li>
              <li>useRef</li>
              <li>useMemo</li>
              <li>useCallback</li>
              <li>useContext</li>
            </ul>
          </li>
          <li>Integrate to API (by Axios)</li>
          <li>Component Testing</li>
        </ul>
        <h2 className="text-2xl font-bold mt-2">🤓 คลาสนี้เหมาะกับใคร</h2>
        <ul className="list-disc list-inside">
          <li>
            เหมาะกับผู้ที่สนใจการพัฒนาเว็บไซต์ตั้งแต่เริ่มต้นด้วย HTML CSS JS
            จนไปถึงการใช้ React เพื่อเพิ่มประสิทธิภาพในการทำงานของ web มากขึ้น
          </li>
        </ul>
        <h2 className="text-2xl font-bold mt-2">🥨 PrereQuisites:</h2>
        <ul className="list-disc list-inside">
          <li>
            NVM (Node Version Manager)&nbsp;
            <ul className="list-disc list-inside">
              <li>Mac can install by Brew</li>
              <li>
                Window&nbsp;{" "}
                <a
                  href="https://github.com/coreybutler/nvm-windows/releases"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/coreybutler/nvm-windows/releases
                </a>
                &nbsp; (choose nvm-setup.exe)
              </li>
            </ul>
          </li>
          <li>VS code</li>
          <li>Git</li>
        </ul>
        <div>Run NVM in terminal and see result</div>
        <img src={nvmScreenshot} alt="" className="w-full md:w-2/3 mx-auto" />
        <div>
          <span className="font-bold">🗓️ วันที่สอน</span>:&nbsp; พฤหัส - ศุกร์
          ที่ 6 - 7 มิถุนายน&nbsp; เวลา 9:00 - 17:00 น.
        </div>
        <div>
          <span className="font-bold">🗼สถานที่:</span>&nbsp; Tipco Tower
        </div>
        <div>
          🙋🏻รอบนี้รับจำกัดที่ 30 คน ขอสงวนสิทธ์ให้กับน้องๆ สหกิจก่อนครับ
          หากผู้เรียนคนไหนเป็นสหกิจ รบกวนวงเล็บต่อท้ายว่า (สหกิจ) ด้วยน้าาาาา
        </div>
      </div>
    </div>
  );
}

export default About;
