import "./education.scss";
const Education = () => {
  return (
    <>
      <section className="education-container">
        <article className="title-wrapper">
          <h2 className="title">Education</h2>
        </article>

        <div class="timewrapper">
          <ul class="sessions">
            <li>
              <div class="time">Bachelor Degree in Computer Science, Royal University of Phnom Penh</div>
              <p>2021-Present</p>
            </li>
            <li>
              <div class="time">High school diploma, Hun Sen Phnom srouch high school</div>
              <p>2017-2020</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Education;
