import "./education.scss";
const Education = () => {
  return (
    <>
      <section className="education-container">
        <article className="title-wrapper">
          <h2 className="title">Education</h2>
        </article>

        <main class="timeline-wrapper">
          <ul class="sessions">
            <li>
              <h3 class="school">Bachelor Degree in Computer Science, Royal University of Phnom Penh</h3>
              <p>2021-Present</p>
            </li>
            <li>
              <h3 class="school">High school diploma, Hun Sen Phnom srouch high school</h3>
              <p>2017-2020</p>
            </li>
          </ul>
        </main>
      </section>
    </>
  );
};

export default Education;
