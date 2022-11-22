import ExpCard from "../Cards/ExpCard/ExpCard";
import ExpCardData from "../data/ExpCardData";

const Exp = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Professional Work Experiences</h1>
      <div className="project-container">
        {ExpCardData.map((value, index) => {
          return (
            <ExpCard
              key={index}
              company={value.company}
              project={value.project}
              role={value.role}
              duties={value.duties}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Exp;
