type PropsType = { title: string; };

const About = (props: PropsType) => {
  return (
    <div className="card card-body">
      <h2>Abou {props.title}</h2>
    </div>
  );
};

export default About;
