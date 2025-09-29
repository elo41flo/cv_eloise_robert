export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node JS"];
  return (
    <section>
      <h2>Compétences</h2>
      <ul>{skills.map(s => <li key={s}>{s}</li>)}</ul>
    </section>
  );
}